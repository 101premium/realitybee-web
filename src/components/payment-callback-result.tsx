// Shared body of the post-payment landing page.
//
// The gateway can land the shopper on either /payment-callback/$reference or,
// depending on how the middleware's REDIRECT_URL is configured, on /$reference
// at the site root (see src/routes/$reference.tsx). Both render this.
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { useCart } from "@/lib/cart";
import { fetchOrderStatus, type TransactionStatusResponse } from "@/lib/order-api";

export function PaymentCallbackResult({
  reference,
  adviceReference,
  paymentReference,
  status,
}: {
  reference: string;
  adviceReference?: string;
  paymentReference?: string;
  status?: string;
}) {
  const clear = useCart((s) => s.clear);

  const [verifying, setVerifying] = useState(true);
  const [result, setResult] = useState<TransactionStatusResponse | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;

    fetchOrderStatus({ data: { reference } })
      .then((response) => {
        if (!active) return;
        setResult(response);
        // The gateway signals success with code "00"; anything else is a decline.
        if (response.code === "00" || response.transactionStatus === "Successful") {
          clear();
        } else {
          setFailed(true);
        }
      })
      .catch(() => {
        if (active) setFailed(true);
      })
      .finally(() => {
        if (active) setVerifying(false);
      });

    return () => {
      active = false;
    };
  }, [reference, clear]);

  const succeeded = !verifying && !failed && status !== "failed";

  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      {verifying ? (
        <>
          <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <h1 className="mt-6 font-display text-4xl">Confirming payment…</h1>
          <p className="mt-3 text-muted-foreground">
            Please wait while we check your transaction with the bank. Do not close this page.
          </p>
        </>
      ) : succeeded ? (
        <>
          <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
          <h1 className="mt-6 font-display text-4xl">Payment confirmed</h1>
          <p className="mt-3 text-muted-foreground">
            Thank you — your order has been placed and a confirmation will be sent to your email.
          </p>
        </>
      ) : (
        <>
          <XCircle className="mx-auto h-16 w-16 text-destructive" />
          <h1 className="mt-6 font-display text-4xl">Payment not confirmed</h1>
          <p className="mt-3 text-muted-foreground">
            {result?.description ??
              result?.message ??
              "We could not confirm your payment. If you were charged, contact us before trying again."}
          </p>
        </>
      )}

      {!verifying && (
        <dl className="mx-auto mt-8 max-w-sm space-y-2 rounded-md border border-border bg-card p-4 text-left text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Reference</dt>
            <dd className="font-mono break-all">{adviceReference ?? reference}</dd>
          </div>
          {(paymentReference ?? result?.paymentReference) && (
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Payment reference</dt>
              <dd className="font-mono break-all">{paymentReference ?? result?.paymentReference}</dd>
            </div>
          )}
          {result?.amount && (
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Amount</dt>
              <dd className="font-mono">{result.amount}</dd>
            </div>
          )}
          {result?.transactionStatus && (
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Status</dt>
              <dd>{result.transactionStatus}</dd>
            </div>
          )}
        </dl>
      )}

      {!verifying && (
        <Link
          to={succeeded ? "/shop" : "/checkout"}
          className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
        >
          {succeeded ? "Continue shopping" : "Back to checkout"}
        </Link>
      )}
    </div>
  );
}

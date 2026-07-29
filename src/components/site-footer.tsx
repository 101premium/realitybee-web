import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Globe2 } from "lucide-react";
import logo from "@/assets/reality-bee-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/85 backdrop-blur text-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-5">
        <div>
          <Link to="/" className="inline-flex items-center">
            <img src={logo.url} alt="Reality Bee Limited" className="h-9 w-auto" />
          </Link>
          <p className="mt-3 text-sm text-foreground/70">
            A Lagos studio for print, brand and fabric — made to order for
            businesses, brands and creatives across Nigeria.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Menu</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-primary">Art Prints</Link></li>
            <li><Link to="/print-designs" className="hover:text-primary">Print Designs</Link></li>
            <li><Link to="/fabric-printing" className="hover:text-primary">Fabric Printing</Link></li>
            <li><Link to="/corporate-branding" className="hover:text-primary">Corporate Branding</Link></li>
            <li><Link to="/branded-gifts" className="hover:text-primary">Branded Gifts</Link></li>
            <li><Link to="/reviews" className="hover:text-primary">Reviews</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Help</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/sizing-framing" className="hover:text-primary">Sizing &amp; framing</Link></li>
            <li><Link to="/made-to-order" className="hover:text-primary">Made-to-order policy</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Policies</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/shipping" className="hover:text-primary">Shipping &amp; Delivery Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:text-primary">Refund &amp; Cancellations Policy</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-primary">Data Protection &amp; Privacy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-primary">Terms &amp; conditions</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>5 Ikosi Road, Oregun, Ikeja, Lagos, Nigeria</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:realitybeeltd@gmail.com" className="hover:text-primary">
                realitybeeltd@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+2349125937437" className="hover:text-primary">+234 912 593 7437</a>
            </li>
            <li className="flex items-center gap-2">
              <Globe2 className="h-4 w-4 shrink-0 text-accent" />
              <a href="https://www.realitybee.com.ng" className="hover:text-primary">www.realitybee.com.ng</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-foreground/60">
        © {new Date().getFullYear()} Reality Bee Limited. All rights reserved.
      </div>
    </footer>
  );
}
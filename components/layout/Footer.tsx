import React from "react";
import Link from "next/link";
import { Label, Body } from "@/components/ui/Typography";

export const Footer = () => {
  return (
    <footer className="bg-surface-pure pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2">
            <span className="font-sans text-2xl font-bold tracking-tight text-on-surface mb-6 block">
              The Curator
            </span>
            <Body className="max-w-sm text-sm text-on-surface/60">
              A digital publication dedicated to the craft of technology and the
              essence of design. We filter the noise to find the signals that
              matter in the digital era.
            </Body>
          </div>

          <div>
            <Label className="block mb-6">Platform</Label>
            <ul className="space-y-4">
              {["About", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm font-serif text-on-surface/60 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Label className="block mb-6">Legal</Label>
            <ul className="space-y-4">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm font-serif text-on-surface/60 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-on-surface/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <Body className="text-[0.7rem] text-on-surface/40 uppercase tracking-wider font-sans font-bold">
            © 2026 THE CURATOR. CRAFTED FOR THE DIGITAL ERA.
          </Body>
          
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <Link 
                key={social} 
                href="#" 
                className="text-[0.7rem] font-sans font-bold uppercase tracking-wider text-on-surface/40 hover:text-primary transition-colors"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

import { Link, useLocation } from "wouter";
import { ShieldCheck, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-90 transition-opacity cursor-pointer">
              <ShieldCheck className="h-6 w-6" />
              <span>IsThisSiteLegit.com</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    location === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <Button size="sm" variant="default" className="ml-4">
              Install Extension
            </Button>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-6">
                  <Link href="/">
                    <div 
                      className="flex items-center gap-2 font-bold text-xl text-primary cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <ShieldCheck className="h-6 w-6" />
                      <span>IsThisSiteLegit.com</span>
                    </div>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <div
                          className={`text-lg font-medium transition-colors hover:text-primary cursor-pointer ${
                            location === link.href
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </div>
                      </Link>
                    ))}
                    <Button className="w-full mt-4">Install Extension</Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl text-primary">
                <ShieldCheck className="h-6 w-6" />
                <span>IsThisSiteLegit.com</span>
              </div>
              <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
                Helping you navigate the web safely. We analyze technical signals and reputation data to help you avoid scams and risky websites.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground/80">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about"><span className="hover:text-primary transition-colors cursor-pointer">About Us</span></Link></li>
                <li><Link href="/how-it-works"><span className="hover:text-primary transition-colors cursor-pointer">How it Works</span></Link></li>
                <li><Link href="/contact"><span className="hover:text-primary transition-colors cursor-pointer">Contact</span></Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground/80">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy-policy"><span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span></Link></li>
                <li><Link href="/terms"><span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span></Link></li>
                <li><Link href="/disclaimer"><span className="hover:text-primary transition-colors cursor-pointer">Disclaimer</span></Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} IsThisSiteLegit.com. All rights reserved.</p>
            <p className="text-center md:text-right max-w-md">
              Always do your own research before you buy or share personal information online. 
              Our scores are opinions based on automated signals.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

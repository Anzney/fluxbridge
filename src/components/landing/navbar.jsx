"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { Sheet, SheetContent, SheetOverlay } from "../ui/sheet";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#global", label: "Global Presence" },
    { href: "#clients", label: "Client & Partners" },
    { href: "#clients", label: "Client & Partners" },
  ];

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 z-[60] top-0 bg-gradient-to-b from-[#00276f] from-20% to-transparent backdrop-blur-md">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between rounded-full px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 z-50">
            <img
              src="/favicon.png"
              alt="Flux Bridge"
              width={44}
              height={44}
              className="w-25 h-25"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden xl:flex items-center gap-3">
            <Button variant="pillDark" size="xl" className="px-6">
              Contact
            </Button>
          </div>

          {/* Hamburger Menu Button - Tablet/Mobile */}
          <button
            className="xl:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <motion.span className="w-7 h-0.5 bg-white rounded-full block" />
            <motion.span className="w-7 h-0.5 bg-white rounded-full block" />
            <motion.span className="w-7 h-0.5 bg-white rounded-full block" />
          </button>
        </div>
      </div>

      {/* Mobile Menu - shadcn Sheet */}
      {isMenuOpen && (
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          {/* Ensure overlay is above everything */}
          <SheetOverlay className="z-[70] bg-black/60 backdrop-blur-sm" />
          <SheetContent
            side="right"
            className="z-[80] bg-[#00276f] text-white xl:hidden w-[280px] sm:w-[320px] p-0"
          >
            <nav className="flex flex-col pt-28 px-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className="text-white text-lg py-4 border-b border-white/10 hover:text-blue-300 transition-colors block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Button
                  variant="pillDark"
                  size="xl"
                  className="w-full px-6"
                  onClick={handleLinkClick}
                >
                  Contact
                </Button>
              </motion.div>
            </nav>
          </SheetContent>
        </Sheet>
      )}
    </header>
  );
};

export default Navbar;

"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const mainLinks = [
  { href: "/about", label: "About" },
  { href: "/benefits", label: "Benefits" },
  { href: "/events", label: "Events" },
  { href: "/directory", label: "Directory" },
];

const moreLinks = [
  { href: "/leadership", label: "Chamber Leadership" },
  { href: "/centre-on-main", label: "Centre on Main" },
  { href: "/start-a-business", label: "Start a Business" },
  { href: "/resources", label: "Community Resources" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setMobileMoreOpen(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo-transparent.png"
              alt="Grayson County Chamber of Commerce"
              width={72}
              height={72}
              className="rounded-full"
              priority
            />
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-gray-900 leading-tight">
                Grayson County
              </p>
              <p className="text-sm text-green-600 font-semibold leading-tight">
                Chamber of Commerce
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="flex items-center gap-1 px-4 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                aria-expanded={moreOpen}
                aria-haspopup="true"
              >
                More
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform ${moreOpen ? "rotate-180" : ""}`}
                />
              </button>
              {moreOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/join"
              className="ml-3 bg-green-600 text-white px-6 py-2.5 rounded-lg font-semibold text-base hover:bg-green-700 transition-colors"
            >
              Join Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <XMarkIcon className="w-7 h-7 text-gray-700" />
            ) : (
              <Bars3Icon className="w-7 h-7 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav — Overlay with backdrop */}
      {menuOpen && (
        <nav className="lg:hidden fixed inset-0 top-20 z-40">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative bg-white shadow-xl px-4 pt-4 pb-8 space-y-1 overflow-y-auto max-h-[calc(100vh-5rem)]">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3.5 text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* More dropdown on mobile */}
            <button
              onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
              className="flex items-center justify-between w-full px-4 py-3.5 text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            >
              More
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform ${mobileMoreOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileMoreOpen && (
              <div className="pl-4 space-y-1">
                {moreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <div className="pt-3">
              <Link
                href="/join"
                onClick={() => setMenuOpen(false)}
                className="block bg-green-600 text-white text-center px-4 py-3.5 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                Join Now
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

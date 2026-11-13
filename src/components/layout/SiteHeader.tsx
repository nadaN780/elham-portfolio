"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(pathname.startsWith("/work") ? "work" : null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Header hairline once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view (home page only).
  useEffect(() => {
    if (!isHome) {
      setActive(pathname.startsWith("/work") ? "work" : null);
      return;
    }
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [isHome, pathname]);

  // Close the menu on route change and on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className={["site-header", scrolled ? "is-scrolled" : "", open ? "is-open" : ""].join(" ")}>
      <div className="container site-header__inner">
        <Link href="/" className="wordmark" aria-label={`${site.name}, home`}>
          <span className="wordmark__latin">{site.name}</span>
          <span className="wordmark__arabic" lang="ar" dir="rtl" aria-hidden="true">
            {site.nameArabic}
          </span>
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-toggle__label">{open ? "Close" : "Menu"}</span>
          <span className="menu-toggle__icon" aria-hidden="true" />
        </button>

        <nav id="site-nav" className="site-nav" aria-label="Main">
          <ul className="site-nav__list">
            {navigation.map((item, i) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="site-nav__link"
                  aria-current={active === item.id ? (isHome ? "location" : "page") : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className="site-nav__index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

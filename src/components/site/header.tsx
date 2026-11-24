import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/site";
import { Logo } from "./logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-transparent bg-paper/90 backdrop-blur-md ${
        scrolled ? "border-line" : ""
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:h-18 sm:px-8">
        <a href="#top" className="rounded-md" aria-label="ЛАДОМ, на главную">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основное меню">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink transition-colors duration-200 hover:text-green-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#request"
          className="hidden h-11 items-center rounded-full bg-green px-5 text-sm font-semibold text-graphite transition-colors duration-200 hover:bg-green-deep lg:inline-flex"
        >
          Оставить заявку
        </a>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full text-graphite lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Закрыть меню" : "Открыть меню"}</span>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-paper lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8" aria-label="Мобильное меню">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex h-12 items-center text-base font-medium text-graphite"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#request"
              className="mt-2 mb-3 inline-flex h-12 items-center justify-center rounded-full bg-green text-sm font-semibold text-graphite"
              onClick={() => setOpen(false)}
            >
              Оставить заявку
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

import React from "react";
import { ThemeToggle } from "../components.jsx";

export default function Header({ theme, setTheme, cartCount, onOpenCart, page, setPage }) {
  const navLink = (target, label) => (
    <a
      href={`#${target}`}
      className={`nav-link-pill ${page === target ? "active" : ""}`}
      onClick={(e) => { e.preventDefault(); setPage(target); }}
    >
      {label}
    </a>
  );

  return (
    <header className="site-header">
      <div className="container py-3">
        <div className="d-flex align-items-center header-row">
        
            <img src={import.meta.env.BASE_URL + "Pictures/lebanon_flag_transparent.png"} alt="cedar tree" className="brand-mark" />
             <div className="flex-grow-1 min-w-0">
            <div className=" font-display">Taste of Lebanon</div>
            <div className="brand-sub">The Art of Lebanese Dining</div>
          </div>

          <nav className="site-nav d-none d-sm-flex">
            {navLink("home", "Home")}
            {navLink("menu", "Menu")}
          </nav>

          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button className="icon-btn" onClick={onOpenCart} aria-label="Open cart">
            <i className="fa-solid fa-bag-shopping"></i>
            {cartCount > 0 && <span className="cart-badge font-mono">{cartCount}</span>}
          </button>
        </div>

        {/* Mobile nav — shown below the header row on narrow screens where
            the pill nav is hidden */}
        <nav className="site-nav site-nav-mobile d-flex d-sm-none mt-3">
          {navLink("home", "Home")}
          {navLink("menu", "Menu")}
        </nav>
      </div>
    </header>
  );
}

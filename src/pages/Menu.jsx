import React, { useState, useMemo } from "react";
import { ItemCard } from "../components.jsx";

export default function Menu({ items, loading, cart, addToCart, inc, dec }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    const set = new Set(items.map((i) => i.category));
    return ["All", ...Array.from(set)];
  }, [items]);

  const filtered = useMemo(() => {
    return items.filter((i) => {
      const matchesCat = category === "All" || i.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery = !q ||
        i.name.toLowerCase().includes(q) ||
        i.desc.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [items, category, query]);

  return (
    <React.Fragment>
      {/* Menu header: search + category filters */}
      <section className="menu-hero">
        <div className="container">
          <div className="eyebrow mb-2">Full Menu</div>
          <h1 className="font-display fw-semibold mb-2">Take a Seat & Explore</h1>
          
          <div className="search-wrap menu-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search the menu…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="cat-scroll">
            {categories.map((cat) => {
              const count = cat === "All" ? items.length : items.filter((i) => i.category === cat).length;
              return (
                <div
                  key={cat}
                  className={`cat-pill ${category === cat ? "active" : ""}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat} <span className="count">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <main className="container menu-grid">
        {loading ? (
          <div className="empty-state">
            <i className="fa-solid fa-utensils fa-spin"></i>
            <p>Plating up the menu…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="empty-state">
            <i className="fa-solid fa-magnifying-glass"></i>
            <p className="mb-0">Nothing matches "{query}" in {category}.<br/>Try another search or category.</p>
          </div>
        ) : (
          <div className="row g-4 pt-2">
            {filtered.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                qty={cart[item.id] || 0}
                onAdd={addToCart}
                onInc={inc}
                onDec={dec}
              />
            ))}
          </div>
        )}
      </main>
    </React.Fragment>
  );
}

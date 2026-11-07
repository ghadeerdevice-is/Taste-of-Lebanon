import React from "react";

export default function Home({ items, loading, setPage }) {
  const popular = items.filter((i) => i.tags.includes("popular")).slice(0, 4);
  const goToMenu = (e) => { e.preventDefault(); setPage("menu"); };

  return (
    <React.Fragment>
      {/* Hero */}
      <section className="home-hero">
        <div className="container home-hero-inner">
          <div className="home-hero-text">
            
            <h1 className="font-display  ">The Flavor of Tradition</h1>
            <p className="mb-4">
              Experience the true taste of Lebanon in every bite.
            </p>
            <a href="#menu" className="cta-btn" onClick={goToMenu}>
              <i className="fa-solid fa-utensils"></i> View Full Menu
            </a>
          </div>
          <div className="home-hero-image">
            <img src={import.meta.env.BASE_URL + "Pictures/lebanon_flag_transparent.png"} alt="cedar tree" className="brand-mark" />
          </div>
        </div>
        
      </section>

     
      {/* Popular picks preview */}
      <section className="home-popular">
        <div className="container">
          <div className="d-flex align-items-end justify-content-between mb-3 flex-wrap gap-2">
            <div>
              <div className="eyebrow mb-1">Lebanese Favorites</div>
              <h2 className="font-display mb-0">Popular Picks</h2>
            </div>
            <a href="#menu" className="see-all-link" onClick={goToMenu}>
              See full menu <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {loading ? (
            <div className="empty-state">
              <i className="fa-solid fa-utensils fa-spin"></i>
              <p>Plating up the menu…</p>
            </div>
          ) : (
            <div className="row g-4">
              {popular.map((item) => (
                <div className="col-6 col-sm-4 col-md-3" key={item.id}>
                  <a href="#menu" className="preview-card" onClick={goToMenu}>
                    <div className="preview-img-wrap">
                      <img src={item.img} alt={item.name} loading="lazy" />
                      <span className="price-stamp font-mono">${item.price.toFixed(2)}</span>
                    </div>
                    <div className="preview-body">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-desc">{item.desc}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
}

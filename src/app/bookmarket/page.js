// "use client";
import "./style.css";
import localFont from "next/font/local";
import CategoryBar from "./component";
import Image from "next/image";
import Script from "next/script";

const phi = localFont({
  src: [
    {
      path: "../../fonts/phitradesign Handwritten Thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  display: "swap",
});

function page() {
  return (
    <main className={phi.className}>
      <section id="hero" style={{ padding: "36px 16px" }}>
        <div
          style={{
            maxWidth: "75%",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 16,
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: 30 }}>BookMarket</h1>
            <p style={{ marginTop: 8 }}>
              Discover trending reads, classics, and indie gems. Great books,
              better prices.
            </p>
            <div
              style={{
                marginTop: 16,
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <a
                href="#featured"
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  textDecoration: "none",
                }}
              >
                Shop Featured
              </a>
              <a
                href="#bestsellers"
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  textDecoration: "none",
                }}
              >
                Best Sellers
              </a>
            </div>
          </div>
          <div
            style={{
              border: "1px solid #1f2937",
              borderRadius: 12,
              padding: 16,
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>Deal of the Week:</strong> 30% off selected Sci‑Fi titles
            </p>
            <p style={{ margin: "8px 0 0 0" }}>
              Limited time. Applied at checkout.
            </p>
          </div>
        </div>
      </section>

      <section id="categories" className="mb-5">
        <div className="w-75 mx-auto">
          <h2 style={{ margin: 0, fontSize: 22, marginBottom: 16 }}>
            Browse by Category
          </h2>
          <CategoryBar />
        </div>
      </section>

      <section id="featured" className="mb-5">
        <div className="w-75 mx-auto">
          <h2 style={{ margin: 0, fontSize: 22 }}>Featured Picks</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 12,
              marginTop: 12,
            }}
          >
            {[
              {
                title: "The Midnight Library",
                author: "Matt Haig",
                price: "$12.99",
                image: "/image/The-Midnight-Library.jpg",
              },
              {
                title: "Atomic Habits",
                author: "James Clear",
                price: "$14.50",
                image: "/image/atomic-habit.jpg",
              },
              {
                title: "Project Hail Mary",
                author: "Andy Weir",
                price: "$13.40",
                image: "/image/Project-Hail-Mary.jpg",
              },
              {
                title: "The Psychology of Money",
                author: "Morgan Housel",
                price: "$11.95",
                image: "/image/thepsychlogyofmoney.jpg",
              },
            ].map((b) => (
              <article
                key={b.title}
                style={{ rotate: `${Math.floor(Math.random() * 4 - 2)}deg` }}
              >
                <div>
                  <div className="position-relative">
                    {/* <div className="tape"></div> */}
                    <Image
                      width={300}
                      height={420}
                      src={b.image}
                      alt={b.title}
                      style={{
                        width: "100%",
                        // height: 140,
                        rotate: `${Math.floor(Math.random() * 4 - 2)}deg`,
                        objectFit: "cover",
                        marginBottom: "1em",
                        display: "block",
                      }}
                      className="imageShdow"
                    />
                  </div>
                  <h3 style={{ margin: 0, fontSize: 18 }}>{b.title}</h3>
                  <p className="m-0">{b.author}</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{b.price}</span>
                    <div className="btn-shadow">
                      <button type="button" className="cta">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="bestsellers" className="mb-5">
        <div className="w-75 mx-auto">
          <h2 style={{ margin: 0, fontSize: 22 }}>Best Sellers</h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginTop: 12,
              display: "grid",
              gap: 10,
            }}
          >
            <li
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 8,
                padding: 12,
              }}
            >
              <span>Where the Crawdads Sing — Delia Owens</span>

              <span style={{ fontWeight: 600 }}>$10.99</span>
            </li>
            <li
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 8,
                padding: 12,
              }}
            >
              <span>It Ends with Us — Colleen Hoover</span>
              <span style={{ fontWeight: 600 }}>$9.80</span>
            </li>
            <li
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 8,
                padding: 12,
              }}
            >
              <span>Spare — Prince Harry</span>
              <span style={{ fontWeight: 600 }}>$15.20</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="mb-5">
        <div className="w-75 mx-auto row row-cols-1 row-cols-md-3">
          <div className="col mb-3">
            <div className="h-100 align-content-between deals-item">
              <div className="typer">
                The world is like a mirror; if you frown at it, it will frown
                back. If you smile, it will also smile back at you.
              </div>
              <div id="auther">
                Dale Carnegie, How to Win Friends and Influence People
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="h-100 align-content-between deals-item">
              <div className="typer">
                When you want something, all the universe conspires in helping
                you to achieve it.
              </div>
              <div id="auther" >
                Paulo Coelho, The Alchemist
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="h-100 align-content-between deals-item">
              <div className="typer">
                Whenever you deeply desire something, know that this wish is the
                inspiration placed in your heart by God.
              </div>
              <div id="auther">
                Elahi Ghomshei, The Seven Cities of Love
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="deals" className="mb-5">
        <div
          className="w-75 mx-auto"
          style={{
            display: "grid",
            gap: 12,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 22 }}>Today’s Deals</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 12,
            }}
          >
            <div className="deals-item">
              <strong>Buy 2 Get 1 Free</strong>
              <p style={{ margin: "8px 0 0 0" }}>
                On select classics and modern fiction.
              </p>
            </div>
            <div className="deals-item">
              <strong>Up to 40% Off</strong>
              <p style={{ margin: "8px 0 0 0" }}>
                Business, marketing and productivity picks.
              </p>
            </div>
            <div className="deals-item">
              <strong>Student Specials</strong>
              <p style={{ margin: "8px 0 0 0" }}>
                Save more with your student ID.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Script src="/animetyping.js"></Script>
    </main>
  );
}

export default page;

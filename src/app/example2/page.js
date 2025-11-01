import Image from "next/image";
import { Navbar } from "react-bootstrap";
import {
  FaCheckDouble,
  FaTent,
  FaCarSide,
  FaBurger,
  FaBullhorn,
  FaMapLocationDot,
} from "react-icons/fa6";

import "./style.css";
import Slider from "@/components/carousel";

function page() {
  return (
    <main dir="rtl">
      <section
        id="banner"
        style={{
          marginTop: "0px",
          paddingTop: 0,
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 16px" }}
        >
          <Navbar>
            <a
              href="/"
              className="homeButtom"
              style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
            >
              Home
            </a>
          </Navbar>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1 style={{ margin: 0, fontSize: 28 }}>
            راهنمای سفر | مقصد گردشگری محبوب
          </h1>
          <p style={{ marginTop: 8 }}>
            اخبار، نکات کاربردی و پیشنهادهای سفر برای گردشگران و علاقه‌مندان به
            طبیعت و فرهنگ.
          </p>
        </div>
        <div className="container">
          <Slider
            images={[
              {
                img: "/image/korosh.jpg",
                text: "آرامگاه کوروش",
                alt: "korosh",
              },
              {
                img: "/image/Iran202.jpg",
                text: "کاروان سراها",
                alt: "karevalsara",
              },
              { img: "/image/maxresdefault.jpg", text: "", alt: "alamot" },
            ]}
          />
        </div>
      </section>

      <section id="items">
        <Image
          id="birdsvg"
          src="/image/bird.svg"
          alt="bird"
          width={500}
          height={500}
        />
        <div className="container d-flex justify-content-center my-3 flex-wrap">
          <div className="card glass-card mx-2 rounded-3 p-1">
            <Image
              src="/image/takhte-jam.jpg"
              alt="cart-image"
              className="card-img-top shadow-sm rounded"
              style={{ maxHeight: "30vh", objectFit: "cover" }}
              width={200}
              height={200}
            />
            <div className="card-body">
              <h3>تور یک روزه بازدید از مکان‌های تاریخی</h3>
            </div>
          </div>
          <div className="card glass-card mx-2 rounded-3 p-1">
            <Image
              src="/image/Golestan-Palace-in-Tehran-Cover.jpg"
              alt="cart-image"
              className="card-img-top shadow-sm rounded"
              style={{ width: "100%", maxHeight: "30vh", objectFit: "cover" }}
              width={200}
              height={200}
            />
            <div className="card-body">
              <h3>بهترین مکان‌های برای بازدید</h3>
            </div>
          </div>
          <div className="card glass-card mx-2 rounded-3 p-1 min-wv-30">
            <Image
              src="/image/Damghan-Tarikhaneh-Mosque.jpg"
              alt="cart-image"
              className="card-img-top shadow-sm rounded"
              style={{ width: "100%", maxHeight: "30vh", objectFit: "cover" }}
              width={200}
              height={200}
            />
            <div className="card-body">
              <h3>فصول مناسب برای بازدید از اماکن مختلف</h3>
            </div>
          </div>
        </div>
      </section>
      <section id="latest">
        <div style={{ maxWidth: "75%", margin: "auto", minHeight: "inherit" }}>
          <h2>آخرین خبرهای گردشگری</h2>
          <div className="my-0 mx-auto row" >
            <article
              className="shadow col-12 col-md-8"
              style={{
                borderRadius: 12,
                padding: 16,
              }}
            >
              <h2 style={{ marginTop: 0, marginBottom: 8, fontSize: 22 }}>
                ویژه: راهنمای کامل سفر به دره بهاری
              </h2>
              <p style={{ margin: 0, color: "#4b5563" }}>
                بهترین زمان سفر، مسیرهای پیاده‌روی، اقامتگاه‌های بوم‌گردی و
                پیشنهادهای عکاسی.
              </p>
            </article>
            <aside
              className="col-md-4 col-12 px-1"
              style={{ display: "grid", gap: 12 }}
            >
              <a
                href="#"
                className="shadow"
                style={{
                  background: "#f8fafc",
                  borderRadius: 12,
                  padding: 12,
                  color: "#0f172a",
                  textDecoration: "none",
                }}
              >
                اطلاعیه: برگزاری جشنواره موسیقی محلی آخر هفته
              </a>
              <a
                href="#"
                className="shadow"
                style={{
                  background: "#f8fafc",
                  borderRadius: 12,
                  padding: 12,
                  color: "#0f172a",
                  textDecoration: "none",
                }}
              >
                پیشنهاد ویژه: تور یک‌روزه بازدید از آبشارهای اطراف
              </a>
            </aside>
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginTop: 12,
              display: "grid",
              gap: 12,
            }}
          >
            <li className="white-box shadow">
              افتتاح مسیر دوچرخه‌سواری ساحلی با چشم‌انداز بی‌نظیر
            </li>
            <li className="white-box shadow">
              معرفی کافه‌های محبوب با چشم‌انداز کوهستان
            </li>
            <li className="white-box shadow">
              راهنمای رزرو اقامت اقتصادی در فصل شلوغی
            </li>
          </ul>
        </div>
      </section>

      <section id="categories">
        <div style={{ maxWidth: "75%", margin: "0 auto" }}>
          <h2 style={{ margin: 0, fontSize: 22 }}>دسته‌بندی‌های محبوب</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 12,
              marginTop: 12,
            }}
          >
            <a
              href="#"
              className="d-flex justify-content-between"
              style={{
                background: "#f8fafc",
                border: "1px solid #e5e7eb",
                borderRadius: 10,
                padding: 14,
                color: "#0f172a",
                textDecoration: "none",
              }}
            >
              <span>جاذبه‌ها</span>
              <FaCheckDouble size={20} />
            </a>
            <a
              href="#"
              className="d-flex justify-content-between"
              style={{
                background: "#f8fafc",
                border: "1px solid #e5e7eb",
                borderRadius: 10,
                padding: 14,
                color: "#0f172a",
                textDecoration: "none",
              }}
            >
              <span>رویدادها</span>
              <FaBullhorn size={20} />
            </a>
            <a
              href="#"
              className="d-flex justify-content-between"
              style={{
                background: "#f8fafc",
                border: "1px solid #e5e7eb",
                borderRadius: 10,
                padding: 14,
                color: "#0f172a",
                textDecoration: "none",
              }}
            >
              <span>غذا و کافه</span>
              <FaBurger size={20} />
            </a>
            <a
              href="#"
              className="d-flex justify-content-between"
              style={{
                background: "#f8fafc",
                border: "1px solid #e5e7eb",
                borderRadius: 10,
                padding: 14,
                color: "#0f172a",
                textDecoration: "none",
              }}
            >
              <span>اقامت</span>
              <FaTent size={20} />
            </a>
            <a
              href="#"
              className="d-flex justify-content-between"
              style={{
                background: "#f8fafc",
                border: "1px solid #e5e7eb",
                borderRadius: 10,
                padding: 14,
                color: "#0f172a",
                textDecoration: "none",
              }}
            >
              <span>حمل‌ونقل</span>
              <FaCarSide size={24} />
            </a>
            <a
              href="#"
              className="d-flex justify-content-between"
              style={{
                background: "#f8fafc",
                border: "1px solid #e5e7eb",
                borderRadius: 10,
                padding: 14,
                color: "#0f172a",
                textDecoration: "none",
              }}
            >
              <span>راهنمای سفر</span>
              <FaMapLocationDot size={20} />
            </a>
          </div>
        </div>
      </section>
      <Image
        src="/image/pool.jpg"
        alt="logo"
        style={{
          width: "100%",
          maxHeight: "40hv",
          objectFit: "cover",
        }}
        width={1200}
        height={125}
      />
      <footer
        id="footer"
        style={{
          padding: "20px 16px",
          color: "#cbd5e1",
        }}
      >
        <div
          style={{
            maxWidth: "75%",
            margin: "0 auto",
            display: "grid",
            gap: 12,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 22 }}>عضویت در خبرنامه سفر</h2>
          <form style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <input
              type="email"
              required
              placeholder="ایمیل شما"
              style={{
                flex: "1 1 260px",
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
            />
            <button
              type="button"
              className="btn btn-secondary px-4"
              style={{ border: 0, cursor: "pointer" }}
            >
              ثبت
            </button>
          </form>
        </div>
        <div
          style={{
            maxWidth: "1100px",
            margin: "2em auto 0",
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <span>© {new Date().getFullYear()} راهنمای سفر</span>
          <nav style={{ display: "flex", gap: 12 }}>
            <a href="#" style={{ color: "#cbd5e1", textDecoration: "none" }}>
              تماس
            </a>
            <a href="#" style={{ color: "#cbd5e1", textDecoration: "none" }}>
              درباره
            </a>
            <a href="#" style={{ color: "#cbd5e1", textDecoration: "none" }}>
              حریم خصوصی
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

export default page;

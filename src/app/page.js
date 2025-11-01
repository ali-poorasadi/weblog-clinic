"use client";
import Link from "next/link";
import Script from "next/script";
import { FaGithub } from "react-icons/fa";

import "./root.css";

function page() {
  return (
    <main className="homepage">
      <div className="part container">
        <p className="h2">welcome</p>
        <p className="h4">if you need website so scroll</p>
      </div>
      <div className="part container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div>
              <p className="h3">style your website</p>
              <p>
                a web site can have different design and content we are here to
                help you create a website that is both beautiful and functional
                we are here to help you create a website. you can see examples
                of our work below.
              </p>
            </div>
            <div>{/* images */}</div>
          </div>
          <div className="col-md-6 col-12">
            <div className="d-flex justify-content-center">
              <ul>
                <li>
                  <p>you can use it for your job. for example:</p>
                  <Link href="/clinic_ex" className="mx-3">
                    <span>clinic example</span>
                  </Link>
                </li>
                <li>
                  <p>sharing experiences</p>
                  <Link href="/example2" className="mx-3">
                    <span>Tourist attractions site example</span>
                  </Link>
                </li>
                <li>
                  <p>style your store</p>
                  <Link href="/bookmarket" className="mx-3">
                    <span>digital book market example</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="part">
        <p className="h3">about me</p>
        <p>
          i am a web developer and i am here to help you create a website that
          is both beautiful and functional we are here to help you create a
          website.
          <br />
          you can see my github page.
          <br />
          <Link
            href="https://github.com/ali-poorasadi"
            className="m-3 text-white"
          >
            <FaGithub size={26} className="m-3" />
          </Link>
        </p>
      </div>
      <div className="part">
        <p className="h3">end of page</p>
        <p>
          Thank you for visiting my website; I hope you found what you were
          looking for. This is a small sample to showcase different types of
          website design.
        </p>
      </div>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js" />
      <Script src="/scripts.js" strategy="lazyOnload" />
    </main>
  );
}

export default page;

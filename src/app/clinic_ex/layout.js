import AppNav from "@/components/nav";
import ThemBtn from "@/components/them-btn";
import "aos/dist/aos.css";

import GlobalScript from "@/components/global-script";

export const metadata = {
  title: "example page",
  description: "this is an example page",
};

function Layout({ children }) {
  return (
    <>
      <AppNav />
      <main style={{ marginTop: "3rem" }}>{children}</main>
      <GlobalScript />
      <ThemBtn />
    </>
  );
}

export default Layout;

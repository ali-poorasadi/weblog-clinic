"use client";
import Aos from "aos";
import { useEffect } from "react";

function GlobalScript() {
  useEffect(() => {
    Aos.init();
  }, []);
  return <></>;
}

export default GlobalScript;
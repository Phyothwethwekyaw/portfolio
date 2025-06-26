"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

// Use your palette: bg-[#9F8361], text-[#DCD7CD], hover:bg-[#56331D], hover:text-[#DCD7CD]
const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center justify-center rounded-full bg-[#2C2F48] text-[#FFD700] p-4 hover:bg-[#6F42C1] hover:text-[#F8F8F8] shadow-lg transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS + " hidden");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS);
      } else {
        setBtnCls(DEFAULT_BTN_CLS + " hidden");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button className={btnCls} onClick={onClickBtn} aria-label="Scroll to top">
      <FaArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
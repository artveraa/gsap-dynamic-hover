"use client";

import { useEffect, useRef } from "react";
import { wrapLettersInSpan, getChildIndex } from "@/app/utils/animations";
import gsap from "gsap";

interface MenuItemProps {
  title: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title }) => {
  const itemRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    wrapLettersInSpan(item.querySelector(".hidden"));
    wrapLettersInSpan(item.querySelector(".visible"));

    const handleMouseOver = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).classList.contains("letter")) return;

      item.classList.add("hovered");
      const indexHover = getChildIndex(e.target as HTMLElement);

      gsap.to(item.querySelectorAll(".visible span"), {
        yPercent: 100,
        ease: "back.out(2)",
        duration: 0.6,
        stagger: {
          each: 0.023,
          from: indexHover,
        },
      });

      gsap.to(item.querySelectorAll(".hidden span"), {
        yPercent: 100,
        ease: "back.out(2)",
        duration: 0.6,
        stagger: {
          each: 0.023,
          from: indexHover,
        },
        onComplete: () => {
          gsap.set(item.querySelectorAll(".visible span"), {
            clearProps: "all",
          });
          gsap.set(item.querySelectorAll(".hidden span"), {
            clearProps: "all",
          });
          item.classList.remove("hovered");
        },
      });
    };

    item.addEventListener("mouseover", handleMouseOver);
    return () => {
      item.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <li
      ref={itemRef}
      className="item relative overflow-hidden cursor-pointer w-max font-medium text-[6.6vw] leading-[0.9] tracking-tighter font-inter"
    >
      <span className="hidden absolute bottom-full">{title}</span>
      <span className="visible inline-block">{title}</span>
    </li>
  );
};

export default MenuItem;

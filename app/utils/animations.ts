import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export const initializeAnimations = (
  container: HTMLDivElement | null,
  cardsContainer: HTMLDivElement | null
) => {
  if (!container || !cardsContainer) return;

  const lenis = new Lenis({
    autoRaf: true,
  });

  const cards = cardsContainer.querySelectorAll(".card");
  const distance = cardsContainer.scrollWidth - window.innerWidth;

  const scrollTween = gsap.to(cardsContainer, {
    x: -distance,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: true,
      start: "top top",
      end: "+=" + distance,
    },
  });

  cards.forEach((card) => {
    const values = {
      x: (Math.random() * 20 + 30) * (Math.random() < 0.5 ? 1 : -1),
      y: (Math.random() * 6 + 10) * (Math.random() < 0.5 ? 1 : -1),
      rotation: (Math.random() * 10 + 10) * (Math.random() < 0.5 ? 1 : -1),
    };

    gsap.fromTo(
      card,
      {
        rotation: values.rotation,
        xPercent: values.x,
        yPercent: values.y,
      },
      {
        rotation: -values.rotation,
        xPercent: -values.x,
        yPercent: -values.y,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          containerAnimation: scrollTween,
          start: "left 120%",
          end: "right -20%",
          scrub: true,
        },
      }
    );
  });

  return () => {
    scrollTween.kill();
  };
};

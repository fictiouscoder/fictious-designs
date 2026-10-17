"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal");

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return;
    }

    const observedElements = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    const observeElement = (element: Element, index: number) => {
      if (observedElements.has(element)) return;

      observedElements.add(element);

      const htmlElement = element as HTMLElement;

      htmlElement.style.setProperty(
        "--reveal-delay",
        `${(index % 3) * 120}ms`,
      );

      htmlElement.classList.add("scroll-reveal-ready");
      observer.observe(element);
    };

    elements.forEach(observeElement);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;

          if (node.matches(".scroll-reveal")) {
            observeElement(node, observedElementsCount++);
          }

          node.querySelectorAll(".scroll-reveal").forEach((element) => {
            observeElement(element, observedElementsCount++);
          });
        });
      });
    });

    let observedElementsCount = elements.length;

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
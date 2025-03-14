// 🔹 Fonction pour encapsuler les lettres dans des <span>
export function wrapLettersInSpan(element: Element | null) {
  if (!element) return;
  element.innerHTML =
    element.textContent
      ?.split("")
      .map((char) =>
        char === " " ? "<span> </span>" : `<span class="letter">${char}</span>`
      )
      .join("") ?? "";
}

// 🔹 Récupérer l'index d'un élément parmi ses frères
export function getChildIndex(child: HTMLElement): number {
  return Array.from(child.parentNode?.children ?? []).indexOf(child);
}

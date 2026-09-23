document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container")
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches

  if (container && !prefersReducedMotion && canHover) {
    let frame = null

    container.addEventListener("mouseenter", () => {
      if (frame === null) {
        container.style.transform = "perspective(1000px)"
      }
    })

    container.addEventListener("mousemove", (e) => {
      if (frame !== null) return

      frame = requestAnimationFrame(() => {
        frame = null

        const rect = container.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = (y - centerY) / 20
        const rotateY = (centerX - x) / 20

        container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      })
    })

    container.addEventListener("mouseleave", () => {
      if (frame !== null) {
        cancelAnimationFrame(frame)
        frame = null
      }
      container.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    })
  }

  window.addLink = (text, url, position = null) => {
    const linksContainer = document.querySelector(".links-container")
    const newLink = document.createElement("a")

    newLink.href = url
    newLink.className = "link-item fade-in"
    newLink.target = "_blank"
    newLink.rel = "noopener noreferrer"
    newLink.setAttribute("aria-label", `${text} - abre em nova aba`)
    newLink.textContent = text

    if (position !== null && position < linksContainer.children.length) {
      linksContainer.insertBefore(newLink, linksContainer.children[position])
    } else {
      linksContainer.appendChild(newLink)
    }

    return newLink
  }
})

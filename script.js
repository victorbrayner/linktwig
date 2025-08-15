document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".link-item, .social-link")

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.getAttribute("href") === "#") {
        e.preventDefault()
        this.style.transform = "scale(0.95)"
        setTimeout(() => {
          this.style.transform = ""
        }, 150)
      }
    })

    link.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        this.click()
      }
    })
  })

  const container = document.querySelector(".container")
  let isHovering = false

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  if (!prefersReducedMotion) {
    container.addEventListener("mouseenter", () => {
      isHovering = true
    })

    container.addEventListener("mousemove", (e) => {
      if (!isHovering) return

      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20

      container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })

    container.addEventListener("mouseleave", () => {
      isHovering = false
      container.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    })
  }

  window.addLink = (text, url, iconClass = "fas fa-link", position = null) => {
    const linksContainer = document.querySelector(".links-container")
    const newLink = document.createElement("a")

    newLink.href = url
    newLink.className = "link-item fade-in"
    newLink.setAttribute("aria-label", `${text} - abre em nova aba`)
    newLink.innerHTML = `<i class="${iconClass} link-icon" aria-hidden="true"></i>${text}`

    newLink.addEventListener("click", function (e) {
      if (this.getAttribute("href") === "#") {
        e.preventDefault()
      }
    })

    newLink.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        this.click()
      }
    })

    if (position !== null && position < linksContainer.children.length) {
      linksContainer.insertBefore(newLink, linksContainer.children[position])
    } else {
      linksContainer.appendChild(newLink)
    }

    return newLink
  }

  const announcement = document.createElement("div")
  announcement.setAttribute("aria-live", "polite")
  announcement.setAttribute("aria-atomic", "true")
  announcement.className = "sr-only"
  announcement.textContent = "Página de links carregada com sucesso"
  document.body.appendChild(announcement)

  setTimeout(() => {
    if (announcement.parentNode) {
      announcement.parentNode.removeChild(announcement)
    }
  }, 1000)
})

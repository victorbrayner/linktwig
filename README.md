# Linktwig 🌿

Uma página de links de perfil ("link-in-bio") moderna, elegante e interativa, construída com HTML, CSS e JavaScript puros. Projetada para ser visualmente impressionante e altamente acessível.

---

## 🚀 Sobre o Projeto

**Linktwig** é um template de página de links de perfil, perfeito para agrupar todos os seus links importantes em um só lugar. Diferente de outras páginas estáticas, este projeto utiliza um design "glassmorphism", um fundo gradiente animado e um sutil efeito de inclinação 3D que responde ao movimento do mouse, criando uma experiência de usuário memorável.

O foco principal foi criar uma interface que não seja apenas bonita, mas também inclusiva e acessível para todos os usuários.

### ✨ Principais Funcionalidades

- **🎨 Design Moderno (Glassmorphism):** Interface com efeito de vidro translúcido (`backdrop-filter`), sombras suaves e bordas destacadas.
- **🌌 Fundo Dinâmico e Animado:** Um gradiente de fundo que se move suavemente, combinado com orbes flutuantes para criar uma sensação de profundidade.
- **🖱️ Efeito de Inclinação 3D Interativo:** O contêiner principal inclina-se sutilmente com base na posição do cursor, adicionando uma camada extra de interatividade.
- **💨 Animações Suaves:** Elementos da página aparecem com animações de fade-in escalonadas, e os links possuem transições suaves em estados de hover, focus e active.
- **♿ Acessibilidade em Primeiro Lugar:**
  - **Suporte a `prefers-reduced-motion`:** Animações e transições são desativadas se o usuário preferir.
  - **Navegação por Teclado:** Totalmente navegável usando as teclas Tab e Enter/Espaço.
  - **Leitores de Tela:** Uso correto de atributos ARIA (`role`, `aria-label`, `aria-hidden`) e um anúncio sonoro quando a página é carregada.
  - **Link "Pular para o Conteúdo":** Facilita a navegação para usuários de teclado.
- **📱 Totalmente Responsivo:** O layout se adapta perfeitamente a dispositivos móveis, tablets e desktops.
- **⚙️ Leve e Rápido:** Construído sem frameworks ou dependências, apenas HTML, CSS e JavaScript puros.

### 🛠️ Construído Com

- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## 🚀 Como Usar

É muito simples configurar sua própria página de links com o Linktwig.

**1. Clone o repositório:**

```bash
git clone https://github.com/victorbrayner/linktwig.git
```

**2. Navegue até o diretório do projeto:**

```bash
cd linktwig
```

**3. Personalize o conteúdo:**

Abra o arquivo `index.html` e edite as seguintes seções:

- **Informações do Perfil:**
  - Altere a `src` da tag `<img>` com a classe `profile-image` para a sua foto.
  - Modifique o texto dentro de `h1.profile-name` para o seu nome.
  - Atualize o `p.profile-bio` com sua biografia ou título.
- **Links Principais:**
  - Edite os elementos `<a>` dentro da `nav.links-container`.
  - Mude o `href` para a sua URL, o texto do link e o `aria-label` para uma descrição acessível.
  - Você pode trocar o ícone substituindo o `<svg class="link-icon">` por outro SVG inline (os ícones atuais vêm do Font Awesome Free, licença CC BY 4.0).
  - Mantenha `target="_blank"` e `rel="noopener noreferrer"` nos links que abrem em nova aba.
- **Redes Sociais:**
  - Atualize os links `<a>` dentro do `footer.social-links` com as URLs dos seus perfis.

**4. Abra no navegador:**

Basta abrir o arquivo `index.html` diretamente no seu navegador para ver sua página de links em ação!

---

### ➕ Adicionando Links com JavaScript

O arquivo `script.js` inclui uma função global `addLink()` para adicionar novos links dinamicamente à página.

Exemplo de uso (pode ser adicionado no final do script ou em um console):

```javascript
// addLink(texto, url, posicao);
addLink("Meu Novo Blog", "https://meublog.com", 2) // Adiciona na 3ª posição
```

---

### 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Feito com ❤️ por **Victor Brayner**. Fique à vontade para contribuir!

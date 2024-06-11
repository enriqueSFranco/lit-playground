import { LitElement, css, html } from "lit"

const superElementStyles = css`
  .wrapper {
    border: 1px dotted orange;
    padding: 2px 4px;
  }
`

class SuperElement extends LitElement {
  // rendiemiento mas optimo
  static styles = [
    superElementStyles,
    css`
      p {
        text-transform: capitalize;
        font-weight: 400;
        color: #026ffd;
      }
    `
  ]

  render () {
    return html`
      <div class="wrapper">
        <h1>Estilos en Lit Element</h1>
        <p>Hello world 🌎</p>
        <span class="badge">kotlin</span>
      </div>
    `
  }
}

window.customElements.define('super-element', SuperElement)

import { LitElement, css, html } from "lit"
import { customElement, property } from "lit/decorators.js"

type InputType = "text" | "password" | "email"

@customElement("secret-pass")
export class SecretPass extends LitElement {
  static styles = css`
    .input {
      width: 100%;
      font-family: inherit;
      font-size: 1rem;
      color:#706c6c;
      padding: .6em .3em;
      border: none;
      outline: none;
      border-bottom: 1px solid var(--color);
      background-color: transparent;
    }

    .input_label {
      position: absolute;
      top: 0;
      left: 5px;
      cursor: pointer;
      transform: translateY(10px);
      transition: transform .5s, color .3s
    }

    .input:focus + .input_label,
    .input:not(:placeholder-shown) + .input_label {
      transform: translateY(-12px) scale(.7);
      transform-origin: top left;
      color: #fff;
    }
    
    .wrapper {
      position: relative;
      --color: #5757557e
    }
  `

  @property()
  title: string = ""
  @property()
  type: InputType = "text"

  render () {
    return html`
      <div class="wrapper">
        <input type="${this.type}" id=${this.title} placeholder=" " class="input" />
        <label for=${this.title} class="input_label">${this.title}</label>
      </div>
    `
  }
}
import { LitElement, css, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"

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
      --color: #5757557e;
      display: flex;
      align-items: center;
      border-bottom: 1px solid var(--color);
    }
  `

  @property()
  title: string = ""

  @state()
  private _showPassword: boolean = false

  togglePasswordVisibility () {
    this._showPassword = !this._showPassword
  }

  render () {
    return html`
      <div class="wrapper">
        <input type=${this._showPassword ? "text" : "password"} id=${this.title} placeholder=" " class="input" />
        <label for=${this.title} class="input_label">${this.title}</label>
        <span @click=${this.togglePasswordVisibility}>${this._showPassword ? '🙈' : '👁️'}</span>
      </div>
    `
  }
}
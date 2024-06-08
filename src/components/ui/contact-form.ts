import { LitElement, css, html } from "lit"
import { customElement } from "lit/decorators.js"

import "../base-input"
import "../secret-pass"

@customElement("contact-form")
export class ContactForm extends LitElement {
  static styles = css`
    .btn_register {
      background-color: #0384fc;
      border: none;
      outline: none;
      border-radius: 6px;
      padding: .5em 1em;
      text-transform: capitalize;
      letter-spacing: 0.14em;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
    }
  `

  render () {
    return html`
    <div>
      <hedaer><h1>formulario de contacto</h1></hedaer>
      <form class="form">
        <base-input type="text" title="Nombre"></base-input>
        <base-input type="email" title="Correo electronico"></base-input>
        <secret-pass title="Contraseña"></secret-pass>
        <button class="btn_register">registrarme</button>
      </form>
    </div>
    `
  }
}
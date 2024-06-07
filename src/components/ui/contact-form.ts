import { LitElement, css, html } from "lit"
import { customElement } from "lit/decorators.js"

import "../secret-pass"

@customElement("contact-form")
export class ContactForm extends LitElement {
  static styles = css``

  render () {
    return html`
    <div>
      <hedaer><h1>formulario de contacto</h1></hedaer>
      <form>
        <secret-pass type="text" title="Nombre"></secret-pass>
        <secret-pass type="email" title="Correo electronico"></secret-pass>
        <secret-pass type="password" title="Contraseña"></secret-pass>
        <button>registrarme</button>
      </form>
    </div>
    `
  }
}
import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"

import { dateConverter } from "./utils/date-converter"

@customElement("date-display-with-converter")
export class DateDisplayWithConverter extends LitElement {
  @property({ converter: dateConverter(window.navigator.language), reflect: true }) // la propiedad no se reflejara como atributo
  date = new Date()

  render () {
    const locale = 'en-US'
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    return html`
      <p>Date: ${this.date.toLocaleDateString(locale, options)}</p>
    `
  }
}
import { LitElement, PropertyValueMap, html } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("date-display")
export class DateDisplay extends LitElement {
  @property({ attribute: false }) // la propiedad no se reflejara como atributo
  date: Date = new Date()
  @property({ type: String, attribute: 'date-str' })
  dateStr = ""

  /**
   * En el método willUpdate es un buen lugar para conciliar dos propiedades reactivas diferentes 
   **/
  protected willUpdate (_changedProperties: PropertyValueMap<this>): void {
    if (_changedProperties.has('dateStr') && this.dateStr) {
      this.date = new Date(this.dateStr)
    }
  }

  render () {
    const locale = 'en-US'
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    return html`
      <p>${this.date.toLocaleDateString(locale, options)}</p>
    `
  }
}
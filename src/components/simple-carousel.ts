import { LitElement, PropertyValues, css, html } from "lit"
import { property } from "lit/decorators.js"

export class SimpleCarousel extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      overflow: hidden;
      position: relative;
      width: 200px;
      height: 200px;
      border-radius: 4px;
      background: gainsboro;
      cursor: pointer;
    }
    .fit {
      position: relative;
      width: 100%;
      height: 100%;
    }
    ::slotted(*) {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }
  `

  @property({ type: Number })
  selected = 0

  get maxSelected () {
    console.log(this.childElementCount) // 6 elementos, que son las 6 imagenes
    return this.childElementCount - 1 // 5 nodos hijos que tiene el elemento padre
  }

  selectedInternal = 0

  hasValidSelected () {
    return this.selected >= 0 && this.selected <= this.maxSelected
  }

  render () {
    console.log(this.maxSelected) // 5 nodos ya que se indexan desde cero
    if (this.hasValidSelected())
      this.selectedInternal = this.selected
    return html`
      <div class="fit">
        <slot name="selected"></slot>
      </div>
    `
  }

  protected updated (changedProperties: PropertyValues) {
    if (changedProperties.has('selected') && this.hasValidSelected()) {

    }
  }


}

window.customElements.define('simple-carousel', SimpleCarousel)
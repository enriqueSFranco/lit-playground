import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"

import { timeAgo } from "./time-ago-directive"

const timeCreated = new Date()

@customElement("time-ago")
export class TimeAgo extends LitElement {
  render () {
    return html`
      <p>This page was rendered ${timeAgo(timeCreated)}</p>
    `
  }
}
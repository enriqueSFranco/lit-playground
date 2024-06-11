import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("properties-example-ts")
export class PropertiesExampleTS extends LitElement {
  // opción 2
  declare foo: string

  static properties = { foo: { type: String } }

  @property({ type: String }) name = ""
  @property({ attribute: false }) data = {}

  constructor() {
    super()
    this.foo = "Default"
  }
}
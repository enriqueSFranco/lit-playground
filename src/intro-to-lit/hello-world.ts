import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("hello-world")
export class HelloWorld extends LitElement {
  @property()
  name: string = "Your name here."

  @property()
  checked: boolean = false

  render () {
    return html`
    <div>
      <p>Hello, ${this.name}</p>
      <form @submit=${this._handleSubmit}>
        <input value="I'm spider-man" name="name" ?disabled=${!this.checked} />
        <button ?disabled=${!this.checked}>submit</button>
      </form>
      <label>
        Enable editing
        <input type="checkbox" @change=${this.setChecked} />
      </label>
    </div>
    `
  }

  setChecked (e: Event) {
    this.checked = (e.target as HTMLInputElement).checked
  }

  _handleSubmit (e: Event) {
    e.preventDefault()

    const $form = e.target as HTMLFormElement
    const formData = new FormData($form)
    const name = formData.get('name') as string

    if (typeof name === 'string' && name.trim().length) {
      this.name = name
    }
    $form.reset()
  }
}
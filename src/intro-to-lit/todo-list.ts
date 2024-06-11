import { LitElement, css, html } from "lit"
import { customElement, state } from "lit/decorators.js"

// TASK MODEL
interface Task {
  id: string
  title: string
  completed: boolean
}

@customElement("todo-list")
export class TodoList extends LitElement {
  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `

  @state()
  _tasks: Task[] = [
    {
      id: crypto.randomUUID(),
      title: "Estudiar Lit",
      completed: false
    },
    {
      id: crypto.randomUUID(),
      title: "Estudiar POO",
      completed: false
    }
  ]

  render () {
    return html`
      <h2>To Do</h2>
      <ul>
        ${this._tasks.map(({ id, title, completed }) => (
      html`
            <li><p @click=${() => this.toggleCompleted({ id })} class=${completed ? 'completed' : ''}>${title}</p></li>
          `
    ))}
      </ul>
      <form @submit=${this.handleSubmit}>
        <input id="newitem" aria-label="newitem" placeholder="Enter your task" name="title" />
        <button>add</button>
      </form>
    `
  }

  toggleCompleted (idOnlyTask: Pick<Task, "id">) {
    const taskId = this._tasks.findIndex(task => task.id === idOnlyTask.id)
    if (taskId === -1) throw new Error(`No se encontró ninguna tarea con el id ${idOnlyTask.id}`)
    else {
      const updatedTask = this._tasks.map(task => {
        if (task.id === idOnlyTask.id) {
          return { ...task, completed: !task.completed }
        }
        return task
      })
      this._tasks = updatedTask
    }
  }

  // opción 1
  handleSubmit (e: Event) {
    e.preventDefault()

    const $form = e.target as HTMLFormElement
    const formData = new FormData($form)
    const title = formData.get('title') as string
    if (typeof title === 'string' && title.trim().length) {
      const newItem: Task = { id: crypto.randomUUID(), title, completed: false }
      this._tasks.push(newItem) // muta el array(tasks) original
      this.requestUpdate() // avisamos al componente que hay un cambio en el array tasks
    }
    return
  }

  /**
 * opción 2 
 * query("#newitem") <- funciona como el querySelector(identificador del elemento)
 * input!: HTMLInputElement
 * 
 * get input() {
 *  return this.renderRoot?querySelector("#newitem") ?? null
 * }
 * 
 **/
}
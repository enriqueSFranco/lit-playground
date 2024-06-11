import { LitElement } from "lit";

class PropertiesExampleJS extends LitElement {
  static properties = {
    name: {},
    _counter: { state: true },
    mode: { type: String },
    data: { attribute: false },
    foo: { type: String } // 😶‍🌫️ esta propiedad reactiva se va a ignorar por el campo de clase foo = 'Default'
  }
  // foo = "Default" ❌ esto hará que foo no sea reactiva ya que se va a ignorar

  // Para solucionar el inconveniente el campo de clase se debe de inicializar en el constructor
  constructor() {
    super()
    this._counter = 0
    this.data = {}
    this.foo = "Default"
  }
}

/**
 * Para TypeScript, se pueden usar campos de clase para declarar propiedades reactivas siempre que 
 * use uno de estos patrones:
 * 1.- Establecer el useDefineForClassFields (tsconfig.json) opción del compilador para false. 
 * Esta ya es la recomendación cuando usando decoradores con TypeScript.
 * 
 * 2.- Agregar el declare palabra clave en el campo y poner el inicializador del campo en el constructor.
 * */

// registramos el componente
customElements.define("properties-example-js", PropertiesExampleJS)
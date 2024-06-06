import { ChildPart, Directive, directive } from "lit/directive.js";

class AttributeLogger extends Directive {
  attributeNames = ''

  update (_part: ChildPart) {
    this.attributeNames = (_part.parentNode as Element).getAttributeNames?.().join(' ')
    return this.render()
  }

  render () {
    return this.attributeNames
  }
}

export const attributeLogger = directive(AttributeLogger)

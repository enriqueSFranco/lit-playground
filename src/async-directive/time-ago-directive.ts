import { directive, Directive, PartInfo } from "lit/directive.js"

import { formatDistanceToNow } from "date-fns"

// Directiva basada en clase
class TimeAgoDirective extends Directive {
  value = 0
  constructor(partInfo: PartInfo) {
    super(partInfo)
    console.log('My directive created')
  }
  render (time: Date) {
    return formatDistanceToNow(time.toDateString(), { addSuffix: true })
  }
}

export const timeAgo = directive(TimeAgoDirective)
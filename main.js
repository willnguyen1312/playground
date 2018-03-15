// eslint-disable-next-line
let dragSrcEl = null

function handleDragStart(e) {
  // Target (this) element is the source node.
  this.style.opacity = '0.4'

  dragSrcEl = this

  e.dataTransfer.effectAllowed = 'move'
  e.dataTransfer.setData('text/html', this.innerHTML)
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault() // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move' // See the section on the DataTransfer object.

  return false
}

function handleDragEnter() {
  // this / e.target is the current hover target.
  this.classList.add('over')
}

function handleDragLeave() {
  this.classList.remove('over') // this / e.target is previous target element.
}

function handleDrop(e) {
  // this/e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation() // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl !== this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    dragSrcEl.innerHTML = this.innerHTML
    this.innerHTML = e.dataTransfer.getData('text/html')
  }

  dragSrcEl.style.opacity = 1

  return false
}

function handleDragEnd() {
  // this/e.target is the source node.
  // eslint-disable-next-line
  cols.forEach(col => {
    col.classList.remove('over')
  })
}

const cols = document.querySelectorAll('#columns .column');
[].forEach.call(cols, (col) => {
  col.addEventListener('dragstart', handleDragStart, false)
  col.addEventListener('dragenter', handleDragEnter, false)
  col.addEventListener('dragover', handleDragOver, false)
  col.addEventListener('dragleave', handleDragLeave, false)
  col.addEventListener('drop', handleDrop, false)
  col.addEventListener('dragend', handleDragEnd, false)
})

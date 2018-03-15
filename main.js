const dropbox = document.getElementById('drop-box')

function dragenter(e) {
  e.stopPropagation()
  e.preventDefault()
}

function dragover(e) {
  e.stopPropagation()
  e.preventDefault()
}

function handleFiles(files) {
  console.log(files)
}

function drop(e) {
  e.stopPropagation()
  e.preventDefault()

  const dt = e.dataTransfer
  const { files } = dt

  handleFiles(files)
}

dropbox.addEventListener('dragenter', dragenter, false)
dropbox.addEventListener('dragover', dragover, false)
dropbox.addEventListener('drop', drop, false)

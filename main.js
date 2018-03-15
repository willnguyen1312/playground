window.URL = window.URL || window.webkitURL

const fileSelect = document.getElementById('fileSelect')
const fileElem = document.getElementById('fileElem')
const fileList = document.getElementById('fileList')

fileSelect.addEventListener(
  'click',
  (e) => {
    if (fileElem) {
      fileElem.click()
    }
    e.preventDefault() // prevent navigation to "#"
  },
  false,
)

function handleFiles(files) {
  if (!files.length) {
    fileList.innerHTML = '<p>No files selected!</p>'
  } else {
    fileList.innerHTML = ''
    const list = document.createElement('ul')
    fileList.appendChild(list)
    for (let i = 0; i < files.length; i++) {
      const li = document.createElement('li')
      list.appendChild(li)

      const img = document.createElement('img')
      img.src = window.URL.createObjectURL(files[i])
      img.height = 60
      img.onload = function () {
        window.URL.revokeObjectURL(this.src)
      }
      li.appendChild(img)
      const info = document.createElement('span')
      info.innerHTML = `${files[i].name}: ${files[i].size} bytes`
      li.appendChild(info)
    }
  }
}

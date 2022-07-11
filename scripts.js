let spanScreen = document.getElementById('result')

function insert(num) {
  spanScreen.innerHTML = spanScreen.innerHTML + num
}

function clean() {
  spanScreen.innerHTML = ''
}

function removeLastNumber() {
  let contentScreen = spanScreen.innerHTML

  spanScreen.innerHTML = contentScreen.substring(0, contentScreen.length - 1)
}

function total() {
  let contentScreen = spanScreen.innerHTML

  if (contentScreen) {
    spanScreen.innerHTML = eval(contentScreen)
  } else {
    spanScreen.innerHTML = ''
  }
}

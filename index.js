window.target = document.getElementById('target')
window.flag = false

window.toggleClass = function(){
  if (flag) {
    target.className = "normal"
  } else {
    target.className = "normal translate"
  }
  flag = !flag
}
document.body.onclick = () => {
  let element = document.getElementById("wrapper")
  element.innerHTML= ''
  element.style.background = "linear-gradient(to bottom right," + randomRgb() + " 0%, " + randomRgb() + " 100%)"
  function randomRgb() {
    return "rgb(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")"
  }
}
document.onkeydown = e => e.code === 'Enter' ? document.body.click() : {}

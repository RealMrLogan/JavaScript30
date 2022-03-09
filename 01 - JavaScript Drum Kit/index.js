// add the class and play sound
const onKeyDown = ({ keyCode }) => {
  const [key, audio] = document.querySelectorAll(`[data-key="${keyCode}"]`)
  if (key === undefined) return
    
  key.classList.add('playing')
  audio.currentTime = 0 // rewind to the start
  audio.play()
}

// remove the class
const onTransitionEnd = (e) => {
  if (e.propertyName !== 'transform') return
  
  e.target.classList.remove('playing')
}

window.addEventListener('keydown', onKeyDown)
Array.from(document.querySelectorAll('.key')).forEach((key) => key.addEventListener('transitionend', onTransitionEnd))
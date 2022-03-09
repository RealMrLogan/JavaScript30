const getKeyAndAudio = (keyCode) => {
  try {
    return document.querySelectorAll(`[data-key="${keyCode}"]`)
  } catch (error) {
    return [null, null]
  }
}

const playSound = ({ keyCode }) => {
  const [key, audio] = getKeyAndAudio(keyCode)
  if (key === undefined) return

  if (parseInt(key.dataset.key, 10) === keyCode) {
    key.classList.toggle('playing')
    audio.play()
  }
}

// add the class and sound
window.addEventListener('keydown', playSound)

// remove the class
window.addEventListener('keyup', playSound)
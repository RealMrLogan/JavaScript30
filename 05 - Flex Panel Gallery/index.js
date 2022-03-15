const onPanelClick = (e) => {
  if (e.target.classList.length === 0) onPanelClick({ target: e.target.parentElement })
  else e.target.classList.toggle('open')
}

const onTransitionEnd = (e) => {
  if (e.propertyName.includes('flex')) e.target.classList.toggle('open-active')
}

const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
  panel.addEventListener('click', onPanelClick)
  panel.addEventListener('transitionend', onTransitionEnd)
})
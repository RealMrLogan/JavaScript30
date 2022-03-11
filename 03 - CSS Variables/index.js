const update = ({target}) => {
  const suffix = target.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${target.name}`, target.value + suffix);
}

const inputs = document.querySelectorAll('input')

const onLoad = () => inputs.forEach((input) => update({ target: input }))
window.addEventListener('load', onLoad)

inputs.forEach((input) => input.addEventListener('input', update))
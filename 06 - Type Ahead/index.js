const getData = (url) => fetch(url).then(blob => blob.json())

const numberWithCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const buildListItem = ({ city, state, population, highlight }) => {
  const regex = new RegExp(highlight, 'gi')
  const cityName = city.replace(regex, `<span class='hl'>${highlight}</span>`)
  const stateName = state.replace(regex, `<span class='hl'>${highlight}</span>`)

  return `
    <li>
      <span class='name'>${cityName}, ${stateName}</span>
      <span class='population'>${numberWithCommas(population)}</span>
    </li>
  `
}

const findMatches = (searchTerm, data) =>
  data.filter(({ city, state }) =>
    city.toLowerCase().includes(searchTerm) ||
    state.toLowerCase().includes(searchTerm)
)

const onInputChange = (e, data) => {
  const { value } = e.target
  const filteredData = findMatches(value, data)
  
  const suggestions = document.querySelector('.suggestions')
  suggestions.innerHTML = ''
  if (filteredData.length === 1000) return
  const listItems = filteredData.map((place) => buildListItem({highlight: value, ...place})).join('')
  suggestions.innerHTML = listItems
}

// main
;(async () => {
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

  const data = await getData(endpoint)

  const searchInput = document.querySelector('.search-form > input[type="text"]')
  searchInput.addEventListener('input', (e) => onInputChange(e, data))
})()
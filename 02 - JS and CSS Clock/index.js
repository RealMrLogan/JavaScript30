const getDegrees = (value, hand) => {
  let degrees = 90
  if (hand === 'hour') degrees += value * 30
  else degrees += value * 6
  return degrees % 360
}

const setHands = () => {
  const date = new Date()

  // update second hand
  const secondDeg = getDegrees(date.getSeconds())
  document.querySelector('.second-hand').style.transform = `rotate(${secondDeg}deg)`
  // update minute hand
  const minuteDeg = getDegrees(date.getMinutes())
  document.querySelector('.min-hand').style.transform = `rotate(${minuteDeg}deg)`
  
  // update hour hand
  const hourDeg = getDegrees(date.getHours(), 'hour')
  document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`
}

setInterval(setHands, 1000)
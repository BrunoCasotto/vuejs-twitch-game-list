module.exports.getInt = (value) => {
  return Math.floor(parseFloat(value))
}

module.exports.getDecimal = (value) => {
  return (parseFloat(value) % 1).toFixed(2).substring(2)
}

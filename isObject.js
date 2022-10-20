module.exports = function(data) {
  return typeof data === 'object' && !Array.isArray(data)
}

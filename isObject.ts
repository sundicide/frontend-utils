module.exports = function(data: any) {
  return typeof data === 'object' && !Array.isArray(data)
}

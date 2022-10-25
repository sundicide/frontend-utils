module.exports = function(data: any) {
  const dataType = typeof data

  if (data === null || data === undefined) {
    return true
  } else if (dataType === 'string' && data.length === 0) {
    return true
  } else if (
    dataType === 'object' &&
    Array.isArray(data) &&
    data.length === 0
  ) {
    return true
  } else if (dataType === 'object' && Object.keys(data).length === 0) {
    return true
  } else if (dataType === 'number') {
    return false
  }
  return false
}

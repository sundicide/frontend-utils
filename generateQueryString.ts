/**
 * url에 추가할 query string을 리턴
 * @param {*} data Object
 * @returns String
 */
module.exports = function(data: any) {
  if (!isObject(data)) {
    return ''
  }
  let retVar = '?'

  for (const key in data) {
    const value = data[key]

    if (!isEmpty(value)) {
      retVar += `${key}=${value}&`
    }
  }

  return retVar.substring(0, retVar.length - 1)
}

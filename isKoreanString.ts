module.exports = function(data:string) {
  const koreanRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|[가-힣]+$/

  return koreanRegex.test(data)
}

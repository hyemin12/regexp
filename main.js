const str = `
010-1234-5678
email@gmail.com
https://naver.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi') //생성자 방식 
// const regexp = /fox/gi //리터럴방식
// console.log(str.replace(regexp, 'AAA')) //원본 데이터 손상X

// str = str.replace(regexp, 'AAA')
// console.log(str)

// console.log(regexp.test(str))
// console.log(str.match(regexp))

// console.log(
//   str.match(/\.$/g)
// )
//이스케이프문자(Escape Character)
//\(백슬래시) 기호를 통해 본래의 기능에서 벗어난 상태가 바뀌는 문자

// console.log(
//   str.match(/fox | dog/g)
// )
// | 또는 여러개 검색할 때. 뒤에 전체 검색 g 넣어야함

const h = `  the hello world   !      `
console.log(
  h.replace(/\s/g, '')
)
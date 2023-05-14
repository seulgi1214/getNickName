async function generateNickname() {
  // 명사와 동사의 총 개수
  const numOfNouns = 5000;
  const numOfVerbs = 5000;

  // 무작위로 명사와 동사를 선택하기 위한 인덱스 생성
  let nounIndex = Math.floor(Math.random() * numOfNouns) + 1;
  let verbIndex = Math.floor(Math.random() * numOfVerbs) + 1;

  // API에서 명사와 동사를 가져옴
  let noun = await fetch(
    `https://stdict.korean.go.kr/openapi/openApiInfo.do?certkey_no=YOUR_CERTKEY_NO&key=YOUR_API_KEY&type_search=search&advanced=y&pos=1&page=${nounIndex}&num=1`
  )
    .then((response) => response.json())
    .then((data) => data.item[0].word);

  let verb = await fetch(
    `https://stdict.korean.go.kr/openapi/openApiInfo.do?certkey_no=YOUR_CERTKEY_NO&key=YOUR_API_KEY&type_search=search&advanced=y&pos=2&page=${verbIndex}&num=1`
  )
    .then((response) => response.json())
    .then((data) => data.item[0].word);

  // 가져온 명사와 동사를 조합하여 닉네임 생성
  let nickname = noun + verb;

  document.getElementById("nickname").innerText = nickname;
}

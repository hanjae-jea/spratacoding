// 복습 예제는 브라우저에서 F12 열고 아래쪽에 Console 메뉴에서 작업해주세요.
// 만약 Console  메뉴가 보이지 않으시다면 Esc 를 눌러보세요. 내려갔다 올라갔다 하는
// 부분이 Console 메뉴 입니다.

// 1. 변수
// 변수는 하나의 작은 파일입니다. 프로그램이 실행되는 동안 내가 
// 필요한 내용을 필요할때 저장하고, 필요할때 읽을 수 있습니다.
let a = 1
let b = 2
a + b    // -> 3
a - b    // -> -1

// 변수의 값은 언제든지 바꿀 수 있습니다!
a = 5
let c = 7
a + b     // -> 12

// 변수에는 텍스트도 저장할 수 있습니다.
let myName = '한재'

// 텍스트는 더하기로 합칠 수도 있습니다
myName + "는 바보래요"  // -> 한재는 바보래요    

// 숫자와 텍스트 끼리도 덧셈이 가능합니다.
myName + a // 한재7


// 2. 함수
// 함수는 수학시간에 배웠던 함수와 같습니다!
// 함수를 만들때는 function 으로 적어주세요
function f(x) {
    return 3 * x + 2;       // 함수에 숫자를 넣으면 3배 곱하고 2를 더해준다
    // 함수의 결과는 항상 return 으로 마무리 지어준다.
}
f(5)    // -> 17
f(2)    // -> 8

// 함수에 집어넣는 매개변수(위에있는 코드 중에서 x, 
// 영어로는 parameter 파라미터라고 부릅니다.)가 없을 수도 있습니다.
// 물론 아래와 같이 함수의 결과가 없을 수도 있어요.
function showAlert() {
    alert('큰일!')
}
showAlert()

// 그럼 결과가 없는 함수는 뭘 해주는 걸까요? 보통은 alert를 열어주거나
// 화면에 보이는 내용을 변경해줍니다. 그것도... 
// 일종의 함수의 결과라고 하면 결과라고 할 수 있겠네요.
// 아래 예제는 여러분들 나홀로메모장 예제 F12 누른 창에서 실행해보세요
function showPostBox() {
    $('#post-box').show()
}
showPostBox()


// 3. 조건문
// 조건문은 if라고 적고 괄호 안에 조건이 맞으면 중괄호 안의 코드를 처리해줍니다.
let math_score = 100  // <- 숫자를 바꿔 봅시다
if (math_score == 100) {   // score 변수의 값이 100이면
    alert('만점입니다!')
}

// 보통 우리는 둘 중 하나를 선택해야 하는 경우가 많죠, 
// 이게 "아니면..." 이라는 영어 뜻으로 else를 적을 수도 있습니다
let english_score = 90
if (english_score == 100) {
    alert('만점입니다 통과!')
}
else {
    alert('만점 아닙니다 탈락!')
}

// 조건을 두 개가 아니라 세 개 이상으로 놓을 경우도 있을 수 있습니다.
// 그때는 "위에거 말고 만약..." 이라는 영어 뜻으로 else if 라고 적습니다.
let korean_score = 95
if (korean_score == 100) {
    alert('A+ 입니다')
}
else if (korean_score > 90) {
    alert('A 입니다')
}
else {
    alert('불합격 입니다')
}


// Quiz. 아래 코드처럼 else if를 안 쓰면 어떻게 될까요?
// science_score 변수에 각각 95, 88, 100 점을 넣어보고 결과를 확인해보세요 
let science_score = 95
if (science_score == 100) {
    alert('A+ 입니다')
}
if (science_score > 90) {
    alert('A 입니다')
}
else {
    alert('불합격 입니다')
}


// 4. 리스트
// 만약 우리가 변수가 여러개 필요하다면 어떻게 해야할까요?
// 변수를 다 하나하나씩 따로 만들면 이름짓기도 굉장히 어려울 것 같습니다.
// 그런 경우를 위해 여러분에게 리스트가 주어집니다.
// 리스트도 위에서 배운 변수에 저장해야 합니다.
let twice = ["모모", "사나", "쯔위"]

// twice 변수에 저장된 리스트를 한 번 살펴봅시다.
// 개발자 도구(F12)에서 아래 입력해보고 세모 버튼 눌러 자세히 살펴봅시다.
twice

// 첫 번째 트와이스 멤버를 찾기 위해서는 0부터 시작합니다.
twice[0]

// 리스트에 새로운 변수를 추가하고 싶으면 .append를 활용합니다
twice.append("다현")

// 리스트에는 다양한 기능이 있습니다. 검색하거나, 삭제하거나 등등..
// 궁금하시다면 javascript list 검색(search/find) 삭제(delete) 등으로
// 검색해보면 설명 자료가 있을거에요

// 5. 딕셔너리
// 변수를 순서대로 저장하는 것 뿐만 아니라 키워드를 이용해 바로바로 검색하고 싶을때 딕셔너리를 사용합니다.
// 리스트에서는 0, 1, 2 ... 로만 변수를 찾을 수 있었는데, 이제는 텍스트로 변수를 찾을 수 있습니다.
// 예를 들어 사람의 정보를 저장한다면, 리스트로 저장하는 것보다 딕셔너리로 저장하는게 더 직관적이겠죠
let hanjae = ["제한재", 815, "Male"]

// 이름은 [0]번째에, 생일은 [1]번째에, 성별은 [2]번째에 있으니 이걸 항상 외우고 있어야 하니 불편하겠죠?
hanjae = {
    "name": "제한재",
    "birthday": 815,
    "gender": "Male"
}
// 이제 hanjae  의 이름을 찾기 위해서는 hanjae["name"] 이나 hanjae.name 으로 찾을 수 있습니다.

// 렌터카의 예시도 들어볼까요?
let rent_a_car = {
    "번호": "36허3132",
    "차종": "320D",
    "제조사": "BMW",
    "유종": "디젤",
    "연식": 2015
}

// 리스트와 딕셔너리는 조합이 가능합니다. 중고차 여러대의 정보는 이런식으로 저장합니다.
let second_car = [
    {
        "번호": "12라5152",
        "차종": "벤츠",
        "연식": 2014,
        "키로수": 62743
    },
    {
        "번호": "21마6799",
        "차종": "현대",
        "연식": 2016,
        "키로수": 24025
    }
]
// [0] 번째 중고차의 키로수를 알아보겠습니다.
second_car[0]["키로수"]

// [1] 번째 중고차의 연식을 알아보는 방법은
second_car[1]["연식"]

// 같은 형식으로 여러개의 중고차를 같은 형식으로 추가해주면 더 좋을 것 같습니다.
// 여러분은 append를 배웠으니 append를 이용해 딕셔너리 하나를 추가해 보겠습니다.
second_car.append({
    "번호": "17가9931",
    "차종": "기아",
    "연식": 2015,
    "키로수": 82523
})


// 6. 반복문
// 리스트에 값이 여러개 있는데, 이걸 우리가 직접 하나씩 코딩하는 것도 비효율적이겠죠
// 리스트안에 있는 값을 다루거나, 여러번 컴퓨터에게 일을 시키기 위해 반복문이 존재합니다.
// 0, 1, 2 사이에는 각각 세미콜론 ";" 을 넣어주어야 합니다
// for( 0.시작문장 ; 1. 조건문 ; 3. 변경 ){
//  2. 본문    
// }
// 0. 시작문장 실행 후에
//      1. 조건문이 참이면, 2. 본문을 실행하고, 3. 변경을 처리
// 다시 1. 조건문이 참이면, 2. 본문을 실행하고, 3. 변경을 처리
// 다시 1. 조건문이 참이면, 2. 본문을 실행하고, 3. 변경을 처리
// 다시 1. 조건문이 참이면, 2. 본문을 실행하고, 3. 변경을 처리
// ....
// 1. 조건문이 참이면, 2. 본문을 실행하고, 3. 변경을 처리
// 1. 조건문이 거짓이면 중괄호 밖으로 빠져 나갑니다.

// 예제를 통해 다시 한 번 살펴봅시다
for (let i = 0; i < 5; i++){    // i++ 은 숫자를 1 늘려줍니다. 원래는 i=i+1 형태로 적어야 하는데, 워낙 자주쓰이는 형식이어서 축약형으로 종종 적습니다 
    console.log(i);             // console.log 함수는 대략 출력해주는 함수라고 여러분도 짐작하실 수 있겠죠?
}
// 출력 결과
// 0
// 1
// 2
// 3
// 4

// !!5는 출력되지 않습니다. 5는 5보다 작지 않기 때문에 1. 조건문에서 거짓이기 때문에 중괄호 밖으로 빠져나가게 됩니다.

// 반복문과 리스트를 섞으면 이런 코드가 가능합니다
for (let i = 0; i < twice.length; i++){
    console.log("트와이스 멤버 " + twice[i] + "사랑해!")
}

for (let i = 0; i < second_car.length; i++){
    console.log(second_car[i])
}

// 반복문과 조건문을 섞으면 이런 코드도 가능합니다.
console.log("0부터 8사이의 모든 홀수")
for (let i = 0; i <= 8; i++){
    if (i % 2 == 1) {   // i를 2로 나눈 나머지가 1이면 홀수 입니다!
        console.log(i + "는 홀수입니다")
    }
}


// 마지막으로
// 리스트와, 딕셔너리와, 반복문과, 조건문을 합쳐봅시다.
// 딕셔너리를 가지고 있는 리스트에 저장된 중고차 중에서 키로수가 50000키로 이상인 차량만 뽑아보겠습니다.
for (let i = 0; i < second_car.length; i++){
    if (second_car[i]["키로수"] >= 50000) {
        console.log(second_car[i])
    }
}
const quizData = [
  {
      question: "Ktorý je prvý deň v týždni?",
      a: "sobota",
      b: "streda",
      c: "utorok",
      d: "pondelok",
      correct: "d",
  },
  {
      question: "Koľko dní má týždeň?",
      a: "7",
      b: "6",
      c: "12",
      d: "30",
      correct: "a",
  },
  {
      question: "Koľko mesiacov má rok?",
      a: "7",
      b: "20",
      c: "12",
      d: "24",
      correct: "c",
  },
  {
      question: "Koľko hodín má jeden deň?",
      a: "7",
      b: "24",
      c: "12",
      d: "10",
      correct: "b",
  },
  {
    question: "Koľko je 5.5?",
    a: "20",
    b: "24",
    c: "25",
    d: "28",
    correct: "c",
},{
  question: "V ktorom štáte sa hovorí anglickým jazykom?",
  a: "Kanada",
  b: "Nemecko",
  c: "Japonsko",
  d: "Slovensko",
  correct: "a",
},{
  question: "Kde je Socha slobody?",
  a: "v Amerike",
  b: "v Ázii",
  c: "v Afrike",
  d: "v Austrálii",
  correct: "a",
},{
  question: "Ako sa volá hlavné mesto Nemecka?",
  a: "Varšava",
  b: "Mníchov",
  c: "Amsterdam",
  d: "Berlín",
  correct: "d",
},{
  question: "Ktorý detektív je Belgičan?",
  a: "Derick",
  b: "Poirot",
  c: "Columbo",
  d: "Big Ben",
  correct: "b",
},{
  question: "Ako sa po anglicky povie jablko?",
  a: "banana",
  b: "pear",
  c: "strawberry",
  d: "apple",
  correct: "d",
},{
  question: "Ako je po nemecky čarodejnica?",
  a: "ježibaba",
  b: "witch",
  c: "die Hexe",
  d: "das Auto",
  correct: "c",
},{
  question: "Koľko hodín je na obed?",
  a: "10:00",
  b: "11:00",
  c: "12:00",
  d: "20:00",
  correct: "c",
},{
  question: "Koľko hodín je o polnoci?",
  a: "05:00",
  b: "24:00",
  c: "12:00",
  d: "10:00",
  correct: "b",
},{
  question: "Ktoré je hlavné mesto USA?",
  a: "New York",
  b: "Los Angeles",
  c: "Washington, D.C.",
  d: "Londýn",
  correct: "c",
},{
  question: "Kto chcel zjesť Janka a Marienku?",
  a: "vlk",
  b: "tanculienka",
  c: "zahrajko",
  d: "ježibaba",
  correct: "d",
},{
  question: "V koľkých rokoch sa staneme dospelými?",
  a: "15",
  b: "18",
  c: "21",
  d: "12",
  correct: "c",
},{
  question: "KKtorá svetová strana je oproti východu?",
  a: "západ",
  b: "juhozápad",
  c: "juh",
  d: "sever",
  correct: "a",
},{
  question: "čo vznikne zmiešaním modrej a žltej?",
  a: "zelená",
  b: "ružová",
  c: "čierna",
  d: "fialová",
  correct: "a",
},{
  question: "Koľko je ročných období?",
  a: "2",
  b: "4",
  c: "10",
  d: "12",
  correct: "b",
},{
  question: "Hlavné mesto Španielska je:",
  a: "Berlín",
  b: "Moskva",
  c: "Madrid",
  d: "Bratislava",
  correct: "c",
},{
  question: "V ktorom mesiaci sú Vianoce?",
  a: "v januári",
  b: "vo februári",
  c: "v septembri",
  d: "v decembri",
  correct: "d",
},{
  question: "Ako sa volá český prezident?",
  a: "Zuzana Čaputová",
  b: "Jožko Mrkvička",
  c: "Miloš Zeman",
  d: "Mária Terézia",
  correct: "c",
},{
  question: "Z čoho sa varába papier?",
  a: "z dreva",
  b: "zo skla",
  c: "z hliny",
  d: "z múky",
  correct: "a",
},{
  question: "Ako sa volá mláďa sliepky?",
  a: "kozliatko",
  b: "kuriatko",
  c: "jahniatko",
  d: "káčatko",
  correct: "b",
},{
  question: "Čím ľudia dýchajú?",
  a: "pľúcami",
  b: "srdcom",
  c: "rukami",
  d: "vlasmi",
  correct: "a",
},{
  question: "Čím zapisujeme hudbu?",
  a: "písmenami",
  b: "číslami",
  c: "notami",
  d: "azbukou",
  correct: "c",
},{
  question: "Aké chromozómy majú chlapci?",
  a: "XY",
  b: "XX",
  c: "XXX",
  d: "XZ",
  correct: "a",
},{
  question: "Aká vysoká teplota je horúčka?",
  a: "0°C",
  b: "38°C",
  c: "100°C",
  d: "-100°C",
  correct: "b",
},{
  question: "Koľko hodín je na obed?",
  a: "12:00",
  b: "08:00",
  c: "18:00",
  d: "24:00",
  correct: "a",
},{
  question: "Ako hovoríme maminej alebo tátovej sestre?",
  a: "ježibaba",
  b: "dedko",
  c: "princezná",
  d: "teta",
  correct: "d",
},{
  question: "KKtorý mesiac je zimný?",
  a: "jún",
  b: "júl",
  c: "september",
  d: "január",
  correct: "d",
},{
  question: "Ako sa povie tekvica po anglicky?",
  a: "dýně",
  b: "pumpkin",
  c: "car",
  d: "baby",
  correct: "b",
},{
  question: "Koľko je 1+2+3+4+5?",
  a: "14",
  b: "15",
  c: "16",
  d: "17",
  correct: "b",
},{
  question: "Ako vyzerá lienka?",
  a: "biela s červenými bodkami",
  b: "červená s čiernymi bodkami",
  c: "ružová",
  d: "čiernobiela pásikavá",
  correct: "b",
},{
  question: "Kedy má sviatok Mikuláš?",
  a: "v máji",
  b: "v septembri",
  c: "v decembri",
  d: "v auguste",
  correct: "c",
},{
  question: "Kde je ostrov Madagaskar?",
  a: "v okolí Austrálie",
  b: "pri Afrike",
  c: "na južnom póle",
  d: "vedľa Grónska",
  correct: "b",
},{
  question: "Akým jazykom jazykom rozprávajú Rakúšania?",
  a: "slovenským",
  b: "rakúzskym",
  c: "nemeckým",
  d: "talianskym",
  correct: "c",
},{
  question: "Kto je slovenský minister financií?",
  a: "Alžbeta II.",
  b: "Václav Havel",
  c: "Božena Němcová",
  d: "Igor Matovič",
  correct: "d",
},{
  question: "Čo je opakom bielej?",
  a: "červená",
  b: "modrá",
  c: "čierna",
  d: "zlatá",
  correct: "c",
},{
  question: "Vyber len párne čísla:",
  a: "2,4,5",
  b: "3,4,5",
  c: "2,7,9",
  d: "8,10,12",
  correct: "d",
},
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const result = document.getElementById('resultquestion')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer

  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })

  return answer
}
let answers= []; 
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  
  if(answer) { answers.push(answer);
          console.log(answers);}

  if(answer) {
      if(answer === quizData[currentQuiz].correct) {
          score++;
          
          
      }
      
      currentQuiz++;
      

      if(currentQuiz < quizData.length) {
          loadQuiz()
      } else {
          
          
/* 
*/
         let results= quizData.map ((question,i) => 
         
         
         ` 
              <div class="${quizData[i].correct===answers[i]?
                  "correct": "false" } quiz-header ">
              <h2 id="question">${question.question}</h2>
              <ul id="resultquestion"  >
                <li >
                  <input type="radio" name="answer" id="a" class="answer">
                  <label for="a" id="a_text">${question.a}</label>
                </li>
      
                <li>
                  <input type="radio" name="answer" id="b" class="answer">
                  <label for="b" id="b_text">${question.b}</label>
                </li>
      
                <li>
                  <input type="radio" name="answer" id="c" class="answer">
                  <label for="c" id="c_text">${question.c}</label>
                </li>
      
                <li>
                  <input type="radio" name="answer" id="d" class="answer">
                  <label for="d" id="d_text">${question.d}</label>
                </li>
                <li>
                <h4>Vybral jsi: ${question[quizData[i].correct]}</h4>
                <h4>Správná odpověď: ${question[answers[i]]}</h4>

              
                </li>
                
              </ul>
            </div>`
              
              )

//                 result.classList.add("correct")
// /* 
              

              /* quizData.forEach ((question,i) =>
               quizData[i].correct===answers[i]?
                result.classList.add("correct")  : result.classList.add("false") 
               ) */
          
       


          quiz.innerHTML = `
              <h2>Získal jsi ${score} bodů z${quizData.length}.</h2>
             

              
              
             
  
              ${results}


              

              <button onclick="location.reload()">Znovu zkusit</button>
          `
      
      
      }
  }
})
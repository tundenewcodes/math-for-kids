const firstNum = document.querySelector('.num1')
const secondNum = document.querySelector('.num2')
const correct = document.querySelector('.answer')
const answer1 = document.querySelector('.ans1')
const answer2 = document.querySelector('.ans2')
const answer3 = document.querySelector('.ans3')
const answer4 = document.querySelector('.ans4')
const audio = document.querySelector('audio')
const span = document.querySelector('span')
const section = document.querySelector('section')

let clicked = false

// you can also use forEach here
let score = 0
let answer = null
const adviceKid = () => {


    if (score === 10) {


        section.innerHTML =
            ' congratulations!!! you have performed excellently in this arithemtic please consider another arithmetic'
    }
}
const updateScores = () => {
    if (answer && clicked) {
        score++
        span.innerHTML = score
    } else {
        span.innerHTML = score
    }
}
const generateQuiz = () => {
    const num1 = Math.floor(Math.random() * 13)
    const num2 = Math.floor(Math.random() * 13)
    const falseAns1 = Math.floor(Math.random() * 13)
    const falseAns2 = Math.floor(Math.random() * 13)
    const falseAns3 = Math.floor(Math.random() * 13)
    let allAnswers = []
    let switchAnswer = []
    answer = num1 + num2

    allAnswers = [answer, falseAns1, falseAns2, falseAns3]
        // to shuffle

    for (i = allAnswers.length; i--;) {
        switchAnswer.push(
            allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
        )
    }
    firstNum.innerHTML = num1
    secondNum.innerHTML = num2
    answer1.innerHTML = switchAnswer[0]
    answer2.innerHTML = switchAnswer[1]
    answer3.innerHTML = switchAnswer[2]
    answer4.innerHTML = switchAnswer[3]
    updateScores()
    adviceKid()
}


answer1.addEventListener('click', function() {
    if (answer1.innerHTML == answer) {
        clicked = true
        generateQuiz()
        console.log(answer)
    } else {

        audio.play()
    }
})
answer2.addEventListener('click', () => {
    if (answer2.innerHTML == answer) {
        clicked = true
        generateQuiz()
        console.log(answer)
    } else {
        audio.play()
    }
})
answer3.addEventListener('click', () => {
    if (answer3.innerHTML == answer) {
        clicked = true
        generateQuiz()
        console.log(answer)
    } else {
        audio.play()
    }
})
answer4.addEventListener('click', () => {
        if (answer4.innerHTML == answer) {
            clicked = true
            generateQuiz()
            console.log(answer)
        } else {
            audio.play()
        }
    })
    // answer2.addEventListener('click', (answer2) => startQuiz.bind(null, answer2))
    // answer3.addEventListener('click', (answer3) => startQuiz.bind(null, answer3))
    // answer4.addEventListener('click', (answer4) => startQuiz.bind(null, answer4))

generateQuiz()
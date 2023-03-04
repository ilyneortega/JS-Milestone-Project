const game =  document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const categoryList = [
    {
        genre: 'Music',
        questions: [
            {
                question: 'Which singer is from Barbados?',
                answers: [ 'Beyonce', 'Usher', 'Rihanna', 'Jason Derulo'],
                correct: 'Rihanna',
                level: 'easy',
            },
            {
                question: 'What boy band did Zayn Malik leave in 2015?',
                answers: ['Jonas Brothers','5SOS', 'NSYNC', 'One Direction'],
                correct: 'One Direction',
                level: 'medium',
            },
            {
                question: "Which Marvel movie's soundtrack won two Grammys?",
                answers: ['Black Panther', 'Iron Man', 'Thor', 'Spider Man'],
                correct: 'Black Panther',
                level: 'hard'
            },
        
        ]
    },
    {
        genre: 'Sports',
        questions: [
            {
                question: 'The FIFA World Cup is held every how many years?',
                answers: ['Two', 'Three', 'Four', 'Five'],
                correct: 'Four',
                level: 'easy',
            },
            {
                question: 'What is the national sport of Canada?',
                answers: ['Hockey', 'Lacrosse', 'Baseball', 'Soccer'],
                correct: 'Lacrosse',
                level: 'medium'
            },
            {
                question: 'How long is a marathon?',
                answers: ['20.2 miles', '22.5 miles', '25.4 miles', '26.2 miles'],
                correct: '26.2 miles',
                level: 'hard'
            },
        ]
    },
    {
        genre: 'Movie',
        questions: [
            {
                question: 'What year was the Titanic movie released?',
                answers: ['1995', '1997', '2000', '2001'],
                correct: '1997',
                level: 'easy',
            },
            {
                question: 'In The Matrix, Neo takes a pill that is what color?',
                answers: ['Green', 'Blue', 'Red', 'Yellow'],
                correct: 'Red',
                level: 'medium'
            },
            {
                question: 'What score did Elle Woods get on her LSAT in Legally Blonde?',
                answers: ['165', '155', '179', '169'],
                correct: '179',
                level: 'hard'
            },
        ]
    },

    {
        genre: 'Fashion',
        questions: [
            {
                question: 'What nationality was Yves Saint Laurent?',
                answers: ['Italian', 'French', 'American', 'Spanish'],
                correct: 'French',
                level: 'easy',
            },
            {
                question: 'In which country was ASOS founded?',
                answers: ['Scotland', 'Sweden', 'England', 'Croatia'],
                correct: 'England',
                level: 'medium'
            },
            {
                question: 'Which designer created the little black dress?',
                answers: ['Donatella Versace', 'Coco Chanel', 'Yves Saint Laurent', 'Christian Dior'],
                correct: 'Coco Chanel',
                level: 'hard'
            },
        ]
    }
]





function addCategory(category) {
   const column = document.createElement('div')
   column.classList.add('genre-column')

   const genreName = document.createElement('div')
   genreName.classList.add('genre-name')
   genreName.innerHTML = category.genre

   column.append(genreName)
   game.append(column)

   category.questions.forEach(question => {
    const card = document.createElement('div')
    card.classList.add('card')
    column.append(card)

    if(question.level === 'easy') {
        card.innerHTML = 100
    }

    if(question.level === 'medium') {
        card.innerHTML = 200
    }

    if(question.level === 'hard') {
        card.innerHTML = 300
    }

    let score = 0

    card.setAttribute('data-question', question.question)
    card.setAttribute('data-answer-1', question.answers[0])
    card.setAttribute('data-answer-2', question.answers[1])
    card.setAttribute('data-answer-3', question.answers[2])
    card.setAttribute('data-answer-4', question.answers[3])
    card.setAttribute('data-correct', question.correct)
    card.setAttribute('data-value', card.getInnerHTML())

    card.addEventListener('click', flipCard)
   })
}


function flipCard() {
    this.innerHTML = ''
    this.style.fontSize = '15px'
    this.style.lineHeight = '20px'

    const showText = document.createElement('div')
    showText.classList.add('show-text')
    showText.innerHTML = this.getAttribute('data-question')

    document.createElement('button')
    const buttonOne = document.createElement('button')
    const buttonTwo = document.createElement('button')
    const buttonThree = document.createElement('button')
    const buttonFour = document.createElement('button')

    buttonOne.classList.add('first-button')
    buttonTwo.classList.add('second-button')
    buttonThree.classList.add('third-button')
    buttonFour.classList.add('fourth-button')


    buttonOne.innerHTML = this.getAttribute('data-answer-1')
    buttonTwo.innerHTML = this.getAttribute('data-answer-2')
    buttonThree.innerHTML = this.getAttribute('data-answer-3')
    buttonFour.innerHTML = this.getAttribute('data-answer-4')

    buttonOne.addEventListener('click', showResult)
    buttonTwo.addEventListener('click', showResult)
    buttonThree.addEventListener('click', showResult)
    buttonFour.addEventListener('click', showResult)


    this.append(showText, buttonOne, buttonTwo, buttonThree, buttonFour)

    const allCards = array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.removeEventListener('click', flipCard))
}

function showResult() {
   const cardButton = this.parentElement

   if (cardButton.getAttribute('data-correct')== this.innerHTML) {
    score = score + parseInt (cardButton.getAttribute('data-value'))
   }


}





categoryList.forEach(category => addCategory(category))
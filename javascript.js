const game =  document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
    {
        genre: music,
        questions: [
            {
                question: "What singer is from Barbados?",
                answers: [
                    {text: 'Beyonce', correct: false},
                    {text: 'Usher', correct: false},
                    {text: 'Rihanna', correct: true},
                    {text: 'Jason Derulo', correct: false},
                ]
            },
            {
                question: "What boy band was Harry Styles in?",
                answers: [
                    {text: 'One Direction', correct: true},
                    {text: 'Jonas Brothers', correct: false},
                    {text: 'Backstreet Boys', correct: false},
                    {text: 'NSYNC', correct: false}, 
                ]
            },
        
            {
                question: "What Christmad song is by Mariah Carey?",
                answers: [
                    {text: 'Mistletoe', correct: false},
                    {text: 'All I Want for Christmas is You', correct: true},
                    {text: 'Santa Tell Me', correct: false},
                    {text: 'Last Christmas', correct: false},
                ]
            },
        
        ]
    },

    {
        genre: sports,
        questions: []
    },

    {
        genre: entertainment,
        questions: []
    },

    {
        genre: fashion,
        questions: []
    }
]
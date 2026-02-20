let opening_field = document.querySelector('.screen1')
let question_field = document.querySelector('.screen2')
let final_field = document.querySelector('.final')
let option_field = document.querySelector('.answers')
let start_field = document.querySelector('.play')
let home = document.querySelector('.home')
let high_score = document.querySelector('.high_score')

start_field.addEventListener('click', function(){
    question_field.style.display = 'flex'
    opening_field.style.display= 'none'
    final_field.style.display= 'none'
    current_question= 0
    list_question[current_question].show_questions()
})

home.addEventListener('click', function(){
    question_field.style.display = 'none'
    opening_field.style.display= 'flex'
    final_field.style.display= 'none'
    high_score.innerHTML= 'HIGH SCORE:'+ score
})

//What is this logo?
let logo_field = document.querySelector('.questions')
let option1_field = document.querySelector('.option1')
let option2_field = document.querySelector('.option2')
let option3_field = document.querySelector('.option3')
let option4_field = document.querySelector('.option4')

class Question{
    constructor(questions, option1, option2, option3, true_answer){
        this.questions = questions
        this.option1 = option1
        this.option2 = option2
        this.option3 = option3
        this.true_answer = true_answer
    }
    show_questions(){
        let random = Math.round(Math.random()*3)
        if (random == 0){
            logo_field.src = this.questions
            option1_field.innerHTML = this.true_answer
            option2_field.innerHTML = this.option2
            option3_field.innerHTML = this.option3
            option4_field.innerHTML = this.option1
        }
        if (random == 1){
            logo_field.src = this.questions
            option1_field.innerHTML = this.option1
            option2_field.innerHTML = this.true_answer
            option3_field.innerHTML = this.option3
            option4_field.innerHTML = this.option2
        }
        if (random == 2){
            logo_field.src = this.questions
            option1_field.innerHTML = this.option1
            option2_field.innerHTML = this.option2
            option3_field.innerHTML = this.true_answer
            option4_field.innerHTML = this.option3
        }
        if (random == 3){
            logo_field.src = this.questions
            option1_field.innerHTML = this.option1
            option2_field.innerHTML = this.option2
            option3_field.innerHTML = this.option3
            option4_field.innerHTML = this.true_answer
        }
    }
}

let question1 = new Question('src/wendys.png', "McDonald's", 'Burger King', 'Starbucks', "Wendy's" )
let question2 = new Question('src/kfc.png', 'A&W', 'CFC', 'Pizza Hut', 'KFC')
let question3 = new Question('src/shell.png', 'Toyota', 'Petronas', 'Pertamina', 'Shell')

let list_question = [question1, question2, question3]
let current_question = 0
let score= 0

list_question[current_question].show_questions()
option1_field.addEventListener('click', function(){
    console.log(option1_field.innerHTML)
    console.log(list_question[current_question].true_answer)
    if (option1_field.innerHTML == list_question[current_question].true_answer){
        score+= 1
        console.log(score)
    }
    current_question += 1
    if (current_question < 3){
        list_question[current_question].show_questions()
    }
    if (current_question==3){
        final_field.style.display = 'flex'
        question_field.style.display = 'none'
        opening_field.style.display = 'none'
    }

})
option2_field.addEventListener('click', function(){
    console.log(option2_field.innerHTML)
    console.log(list_question[current_question].true_answer)
    if (option2_field.innerHTML == list_question[current_question].true_answer){
        score+= 1
        console.log(score)
    }
    current_question += 1
    if (current_question < 3){
        list_question[current_question].show_questions()
    }
    if (current_question==3){
        final_field.style.display = 'flex'
        question_field.style.display = 'none'
        opening_field.style.display = 'none'
    }

})
option3_field.addEventListener('click', function(){
    console.log(option3_field.innerHTML)
    console.log(list_question[current_question].true_answer)
    if (option3_field.innerHTML == list_question[current_question].true_answer){
        score+= 1
        console.log(score)
    }
    current_question += 1
    if (current_question < 3){
        list_question[current_question].show_questions()
    }
    if (current_question==3){
        final_field.style.display = 'flex'
        question_field.style.display = 'none'
        opening_field.style.display = 'none'
    }

})
option4_field.addEventListener('click', function(){
    console.log(option4_field.innerHTML)
    console.log(list_question[current_question].true_answer)
    if (option4_field.innerHTML == list_question[current_question].true_answer){
        score+= 1
        console.log(score)
    }
    current_question += 1
    if (current_question < 3){
        list_question[current_question].show_questions()
    }
    if (current_question==3){
        final_field.style.display = 'flex'
        question_field.style.display = 'none'
        opening_field.style.display = 'none'
    }

})


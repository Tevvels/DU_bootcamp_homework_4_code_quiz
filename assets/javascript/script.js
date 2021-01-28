// variables that connect to elements on the DOM 
var screen = document.getElementById("questionScreen");
var choices = document.getElementById("questionChoices");

// 5 questions. simple layout. 60 seconds highscore is the timer remainder. deduct 15 per incorrect 

// variables needed for the script 
var timer = 60;
var questions = [];
// var randomQuestion; 
var counter = 0;
var questionChoices;
var clock;
var highscores = [localStorage.getItem("score")];
// variable to create elements 

var button = document.createElement("button");

button.addEventListener("click",function(){
    startQuiz();
     clock = setInterval(Timer,1000);
     if(timer == 0 || counter == 5 ){
        clearInterval(clock); 
        end();
     }



});
button.textContent = "click me";
button.setAttribute("class","button");


screen.appendChild(button);

// Code Quiz

// var timer;
// var question = [];
// var correctAnwswer;

// my questions 


var questionOne = {
    question: "what kind of coding langauge is JavaScript",
    answer: "Object oriented language",
    wrongAnswers: ["a framework","Procedural Programming Language","Logic Programming Language","Object oriented language"],
    results:false,
    answered:false,
    counter: 0
}

var questionTwo = {
    question: "how to you store a piece information in JavaScript",
    answer: "A variable",
    wrongAnswers: ["a function","if statement","a for loop","A variable"],
    results:false,
    answered:false,
    counter: 0
}
var questionThree = {
    question: "which is True?",
    answer: "All of them",
    wrongAnswers: ["JavaScript runs in the browser","Javascript makes webpages dynamic","Javascript is not Java","All of them"],
    results:false,
    answered:false,
    counter: 0
}
var questionFour = {
    question: "How do we added functionality to DOM elements",
    answer: "an addEventListener",
    wrongAnswers: ["a setInterval","a array","a for loop","an addEventListener"],
    results:false,
    answered:false,
    counter: 0
}
var questionFive = {
    question: "Which is a Javascript Library",
    answer: "Jquery",
    wrongAnswers: ["CSS","Bootstrap","Python","Jquery"],
    results:false,
    answered:false,
    counter: 0
}

questions.push(questionOne,questionTwo,questionThree,questionFour,questionFive);


buildQuestionaire = function(){
        // creates a  button element 
    questionChoices = document.createElement("button");
        // sets a class on to the element 
    questionChoices.setAttribute("class","questionChoices");
        // the event that will happen when I click on the button with one of the choices
    questionChoices.addEventListener("click",function(){
        event.preventDefault();

        console.log(this.textContent);

        // this.textContent can be valuated 


        if(this.textContent !== questions[counter].answer){
            timer = timer - 15;
            questions[counter].answered = true;
        }else{
            questions[counter].answered = true;

        }
     

  


    
        counter++;

        startQuiz();




    });

        //places that button onto the DOM where the choices section is location
        choices.appendChild(questionChoices)


}
// builds the scoreboard
buildsidebar  = function(){
    // creates the aside element
    sideBar = document.createElement('aside');
    // set a class of sidebar to the element
    sideBar.setAttribute("class","sideBar");
    //places the sidebar on the body element
    document.body.appendChild(sideBar);

}

buildsidebar();

//the function that starts the Quiz
startQuiz = function(){
    event.preventDefault();

    //clears the choices sections
    choices.textContent = '';
     //establishes four buttons for the questionaire 
    buildQuestionaire();
    buildQuestionaire();
    buildQuestionaire();
    buildQuestionaire();
    // and the scoreboard
    
//    var randomOrder = Math.floor(Math.random() * Math.floor(3));

//  if statement verifying if the question has been answered

   if(questions.answered == false || counter < 5){

    var theQuestions = document.querySelectorAll(".questionChoices");  
    screen.textContent = questions[counter].question;

   for(i = 0; i < 4; i++){
    var b = arrayShuffle(questions[counter].wrongAnswers);
        for(i = 0; i < theQuestions.length;i++){
            theQuestions[i].textContent = b[i];
            }
         }
      }
    
    }



function Timer(){
    timer--;
    sideBar.textContent = Math.floor(timer);

    if(timer <= 0 || counter == 5){
        clearInterval(clock);
        highscores.push(timer);
        localStorage.setItem("score", highscores);
        end();
    }


}


function arrayShuffle(array){
    var current = array.length;
    var tempValue,newIndex;

    while(current){
        newIndex = Math.floor(Math.random() * current--);

        tempValue = array[current];
        array[current] = array[newIndex];
        array[newIndex] = tempValue;
    }
    return array;

}

function end(){

    var ini =  prompt("Your Initials place?");

    localStorage.setItem("ini",ini);


    var endHeaderDiv = document.createElement('div');
    endHeaderDiv.textContent  = "Game finished";
    endHeaderDiv.setAttribute("class","sideBar-end")
    document.body.appendChild(endHeaderDiv);


    choices.textContent = '';

    screen.textContent = '';
    

    var endHeader = document.createElement('h3');
    endHeader.textContent  = "HighScore";
    endHeaderDiv.appendChild(endHeader);

    var highscore = document.createElement('p');
    endHeader.textContent = localStorage.getItem("ini") + ":" + localStorage.getItem("score");
    endHeaderDiv.appendChild(highscore);






    
   






}
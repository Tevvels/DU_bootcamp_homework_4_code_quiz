
// variables that connect to elements on the DOM 
var screen = document.getElementById("questionScreen");
var choices = document.getElementById("questionChoices");



// variables needed for the script 
var timer;
var questions = ["question 1","question 2", "question 3", "question 4"];
var answers;
var correctAnwswer ;
var randomQuestion; 
var questionChoices;
// variable to create elements 

var button = document.createElement("button");

button.addEventListener("click",function(){
    startQuiz();
});
button.textContent = "click me";
button.setAttribute("class","button");


screen.appendChild(button);

// Code Quiz

// var timer;
// var question = [];
// var correctAnwswer;

startQuiz = function(){
    buildQuestionaire = function(){
       randomQuestion = Math.floor(Math.random() * questions.length);
        screen.textContent = questions[randomQuestion];

    
        questionChoices = document.createElement("button");
        questionChoices.setAttribute("class","questionChoices");


        
        choices.appendChild(questionChoices);
   


    }
    choices.textContent = '';
    buildQuestionaire();
    buildQuestionaire();
    buildQuestionaire();
    buildQuestionaire();

    var questionOne = {
        question: "what kind of coding langauge is JavaScript",
        answer: "Object oriented language",
        wrongAnswers: ["a framework","Procedural Programming Language","Logic Programming Language"],
    }

    

    
    questionChoices.addEventListener("click",function(){



    

    });

    document.body.children[1].children[1].children[0].children[2].style.background = "red";


}

    // creates the space where the questions will be asked.



    // multiple choice questions need 4 buttons.
    // runs responds and gives points or deducts time 

    // display
    // TimeR
    // buttons
    // question
    // question staging 
    // points.


    // question cycle process 
        // dynamic 
        //     start button pushed


            


                // its a iteration that slowly counts down to zero
                // correct answers are rewarded points * timer
                    // uncorrect answers are deducted timer - x value 




        //         div with for options to choose 
        //         probably a form with a radiobutton with the options.
                // after the question is picked the value is stored. the last questions are .removed
                // and  a new set with those value comes up 




                
                




// };

// endgame = function(){

    // this runs after the questions or timer has completed
    
//     display
//         list of highscores
//         button for replay
// }
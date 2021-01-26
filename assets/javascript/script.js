
// variables that connect to elements on the DOM 
var screen = document.getElementById("questionScreen");
var choices = document.getElementById("questionChoices");

// 5 questions. simple layout. 60 seconds highscore is the timer remainder. deduct 15 per incorrect 

// variables needed for the script 
var timer = 60;
var questions = [];
var randomQuestion; 
var correctAnswer = 0;
var questionChoices;
var clock;
// variable to create elements 

var button = document.createElement("button");

button.addEventListener("click",function(){
    startQuiz();
     clock = setInterval(Timer,1000);

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
    wrongAnswers: ["a framework","Procedural Programming Language","Logic Programming Language"],
    results:false
}

var questionTwo = {
    question: "how to you store a piece information in JavaScript",
    answer: "in 2",
    wrongAnswers: ["a function","if statement","a for loop"],
    results:false
}
var questionThree = {
    question: "how to you store a piece information in JavaScript",
    answer: "in 3",
    wrongAnswers: ["a function","if statement","a for loop"],
    results:false
}
var questionFour = {
    question: "how to you store a piece information in JavaScript",
    answer: "in 4",
    wrongAnswers: ["a function","if statement","a for loop"],
    results:false
}
var questionFive = {
    question: "in 5",
    answer: "in 5",
    wrongAnswers: ["a function","if statement","a for loop"],
    results:false
}

questions.push(questionOne,questionTwo,questionThree,questionFour,questionFive);
var apples = arrayShuffle(questions);
console.log(apples)

startQuiz = function(){
    buildQuestionaire = function(){

    
        questionChoices = document.createElement("button");
        questionChoices.setAttribute("class","questionChoices");


        
        choices.appendChild(questionChoices);
   


    }
    buildsidebar  = function(){
        sideBar = document.createElement('aside');
        sideBar.setAttribute("class","sideBar");
        document.body.appendChild(sideBar);
    
    }
    choices.textContent = '';
    buildQuestionaire();
    buildQuestionaire();
    buildQuestionaire();
    buildQuestionaire();
    buildsidebar();
    
    randomQuestion = Math.floor(Math.random() * questions.length);
    // var randomQuestionaire = arrayShuffle(questions);

    screen.textContent = questions[randomQuestion].question;
    var theQuestions = document.body.children[1].children[1].children[0];
    

   var randomOrder = Math.floor(Math.random() * Math.floor(3));
    theQuestions.children[randomOrder].textContent = questions[randomQuestion].answer;
    theQuestions.children[randomOrder].style.background = "red";
    theQuestions.children[randomOrder].addEventListener("click",function(){
        questions[randomQuestion].results = true;
    }
)
    console.log(randomQuestion);
    console.log("randomOrder:" + randomOrder)



   for(i = 0; i < 4; i++){ 
    theQuestions.children[i].addEventListener("click",function(){
        event.stopPropagation();
        event.preventDefault();


        if(questions[randomQuestion].results){
           console.log( "Your Correct!!");
           correctAnswer++;
           console.log(correctAnswer);
           
           
        } else {
           console.log( "Sorry it was " + questions[randomQuestion].answer);
           timer = timer - 15;
        }

        if(correctAnswer <= 5){
            "your finished";
            return;
        }
        screen.textContent = questions[randomQuestion].results;
        

        startQuiz();
// make a random array. run through it in random order for each option.
// the field yates shuffle


        });
    
       }
}

function Timer(){
    timer--;
    sideBar.textContent = Math.floor(timer);

    if(timer <= 0){
        clearInterval(clock);
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



// variables that connect to elements on the DOM 
var screen = document.getElementById("questionScreen");
var choices = document.getElementById("questionChoices");

// 5 questions. simple layout. 60 seconds highscore is the timer remainder. deduct 15 per incorrect 

// variables needed for the script 
var timer = 60;
var questions = [];
var randomQuestion; 
var counter = 0;
var questionChoices;
var clock;
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
   var randomOrder = Math.floor(Math.random() * Math.floor(3));
   if(questions[randomQuestion].answered == false || counter < 5){

    console.log("okay");

    screen.textContent = questions[randomQuestion].question;
    var theQuestions = document.body.children[1].children[1].children[0];

    
    for(i = 0; i < theQuestions.children.length;i++){
        var a = [0,1,2,3];
        var b = parseInt(arrayShuffle(a));
        

        theQuestions.children[b].textContent = questions[randomQuestion].wrongAnswers[i];
    }
    theQuestions.children[randomOrder].addEventListener("click",function(){
        questions[randomQuestion].results = true;
    })

    console.log(randomQuestion);
    console.log("randomOrder:" + randomOrder)



   for(i = 0; i < 4; i++){ 
    theQuestions.children[i].addEventListener("click",function(){


        if(questions[randomQuestion].results == questions[randomQuestion].answer){
           console.log( counter);
           questions[randomQuestion].answered = true;
           counter++
        startQuiz();

           
           
        } else {
           console.log( "Sorry it was " + questions[randomQuestion].answer);
           timer = timer - 15;
           questions[randomQuestion].answered = true;
            counter++
        startQuiz();

        }


    });
// make a random array. run through it in random order for each option.
// the field yates shuffle


        }
    }

    if(counter == 5){
        end();
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

function end(){
    screen.textContent = "Game Finished";
    choices.textContent = timer;
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


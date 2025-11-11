//Event Listeners
document.querySelector("button").addEventListener("click", gradeQuiz);

//Global Variables
var score = 0;
var attempts = localStorage.getItem("total_attempts");

displayQ4Choices();
displayQ9Choices();

//Functions
function displayQ4Choices() {
    let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland", "Delaware"];
    q4ChoicesArray= _.shuffle(q4ChoicesArray);
    for (let i=0; i < q4ChoicesArray.length; i++) {
        document.querySelector("#q4Choices").innerHTML += ` <input type="radio" name="q4" id= "${q4ChoicesArray[i]}"
         value="${q4ChoicesArray[i]}"> <label for="${q4ChoicesArray[i]}"> ${q4ChoicesArray[i]}</label>`;
    }
}

function displayQ9Choices(){
    let q9ChoicesArray = ["Denver", "Phoenix", "Atlanta", "Boston"];
    q9ChoicesArray= _.shuffle(q9ChoicesArray);
    for (let i=0; i < q9ChoicesArray.length; i++) {
        document.querySelector("#q9Choices").innerHTML += ` <input type="radio" name="q9" id= "${q9ChoicesArray[i]}"
         value="${q9ChoicesArray[i]}"> <label for="${q9ChoicesArray[i]}"> ${q9ChoicesArray[i]}</label>`;
    }
}

function isFormValid() {
    let isValid= true;
    if(document.querySelector("#q1").value == ""){
        isValid = false;
        document.querySelector("#validationFdbk").innerHTML = "Question 1 was not answered";
    }
    return isValid;
}

function rightAnswer(index) {
    document.querySelector(`#q${index}Feedback`).innerHTML = "Correct!";
    document.querySelector(`#q${index}Feedback`).className = "bg-success text-white";
    document.querySelector(`#markImg${index}`).innerHTML = "<img src='img/checkmark.png' alt='Checkmark'>";
    score += 10;
}

function wrongAnswer(index){
    document.querySelector(`#q${index}Feedback`).innerHTML = "Incorrect!";
    document.querySelector(`#q${index}Feedback`).className = "bg-warning text-white";
    document.querySelector(`#markImg${index}`).innerHTML = "<img src ='img/xmark.png' alt='xmark'>";
}

function gradeQuiz(){
 console.log("Grading quiz…");
 document.querySelector("#validationFdbk").innerHTML = ""; //resets validation feedback
 if (!isFormValid()) {
    return;
 }

 //variables
 score = 0;
 let q1Response = document.querySelector("#q1").value.toLowerCase();
 let q2Response = document.querySelector("#q2").value;
 let q4Response = document.querySelector("input[name=q4]:checked").value;
 let q5Response = document.querySelector("#q5").value;
 let q6Response = (document.querySelector("#q6").value || "").trim().toLowerCase();
 let q7Response = parseInt(document.querySelector("#q7").value, 10);
 let q9Response = document.querySelector('input[name="q9"]:checked').value;
 let q10Response = document.querySelector('input[name="q10"]:checked').value;

 console.log(q10Response);
 console.log(q2Response);
 console.log(q1Response);

 //Grading Question 1
 if (q1Response == "sacramento") {
    rightAnswer(1);
 } else {
    wrongAnswer(1);
 }

 //Grading Question 2
 if (q2Response == "mo") {
    rightAnswer(2);
 } else {
    wrongAnswer(2);
 }

 //Grading Question 3
 if (document.querySelector("#Jefferson").checked && document.querySelector("#Roosevelt").checked &&
    !document.querySelector("#Jackson").checked && !document.querySelector("#Franklin").checked) {
    rightAnswer(3);
 } else {
    wrongAnswer(3);
 }

//Grading Question 4
if(q4Response == "Rhode Island") {
    rightAnswer(4);
} else {
    wrongAnswer(4);
}

//Grading Question 5
if (q5Response === "alaska") {
  rightAnswer(5);
} else {
  wrongAnswer(5);
}

//Grading Question 6
if (q6Response === "florida") {
  rightAnswer(6);
} else {
  wrongAnswer(6);
}

//Grading Question 7
if (q7Response === 5) {
  rightAnswer(7);
} else {
  wrongAnswer(7);
}

//Grading Question 8
if (document.querySelector("#Huron").checked && document.querySelector("#Ontario").checked && !document.querySelector("#Tahoe").checked && document.querySelector("#Michigan").checked && 
    document.querySelector("#Erie").checked && document.querySelector("#Superior").checked && !document.querySelector("#GreatSalt").checked) {
        rightAnswer(8);
    } else {
        wrongAnswer(8);
    }

//Grading Question 9
if (q9Response === "Denver") {
  rightAnswer(9);
} else {
  wrongAnswer(9);
}

//Grading Question 10
if (q10Response == "pennsylvania"){
    rightAnswer(10);
} else {
    wrongAnswer(10);
}

let scoreMessage = document.querySelector("#scoreMessage");
scoreMessage.classList.remove("text-success", "text-danger");

if (score >= 80) {
  scoreMessage.textContent = "Congratulations! You passed!";
  scoreMessage.classList.add("text-success");   // Bootstrap green
} else {
  scoreMessage.textContent = "Score below 80 — try again!";
  scoreMessage.classList.add("text-danger");   // Bootstrap red
}

document.querySelector("#totalScore").innerHTML = `Total Score: ${score}`;
document.querySelector("#totalAttempts").innerHTML = `Total Attempts: ${++attempts}`;
localStorage.setItem("total_attempts", attempts);

}

var container = document.getElementById('quizcontainer');
var questionEl = document.getElementById('question');
var opt1 =document.getElementById('opt1');
var opt2 =document.getElementById('opt2');
var opt3 =document.getElementById('opt3');
var opt4 =document.getElementById('opt4');
var	nextButton = document.getElementById('nextButton'); 
var	resultCont = document.getElementById('result');
var	currentQuestion = 0;
var	totQuestions = 10;
var score = 0;
var answer ='';

function loadQuestion(questionIndex) {
	// body...
	var q = questions [questionIndex];
	questionEl.textContent	= (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;

}

loadQuestion(currentQuestion);

function loadNextQuestion() {
	// body...
	var	selectedOption = document.querySelector('input[type=radio]:checked');
	if (!selectedOption){
		alert('Please select an answer to proceed');
		return;
	}

	var answer = selectedOption.value;
	if (questions[currentQuestion].answer == answer){
		score+=10;
		
		
	}

	selectedOption.checked = false;
	currentQuestion++;
	if (currentQuestion == totQuestions - 1){
		nextButton.textContent='Finish';
	}

	if (currentQuestion==totQuestions){
		
		resultCont.style.display = "";
		resultCont.textContent = 'Your Score: ' + score;

		quizContainer.innerHTML = '<div class="container question" style="display: none;" ></div>';
		return;
	}

	 loadQuestion(currentQuestion);
}
 

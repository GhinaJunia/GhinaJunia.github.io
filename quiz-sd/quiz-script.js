var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('wadahQuiz');
var questionEl = document.getElementById('soale');
var opt1 = document.getElementById('pil1');
var opt2 = document.getElementById('pil2');
var opt3 = document.getElementById('pil3');
var opt4 = document.getElementById('pil4');
var answer1 = document.getElementById('pilih1');
var answer2 = document.getElementById('pilih2');
var answer3 = document.getElementById('pilih3');
var answer4 = document.getElementById('pilih4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var gambar = document.getElementById('skor');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '.' +  q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Harus diisi ya dek..');
		return;
	}
	answer1.style.backgroundColor = "transparent";
	answer2.style.backgroundColor = "transparent";
	answer3.style.backgroundColor = "transparent";
	answer4.style.backgroundColor = "transparent";
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer) {
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		gambar.style.display = '';
		
		// var x = document.createElement("IMG");
		if (score>=80) {
			gambar.setAttribute("src", "TEPUK TANGAN BBM.gif");
			gambar.setAttribute("width", "304");
			gambar.setAttribute("height", "228");
			resultCont.textContent = 'Your Score:' + score;
		} else{	
			gambar.setAttribute("src", "semangat1.gif");
			gambar.setAttribute("width", "304");
			gambar.setAttribute("height", "228");
			resultCont.textContent = 'Your Score:' + score;
			resultCont.textContent = 'Lebih giat belajar!\n'+'Your Score:' + score ;
		}
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);

function selectOption() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	var answer = selectedOption.value;

	if (answer==1) {
		answer1.style.backgroundColor = "rgba(255,255,255,0.5)";
		answer2.style.backgroundColor = "transparent";
		answer3.style.backgroundColor = "transparent";
		answer4.style.backgroundColor = "transparent";
	}else if (answer == 2) {
		answer1.style.backgroundColor = "transparent";
		answer2.style.backgroundColor = "rgba(255,255,255,0.5)";
		answer3.style.backgroundColor = "transparent";
		answer4.style.backgroundColor = "transparent";
	}else if (answer == 3) {
		answer1.style.backgroundColor = "transparent";
		answer2.style.backgroundColor = "transparent";
		answer3.style.backgroundColor = "rgba(255,255,255,0.5)";
		answer4.style.backgroundColor = "transparent";
	}else if (answer == 4) {
		answer1.style.backgroundColor = "transparent";
		answer2.style.backgroundColor = "transparent";
		answer3.style.backgroundColor = "transparent";
		answer4.style.backgroundColor = "rgba(255,255,255,0.5)";
	}
}
function fungsiklik()
{
	document.getElementById('materi').style.display='block';
	document.getElementById('halaman').style.display='none';
}
function kembali()
{
	document.getElementById('materi').style.display='none';
	document.getElementById('halaman').style.display='block';
}
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
};

Quiz.prototype.guess = function(answer) {
  if (this.getQuestionIndex().isCorrectAnswer(answer)) {
    this.score++;
  }

  this.questionIndex++;
};

Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
};

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
};

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show question
    var element = document.getElementById('question');
    element.innerHTML = quiz.getQuestionIndex().text;

    // show options
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById('choice' + i);
      element.innerHTML = choices[i];
      guess('btn' + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById('progress');
  element.innerHTML =
    'Question ' + currentQuestionNumber + ' of ' + quiz.questions.length;
}

function showScores() {
  var gameOverHTML = '<h1>Result</h1>';
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + '</h2>';
  var element = document.getElementById('quiz');
  element.innerHTML = gameOverHTML;
}

// create questions here
var questions = [
    new Question(
   'Add the following numbers: 11+5',
    ['18', '19', '14', '16'],
   '16'
  ),
    new Question(
   'Add the following numbers: 9+8',
    ['19', '17', '15', '20'],
   '17'
  ),
    new Question(
   'Add the following numbers: 10+11',
    ['21', '23', '20', '19'],
   '21'
  ),
    new Question(
   'Add the following numbers: 12+13',
    ['30', '27', '22', '25'],
   '25'
  ),
    new Question(
   'Add the following numbers: 20+15',
    ['15', '35', '25', '10'],
   '35'
  ),
    new Question(
   'subtract the following numbers: 20-15',
    ['5', '15', '25', '10'],
   '5'
  ),
    new Question(
   'subtract the following numbers: 9-8',
    ['3', '1', '2', '0'],
   '1'
  ),
    new Question(
   'subtract the following numbers: 19-8',
    ['11', '9', '12', '10'],
   '11'
  ),
    new Question(
   'subtract the following numbers: 40-29',
    ['10', '19', '11', '13'],
   '11'
  ),
    new Question(
   'subtract the following numbers: 20-10',
    ['30', '15', '25', '10'],
   '10'
  ),
    new Question(
   'Multiply the following numbers: 21x11',
    ['211', '241', '231', '221'],
   '231'
  ),
    new Question(
   'Multilpy the following numbers: 20x10',
    ['200', '102', '201', '210'],
   '200'
  ),
    new Question(
   'Multiply the following numbers: 12x13',
    ['165', '156', '256', '146'],
   '156'
  ),
    new Question(
   'Multiply the following numbers: 77x88',
    ['7667', '7676', '6767', '6776'],
   '6776'
  ),
    new Question(
   'Multiply the following numbers: 15x15',
    ['230', '250', '225', '255'],
   '225'
  ),
    new Question(
   'Divide the following numbers: 20 % 10',
    ['30', '10', '2', '1'],
   '  2'
  ),

    new Question(
   'Divide the following numbers: 70 % 5',
    ['9', '16', '12', '14'],
   '14'
  ),
    new Question(
   'Divide the following numbers: 33 % 3',
    ['11', '15', '12', '10'],
   '11'
  ),
    new Question(
   'Divide the following numbers: 100 % 2',
    ['35', '50', '55', '25'],
   '50'
  ),
    new Question(
   'Divide the following numbers: 75 % 15',
    ['3', '5', '7', '10'],
   '5'
  ),
    
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();

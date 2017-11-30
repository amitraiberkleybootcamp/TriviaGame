var questions_answers = [
		{
			question:"What is question 1?",
			choices:["Choice A","Choice B","Choice C","Choice D"],
			correctAnswer:1
		},

		{
			question:"What is question 2?",
			choices:["Choice A","Choice B","Choice C","Choice D"],
			correctAnswer:2
		}
	];

	var currentquestion = 0;
	var correctAnswers = 0;

	function setupQuestions() {

  		$('#question').text(questions_answers[currentquestion].question);
  		$('#first').html('<div class="radio"><label><input type="radio" name="option" value="1" >' + questions_answers[currentquestion].choices[0] + '</label></div>');
  		$('#second').html('<div class="radio"><label><input type="radio" name="option" value="2" >' + questions_answers[currentquestion].choices[1] + '</label></div>');
  		$('#third').html('<div class="radio"><label><input type="radio" name="option" value="3" >' + questions_answers[currentquestion].choices[2] + '</label></div>');
  		$('#fourth').html('<div class="radio"><label><input type="radio" name="option" value="4" >' + questions_answers[currentquestion].choices[3] + '</label></div>');
  		
  	};

 

  	function checkAnswer() {

  		if ($('input[name=option]:checked').val() == questions_answers[currentquestion].correctAnswer) {
    		correctAnswers++;
  		}

  		
  	};

  	$(document).ready(function() {

  		$('.jumbotron').hide();
  		$('#time-remain').hide();
  		$('#start').click(function() 
  			{
    			$('.jumbotron').fadeIn();
    			$('#time-remain').fadeIn();
    			$(this).hide();
    			$('#time-intro').hide();
    			stopwatch.start();
  			});

  		setupQuestions();

		  $('#next').click(function() {
		    event.preventDefault();
		    checkAnswer();
		    currentquestion++;
		    console.log("line 96 "+currentquestion);

		    if (currentquestion < questions_answers.length) {
		      setupQuestions();
		      if (currentquestion == questions_answers.length - 1) {
		        $('#next').html('Submit');
		        $('#next').click(function() {
		          $('.jumbotron').hide();
		          $("#result").html('You correctly answered ' + correctAnswers + " out of " + currentquestion + " questions! ").hide();
		          $('#result').fadeIn(1500);
              clearInterval(intervalId);
              clockRunning = false;
		        });

		      };

		    };
		  });
		});
	
	var clockRunning = false;
	var intervalId;

	//  Our stopwatch object.
	var stopwatch = {

  		time: 100,

  		start: function() 
  		{

      		if (!clockRunning) {

        		intervalId = setInterval(stopwatch.count, 1000);
        		clockRunning = true;

      							}

  		},


  		count: function() 
  		{

    		stopwatch.time = stopwatch.time - 1;

    		$("#stopwatch").text(stopwatch.time);

    		if (stopwatch.time < 25) { 
    			$('#stopwatch').css('color', 'red');
  			}

  			if (stopwatch.time == 0) 
  			{
    			$('.jumbotron').hide();
		        $("#result").html('You correctly answered ' + correctAnswers + " out of " + currentquestion + " questions! ").hide();
		        $('#result').fadeIn(1500);
		        clearInterval(intervalId);
    			  clockRunning = false;
    			$('#game-over').append("Game Over");
  			}

  		}
  	};
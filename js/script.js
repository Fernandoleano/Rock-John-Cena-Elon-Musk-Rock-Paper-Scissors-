
function button() {
    document.getElementById("dev").innerHTML = "Fernando Leano made with: HTML, CSS, JAVASCRIPT! :D"
}

function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    
    botChoice = NumToChoice(rpsTop());
    console.log('computerChoice', botChoice);
    
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    
    message = finalMessage(results)
    console.log(message)
    
    rpsFrontEnd(yourChoice.id, botChoice, message); 
}

function rpsTop() {
    return Math.floor(Math.random() * 3);
}

function NumToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

// This will decide the winner human or a bot
function decideWinner(yourChoice, computerChoice) {
    var rpsDataBase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': {'scissors': 0, 'rock': 1, 'paper': 0.5 },
        'scissors': {'scissors': 0.5, 'rock': 0, 'paper': 1 }
    };
    var yourScore = rpsDataBase[yourChoice][computerChoice];
    var computerScore = rpsDataBase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You won', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    };

    //remove all of the images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDataBase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDataBase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 244, 1)'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
}

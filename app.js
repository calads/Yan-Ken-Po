const imgPlayerChoice = document.getElementById('playerchoice');
const imgComputerChoice = document.getElementById('computerchoice');

const pResult = document.getElementById('result');
const pScore = document.getElementById('score');

const buttons = document.querySelectorAll('button');
const choices = ['piedra','papel','tijera'];
const fileNames = {
	'piedra' : 'images/rock.png',
	'papel' : 'images/paper.png',
	'tijera' : 'images/scissors.png',
};

let positiveScore = 0;
let negativeScore = 0;

buttons.forEach(
	button => button.addEventListener('click',startGame)
	);

function startGame(event){
	// determinar la elección del jugador
	const button = event.currentTarget;
	const playerChoice = button.dataset.choice;
	console.log(playerChoice);

	// determinar elección del CPU
	const computerChoice = getComputerChoice();
	console.log(computerChoice);

	// determinar el ganador
	const winner = getWinner(playerChoice, computerChoice);
	console.log(`El ganador es: ${winner}`);

	//mostrar resultados
	imgPlayerChoice.setAttribute('src', fileNames[playerChoice]);
	imgComputerChoice.setAttribute('src', fileNames[computerChoice]);

	let result;


	if(winner === 'Player'){
		result = 'Ganaste';
		++positiveScore;
	}else if (winner === 'Computer') {
		result = 'Perdiste';
		++negativeScore;
	}else { //empate
		result = 'Empataste';
	}

	pResult.innerHTML = `${result} 
						eligiendo <strong>${playerChoice}</strong>
						contra <strong>${computerChoice}</strong>.`;

	pScore.innerHTML = `Juegos ganados ${positiveScore}. Juegos perdidos ${negativeScore}.`;
}

function getComputerChoice() {
	// obtener un valor aleatorio i (0,1,2)
	const i =parseInt(Math.random()* 3);
	// devolver la elección de la CPU
	return choices[i];
}

function getWinner(playerChoice, computerChoice) {
	if(playerChoice === computerChoice){
		return null;
	}

	if (playerChoice === 'piedra') {
		if(computerChoice === 'papel'){
			return 'Computer' ;	
		}else { // tijera
			return 'Player';
		}
	}else if (playerChoice === 'papel'){
		if(computerChoice === 'piedra'){
			return 'Player' ;	
		}else { // tijera
			return 'Computer';
		}

	}else { // 'tijera'
		if(computerChoice === 'papel'){
			return 'Player' ;	
		}else { // piedra
			return 'Computer';
		}

	}
}
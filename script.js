function play(playerChoice) {
    const choices = ['piedra', 'papel', 'tijera'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    const result = compareChoices(playerChoice, computerChoice);
    document.getElementById('result').innerText = `Elegiste ${playerChoice}. La computadora eligió ${computerChoice}. ${result}`;
}

function compareChoices(player, computer) {
    if (player === computer) {
        return "¡Es un empate!";
    } else if (
        (player === 'piedra' && computer === 'tijera') ||
        (player === 'papel' && computer === 'piedra') ||
        (player === 'tijera' && computer === 'papel')
    ) {
        return "¡Ganaste!";
    } else {
        return "¡Perdiste!";
    }
}

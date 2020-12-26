
const selects = document.querySelectorAll(".set-time")
/*
const startButton = document.getElementById("start")
const restartButton = document.getElementById("restart")
const replayButton = document.getElementById("replay")
const stopButton = document.getElementById("stop")
*/
//############### Incluir os options dinamicamente ###############

const fillSelects = selects => {

	const reducerOptions = (accumulator, _, index) =>
		accumulator + `<option value="${index}">${index}</option>`

	const options = () => Array(60)
		.fill("")
		.reduce( reducerOptions, "" )

	const insertOptions = select => select.innerHTML = options()

	selects.forEach( insertOptions )
}

const invocateFillSelects = () => fillSelects( selects )

//########################### Eventos ############################

window.addEventListener("load", invocateFillSelects )

startButton.addEventListener("click", () => {timer.pressStartButton()} )
replayButton.addEventListener("click", () => {timer.pressReplayButton()})
stopButton.addEventListener("click", () => {timer.pressStopButton()})
restartButton.addEventListener("click", () => {timer.pressRestartButton()})
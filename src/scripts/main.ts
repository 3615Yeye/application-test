import '../styles/main.scss'

// Components
import Board from './components/board'
import Timer from './components/timer'
import Scores from './components/scores'

const app = document.querySelector<HTMLDivElement>('#app')!

// To be improved, it's not great to have to declare each component container this way
app.innerHTML = `
  <div class="timer"></div>
  <div class="board"></div>
  <div class="scores"></div>
`

// Instanciate components
const boardInstance = new Board()
const timerInstance = new Timer()
const scoresInstance = new Scores()

// Initial renders
boardInstance.render()
timerInstance.render()
scoresInstance.render()

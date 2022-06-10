import Component from '../lib/component'
import store from '../store/index'

export default class Timer extends Component {
  constructor () {
    super({
      store,
      element: document.querySelector('.timer')
    })

    /*
       this.element.addEventListener('click', e => {
       if (e.target.dataset.marked === 'false') {
       store.dispatch('addMark', e.target.dataset.index)
       }
       })
     */
    const minutes = 3
    this.startTime = new Date().getTime() + minutes * 60000
    this.minutes = minutes
    this.seconds = 0

    this.interval = setInterval(() => {
      const timeLeft = this.startTime - new Date().getTime()
      this.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
      this.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

      this.render()
    }, 1000)
  }

  /**
   * React to state changes and render the component's HTML
   *
   * @returns {void}
   */
  render () {
    this.element.innerHTML = `${this.minutes}:${this.seconds.toLocaleString('fr-FR', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })
    }`
  }
}

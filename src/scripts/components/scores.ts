import Component from '../lib/component.ts'
import store from '../store/index.ts'

export default class Scores extends Component {
  constructor () {
    super({
      store,
      element: document.querySelector('.scores')
    })
  }

  /**
   * React to state changes and render the component's HTML
   *
   * @returns {void}
   */
  render () {
    let html = '<div class="scores">'

    store.state.players.forEach(player => {
      html += `
      <div class="player">${player.name} : <b>${player.score}</b></div>
      `
    })

    html += '</div>'
    this.element.innerHTML = html
  }
}

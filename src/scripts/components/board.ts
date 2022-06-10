import Component from '../lib/component.ts'
import store from '../store/index.ts'

export default class Board extends Component {
  constructor () {
    super({
      store,
      element: document.querySelector('.board')
    })

    this.element.addEventListener('click', e => {
      if (e.target.dataset.marked === 'false') {
        store.dispatch('addMark', e.target.dataset.index)
      }
    })
  }

  /**
   * React to state changes and render the component's HTML
   *
   * @returns {void}
   */
  render () {
    let html = ''

    store.state.marks.flat().forEach((mark, index) => {
      html += `<div class="mark" data-index="${index}" data-marked="${mark ? 'true' : 'false'}">
        ${mark || ''}
      </div>`
    })

    this.element.innerHTML = html
  }
}

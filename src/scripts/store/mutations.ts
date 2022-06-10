export default {
  addMark (state, payload) {
    const row = Math.floor(parseInt(payload) / 3)
    const column = parseInt(payload) % 3
    const nbMarks = state.marks.flat().filter(mark => !mark).length

    state.marks[row][column] = nbMarks % 2 ? 'X' : 'O'

    return state
  }
}

export default {
    state: {
        active: 0,
        manageActive: 0
    },
    mutations: {
        activeChange(state, value) {
            state.active = value
        },
        manageActiveChange(state, value) {
            state.manageActive = value
        }
    }
}
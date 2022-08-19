export default {
    addRequest(state, payload) {
        state.requests.push(payload);
    },
    serRequest(state, payload) {
        state.requests =payload;
    }
}
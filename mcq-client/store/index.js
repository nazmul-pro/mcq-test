export const state = () => ({ score: 0 });

export const mutations = {
    markAsCorrect: (state) => {
        state.score++;
    },
    setScoreToZero: (state) => {
      state.score = 0;
    },
}

export const getters = {
  getScore: (state) => {
      return state.score;
  },
}
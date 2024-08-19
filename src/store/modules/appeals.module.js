import axios from 'axios';

const state = {
  appeals: [],
  loading: false,
  error: null
};

const mutations = {
  FETCH_REQUEST(state) {
    state.loading = true;
    state.error = null;
  },
  FETCH_SUCCESS(state, appeals) {
    state.appeals = appeals;
    state.loading = false;
  },
  FETCH_ERROR(state, error) {
    state.error = error;
    state.loading = false;
  }
};

const actions = {
  async fetchAppeals({ commit }) {
    commit('FETCH_REQUEST');
    try {
    const token = localStorage.getItem('token')
      const response = await axios.get('/appeals/v1.0/appeals/', {
        authorizations: `Bearer ${token}`
      });
      commit('FETCH_SUCCESS', response.data);
    } catch (error) {
      commit('FETCH_ERROR', error.response?.data?.message || 'Error fetching data');
    }
  }
};

const getters = {
  appeals: (state) => state.appeals,
  isLoading: (state) => state.loading,
  error: (state) => state.error
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

import axios from 'axios';

// Initial state
const state = {
  token: null,
  user: null,
  status: '',
  errorMessage: null,
};

// Mutations
const mutations = {
  AUTH_REQUEST(state) {
    state.status = 'loading';
  },
  AUTH_SUCCESS(state, { token, user }) {
    state.status = 'success';
    state.token = token;
    state.user = user;
    state.errorMessage = null;
  },
  AUTH_ERROR(state, errorMessage) {
    state.status = 'error';
    state.errorMessage = errorMessage;
  },
  AUTH_LOGOUT(state) {
    state.token = null;
    state.user = null;
    state.status = '';
  },
};


const actions = {
  async login({ commit }, userCredentials) {
    commit('AUTH_REQUEST');
    try {
      const response = await axios.post('https://dev.moydomonline.ru/api/auth/login/', userCredentials);
      const token = response.data.key; 
      const user = response.data.user; 
      
  
      localStorage.setItem('token', token);
      
 
      commit('AUTH_SUCCESS', { token, user });
     
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      return response;
    } catch (error) {
      commit('AUTH_ERROR', error.response.data.message || 'Login failed');
      localStorage.removeItem('token'); 
      throw error;
    }
  },
  
  logout({ commit }) {
    return new Promise((resolve) => {
      commit('AUTH_LOGOUT');
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
      resolve();
    });
  },
  
  checkAuth({ commit }) {
    const token = localStorage.getItem('token');
    if (token) {
      commit('AUTH_SUCCESS', { token, user: null });
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  },
};


const getters = {
  isAuthenticated: (state) => !!state.token,
  authStatus: (state) => state.status,
  authError: (state) => state.errorMessage,
  user: (state) => state.user,
};


export default {
  state,
  mutations,
  actions,
  getters,
};

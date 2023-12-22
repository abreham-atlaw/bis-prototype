import { createStore } from 'vuex'

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
}

interface User {
  id: number;
  name: string;
  role: string;
}

interface State {
  inventory: InventoryItem[];
  user: User | null;
}

export default createStore<State>({
  state: {
    inventory: [],
    user: null
  },
  mutations: {
    setInventory(state, inventory: InventoryItem[]) {
      state.inventory = inventory;
    },
    setUser(state, user: User) {
      state.user = user;
    }
  },
  actions: {
    updateInventory({ commit }, inventory: InventoryItem[]) {
      commit('setInventory', inventory);
    },
    updateUser({ commit }, user: User) {
      commit('setUser', user);
    }
  },
  getters: {
    getInventory(state) {
      return state.inventory;
    },
    getUser(state) {
      return state.user;
    }
  }
});


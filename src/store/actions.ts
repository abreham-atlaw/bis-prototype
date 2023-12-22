import { ActionTree } from 'vuex';
import { State, InventoryItem, User } from './index';

const actions: ActionTree<State, State> = {
  updateInventory({ commit }, inventory: InventoryItem[]) {
    commit('setInventory', inventory);
  },
  updateUser({ commit }, user: User) {
    commit('setUser', user);
  }
};

export default actions;


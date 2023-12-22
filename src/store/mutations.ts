import { MutationTree } from 'vuex';
import { State, InventoryItem, User } from './index';

const mutations: MutationTree<State> = {
  setInventory(state, inventory: InventoryItem[]) {
    state.inventory = inventory;
  },
  setUser(state, user: User) {
    state.user = user;
  }
};

export default mutations;


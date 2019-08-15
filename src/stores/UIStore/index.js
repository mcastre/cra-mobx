import { observable, action, set } from 'mobx';
import UI from './models';

export default class UIStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable uiState = UI;

  @action('UserStore | setUI')
  setUI = data => {
    set(this.uiState, data);
    return this.uiState;
  };
}

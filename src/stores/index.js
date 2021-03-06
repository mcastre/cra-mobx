import UserStore from './UserStore';
import UIStore from './UIStore';

export default class RootStore {
  api;

  user;

  ui;

  constructor({ api, navigate }) {
    this.navigate = navigate;
    this.api = api;
    this.user = new UserStore(this);
    this.ui = new UIStore(this);
  }
}

import { observable, action, set } from 'mobx';
import UserData from './models';

export default class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable userData = UserData;

  @action('UserStore | setUserData')
  setUserData = data => {
    set(this.userData, data);
    return this.userData;
  };

  verifyAddress = async () => {
    const { api, ui, navigate } = this.rootStore;
    const { address1, address2, city, state, zip } = this.userData;

    ui.setUI({ isLoading: true });
    // Just pretend this is calling USPS for address validation
    try {
      await api({
        url: 'https://usps.com/whatever',
        method: 'POST',
        data: {
          street1: address1,
          street2: address2,
          city,
          state,
          zip
        }
      });
      ui.setUI({ isLoading: false });
      navigate('/next-page');
    } catch (e) {
      ui.setUI({ isLoading: false, errorMessage: 'Nope, try again bro' });
      console.log('Error on api call...', e.message);
    }
  };
}

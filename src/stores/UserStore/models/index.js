import { observable } from 'mobx';

const UserData = observable({
  firstName: '',
  lastName: '',
  email: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
});

export default UserData;

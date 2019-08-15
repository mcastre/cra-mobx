import { observable } from 'mobx';

const UI = observable({
  isLoading: false,
  errorMessage: ''
});

export default UI;

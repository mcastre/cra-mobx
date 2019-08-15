export default class ApiStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.initializeApplication();
  }

  initializeApplication = () => {
    try {
      this.rootStore.api.defaults.baseURL = 'https://your-api-base-route/';
      this.rootStore.api.defaults.headers.common['X-API-KEY'] = '123';
      this.rootStore.api.defaults.headers.common['Content-Type'] = 'application/json';
    } catch (error) {
      throw new Error('AppStore | Could not set default API headers.', error);
    }
  };
}

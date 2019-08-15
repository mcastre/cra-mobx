import RootStore from '..';

const mockAxios = jest.fn(() => new Promise(resolve => resolve({ data: {} })));

describe('UserStore tests', () => {
  const mockStore = new RootStore({ api: mockAxios, navigate: jest.fn() });
  const { user, api, ui } = mockStore;

  it('should update the userData state', () => {
    user.setUserData({ firstName: 'Martín' });
    expect(user.userData.firstName).toBe('Martín');
  });

  it('should return the computed fullName', () => {
    user.setUserData({ firstName: 'Martín', lastName: 'Castre' });
    expect(user.userData.fullName).toBe('Martín Castre');
  });

  it('should make a call to verify the address', async () => {
    user.setUserData({ address1: '123 Banana Hwy', city: 'Irondale', state: 'AL', zip: '35205' });
    await user.verifyAddress();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api).toHaveBeenCalledWith({
      url: 'https://usps/whatever',
      method: 'POST',
      data: {
        street1: '123 Banana Hwy',
        street2: '',
        city: 'Irondale',
        state: 'AL',
        zip: '35205'
      }
    });
    expect(ui.uiState.isLoading).toBeFalsy();
  });
});

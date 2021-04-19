import { COLLECT_CONSENTS } from './Consents.types';
import consentsReducer from './Consents.reducer';

describe('Consents Reducer', () => {
  it('Should return default state', () => {
    const newState = consentsReducer(undefined, {});
    expect(newState).toEqual({ consents: [], hasFetched: false });
  });

  it('Should return new state if receiving type', () => {
    const consentsMock = [
      {
        id: '1',
        name: 'Amel',
        email: 'amcenp@gmail.com',
        recieveNewsLeters: true,
        showTargetedAds: true,
        visitStatistics: true,
      },
    ];
    const newState = consentsReducer(undefined, {
      type: COLLECT_CONSENTS,
      payload: consentsMock,
    });
    expect(newState.consents).toEqual(consentsMock);
  });
});

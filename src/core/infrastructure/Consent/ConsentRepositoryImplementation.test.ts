import { ConsentRepositoryImplementation } from './ConsentRepositoryImplementation';
import FakeAxios from '../../../fakeAxios';

jest.mock('../../../fakeAxios');

const mockData = [
  {
    id: '1',
    name: 'Amel',
    email: 'amcenp@gmail.com',
    recieveNewsLeters: true,
    showTargetedAds: true,
    visitStatistics: true,
  },
];

const moxios = FakeAxios as jest.Mocked<typeof FakeAxios>;

describe('Consent Repository Implementation Unit Tests', () => {
  it('Should create instance of implementation and have basUrl', () => {
    const cri = new ConsentRepositoryImplementation();
    expect(cri.baseUrl).toBe('www.didomi.com');
  });

  it('Should unit test the getConsents feature and receive values', async () => {
    const cri = new ConsentRepositoryImplementation();
    moxios.get.mockImplementation(() => {
      return new Promise((resolve) => {
        resolve(mockData);
      });
    });
    const response = await cri.getConsents();
    expect(response.length).toBe(1);
    expect(response[0].name).toBe('Amel');
  });

  it('Should unit test the giveConsent feature and receive added value', async () => {
    const cri = new ConsentRepositoryImplementation();
    moxios.post.mockImplementation(() => {
      return new Promise((resolve) => {
        resolve({ ...mockData[0] });
      });
    });
    const response = await cri.giveConsent(mockData[0]);
    expect(response.id).toBe('1');
  });
});

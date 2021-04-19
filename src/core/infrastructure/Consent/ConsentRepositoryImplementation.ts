import { Consent } from '../../entities/Consents/Consent';
import { ConsentRepository } from '../../entities/Consents/ConsentRepository';
import axios from '../../../fakeAxios';

export class ConsentRepositoryImplementation implements ConsentRepository {
  baseUrl = 'www.didomi.com';
  async getConsents(): Promise<Consent[]> {
    const res = await axios.get(`${this.baseUrl}/consents`);
    return res;
  }
  async giveConsent(data: Consent): Promise<Consent> {
    const res = await axios.post(`${this.baseUrl}/consents`, data);
    return res;
  }
}

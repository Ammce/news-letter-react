import { Consent } from '../../../entities/Consents/Consent';
import { ConsentRepository } from '../../../entities/Consents/ConsentRepository';

export interface IGetConsent {
  getConsents(): Promise<Consent[]>;
}

export class GetConsents implements IGetConsent {
  consentRepository: ConsentRepository;

  constructor(consentRepository: ConsentRepository) {
    this.consentRepository = consentRepository;
  }

  async getConsents(): Promise<Consent[]> {
    return this.consentRepository.getConsents();
  }
}

import { Consent } from '../../../entities/Consents/Consent';
import { ConsentRepository } from '../../../entities/Consents/ConsentRepository';

export interface IGiveConsent {
  giveConsent(data: Consent): Promise<Consent>;
}

export class GiveConsent implements IGiveConsent {
  consentRepository: ConsentRepository;

  constructor(consentRepository: ConsentRepository) {
    this.consentRepository = consentRepository;
  }

  async giveConsent(data: Consent): Promise<Consent> {
    return this.consentRepository.giveConsent(data);
  }
}

import { Consent } from './Consent';
export interface ConsentRepository {
  getConsents(): Promise<Consent[]>;
}

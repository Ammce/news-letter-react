import { Dispatch } from 'redux';
import { GIVE_CONSENT, COLLECT_CONSENTS } from './Consents.types';
import { ConsentRepositoryImplementation } from '../../../../core/infrastructure/Consent/ConsentRepositoryImplementation';
import {
  GetConsents,
  GiveConsent,
} from '../../../../core/infrastructure/Consent/use-cases/';
import { Consent } from '../../../../core/entities/Consents/Consent';

export const getConsents = async (dispatch: Dispatch) => {
  try {
    const consentRepositoryImplementation = new ConsentRepositoryImplementation();
    const getConsentsUseCase = new GetConsents(consentRepositoryImplementation);
    const consents = await getConsentsUseCase.getConsents();
    dispatch({ type: COLLECT_CONSENTS, payload: consents });
  } catch (error) {
    //   dispatch({ type: ERROR });
  }
};

export const giveConsent = (data: Consent) => async (dispatch: Dispatch) => {
  try {
    const consentRepositoryImplementation = new ConsentRepositoryImplementation();
    const giveConsentUseCase = new GiveConsent(consentRepositoryImplementation);
    const consent = await giveConsentUseCase.giveConsent(data);
    dispatch({ type: GIVE_CONSENT, payload: consent });
  } catch (error) {
    //   dispatch({ type: ERROR });
  }
};

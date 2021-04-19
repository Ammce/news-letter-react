import { Dispatch } from 'redux';
import { GIVE_CONSENT, COLLECT_CONSENTS } from './Consents.types';
import { ConsentRepositoryImplementation } from '../../../../core/infrastructure/Consent/ConsentRepositoryImplementation';
import { GetConsents } from '../../../../core/infrastructure/Consent/use-cases/GetConsents';
import { Consent } from '../../../../core/entities/Consents/Consent';

export const getConsents = async (dispatch: Dispatch) => {
  try {
    const consentRepositoryImplementation = new ConsentRepositoryImplementation();
    const getConsentsUseCase = new GetConsents(consentRepositoryImplementation);
    const consents = await getConsentsUseCase.getConsents();
    dispatch({ type: COLLECT_CONSENTS, payload: consents });
  } catch (error) {
    //   dispatch({ type: LIST_LOAD_FAILURE, error });
  }
};

export const giveConsent = (data: Consent) => async (dispatch: Dispatch) => {
  try {
    console.log(data);
    // const consentRepositoryImplementation = new ConsentRepositoryImplementation();
    // const getConsentsUseCase = new GetConsents(consentRepositoryImplementation);
    // const consents = await getConsentsUseCase.getConsents();
    // dispatch({ type: COLLECT_CONSENTS, payload: consents });
  } catch (error) {
    //   dispatch({ type: LIST_LOAD_FAILURE, error });
  }
};

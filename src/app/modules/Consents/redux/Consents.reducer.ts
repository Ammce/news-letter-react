import { GIVE_CONSENT, COLLECT_CONSENTS } from './Consents.types';

const initialState = {
  hasFetched: false,
  consents: [],
};

function consents(state = initialState, action: any = null) {
  switch (action.type) {
    case COLLECT_CONSENTS:
      return {
        ...state,
        consents: [...state.consents, ...action.payload],
        hasFetched: true,
      };
    case GIVE_CONSENT:
      return {
        ...state,
        consents: [...state.consents, action.payload],
      };
    default:
      return state;
  }
}

export default consents;

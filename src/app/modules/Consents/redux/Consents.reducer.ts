import { GIVE_CONSENT, COLLECT_CONSENTS } from './Consents.types';

const initialState = {
  loading: false,
  consents: [],
};

function consents(state = initialState, action: any = null) {
  switch (action.type) {
    case COLLECT_CONSENTS:
      return {
        ...state,
        consents: action.payload,
      };

    default:
      return state;
  }
}

export default consents;
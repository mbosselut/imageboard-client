import { AUTHENTICATION_JWT } from '../actions';

export default function(state = '', action = {}) {
    switch (action.type) {
        case AUTHENTICATION_JWT:
            return action.payload;
        default:
            return state;
    }
}

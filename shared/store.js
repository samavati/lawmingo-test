import { createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const userReducer = (users = [], action) => {
    switch (action.type) {
        case HYDRATE:
            // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return {...users, ...action.payload};
        case 'ADD_USER':
            return {...users, users: [...action.payload]};
        default:
            return users;
    }
}

// create a makeStore function
const makeStore = context => createStore(userReducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
import * as types from '../actions/types';

const initialState = {
  text: '',
};

export default function (state = initialState, action) {
 switch (action.type) {
   case types.TEST_ACTION:
     return {
       ...state,
       text: action.payload
     };
   case types.REMOVE_TEST_ACTION:
     return initialState;
   default:
     return state;
 }
}

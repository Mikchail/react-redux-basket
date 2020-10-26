import {extend} from '../../utils';

const ActionType = {

  ADD_USER: `ADD_USER`,
};

const ActionCreator = {
  addUser: (user) => ({
    type: ActionType.ADD_USER,
    payload: user,
  })

};

const initialState = {
  user: false,
};




function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.ADD_USER:
      return extend(state, {
        user: action.payload,
      });

    default:
      return state;
  }
}

export {reducer, ActionType, ActionCreator};

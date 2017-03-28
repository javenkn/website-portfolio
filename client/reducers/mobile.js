const initialState = {
  mobileSelectedTab: 'About',
  projectIndex: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SELECT_TAB':
      if(!action.data.mobileTab) {
        return state;
      }
      return Object.assign({}, state, {
        mobileSelectedTab: action.data.mobileTab
      });
    case 'CHANGE_PROJECT':
      if(action.data.direction == 'left') {
        if(state.projectIndex > 0) {
          return Object.assign({}, state, {
            projectIndex: state.projectIndex - 1
          });
        }
      } else {
        if(state.projectIndex >= 0 && state.projectIndex < 2) {
          return Object.assign({}, state, {
            projectIndex: state.projectIndex + 1
          });
        }
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
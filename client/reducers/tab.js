const initialState = {
  numTabsOpen: 1,
  selectedTab: 'welcome.txt',
  openedTabs: ['welcome.txt']
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SELECT_TAB':
      return Object.assign({}, state, {
        numTabsOpen: state.numTabsOpen,
        selectedTab: action.data.tab,
        openedTabs: state.openedTabs
      });
    case 'OPEN_TAB':
      const newTabsOpened = state.openedTabs.slice();
      const tab = action.data.tab;
      if(newTabsOpened.indexOf(tab) == -1) { // checks if there are none of the same tab
        newTabsOpened.push(tab);
        return Object.assign({}, state, {
          numTabsOpen: state.numTabsOpen + 1,
          selectedTab: action.data.tab,
          openedTabs: newTabsOpened
        });
      } else {
        return Object.assign({}, state, { // same thing without the additional 1 tab to numTabsOpen
          numTabsOpen: state.numTabsOpen,
          selectedTab: action.data.tab,
          openedTabs: newTabsOpened
        });
      }
      break;
    default:
      return state;
  }
};

export default reducer;
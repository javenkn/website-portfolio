const initialState = {
  numTabsOpen: 1,
  selectedTab: 'README',
  openedTabs: ['README']
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
      const indexOfTab = newTabsOpened.indexOf(tab);
      if(indexOfTab === -1) { // checks if there are none of the same tab
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
    case 'CLOSE_TAB':
      const currTabsOpened = state.openedTabs.slice();
      const closeTab = action.data.tab;
      const index = currTabsOpened.indexOf(closeTab);
      if(indexOfTab !== -1) {
        currTabsOpened.splice(index, 1);
      }
      return Object.assign({}, state, {
        numTabsOpen: state.numTabsOpen - 1,
        selectedTab: action.data.tab,
        openedTabs: currTabsOpened
      });
    default:
      return state;
  }
};

export default reducer;
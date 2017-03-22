const initialState = {
  numTabsOpen: 1,
  selectedTab: 'README',
  openedTabs: ['README'],
  openedOnce: true,
  navLinks: ['README', 'about.json', 'projects.js', 'contact.js']
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SELECT_TAB':
      return Object.assign({}, state, {
        numTabsOpen: state.numTabsOpen,
        selectedTab: action.data.tab,
        openedTabs: state.openedTabs,
        openedOnce: false
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
          openedTabs: newTabsOpened,
          openedOnce: false
        });
      } else {
        if(state.selectedTab === 'README') {
          return Object.assign({}, state, { // don't change the openedOnce state
          numTabsOpen: state.numTabsOpen,
          selectedTab: action.data.tab,
          openedTabs: newTabsOpened,
        });
        }
        return Object.assign({}, state, { // same thing without the additional 1 tab to numTabsOpen
          numTabsOpen: state.numTabsOpen,
          selectedTab: action.data.tab,
          openedTabs: newTabsOpened,
          openedOnce: false
        });
      }
      break;
    case 'CLOSE_TAB':
      const currTabsOpened = state.openedTabs.slice();
      const closeTab = action.data.tab;
      const index = currTabsOpened.indexOf(closeTab);
      const tabBefore = currTabsOpened[index - 1];
      const tabAfter = currTabsOpened[index + 1];
      if(index !== -1) {
        currTabsOpened.splice(index, 1);
      }
      if(closeTab !== state.selectedTab) {
        // if the tab to be closed isn't the selected tab
        // then keep the selectedTab state the same
        return Object.assign({}, state, {
          numTabsOpen: state.numTabsOpen - 1,
          selectedTab: state.selectedTab,
          openedTabs: currTabsOpened,
          openedOnce: false
        });
      } else { // else move the selectedTab state to the left
        if(!tabBefore) { // if there is none to the left move selectedTab to the right
          return Object.assign({}, state, {
            numTabsOpen: state.numTabsOpen - 1,
            selectedTab: tabAfter,
            openedTabs: currTabsOpened,
            openedOnce: false
          });
        } else { // carry on with moving selectedTab to the left
          return Object.assign({}, state, {
            numTabsOpen: state.numTabsOpen - 1,
            selectedTab: tabBefore,
            openedTabs: currTabsOpened,
            openedOnce: false
          });
        }
      }
      break;
    default:
      return state;
  }
};

export default reducer;
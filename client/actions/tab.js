export function changeTab(tabName) {
  return {
    type: 'SELECT_TAB',
    data: {
      tab: tabName
    }
  };
}

export function openTab(tabName) {
  return {
    type: 'OPEN_TAB',
    data: {
      tab: tabName
    }
  };
}
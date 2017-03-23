export function changeTab(tabName) {
  return {
    type: 'SELECT_TAB',
    data: {
      tab: tabName
    }
  };
}

export function changeProject(directionOfBtn) {
  return {
    type: 'CHANGE_PROJECT',
    data: {
      direction: directionOfBtn
    }
  };
}
export function changeTab(tabName) {
  return {
    type: 'SELECT_TAB',
    data: {
      tab: tabName
    }
  };
}
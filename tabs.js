const tabs = document.querySelector('.tabs');
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

function handleClick(e) {
  // hide all the panels
  tabPanels.forEach((panel) => (panel.hidden = true));
  // unselect all the tab buttons
  tabButtons.forEach((btn) => btn.setAttribute('aria-selected', false));
  // select the clicked tab button
  e.currentTarget.setAttribute('aria-selected', true);
  // find the tabpanel based on id of the tab button
  const { id } = e.currentTarget;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
}

tabButtons.forEach((btn) => btn.addEventListener('click', handleClick));

export const setupGlobalAnchorClickHandler = () => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    const anchor = target.closest('a');
    if (anchor) {
      event.preventDefault();
      console.log('Clicked anchor:', anchor);
    }
  });
};


export const createModal = ( imageUrl: string, imageAlt: string ): HTMLElement => {

  // Create the background overlay
  const modalOverlay = document.createElement( 'div' );
  modalOverlay.classList.add( 'modal', 'opacity-0' );

  // Create the modal content
  const modalContent = document.createElement( 'div' );
  modalContent.classList.add('modal-content', 'opacity-0', 'scale-95');

  const modalImage = document.createElement( 'img' );
  modalImage.src = imageUrl;
  modalImage.alt = imageAlt;

  const closeButton = document.createElement( 'button' );
  closeButton.textContent = 'Close';
  closeButton.setAttribute('aria-label', 'Close modal')
  
  modalContent.append( modalImage, closeButton );


  // Modal Event Handlers
  const closeModal = () => {
    modalOverlay.classList.remove( 'opacity-100' );
    modalContent.classList.remove( 'scale-100', 'opacity-100' );
    setTimeout( () => {
      document.body.removeChild( modalOverlay );
    }, 300 );
  };

  closeButton.addEventListener( 'click', closeModal );
  modalOverlay.addEventListener( 'click', ( event ) => {
    if ( event.target === modalOverlay ) {
      closeModal();
    }
  } );

  modalOverlay.appendChild( modalContent );

  // Trigger the animation
  setTimeout( () => {
    modalOverlay.classList.add( 'opacity-100' );
    modalContent.classList.add( 'scale-100', 'opacity-100' );
  }, 10 );

  return modalOverlay;
};
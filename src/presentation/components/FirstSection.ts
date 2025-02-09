import { FirstSection } from '@/core/models/cms-home-data.model';

export const renderFirstSection = ( {images, content}: FirstSection ): HTMLElement => {
  const firstSectionElement = document.createElement( 'section' );
  firstSectionElement.className = 'section1';

  // Image Grid
  const imageGridElement = document.createElement( 'div' );
  imageGridElement.className = 'image-grid';

  const largeImageContainerElement = document.createElement( 'div' );
  largeImageContainerElement.className = 'large-image-container';

  const smallImageContainerElement = document.createElement( 'div' );
  smallImageContainerElement.className = 'small-image-container';

  images.forEach( ( image, index ) => {
    const imageElement = document.createElement( 'img' );
    imageElement.src = image.imageUrl;
    imageElement.alt = image.imageAlt;
    imageElement.setAttribute( 'aria-label', `${index > 0 ? 'Small' : 'Large'} Image from image grid` );
    const elementToAppend = index > 0 ? smallImageContainerElement : largeImageContainerElement;
    elementToAppend.append( imageElement );
  } );

  imageGridElement.append( largeImageContainerElement, smallImageContainerElement );


  // Content
  const contentElement = document.createElement( 'div' );
  contentElement.className = 'content-conatiner';

  const headlineElement = document.createElement( 'h2' );
  headlineElement.className = 'headline';
  headlineElement.textContent = content.headline;

  const contentTextElement = document.createElement( 'p' );
  contentTextElement.className = 'content';
  contentTextElement.textContent = content.body;

  const callOutHeadeElement = document.createElement( 'h3' );
  callOutHeadeElement.className = 'callout-head';
  callOutHeadeElement.textContent = content.callOut.head;

  const callOutContentElement = document.createElement( 'p' );
  callOutContentElement.className = 'callout-content';
  callOutContentElement.textContent = content.callOut.body;

  contentElement.append( headlineElement, contentTextElement, callOutHeadeElement, callOutContentElement );

  // Append
  firstSectionElement.append(imageGridElement, contentElement);

  return firstSectionElement;
};
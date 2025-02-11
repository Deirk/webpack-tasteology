import { FirstSection, HeroImage } from '@/core/models/cms-home-data.model';
import { createModal } from './Modal';

export const renderFirstSection = ( { heroImages, content }: FirstSection ): HTMLElement => {
  const firstSectionElement = document.createElement( 'section' );
  firstSectionElement.className = 'section1';

  // Image Grid
  const imageGridElement = document.createElement( 'div' );
  imageGridElement.className = 'image-grid';

  const largeImageContainerElement = document.createElement( 'div' );
  largeImageContainerElement.className = 'large-image-container';

  const smallImageContainerElement = document.createElement( 'div' );
  smallImageContainerElement.className = 'small-image-container';

  heroImages.forEach( ( { image, sectionLinked }: HeroImage, index: number ) => {
    const imageAnchorElement = document.createElement( 'a' );
    imageAnchorElement.href = sectionLinked;
    const imageElement = document.createElement( 'img' );
    imageElement.src = image.imageUrl;
    imageElement.alt = image.imageAlt;
    imageElement.setAttribute( 'aria-label', `${ index > 0 ? 'Small' : 'Large' } Image from image grid open a modal with the full size image` );
    const elementToAppend = index > 0 ? smallImageContainerElement : largeImageContainerElement;

    imageElement.addEventListener('click', () => {
      const modal = createModal(image.imageUrl, image.imageAlt);
      document.body.appendChild(modal);
    });

    imageAnchorElement.append( imageElement );
    elementToAppend.append( imageAnchorElement );
  } );

  imageGridElement.append( largeImageContainerElement, smallImageContainerElement );


  // Content
  const contentElement = document.createElement( 'a' );
  contentElement.href = content.sectionLinked;
  contentElement.className = 'content-conatiner';


  const headlineElement = document.createElement( 'h2' );
  headlineElement.className = 'headline';
  headlineElement.textContent = content.headline;

  const contentTextElement = document.createElement( 'p' );
  contentTextElement.className = 'content';

  let contentText = content.body;
  // Truncate
  if (content.body.length > 394) contentText = content.body.substring(0, 394) + '...';
  contentTextElement.textContent = contentText;

  const callOutHeadeElement = document.createElement( 'h3' );
  callOutHeadeElement.className = 'callout-head';
  callOutHeadeElement.textContent = content.callOut.head;

  const callOutContentElement = document.createElement( 'p' );
  callOutContentElement.className = 'callout-content';
  callOutContentElement.textContent = content.callOut.body;

  contentElement.append( headlineElement, contentTextElement, callOutHeadeElement, callOutContentElement );

  // Append
  firstSectionElement.append( imageGridElement, contentElement );

  return firstSectionElement;
};
import { SecondSection } from '@/core/models/cms-home-data.model';
import { createModal } from './Modal';

export const renderSecondSection = ( { headline, cards }: SecondSection ): HTMLElement => {

  const secondSectionElement = document.createElement( 'section' );
  secondSectionElement.className = 'section2';

  // Headline
  const sectionTitleElement = document.createElement( 'h2' );
  sectionTitleElement.className = 'headline';
  sectionTitleElement.textContent = headline;

  // Cards
  const cardContainerElement = document.createElement( 'div' );
  cardContainerElement.className = 'card-container';

  cards.forEach( ( card ) => {
    const cardElement = document.createElement( 'div' );
    cardElement.className = 'card-item';

    const cardImageElement = document.createElement( 'img' );
    cardImageElement.src = card.image.imageUrl;
    cardImageElement.alt = card.image.imageAlt;
    cardImageElement.setAttribute( 'aria-label', 'Card image, open a modal with the full size image' );

    cardImageElement.addEventListener('click', () => {
      const modal = createModal(card.image.imageUrl, card.image.imageAlt);
      document.body.appendChild(modal);
    });

    const cardTitleElement = document.createElement( 'h3' );
    cardTitleElement.className = 'card-title';
    cardTitleElement.textContent = card.title;

    const cardBodyElement = document.createElement( 'p' );
    cardBodyElement.className = 'card-content';
    cardBodyElement.textContent = card.body;

    cardElement.append( cardImageElement, cardTitleElement, cardBodyElement );

    cardContainerElement.appendChild( cardElement );
  } );

  // Append
  secondSectionElement.append( sectionTitleElement, cardContainerElement );

  return secondSectionElement;
};
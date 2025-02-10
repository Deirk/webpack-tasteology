import { CmsHomeDataModel } from '@/core/models/cms-home-data.model';

const sleep = ( ms: number ) => new Promise( ( resolve ) => setTimeout( resolve, ms ) );

const fakeCmsData: CmsHomeDataModel = {
  firstSection: {
    heroImages: [
      {
        image: {
          imageUrl: './assets/images/section-1/Left.jpg',
          imageAlt: 'An image of a tamale being boiled',
        },
        sectionLinked: '#',
      },
      {
        image: {
          imageUrl: './assets/images/section-1/Right_Top.jpg',
          imageAlt: 'An image of a decoration on a table with names on top of it',
        },
        sectionLinked: '#',
      },
      {
        image: {
          imageUrl: './assets/images/section-1/Right_Bottom.jpg',
          imageAlt: 'A picture with different final results of boiled egg.',
        },
        sectionLinked: '#',
      },
    ],
    content: {
      headline: 'WHAT DOES COOKING MEAN?',
      body: 'Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...',
      callOut: {
        head: 'THE PERFECT EGG',
        body: 'Keep water between 67 and 68°C for a flavourful, tender yolk',
      },
      sectionLinked: '#',
    },
  },
  secondSection: {
    headline: 'Taste the Colours',
    cards: [
      {
        image: {
          imageUrl: './assets/images/section-2/card-image-1.png',
          imageAlt: 'An image with red jelly on a spoon.',
        },
        title: 'RED',
        body: 'Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.',
      },
      {
        image: {
          imageUrl: './assets/images/section-2/card-image-2.png',
          imageAlt: 'An image with green jelly on a spoon.',
        },
        title: 'Green',
        body: 'Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours',
      },
      {
        image: {
          imageUrl: './assets/images/section-2/card-image-3.png',
          imageAlt: 'An image with white jelly on a spoon.',
        },
        title: 'White',
        body: 'White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.',
      },
    ],
  },
};

// Fake CMS Service
export const fetchCmsData = async (): Promise<CmsHomeDataModel> => {
  await sleep( 100 );
  return fakeCmsData;
};
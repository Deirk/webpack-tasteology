import { CmsHomeDataModel } from '@/core/models/cms-home-data.model';

const sleep = ( ms: number ) => new Promise( ( resolve ) => setTimeout( resolve, ms ) );

const fakeCmsData: CmsHomeDataModel = {
  firstSection: {
    images: [
      {
        image: './assets/images/section-1/Left.jpg',
        imageAlt: 'An image of a tamale being boiled',
      },
      {
        image: './assets/images/section-1/Right.jpg',
        imageAlt: 'An image of a decoration on a table with names on top of it',
      },
      {
        image: './assets/images/section-1/Right.jpg',
        imageAlt: 'A picture with different final results of boiled egg.',
      }
    ],
    content: {
      headline: 'WHAT DOES COOKING MEAN?',
      body: 'Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...',
      callOut: {
        head: 'THE PERFECT EGG',
        content: 'Keep water between 67 and 68°C for a flavourful, tender yolk',
      },
    },
  },
  secondSection: {
    title: 'Taste the Colours',
    cards: [
      {
        image: {
          image: './assets/images/card-image-1.jpg',
          imageAlt: 'An image with red jelly on a spoon.',
        },
        title: 'RED',
        description: 'Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.',
      },
      {
        image: {
          image: './assets/images/card-image-2.jpg',
          imageAlt: 'An image with green jelly on a spoon.',
        },
        title: 'Green',
        description: 'Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours',
      },
      {
        image: {
          image: './assets/images/card-image-3.jpg',
          imageAlt: 'An image with white jelly on a spoon.',
        },
        title: 'White',
        description: 'White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.',
      },
    ],
  },
};

// Fake CMS Service
export const fetchCmsData = async (): Promise<CmsHomeDataModel> => {
  await sleep( 1000 );
  return fakeCmsData;
};
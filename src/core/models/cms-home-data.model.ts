export interface CmsHomeDataModel {
  firstSection: {};
  secondSection: {};
}

export interface FirstSection {
  images: Array<Image>;
  content: {
    headline: string;
    body: string;
    callOut: {
      head: string;
      body: string;
    }
  }
}

export interface SecondSection {
  headline: string;
  cards: Array<Card>;
}

export interface Card {
  image: Image;
  title: string;
  body: string;
}

export interface Image {
  imageURL: string;
  imageAlt: string;
}
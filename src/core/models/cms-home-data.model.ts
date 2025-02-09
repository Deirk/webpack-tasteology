export interface CmsHomeDataModel {
  firstSection: FirstSection;
  secondSection: SecondSection;
}

export interface FirstSection {
  heroImages: Array<HeroImage>;
  content: {
    headline: string;
    body: string;
    callOut: {
      head: string;
      body: string;
    }
    sectionLinked: string;
  }
}

export interface SecondSection {
  headline: string;
  cards: Array<Card>;
}

export interface Card {
  image: ImageData;
  title: string;
  body: string;
}

export interface ImageData {
  imageUrl: string;
  imageAlt: string;
}

export interface HeroImage {
  image : ImageData;
  sectionLinked: string;
}
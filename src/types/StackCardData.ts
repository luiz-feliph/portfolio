import type { Image } from "./ImageType";

export type colorConfiguration = {
  primaryColor: string;
  secondaryColor: string;
};

export type StackCardData = {
  title: string;
  images: Image[];
};

export type colorConfiguration = {
  primaryColor: string;
  secondaryColor: string;
};

export type Image = { 
  path: string; 
  alt: string;
};

export type StackCardData = {
  title: string;
  images: Image[];
};

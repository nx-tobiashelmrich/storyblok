import { storyblokEditable } from "@storyblok/react";

const Image = ({ blok }) => {
  const originalImage = blok.picture.filename;
  const imageTimesTwo = `${blok.picture.filename}/m/3260x4096/`;
  const imageToWebp = `${blok.picture.filename}/m/filters:format(webp)/`;

  return (
    <picture>
      <source media="(max-width: 799px)" srcSet={imageToWebp} />
      <source media="(min-width: 800px)" srcSet={imageTimesTwo} />
      <img {...storyblokEditable(blok)} src={originalImage} width="25%" />
    </picture>
  );
};

export default Image;

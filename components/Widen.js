import { storyblokEditable } from "@storyblok/react";

const Widen = ({ blok }) => {
  const originalImage = blok.img;
  const imageTimesTwo = `${originalImage}?q=50&w=500`;
  const imageToWebp = `${originalImage}?q=10&w=500`;

  return (
    <picture>
      <source media="(max-width: 799px)" srcSet={imageToWebp} />
      <source media="(min-width: 800px)" srcSet={imageTimesTwo} />
      <img {...storyblokEditable(blok)} src={originalImage} width="25%" />
    </picture>
  );
};

export default Widen;

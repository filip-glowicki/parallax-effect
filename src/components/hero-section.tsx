import { useParallax } from "react-scroll-parallax";
import { Button } from "./button";
import background from "./../assets/background.webp";

const imageSpeedInPercentage = 10;
const headingSpeedInPercentage = 25;

export const HeroSection = () => {
  const { ref: imageRef } = useParallax<HTMLImageElement>({
    translateY: [-imageSpeedInPercentage, imageSpeedInPercentage],
  });

  const { ref: headingRef } = useParallax<HTMLHeadingElement>({
    translateY: [headingSpeedInPercentage, -headingSpeedInPercentage],
  });

  return (
    <article className="flex-row">
      <div className="left-container">
        <div className="information">
          <h2>
            We are Panowie Pro.
            <br /> A software studio for creatives.
          </h2>
          <Button>Work with us</Button>
        </div>
      </div>
      <div className="right-container">
        <img ref={imageRef} src={background} alt="Desert background" />
      </div>
      <h1 ref={headingRef}>Panowie</h1>
    </article>
  );
};

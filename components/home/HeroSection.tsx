import ImageComparisonSlider from "./ImageComparisonSlider";

const HeroSection = () => {
  return (
    // In your page or component
    <div className="max-w-4xl mx-auto my-8">
      <ImageComparisonSlider
        beforeImage={"before.svg"}
        afterImage={"after.svg"}
        height="600px"
        initialPosition={95}
      />
    </div>
  );
};

export default HeroSection;


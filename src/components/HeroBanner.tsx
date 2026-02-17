import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img src={heroBanner} alt="Fresh groceries" className="h-48 w-full object-cover sm:h-64" />
      <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-foreground/70 to-transparent px-8">
        <h1 className="max-w-md text-2xl font-bold text-card sm:text-4xl">
          Groceries delivered in <span className="text-secondary">10 minutes</span>
        </h1>
        <p className="mt-2 max-w-sm text-sm text-card/80">
          Fresh fruits, veggies, dairy & more at the best prices
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;

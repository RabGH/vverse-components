import Hero from "@/components/nav/landing-hero";
import Navbar from "@/components/nav/landing-navbar";

const LandingPage = () => {
  return (
    <main className="h-full overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">
        <Hero />
        <Navbar />
      </div>
    </main>
  );
};

export default LandingPage;

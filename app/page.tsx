import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CollectionsSection from "./components/CollectionsSection";
import GiftsSection from "./components/GiftsSection";
import ExploreSection from "./components/ExploreSection";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import WeddingInvitations from "./components/WeddingInvitations";


export default function Home() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#2B2B2B]">

      <Navbar />

      <HeroSection />

      {/* Dynamic Categories Section (fetches on client) */}
      <Categories />
      <WeddingInvitations />

      <CollectionsSection />

      <GiftsSection />

      <ExploreSection />

      <Footer />

    </main>
  );
}
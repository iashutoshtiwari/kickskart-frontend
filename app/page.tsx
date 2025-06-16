import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroCarousel />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

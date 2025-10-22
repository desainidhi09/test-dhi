import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CraftCard from '@/components/CraftCard'
import { craftsData } from '@/data/crafts'

export default function Home() {
  const featuredCrafts = craftsData.filter(craft => craft.featured)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Discover Unique
              <br />
              <span className="gradient-text">Handcrafted Art</span>
            </h1>
            <p className="text-xl text-dark-300 mb-8 max-w-2xl mx-auto">
              Explore our curated collection of one-of-a-kind art pieces and crafts,
              created with passion by talented artisans from around the world.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/gallery" className="btn-primary">
                Explore Gallery
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Crafts */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Collection</h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              Handpicked masterpieces that showcase exceptional craftsmanship and artistic vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
            {featuredCrafts.map((craft) => (
              <CraftCard key={craft.id} craft={craft} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery" className="btn-primary">
              View All Crafts
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-dark-800/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Browse by Category</h2>
            <p className="text-dark-300">Explore different types of handcrafted art</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Textiles', 'Pottery', 'Painting', 'Sculpture', 'Glass Art', 'Jewelry'].map((category) => (
              <Link
                key={category}
                href={`/gallery?category=${category}`}
                className="card text-center p-8 hover:bg-dark-700 transition-all group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Authentic Handcrafted</h3>
              <p className="text-dark-300">Every piece is genuinely handmade by skilled artisans</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Unique Designs</h3>
              <p className="text-dark-300">One-of-a-kind pieces you won't find anywhere else</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Made with Love</h3>
              <p className="text-dark-300">Each piece crafted with passion and attention to detail</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

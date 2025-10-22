'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CraftCard from '@/components/CraftCard'
import { craftsData, categories } from '@/data/crafts'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredCrafts = selectedCategory === 'All'
    ? craftsData
    : craftsData.filter(craft => craft.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Browse through our complete collection of handcrafted masterpieces
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/50'
                    : 'bg-dark-700 text-dark-200 hover:bg-dark-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-dark-400">
              Showing <span className="text-primary-400 font-semibold">{filteredCrafts.length}</span> pieces
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
            {filteredCrafts.map((craft) => (
              <CraftCard key={craft.id} craft={craft} />
            ))}
          </div>

          {/* No Results */}
          {filteredCrafts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-dark-300 text-lg">No crafts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

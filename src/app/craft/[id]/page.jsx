import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { craftsData } from '@/data/crafts'

export async function generateStaticParams() {
  return craftsData.map((craft) => ({
    id: craft.id.toString(),
  }))
}

export default function CraftDetail({ params }) {
  const craft = craftsData.find((c) => c.id.toString() === params.id)

  if (!craft) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Craft Not Found</h1>
          <Link href="/gallery" className="btn-primary">
            Back to Gallery
          </Link>
        </div>
      </div>
    )
  }

  const relatedCrafts = craftsData
    .filter((c) => c.category === craft.category && c.id !== craft.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="container-custom">
          {/* Breadcrumb */}
          <div className="mb-8 text-dark-400">
            <Link href="/" className="hover:text-primary-400 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/gallery" className="hover:text-primary-400 transition-colors">
              Gallery
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{craft.title}</span>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Image */}
            <div className="animate-fade-in">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={craft.image}
                  alt={craft.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Details */}
            <div className="animate-slide-up">
              <span className="inline-block bg-primary-600 text-white text-sm px-4 py-1 rounded-full mb-4">
                {craft.category}
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">{craft.title}</h1>
              <p className="text-2xl text-primary-400 font-semibold mb-6">{craft.price}</p>

              <div className="bg-dark-800 rounded-xl p-6 mb-6">
                <h2 className="text-xl font-semibold text-white mb-3">Artist Information</h2>
                <p className="text-dark-300 mb-2">
                  <span className="text-white font-medium">Created by:</span> {craft.artist}
                </p>
                <p className="text-dark-300 mb-2">
                  <span className="text-white font-medium">Dimensions:</span> {craft.dimensions}
                </p>
                <p className="text-dark-300">
                  <span className="text-white font-medium">Materials:</span> {craft.materials}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-3">Description</h2>
                <p className="text-dark-300 leading-relaxed">{craft.fullDescription}</p>
              </div>

              <div className="flex gap-4">
                <button className="btn-primary flex-1">
                  Contact for Purchase
                </button>
                <Link href="/gallery" className="btn-secondary">
                  Back to Gallery
                </Link>
              </div>
            </div>
          </div>

          {/* Related Crafts */}
          {relatedCrafts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                More in <span className="gradient-text">{craft.category}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedCrafts.map((relatedCraft) => (
                  <Link key={relatedCraft.id} href={`/craft/${relatedCraft.id}`}>
                    <div className="card group cursor-pointer">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedCraft.image}
                          alt={relatedCraft.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                          {relatedCraft.title}
                        </h3>
                        <p className="text-primary-400 font-semibold mt-2">{relatedCraft.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'About Us - Art & Craft Gallery',
  description: 'Learn about our mission to connect art lovers with talented artisans around the world.',
}

export default function About() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Curator',
      bio: 'With 15 years of experience in art curation, Sarah brings together the finest artisans and their work.',
    },
    {
      name: 'Michael Chen',
      role: 'Artist Relations',
      bio: 'Michael works directly with artisans to ensure quality and authenticity of every piece.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Manager',
      bio: 'Emily connects art lovers with the stories behind each craft, building our vibrant community.',
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="container-custom">
          {/* Hero */}
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-6">
              About <span className="gradient-text">ArtCraft</span>
            </h1>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
              We're passionate about connecting art lovers with exceptional handcrafted pieces
              from talented artisans around the world.
            </p>
          </div>

          {/* Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-dark-300 leading-relaxed mb-4">
                At ArtCraft Gallery, we believe that handcrafted art has the power to transform
                spaces and touch hearts. Our mission is to preserve traditional craftsmanship
                while celebrating contemporary creativity.
              </p>
              <p className="text-dark-300 leading-relaxed mb-4">
                We work directly with artisans, ensuring fair compensation and providing them
                with a platform to showcase their unique talents to a global audience.
              </p>
              <p className="text-dark-300 leading-relaxed">
                Every piece in our collection is carefully selected for its quality,
                authenticity, and the story it tells. We're not just selling art –
                we're sharing the passion and dedication of the artists who create it.
              </p>
            </div>

            <div className="bg-dark-800 rounded-2xl p-8 animate-slide-up">
              <h3 className="text-2xl font-bold text-white mb-6">What Sets Us Apart</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Authenticity Guaranteed</h4>
                    <p className="text-dark-300 text-sm">Every piece is verified as genuinely handcrafted</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Direct from Artisans</h4>
                    <p className="text-dark-300 text-sm">We work directly with creators, no middlemen</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Global Collection</h4>
                    <p className="text-dark-300 text-sm">Curated pieces from artisans worldwide</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Passionate Service</h4>
                    <p className="text-dark-300 text-sm">Dedicated support from art enthusiasts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="card p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-primary-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-primary-400 text-sm mb-3">{member.role}</p>
                  <p className="text-dark-300 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Discover unique handcrafted pieces that tell a story and transform your space
            </p>
            <Link href="/gallery" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-dark-50 transition-colors inline-block">
              Browse Gallery
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

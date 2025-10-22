import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-dark-700 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold gradient-text inline-block mb-4">
              ArtCraft
            </Link>
            <p className="text-dark-300 max-w-md">
              Discover unique handcrafted art and crafts from talented artisans around the world.
              Each piece tells a story of passion, skill, and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-dark-300 hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-8 pt-8 text-center text-dark-400">
          <p>&copy; {currentYear} ArtCraft Gallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

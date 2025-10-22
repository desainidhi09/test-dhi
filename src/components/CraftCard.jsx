import Link from 'next/link'
import Image from 'next/image'

export default function CraftCard({ craft }) {
  return (
    <Link href={`/craft/${craft.id}`}>
      <div className="card group cursor-pointer">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={craft.image}
            alt={craft.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent opacity-60"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block bg-primary-600 text-white text-xs px-3 py-1 rounded-full mb-2">
              {craft.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
            {craft.title}
          </h3>
          <p className="text-dark-300 text-sm mb-3">{craft.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-primary-400 font-semibold text-lg">{craft.price}</span>
            <span className="text-dark-400 text-sm">by {craft.artist}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

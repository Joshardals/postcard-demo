import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-rose-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Vintage Postcards,
            <span className="text-rose-600"> Delivered Worldwide</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Beautiful vintage postcard designs printed and shipped from the US
            to Germany and beyond.
          </p>

          <Link
            href="/shop"
            className="inline-block bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-rose-700 transition"
          >
            Browse Postcards
          </Link>
        </div>
      </div>
    </div>
  );
}

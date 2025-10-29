import Image from "next/image";
import Link from "next/link";

async function getPostcards() {
  const res = await fetch("http://localhost:3000/api/postcards", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ShopPage() {
  const postcards = await getPostcards();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Shop Vintage Postcards
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {postcards.map((postcard: any) => (
            <Link
              key={postcard.id}
              href={`/postcard/${postcard.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="relative aspect-3/2">
                  <Image
                    src={postcard.image_url}
                    alt={postcard.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {postcard.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {postcard.description}
                  </p>
                  <p className="text-xl font-bold text-rose-600">
                    ${postcard.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

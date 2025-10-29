import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { postcards } from "@/lib/data";

export default async function PostcardDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postcard = postcards.find((p) => p.id === id);

  if (!postcard) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/shop"
          className="text-rose-600 hover:underline mb-6 inline-block"
        >
          ← Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-md p-8">
          {/* Image */}
          <div className="relative aspect-3/2 rounded-lg overflow-hidden">
            <Image
              src={postcard.image_url}
              alt={postcard.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {postcard.title}
            </h1>

            <p className="text-gray-600 mb-6">{postcard.description}</p>

            <p className="text-4xl font-bold text-rose-600 mb-6">
              ${postcard.price}
            </p>

            {/* Quantity selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-20 px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Buy button */}
            <Link
              href="/checkout"
              className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition mb-4 block text-center"
            >
              Buy Now
            </Link>

            {/* Shipping info */}
            <div className="text-sm text-gray-500 mt-4">
              <p>✓ Ships internationally</p>
              <p>✓ Printed on high-quality cardstock</p>
              <p>✓ Standard postcard size (4×6 inches)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

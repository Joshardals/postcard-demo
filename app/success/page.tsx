import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Order Confirmed!
          </h1>

          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your vintage postcard will be printed
            and shipped soon.
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-sm text-gray-700 mb-2">
              What happens next:
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ You'll receive a confirmation email shortly</li>
              <li>✓ Your postcard will be printed within 1-2 business days</li>
              <li>✓ Shipping typically takes 5-10 business days</li>
              <li>✓ You'll get tracking info once shipped</li>
            </ul>
          </div>

          <div className="space-y-3">
            <Link
              href="/shop"
              className="block w-full bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition"
            >
              Browse More Postcards
            </Link>

            <Link
              href="/"
              className="block w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

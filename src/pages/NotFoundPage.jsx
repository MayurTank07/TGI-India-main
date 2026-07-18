import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Footer from "../components/Footer/Footer";
import { ROUTE_SEO } from "../seo/metadata";

export default function NotFoundPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SEO {...ROUTE_SEO['/404']} />
      <section className="py-20 md:py-32 px-5 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-purple-700 mb-3">404</p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            This page may have moved or the URL may be incorrect.
          </p>
          <Link
            to="/"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            Go to Homepage
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

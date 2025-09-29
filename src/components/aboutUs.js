"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source).url();
}

function AboutUs({ data }) {
  // CMS verisi yoksa placeholder göster
  if (!data) {
    return (
      <section className="relative bg-white py-16 md:py-24 text-center">
        <h4 className="text-3xl md:text-4xl font-semibold">Loading...</h4>
        <p className="text-gray-600 mt-6">
          Content will appear here once data is available.
        </p>
      </section>
    );
  }

  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

          {/* Yazı Alanı */}
          <div className="lg:col-span-4 md:col-span-12 lg:order-2 text-center">
            <h4 className="text-3xl md:text-4xl font-semibold">{data.title || "Title missing"}</h4>
            <p className="text-gray-600 mt-6 leading-relaxed">{data.description || ""}</p>
            <div className="mt-6">
              <button className="text-pink-500 font-semibold hover:text-pink-700 transition">
                Read More →
              </button>
            </div>
          </div>

          {/* Sol Görsel */}
          <div className="lg:col-span-4 md:col-span-6 lg:order-1 flex justify-center">
            <Image
              src={data?.image1 ? urlFor(data.image1) : "/placeholder.jpg"}
              alt="Story 1"
              width={500}
              height={600}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Sağ Görsel */}
          <div className="lg:col-span-4 md:col-span-6 lg:order-3 flex justify-center">
            <Image
              src={data?.image2 ? urlFor(data.image2) : "/placeholder.jpg"}
              alt="Story 2"
              width={500}
              height={600}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

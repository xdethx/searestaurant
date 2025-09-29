"use client";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source).url();
}

function HeroSection({ data }) {
  // Veri yoksa placeholder göster
  if (!data) {
    return (
      <section className="relative w-full h-[500px] md:h-screen bg-gray-800 flex items-center justify-center text-center">
        <div className="text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Loading...</h1>
          <p className="text-lg md:text-2xl">Content will appear here once data is available.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative w-full h-[500px] md:h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('${data.backgroundImage ? urlFor(data.backgroundImage) : "/placeholder.jpg"}')`
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-white px-4">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">{data.title || "Title missing"}</h1>
        <p className="text-lg md:text-2xl mb-6">{data.subtitle || ""}</p>
        {data.buttonText && (
          <button className="border-2 border-pink-500 text-pink-500 font-semibold px-6 py-3 rounded-2xl hover:bg-pink-500 hover:text-white transition-colors duration-300">
            {data.buttonText}
          </button>
        )}
      </div>
    </section>
  );
}

export default HeroSection;

"use client";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function OurChefs({ chefs }) {
  if (!chefs || chefs.length === 0) {
    return (
      <section className="bg-white py-16 text-center">
        <h3 className="text-3xl font-semibold mb-4">Loading Chefs...</h3>
      </section>
    );
  }

  return (
    <section className="relative bg-white pt-4 pb-20">
      <div className="container mx-auto relative px-4">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            Our Chefs
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Our buzzy food-hall style concept is inspired by international dining styles.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-6 gap-6">
          {chefs.map((c, i) => (
            <article key={i} className="group relative overflow-hidden rounded-md duration-500">
              <div className="relative w-full aspect-[500/633] rounded-md overflow-hidden">
                <Image
                  src={c.img || "/placeholder.jpg"}
                  alt={c.name || "Chef"}
                  fill
                  className="absolute inset-0 w-full h-full object-cover rounded-md shadow-sm transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none"></div>

                <div className="absolute start-0 end-0 text-center p-6 -bottom-[84px] group-hover:bottom-0 duration-500">
                  <a href="#" className="text-white hover:text-pink-500 text-lg font-medium">
                    {c.name || "Chef Name"}
                  </a>
                  <p className="text-white/70 mt-1">{c.role || "Master Chef"}</p>

                  <ul className="flex items-center justify-center gap-2 mt-2">
                    {c.socials?.facebook && (
                      <li>
                        <a href={c.socials.facebook} className="size-8 inline-flex items-center justify-center rounded-full bg-pink-600 text-white hover:bg-pink-500 transition">
                          <FaFacebookF className="text-[12px]" />
                        </a>
                      </li>
                    )}
                    {c.socials?.instagram && (
                      <li>
                        <a href={c.socials.instagram} className="size-8 inline-flex items-center justify-center rounded-full bg-pink-600 text-white hover:bg-pink-500 transition">
                          <FaInstagram className="text-[12px]" />
                        </a>
                      </li>
                    )}
                    {c.socials?.linkedin && (
                      <li>
                        <a href={c.socials.linkedin} className="size-8 inline-flex items-center justify-center rounded-full bg-pink-600 text-white hover:bg-pink-500 transition">
                          <FaLinkedinIn className="text-[12px]" />
                        </a>
                      </li>
                    )}
                    {c.socials?.twitter && (
                      <li>
                        <a href={c.socials.twitter} className="size-8 inline-flex items-center justify-center rounded-full bg-pink-600 text-white hover:bg-pink-500 transition">
                          <FaTwitter className="text-[12px]" />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurChefs;

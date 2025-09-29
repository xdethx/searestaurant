import React from "react";
import Link from "next/link";

function PageHeader({ title, backgroundImage, breadcrumbs = [], extraContent = null }) {
  return (
    <section
      className="relative md:py-44 py-32 bg-no-repeat bg-bottom bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Karartma */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/70"></div>

      {/* İçerik */}
      <div className="relative max-w-4xl mx-auto text-center z-10 px-4">
        <h1 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white mb-0">
          {title}
        </h1>

        {/* Breadcrumbs (isteğe bağlı) */}
        {breadcrumbs.length > 0 && (
          <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
            {breadcrumbs.map((item, index) => (
              <li
                key={index}
                className={`inline-block capitalize font-medium duration-500 ease-in-out ${
                  item.href ? "text-white/50 hover:text-white" : "text-white"
                }`}
              >
                {item.href ? (
                  <>
                    <Link href={item.href}>{item.label}</Link>
                    <span className="inline-block text-base text-white/50 mx-0.5">
                      &gt;
                    </span>
                  </>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
        )}

        {/* Extra içerik (örneğin blog yazarı, tarih, kategori) */}
        {extraContent && (
          <div className="mt-6 text-white/70 text-sm sm:text-base space-y-1">
            {extraContent}
          </div>
        )}
      </div>

      {/* Bombeli alt ayraç */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] z-0 text-white">
        <svg
          className="w-full h-auto scale-[2.0] origin-top"
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default PageHeader;
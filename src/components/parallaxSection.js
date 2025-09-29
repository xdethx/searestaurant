import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source).url();
}


function ParallaxSection({ data }) {
    if (!data) return null;
    return ( 
   <section
  className="relative bg-fixed bg-top bg-cover bg-no-repeat pr-4 md:pr-0"
  style={{ backgroundImage: `url('${urlFor(data.backgroundImage)}')` }}
>
  <div className="container mx-auto relative">
    <div className="flex justify-end">
      <div className="lg:w-1/2 md:w-2/3 w-1/2">
        <div className="bg-white">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">

            {/* 1. Fotoğraf */}
            <div className="text-center md:order-1 order-1">
              <img src={urlFor(data.image1)}  alt="Dish 4" className="mx-auto" />
            </div>

            {/* 1. Yazı */}
            <div className="bg-white w-full p-2 md:p-6 text-center md:order-2 order-2">
              <h5 className="mb-4 text-2xl md:text-4xl font-medium">
                 {data.title1}  {/* br şart */}
              </h5>
              <a href="#" className="hover:text-pink-600 md:text-xl  font-semibold transition">
              {data.buttonText1}<i className="mdi mdi-chevron-right align-middle"></i>
              </a>
            </div>

            {/* 2. Yazı */}
            <div className=" bg-white p-6 text-center md:order-3 order-4">
              <h5 className="mb-4 text-2xl md:text-4xl font-medium">
                {data.title2}    {/* <br /> Menus  */}
              </h5>
              <a href="#" className="hover:text-pink-600 md:text-xl  font-semibold transition">
              {data.buttonText2} <i className="mdi mdi-chevron-right align-middle"></i>
              </a>
            </div>

            {/* 2. Fotoğraf */}
            <div className="text-center md:order-4 order-3">
              <img src={urlFor(data.image2)} alt="Dish 7" className="mx-auto" />
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>



     );
}

export default ParallaxSection;
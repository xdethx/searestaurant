import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/lib/sanity';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source).url();
}


function HeroSeciton({ data }) {
    if (!data) return null;
    return ( 

        <section  className="relative w-full h-[500px] md:h-screen bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: `url('${urlFor(data.backgroundImage)}')` }}>
 
<div className="absolute inset-0 bg-black/40 ">

</div>
<div className=" relative z-10 text-white">
    <h1 className="text-3xl md:text-6xl font-bold mb-4">
       {data.title}
    </h1>
    <p className="text-lg md:text-2xl mb-6">
         {data.subtitle}
    </p>
<button className=" border-2 border-pink-500 text-pink-500 font-semibold px-6 py-3  rounded-2xl hover:bg-pink-500 hover:text-white transition-colors duration-300">
 {data.buttonText}
</button>
</div>
        
    </section>
     );
    
}

export default HeroSeciton;
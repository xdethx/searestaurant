import { FaFish, FaUtensils, FaClock } from "react-icons/fa";

function Services({ data }) {

   const icons = [FaFish, FaUtensils, FaClock];
    return ( 
   
           <section className="py-20 bg-white text-center px-4 md:px-0">
      {/* Başlık ve Alt Yazı */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-4">{data.title}</h2>
        <p className="text-gray-600 text-lg">{data.subtitle}</p>
      </div>

      {/* Kartlar */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {data.cards?.map((card, index) => {
          const Icon = icons[index] || FaFish; // varsayılan ikon
          return (
            <div key={index} className="flex flex-col items-center px-6">
              <div className="bg-yellow-100 rounded-2xl p-6 md:p-9 mb-6 inline-flex">
                <Icon className="text-orange-500 text-3xl md:text-2xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-600 mb-4 text-base md:text-lg">
                {card.description}
              </p>
              <a href="#" className="text-orange-500 font-semibold hover:underline">
                {card.buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
     );
}

export default Services;


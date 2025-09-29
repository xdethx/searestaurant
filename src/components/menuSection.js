function MenuSection() {
    return ( 
        <>
      {/* Parallax Menu Başlığı */}
<section
  className="relative bg-fixed bg-cover bg-center"
  style={{ backgroundImage: "url('/imgs/parallax.webp')" }}
>
  {/* Yüksekliği artırıldı: mobil kısa, web daha uzun */}
  <div className="w-full h-56 md:h-80 flex items-end justify-center pb-5">
    <h2 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
      Menu
    </h2>
  </div>
</section>
      {/* Menü Grid Alanı */}
     {/* Menü Grid Alanı */}
<section className="bg-white py-10">
  {/* Dış kap: ortalama ve eşit sol/sağ boşluk için max genişlik + auto margin */}
  <div className="max-w-6xl md:max-w-7xl mx-auto px-4 md:px-6">
    {/* Menü yüksekliği: ekranın yarısı kadar alan */}
    <div className="min-h-[50vh] flex items-center">
      {/* İç grid: ortada 2 sütun, satırlar arası daha büyük boşluk */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-10 md:gap-x-12">
    {[
      {
        name: "Grilled Salmon",
        price: "$18.50",
        ingredients: "salmon, lemon, herbs, olive oil",
        image: "/imgs/food1.jpg",
      },
      {
        name: "Margherita Pizza",
        price: "$16.00",
        ingredients: "tomato, mozzarella, basil",
        image: "/imgs/food1.jpg",
      },
      {
        name: "Chicken Caesar",
        price: "$12.00",
        ingredients: "chicken, romaine, croutons, parmesan",
        image: "/imgs/food1.jpg",
      },
      {
        name: "Spaghetti Bolognese",
        price: "$14.00",
        ingredients: "beef ragu, tomato, garlic, parmesan",
        image: "/imgs/food1.jpg",
      } ,
       {
        name: "Spaghetti Bolognese",
        price: "$14.00",
        ingredients: "beef ragu, tomato, garlic, parmesan",
        image: "/imgs/food1.jpg",
      } ,
       {
        name: "Spaghetti Bolognese",
        price: "$14.00",
        ingredients: "beef ragu, tomato, garlic, parmesan",
        image: "/imgs/food1.jpg",
      } ,
       {
        name: "Spaghetti Bolognese",
        price: "$14.00",
        ingredients: "beef ragu, tomato, garlic, parmesan",
        image: "/imgs/food1.jpg",
      } ,
       {
        name: "Spaghetti Bolognese",
        price: "$14.00",
        ingredients: "beef ragu, tomato, garlic, parmesan",
        image: "/imgs/food1.jpg",
      } 
    

     
      // İstersen daha fazla item ekleyebilirsin
    ].map((item, i) => (
          <div key={i} className="flex items-start gap-5">
            {/* Yuvarlak görsel: büyütüldü */}
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover flex-shrink-0"
            />

            {/* Sağ blok */}
            <div className="flex-1">
              {/* Üst satır: isim solda, fiyat sağda; altta tam genişlik çizgi */}
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-1.5">
                <h3 className="text-lg md:text-xl font-semibold leading-tight">
                  {item.name}
                </h3>
                <span className="text-base md:text-lg font-semibold">
                  {item.price}
                </span>
              </div>

              {/* Alt satır: içerikler (biraz büyütüldü) */}
              <p className="text-gray-500 text-sm md:text-base mt-2 leading-relaxed">
                {item.ingredients}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>
    </>
     );
}

export default MenuSection;
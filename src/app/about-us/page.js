import PageHeader from "@/components/pageHeader";
import Services from "@/components/services";

function AboutUsPage() {
    return ( 
        <div>
            <PageHeader title="Restaurant Story"
        backgroundImage="/imgs/landing.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}/>
        
  <section className="relative py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Üst küçük başlık */}
        <h6 className="uppercase font-semibold text-lg text-gray-700">About Us</h6>

        {/* Büyük alt başlık */}
        <h2 className="text-4xl font-semibold mt-3 mb-6 text-gray-900">
          Food is our common ground, <br /> a universal experience.
        </h2>

        {/* İçerik paragrafı */}
        <p className="text-gray-500 leading-relaxed mb-4">
          Our buzzy food-hall style concept is inspired by international dining styles, especially in Asia. Explore the following fast-action food stations as busy chefs perform.
        </p>

        <p className="text-gray-500 leading-relaxed mb-4">
          Enjoy a verdant Garden to Glass experience. It’s in the view, it’s reflected in the design, and it infuses many drinks. In fact, all our delicious fresh ingredients are sustainably picked from our Jemima’s Kitchen Garden. Our flourishing range of cocktails, spirits, beers and wines are all made with integrity and offer something for every guest.
        </p>

        <p className="text-gray-500 leading-relaxed mb-8">
          Assumenda possimus eaque illo iste, autem. Porro eveniet, autem ipsam vitae amet repellat repudiandae tenetur, quod corrupti consectetur cum? Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentium itaque et quam quaerat. Cumque, consequatur!
        </p>

        {/* Buton */}
        <div>
        <button className=" border-2 border-pink-500 text-pink-500 font-semibold px-6 py-3  rounded-2xl hover:bg-pink-500 hover:text-white transition-colors duration-300">
Book a Table
</button>
        </div>
      </div>
    </section>
<Services/>

        </div>
     );
}

export default AboutUsPage;
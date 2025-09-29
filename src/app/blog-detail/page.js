import PageHeader from "@/components/pageHeader";
const dummyPost = {
  title: "Creamy Garlic Parmesan Chicken Salad",
  mainImage: "/imgs/landing.jpg",
  tags: ["Food", "Drinks", "Recipes"],
  author: "Calvin Carlo",
  date: "April 10, 2024",
  description: `
Creamy garlic parmesan chicken salad is the perfect combination of rich flavor and healthy ingredients.
Made with grilled chicken, fresh greens, and a homemade dressing, this recipe is perfect for any meal of the day.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim. 
Curabitur convallis, turpis at ultricies convallis, lacus turpis rutrum lorem, et posuere eros sapien nec neque.
  `,
  gallery: ["/imgs/landing.jpg", "/imgs/landing.jpg"],
};
function BlogDetail() {
     const { title, mainImage, tags, author, date, description, gallery } = dummyPost;
    return ( 
        <>
        <PageHeader
  title="Recipes: Creamy Garlic Parmesan Chicken Salad"
  backgroundImage="/imgs/landing.jpg"
  extraContent={
    <>
      <p className="uppercase tracking-wide text-orange-400 font-medium">Food & Recipes</p>
      <p>Calvin Carlo &nbsp;•&nbsp; April 10, 2024</p>
    </>

    
  }
/>

  <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-10 space-y-8">

         
          <img
            src={mainImage}
            alt={title}
            width={1200}
            height={700}
            className="w-full h-auto rounded-lg object-cover"
          />

        
          <div className="flex flex-wrap justify-between items-center text-gray-400 text-sm">
            <div>
              <span className="mr-2">{author}</span> · <span className="ml-2">{date}</span>
            </div>
          </div>

          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

         
          <div className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
            {description}
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Gallery ${i + 1}`}
                width={800}
                height={530}
                className="w-full h-auto rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      </section>

  
        </>
     );
}

export default BlogDetail;
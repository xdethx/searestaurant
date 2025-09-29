const dummyPosts = Array.from({ length: 23 }).map((_, i) => ({
  title: `Blog Title ${i + 1}`,
  slug: `blog-title-${i + 1}`,
  mainImage: "/imgs/landing.jpg",
  tags: ["Food", "Drinks", "Recipes"],
  author: "Calvin Carlo",
  date: "April 10, 2024",
  description:
    "Creamy garlic parmesan chicken salad is the perfect combination of rich flavor and healthy ingredients.",
}));

export default dummyPosts;
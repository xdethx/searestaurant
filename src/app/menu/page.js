"use client"
import PageHeader from "@/components/pageHeader";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Breakfast", "Lunch", "Dinner", "Tea & Coffee"];

const menuItems = [
  {
    id: 1,
    category: "Breakfast",
    name: "Pancakes",
    description: "Fluffy homemade pancakes with syrup",
    price: "$7.99",
    image: "/imgs/food1.jpg",
  },
  {
    id: 2,
    category: "Lunch",
    name: "Grilled Chicken Salad",
    description: "Fresh salad with grilled chicken and dressing",
    price: "$12.50",
    image: "/imgs/food1.jpg",
  },
  {
    id: 3,
    category: "Dinner",
    name: "Steak with Veggies",
    description: "Juicy steak served with seasonal vegetables",
    price: "$22.00",
    image: "/imgs/food1.jpg",
  },
  {
    id: 4,
    category: "Tea & Coffee",
    name: "Cappuccino",
    description: "Rich and creamy cappuccino",
    price: "$4.50",
    image: "/imgs/food1.jpg",
  },
  {
    id: 5,
    category: "Breakfast",
    name: "Omelette",
    description: "Three-egg omelette with cheese and herbs",
    price: "$8.50",
    image: "/imgs/food1.jpg",
  },
  {
    id: 6,
    category: "Dinner",
    name: "Spaghetti Bolognese",
    description: "Classic Italian pasta with meat sauce",
    price: "$15.00",
    image: "/imgs/food1.jpg",
  },
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <PageHeader
        title="Restaurant Story"
        backgroundImage="/imgs/landing.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Menu" },
        ]}
      />

      <section className="py-20 px-4 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Filtre Menüsü */}
          <nav className="flex justify-center space-x-8 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`capitalize font-medium text-gray-500 hover:text-orange-500 transition ${
                  selectedCategory === cat ? "text-orange-500" : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>

          {/* Menü Yemekleri Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <AnimatePresence>
              {filteredItems.map(({ id, name, description, price, image }) => (
                <motion.div
                  layout
                  key={id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md"
                >
                  <div className="w-48 h-48 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                    <img
                      src={image}
                      alt={name}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-lg font-semibold mt-4 hover:text-orange-500 transition-colors duration-300">
                    {name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{description}</p>
                  <p className="text-orange-500 font-semibold text-md mt-3">
                    {price}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Menu;

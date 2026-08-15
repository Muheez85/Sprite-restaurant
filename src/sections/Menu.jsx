import { useEffect, useRef, useState } from "react";
import "./Menu.css";

import pastaImage from "../assets/images/menu-pasta.jpg";
import steakImage from "../assets/images/menu-steak.jpg";
import salmonImage from "../assets/images/menu-salmon.jpg";
import dessertImage from "../assets/images/menu-dessert.jpg";
import calamariImage from "../assets/images/menu-calamari.jpg";
import bruschettaImage from "../assets/images/menu-bruhchessta.jpg";



function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const menuItems = [
    {
      id: 1,
      name: "Creamy Truffle Pasta",
      description:
        "Fresh pasta tossed in a rich truffle cream sauce with parmesan.",
      price: "$24",
      category: "Mains",
      image: pastaImage,
    },
    {
      id: 2,
      name: "Herb-Crusted Steak",
      description:
        "Tender premium steak served with roasted vegetables and herbs.",
      price: "$32",
      category: "Mains",
      image: steakImage,
    },
    {
      id: 3,
      name: "Pan-Seared Salmon",
      description:
        "Fresh salmon served with seasonal vegetables and a citrus glaze.",
      price: "$28",
      category: "Mains",
      image: salmonImage,
    },
    {
      id: 4,
      name: "Signature Chocolate",
      description:
        "Rich dark chocolate dessert finished with vanilla cream.",
      price: "$14",
      category: "Desserts",
      image: dessertImage,
    },
    {
        id: 5,
        name: "Crispy Calamari",
        description:
            "Lightly seasoned calamari served crisp with a fresh citrus herb dip.",
        price: "$16",
        category: "Starters",
        image: calamariImage,
   },
   {
  id: 6,
  name: "Bruschetta Classica",
  description:
    "Toasted artisan bread topped with fresh tomatoes, basil, garlic, and olive oil.",
  price: "$12",
  category: "Starters",
  image: bruschettaImage,
},
  ];

  const categories = ["All", "Starters", "Mains", "Desserts"];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section
      className={`menu-section ${visible ? "menu-visible" : ""}`}
      id="menu"
      ref={sectionRef}
    >
      <div className="menu-container">
        {/* Heading */}
        <div className="menu-heading">
          <span className="section-eyebrow">
            EXPLORE OUR MENU
          </span>
          <h2>
            Crafted with passion,
            <br />
            <span>served with purpose.</span>
          </h2>
          <p>
            Discover a selection of dishes prepared with fresh
            ingredients, bold flavors, and a touch of Sprite.
          </p>
        </div>
        {/* Categories */}
        <div className="menu-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Menu Grid */}
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <article className="menu-card" key={item.id}>
              <div className="menu-image">
                <img
                  src={item.image}
                  alt={item.name}
                />
                <div className="menu-price">
                  {item.price}
                </div>
              </div>
              <div className="menu-card-content">
                <span className="menu-category">
                  {item.category}
                </span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        {/* CTA */}
        <div className="menu-footer">
          <a href="#reservations" className="menu-link">
            View Full Menu
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Menu;
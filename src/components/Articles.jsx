import React from "react";
import Button from "./Button";
import { handleBook } from "./helper";
export default function Article(props) {
  //   const handleBook = (booked) => {
  //     if (booked === "pasta") {
  //       props.setHide((prev) => !prev);
  //       console.log("is pasta");
  //     } else if (booked === "chicken") {
  //       props.setHide((prev) => !prev);
  //     } else if (booked === "burger") {
  //       props.setHide((prev) => !prev);
  //     } else {
  //       props.setHide(false);
  //     }
  //     console.log(booked, "booked oo");
  //   };
  return (
    <>
      <section>
        <article className="content">
          <h2>Pasta</h2>

          <img src={require("../logos/pasta.jpg")} alt="Little lemon pasta" />
          <p>
            This delicious pasta dish is sure to please! It combines creamy
            spinach sauce with fresh fettuccine noodles for a flavor-packed
            meal. The creamy sauce is made with creamy ricotta and parmesan
            cheeses, garlic, and fresh spinach. The noodles are cooked to
            perfection and topped with freshly grated parmesan cheese. Serve
            this dish with a side salad and garlic bread for a complete and
            satisfying meal. Enjoy!
          </p>
          <Button onClick={() => handleBook("pasta", props)}>
            Book your table now
          </Button>
        </article>
        <article className="content">
          <h2>Chicken</h2>
          <img
            src={require("../logos/recipe1.jpg")}
            alt="Little lemon fried chicken"
          />
          <p>
            Chicken is a classic dish that is both delicious and easy to make.
            From simple recipes to more complex dishes, chicken can be enjoyed
            cooked in a variety of ways. Enjoy grilled chicken with a simple
            side salad, or try a flavorful curry with rice. From comfort food to
            gourmet dishes, there are countless recipes to explore with chicken.
            Start your culinary journey today!
          </p>

          <Button onClick={() => handleBook("chicken", props)}>
            Book your table now
          </Button>
        </article>
        <article className="content">
          <h2>Burger</h2>
          <img
            src={require("../logos/recipe2.jpg")}
            alt="Little lemon delicacy"
          />
          <p>
            Our delicious burger dish is sure to satisfy your hunger! Our
            homemade beef patties are grilled to perfection and topped with
            lettuce, tomato, onion, and your choice of condiments. Served on a
            toasted brioche bun, this classic burger is sure to hit the spot.
            Try it today!
          </p>
          <Button onClick={() => handleBook("burger", props)}>
            Book your table now
          </Button>
        </article>
      </section>
    </>
  );
}

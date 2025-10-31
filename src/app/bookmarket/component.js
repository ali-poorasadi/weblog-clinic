"use client";

import React, { useEffect, useRef } from "react";

export default function CategoryBar() {
  const categories = [
    "Fiction",
    "Non‑Fiction",
    "Self‑Help",
    "Business",
    "Kids",
    "Comics",
    "Science Fiction",
    "Romance",
    "Mystery",
    "Biography",
    "History",
    "Poetry",
  ];

  // Duplicate categories for seamless infinite scroll
  const duplicatedCategories = [...categories, ...categories];

  return (
    <div className="category-container">
      <div className="category-scroll-auto" >
        {duplicatedCategories.map((category, index) => {
          let rand = Math.floor((index % 6) - 3);
          return (
            <a
              key={index}
              href="#"
              className="category-item"
              style={{
                boxShadow: `${rand}px ${rand}px 0px black`,
              }}
            >
              {category}
            </a>
          );
        })}
      </div>
    </div>
  );
}

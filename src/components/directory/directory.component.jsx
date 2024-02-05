import React from "react";
import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

function Directory({categories}) {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return (
          <CategoryItem
            key={category.id}
            title={category.title}
            imageUrl={category.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default Directory;

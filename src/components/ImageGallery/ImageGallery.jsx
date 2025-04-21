import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { useState } from "react";
export default function ImageGallery({ items, onImageClick }) {
  if (!items || items.length === 0) {
    return;
  }
  return (
    <>
      <ul className={css.list}>
        {items.length > 0 &&
          items.map((item) => {
            return (
              <li key={item.id} onClick={() => onImageClick(item.urls.regular)}>
                <ImageCard item={item} />
                {/* <div className={css.boxImg}>
                  <img
                    src={item.urls.small}
                    alt={item.description || "Picture"}
                  />
                </div>
                <div className={css.boxText}>
                  <p>likes : {item.likes}</p>
                  <p>portfolio_url : {item.user.portfolio_url || "ananim"}</p>
                  <p>
                    twitter_username: {item.user.twitter_username || "ananim"}
                  </p>
                </div> */}
              </li>
            );
          })}
      </ul>
    </>
  );
}

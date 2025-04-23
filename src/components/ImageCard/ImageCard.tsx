import css from "./ImageCard.module.css";
import { IPhoto } from "../../types/photo";
import React, { FC } from "react";

interface IPhotoItem {
  item: IPhoto;
}
export const ImageCard: FC<IPhotoItem> = ({ item }) => {
  return (
    <div className={css.boxImageCard}>
      <div className={css.boxImg}>
        <img src={item.urls.small} alt={item.description || "Picture"} />
      </div>
      <div className={css.boxText}>
        <p>likes : {item.likes}</p>
        <p>portfolio_url : {item.user.portfolio_url || "-"}</p>
        <p>twitter_username: {item.user.twitter_username || "-"}</p>
      </div>
    </div>
  );
};

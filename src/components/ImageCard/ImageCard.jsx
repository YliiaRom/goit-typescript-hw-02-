import css from "./ImageCard.module.css";
export default function ImageCard({ item }) {
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
      {/* <div className={css.boxText}>
        <p>model: {item.exif.model || "-"}</p>
        <p>exposure_time: {item.exif.exposure_time || "-"}</p>
        <p>aperture: {item.exif.aperture || "-"}</p>
        <p>iso: {item.exif.iso || "-"}</p>
      </div> */}
    </div>
  );
}

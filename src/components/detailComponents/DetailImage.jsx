import classes from "./DetailImage.module.css";

const DetailImage = ({ image, title }) => {
  return (
    <div
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        background: `linear-gradient(190deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image}`,
      }}
    >
      <div className={classes.ad_text}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default DetailImage;

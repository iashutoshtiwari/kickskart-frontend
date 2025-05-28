import styles from "./button.module.scss";

const Button = (props) => {
  const { variant, width, height, buttonLabel, onClick = () => {} } = props;

  const onButtonClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <span
      aria-hidden
      style={{ height: `${height}px`, width: `${width}px` }}
      className={styles["button-container"]}
    >
      <button
        aria-label={buttonLabel}
        onClick={onButtonClick}
        className={
          styles[
            variant === "light" ? "button-style-light" : "button-style-dark"
          ]
        }
      >
        {buttonLabel}
      </button>
    </span>
  );
};

export default Button;

import "./button.styles.scss";

const buttonTypeClasses = {
  google: "google-sign-in",
  invert: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${buttonTypeClasses[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

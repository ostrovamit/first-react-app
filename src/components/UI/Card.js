import "./Card.css";

const Card=(props) => {
  const classes = "card " + props.className;  //we used the wrapper component to project css code

  return <div className={classes}>{props.children}</div>;
}

export default Card;

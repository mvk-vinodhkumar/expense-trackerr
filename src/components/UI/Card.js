import "./Card.css"

const Card = (props) => {
  const classes = "card " + props.className

  // return <div className={`card ${props.className}`}>{props.children}</div>
  return <div className={classes}>{props.children}</div>
}

export default Card

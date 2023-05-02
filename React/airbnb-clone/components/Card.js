import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT!";
  } else if (props.card.location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.card.coverImg}`} className="card--photo" />
      <div className="card--stats">
        <img src="../images/star.png" className="star"></img>
        <span>{props.card.stats.rating}</span>
        <span className="faint-text">
          ({props.card.stats.reviewCount}) • {props.card.location}
        </span>
      </div>
      <p className="card--title">{props.card.title}</p>
      <p className="card-text">
        <span className="bold-text">From ${props.card.price}</span>/person
      </p>
    </div>
  );
}

// export default function Card({img,rating,reviews,country,title,cost}) {
//     return (
//       <div className="card">
//         <img src={img} className="card--photo" />
//         <div className="card--stats">
//             <img src="../images/star.png" className="star"></img>
//             <span>{rating}</span>
//             <span className="faint-text">({reviews}) • {country}</span>
//           </div>
//             <p>{title}</p>
//           <p className="card-text">
//             <span className="bold-text">From ${cost}</span>/person
//           </p>
//       </div>
//     );
//   }

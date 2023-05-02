import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


export default function Post(props) {
  return (
    <div className="post">
      <div className="post--image">
        <img src={props.post.imageUrl} className="post--photo" />
      </div>
      <div className="post-text">
        <p className="post--location"><FontAwesomeIcon icon={faLocationDot} className="red"/>
          <span className="blocktext">{props.post.location}</span>
          <a href={props.post.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </p>
        <h2 className="post--title">{props.post.title}</h2>
        <p className="post--date">{props.post.startDate}  - {props.post.endDate}</p>
        <p className="post--description">{props.post.description}</p>
      </div>
    </div>
  );
}

import { Fragment } from "react";
import classess from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  const { image, title, address, description } = props.meetupData;

  return (
    <section className={classess.detail}>
      <img src={image} alt="First Meetup" />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}

export default MeetupDetail;

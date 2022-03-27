import { useEffect } from "react";
import { useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "The Title",
//     image:
//       "https://www.heyuguys.com/images/2012/06/Need-For-Speed-Girl-500x350.jpeg",
//     address: "The Address here",
//     description: "The Description here",
//   },
//   {
//     id: "m2",
//     title: "The Title 2",
//     image:
//       "https://www.heyuguys.com/images/2012/06/Need-For-Speed-Girl-500x350.jpeg",
//     address: "The Address here",
//     description: "The Description here",
//   },
// ];
function HomePage(props) {
  //   const [loadMeetups, setLoadMeetups] = useState([]);
  //   useEffect(() => {
  //     setLoadMeetups(DUMMY_MEETUPS);
  //   }, []);

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge "></meta>
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );

  // return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   //fetch API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // get data from API
  const client = await MongoClient.connect(
    "mongodb+srv://udula01:udula@cluster0.sxirz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;

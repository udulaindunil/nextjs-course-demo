import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(meetupData) {
    const resposne = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await resposne.json();
    router.push("/");
    console.log(data);
  }

  return (
    <Fragment>
      <Head>
        <title>Add new Meetup</title>
        <meta
          name="description"
          content="Add new Meetup for the application "
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;

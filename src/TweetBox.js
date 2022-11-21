import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import "./TweetBox.css";
import { firestore as db } from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (event) => {
    event.preventDefault();

    db.collection("posts").add({
      displayName: "Christian Scobie",
      username: "Scobiousmaximous",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://i.pinimg.com/originals/0f/e2/17/0fe2172a18a380b4daca3a1e705f84d0.jpg",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.pinimg.com/originals/0f/e2/17/0fe2172a18a380b4daca3a1e705f84d0.jpg" />
          <input
            onChange={(event) => setTweetMessage(event.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(event) => setTweetImage(event.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}
export default TweetBox;

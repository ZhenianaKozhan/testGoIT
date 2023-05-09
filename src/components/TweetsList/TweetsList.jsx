import { useEffect, useState } from "react";
import TweetsItem from "./TweetsItem/TweetsItem";
import { fetchTweets } from "../../services/api";
import { Link } from "react-router-dom";

const TweetsList = () => {
  const [tweets, setTweets] = useState(null);
  const [displayedTweets, setDisplayedTweets] = useState([]);
  const [tweetsPerPage, setTweetsPerPage] = useState(3);

  useEffect(() => {
    async function fetchData() {
      const res = await fetchTweets();
      setTweets(res);
    }
    fetchData();
  }, []);

  useEffect(() => {
    tweets && setDisplayedTweets(tweets.slice(0, tweetsPerPage));
  }, [tweets, tweetsPerPage]);

  const handleLoadMore = () => {
    setTweetsPerPage(tweetsPerPage + 3);
  };

  return (
    tweets && (
      <>
        <Link to="/">
          <button type="button" style={{ marginTop: "10px" }}>
            Back
          </button>
        </Link>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {displayedTweets?.map(
            ({ id, tweets, followers, avatar, isFollowing }) => (
              <TweetsItem
                key={id}
                id={id}
                tweets={tweets}
                followers={followers}
                avatar={avatar}
                isFollowing={isFollowing}
              />
            )
          )}
          {tweets.length > tweetsPerPage && (
            <button
              type="button"
              onClick={handleLoadMore}
              style={{
                gridColumnStart: "2",
                gridColumnEnd: "3",
                justifySelf: "center",
                color: "white",
                backgroundColor: "#800080",
                width: "fit-content",
              }}
            >
              Load More
            </button>
          )}
        </ul>
      </>
    )
  );
};

export default TweetsList;

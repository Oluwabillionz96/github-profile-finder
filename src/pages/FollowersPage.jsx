import FollowersAndFollowing from "../components/FollowersAndFollowing";
import { useShared } from "../components/SharedContext";
import "../styles/followers-followingPage.css";

const FollowersPage = () => {
  const { data } = useShared();
  return (
    <FollowersAndFollowing
      follow_url={data?.followers_url}
      followNumber={data?.followers}
    />
  );
};

export default FollowersPage;

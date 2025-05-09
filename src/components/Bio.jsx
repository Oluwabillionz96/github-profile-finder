import Linkify from "linkify-react";
import { RiGitRepositoryLine, RiUserFollowLine } from "react-icons/ri";
import { SlUserFollow } from "react-icons/sl";
import { useShared } from "./SharedContext";
import { Link } from "react-router-dom";
const Bio = ({ bio }) => {
  const { data } = useShared();

  return (
    <div className="bio">
      <Linkify>{bio || data?.bio || "Account doesn't have a bio."}</Linkify>
    </div>
  );
};

export default Bio;

export const Details = () => {
  const { data } = useShared();

  return (
    <div className="details-container">
      <div className="details">
        <div className="following">
          <Link to={"/following"}>
            <div className="icon">
              <RiUserFollowLine />
            </div>{" "}
            <p className="text">{data?.following} Following</p>
          </Link>
        </div>
        <div className="followers">
          <Link to={"/followers"}>
            <div className="icon">
              <SlUserFollow />
            </div>
            <p className="text">{data?.followers} Followers</p>
          </Link>
        </div>
        <div className="repositories">
          <Link to={"/repositories"}>
            <div className="icon">
              <RiGitRepositoryLine />
            </div>
            <p className="text">{data?.public_repos} Repositories</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

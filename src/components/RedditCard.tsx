import { decode } from "html-entities";
import "./styles.css";

export interface IRedditCardProps {
  title: string;
  selfTextHTML: string | null;
  url: string;
  score: number;
}

const RedditCard = (props: IRedditCardProps) => {
  const { title, selfTextHTML, url, score } = props;
  const tempSelfTextHTML: string = decode(selfTextHTML) ?? "";
  return (
    <div className="card">
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: tempSelfTextHTML ?? "" }} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
      <p>Score: {score}</p>
    </div>
  );
};
export default RedditCard;

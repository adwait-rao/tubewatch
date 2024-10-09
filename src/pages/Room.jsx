import {
  redirect,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect, useRef, useState } from "react";
import { useDatabase } from "../context/DbContext";
import ReactPlayer from "react-player";

export default function Room() {
  const { user } = useUserContext();
  const { roomId } = useParams();
  const location = useLocation();
  const database = useDatabase();
  const playerRef = useRef();
  const navigate = useNavigate();

  const [elapsedTime, setElapsedTime] = useState(0);
  const [duration, setDuration] = useState(0);

  if (user.username === "") {
    navigate("/");
  }

  useEffect(() => {
    //init code
  }, []);
  return (
    <div>
      Hello {user.username || "no username"}! <br /> Room id:{roomId}
      <p>Video URL: {location.state.videoUrl}</p>
      <ReactPlayer
        ref={playerRef}
        url={location.state.videoUrl}
        controls={true}
        onReady={(event) => {
          setDuration(event.getDuration());
        }}
        onProgress={(event) => {
          setElapsedTime(event.playedSeconds);
        }}
        onEnded={() => {}}
      />
      <p>Elapsed Time: {elapsedTime}</p>
      <p>Duration: {duration}</p>
    </div>
  );
}

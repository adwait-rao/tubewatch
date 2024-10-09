import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Form, useNavigate } from "react-router-dom";
import { randomCouchString } from "rxdb";

export default function Home() {
  const [isHost, setIsHost] = useState(true);
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const roomId = `room-${randomCouchString(10)}`;
    const videoUrl = event.target.elements.videoUrl.value;
    setUser({ ...user, userId: randomCouchString(10) });
    navigate(`/room/${roomId}`, { state: { videoUrl } });
  };

  return (
    <div>
      <button onClick={() => setIsHost(false)}>Join</button>
      <button onClick={() => setIsHost(true)}>Host</button>
      {isHost ? (
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            id="user-name"
            required
          />
          <input
            type="url"
            placeholder="Video URL"
            name="videoUrl"
            id="video-url"
            required
          />
          <button type="submit">Host Room</button>
        </Form>
      ) : (
        <form action="">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            id="user-name"
          />
          <input
            type="text"
            placeholder="Room Code"
            name="roomCode"
            id="room-code"
          />
          <button type="submit">Join Room</button>
        </form>
      )}
      <div></div>
    </div>
  );
}

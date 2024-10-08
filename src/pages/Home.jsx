import { useState } from "react";

export default function Home() {
  const [isHost, setIsHost] = useState(true);
  return (
    <div>
      <button onClick={() => setIsHost(false)}>Join</button>
      <button onClick={() => setIsHost(true)}>Host</button>
      {isHost ? (
        <form action="">
          <input
            type="text"
            placeholder="Username"
            name="username"
            id="user-name"
          />
          <input
            type="url"
            placeholder="Video URL"
            name="videoUrl"
            id="video-url"
          />
          <button type="submit">Host Room</button>
        </form>
      ) : (
        <form action="">
          <input
            type="text"
            placeholder="Username"
            name="username"
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

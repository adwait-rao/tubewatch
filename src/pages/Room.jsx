import { useLoaderData, useParams } from "react-router-dom";
import { randomCouchString } from "rxdb";
import { useDatabase } from "../DbContext";
import { useEffect } from "react";

// export async function loader({ request }) {
//   const url = new URL(request.url);
//   const videoUrl = url.searchParams.get("videoUrl");
//   const username = url.searchParams.get("username");

//   return {
//     roomId: "room-" + randomCouchString(10),
//     roomTitle: this.roomId,
//     participants: [username],
//     videoUrl,
//     createdAt: new Date().toString(),
//   };
// }

export default function Room() {
  const { roomId } = useParams();
  return <div>Room id: {roomId} </div>;
}

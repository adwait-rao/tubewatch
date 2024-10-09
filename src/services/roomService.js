// export async function loader({ request }) {
//   const url = new URL(request.url);
//   const videoUrl = url.searchParams.get("videoUrl");
//   const username = url.searchParams.get("username");

//   return {
//     roomId: "room-" + randomCouchString(9),
//     roomTitle: this.roomId,
//     participants: [username],
//     videoUrl,
//     createdAt: new Date().toString(),
//   };
// }

const userSchema = {
  version: 0,
  primaryKey: "userId",
  type: "object",
  properties: {
    userId: { type: "string", maxLength: 150 },
    username: { type: "string" },
    joinedAt: { type: "string", format: "date-time" },
  },
  required: ["userId", "username"],
};

const roomSchema = {
  version: 0,
  primaryKey: "roomId",
  type: "object",
  properties: {
    roomId: { type: "string", maxLength: 100 },
    roomTitle: { type: "string", maxLength: 250 },
    participants: {
      type: "array",
      items: { type: "string" }, // Array of user IDs
    },
    videoUrl: {
      type: "string",
      format: "uri",
    },
    createdAt: { type: "string", format: "date-time" },
  },
  required: ["roomId", "participants", "videoUrl", "createdAt"],
};

const playbackStateSchema = {
  version: 0,
  primaryKey: "playbackId",
  type: "object",
  properties: {
    playbackId: { type: "string", maxLength: 100 },
    roomId: { type: "string" },
    currentTime: { type: "number" }, // Current playback time in seconds
    isPlaying: { type: "boolean" }, // Playback status
  },
  required: ["roomId", "currentTime", "isPlaying"],
};

export { roomSchema, playbackStateSchema, userSchema };

import { addRxPlugin, createRxDatabase } from "rxdb";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { playbackStateSchema, roomSchema, userSchema } from "./schemas";
addRxPlugin(RxDBDevModePlugin);

let dbPromise = null;

export async function initDatabase() {
  console.log("db init run");
  if (!dbPromise) {
    dbPromise = createRxDatabase({
      name: "tubewatchdb",
      storage: getRxStorageDexie(),
    });

    const db = await dbPromise;

    await db.addCollections({
      room: {
        schema: roomSchema,
      },

      user: {
        schema: userSchema,
      },

      playbackstate: {
        schema: playbackStateSchema,
      },
    });

    return db;
  }
}

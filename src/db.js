import Dexie from "dexie";

const db = new Dexie("ReactReduxDB");
db.version(1).stores({ movies: "++id" });

export default db;

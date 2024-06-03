import {collection} from "firebase/firestore"
import { db } from "./config/firebase";

export const usersDataEntity = collection(db, "Users");
export const userPostCollection = collection(db, "Posts")
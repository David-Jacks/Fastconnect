import {collection} from "firebase/firestore"
import { db } from "./config/firebase";

export const usersDataEntity = collection(db, "Users");
import { HLUser } from "./hluser";

export interface Message {
  id?: number;            // Optional since it might not be present before sending to the backend
  content: string;        // Content of the message
  sender: HLUser;         // The user who sent the message
  date_sent?: Date;        // Optional as it might be set by the backend when the message is stored
  category?: string;      // Optional as it might be set by the backend when the message is stored
}

export interface Thread {
  id?: number;            // Optional since it might not be present before sending to the backend
  content: string;        // Content of the message
  sender: HLUser;         // The user who sent the message
  date_sent?: Date;        // Optional as it might be set by the backend when the message is stored
  title: string;          // Title of the thread
  category: string;       // Category of the thread
  posts?: Post[];         // Optional as it might be set by the backend when the message is stored


}
export interface Post {
  id?: number;            // Optional since it might not be present before sending to the backend
  content: string;        // Content of the message
  sender: HLUser;         // The user who sent the message
  date_sent?: Date;        // Optional as it might be set by the backend when the message is stored
}


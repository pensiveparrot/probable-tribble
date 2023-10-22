import { HLUser } from "./hluser";

export interface Message {
  id?: number;            // Optional since it might not be present before sending to the backend
  content: string;        // Content of the message
  sender: HLUser;         // The user who sent the message
  date_sent?: Date;        // Optional as it might be set by the backend when the message is stored
}

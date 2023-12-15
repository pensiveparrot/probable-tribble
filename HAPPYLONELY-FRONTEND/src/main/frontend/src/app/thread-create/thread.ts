import { Message } from "../home/message";

export interface Thread {
    title: string;
    category: string;
    posts: Message[];
    id: number;
}
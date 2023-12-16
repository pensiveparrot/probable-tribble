import { Message } from "../home/message";

export interface Thread {
    content: string;
    title: string;
    category: string;
    posts: Message[];
    id: number;
}
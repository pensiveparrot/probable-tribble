export interface HLUser {
    id: string;               // ID of the user
    username: string;         // Username, which is unique
    statusmsg: string;        // Status message or bio of the user
    profileimg: string;       // URL or data link for the profile picture
    gptApiKey?: string;          // API key for the user
}


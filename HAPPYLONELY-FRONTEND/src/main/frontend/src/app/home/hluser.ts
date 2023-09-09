export interface HLUser {
    id: number;               // ID of the user
    email: string;            // Email of the user
    username: string;         // Username, which is unique
    password: string;         // Password of the user
    registerdate: Date;       // Registration date of the user
    lastlogindate: Date;      // Last login date
    unbandate: Date;          // Date on which the user was unbanned
    statusmsg: string;        // Status message or bio of the user
    profileimg: string;       // URL or data link for the profile picture
    userloggedin: boolean;    // Indicates if the user is currently logged in
    role: number;    // User's role. It could be an enum or a string depending on how it's handled in your frontend
}


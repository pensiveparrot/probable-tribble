export interface EmailRequest {
    email: string;
    subject: string;
    message: string;
    sendTo: string;
    cc: string;
    sentdate: Date;
}

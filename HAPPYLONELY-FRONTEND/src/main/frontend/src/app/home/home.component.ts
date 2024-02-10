import { Component, OnInit, ElementRef, ViewChild, AfterViewChecked, ChangeDetectorRef, APP_ID } from '@angular/core';
import { ChatService } from './chat.service';
import { Message } from './message';
import { HLUser } from './hluser';
import { UserService } from '../common/service/userservice';
import { PrimeNGConfig } from 'primeng/api';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(600)
      ]),
      transition(':leave', [
        animate(600, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewChecked {
  Messages: Message[] = [];
  newMessageContent: string = '';
  hidden: boolean = false;
  showText: boolean = false;
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  selectedUser: HLUser | null = null;
  showUserProfileDialog: boolean = false;
  backendBaseUrl: string;
  isUserHaveChatGptApiKey: boolean = false;

  showUserProfile(user: HLUser): void {
    this.selectedUser = user;
    this.showUserProfileDialog = true;
  }
  closeUserProfile(): void {
    this.selectedUser = null;
    this.showUserProfileDialog = false;
  }
  hluser: HLUser = {
    id: "",
    username: "",
    statusmsg: "",
    profileimg: "",
  };

  constructor(private chatService: ChatService, private user: UserService, private primengConfig: PrimeNGConfig, private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {
    const protocol = window.location.protocol;
    const host = window.location.hostname;
    const port = '8443'; // Assuming your Spring Boot backend runs on port 8080. Adjust if different.
    this.backendBaseUrl = `${protocol}//${host}:${port}`;
    this.primengConfig.ripple = true; // For ripple effect on buttons
    // Subscribe to the message observable. WebSocket initialization is done in the service's constructor.
    this.chatService.getNewMessageObservable().subscribe((message: Message) => {
      // Ensure that you're not adding duplicate messages
      if (!this.Messages.some(m => m.date_sent === message.date_sent && m.content === message.content)) {
        this.Messages.push(message);
      }
    });
  }
  isDialogOpen: boolean = false; // To manage the open/close state of the dialog
  isDialogMinimized: boolean = false; // To manage the minimized state of the dialog

  openDialog() {
    this.isDialogOpen = true;
    this.isDialogMinimized = false;
  }


  minimizeModal(): void {
    this.isDialogOpen = false;
    this.isDialogMinimized = true;
  }

  closeModal(): void {
    this.isDialogOpen = false;
    this.isDialogMinimized = false;
  }
  async ngOnInit(): Promise<void> {
    setTimeout(() => { this.hidden = true }, 3000);
    setTimeout(() => { this.showText = true }, 4000);
    await this.getUsername();  // Fetch the username once on initialization
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }
  artName: string = "";
  artAuthor: string = "";
  selectedFile!: File;
  showUploadDialog = false;


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  convertPathToUrl(path: string): string {
    const filename = path.split('/').pop();
    if (!filename) {  // Check if filename is undefined or an empty string
      throw new Error("Filename could not be extracted from the provided path");
    }
    const encodedFilename = encodeURIComponent(filename);
    const backendBaseUrl = `${window.location.protocol}//${window.location.hostname}:8443`;
    return `${backendBaseUrl}/artwork/${encodedFilename}`;
  }
  onUploadClicked() {
    if (this.artName && this.artAuthor && this.selectedFile) {
      this.user.uploadArt(this.selectedFile, this.artName, this.artAuthor).subscribe(async response => {
        console.log('Received response:', response);

        if (response.status === 201) {
          console.log('Art added successfully');
          this.isDialogOpen = false; // Close the modal dialog

          this.cdr.detectChanges(); // Trigger change detection

          const imageUrl = response.body;
          if (imageUrl) {
            const isValid = this.isValidImageURL(imageUrl);
            if (isValid) {
              const src = this.convertPathToUrl(imageUrl);
              this.newMessageContent = `${src}`;  // Updated this line
              this.sendMessage();
            }
          } else {
            console.error('Response body did not contain a valid image URL:', imageUrl);
          }
        } else {
          console.error('Failed to upload art with response status:', response.status);
        }
      }, error => {
        console.error('Error uploading art:', error);
      });
    } else {
      console.warn('Please ensure all fields are filled.');
    }
  }


  isValidImageURL(url: string): boolean {
    const acceptedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const extension = url.split('.').pop()?.toLowerCase();
    return acceptedExtensions.includes(extension || "");
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  private getUsername(): Promise<HLUser> {
    return new Promise((resolve, reject) => {
      this.chatService.getUserDetails().subscribe((data: HLUser) => {
        if (data !== null) {
          this.hluser = {
            id: data.id,
            username: data.username,
            statusmsg: data.statusmsg,
            profileimg: data.profileimg
          };
          console.log("final");
          console.log("data: " + JSON.stringify(data));
          resolve(this.hluser);
        } else {
          reject("error");
        }
      });
    });
  }
  async sendMessage(): Promise<void> {
    if (this.newMessageContent.trim()) {
      if (this.hluser && this.hluser.username) {
        // Check if the message is a slash command for ChatGPT
        if (this.newMessageContent.startsWith('/chatgpt')) {
          // Extract the API key and the message from the command
          this.newMessageContent = this.newMessageContent.substring(9);  // Remove the '/chatgpt' part
          const parts = this.newMessageContent.split(':');
          let apiKey = '';
          let message = '';
          let isApiKeyInDb = false;
          switch (parts.length) {
            case 2:
              apiKey = parts[0];
              message = parts[1].trim();  // Join the remaining parts to form the message
              // Store the API key in the user's session
              sessionStorage.setItem('chatgptApiKey', apiKey);
              break;
            case 1:
              // Check if the user has stored the API key in the database
              this.chatService.userHasChatGptApiKey().subscribe({
                next: (hasApiKey: boolean) => {
                  isApiKeyInDb = hasApiKey;
                },
                error: (error: any) => {
                  console.error('Error checking if user has ChatGPT API key:', error);
                }
              });
              if (isApiKeyInDb) {
                this.user.getUser().subscribe({
                  next: (user: HLUser) => {
                    if (user.gptApiKey) {
                      apiKey = user.gptApiKey;
                    }
                  },
                  error: (error: any) => {
                    console.error('Error getting user details:', error);
                  }
                });
              } else {
                this.newMessageContent = 'You need to provide an API key to use ChatGPT. Use the format /chatgpt:your-api-key:message';
                this.sendMessage();
              }
              break; // Add a break statement here
            default:  // If the command is not in the correct format
              this.newMessageContent = 'You need to provide an API key to use ChatGPT. Use the format /chatgpt:your-api-key:message';
              this.sendMessage();
              break;
          }

          // Send a request to the backend to use ChatGPT
          const request = {
            'message': message,
            'apiKey': apiKey || '' // Ensure apiKey is always a string, even if it's null
          };
          this.chatService.useChatGPT(request).subscribe({
            next: (response: any) => {
              console.log('ChatGPT response:', response);
              this.newMessageContent = response;
              this.sendMessage();
            },
            error: (error: any) => {
              console.error('Error using ChatGPT:', error);
            }
          });
        }
        else {
          const newMessage: Message = {
            content: this.newMessageContent,
            sender: this.hluser,
            date_sent: new Date()
          };
          this.chatService.sendMessage(newMessage);
          console.log("newMessage:", JSON.stringify(newMessage));
        }
        this.newMessageContent = '';  // Reset the newMessageContent
        this.cdr.detectChanges(); // Trigger change detection
      } else {
        console.error("User details are not available");
      }
    }
  }

}

//         this.chatService.useChatGPT(request).subscribe(response => {
//           console.log('ChatGPT response:', response);
//         }, error => {
//           console.error('Error using ChatGPT:', error);
//         });
//       } else {
//         const newMessage: Message = {
//           content: this.newMessageContent,
//           sender: this.hluser,
//           date_sent: new Date()
//         };
//         this.chatService.sendMessage(newMessage);
//         console.log("newMessage:", JSON.stringify(newMessage));
//       }
//       this.newMessageContent = '';  // Reset the newMessageContent
//       this.cdr.detectChanges(); // Trigger change detection
//     } else {
//       console.error("User details are not available");
//     }
//   }
// }
// async sendMessage(): Promise<void> {
//   if (this.newMessageContent.trim()) {
//     if (this.hluser && this.hluser.username) {
//       const newMessage: Message = {
//         content: this.newMessageContent,
//         sender: this.hluser,
//         date_sent: new Date()
//       };
//       this.chatService.sendMessage(newMessage);
//       console.log("newMessage:", JSON.stringify(newMessage));
//       this.newMessageContent = '';  // Reset the newMessageContent

//       this.cdr.detectChanges(); // Trigger change detection
//     } else {
//       console.error("User details are not available");
//     }
//   }
// }

// }
// async sendMessage(): Promise<void> 

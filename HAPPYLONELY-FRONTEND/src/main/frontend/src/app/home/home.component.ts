import { Component, OnInit, ElementRef, ViewChild, AfterViewChecked, ChangeDetectorRef, APP_ID } from '@angular/core';
import { ChatService } from './chat.service';
import { Message } from './message';
import { HLUser } from './hluser';
import { UserService } from '../common/service/userservice';
import { PrimeNGConfig } from 'primeng/api';
import { animate, state, style, transition, trigger } from '@angular/animations';
import hljs from 'highlight.js';

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
    gptapikey: ""
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
    hljs.highlightAll();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }
  artName: string = "";
  artAuthor: string = "";
  selectedFile: File | null = null;
  selectedFileBase64: string | null = null;
  showUploadDialog = false;
  formatMessage(message: string): string {
    const codeBlockRegex = /```(\w+)\n([\s\S]*?)```/g;
    const boldRegex = /\*\*(.*?)\*\*/g;
    const headingRegex = /### (.*?)(\n|$)/g;
    const lineBreakRegex = /\n/g;
    const orderedListRegex = /(\d+\..*?)(\n|$)/g;
    const unorderedListRegex = /(\* .*?)(\n|$)/g;

    // Replace list items first
    let formattedMessage = message
      .replace(orderedListRegex, '<li>$1</li>')
      .replace(unorderedListRegex, '<li>$1</li>');

    // Then wrap all consecutive list items in <ol> or <ul> tags
    const orderedListBlockRegex = /((<li>\d+\..*?<\/li>)+)/g;
    const unorderedListBlockRegex = /((<li>\* .*?<\/li>)+)/g;
    formattedMessage = formattedMessage
      .replace(orderedListBlockRegex, '<ol>$1</ol>')
      .replace(unorderedListBlockRegex, '<ul>$1</ul>');

    // Replace other markdown syntax
    return formattedMessage
      .replace(codeBlockRegex, (_match, language, code) => {
        const highlightedCode = hljs.highlight(language, code).value;
        return `<pre><code class="hljs ${language}">${highlightedCode}</code></pre>`;
      })
      .replace(boldRegex, '<strong>$1</strong>')
      .replace(headingRegex, '<h3>$1</h3>')
      .replace(lineBreakRegex, '<br/>');
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  convertPathToUrl(artName: string, artAuthor: string): string {
    const filename = `${artName}_${artAuthor}.jpg`;
    const encodedFilename = encodeURIComponent(filename);
    const backendBaseUrl = `${window.location.protocol}//${window.location.hostname}:8443`;
    return `${backendBaseUrl}/artwork/${encodedFilename}`;
  }
  onUploadClicked() {
    if (this.artName && this.artName.trim() !== '' && this.artAuthor && this.artAuthor.trim() !== '' && this.selectedFile) {
      this.user.uploadArt(this.selectedFile, this.artName, this.artAuthor).subscribe(async response => {
        console.log('Received response:', response);

        if (response.status === 201) {
          console.log('Art added successfully');
          this.isDialogOpen = false; // Close the modal dialog

          this.cdr.detectChanges(); // Trigger change detection

          // Rebuild the artImageFilePath into a URL
          const artImageUrl = this.convertPathToUrl(this.artName, this.artAuthor);
          // The newMessageContent now contains the URL of the image
          this.newMessageContent = artImageUrl;
          this.sendMessage();
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
    const backendBaseUrl = `${window.location.protocol}//${window.location.hostname}:8443`;
    const isArtworkUrl = url.startsWith(`${backendBaseUrl}/artwork/`);
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg'];
    const urlExtension = url.slice(url.lastIndexOf('.'));
    const isImageExtension = imageExtensions.includes(urlExtension);
    return isArtworkUrl && isImageExtension;
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
            profileimg: data.profileimg,
            gptapikey: data.gptapikey
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
        if (this.newMessageContent.startsWith('/chatgpt')) {
          let messageMap = new Map<string, string>();
          let toParts = [];
          if (this.newMessageContent.includes('sk-')) {
            toParts = this.newMessageContent.split(' ', 3);
          }
          else {
            toParts = this.newMessageContent.split(' ', 2);
          }
          const parts = toParts;
          if (parts.length === 3) {
            messageMap.set('apiKey', parts[1]);
            messageMap.set('message', this.newMessageContent.split(parts[1] + ' ')[1]);
          } else if (parts.length === 2) {
            messageMap.set('message', this.newMessageContent.split(parts[0] + ' ')[1]);
            if (this.hluser.gptapikey) {
              messageMap.set('apiKey', this.hluser.gptapikey);
            } else {
              throw new Error('You need to provide an API key to use ChatGPT. Use the format /chatgpt your-api-key message');
            }
          } else {
            throw new Error('Invalid command format. Use /chatgpt your-api-key message or /chatgpt message');
          }

          const request = {
            'message': messageMap.get('message')!,
            'apiKey': messageMap.get('apiKey')!
          };

          this.chatService.useChatGPT(request).subscribe({
            next: (response: any) => {
              console.log('ChatGPT response:', response);
              this.newMessageContent = response;
            },
            error: (error: any) => {
              console.error('Error using ChatGPT:', error);
            }
          });

        } else if (this.isValidImageURL(this.newMessageContent)) {
          const newMessage: Message = {
            content: this.newMessageContent,
            sender: this.hluser,
            date_sent: new Date()
          };
          this.chatService.sendMessage(newMessage);
          console.log("newMessage:", JSON.stringify(newMessage));
        } else {
          const newMessage: Message = {
            content: this.newMessageContent,
            sender: this.hluser,
            date_sent: new Date()
          };
          this.chatService.sendMessage(newMessage);
          console.log("newMessage:", JSON.stringify(newMessage));
        }
        this.newMessageContent = '';
        this.cdr.detectChanges();
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

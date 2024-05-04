import { Component, OnInit } from '@angular/core';
import { EmailService } from './email.service';
import { EmailRequest } from './emailRequest';
import { lastValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  emailRequest: EmailRequest = { email: '', subject: '', message: '', sendTo: '', cc: '', sentdate: new Date() };
  emails: EmailRequest[] = [];
  showEmailForm = false;
  selectedEmail: any;

  constructor(private emailService: EmailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmails();

  }

  sendEmail(): void {
    this.showEmailForm = true;
  }

  submitEmail(): void {
    this.emailService.sendEmail(this.emailRequest).subscribe(response => {
      console.log(response);
      this.showEmailForm = false;
      this.emailRequest = { email: '', subject: '', message: '', sendTo: '', cc: '', sentdate: new Date() };
      this.getEmails();
    });
  }

  getEmails(): void {
    this.emailService.getEmails().subscribe(emails => {
      this.emails = emails;
    });
  }

  async viewEmail(id: string) {
    const response: any = await lastValueFrom(this.emailService.getEmailById(id));
    this.selectedEmail = response;
  }
}
import { Component, OnInit } from '@angular/core';
import { filter, take } from 'rxjs/operators';
import { AccountService } from 'src/app/Account/services/account.service';
import { ButtonStyleEnum } from 'src/app/Components/enum/button-style.enum';
import { IconSizeEnum } from 'src/app/Components/icon/icons/icon.enum';
import { RadioButtonModel } from 'src/app/Components/model/radio-button-model';
import { MessageService } from 'src/app/Core/message/message.service';

@Component({
  selector: 'pg-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  buttonStyle = ButtonStyleEnum.ICON;
  largeIcon = IconSizeEnum.xlarge;

  readonly subjects: RadioButtonModel<string>[] = [
    {
      label: 'contact.subject.feedback',
      value: 'Feedback'
    },
    {
      label: 'contact.subject.bug',
      value: 'Bug'
    },
    {
      label: 'contact.subject.help',
      value: 'Help'
    },
    {
      label: 'contact.subject.other',
      value: 'Other'
    },
  ];
  subject!: string;
  email!: string;
  message!: string;

  constructor(private messageService: MessageService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getEmail().pipe(take(1)).subscribe(email => this.email = email || '')
  }

  sendMessage(){
    //TODO: add validation to inputs
    if (this.email && this.subject && this.message) {
      this.messageService.sendEmail({
        email: this.email,
        subject: `PiggyBank Contact(${this.subject})`,
        objective: this.subject,
        message: this.message
      }).then(()=>{
        this.subject = '';
        this.message = '';
      });
    }
  }

}

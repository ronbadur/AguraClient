import { Component, OnInit } from '@angular/core';
import {MessageService} from '../shared/services/message/message.service';
import {Message} from '../shared/models/Message';
import {UserService} from '../shared/services/user/user.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit {

  messages: Message[] = [];

  constructor(private messageService: MessageService, private userService: UserService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.messageService.getMessagesByUser(this.userService.username).subscribe((data) => {
      (data as any).messages.forEach((currMessage) => {
        this.messages.push(currMessage);
      });
    });
  }

  writeMessage() {
    // const dialogRef = this.dialog.open(CreateMessageDialogComponent, {data: this.item, height: '550px', width: '600px'});
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log( `Result: ${result}` )
    //   // Refresh list
    //   if (result) {
    //     this.messageService.getMessagesByItem(this.item).subscribe(res => { this.messages = res.messages.sort(this.dateSort); });
    //   }
    // });
  }

  dateSort(a, b) {
    return new Date(b.create_time).getTime() - new Date(a.create_time).getTime();
  }

  formatDate(date: string) {
    const formatted = new Date (date);
    return formatted.toLocaleString('en-US', { hour12: false, month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'});
  }

  get messagesLength() {
    if (this.messages != null) {
      return this.messages.length;
    }
    return 0;
  }

  onExpand(message) {
    // if (!message.isRead && (this.globals.connectedUser._id == message.toUser._id)) {
    //   this.messageService.markAsRead(message);
    // }
  }
}

import {Component, OnInit} from '@angular/core';
import {MessageService} from '../shared/services/message/message.service';
import { MatDialogRef} from '@angular/material';
import {UserService} from '../shared/services/user/user.service';

@Component({
  selector: 'app-create-message-dialog',
  templateUrl: './create-message-dialog.component.html',
  styleUrls: ['./create-message-dialog.component.less']
})
export class CreateMessageDialogComponent implements OnInit {

  private newMessage: any = {};
  private users: string[] = [];
  private destUser: string;
  private title: string;
  private content: string;

  constructor(public messageService: MessageService,
              public dialogRef: MatDialogRef<CreateMessageDialogComponent>,
              private userService: UserService) {
  }

  ngOnInit() {
    this.newMessage.sourceUser = this.userService.username;
    this.userService.getAllUsers().subscribe((data) => {
      (data as any).users.forEach((currUser) => {
        this.users.push((currUser as any).username);
      });
    });
  }

  onSubmit() {
    this.newMessage.destUser = this.destUser;
    this.newMessage.title = this.title;
    this.newMessage.content = this.content;
    this.messageService.createMessage(this.newMessage).subscribe((data) => {
      console.log(data);
      this.dialogRef.close(true);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ChatroomService } from 'src/app/services/chatroom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatroom-list',
  templateUrl: './chatroom-list.component.html',
  styleUrls: ['./chatroom-list.component.scss']
})
export class ChatroomListComponent implements OnInit {

  constructor(
    public router: Router,
    public chatroomService: ChatroomService
  ) { }

  ngOnInit() {
  }

  onClickMe(name: String) {
    console.log('test');
    this.router.navigate([ '/chat', name ]);
  }

}

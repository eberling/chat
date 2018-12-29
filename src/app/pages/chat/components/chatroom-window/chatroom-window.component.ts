import { Component, OnInit } from '@angular/core';
import { ChatroomTitleBarComponent } from '../chatroom-title-bar/chatroom-title-bar.component';


@Component({
  selector: 'app-chatroom-window',
  templateUrl: './chatroom-window.component.html',
  styleUrls: ['./chatroom-window.component.scss']
})
export class ChatroomWindowComponent implements OnInit {

  public dummyData = [
    {
      // tslint:disable-next-line:max-line-length
      message: 'Sed enim velit, condimentum nec tincidunt non, elementum sed nisi.',
      createdAt: new Date(),
      sender: {
        firstName: 'Steve',
        lastName: 'Smith',
        photoUrl: 'http://via.placeholder.com/150x150'
      }
    },
    {
      // tslint:disable-next-line:max-line-length
      message: 'Quisque ornare dapibus convallis. Nam tempor dui a nisl lobortis, sed gravida lectus laoreet. Nullam ornare dui magna. Duis in nisi libero.',
      createdAt: new Date(),
      sender: {
        firstName: 'Bob',
        lastName: 'Anderson',
        photoUrl: 'http://via.placeholder.com/150x150'
      }
    },
    {
      // tslint:disable-next-line:max-line-length
      message: 'Ut eu elit sodales leo ultricies pulvinar. Fusce iaculis magna gravida tempus congue. Ut sit amet nulla sed nisi cursus mattis quis at lacus. Proin commodo, justo in elementum scelerisque, sem urna vulputate enim, ac posuere purus diam ac velit. Sed enim velit, condimentum nec tincidunt non, elementum sed nisi. Cras pharetra dui eu scelerisque pharetra. Curabitur auctor feugiat nibh eget molestie. Duis scelerisque auctor mi, sit amet efficitur magna vulputate quis. Quisque ornare dapibus convallis. Nam tempor dui a nisl lobortis, sed gravida lectus laoreet. Nullam ornare dui magna. Duis in nisi libero. Praesent eu tristique felis. Nunc vestibulum enim et justo dignissim lacinia nec et diam.',
      createdAt: new Date(),
      sender: {
        firstName: 'Sally',
        lastName: 'Jones',
        photoUrl: 'http://via.placeholder.com/150x150'
      }
    },
    {
      // tslint:disable-next-line:max-line-length
      message: 'Quisque ornare dapibus convallis. Nam tempor dui a nisl lobortis, sed gravida lectus laoreet. Nullam ornare dui magna. Duis in nisi libero.',
      createdAt: new Date(),
      sender: {
        firstName: 'Sally',
        lastName: 'Jones',
        photoUrl: 'http://via.placeholder.com/150x150'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

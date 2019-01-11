import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatroomTitleBarComponent } from '../chatroom-title-bar/chatroom-title-bar.component';
import { Observable, Subscription } from 'rxjs'; 
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { ChatroomService } from 'src/app/services/chatroom.service';
import { LoadingService } from 'src/app/services/loading.service';


@Component({
  selector: 'app-chatroom-window',
  templateUrl: './chatroom-window.component.html',
  styleUrls: ['./chatroom-window.component.scss']
})
export class ChatroomWindowComponent implements OnInit, OnDestroy {

  public chatroom: Observable<any>;
  public currentUser: any = null;
  public currentName: String = 'bob';
  private subscriptions: Subscription[] = [];

  public dummyData = [
    {
      // tslint:disable-next-line:max-line-length
      message: 'Sed enim velit, condimentum nec tincidunt non, elementum sed nisi.',
      createdAt: new Date(),
      sender: {
        firstName: 'Steve',
        lastName: 'Smith',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    },
    {
      // tslint:disable-next-line:max-line-length
      message: 'Quisque ornare dapibus convallis. Nam tempor dui a nisl lobortis, sed gravida lectus laoreet. Nullam ornare dui magna. Duis in nisi libero.',
      createdAt: new Date(),
      sender: {
        firstName: 'Bob',
        lastName: 'Anderson',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    },
    {
      // tslint:disable-next-line:max-line-length
      message: 'Ut eu elit sodales leo ultricies pulvinar. Fusce iaculis magna gravida tempus congue. Ut sit amet nulla sed nisi cursus mattis quis at lacus. Proin commodo, justo in elementum scelerisque, sem urna vulputate enim, ac posuere purus diam ac velit. Sed enim velit, condimentum nec tincidunt non, elementum sed nisi. Cras pharetra dui eu scelerisque pharetra. Curabitur auctor feugiat nibh eget molestie. Duis scelerisque auctor mi, sit amet efficitur magna vulputate quis. Quisque ornare dapibus convallis. Nam tempor dui a nisl lobortis, sed gravida lectus laoreet. Nullam ornare dui magna. Duis in nisi libero. Praesent eu tristique felis. Nunc vestibulum enim et justo dignissim lacinia nec et diam.',
      createdAt: new Date(),
      sender: {
        firstName: 'Sally',
        lastName: 'Jones',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    },
    {
      // tslint:disable-next-line:max-line-length
      message: 'Quisque ornare dapibus convallis. Nam tempor dui a nisl lobortis, sed gravida lectus laoreet. Nullam ornare dui magna. Duis in nisi libero.',
      createdAt: new Date(),
      sender: {
        firstName: 'Sally',
        lastName: 'Jones',
        photoUrl: 'http://via.placeholder.com/50x50'
      }
    }
  ];

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private chatroomService: ChatroomService,
    private loadingService: LoadingService
    ) {

      this.subscriptions.push(
        this.chatroomService.selectedChatroom.subscribe(chatroom => {
          this.chatroom = chatroom;
          this.loadingService.isLoading.next(false);
        })
      );
  }

  ngOnInit() {
    this.auth.currentUser.subscribe(user => {
      if ( !user ) {
        this.currentName = 'bob';
      }
      this.currentUser = user;
      this.currentName = this.currentUser.name;
    });

    this.subscriptions.push(
      this.route.paramMap.subscribe(params => {
        const chatroomId = params.get('chatroomId');
        this.chatroomService.changeChatroom.next(chatroomId);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
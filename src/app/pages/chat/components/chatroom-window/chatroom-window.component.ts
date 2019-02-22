import { Component, OnInit, OnDestroy, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
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
export class ChatroomWindowComponent implements OnInit, OnDestroy, AfterViewChecked {

  @ViewChild('scrollContainer') private scrollContainer: ElementRef;

  public chatroom: Observable<any>;
  public currentUser: any = null;
  public currentName: String = 'bob';
  private subscriptions: Subscription[] = [];
  public messages: Observable<any>;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private chatroomService: ChatroomService,
    private loadingService: LoadingService
    ) {
      this.subscriptions.push(
        this.chatroomService.selectedChatroom.subscribe(chatroom => {
          this.chatroom = chatroom;
          console.log('​ChatroomWindowComponent -> this.chatroom', this.chatroom);
        })
      );
  }

  ngOnInit() {
    this.scrollToBottom();
    this.auth.currentUser.subscribe(user => {
      if ( !user ) {
        this.currentName = 'bob';
      }
      this.currentUser = user;
      this.currentName = this.currentUser.name;
    });

    this.subscriptions.push(
      this.route.paramMap.subscribe(params => {
        console.log(params.keys);
        const chatroomId = params.get('chatroom.id');
        console.log('ngOnInit -> chatroomId', chatroomId);
        this.chatroomService.changeChatroom.next(chatroomId);
      })
    );

    this.subscriptions.push(
      this.chatroomService.selectedChatroomMessages.subscribe(messages => {
        this.messages = messages;
        this.loadingService.isLoading.next(false);
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  onClick() {
    console.log(this.chatroom);
  }

  private scrollToBottom(): void {
    try {
      console.log('testicle');
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}

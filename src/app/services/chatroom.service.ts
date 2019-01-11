import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingService } from './loading.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatroomService {

  public chatrooms: Observable<any>;
  public changeChatroom: BehaviorSubject <string | null> = new BehaviorSubject(null);
  public selectedChatroom: Observable<any>;
  public selectedChatroomMessages: Observable<any>;


  constructor(
    private db: AngularFirestore,
    private loadingService: LoadingService
  ) {
    this.selectedChatroom = this.changeChatroom.pipe(switchMap(chatroomId => {
      if ( chatroomId ) {
        this.loadingService.isLoading.next(true);
        return db.doc(`chatrooms/${chatroomId}`).valueChanges();
      }
      return of(null);
    }));
    this.chatrooms = db.collection('chatrooms').valueChanges();
  }
}

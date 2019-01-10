import { Injectable } from '@angular/core';
import { AlertType } from './../enums/alert-type.enum';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './../classes/user';
import { Alert } from './../classes/alert';
import { AlertService } from './../services/alert.service';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: Observable <User | null>;


  constructor(
    private router: Router,
    private alertService: AlertService,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) {
    // TODO fetch the user from the Firebase Backend then set the user
    this.currentUser = this.afAuth.authState
     .pipe(switchMap((user) => {
       console.log('user ' + user);
      if (user) {
        return this.db.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    }));
  }

  public signup(name: string, email: string, password: string): Observable<boolean> {
    return from(
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
          const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${user.user.uid}`);
          const updatedUser = {
            id: user.user.uid,
            email: user.user.email,
            name,
            // tslint:disable-next-line:max-line-length
            photoUrl: 'https://firebasestorage.googleapis.com/v0/b/chat-99999.appspot.com/o/default_profile_pic.jpg?alt=media&token=93cb98cf-787a-4aef-bd2d-4e2b1f79fbf6',
          };

          userRef.set(updatedUser);
          return true;
        })
        .catch((err) => false)
    );
  }

  public login(email: string, password: string): Observable<boolean> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => true)
      .catch((err) => false));
  }

  public logout(): void {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
      this.alertService.alerts.next(new Alert('Signed out.'));
    });

  }

}

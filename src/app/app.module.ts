import { environment } from '../environments/environment';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Modules
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { BsDropdownModule, AlertModule} from 'ngx-bootstrap';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Services
import { ChatroomService } from './services/chatroom.service';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';
import { NgxLoadingModule, NgxLoadingService} from 'ngx-loading';

// Components
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent} from './pages/signup/signup.component';
import { ChatComponent } from './pages/chat/chat.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatInputComponent } from './pages/chat/components/chat-input/chat-input.component';
import { ChatroomListComponent } from './pages/chat/components/chatroom-list/chatroom-list.component';
import { ChatroomTitleBarComponent } from './pages/chat/components/chatroom-title-bar/chatroom-title-bar.component';
import { ChatMessageComponent } from './pages/chat/components/chat-message/chat-message.component';
import { ChatroomWindowComponent } from './pages/chat/components/chatroom-window/chatroom-window.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ChatComponent,
    NavbarComponent,
    ChatInputComponent,
    ChatroomListComponent,
    ChatroomTitleBarComponent, 
    ChatMessageComponent,
    ChatroomWindowComponent
  ],
  imports: [
    NgxLoadingModule.forRoot({}),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    AlertService,
    NgxLoadingService,
    AuthService,
    AuthGuard,
    ChatroomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

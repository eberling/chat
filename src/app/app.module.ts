import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule, AlertModule} from 'ngx-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent,  } from './app.component';

// Services
import { AlertService } from './services/alert.service';
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
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AlertService, NgxLoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alert } from './../../classes/alert';
import { AlertType } from 'src/app/enums/alert-type.enum';
import { AlertService } from './../../services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private auth: AuthService,
    private loadingService: LoadingService,
    private router: Router,
    ) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm(): void {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required , Validators.minLength(8)]]
    });
  }

  public submit(): void {
    // TODO call the auth service
    if (this.signupForm.valid) {
      const {name, email, password} = this.signupForm.value;
      console.log('​SignupComponent -> {name, email, password}', {name, email, password});
      this.subscriptions.push(
        this.auth.signup(name, email, password).subscribe(success => {
          if (success) {
            this.router.navigate(['/chat']);
          } else {
            const failedSignupAlert = new Alert('Sign up Failed.', AlertType.Danger);
            this.alertService.alerts.next(failedSignupAlert);
          }
          this.loadingService.isLoading.next(false);
         })
      );
    } else {
      const failedSignupAlert = new Alert('Invalid Credentials', AlertType.Danger);
      this.alertService.alerts.next(failedSignupAlert);
    }
  }
}

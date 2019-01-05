import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alert } from './../../classes/alert';
import { AlertType } from 'src/app/enums/alert-type.enum';
import { AlertService } from './../../services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;

  constructor(private fb: FormBuilder, private alertService: AlertService) {
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
    } else {
      const failedSignupAlert = new Alert('Invalid Credentials', AlertType.Danger);
      this.alertService.alerts.next(failedSignupAlert);
    }
  } 
}

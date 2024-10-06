import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private loginService :LoginService,private route: Router) {
  
  }
ngOnInit(): void {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]],
  });
}
/**
 * 
 * @param control : password control
 * @returns  if it password is valid then returns null else return error
 */
  passwordValidator(control: FormControl): { [key: string]: boolean } | null {
    const password = control.value;
    if (!password) {
      return null;
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(password);

    if (!hasUppercase || !hasNumber || !hasSpecialChar) {
      return { requiresComplexity: true };
    }

    return null;
  }

  /**
   * Function: if form is valid then navigate user to dashboard else just logged form is invalid
   */
  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService.setLoggedInUser(this.loginForm.value);
      this.route.navigateByUrl('/dashboard');
    } else {
      console.error('Form is invalid');
    }
  }
}
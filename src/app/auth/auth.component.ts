import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private authService: AuthService){}
  isLoginMode = true;

  authSubmit(authForm: NgForm){
    if (!authForm.valid) return;

    const {email, password } = authForm.value

    if (this.isLoginMode) {

    } else {
      this.authService.signUp(email, password).subscribe({
        next: (res) => console.log('Auth Response Success:', res),
        error:(res) => console.log(res)
      })
    }

    console.log(authForm.value);
    authForm.reset();
  }
  toggleSignIn(){
    this.isLoginMode = !this.isLoginMode;
  }

}

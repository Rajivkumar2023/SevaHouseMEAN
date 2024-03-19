import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, CardModule,ButtonModule,InputTextModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = this.fb.group({
    fullName: ['',[Validators.required, Validators.pattern(/^[a-zA-Z\s]+(?: [a-zA-Z\s]+)*$/)]],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required]],
    confirmPassword: ['',[Validators.required]]
  })
  constructor(private fb:FormBuilder) {}

  get fullName(){
    return this.registerForm.controls['fullName']
  }
  get email(){
    return this.registerForm.controls['email']
  }
  get password(){
    return this.registerForm.controls['password']
  }
  get confirmPassword(){
    return this.registerForm.controls['confirmPassword']
  }

}

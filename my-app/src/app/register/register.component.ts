import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {  
  userNamePlaceholderText = 'Full Name';
  emailPlaceholderText = 'user@domain.ext';
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  userExists=localStorage.getItem('user');

  submitted = false;
  fieldTextType: boolean = false;

  form: any = {
    username: null,
    email: null,
    password: null,
    phone: null,
    acceptTerms: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  alreadyRegistered = false;

  constructor(private toastrService:ToastrService) {}

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.submitted = true;
    const { username, email, password, phone, terms } = this.form;
    if (this.form.invalid) {
      this.isSignUpFailed = true;
        return;
    } else {
      this.isSuccessful = true;
    }
    //alert('SUCCESS!!');

    localStorage.setItem('user',email);
    if(email === this.userExists){
      this.toastrService.error('user already exists');
      this.alreadyRegistered = true;
      return;
    }
  }

  public numbersOnlyValidator(event: any) {
    const pattern = /^[0-9\-]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\-]/g, "");
    }
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  
}


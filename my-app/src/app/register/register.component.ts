import { Component, OnInit } from '@angular/core';
import { Countries } from './../helpers/country';
//import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
//import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {  
  userNamePlaceholderText = 'Full Name';
  emailPlaceholderText = 'user@domain.ext';

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

  // separateDialCode = true;
	// SearchCountryField = SearchCountryField;
	// CountryISO = CountryISO;
  // PhoneNumberFormat = PhoneNumberFormat;
	// preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	// phoneForm = new FormGroup({
	// 	phone: new FormControl(undefined, [Validators.required])
	// });

  constructor() {
    
  }

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

    alert('SUCCESS!!');

    localStorage.setItem('user',username);
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

  public countries:any = countries;
  
}

export var countries: Countries [] = [
  { code: "+49", code3: "DE", name: "Germany", number: "004" },
    { code: "+91", code3: "IND", name: "India", number: "008" },
    { code: "+92", code3: "PAK", name: "Pakistan", number: "012" },
];


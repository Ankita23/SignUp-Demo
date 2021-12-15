import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
//import { Countries } from '../helpers/country';
import { Countries } from './../helpers/country';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  filmIcon = faFilm;
  faUser = faUser;
  userNamePlaceholderText = 'Full Name';
  emailPlaceholderText = 'user@domain.ext';

  form: any = {
    username: null,
    email: null,
    password: null,
    phone: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password, phone } = this.form;

    this.authService.register(username, email, password, phone).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  public numbersOnlyValidator(event: any) {
    const pattern = /^[0-9\-]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\-]/g, "");
    }
  }
  public countries:any = countries;
  
}

// export class AppComponent {
//   form: FormGroup;
//   control: FormControl;
//   customErrors = {required: 'Please accept the terms'}
//   constructor(private builder: FormBuilder) { }

//   ngOnInit() {
//     this.control = this.builder.control('', Validators.required);

//     this.form = this.builder.group({
//       name: ['', [Validators.required, Validators.minLength(3)]],
//       terms: ['', Validators.requiredTrue],
//       address: this.builder.group({
//         city: ['', Validators.required],
//         country: ['', Validators.required]
//       })
//     });
//   }
// }

export var countries: Countries [] = [
  { code: "+49", code3: "DE", name: "Germany", number: "004" },
    { code: "+91", code3: "IND", name: "India", number: "008" },
    { code: "+92", code3: "PAK", name: "Pakistan", number: "012" },
];


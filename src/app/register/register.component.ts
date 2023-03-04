import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title:any[]=['Mr','Mrs','Student']
  gender:any[]=['Male','Female','Transgender','Decline to answer' ]
  grade:any[]=['Below 40%','Below 40%','Below 60%','Below 70%','Below 80%','Below 90%','Below 100%']
  stream:any[]=['BA','BCom','BMS','BSc','MCom','BAF','BE','BSc IT','MSc IT','BCA','MCA','Others']
  education:any[]=['10th Pass','10th Fail','12th Pass','12th Fail','Undergraduate','Graduate','Double graduate','Diploma','MBA','Other']

  job:any[]=['Part time','Full time','Internship','Apprenticeship']
  workexp:any[]=['1','2','3','4','5','Above 5 years','Above 10 years']
  state:any[]=['Andhra Pradesh','Arunachal Pradesh','Assam', 'Bihar','Chhattisgarh','Goa','Gujrat',
        'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra', 
        'Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim',
        'Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal' ]

  EMAIL_PATTERN="^[_A-Aa-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"+"[A-Za-z0-9-]+(\\.[_A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  MOBILE_PATTERN="/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/";
  PAN_PATTERN="[A-Z]{5}[0-9]{4}[A-Z]{1}";

  steps:any=1;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  back(){
    this.steps = this.steps -1;
  }

  submit(){
    this.steps = this.steps +1;
  }

  onChange(event:any){
    console.log(event.target.files[0]);
  }

  // empDetails(){
  //   this.router.navigate(['/empdetails']);
  // }
}


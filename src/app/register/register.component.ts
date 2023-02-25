import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  gender:any[]=[
    {name:'Male'},
    {name:'Female'},
    {name:'Transgender'},
    {name:'Decline to answer'}
  ]

  grade:any[]=[
    {name:'Below 40%'},
    {name:'Below 50%'},
    {name:'Below 60%'},
    {name:'Below 70%'},
    {name:'Below 80%'},
    {name:'Below 90%'},
    {name:'Below 100%'}
  ]
  stream:any[]=[
    {name:'BA'},
    {name:'BCom'},
    {name:'BMS'},
    {name:'BSc'},
    {name:'MCom'},
    {name:'BBA'},
    {name:'BAF'},
    {name:'BE'},
    {name:'BSc IT'},
    {name:'MSc IT'},
    {name:'BCA'},
    {name:'MCA'},
    {name:'Others'}
  ]

  edu:any[]=[
    {name:'10th Pass'},
    {name:'10th Fail'},
    {name:'12th Pass'},
    {name:'12th Fail'},
    {name:'Undergraduate'},
    {name:'Graduate'},
    {name:'Double graduate'},
    {name:'Diploma'},
    {name:'MBA'},
    {name:'Other'}
  ]

  title:any[]=[]

  EMAIL_PATTERN="^[_A-Aa-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"+"[A-Za-z0-9-]+(\\.[_A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  MOBILE_PATTERN="/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/";
  PAN_PATTERN="[A-Z]{5}[0-9]{4}[A-Z]{1}";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  empDetails(){
    this.router.navigate(['/empdetails']);
  }
}

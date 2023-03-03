import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  state:any[]=['Andhra Pradesh','Arunachal Pradesh','Assam', 'Bihar','Chhattisgarh','Goa','Gujrat',
        'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra', 
        'Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim',
        'Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal' ]

  dist:any[]=[]

  job:any[]=['Part time','Full time','Internship','Apprenticeship']

  workexp:any[]=['1','2','3','4','5','Above 5 years','Above 10 years']

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  docUpl(){
    this.router.navigate(['/uploaddoc']);
  }

  backtoreg(){
    this.router.navigate(['']);
  }
}

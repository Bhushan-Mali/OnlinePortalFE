import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  state:any[]=[
    {name:'Andhra Pradesh'},{name:'Arunachal Pradesh'},{name:'Assam'},{name:'Bihar'},{name:'Chhattisgarh'},{name:'Goa'},{name:'Gujrat'},
    {name:'Haryana'},{name:'Himachal Pradesh'},{name:'Jharkhand'},{name:'Karnataka'},{name:'Kerala'},{name:'Madhya Pradesh'}, {name:'Maharashtra'}, 
    {name:'Manipur'},{name:'Meghalaya'},{name:'Mizoram'},{name:'Nagaland'},{name:'Odisha'},{name:'Punjab'},{name:'Rajasthan'},
    {name:'Sikkim'},{name:'Tamil Nadu'},{name:'Telangana'},{name:'Tripura'},{name:'Uttarakhand'},{name:'Uttar Pradesh'},{name:'West Bengal'}
  ]

  dist:any[]=[]

  job:any[]=[
    {name:'Part time'},
    {name:'Full time'},
    {name:'Internship'},
    {name:'Appreticeship'}
  ]

  work:any[]=[]

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

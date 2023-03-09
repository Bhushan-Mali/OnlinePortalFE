import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  EMAIL_PATTERN="^[_A-Aa-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"+"[A-Za-z0-9-]+(\\.[_A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  MOBILE_PATTERN="/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/";
  // /^[6-9]{1}[0-9]{9}$/

  state:any[]=[ 'Andhra Pradesh','Arunachal Pradesh','Assam', 'Bihar','Chhattisgarh','Goa','Gujrat',
        'Haryana','Himachal Pradesh','Jammu Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra', 
        'Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim',
        'Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal' ]
  district:any[]=['Satara','Pune','Sangali','kolhapur','Beed', 'Mumbai Upnagar','Sholinganallur']
  category:any[]=['OPC','PVT','LLP','GOV','PVL']

  constructor(private service:HttpService) { }

  ngOnInit(): void {
  }

  onSend(f:NgForm){
      console.log(f.value);
      this.service.PostData(f.value).subscribe((response)=>{
      console.log(response); 
      window.alert("Registration Successful !") 
      this.resetForm(f);
    })
  }

  resetForm(f:NgForm){
    f.reset();
  }
    


}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  EMAIL_PATTERN="^[_A-Aa-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"+"[A-Za-z0-9-]+(\\.[_A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  MOBILE_PATTERN="/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/";

  state:any[]=[ {name:'Andhra Pradesh'},{name:'Arunachal Pradesh'},{name:'Assam'},{name:'Bihar'},{name:'Chhattisgarh'},{name:'Goa'},{name:'Gujrat'},
        {name:'Haryana'},{name:'Himachal Pradesh'},{name:'Jharkhand'},{name:'Karnataka'},{name:'Kerala'},{name:'Madhya Pradesh'}, {name:'Maharashtra'}, 
        {name:'Manipur'},{name:'Meghalaya'},{name:'Mizoram'},{name:'Nagaland'},{name:'Odisha'},{name:'Punjab'},{name:'Rajasthan'},
        {name:'Sikkim'},{name:'Tamil Nadu'},{name:'Telangana'},{name:'Tripura'},{name:'Uttarakhand'},{name:'Uttar Pradesh'},{name:'West Bengal'} 
      ]

      dist:any[]=[ {name:'Satara'}, {name:'Pune'}, {name:'Sangali'}, {name:'kolhapur'}, {name:'Beed'}]

  cat:any[]=[{name:'OPC'}, {name:'PVT'}, {name:'LLP'},{name:'GOV'},{name:'PVL'}
      ]

      // post:any[]=[];

      // selectedItem:string='';
      // selectedValue:string='';

  constructor(private service:HttpService) { }

  ngOnInit(): void {
  }

  // selectChange(event:any){
  //   this.selectedItem=event.target.value;
  // }

  // selectChangeHandler(event:any){
  //   this.selectedValue=event.target.value;
  // }

   onSend(mycompany:any, myaddress:any, mydate:any, mysts:any, mydis:any, mycity:any, myweb:any,
          mycategory:any, mycomment:any, myfname:any, myccon:any, fname:any, myemail:any, mycco:any, memail:any){
     
        let obj={
          name:mycompany, address:myaddress, establishmentdate:mydate, state:mysts, district:mydis,
          city:mycity, website:myweb, category:mycategory, comment:mycomment, hrfullName:myfname,
          ccontact:myccon, cfullName:fname, hrgmail:myemail, hrcontact:mycco, cgmail:memail
        }

        this.service.PostData(obj).subscribe((response)=>{
          console.log(response);
        })
   }
}

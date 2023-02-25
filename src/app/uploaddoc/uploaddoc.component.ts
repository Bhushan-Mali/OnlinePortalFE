import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploaddoc',
  templateUrl: './uploaddoc.component.html',
  styleUrls: ['./uploaddoc.component.css']
})
export class UploaddocComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onChange(event:any){
    console.log(event.target.files[0]);
  }

  backtoEmp(){
    this.router.navigate(['/empdetails']);
  }
}

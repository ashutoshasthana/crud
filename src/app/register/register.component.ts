import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CommunicationService} from '../communication.service';
import {UtilConstant} from '../../utilConstant'; 
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  _fg:FormGroup;

  constructor(
    private _fb:FormBuilder,
    private _commn:CommunicationService,
    private router:Router) {}

  ngOnInit() {
    this._fg = this._fb.group({
      st_name: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', [Validators.required]],      
    });
  }

  onSubmit(){
    if (this._fg.invalid) {
      return;
    }    
    this._commn.post(UtilConstant.BASE_URL,this._fg.value).subscribe((res)=>{
      if(res){
        console.log('Record Inserted  : ',res);
        this.router.navigate(['/show']);
        
      } else {
        console.log('Something went wrong : ',res);
      }
       

    });
    
  }




}

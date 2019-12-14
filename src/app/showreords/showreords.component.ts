import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication.service';
import {UtilConstant} from '../../utilConstant';
import { Router } from "@angular/router";

@Component({
  selector: 'app-showreords',
  templateUrl: './showreords.component.html',
  styleUrls: ['./showreords.component.css']
})
export class ShowreordsComponent implements OnInit {

  _records: Array<any>;
  record:any = null;
  constructor(
    private _commn:CommunicationService,
    private router:Router
    ) { }

  ngOnInit() {
    this._commn.get(UtilConstant.BASE_URL+"/students").subscribe((res:Array<any>)=>{     
      if(res){
         console.log("REsponse : ",res);
         this._records = res;
        return;
      }      
    });
  }

  delete_record(id:any){
    this._commn.delete(UtilConstant.BASE_URL+"/students/"+id).subscribe((res)=>{
      if(res){
        this._commn.get(UtilConstant.BASE_URL+"/students").subscribe((res:Array<any>)=>{
          this._records = res;
        })
      }
      
    });
   console.log("student id : ",id);
  }

  see_dtails(id:any){
    this._commn.get_by_id(UtilConstant.BASE_URL+"/students/"+id).subscribe((record)=>{
      if(record){
        this.record = record;
      }
    });
  }


  update_record(student:any){
   console.log("Record : ",student);
   this.router.navigate(['/update']);
  }

}

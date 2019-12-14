import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import {UtilConstant} from '../utilConstant';


@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private _http:HttpClient) { }

  /**
   * 
   * methode used to  store record
   * 
   */
    post(url:string,data:any){
      //this._http.post();
      return this._http.post(url+"/students",data);
    }

    /**
   * 
   * methode used to get  records
   * 
   */

   get(url:string){
     return this._http.get(url);
   }

   get_by_id(url){
    return this._http.get(url);
   }
    /**
   * 
   * methode used to delete store record
   * 
   */
  delete(url:string){
      return this._http.delete(url);
  }

   /**
   * 
   * methode used to  update record
   * 
   */
  update(){


  }

}

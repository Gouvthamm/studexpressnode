import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpc:HttpClient) { }
  public getProd(){
    this.httpc.get('http://localhost:8083/api/product',{

    }).toPromise().then(data=>{
      console.log(data)
   })
   }

   public postProd(){
    
    this.httpc.post('http://localhost:8083/api/product',{
     
     
      "productName": "choclate",
      "productDesc": "grocery",
      "productPrice": 888,
      "productDate": "2020-04-27T18:30:00.000Z",
      "productExpiry": "2020-04-27T18:30:00.000Z",
      "productBarcode": "8309823978kjskfd"
      
      
    
    }).toPromise().then(data=>{
      console.log(data)
   })
  }

  public putProd(){
    this.httpc.put('http://localhost:8083/api/updateProduct',{
            "_id": "5ea7b98a0dc27d0b64c467c7",
            "productName": "sev",
            "productDesc": "grocery",
            "productPrice": 888,
            "productDate": "2020-04-27T18:30:00.000Z",
            "productExpiry": "2020-04-27T18:30:00.000Z",
            "productBarcode": "8309823978kjskfd"
     
    }).toPromise().then(data=>{
      console.log(data)
    })
  }
  public delProd(){
    this.httpc.delete('http://localhost:8083/api/deleteProduct/5ea7b9b50dc27d0b64c467ca').toPromise().then(data=>{
      console.log(data)
    })
  }
}

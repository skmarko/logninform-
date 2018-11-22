import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
auth(email,password)
{
 if(email=='admin@gmail.com'&&password=='Marko@123')
 {
   return 1;
 }
 else{
   return 0;
 }
 
}
}


import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorsService implements HttpInterceptor {

  constructor() { }

  intercept(req, next) {
    const tokenization = req.clone({
      setHeaders: {
        Authorization: 'Bearer xx.yy.zz'
      }
    });
    return next.handle(tokenization);
  }
}

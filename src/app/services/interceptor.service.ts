import {Injectable} from '@angular/core';
import {SpinnerService} from "./spinner.service";
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {finalize, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private spinnerService: SpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.llamarSpinner();
    return next.handle(req).pipe(
      finalize(() => this.spinnerService.detenerSpinner())
    );
  }
}

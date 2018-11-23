import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ArrayType } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private resultArray = new BehaviorSubject(Array);
  recentResult = this.resultArray.asObservable();
  results = Array.apply(null, Array(18));

  constructor() { }


  changeResult(result) {
    this.resultArray.next(result)
  }
}

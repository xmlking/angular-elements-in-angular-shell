import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  ctx = {
    name: 'sumo',
    age: 5
  };
  constructor() { }
}

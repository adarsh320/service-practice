import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1, "name":"Adarsh", "age":24},
      {"id":2, "name":"Ayush", "age":24},
      {"id":3, "name":"Dhruv", "age":23},
      {"id":4, "name":"Urmi", "age":23}
    ];
  }

}
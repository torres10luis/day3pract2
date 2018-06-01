import { Component, OnInit } from '@angular/core';


interface Person {
  firstName: string;
  lastName: string;
  sayHi(): string;
}

// class Customer {

//   constructor() {}

//   sayHi(name): string {
//       console.log('Hiii' + name);
//       return 'Hiii' + name;
//   }

// }


// class Employee {

// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  ngOnInit () {
    const customer: Person = {
      firstName: 'Luis',
      lastName: 'Saldana',
      sayHi: (): string => {
        return 'hi there';
      }
    };
    // console.log(customer.sayHi());

    const employee: Person = {
      firstName: 'joe',
      lastName: 'Saldana',
      sayHi: (): string => {
        return 'hello'; }
    };
    console.log(employee.sayHi());
  }


}

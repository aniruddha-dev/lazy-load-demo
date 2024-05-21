import { Component } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  title: string = 'Data binding example';
  firstName: string = 'John';
  lastName: string = 'Doe';

  onSave() {
    alert(`Fullname: ${this.firstName} ${this.lastName}`)
  }
}

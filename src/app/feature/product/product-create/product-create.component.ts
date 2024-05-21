import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {
  title: string = 'Data binding example';
  firstName: string = 'John';
  lastName: string = 'Doe';

  onSave() {
    alert(`Fullname: ${this.firstName} ${this.lastName}`)
  }
}

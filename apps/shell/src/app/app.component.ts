import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '@shell/menu';

@Component({
  imports: [RouterModule, MenuComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public menuItems = [
    {
      name: "Products",
      url: "/products",
    },
    {
      name: "Basket",
      url: "/basket",
    }
  ]

}

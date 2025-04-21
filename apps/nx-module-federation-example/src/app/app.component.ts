import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '@nx-module-federation-example/menu';

@Component({
  imports: [RouterModule, MenuComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}

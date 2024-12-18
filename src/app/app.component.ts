import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingDemoComponent } from "./data-binding-demo/data-binding-demo.component";
import { DirectiveDemoComponent } from "./directive-demo/directive-demo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataBindingDemoComponent, DirectiveDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prelim_lab_data_binding';
}

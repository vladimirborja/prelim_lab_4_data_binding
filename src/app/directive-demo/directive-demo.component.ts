import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive-demo.component.html',
  styleUrl: './directive-demo.component.css'
})
export class DirectiveDemoComponent {
isHighlighted = true;
isLoggedIn = true;
condition = true;
fruits = ['Apples', 'Orange', 'Grapes'];
color = 'red;'
}

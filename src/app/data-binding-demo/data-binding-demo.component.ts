import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})
export class DataBindingDemoComponent {
  title = "this is my angular application";
  message = "Bluetooth Power Off!";
  imageUrl = "../assets/yskaela.jpeg";
  w = 50;
  h = 50;
  altText = 'Power Off';
  textColor='blue';
  isHighlighted = true;
  yourName = '';
}


import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-registro-app',
  imports: [CommonModule, RouterModule],
  templateUrl: './registro-app.component.html',
  styleUrl: './registro-app.component.css'
})
export class RegistroAppComponent {

  constructor(private router: Router) {
  }


}




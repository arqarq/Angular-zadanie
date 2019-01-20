import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Logowanie';
  email = '';
  password = '';
  showError = false;

  submit() {
    if (!this.email || !this.password) {
      // console.log(this.email, this.password)
      this.showError = true;
    } else {
      this.showError = false;
    }
    if (this.email && this.email === 'admin'){

    }
  }
}

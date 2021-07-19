import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My day';
  form: boolean = true;
  text: string = 'static';
  forms(){
    if(this.form){
      this.form = false;
      this.text = 'static';
    }else {
      this.form = true;
      this.text = 'dynamic';
    }
  }
}

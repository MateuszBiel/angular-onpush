import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'detectStrategy';
  public int:any = [];
  add() {
    // this.int.push(Math.random());
    const tmp = this.int;
    tmp.push(Math.random())
    this.int = [...tmp]
  }

}

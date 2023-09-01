import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: `navbar.component.html`

})
export class NavbarComponent {

  //Cette variable change à la connection
  isConnected: number = 0;

  changeStatus(){
    if(this.isConnected == 1){
      this.isConnected = 0
    }else{
      this.isConnected = 1;
    }
  }

}

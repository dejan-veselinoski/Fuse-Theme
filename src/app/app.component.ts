import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'brosurance-ui';

  constructor(){
    // Splashscreen
    this.hideSplashScreen();
  }

  hideSplashScreen() {
    const splashScreen: HTMLElement = document.getElementById('splash_screen')!;
    if (splashScreen) {
      setTimeout(() => {
        splashScreen.remove();
      }, 1000)
    }
  }
}

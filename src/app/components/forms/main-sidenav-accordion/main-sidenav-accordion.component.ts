import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-sidenav-accordion',
  templateUrl: './main-sidenav-accordion.component.html',
  styleUrls: ['./main-sidenav-accordion.component.scss']
})
export class MainSidenavAccordionComponent {
  panelOpenState = false;
  isinitChecked: boolean = false;

  constructor(
    private _router: Router,
    private _cdRef: ChangeDetectorRef,
  ){}

  ngAfterViewChecked() {
      if (window.location.href.includes('/forms/')) {
        if (!this.isinitChecked) {
          this.panelOpenState = true;
          this._cdRef.detectChanges();
          this.isinitChecked = true;
        }

      } else {
        this.panelOpenState = false;
        this._cdRef.detectChanges();
      }
  }

  accordionOpened() {
    if (!this.panelOpenState) {
      this._router.navigate(['./forms/input']);
    }

    this.panelOpenState = !this.panelOpenState;
  }
}

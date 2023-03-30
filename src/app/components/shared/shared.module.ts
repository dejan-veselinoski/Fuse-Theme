import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileBannerComponent } from '../profile/profile-banner/profile-banner.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    ProfileBannerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ProfileBannerComponent
  ]
})
export class SharedModule { }

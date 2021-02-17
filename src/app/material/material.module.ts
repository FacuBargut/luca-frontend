import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatStepperModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule
  ],
  exports:[
    MatStepperModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class MaterialModule { }

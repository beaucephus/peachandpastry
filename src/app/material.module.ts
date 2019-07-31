import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatSidenavModule,
  MatMenuModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSidenavModule,
    MatMenuModule,
    MatTabsModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSidenavModule,
    MatMenuModule,
    MatTabsModule
  ]
})
export class MaterialModule {}

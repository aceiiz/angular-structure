import { FeatureA } from './feature-a.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES } from './pages';
import { COMPONENTS } from './components';



@NgModule({
  declarations: [
    ...PAGES,
    ...COMPONENTS
  ],
  imports: [
    [CommonModule, RouterModule.forChild(FeatureA)]
  ],
  exports: [
    ...PAGES,
    ...COMPONENTS
  ]
})
export class FeatureAModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES } from './pipes/';
import { COMPONENTS } from './components';
import { DIRECTIVE } from './directives';


@NgModule({
  declarations: [
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVE,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...PIPES,
    ...COMPONENTS,
    ...DIRECTIVE
  ]
})
export class SharedModule { }

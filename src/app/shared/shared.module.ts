import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './components/shared/shared.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TranslateModule
  ],
  exports: [SharedComponent, TranslateModule],
})
export class SharedModule {}

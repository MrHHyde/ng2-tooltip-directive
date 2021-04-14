import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TooltipOptions } from './tooltip-options.interface';
import { TooltipOptionsService } from './tooltip-options.service';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [
    TooltipDirective,
    TooltipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TooltipDirective
  ],
  entryComponents: [
    TooltipComponent
  ]
})
export class TooltipModule {

  static forRoot(initOptions: TooltipOptions): ModuleWithProviders<TooltipModule> {
    return {
      ngModule: TooltipModule,
      providers: [
        {
          provide: TooltipOptionsService,
          useValue: initOptions
        }
      ]
    };
  }
}

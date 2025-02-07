import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard.component';
import { WizardStepComponent } from './wizard-step.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WizardComponent,
    WizardStepComponent
  ],
  exports: [
    WizardComponent,
    WizardStepComponent
  ]
})
export class FormWizardModule { 
  static forRoot(): ModuleWithProviders<FormWizardModule> {
    return {
      ngModule: FormWizardModule,
      providers: [WizardComponent, WizardStepComponent]
    };
  }
}

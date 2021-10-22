import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [ ],
	exports: [ ]
})
export class FormWizardModule {
	static forRoot(): ModuleWithProviders<FormWizardModule> {
		return {
			ngModule: FormWizardModule
		};
	}
}
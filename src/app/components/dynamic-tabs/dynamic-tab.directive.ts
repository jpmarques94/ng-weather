import {
	ContentChild,
	Directive,
	EventEmitter,
	Input,
	Output,
	TemplateRef,
} from '@angular/core';

@Directive({
	selector: 'dynamic-tab',
	standalone: true,
})
export class DynamicTabComponent {
	@Input() public title = '';
	@Output() public onClose: EventEmitter<void> = new EventEmitter<void>();
	@ContentChild(TemplateRef) public bodyTemplate: TemplateRef<any>;
}

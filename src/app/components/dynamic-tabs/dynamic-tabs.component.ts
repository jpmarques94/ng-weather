import { Component, ContentChildren, QueryList } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicTabComponent } from './dynamic-tab.directive';

@Component({
	selector: 'dynamic-tabs',
	standalone: true,
	imports: [BrowserModule],
	templateUrl: './dynamic-tabs.component.html',
	styleUrl: './dynamic-tabs.component.css',
})
export class DynamicTabContainerComponent {
	@ContentChildren(DynamicTabComponent)
	public tabs!: QueryList<DynamicTabComponent>;

	public currentIndex = 0;

	public close(tab: DynamicTabComponent, index: number) {
		this.updateIndexOnRemove(index);
		tab.onClose.emit();
	}

	/**
	 * Adjusts currentIndex after removing a tab to ensure it remains within valid bounds.
	 * If the removed tab is before or at the active one, decrements currentIndex.
	 * If there are no tabs remaining, sets currentIndex to 0.
	 */
	private updateIndexOnRemove(index: number): void {
		if (this.tabs.length > 0 && index <= this.currentIndex) {
			this.currentIndex = Math.max(0, this.currentIndex - 1);
		} else if (this.tabs.length === 0) {
			this.currentIndex = 0;
		}
	}
}

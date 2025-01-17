import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	name: string = '';
	clickCounter: number = 0;

	constructor() {}

	ngOnInit(): void {}

	counterClick() {
		this.clickCounter += 1;
	}

	setClass() {
		let setClasses = {
			active: this.clickCounter > 4,
			notActive: this.clickCounter <= 4
		};

		return setClasses;
	}
}

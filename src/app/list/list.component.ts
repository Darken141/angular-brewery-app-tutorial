import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit {
	constructor(private _http: HttpService) {}

	brews: object;

	ngOnInit(): void {
		this._http.myMethod();
		this._http.getBeers().subscribe((data) => {
			this.brews = data;
			console.log(this.brews);
		});
	}
}

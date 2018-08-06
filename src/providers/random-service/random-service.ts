import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import { APIQuote } from '../../models/quote';

@Injectable()
export class RandomServiceProvider {
	// private url: string = 'http://watchout4snakes.com/wo4snakes/Random/RandomPhrase';
	private url: string = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&as=';

	constructor(public http: HttpClient) {}

	getWord(): Observable<APIQuote[]> {
		let rand = Math.random();

		let headers = new HttpHeaders({
			// 'Access-Control-Allow-Origin': '*',
			// 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
			'Content-Type': 'application/x-www-form-urlencoded'
		});
		return this.http.get<APIQuote[]>(this.url + rand, {
			headers: headers
		});
	}
}

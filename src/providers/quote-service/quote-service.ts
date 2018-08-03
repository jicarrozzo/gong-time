import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Quote } from '../../models/quote';

@Injectable()
export class QuoteServiceProvider {
	private quoteRestURL: string = 'https://quotes.rest/qod';

	constructor(public http: HttpClient) {}

	getQuote(topic: string): Observable<Quote> {
		let headers = new HttpHeaders({
			Accept: 'application/json'
		});

		return this.http.get<Quote>(this.quoteRestURL, {
			headers: headers
		});
	}
}

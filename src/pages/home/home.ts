import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { QuoteServiceProvider } from '../../providers/quote-service/quote-service';
import { Quote } from '../../models/quote';
@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	search: string = 'words';
	theQuote: string = '';
	quoteObject: Quote = new Quote();

	constructor(
		public navCtrl: NavController,
		private quoteService: QuoteServiceProvider,
		private loadingCtrl: LoadingController
	) {}

	getmyword() {
		let loader = this.loadingCtrl.create({
			content: 'Let me think...'
		});
		loader.present();

		this.quoteService.getQuote('').subscribe(
			(data: Quote) => {
				this.quoteObject = data;
				this.theQuote = this.quoteObject.contents.quotes[0].quote;

				// this.process();
				// loader.dismiss();
			},
			(err) => {
				loader.dismiss();
			},
			() => {
				loader.dismiss();
			}
		);
	}

	process() {}
}

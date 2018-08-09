import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
// import { QuoteServiceProvider } from '../../providers/quote-service/quote-service';
import { RandomServiceProvider } from '../../providers/random-service/random-service';
import { Quote, APIQuote } from '../../models/quote';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	search: string = 'words';
	theQuote: Quote;

	tmpQuote: Quote;
	word1: string;
	word2: string;

	constructor(
		public navCtrl: NavController,
		// private quoteService: QuoteServiceProvider,
		private randomService: RandomServiceProvider,
		private loadingCtrl: LoadingController,
		private audio: SmartAudioProvider
	) {}

	getmyword() {
		this.audio.play('gong');

		this.theQuote = null;
		this.tmpQuote = null;
		this.word1 = '';
		this.word2 = '';

		let loader = this.loadingCtrl.create({
			spinner: 'bubbles',
			content: 'Let me think...'
		});
		loader.present();
		this.randomService.getWord().subscribe(
			(data: APIQuote[]) => {
				console.log(data);
				this.tmpQuote = new Quote(data[0]);

				this.process();
			},
			(err) => {
				loader.dismiss();
			},
			() => {
				loader.dismiss();
			}
		);
	}

	process() {
		if (this.search === 'words') {
			let arPalabras = this.tmpQuote.splitWords.filter((word: string) => {
				return word.indexOf('&#') < 0 && word.length > 4;
			});
			this.word1 = arPalabras[Math.floor(Math.random() * arPalabras.length)];
			this.word2 = arPalabras[Math.floor(Math.random() * arPalabras.length)];
		} else this.theQuote = this.tmpQuote;
	}
}

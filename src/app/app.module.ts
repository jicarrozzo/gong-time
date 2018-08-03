import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { QuoteServiceProvider } from '../providers/quote-service/quote-service';

@NgModule({
	declarations: [ MyApp ],
	imports: [
		HttpModule,
		HttpClientModule,
		BrowserModule,
		IonicModule.forRoot(MyApp, {
			backButtonText: '',
			backButtonIcon: 'ios-arrow-back',
			iconMode: 'ios',
			modalEnter: 'modal-slide-in',
			modalLeave: 'modal-slide-out',
			pageTransition: 'ios-transition'
		})
	],
	bootstrap: [ IonicApp ],
	entryComponents: [ MyApp ],
	providers: [ { provide: ErrorHandler, useClass: IonicErrorHandler }, QuoteServiceProvider ]
})
export class AppModule {}

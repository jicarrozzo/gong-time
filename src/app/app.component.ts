import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import { RandomServiceProvider } from '../providers/random-service/random-service';

@Component({
	templateUrl: 'app.html',
	providers: [ RandomServiceProvider ]
})
export class MyApp {
	rootPage: any = 'HomePage';

	constructor(platform: Platform, audio: SmartAudioProvider) {
		platform.ready().then(() => {
			audio.preload('gong', 'assets/audio/gong.mp3');
		});
	}
}

import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class SmartAudioProvider {
	audioType: string = 'html5';
	sounds: any = [];

	constructor(public platformCtrl: Platform) {}

	preload(key, asset) {
		let audio = {
			key: key,
			asset: asset,
			type: 'html5'
		};

		this.sounds.push(audio);
	}

	play(key) {
		let audio = this.sounds.find((sound) => {
			return sound.key === key;
		});

		let audioAsset = new Audio(audio.asset);
		audioAsset.play();
	}
}

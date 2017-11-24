import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AudioProvider } from 'ionic-audio';


@IonicPage()
@Component({
  selector: 'page-audio',
  templateUrl: 'audio.html',
})
export class AudioPage {
  myTracks: any[];
  allTracks: any[];
  selectedTrack: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public audioProvider : AudioProvider) {
    this.myTracks = [{
      src: 'https://www.dropbox.com/s/ewkmod3sbhw71ia/listener%20-%20Wooden%20Heart%20-%2001%20You%20have%20never%20lived%20because%20you%20have%20never%20died.mp3?dl=1',
      artist: 'Listener',
      title: 'You have never lived because you have never died',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    }];
  }

  ionViewDidLoad(){
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this.audioProvider.tracks;
  }

  playSelectedTrack() {
    // use AudioProvider to control selected track
    this.audioProvider.play(this.selectedTrack);
  }

  pauseSelectedTrack() {
    // use AudioProvider to control selected track
    this.audioProvider.pause(this.selectedTrack);
  }

  onTrackFinished(track: any) {
    console.log('Track finished', track)
  }

}

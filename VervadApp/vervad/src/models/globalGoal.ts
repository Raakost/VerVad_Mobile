import {ChildrensText} from "./childrensText";
import {ChildrensArtwork} from "./childrensArtwork";
import {LandArt} from "./landArt";
import {AudioVideo} from "./audioVideo";

export class GlobalGoal {
  constructor(title: string,
              description: string,
              imgUrl: string,
              childrensTexts: Array<ChildrensText>,
              childrensArtworks: Array<ChildrensArtwork>,
              landtArt: Array<LandArt>,
             // audioVideo: AudioVideo,
              latitude: number,
              longitude: number) {

    this.Title = title;
    this.Description = description;
    this.ImgUrl = imgUrl;
    this.ChildrensTexts = childrensTexts;
    this.ChildrensArtworks = childrensArtworks;
    this.LandArt = landtArt;
    //this.AudioVideo = audioVideo;
    this.Latitude = latitude;
    this.Longitude = longitude;
  }

  Id: number;
  Title: string;
  Description: string;
  ImgUrl: string;
  ChildrensTexts: Array<ChildrensText>;
  ChildrensArtworks: Array<ChildrensArtwork>;
  LandArt: Array<LandArt>;
  //AudioVideo: AudioVideo;
  Latitude: number;
  Longitude: number;
}

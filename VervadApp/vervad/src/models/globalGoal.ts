import {ChildrensText} from "./childrensText";
import {ChildrensArtwork} from "./childrensArtwork";
import {LandArt} from "./landArt";
import {AudioVideo} from "./audioVideo";

export class GlobalGoal {
  constructor(title: string,
              description: string,
              imgUrl: string,
              childrensTexts: Array<ChildrensText>,
              childrensDrawings: Array<ChildrensArtwork>,
              childrensSculptures: Array<ChildrensArtwork>,
              landtArt: Array<LandArt>,
              audio: AudioVideo,
              latitude: number,
              longitude: number) {

    this.Title = title;
    this.Description = description;
    this.ImgUrl = imgUrl;
    this.ChildrensTexts = childrensTexts;
    this.ChildrensDrawings = childrensDrawings;
    this.ChildrensSculptures = childrensSculptures;
    this.LandArt = landtArt;
    this.Audio = audio;
    this.Latitude = latitude;
    this.Longitude = longitude;
  }

  Id: number;
  Title: string;
  Description: string;
  ImgUrl: string;
  ChildrensTexts: Array<ChildrensText>;
  ChildrensDrawings: Array<ChildrensArtwork>;
  ChildrensSculptures: Array<ChildrensArtwork>;
  LandArt: Array<LandArt>;
  Audio: AudioVideo;
  Latitude: number;
  Longitude: number;
}

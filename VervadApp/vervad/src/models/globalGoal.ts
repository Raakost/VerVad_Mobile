import {ChildrensText} from "./childrensText";
import {ChildrensArtwork} from "./childrensArtwork";
import {LandArt} from "./landArt";
import {Audio} from "./audio";

export class GlobalGoal {
  constructor(title: string,
              description: string,
              imgUrl: string,
              childrensTexts: Array<ChildrensText>,
              childrensDrawings: Array<ChildrensArtwork>,
              childrensSculptures: Array<ChildrensArtwork>,
              landtArt: Array<LandArt>,
              audio: Audio,
              latitude: number,
              longitude: number,) {

    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
    this.childrensTexts = childrensTexts;
    this.childrensDrawings = childrensDrawings;
    this.childrensSculptures = childrensSculptures;
    this.landArt = landtArt;
    this.audio = audio;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  id: number;
  title: string;
  description: string;
  imgUrl: string;
  childrensTexts: Array<ChildrensText>;
  childrensDrawings: Array<ChildrensArtwork>;
  childrensSculptures: Array<ChildrensArtwork>;
  landArt: Array<LandArt>;
  audio: Audio;
  latitude: number;
  longitude: number;
}

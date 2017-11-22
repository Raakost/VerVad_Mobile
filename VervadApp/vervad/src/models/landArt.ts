export class LandArt {
  constructor(title: string,
              description: string,
              imgUrl: string) {
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }

  id: number;
  //artist : string;
  title: string;
  description: string;
  imgUrl: string;
}

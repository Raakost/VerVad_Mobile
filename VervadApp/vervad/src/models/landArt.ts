export class LandArt {
  constructor(title: string,
              description: string,
              imgUrl: string) {
    this.Title = title;
    this.Description = description;
    this.ImgUrl = imgUrl;
  }

  Id: number;
  Title: string;
  Description: string;
  ImgUrl: string;
}

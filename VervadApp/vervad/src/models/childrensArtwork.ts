export class ChildrensArtwork {

  constructor(artist: string,
              title: string,
              description: string,
              imgUrl: string) {
    this.Artist = artist;
    this.Title = title;
    this.Description = description;
    this.ImgUrl = imgUrl;
  }

  Id: number;
  Artist: string;
  Title: string;
  Description: string;
  ImgUrl: string;
}

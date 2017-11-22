export class ChildrensArtwork {

  constructor(artist: string, title: string, description: string, imgUrl: string) {
    this.artist = artist;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }

  id: number;
  artist: string;
  title: string;
  description: string;
  imgUrl: string;
}

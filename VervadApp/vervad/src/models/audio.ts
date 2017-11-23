export class Audio {
  constructor(title: string,
              description: string,
              musicUrl: string,
              videoUrl: string,
              songTitle: string,
              songArtist: string) {
    this.Title = title;
    this.Description = description;
    this.MusicUrl = musicUrl;
    this.VideoUrl = videoUrl;
    this.SongTitle = songTitle;
    this.SongArtist = songArtist;
  }

  Id: number;
  Title: string;
  Description: string;
  SongArtist: string;
  SongTitle: string;
  MusicUrl: string;
  VideoUrl: string;
}

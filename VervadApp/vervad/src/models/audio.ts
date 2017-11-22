export class Audio {
  constructor(title: string,
              description: string,
              musicUrl: string,
              videoUrl: string,
              songTitle: string,
              songArtist: string) {
    this.title = title;
    this.description = description;
    this.musicUrl = musicUrl;
    this.videoUrl = videoUrl;
    this.songTitle = songTitle;
    this.songArtist = songArtist;
  }

  id: number;
  title: string;
  description: string;
  songArtist: string;
  songTitle: string;
  musicUrl: string;
  videoUrl: string;
}

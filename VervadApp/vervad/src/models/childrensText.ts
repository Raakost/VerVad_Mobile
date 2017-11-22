export class ChildrensText {
  constructor(title: string,
              description: string,
              author: string) {
    this.title = title;
    this.description = description;
    this.author = author;
  }

  id: number;
  title: string;
  description: string;
  author: string;
}

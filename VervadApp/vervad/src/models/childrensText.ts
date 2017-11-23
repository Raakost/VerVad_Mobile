export class ChildrensText {
  constructor(title: string,
              description: string,
              author: string) {
    this.Title = title;
    this.Description = description;
    this.Author = author;
  }

  Id: number;
  Title: string;
  Description: string;
  Author: string;
}

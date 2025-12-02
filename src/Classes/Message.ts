export default class Message {
  public from: string;
  public to: string;
  public text: string;

  constructor(from: string, to: string, text: string) {
    this.from = from;
    this.to = to;
    this.text = text;
  }
}

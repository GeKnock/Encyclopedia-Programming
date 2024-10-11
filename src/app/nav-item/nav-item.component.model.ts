
export class TextList {

  private text: string;
  private icon?: string | any = "";

  constructor(text: string, icon?: string) {
    this.text = text;
    this.icon = icon;
  }

  public getText (): string {
    return this.text;
  }

  public getIcon (): string {
    return this.icon;
  }




}

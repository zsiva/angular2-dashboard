export class FlagModel {
    name: string;
    class: string;
    capital: string;

    constructor(flagInfo:any) {
        this.name = flagInfo.name;
        this.class = flagInfo.class;
        this.capital = flagInfo.capital;
      }
}

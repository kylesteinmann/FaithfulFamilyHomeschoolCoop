
export class Event {
  id?:string;
  date:any;
  event: string;

constructor (
  id:string,
  date:any,
  event:string)
  {
    this.id = id;
    this.date = date;
    this.event = event;
  }
}

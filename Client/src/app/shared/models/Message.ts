export interface Message {
  _id: number;
  sourceUser: string;
  destUser: string;
  title: string;
  content: string;
}

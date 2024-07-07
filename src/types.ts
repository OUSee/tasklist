export type Task = {
  id: string;
  title: string;
  description: string;
  doneState: boolean;
};

export enum Options {
  dowload,
  update,
}

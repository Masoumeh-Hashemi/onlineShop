import db from "../db.ts";


export interface State {
  name: string;
  enName: string;

}

export const states = db.collection<State>("States");

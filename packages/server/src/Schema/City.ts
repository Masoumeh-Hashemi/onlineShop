import db from "../db.ts";
import type { State } from "./State.ts";


export interface City {
  name: string;
  enName: string;
  state?: State;

}

export const cities = db.collection<City>("Cities");

import { ValueOf } from "../..";
import { JSSProperties } from "../../jss-properties";
import { designPatterns, frameworks } from "./data";

export interface IExecuteBuild {
  name: string;
  globalStyle?: JSSProperties;
  template: ValueOf<typeof frameworks>;
  designPattern: ValueOf<typeof designPatterns>;
}

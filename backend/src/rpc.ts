import { handler } from "farcry";
import * as t from "io-ts";

export default handler().method(
  {
    name: "add",
    params: {
      x: t.number,
      y: t.number,
    },
    returns: t.number,
  },
  async function ({ x, y }) {
    return x + y;
  }
);

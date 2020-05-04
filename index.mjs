import murmur2 from "./murmur2.mjs";
import hashSum from "hash-sum";
import fnv1a from "@sindresorhus/fnv1a";
import fnv1a2 from "fnv1a";
import { performance } from "perf_hooks";

const css = {
  position: "absolute",
  top: "50%",
  left: "50%",
  content: "",
  boxSizing: "border-box",
  borderRadius: "50%",
  borderWidth: "4px",
  borderStyle: "solid",
  borderTopColor: "#0e0",
  borderRightColor: "#0dd",
  borderBottomColor: "#f90",
  borderLeftColor: "#f6f",
};

const css2 = {
  paddingTop: 2,
  paddingRight: 3,
  paddingBottom: 2,
  paddingLeft: 3,

  display: "inline-flex",
  position: "relative",
  fontSize: 0,
  lineHeight: "none",
  cursor: "pointer",
  backgroundColor: "grays.300",
  border: "1px solid transparent",
  borderRadius: "sm",
  transitionDuration: "200ms",
  transitionProperty: "background-color, color, border-color, box-shadow",

  ":hover:not(:disabled)": {
    backgroundColor: "grays.200",
  },

  ":focus": {
    boxShadow: "outline",
  },

  ":active:not(:disabled)": {
    backgroundColor: "grays.400",
  },

  ":disabled": {
    cursor: "not-allowed",
  },

  "::-moz-focus-inner": {
    border: 0,
    padding: 0,
  },
};

const iterations = 1000000;

function test(name, func) {
  const t0 = performance.now();
  for (let i = 0; i <= iterations; i++) {
    func(css);
  }
  const t1 = performance.now();
  console.log(`Call to ${name} took ${t1 - t0} milliseconds.`);
}

test("hash sum", hashSum);
test("murmur 2", (input) => murmur2(JSON.stringify(input)));
test("@sindresorhus/fnv1a", (input) => fnv1a(JSON.stringify(input)));
test("fnv1a", (input) => fnv1a2(JSON.stringify(input)));
test("stringify", (input) => JSON.stringify(input));

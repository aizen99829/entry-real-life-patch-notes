const LINE = "v2.4.1: fixed a bug where the body requested an update at 3 AM, restarted without warning, and forgot what it was updating.";
if (LINE.length > 160 || LINE.includes("\n")) {
  throw new Error("patch note must be one line of at most 160 characters");
}
console.log(LINE);

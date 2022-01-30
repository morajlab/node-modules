import { accessSync, cpSync, constants } from "fs";
import { relative, join } from "path";

interface IData {
  type?: string;
  path?: string;
}

const args = process.argv.slice(2);
const data: IData = {
  type: "common",
};

for (const arg of args) {
  switch (arg) {
    case "--path":
      data.path = args[args.indexOf(arg) + 1];
      break;
    case "--type":
      data.type = args[args.indexOf(arg) + 1];
      break;
  }
}

if (!data.path) {
  console.log("\nERROR: option '--path' is required.\n");
  process.exit(1);
}

try {
  accessSync(data.path, constants.R_OK | constants.W_OK);
  console.log(`\nERROR: path '${data.path}' exists.\n`);
  process.exit(1);
} catch (error) {
  cpSync(
    relative(join(__dirname, ".."), join("templates", data.type)),
    data.path,
    {
      recursive: true,
    }
  );
  console.log(
    `New package in '${data.path}' with template '${data.type}' created.`
  );
}

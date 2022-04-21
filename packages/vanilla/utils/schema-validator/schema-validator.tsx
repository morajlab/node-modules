import { readFileSync } from "fs";
import { join } from "path";
import Ajv from "ajv";
import type { ValidateFunction } from "ajv";

export type SchemaValidatorReturnType = {
  validated: boolean;
  message?: ValidateFunction<unknown>["errors"];
};

export interface ISchemaValidatorProps {
  schemaPath?: string;
  schemaName: string;
  data: object;
}

export interface ISchemaValidator {
  (props: ISchemaValidatorProps): SchemaValidatorReturnType;
}

export const schemaValidator: ISchemaValidator = ({
  data,
  schemaName,
  schemaPath = join(process.cwd(), "schemas"),
}) => {
  const schema = JSON.parse(
    readFileSync(join(schemaPath, `${schemaName}.json`), "utf-8")
  );

  delete schema?.$schema;

  const ajv = new Ajv();

  const validate = ajv.compile(schema);
  const valid = validate(data);

  return !valid
    ? { validated: false, message: validate.errors }
    : { validated: true };
};

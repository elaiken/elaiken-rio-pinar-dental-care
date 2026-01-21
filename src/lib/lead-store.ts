import { promises as fs } from "fs";
import path from "path";

type RecordType = "lead" | "intake" | "secure-message";

function dataFile(type: RecordType) {
  return path.join(process.cwd(), "data", `${type}.json`);
}

async function ensureFile(filePath: string) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, "[]", "utf8");
  }
}

export async function persistRecord(type: RecordType, record: unknown) {
  const filePath = dataFile(type);
  await ensureFile(filePath);
  const current = JSON.parse(await fs.readFile(filePath, "utf8")) as unknown[];
  current.push(record);
  await fs.writeFile(filePath, JSON.stringify(current, null, 2), "utf8");
  return filePath;
}

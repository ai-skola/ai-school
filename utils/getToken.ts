import { NextApiRequest } from "next";
import { headers } from "next/headers";

export default function getToken(req: NextApiRequest) {
  const headerList = headers();
  const authorization = headerList.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.replace("Bearer ", "");
  }
  return null;
};

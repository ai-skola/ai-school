import { NextApiRequest } from "next";
import { headers } from "next/headers";

export default function getToken(auth) {
  if (auth && auth.startsWith("Bearer ")) {
    return auth.replace("Bearer ", "");
  }
  return null;
};

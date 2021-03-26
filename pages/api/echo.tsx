import { NextApiRequest, NextApiResponse } from "next";

interface MessageNextApiRequest extends NextApiRequest{
  query:{
    message?: string
  }
}

export default function Echo(req: MessageNextApiRequest, resp: NextApiResponse) {
  resp.statusCode = 200;
  resp.setHeader("Content-Type", "application/json");
  resp.end(
    JSON.stringify({
      message: req.query.message ?? "Base message",
    })
  );
}

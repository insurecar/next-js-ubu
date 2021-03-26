import { NextApiRequest, NextApiResponse } from "next";

interface MessageNextApiRequest extends NextApiRequest{
  query: {
    id: string
  }
}

export default function getById(req: MessageNextApiRequest, resp:NextApiResponse) {
  // resp.statusCode = 200;
  // resp.setHeader("Content-Type", "application/json");
  // resp.end(req.query.id);

  resp.json({ yourId: req.query.id });
}

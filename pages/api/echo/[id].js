export default function getById(req, resp) {
  // resp.statusCode = 200;
  // resp.setHeader("Content-Type", "application/json");
  // resp.end(req.query.id);

  resp.json({ yourId: req.query.id });
}

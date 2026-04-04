export default async function(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  if (!process.env.REPORT) return res.status(500).end();
  await fetch(process.env.REPORT, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      content: "<@1138813124946956298>",
      embeds: [{
        title: "Someone Just Reported A Script",
        description: req.body["scripter"] || "",
        fields: [
          { name: "Which Script Was Used To Report:", value: "" + (req.body["script"] || "Spoofed") },
          { name: "Which Creator Uploaded The Script:", value: "" + (req.body["user"] || "Spoofed") }
        ],
        timestamp: new Date().toJSON()
      }]
    })
  });
  res.end();
}

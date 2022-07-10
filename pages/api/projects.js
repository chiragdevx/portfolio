import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const projects = [
      {
        name: "e",
        description:
          "",
        stack: ["", ""],
        link: "",
        image: "",
        largeImage: "",
      },

    ];

    return res.json(projects);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}

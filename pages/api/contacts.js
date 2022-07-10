import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const contactMediums = [
      {
        medium: "github",
        username: "ch1ra9",
        link: "https://github.com/ch1ra9",
      },
      {
        medium: "email",
        username: "itschitagparmar@gmail.com",
        link: "mailto:itschitagparmar@gmail.com",
      },
      {
        medium: "twitter",
        username: "chirag_is_here",
        link: "https://twitter.com/chirag_is_here",
      },
      {
        medium: "linkedin",
        username: "chirag parmar",
        link: "https://www.linkedin.com/in/chirag-parmar-66013b1a7",
      },
    ];

    res.json(contactMediums);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}

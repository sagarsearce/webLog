import Article from "../../modals/article";
import connectDB from "../../middleware/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const articles = await Article.find().sort({
      createdAt: "desc",
    });
    res.json(articles);
  } else if (req.method === "POST") {

    
  }
};

export default connectDB(handler);

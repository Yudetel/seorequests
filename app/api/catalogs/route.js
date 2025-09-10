import Catalog from "@/models/Catalog";
import { connectDB } from "@/lib/mongoose";

// GET all rules
export async function GET() {
  await connectDB();
  const catalogs = await Catalog.find();
  return new Response(JSON.stringify(catalogs));
}

// POST new rule
export async function POST(req) {
  try {
    await connectDB();
    const { name, url, publicists, description } = await req.json();

    const res = await Catalog.findOne({ url: { $regex: url, $options: "i" } });
    console.log(res);
    if (res) {
      return new Response(JSON.stringify({ message: "Alredy exists" }));
    }

    const catalog = await Catalog.create({
      name,
      url,
      publicists,
      description,
    });
    return new Response(JSON.stringify(catalog));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error));
  }
}

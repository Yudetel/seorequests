import { connectDB } from "@/lib/mongoose";
import Catalog from "@/models/Catalog";

export async function GET(req, context) {
  const { params } = context;
  const { id } = await params;
  try {
    await connectDB();
    const catalog = await Catalog.findById(id);
    return new Response(JSON.stringify(catalog));
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }));
  }

  return new Response(JSON.stringify({ message: "Hello" }));
}

// POST new rule
export async function POST(req) {
  try {
    await connectDB();
    const { name, url, publicists, description } = await req.json();

    const res = await Catalog.findOne({ url: { $regex: url, $options: "i" } });

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

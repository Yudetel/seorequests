import User from "@/models/User";
import { connectDB } from "@/lib/mongoose";

// GET all rules
export async function GET() {
  await connectDB();
  const users = await User.find();
  return new Response(JSON.stringify(users));
}

// POST new rule
export async function POST(req) {
  try {
    await connectDB();
    const { email, password, platform } = await req.json();

    const res = await User.findOne({ email: { $regex: email, $options: "i" } });
    console.log(res);
    if (res) {
      return new Response(JSON.stringify({ message: "Alredy exists" }));
    }

    const user = await User.create({
      email,
      password,
      platform,
    });
    return new Response(JSON.stringify(user));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error));
  }
}

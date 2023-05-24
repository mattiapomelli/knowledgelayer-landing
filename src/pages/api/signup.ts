import { supabase } from "lib/supabase";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { email } = JSON.parse(req.body);

    const result = await supabase.from("builders").insert({
      email,
    });

    console.log("Result: ", result);

    return res.status(200).send({ message: "Ok" });
  } else {
    return res.status(405).send({ message: "Method not allowed" });
  }
}

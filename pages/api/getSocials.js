import { groq } from "next-sanity";
// import { NextResponse } from "next/server";
import { sanityClient } from "../../sanity";

const query = groq`*[_type == "social"]`;

export default async function handler(req,res) {
  const socials = await sanityClient.fetch(query);
  return res.status(200).json(socials);
}

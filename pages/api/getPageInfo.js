import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { sanityClient } from "../../sanity";

const query = groq`*[_type == "page"][0]`;

export default async function handler(req,res) {
  const pages = await sanityClient.fetch(query);
  // console.log(pages);
  return res.status(200).json(pages);
}

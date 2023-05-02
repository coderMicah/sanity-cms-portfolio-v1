import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { sanityClient } from "../../sanity";

const query = groq`*[_type == "project"]{
  ...,
  "technologies": technologies[]->{
    "image": image.asset->url
  }
}`;

export default async function handler(req,res) {
  const projects = await sanityClient.fetch(query);
  return res.status(200).json(projects);
}


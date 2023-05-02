import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { sanityClient } from "../../sanity";

const query = groq`*[_type == "skill"]`;


export default async function handler(req,res) {
  const skills = await sanityClient.fetch(query);
  return res.status(200).json(skills);
}


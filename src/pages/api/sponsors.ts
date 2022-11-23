import type { APIContext } from 'astro';
import sponsors from "../../data/sponsors.json"

export async function get(context: APIContext) {
  return {
    body: JSON.stringify(sponsors)
  };
}

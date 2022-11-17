import type { APIContext } from 'astro';

export async function get(context: APIContext) {
  return {
    body: JSON.stringify({
      bronze: [
        {
          name: "hallwayAD",
          message: "Architectural & Graphics Design Agency.",
          start_at: "19/4/2022",
          months: "3",
          url: "https://t.me/hallwayAD",
          img: context.site + "img/sponsors/hallwayAD/squared.webp",
          webImg: context.site + "img/sponsors/hallwayAD/wide.webp",
        },
        {
          name: "R. Baldokin",
          message: "Marketer & Social Media Manager ayudando a las Marcas a ser más relevantes en el mundo en digital.",
          start_at: "19/6/2022",
          months: "12",
          url: "https://t.me/KATAPVLTA",
          img: context.site + "img/sponsors/baldokin/squared.webp",
          webImg: context.site + "img/sponsors/baldokin/wide.webp",
        },
        {
          name: "Academia Efectivida",
          message: "Academia de desarrollo personal.",
          start_at: "18/3/2022",
          months: "12",
          url: "https://www.efectivida.es/",
          img: context.site + "img/sponsors/efectivida/squared.webp",
          webImg: context.site + "img/sponsors/efectivida/wide.webp",
        },
        {
          name: "Productiveness",
          message: "The best place to discover productivit apps",
          start_at: "18/3/2022",
          months: "12",
          url: "https://www.productiveness.net",
          img: context.site + "img/sponsors/productiveness/squared.webp",
          webImg: context.site + "img/sponsors/productiveness/wide.webp",
        },
      ],
      silver: [],
      golden: [],
      diamond: [],
    }),
  };
}

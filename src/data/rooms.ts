/** The four guest rooms. Feeds the Home card grid, the Rooms zig-zag rows,
 *  and the Rooms comparison table — one source so rates can't drift between
 *  the three places they appear. */
export interface Room {
  name: string;
  rate: string;
  /** "Harbor view" or "Garden side" — the eyebrow on the Rooms page. */
  side: string;
  /** Short copy for the Home page card. */
  cardBlurb: string;
  /** Longer copy for the Rooms page row. */
  blurb: string;
  tags: string[];
  slotHome: string;
  slotRooms: string;
  /** One photo per room — the Home card and the Rooms row show the same shot. */
  src: string;
  alt: string;
  /** Comparison-table cells. */
  bed: string;
  view: string;
  sqft: string;
  bath: string;
  sleeps: string;
  pets: boolean;
}

export const rooms: Room[] = [
  {
    name: "King Harbor",
    rate: "$329",
    side: "Harbor view",
    cardBlurb:
      "Harbor-facing with a king bed and a clawfoot tub under the window. The room people rebook a year out.",
    blurb:
      "The one people rebook before they've checked out. A king bed under harbor-facing windows and a clawfoot tub you can soak in while the boats come and go.",
    tags: ["Harbor-facing", "King bed", "Clawfoot tub", "Sleeps 2"],
    slotHome: "King Harbor room: king bed, harbor window, clawfoot tub",
    slotRooms: "King Harbor: king bed, harbor-facing windows, clawfoot tub",
    src: "/photos/room-king-harbor.webp",
    alt: "A king bed with an antique headboard, dresser and bright windows",
    bed: "King",
    view: "Harbor",
    sqft: "340",
    bath: "Clawfoot tub",
    sleeps: "2",
    pets: false,
  },
  {
    name: "Captain's Suite",
    rate: "$445",
    side: "Harbor view",
    cardBlurb:
      "The corner suite with a separate sitting room and the best light in the house, morning and evening both.",
    blurb:
      "The corner suite, with a separate sitting room and windows on two sides — the best light in the house, morning sun and evening gold both. Room to actually settle in.",
    tags: ["Corner suite", "Sitting room", "King bed", "Sleeps 2–3"],
    slotHome: "Captain's Suite: corner room, sitting area, big windows",
    slotRooms:
      "Captain's Suite: corner room, sitting room, big windows, best light",
    src: "/photos/room-captains-suite.webp",
    alt: "A corner room with a wooden bed, chandelier and windows on two walls",
    bed: "King",
    view: "Harbor",
    sqft: "480",
    bath: "Tub + shower",
    sleeps: "2–3",
    pets: true,
  },
  {
    name: "Queen Garden",
    rate: "$259",
    side: "Garden side",
    cardBlurb:
      "On the quiet side over the garden, with a writing desk by the window. The one the regulars ask for to read.",
    blurb:
      "On the quiet side over the garden, with a writing desk tucked by the window. The room the regulars ask for when they've brought a stack of books and no plans.",
    tags: ["Garden view", "Queen bed", "Writing desk", "Sleeps 2"],
    slotHome: "Queen Garden room: queen bed, garden view, writing desk",
    slotRooms: "Queen Garden: queen bed, garden view, writing desk by window",
    src: "/photos/room-queen-garden.webp",
    alt: "A queen bed beside a white writing desk under a curtained window",
    bed: "Queen",
    view: "Garden",
    sqft: "290",
    bath: "Shower",
    sleeps: "2",
    pets: false,
  },
  {
    name: "Twin Garden",
    rate: "$239",
    side: "Garden side",
    cardBlurb:
      "Two twins on the garden side — the easy choice for friends traveling together who'd like their own bed.",
    blurb:
      "Two twins on the garden side — the easy answer for friends traveling together who'd each like their own bed. Same quiet garden view, same breakfast in the morning.",
    tags: ["Garden view", "Two twins", "Shower", "Sleeps 2"],
    slotHome: "Twin Garden room: two twin beds, garden view",
    slotRooms: "Twin Garden: two twin beds, garden view",
    src: "/photos/room-twin-garden.webp",
    alt: "Two twin beds either side of a wardrobe, windows on the garden",
    bed: "Two twins",
    view: "Garden",
    sqft: "300",
    bath: "Shower",
    sleeps: "2",
    pets: false,
  },
];

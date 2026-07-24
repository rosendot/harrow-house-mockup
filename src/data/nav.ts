/** The mega-menu structure. Identical on every page in the design source —
 *  only the `.active` marker moved, which the Header now derives from the
 *  current route. Drives both the desktop panels and the mobile drawer. */
export interface MegaLink {
  label: string;
  href: string;
  blurb: string;
}

export interface MegaColumn {
  heading: string;
  links: MegaLink[];
}

export interface NavItem {
  label: string;
  href: string;
  /** Present when the item opens a mega panel. */
  columns?: MegaColumn[];
  /** Panel width — the design uses 3 columns for Rooms, 2 for Events. */
  cols?: 2 | 3;
}

export const navItems: NavItem[] = [
  {
    label: "Rooms",
    href: "/rooms/",
    cols: 3,
    columns: [
      {
        heading: "Harbor View",
        links: [
          {
            label: "King Harbor",
            href: "/rooms/",
            blurb: "Harbor-facing, king bed, clawfoot tub",
          },
          {
            label: "Captain's Suite",
            href: "/rooms/",
            blurb: "Corner suite with a sitting room and the best light",
          },
        ],
      },
      {
        heading: "Garden Side",
        links: [
          {
            label: "Queen Garden",
            href: "/rooms/",
            blurb: "Quiet side, garden view, writing desk",
          },
          {
            label: "Twin Garden",
            href: "/rooms/",
            blurb: "Two twins — good for friends traveling together",
          },
        ],
      },
      {
        heading: "Amenities",
        links: [
          {
            label: "Breakfast included",
            href: "/rooms/",
            blurb: "Made in-house, served till 10",
          },
          {
            label: "Harbor deck",
            href: "/",
            blurb: "Coffee and the morning boats",
          },
          {
            label: "Bikes",
            href: "/visit/",
            blurb: "Borrow a pair to ride into town",
          },
        ],
      },
    ],
  },
  { label: "Dining", href: "/dining/" },
  {
    label: "Events",
    href: "/events/",
    cols: 2,
    columns: [
      {
        heading: "Occasions",
        links: [
          {
            label: "Weddings",
            href: "/events/",
            blurb: "Buy out the house for the weekend",
          },
          {
            label: "Retreats",
            href: "/events/",
            blurb: "Fourteen rooms and room to think",
          },
          {
            label: "Private Dinners",
            href: "/events/",
            blurb: "The porch, one long table",
          },
        ],
      },
      {
        heading: "Spaces",
        links: [
          {
            label: "The Parlor",
            href: "/events/",
            blurb: "Seats 30, fireplace and piano",
          },
          {
            label: "The Boathouse",
            href: "/events/",
            blurb: "Seats 60, right on the water",
          },
          {
            label: "The Lawn",
            href: "/events/",
            blurb: "Seats 120 under the tent",
          },
        ],
      },
    ],
  },
  { label: "The Inn", href: "/the-inn/" },
  { label: "Visit", href: "/visit/" },
];

/** The mobile drawer. Not derived from `navItems` — the source's drawer lists
 *  differ from the mega panels (Rooms shows the four rooms without the
 *  amenities column), so the two are kept separate on purpose. */
export interface DrawerItem {
  label: string;
  href: string;
  sub?: { label: string; href: string }[];
}

export const drawerItems: DrawerItem[] = [
  {
    label: "Rooms",
    href: "/rooms/",
    sub: [
      { label: "King Harbor", href: "/rooms/" },
      { label: "Captain's Suite", href: "/rooms/" },
      { label: "Queen Garden", href: "/rooms/" },
      { label: "Twin Garden", href: "/rooms/" },
    ],
  },
  { label: "Dining", href: "/dining/" },
  {
    label: "Events",
    href: "/events/",
    sub: [
      { label: "Weddings", href: "/events/" },
      { label: "Retreats", href: "/events/" },
      { label: "Private Dinners", href: "/events/" },
      { label: "The Parlor", href: "/events/" },
      { label: "The Boathouse", href: "/events/" },
      { label: "The Lawn", href: "/events/" },
    ],
  },
  { label: "The Inn", href: "/the-inn/" },
  { label: "Visit", href: "/visit/" },
];

export const site = {
  name: "Badlands TMS",
  logo: "/images/logo.png",
  phone: "(555) 000-0000",
  phoneHref: "tel:+15550000000",
  address: "2239 Northeast Doctors Drive, Suite 110, Bend, OR 97701",
  addressLines: [
    "2239 Northeast Doctors Drive, Suite 110",
    "Bend, OR 97701",
  ],
  hours: {
    days: "Monday – Friday",
    time: "8:30 AM – 5:00 PM",
    display: "Monday – Friday, 8:30 AM – 5:00 PM",
  },
  website: "https://www.badlandstms.com",
  email: "admin@badlandstms.com",
  emailHref: "mailto:admin@badlandstms.com",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=2239+Northeast+Doctors+Drive+Suite+110+Bend+OR+97701",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=2239+Northeast+Doctors+Drive+Suite+110,+Bend,+OR+97701&z=15&output=embed",
  brainswayVideoEmbedUrl: "https://www.youtube.com/embed/LT-CWYi4Spk",
  brainswayVideoTitle: "Badlands TMS Provides BrainsWay Deep TMS Technology",
  social: {
    facebook: "https://www.facebook.com/badlandstms",
  },
} as const;

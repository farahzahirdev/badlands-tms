export const site = {
  name: "Badlands TMS",
  logo: "/images/logo.png",
  phone: "(458) 763-0839",
  phoneHref: "tel:+14587630839",
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
  mapsUrl: "https://maps.app.goo.gl/D1uFHTiLguo2WkoH8",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2866.629!2d-121.2661238!3d44.0703643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54b8c51c96b8e6f5%3A0xa4f86b1af5edc7b2!2sBadlands%20TMS!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus",
  brainswayVideoEmbedUrl: "https://www.youtube.com/embed/LT-CWYi4Spk",
  brainswayVideoTitle: "Badlands TMS Provides BrainsWay Deep TMS Technology",
  social: {
    facebook: "https://www.facebook.com/badlandstms",
  },
  /** Landing-page conversion destinations */
  routes: {
    bookConsult: "/book-consult",
    thankYouConsult: "/thank-you/consult",
    inquiry: "/#contact",
  },
  /**
   * GHL embeds — paste calendar/form snippets when provided.
   * Calendar: "Book a Free 10 Minute Consultation"
   */
  ghl: {
    calendarName: "Book a Free 10 Minute Consultation",
    calendarEmbedHtml: "",
  },
} as const;

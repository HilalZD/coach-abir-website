export interface Workshop {
  id: string
  title: { ar: string; en: string }
  shortDesc: { ar: string; en: string }
  fullDesc: { ar: string; en: string }
  date: { ar: string; en: string }
  location: { ar: string; en: string }
  duration: { ar: string; en: string }
  price: { ar: string; en: string }
  images: string[]   // array of image paths inside /public — e.g. ["/workshops/img1.jpg", "/workshops/img2.jpg"]
  formUrl: string    // Google Form embed src URL
  status: 'upcoming' | 'soldout' | 'completed'
}

/*
 * ─────────────────────────────────────────────────────────────────────────────
 * HOW TO ADD A NEW WORKSHOP
 *   1. Copy one of the objects below
 *   2. Paste it at the TOP of the array (newest appears first)
 *   3. Fill in every field in Arabic AND English
 *   4. Add images to /public/workshops/ and list them in the images array
 *      • 1 image  → single display
 *      • Multiple → carousel for upcoming/soldout, photo gallery for completed
 *   5. Create a Google Form, get the embed URL, paste it into formUrl
 *   6. Save — the workshop appears on the page immediately
 *
 * HOW TO MARK AS SOLD OUT OR COMPLETED
 *   Change  status: 'upcoming'  →  status: 'soldout'   or  status: 'completed'
 *   The form hides and the appropriate message appears automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const workshops: Workshop[] = [
 // ── EXAMPLE 1: Upcoming ─────────────────────────────────────────────────
 /* {
   id: "self-love-2026",
   title: {
     ar: "[WORKSHOP_1_TITLE_AR]",
     en: "[WORKSHOP_1_TITLE_EN]",
   },
   shortDesc: {
    ar: "[WORKSHOP_1_SHORT_AR]",
      en: "[WORKSHOP_1_SHORT_EN]",
   },
   fullDesc: {
     ar: "[WORKSHOP_1_FULL_AR]",
     en: "[WORKSHOP_1_FULL_EN]",
   },
   date: {
     ar: "[DATE_AR]",
     en: "[DATE_EN]",
   },
   location: {
     ar: "[LOCATION_AR]",
     en: "[LOCATION_EN]",
   },
   duration: {
     ar: "[DURATION_AR]",
     en: "[DURATION_EN]",
   },
   price: {
     ar: "[PRICE_AR]",
     en: "[PRICE_EN]",
   },
   images: ["/workshops/placeholder.svg"],
   formUrl: "[GOOGLE_FORM_EMBED_URL_1]",
  status: "upcoming",
  },
*/
  // ── EXAMPLE 2: soldout ──────────────────────────────────────────────────
  {
    id: "confidence-2025",
    title: {
      ar: "The Shift - ولادة هوية جديدة",
      en: "The Shift - ولادة هوية جديدة",
    },
    shortDesc: {
      ar: "هذا برنامج لإعادة بناء الهوية من الداخل بشكل كامل",
      en: "This is a program for fully rebuilding your identity from within.",
    },
    fullDesc: {
      ar: "هذا برنامج لإعادة بناء الهوية من الداخل بشكل كامل، حيث يساعدك على تفكيك الأنماط القديمة مثل دور الضحية، وفهم المكاسب الخفية من البقاء في الألم، والعمل على الجروح العميقة مثل الهجر والتعلق، ومواجهة الجوانب غير الواعية التي تقود سلوكك. ومن هناك تبدأين ببناء هوية جديدة تقوم على تغيير علاقتك بالمال والاستحقاق، ووضع حدود صحية في العلاقات، واعتماد روتين يومي يثبت هذا التحول ويجعله جزءاً من حياتك",
      en: "This is a program for fully rebuilding your identity from within. It helps you unpack old patterns like victimhood, understand the hidden benefits of staying in pain, and work through deep wounds such as abandonment and attachment, while also facing the unconscious parts that drive your behavior. From there, you begin to build a new identity by shifting your relationship with money and self-worth, setting healthy boundaries in relationships, and creating a daily routine that anchors and sustains this transformation in your life.",
    },
    date: {
      ar: "16/05/2026",
      en: "16/05/2026",
    },
    location: {
      en: "Semqanieh, Mount Lebanon",
      ar: "السمقانية, جبل لبنان",
    },
    duration: {
      ar: "3h/week لشهرين",
      en: "3h/week for 2 months",
    },
    price: {
      ar: "750$",
      en: "750$",
    },
    images: ["/workshops/theshift.jpg"],
    formUrl: "[GOOGLE_FORM_EMBED_URL_2]",
    status: "soldout",
  },

 // ── EXAMPLE 3: Completed (multi-image gallery example) ───────────────────
 /* {
    id: "mindfulness-2025",
    title: {
      ar: "[WORKSHOP_3_TITLE_AR]",
      en: "[WORKSHOP_3_TITLE_EN]",
    },
    shortDesc: {
      ar: "[WORKSHOP_3_SHORT_AR]",
      en: "[WORKSHOP_3_SHORT_EN]",
    },
    fullDesc: {
      ar: "[WORKSHOP_3_FULL_AR]",
      en: "[WORKSHOP_3_FULL_EN]",
    },
    date: {
      ar: "[DATE_AR]",
      en: "[DATE_EN]",
    },
    location: {
      ar: "[LOCATION_AR]",
      en: "[LOCATION_EN]",
    },
    duration: {
      ar: "[DURATION_AR]",
      en: "[DURATION_EN]",
    },
    price: {
      ar: "[PRICE_AR]",
      en: "[PRICE_EN]",
    },
    images: [
      "/workshops/placeholder.svg",
      "/workshops/placeholder.svg",
      "/workshops/placeholder.svg",
    ],
    formUrl: "[GOOGLE_FORM_EMBED_URL_3]",
    status: "completed",
  },*/
] 

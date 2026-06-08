# دليل الإعداد والنشر — موقع الكوتشينغ
## Life Coaching Website — Setup Guide

---

## 1. GETTING STARTED

### Prerequisites
- Node.js 18+ installed ([nodejs.org](https://nodejs.org))
- npm or yarn

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production
```bash
npm run build
npm start
```

---

## 2. REPLACING PLACEHOLDERS

All editable content lives in one file: **`/config/site.config.ts`**

Open it and replace each value:

| Field | What to put |
|---|---|
| `coachName` | Your full name or brand name (e.g., "سارة الخوري") |
| `tagline` | One-line description for SEO meta |
| `heroHeadline` | Homepage H1 — first word will be highlighted in gold |
| `heroSubline` | Sub-headline beneath the H1 |
| `storyTitle` | Heading for "My Story" section |
| `storyPara1` | First story paragraph |
| `storyPara2` | Second story paragraph |
| `youtubeUrl` | Your YouTube video URL (e.g., `https://www.youtube.com/embed/VIDEO_ID`) |
| `statYears` | Years of experience (default: "١٤+") |
| `statClients` | Number of clients (e.g., "٥٠٠+") |
| `statSessions` | Number of sessions (e.g., "٢٠٠٠+") |
| `whatsapp` | Your WhatsApp number with country code (e.g., "+96171234567") |
| `whatsappMessage` | Pre-filled message when user clicks WhatsApp |
| `email` | Your email address |
| `instagram` | Full Instagram URL (e.g., "https://instagram.com/yourhandle") |
| `facebook` | Full Facebook page URL |
| `location` | Google Maps URL for your location |
| `telegram` | Full Telegram link (e.g., "https://t.me/yourhandle") |
| `sessionOriginalPrice` | Original session price shown with strikethrough (e.g., "$110") |
| `sessionPrice` | Launch/discounted price shown prominently (e.g., "$99") |
| `sessionDesc` | 1-2 sentence description of the private session |
| `bookingCalendarUrl` | Google Calendar Appointment Scheduling URL (see Section 3) |
| `bookingIntro` | Subtitle on the booking page |
| `termsUrl` | URL to your Terms & Conditions page |
| `disclaimerUrl` | URL to your Disclaimer page |
| `audienceTags` | Array of 6 audience tags (who this is for) |
| `transformations` | Array of 4 transformation statements |
| `testimonials` | Array of 4 testimonials (name, role, text, emoji) |

### Adding the real coach photo

1. Take a high-quality photo (minimum 400×520px)
2. Name it `coach-photo.jpg`
3. Replace `/public/coach-photo.svg` with your `coach-photo.jpg`
4. In `components/Hero.tsx`, update the `src` prop:
   ```tsx
   src="/coach-photo.jpg"
   ```
5. Remove the developer label div:
   ```tsx
   // Delete this block:
   <div className="absolute -bottom-6 ...">
     <span className="pill-badge" ...>صورة الكوتش هنا</span>
   </div>
   ```

---

## 3. إعداد التقويم لحجز الجلسات — SETTING UP GOOGLE CALENDAR BOOKING

الصفحة الآن تعرض تقويم Google لحجز الجلسة مباشرةً. يظهر placeholder للمطوّر حتى تضيفي رابط التقويم.
The booking page now shows a Google Calendar embed. A placeholder is shown until you add your calendar URL.

### الخطوة 1 — إنشاء برنامج مواعيد / Step 1 — Create an Appointment Schedule
1. افتحي [calendar.google.com](https://calendar.google.com) وسجّلي الدخول
2. اضغطي **Create** ← **Appointment schedule**
3. اكتبي العنوان: "جلسة خاصة 1 to 1"
4. حدّدي المدة: **60 دقيقة**
5. حدّدي أوقات التوفّر (مثلاً: الاثنين–الجمعة 10ص–6م)
6. أضيفي buffer بين الجلسات (يُنصح: 15 دقيقة)
7. حدّدي الحد الأقصى لعدد الجلسات اليومية (يُنصح: 4–5)
8. حدّدي الحد الأدنى للإشعار المسبق (يُنصح: 24 ساعة)
9. اضغطي **Next**

### الخطوة 2 — إعداد صفحة الحجز / Step 2 — Configure the booking page
1. أضيفي سؤالاً اختيارياً: "ما الذي تودّين العمل عليه؟"
2. فعّلي التذكيرات التلقائية (24 ساعة + ساعة واحدة قبل الجلسة)
3. أضيفي رسالة التأكيد: "أراكِ في الجلسة — يسعدني مرافقتكِ ✨"
4. اضغطي **Save**

### الخطوة 3 — احصلي على رابط الحجز / Step 3 — Get the booking URL
1. بعد الحفظ، اضغطي **Open booking page**
2. انسخي الرابط — يبدأ بـ: `https://calendar.app.google/...`

### الخطوة 4 — أضيفيه إلى site.config.ts / Step 4 — Add to site.config.ts
```ts
bookingCalendarUrl: "https://calendar.app.google/AbCdEfGhIjKlMn",
```
احفظي — يظهر التقويم في صفحة الحجز فوراً بدون أي تعديلات إضافية.
Save — the calendar appears on the booking page immediately.

### ملاحظات مهمة / Important notes
- **بدون دفع مسبق:** حجز المواعيد مجاني. تتلقّين الدفع لاحقاً عبر واتساب أو تحويل مصرفي
- **مع دفع مسبق:** يتطلب حساب Google Workspace Individual ($9.99/شهر)
- التقويم يرسل تلقائياً: تأكيد بالبريد + رابط الجلسة (Zoom/Meet) + تذكيرات قبل الجلسة
- **بديل:** [Calendly](https://calendly.com) أسهل للإعداد وأكثر مرونة — الخطة المجانية تكفي لنوع حجز واحد

---

## 4. إدارة الورش — MANAGING WORKSHOPS

جميع الورش تُدار من ملف واحد: **`/config/workshops.config.ts`**
All workshops are managed from a single file: **`/config/workshops.config.ts`**

### كيف تضيف ورشة جديدة / How to add a new workshop
1. افتحي `/config/workshops.config.ts`
2. انسخي ورشة موجودة بالكامل (من `{` إلى `}`) والصقيها **في أعلى المصفوفة** (الأحدث أولاً)
3. عدّلي جميع الحقول بالعربي والإنجليزي
4. أضيفي الصور إلى `/public/workshops/` وأدرجيها في حقل `images`
5. احفظي — تظهر الورشة فوراً

### كيف تضيف صور متعددة / How to add multiple images
ضعي كل الصور في `/public/workshops/` ثم أدرجيها كمصفوفة:
```ts
images: [
  "/workshops/self-love-1.jpg",
  "/workshops/self-love-2.jpg",
  "/workshops/self-love-3.jpg",
],
```
- **صورة واحدة** → تُعرض مباشرةً
- **ورشة قادمة / نفدت المقاعد + صور متعددة** → سلايدر (Carousel) بأزرار تنقل يدوي
- **ورشة انتهت + صور متعددة** → شبكة صور Gallery — مثالية لصور الحدث

### كيف تحذف ورشة / How to remove a workshop
احذفي الكائن بالكامل (من `{` إلى `}` بما فيها الفاصلة) واحفظي.

### كيف تغيّري حالة ورشة / How to change workshop status
```ts
status: 'upcoming'   // ورشة قادمة — يظهر نموذج التسجيل
status: 'soldout'    // نفدت المقاعد — يُخفى النموذج ويظهر زر واتساب
status: 'completed'  // انتهت — يُخفى النموذج وتظهر رسالة الانتهاء
```

### ربط Google Form بورشة / Connecting a Google Form to a workshop
كل ورشة لها `formUrl` خاص بها:
```ts
formUrl: "https://docs.google.com/forms/d/e/YOUR_ID/viewform?embedded=true",
```
اربطيه بـ Google Sheet (علامة تبويب Responses ← أيقونة Sheets) لتسجيل كل الطلبات تلقائياً.

---

## 5. DEPLOYING TO VERCEL

### First deployment
```bash
# Install Vercel CLI (one-time)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

Vercel will auto-detect Next.js and configure everything.

### Adding a custom domain
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your project → **Settings** → **Domains**
3. Click **Add Domain** → enter your domain (e.g., `www.yourcoach.com`)
4. Vercel shows you DNS records to add
5. Go to your domain registrar (GoDaddy, Namecheap, etc.) → DNS settings
6. Add the CNAME / A record provided by Vercel
7. Wait 5-30 minutes for DNS propagation

### Auto-deploy on git push
Connect your GitHub repo in the Vercel dashboard — every `git push` to `main` deploys automatically.

---

## 6. MANAGING WORKSHOPS (English quick-reference)

> الإرشادات المفصّلة والثنائية اللغة موجودة في **القسم 4** أعلاه.
> Full bilingual instructions are in **Section 4** above. This section is a quick English reference.

### Adding a new workshop

Full workshop object format (copy this):
```ts
{
  id: "unique-id-2026",           // lowercase, no spaces, must be unique
  title:     { ar: "عنوان الورشة",   en: "Workshop Title" },
  shortDesc: { ar: "وصف قصير",      en: "Short description" },
  fullDesc:  { ar: "وصف مفصّل...",  en: "Full description..." },
  date:      { ar: "١٥ يونيو ٢٠٢٦", en: "June 15, 2026" },
  location:  { ar: "بيروت، لبنان",  en: "Beirut, Lebanon" },
  duration:  { ar: "٣ ساعات",       en: "3 hours" },
  price:     { ar: "٨٠$",           en: "$80" },
  images: ["/workshops/your-image.jpg"],   // array — add more for carousel/gallery
  formUrl:   "https://docs.google.com/forms/d/e/YOUR_ID/viewform?embedded=true",
  status:    "upcoming",
}
```

Paste at the **top** of the array (newest first). Save — appears immediately.

### Adding workshop images

1. Drop JPG/PNG files (800×600px, 4:3 ratio) into `/public/workshops/`
2. List them in the `images` array:
   ```ts
   images: ["/workshops/ws-1.jpg", "/workshops/ws-2.jpg", "/workshops/ws-3.jpg"],
   ```
3. 1 image → single display | Multiple + upcoming/soldout → carousel | Multiple + completed → gallery grid

### Status cheatsheet
| Status | What appears |
|---|---|
| `upcoming` | Registration form (Google Form embed) |
| `soldout` | Carousel + WhatsApp waitlist button |
| `completed` | Photo gallery grid + "ended" message |

### Connecting a Google Form to a specific workshop

Each workshop has its own `formUrl`. To connect a real registration form:

1. Go to [forms.google.com](https://forms.google.com) and create a form for that workshop
2. In the form, click **Send** → **< >** (Embed tab) → copy the `src` URL
3. Paste it as the `formUrl` for that workshop:
   ```ts
   formUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
   ```
4. Save — the embedded form appears inside the expanded workshop panel

> **Tip:** Link each form to a Google Sheet (Form → Responses → Sheets icon) to automatically record all registrations.

---

## 7. UPDATING CONTENT AFTER LAUNCH

| What to update | Where to edit |
|---|---|
| All text, prices, links | `/config/site.config.ts` |
| Session price / launch price | `sessionPrice` and `sessionOriginalPrice` in `site.config.ts` |
| Session description | `sessionDesc` in `site.config.ts` |
| Booking Google Form | `sessionFormUrl` in `site.config.ts` |
| Coach photo | `/public/coach-photo.jpg` |
| Testimonials | `testimonials` array in `site.config.ts` |
| Workshops (add/edit/remove) | `/config/workshops.config.ts` |
| Page metadata / SEO | `app/layout.tsx` and each page's `metadata` export |
| Color palette | `tailwind.config.ts` and `styles/globals.css` |
| Fonts | `app/layout.tsx` (Tajawal weights, Playfair variants) |

---

## 8. PROJECT STRUCTURE REFERENCE

```
/app
  /page.tsx              ← Homepage (server component)
  /book/
    page.tsx             ← Booking page (server, exports metadata)
    BookingClient.tsx    ← Booking interactive state (client)
  /workshops/
    page.tsx             ← Workshops page (server, exports metadata)
    WorkshopsClient.tsx  ← Workshops content (client)
  /layout.tsx            ← Root layout: RTL, fonts, metadata
/components
  Navbar.tsx             ← Sticky navbar with mobile drawer
  Hero.tsx               ← Two-column hero section
  CTAButtons.tsx         ← Three gold CTA buttons
  WaveDivider.tsx        ← SVG wave between sections
  MyStory.tsx            ← Story section with YouTube embed
  WhoIsThis.tsx          ← Audience & transformations
  Testimonials.tsx       ← Drag/touch carousel
  Footer.tsx             ← Social links + legal
  BookingOptions.tsx     ← Three session cards
  BookingForm.tsx        ← Dynamic form with AnimatePresence
/config
  site.config.ts         ← ← ← ALL SITE PLACEHOLDERS HERE
  workshops.config.ts    ← ← ← ADD / EDIT WORKSHOPS HERE
/public
  coach-photo.svg        ← Replace with real photo
  /workshops/
    placeholder.svg      ← Default image until real photo added
    (your images here)   ← Drop workshop JPGs/PNGs here
/styles
  globals.css            ← RTL base, .btn-gold, .form-input, etc.
```

---

## 9. NOTES & TIPS

- **RTL layout**: The entire site is right-to-left. Phone/email inputs use `direction: ltr` automatically.
- **Fonts**: Tajawal is loaded via `next/font` for zero layout shift. Playfair Display is for decorative accents only.
- **Buttons**: Every button uses the `.btn-gold` CSS class. Do not create outline or pink variants.
- **Images**: Use `next/image` for all images — it auto-optimizes and lazy-loads.
- **SEO**: Each page exports its own `metadata`. Update titles and descriptions in `site.config.ts`.
- **Performance**: The site is static-first with no server-side data fetching, so it loads fast on all connections.

'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'

export default function TermsPage() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  const title = isRTL ? 'الشروط والأحكام' : 'Terms & Conditions'
  const subtitle = isRTL
    ? 'يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام موقعنا'
    : 'Please read these Terms & Conditions carefully before using our website'

  const content = isRTL
    ? `الشروط والأحكام

الكوتش عبير خضر — كوتشينج حياة وتنويم إيحائي إكلينيكي
الموقع: abirkhodor.com
آخر تحديث: حزيران ٢٠٢٦

باستخدامك لهذا الموقع (abirkhodor.com) وحجزك لأي خدمة، فإنك توافق على الشروط والأحكام التالية. يُرجى قراءتها بعناية.

١. من نحن
يُدار موقع abirkhodor.com من قبل الكوتش عبير خضر، ويقدّم خدمات احترافية في كوتشينج الحياة والتنويم الإيحائي الإكلينيكي للأفراد والمجموعات، سواء عبر الإنترنت أو حضورياً.

٢. الخدمات
نقدّم جلسات فردية في الكوتشينج والتنويم الإيحائي الإكلينيكي، بالإضافة إلى ورش عمل وتدريبات جماعية. تُعرض تفاصيل الخدمات ومدّة الجلسات والأسعار بوضوح على الموقع، وذلك وفقاً لقانون حماية المستهلك اللبناني (القانون رقم ٦٥٩/٢٠٠٥) وقانون المعاملات الإلكترونية والبيانات ذات الطابع الشخصي (القانون رقم ٨١/٢٠١٨).

٣. الأسعار والشفافية
- تُعرض جميع الأسعار بوضوح على الموقع قبل الحجز.
- السعر المعروض عند الحجز هو السعر الذي ستدفعه، ولن يُفرض أي مبلغ أعلى من السعر المُعلن.
- أي خصم ترويجي أو خصم إطلاق يكون صالحاً فقط للمدة أو الكمية المذكورة. وفي حال عدم تحديد مدة، يكون العرض صالحاً لمدة شهر واحد من تاريخ نشره.
- تُعلَن جميع الرسوم المطبّقة مسبقاً، ولن تُضاف أي رسوم خفية.

٤. الحجز والدفع
- تُحجز الجلسات من خلال نظام الحجز الرسمي على الموقع.
- يتم الدفع عبر تطبيق WHISH على الرقم المُرسَل في تأكيد الحجز.
- لا يُعتبر الحجز مؤكداً إلا بعد استلام الدفعة وتأكيدها.
- سيتم إرسال تأكيد إلى بريدك الإلكتروني عند إتمام الحجز بنجاح.

٥. الإلغاء وإعادة الجدولة والاسترداد
- يمكنك إلغاء الجلسة أو إعادة جدولتها مجاناً قبل ٢٤ ساعة من الموعد المحدّد، مع الحصول على استرداد كامل أو موعد بديل.
- الإلغاء الذي يتم قبل أقل من ٢٤ ساعة من الجلسة غير قابل للاسترداد.
- وفقاً لقانون المعاملات الإلكترونية، يحق لك إلغاء خدمة محجوزة خلال عشرة (١٠) أيام من الحجز، باستثناء الحالات التي تكون فيها الخدمة قد قُدّمت جزئياً أو كلياً، أو إذا كانت خدمة مخصّصة.
- في حال قمنا بإلغاء أو إعادة جدولة جلسة أو ورشة لأي سبب، سيتم منحك استرداداً كاملاً أو موعداً بديلاً من اختيارك.

٦. ورش العمل
- يتم تأكيد التسجيل في الورشة عند الدفع.
- رسوم الورشة قابلة للاسترداد قبل ٢٤ ساعة من موعد الورشة، وبعد ذلك تصبح غير قابلة للاسترداد، ولكن يمكن تحويلها إلى مشارك آخر بإشعار مسبق.
- نحتفظ بالحق في إعادة جدولة أو إلغاء أي ورشة بسبب عدم اكتمال العدد أو لظروف طارئة، وفي هذه الحالة سيتم عرض استرداد كامل.

٧. طبيعة الخدمات
خدماتنا مخصّصة للتطوير الشخصي، الوعي الذاتي، والعافية العامة. وهي خدمات تكميلية ولا تُعتبر بديلاً عن العلاج الطبي أو النفسي أو العلاج المتخصّص المرخّص. يُرجى الرجوع إلى صفحة "إخلاء المسؤولية" للاطلاع على التفاصيل الكاملة.

٨. السرّية
تُعامَل جميع المعلومات الشخصية ومحتوى جميع الجلسات بسرّية تامة، ولن يتم الكشف عنها لأي طرف ثالث دون موافقتك الخطّية، إلا في الحالات التي يفرض فيها القانون اللبناني ذلك.

٩. حماية البيانات والخصوصية
- وفقاً لقانون المعاملات الإلكترونية والبيانات ذات الطابع الشخصي (القانون رقم ٨١/٢٠١٨)، تُجمَع بياناتك الشخصية وتُعالَج بشكل قانوني وشفّاف، ولأغراض تقديم خدماتنا فقط.
- لا نبيع أو نؤجّر أو نشارك بياناتك الشخصية مع أي طرف ثالث دون موافقتك الصريحة.
- يحق لك الوصول إلى بياناتك الشخصية أو تصحيحها أو طلب حذفها في أي وقت عبر التواصل معنا.
- قد تُخزَّن معلومات الحجز باستخدام خدمات طرف ثالث (مثل Google Calendar) لغرض جدولة وإدارة جلساتك فقط.

١٠. الملكية الفكرية
جميع محتويات هذا الموقع — بما في ذلك النصوص والصور والرسومات والشعارات والفيديوهات ومواد الورش — هي ملك للكوتش عبير خضر ومحمية بموجب قانون الملكية الفكرية اللبناني، ولا يجوز نسخها أو إعادة إنتاجها أو توزيعها دون إذن خطّي مسبق.

١١. روابط الطرف الثالث
يحتوي هذا الموقع على روابط لمنصّات تابعة لأطراف ثالثة (مثل Instagram وFacebook وWhatsApp وTelegram وخدمات Google). نحن غير مسؤولين عن محتوى أو شروط أو ممارسات الخصوصية لهذه المنصّات الخارجية.

١٢. حدود المسؤولية
إلى أقصى حدّ يسمح به القانون اللبناني، لا تتحمّل الكوتش عبير خضر أي مسؤولية عن أي خسارة غير مباشرة أو تبعية ناتجة عن استخدام هذا الموقع أو الخدمات، بما يتجاوز قيمة الخدمة المشتراة.

١٣. التعديلات
نحتفظ بالحق في تحديث هذه الشروط والأحكام في أي وقت. النسخة المنشورة على الموقع وقت حجزك هي النسخة المطبّقة عليك.

١٤. القانون المُطبّق والاختصاص القضائي
تخضع هذه الشروط والأحكام لقوانين الجمهورية اللبنانية، وأي نزاع يكون من اختصاص المحاكم اللبنانية المختصّة.

١٥. التواصل
لأي استفسار يتعلّق بهذه الشروط والأحكام، يُرجى التواصل معنا عبر المعلومات الموجودة على الموقع.`
    : `TERMS & CONDITIONS

Coach Abir Khodor — Life Coaching & Clinical Hypnotherapy
Website: abirkhodor.com
Last updated: June 2026

By accessing and using this website (abirkhodor.com) and booking any service, you agree to the following Terms & Conditions. Please read them carefully.

1. ABOUT US
abirkhodor.com is operated by Abir Khodor, providing professional life coaching and clinical hypnotherapy services to individuals and groups, delivered online or in person.

2. SERVICES
We offer one-on-one coaching and clinical hypnotherapy sessions, as well as group workshops and trainings. Service descriptions, session durations, and prices are displayed clearly on the website in accordance with the Lebanese Consumer Protection Law (Law No. 659/2005) and the Electronic Transactions Law (Law No. 81/2018).

3. PRICING & TRANSPARENCY
- All prices are displayed clearly on the website before booking.
- The price shown at the time of booking is the price you will pay; we do not charge any amount higher than the advertised price.
- Any promotional or launch discount is valid only for the period or quantity stated. Where no period is stated, the offer is valid for one month from the date of publication.
- All applicable fees are disclosed upfront. No hidden charges will be added.

4. BOOKING & PAYMENT
- Sessions are booked through the official booking system on the website.
- Payment is made via WHISH to the number provided in your booking confirmation.
- Your booking is confirmed only once payment has been received and acknowledged.
- A confirmation will be sent to your provided email upon successful booking.

5. CANCELLATION, RESCHEDULING & REFUNDS
- You may cancel or reschedule a session free of charge up to 24 hours before the scheduled time, and receive a full refund or a rescheduled appointment.
- Cancellations made less than 24 hours before the session are non-refundable.
- In line with the Electronic Transactions Law, you may cancel a purchased service within ten (10) days of booking, except where the service has already been partially or fully delivered, or is a custom or personalised service.
- If we cancel or reschedule a session or workshop for any reason, you will be offered a full refund or an alternative date of your choice.

6. WORKSHOPS
- Workshop registration is confirmed upon payment.
- Workshop fees are refundable up to 24 hours before the workshop, after which they become non-refundable but may be transferred to another participant with prior notice.
- We reserve the right to reschedule or cancel a workshop due to insufficient registrations or unforeseen circumstances, in which case a full refund will be offered.

7. NATURE OF SERVICES
Our services are intended for personal development, self-awareness, and general wellbeing. They are complementary services and are not a substitute for licensed medical, psychiatric, or psychological treatment. Please refer to our separate Disclaimer for full details.

8. CONFIDENTIALITY
All personal information and the content of all sessions are treated as strictly confidential and will not be disclosed to any third party without your written consent, except where disclosure is required by Lebanese law.

9. DATA PROTECTION & PRIVACY
- In accordance with the Electronic Transactions and Personal Data Law (Law No. 81/2018), your personal data is collected and processed lawfully, transparently, and only for the purposes of providing our services.
- We do not sell, rent, or share your personal data with third parties without your explicit consent.
- You have the right to access, correct, or request deletion of your personal data at any time by contacting us.
- Booking information may be stored using third-party services (such as Google Calendar) solely for the purpose of scheduling and managing your sessions.

10. INTELLECTUAL PROPERTY
All content on this website — including text, images, graphics, logos, videos, and workshop materials — is the property of Abir Khodor and is protected under Lebanese intellectual property law. It may not be copied, reproduced, or distributed without prior written permission.

11. THIRD-PARTY LINKS
This website contains links to third-party platforms (such as Instagram, Facebook, WhatsApp, Telegram, and Google services). We are not responsible for the content, terms, or privacy practices of these external platforms.

12. LIMITATION OF LIABILITY
To the fullest extent permitted by Lebanese law, Abir Khodor shall not be liable for any indirect or consequential loss arising from the use of this website or the services, beyond the value of the service purchased.

13. AMENDMENTS
We reserve the right to update these Terms & Conditions at any time. The version published on the website at the time of your booking is the version that applies to you.

14. GOVERNING LAW & JURISDICTION
These Terms & Conditions are governed by the laws of the Republic of Lebanon. Any dispute shall be subject to the jurisdiction of the competent Lebanese courts.

15. CONTACT
For any questions regarding these Terms & Conditions, please contact us through the details provided on the website.`

  return (
    <>
      <Navbar />
      <main className="page-content min-h-screen bg-gradient-to-b from-[#FFF9FB] via-[#FEF0F5] to-white">
        {/* Hero Banner */}
        <section
          className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FEF0F5 0%, #FDF7EE 50%, #FEF0F5 100%)',
            padding: '44px 28px 36px',
            textAlign: 'center',
          }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="font-tajawal font-extrabold text-ink-dark mb-3"
              style={{
                fontSize: 'clamp(24px, 5vw, 36px)',
                color: '#A88C56',
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="font-tajawal max-w-md mx-auto"
              style={{
                fontSize: '14px',
                color: '#7A4E6E',
                lineHeight: 1.8,
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {subtitle}
            </motion.p>

            <div
              className="mx-auto mt-5"
              style={{
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, #F4C2D0, #A88C56, #F4C2D0)',
                borderRadius: '2px',
              }}
            />
          </div>
        </section>

        {/* Content Section */}
        <section
          style={{
            padding: '60px 28px',
          }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div
            style={{
              maxWidth: '760px',
              margin: '0 auto',
            }}
          >
            <motion.div
              className="font-tajawal prose prose-sm max-w-none"
              style={{
                fontSize: '14px',
                color: '#3A2030',
                lineHeight: 1.9,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: content
                    .split('\n')
                    .map((line) => {
                      if (line.startsWith('#')) {
                        const level = line.match(/^#+/)![0].length
                        const text = line.replace(/^#+\s/, '')
                        return `<h${level} style="font-weight: 700; margin: 24px 0 12px; color: #A88C56; font-size: ${24 - level * 2}px;">${text}</h${level}>`
                      }
                      if (line.trim() === '') return '<br />'
                      return `<p>${line}</p>`
                    })
                    .join('\n'),
                }}
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

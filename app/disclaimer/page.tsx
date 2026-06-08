'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'

export default function DisclaimerPage() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  const title = isRTL ? 'إخلاء المسؤولية' : 'Disclaimer'
  const subtitle = isRTL
    ? 'يرجى قراءة هذا الإخلاء المسؤولية بعناية'
    : 'Please read this disclaimer carefully'

  const content = isRTL
    ? `إخلاء المسؤولية

الكوتش عبير خضر — كوتشينج حياة وتنويم إيحائي إكلينيكي
الموقع: abirkhodor.com
آخر تحديث: حزيران ٢٠٢٦

يُرجى قراءة إخلاء المسؤولية هذا بعناية قبل استخدام هذا الموقع أو حجز أي خدمة. باستخدامك لموقع abirkhodor.com ومشاركتك في أي جلسة أو ورشة، فإنك تُقرّ بأنك قرأت وفهمت ووافقت على ما يلي.

١. طبيعة الخدمات
الخدمات التي تقدّمها الكوتش عبير خضر — بما في ذلك كوتشينج الحياة، والتنويم الإيحائي الإكلينيكي، وورش العمل، والتدريبات — مخصّصة للتطوير الشخصي، والوعي الذاتي، والتحفيز، وإدارة التوتر، وتغيير العادات، والعافية العامة. وهي خدمات ذات طابع تكميلي وتعليمي.

٢. ليست بديلاً عن العلاج الطبي أو النفسي
هذه الخدمات ليست بديلاً، ولا يُقصد بها أن تحلّ محلّ، الاستشارة الطبية المتخصّصة أو التشخيص أو العلاج، ولا الرعاية النفسية أو العلاج النفسي المرخّص. وهي لا تُشكّل ممارسةً للطبّ أو الطبّ النفسي أو علم النفس الإكلينيكي.

إذا كنت تعاني من حالة طبية، أو اضطراب في الصحة النفسية، أو ضائقة نفسية، أو أي مرض نفسي، فعليك استشارة طبيب مرخّص أو طبيب نفسي أو أخصائي صحة نفسية. اطلب دائماً مشورة مقدّم رعاية صحية مؤهّل بشأن أي أسئلة تتعلّق بحالة طبية أو نفسية.

٣. لا تشخيص ولا علاج للاضطرابات
لا تقوم الكوتش عبير خضر بتشخيص أو علاج أو شفاء أو الوقاية من أي مرض أو حالة طبية أو اضطراب نفسي. ولا يجوز تفسير أي شيء يُطرح خلال الجلسة أو الورشة أو على هذا الموقع على أنه تشخيص طبي أو تقييم نفسي أو خطة علاجية.

٤. عدم ضمان النتائج
تختلف نتائج الكوتشينج والتنويم الإيحائي من شخص لآخر وتعتمد على عوامل عديدة، منها مدى تفاعل كل شخص وظروفه وجهده. لا يتم وعد أو ضمان أي نتيجة أو تحوّل محدّد. وأي شهادات أو قصص نجاح تُعرض على هذا الموقع تعكس تجارب شخصية فردية، ولا تُعتبر ضماناً أو تنبؤاً بأنك ستحقّق النتائج نفسها أو نتائج مماثلة.

٥. حول التنويم الإيحائي الإكلينيكي
التنويم الإيحائي الإكلينيكي كما يُمارَس هنا هو أسلوب تكميلي للعافية. وهو ليس تنويماً استعراضياً، ولا يتضمّن أي فقدان للسيطرة أو الوعي — إذ يبقى العميل واعياً ومسيطراً بشكل كامل في جميع الأوقات، ولا يمكن دفعه للقيام بأي شيء ضدّ إرادته. قد لا يكون التنويم الإيحائي مناسباً للجميع. يُطلب منك الإفصاح عن أي تاريخ طبي أو نفسي ذي صلة قبل حجز جلسة تنويم إيحائي، وذلك لتقييم مدى ملاءمة الخدمة. وعند الشكّ، استشر طبيبك أولاً.

٦. المسؤولية الشخصية
تبقى مسؤولاً بالكامل عن قراراتك وأفعالك وخياراتك ونتائجك الخاصة. وأي قرار تتّخذه بعد جلسة أو ورشة هو مسؤوليتك وحدك. ولا تتحمّل الكوتش عبير خضر أي مسؤولية عن أي خيارات تتّخذها أو إجراءات تقوم بها بناءً على الخدمات المقدّمة.

٧. الحالات الطارئة
هذه الخدمات ليست خدمة أزمات أو طوارئ. إذا كنت تمرّ بحالة طبية أو نفسية طارئة، أو في أزمة، أو تراودك أفكار بإيذاء نفسك أو الآخرين، فيُرجى الاتصال فوراً بخدمات الطوارئ المحلية أو بأخصائي طوارئ مؤهّل. لا تعتمد على هذا الموقع أو هذه الخدمات في الحالات العاجلة.

٨. معلومات الموقع
المعلومات المقدّمة على هذا الموقع هي لأغراض إعلامية وتعليمية عامة فقط. وعلى الرغم من بذل كل جهد للحفاظ على دقّتها وحداثتها، لا يُقدَّم أي ضمان بشأن اكتمالها أو دقّتها.

٩. القبول
بحجزك وحضورك لأي جلسة أو ورشة، فإنك تؤكّد أنك تفهم وتقبل إخلاء المسؤولية هذا، وأنك تشارك طوعاً وبمحض إرادتك الحرّة.

١٠. التواصل
لأي استفسار يتعلّق بإخلاء المسؤولية هذا، يُرجى التواصل معنا عبر المعلومات الموجودة على الموقع.`
    : `DISCLAIMER

Coach Abir Khodor — Life Coaching & Clinical Hypnotherapy
Website: abirkhodor.com
Last updated: June 2026

Please read this Disclaimer carefully before using this website or booking any service. By using abirkhodor.com and engaging in any session or workshop, you acknowledge that you have read, understood, and accepted the following.

1. NATURE OF SERVICES
The services offered by Abir Khodor — including life coaching, clinical hypnotherapy, workshops, and trainings — are intended for personal development, self-awareness, motivation, stress management, habit change, and general wellbeing. They are complementary and educational in nature.

2. NOT A SUBSTITUTE FOR MEDICAL OR PSYCHOLOGICAL TREATMENT
These services are NOT a substitute for, and are not intended to replace, professional medical advice, diagnosis, or treatment, nor licensed psychiatric, psychological, or psychotherapeutic care. They do not constitute the practice of medicine, psychiatry, or clinical psychology.

If you are experiencing a medical condition, a mental health disorder, psychological distress, or any psychiatric illness, you should consult a licensed physician, psychiatrist, or mental health professional. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical or psychological condition.

3. NO DIAGNOSIS OR TREATMENT OF DISORDERS
Abir Khodor does not diagnose, treat, cure, or prevent any disease, medical condition, or psychiatric or psychological disorder. Nothing shared during a session, workshop, or on this website should be interpreted as a medical diagnosis, psychological assessment, or treatment plan.

4. NO GUARANTEE OF RESULTS
Outcomes from coaching and hypnotherapy vary from individual to individual and depend on many factors, including each person's engagement, circumstances, and effort. No specific result, outcome, or transformation is promised or guaranteed. Any testimonials or success stories shared on this website reflect individual personal experiences and are not a guarantee or prediction that you will achieve the same or similar results.

5. ABOUT CLINICAL HYPNOTHERAPY
Clinical hypnotherapy as practised here is a complementary wellness technique. It is not stage hypnosis and involves no loss of control or awareness — the client remains fully aware and in control at all times and cannot be made to do anything against their will. Hypnotherapy may not be suitable for everyone. You are asked to disclose any relevant medical or psychological history before booking a hypnotherapy session, so that the suitability of the service can be assessed. If in doubt, consult your physician first.

6. PERSONAL RESPONSIBILITY
You remain fully responsible for your own decisions, actions, choices, and results. Any decision you make following a session or workshop is your own responsibility. Abir Khodor is not liable for any choices you make or actions you take based on the services provided.

7. EMERGENCIES
These services are not a crisis or emergency service. If you are experiencing a medical or psychological emergency, are in crisis, or are having thoughts of harming yourself or others, please contact your local emergency services or a qualified emergency professional immediately. Do not rely on this website or these services for urgent help.

8. WEBSITE INFORMATION
The information provided on this website is for general informational and educational purposes only. While every effort is made to keep it accurate and current, no warranty is given as to its completeness or accuracy.

9. ACCEPTANCE
By booking and attending a session or workshop, you confirm that you understand and accept this Disclaimer, and that you are participating voluntarily and of your own free will.

10. CONTACT
If you have any questions regarding this Disclaimer, please contact us through the details provided on the website.`

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
                        const level = line.match(/^#+/)[0].length
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

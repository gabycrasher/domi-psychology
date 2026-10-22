/* Health Psychology — Cambridge International A Level Psychology 9990 (syllabus for 2027), Specialist Option 3 */
window.PSY = window.PSY || { options: {}, studies: {} };

PSY.options.health = {
  id: 'health', name: 'Health Psychology', short: 'Health', emoji: '🩺', color: '#14a88e',
  blurb: 'Doctors and patients, following medical advice, pain, stress and health promotion.',
  intro: `Health psychology looks at the <b>psychological factors that affect health</b>: how doctors and patients communicate, why people don’t follow medical advice, how we <b>measure and manage pain and stress</b>, and how to persuade people to live more healthily.`,
  topics: [
  /* ───────────── 3.1 PATIENT–PRACTITIONER ───────────── */
  { id: 'h1', code: '3.1', title: 'The patient–practitioner relationship', emoji: '👩‍⚕️',
    subs: [
    { id: 'h311', code: '3.1.1', title: 'Practitioner & patient interpersonal skills',
      inShort: 'Non-verbal communication matters – patients prefer doctors who dress formally (McKinstry and Wang). Verbal communication matters too – patients often don’t understand medical jargon (McKinlay).',
      notes: `
<h4>Non-verbal communication: practitioner clothing</h4>
<ul><li>Non-verbal cues (clothing, eye contact, posture, tone of voice, touch) affect trust, confidence and satisfaction.</li>
<li>Example study: <b>McKinstry and Wang (1991)</b> showed patients in Scottish general practices photos of male and female doctors dressed in different ways (e.g. formal suit/white coat, smart casual, very casual – jeans). Patients preferred the <b>more formal</b> styles and said they would have more <b>confidence</b> in those doctors; <b>older</b> patients were especially likely to prefer formal dress.</li></ul>
<h4>Verbal communication: understanding medical terminology</h4>
<ul><li>Doctors may use <b>jargon</b> (“myocardial infarction” instead of “heart attack”), or use it deliberately to keep control or avoid frightening patients.</li>
<li>Example study: <b>McKinlay (1975)</b> studied women in a maternity hospital in Aberdeen. Doctors were asked which medical terms they thought patients would understand – yet they still used terms they <b>expected</b> patients <b>not</b> to understand. Patients’ understanding of many terms was poor (though often better than doctors expected).</li>
<li>Poor understanding ➜ anxiety, lower satisfaction and lower <b>adherence</b> to advice.</li></ul>
<p class="tip">💡 Link: patient satisfaction and understanding are major reasons for (non-)adherence – topic 3.2.</p>`,
      debates: ['idio', 'experiments', 'questionnaires', 'quantqual', 'gen'],
      vids: [['Dv7zYv1M2EQ', 'Patient–practitioner relationship (full topic)', 'Mr. Luis', '10:38'], ['OnaVsSGD7n4', 'Strategies for better doctor–patient communication', 'Chapman University', '4:00']],
      terms: [['Non-verbal communication', 'Communication without words: clothing, posture, eye contact, tone.'], ['Medical jargon', 'Technical terms patients may not understand.'], ['Patient satisfaction', 'How content a patient is with their care – linked to adherence.']] },

    { id: 'h312', code: '3.1.2', title: 'Diagnosis & practitioner style', ks: 'savage1990',
      inShort: 'Doctors must decide how much to tell patients and risk false positive or false negative diagnoses. Doctor-centred (directing) and patient-centred (sharing) styles differ – Savage and Armstrong found patients were more satisfied with the directing style.',
      notes: `
<h4>Making a diagnosis</h4>
<ul><li><b>Disclosure of information</b>: how much the doctor tells the patient – full honesty vs protecting them from distressing news. Patients increasingly expect to be told.</li>
<li><b>False positive</b> (Type I error): diagnosing an illness when the person is actually healthy ➜ unnecessary worry and treatment.</li>
<li><b>False negative</b> (Type II error): missing an illness that is there ➜ dangerous, no treatment.</li>
<li>Doctors tend to prefer false positives (“better safe than sorry”) – Scheff’s idea of “decision rules” in medicine.</li></ul>
<h4>Presenting a diagnosis</h4>
<ul><li>How bad news is given matters: privacy, enough time, clear simple language, checking understanding, empathy and giving hope/a plan.</li></ul>
<h4>Practitioner style</h4>
<div class="two">
<div class="box"><b>Doctor-centred (directing)</b><ul><li>The doctor controls the consultation, asks closed questions, makes the decisions and tells the patient what to do.</li><li>Focus on the illness and medical facts.</li></ul></div>
<div class="box"><b>Patient-centred (sharing)</b><ul><li>The doctor asks open questions, listens, involves the patient in decisions.</li><li>Focus on the person, their feelings and preferences.</li></ul></div></div>
<p>Byrne and Long (1976) found most consultations they recorded were doctor-centred. Which is “better” may depend on the patient and the problem.</p>
<p>➜ Key study <b>Savage and Armstrong (1990)</b>.</p>`,
      debates: ['app', 'indsit', 'culture', 'det', 'validity'],
      vids: [['a-oqeFV-rjA', 'Savage and Armstrong (1990): key study', 'TheTeacherKind', '5:03'], ['S4wWClQhZaA', 'Communication skills: a patient-centred approach', 'wmumed', '13:18']],
      terms: [['False positive', 'Diagnosing an illness that is not present (Type I error).'], ['False negative', 'Missing an illness that is present (Type II error).'], ['Doctor-centred style', 'Directing style: the doctor controls the consultation and decisions.'], ['Patient-centred style', 'Sharing style: the patient is involved in discussion and decisions.']] },

    { id: 'h313', code: '3.1.3', title: 'Misusing health services',
      inShort: 'Some people delay seeking treatment (appraisal, illness and utilisation delay – Safer et al.). Others misuse services: Munchausen syndrome is faking illness to be a patient; malingering is faking for a reward.',
      notes: `
<h4>Delay in seeking treatment</h4>
<ul><li>Example study: <b>Safer et al. (1979)</b> interviewed patients waiting at hospital clinics and identified three stages of delay:
<ol><li><b>Appraisal delay</b> – time to recognise a symptom as a sign of illness.</li>
<li><b>Illness delay</b> – time from deciding you’re ill to deciding to seek medical help.</li>
<li><b>Utilisation delay</b> – time from deciding to seek help to actually going.</li></ol></li>
<li>Reasons for delay included: not being in severe pain, the symptom being new or unclear, worrying about the cost or about what might be found, and thinking the problem couldn’t be cured.</li></ul>
<h4>Alternative explanation: the Health Belief Model (HBM)</h4>
<ul><li>People seek help when they believe they are <b>susceptible</b> to a <b>serious</b> illness, the <b>benefits</b> of acting outweigh the <b>barriers</b> (cost, fear, time), and there is a <b>cue to action</b> (e.g. symptoms worsen, a friend’s advice). If not ➜ delay. (More detail in 3.2.1.)</li></ul>
<h4>Munchausen syndrome vs malingering</h4>
<div class="two">
<div class="box"><b>Munchausen syndrome</b> (factitious disorder)<ul><li>Deliberately faking or causing illness <b>to be treated as a patient</b> (to gain the “sick role”) – <b>no external reward</b>.</li></ul></div>
<div class="box"><b>Malingering</b><ul><li>Faking illness for an <b>external reward</b> – money (insurance), avoiding work, school, military service or prison.</li><li>Not a mental disorder.</li></ul></div></div>
<p><b>Diagnostic features of Munchausen</b>:</p>
<ul><li><b>Essential</b>: recurrent hospital admissions with feigned/self-induced illness, <b>pathological lying</b> (pseudologia fantastica) and <b>peregrination</b> (travelling from hospital to hospital).</li>
<li><b>Supporting</b>: good medical knowledge, many scars from previous operations, aggressive or demanding behaviour, leaving hospital against medical advice when found out, few visitors.</li>
<li>Example study: <b>Aleem and Ajarim (1995)</b> – a case study from Saudi Arabia of a young woman who was repeatedly admitted to hospital with puzzling symptoms that turned out to be self-induced; Munchausen syndrome was diagnosed after extensive tests.</li></ul>`,
      debates: ['red', 'idio', 'interviews', 'case', 'gen'],
      vids: [['FGH8rU8NtS0', 'Malingering vs factitious disorder (Munchausen)', 'Stomp On Step 1', '5:50'], ['FFAf-134CHA', 'Health belief model explained', 'Social Science Explainer', '5:04']],
      terms: [['Appraisal delay', 'Time taken to interpret a symptom as a sign of illness.'], ['Illness delay', 'Time from deciding you are ill to deciding to seek help.'], ['Utilisation delay', 'Time from deciding to seek help to actually going.'], ['Munchausen syndrome', 'Faking or causing illness to gain the patient role, with no external reward.'], ['Malingering', 'Faking illness for an external reward.'], ['Peregrination', 'Travelling from hospital to hospital (a feature of Munchausen).']] }
    ],
    quiz: [
      ['McKinstry and Wang (1991) found patients preferred doctors who were…', ['Dressed casually', 'Dressed formally', 'Wearing no badge', 'Young'], 1, 'Formal dress inspired more confidence, especially in older patients.'],
      ['Diagnosing cancer in a healthy person is a…', ['False negative', 'False positive', 'True positive', 'Type II error'], 1, 'False positive = Type I error.'],
      ['In Safer et al. (1979), the time from deciding to get help to actually going is…', ['Appraisal delay', 'Illness delay', 'Utilisation delay', 'Behavioural delay'], 2, 'Utilisation delay.'],
      ['Faking illness to avoid going to prison is…', ['Munchausen syndrome', 'Malingering', 'Hypochondria', 'Non-adherence'], 1, 'Malingering = external reward.'],
      ['Which is an ESSENTIAL feature of Munchausen syndrome?', ['Few visitors', 'Peregrination', 'Medical knowledge', 'Scars'], 1, 'Pathological lying, peregrination and recurrent admissions are essential.'],
      ['Savage and Armstrong (1990) found greater satisfaction with which style?', ['Sharing', 'Directing', 'No difference at all', 'Telephone'], 1, 'The directing (doctor-centred) style.']
    ],
    exam: [
      { p: 3, q: '(a) Describe research into misusing health services. [6]  (b) Evaluate this research, including a discussion of idiographic versus nomothetic approaches. [10]', guide: ['(a) Safer et al. (1979): three stages of delay and reasons; HBM as alternative.', '(a) Munchausen vs malingering, essential/supporting features; Aleem and Ajarim (1995).', '(b) Idiographic case studies (Aleem and Ajarim): rich detail but hard to generalise; Munchausen patients lie, so data may be unreliable.', '(b) Nomothetic interviews (Safer): general patterns but self-report/recall problems.', '(b) Usefulness to health services; conclusion.'] },
      { p: 4, q: 'Plan an experiment to investigate whether a doctor’s clothing affects patients’ confidence. [10]', guide: ['Aim/hypothesis; repeated or independent measures with photos of the same doctor in formal vs casual dress.', 'IV: clothing; DV: confidence rating (e.g. 1–10 scale).', 'Controls: same doctor, pose, expression, lighting; counterbalancing if repeated measures.', 'Sample: patients in waiting rooms (opportunity) or volunteers; ethics: consent, anonymity, right to withdraw.', 'Data: mean ratings, bar chart; reliability via standardised instructions.'] }
    ] },

  /* ───────────── 3.2 ADHERENCE ───────────── */
  { id: 'h2', code: '3.2', title: 'Adherence to medical advice', emoji: '💊',
    subs: [
    { id: 'h321', code: '3.2.1', title: 'Types of & reasons for non-adherence',
      inShort: 'Non-adherence = not following treatment or not attending appointments. It can be a rational choice (e.g. side effects, cost – Laba et al.) or explained by the Health Belief Model.',
      notes: `
<h4>Types of non-adherence</h4>
<ul><li><b>Failure to follow treatment</b>: not taking medicine, taking the wrong dose or at the wrong time, stopping early, not following lifestyle advice (diet, exercise).</li>
<li><b>Failure to attend appointments</b>: missing check-ups, tests or therapy sessions.</li></ul>
<h4>Problems caused</h4>
<ul><li>Patients’ health gets worse; more hospital admissions and deaths.</li>
<li>Wasted money and medicine; drug resistance (e.g. stopping antibiotics early).</li>
<li>Doctors may wrongly think a treatment doesn’t work and change it.</li></ul>
<h4>Explanation 1: rational non-adherence</h4>
<ul><li>The patient makes a <b>reasoned decision</b> not to adhere – e.g. side effects outweigh benefits, cost, they feel better, or they don’t believe the treatment works.</li>
<li>Example study: <b>Laba et al. (2012)</b> used a questionnaire-based <b>discrete choice experiment</b> in Australia, asking patients to choose between hypothetical medication scenarios. Features such as <b>cost</b>, <b>side effects</b> and how much the medicine helped influenced whether people said they would continue taking it – showing non-adherence is often a rational weighing-up of costs and benefits.</li></ul>
<h4>Explanation 2: the Health Belief Model (Rosenstock; Becker)</h4>
<ul><li><b>Perceived susceptibility</b> – “How likely am I to get ill / get worse?”</li>
<li><b>Perceived severity</b> – “How serious would it be?” ➜ together = <b>perceived threat</b>.</li>
<li><b>Perceived benefits</b> vs <b>perceived barriers</b> (cost, side effects, inconvenience).</li>
<li><b>Cues to action</b> – internal (symptoms) or external (reminders, adverts, a friend falling ill).</li>
<li>(Later added: <b>self-efficacy</b> – believing you can do it.)</li>
<li>Adherence is likely when threat is high and benefits outweigh barriers.</li></ul>
<p class="mem">🧠 HBM = “<b>S</b>o <b>S</b>erious? <b>B</b>enefits beat <b>B</b>arriers? <b>C</b>ue – go!”</p>`,
      debates: ['app', 'indsit', 'red', 'idio', 'gen'],
      vids: [['lGKA_adtX-U', 'Adherence to medical advice explained', 'Mr. Luis', '10:20'], ['1dDrUKn2ZFw', 'Non-adherence to treatment', 'Psych Hub', '3:47']],
      terms: [['Non-adherence', 'Not following medical advice – treatment or appointments.'], ['Rational non-adherence', 'Deliberately not adhering after weighing up costs and benefits.'], ['Health Belief Model', 'Behaviour depends on perceived susceptibility, severity, benefits, barriers and cues to action.'], ['Cue to action', 'A trigger that prompts health behaviour.']] },

    { id: 'h322', code: '3.2.2', title: 'Measuring non-adherence',
      inShort: 'Subjective measures: interviews and self-report. Objective measures: pill counts and electronic medication dispensers. Biological measures: blood and urine tests.',
      notes: `
<h4>Subjective measures</h4>
<ul><li><b>Clinical interviews</b> and <b>semi-structured interviews</b>, diaries, questionnaires – asking patients how well they follow advice.</li>
<li>Example study: <b>Riekert and Drotar (1999)</b> used semi-structured interviews to assess how adolescents with diabetes managed their treatment, illustrating how interviews can capture detail about adherence (but depend on honest reporting).</li>
<li><i>+</i> cheap, quick, detailed and explain <b>why</b> people don’t adhere. <i>−</i> social desirability and memory errors – people over-report adherence.</li></ul>
<h4>Objective measures</h4>
<ul><li><b>Pill counting</b>: counting remaining pills at check-ups. <i>−</i> patients can throw pills away (“pill dumping”); doesn’t show <i>when</i> pills were taken.</li>
<li><b>Medication dispensers / electronic monitors</b> (e.g. caps that record each opening): record date and time.</li>
<li>Example study: <b>Chung and Naya (2000)</b> used an electronic device (“TrackCap”) to monitor how often asthma patients took their medication. Recorded adherence was much lower than patients would typically report, showing the value of objective measures.</li>
<li><i>+</i> objective, precise timing. <i>−</i> opening a cap doesn’t prove the pill was swallowed; expensive; patients may change behaviour because they know they’re monitored.</li></ul>
<h4>Biological measures</h4>
<ul><li><b>Blood</b> and <b>urine</b> samples test for the drug or its by-products (or markers like blood sugar).</li>
<li><i>+</i> most objective and hard to fake. <i>−</i> invasive, expensive, and people metabolise drugs differently; only shows recent doses.</li></ul>`,
      debates: ['app', 'idio', 'quantqual', 'validity', 'reliability'],
      vids: [['SxxGeWDV850', 'An overview of medication adherence measures', 'BP International', '2:09'], ['6DrP6-EjfiA', 'Pill counting examples', 'Lawrence Davidow', '3:29']],
      terms: [['Subjective measure', 'Based on the patient’s own report (interview, questionnaire).'], ['Objective measure', 'Not reliant on self-report (pill counts, electronic monitors).'], ['Pill counting', 'Counting remaining tablets to estimate adherence.'], ['Biological measure', 'Blood or urine tests detecting medication levels.']] },

    { id: 'h323', code: '3.2.3', title: 'Improving adherence', ks: 'yokley1984',
      inShort: 'Make it fun for children (e.g. a toy inhaler – Chaney et al.). Use contracts, prompts and customised treatment. Community interventions like prompts and money incentives increased child immunisations (Yokley and Glenwick).',
      notes: `
<h4>Improving adherence in children</h4>
<ul><li>Children may dislike taste, fear needles or not understand why. Strategies: make it rewarding/fun, involve parents, simplify.</li>
<li>Example study: <b>Chaney et al. (2004)</b> tested the <b>“Funhaler”</b> – an asthma spacer device with a spinning toy and whistle that only work when the child breathes correctly. Young children’s adherence was higher with the Funhaler than with their usual spacer.</li></ul>
<h4>Individual behavioural techniques</h4>
<ul><li><b>Contracts</b>: a written agreement between patient and practitioner setting goals and rewards (“If I take my tablets every day for a month I will…”). Increases commitment.</li>
<li><b>Prompts</b>: reminders – texts, phone calls, alarms, calendars, labelled pill boxes.</li>
<li><b>Customising treatment</b>: fitting the treatment to the patient’s routine (e.g. once-a-day dosing at breakfast), simplifying instructions.</li></ul>
<h4>Community interventions</h4>
<ul><li>Programmes aimed at a whole community – letters, mass reminders, easier access to clinics, incentives.</li>
<li>➜ Key study <b>Yokley and Glenwick (1984)</b>: increasing immunisation of preschool children.</li></ul>`,
      debates: ['children', 'experiments', 'questionnaires', 'gen', 'validity'],
      vids: [['lGKA_adtX-U', 'Adherence (incl. improving adherence)', 'Mr. Luis', '10:20']],
      terms: [['Funhaler', 'A child-friendly asthma inhaler with a toy that rewards correct use.'], ['Behavioural contract', 'A written agreement setting health goals and rewards.'], ['Prompt', 'A reminder to carry out a health behaviour.'], ['Community intervention', 'A health programme targeting a whole community.']] }
    ],
    quiz: [
      ['Stopping antibiotics early because you feel better is an example of…', ['Failure to attend', 'Failure to follow treatment', 'Malingering', 'Munchausen'], 1, 'Not completing treatment.'],
      ['In the HBM, cost and side effects are…', ['Benefits', 'Barriers', 'Cues to action', 'Susceptibility'], 1, 'Perceived barriers.'],
      ['Which measure is hardest for patients to fake?', ['Interview', 'Pill count', 'Blood test', 'Diary'], 2, 'Biological measures are the most objective.'],
      ['A weakness of electronic pill dispensers is…', ['They are subjective', 'Opening the cap doesn’t prove the pill was taken', 'They can’t record time', 'They rely on memory'], 1, 'Opening ≠ swallowing.'],
      ['In Yokley and Glenwick (1984), which intervention had the largest effect?', ['General prompt', 'Specific prompt', 'Monetary incentive', 'Control'], 2, 'Monetary incentive (+ specific prompt).'],
      ['The Funhaler improves adherence by…', ['Punishing the child', 'Making correct inhaler use fun/rewarding', 'Reducing the dose', 'Hiding the medicine'], 1, 'A toy that works only with correct breathing.']
    ],
    exam: [
      { p: 3, q: '(a) Describe ways of measuring non-adherence. [6]  (b) Evaluate these measures, including a discussion of validity. [10]', guide: ['(a) Subjective: interviews (Riekert and Drotar, 1999). Objective: pill counting, dispensers (Chung and Naya, 2000). Biological: blood/urine.', '(b) Validity: self-report affected by social desirability; pill dumping; caps opened but not taken; biological most valid but only recent.', '(b) Practicality, ethics (invasive), cost; quantitative vs qualitative; conclusion recommending combined measures.'] },
      { p: 4, q: 'Yokley and Glenwick (1984) used a field experiment. (a) Identify the independent variable. (b) Explain why two control groups might have been used.', guide: ['(a) The type of intervention (general prompt, specific prompt, specific prompt + increased access, specific prompt + money incentive) vs control.', '(b) To check the effect of simply being contacted/in the study vs receiving no contact – separating intervention effects from other influences.'] }
    ] },

  /* ───────────── 3.3 PAIN ───────────── */
  { id: 'h3', code: '3.3', title: 'Pain', emoji: '🤕',
    subs: [
    { id: 'h331', code: '3.3.1', title: 'Types & theories of pain',
      inShort: 'Pain warns and protects us. It can be acute or chronic. Phantom limb pain shows pain isn’t just about injury – mirror therapy can help. Gate control theory beats specificity theory.',
      notes: `
<h4>Functions and types of pain</h4>
<ul><li><b>Functions</b>: a <b>warning</b> of damage, makes us <b>rest/protect</b> the injured part, helps us <b>learn</b> to avoid danger.</li>
<li><b>Acute pain</b>: short-term (under about 3 months), clear cause (a cut, broken bone), goes when healed.</li>
<li><b>Chronic pain</b>: lasts more than about 3 months, may continue after healing (back pain, arthritis); strongly affected by psychological factors.</li></ul>
<h4>Phantom limb pain and mirror treatment</h4>
<ul><li>Most amputees feel the missing limb is still there; many feel <b>pain</b> in it – proof that pain can exist <b>without</b> tissue damage.</li>
<li><b>Mirror therapy</b> (Ramachandran): a mirror reflects the remaining limb so it looks like the missing one is moving normally; this visual feedback can relieve pain/cramps.</li>
<li>Example case study: <b>MacLachlan et al. (2004)</b> treated a man with lower-limb amputation who had phantom limb pain using mirror therapy over a few weeks; his phantom pain reduced substantially.</li></ul>
<h4>Theories of pain</h4>
<div class="two">
<div class="box"><b>Specificity theory</b> (Descartes; von Frey)<ul><li>Specific pain receptors send signals along a dedicated pathway to a “pain centre” in the brain.</li><li>Pain is proportional to injury.</li><li>❌ Can’t explain phantom limb pain, soldiers/athletes not feeling serious injuries, or effects of emotion and attention.</li></ul></div>
<div class="box"><b>Gate control theory</b> (Melzack and Wall, 1965)<ul><li>A “gate” in the <b>spinal cord</b> (dorsal horn) controls whether pain signals reach the brain.</li><li><b>Small fibres</b> (A-delta, C – pain) <b>open</b> the gate; <b>large fibres</b> (A-beta – touch, pressure) <b>close</b> it – why rubbing a knock helps.</li><li><b>Descending signals from the brain</b> (attention, emotion, beliefs) can open or close the gate.</li><li>✔ Explains psychological influences; led to TENS and cognitive strategies.</li></ul></div></div>`,
      debates: ['indsit', 'nn', 'red', 'det', 'case'],
      vids: [['M-rL8XdHo6Q', 'Gate control theory of pain – animation', 'Alila Medical Media', '3:24'], ['KdihphPp1Q0', 'Can you still feel a limb that’s gone?', 'TED-Ed', '5:15'], ['6Vkb2iz5Ue0', 'How a mirror can relieve phantom pain', 'Sunnybrook Hospital', '3:19']],
      terms: [['Acute pain', 'Short-term pain with a clear cause.'], ['Chronic pain', 'Pain lasting over about 3 months.'], ['Phantom limb pain', 'Pain felt in an amputated limb.'], ['Mirror therapy', 'Using a mirror reflection of the intact limb to relieve phantom pain.'], ['Gate control theory', 'A spinal “gate” opened by small fibres and closed by large fibres and brain signals.'], ['Specificity theory', 'Pain travels along dedicated pathways in proportion to injury.']] },

    { id: 'h332', code: '3.3.2', title: 'Measuring pain', ks: 'brudvik2016',
      inShort: 'Pain can be measured by clinical interview, questionnaires (McGill Pain Questionnaire), rating scales (visual analogue scale) and observation (UAB pain behaviour scale). Doctors often underestimate children’s pain (Brudvik et al.).',
      notes: `
<h4>Subjective measure: clinical interview</h4>
<ul><li>The practitioner asks about the location, intensity, type, timing and impact of pain, and its history.</li>
<li><i>+</i> detailed, flexible, qualitative. <i>−</i> depends on the patient’s communication skills and honesty; interviewer bias.</li></ul>
<h4>Psychometric measures and rating scales</h4>
<ul><li><b>McGill Pain Questionnaire (MPQ)</b> (Melzack, 1975): <b>78 words</b> in <b>20 groups</b> describing the <b>sensory</b> (e.g. throbbing, stabbing), <b>affective</b> (e.g. exhausting, terrifying) and <b>evaluative</b> (e.g. annoying, unbearable) qualities of pain, plus a <b>Present Pain Intensity</b> rating (0–5). <i>+</i> rich, quantitative scores. <i>−</i> long, needs a good vocabulary – hard for children or people with limited English/other cultures.</li>
<li><b>Visual analogue scale (VAS)</b>: a 10 cm line from “no pain” to “worst pain imaginable”; the patient marks a point. Quick and simple. Children can use <b>faces</b> scales (smiling to crying).</li></ul>
<h4>Behavioural / observational measure: UAB Pain Behaviour Scale</h4>
<ul><li>Developed at the University of Alabama at Birmingham (Richards et al., 1982). A trained observer rates <b>10 pain behaviours</b> (e.g. vocal complaints, grimacing, posture, mobility, use of supportive equipment, medication) as none / occasional / frequent.</li>
<li><i>+</i> useful when patients can’t self-report; more objective. <i>−</i> needs trained observers; behaviours may not reflect real pain intensity.</li></ul>
<p>➜ Key study <b>Brudvik et al. (2016)</b>: children, parents and doctors rated pain differently.</p>`,
      debates: ['idio', 'quantqual', 'interviews', 'observations', 'psychometrics', 'gen'],
      vids: [['k8TBGqeQ2YQ', 'McGill Pain Questionnaire (MPQ)', 'BMH learning', '1:12'], ['qCRlFOve3tM', 'Key study: Brudvik et al. (2016) – pain assessment', 'Emjay', '33:30']],
      terms: [['McGill Pain Questionnaire', '78 pain words in sensory, affective and evaluative categories plus a present pain rating.'], ['Visual analogue scale', 'A line from “no pain” to “worst pain imaginable” on which pain is marked.'], ['UAB Pain Behaviour Scale', 'Observer rating of 10 pain behaviours.'], ['Numeric rating scale', 'Rating pain with a number, e.g. 0–10.']] },

    { id: 'h333', code: '3.3.3', title: 'Managing & controlling pain',
      inShort: 'Biological: painkillers (biochemical). Psychological: cognitive strategies – attention diversion, non-pain imagery and cognitive redefinition. Alternative: acupuncture and TENS.',
      notes: `
<h4>Biological: biochemical treatments (analgesics)</h4>
<ul><li><b>Non-opioids</b> (paracetamol, aspirin, ibuprofen – NSAIDs reduce inflammation and prostaglandins) for mild–moderate pain.</li>
<li><b>Opioids</b> (morphine, codeine) bind to opioid receptors and block pain signals – for severe pain.</li>
<li><i>+</i> fast, effective, easy. <i>−</i> side effects, tolerance and addiction (opioids); don’t address psychological aspects.</li></ul>
<h4>Psychological: cognitive strategies</h4>
<ul><li><b>Attention diversion</b>: focusing attention away from the pain (counting, music, video games). Works best for mild pain.</li>
<li><b>Non-pain imagery</b>: imagining a pleasant, relaxing scene incompatible with pain (a beach) – or transforming the pain image.</li>
<li><b>Cognitive redefinition</b>: thinking about the pain in a more realistic, less threatening way (“This feeling means the treatment is working”; stopping catastrophising).</li>
<li>All fit <b>gate control theory</b> – descending signals from the brain help close the gate.</li></ul>
<h4>Alternative treatments</h4>
<ul><li><b>Acupuncture</b>: fine needles inserted at specific points; may trigger endorphin release (and/or close the pain gate). Evidence mixed – placebo effects are hard to rule out (sham acupuncture often works nearly as well).</li>
<li><b>TENS</b> (transcutaneous electrical nerve stimulation): electrodes on the skin deliver small electrical pulses that stimulate <b>large fibres</b> (closing the gate) and may release endorphins. Patient-controlled, drug-free; used in labour and chronic pain; evidence varies.</li></ul>`,
      debates: ['app', 'culture', 'red', 'det', 'idio', 'objsubj'],
      vids: [['TdWVKtjEOpQ', 'TENS unit for pain explained', "Doctor O'Donovan", '5:27'], ['EbPMM1Tmx_g', 'What does acupuncture do?', 'Southern California University', '1:34']],
      terms: [['Analgesic', 'A painkilling drug.'], ['Attention diversion', 'Focusing away from pain to reduce it.'], ['Non-pain imagery', 'Imagining a pleasant scene incompatible with pain.'], ['Cognitive redefinition', 'Reinterpreting pain in a less threatening way.'], ['TENS', 'Transcutaneous electrical nerve stimulation – electrical pulses through the skin to reduce pain.']] }
    ],
    quiz: [
      ['Phantom limb pain is a problem for which theory?', ['Gate control', 'Specificity', 'Health belief model', 'PAD'], 1, 'Specificity theory needs damaged tissue to explain pain.'],
      ['According to gate control theory, rubbing a bumped knee helps because…', ['It releases cortisol', 'Large touch fibres close the gate', 'Small fibres close the gate', 'It distracts the specificity pathway'], 1, 'Large A-beta fibres close the gate.'],
      ['How many words does the McGill Pain Questionnaire contain?', ['10', '20', '78', '100'], 2, '78 words in 20 groups.'],
      ['The UAB scale is a…', ['Self-report questionnaire', 'Behavioural/observational measure', 'Blood test', 'Brain scan'], 1, 'Observers rate 10 pain behaviours.'],
      ['In Brudvik et al. (2016), whose mean pain ratings were lowest?', ['Children', 'Parents', 'Physicians', 'Nurses'], 2, 'Physicians 3.2 vs parents 4.8 vs children 5.5.'],
      ['Thinking “this pain means I’m healing” is…', ['Attention diversion', 'Non-pain imagery', 'Cognitive redefinition', 'TENS'], 2, 'Reinterpreting the pain.']
    ],
    exam: [
      { p: 3, q: '(a) Describe two theories of pain. [6]  (b) Evaluate these theories, including a discussion of reductionism versus holism. [10]', guide: ['(a) Specificity theory: dedicated pathway, proportional to injury.', '(a) Gate control theory: spinal gate, small/large fibres, descending control.', '(b) Specificity is reductionist and can’t explain phantom limb pain or psychological effects.', '(b) Gate control is more holistic – includes emotion/attention; supported by TENS and cognitive strategies; the gate itself hard to locate exactly.', '(b) Application to treatments; conclusion.'] },
      { p: 4, q: 'Plan a study using observation to measure pain behaviour in patients recovering from surgery. [10]', guide: ['Structured, non-participant, overt observation using UAB categories (behavioural checklist).', 'Two observers for inter-rater reliability; time sampling (e.g. 5 minutes every hour).', 'Sample: adult patients on a ward who consent; ethics: privacy, confidentiality, right to withdraw.', 'Data: frequency of each behaviour; compare with VAS self-report.'] }
    ] },

  /* ───────────── 3.4 STRESS ───────────── */
  { id: 'h4', code: '3.4', title: 'Stress', emoji: '😫',
    subs: [
    { id: 'h341', code: '3.4.1', title: 'Sources of stress',
      inShort: 'The GAS model: alarm, resistance, exhaustion – long-term stress damages health. Causes include life events (Holmes and Rahe), work (Chandola et al.) and Type A personality.',
      notes: `
<h4>Physiology of stress: the General Adaptation Syndrome (GAS) – Selye</h4>
<ol><li><b>Alarm</b>: the threat is noticed; the <b>sympathetic nervous system</b> and adrenal medulla release <b>adrenaline</b> (SAM system) – fight or flight: faster heart, breathing, energy release.</li>
<li><b>Resistance</b>: if stress continues, the body adapts; the <b>HPA axis</b> releases <b>cortisol</b> to keep energy available. Looks like coping, but resources are being used up.</li>
<li><b>Exhaustion</b>: resources run out ➜ illness (“diseases of adaptation”): high blood pressure, heart disease, ulcers, weakened immune system.</li></ol>
<p><b>Effects on health</b>: suppressed immune system (e.g. exam stress reduced immune cell activity in students – Kiecolt-Glaser et al., 1984), cardiovascular disorders, depression.</p>
<h4>Causes of stress</h4>
<ul><li><b>Life events – Holmes and Rahe (1967)</b>: the <b>Social Readjustment Rating Scale (SRRS)</b> lists <b>43 life events</b>, each with <b>Life Change Units</b> (death of a spouse 100, divorce 73, marriage 50, Christmas 12). Any change – even positive – needs readjustment. High scores (e.g. 300+ in a year) are linked to a higher risk of illness.</li>
<li><b>Work</b>: workload, lack of control, long hours, effort–reward imbalance, job insecurity. Example study: <b>Chandola et al. (2008)</b> – part of the <b>Whitehall II</b> study of over 10,000 British civil servants: chronic work stress was linked to <b>coronary heart disease</b> (especially in people under 50), partly through unhealthy behaviours and biological changes (e.g. heart rate variability, cortisol).</li>
<li><b>Personality – Friedman and Rosenman’s Type A</b>: <b>competitive</b>, <b>time-urgent/impatient</b> and <b>hostile</b>. The Western Collaborative Group Study followed about 3,000 American men for over 8 years: Type A men were about <b>twice as likely</b> to develop coronary heart disease as Type B (relaxed, easy-going). Later research suggests <b>hostility</b> is the most harmful part.</li></ul>`,
      debates: ['indsit', 'red', 'det', 'idio', 'gen'],
      vids: [['dwGbUXGC_to', 'Stress adaptation response – animation', 'Alila Medical Media', '4:03'], ['QKimhcnr0eY', 'Holmes and Rahe Social Readjustment Rating Scale', 'Learning at Work', '1:50'], ['BtCGRxy3nls', 'Type A vs Type B personalities', 'Practical Psychology', '5:54']],
      terms: [['GAS', 'General Adaptation Syndrome: alarm, resistance, exhaustion (Selye).'], ['SAM system', 'Sympathomedullary pathway releasing adrenaline – immediate stress response.'], ['HPA axis', 'Hypothalamic–pituitary–adrenal axis releasing cortisol – longer-term stress response.'], ['SRRS', 'Social Readjustment Rating Scale: 43 life events with life change units.'], ['Type A personality', 'Competitive, time-urgent, hostile – linked to heart disease.']] },

    { id: 'h342', code: '3.4.2', title: 'Measures of stress',
      inShort: 'Biological: heart rate monitors, fMRI brain scans (Wang et al.) and salivary cortisol (Evans and Wener). Psychological: self-report questionnaires such as the SRRS and Type A tests.',
      notes: `
<h4>Biological measures</h4>
<ul><li><b>Recording devices</b>: heart rate, blood pressure, skin conductance (sweating).</li>
<li><b>Brain function (fMRI)</b>: shows which areas are active under stress. Example study: <b>Wang et al. (2005)</b> scanned participants while they did a stressful task (counting backwards in sevens with pressure) vs a low-stress version. Stress increased blood flow in the <b>right prefrontal cortex</b>, which was linked to self-reported stress and cortisol, and the effect continued after the task ended.</li>
<li><b>Salivary cortisol</b>: saliva samples measure the stress hormone cortisol – easy and non-invasive. Example study: <b>Evans and Wener (2007)</b> studied about 140 adult train commuters travelling into New York. People sitting in more <b>crowded seating</b> (more passengers close around them, rather than the carriage overall) had higher <b>salivary cortisol</b>, felt more stressed and did worse on a proofreading task.</li>
<li><i>+</i> objective, quantitative, hard to fake. <i>−</i> expensive equipment; arousal can come from other causes (exercise, excitement, caffeine); cortisol varies with time of day; artificial settings (fMRI scanner).</li></ul>
<h4>Psychological measures: self-report questionnaires</h4>
<ul><li><b>Holmes and Rahe’s SRRS</b> – tick life events from the past year; add life change units.</li>
<li><b>Type A tests</b> – e.g. the Jenkins Activity Survey questionnaire or Friedman and Rosenman’s structured interview (where the interviewer also notes behaviour such as fast speech and interrupting).</li>
<li><i>+</i> cheap, quick, large samples, measure how stress is <i>experienced</i>. <i>−</i> subjective, social desirability, memory errors; the SRRS ignores how each person interprets events (a divorce may be a relief).</li></ul>`,
      debates: ['questionnaires', 'psychometrics', 'objsubj', 'validity', 'reliability'],
      vids: [['v-t1Z5-oPtU', 'How stress affects your body', 'TED-Ed', '4:43'], ['BSNFBHYgK78', 'Measuring stress: physiological arousal', 'MinsEducation', '1:37']],
      terms: [['Salivary cortisol', 'Cortisol measured in saliva – a biological stress measure.'], ['fMRI', 'Functional MRI: measures brain activity through blood flow.'], ['Life change units', 'Scores for life events on the SRRS.'], ['Jenkins Activity Survey', 'A questionnaire measuring Type A behaviour.']] },

    { id: 'h343', code: '3.4.3', title: 'Managing stress', ks: 'bridge1988',
      inShort: 'Biofeedback teaches control of body responses (Budzynski et al.). Relaxation and imagery reduce stress during cancer treatment (Bridge et al.). Stress inoculation training “vaccinates” you against stress in three phases.',
      notes: `
<h4>Psychological therapy: biofeedback</h4>
<ul><li>Sensors give the person <b>live feedback</b> about a body process they normally can’t notice (e.g. muscle tension via EMG, heart rate, skin temperature) – often as a sound or graph.</li>
<li>They learn relaxation techniques and see/hear the effect, so they gradually learn to control the response (operant conditioning – the change is reinforcing).</li>
<li>Example study: <b>Budzynski et al. (1969)</b> used EMG biofeedback of forehead muscle tension with people who had tension headaches; as they learned to relax the muscle, their headaches reduced.</li>
<li><i>+</i> no drugs, gives control, long-lasting. <i>−</i> needs equipment and time; may work through relaxation alone.</li></ul>
<h4>Use of imagery to reduce stress</h4>
<ul><li>Imagining a peaceful scene, often combined with relaxation, reduces stress and arousal.</li>
<li>➜ Key study <b>Bridge et al. (1988)</b>: relaxation and imagery for women with breast cancer.</li></ul>
<h4>Preventing stress: stress inoculation training (SIT) – Meichenbaum</h4>
<p>Like a vaccine: exposure to small amounts of stress builds resistance. Three phases:</p>
<ol><li><b>Conceptualisation</b> – understanding stress and how you react; identifying stressors and unhelpful thoughts.</li>
<li><b>Skill acquisition and rehearsal</b> – learning coping skills: relaxation, positive self-talk, problem-solving, assertiveness – practised in safe settings.</li>
<li><b>Application and follow-through</b> – using the skills in increasingly stressful real situations, with booster sessions.</li></ol>`,
      debates: ['app', 'indsit', 'det', 'gen', 'ethics'],
      vids: [['YcDC_4vn3OQ', 'Biofeedback for anxiety', 'Therapy in a Nutshell', '10:19'], ['6xiF_J1w0J8', 'Donald Meichenbaum on stress inoculation', 'PsychAlive', '3:24'], ['seOuH0vyyBM', 'Guided imagery: a simple relaxation technique', 'Clarity Singapore', '7:20']],
      terms: [['Biofeedback', 'Live feedback about body processes to learn to control them.'], ['EMG', 'Electromyography – measures muscle tension.'], ['Stress inoculation training', 'Meichenbaum: conceptualisation, skill acquisition, application.'], ['Imagery', 'Imagining a calm, pleasant scene to reduce stress.']] }
    ],
    quiz: [
      ['In the GAS model, cortisol is mainly involved in which stage?', ['Alarm', 'Resistance', 'Exhaustion', 'None'], 1, 'HPA axis and cortisol sustain the resistance stage.'],
      ['On the SRRS, the death of a spouse scores…', ['50', '73', '100', '300'], 2, '100 life change units.'],
      ['Which is NOT a Type A trait?', ['Competitiveness', 'Time urgency', 'Hostility', 'Easy-going'], 3, 'Easy-going is Type B.'],
      ['Evans and Wener (2007) measured stress in commuters using…', ['fMRI', 'Salivary cortisol', 'Urine', 'Blood pressure only'], 1, 'Salivary cortisol (plus self-report and a proofreading task).'],
      ['Stress inoculation training’s second phase is…', ['Conceptualisation', 'Skill acquisition and rehearsal', 'Application', 'Exhaustion'], 1, 'Learning and practising coping skills.'],
      ['In Bridge et al. (1988), which group had the least mood disturbance?', ['Control', 'Relaxation only', 'Relaxation + imagery', 'Medication'], 2, 'Relaxation plus imagery; control mood worsened.']
    ],
    exam: [
      { p: 3, q: '(a) Describe ways of measuring stress. [6]  (b) Evaluate these measures, including a discussion of objective and subjective data. [10]', guide: ['(a) Biological: recording devices, fMRI (Wang et al., 2005), salivary cortisol (Evans and Wener, 2007).', '(a) Psychological: SRRS, Type A questionnaires/interviews.', '(b) Objective biological data: reliable, hard to fake, but expensive and other causes of arousal.', '(b) Subjective self-report: captures experience but biased; SRRS ignores interpretation.', '(b) Best to combine; conclusion.'] },
      { p: 4, q: 'Plan a study to investigate whether students’ salivary cortisol levels are higher during exam weeks than in normal weeks. [10]', guide: ['Repeated measures/longitudinal design: same students tested in a normal week and an exam week.', 'Measure: saliva samples at the same time each morning (cortisol varies with time of day).', 'Controls: no eating/caffeine 30 minutes before; same procedure; counterbalancing not possible – note order effects.', 'Sample: volunteer students; ethics: consent, right to withdraw, confidentiality of samples.', 'Data: mean cortisol per condition; also a short stress questionnaire.'] }
    ] },

  /* ───────────── 3.5 HEALTH PROMOTION ───────────── */
  { id: 'h5', code: '3.5', title: 'Health promotion', emoji: '🥦',
    subs: [
    { id: 'h351', code: '3.5.1', title: 'Strategies for promoting health',
      inShort: 'Fear arousal can backfire – strong fear led to the least change (Janis and Feshbach). Providing practical information, like the Heart Manual, can improve health (Lewin et al.).',
      notes: `
<h4>Fear arousal</h4>
<ul><li>Using frightening messages (gory images on cigarette packets) to motivate healthier behaviour.</li>
<li>Example study: <b>Janis and Feshbach (1953)</b>: about 200 American high-school students heard a lecture on dental hygiene with a <b>strong</b>, <b>moderate</b> or <b>minimal</b> fear appeal (or no lecture). A week later, the <b>minimal fear</b> group had changed their tooth-brushing behaviour most (about 36%) and the <b>strong fear</b> group least (about 8%), even though strong fear caused most worry.</li>
<li>Why? Too much fear may make people avoid or deny the message. Fear works better when people are also given clear, achievable actions (and believe they can do them).</li></ul>
<h4>Providing information</h4>
<ul><li>Giving people knowledge and practical skills so they know how to improve their health.</li>
<li>Example study: <b>Lewin et al. (1992)</b>: patients who had just had a heart attack were given either the <b>“Heart Manual”</b> – a self-help rehabilitation programme with information, exercise and relaxation advice – or standard information plus informal counselling (placebo). The Heart Manual group showed better psychological adjustment (less anxiety and depression) and fewer GP visits and hospital readmissions in the following months.</li></ul>`,
      debates: ['indsit', 'culture', 'longitudinal', 'objsubj', 'ethics'],
      vids: [['7bfS3_W-2ZM', 'Fear arousal – Janis and Feshbach', 'OCR Psychology Revision', '1:46'], ['fOo-Sxw37Q8', 'Health promotion & positive psychology', 'Mr. Luis', '8:11']],
      terms: [['Fear arousal', 'Using fear-provoking messages to change health behaviour.'], ['Heart Manual', 'A self-help rehabilitation programme for heart attack patients (Lewin et al.).'], ['Health promotion', 'Strategies to help people improve their health.']] },

    { id: 'h352', code: '3.5.2', title: 'Health promotion in schools & worksites',
      inShort: 'In schools, the Food Dudes programme got children eating more fruit and vegetables (Tapper et al.). At work, a token economy hugely reduced accidents in mines (Fox et al.).',
      notes: `
<h4>Schools – healthy eating</h4>
<ul><li>Schools reach almost all children and can build lifelong habits.</li>
<li>Example study: <b>Tapper et al. (2003)</b> – the <b>Food Dudes</b> programme in UK primary schools. Children watched videos of heroic “Food Dudes” characters who eat fruit and vegetables to beat the “Junk Punks”, and earned small <b>rewards</b> (stickers, pencils) for tasting fruit and vegetables. Consumption increased substantially and stayed higher after the programme ended – using <b>modelling</b> (social learning) and <b>repeated tasting</b> plus reinforcement.</li></ul>
<h4>Worksites – health and safety</h4>
<ul><li>Employers can improve health and reduce accidents through training, rewards and safer design.</li>
<li>Example study: <b>Fox et al. (1987)</b> introduced a <b>token economy</b> at two open-pit mines in the USA. Workers earned <b>trading stamps</b> (exchangeable for goods) for working without accidents or injuries, for safety suggestions and for their team staying accident-free; they lost stamps for accidents. Days lost through injury and accident costs <b>fell dramatically</b> and stayed low for many years – the savings far outweighed the cost of the stamps.</li></ul>
<p class="tip">💡 Fox et al. (1987) also appears in Organisational psychology (reducing accidents at work) – learn it once, use it twice!</p>`,
      debates: ['children', 'experiments', 'longitudinal', 'quantqual', 'gen'],
      vids: [['TwD3ChjqGRg', 'Health promotion – Cambridge A Level 9990', 'Cambridge IGCSE, AS and A Level Study Materials', '13:22'], ['niHrV9JM8EM', 'Making every school a health-promoting school', 'World Health Organization', '2:25']],
      terms: [['Food Dudes', 'A school programme using role models and rewards to increase fruit and vegetable eating.'], ['Token economy', 'Earning tokens for desired behaviour that can be exchanged for rewards.'], ['Modelling', 'Learning by observing and imitating role models.']] },

    { id: 'h353', code: '3.5.3', title: 'Individual factors in changing health beliefs', ks: 'shoshani2014',
      inShort: 'Unrealistic optimism makes us think bad things won’t happen to us (Weinstein). Positive psychology focuses on the pleasant, good and meaningful life (Seligman) – and can improve teenagers’ mental health at school (Shoshani and Steinmetz).',
      notes: `
<h4>Unrealistic optimism</h4>
<ul><li>Believing that you are <b>less likely</b> than other people to experience bad events (illness, accidents) and <b>more likely</b> to experience good ones – a reason people <b>ignore health advice</b> (“I won’t get lung cancer”).</li>
<li>Example study: <b>Weinstein (1980)</b> asked over 250 American college students to rate their own chances of experiencing various positive and negative life events compared with other students. They rated their chances of good events as above average and bad events as below average – which can’t be true for everyone.</li></ul>
<h4>Positive psychology</h4>
<ul><li><b>Definition</b>: the scientific study of what makes life worth living – strengths, well-being and flourishing, rather than only fixing problems (founded largely by Martin Seligman).</li>
<li><b>Three focuses</b> (Seligman):
<ol><li><b>The pleasant life</b> – experiencing positive emotions about the past, present and future (savouring, gratitude).</li>
<li><b>The good (engaged) life</b> – using your <b>signature strengths</b> to be absorbed in activities (“flow”).</li>
<li><b>The meaningful life</b> – using your strengths to serve something bigger than yourself (family, community, faith).</li></ol></li>
<li>Seligman (2004) argued that the good and meaningful lives contribute more to lasting happiness than pleasure alone.</li></ul>
<h4>Application of positive psychology</h4>
<p>➜ Key study <b>Shoshani and Steinmetz (2014)</b>: a school-based positive psychology programme for Israeli middle-school students.</p>`,
      debates: ['indsit', 'culture', 'idio', 'psychometrics', 'gen'],
      vids: [['3Dp89RtutF8', 'Unrealistic optimism', 'Debra Barushak', '1:39'], ['25ylIQjFKEQ', 'The pleasant life, the good life and the meaningful life', 'Drew Delucchi', '9:46'], ['Vrsk9IWWjdM', 'Shoshani and Steinmetz – revision', 'Emjay', '10:07']],
      terms: [['Unrealistic optimism', 'Believing you are less likely than others to suffer bad events.'], ['Positive psychology', 'The study of strengths, well-being and what makes life worth living.'], ['Pleasant life', 'Seligman: experiencing positive emotions.'], ['Good (engaged) life', 'Seligman: using signature strengths to achieve flow.'], ['Meaningful life', 'Seligman: using strengths in service of something bigger than yourself.']] }
    ],
    quiz: [
      ['In Janis and Feshbach (1953), which fear appeal led to the most behaviour change?', ['Strong', 'Moderate', 'Minimal', 'None'], 2, 'Minimal fear (about 36% vs about 8% for strong).'],
      ['The Heart Manual (Lewin et al., 1992) is an example of…', ['Fear arousal', 'Providing information', 'Token economy', 'Biofeedback'], 1, 'Providing information and self-help.'],
      ['Food Dudes increased fruit and vegetable eating mainly using…', ['Fear arousal', 'Modelling and rewards', 'Punishment', 'Medication'], 1, 'Role models + rewards for tasting.'],
      ['Fox et al. (1987) gave miners…', ['Cash bonuses only', 'Trading stamps (tokens)', 'Extra holidays', 'Nothing'], 1, 'A token economy using trading stamps.'],
      ['Believing “I’m less likely than others to get ill” is…', ['Learned helplessness', 'Unrealistic optimism', 'Type A', 'Satisficing'], 1, 'Weinstein (1980).'],
      ['Using your strengths to serve something bigger than yourself is the…', ['Pleasant life', 'Good life', 'Meaningful life', 'Easy life'], 2, 'The meaningful life.']
    ],
    exam: [
      { p: 3, q: '(a) Describe strategies for promoting health. [6]  (b) Evaluate these strategies, including a discussion of cultural differences. [10]', guide: ['(a) Fear arousal – Janis and Feshbach (1953) details.', '(a) Providing information – Lewin et al. (1992) Heart Manual.', '(b) Culture: fear appeals and information may work differently across cultures (individualist/collectivist, literacy, trust in doctors).', '(b) Ethics of frightening people; longitudinal follow-up; generalisation from American students in 1953; conclusion.'] },
      { p: 4, q: 'Shoshani and Steinmetz (2014) used psychometric questionnaires. Explain one strength and one weakness of using psychometrics to measure students’ well-being.', guide: ['Strength: standardised, quantitative, reliable – allows comparison of intervention and control schools over time.', 'Weakness: self-report – students may give socially desirable answers or know they are in the programme (demand characteristics).'] }
    ] }
  ]
};

/* ───────────── HEALTH KEY STUDIES ───────────── */
Object.assign(PSY.studies, {
  savage1990: { opt: 'health', sub: 'h312', name: 'Savage and Armstrong (1990)', short: 'GP consulting style & patient satisfaction',
    ref: 'Savage, R. & Armstrong, D. (1990). Effect of a general practitioner’s consulting style on patients’ satisfaction: a controlled study. BMJ, 301(6758), 968–970.',
    context: 'There was debate about whether doctors should use a doctor-centred (directing) style or a patient-centred (sharing) style. Many assumed patient-centred care is always better, but evidence was limited.',
    aim: 'To compare the effects of a directing and a sharing consulting style on patient satisfaction.',
    sample: '359 randomly selected patients consulting one general practitioner (GP) in an inner London practice.',
    method: 'Field experiment / randomised controlled study (independent measures), with questionnaires.',
    procedure: ['Patients were randomly allocated to receive either a directing or a sharing style in the part of the consultation about treatment, advice and prognosis.', 'Directing style: e.g. “You are suffering from…”, “You must take…”, “You should get better in…” – the doctor gives a firm diagnosis and instructions.', 'Sharing style: e.g. “What do you think is wrong?”, “Would you like a prescription?”, “When do you think you will be better?” – the patient is involved.', 'Patients completed a satisfaction questionnaire straight after the consultation and another one week later.', 'Response rates were 89% straight after and 58% at one week.'],
    results: ['Patients who received the directing style reported significantly higher satisfaction – e.g. with the doctor’s understanding of their problem, the explanation they were given and how much they felt helped – than those who received the sharing style.', 'The difference was clearest for patients with physical problems who were not receiving treatment for chronic conditions.'],
    conclusion: 'Many patients – particularly those with acute physical problems – prefer a directing style; doctors should not assume a sharing style is always best and may need to adapt their style to the patient.',
    ev: { plus: ['Random allocation – reduces participant variables; real patients in a real practice (ecological validity).', 'Large sample (359) and standardised questionnaires.', 'Useful for training doctors to adapt their style.'],
          minus: ['Only one GP (Savage himself) – he knew the aim, so his behaviour could be biased; results may not generalise to other doctors.', 'Drop-out by one week (58% response) may bias results.', 'Inner London only – may not generalise to other cultures where expectations of doctors differ.'] },
    debates: { app: 'Helps doctors choose a consulting style.', indsit: 'Satisfaction depended on both the doctor’s style (situational) and the patient’s condition (individual).', culture: 'Preferences for directive doctors may differ across cultures.' } },

  yokley1984: { opt: 'health', sub: 'h323', name: 'Yokley and Glenwick (1984)', short: 'Community interventions to increase immunisation',
    ref: 'Yokley, J. M. & Glenwick, D. S. (1984). Increasing the immunization of preschool children; an evaluation of applied community interventions. Journal of Applied Behavior Analysis, 17(3), 313–325.',
    context: 'Many preschool children were behind on their immunisations, putting them and others at risk. Behavioural techniques such as prompts and incentives could improve adherence at the community level.',
    aim: 'To evaluate which community interventions are most effective at increasing immunisation (clinic attendance) among preschool children who are behind on their vaccinations.',
    sample: 'The families of 1,133 immunisation-deficient preschool children in a public health setting in the USA.',
    method: 'Field experiment with random allocation to six conditions; data from clinic records (objective).',
    procedure: ['Families were randomly assigned to one of six conditions:', '1) General prompt – a reminder that children need immunisations.', '2) Specific prompt – a personalised reminder naming the child and the vaccines needed.', '3) Specific prompt + increased access – longer clinic opening hours, no appointment needed.', '4) Specific prompt + monetary incentive for attending.', '5) and 6) Two control groups that did not receive the interventions.', 'Immunisation records were checked over the following months.'],
    results: ['All interventions except the general prompt showed some improvement compared with the control groups.', 'The monetary incentive group showed the largest effect, followed by the increased-access, specific-prompt and general-prompt groups.', 'Client-specific prompts alone were the most cost-effective intervention.'],
    conclusion: 'Monetary incentives combined with specific prompts can produce powerful, immediate increases in clinic attendance, but personalised prompts alone are the most cost-effective way to improve immunisation adherence.',
    ev: { plus: ['Very large sample with random allocation – strong design, generalisable.', 'Objective data from clinic records – reliable and valid.', 'Highly useful for public health planning (cost-effectiveness).'],
          minus: ['Mainly low-income families in one US area – may not generalise to other cultures/health systems.', 'Paying people raises ethical questions and may not be sustainable.', 'Didn’t explain why families were behind (no qualitative data).'] },
    debates: { children: 'Study about children’s health, with parents giving consent and making decisions.', app: 'Directly applicable to vaccination programmes.', gen: 'Large sample but one region/culture.' } },

  brudvik2016: { opt: 'health', sub: 'h332', name: 'Brudvik et al. (2016)', short: 'Pain ratings by children, parents and doctors',
    ref: 'Brudvik, C., Moutte, S. D., Baste, V. & Morken, T. (2016). A comparison of pain assessment by physicians, parents and children in an outpatient setting. Emergency Medicine Journal, 34(3), 138–144.',
    context: 'Children’s pain is often under-treated. Doctors usually decide on pain relief from their own judgement, but children’s self-reports and parents’ judgements may differ. Rating scales such as faces scales and visual analogue/numeric scales are used.',
    aim: 'To compare children’s self-reported pain with pain assessed by their parents and by physicians, and to see whether physicians under-estimate children’s pain.',
    sample: '243 children aged 3–15 treated at the Bergen Accident and Emergency Department (Norway) in 2011, plus their parents and treating physicians.',
    method: 'Cross-sectional study comparing ratings (quantitative, correlational/comparative) using rating scales.',
    procedure: ['Children rated their own pain using age-appropriate scales (e.g. a faces scale for younger children and a visual analogue scale for older children).', 'Parents and physicians each independently rated the child’s pain on a numeric rating scale (0–10).', 'Conditions were grouped (e.g. fractures, wounds, infections, soft-tissue injuries) and ratings were compared.'],
    results: ['Mean pain ratings: physicians 3.2, parents 4.8, children 5.5.', 'Agreement between children and parents was moderate; agreement between children and physicians, and between parents and physicians, was low.', 'Physicians significantly underestimated pain in children of all ages (3 and above) and in all types of condition – most for wounds, infections and soft-tissue injuries, less for fractures.'],
    conclusion: 'Physicians underestimate children’s pain, so children should be asked to rate their own pain with age-appropriate scales and parents’ views should be considered, to make sure pain is treated properly.',
    ev: { plus: ['Large real-world sample (243) in a real emergency department – ecological validity.', 'Independent ratings from three sources allow direct comparison.', 'Useful: supports routine self-report pain scales for children.'],
          minus: ['Different scales for different ages make comparisons harder (validity).', 'Children’s self-reports may be affected by fear or by parents being present.', 'One Norwegian department – may not generalise to other cultures and health systems.'] },
    debates: { children: 'Children took part and gave self-reports – need parental consent and age-appropriate measures.', idio: 'Nomothetic comparison of averages across many children.', gen: 'One clinic in Norway.' } },

  bridge1988: { opt: 'health', sub: 'h343', name: 'Bridge et al. (1988)', short: 'Relaxation & imagery during breast cancer treatment',
    ref: 'Bridge, L. R., Benson, P., Pietroni, P. C. & Priest, R. G. (1988). Relaxation and imagery in the treatment of breast cancer. BMJ, 297, 1169–1172.',
    context: 'Cancer and its treatment (e.g. six weeks of radiotherapy) are extremely stressful. Relaxation and imagery are cheap psychological techniques that might reduce stress and improve mood.',
    aim: 'To investigate whether relaxation training, alone or combined with imagery, reduces stress (mood disturbance) in women receiving radiotherapy for early breast cancer.',
    sample: '154 women with stage I or II breast cancer attending a radiotherapy outpatient department at a London teaching hospital (139 completed; 15 dropped out).',
    method: 'Randomised controlled trial lasting six weeks (independent measures), with self-rating questionnaires.',
    procedure: ['After their first radiotherapy session, women were randomly allocated to one of three groups.', 'Control group: encouraged to talk about themselves (attention control).', 'Relaxation group: taught to concentrate on relaxing individual muscle groups.', 'Relaxation + imagery group: taught relaxation and also to imagine a peaceful scene of their own choosing.', 'Both intervention groups were given tapes and asked to practise for at least 15 minutes a day.', 'Mood, depression and anxiety were measured with self-rating scales (including the Leeds scales) at the start and after six weeks.'],
    results: ['Baseline scores were similar across groups.', 'At six weeks, total mood disturbance was significantly lower in both intervention groups than in the control group, whose mood had worsened.', 'The relaxation + imagery group was more relaxed than the relaxation-only group.', 'Women aged 55 and over benefited most; there were no differences between groups on the Leeds depression and anxiety scales.'],
    conclusion: 'Relaxation training – especially combined with imagery – reduces stress and mood disturbance in women undergoing radiotherapy for early breast cancer.',
    ev: { plus: ['Randomised controlled trial with a control group – strong evidence of cause and effect.', 'Cheap, safe, practical technique patients can use themselves (application, free will).', 'Standardised questionnaires – reliable and quantitative.'],
          minus: ['Self-report measures – social desirability and demand characteristics (women knew which group they were in).', 'Only women with early breast cancer in the UK – limited generalisation.', 'Short follow-up (six weeks) – long-term effects unknown.'] },
    debates: { app: 'Easy to add to cancer care.', indsit: 'Older women benefited most – individual differences.', ethics: 'Control group did not receive the potentially helpful technique during the study.' } },

  shoshani2014: { opt: 'health', sub: 'h353', name: 'Shoshani and Steinmetz (2014)', short: 'Positive psychology in school',
    ref: 'Shoshani, A. & Steinmetz, S. (2014). Positive psychology at school: A school-based intervention to promote adolescents’ mental health and well-being. Journal of Happiness Studies, 15(6), 1289–1311.',
    context: 'Adolescence is a time of rising anxiety and depression. Positive psychology suggests teaching skills such as gratitude, optimism and using strengths can build well-being. Schools can reach many young people at once.',
    aim: 'To evaluate whether a year-long, school-wide positive psychology intervention improves adolescents’ mental health (reducing distress) and well-being (e.g. self-esteem, optimism).',
    sample: '1,038 Israeli middle-school students in grades 7–9: 537 at a large intervention school in central Israel and 501 at a demographically similar control school.',
    method: 'Field experiment (quasi-experiment – schools, not individuals, were allocated) with a wait-list control school; longitudinal; psychometric questionnaires.',
    procedure: ['Staff at the intervention school were trained in positive psychology; students then took part in a year-long programme of sessions in class.', 'Topics included areas such as: self-discovery and character strengths, positive emotions, optimism and hope, gratitude, goal-setting, positive relationships and resilience.', 'Students in both schools completed questionnaires measuring distress (e.g. anxiety, depression, interpersonal sensitivity) and well-being (e.g. self-esteem, self-efficacy, optimism) at the start and end of the school year.', 'The control school received the programme later (wait-list).'],
    results: ['Intervention students showed declines in general distress, anxiety and depression symptoms, while symptoms in the control school increased significantly.', 'The programme also strengthened self-esteem, self-efficacy and optimism, and reduced interpersonal sensitivity.'],
    conclusion: 'Building positive psychology and well-being education into the school curriculum can improve adolescents’ mental health and well-being.',
    ev: { plus: ['Large sample and a matched control school; longitudinal (a full school year).', 'Highly practical – can be used in other schools.', 'Standardised psychometric measures – reliable, quantitative.'],
          minus: ['Not randomised at the student level – one intervention school vs one control school (differences between schools may matter).', 'Self-report questionnaires – demand characteristics (students knew they had the programme).', 'Israeli culture only – may not generalise; long-term effects not shown in this study.'] },
    debates: { children: 'Adolescent participants – consent from parents/school; protection from harm.', culture: 'Carried out in Israel; well-being programmes may need cultural adaptation.', psychometrics: 'Used standardised questionnaires to measure well-being.' } }
});

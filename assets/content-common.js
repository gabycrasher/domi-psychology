/* Shared content: issues & debates, research methods, exam technique (9990 syllabus for 2027) */
window.PSY = window.PSY || { options: {}, studies: {} };

/* Issues & debates (the 8 A Level ones) + methodology tags used on topic pages */
PSY.debates = {
  app: { name: 'Application to everyday life', kind: 'debate', emoji: '🌍',
    def: 'How useful psychological research is for real life – helping people, improving services, informing policy.',
    use: 'Say exactly WHO can use the findings and HOW (e.g. “restaurants could play classical music to raise spending”). Then evaluate: is the research valid enough to be applied? Are there ethical issues with applying it (manipulating consumers)?',
    eg: ['Telephone CBT makes OCD treatment accessible (Lovell et al.).', 'Personalised prompts are a cheap way to raise immunisation rates (Yokley and Glenwick).', 'Presenting rewards in an informational way improves motivation (Landry et al.).'] },
  indsit: { name: 'Individual vs situational explanations', kind: 'debate', emoji: '🧍‍♀️',
    def: 'Is behaviour caused by something about the PERSON (personality, genes, thinking style) or by the SITUATION/ENVIRONMENT they are in?',
    use: 'Identify which side an explanation or study supports, then argue that most behaviour is an interaction of both.',
    eg: ['Individual: Type A personality, trait paranoia (Freeman), self-monitoring (Snyder and DeBono).', 'Situational: music in a restaurant (North et al.), shift patterns (Gold et al.), how a reward is presented (Landry et al.).'] },
  nn: { name: 'Nature vs nurture', kind: 'debate', emoji: '🧬',
    def: 'Is behaviour inherited/biological (NATURE – genes, hormones, brain) or learned from experience and environment (NURTURE)?',
    use: 'Twin and gene studies support nature; learning and social explanations support nurture. The strongest answers use an interactionist view such as the diathesis–stress model.',
    eg: ['Nature: genetic explanations of schizophrenia; Oruč et al. (serotonin genes).', 'Nurture: classical conditioning of phobias (Little Albert); learned helplessness.', 'Both: Genain quadruplets – identical genes plus a harsh home life.'] },
  children: { name: 'Use of children in research', kind: 'debate', emoji: '🧒',
    def: 'Research with children raises special practical and ethical issues: consent must come from parents/guardians, children are vulnerable to harm and may not understand their right to withdraw; their language and attention are limited.',
    use: 'Discuss ethics (consent, harm, withdrawal), validity (demand characteristics, age-appropriate measures) and usefulness (research can protect children).',
    eg: ['Fischer et al. – logo recognition in 3–6 year-olds.', 'Brudvik et al. – children rating their own pain.', 'Shoshani and Steinmetz – adolescents at school; Little Albert and Little Hans.'] },
  culture: { name: 'Cultural differences', kind: 'debate', emoji: '🌐',
    def: 'Behaviour, beliefs and norms differ between cultures (e.g. individualist vs collectivist). Theories and studies from one culture may not apply in another (ethnocentrism).',
    use: 'Point out where the study was done and whether results would generalise; give a reason why culture might change the result.',
    eg: ['Earley (1993): social loafing in Americans but social striving in Chinese/Israeli managers.', 'Personal space norms differ – Robson et al. tested only Americans.', 'Maslow’s hierarchy reflects individualist values.'] },
  red: { name: 'Reductionism vs holism', kind: 'debate', emoji: '🔬',
    def: 'REDUCTIONISM explains complex behaviour by breaking it into simple parts (genes, neurotransmitters, single variables). HOLISM looks at the whole person and the interaction of many factors.',
    use: 'Reductionism makes research scientific and testable but may miss important factors; holism gives a fuller picture but is harder to test. Give examples of both.',
    eg: ['Reductionist: dopamine hypothesis; North et al. (music → spending).', 'Holistic: diathesis–stress model; Hackman and Oldham’s model with moderators; combining drugs and CBT.'] },
  det: { name: 'Determinism vs free will', kind: 'debate', emoji: '⚖️',
    def: 'DETERMINISM: behaviour is caused by factors outside our control (biological – genes; environmental – learning, situations). FREE WILL: people can choose their behaviour.',
    use: 'Most explanations are deterministic to some degree. Therapies such as CBT assume some free will (people can change their thinking). Soft determinism is a middle position.',
    eg: ['Biological determinism: genetic explanations, dopamine.', 'Environmental determinism: shoppers influenced by music or shelf position; choice blindness.', 'Free will: cognitive therapies, SDT’s autonomy.'] },
  idio: { name: 'Idiographic vs nomothetic', kind: 'debate', emoji: '🔍',
    def: 'IDIOGRAPHIC: studying individuals in depth to understand their unique experience (case studies, qualitative). NOMOTHETIC: studying large groups to find general laws (experiments, statistics).',
    use: 'Idiographic = rich detail but hard to generalise; nomothetic = generalisable laws but ignores individual differences.',
    eg: ['Idiographic: Chapman and DeLapp (one man with BII phobia); Little Hans; Aleem and Ajarim.', 'Nomothetic: Lovell et al. RCT; Yokley and Glenwick (1,133 families); Robson et al. survey.'] },
  /* methodology tags */
  case: { name: 'Case studies', kind: 'method', emoji: '📁', link: 'm-case' },
  gen: { name: 'Generalisations from findings', kind: 'method', emoji: '👥', link: 'm-sampling' },
  experiments: { name: 'Experiments', kind: 'method', emoji: '🧪', link: 'm-exp' },
  fieldexp: { name: 'Field experiments', kind: 'method', emoji: '🏪', link: 'm-exp' },
  longitudinal: { name: 'Longitudinal studies', kind: 'method', emoji: '📅', link: 'm-long' },
  ethics: { name: 'Ethics', kind: 'method', emoji: '🛡️', link: 'm-ethics' },
  quantqual: { name: 'Quantitative & qualitative data', kind: 'method', emoji: '🔢', link: 'm-data' },
  objsubj: { name: 'Objective & subjective data', kind: 'method', emoji: '🎯', link: 'm-data' },
  psychometrics: { name: 'Psychometrics', kind: 'method', emoji: '📏', link: 'm-psychometric' },
  validity: { name: 'Validity', kind: 'method', emoji: '✅', link: 'm-validity' },
  ecological: { name: 'Ecological validity', kind: 'method', emoji: '🌳', link: 'm-validity' },
  reliability: { name: 'Reliability', kind: 'method', emoji: '🔁', link: 'm-reliability' },
  questionnaires: { name: 'Questionnaires', kind: 'method', emoji: '📝', link: 'm-self' },
  interviews: { name: 'Interviews', kind: 'method', emoji: '🎙️', link: 'm-self' },
  selfreport: { name: 'Self-reports', kind: 'method', emoji: '🗣️', link: 'm-self' },
  observations: { name: 'Observations', kind: 'method', emoji: '👀', link: 'm-obs' }
};
PSY.debateOrder = ['app', 'indsit', 'nn', 'children', 'culture', 'red', 'det', 'idio'];

/* Research methods toolkit: A Level additions first, then AS recap */
PSY.methods = [
  { id: 'm-rct', level: 'A Level', title: 'Randomised controlled trials (RCTs)', emoji: '🎲',
    body: `<p>An experiment where participants are <b>randomly allocated</b> to a treatment group or a <b>control</b> group (placebo, no treatment, waiting list or the usual treatment), and outcomes are compared. Often <b>double-blind</b> (neither participants nor researchers know who gets what).</p>
<ul><li><i>+</i> Random allocation balances participant variables ➜ cause and effect; the “gold standard” for testing treatments.</li><li><i>+</i> Double-blind reduces demand characteristics and researcher bias.</li><li><i>−</i> Ethical issues: the control group may miss out on an effective treatment.</li><li><i>−</i> Often strict entry criteria ➜ participants may not represent real patients.</li></ul>
<p class="eg">Examples: Lovell et al. (2006), Bridge et al. (1988), Sensky et al. (2000), the trials pooled by Grant et al. (2008).</p>` },
  { id: 'm-postal', level: 'A Level', title: 'Postal questionnaires', emoji: '✉️',
    body: `<p>Questionnaires sent and returned by post.</p><ul><li><i>+</i> Reach large, spread-out samples cheaply; anonymous ➜ more honest answers on sensitive topics; no interviewer effects.</li><li><i>−</i> Low response rates ➜ biased (volunteer) sample; can’t clarify confusing questions; slow; you can’t be sure who completed it.</li></ul>` },
  { id: 'm-rating', level: 'A Level', title: 'Rating scales & forced/fixed choice', emoji: '⭐',
    body: `<p><b>Rating scales</b>: respondents give a number or position on a scale (e.g. Likert 1–7 “strongly disagree” to “strongly agree”, visual analogue scale for pain). <b>Forced/fixed choice</b>: respondents must choose from set options (yes/no, A or B).</p><ul><li><i>+</i> Quantitative ➜ easy to analyse and compare; quick; standardised.</li><li><i>−</i> Responses may not match what people really mean; central tendency bias (always picking the middle); forced choice can make people choose an option that doesn’t fit them; no explanation of <i>why</i>.</li></ul><p class="eg">Examples: JDI (Yes/No/?), VAS in Brudvik et al., Likert scales in Robson et al. and Landry et al.</p>` },
  { id: 'm-psychometric', level: 'A Level', title: 'Psychometric tests', emoji: '📏',
    body: `<p>Standardised tests that measure psychological characteristics (personality, abilities, symptoms, attitudes) and produce a <b>score</b> that can be compared against norms. They must be <b>reliable</b> (consistent) and <b>valid</b> (measure what they claim).</p><ul><li><i>+</i> Objective scoring, quantitative, standardised ➜ comparable across people and over time.</li><li><i>−</i> Self-report bias (social desirability); may be culturally biased; reduce complex experience to a number (reductionist).</li></ul><p class="eg">Examples: BDI, GAD-7, Y-BOCS, MOCI, K-SAS, McGill Pain Questionnaire, SRRS, LPI, JDI.</p>` },
  { id: 'm-hyp', level: 'A Level', title: 'Hypotheses', emoji: '💡',
    body: `<ul><li><b>Null hypothesis</b>: predicts no difference/relationship (“There will be no difference in spending between classical and pop music conditions.”).</li><li><b>Alternative – directional (one-tailed)</b>: predicts the direction (“Customers will spend MORE with classical music than pop music.”).</li><li><b>Alternative – non-directional (two-tailed)</b>: predicts a difference but not its direction (“There will be a difference in spending…”).</li></ul><p class="tip">💡 Always operationalise both variables in your hypothesis (what exactly is measured, e.g. “mean spend per head in £”).</p>` },
  { id: 'm-validity', level: 'A Level', title: 'Validity (including temporal & ecological)', emoji: '✅',
    body: `<p><b>Validity</b> = whether a study or test measures what it intends to measure and whether findings are true/accurate.</p><ul><li><b>Ecological validity</b>: how well findings generalise to real-life settings (field studies usually higher).</li><li><b>Temporal validity</b> (A Level): whether findings still apply over <b>time</b> – e.g. studies from the 1950s (Janis and Feshbach) or 1980s may not reflect today’s attitudes, technology or workplaces.</li><li>Threats: <b>demand characteristics</b>, <b>subjectivity</b> of researchers, <b>social desirability</b>, poor <b>generalisability</b> of the sample.</li></ul>` },
  { id: 'm-reliability', level: 'AS recap', title: 'Reliability & replicability', emoji: '🔁',
    body: `<p><b>Reliability</b> = consistency. <b>Test–retest</b>: same people, same test, later – similar scores? <b>Inter-rater / inter-observer</b>: two or more observers/raters agree? <b>Replicability</b>: can the study be repeated exactly (standardised procedures, detailed method)?</p><p class="tip">💡 Improve reliability with standardised instructions, operationalised behavioural categories, trained observers and pilot studies.</p>` },
  { id: 'm-exp', level: 'AS recap', title: 'Experiments (lab & field)', emoji: '🧪',
    body: `<p>The researcher manipulates an <b>IV</b> and measures the effect on a <b>DV</b>, controlling other variables.</p><ul><li><b>Laboratory</b>: controlled setting ➜ high control/reliability, but artificial (low ecological validity) and demand characteristics.</li><li><b>Field</b>: natural setting ➜ higher ecological validity, but less control and ethical issues (consent).</li><li><b>Designs</b>: independent measures (different people each condition – no order effects but participant variables), repeated measures (same people – need counterbalancing for order effects such as practice and fatigue), matched pairs.</li><li><b>Random allocation</b> and <b>control groups</b> strengthen cause-and-effect conclusions.</li></ul>` },
  { id: 'm-self', level: 'AS recap', title: 'Self-reports: questionnaires & interviews', emoji: '📝',
    body: `<ul><li><b>Questionnaires</b>: paper-and-pencil, online or postal; open and closed questions.</li><li><b>Interviews</b>: structured (fixed questions), semi-structured (some flexibility), unstructured (conversation); face-to-face or telephone.</li><li><b>Open questions</b> ➜ qualitative, detailed; <b>closed</b> ➜ quantitative, easy to compare.</li><li><i>−</i> Social desirability, demand characteristics, memory errors; leading questions.</li></ul>` },
  { id: 'm-case', level: 'AS recap', title: 'Case studies', emoji: '📁',
    body: `<p>In-depth study of a single person or unit, often over time, using several techniques (interviews, observations, tests) – <b>triangulation</b>.</p><ul><li><i>+</i> Rich, detailed qualitative data; can study rare conditions; idiographic.</li><li><i>−</i> Can’t generalise; researcher bias/subjectivity; hard to replicate.</li></ul><p class="eg">Examples: Chapman and DeLapp, Little Hans, Little Albert, Genain quadruplets, Aleem and Ajarim, MacLachlan et al.</p>` },
  { id: 'm-obs', level: 'AS recap', title: 'Observations', emoji: '👀',
    body: `<ul><li><b>Overt / covert</b> (participants know / don’t know), <b>participant / non-participant</b>, <b>structured</b> (behavioural categories, tally) / <b>unstructured</b>, <b>naturalistic / controlled</b>.</li><li><i>+</i> Records what people actually do (not what they say).</li><li><i>−</i> Observer bias (use two observers – inter-observer reliability); covert observation raises consent issues; overt observation can change behaviour.</li></ul>` },
  { id: 'm-corr', level: 'AS recap', title: 'Correlations', emoji: '📈',
    body: `<p>Measure the relationship between two <b>co-variables</b>: positive, negative or none; strength shown on a <b>scatter graph</b>. <i>−</i> Correlation does not show causation (a third variable may be responsible).</p>` },
  { id: 'm-long', level: 'AS recap', title: 'Longitudinal studies', emoji: '📅',
    body: `<p>The same participants are studied over a long period (repeated measures over time), e.g. follow-ups in Lovell et al. and Chapman and DeLapp.</p><ul><li><i>+</i> Show change and development; participants act as their own control.</li><li><i>−</i> <b>Attrition</b> (drop-out) can bias the sample; time-consuming and costly; practice effects.</li></ul>` },
  { id: 'm-data', level: 'AS recap', title: 'Types of data', emoji: '🔢',
    body: `<ul><li><b>Quantitative</b>: numbers (scores, times, counts) – easy to analyse and compare, but may lack depth.</li><li><b>Qualitative</b>: words/descriptions (interview answers) – rich detail, but harder to analyse and more subjective.</li><li><b>Objective</b>: not affected by the researcher’s or participant’s opinions (cortisol levels, receipts).</li><li><b>Subjective</b>: based on personal judgement (self-ratings of pain).</li></ul>` },
  { id: 'm-sampling', level: 'AS recap', title: 'Sampling & generalisation', emoji: '👥',
    body: `<ul><li><b>Opportunity</b>: whoever is available – quick, but biased.</li><li><b>Volunteer (self-selecting)</b>: people who respond to adverts – easy, but volunteers may be more motivated.</li><li><b>Random</b>: everyone in the population has an equal chance – most representative, but hard to achieve.</li><li><b>Generalisation</b>: can findings be applied to the wider population? Consider size, culture, age, gender and occupation of the sample.</li></ul>` },
  { id: 'm-ethics', level: 'AS recap', title: 'Ethics', emoji: '🛡️',
    body: `<p><b>Humans</b>: minimising harm, valid (informed) consent, right to withdraw, lack of deception, confidentiality, privacy, debriefing. <b>Animals</b>: minimising harm, replacement, species, numbers, procedures (pain, housing, deprivation).</p><p class="tip">💡 In Paper 4 planning answers, always mention how you’ll gain consent (parents for children), protect participants and debrief them.</p>` },
  { id: 'm-analysis', level: 'AS recap', title: 'Data analysis', emoji: '📊',
    body: `<p>Measures of central tendency: <b>mode</b>, <b>median</b>, <b>mean</b>. Measures of spread: <b>range</b> and <b>standard deviation</b> (how spread out scores are around the mean). Graphs: <b>bar chart</b> (categories), <b>histogram</b> (continuous data), <b>scatter graph</b> (correlations). You won’t be asked to do calculations.</p>` }
];

/* Exam guide */
PSY.exam = {
  papers: [
    { n: 3, name: 'Paper 3 – Specialist Options: Approaches, Issues and Debates', time: '1 h 30 min', marks: 60, weight: '25% of A Level',
      what: 'For EACH of your two options (30 marks each): three structured short-answer questions (14 marks total) and a structured essay with (a) “describe” [6] and (b) “evaluate” [10]. The essay is on a different topic area from the short-answer questions. Paper 3 and Paper 4 topic areas are different from each other.',
      ao: 'AO1 26% · AO2 26% · AO3 48% – evaluation is worth the most!' },
    { n: 4, name: 'Paper 4 – Specialist Options: Application and Research Methods', time: '1 h 30 min', marks: 60, weight: '25% of A Level',
      what: 'Section A (36 marks): two structured questions on each of your two options (18 marks per option) – applying content and key studies, with research methods. Section B (24 marks): choose ONE planning question from four (one per option): plan a study (10 marks) and answer structured questions evaluating your plan (14 marks).',
      ao: 'AO1 26% · AO2 44% · AO3 30% – application is worth the most!' }
  ],
  aos: [
    ['AO1', 'Knowledge and understanding', 'Terms, theories, studies, methods, issues and debates.'],
    ['AO2', 'Application', 'Using psychology in familiar or unfamiliar scenarios; planning investigations.'],
    ['AO3', 'Analysis and evaluation', 'Strengths and weaknesses, bias, using evidence, reaching conclusions.']
  ],
  commands: [
    ['Analyse', 'Examine in detail to show meaning, identify elements and the relationship between them.'],
    ['Compare', 'Identify/comment on similarities and/or differences.'],
    ['Define', 'Give precise meaning.'],
    ['Describe', 'State the points of a topic / give characteristics and main features.'],
    ['Evaluate', 'Judge or calculate the quality, importance, amount, or value of something.'],
    ['Explain', 'Set out purposes or reasons / make the relationships between things clear / say why and/or how and support with relevant evidence.'],
    ['Give', 'Produce an answer from a given source or recall/memory.'],
    ['Identify', 'Name/select/recognise.'],
    ['Outline', 'Set out the main points.'],
    ['State', 'Express in clear terms.'],
    ['Suggest', 'Apply knowledge and understanding to situations where there are a range of valid responses in order to make proposals / put forward considerations.']
  ],
  essay: `
<h4>Part (a) “Describe” – 6 marks</h4>
<ul><li>Use <b>specialist terms</b> accurately and define them.</li><li>Give <b>detail</b>: names, dates, procedures, findings (numbers help!).</li><li>Cover what the question asks (e.g. “two explanations” = both, roughly equally).</li><li>No evaluation needed here – save it for (b).</li><li>Aim for about 1 side / 10 minutes.</li></ul>
<h4>Part (b) “Evaluate” – 10 marks</h4>
<ul><li>Cover the <b>named issue</b> in the question (e.g. “including a discussion of reductionism”) – it is compulsory!</li><li>Then add at least <b>2–3 other evaluation points</b> (other debates, methodology, ethics, comparisons).</li><li>Build each point with <b>P-E-E-L</b>: <b>P</b>oint ➜ <b>E</b>vidence/example ➜ <b>E</b>xplain why it matters ➜ <b>L</b>ink back to the question.</li><li>Use <b>both sides</b> (strengths AND weaknesses).</li><li>Finish with a short <b>conclusion</b> that weighs up the arguments.</li><li>Aim for about 15 minutes.</li></ul>
<div class="example"><b>Example P-E-E-L point (reductionism):</b> The dopamine hypothesis is reductionist (P) because it explains schizophrenia only in terms of one neurotransmitter, dopamine (E). This is a problem because it ignores social factors such as stressful family environments, which the Genain quadruplets case suggests also matter (E). Therefore a holistic diathesis–stress explanation may be more complete (L).</div>`,
  planning: `
<h4>Section B planning question – the plan (10 marks)</h4>
<p>Include <b>general features</b> (every plan) <b>+ specific features</b> (for your method), in enough detail that someone could <b>replicate</b> it.</p>
<div class="two"><div class="box"><b>General features</b><ul><li>Aim(s) and hypotheses</li><li>Procedure (step by step)</li><li>Sample and sampling technique</li><li>Ethics</li><li>How the plan makes the study <b>valid</b></li><li>How the plan makes the study <b>reliable</b></li><li>Types of data, analysis, descriptive statistics</li></ul></div>
<div class="box"><b>Specific features by method</b><ul><li><b>Experiment</b>: type, IV, DV, controls/standardisation, design, counterbalancing/random allocation, location (field)</li><li><b>Self-report</b>: question format, example questions, scoring; technique (paper/online/postal; face-to-face/telephone); interview format</li><li><b>Case study</b>: participant details, information collected, 2+ techniques, triangulation</li><li><b>Observation</b>: overt/covert, participant/non-, naturalistic/controlled, structured (categories)/unstructured, number of observers</li><li><b>Correlation</b>: two co-variables, how each is measured, expected relationship/scatter graph</li><li><b>Longitudinal</b>: tests/tasks, scoring, frequency/interval, re-contacting participants, controls</li></ul></div></div>
<h4>Evaluating your plan (14 marks)</h4>
<ul><li>You will be asked structured questions – e.g. a strength/weakness of your sample, method, measure or ethics; how you could improve validity/reliability.</li><li>Always refer to <b>YOUR</b> plan specifically – never answer generically.</li></ul>
<div class="example"><b>Mini example (Health):</b> “Plan a field experiment to see whether text-message reminders improve attendance at a dental clinic.” – <i>Aim</i>: to investigate whether reminders increase attendance. <i>H1</i>: patients who receive an SMS reminder 24 h before will miss fewer appointments than those who don’t. <i>Sample</i>: 200 adult patients booked at one clinic over 2 months (opportunity); random allocation (odd/even booking numbers) to reminder vs no reminder. <i>IV</i>: reminder vs none. <i>DV</i>: attended or missed (clinic records – objective). <i>Controls</i>: same message wording and timing; same clinic and staff. <i>Ethics</i>: consent to receive texts, confidentiality of records. <i>Data</i>: percentage attending in each group; bar chart. <i>Validity</i>: real clinic (ecological validity), objective records. <i>Reliability</i>: standardised message and procedure – replicable.</div>`,
  tips: [
    'Learn every key study using the same headings: context → aim → sample → procedure → results → conclusion → evaluation → issues & debates.',
    'For every topic, prepare one evaluation point for EACH of the 8 issues and debates – questions always name one.',
    'Use numbers: “MZ concordance about 48%”, “62% vs 42%”, “£32.52 vs £29.46” – detail scores marks in “describe” questions.',
    'Practise planning questions with a checklist until general + specific features come automatically.',
    'Time: about 1 mark per minute plus reading time. Don’t spend 20 minutes on a 4-mark question.',
    'Spaced repetition beats cramming: revisit topics after 1 day, 3 days, a week, two weeks (the flashcards do this for you).',
    'Teach it: explaining a topic out loud (or to a friend) is one of the best ways to find gaps.'
  ]
};

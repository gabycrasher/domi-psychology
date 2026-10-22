/* Year 12 (AS Level) shared content: AS issues & debates, method tags and the Papers 1 & 2 exam guide (9990 syllabus for 2027) */
window.PSY = window.PSY || { options: {}, studies: {} };
PSY.y12 = PSY.y12 || { options: {}, studies: {} };

/* The five AS Level issues & debates, with core-study examples, plus method tags that link to the Research methods unit */
PSY.y12.debates = {
  app: { name: 'Application to everyday life', kind: 'debate', emoji: '🌍',
    def: 'How useful a study is in the real world: who could use the findings, and how could they make life better?',
    use: 'Name WHO could use the findings and HOW (e.g. “teachers could let bored students doodle”). Then evaluate: is the study valid enough to be applied? Would the findings work for other people and places?',
    eg: ['Andrade: doodling could help people concentrate in long meetings or lectures.', 'Pozzulo et al.: police could change line-up procedures for child witnesses.', 'Fagen et al.: reward-based training can replace cruel elephant training methods.', 'Saavedra and Silverman: treating disgust (not just fear) can help some phobias.', 'Hölzel et al.: mindfulness courses could reduce stress and change the brain.'] },
  indsit: { name: 'Individual vs situational explanations', kind: 'debate', emoji: '🧍‍♀️',
    def: 'Is behaviour caused by something about the PERSON (personality, empathy, gender, autism) or by the SITUATION they are in (setting, other people, orders)?',
    use: 'Say which side a study supports and give the evidence – then point out that most behaviour is an interaction of both.',
    eg: ['Situational: Milgram – 65% obeyed to 450V because of the Yale setting and the experimenter’s prods.', 'Individual: in Milgram, 35% defied the experimenter – people differ.', 'Situational: Piliavin – the victim’s state (cane vs drunk) changed helping; individual: men were most of the helpers.', 'Individual: Perry et al. – oxytocin’s effect depended on each person’s empathy level.'] },
  nn: { name: 'Nature vs nurture', kind: 'debate', emoji: '🧬',
    def: 'Is behaviour caused by biology we are born with (NATURE – genes, hormones, brain) or by what we learn from experience and the environment (NURTURE)?',
    use: 'Biological studies usually support nature; learning studies support nurture. Strong answers show how the two interact (e.g. experience changing the brain in Hölzel et al.).',
    eg: ['Nature: Hassett et al. – male monkeys preferred wheeled toys without human gender socialisation (hormones).', 'Nature: Dement and Kleitman – REM sleep cycles are a biological rhythm.', 'Nurture: Bandura et al. – children copied aggression they had watched.', 'Nurture: Fagen et al. and Saavedra and Silverman – behaviour and phobias are learned and can be unlearned.', 'Both: Hölzel et al. – an experience (mindfulness) physically changed brain grey matter.'] },
  children: { name: 'Use of children in research', kind: 'debate', emoji: '🧒',
    def: 'Research with children brings special ethical and practical issues: parents must give consent, children are vulnerable and may not understand the right to withdraw, and they may try to please adults.',
    use: 'Discuss ethics (consent, harm, withdrawal), validity (demand characteristics, understanding the task) and usefulness (research can protect children). Say what the researchers did to protect them.',
    eg: ['Bandura et al.: children aged 3–5 were exposed to an aggressive model and made frustrated – possible harm.', 'Pozzulo et al.: 4–7 year-olds – shows that children may pick someone from a line-up to please the adult.', 'Saavedra and Silverman: a 9-year-old boy – therapy helped him, and his mother took part.'] },
  animals: { name: 'Use of animals in research', kind: 'debate', emoji: '🐒',
    def: 'Animals are studied when research on humans would be unethical or impossible, or because their behaviour is less affected by culture. But they cannot consent, and results may not generalise to humans.',
    use: 'Weigh up: ethics (harm, housing, rewards vs deprivation), the benefits (to animals and humans) and whether you can generalise from animals to people.',
    eg: ['Hassett et al.: rhesus monkeys were used because they are not taught human gender roles – but are monkeys like children?', 'Fagen et al.: elephants were trained with rewards (bananas), not punishment – this improved their welfare.', 'Both studies observed animals in their normal home groups/stables – low harm.'] },
  /* methodology tags: link to the Research methods unit */
  experiments: { name: 'Experiments', kind: 'method', emoji: '🧪', sub: 'ar11' },
  lab: { name: 'Laboratory experiments', kind: 'method', emoji: '🔬', sub: 'ar11' },
  fieldexp: { name: 'Field experiments', kind: 'method', emoji: '🚇', sub: 'ar11' },
  design: { name: 'Experimental design', kind: 'method', emoji: '🧩', sub: 'ar12' },
  variables: { name: 'Variables & controls', kind: 'method', emoji: '🎛️', sub: 'ar13' },
  questionnaires: { name: 'Questionnaires', kind: 'method', emoji: '📝', sub: 'ar21' },
  interviews: { name: 'Interviews', kind: 'method', emoji: '🎙️', sub: 'ar22' },
  observations: { name: 'Observations', kind: 'method', emoji: '👀', sub: 'ar23' },
  case: { name: 'Case studies', kind: 'method', emoji: '📁', sub: 'ar31' },
  correlations: { name: 'Correlations', kind: 'method', emoji: '📈', sub: 'ar32' },
  longitudinal: { name: 'Longitudinal studies', kind: 'method', emoji: '📅', sub: 'ar33' },
  hyp: { name: 'Aims & hypotheses', kind: 'method', emoji: '💡', sub: 'ar41' },
  sampling: { name: 'Sampling & generalising', kind: 'method', emoji: '👥', sub: 'ar42' },
  quantqual: { name: 'Quantitative & qualitative data', kind: 'method', emoji: '🔢', sub: 'ar43' },
  ethics: { name: 'Ethics (humans)', kind: 'method', emoji: '🛡️', sub: 'ar51' },
  animalethics: { name: 'Ethics (animals)', kind: 'method', emoji: '🐾', sub: 'ar52' },
  validity: { name: 'Validity', kind: 'method', emoji: '✅', sub: 'ar53' },
  reliability: { name: 'Reliability', kind: 'method', emoji: '🔁', sub: 'ar53' },
  graphs: { name: 'Data & graphs', kind: 'method', emoji: '📊', sub: 'ar62' }
};
PSY.y12.debateOrder = ['app', 'indsit', 'nn', 'children', 'animals'];

/* Exam guide for Papers 1 and 2 */
PSY.y12.exam = {
  papers: [
    { n: 1, name: 'Paper 1 – Approaches, Issues and Debates', time: '1 h 30 min', marks: 60, weight: '50% of AS · 25% of A Level',
      what: 'Answer ALL questions. Section A (38 marks): short-answer questions on the core studies. Section B (22 marks): extended answers that may ask you to compare studies and will ask you to evaluate a study (or studies). Questions also cover the four approaches and the five AS issues & debates.',
      ao: 'AO1 53% · AO2 17% · AO3 30% – knowing the core studies in detail scores the most!' },
    { n: 2, name: 'Paper 2 – Research Methods', time: '1 h 30 min', marks: 60, weight: '50% of AS · 25% of A Level',
      what: 'Answer ALL questions. Section A (46 marks): short-answer questions on research methods in general, on the methods used in the core studies, and three short scenario questions (apply methods to a new situation). Section B (14 marks): one planning question – plan a study and evaluate parts of your plan.',
      ao: 'AO1 22% · AO2 50% · AO3 28% – applying methods to new scenarios scores the most!' }
  ],
  aos: [
    ['AO1', 'Knowledge and understanding', 'Terms, core studies, approaches, methods, issues and debates.'],
    ['AO2', 'Application', 'Using psychology in new scenarios; planning your own study.'],
    ['AO3', 'Analysis and evaluation', 'Strengths and weaknesses, comparing studies, reaching conclusions.']
  ],
  commands: null, /* same official list as A Level – filled in by the app */
  essay: `
<h4>Section A – short answers</h4>
<ul><li>Read the marks: <b>1 mark = 1 clear point</b>. A 2-mark “describe” needs a point <i>plus</i> detail.</li><li>Use the <b>study’s own details</b> – “the 40 men in Milgram’s study”, not “the participants”.</li><li>“<b>Explain</b>” = say what AND why. “<b>Outline</b>” = the main points, briefly.</li><li>Many questions ask about the study’s <b>method</b>: the IV and DV, the design, the sample, controls, data type, validity, reliability, ethics.</li></ul>
<h4>Section B – evaluating and comparing</h4>
<ul><li>A typical question: “<i>Evaluate the study by Milgram in terms of two strengths and two weaknesses. At least one of your evaluation points must be about ethics.</i>”</li><li>Cover the <b>named issue</b> (it is compulsory!), then pick your other points from: validity, reliability, sample/generalisability, ethics, type of data, application, and the issues & debates.</li><li>Build every point with <b>P-E-E</b>: <b>P</b>oint ➜ <b>E</b>vidence from the study ➜ <b>E</b>xplain why it is a strength/weakness.</li><li>Comparison questions (“explain one similarity and one difference between…”) – name BOTH studies in every sentence and use a linking word (<i>both</i>, <i>whereas</i>, <i>however</i>).</li><li>Finish with a short <b>conclusion</b> where the question asks for one.</li></ul>
<div class="example"><b>Example P-E-E point (ethics – weakness):</b> Milgram’s study broke the guideline of protecting participants from harm (P). Fourteen of the 40 men showed signs of nervous laughter, and three had full-blown uncontrollable seizures (E). This means participants left the lab more stressed than when they arrived, even though the study was not designed to help them (E).</div>
<div class="example"><b>Example comparison (similarity):</b> Both Bandura et al. and Hassett et al. used <b>observations with behavioural categories</b>: Bandura’s researchers recorded imitative aggression in 5-second intervals, whereas Hassett’s researchers coded behaviours such as “carry” and “drag” from video. In both, the categories made the data quantitative and easier to check for inter-rater reliability.</div>`,
  planning: `
<h4>Section B – the planning question (14 marks)</h4>
<p>You are given a topic and some features of the study (e.g. “plan a <b>questionnaire</b>” or “an experiment with this IV”). You plan the rest, then answer questions evaluating your plan.</p>
<div class="two"><div class="box"><b>General features (every plan)</b><ul><li>A clear <b>procedure</b> – step by step, so someone could <b>replicate</b> it</li><li>How your plan makes the study <b>valid</b></li><li>How your plan makes the study <b>reliable</b></li><li>The <b>type of data</b> (quantitative / qualitative)</li></ul></div>
<div class="box"><b>Specific features by method</b><ul><li><b>Experiment</b>: IV, DV, controls/standardisation, experimental design (+ location for a field experiment)</li><li><b>Self-report</b>: open/closed questions, example questions, how answers are scored; questionnaire technique (paper/online) or interview format (structured…) & technique (face-to-face/telephone)</li><li><b>Case study</b>: details of the participant, information collected, 2+ techniques, triangulation</li><li><b>Observation</b>: overt/covert, participant/non-participant, naturalistic/controlled, structured (behavioural categories)/unstructured</li><li><b>Correlation</b>: two co-variables, how each is measured, the relationship / scatter graph</li><li><b>Longitudinal</b>: tests/tasks, scoring, how often (interval), re-contacting participants, controls</li></ul></div></div>
<p class="tip">💡 From the syllabus: you are <b>not</b> expected to include aims or hypotheses in your plan, and you will <b>not</b> be asked to evaluate the sample/generalisability or ethics of your plan. Evaluation focuses on <b>practical/methodological issues, validity and reliability</b>.</p>
<h4>Evaluating your plan</h4>
<ul><li>Always refer to <b>YOUR</b> plan (“my 5-second tally of…”) – generic answers lose marks.</li><li>Good angles: is it <b>practical</b> (time, cost, access)? Could <b>demand characteristics</b> or <b>social desirability</b> affect it? Are your measures <b>objective</b>? Would a second observer agree (<b>inter-rater reliability</b>)?</li></ul>
<div class="example"><b>Mini example:</b> “Plan a laboratory experiment to see whether listening to music affects how many words students remember.” – <i>IV</i>: music vs silence. <i>DV</i>: number of words correctly recalled from a list of 20 after 2 minutes. <i>Design</i>: independent measures with random allocation (names drawn from a hat) – avoids practice effects. <i>Procedure</i>: each student sits alone in the same quiet room, reads the same 20 words on a screen for 60 seconds (3 s each) with/without the same song through headphones at the same volume, then writes down every word they remember in 2 minutes. <i>Controls</i>: same list, timing, room, instructions read from a script. <i>Data</i>: quantitative (words recalled) – compare the mean for each group with a bar chart. <i>Validity</i>: only the music changes, so differences are likely due to the IV. <i>Reliability</i>: standardised script and timings mean it could be repeated exactly.</div>`,
  tips: [
    'Learn every core study with the same headings: background → aim → sample → method/design → procedure → results → conclusion → evaluation → issues & debates.',
    'Make a one-page “methods card” for each core study: method, IV/DV, design, sample & sampling, controls, data type, ethics. Paper 2 asks about these a lot.',
    'Know 2 strengths and 2 weaknesses for every study, including at least one about ethics, validity, reliability and generalisability.',
    'Learn the key numbers: 65% to 450V (Milgram), 62/65 vs 19/38 (Piliavin), 29% more recalled (Andrade), 152/191 REM dream reports (Dement and Kleitman).',
    'For each AS issue & debate, know which core studies are the best examples (e.g. use of animals = Hassett et al. and Fagen et al.).',
    'Practise a planning question every week until general + specific features come automatically.',
    'Time: about 1 mark per minute plus reading time. Don’t spend 10 minutes on a 2-mark question.',
    'Spaced repetition beats cramming: let the flashcards bring cards back just before you forget them.'
  ]
};

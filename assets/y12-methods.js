/* Year 12 – Research methodology (AS Level, Paper 2) – 9990 syllabus for 2027 */
window.PSY = window.PSY || { options: {}, studies: {} };
PSY.y12 = PSY.y12 || { options: {}, studies: {} };

PSY.y12.options.rm = {
  id: 'rm', name: 'Research methods', short: 'Methods', emoji: '🔬', color: '#0ea5e9',
  blurb: 'Everything for Paper 2: methods, variables, sampling, ethics, data & planning.',
  intro: `Paper 2 is <b>half of your AS</b> – and it’s all about research methods. You need to <b>describe</b> and <b>evaluate</b> each method, spot it in the <b>core studies</b>, and <b>apply</b> it to new scenarios. Section B asks you to <b>plan your own study</b>. Every topic here links back to examples from your 12 core studies.`,
  topics: [
  /* ───────────── 5.1 EXPERIMENTS ───────────── */
  { id: 'ar1', code: '5.1', title: 'Experiments', emoji: '🧪',
    subs: [
    { id: 'ar11', code: '5.1.1', title: 'Laboratory & field experiments',
      inShort: 'In an experiment the researcher changes an IV and measures its effect on a DV. Lab experiments are controlled but artificial; field experiments are in real settings but harder to control.',
      notes: `
<h4>What makes it an experiment?</h4>
<p>The researcher <b>manipulates</b> an independent variable (IV), <b>measures</b> a dependent variable (DV), and <b>controls</b> other variables – so they can say the IV <b>caused</b> the change in the DV.</p>
<div class="two"><div class="box"><b>🔬 Laboratory experiment</b><ul><li>Artificial, controlled setting (e.g. a lab, a classroom set up for the study).</li><li>Participants usually know they’re in a study.</li><li>Examples: <b>Andrade</b>, <b>Bandura et al.</b>, <b>Pozzulo et al.</b>, <b>Perry et al.</b>, <b>Dement and Kleitman</b>.</li></ul></div>
<div class="box"><b>🚇 Field experiment</b><ul><li>Natural, everyday setting – the IV is still manipulated.</li><li>Participants often don’t know they are being studied.</li><li>Example: <b>Piliavin et al.</b> (subway train).</li></ul></div></div>
<h4>Evaluating them</h4>
<table class="mini"><tr><th></th><th>Laboratory</th><th>Field</th></tr>
<tr><td><b>Reliability</b></td><td>✔ High – standardised, easy to replicate</td><td>✘ Lower – the setting changes every time</td></tr>
<tr><td><b>Validity</b></td><td>✔ Control of variables (cause–effect) ✘ low ecological validity; demand characteristics</td><td>✔ High ecological validity; fewer demand characteristics ✘ less control of extraneous variables</td></tr>
<tr><td><b>Ethics</b></td><td>✔ Consent and debrief are easier ✘ may involve deception</td><td>✘ Often no consent, right to withdraw or debrief</td></tr></table>
<p class="tip">💡 Paper 2 often gives a <b>new scenario</b>: say what type of experiment it is AND why (“it is a field experiment because it took place in a real supermarket and the researcher changed the music”).</p>`,
      ev: { plus: ['Lab: control of extraneous variables ➜ cause and effect; replicable.', 'Field: high ecological validity; participants behave naturally.'], minus: ['Lab: artificial; demand characteristics.', 'Field: harder to control; ethical issues (consent, debrief).'] },
      debates: ['app'],
      vids: [['Fo7zq8WeVpc', 'Types of experiment', 'Psych Boost', '8:21'], ['3TDwnWbIiS0', 'Strengths and weaknesses of lab, field and natural experiments', 'Sonia Anand', '9:03'], ['FGdxl06ZT60', 'Natural and field experiments explained', 'Psychology on A-Level!', '2:22']],
      terms: [['Laboratory experiment', 'An experiment in a controlled, artificial setting.'], ['Field experiment', 'An experiment in a natural setting where the IV is still manipulated.'], ['Ecological validity', 'How well findings apply to real-life settings.'], ['Demand characteristics', 'Cues that make participants guess the aim and change their behaviour.']] },

    { id: 'ar12', code: '5.1.2', title: 'Experimental designs',
      inShort: 'Independent measures = different people in each condition. Repeated measures = the same people do every condition. Matched pairs = different but matched people. Each has strengths and weaknesses – order effects vs participant variables.',
      notes: `
<table class="mini"><tr><th>Design</th><th>What it is</th><th>👍</th><th>👎</th><th>Example</th></tr>
<tr><td><b>Independent measures</b></td><td>Different participants in each condition</td><td>No order effects; less chance of guessing the aim</td><td>Participant variables differ between groups; needs more people</td><td>Andrade (doodle vs control)</td></tr>
<tr><td><b>Repeated measures</b></td><td>The same participants do all conditions</td><td>Participant variables controlled; fewer people needed</td><td>Order effects (practice, fatigue); may guess the aim</td><td>Perry et al. (OT and placebo)</td></tr>
<tr><td><b>Matched pairs</b></td><td>Different participants, matched on key variables</td><td>Controls important participant variables; no order effects</td><td>Matching is time-consuming and never perfect</td><td>Bandura et al. (matched on aggression)</td></tr></table>
<h4>Key concepts</h4>
<ul><li><b>Order effects</b>: doing one condition affects the next – <b>practice</b> (getting better) or <b>fatigue</b> (getting tired/bored).</li><li><b>Counterbalancing</b>: half do A then B, half do B then A – order effects cancel out (Perry et al.; toy positions in Hassett et al.).</li><li><b>Random allocation</b>: deciding by chance (e.g. names from a hat) which condition each person is in – spreads participant variables evenly.</li><li><b>Experimental group vs control group / condition</b>: the control gives a baseline to compare against (Hölzel’s waiting list; Bandura’s no-model group).</li></ul>
<p class="mem">🧠 <b>R</b>epeated = <b>R</b>e-use the same people. <b>I</b>ndependent = <b>I</b>ndividual groups.</p>`,
      ev: { plus: ['Choosing the right design controls the biggest problem: participant variables or order effects.'], minus: ['No design removes every problem – each trades one weakness for another.'] },
      debates: ['experiments'],
      vids: [['nPaXZZtMFKg', 'Repeated measures, independent groups and matched pairs', 'Psychology Unlocked', '7:42'], ['Y2t81H51S3I', 'Experimental design', 'Psych Boost', '5:32'], ['2ZUgERnlMCQ', 'Counterbalancing and random allocation', 'Gray Matters Academy', '2:51']],
      terms: [['Independent measures', 'Different participants in each condition.'], ['Repeated measures', 'The same participants in every condition.'], ['Matched pairs', 'Pairs matched on important variables, one in each condition.'], ['Order effects', 'Practice or fatigue effects from doing more than one condition.'], ['Counterbalancing', 'Varying the order of conditions (ABBA) to cancel out order effects.'], ['Random allocation', 'Placing participants into conditions by chance.']] },

    { id: 'ar13', code: '5.1.3', title: 'Variables, operationalising & controls',
      inShort: 'The IV is what the researcher changes; the DV is what they measure. Operationalising means saying exactly how a variable is changed or measured. Controls and standardisation keep everything else the same.',
      notes: `
<h4>IV and DV</h4>
<ul><li><b>Independent variable (IV)</b>: the variable the researcher <b>changes/manipulates</b> (or that varies naturally, e.g. sex, age).</li><li><b>Dependent variable (DV)</b>: the variable that is <b>measured</b> – the outcome.</li></ul>
<p class="mem">🧠 The DV <b>D</b>epends on the IV.</p>
<h4>Operationalising</h4>
<p>Making a variable <b>precise and measurable</b>. Not “memory”, but “the number of names and places correctly written in a surprise test” (Andrade). Not “doodling”, but “shading printed squares and circles”.</p>
<div class="two"><div class="box"><b>Operationalised IV examples</b><ul><li>Aggressive model attacking Bobo vs non-aggressive model (Bandura)</li><li>24 IU oxytocin vs saline placebo (Perry)</li></ul></div><div class="box"><b>Operationalised DV examples</b><ul><li>Number of imitative aggressive acts in 5-second intervals (Bandura)</li><li>Distance (% of room) at which the figure was stopped (Perry)</li></ul></div></div>
<h4>Other variables</h4>
<ul><li><b>Extraneous / uncontrolled variables</b>: anything other than the IV that could affect the DV.</li><li><b>Participant variables</b>: differences between people (age, intelligence, mood, natural aggressiveness).</li><li><b>Situational variables</b>: features of the setting (noise, time of day, temperature, instructions).</li></ul>
<h4>Controls & standardisation</h4>
<ul><li><b>Controls</b> keep extraneous variables constant – e.g. no alcohol or caffeine (Dement and Kleitman), same message for everyone (Andrade).</li><li><b>Standardisation</b> = the same procedure and instructions for every participant (e.g. Milgram’s prods) ➜ makes a study <b>replicable</b> and more <b>valid</b>.</li></ul>`,
      ev: { plus: ['Operationalising makes studies precise, measurable and replicable.', 'Controls increase confidence that the IV caused the change in the DV.'], minus: ['Operationalising can oversimplify complex behaviour (e.g. “aggression” = hitting a doll).', 'High control can make the study artificial.'] },
      debates: ['experiments'],
      vids: [['ueBn0HZ-tUo', 'Variables', 'Psych Boost', '10:43'], ['knjlefz11fo', 'Definition, manipulation, measurement and control of variables', 'Mr. Luis', '5:45'], ['woqeIwr9IoQ', 'Control of extraneous variables', 'StartStudying', '3:07']],
      terms: [['Independent variable', 'The variable that is manipulated or changed between conditions.'], ['Dependent variable', 'The variable that is measured.'], ['Operationalisation', 'Defining a variable so it can be precisely manipulated or measured.'], ['Extraneous variable', 'Any other variable that might affect the DV.'], ['Participant variable', 'An individual difference between participants.'], ['Situational variable', 'A feature of the setting that could affect the DV.'], ['Standardisation', 'Keeping the procedure the same for every participant.']] }
    ],
    quiz: [
      ['Piliavin et al. is an example of a…', ['Lab experiment', 'Field experiment', 'Case study', 'Correlation'], 1, 'The IV was manipulated in a real setting – a subway train.'],
      ['Which design has the problem of order effects?', ['Independent measures', 'Repeated measures', 'Matched pairs', 'None'], 1, 'The same people do both conditions – practice or fatigue.'],
      ['Counterbalancing is used to reduce…', ['Participant variables', 'Order effects', 'Demand characteristics only', 'Sample size'], 1, 'Half do A then B, half B then A.'],
      ['In Andrade’s study, the DV was…', ['Doodling', 'Number of names and places recalled', 'The phone message', 'Age'], 1, 'Memory measured as items recalled (and monitoring score).'],
      ['Which is a situational variable?', ['Intelligence', 'Room noise', 'Mood', 'Age'], 1, 'A feature of the environment, not the person.'],
      ['Bandura et al. matched children on…', ['Height', 'Prior aggression ratings', 'IQ', 'Age only'], 1, 'Matched pairs/groups on natural aggressiveness.'],
      ['A strength of lab experiments is…', ['High ecological validity', 'Control of extraneous variables', 'No ethical issues ever', 'Participants never guess the aim'], 1, 'Control allows cause-and-effect conclusions.']
    ],
    exam: [
      { p: 2, q: 'A researcher wants to see if students remember more words when revising with music or in silence. Identify the IV and DV and operationalise the DV. [3]', guide: ['IV: revising with music vs in silence.', 'DV: memory for words.', 'Operationalised: number of words correctly recalled out of 20 in 2 minutes.'] },
      { p: 2, q: 'Explain one strength and one weakness of a repeated measures design, using an example from a core study. [4]', guide: ['Strength: participant variables controlled – each person compared with themselves.', 'Example: Perry et al. – each man had both OT and placebo.', 'Weakness: order effects (practice/fatigue) or guessing the aim.', 'Perry used counterbalancing and a week’s gap to reduce this.'] },
      { p: 2, q: 'Evaluate laboratory experiments in terms of validity and reliability, using an example from one core study. [6]', guide: ['Validity strength: controls extraneous variables – cause and effect (e.g. Andrade’s same message).', 'Validity weakness: artificial – low ecological validity; demand characteristics (Bobo doll).', 'Reliability strength: standardised procedure – easy to replicate.', 'Uses a named core study throughout.'] }
    ] },

  /* ───────────── 5.2 SELF-REPORTS & OBSERVATIONS ───────────── */
  { id: 'ar2', code: '5.2', title: 'Self-reports & observations', emoji: '📝',
    subs: [
    { id: 'ar21', code: '5.2.1', title: 'Questionnaires',
      inShort: 'A questionnaire is a set of written questions – on paper or online. Closed questions give fixed answers (quantitative); open questions let people answer in their own words (qualitative).',
      notes: `
<h4>Features</h4>
<ul><li>A <b>self-report</b>: participants tell you about themselves.</li><li><b>Technique</b>: <b>paper and pencil</b> or <b>online</b>.</li><li><b>Question format</b>: open or closed.</li></ul>
<div class="two"><div class="box"><b>🔒 Closed questions</b><br>Fixed choices: yes/no, multiple choice, rating scales (1–5), choosing a word.<br><i>e.g. Baron-Cohen’s 4-word choices; the FFMQ (1–5); the IRI.</i><br>➕ Quantitative, quick, easy to compare and score.<br>➖ Can’t explain why; forced choices may not fit.</div>
<div class="box"><b>🔓 Open questions</b><br>Answer in your own words.<br><i>e.g. “What did the person look like?” (Pozzulo’s filler task).</i><br>➕ Rich, detailed qualitative data.<br>➖ Hard to analyse and compare; interpretation is subjective.</div></div>
<h4>Evaluating questionnaires</h4>
<ul><li>➕ Can reach <b>large samples</b> quickly and cheaply (especially online).</li><li>➕ <b>Standardised</b> – everyone gets the same questions ➜ reliable.</li><li>➕ Anonymous ➜ people may be more honest about sensitive topics.</li><li>➖ <b>Social desirability</b> – answering to look good.</li><li>➖ <b>Demand characteristics</b>; misunderstanding questions; can’t ask follow-ups.</li><li>➖ Online samples miss people without internet.</li></ul>
<p class="tip">💡 Planning tip: always give <b>example questions</b> and say how answers are <b>scored</b> (e.g. “1 = strongly disagree … 5 = strongly agree; total out of 50”).</p>`,
      ev: { plus: ['Quick, cheap, large samples.', 'Standardised – reliable and easy to compare (closed).', 'Open questions give rich detail.'], minus: ['Social desirability and demand characteristics.', 'No chance to clarify questions.', 'Closed questions lack depth; open ones are hard to analyse.'] },
      debates: ['quantqual'],
      vids: [['Ast1Q51fxeE', 'Self-report techniques', 'Psych Boost', '7:41'], ['7VqrXil4DMY', 'Self-reports: what are they and what are the characteristics?', 'Mr. Luis', '2:59'], ['0PqPLp6LonU', 'Open vs closed questionnaires', 'Research World', '4:35']],
      terms: [['Questionnaire', 'A written set of questions completed by participants.'], ['Closed question', 'A question with fixed answer choices – gives quantitative data.'], ['Open question', 'A question answered in the participant’s own words – gives qualitative data.'], ['Social desirability bias', 'Answering in a way that makes you look good.']] },

    { id: 'ar22', code: '5.2.2', title: 'Interviews',
      inShort: 'An interview is a spoken self-report. Structured = fixed questions; unstructured = like a conversation; semi-structured = some set questions plus follow-ups. They can be face-to-face or by telephone.',
      notes: `
<h4>Formats</h4>
<table class="mini"><tr><th>Format</th><th>What it is</th><th>👍</th><th>👎</th></tr>
<tr><td><b>Structured</b></td><td>Same questions in the same order for everyone</td><td>Standardised, reliable, easy to compare</td><td>Can’t follow up interesting answers</td></tr>
<tr><td><b>Semi-structured</b></td><td>Set questions + extra follow-up questions</td><td>Balance of comparability and depth</td><td>Less standardised; interviewer bias</td></tr>
<tr><td><b>Unstructured</b></td><td>Like a conversation – a topic but no fixed questions</td><td>Rich, detailed data; participant leads</td><td>Hard to compare/replicate; time-consuming</td></tr></table>
<h4>Techniques</h4>
<ul><li><b>Face-to-face</b>: can see body language and build rapport ➖ interviewer effects, less anonymous.</li><li><b>Telephone</b>: cheaper, reaches people far away, more anonymous ➖ no body language, easy to hang up.</li></ul>
<h4>In the core studies</h4>
<ul><li><b>Saavedra and Silverman</b>: the ADIS-C/P semi-structured interview with the boy and his mother.</li><li><b>Milgram</b>: a post-experiment interview.</li><li><b>Dement and Kleitman</b>: the experimenter sometimes questioned participants about their dreams.</li></ul>
<h4>Evaluating interviews</h4>
<ul><li>➕ Can clarify questions and probe answers ➜ detailed, valid understanding.</li><li>➖ <b>Interviewer bias</b> (tone, expectations), <b>social desirability</b> (more than questionnaires – it’s face to face), time-consuming, needs trained interviewers.</li></ul>`,
      ev: { plus: ['Can clarify and probe – rich, detailed answers.', 'Structured interviews are standardised and comparable.'], minus: ['Interviewer bias and social desirability.', 'Time-consuming and costly; unstructured data hard to compare.'] },
      debates: ['quantqual'],
      vids: [['r1mcRvMznM0', 'Structured, unstructured & semi-structured interviews explained', 'Grad Coach', '7:36'], ['QJPJBV8bhos', 'Structured, semi-structured and unstructured interviews', 'Kevin Morrell', '6:09']],
      terms: [['Structured interview', 'Fixed questions in a fixed order.'], ['Semi-structured interview', 'Some fixed questions plus follow-up questions.'], ['Unstructured interview', 'A conversation-like interview without fixed questions.'], ['Interviewer bias', 'The interviewer’s behaviour or expectations influencing answers.']] },

    { id: 'ar23', code: '5.2.3', title: 'Observations',
      inShort: 'Observations record what people (or animals) actually do. They can be overt or covert, participant or non-participant, structured or unstructured, naturalistic or controlled. Two observers check reliability.',
      notes: `
<h4>The four pairs to know</h4>
<table class="mini"><tr><th>Type</th><th>Meaning</th><th>Core study example</th></tr>
<tr><td><b>Overt</b> / <b>covert</b></td><td>Participants know / don’t know they’re being observed</td><td>Covert: Piliavin (passengers), Bandura (one-way mirror)</td></tr>
<tr><td><b>Participant</b> / <b>non-participant</b></td><td>Observer joins in / stays separate</td><td>Non-participant: Piliavin’s observers, Hassett (video)</td></tr>
<tr><td><b>Structured</b> / <b>unstructured</b></td><td>Uses behavioural categories / records everything freely</td><td>Structured: Hassett’s checklist, Bandura’s categories, Fagen’s checklist</td></tr>
<tr><td><b>Naturalistic</b> / <b>controlled</b></td><td>Normal environment / set up by researcher</td><td>Naturalistic: Hassett (monkeys’ enclosure); controlled: Bandura (lab room)</td></tr></table>
<h4>Behavioural categories</h4>
<p>Clear, <b>operationalised</b> behaviours to tally – e.g. “drag”, “carry”, “sit on” (Hassett). <b>Time sampling</b> = recording at set intervals (every 5 seconds in Bandura).</p>
<h4>Evaluating observations</h4>
<ul><li>➕ Record what people <b>actually do</b>, not what they say they do.</li><li>➕ Covert/naturalistic ➜ natural behaviour, high ecological validity.</li><li>➖ <b>Observer bias</b> – observers see what they expect ➜ use <b>two observers</b> and check <b>inter-observer reliability</b>.</li><li>➖ Overt observation can change behaviour; covert raises <b>consent</b> issues.</li><li>➖ Can’t tell us <b>why</b> people behave as they do.</li></ul>`,
      ev: { plus: ['Shows real behaviour rather than self-report.', 'Naturalistic/covert observation gives high ecological validity.', 'Behavioural categories give quantitative, reliable data.'], minus: ['Observer bias; need inter-observer reliability checks.', 'Ethical problems with covert observation.', 'Doesn’t explain the reasons for behaviour.'] },
      debates: ['reliability', 'ethics'],
      vids: [['wpfWmGzM3Mg', 'Observations', 'Mr. Luis', '6:50'], ['lSOjuEMAij4', 'Observation – research methods', 'Psych Boost', '7:09'], ['F36jw-JfJOM', 'Overt and covert observation', 'Sonia Anand', '3:18']],
      terms: [['Overt observation', 'Participants know they are being watched.'], ['Covert observation', 'Participants don’t know they are being watched.'], ['Participant observation', 'The observer joins in with the group.'], ['Structured observation', 'Using behavioural categories to record behaviour.'], ['Naturalistic observation', 'Observing behaviour in its normal environment.'], ['Time sampling', 'Recording behaviour at set intervals.']] }
    ],
    quiz: [
      ['A question with a 1–5 rating scale is…', ['Open', 'Closed', 'Unstructured', 'Covert'], 1, 'Fixed answer choices ➜ closed ➜ quantitative.'],
      ['Saavedra and Silverman’s ADIS-C/P was a…', ['Structured questionnaire', 'Semi-structured interview', 'Covert observation', 'Field experiment'], 1, 'A semi-structured interview with the boy and his mother.'],
      ['Bandura’s observers watched through a one-way mirror. This was…', ['Overt', 'Covert', 'Participant', 'Unstructured'], 1, 'The children didn’t know they were being watched.'],
      ['Which reduces observer bias?', ['Using one observer', 'Using two observers and checking agreement', 'Using open questions', 'Telling participants the aim'], 1, 'Inter-observer reliability.'],
      ['A major weakness of self-reports is…', ['They are too objective', 'Social desirability bias', 'They need animals', 'They show cause and effect'], 1, 'People may answer to look good.'],
      ['An unstructured interview is best for…', ['Comparing many people quickly', 'Rich, detailed data', 'Quantitative data', 'Avoiding all bias'], 1, 'It follows the participant’s answers in depth.'],
      ['Hassett et al. observed monkeys in their normal enclosure. This was…', ['Controlled', 'Naturalistic', 'Participant', 'A questionnaire'], 1, 'Their own social group and home enclosure.']
    ],
    exam: [
      { p: 2, q: 'Describe the difference between open and closed questions, using one example of each about stress at school. [4]', guide: ['Closed: fixed answers – quantitative.', 'Example: “On a scale of 1–10, how stressed do you feel before exams?”', 'Open: answered in own words – qualitative.', 'Example: “Describe what makes you feel stressed at school.”'] },
      { p: 2, q: 'A psychologist plans to observe how children share toys in a playground. Suggest two behavioural categories and explain how inter-observer reliability could be checked. [4]', guide: ['Category 1 operationalised, e.g. “hands a toy to another child”.', 'Category 2, e.g. “takes a toy from another child’s hands”.', 'Two observers watch the same children at the same time independently.', 'Compare tallies – high agreement/correlation = reliable.'] },
      { p: 2, q: 'Evaluate the use of covert observation in Piliavin et al.’s study. [4]', guide: ['Strength: passengers didn’t know – natural behaviour, no demand characteristics.', 'High ecological validity.', 'Weakness: no informed consent / right to withdraw.', 'No debrief – possible distress left unresolved.'] }
    ] },

  /* ───────────── 5.3 CASE STUDIES, CORRELATIONS, LONGITUDINAL ───────────── */
  { id: 'ar3', code: '5.3', title: 'Case studies, correlations & longitudinal studies', emoji: '📁',
    subs: [
    { id: 'ar31', code: '5.3.1', title: 'Case studies',
      inShort: 'A case study is a detailed study of one person or one unit (a family, a group of elephants), usually using several techniques. Rich data – but hard to generalise.',
      notes: `
<h4>Main features</h4>
<ul><li>A <b>single participant or unit</b> (one person, one family, one school…).</li><li>Studied <b>in detail</b>, often over time.</li><li>Uses <b>several techniques</b> – interviews, observations, tests, records ➜ <b>triangulation</b> (checking the findings agree).</li><li>Usually produces <b>qualitative</b> and some <b>quantitative</b> data.</li></ul>
<p class="eg">Core study: <b>Saavedra and Silverman</b> – one 9-year-old boy; interviews (ADIS-C/P), Feelings Thermometer ratings, observation of exposure tasks, follow-ups.</p>
<h4>Evaluating case studies</h4>
<div class="two"><div class="box plus"><b>➕ Strengths</b><ul><li>Rich, in-depth, detailed data.</li><li>Can study <b>rare</b> cases that couldn’t be created for ethical reasons.</li><li>Triangulation increases validity.</li><li>Can follow change over time.</li></ul></div>
<div class="box minus"><b>➖ Weaknesses</b><ul><li>Can’t <b>generalise</b> from one person.</li><li>Researcher may become <b>biased</b> / subjective.</li><li>Hard to <b>replicate</b>.</li><li>Often relies on <b>memory</b> (retrospective data).</li></ul></div></div>
<p class="tip">💡 Planning a case study? Include: who the participant is, what information you’ll collect, <b>two or more techniques</b>, and how you’ll analyse/triangulate them.</p>`,
      ev: { plus: ['In-depth, rich data.', 'Can study rare or unethical-to-create situations.', 'Triangulation of techniques.'], minus: ['Can’t generalise.', 'Researcher bias; hard to replicate.'] },
      debates: ['sampling'],
      vids: [['EaMWpJ8xryw', 'Case studies in psychology', 'Mr. Luis', '7:26'], ['a60_qcCYHJc', 'Case studies – research methods', 'Psych Boost', '6:16']],
      terms: [['Case study', 'An in-depth study of one person or unit.'], ['Triangulation', 'Using different techniques/sources to check findings.'], ['Retrospective data', 'Information based on memory of past events.']] },

    { id: 'ar32', code: '5.3.2', title: 'Correlations',
      inShort: 'A correlation measures the relationship between two co-variables. Positive = both rise together; negative = one rises as the other falls. Correlation does NOT show cause and effect.',
      notes: `
<h4>Key ideas</h4>
<ul><li>A <b>correlation</b> looks for a <b>relationship</b> between two measured <b>co-variables</b> – nothing is manipulated.</li><li><b>Positive correlation</b>: as one increases, so does the other (longer REM ➜ more words in the dream report – Dement and Kleitman).</li><li><b>Negative correlation</b>: as one increases, the other decreases (higher AQ ➜ lower Eyes Test score – Baron-Cohen et al., r = −0.53).</li><li><b>No correlation</b>: no relationship.</li><li><b>Strength</b>: from +1 (perfect positive) through 0 (none) to −1 (perfect negative). Closer to ±1 = stronger.</li></ul>
<div class="three"><div class="box"><b>↗️ Positive</b><br>dots slope up</div><div class="box"><b>↘️ Negative</b><br>dots slope down</div><div class="box"><b>⋯ None</b><br>dots scattered</div></div>
<h4>Operationalising co-variables</h4>
<p>Both co-variables must be clearly measured: e.g. “hours of sleep the night before (self-reported)” and “score out of 20 on a memory test”.</p>
<h4>Evaluating correlations</h4>
<ul><li>➕ Can study variables that can’t be manipulated (ethically or practically).</li><li>➕ Shows the <b>strength and direction</b> of a relationship; can suggest ideas for experiments.</li><li>➖ <b>No causality</b>: we can’t say which variable causes which – a <b>third variable</b> might cause both.</li></ul>`,
      ev: { plus: ['Can investigate variables that can’t be manipulated.', 'Shows strength and direction of a relationship.'], minus: ['Cannot show cause and effect.', 'A third variable may explain the link.'] },
      debates: ['graphs'],
      vids: [['ujV0ZRz3iqQ', 'Correlations', 'Mr. Luis', '8:48'], ['M4Dn-GORAc8', 'Correlations – research methods', 'Psych Boost', '5:33']],
      terms: [['Correlation', 'A measure of the relationship between two co-variables.'], ['Co-variables', 'The two variables measured in a correlation.'], ['Positive correlation', 'Both variables increase together.'], ['Negative correlation', 'As one increases, the other decreases.'], ['Causality', 'One variable causing a change in another – correlations can’t show this.']] },

    { id: 'ar33', code: '5.3.3', title: 'Longitudinal studies',
      inShort: 'A longitudinal study follows the same participants over a long period, measuring them repeatedly. It shows change and development – but people drop out (attrition) and it takes a long time.',
      notes: `
<h4>Features</h4>
<ul><li>The <b>same participants</b> are studied <b>repeatedly</b> over a period of time (weeks, months or years).</li><li>An <b>experiment with a longitudinal design</b> measures before and after a treatment – e.g. <b>Hölzel et al.</b> (MRI before and after 8 weeks of MBSR).</li><li><b>Follow-ups</b> are a longitudinal element – e.g. <b>Saavedra and Silverman</b> at 6 and 12 months.</li></ul>
<h4>Evaluating longitudinal studies</h4>
<div class="two"><div class="box plus"><b>➕ Strengths</b><ul><li>Show <b>change and development</b> over time.</li><li>Same people ➜ <b>participant variables controlled</b>.</li><li>Can show long-term effects of treatments.</li></ul></div>
<div class="box minus"><b>➖ Weaknesses</b><ul><li><b>Attrition</b> – participants drop out (2 in Hölzel), and those who stay may be different (more motivated) ➜ biased sample.</li><li>Time-consuming and expensive.</li><li><b>Practice effects</b> from repeated tests; other life events may cause changes.</li></ul></div></div>
<p class="tip">💡 Planning one? Say what <b>tests/tasks</b> you’ll use, how they’re <b>scored</b>, <b>how often</b> (interval), how you’ll <b>re-contact</b> participants, and your <b>controls</b> (same test conditions each time).</p>`,
      ev: { plus: ['Track change over time.', 'Participant variables controlled.'], minus: ['Attrition can bias the sample.', 'Slow and costly; practice effects.'] },
      debates: ['experiments'],
      vids: [['LzukFtaTyOY', 'Understanding longitudinal studies in psychology', 'Mr. Luis', '6:57'], ['wY_ftfRQ54w', 'What is a longitudinal study?', 'Helpful Professor Explains!', '4:31']],
      terms: [['Longitudinal study', 'Studying the same participants repeatedly over time.'], ['Attrition', 'Participants dropping out of a study.'], ['Follow-up', 'Measuring participants again after time has passed.']] }
    ],
    quiz: [
      ['A study of one person in depth is a…', ['Correlation', 'Case study', 'Field experiment', 'Survey'], 1, 'Single participant/unit, studied in detail.'],
      ['Higher AQ scores went with lower Eyes Test scores. This is a…', ['Positive correlation', 'Negative correlation', 'No correlation', 'Causal link'], 1, 'One goes up as the other goes down (r = −0.53).'],
      ['Why can’t correlations show cause and effect?', ['They use too few people', 'A third variable could explain the relationship', 'They are always negative', 'They use animals'], 1, 'Nothing is manipulated; a third variable may be responsible.'],
      ['Attrition means…', ['Participants dropping out', 'Practice effects', 'Random allocation', 'A type of question'], 0, 'Losing participants over time – can bias the sample.'],
      ['Which core study is an experiment with a longitudinal design?', ['Milgram', 'Hölzel et al.', 'Piliavin et al.', 'Baron-Cohen et al.'], 1, 'MRI before and after 8 weeks of MBSR.'],
      ['Using interviews, ratings and observation together in a case study is called…', ['Counterbalancing', 'Triangulation', 'Operationalisation', 'Attrition'], 1, 'Checking that different techniques agree.'],
      ['A correlation of +0.9 is…', ['Weak negative', 'Strong positive', 'No correlation', 'Weak positive'], 1, 'Close to +1 = strong positive.']
    ],
    exam: [
      { p: 2, q: 'A teacher finds that students who sleep more get higher test scores. Explain why she cannot conclude that more sleep causes better scores. [3]', guide: ['This is a correlation – nothing was manipulated.', 'It shows a relationship, not causation.', 'A third variable (e.g. good organisation, less stress, home environment) might cause both.'] },
      { p: 2, q: 'Outline two weaknesses of case studies, using Saavedra and Silverman’s study as an example. [4]', guide: ['Can’t generalise – one 9-year-old boy with a rare phobia.', 'Subjective/retrospective data – memories of an event 4 years earlier; self-ratings.', 'Researcher bias – therapists involved closely.', 'Hard to replicate.'] },
      { p: 2, q: 'Plan a longitudinal study to investigate how children’s vocabulary changes between ages 3 and 6. [6]', guide: ['Same children tested repeatedly – e.g. every 6 months from 3 to 6.', 'Test/task: a standardised picture-naming test; score = number named correctly.', 'Re-contacting participants via the nursery/parents; reminders.', 'Controls: same test, same tester, same quiet room, same time of day.', 'Quantitative data – mean score at each age shown on a line/bar graph.', 'Mention attrition/practice effects.'] }
    ] },

  /* ───────────── 5.4 AIMS, SAMPLING & DATA ───────────── */
  { id: 'ar4', code: '5.4', title: 'Aims, hypotheses, sampling & data', emoji: '🎯',
    subs: [
    { id: 'ar41', code: '5.4.1', title: 'Aims & hypotheses',
      inShort: 'An aim says what a study is trying to find out. A hypothesis is a testable prediction. The null hypothesis predicts no difference; the alternative predicts a difference – directional (says which way) or non-directional.',
      notes: `
<h4>Aims</h4>
<p>A general statement of <b>what the study intends to investigate</b>: “To investigate whether doodling affects memory for a boring message.”</p>
<h4>Hypotheses</h4>
<ul><li>A <b>hypothesis</b> is a precise, <b>testable prediction</b> – with both variables <b>operationalised</b>.</li><li><b>Null hypothesis (H0)</b>: predicts <b>no difference</b> or relationship – any difference is due to chance.</li><li><b>Alternative hypothesis (H1)</b>: predicts there <b>will be</b> a difference or relationship.<ul><li><b>Directional (one-tailed)</b>: says which <b>direction</b> – “Participants who doodle will recall <b>more</b> names than those who don’t.”</li><li><b>Non-directional (two-tailed)</b>: just predicts a difference – “There will be a difference in the number of names recalled between…”</li></ul></li></ul>
<table class="mini"><tr><th>Type</th><th>Example (Andrade-style)</th></tr>
<tr><td>Null</td><td>There will be no difference in the number of names recalled between participants who shade shapes and those who don’t.</td></tr>
<tr><td>Directional</td><td>Participants who shade shapes will recall more names than those who don’t.</td></tr>
<tr><td>Non-directional</td><td>There will be a difference in the number of names recalled between participants who shade shapes and those who don’t.</td></tr></table>
<p class="tip">💡 Use a directional hypothesis when previous research suggests a direction; non-directional when it’s unclear. For correlations, predict a <b>relationship</b> (“There will be a positive correlation between…”).</p>`,
      debates: ['variables'],
      vids: [['N4PWih5KGrY', 'Aims and hypotheses', 'Psych Boost', '6:26'], ['xHT750FxXRw', 'Null & alternative, directional & non-directional hypotheses', 'AICE Psychology', '9:32']],
      terms: [['Aim', 'A general statement of what a study investigates.'], ['Hypothesis', 'A precise, testable prediction.'], ['Null hypothesis', 'Predicts no difference or relationship.'], ['Directional hypothesis', 'Predicts the direction of a difference (one-tailed).'], ['Non-directional hypothesis', 'Predicts a difference without saying which way (two-tailed).']] },

    { id: 'ar42', code: '5.4.2', title: 'Sampling & generalisation',
      inShort: 'The population is the group you want to know about; the sample is who actually takes part. Opportunity = whoever is available; volunteer = people who sign up; random = everyone has an equal chance.',
      notes: `
<h4>Key terms</h4>
<ul><li><b>Population</b> = the whole group the researcher is interested in (target population).</li><li><b>Sample</b> = the people who actually take part.</li><li><b>Generalisation</b> = applying results from the sample to the population. A <b>representative</b> sample makes this more valid.</li></ul>
<table class="mini"><tr><th>Technique</th><th>How</th><th>👍</th><th>👎</th><th>Example</th></tr>
<tr><td><b>Opportunity</b></td><td>Whoever is available at the time</td><td>Quick, easy, cheap</td><td>Unrepresentative (biased by place/time)</td><td>Piliavin (passengers on the train); Fagen (available elephants)</td></tr>
<tr><td><b>Volunteer</b> (self-selecting)</td><td>People respond to an advert/request</td><td>Easy; willing, committed participants</td><td>Volunteers may differ (keener, more confident); volunteer bias</td><td>Milgram (newspaper advert); Hölzel (MBSR course)</td></tr>
<tr><td><b>Random</b></td><td>Every member of the population has an equal chance (names from a hat, random number generator)</td><td>Most representative; no researcher bias</td><td>Need a full list of the population; chosen people may refuse</td><td>Baron-Cohen’s group 4 (randomly selected adults)</td></tr></table>
<h4>Judging generalisability</h4>
<p>Consider the sample’s <b>size</b>, <b>sex</b>, <b>age</b>, <b>culture/country</b>, <b>occupation</b> and <b>era</b>. E.g. Milgram = 40 American men in 1963; Perry = only men; Andrade = mostly women.</p>`,
      ev: { plus: ['Random sampling gives the most representative sample.', 'Opportunity and volunteer samples are practical.'], minus: ['Opportunity and volunteer samples are often biased.', 'Small or narrow samples limit generalisation.'] },
      debates: ['app'],
      vids: [['gvQIuLI3tRk', 'Sampling – research methods', 'Psych Boost', '7:04'], ['bGZLl9ToBkU', 'Sampling methods in psychology', 'missowen1', '4:50']],
      terms: [['Population', 'The whole group the researcher wants to study.'], ['Sample', 'The participants who actually take part.'], ['Opportunity sample', 'Participants who happen to be available.'], ['Volunteer sample', 'Participants who choose to respond to a request.'], ['Random sample', 'Every member of the population has an equal chance of being chosen.'], ['Generalisability', 'How far results apply beyond the sample.']] },

    { id: 'ar43', code: '5.4.3', title: 'Types of data',
      inShort: 'Quantitative data are numbers; qualitative data are words and descriptions. Objective data aren’t affected by personal opinion; subjective data depend on someone’s judgement or feelings.',
      notes: `
<div class="two"><div class="box"><b>🔢 Quantitative</b><br>Numerical – scores, times, counts, ratings.<br><i>e.g. voltage in Milgram; 152/191 dream reports; Eyes Test scores.</i><ul><li>➕ Easy to compare, analyse and graph; more objective.</li><li>➖ Lacks detail – doesn’t explain <b>why</b>.</li></ul></div>
<div class="box"><b>💬 Qualitative</b><br>Descriptive – words, quotes, descriptions.<br><i>e.g. dream descriptions; Milgram’s observations of tension; passengers’ comments in Piliavin.</i><ul><li>➕ Rich, detailed, explains reasons and experiences.</li><li>➖ Harder to analyse and compare; interpretation can be subjective.</li></ul></div></div>
<div class="two"><div class="box"><b>🎯 Objective</b><br>Not affected by personal bias – measured the same by anyone.<br><i>e.g. EEG recordings; MRI grey matter; number of words recalled.</i></div>
<div class="box"><b>🫶 Subjective</b><br>Based on personal judgement, opinion or feelings.<br><i>e.g. Feelings Thermometer ratings; dream reports; self-rated mindfulness.</i></div></div>
<p class="tip">💡 Don’t mix them up: quantitative ≠ objective. A self-rating of 7/10 is <b>quantitative</b> but <b>subjective</b>.</p>`,
      ev: { plus: ['Quantitative: comparable and analysable.', 'Qualitative: depth and meaning.', 'Objective data reduce bias.'], minus: ['Quantitative lacks depth.', 'Qualitative is hard to compare.', 'Subjective data can be biased.'] },
      debates: ['graphs'],
      vids: [['FybiI5GGl3k', 'Types of data', 'Psych Boost', '8:42'], ['wQ4SP-D-3XU', 'Types of data: qualitative vs quantitative, objective vs subjective', 'Andrew Scott', '8:40']],
      terms: [['Quantitative data', 'Numerical data.'], ['Qualitative data', 'Descriptive data in words.'], ['Objective data', 'Data not influenced by personal opinion.'], ['Subjective data', 'Data based on personal judgement or feelings.']] }
    ],
    quiz: [
      ['“Participants who doodle will remember MORE than those who don’t” is…', ['A null hypothesis', 'A directional hypothesis', 'A non-directional hypothesis', 'An aim'], 1, 'It states the direction of the difference.'],
      ['The null hypothesis predicts…', ['A positive correlation', 'No difference or relationship', 'A big difference', 'The aim'], 1, 'Any difference would be due to chance.'],
      ['Milgram’s newspaper advert produced a…', ['Random sample', 'Opportunity sample', 'Volunteer sample', 'Matched sample'], 2, 'People chose to respond.'],
      ['Which sampling method gives everyone an equal chance?', ['Opportunity', 'Volunteer', 'Random', 'Snowball'], 2, 'Random sampling.'],
      ['A Feelings Thermometer rating of 6/8 is…', ['Qualitative and objective', 'Quantitative and subjective', 'Qualitative and subjective', 'Quantitative and objective'], 1, 'A number (quantitative) based on personal feeling (subjective).'],
      ['MRI scan data are…', ['Subjective', 'Objective', 'Qualitative only', 'Self-report'], 1, 'Measured by a machine – not affected by opinion.'],
      ['Piliavin’s passengers were an example of…', ['Opportunity sampling', 'Random sampling', 'Volunteer sampling', 'Matched pairs'], 0, 'Whoever happened to be on the train.']
    ],
    exam: [
      { p: 2, q: 'Write a non-directional hypothesis for a study investigating whether listening to music affects reaction time. [2]', guide: ['States there will be a difference (no direction).', 'Both variables operationalised, e.g. “There will be a difference in mean reaction time (ms) to a light between participants who listen to music and those who sit in silence.”'] },
      { p: 2, q: 'Explain one strength and one weakness of volunteer sampling, using an example from a core study. [4]', guide: ['Strength: easy/quick to recruit willing participants.', 'Weakness: volunteer bias – volunteers may be more motivated/cooperative.', 'Example: Milgram’s advert – volunteers may have felt obliged to continue.', 'Or Hölzel – people already seeking stress reduction.'] },
      { p: 2, q: 'Give one example of quantitative data and one example of qualitative data from Milgram’s study, and one advantage of each. [4]', guide: ['Quantitative: maximum voltage given / 65% to 450 V.', 'Advantage: easy to compare and summarise.', 'Qualitative: observations of tension, nervous laughter, comments.', 'Advantage: shows how participants felt / explains the conflict.'] }
    ] },

  /* ───────────── 5.5 ETHICS, VALIDITY & RELIABILITY ───────────── */
  { id: 'ar5', code: '5.5', title: 'Ethics, validity & reliability', emoji: '🛡️',
    subs: [
    { id: 'ar51', code: '5.5.1', title: 'Ethics with human participants',
      inShort: 'Seven guidelines: minimise harm, valid (informed) consent, right to withdraw, no deception, confidentiality, privacy and debriefing. Know each one with a core-study example.',
      notes: `
<table class="mini"><tr><th>Guideline</th><th>Meaning</th><th>Core study link</th></tr>
<tr><td><b>Minimising harm</b> (and maximising benefit)</td><td>No physical or psychological harm beyond everyday life; benefits should outweigh risks</td><td>Milgram – severe distress, seizures ✘</td></tr>
<tr><td><b>Valid consent</b> (incl. informed consent)</td><td>Participants agree knowing what’s involved; parents consent for children under 16</td><td>Piliavin – no consent ✘; Pozzulo – parental consent ✔</td></tr>
<tr><td><b>Right to withdraw</b></td><td>Can leave at any time, and remove their data</td><td>Milgram’s prods made leaving hard ✘; Hölzel – 2 left ✔</td></tr>
<tr><td><b>Lack of deception</b></td><td>Don’t mislead participants unless necessary (then debrief)</td><td>Milgram, Piliavin, Perry Exp 2 ✘</td></tr>
<tr><td><b>Confidentiality</b></td><td>Personal information kept secret; no names</td><td>Saavedra – the boy isn’t named ✔</td></tr>
<tr><td><b>Privacy</b></td><td>Don’t observe people where they expect privacy</td><td>Piliavin – a public train ✔</td></tr>
<tr><td><b>Debriefing</b></td><td>Explain the true aim afterwards; return people to how they were</td><td>Milgram’s dehoax ✔; Piliavin – none ✘</td></tr></table>
<p class="mem">🧠 Remember <b>“Can Do Hard Work, Please Pass Delight”</b>: Consent, Deception, Harm, Withdraw, Privacy, (confidentiality = Private data), Debrief.</p>
<p class="tip">💡 In an evaluation, don’t just name a guideline – show <b>how</b> it was broken or met with evidence, then say whether the benefits justified it.</p>`,
      debates: ['children'],
      vids: [['iSD4ta9gaGU', 'Ethics – research methods', 'Psych Boost', '6:55'], ['8ZxFMTNSL_g', 'Ethical guidelines for psychological research', 'PsychExamReview', '4:37']],
      terms: [['Informed consent', 'Agreeing to take part with full knowledge of what’s involved.'], ['Right to withdraw', 'Being able to leave a study (and remove data) at any time.'], ['Deception', 'Misleading or withholding information from participants.'], ['Confidentiality', 'Keeping participants’ personal information secret.'], ['Privacy', 'Not intruding where people expect not to be observed.'], ['Debriefing', 'Explaining the study’s true aims afterwards and checking participants are OK.']] },

    { id: 'ar52', code: '5.5.2', title: 'Ethics with animals',
      inShort: 'Animal research guidelines: minimise harm, replace animals where possible, choose the right species, use as few animals as possible, and take care with procedures – pain, housing, rewards, deprivation and aversive stimuli.',
      notes: `
<table class="mini"><tr><th>Guideline</th><th>Meaning</th><th>Core study link</th></tr>
<tr><td><b>Minimising harm</b> (and maximising benefit)</td><td>Avoid pain and distress; research should be worthwhile</td><td>Fagen – rewards instead of punishment ✔</td></tr>
<tr><td><b>Replacement</b></td><td>Use alternatives (computer models, humans, videos) where possible</td><td>Hassett – monkeys needed because humans can’t avoid socialisation</td></tr>
<tr><td><b>Species</b></td><td>Choose the species least likely to suffer that can answer the question</td><td>Rhesus monkeys chosen as close relatives of humans</td></tr>
<tr><td><b>Numbers</b></td><td>Use the smallest number of animals needed</td><td>Fagen – only 5 elephants</td></tr>
<tr><td><b>Procedures</b>: pain, suffering & distress</td><td>Minimise them; stop if needed</td><td>Neither study caused pain ✔</td></tr>
<tr><td>— <b>housing</b></td><td>Suitable space and social groups</td><td>Hassett – normal social troop and enclosure ✔</td></tr>
<tr><td>— <b>reward, deprivation & aversive stimuli</b></td><td>Prefer rewards; avoid starving or punishing</td><td>Fagen – bananas as rewards, no deprivation ✔</td></tr></table>
<h4>Should animals be used at all?</h4>
<ul><li>➕ Can study things that would be unethical with humans; fewer cultural influences; can benefit the animals themselves (Fagen).</li><li>➖ Animals can’t consent; findings may not <b>generalise</b> to humans.</li></ul>`,
      debates: ['animals'],
      vids: [['GiTXdwrJN1o', 'Ethical guidelines related to the use of animals (9990)', 'Notes Reel', '4:08'], ['rfgVgygT0oY', 'Human and animal ethical guidelines', 'altX', '18:15']],
      terms: [['Replacement', 'Using alternatives to animals where possible.'], ['Species (guideline)', 'Choosing the most suitable species, least likely to suffer.'], ['Numbers (guideline)', 'Using the smallest number of animals necessary.'], ['Deprivation', 'Withholding food, water or contact – should be avoided.'], ['Aversive stimuli', 'Unpleasant stimuli such as shocks or loud noises – should be avoided.']] },

    { id: 'ar53', code: '5.5.3', title: 'Validity, reliability & replicability',
      inShort: 'Validity = measuring what you intend to and getting true results (including ecological validity). Reliability = consistency (inter-rater, test–retest). Replicability = whether a study can be repeated exactly.',
      notes: `
<h4>Validity</h4>
<ul><li><b>Validity</b> = whether a study measures what it claims to measure and the findings are accurate.</li><li><b>Ecological validity</b> = how well findings apply to <b>real-life</b> settings (Piliavin high; Bandura lower).</li><li>Threats to validity:<ul><li><b>Demand characteristics</b> – participants guess the aim and change behaviour (Bobo doll “meant” to be hit).</li><li><b>Subjectivity</b> – researchers’ or participants’ opinions affect data; <b>objectivity</b> improves validity (EEG, MRI).</li><li><b>Generalisability</b> – whether findings apply beyond the sample.</li><li>Social desirability; uncontrolled variables.</li></ul></li></ul>
<h4>Reliability</h4>
<ul><li><b>Reliability</b> = <b>consistency</b> – would you get the same results again?</li><li><b>Inter-rater / inter-observer reliability</b>: two or more observers agree (Bandura – a second observer; Hassett – two observers coding together).</li><li><b>Test–retest reliability</b>: the same test given to the same people later gives similar scores (e.g. checking the Eyes Test).</li><li>Improved by: <b>standardisation</b>, <b>operationalised</b> categories, trained observers, many trials.</li></ul>
<h4>Replicability</h4>
<p>A study is <b>replicable</b> if it can be repeated in exactly the same way – needs a detailed, <b>standardised procedure</b>. Replicating and getting the same results shows the findings are <b>reliable</b>.</p>
<p class="mem">🧠 <b>R</b>eliability = <b>R</b>epeat ➜ same result. <b>V</b>alidity = <b>V</b>ery true / measures the right thing.</p>`,
      ev: { plus: ['Standardised, objective measures improve both validity and reliability.'], minus: ['High control can increase reliability but reduce ecological validity.'] },
      debates: ['experiments', 'observations'],
      vids: [['WRGN9xm-uME', 'Validity – research methods', 'Psych Boost', '9:31'], ['_aYHLGLjDNA', 'Reliability – research methods', 'Psych Boost', '6:42'], ['Zb6MrVkF_jg', 'Demand characteristics', 'The Learning Academy', '11:08']],
      terms: [['Validity', 'Whether a study measures what it intends to and its findings are true.'], ['Ecological validity', 'How well findings apply to real-life settings.'], ['Reliability', 'Consistency of a measure or findings.'], ['Inter-rater reliability', 'Agreement between two or more raters/observers.'], ['Test–retest reliability', 'Similar scores when the same test is repeated later.'], ['Replicability', 'Whether a study can be repeated exactly.'], ['Objectivity', 'Data not affected by personal bias.']] }
    ],
    quiz: [
      ['Which guideline did Piliavin et al. clearly break?', ['Privacy', 'Informed consent', 'Species', 'Numbers'], 1, 'Passengers didn’t know they were in a study.'],
      ['Using bananas instead of punishment relates to which animal guideline?', ['Replacement', 'Reward, deprivation and aversive stimuli', 'Numbers', 'Housing'], 1, 'Rewards are preferred to deprivation or aversive stimuli.'],
      ['Two observers recording the same behaviour and agreeing shows…', ['Ecological validity', 'Inter-rater reliability', 'Test–retest reliability', 'Replacement'], 1, 'Agreement between observers.'],
      ['Ecological validity is about…', ['Consistency over time', 'How well results apply to real life', 'Animal welfare', 'Sample size'], 1, 'Real-life settings.'],
      ['A test giving similar scores when repeated a week later has good…', ['Test–retest reliability', 'Inter-rater reliability', 'Ecological validity', 'Privacy'], 0, 'Consistency over time.'],
      ['Milgram’s dehoax was an example of…', ['Deception', 'Debriefing', 'Replacement', 'Privacy'], 1, 'Explaining the truth and reuniting with Mr Wallace.'],
      ['Demand characteristics are a threat to…', ['Validity', 'Numbers', 'Housing', 'Species'], 0, 'Participants changing behaviour because they guess the aim.']
    ],
    exam: [
      { p: 2, q: 'Explain how Bandura et al. made sure their observations were reliable. [3]', guide: ['Used clear, operationalised behavioural categories (e.g. imitative physical aggression).', 'Time sampling every 5 seconds – standardised.', 'A second observer independently scored some children – high inter-rater reliability.'] },
      { p: 2, q: 'Outline two ethical guidelines for research with animals and explain whether Fagen et al. followed them. [4]', guide: ['Minimising harm / reward rather than aversive stimuli – used bananas and a whistle, no punishment ✔.', 'Numbers – only 5 elephants ✔.', 'Housing – kept in their normal stables (but chained during sessions).', 'Each guideline described and applied with evidence.'] },
      { p: 2, q: 'Distinguish between validity and reliability, using an example from one core study for each. [4]', guide: ['Validity: measures what it intends/true findings.', 'Example: Dement and Kleitman’s EEG = objective measure of REM (valid) / dream reports may be invalid.', 'Reliability: consistency of measurement/results.', 'Example: Bandura’s second observer showed inter-rater reliability.'] }
    ] },

  /* ───────────── 5.6 DATA ANALYSIS & PLANNING ───────────── */
  { id: 'ar6', code: '5.6', title: 'Data analysis & planning a study', emoji: '📊',
    subs: [
    { id: 'ar61', code: '5.6.1', title: 'Averages & spread',
      inShort: 'Measures of central tendency (mode, median, mean) give a typical score. Measures of spread (range, standard deviation) show how spread out scores are. You won’t have to calculate – just recognise and interpret.',
      notes: `
<h4>Measures of central tendency (“averages”)</h4>
<table class="mini"><tr><th>Measure</th><th>How to find it</th><th>👍</th><th>👎</th></tr>
<tr><td><b>Mode</b></td><td>The most common score</td><td>Easy; works for categories (e.g. favourite toy)</td><td>May be more than one; ignores other scores</td></tr>
<tr><td><b>Median</b></td><td>The middle score when put in order</td><td>Not affected by extreme scores</td><td>Ignores the actual values of other scores</td></tr>
<tr><td><b>Mean</b></td><td>Add all scores ÷ number of scores</td><td>Uses every score – most sensitive</td><td>Distorted by extreme scores (outliers)</td></tr></table>
<p class="eg">Scores: 2, 3, 3, 5, 12 ➜ <b>mode</b> 3, <b>median</b> 3, <b>mean</b> 5 (pulled up by the 12).</p>
<h4>Measures of spread</h4>
<ul><li><b>Range</b> = highest − lowest score (12 − 2 = 10). Quick, but distorted by one extreme score.</li><li><b>Standard deviation (SD)</b> = how spread out scores are around the <b>mean</b>. <b>Small SD</b> = scores bunched close to the mean (people similar). <b>Large SD</b> = scores widely spread (people very different).</li></ul>
<p class="tip">💡 Exam interpretation: “Group A has a higher mean but also a larger SD, so although they scored higher on average, their scores were more varied.” You do <b>not</b> need to calculate the SD.</p>`,
      debates: ['quantqual'],
      vids: [['TsSWLB0aEWs', 'Descriptive statistics', 'Psych Boost', '10:40'], ['MRqtXL2WX2M', 'Standard deviation – explained and visualised', 'Jeremy Blitz-Jones', '3:43'], ['2N7na6aBvpk', 'Mean, median, mode and range', 'MooMooMath and Science', '4:03']],
      terms: [['Mode', 'The most frequent score.'], ['Median', 'The middle score in an ordered list.'], ['Mean', 'The total of scores divided by the number of scores.'], ['Range', 'Highest score minus lowest score.'], ['Standard deviation', 'A measure of how spread out scores are around the mean.'], ['Outlier', 'An extreme score far from the others.']] },

    { id: 'ar62', code: '5.6.2', title: 'Tables & graphs',
      inShort: 'Bar charts compare separate categories (gaps between bars). Histograms show continuous data (no gaps). Scatter graphs show correlations. Always label axes and give a title.',
      notes: `
<h4>Which graph?</h4>
<table class="mini"><tr><th>Graph</th><th>Use for</th><th>Key features</th><th>Example</th></tr>
<tr><td><b>Bar chart</b></td><td>Comparing separate <b>categories</b> or conditions</td><td>Bars with <b>gaps</b>; categories on x-axis; often shows means</td><td>Mean items recalled: doodle vs control (Andrade)</td></tr>
<tr><td><b>Histogram</b></td><td><b>Continuous</b> data in intervals (frequency distribution)</td><td><b>No gaps</b> between bars; x-axis = score ranges; y-axis = frequency</td><td>How many participants scored 20–24, 25–29, 30–36 on the Eyes Test</td></tr>
<tr><td><b>Scatter graph</b></td><td><b>Correlations</b> between two co-variables</td><td>One dot per participant; pattern shows direction/strength</td><td>AQ score vs Eyes Test score (Baron-Cohen)</td></tr></table>
<h4>Tables</h4>
<p>Present results clearly in rows and columns with a <b>title</b>, <b>headings</b> and <b>units</b>. Read across carefully – compare conditions and say what the numbers show.</p>
<h4>Drawing graphs in the exam</h4>
<ul><li>✔ A clear <b>title</b> (“Mean number of items recalled by the doodling and control groups”).</li><li>✔ Both axes <b>labelled</b> with units.</li><li>✔ Sensible, even <b>scale</b>; bars plotted accurately.</li><li>✔ Bar chart = gaps; histogram = no gaps.</li></ul>
<p class="mem">🧠 <b>B</b>ar chart = <b>B</b>reaks between bars (separate categories). <b>H</b>istogram = bars <b>H</b>olding hands (continuous).</p>`,
      debates: ['correlations'],
      vids: [['YaA85D4g3QM', 'Graphs – research methods', 'Psych Boost', '7:08'], ['JsEwJD1mYpU', 'How a histogram is different than a bar chart', 'MooMooMath and Science', '1:55'], ['AxY7nTkgR6M', 'Scatter plots, association and correlation', 'Nicole Hamilton', '4:51']],
      terms: [['Bar chart', 'A graph comparing separate categories, with gaps between bars.'], ['Histogram', 'A graph of continuous data in intervals, with no gaps between bars.'], ['Scatter graph', 'A graph plotting two co-variables to show a correlation.'], ['Frequency', 'How many times a score or category occurs.']] },

    { id: 'ar63', code: '5.6.3', title: 'Planning a study (Paper 2 Section B)',
      inShort: 'In Section B you plan a study using a given method. Include the general features (procedure, validity, reliability, type of data) plus the specific features of that method – then evaluate your plan.',
      notes: `
<h4>Step 1 – read the question</h4>
<p>It tells you the <b>topic</b> and often the <b>method</b> (“Plan a <b>questionnaire</b>…”, “Plan a <b>field experiment</b>…”). Underline what you must include.</p>
<h4>Step 2 – general features (every plan)</h4>
<ul><li><b>Procedure</b> – clear steps so it could be <b>replicated</b>.</li><li>How the plan makes it <b>valid</b> (e.g. objective measures, controls, avoiding demand characteristics).</li><li>How the plan makes it <b>reliable</b> (e.g. standardised instructions, two observers, same questions).</li><li><b>Type of data</b> (quantitative/qualitative) and how it will be summarised.</li></ul>
<h4>Step 3 – specific features (by method)</h4>
<table class="mini"><tr><th>Method</th><th>Must include</th></tr>
<tr><td>Experiment</td><td>IV, DV (operationalised), controls/standardisation, experimental design; location (field)</td></tr>
<tr><td>Self-report</td><td>Open/closed questions, example questions, scoring; questionnaire technique (paper/online) or interview format & technique</td></tr>
<tr><td>Case study</td><td>Details of the participant, information collected, 2+ techniques, analysis/triangulation</td></tr>
<tr><td>Observation</td><td>Overt/covert, participant/non-participant, naturalistic/controlled, structured (categories)/unstructured</td></tr>
<tr><td>Correlation</td><td>Two co-variables, how each is measured, the relationship/scatter graph</td></tr>
<tr><td>Longitudinal</td><td>Tests/tasks, scoring, frequency/interval, re-contacting participants, controls</td></tr></table>
<p class="tip">💡 You do <b>not</b> need aims or hypotheses in the plan, and you won’t be asked to evaluate its sample or ethics. Evaluation questions ask about <b>practical/methodological issues, validity and reliability</b>.</p>
<h4>Worked example (observation)</h4>
<div class="example"><b>“Plan an observation to investigate whether children share more when playing in pairs than in groups of four.”</b><br>A <b>naturalistic</b>, <b>non-participant</b>, <b>covert</b> observation in a school playground at break time, from a classroom window so children behave normally. <b>Structured</b> with behavioural categories: “offers a toy”, “hands over a toy when asked”, “grabs a toy”. <b>Time sampling</b>: every 10 seconds for 5 minutes per group. Groups formed by the teacher’s normal playtime arrangements (pairs vs fours). Two observers record independently ➜ compare tallies for <b>inter-observer reliability</b>. Same playground, same time of day and same toys each time (controls). <b>Quantitative</b> data – mean sharing acts per child per condition shown on a bar chart.</div>`,
      debates: ['experiments', 'questionnaires', 'observations', 'correlations'],
      vids: [['V7rIQRE-MVU', 'How to answer design questions – 9990', 'Cambridge A-Levels Psychology', '17:25'], ['iyXybOtWgH8', 'A guide to the AS design question on Paper 2', 'Psychology Internationals', '21:53']],
      terms: [['General features', 'Procedure, validity, reliability and data type – needed in every plan.'], ['Specific features', 'The required details for the chosen method.'], ['Replicable plan', 'Enough detail that someone else could repeat it exactly.']] }
    ],
    quiz: [
      ['Which average is affected most by an extreme score?', ['Mode', 'Median', 'Mean', 'Range'], 2, 'The mean uses every score, so outliers pull it.'],
      ['A small standard deviation means…', ['Scores are widely spread', 'Scores are close to the mean', 'The mean is small', 'There was an error'], 1, 'Little variation around the mean.'],
      ['Which graph should show a correlation?', ['Bar chart', 'Histogram', 'Scatter graph', 'Pie chart'], 2, 'One dot per participant for two co-variables.'],
      ['Bars with NO gaps showing score intervals form a…', ['Bar chart', 'Histogram', 'Scatter graph', 'Table'], 1, 'Histograms show continuous data.'],
      ['Scores 4, 6, 6, 9, 15: what is the median?', ['6', '8', '9', '11'], 0, 'The middle score in order is 6.'],
      ['In Section B, which do you NOT need in your plan?', ['Procedure', 'Hypotheses', 'How it is reliable', 'Type of data'], 1, 'The syllabus says aims and hypotheses aren’t expected in the plan.'],
      ['The range of 3, 8, 10, 14 is…', ['3', '9', '11', '14'], 2, '14 − 3 = 11.']
    ],
    exam: [
      { p: 2, q: 'Sketch and label an appropriate graph to show the mean number of items recalled by the doodling group (7.5) and control group (5.8) in Andrade’s study. [4]', guide: ['Bar chart with separate bars and gaps.', 'Title, e.g. “Mean items recalled by doodling and control groups”.', 'x-axis labelled (condition); y-axis labelled (mean items recalled).', 'Bars accurate on a sensible scale (7.5 and 5.8).'] },
      { p: 2, q: 'Group A had a mean score of 20 (SD 1.2) and Group B a mean of 20 (SD 6.5). Explain what the standard deviations show. [2]', guide: ['Both groups had the same average score.', 'Group B’s scores were much more spread out / varied; Group A’s were close together (more consistent).'] },
      { p: 2, q: 'Plan a questionnaire to investigate students’ attitudes to doodling in lessons. [10]', guide: ['Technique: online (e.g. school survey) or paper and pencil – justified.', 'Closed questions with example(s): e.g. “I doodle in lessons: never / sometimes / often”; rating scale 1–5 “Doodling helps me concentrate”.', 'Open question example: “Describe how you feel when a teacher stops you doodling.”', 'Scoring: e.g. total agreement score out of 25; open answers coded into themes.', 'Procedure: same instructions, anonymous, completed in tutor time – replicable.', 'Validity: anonymity reduces social desirability; pilot to check clarity.', 'Reliability: standardised questions; test–retest a sample after 2 weeks.', 'Data: quantitative (scores, bar chart) + qualitative (themes).'] }
    ] }
  ]
};

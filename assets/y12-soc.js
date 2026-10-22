/* Year 12 – Social approach: Milgram, Perry et al., Piliavin et al. (9990 syllabus for 2027) */
window.PSY = window.PSY || { options: {}, studies: {} };
PSY.y12 = PSY.y12 || { options: {}, studies: {} };

PSY.y12.options.soc = {
  id: 'soc', name: 'Social approach', short: 'Social', emoji: '👥', color: '#10b981',
  blurb: 'How other people affect us: obedience, personal space and helping.',
  intro: `<b>Main assumptions</b> (learn these word-for-word for Paper 1):<ul style="margin:8px 0 6px"><li>Behaviour, cognitions and emotions are influenced by <b>social contexts</b>, <b>social environments</b> and <b>groups</b>.</li><li>Behaviour, cognitions and emotions are influenced by the <b>actual, implied or imagined presence of others</b>.</li></ul>Your three core studies: <b>Milgram</b> (obedience), <b>Perry et al.</b> (personal space) and <b>Piliavin et al.</b> (subway Samaritans).`,
  topics: [
  /* ───────────── 4.1 MILGRAM ───────────── */
  { id: 'as1', code: '4.1', title: 'Milgram (obedience)', emoji: '⚡',
    subs: [
    { id: 'as11', code: '4.1.1', title: 'Obedience & social pressure',
      inShort: 'Obedience = following a direct order from an authority figure. After the Holocaust, people asked: are some people (or nations) just more obedient, or can the situation make almost anyone obey?',
      notes: `
<h4>The psychology being investigated</h4>
<p>The syllabus lists: <b>obedience</b> and <b>social pressure</b>.</p>
<h4>Obedience</h4>
<ul><li><b>Obedience</b> = doing what you are told by someone with <b>authority</b> (a teacher, police officer, boss, scientist) – even if you don’t want to.</li><li>It differs from <b>conformity</b> (going along with a group of equals without being told).</li><li><b>Social pressure</b> = the influence other people have on what we do – here, pressure from an authority figure to continue.</li></ul>
<h4>Why Milgram was interested</h4>
<p>In the Holocaust, millions of people were killed by people who later said they were “just following orders”. A popular idea was the <b>“Germans are different” hypothesis</b> – that some people/nations have obedient personalities.</p>
<div class="two"><div class="box"><b>🧍 Dispositional hypothesis</b><br>Obedience is caused by something about the <b>person</b> – their personality (e.g. an authoritarian personality).</div>
<div class="box"><b>🏛️ Situational hypothesis</b><br>Obedience is caused by the <b>situation</b> – e.g. the presence of a legitimate authority, the setting, step-by-step commitment.</div></div>
<p class="tip">💡 Milgram tested ordinary American men – if they obeyed, the “Germans are different” idea would be weakened, and the <b>situation</b> would look more important.</p>`,
      debates: ['indsit', 'app'],
      vids: [['kSp0624MCe0', 'Psychology – obedience', 'Cognito', '5:55'], ['ECkRhKEA3xk', 'Introduction to the social approach', 'Mr. Luis', '5:00'], ['vuMt8b4UrcI', 'The Milgram experiment: obedience to authority', 'Sprouts', '5:12']],
      terms: [['Obedience', 'Following a direct order from a person with authority.'], ['Social pressure', 'The influence of other people on our behaviour.'], ['Dispositional explanation', 'Behaviour caused by personal characteristics (personality).'], ['Situational explanation', 'Behaviour caused by features of the situation or environment.'], ['Legitimate authority', 'Someone whose position gives them the right to give orders.']] },

    { id: 'as12', code: '4.1.2', title: 'The study: the shock experiment', ks: 'milgram1963',
      inShort: '40 ordinary men were told to give increasing “electric shocks” to a learner (an actor) for wrong answers. Every one went to at least 300 volts, and 65% went to the maximum 450 volts – even though many were very distressed.',
      notes: `
<h4>Study at a glance</h4>
<table class="mini"><tr><th>Feature</th><th>Details</th></tr>
<tr><td>Aim</td><td>To investigate how far people would go in obeying an instruction to harm another person – the conflict between <b>obedience to authority</b> and <b>personal conscience</b>.</td></tr>
<tr><td>Method</td><td>A <b>laboratory study</b> measuring obedience (the “dependent variable”) – but with <b>no IV</b> in this main study. <b>Observation</b> and <b>interviews</b> as techniques.</td></tr>
<tr><td>Sample</td><td><b>40 men</b> aged 20–50 from New Haven, USA, with a range of jobs (labourers to professionals). A <b>volunteer sample</b> from a newspaper advert and direct mail asking for people for a “study of memory and learning” at Yale University; paid <b>$4.50</b> just for turning up.</td></tr></table>
<h4>Procedure in steps</h4>
<ol><li>At <b>Yale University</b>, each participant met the experimenter (a stern man in a grey lab coat) and “Mr Wallace”, a mild, likeable 47-year-old – actually a <b>confederate</b>.</li><li>A <b>rigged draw</b> always made the participant the <b>teacher</b> and Mr Wallace the <b>learner</b>.</li><li>The learner was strapped into a chair in the next room with an electrode on his wrist. The teacher received a real <b>45 V sample shock</b> to make it believable.</li><li>The teacher read word pairs; for each wrong answer he had to give a shock, going up <b>15 V</b> each time on a generator with <b>30 switches from 15 V to 450 V</b> (labelled from “Slight Shock” to “Danger: Severe Shock” and “XXX”).</li><li>At <b>300 V</b> the learner pounded on the wall and stopped answering; after <b>315 V</b> he pounded again, then was silent. The teacher was told to treat silence as a wrong answer.</li><li>If the teacher hesitated, the experimenter used four standard <b>prods</b>: “Please continue” ➜ “The experiment requires that you continue” ➜ “It is absolutely essential that you continue” ➜ “You have no other choice, you must go on.” Refusing after prod 4 = <b>defiance</b>.</li><li>Afterwards: an <b>interview</b> and a friendly reunion with Mr Wallace (“dehoax”) to show he was unharmed.</li></ol>
<h4>Key results</h4>
<div class="three"><div class="box"><b>100%</b><br>went to at least <b>300 V</b>.</div><div class="box"><b>65%</b> (26 of 40)<br>went all the way to <b>450 V</b>.</div><div class="box"><b>12.5%</b> (5)<br>stopped at 300 V.</div></div>
<ul><li>Before the study, 14 Yale psychology students predicted only <b>0–3%</b> would go to 450 V.</li><li>Many showed extreme <b>tension</b>: sweating, trembling, stuttering, biting their lips, digging fingernails into their skin. <b>14</b> showed nervous laughter; <b>3</b> had full-blown, uncontrollable <b>seizures</b>.</li></ul>
<p class="tip">💡 <b>Conclusion:</b> ordinary people are far more obedient to authority than anyone expected – even when it means harming someone. Milgram listed situational reasons, e.g. the prestige of <b>Yale</b>, the participant had <b>volunteered</b> and been paid, the step-by-step <b>15 V increases</b>, the experimenter taking <b>responsibility</b>, and the situation being new and unclear.</p>`,
      debates: ['lab', 'observations', 'interviews', 'quantqual', 'sampling'],
      vids: [['iUTOyfjSokw', 'Milgram’s obedience study explained', 'Mr. Luis', '6:13'], ['PWMUgjpMC14', 'Podcast: Milgram (1963) obedience', 'StartStudying', '17:00']],
      terms: [['Confederate', 'An actor working for the researcher, pretending to be a participant (Mr Wallace).'], ['Rigged draw', 'A fixed lottery so the real participant was always the teacher.'], ['Prods', 'Four standard verbal instructions the experimenter used to make the teacher continue.'], ['Defiance', 'Refusing to continue after all four prods.'], ['Dehoax', 'Telling participants the truth and showing the learner was unharmed.']] },

    { id: 'as13', code: '4.1.3', title: 'Evaluating Milgram',
      inShort: 'Highly standardised and full of useful quantitative and qualitative data – but deeply controversial: participants were deceived and very distressed. The sample was all-male volunteers, and the lab set-up may not reflect real obedience.',
      notes: `
<h4>Ethics – the big debate</h4>
<div class="two"><div class="box minus"><b>➖ Problems</b><ul><li><b>Deception</b>: about the aim (memory), the shocks, the rigged draw and Mr Wallace.</li><li><b>Harm</b>: severe stress – trembling, sweating, 3 seizures.</li><li><b>Right to withdraw</b> was made hard – the prods (“you have no other choice”).</li><li>Consent wasn’t fully <b>informed</b>.</li></ul></div>
<div class="box plus"><b>➕ In Milgram’s defence</b><ul><li>He did not expect such distress (nor did others).</li><li>Thorough <b>debrief</b> and dehoax; friendly reunion with Mr Wallace.</li><li>Participants could and did leave (14 defied).</li><li>A follow-up found most participants said they were glad to have taken part.</li></ul></div></div>
<h4>Methodology</h4>
<ul><li><b>Standardisation:</b> the same script, prods, recorded learner responses, and shock generator for everyone ➜ <b>reliable</b> and <b>replicable</b> (Milgram ran many variations).</li><li><b>Data:</b> <b>quantitative</b> (max voltage) and <b>qualitative</b> (observed tension, comments, interviews) – rich and comparable.</li><li><b>Validity:</b> did participants believe the shocks were real? Most appeared genuinely distressed, suggesting yes. But the lab setting and the 15 V steps are artificial – <b>ecological validity</b> is debated.</li></ul>
<h4>Sample & generalisation</h4>
<p>40 American <b>men</b>, volunteers from one area – can’t easily generalise to women or other cultures. But they had a wide range of ages and jobs.</p>
<h4>Issues & debates</h4>
<ul><li><b>Individual vs situational:</b> strong support for the <b>situational</b> hypothesis (65% obeyed), but 35% defied – individual differences matter.</li><li><b>Application:</b> helps explain atrocities and everyday obedience (e.g. in hospitals, the military); teaches people to question authority.</li></ul>`,
      ev: { plus: ['Highly standardised – reliable and replicable.', 'Quantitative and qualitative data give a rich picture.', 'Participants appeared to believe it – genuine behaviour.', 'Important application to understanding obedience and atrocities.'],
            minus: ['Serious ethical issues: deception, distress, pressure not to withdraw.', 'All-male American volunteer sample – limited generalisability.', 'Artificial lab task – debated ecological validity.', 'Volunteers may be more willing to cooperate.'] },
      debates: ['ethics', 'indsit', 'app', 'validity', 'sampling'],
      vids: [['mpNPJHSSpSs', 'Milgram’s obedience experiment – evaluation', 'David Meaker', '6:56'], ['a9U1OUk-m5o', 'The Milgram experiment fully explained', 'The Mind Expanse', '8:21']],
      terms: [['Informed consent', 'Agreeing to take part with full knowledge of what the study involves.'], ['Right to withdraw', 'Participants can leave at any time without pressure.'], ['Debriefing', 'Explaining the true aim afterwards and making sure participants are OK.']] }
    ],
    quiz: [
      ['How many participants were in Milgram’s study?', ['20', '40', '72', '100'], 1, '40 men aged 20–50.'],
      ['What percentage went all the way to 450 V?', ['0–3%', '12.5%', '65%', '100%'], 2, '26 of 40 = 65%.'],
      ['At what voltage did the learner pound on the wall and stop answering?', ['45 V', '150 V', '300 V', '450 V'], 2, 'At 300 V he pounded on the wall; after 315 V there was silence.'],
      ['How were participants recruited?', ['Random sampling', 'Newspaper advert and direct mail (volunteer)', 'University students only', 'Prisoners'], 1, 'Volunteers responding to an advert for a study of memory and learning; paid $4.50.'],
      ['What was the 4th prod?', ['Please continue', 'The experiment requires that you continue', 'It is absolutely essential that you continue', 'You have no other choice, you must go on'], 3, 'The fourth and final prod; refusing after it = defiance.'],
      ['Why did the teacher receive a 45 V sample shock?', ['As punishment', 'To make the shocks believable', 'To test the machine', 'By accident'], 1, 'It convinced participants the generator was real.'],
      ['Which ethical guideline was broken by the rigged draw?', ['Confidentiality', 'Lack of deception', 'Privacy', 'Debriefing'], 1, 'Participants were deceived about their role and the learner.']
    ],
    exam: [
      { p: 1, q: 'Describe the results of Milgram’s study. [4]', guide: ['All 40 participants (100%) went to at least 300 V.', '26 (65%) went to the maximum 450 V; 5 stopped at 300 V.', 'Many showed tension: sweating, trembling, stuttering; 14 nervous laughter; 3 seizures.', 'Students had predicted only 0–3% would go to 450 V.'] },
      { p: 1, q: 'Evaluate Milgram’s study in terms of two strengths and two weaknesses. At least one of your evaluation points must be about ethics. [10]', guide: ['Ethics weakness: deception (aim, shocks, rigged draw) and severe distress.', 'Ethics: dehoax/debrief, participants could leave – partial defence.', 'Strength: standardised procedure/prods – reliable, replicable.', 'Strength: quantitative + qualitative data.', 'Weakness: all-male US volunteers – generalisability.', 'Weakness/strength: validity – did they believe it? lab setting.'] },
      { p: 2, q: 'Milgram’s study is described as having a dependent variable but no independent variable. Explain what this means and identify how the dependent variable was measured. [4]', guide: ['An IV is a variable the researcher changes between conditions – in the main study there was only one condition.', 'So it is not a true experiment (a controlled observation/lab study).', 'DV = obedience.', 'Measured by the maximum voltage given (15–450 V) before defying/finishing.'] }
    ] },

  /* ───────────── 4.2 PERRY ET AL. ───────────── */
  { id: 'as2', code: '4.2', title: 'Perry et al. (personal space)', emoji: '📏',
    subs: [
    { id: 'as21', code: '4.2.1', title: 'Personal space, oxytocin & empathy',
      inShort: 'Personal space is the invisible bubble we like to keep around us. Oxytocin is a “social hormone” linked to bonding and trust. Empathy is understanding and sharing others’ feelings. Does oxytocin make people want to be closer – and does it depend on empathy?',
      notes: `
<h4>The psychology being investigated</h4>
<p>The syllabus lists: <b>interpersonal distance (personal space)</b>, <b>social hormones</b> and <b>empathy</b>.</p>
<h4>Personal space</h4>
<ul><li><b>Interpersonal distance</b> = the physical distance we keep between ourselves and others. When someone comes too close we feel uncomfortable.</li><li>We let friends closer than strangers; distances also vary across <b>cultures</b>.</li></ul>
<table class="mini"><tr><th>Zone (Hall, 1966)</th><th>Distance (approx.)</th><th>Who</th></tr><tr><td>Intimate</td><td>0–45 cm</td><td>Partners, close family</td></tr><tr><td>Personal</td><td>45 cm–1.2 m</td><td>Friends</td></tr><tr><td>Social</td><td>1.2–3.6 m</td><td>Acquaintances, work</td></tr><tr><td>Public</td><td>3.6 m +</td><td>Strangers, speeches</td></tr></table>
<h4>Oxytocin (OT) – a social hormone</h4>
<ul><li>Released during birth, breastfeeding, hugging and social bonding – sometimes called the “love hormone”.</li><li>Studies suggest OT can increase <b>trust</b> and closeness – but it doesn’t affect everyone the same way.</li><li>The <b>social salience hypothesis</b>: OT makes <b>social cues more noticeable</b>. For someone who finds people rewarding, that may mean wanting to be closer; for others, it may make social cues feel more uncomfortable.</li></ul>
<h4>Empathy</h4>
<p><b>Empathy</b> = understanding and sharing another person’s feelings. It can be measured by self-report – e.g. the <b>Interpersonal Reactivity Index (IRI)</b>: perspective taking, empathic concern, personal distress and fantasy.</p>
<p class="tip">💡 Link to the social approach: our behaviour (how close we stand) is affected by the <b>presence of others</b> – and the biology of hormones shows how social and biological factors interact.</p>`,
      debates: ['indsit', 'nn', 'app'],
      vids: [['pw3FZ3xOBVo', 'Proxemics: the study of personal space', 'Vox', '4:45'], ['eYhcr8j7pgk', 'Oxytocin hormone explained', 'Microscopic Galaxy', '6:00']],
      terms: [['Interpersonal distance', 'The physical distance people keep between themselves and others (personal space).'], ['Oxytocin', 'A hormone linked to bonding, trust and social behaviour.'], ['Empathy', 'Understanding and sharing another person’s feelings.'], ['IRI', 'Interpersonal Reactivity Index: a 28-item self-report empathy questionnaire.'], ['Social salience hypothesis', 'OT makes social cues more noticeable, so its effects depend on the person.']] },

    { id: 'as22', code: '4.2.2', title: 'The study: oxytocin & interpersonal distance', ks: 'perry2015',
      inShort: '54 men had oxytocin or a placebo nasal spray (a week apart, double-blind) and did two computer tasks measuring how close they’d let people come. Oxytocin made high-empathy men prefer closer distances but low-empathy men prefer more space.',
      notes: `
<h4>Study at a glance</h4>
<table class="mini"><tr><th>Feature</th><th>Details</th></tr>
<tr><td>Aim</td><td>To find out how <b>oxytocin</b> and <b>empathy</b> affect people’s preferred interpersonal distance.</td></tr>
<tr><td>Method</td><td><b>Two laboratory experiments</b>, <b>double-blind</b>, <b>placebo-controlled</b>; questionnaires.</td></tr>
<tr><td>Sample</td><td><b>54 male</b> undergraduates at the University of Haifa, Israel (aged 19–32); paid or given course credit. The <b>20 highest</b> and <b>20 lowest</b> empathy scorers formed the groups analysed.</td></tr>
<tr><td>Design</td><td><b>Repeated measures</b> for treatment (each man had OT one week and placebo the other – order counterbalanced); <b>independent measures</b> for empathy group (high/low).</td></tr>
<tr><td>IVs / DV</td><td><b>IVs</b>: OT vs placebo; high vs low empathy; (Exp 1) type of protagonist. <b>DV</b>: preferred distance.</td></tr></table>
<h4>Procedure in steps</h4>
<ol><li>Each man self-administered a nasal spray – <b>24 IU oxytocin</b> or a <b>saline placebo</b> – then waited <b>45 minutes</b>. Neither he nor the experimenter knew which (<b>double-blind</b>).</li><li>He completed the <b>IRI</b> empathy questionnaire (first visit).</li><li><b>Experiment 1 – CID task</b> (Comfortable Interpersonal Distance): on a computer, he imagined standing in the centre of a round room. A figure – a <b>friend</b>, a <b>stranger</b>, an <b>authority figure</b> or a <b>ball</b> – walked towards him from one of 8 doors; he pressed a key to stop it where he felt comfortable (repeated many times).</li><li><b>Experiment 2 – Choosing rooms</b>: he chose between pairs of pictures of rooms where he would later have a <b>personal conversation</b> with someone (a deception – no conversation happened). The rooms differed in the <b>distance between two chairs</b> (20–140 cm) – and, as a control, the distance between a table and a plant.</li><li>One week later he repeated everything with the other spray.</li></ol>
<h4>Key results</h4>
<ul><li>Exp 1: everyone kept friends closest, then the ball, authority figures and strangers furthest.</li><li><b>High empathy</b> men preferred <b>closer</b> distances after OT (e.g. CID 26.1% ➜ 23.3% of the room); <b>low empathy</b> men preferred <b>more distance</b> after OT (27.0% ➜ 30.2%).</li><li>Exp 2: the same pattern for <b>chair distance</b> (high empathy: about 80.6 cm ➜ 78.1 cm with OT), but <b>not</b> for the table–plant control ➜ the effect is specifically <b>social</b>.</li></ul>
<p class="tip">💡 <b>Conclusion:</b> oxytocin doesn’t simply make everyone more sociable – its effect on personal space depends on the person’s <b>empathy</b>, supporting the <b>social salience</b> idea.</p>`,
      debates: ['experiments', 'lab', 'design', 'questionnaires', 'variables'],
      vids: [['PP0sLOsxAns', 'The oxytocin paradox – Perry et al.', 'Mr. Luis', '6:29'], ['pEIuRSXmCkM', 'Oxytocin and empathy: Perry personal space', 'AICE Psychology', '4:17'], ['rnZxmwSFxWA', 'Perry et al. (personal space) aim and procedure', 'Silly Psychology', '4:10']],
      terms: [['Double-blind', 'Neither participant nor researcher knows who received the real treatment.'], ['Placebo', 'A fake treatment (saline spray) with no active ingredient.'], ['CID task', 'Comfortable Interpersonal Distance: stopping an approaching figure where you feel comfortable.'], ['Counterbalancing', 'Half had OT first and half placebo first, to cancel out order effects.']] },

    { id: 'as23', code: '4.2.3', title: 'Evaluating Perry et al.',
      inShort: 'A double-blind, placebo-controlled, repeated-measures design gives strong control, and a non-social control (table–plant) shows the effect is social. But only men took part, the tasks were on a computer, and some effects were small.',
      notes: `
<h4>Methodology</h4>
<ul><li><b>Double-blind + placebo:</b> removes expectation effects and researcher bias ➜ high validity.</li><li><b>Repeated measures</b> for the spray: each man compared with himself, removing participant variables; <b>counterbalancing</b> reduced order effects; sessions a week apart at the same time of day.</li><li><b>Controls:</b> the ball (Exp 1) and table–plant distance (Exp 2) acted as non-social comparisons.</li><li><b>Standardised computer tasks</b> ➜ objective, quantitative and replicable.</li><li><b>Ecological validity:</b> stopping a stick figure on a screen or choosing pictures of rooms isn’t real personal space – people might behave differently face-to-face.</li><li>Some effects were <b>small</b> or only close to significant.</li></ul>
<h4>Sample & generalisation</h4>
<p>Only <b>men</b> (OT may act differently in women), all students in Israel – personal space norms differ between cultures.</p>
<h4>Ethics</h4>
<p>Participants were <b>informed</b> they might receive a hormone; no lasting harm from one dose. <b>Deception</b> in Exp 2 (no conversation would actually happen) – they should be <b>debriefed</b>.</p>
<h4>Issues & debates</h4>
<ul><li><b>Individual vs situational:</b> the effect of OT depended on an <b>individual</b> trait (empathy); the type of person approaching (situation) also mattered.</li><li><b>Nature vs nurture:</b> a hormone (nature) affects social behaviour, but empathy may be partly learned.</li><li><b>Application:</b> OT has been suggested as a treatment for social difficulties – this study warns it may not help everyone, and might even make some people more withdrawn.</li></ul>`,
      ev: { plus: ['Double-blind, placebo-controlled – reduces bias.', 'Repeated measures with counterbalancing – controls participant variables.', 'Non-social control conditions show the effect is social.', 'Quantitative, objective computer measures – replicable.'],
            minus: ['All-male, Israeli student sample – limited generalisability.', 'Computer tasks – low ecological validity.', 'Some effects were small/only approached significance.', 'Deception in Experiment 2.'] },
      debates: ['indsit', 'validity', 'sampling', 'ethics', 'app'],
      vids: [['Wo_AE6VGLfI', 'Perry et al. – oxytocin (personal space)', 'TheTeacherKind', '9:35'], ['jr8Vc_ZG-PE', 'Perry et al. (2015) explained', 'David Meaker', '14:54']],
      terms: [['Expectation effect', 'Behaviour changing because participants think they got a real treatment.'], ['Non-social control', 'A condition without people (ball, table–plant) to check effects are social.'], ['Generalisability', 'How far findings apply to other people – limited here to men.']] }
    ],
    quiz: [
      ['What was given to participants in Perry et al.?', ['A pill', 'Oxytocin or placebo nasal spray', 'An injection', 'Caffeine'], 1, '24 IU oxytocin or a saline placebo, by nasal spray.'],
      ['What does double-blind mean?', ['Participants were blindfolded', 'Neither participants nor experimenter knew who had OT', 'Two experimenters', 'They couldn’t see the screen'], 1, 'Prevents expectation and researcher bias.'],
      ['Who did participants keep furthest away in the CID task?', ['Friend', 'Ball', 'Authority figure', 'Stranger'], 3, 'Strangers were kept furthest away.'],
      ['How did oxytocin affect HIGH-empathy men?', ['They wanted more distance', 'They preferred closer distances', 'No effect at all', 'They refused the task'], 1, 'OT reduced their preferred distance.'],
      ['Why was the table–plant distance included in Experiment 2?', ['Decoration', 'As a non-social control', 'To test eyesight', 'To deceive participants'], 1, 'OT × empathy affected chair distance but not table–plant – the effect is social.'],
      ['What questionnaire measured empathy?', ['AQ', 'FFMQ', 'IRI', 'ADIS'], 2, 'The Interpersonal Reactivity Index.'],
      ['What was the main weakness of the sample?', ['Too many women', 'All male', 'All children', 'Too large'], 1, 'All 54 were men, so findings may not apply to women.']
    ],
    exam: [
      { p: 1, q: 'Describe the Comfortable Interpersonal Distance (CID) task used in Experiment 1 of Perry et al. [4]', guide: ['Computer task: participant imagined standing in the centre of a circular room.', 'A protagonist (friend, stranger, authority figure or ball) approached from one of 8 doors.', 'Participant pressed a key to stop it at the point they felt uncomfortable/comfortable.', 'Distance recorded (as % of the room) – repeated many times.'] },
      { p: 1, q: 'Evaluate the study by Perry et al. in terms of two strengths and two weaknesses. At least one of your evaluation points must be about generalisations from findings. [10]', guide: ['Generalisation: all male (OT differs by sex), Israeli students (culture) – weakness.', 'Double-blind placebo control – strength.', 'Repeated measures + counterbalancing – strength.', 'Non-social control conditions.', 'Low ecological validity – computer tasks.', 'Deception in Exp 2 / small effects.'] },
      { p: 2, q: 'Perry et al. used a repeated measures design for the treatment (oxytocin/placebo). Explain one advantage of this and how they dealt with order effects. [4]', guide: ['Advantage: same men in both conditions – participant variables (e.g. normal sociability) controlled.', 'Fewer participants needed.', 'Order effects dealt with by counterbalancing – half had OT first, half placebo first.', 'Sessions a week apart at the same time of day so OT had worn off.'] }
    ] },

  /* ───────────── 4.3 PILIAVIN ET AL. ───────────── */
  { id: 'as3', code: '4.3', title: 'Piliavin et al. (subway Samaritans)', emoji: '🚇',
    subs: [
    { id: 'as31', code: '4.3.1', title: 'Bystander apathy & diffusion of responsibility',
      inShort: 'Bystander apathy is when people don’t help someone in trouble. Diffusion of responsibility says the more people there are, the less responsible each person feels – so help is less likely. But does this happen in real life, face to face?',
      notes: `
<h4>The psychology being investigated</h4>
<p>The syllabus lists: <b>bystander apathy</b> and <b>diffusion of responsibility</b>.</p>
<h4>Background: Kitty Genovese</h4>
<p>In 1964 in New York, Kitty Genovese was murdered, and newspapers reported that many neighbours heard or saw but didn’t help. (Later research suggests the reports were exaggerated.) Psychologists began to ask why bystanders sometimes don’t help.</p>
<h4>Key ideas</h4>
<ul><li><b>Bystander apathy</b> (bystander effect) = people failing to help a person in need when others are present.</li><li><b>Diffusion of responsibility</b> = the more bystanders, the less responsibility each one feels (“someone else will do it”). Lab studies by Darley and Latané supported this – but participants usually <b>heard</b> an emergency rather than <b>saw</b> it.</li><li><b>Pluralistic ignorance</b>: everyone looks to others and, seeing no one acting, decides it isn’t an emergency.</li></ul>
<h4>The arousal: cost–reward model</h4>
<p>Piliavin et al.’s explanation of helping:</p>
<ol><li>Seeing an emergency causes unpleasant <b>arousal</b> in a bystander.</li><li>The bystander wants to reduce it – by <b>helping</b>, <b>leaving</b>, or deciding the victim doesn’t deserve help.</li><li>They choose by weighing <b>costs</b> (effort, danger, embarrassment, disgust) against <b>rewards</b> (praise, feeling good) of helping – and the costs of <b>not</b> helping (guilt, blame).</li></ol>
<p class="tip">💡 Link to the social approach: whether we help depends on the <b>social situation</b> – the victim, other people, and the setting.</p>`,
      debates: ['indsit', 'app'],
      vids: [['OSsPfbup0ac', 'The bystander effect', 'Coolpsychologist', '3:36'], ['GZgIYGaeWy0', 'The bystander effect (examples + experiments)', 'Practical Psychology', '5:28']],
      terms: [['Bystander apathy', 'Failing to help someone in need when other people are around.'], ['Diffusion of responsibility', 'Each person feels less responsible to help as the number of bystanders increases.'], ['Arousal: cost–reward model', 'Seeing an emergency causes arousal; bystanders reduce it in the way with the best balance of costs and rewards.'], ['Samaritan', 'Someone who helps a stranger in need.']] },

    { id: 'as32', code: '4.3.2', title: 'The study: the subway collapse', ks: 'piliavin1969',
      inShort: 'On New York subway trains, a man “collapsed” in front of passengers. If he carried a cane (seemed ill) he was helped in 62 of 65 trials; if he seemed drunk, 19 of 38. Most helpers were men, and more bystanders didn’t mean less help.',
      notes: `
<h4>Study at a glance</h4>
<table class="mini"><tr><th>Feature</th><th>Details</th></tr>
<tr><td>Aim</td><td>To investigate how bystanders behave in a <b>real-life</b> emergency, and the effect of the victim’s <b>type</b> (ill or drunk) and <b>race</b>, the <b>size</b> of the group, and a <b>model</b> who helps.</td></tr>
<tr><td>Method</td><td><b>Field experiment</b> using <b>observation</b> (covert, non-participant).</td></tr>
<tr><td>Sample</td><td>About <b>4450</b> men and women travelling on the 8th Avenue subway in <b>New York</b>, weekdays 11 am–3 pm, April–June 1968 – about 45% black and 55% white. An <b>opportunity</b> sample.</td></tr>
<tr><td>IVs</td><td>Victim: <b>cane</b> (sober, ill) or <b>drunk</b> (smelled of alcohol, bottle in a brown bag); victim’s <b>race</b> (black/white); model’s position and timing; number of bystanders.</td></tr>
<tr><td>DVs</td><td>Whether, how fast and by whom help was given; comments; people leaving the area.</td></tr></table>
<h4>Procedure in steps</h4>
<ol><li>Four teams of four students: <b>2 female observers</b>, <b>1 male victim</b>, <b>1 male model</b>. Victims were men aged 26–35 (3 white, 1 black), dressed the same (jacket, old trousers, no tie).</li><li>The trials were on an express train running for <b>7½ minutes without stopping</b> – passengers couldn’t easily leave.</li><li>About <b>70 seconds</b> after leaving the station, the victim <b>staggered and collapsed</b>, then lay staring at the ceiling.</li><li>If no one helped, the <b>model</b> helped either early (after 70 s) or late (after 150 s), standing near (critical area) or further away (adjacent area). If still no help, the model helped the victim off at the next stop.</li><li>Observers recorded race, sex and location of passengers, who helped, how quickly (<b>latency</b>), and comments. <b>103 trials</b> in total.</li></ol>
<h4>Key results</h4>
<div class="two"><div class="box"><b>🦯 Cane victim</b><br>Helped spontaneously (before the model) in <b>62 of 65</b> trials (95%).</div><div class="box"><b>🍾 Drunk victim</b><br>Helped spontaneously in <b>19 of 38</b> trials (50%).</div></div>
<ul><li>Help came <b>faster</b> for the cane victim.</li><li><b>90%</b> of first helpers were <b>men</b>.</li><li>Race made little difference for the cane victim; there was a slight tendency for same-race helping when the victim was drunk.</li><li><b>No diffusion of responsibility</b>: larger groups of bystanders did not help less.</li><li>More people left the area in the drunk condition. Comments included women saying “It’s for men to help him.”</li></ul>
<p class="tip">💡 <b>Conclusion:</b> in a face-to-face emergency people help a lot – especially someone who seems ill rather than drunk (fewer costs, more deserving). The <b>arousal: cost–reward model</b> explains this better than diffusion of responsibility.</p>`,
      debates: ['fieldexp', 'observations', 'ethics', 'sampling', 'quantqual'],
      vids: [['UW1P4peGiMw', 'The subway Samaritan (Piliavin) explained', 'EY', '6:56'], ['16qnA7-vYik', 'Piliavin et al. (1969) – good Samaritanism', 'Psychology A Level', '9:51']],
      terms: [['Field experiment', 'An experiment in a real-life setting where the IV is still manipulated.'], ['Critical area', 'The part of the carriage where the victim collapsed.'], ['Latency', 'Time taken before help was given.'], ['Spontaneous help', 'Help given before the model stepped in.'], ['Model (Piliavin)', 'A confederate who helped the victim if no one else did.']] },

    { id: 'as33', code: '4.3.3', title: 'Evaluating Piliavin et al.',
      inShort: 'High ecological validity and a huge sample of real passengers. But passengers didn’t consent and weren’t debriefed, the setting was hard to control, and with several observers some details may have been missed.',
      notes: `
<h4>Methodology</h4>
<ul><li><b>Ecological validity:</b> a real subway with real passengers who didn’t know they were being studied ➜ natural behaviour; no demand characteristics.</li><li><b>Standardisation:</b> victims dressed identically, collapsed at the same time on the same route, following a script ➜ some control and replicability.</li><li><b>Less control:</b> passengers varied from trial to trial (number, mood, who was there) – extraneous variables. There were fewer drunk trials (38) than cane trials (65), and the black victim did fewer trials.</li><li><b>Observation reliability:</b> two observers per trial – but in a busy carriage, they might miss things.</li><li><b>Data:</b> quantitative (frequency, latency, race, sex) and qualitative (comments).</li></ul>
<h4>Sample & generalisation</h4>
<p>A very large, varied sample (~4450) – but all on one subway line in New York, at midday, in 1968. People in other places or times (and more rural areas) might behave differently.</p>
<h4>Ethics – major issues</h4>
<ul><li>No <b>consent</b>; passengers were <b>deceived</b> (the collapse was fake).</li><li>No <b>right to withdraw</b> (the train didn’t stop) and no <b>debrief</b>.</li><li>Possible <b>distress</b>, especially to passengers who saw no one helping or felt guilty for not helping.</li></ul>
<h4>Issues & debates</h4>
<ul><li><b>Individual vs situational:</b> helping depended on the situation (victim type) and on individual factors (sex, race of helper).</li><li><b>Application:</b> understanding when people help can inform campaigns and first-aid training; it challenges the idea that crowds never help.</li></ul>`,
      ev: { plus: ['High ecological validity – real setting, no demand characteristics.', 'Huge, varied sample of passengers.', 'Standardised victim behaviour, timing and route.', 'Quantitative and qualitative data.'],
            minus: ['Serious ethical issues: no consent, deception, no right to withdraw or debrief.', 'Low control over extraneous variables (passenger numbers, mood).', 'Unequal numbers of trials across conditions.', 'One city, one time period – limited generalisability.'] },
      debates: ['ethics', 'validity', 'indsit', 'app', 'sampling'],
      vids: [['mJ2OwgPR-gg', 'Podcast: Piliavin et al. (1969) subway Samaritan', 'StartStudying', '12:33'], ['o02q5GSvM8w', 'Overview of Piliavin et al. – the social approach', 'Alt Academy', '19:39']],
      terms: [['Covert observation', 'Observing people without them knowing.'], ['Extraneous variable', 'Any variable other than the IV that could affect the DV.'], ['Population validity', 'Whether findings apply to people beyond the sample.']] }
    ],
    quiz: [
      ['Where did Piliavin et al.’s study take place?', ['A university lab', 'New York subway trains', 'A hospital', 'A school'], 1, 'The 8th Avenue subway, New York, 1968.'],
      ['How often was the cane victim helped spontaneously?', ['19 of 38 trials', '62 of 65 trials', '26 of 40 trials', '5 of 103 trials'], 1, '62 of 65 (95%); the drunk victim 19 of 38 (50%).'],
      ['Why was the 7½-minute non-stop section chosen?', ['It was cheaper', 'Passengers couldn’t easily leave', 'It was quiet', 'It was dark'], 1, 'Passengers were “trapped” as bystanders for 7½ minutes.'],
      ['What percentage of first helpers were male?', ['50%', '65%', '90%', '100%'], 2, '90% of first helpers were men.'],
      ['Did diffusion of responsibility occur?', ['Yes, strongly', 'No – larger groups did not help less', 'Only with the cane victim', 'It wasn’t tested'], 1, 'Group size did not reduce helping in this face-to-face situation.'],
      ['Which model explains the results best?', ['Diffusion of responsibility', 'Arousal: cost–reward model', 'Social learning theory', 'Dopamine hypothesis'], 1, 'Helping the drunk victim had higher costs (disgust, danger), so fewer helped.'],
      ['What is the main ethical problem?', ['Too many observers', 'Passengers didn’t consent and weren’t debriefed', 'The victims were paid', 'It was too short'], 1, 'Covert field experiment – no consent, deception, no debrief.']
    ],
    exam: [
      { p: 1, q: 'Outline what the victim did and how the two victim conditions differed in Piliavin et al.’s study. [4]', guide: ['About 70 seconds after the train left, the victim staggered forward and collapsed.', 'He lay on the floor staring at the ceiling until helped.', 'Cane condition: appeared sober, carried a black cane (ill).', 'Drunk condition: smelled of alcohol and carried a bottle in a brown paper bag.'] },
      { p: 1, q: 'Evaluate the study by Piliavin et al. in terms of two strengths and two weaknesses. At least one of your evaluation points must be about ecological validity. [10]', guide: ['Ecological validity: real subway, real passengers – natural behaviour (strength).', 'Large sample (~4450).', 'Standardised victim behaviour.', 'Ethics: no consent, deception, no debrief/withdrawal.', 'Low control of extraneous variables.', 'Generalisability: one city, 1968, midday.'] },
      { p: 2, q: 'Piliavin et al. conducted a field experiment. Explain one strength and one weakness of field experiments, using examples from this study. [4]', guide: ['Strength: real setting – high ecological validity / passengers unaware so no demand characteristics.', 'Example: real New York subway passengers.', 'Weakness: less control of extraneous variables / ethical problems with consent.', 'Example: number and type of passengers changed every trial; no consent or debrief.'] }
    ] }
  ]
};

Object.assign(PSY.y12.studies, {
  milgram1963: { opt: 'soc', sub: 'as12', name: 'Milgram (1963)', short: 'Obedience',
    ref: 'Milgram, S. (1963). Behavioral study of obedience. Journal of Abnormal and Social Psychology, 67(4), 371–78.',
    context: 'After the Holocaust, people asked whether atrocities happened because some people (or nations) are particularly obedient (the dispositional or “Germans are different” hypothesis) or because the situation can make ordinary people obey (the situational hypothesis). Obedience is following the direct orders of an authority figure.',
    aim: 'To investigate the conflict between obedience to authority and personal conscience: how far would ordinary people go in obeying an instruction if it meant harming another person?',
    sample: '40 men aged 20–50 from the New Haven area, USA, with a range of occupations (unskilled to professional). A volunteer sample recruited by newspaper advert and direct mail for a “study of memory and learning” at Yale University; paid $4.50 for attending.',
    method: 'Laboratory study measuring obedience (the dependent variable: maximum voltage given) but with no independent variable in the main study. Observation (including via one-way mirror) and interview as techniques; quantitative and qualitative data.',
    procedure: ['At Yale University, the participant met the experimenter (a 31-year-old man in a grey lab coat) and “Mr Wallace”, a likeable 47-year-old accountant who was actually a confederate.', 'A rigged draw made the participant the teacher. The learner was strapped into a chair in an adjacent room with an electrode on his wrist; the teacher received a real 45 V sample shock.', 'The teacher read word pairs and gave a shock for each wrong answer, increasing by 15 V each time on a generator with 30 switches from 15 V to 450 V, labelled from “Slight Shock” to “Danger: Severe Shock” and “XXX”.', 'The learner gave mostly wrong answers. At 300 V he pounded on the wall and stopped answering; after 315 V he pounded again and then was silent. Silence was to be treated as a wrong answer.', 'If the teacher hesitated, standard prods were used in order: “Please continue”; “The experiment requires that you continue”; “It is absolutely essential that you continue”; “You have no other choice, you must go on.” Defiance = refusing after the fourth prod.', 'Afterwards, participants were interviewed, given questionnaires and “dehoaxed”, including a friendly reconciliation with Mr Wallace.'],
    results: ['All 40 participants (100%) continued to at least 300 V; 5 (12.5%) stopped at 300 V.', '26 participants (65%) obeyed to the maximum 450 V; 14 defied the experimenter at some point.', '14 Yale psychology students had predicted that only 0–3% would go to 450 V.', 'Many showed extreme tension – sweating, trembling, stuttering, lip-biting, digging fingernails into their flesh; 14 showed nervous laughter and 3 had full-blown, uncontrollable seizures.'],
    conclusion: 'Ordinary people are surprisingly obedient to a legitimate authority, even when obeying conflicts with their conscience and harms another person. Situational features – such as the prestige of Yale, having volunteered, the gradual increase in shocks and the experimenter accepting responsibility – produce high obedience.',
    ev: { plus: ['Highly standardised (script, prods, recorded learner responses) – reliable and replicable.', 'Rich quantitative (voltage) and qualitative (observations, comments) data.', 'Most participants appeared to believe the situation was real.'],
          minus: ['Serious ethical issues: deception, severe distress, pressure that made withdrawal difficult.', 'All-male American volunteer sample – limited generalisability.', 'Artificial laboratory task – ecological validity is debated.'] },
    debates: { indsit: 'Strong support for situational explanations (65% fully obeyed), although 35% defied – individual differences matter.', app: 'Helps explain obedience in institutions and atrocities, and why people should feel able to question authority.' } },

  perry2015: { opt: 'soc', sub: 'as22', name: 'Perry et al. (2015)', short: 'Personal space',
    ref: 'Perry, A., Mankuta, D. and Shamay-Tsoory, S. G. (2015). OT promotes closer interpersonal distance among highly empathic individuals. Social, Cognitive and Affective Neuroscience, 10(1), 3–9.',
    context: 'Interpersonal distance (personal space) regulates social interaction. Oxytocin (OT) is a social hormone linked to bonding and trust, but its effects vary between people. The social salience hypothesis suggests OT makes social cues more salient, so its effects may depend on individual traits such as empathy.',
    aim: 'To investigate how oxytocin and individual differences in empathy affect preferred interpersonal distance.',
    sample: '54 male undergraduate students at the University of Haifa, Israel (aged 19–32, mean about 25), who received course credit or payment. Participants were split by IRI empathy scores; 20 high-empathy and 20 low-empathy men formed the analysed groups.',
    method: 'Two laboratory experiments; double-blind, placebo-controlled; repeated measures for treatment (OT/placebo, counterbalanced, one week apart) and independent measures for empathy group. Questionnaire (IRI) and computer tasks; quantitative data.',
    procedure: ['Participants self-administered 24 IU of oxytocin or a saline placebo by nasal spray, then waited 45 minutes; neither participant nor experimenter knew which.', 'At the first visit they completed the Interpersonal Reactivity Index (IRI), a 28-item empathy questionnaire.', 'Experiment 1 (CID): on screen, a protagonist (friend, stranger, authority figure or ball) approached a central figure representing the participant from one of eight doors; the participant pressed a key to stop it at a comfortable distance. Distance was recorded as a percentage.', 'Experiment 2 (choosing rooms): participants chose between pairs of room pictures for a later personal conversation with another participant (which did not happen). Rooms varied in the distance between two chairs (20–140 cm), with table–plant distance as a non-social control, and chair angles.', 'One week later, at the same time of day, they repeated the tasks with the other spray.'],
    results: ['In Experiment 1, preferred distance increased from friend, to ball, to authority figure, to stranger.', 'High-empathy participants preferred closer distances with OT than placebo (e.g. 23.3% vs 26.1%); low-empathy participants preferred greater distances with OT (30.2% vs 27.0%).', 'In Experiment 2, the OT × empathy interaction was significant for chair distance (high-empathy participants chose closer chairs with OT, about 78.1 cm vs 80.6 cm) but not for the table–plant control.'],
    conclusion: 'The effect of oxytocin on interpersonal distance depends on empathy: OT promotes closeness in highly empathic people but may increase preferred distance in less empathic people, supporting the social salience hypothesis.',
    ev: { plus: ['Double-blind, placebo-controlled design reduces expectation and researcher bias.', 'Repeated measures with counterbalancing controls participant variables and order effects.', 'Non-social control conditions show the effect is specifically social.'],
          minus: ['All-male student sample from one culture – limited generalisability.', 'Computerised tasks lack ecological validity.', 'Some effects were small; deception about the later conversation in Experiment 2.'] },
    debates: { indsit: 'OT’s effect depended on an individual trait (empathy); the type of person approaching (situation) also affected distance.', nn: 'A biological factor (hormone) interacts with a psychological trait (empathy).', app: 'Warns that OT-based treatments for social difficulties may not help everyone.' } },

  piliavin1969: { opt: 'soc', sub: 'as32', name: 'Piliavin et al. (1969)', short: 'Subway Samaritans',
    ref: 'Piliavin, I. M., Rodin, J. and Piliavin, J. A. (1969). Good Samaritanism: An underground phenomenon? Journal of Personality and Social Psychology, 13(4), 289–99.',
    context: 'After the murder of Kitty Genovese (1964), research on bystander apathy grew. Laboratory studies supported diffusion of responsibility, but participants usually heard rather than saw the victim. Piliavin et al. wanted to study helping in a real-life, face-to-face emergency.',
    aim: 'To investigate helping behaviour in a real-life setting and the effects of the type of victim (ill or drunk), the race of the victim, the presence of a helping model and the number of bystanders.',
    sample: 'About 4450 men and women passengers on the 8th Avenue express subway in New York, travelling on weekdays between 11 am and 3 pm, April–June 1968 (about 45% black, 55% white). Opportunity sample.',
    method: 'Field experiment with covert, non-participant observation. IVs: victim (cane/drunk), victim race (black/white), model (early/late, critical/adjacent area, or none), group size. DVs: frequency, speed (latency) and race/sex of helpers; comments; people leaving.',
    procedure: ['Four teams of four students each: two female observers, one male victim and one male model. Victims were men aged 26–35 (three white, one black), dressed identically.', 'Trials took place between 59th Street and 125th Street – a 7½-minute stretch with no stops.', 'About 70 seconds after the train left the station, the victim staggered forward and collapsed, remaining on the floor looking at the ceiling until helped.', 'In the cane condition the victim appeared sober and carried a black cane; in the drunk condition he smelled of alcohol and carried a bottle in a brown paper bag.', 'If no one helped, the model did so after 70 seconds (early) or 150 seconds (late), standing in the critical or adjacent area; if still no help, the model helped the victim off at the next stop.', 'Observers recorded passengers’ race, sex and location, who helped and how quickly, comments, and anyone leaving the area. 103 trials in total.'],
    results: ['The cane victim received spontaneous help in 62 of 65 trials (95%); the drunk victim in 19 of 38 trials (50%). Help was usually faster for the cane victim.', '90% of first helpers were male.', 'Race of victim had little effect in the cane condition, with a slight tendency for same-race helping in the drunk condition.', 'There was no diffusion of responsibility: larger groups did not help less.', 'More people left the critical area in the drunk condition; comments included “It’s for men to help him.”'],
    conclusion: 'In a face-to-face emergency where bystanders cannot easily leave, help is very common. An apparently ill person is more likely to be helped than a drunk one, and men are more likely to help. The arousal: cost–reward model explains the findings better than diffusion of responsibility.',
    ev: { plus: ['High ecological validity – real setting and passengers unaware of the study (no demand characteristics).', 'Very large, diverse sample.', 'Standardised victim behaviour, timing and route; quantitative and qualitative data.'],
          minus: ['Serious ethical issues: no consent, deception, no right to withdraw and no debrief.', 'Little control over extraneous variables; unequal numbers of trials in conditions.', 'One city and era – limited generalisability.'] },
    debates: { indsit: 'Helping depended on the situation (victim type) and on individual characteristics of bystanders (e.g. sex).', app: 'Shows people do help in face-to-face emergencies; informs first-aid campaigns and understanding of helping.' } }
});

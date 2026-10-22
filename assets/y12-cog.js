/* Year 12 – Cognitive approach: Andrade, Baron-Cohen et al., Pozzulo et al. (9990 syllabus for 2027) */
window.PSY = window.PSY || { options: {}, studies: {} };
PSY.y12 = PSY.y12 || { options: {}, studies: {} };

PSY.y12.options.cog = {
  id: 'cog', name: 'Cognitive approach', short: 'Cognitive', emoji: '💭', color: '#8b5cf6',
  blurb: 'How we think: attention, memory, reading minds and eyewitnesses.',
  intro: `<b>Main assumptions</b> (learn these word-for-word for Paper 1):<ul style="margin:8px 0 6px"><li>Information is processed through the same route in all humans: <b>input – process – output</b>, in a similar way to how information is processed by a <b>computer</b>.</li><li>People have <b>individual differences</b> in their cognitive processing such as with attention, language, thinking and memory. These processes can also help to explain behaviour and emotion.</li></ul>Your three core studies: <b>Andrade</b> (doodling), <b>Baron-Cohen et al.</b> (eyes test) and <b>Pozzulo et al.</b> (line-ups).`,
  topics: [
  /* ───────────── 2.1 ANDRADE ───────────── */
  { id: 'ag1', code: '2.1', title: 'Andrade (doodling)', emoji: '✏️',
    subs: [
    { id: 'ag11', code: '2.1.1', title: 'Attention, memory & daydreaming',
      inShort: 'Attention is focusing on some information and ignoring the rest. When we’re bored our mind wanders (daydreams), which uses up attention. Doodling might stop daydreaming – or it might distract us.',
      notes: `
<h4>The psychology being investigated</h4>
<p>The syllabus lists: <b>attention</b> and <b>memory</b>.</p>
<h4>Attention</h4>
<ul><li><b>Attention</b> = concentrating on some information while ignoring other information. We have a <b>limited capacity</b> – we can only attend to so much at once.</li><li>A <b>dual task</b> means doing two things at the same time (e.g. listening + doodling). If both need the same mental resources, performance on one may suffer.</li></ul>
<h4>Memory</h4>
<ul><li>Information we attend to is <b>processed</b> and can be stored in memory. Information we don’t attend to is often lost.</li><li>The <b>working memory model</b> (Baddeley and Hitch) describes a short-term “workspace” with limited capacity – the cognitive approach treats the mind like a computer: <b>input ➜ process ➜ output</b>.</li></ul>
<h4>Two predictions about doodling</h4>
<div class="two"><div class="box minus"><b>➖ Doodling distracts</b><br>Doodling is a second task that takes attention away from the main task ➜ worse memory.</div>
<div class="box plus"><b>➕ Doodling helps</b><br>When bored, people <b>daydream</b>, which uses lots of cognitive resources. A simple doodle keeps you just alert enough (<b>arousal</b>) and stops your mind wandering ➜ better attention and memory.</div></div>
<p class="tip">💡 Andrade made the task <b>boring</b> on purpose (a dull phone message after participants had already done another study) – that’s when daydreaming is most likely.</p>`,
      debates: ['app', 'indsit'],
      vids: [['1xwNFb9tsxg', 'Working memory (Baddeley & Hitch)', 'Psychology Unlocked', '4:27'], ['Du-3cLUCn10', 'Cognitive approach – introduction', 'Mr. Luis', '2:46']],
      terms: [['Attention', 'Focusing on some information while ignoring the rest; it has limited capacity.'], ['Daydreaming', 'Mind-wandering to thoughts unrelated to the task – uses cognitive resources.'], ['Dual task', 'Doing two tasks at once, e.g. listening while doodling.'], ['Arousal', 'How alert or activated someone is – too low when bored.'], ['Monitoring', 'Keeping track of particular information, e.g. noting the names of party guests.']] },

    { id: 'ag12', code: '2.1.2', title: 'The study: does doodling help?', ks: 'andrade2010',
      inShort: '40 people listened to a boring phone message and wrote down who was coming to a party. Half also shaded shapes (doodled). In a surprise memory test, doodlers remembered 29% more.',
      notes: `
<h4>Study at a glance</h4>
<table class="mini"><tr><th>Feature</th><th>Details</th></tr>
<tr><td>Aim</td><td>To test whether doodling while doing a boring task helps people concentrate and remember (rather than distracting them).</td></tr>
<tr><td>Method</td><td><b>Laboratory experiment</b>, <b>independent measures</b> design with <b>random allocation</b>.</td></tr>
<tr><td>Sample</td><td><b>40</b> adults aged 18–55 (35 women, 5 men) from a research participant panel in Cambridge, UK – <b>20 per group</b>.</td></tr>
<tr><td>IV / DV</td><td><b>IV</b>: doodling (shading shapes) or not. <b>DV</b>: monitoring score (names written correctly) and recall score in a surprise test.</td></tr></table>
<h4>Procedure in steps</h4>
<ol><li>Participants had just finished another study, so they were already a bit bored and tired.</li><li>They listened to a <b>2½-minute mock telephone message</b>, spoken in a <b>monotonous</b> voice, about a party – it mentioned the names of people who were coming, people who weren’t, and lots of places.</li><li><b>Monitoring task</b>: write down the names of people <b>coming</b> to the party (8 correct names).</li><li><b>Doodling group</b>: shaded printed squares and circles at the same time (told neatness didn’t matter). <b>Control group</b>: no shapes to shade.</li><li>After the message, a <b>surprise memory test</b>: recall the 8 party-goers’ names and 8 places.</li></ol>
<h4>Key results</h4>
<div class="two"><div class="box"><b>Monitoring</b><br>Doodlers: <b>7.8</b> correct names; controls: <b>7.1</b>. Controls made more false alarms (5 vs 1).</div>
<div class="box"><b>Surprise recall</b><br>Doodlers: <b>7.5</b> items (names + places); controls: <b>5.8</b> ➜ doodlers recalled <b>29% more</b>.</div></div>
<p class="tip">💡 <b>Conclusion:</b> doodling during a boring task <b>helps</b> attention and memory – probably because it reduces daydreaming. It isn’t always a sign that someone isn’t listening!</p>`,
      debates: ['experiments', 'lab', 'design', 'variables', 'quantqual'],
      vids: [['MlgzNEXMBZo', 'Andrade (2010): can doodling help you remember more?', 'Mr. Luis', '4:26'], ['s5jwuqKQiPg', 'Andrade 2010 doodling study – full study', 'AICE Psychology', '8:56']],
      terms: [['Monitoring score', 'Number of correct party-goer names written during the message (minus false alarms).'], ['False alarm', 'Writing down a name that wasn’t a party-goer.'], ['Surprise recall test', 'An unexpected memory test – stops participants deliberately rehearsing.'], ['Random allocation', 'Assigning participants to conditions by chance to spread out participant variables.']] },

    { id: 'ag13', code: '2.1.3', title: 'Evaluating Andrade',
      inShort: 'Well controlled and standardised, with a surprise test and objective scores. But it’s an artificial task, the sample was mostly women, and we don’t know whether doodlers really daydreamed less – that wasn’t measured directly.',
      notes: `
<h4>Methodology</h4>
<ul><li><b>Controls / standardisation:</b> the same recorded message, same instructions and same shapes for everyone – so differences are likely caused by the IV ➜ good validity and <b>replicable</b>.</li><li><b>Surprise memory test:</b> participants weren’t expecting it, so they couldn’t deliberately rehearse – a fairer measure of attention.</li><li><b>Random allocation</b> helped spread participant variables across the two groups (independent measures).</li><li><b>Ecological validity:</b> listening to a fake phone message in a lab isn’t the same as doodling in real lectures or meetings.</li><li><b>Validity problem:</b> daydreaming was <b>not measured directly</b> – the explanation is inferred. Shading shapes is a “controlled” doodle, unlike free doodling in real life.</li></ul>
<h4>Sample & generalisation</h4>
<p>40 people, mostly <b>women</b> (35), from one research panel in the UK, who had just done another study – may not represent everyone (e.g. students, men, other cultures).</p>
<h4>Ethics</h4>
<p>Few problems: no harm. There was mild <b>deception</b> – participants weren’t told about the memory test – but this was needed and they would be <b>debriefed</b>.</p>
<h4>Data</h4>
<p><b>Quantitative</b> and <b>objective</b> (number of names/places written – no judgement needed) – easy to compare the two groups.</p>
<h4>Issues & debates</h4>
<ul><li><b>Application:</b> teachers and employers could allow doodling during long, boring tasks; doodling might help people who need to monitor information (e.g. call centres).</li><li><b>Individual vs situational:</b> the situation (a boring task) made daydreaming likely, and the doodling (situation) helped – but people differ in how much they daydream.</li></ul>`,
      ev: { plus: ['Highly standardised – same message, shapes and instructions ➜ reliable and replicable.', 'Random allocation spreads participant variables.', 'Surprise test prevented rehearsal; objective quantitative data.', 'Useful application in education and work.'],
            minus: ['Artificial lab task – low ecological validity.', 'Small sample, mostly women from one panel.', 'Daydreaming wasn’t measured – the explanation is inferred.', 'Mild deception about the memory test.'] },
      debates: ['validity', 'reliability', 'ethics', 'sampling', 'app'],
      vids: [['V8TltQR1Me8', 'Doodling (Andrade) evaluation', 'Unravel with Treesa', '9:22'], ['kOzVJ6jZuGo', 'J. Andrade on doodling (full study & evaluation)', 'A Levels Psychology (9990)', '21:53']],
      terms: [['Standardisation', 'Keeping the procedure exactly the same for every participant.'], ['Deception', 'Misleading participants or withholding information about the study.'], ['Debriefing', 'Telling participants the true aim after the study and checking they are OK.']] }
    ],
    quiz: [
      ['How long was the telephone message?', ['30 seconds', '2½ minutes', '10 minutes', '25 minutes'], 1, 'A 2.5-minute monotonous mock phone message about a party.'],
      ['What did the doodling group do?', ['Drew freely', 'Shaded printed squares and circles', 'Wrote the whole message', 'Nothing'], 1, 'They shaded shapes while monitoring the message.'],
      ['How much more did the doodlers recall?', ['5%', '29%', '50%', '100%'], 1, '7.5 vs 5.8 items ≈ 29% more.'],
      ['What experimental design was used?', ['Repeated measures', 'Independent measures', 'Matched pairs', 'Case study'], 1, 'Two separate groups of 20 (doodle vs control).'],
      ['Why was the memory test a surprise?', ['To be unkind', 'So participants wouldn’t rehearse the information', 'Because there was no time', 'To test their vision'], 1, 'If they knew, they might rehearse – the test was meant to measure attention during the task.'],
      ['Why was the task deliberately boring?', ['To save money', 'Because boredom makes daydreaming more likely', 'To upset participants', 'It wasn’t'], 1, 'Doodling is predicted to help most when people would otherwise daydream.'],
      ['Which is a weakness of the sample?', ['It was all children', 'Mostly women (35 of 40)', 'It was too large', 'They were all doctors'], 1, '35 women and 5 men – a gender imbalance.']
    ],
    exam: [
      { p: 1, q: 'Describe the procedure for the doodling group in Andrade’s study. [4]', guide: ['Listened to a 2½-minute monotonous mock telephone message about a party.', 'Wrote down names of people coming to the party (monitoring).', 'At the same time shaded printed squares and circles – told neatness didn’t matter.', 'Then given a surprise test to recall names and places.'] },
      { p: 1, q: 'Evaluate Andrade’s study in terms of two strengths and two weaknesses. At least one of your evaluation points must be about ecological validity. [10]', guide: ['Ecological validity: artificial task in a lab (weakness) – but mimics boring phone calls/meetings.', 'Standardisation/controls: same message/instructions – reliable.', 'Random allocation/independent measures.', 'Sample: 35 women of 40, one panel.', 'Daydreaming not measured directly.', 'Objective quantitative data; application to classrooms.'] },
      { p: 2, q: 'Andrade used an independent measures design. Explain one strength and one weakness of using this design in her study. [4]', guide: ['Strength: no order effects – each person heard the message once, so no practice/they couldn’t expect the surprise test.', 'Applied to the study: a second message would have made the memory test no longer a surprise.', 'Weakness: participant variables – e.g. one group might have had better memories or been less tired.', 'Reduced by random allocation.'] }
    ] },

  /* ───────────── 2.2 BARON-COHEN ET AL. ───────────── */
  { id: 'ag2', code: '2.2', title: 'Baron-Cohen et al. (eyes test)', emoji: '👀',
    subs: [
    { id: 'ag21', code: '2.2.1', title: 'Theory of mind & autism',
      inShort: 'Theory of mind (ToM) is understanding that other people have their own thoughts and feelings. Many autistic people find this harder, especially reading subtle mental states from faces and eyes.',
      notes: `
<h4>The psychology being investigated</h4>
<p>The syllabus lists: <b>theory of mind</b> and <b>social sensitivity</b>.</p>
<h4>Theory of mind (ToM)</h4>
<ul><li>ToM = the ability to understand that others have <b>mental states</b> (beliefs, desires, intentions, emotions) that may be different from your own – and to use this to predict their behaviour.</li><li>Young children develop basic ToM at around <b>4 years</b> – tested with “false belief” tasks such as the <b>Sally–Anne test</b>.</li><li><b>Social sensitivity</b> = picking up on other people’s feelings and social cues.</li></ul>
<h4>Autism spectrum</h4>
<ul><li><b>Asperger syndrome (AS)</b> and <b>high-functioning autism (HFA)</b> (the terms used in the study) describe people on the autism spectrum with average or above-average intelligence.</li><li>Autistic people may have difficulty with <b>advanced ToM</b> – e.g. reading complex emotions such as “suspicious” or “reflective” from someone’s eyes – even if they pass simple child tests.</li><li>Baron-Cohen sees autistic traits as lying on a <b>continuum</b> through the whole population – measured with the <b>Autism Spectrum Quotient (AQ)</b>.</li></ul>
<h4>Why revise the eyes test?</h4>
<p>The original 1997 “Reading the Mind in the Eyes” test had problems:</p>
<ul><li>Only <b>2 answer choices</b> per photo (50% chance of guessing right).</li><li>Too easy for many adults (<b>ceiling effect</b>) – scores bunched near the top.</li><li>Some items could be solved just from basic emotions or gaze direction; more female than male faces.</li><li>Only <b>25 items</b> – too few to show fine differences.</li></ul>
<p class="tip">💡 This study is about <b>improving a test</b> – so it’s great for Paper 2 questions about validity and reliability of measures.</p>`,
      debates: ['nn', 'indsit', 'app'],
      vids: [['9mXaqCKJRjg', 'Theory of mind (explained in 3 minutes)', 'Helpful Professor Explains!', '3:06'], ['0bi0WCLJveM', 'Theory of mind and the Sally–Anne test', 'Daniel Storage', '4:29'], ['N6ylH-LYjOM', 'Theory of mind – Uta Frith', 'Serious Science', '10:56']],
      terms: [['Theory of mind', 'Understanding that others have mental states different from your own.'], ['Social sensitivity', 'Being able to pick up on others’ feelings and social cues.'], ['Asperger syndrome / HFA', 'Terms used in the study for people on the autism spectrum with average or higher intelligence.'], ['AQ', 'Autism Spectrum Quotient: a self-report questionnaire measuring autistic traits.'], ['Ceiling effect', 'When a test is too easy and most people score near the maximum.']] },

    { id: 'ag22', code: '2.2.2', title: 'The study: the revised eyes test', ks: 'baroncohen2001',
      inShort: 'The revised test showed 36 photos of eyes, each with 4 words to choose from. Adults with AS/HFA scored lower (21.9/36) than three comparison groups, women scored a little higher than men, and higher AQ scores went with lower eyes-test scores.',
      notes: `
<h4>Study at a glance</h4>
<table class="mini"><tr><th>Feature</th><th>Details</th></tr>
<tr><td>Aim</td><td>To test a <b>revised</b> Eyes Test: (1) Does it tell apart adults with AS/HFA from others? (2) Is there a <b>negative correlation</b> between Eyes Test and AQ scores? (3) Do women score higher than men?</td></tr>
<tr><td>Method</td><td><b>Quasi-experiment</b> (naturally occurring IV: group) + <b>correlation</b>; questionnaires.</td></tr>
<tr><td>IV / DV</td><td><b>IV</b>: group (AS/HFA vs comparison groups) and sex. <b>DV</b>: Eyes Test score out of 36 (and AQ score).</td></tr></table>
<h4>The four groups</h4>
<table class="mini"><tr><th>Group</th><th>Who</th></tr>
<tr><td>1 – AS/HFA</td><td><b>15 men</b> with AS or HFA, recruited through adverts (e.g. the National Autistic Society magazine); average IQ.</td></tr>
<tr><td>2 – General population</td><td><b>122</b> adults from adult education classes in Exeter and public library users in Cambridge.</td></tr>
<tr><td>3 – Students</td><td><b>103</b> Cambridge University undergraduates (53 men, 50 women).</td></tr>
<tr><td>4 – IQ-matched</td><td><b>14</b> randomly selected adults from the general population, matched on IQ with group 1.</td></tr></table>
<h4>The revised test</h4>
<ul><li><b>36</b> black-and-white photos of the <b>eye region</b> only, with an <b>equal number</b> of male and female faces.</li><li><b>4 words</b> per photo – the correct mental state (e.g. “reflective”) plus 3 <b>foils</b> (wrong answers) of the same emotional tone.</li><li>A <b>glossary</b> explained any words participants didn’t know.</li><li>Items were only kept if most of a pilot group chose the right word and no single foil was picked too often.</li><li>Groups 1, 3 and 4 also completed the <b>AQ</b>; group 1 did a control task – identifying the <b>gender</b> from the eyes.</li></ul>
<h4>Key results</h4>
<ul><li>AS/HFA group scored lowest: mean <b>21.9</b> out of 36, vs about <b>26.2</b> (general population), <b>28.0</b> (students) and <b>30.9</b> (IQ-matched).</li><li>The AS/HFA group had no problem with the <b>gender task</b> ➜ the difficulty was reading mental states, not seeing faces.</li><li><b>Negative correlation</b> (r = −0.53) between Eyes Test and AQ scores: more autistic traits ➜ lower Eyes score.</li><li>Women tended to score a little higher than men in the general population and student groups.</li></ul>
<p class="tip">💡 <b>Conclusion:</b> the revised Eyes Test is a more sensitive measure of adult theory of mind and can detect subtle differences in social sensitivity, including in autistic adults.</p>`,
      debates: ['correlations', 'questionnaires', 'experiments', 'sampling', 'quantqual'],
      vids: [['nAki1eTZAL8', 'Baron-Cohen et al. (2001)', 'Mr. Luis', '9:25'], ['qYYbAJT1sFo', 'Take the Baron-Cohen eyes test', 'AICE Psychology', '8:11']],
      terms: [['Foil', 'A wrong answer option designed to be believable.'], ['Quasi-experiment', 'An experiment where the IV is naturally occurring (e.g. having AS or not) so participants can’t be randomly allocated.'], ['Negative correlation', 'As one variable goes up, the other goes down (higher AQ, lower Eyes score).'], ['Glossary', 'A list of word meanings – reduced the chance that vocabulary affected scores.']] },

    { id: 'ag23', code: '2.2.3', title: 'Evaluating Baron-Cohen et al.',
      inShort: 'The revised test is better than the original (4 choices, more items, equal sexes). Large comparison groups and an IQ-matched group help validity. But photos of eyes are not real social situations, and the AS/HFA group was small and all male.',
      notes: `
<h4>Methodology</h4>
<ul><li><b>Improved validity:</b> 4 choices (not 2) reduce lucky guessing; 36 items avoid ceiling effects; equal male/female faces; a glossary means vocabulary isn’t being tested.</li><li><b>Controls:</b> the IQ-matched group rules out intelligence as the explanation; the gender task shows group 1 could see and process faces normally.</li><li><b>Standardised & objective scoring:</b> a forced-choice questionnaire is scored the same way for everyone ➜ reliable and replicable.</li><li><b>Ecological validity:</b> still photos of eyes are not like real life, where we see whole faces, movement, voices and context.</li><li><b>Correlation:</b> the AQ–Eyes relationship shows a link, not a cause.</li></ul>
<h4>Sample & generalisation</h4>
<ul><li>Large comparison groups (122 + 103) ✔.</li><li>But the AS/HFA group was only <b>15</b> and all <b>male</b>, and recruited through adverts (<b>volunteers</b>). Students from Cambridge are not typical.</li></ul>
<h4>Ethics</h4>
<p>Generally ethical: <b>consent</b>, no harm. Care is needed with labelling – participants and their scores must be kept <b>confidential</b>, and low scores shouldn’t upset anyone.</p>
<h4>Issues & debates</h4>
<ul><li><b>Application:</b> the test can help identify subtle social difficulties in adults; used in research worldwide.</li><li><b>Nature vs nurture:</b> autism has a strong biological basis; the sex difference could be nature (biology) or nurture (girls encouraged to attend to feelings).</li><li><b>Individual differences:</b> ToM varies across everyone – a continuum.</li></ul>`,
      ev: { plus: ['Revised test is more valid: 4 choices, 36 items, equal male/female faces, glossary.', 'IQ-matched and gender-task controls rule out alternative explanations.', 'Large comparison groups; standardised, objective scoring.', 'Useful for research and identifying difficulties.'],
            minus: ['Static photos of eyes – low ecological validity.', 'Small, all-male AS/HFA group of volunteers.', 'Correlation between AQ and Eyes score doesn’t show cause.', 'Some words are hard and may depend on culture and language.'] },
      debates: ['validity', 'reliability', 'sampling', 'app', 'nn'],
      vids: [['RZWme7oXM6c', 'Baron-Cohen et al. (eyes test) – cognitive approach', 'Cambridge Study Materials', '19:43'], ['3_UUh0pTXL0', 'Baron-Cohen Reading the Mind in the Eyes (2001)', 'AICE Psychology', '30:01']],
      terms: [['Forced choice', 'Participants must pick one of the given options.'], ['Matched group', 'A comparison group chosen to be similar on a key variable (here IQ).'], ['Cultural bias', 'When a test favours people from one culture or language.']] }
    ],
    quiz: [
      ['How many photos were in the revised Eyes Test?', ['25', '36', '40', '100'], 1, 'Revised from 25 items to 36.'],
      ['How many answer words per photo in the revised test?', ['2', '3', '4', '6'], 2, '4 words: the target plus 3 foils (the original had only 2).'],
      ['What was the mean score of the AS/HFA group?', ['21.9', '26.2', '28.0', '30.9'], 0, 'They scored lowest: 21.9 out of 36.'],
      ['What did the IQ-matched group help to rule out?', ['Gender', 'Intelligence as the explanation for low scores', 'Age', 'Eyesight'], 1, 'Group 4 had a similar IQ to group 1 but scored much higher.'],
      ['The correlation between AQ and Eyes Test scores was…', ['Positive', 'Negative', 'Zero', 'Perfect'], 1, 'r = −0.53: more autistic traits, lower Eyes score.'],
      ['Why was the gender-recognition task used?', ['As a control – to show group 1 could process faces normally', 'To test IQ', 'To make it longer', 'To check honesty'], 0, 'Normal performance showed the difficulty was specific to mental states.'],
      ['Theory of mind means…', ['Remembering faces', 'Understanding that others have their own thoughts and feelings', 'Being intelligent', 'Seeing in the dark'], 1, 'ToM = attributing mental states to others.']
    ],
    exam: [
      { p: 1, q: 'Outline two ways in which Baron-Cohen et al. improved the original Eyes Test. [4]', guide: ['Increased from 2 to 4 answer choices – reduces guessing/ceiling effects.', 'Increased from 25 to 36 items – more sensitive.', 'Equal numbers of male and female faces.', 'Glossary provided; foils chosen with the same emotional tone; items piloted.'] },
      { p: 1, q: 'Explain one similarity and one difference between the study by Baron-Cohen et al. and the study by Andrade. [4]', guide: ['Similarity: both cognitive approach / both quantitative data / both used standardised tasks in controlled conditions.', 'Uses evidence from BOTH studies.', 'Difference: Andrade used random allocation (true experiment) whereas Baron-Cohen used a naturally occurring IV (quasi-experiment) / Baron-Cohen used correlation.', 'Difference explained with examples from both.'] },
      { p: 2, q: 'Baron-Cohen et al. found a negative correlation between AQ and Eyes Test scores. Explain what this means and why a correlation cannot show that autistic traits cause low Eyes Test scores. [4]', guide: ['Negative correlation: as AQ scores increase, Eyes Test scores decrease.', 'r = −0.53 – a moderate relationship.', 'Correlation shows a relationship, not cause and effect.', 'A third variable (e.g. social experience, vocabulary) could affect both.'] }
    ] },

  /* ───────────── 2.3 POZZULO ET AL. ───────────── */
  { id: 'ag3', code: '2.3', title: 'Pozzulo et al. (line-ups)', emoji: '🕵️',
    subs: [
    { id: 'ag31', code: '2.3.1', title: 'Eyewitnesses & false positives',
      inShort: 'In a line-up a witness tries to pick out the culprit. If the culprit isn’t there (target-absent) but the witness picks someone anyway, that’s a false positive. Young children make more false positives – is it poor memory or social pressure?',
      notes: `
<h4>The psychology being investigated</h4>
<p>The syllabus lists: <b>false positive responses</b> and <b>eyewitness testimony</b>.</p>
<h4>Eyewitness testimony & line-ups</h4>
<ul><li><b>Eyewitness testimony</b> = a witness’s account of a crime, including identifying the culprit. Mistaken identifications are a major cause of innocent people being convicted.</li><li>In a <b>line-up</b> the witness sees photos (or people), including the suspect and <b>foils</b> – innocent people who look similar.</li><li><b>Target-present</b> line-up: the culprit is there. <b>Target-absent</b>: the culprit is <b>not</b> there (the police may have the wrong suspect).</li><li><b>Simultaneous</b> line-up: all photos shown at once.</li></ul>
<h4>Possible responses</h4>
<table class="mini"><tr><th></th><th>Witness picks someone</th><th>Witness says “not there”</th></tr>
<tr><td><b>Target-present</b></td><td>Correct identification (if they pick the target)</td><td>Miss</td></tr>
<tr><td><b>Target-absent</b></td><td><b>False positive</b> ❌</td><td><b>Correct rejection</b> ✔</td></tr></table>
<h4>Why do children make more false positives?</h4>
<div class="two"><div class="box"><b>🧠 Cognitive explanation</b><br>Poor memory for faces – children can’t remember the culprit well enough to know he isn’t there.</div>
<div class="box"><b>👥 Social explanation</b><br>Children feel <b>pressure</b> to choose – they think adults expect an answer or want to be helpful and obedient to authority.</div></div>
<p class="tip">💡 Pozzulo’s clever idea: use <b>familiar cartoon characters</b> (Dora and Diego). Children know these faces very well – so if they still make false positives with cartoons, poor memory can’t be the whole explanation.</p>`,
      debates: ['children', 'app', 'indsit'],
      vids: [['m6aY9Wr-xjI', 'Eyewitness testimony', 'Cognito', '7:57'], ['uqhNQ2iV0OQ', 'Do children make reliable eyewitnesses?', 'CognitionAndMemory', '3:20']],
      terms: [['Eyewitness testimony', 'A witness’s account of a crime and identification of the culprit.'], ['Target-absent line-up', 'A line-up in which the culprit is not present.'], ['False positive', 'Choosing someone from a target-absent line-up.'], ['Correct rejection', 'Correctly saying the culprit is not in a target-absent line-up.'], ['Foil', 'An innocent person in a line-up who looks similar to the suspect.']] },

    { id: 'ag32', code: '2.3.2', title: 'The study: cartoons vs human faces', ks: 'pozzulo2011',
      inShort: '59 children (4–7) and 53 adults watched short clips of cartoon characters and people, then saw line-ups. Children picked out the cartoons almost perfectly but still often chose someone when the target wasn’t there – especially for human faces.',
      notes: `
<h4>Study at a glance</h4>
<table class="mini"><tr><th>Feature</th><th>Details</th></tr>
<tr><td>Aim</td><td>To find out whether children’s false positives in target-absent line-ups are due to <b>cognitive</b> factors (poor memory) or <b>social</b> factors, by comparing familiar cartoon faces and unfamiliar human faces.</td></tr>
<tr><td>Method</td><td><b>Laboratory experiment</b>, <b>mixed design</b>: age group (independent measures) + target type and line-up type (repeated measures). Questions (interview / written) as techniques.</td></tr>
<tr><td>Sample</td><td><b>59 children</b> aged 4–7 (mean age about 5) from three private schools in Ontario, Canada; <b>53 adults</b> (17–30) from a university participant pool.</td></tr>
<tr><td>IVs</td><td>Age (child/adult); target type (cartoon/human); line-up type (target-present/absent).</td></tr>
<tr><td>DV</td><td>Accuracy: correct identifications (target-present) and correct rejections (target-absent).</td></tr></table>
<h4>Procedure in steps</h4>
<ol><li>Participants watched <b>four short video clips</b> (about 6 seconds each): two cartoon characters (<b>Dora</b> and <b>Diego</b>) and two unfamiliar university students doing everyday things – each clip had a close-up of the face.</li><li>After each clip, a <b>filler task</b>: describe what the character looked like (“Do you remember anything else?”) – children answered aloud, adults in writing.</li><li>Then a <b>simultaneous line-up</b> of 4 black-and-white photos on a laptop. Everyone was told the target <b>might not be there</b>.</li><li>Children <b>pointed</b> to a photo or to a box with a <b>silhouette</b> meaning “not there”; adults marked a sheet.</li></ol>
<h4>Key results</h4>
<ul><li><b>Cartoons, target-present:</b> children identified them almost perfectly – their memory for the cartoons was excellent.</li><li><b>Correct rejections (target-absent):</b><table class="mini"><tr><th></th><th>Children</th><th>Adults</th></tr><tr><td>Cartoon</td><td>0.74</td><td>0.94</td></tr><tr><td>Human</td><td>0.45</td><td>0.70</td></tr></table></li><li>So children made <b>more false positives than adults</b> for both cartoons and people, and everyone was more accurate with cartoons than human faces.</li></ul>
<p class="tip">💡 <b>Conclusion:</b> children remembered the cartoons well, yet still picked foils when the cartoon wasn’t there ➜ their false positives are not just poor memory – <b>social factors</b> (e.g. feeling they should choose someone) also play a part.</p>`,
      debates: ['experiments', 'lab', 'design', 'variables', 'quantqual'],
      vids: [['awTy1aX_k8o', 'Pozzulo et al. (line-ups) explained', 'EY', '7:15'], ['UBS1GWb07Ws', 'Pozzulo et al. (2011): eyewitness line-ups', 'WIARA Learning', '19:23']],
      terms: [['Mixed design', 'Combines independent measures (age) with repeated measures (target type, line-up type).'], ['Filler task', 'An activity that fills time between seeing the target and the line-up.'], ['Simultaneous line-up', 'All photos are shown at the same time.'], ['Silhouette box', 'A picture option children pointed to if they thought the target wasn’t there.']] },

    { id: 'ag33', code: '2.3.3', title: 'Evaluating Pozzulo et al.',
      inShort: 'Clever, well-controlled design with clear numbers and a direct comparison of children and adults. But watching 6-second cartoon clips isn’t like seeing a real crime, and young children may not have fully understood the “not there” option.',
      notes: `
<h4>Methodology</h4>
<ul><li><b>Controls:</b> same clips, same line-up procedure, same instructions (“the target may not be there”), foils matched for face shape and hair, photos cropped to face and shoulders ➜ good validity and <b>replicable</b>.</li><li><b>Repeated measures</b> for target type and line-up type: each person was their own comparison, reducing participant variables.</li><li><b>Clever comparison:</b> cartoons separated memory problems from social pressure.</li><li><b>Ecological validity:</b> 6-second clips of everyday actions are not like witnessing a stressful crime; no real consequences of choosing.</li><li><b>Validity concerns:</b> children may not have understood the silhouette (“not there”) option; children were tested by an adult, which might itself create pressure.</li></ul>
<h4>Sample & generalisation</h4>
<p>59 children from <b>private schools</b> in one part of Canada and adult university students – may not represent all children, especially from other cultures where obedience to adults differs.</p>
<h4>Ethics (use of children)</h4>
<ul><li>Needed <b>parental consent</b>; children should also agree (assent) and be able to stop.</li><li>Low risk: familiar cartoons and harmless everyday clips – no frightening crime was shown.</li></ul>
<h4>Issues & debates</h4>
<ul><li><b>Application:</b> police should take care when children view line-ups – e.g. stress that “not there” is a good answer, practise first, or use special child line-up procedures.</li><li><b>Use of children:</b> the findings can protect children (and innocent suspects) – but are children’s answers in a lab like real testimony?</li><li><b>Individual vs situational:</b> age (individual) vs social pressure from the setting (situational).</li></ul>`,
      ev: { plus: ['Well controlled and standardised – replicable.', 'Cartoon vs human comparison isolates memory from social factors.', 'Children compared directly with adults.', 'Strong application to police line-ups.'],
            minus: ['Low ecological validity – short harmless clips, no real crime or consequences.', 'Children may not have understood the “not there” option.', 'Sample from private schools in one region of Canada.', 'Social pressure was inferred, not measured.'] },
      debates: ['children', 'app', 'validity', 'sampling', 'ethics'],
      vids: [['lLMFvNy1HIU', 'Pozzulo et al. (line-ups) – cognitive approach', 'Cambridge Study Materials', '18:23'], ['evGZbSQZino', 'Pozzulo et al. – real-world application', 'Emjay', '1:40']],
      terms: [['Assent', 'A child’s own agreement to take part (as well as parental consent).'], ['Ecological validity', 'How far findings apply to real-life situations such as real crimes.'], ['Inferred', 'Concluded from the pattern of results rather than measured directly.']] }
    ],
    quiz: [
      ['How old were the children in Pozzulo et al.?', ['2–3', '4–7', '8–11', '12–15'], 1, '59 children aged 4 to 7 years.'],
      ['Which cartoon characters were used?', ['Mickey and Minnie', 'Dora and Diego', 'Bart and Lisa', 'Peppa and George'], 1, 'Dora the Explorer and Go Diego Go – very familiar to young children.'],
      ['A false positive is…', ['Choosing the culprit correctly', 'Choosing someone when the culprit isn’t in the line-up', 'Saying “not there” correctly', 'Refusing to answer'], 1, 'Picking a foil from a target-absent line-up.'],
      ['Children’s correct rejection rate for human faces was about…', ['0.95', '0.74', '0.45', '0.10'], 2, '0.45 for children vs 0.70 for adults.'],
      ['Why did the researchers use cartoon faces?', ['They were cheaper', 'Children know them well, so memory shouldn’t explain errors', 'Adults like cartoons', 'To be funny'], 1, 'If children still make false positives with familiar faces, social factors are likely.'],
      ['How did children show the target wasn’t there?', ['Said nothing', 'Pointed to a silhouette box', 'Wrote “absent”', 'Shook their head'], 1, 'A box with a silhouette meant “not there”.'],
      ['What was age in this study?', ['A DV', 'An IV using independent measures', 'A control', 'A repeated measure'], 1, 'Children vs adults – different people in each group.']
    ],
    exam: [
      { p: 1, q: 'Explain why Pozzulo et al. used cartoon characters as well as human faces. [3]', guide: ['Cartoon characters were very familiar to children – memory for them should be strong.', 'If children still made false positives with cartoons, poor memory (cognitive) can’t fully explain it.', 'So it tests whether social factors cause false positives.'] },
      { p: 1, q: 'Evaluate the study by Pozzulo et al. in terms of two strengths and two weaknesses. At least one of your evaluation points must be about the use of children in research. [10]', guide: ['Use of children: parental consent, low-risk cartoons (ethics strength).', 'Use of children: may not understand the “not there” option / want to please adults (validity weakness).', 'Controls/standardisation: same clips, instructions, matched foils.', 'Low ecological validity – short harmless clips.', 'Sample: private schools in one area of Canada.', 'Application to police line-ups.'] },
      { p: 2, q: 'Identify the three independent variables in Pozzulo et al.’s study and state which experimental design was used for each. [4]', guide: ['Age (children/adults) – independent measures.', 'Target type (cartoon/human) – repeated measures.', 'Line-up type (target-present/absent) – repeated measures.', 'Overall = a mixed design.'] }
    ] }
  ]
};

Object.assign(PSY.y12.studies, {
  andrade2010: { opt: 'cog', sub: 'ag12', name: 'Andrade (2010)', short: 'Doodling',
    ref: 'Andrade, J. (2010). What does doodling do? Applied Cognitive Psychology, 24(1), 100–6.',
    context: 'Attention has limited capacity. When people are bored their minds wander (daydreaming), which uses cognitive resources. Doodling could be a distraction from the main task, or it might keep people alert enough to stop daydreaming and so improve concentration and memory.',
    aim: 'To test whether doodling while listening to a boring message improves concentration (monitoring) and memory (recall) compared with not doodling.',
    sample: '40 participants aged 18–55 (35 women, 5 men) from the participant panel of the Medical Research Council Applied Psychology Unit, Cambridge, UK; 20 in each condition. They had just completed another, unrelated experiment. One participant in the doodling group who did not doodle was replaced.',
    method: 'Laboratory experiment; independent measures design with random allocation. IV: doodling (shading shapes) or not. DVs: monitoring score and surprise recall score (quantitative, objective).',
    procedure: ['Participants listened to a 2½-minute mock telephone message, spoken in a monotonous voice, about a party – mentioning people who were and were not coming, and various places.', 'Monitoring task: write down the names of the people coming to the party (8 target names), ignoring others.', 'The doodling group shaded printed squares and circles on their sheet while listening (told not to worry about neatness); the control group had no shapes to shade.', 'After the message, participants were given a surprise memory test: recall the 8 party-goers’ names and the 8 places mentioned.', 'They were asked if they had suspected a memory test.'],
    results: ['Monitoring: the doodling group wrote down more correct names (mean 7.8) than controls (7.1), with fewer false alarms (1 vs 5 across the group).', 'Recall: the doodling group recalled more items (mean 7.5 names and places) than the control group (5.8) – 29% more.', 'Doodlers recalled more names and more places.'],
    conclusion: 'Doodling during a boring task improves attention and memory compared with not doodling, probably because it reduces daydreaming. Doodling is not necessarily a sign of inattention.',
    ev: { plus: ['High control and standardisation (same recording and instructions) – replicable, valid cause–effect.', 'Random allocation reduced participant-variable differences between groups.', 'Surprise test prevented rehearsal; objective quantitative scores.'],
          minus: ['Artificial task – low ecological validity compared with real meetings or lessons.', 'Small sample with gender imbalance (35 women) from one panel.', 'Daydreaming was not measured, so the explanation is inferred; shading is not natural doodling.'] },
    debates: { app: 'Teachers and employers could allow doodling to help concentration during boring tasks.', indsit: 'The situation (boring task, doodling) affected performance, though people may differ in how much they daydream.' } },

  baroncohen2001: { opt: 'cog', sub: 'ag22', name: 'Baron-Cohen et al. (2001)', short: 'Revised eyes test',
    ref: 'Baron-Cohen, S., Wheelwright, S., Hill, J., Raste, Y. and Plumb, I. (2001). The ‘Reading the Mind in the Eyes’ Test revised version: a study with normal adults, and adults with Asperger syndrome or high-functioning autism. Journal of Child Psychology and Psychiatry, 42(2), 241–51.',
    context: 'Theory of mind is the ability to attribute mental states to others. Adults with Asperger syndrome or high-functioning autism may pass simple ToM tests but have difficulty with advanced ToM. The original 1997 Eyes Test had problems: only 2 answer choices, ceiling effects, only 25 items, some items solvable from basic emotions, and more female faces.',
    aim: 'To test the revised Eyes Test by investigating: (1) whether adults with AS/HFA score lower than comparison groups; (2) whether there is a negative correlation between Eyes Test and AQ scores; (3) whether women score higher than men in the general population.',
    sample: 'Group 1: 15 men with AS/HFA (recruited via adverts, e.g. National Autistic Society magazine). Group 2: 122 adults from the general population (adult education classes in Exeter, library users in Cambridge). Group 3: 103 Cambridge University students (53 men, 50 women). Group 4: 14 randomly selected adults from the general population, IQ-matched to group 1.',
    method: 'Quasi-experiment (naturally occurring IVs: group, sex) and correlational analysis; questionnaire techniques (Eyes Test, AQ) – quantitative data.',
    procedure: ['The revised test used 36 black-and-white photos of the eye region of actors’ faces, with equal numbers of male and female faces.', 'Each photo had 4 mental-state words: the target and 3 foils of the same emotional valence; participants chose the word that best described what the person was thinking or feeling.', 'A glossary of word meanings was available; items had been piloted so that at least half chose the target and no foil was chosen too often.', 'Groups 1, 3 and 4 also completed the Autism Spectrum Quotient (AQ).', 'Group 1 completed a control task: judging the gender of the person from the eyes.'],
    results: ['The AS/HFA group scored significantly lower (mean 21.9 out of 36) than the general population (26.2), students (28.0) and IQ-matched group (30.9).', 'The AS/HFA group performed normally on the gender-recognition control task.', 'There was a negative correlation between Eyes Test and AQ scores (r = −0.53).', 'Women scored slightly higher than men in the general population and student groups.'],
    conclusion: 'The revised Eyes Test is a useful, more sensitive measure of adult theory of mind: it distinguishes adults with AS/HFA from others and shows individual differences in social sensitivity across the population, linked to autistic traits.',
    ev: { plus: ['Improved validity over the original (4 choices, 36 items, balanced faces, glossary).', 'IQ-matched group and gender task act as controls.', 'Large comparison groups; standardised, objective scoring.'],
          minus: ['Static photos of eyes – low ecological validity.', 'Small, all-male AS/HFA volunteer sample; students are not typical.', 'Correlational element cannot show causation; vocabulary/culture may affect scores.'] },
    debates: { app: 'A quick test for subtle social-cognitive difficulties, useful in research and assessment.', nn: 'Autism has a strong biological component; sex differences could reflect biology or socialisation.', indsit: 'Shows individual differences in social sensitivity across the whole population (a continuum).' } },

  pozzulo2011: { opt: 'cog', sub: 'ag32', name: 'Pozzulo et al. (2011)', short: 'Line-ups',
    ref: 'Pozzulo, J. D., Dempsey, J., Bruer, K. and Sheahan, C. (2011). The culprit in target-absent lineups: Understanding young children’s false positive responding. Journal of Police and Criminal Psychology, 27(1), 55–62.',
    context: 'Children are less accurate than adults at rejecting target-absent line-ups – they make more false positive identifications. This could be cognitive (poor memory for faces) or social (feeling pressure to choose someone). Using highly familiar cartoon faces allows the two explanations to be separated.',
    aim: 'To investigate whether young children’s false positive responses in target-absent line-ups are due to cognitive factors (poor memory) or social factors, by comparing familiar cartoon targets with unfamiliar human targets in children and adults.',
    sample: '59 children aged 4–7 (mean age about 5; 21 girls, 38 boys) from three private schools in Eastern Ontario, Canada; 53 adults aged 17–30 (36 women, 17 men) from a university introductory psychology participant pool.',
    method: 'Laboratory experiment with a mixed design: age group (independent measures); target type (cartoon/human) and line-up type (target-present/absent) (repeated measures). Verbal/written questions as a filler; quantitative accuracy data.',
    procedure: ['Participants watched four short (about 6-second) video clips: two cartoon characters (Dora the Explorer and Go Diego Go) and two unfamiliar university students doing everyday activities, each including a close-up of the face.', 'After each clip, a filler task: participants described what the character looked like and were prompted for anything else they remembered (children verbally, adults in writing).', 'They then viewed a simultaneous line-up of four black-and-white photos on a laptop and were told the target may or may not be present.', 'Target-present line-ups included the target and three foils; target-absent line-ups contained four foils matched to the target’s appearance.', 'Children pointed to a photo or to a box with a silhouette (meaning “not there”); adults marked their choice on a sheet.'],
    results: ['Children identified cartoon targets in target-present line-ups almost perfectly.', 'Correct rejection rates (target-absent): children 0.74 for cartoons and 0.45 for human faces; adults 0.94 and 0.70.', 'Children made significantly more false positives than adults for both cartoon and human targets; both age groups were more accurate with cartoons than human faces.'],
    conclusion: 'Children’s false positive responding cannot be explained by poor memory alone – they recognised the cartoons well but still chose someone when the cartoon was absent – so social factors (such as feeling they should choose) contribute.',
    ev: { plus: ['Well-controlled, standardised procedure; matched foils – replicable.', 'Cartoon vs human design separates cognitive and social explanations.', 'Clear application to police procedures with child witnesses.'],
          minus: ['Low ecological validity – brief, harmless clips with no real consequences.', 'Young children may not have understood the silhouette/“not there” option.', 'Sample from private schools in one region; social pressure inferred rather than measured.'] },
    debates: { children: 'Ethical with parental consent and harmless stimuli; shows children’s identifications need special procedures.', app: 'Police could adapt line-ups for children (e.g. emphasise that “not there” is an acceptable answer).', indsit: 'False positives relate both to age (individual) and to social pressure in the setting (situational).' } }
});

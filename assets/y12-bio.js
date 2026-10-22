/* Year 12 – Biological approach: Dement and Kleitman, Hassett et al., Hölzel et al. (9990 syllabus for 2027) */
window.PSY = window.PSY || { options: {}, studies: {} };
PSY.y12 = PSY.y12 || { options: {}, studies: {} };

PSY.y12.options.bio = {
  id: 'bio', name: 'Biological approach', short: 'Biological', emoji: '🧬', color: '#ec4899',
  blurb: 'Brains, hormones, genes & evolution: sleep, toy choices and mindfulness.',
  intro: `<b>Main assumptions</b> (learn these word-for-word for Paper 1):<ul style="margin:8px 0 6px"><li>Behaviour, cognitions and emotions can be explained by the working of the <b>brain</b> and the effect of <b>hormones, genetics and evolution</b>.</li><li>Similarities and differences between people can be understood in terms of <b>biological factors</b> and their interaction with other factors.</li></ul>Your three core studies: <b>Dement and Kleitman</b> (sleep and dreams), <b>Hassett et al.</b> (monkey toy preferences) and <b>Hölzel et al.</b> (mindfulness and brain scans).`,
  topics: [
  /* ───────────── 1.1 DEMENT AND KLEITMAN ───────────── */
  { id: 'ab1', code: '1.1', title: 'Dement and Kleitman (sleep & dreams)', emoji: '😴',
    subs: [
    { id: 'ab11', code: '1.1.1', title: 'Sleep, REM and dreaming',
      inShort: 'Sleep comes in cycles of about 90 minutes (an ultradian rhythm). Each cycle has NREM stages and a REM stage, where the eyes dart about and the brain is very active. Brain activity is measured with an EEG.',
      notes: `
<h4>The psychology being investigated</h4>
<p>The syllabus lists three ideas: <b>sleep</b>, <b>dreaming</b> and <b>ultradian rhythms</b>.</p>
<h4>Measuring sleep</h4>
<ul><li>An <b>EEG</b> (electroencephalograph) uses electrodes on the scalp to record the brain’s <b>electrical activity</b> as “brain waves”.</li><li>Electrodes placed next to the eyes record <b>eye movements</b> (an electro-oculogram, EOG).</li><li>These are <b>objective</b> measures – a machine records them, not a person’s opinion.</li></ul>
<h4>The stages of sleep</h4>
<table class="mini"><tr><th>Stage</th><th>What happens</th></tr>
<tr><td><b>NREM stage 1</b></td><td>Light sleep, drifting off; EEG waves slow down.</td></tr>
<tr><td><b>NREM stage 2</b></td><td>Slower waves with sudden bursts (“sleep spindles”).</td></tr>
<tr><td><b>NREM stages 3–4</b></td><td>Deep, slow-wave sleep – hardest to wake from.</td></tr>
<tr><td><b>REM</b> (rapid eye movement)</td><td>Eyes dart about under the lids; EEG looks like being <i>awake</i> (fast, low-voltage waves); body muscles are relaxed (almost paralysed). Most vivid dreams happen here.</td></tr></table>
<h4>Ultradian rhythms</h4>
<p>A <b>biological rhythm</b> is a cycle in the body that repeats. An <b>ultradian rhythm</b> repeats <b>more than once a day</b>. The sleep cycle (NREM ➜ REM) is ultradian: it repeats about every <b>90 minutes</b>, 4–5 times a night, and REM periods get <b>longer</b> towards morning.</p>
<p class="mem">🧠 Memory trick: <b>Ultra</b> = more than once a day (short cycles). <b>Circadian</b> = about once a day (24 h, like the sleep–wake cycle).</p>
<h4>Why study dreams this way?</h4>
<p>Before 1957, dreams could only be studied by asking people what they remembered in the morning – a <b>subjective</b> self-report, easily forgotten or made up. Dement and Kleitman wanted an <b>objective</b> sign of dreaming: if REM sleep = dreaming, scientists could tell when someone was dreaming just by watching the EEG and eye movements.</p>
<p class="tip">💡 Link it to the <b>biological approach</b>: dreaming is explained by the activity of the brain (a physiological state, REM), not by unconscious wishes or thoughts.</p>`,
      debates: ['nn', 'app', 'quantqual'],
      vids: [['iWo90uxkNM0', '2-Minute Neuroscience: Stages of Sleep', 'Neuroscientifically Challenged', '1:59'], ['eM2VWspRpfk', 'A walk through the stages of sleep', 'TED', '4:48'], ['hBf2ZQAGLbo', 'Circadian vs ultradian rhythms', 'Psychology Exposed', '2:05'], ['URaRALBf758', 'Introduction to the biological approach', 'Mr. Luis', '4:32']],
      terms: [['EEG', 'Electroencephalograph: electrodes on the scalp record the brain’s electrical activity (brain waves).'], ['REM sleep', 'Rapid eye movement sleep: eyes dart about, brain is active like when awake, body is relaxed; linked to dreaming.'], ['NREM sleep', 'Non-rapid eye movement sleep: stages 1–4, from light to deep sleep.'], ['Ultradian rhythm', 'A biological rhythm that repeats more than once in 24 hours, e.g. the ~90-minute sleep cycle.'], ['Objective measure', 'A measure not affected by anyone’s opinion, e.g. an EEG recording.']] },

    { id: 'ab12', code: '1.1.2', title: 'The study: REM and dreams', ks: 'dement1957',
      inShort: '9 adults slept in a lab wired to an EEG. When woken from REM they usually reported a dream (152 of 191 times); from NREM they rarely did (11 of 160). They could also judge dream length, and eye movements matched what they were dreaming about.',
      notes: `
<h4>Study at a glance</h4>
<table class="mini"><tr><th>Feature</th><th>Details</th></tr>
<tr><td>Aim</td><td>To find an objective way to study dreaming by testing whether dreaming happens in REM sleep.</td></tr>
<tr><td>Method</td><td><b>Laboratory experiment</b> (sleep lab) with <b>correlational</b> parts; dream reports were a <b>self-report</b> (spoken into a recorder, plus questions from the experimenter).</td></tr>
<tr><td>Sample</td><td><b>9 adults</b> (7 men, 2 women); <b>5</b> studied in detail, the other 4 used to confirm the results.</td></tr>
<tr><td>Measures</td><td>EEG (brain waves) + electrodes beside the eyes (eye movements) – objective; dream reports – subjective.</td></tr></table>
<h4>Procedure in steps</h4>
<ol><li>Participants came to the lab near their usual bedtime, having avoided <b>alcohol and caffeine</b> that day (a control).</li><li>Electrodes were attached; wires ran to the EEG machine in the next room so they could sleep in a quiet, dark room.</li><li>At various times they were woken by a <b>doorbell</b> and spoke into a recorder: <i>were you dreaming, and what about?</i> The experimenter sometimes came in afterwards to ask more questions.</li><li>They were <b>never told</b> whether they had been in REM or NREM when woken, and the waking pattern was varied (e.g. random) so they couldn’t guess.</li></ol>
<h4>The three tests (each had its own question)</h4>
<div class="three"><div class="box"><b>① REM vs NREM</b><br>Do people report dreams more after REM than NREM? <i>IV</i>: woken in REM or NREM. <i>DV</i>: dream reported or not.</div>
<div class="box"><b>② Dream length</b><br>Woken 5 or 15 minutes into REM – could they say which? Also: did longer REM = more words in the dream report?</div>
<div class="box"><b>③ Eye movements</b><br>Did the <i>direction</i> of eye movements (up–down, side to side) match what was happening in the dream?</div></div>
<h4>Key results</h4>
<ul><li>Dreams were reported in <b>152 of 191</b> REM awakenings (about 80%) but only <b>11 of 160</b> NREM awakenings (about 7%).</li><li>Dream length was judged correctly <b>88%</b> of the time after 5 minutes and <b>78%</b> after 15 minutes; longer REM periods gave longer dream reports (a <b>positive correlation</b>).</li><li>Eye movements matched dream content: mostly <b>vertical</b> movements – e.g. a dream of looking up and down at climbers on a cliff; mostly <b>horizontal</b> – watching two people throw tomatoes at each other; <b>little movement</b> – watching something far away.</li><li>REM periods came at regular intervals – roughly <b>every 90 minutes</b>.</li></ul>
<p class="tip">💡 <b>Conclusion:</b> dreaming happens in REM sleep, so REM can be used as an <b>objective</b> sign of dreaming. Dreams seem to happen in “real time”, and the eyes may be “looking at” the dream.</p>`,
      debates: ['experiments', 'lab', 'correlations', 'quantqual', 'sampling'],
      vids: [['0lp1i2QpP-A', 'Dement and Kleitman (1957) – Sleep and Dreams', 'Mr. Luis', '7:41'], ['qhBi2ExRGuI', 'Dement and Kleitman study summary', 'EY', '8:31'], ['HJZc1aFGNoQ', 'Dement & Kleitman – the biological approach', 'Alt Academy', '10:21']],
      terms: [['Dream recall', 'Being able to describe a dream when woken – the main DV in test ①.'], ['Self-report', 'Data from what participants say about themselves – here, their dream descriptions.'], ['Positive correlation', 'As one variable increases, so does the other – longer REM, more words in the dream report.'], ['Control (sleep study)', 'Avoiding alcohol and caffeine so they couldn’t change participants’ sleep.']] },

    { id: 'ab13', code: '1.1.3', title: 'Evaluating Dement and Kleitman',
      inShort: 'Strong because EEG measures are objective and the lab gave lots of control. Weak because the sample was tiny (9 people), sleeping wired up in a lab is unnatural, and dream reports rely on memory and honesty.',
      notes: `
<h4>Methodology</h4>
<ul><li><b>Validity – objective measures:</b> the EEG and eye electrodes recorded REM without any human judgement, so the IV (REM/NREM) was measured accurately.</li><li><b>Validity – subjective data:</b> dream reports could be inaccurate – people might forget, make things up, or say what they think the experimenter wants (<b>demand characteristics</b>).</li><li><b>Ecological validity:</b> sleeping in a lab with wires on your head, being woken by a doorbell, isn’t normal sleep – people might sleep and dream differently at home.</li><li><b>Reliability:</b> standardised procedure (same lab, doorbell, recording) and many awakenings per person ➜ replicable; findings have been repeated many times.</li><li><b>Controls:</b> no alcohol/caffeine; participants weren’t told which stage they were woken from; experimenter didn’t talk to them before they recorded their dream.</li></ul>
<h4>Sample & generalisation</h4>
<p>Only <b>9 adults</b> (mostly men), so it’s hard to generalise. However, sleep is a <b>biological</b> process that should be similar in all humans, which makes generalising more reasonable.</p>
<h4>Ethics</h4>
<p>Few ethical problems: participants <b>consented</b> and knew they would be woken, though repeated waking is tiring and dreams are <b>private</b> – reports should be kept <b>confidential</b>.</p>
<h4>Type of data</h4>
<p>Both <b>quantitative</b> (numbers of awakenings with dreams, % correct estimates) and <b>qualitative</b> (descriptions of dreams). Quantitative = easy to compare; qualitative = showed the link between eye movements and dream content.</p>
<h4>Issues & debates</h4>
<ul><li><b>Nature vs nurture:</b> REM cycles are a natural, biological rhythm – nature.</li><li><b>Application:</b> sleep labs can measure dreaming objectively; helps understanding of sleep disorders.</li></ul>`,
      ev: { plus: ['Objective, physiological measures (EEG) – not affected by bias.', 'Highly controlled lab procedure – replicable and reliable.', 'Many awakenings per person gave lots of data.', 'Both quantitative and qualitative data.'],
            minus: ['Very small sample of 9 – mostly male.', 'Low ecological validity: wired up in a lab, woken by a doorbell.', 'Dream reports are subjective – could be forgotten or distorted.', 'Few examples for the eye-movement test (e.g. only 1 mainly horizontal pattern).'] },
      debates: ['validity', 'reliability', 'ethics', 'nn', 'app'],
      vids: [['TYriUbXgQkE', 'Sleep and dreams: Dement and Kleitman', 'David Meaker', '16:58'], ['RnjLv-ImYtY', 'Dement & Kleitman REM & dreams (full study & evaluation)', 'AICE Psychology', '25:12']],
      terms: [['Ecological validity', 'How well results apply to real-life settings – low when sleeping wired up in a lab.'], ['Demand characteristics', 'Clues that lead participants to guess the aim and change their behaviour.'], ['Replicability', 'Whether a study can be repeated in exactly the same way.'], ['Generalisability', 'How far results can be applied to other people.']] }
    ],
    quiz: [
      ['What does an EEG record?', ['Heart rate', 'Electrical activity of the brain', 'Eye colour', 'Hormone levels'], 1, 'Electroencephalograph = electrical activity (brain waves) via scalp electrodes.'],
      ['How often were dreams reported after REM awakenings?', ['11 of 160', '152 of 191', '45 of 51', '26 of 40'], 1, '152 of 191 REM awakenings (about 80%) produced a dream report; NREM was 11 of 160.'],
      ['The sleep cycle is an example of which kind of rhythm?', ['Circadian', 'Infradian', 'Ultradian', 'Annual'], 2, 'It repeats about every 90 minutes – more than once a day, so ultradian.'],
      ['Why weren’t participants told whether they had been woken from REM or NREM?', ['To save time', 'To avoid demand characteristics / expectation affecting reports', 'It was unethical to tell them', 'They were asleep'], 1, 'If they knew, they might report dreams because they expected to.'],
      ['Which dream matched mainly VERTICAL eye movements?', ['Two people throwing tomatoes', 'Looking up and down at climbers on a cliff', 'Driving on a straight road', 'Reading a book'], 1, 'Up–down movements matched looking up at climbers and down at the hoist.'],
      ['What did participants avoid on the day of the study?', ['Exercise', 'Alcohol and caffeine', 'Sleeping in the day', 'Eating'], 1, 'Alcohol and caffeine affect sleep – avoiding them was a control.'],
      ['Which is the biggest weakness of the sample?', ['Too many children', 'Only 9 adults, mostly men', 'All had sleep disorders', 'They were all animals'], 1, 'A sample of 9 is too small to generalise confidently.']
    ],
    exam: [
      { p: 1, q: 'Describe the procedure used in the study by Dement and Kleitman to test whether people could estimate how long they had been dreaming. [4]', guide: ['Participants were woken either 5 or 15 minutes after REM began.', 'They had to say whether they had been dreaming for 5 or 15 minutes.', 'Woken by a doorbell; spoke into a recorder by the bed.', 'The number of words in the dream report was also compared with the length of the REM period.'] },
      { p: 1, q: 'Evaluate the study by Dement and Kleitman in terms of two strengths and two weaknesses. At least one of your evaluation points must be about validity. [10]', guide: ['Strength: objective EEG/eye-movement measures – no bias in deciding REM/NREM (validity).', 'Strength: standardised, controlled lab procedure – replicable/reliable.', 'Weakness: dream reports are subjective – memory errors, demand characteristics (validity).', 'Weakness: low ecological validity – sleeping wired up in a lab, woken by a bell.', 'Weakness/strength: small sample of 9 – but biological processes may be universal.', 'Each point uses evidence from the study and explains why it matters.'] },
      { p: 2, q: 'Dement and Kleitman collected both quantitative and qualitative data. Give one example of each from the study and suggest one advantage of each. [4]', guide: ['Quantitative: number of REM/NREM awakenings with a dream recalled (152/191 vs 11/160) or % correct duration estimates.', 'Advantage: easy to compare conditions / objective / can be shown on a graph.', 'Qualitative: the descriptions of dream content (e.g. throwing tomatoes).', 'Advantage: detail – showed eye movements matched what the dreamer was looking at.'] }
    ] },

  /* ───────────── 1.2 HASSETT ET AL. ───────────── */
  { id: 'ab2', code: '1.2', title: 'Hassett et al. (monkey toy preferences)', emoji: '🐒',
    subs: [
    { id: 'ab21', code: '1.2.1', title: 'Sex differences, socialisation & hormones',
      inShort: 'Boys usually prefer “boys’ toys” strongly, while girls are more flexible. Is this taught (socialisation) or biological (hormones before birth)? Monkeys aren’t taught human gender roles, so studying them helps separate the two.',
      notes: `
<h4>The psychology being investigated</h4>
<p>The syllabus lists: <b>sex differences</b>, <b>socialisation</b>, <b>play</b> and <b>the role of hormones</b>.</p>
<h4>Sex differences in children’s toy choices</h4>
<ul><li>Boys tend to have <b>strong</b> preferences for “masculine” toys such as cars and trucks.</li><li>Girls are more <b>flexible</b> – they often play with both kinds of toy.</li></ul>
<h4>Explanation 1 – socialisation (nurture)</h4>
<p>Children <b>learn</b> what is “right” for their gender from parents, peers, the media and advertising – e.g. parents buy trucks for sons and dolls for daughters, or praise “gender-appropriate” play.</p>
<h4>Explanation 2 – hormones (nature)</h4>
<ul><li><b>Androgens</b> (male sex hormones such as testosterone) released <b>before birth</b> affect how the brain develops.</li><li>Girls with <b>congenital adrenal hyperplasia (CAH)</b> are exposed to unusually high androgens in the womb – they tend to play more with “boys’ toys” than their sisters (Berenbaum and Hines, 1992).</li><li>Toys may appeal because of the <b>type of play</b> they allow: wheeled toys = movement and action; plush toys = holding and caring.</li></ul>
<h4>Why monkeys?</h4>
<p>It is impossible to raise children without socialisation, but <b>rhesus monkeys</b> are not taught human gender roles or shown toy adverts. If male monkeys still prefer wheeled toys, that points to a <b>biological</b> cause. An earlier study had found a similar pattern in vervet monkeys (Alexander and Hines, 2002).</p>
<p class="tip">💡 The authors’ view is <b>interactionist</b>: hormones may give a <b>bias</b> towards some kinds of play, which social experience then shapes and strengthens.</p>`,
      debates: ['nn', 'animals', 'children'],
      vids: [['tbSgU41FIac', 'Nature vs nurture: behaviourism or genetics?', 'Sprouts', '8:10'], ['ho67ijRm4Xo', 'Effects of prenatal hormones', 'Jill Seiver', '9:26'], ['EmctxRcmloc', 'Nature vs nurture', 'FuseSchool', '3:48']],
      terms: [['Sex differences', 'Differences in behaviour between males and females.'], ['Socialisation', 'Learning the norms and expected behaviour of your society, e.g. gender roles, from parents, peers and media.'], ['Androgens', 'Male sex hormones such as testosterone.'], ['CAH', 'Congenital adrenal hyperplasia: high androgen exposure before birth; affected girls often prefer “boys’ toys”.'], ['Interactionist view', 'Behaviour comes from biology and environment working together.']] },

    { id: 'ab22', code: '1.2.2', title: 'The study: monkey toy preferences', ks: 'hassett2008',
      inShort: 'Rhesus monkeys in a 135-strong troop were given a wheeled toy and a plush toy, 10 m apart, in seven 25-minute trials. Male monkeys strongly preferred the wheeled toys; females played with both – the same pattern as children.',
      notes: `
<h4>Study at a glance</h4>
<table class="mini"><tr><th>Feature</th><th>Details</th></tr>
<tr><td>Aim</td><td>To see whether rhesus monkeys show the same sex differences in toy preference as children – suggesting a biological (hormonal) cause rather than socialisation.</td></tr>
<tr><td>Method</td><td><b>Experiment</b> with a <b>naturally occurring IV</b> (sex of monkey) using <b>observation</b> with a <b>behavioural checklist</b>; also correlations (rank, age).</td></tr>
<tr><td>Sample</td><td>A troop of <b>135</b> rhesus monkeys at the Yerkes National Primate Research Center Field Station (USA). Monkeys given hormone treatments (14) and newborn infants (39) weren’t included; monkeys with fewer than 5 toy interactions were left out ➜ final data from <b>34 monkeys: 23 females, 11 males</b>.</td></tr>
<tr><td>IV / DV</td><td><b>IV</b>: sex of monkey (male/female). <b>DV</b>: frequency and duration of interaction with wheeled vs plush toys.</td></tr></table>
<h4>Procedure in steps</h4>
<ol><li>Toys: <b>6 wheeled</b> (e.g. wagon, truck, car, shopping cart, dump truck) and <b>7 plush</b> (e.g. Winnie-the-Pooh, teddy bear, Scooby-Doo, a turtle).</li><li>Before each trial the monkeys were kept indoors while <b>one wheeled and one plush toy</b> were placed <b>10 m apart</b> in their outdoor enclosure; left/right positions were <b>counterbalanced</b>.</li><li>The monkeys were let out and filmed – one camera per toy. <b>Seven trials of 25 minutes</b> each.</li><li>Two observers coded the videos <b>together</b>, agreeing on each monkey’s identity and behaviour, using a <b>behavioural checklist</b> – e.g. touch, sniff, hold, carry, drag, sit on, manipulate part, destroy.</li><li>The monkeys’ data were compared with data on children’s toy play from an earlier study (Berenbaum and Hines, 1992) – no human participants were tested.</li></ol>
<h4>Key results</h4>
<ul><li><b>Males</b> interacted much more with <b>wheeled</b> toys (average 9.77 interactions vs 2.06 with plush; 4.76 min vs 0.53 min).</li><li><b>Females</b> showed <b>no significant preference</b> (plush 7.97 vs wheeled 6.96 interactions).</li><li>73% of males individually preferred wheeled toys; females were split (30% plush, 39% wheeled, 30% no preference).</li><li>Higher-ranking <b>females</b> interacted with toys more – but rank didn’t explain the sex difference. Age made no difference.</li></ul>
<p class="tip">💡 <b>Conclusion:</b> monkey sex differences <b>parallel</b> those of children – males show a strong preference for “masculine” toys, females are more flexible – suggesting biological (hormonal) factors play a part, which socialisation may then strengthen.</p>`,
      debates: ['observations', 'experiments', 'animalethics', 'reliability', 'graphs'],
      vids: [['9O2mQjdg_80', 'Hassett et al. (2008) – Do monkeys prefer boy or girl toys?', 'Mr. Luis', '6:19'], ['ykYUGv9t5js', 'Hassett: monkey toy preference – full study explained', 'AICE Psychology', '9:36'], ['zPLPg09a8cE', 'Hassett et al. (2008) monkey toy preferences', 'TheTeacherKind', '8:09']],
      terms: [['Behavioural checklist', 'A list of operationalised behaviours (e.g. “drag”, “carry”) that observers tally.'], ['Naturally occurring IV', 'An IV the researcher can’t change, e.g. the sex of the monkey.'], ['Frequency vs duration', 'How many times a behaviour happened vs how long it lasted.'], ['Counterbalancing (here)', 'Swapping which side each toy was placed on across trials to stop location affecting choice.']] },

    { id: 'ab23', code: '1.2.3', title: 'Evaluating Hassett et al.',
      inShort: 'A natural setting, a detailed behavioural checklist and video recording make it a strong study. But only 34 monkeys gave data, no hormones were measured, and monkeys may not tell us much about children.',
      notes: `
<h4>Methodology</h4>
<ul><li><b>Ecological validity:</b> monkeys were observed in their <b>own social group and enclosure</b> – natural behaviour, high ecological validity.</li><li><b>Controls:</b> the same pair-up of one wheeled + one plush toy, the same 10 m distance and trial length, and counterbalanced positions.</li><li><b>Reliability:</b> the behavioural checklist was <b>operationalised</b> (clear definitions); video meant behaviour could be checked again; two observers agreed on every coding.</li><li><b>Validity problem:</b> the study <b>didn’t measure hormones</b> – the hormonal explanation is inferred, not shown. Toys were not identical in size, colour or shape.</li></ul>
<h4>Sample & generalisation</h4>
<p>One troop at one centre, and only <b>34</b> monkeys gave usable data (only <b>11 males</b>). Rhesus monkeys aren’t humans – so we must be careful generalising to children.</p>
<h4>Ethics (animals)</h4>
<p>Very few problems: the monkeys stayed in their <b>normal housing</b>, were free to play or ignore the toys (no deprivation or pain), and toys add enrichment. Monkeys were only briefly kept indoors before each trial.</p>
<h4>Issues & debates</h4>
<ul><li><b>Nature vs nurture:</b> supports <b>nature</b> (no human socialisation) – but rank affected females, so the social environment matters too ➜ interaction.</li><li><b>Use of animals:</b> useful because monkeys aren’t socialised into human gender roles – but can findings be applied to people?</li><li><b>Use of children:</b> data on children came from an earlier study – no new children were tested.</li><li><b>Application:</b> parents and teachers needn’t worry if a boy strongly prefers trucks – it may be partly biological; toy companies could also use it.</li></ul>`,
      ev: { plus: ['High ecological validity – natural social group and home enclosure.', 'Operationalised behavioural checklist + video = reliable, detailed data.', 'Counterbalanced toy positions controlled for location bias.', 'Ethical – no harm, the monkeys could ignore the toys.'],
            minus: ['Only 34 monkeys gave data (11 males) from one troop – limited generalisability.', 'Hormones were not measured, so the biological cause is inferred.', 'Monkeys are not children – cultural and cognitive differences.', 'Toys varied in size, shape and colour – possible confounds.'] },
      debates: ['nn', 'animals', 'validity', 'sampling', 'app'],
      vids: [['dfoJE2jbrdo', 'Monkey toy preferences (evaluation)', 'David Meaker', '14:00'], ['2cpDws37Z-o', 'Hassett et al. (2008) – biological approach', 'Cambridge Study Materials', '20:40']],
      terms: [['Inferred', 'Concluded from evidence rather than measured directly.'], ['Confounding variable', 'An uncontrolled variable that changes with the IV and could explain the results.'], ['Enrichment', 'Objects or activities that make an animal’s environment more stimulating.']] }
    ],
    quiz: [
      ['How many monkeys were in the troop at the start?', ['34', '82', '135', '11'], 2, 'The social group had 135 monkeys; data were analysed for 34 (23 female, 11 male).'],
      ['What was the IV in Hassett et al.?', ['Type of toy', 'Sex of the monkey', 'Social rank', 'Trial length'], 1, 'Sex (male/female) is a naturally occurring IV; toy interaction was the DV.'],
      ['Which toys did male monkeys prefer?', ['Plush toys', 'Wheeled toys', 'No preference', 'Balls'], 1, 'Males interacted far more with wheeled toys (9.77 vs 2.06 interactions).'],
      ['How far apart were the two toys placed?', ['1 m', '5 m', '10 m', '25 m'], 2, 'One wheeled and one plush toy were placed 10 m apart.'],
      ['Why were monkeys used instead of children?', ['Monkeys are cheaper', 'Monkeys aren’t socialised into human gender roles', 'Children can’t play', 'It is required by law'], 1, 'Without human socialisation, a preference suggests a biological cause.'],
      ['What did social rank affect?', ['Male preferences only', 'How much females interacted with toys', 'Nothing', 'Which toy was destroyed'], 1, 'Higher-ranking females interacted with the toys more; it didn’t explain the sex difference.'],
      ['Which is a strength of the behavioural checklist?', ['It measured hormones', 'Behaviours were clearly operationalised, improving reliability', 'It used open questions', 'It was secret'], 1, 'Clear definitions (drag, carry, hold) mean observers code behaviour consistently.']
    ],
    exam: [
      { p: 1, q: 'Explain why Hassett et al. used monkeys to investigate sex differences in toy preferences. [2]', guide: ['Monkeys are not exposed to human gender socialisation (parents, media, adverts).', 'So any sex difference is more likely biological/hormonal (nature).'] },
      { p: 1, q: 'Evaluate the study by Hassett et al. in terms of two strengths and two weaknesses. At least one of your evaluation points must be about the use of animals in research. [10]', guide: ['Use of animals: no human gender socialisation = cleaner test of biology (strength).', 'Use of animals: can monkeys be generalised to children? (weakness).', 'Ecological validity: natural troop & enclosure.', 'Reliability: operationalised checklist, video, two observers.', 'Weakness: only 34 monkeys (11 males); hormones not measured.', 'Ethics: no harm, normal housing.'] },
      { p: 2, q: 'Hassett et al. used a behavioural checklist. Outline what is meant by a behavioural checklist, using two examples from this study, and give one advantage of using it. [4]', guide: ['A list of operationally defined behaviours that observers record (tally) when they see them.', 'Examples: touch, sniff, carry, drag, sit on, destroy.', 'Advantage: makes data quantitative/objective.', 'Advantage: improves inter-observer reliability – observers record the same behaviours the same way.'] }
    ] },

  /* ───────────── 1.3 HÖLZEL ET AL. ───────────── */
  { id: 'ab3', code: '1.3', title: 'Hölzel et al. (mindfulness & brain scans)', emoji: '🧘',
    subs: [
    { id: 'ab31', code: '1.3.1', title: 'Mindfulness & localisation of function',
      inShort: 'Mindfulness = paying attention to the present moment, kindly and without judging. Different brain areas do different jobs (localisation of function) – and the brain can physically change with experience.',
      notes: `
<h4>The psychology being investigated</h4>
<p>The syllabus lists: <b>mindfulness</b> and <b>localisation of function</b>.</p>
<h4>Mindfulness</h4>
<ul><li><b>Mindfulness</b> = paying attention to what is happening <b>right now</b> – your breathing, body sensations, thoughts and feelings – with a <b>non-judging</b>, kind attitude.</li><li><b>MBSR</b> (Mindfulness-Based Stress Reduction) is an 8-week course created by Jon Kabat-Zinn using a <b>body scan</b>, <b>mindful yoga</b> and <b>sitting meditation</b>.</li><li>MBSR is known to reduce stress and improve well-being – but does it change the brain itself?</li></ul>
<h4>Localisation of function</h4>
<p>The idea that particular <b>areas of the brain</b> have particular <b>jobs</b>. The areas in this study:</p>
<table class="mini"><tr><th>Brain area</th><th>Thought to be involved in…</th></tr>
<tr><td><b>Hippocampus</b></td><td>Learning and memory; controlling emotions (emotion regulation).</td></tr>
<tr><td><b>Posterior cingulate cortex</b> (PCC)</td><td>Thinking about yourself; mind-wandering.</td></tr>
<tr><td><b>Temporo-parietal junction</b> (TPJ)</td><td>Taking other people’s perspective; empathy; sense of self.</td></tr>
<tr><td><b>Cerebellum</b></td><td>Coordinating movement – also helps regulate emotions and thinking.</td></tr></table>
<h4>Grey matter & neuroplasticity</h4>
<ul><li><b>Grey matter</b> = brain tissue made mostly of nerve cell bodies (where processing happens).</li><li><b>Neuroplasticity</b> = the brain can change its structure with experience and practice (e.g. taxi drivers’ larger hippocampi in other research).</li><li><b>MRI</b> scans use magnetic fields to make detailed images of brain <b>structure</b> – they can show grey matter density.</li></ul>
<p class="tip">💡 Link to the biological approach: behaviour and emotions are explained by the working of the brain – and here a <b>behaviour</b> (practising mindfulness) changes the <b>brain</b>.</p>`,
      debates: ['nn', 'app'],
      vids: [['q0DMYs4b2Yw', 'How does meditation change the brain?', 'Scientific American', '2:24'], ['5EyaGR8GGhs', '2-Minute Neuroscience: The hippocampus', 'Neuroscientifically Challenged', '2:00'], ['GszmHs8qPFE', 'The neuroscience of mindfulness', 'Beautiful Science', '9:06']],
      terms: [['Mindfulness', 'Paying attention to present-moment experience with a non-judging attitude.'], ['MBSR', 'Mindfulness-Based Stress Reduction: an 8-week mindfulness course.'], ['Localisation of function', 'The idea that specific brain areas carry out specific functions.'], ['Grey matter', 'Brain tissue made mainly of nerve cell bodies.'], ['Neuroplasticity', 'The brain’s ability to change its structure with experience.'], ['MRI', 'Magnetic resonance imaging: a scan showing detailed brain structure.']] },

    { id: 'ab32', code: '1.3.2', title: 'The study: mindfulness & brain scans', ks: 'holzel2011',
      inShort: '16 people did an 8-week mindfulness course and had MRI scans before and after; 17 people on a waiting list were scanned too. Only the mindfulness group showed more grey matter in the left hippocampus and other areas.',
      notes: `
<h4>Study at a glance</h4>
<table class="mini"><tr><th>Feature</th><th>Details</th></tr>
<tr><td>Aim</td><td>To find out whether taking part in an 8-week MBSR course changes grey matter concentration in brain areas linked to learning, memory, emotion regulation and self-awareness.</td></tr>
<tr><td>Method</td><td><b>Experiment with a longitudinal design</b> (scans before and after); <b>MRI scans</b> + <b>self-report questionnaire</b>; also <b>correlations</b>.</td></tr>
<tr><td>Sample</td><td><b>MBSR group: 16</b> healthy adults (6 men, 10 women, mean age 38) from MBSR courses in Massachusetts, USA, who had very little meditation experience. <b>Control: 17</b> people on a <b>waiting list</b> (11 men, 6 women, mean age 39).</td></tr>
<tr><td>IV / DV</td><td><b>IV</b>: MBSR group or control group. <b>DVs</b>: grey matter concentration (MRI) and mindfulness scores (questionnaire).</td></tr></table>
<h4>Procedure in steps</h4>
<ol><li>18 people joined the MBSR group; 2 dropped out because the first scan was uncomfortable ➜ <b>16</b>.</li><li><b>MRI scans</b> about 2 weeks <b>before</b> and <b>after</b> the course (controls also scanned twice, about 2 months apart).</li><li>The course: <b>8 weekly 2½-hour</b> group sessions + one <b>full day</b> (6.5 h) in week 6 – body scan, mindful yoga, sitting meditation.</li><li>Homework: <b>45-minute audio</b> recordings to practise daily; participants <b>recorded</b> how long they practised.</li><li>Both groups completed the <b>Five Facet Mindfulness Questionnaire (FFMQ)</b> – 39 items rated 1–5 on observing, describing, acting with awareness, non-judging and non-reactivity.</li></ol>
<h4>Key results</h4>
<ul><li>Average home practice: <b>22.6 hours</b> over 8 weeks (about <b>27 minutes a day</b>).</li><li>The MBSR group’s mindfulness scores rose on <b>3 of 5</b> facets: acting with awareness, observing and non-judging.</li><li>MBSR group: increased grey matter in the <b>left hippocampus</b> ✔, and also the <b>posterior cingulate cortex</b>, <b>temporo-parietal junction</b> and <b>cerebellum</b>.</li><li>The <b>control group showed no changes</b>.</li><li>The brain changes did <b>not</b> correlate with the amount of practice or with changes in mindfulness scores.</li></ul>
<p class="tip">💡 <b>Conclusion:</b> taking part in MBSR is associated with grey matter increases in brain areas involved in learning and memory, emotion regulation, self-referential processing and perspective taking – the brain changes in just 8 weeks.</p>`,
      debates: ['experiments', 'longitudinal', 'questionnaires', 'correlations', 'quantqual'],
      vids: [['DmZCHB7aYyk', 'Hölzel et al. (2011) – Mindfulness and brain structure', 'Mr. Luis', '4:29'], ['3q6cpbLtCV0', 'Hölzel et al. (mindfulness and brain scans) study', 'Studywithmary', '25:58'], ['EfWvrb7kipo', 'Hölzel et al.: mindfulness and brain structure (part 1)', 'WIARA Learning', '14:54']],
      terms: [['Longitudinal design', 'Measuring the same participants more than once over time (here, before and after 8 weeks).'], ['Waiting-list control', 'A control group who will get the treatment later – they are measured but not yet treated.'], ['FFMQ', 'Five Facet Mindfulness Questionnaire: 39 items rated 1–5, measuring five aspects of mindfulness.'], ['Grey matter concentration', 'How densely packed grey matter is in an area – measured from MRI scans.']] },

    { id: 'ab33', code: '1.3.3', title: 'Evaluating Hölzel et al.',
      inShort: 'MRI scans are objective and the control group shows the changes came from MBSR. But the sample was small and self-selected, the control group didn’t do any alternative activity, and the questionnaire is self-report.',
      notes: `
<h4>Methodology</h4>
<ul><li><b>Objective data:</b> MRI measures of grey matter are scientific and not affected by the participant’s opinions – high validity.</li><li><b>Control group:</b> the waiting-list group were scanned at the same intervals and showed no change, so the change is likely to be caused by MBSR, not by time or repeated scanning.</li><li><b>Longitudinal design:</b> scanning the <b>same people</b> before and after removes participant variables in the brain comparison.</li><li><b>Weakness – no active control:</b> the control group did nothing; changes might come from any new group activity, social contact or expectation, not mindfulness itself.</li><li><b>Weakness – self-report:</b> the FFMQ and practice diaries could be affected by <b>social desirability</b> and demand characteristics (people knew they were on a mindfulness course).</li><li><b>Reliability:</b> standardised MBSR course and the same scanner procedure ➜ replicable.</li></ul>
<h4>Sample & generalisation</h4>
<p>Small (16 + 17), mostly white, well-educated Americans who <b>chose</b> to do a stress-reduction course (<b>volunteers</b>, motivated, stressed) – may not generalise to everyone. Groups were similar in age and education.</p>
<h4>Ethics</h4>
<p>Good ethics: <b>informed consent</b> was given, the study was approved by ethics committees, and the control group were offered the course later. Two people left after finding the scan uncomfortable – they used their <b>right to withdraw</b>.</p>
<h4>Issues & debates</h4>
<ul><li><b>Application:</b> mindfulness courses could help people with stress, anxiety and depression, and are cheap compared with drugs.</li><li><b>Nature vs nurture:</b> an <b>experience</b> (nurture) changed the brain (nature) – they interact.</li></ul>`,
      ev: { plus: ['Objective, quantitative MRI data.', 'Waiting-list control group shows the change was due to MBSR.', 'Before-and-after design – each person compared with themselves.', 'Ethical: consent, approval, controls offered MBSR later.'],
            minus: ['Small, self-selected sample from one US region.', 'No active control activity – could be any group/social effect.', 'FFMQ and practice diaries are self-report (social desirability).', 'Brain changes didn’t correlate with amount of practice – the cause is not fully clear.'] },
      debates: ['validity', 'sampling', 'ethics', 'app', 'nn'],
      vids: [['LR2YSvCFXtA', 'Mindfulness and brain scans – Hölzel et al. (2011)', 'CIE A Level Psychology', '28:29'], ['3kO208NL5gU', 'Hölzel et al. (mindfulness and brain scans) 2011', 'Cambridge Study Materials', '25:23']],
      terms: [['Social desirability', 'Answering in a way that makes you look good rather than honestly.'], ['Active control', 'A control group that does a different activity, to rule out effects of simply taking part.'], ['Volunteer sample', 'Participants who choose to take part (here, people who signed up for MBSR).']] }
    ],
    quiz: [
      ['How many participants completed the MBSR group?', ['8', '16', '17', '33'], 1, '18 enrolled but 2 dropped out after the first scan ➜ 16.'],
      ['What was the control group?', ['People given a placebo pill', 'A waiting list who were scanned but not yet trained', 'Monks', 'People doing yoga'], 1, 'The 17 controls were on a waiting list and scanned twice ~2 months apart.'],
      ['Which brain area was the main “a priori” finding?', ['Amygdala', 'Left hippocampus', 'Frontal lobe', 'Brain stem'], 1, 'Grey matter concentration increased in the left hippocampus.'],
      ['How much did participants practise at home on average?', ['5 minutes a day', 'About 27 minutes a day', '2 hours a day', 'They didn’t'], 1, '22.6 hours over 8 weeks ≈ 27 min a day.'],
      ['The FFMQ is an example of…', ['A brain scan', 'A self-report questionnaire', 'An observation', 'A case study'], 1, 'The Five Facet Mindfulness Questionnaire: 39 items rated 1–5.'],
      ['Which is the best description of the design?', ['Correlational only', 'An experiment with a longitudinal (before-and-after) design', 'A case study', 'A field observation'], 1, 'Two groups compared, each measured before and after the 8 weeks.'],
      ['The temporo-parietal junction is linked to…', ['Breathing', 'Perspective taking and empathy', 'Vision only', 'Digestion'], 1, 'The TPJ is involved in taking others’ perspective and sense of self.']
    ],
    exam: [
      { p: 1, q: 'Outline the results of the study by Hölzel et al. [4]', guide: ['MBSR group increased grey matter concentration in the left hippocampus.', 'Also increases in posterior cingulate cortex, temporo-parietal junction and cerebellum.', 'No changes in the control (waiting-list) group.', 'MBSR group improved on 3 FFMQ facets (acting with awareness, observing, non-judging); average 27 min practice a day.'] },
      { p: 1, q: 'Evaluate the study by Hölzel et al. in terms of two strengths and two weaknesses. At least one of your evaluation points must be about the use of a control group. [10]', guide: ['Control group: waiting list showed no change ➜ change likely due to MBSR (strength).', 'Control group: no active control – could be social contact/expectation (weakness).', 'MRI = objective, quantitative data.', 'Small self-selected sample – generalisability.', 'FFMQ self-report – social desirability.', 'Good ethics: consent, controls offered course later.'] },
      { p: 2, q: 'Hölzel et al. used a longitudinal design. Explain what is meant by a longitudinal design and give one strength and one weakness of it in this study. [4]', guide: ['Measuring the same participants repeatedly over a period of time.', 'Here: MRI and FFMQ before and after the 8-week course.', 'Strength: each person compared with themselves – removes participant variables; shows change.', 'Weakness: attrition (2 dropped out) / takes time / other things in their lives could change.'] }
    ] }
  ]
};

Object.assign(PSY.y12.studies, {
  dement1957: { opt: 'bio', sub: 'ab12', name: 'Dement and Kleitman (1957)', short: 'Sleep and dreams',
    ref: 'Dement, W. and Kleitman, N. (1957). The relation of eye movements during sleep to dream activity: An objective method for the study of dreaming. Journal of Experimental Psychology, 53(5), 339–46.',
    context: 'Dreams were traditionally studied through people’s memories the next morning – subjective and unreliable. Earlier work had found rapid eye movement (REM) periods during sleep. If REM sleep is linked to dreaming, it would give an objective way to know when someone is dreaming. Sleep runs in ultradian cycles of NREM and REM stages, measured with an EEG.',
    aim: 'To investigate the relationship between REM sleep and dreaming, through three questions: (1) Does dream recall differ between REM and NREM sleep? (2) Is there a positive relationship between the length of REM and how long the person thinks they have been dreaming? (3) Is the pattern of eye movements related to the content of the dream?',
    sample: '9 adults – 7 men and 2 women. Five were studied intensively; data from the other four were used to confirm the findings.',
    method: 'Laboratory experiment (IV: woken in REM or NREM; DV: dream recall) with correlational analysis (REM length vs words in dream report). EEG and eye electrodes (objective) plus self-report dream descriptions and questioning.',
    procedure: ['Participants arrived at the sleep lab just before their usual bedtime, having eaten normally but avoided alcohol and caffeine that day.', 'Electrodes were attached near the eyes (eye movements) and on the scalp (EEG); they slept alone in a quiet, dark room, with wires leading to the EEG in the next room.', 'They were woken at various times by a doorbell and immediately spoke into a recording device: whether they had been dreaming and, if so, the content. The experimenter sometimes entered afterwards to ask further questions.', 'Participants were not told if they had been woken in REM or NREM, and waking patterns varied (e.g. random) so they could not detect a pattern.', 'Test 2: participants were woken 5 or 15 minutes into REM and asked whether they had been dreaming for 5 or 15 minutes; the number of words in each dream narrative was counted.', 'Test 3: they were woken after a period of mainly vertical, horizontal, mixed or little eye movement and asked exactly what they had been dreaming.'],
    results: ['REM awakenings: dreams recalled 152 times out of 191 (≈80%). NREM awakenings: 11 out of 160 (≈7%); NREM dreams were more likely just after a REM period had ended.', 'Duration estimates were correct 88% of the time at 5 minutes and 78% at 15 minutes; REM length correlated positively with the number of words in the dream report.', 'Eye movements matched dream content: vertical – looking up and down at climbers on a cliff; horizontal – watching two people throw tomatoes at each other; little movement – watching something in the distance.', 'REM periods occurred at regular intervals through the night – roughly every 90 minutes.'],
    conclusion: 'Dreaming happens during REM sleep, so REM can be used as an objective indicator of dreaming. People can judge how long they have been dreaming fairly accurately, and eye movements relate to what is being “looked at” in the dream.',
    ev: { plus: ['Objective, physiological measures (EEG, eye electrodes) – not affected by bias.', 'Highly controlled and standardised – replicable and reliable; many awakenings per person.', 'Quantitative data allowed clear comparison; qualitative dream reports gave detail.'],
          minus: ['Very small sample (9; 7 male) – limited generalisability.', 'Low ecological validity – sleeping in a lab with electrodes, woken by a doorbell.', 'Dream reports are subjective – could be forgotten, distorted or influenced by demand characteristics.'] },
    debates: { nn: 'REM cycles are a biological (natural) rhythm – supports nature.', app: 'Gives sleep researchers an objective method for knowing when people dream; useful for studying sleep.', indsit: 'The same pattern appeared in every participant – a general biological process rather than individual differences.' } },

  hassett2008: { opt: 'bio', sub: 'ab22', name: 'Hassett et al. (2008)', short: 'Monkey toy preferences',
    ref: 'Hassett, J. M., Siebert, E. R. and Wallen, K. (2008). Sex differences in rhesus monkey toy preferences parallel those of children. Hormones and Behavior, 54(3), 359–64.',
    context: 'Boys show strong preferences for “masculine” toys, while girls are more flexible. This could be due to socialisation or to biology – e.g. girls with CAH (high prenatal androgens) prefer “boys’ toys”. Rhesus monkeys are not exposed to human gender socialisation, so they allow the biological explanation to be tested.',
    aim: 'To investigate whether rhesus monkeys show sex differences in toy preferences similar to those of children, which would suggest that these preferences have a biological basis (e.g. hormones) and are not only due to socialisation.',
    sample: 'A social group of 135 rhesus monkeys at the Yerkes National Primate Research Center Field Station, USA. 14 with prenatal hormone treatments and 39 newborn infants were excluded; animals with fewer than 5 toy interactions were left out, giving data from 34 monkeys (23 females, 11 males), of different ages and ranks.',
    method: 'Experiment with a naturally occurring IV (sex) using observation with a behavioural checklist (frequency and duration of interactions); correlations with rank and age. Data were compared with existing data on children (Berenbaum and Hines, 1992).',
    procedure: ['6 wheeled toys (e.g. wagon, truck, car, shopping cart, dump truck) and 7 plush toys (e.g. Winnie-the-Pooh, teddy bear, Scooby-Doo, turtle) were used.', 'Before each trial, the monkeys were kept indoors while one wheeled and one plush toy were placed 10 m apart in the outdoor enclosure; left/right placement was counterbalanced across trials.', 'Seven 25-minute trials were carried out; each toy was filmed by its own camera.', 'Observers coded the videos together to agree on each monkey’s identity and behaviours, using a behavioural checklist (e.g. touch, sniff, hold, sit on, carry, drag, manipulate part, destroy, throw).', 'Each monkey’s social rank and age were also recorded.'],
    results: ['Males interacted significantly more with wheeled toys than plush toys (mean frequency 9.77 vs 2.06; duration 4.76 vs 0.53 minutes).', 'Females showed no significant preference (plush 7.97 vs wheeled 6.96 interactions); males interacted with plush toys significantly less than females did.', 'Individually, 73% of males preferred wheeled toys; among females 30% preferred plush, 39% wheeled and 30% had no preference.', 'Higher-ranking females interacted with toys more, but rank and age did not explain the sex difference.'],
    conclusion: 'Rhesus monkeys show sex differences in toy preference that parallel those of children: males strongly prefer wheeled toys while females are more flexible. This suggests biological factors such as prenatal hormones contribute to toy preferences, with social experience then shaping them.',
    ev: { plus: ['High ecological validity: observed in their natural social group and enclosure.', 'Operationalised behavioural checklist, video recording and agreement between observers – reliable.', 'Counterbalanced toy positions and standardised trials – good control.'],
          minus: ['Small final sample (34; only 11 males) from one troop.', 'Hormone levels were not measured – the biological cause is inferred.', 'Difficult to generalise from monkeys to children; toys differed in shape, size and colour.'] },
    debates: { nn: 'Supports nature – a sex difference without human socialisation; but female rank effects show social factors matter too (interaction).', animals: 'Monkeys used because they lack gender socialisation; ethically low-risk (normal housing, free choice), but generalising to humans is questionable.', children: 'Children were not tested directly – existing data on children were used for comparison.', app: 'Suggests strong toy preferences in boys may be partly biological – relevant to parents, teachers and toy makers.' } },

  holzel2011: { opt: 'bio', sub: 'ab32', name: 'Hölzel et al. (2011)', short: 'Mindfulness and brain scans',
    ref: 'Hölzel, B. K., Carmody, J., Vangel, M., Congleton, C., Yerramsetti, S. M., Gard, T. and Lazar, S. W. (2011). Mindfulness practice leads to increases in regional brain gray matter density. Psychiatry Research: Neuroimaging, 191(1), 36–43.',
    context: 'Mindfulness-Based Stress Reduction (MBSR) is an 8-week programme that improves well-being. Earlier studies found that experienced meditators have different brain structure, but these were correlational. The brain is plastic: experience can change grey matter. Localisation of function suggests areas such as the hippocampus are involved in learning, memory and emotion regulation.',
    aim: 'To investigate whether participating in an 8-week MBSR programme leads to changes in grey matter concentration in brain regions involved in learning and memory, emotion regulation, self-referential processing and perspective taking (in particular the hippocampus).',
    sample: 'MBSR group: 16 healthy, right-handed adults (6 men, 10 women; mean age 38) recruited from MBSR courses at the University of Massachusetts Medical School, with little meditation experience (18 enrolled; 2 withdrew). Control group: 17 adults on a waiting list (11 men, 6 women; mean age 39).',
    method: 'Experiment with a longitudinal (pre–post) design and a waiting-list control group. MRI scans (voxel-based morphometry) and the Five Facet Mindfulness Questionnaire (self-report); correlations with practice time.',
    procedure: ['MRI scans were taken about 2 weeks before and after the course (controls scanned twice, about 2 months apart).', 'MBSR: 8 weekly group meetings of 2.5 hours plus one full day (6.5 hours) in week 6, including body scan, mindful yoga and sitting meditation.', 'Participants received 45-minute audio recordings to practise daily at home and recorded how long they practised; they were also taught informal mindfulness (e.g. while eating or walking).', 'Both groups completed the FFMQ (39 items, 5-point scale) before and after.', 'Grey matter concentration was compared before vs after within and between the groups.'],
    results: ['MBSR participants practised for an average of 22.6 hours in total (about 27 minutes a day).', 'Mindfulness scores increased in the MBSR group on acting with awareness, observing and non-judging (not describing or non-reactivity); no change in controls.', 'Grey matter concentration increased in the left hippocampus in the MBSR group; whole-brain analysis also showed increases in the posterior cingulate cortex, temporo-parietal junction and cerebellum.', 'The control group showed no significant changes. Brain changes did not correlate with practice time or FFMQ change.'],
    conclusion: 'Participation in MBSR is associated with increases in grey matter concentration in brain regions involved in learning and memory, emotion regulation, self-referential processing and perspective taking – showing the adult brain can change structurally within 8 weeks.',
    ev: { plus: ['Objective MRI data; quantitative measures.', 'A control group and pre/post design support a causal conclusion.', 'Ethical: informed consent, ethics approval, controls offered MBSR afterwards.'],
          minus: ['Small, self-selected sample (people seeking stress reduction) – limited generalisability.', 'No active control group, so improvements may not be specific to mindfulness.', 'Self-report FFMQ and practice records may be affected by social desirability.'] },
    debates: { app: 'Supports MBSR as a cheap, drug-free way to improve well-being and change the brain.', nn: 'An experience (nurture) changes brain structure (nature) – the two interact.', indsit: 'Changes were linked to taking part in the course (situation) rather than to existing individual characteristics.' } }
});

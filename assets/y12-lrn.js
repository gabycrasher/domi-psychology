/* Year 12 – Learning approach: Bandura et al., Fagen et al., Saavedra and Silverman (9990 syllabus for 2027) */
window.PSY = window.PSY || { options: {}, studies: {} };
PSY.y12 = PSY.y12 || { options: {}, studies: {} };

PSY.y12.options.lrn = {
  id: 'lrn', name: 'Learning approach', short: 'Learning', emoji: '🐘', color: '#f59e0b',
  blurb: 'How experience shapes behaviour: copying, rewards and conditioning.',
  intro: `<b>Main assumptions</b> (learn these word-for-word for Paper 1):<ul style="margin:8px 0 6px"><li>We all begin life as a <b>blank slate</b>. Experiences and interactions with the environment shape our behaviour and these changes are <b>directly observable</b>.</li><li>We learn through the processes of <b>operant conditioning</b>, <b>classical conditioning</b> and <b>social learning</b>. This can be understood using the <b>stimulus–response</b> model.</li></ul>Your three core studies: <b>Bandura et al.</b> (aggression), <b>Fagen et al.</b> (elephant learning) and <b>Saavedra and Silverman</b> (button phobia).`,
  topics: [
  /* ───────────── 3.1 BANDURA ET AL. ───────────── */
  { id: 'al1', code: '3.1', title: 'Bandura et al. (aggression)', emoji: '🤛',
    subs: [
    { id: 'al11', code: '3.1.1', title: 'Social learning theory',
      inShort: 'Social learning theory says we learn by watching others (models) and imitating them – even without being rewarded ourselves. We are most likely to copy models who are similar to us, like the same sex.',
      notes: `
<h4>The psychology being investigated</h4>
<p>The syllabus lists: <b>social learning theory</b> and <b>aggression</b>.</p>
<h4>Social learning theory (SLT)</h4>
<ul><li>We learn new behaviours by <b>observing</b> other people (<b>models</b>) and <b>imitating</b> them – this is <b>observational learning</b>.</li><li>Learning can happen <b>without any reinforcement</b> to the learner – a big difference from operant conditioning.</li><li>We are more likely to imitate models who are <b>similar</b> to us (e.g. same sex), <b>powerful</b> or <b>admired</b>, or whose behaviour is seen as <b>appropriate</b> for them.</li><li><b>Vicarious reinforcement</b>: seeing a model rewarded makes us more likely to copy.</li></ul>
<h4>Aggression</h4>
<p><b>Aggression</b> = behaviour intended to harm someone or something. It can be <b>physical</b> (hitting, kicking) or <b>verbal</b> (shouting, insults). In the 1960s, many people were worried that children learn violence by watching adults and TV.</p>
<h4>Sex-typed behaviour</h4>
<p>In 1960s America, physical aggression was seen as a more “<b>masculine</b>” behaviour. So the researchers predicted boys would copy aggression more – especially from a male model.</p>
<ol class="pyramid"><li>Model</li><li>Attention</li><li>Imitation</li><li>New behaviour learned</li></ol>
<p class="tip">💡 Link to the learning approach: we start as a <b>blank slate</b> – behaviour such as aggression is <b>learned</b> from the environment (nurture).</p>`,
      debates: ['nn', 'children', 'app'],
      vids: [['XHIhkM1cAv4', 'Social learning theory: Bandura’s Bobo experiments', 'Sprouts', '4:27'], ['wLrTheHmYxg', 'Albert Bandura’s social learning theory explained', 'Psychology Exposed', '3:08'], ['ez9Hh30QOwc', 'Introduction to the learning approach', 'Mr. Luis', '3:14']],
      terms: [['Social learning theory', 'Learning by observing and imitating models.'], ['Model', 'The person whose behaviour is observed and possibly copied.'], ['Imitation', 'Copying the behaviour of a model.'], ['Aggression', 'Behaviour intended to harm – physical or verbal.'], ['Sex-typed behaviour', 'Behaviour seen as more appropriate for one sex than the other.']] },

    { id: 'al12', code: '3.1.2', title: 'The study: the Bobo doll', ks: 'bandura1961',
      inShort: '72 nursery children watched an adult either attack a Bobo doll or play quietly (or saw no model). After being mildly frustrated, children who saw aggression copied it – boys especially, and especially from the male model.',
      notes: `
<h4>Study at a glance</h4>
<table class="mini"><tr><th>Feature</th><th>Details</th></tr>
<tr><td>Aim</td><td>To see whether children imitate aggression they see an adult model perform, even when the model isn’t present later – and whether the sex of the model and child matters.</td></tr>
<tr><td>Method</td><td><b>Laboratory experiment</b> using a controlled <b>observation</b> to record the DV.</td></tr>
<tr><td>Sample</td><td><b>72 children</b> (36 boys, 36 girls) aged about 3–5½ years (37–69 months) from Stanford University Nursery School, USA.</td></tr>
<tr><td>Design</td><td><b>Matched groups</b>: children were rated for how aggressive they normally were and matched into groups. <b>24</b> in a control group (no model); <b>48</b> in 8 experimental groups of 6.</td></tr>
<tr><td>IVs</td><td>Model behaviour (aggressive / non-aggressive / none); sex of model; sex of child.</td></tr>
<tr><td>DV</td><td>Imitative and non-imitative aggression in the final room.</td></tr></table>
<h4>The three stages</h4>
<div class="three"><div class="box"><b>① Modelling (10 min)</b><br>Child played with stickers and potato prints. An adult in the corner either <b>attacked a 5-foot inflatable Bobo doll</b> in distinctive ways – sat on it and punched its nose, hit it with a mallet, threw it in the air, kicked it, saying things like “Sock him in the nose” and “Pow” – or played quietly with tinker toys.</div>
<div class="box"><b>② Mild aggression arousal (~2 min)</b><br>The child was taken to a room of very attractive toys, then told they were the experimenter’s best toys and were being saved for other children ➜ <b>frustration</b>.</div>
<div class="box"><b>③ Test (20 min)</b><br>A room with aggressive toys (a 3-foot Bobo, mallet, dart guns, tether ball) and non-aggressive toys (tea set, crayons, dolls, cars). Observers watched through a <b>one-way mirror</b>, recording behaviour every <b>5 seconds</b> (240 response units).</div></div>
<h4>Key results</h4>
<ul><li>Children who saw the <b>aggressive model</b> showed much more <b>imitative</b> physical and verbal aggression than the other groups.</li><li><b>Boys</b> showed more imitative <b>physical</b> aggression than girls.</li><li>Same-sex effect: boys copied the <b>male</b> model’s physical aggression most (mean 25.8 vs 12.4 with the female model); girls copied the <b>female</b> model’s verbal aggression more (13.7 vs 2.0 with the male model).</li><li>The male model was generally more influential – but girls showed more physical aggression after the male model (7.2) than the female model (5.5).</li><li>Children who saw the <b>non-aggressive</b> model often showed <b>less</b> aggression than the control group.</li></ul>
<p class="tip">💡 <b>Conclusion:</b> children learn aggression by <b>observing</b> and imitating models – without being rewarded themselves – supporting social learning theory. Children are more likely to copy same-sex models and “sex-appropriate” behaviour.</p>`,
      debates: ['experiments', 'lab', 'observations', 'design', 'reliability'],
      vids: [['FoyeM3lYN_E', 'The Bobo doll experiment explained', 'EY', '8:04'], ['dmBqwWlJg8U', 'Bandura’s Bobo doll experiment', 'Everywhere Psychology', '3:48'], ['IUw1-Mwt35Y', 'Bandura et al. on aggression', 'A Levels Psychology (9990)', '10:48']],
      terms: [['Bobo doll', 'An inflatable doll that bounces back up when hit.'], ['Matched groups', 'Children were matched on pre-existing aggression ratings before being put into groups.'], ['Aggression arousal', 'Making children mildly frustrated so they would be more likely to show aggression.'], ['One-way mirror', 'Observers can see in, but children can’t see out – a covert observation.'], ['Response units', 'The 240 five-second intervals in which behaviour was recorded.']] },

    { id: 'al13', code: '3.1.3', title: 'Evaluating Bandura et al.',
      inShort: 'Excellent control, matching, two observers and clear behaviour categories make it reliable and valid. But it’s artificial (a Bobo doll is meant to be hit), and frustrating young children and exposing them to aggression raises ethical issues.',
      notes: `
<h4>Methodology</h4>
<ul><li><b>Controls / standardisation:</b> same room, same toys, same model actions and words, same time periods ➜ cause and effect; replicable.</li><li><b>Matching:</b> children were rated for normal aggressiveness (by the experimenter and a nursery teacher who knew them well) and matched across groups – controls a key participant variable.</li><li><b>Reliability:</b> clearly defined behavioural categories; a second observer scored half the children – high inter-rater reliability.</li><li><b>Validity concern:</b> a Bobo doll is a toy <b>designed</b> to be hit – children may have thought they were <b>expected</b> to hit it (demand characteristics). Hitting a doll isn’t the same as hurting a person.</li><li><b>Ecological validity:</b> a lab with a stranger modelling odd behaviour is unlike real life; it measured only immediate imitation, not long-term learning.</li></ul>
<h4>Sample & generalisation</h4>
<p>72 children from one <b>university nursery</b> in the USA (likely middle-class families) – may not represent all children or cultures.</p>
<h4>Ethics (use of children)</h4>
<ul><li>Children were exposed to aggression and deliberately <b>frustrated</b> – possible <b>harm</b>, and they might stay more aggressive afterwards.</li><li>Young children can’t give informed consent or understand they can withdraw.</li><li>However, the research helped show the risks of children watching violence.</li></ul>
<h4>Issues & debates</h4>
<ul><li><b>Nature vs nurture:</b> strongly supports <b>nurture</b> – aggression is learned. But boys’ higher physical aggression could also be biological (nature).</li><li><b>Application:</b> concerns about violent TV, films and games; adults should model calm behaviour.</li><li><b>Use of children:</b> useful but ethically questionable.</li></ul>`,
      ev: { plus: ['Highly controlled and standardised – shows cause and effect, replicable.', 'Matched groups on prior aggression control participant variables.', 'Two observers and operationalised categories – inter-rater reliability.', 'Quantitative data allows clear comparisons.'],
            minus: ['Bobo dolls invite hitting – demand characteristics, low validity for real aggression.', 'Artificial lab setting; only short-term effects measured.', 'Ethical issues: exposing young children to aggression and frustrating them.', 'One university nursery – limited generalisability.'] },
      debates: ['children', 'nn', 'ethics', 'validity', 'app'],
      vids: [['6lYsmt9qUVI', 'The Bobo doll experiment – Bandura on social learning', 'Practical Psychology', '6:03'], ['4eWeVu5aSh8', 'Bandura’s Bobo doll experiments (evaluation)', 'Bear it in MIND', '14:08']],
      terms: [['Inter-rater reliability', 'Agreement between two or more observers scoring the same behaviour.'], ['Demand characteristics', 'Features of a study that suggest to participants how they should behave.'], ['Short-term vs long-term effects', 'Bandura only measured immediate imitation, not whether learning lasted.']] }
    ],
    quiz: [
      ['How many children took part in Bandura et al.?', ['24', '48', '72', '100'], 2, '72 children (36 boys, 36 girls) from Stanford University Nursery School.'],
      ['What happened in stage 2?', ['Children watched TV', 'Children were mildly frustrated by having attractive toys taken away', 'Children were rewarded', 'Parents were interviewed'], 1, 'Mild aggression arousal – the toys were “reserved for other children”.'],
      ['How often was the children’s behaviour recorded in stage 3?', ['Every second', 'Every 5 seconds', 'Every minute', 'Once'], 1, '20 minutes in 5-second intervals = 240 response units.'],
      ['Which group showed the most imitative physical aggression?', ['Girls with female model', 'Boys with male model', 'Control group', 'Non-aggressive model group'], 1, 'Boys who saw the aggressive male model (mean 25.8).'],
      ['How were children matched before being put into groups?', ['By age only', 'By ratings of their usual aggressiveness', 'By IQ', 'By height'], 1, 'The experimenter and a teacher rated their aggression; children were matched across groups.'],
      ['Social learning theory says learning can happen…', ['Only with rewards', 'By observing models, without direct reinforcement', 'Only in adults', 'Only through punishment'], 1, 'Observational learning – the children weren’t rewarded for hitting Bobo.'],
      ['Which is the main validity criticism of the Bobo doll?', ['It was too small', 'It is a toy designed to be hit, so hitting may not be real aggression', 'It was the wrong colour', 'It talked'], 1, 'Children may have thought hitting was expected – demand characteristics.']
    ],
    exam: [
      { p: 1, q: 'Describe what happened in stage 1 of Bandura et al.’s study for children in the aggressive model condition. [4]', guide: ['Child sat at a table making potato prints/stickers in one corner.', 'Adult model in the other corner with tinker toys, a mallet and a 5-foot Bobo doll.', 'After about a minute the model attacked Bobo – sat on it and punched its nose, hit it with a mallet, threw it in the air, kicked it.', 'Verbal aggression, e.g. “Sock him in the nose”, “Pow”; lasted about 10 minutes.'] },
      { p: 1, q: 'Evaluate the study by Bandura et al. in terms of two strengths and two weaknesses. At least one of your evaluation points must be about the use of children in psychological research. [10]', guide: ['Children: exposed to aggression and frustrated – possible harm; couldn’t consent (weakness).', 'Children: findings protect children (application to media violence).', 'Strength: standardised procedure and matched groups – cause and effect.', 'Strength: two observers, 5-second intervals – reliable.', 'Weakness: Bobo designed to be hit – demand characteristics.', 'Weakness: one nursery sample / lab setting.'] },
      { p: 2, q: 'Bandura et al. used a matched pairs/groups design. Explain how children were matched and give one advantage of this design. [4]', guide: ['Children were rated on physical aggression, verbal aggression, aggression to objects and aggressive inhibition.', 'Ratings by the experimenter and a nursery teacher who knew the children well.', 'Children with similar ratings were placed in different groups.', 'Advantage: controls the participant variable of natural aggressiveness, so differences are due to the model.'] }
    ] },

  /* ───────────── 3.2 FAGEN ET AL. ───────────── */
  { id: 'al2', code: '3.2', title: 'Fagen et al. (elephant learning)', emoji: '🐘',
    subs: [
    { id: 'al21', code: '3.2.1', title: 'Operant conditioning, reinforcement & shaping',
      inShort: 'Operant conditioning = learning from consequences. Reinforcement makes behaviour more likely. A primary reinforcer meets a basic need (food); a secondary reinforcer (a whistle) works because it has been paired with one. Shaping and chaining build complex behaviours step by step.',
      notes: `
<h4>The psychology being investigated</h4>
<p>The syllabus lists: <b>operant conditioning</b>; <b>reinforcement</b> (positive, negative, primary and secondary); <b>shaping</b>; <b>behavioural chaining</b>.</p>
<h4>Operant conditioning (Skinner)</h4>
<p>Behaviour is shaped by its <b>consequences</b>. Behaviour followed by a pleasant consequence is repeated; behaviour followed by an unpleasant one is less likely.</p>
<table class="mini"><tr><th></th><th>Something is <b>added</b> (+)</th><th>Something is <b>taken away</b> (−)</th></tr>
<tr><td><b>Behaviour increases</b> (reinforcement)</td><td><b>Positive reinforcement</b> – e.g. a banana for raising the trunk</td><td><b>Negative reinforcement</b> – removing something unpleasant, e.g. a hook’s pressure stops when the elephant moves</td></tr>
<tr><td><b>Behaviour decreases</b> (punishment)</td><td>Positive punishment – e.g. a hit</td><td>Negative punishment – e.g. food taken away</td></tr></table>
<p class="mem">🧠 Memory trick: <b>Positive = add</b>, <b>Negative = remove</b>. <b>Reinforcement</b> always makes behaviour <b>more</b> likely.</p>
<h4>Primary vs secondary reinforcers</h4>
<ul><li><b>Primary reinforcer</b> – meets a biological need by itself, e.g. food (bananas).</li><li><b>Secondary reinforcer</b> – has no value on its own but becomes rewarding by being paired with a primary reinforcer (classical conditioning), e.g. a <b>whistle</b>, a clicker, money, praise.</li><li>A secondary reinforcer used to “mark” the exact moment of correct behaviour is called a <b>bridge</b>.</li></ul>
<h4>Shaping & chaining</h4>
<ul><li><b>Shaping</b> – rewarding <b>successive approximations</b>: first anything close to the target behaviour, then only closer and closer versions.</li><li><b>Behavioural chaining</b> – linking several learned behaviours into a <b>sequence</b>, where each step becomes the cue for the next.</li><li>Other training tricks: <b>capturing</b> (rewarding a behaviour the animal does naturally) and <b>luring</b> (using food to guide the animal into position).</li></ul>`,
      debates: ['nn', 'animals', 'app'],
      vids: [['ut1zmfolM9E', 'Operant conditioning: positive and negative reinforcement and punishment', 'Khan Academy', '6:59'], ['ne6o-uPJarA', 'Skinner’s operant conditioning: rewards & punishments', 'Sprouts', '3:55'], ['4XYA8k41iLU', 'Shaping and chaining', 'Behavior Nation', '4:57']],
      terms: [['Operant conditioning', 'Learning through the consequences of behaviour.'], ['Positive reinforcement', 'Adding something pleasant after a behaviour so it is repeated.'], ['Negative reinforcement', 'Removing something unpleasant after a behaviour so it is repeated.'], ['Primary reinforcer', 'Satisfies a basic biological need, e.g. food.'], ['Secondary reinforcer', 'Gains its power by association with a primary reinforcer, e.g. a whistle.'], ['Shaping', 'Rewarding closer and closer approximations to a target behaviour.'], ['Behavioural chaining', 'Linking learned behaviours into a sequence.']] },

    { id: 'al22', code: '3.2.2', title: 'The study: training elephants with rewards', ks: 'fagen2014',
      inShort: 'Five working elephants in Nepal were trained with bananas and a whistle (secondary positive reinforcement) to do a “trunk wash” used to test for tuberculosis. The four young elephants learned the whole sequence; the older one didn’t.',
      notes: `
<h4>Study at a glance</h4>
<table class="mini"><tr><th>Feature</th><th>Details</th></tr>
<tr><td>Aim</td><td>To see whether <b>secondary positive reinforcement</b> (SPR) training can teach working elephants to take part in a <b>trunk wash</b> (for tuberculosis testing) – showing an alternative to traditional training based on punishment.</td></tr>
<tr><td>Method</td><td><b>Observation</b> of training with success measured using a <b>behavioural checklist</b>; a before-and-after (repeated measures) design.</td></tr>
<tr><td>Sample</td><td><b>5 female</b> Asian elephants in Nepal – <b>4 juveniles</b> (about 5–7 years) and <b>1 adult</b> (about 50 years) – chosen because they were docile, not pregnant or nursing, and had a mahout (handler) willing to take part.</td></tr></table>
<h4>The trunk wash</h4>
<p>To test for tuberculosis (TB), water (saline) is put into the elephant’s trunk, the elephant <b>raises</b> its trunk, then <b>blows</b> the water out into a <b>bucket or bag</b> for testing. Traditionally, elephants are forced to cooperate using pain and fear.</p>
<h4>Procedure in steps</h4>
<ol><li><b>Bridge training</b>: a whistle (neutral) was repeatedly paired with chopped <b>bananas</b> (primary reinforcer) ➜ the whistle became a <b>secondary reinforcer</b>.</li><li>Five behaviours were taught separately: <b>trunk here</b> (trunk tip into the trainer’s hand), <b>trunk up</b>, <b>steady</b> (hold still), <b>bucket</b> (trunk into bucket) and <b>blow</b> – using <b>shaping</b>, <b>luring</b> (e.g. holding food up for “trunk up”) and <b>capturing</b> (rewarding natural blowing).</li><li>The behaviours were then <b>chained</b> into the full trunk wash sequence.</li><li>Training sessions were in the mornings and afternoons; mahouts were present for safety but didn’t interact with the elephants; water was offered first so the elephants wouldn’t drink the wash.</li><li><b>Tests</b> of everything learned so far were run regularly (from the 10th session, then every 5th) – the % of correct responses was recorded on a <b>checklist</b>.</li></ol>
<h4>Key results</h4>
<ul><li>The <b>4 juvenile</b> elephants learned the <b>full trunk wash</b>; the <b>adult</b> made progress but did not learn the whole sequence.</li><li>Total training time ranged from about <b>257 to 451 minutes</b> per elephant – short sessions over a few weeks.</li><li>“Trunk here” needed the most practice; performance improved steadily over the tests.</li></ul>
<p class="tip">💡 <b>Conclusion:</b> secondary positive reinforcement is an effective and humane way to train elephants for veterinary procedures – a real alternative to traditional, punishment-based methods.</p>`,
      debates: ['observations', 'animalethics', 'case', 'quantqual', 'reliability'],
      vids: [['WHk9_whH-c4', 'Fagen et al. (2014)', 'Mr. Luis', '8:40'], ['XPwq5EKAJSM', 'Fagen 2014 elephant learning', 'AICE Psychology', '6:28'], ['vkuMUW3B7nc', 'Fagen elephant study – aim, procedure, ethics', 'Silly Psychology', '5:23']],
      terms: [['Trunk wash', 'A procedure where water is put into the trunk and blown out to collect a sample for TB testing.'], ['Mahout', 'An elephant’s keeper and handler.'], ['Bridge', 'A secondary reinforcer (here a whistle) that marks the exact moment of correct behaviour.'], ['Luring', 'Using food to guide an animal into the desired position.'], ['Capturing', 'Rewarding a behaviour the animal already does naturally.']] },

    { id: 'al23', code: '3.2.3', title: 'Evaluating Fagen et al.',
      inShort: 'Strong because it was done with real working elephants, used clear checklists, and improved animal welfare. Weak because there were only 5 elephants (all female), no control group, and it may be hard for mahouts to keep using the method.',
      notes: `
<h4>Methodology</h4>
<ul><li><b>Ecological validity:</b> real working elephants in their own stables in Nepal – a real-world problem.</li><li><b>Objective, quantitative measures:</b> % correct on the checklist, training minutes – clear and comparable.</li><li><b>Standardisation:</b> the same 5 behaviours, the same reinforcers, mahouts told not to interact – but training was adapted to each elephant’s pace (less standardised).</li><li><b>No control group:</b> we can’t compare with elephants trained traditionally, so we can’t be sure SPR is <i>better</i>.</li><li>Like a set of <b>case studies</b>: detailed data on individual elephants.</li></ul>
<h4>Sample & generalisation</h4>
<p>Only <b>5 female</b> elephants (4 young) from one stable – hard to generalise to male elephants, older elephants or other places. The opportunity sample chose <b>docile</b> elephants, which might learn more easily.</p>
<h4>Ethics (animals)</h4>
<ul><li><b>Minimising harm:</b> rewards instead of pain – it <b>improves</b> welfare. Bananas are a <b>reward</b>, with no <b>deprivation</b>.</li><li>Elephants were <b>chained</b> in their stalls during training (normal practice there) and pregnant/nursing elephants were excluded.</li><li>Benefits: voluntary TB testing is safer for elephants and people.</li></ul>
<h4>Issues & debates</h4>
<ul><li><b>Application:</b> a humane alternative to traditional elephant training; mahouts can be trained to use it; useful for zoos too.</li><li><b>Nature vs nurture:</b> the elephants’ new behaviours were <b>learned</b> (nurture) – but age (a biological factor) affected success.</li><li><b>Use of animals:</b> the research directly benefited the animals themselves.</li></ul>`,
      ev: { plus: ['Real working elephants – high ecological validity and usefulness.', 'Quantitative checklist data (% correct, minutes) – objective.', 'Ethical: positive reinforcement improves elephant welfare.', 'Clear application to animal care and veterinary testing.'],
            minus: ['Tiny sample of 5 female elephants from one stable.', 'No control group trained traditionally – can’t prove SPR is better.', 'Training adapted to each elephant – less standardised.', 'Elephants were chained during sessions; long-term use by mahouts not tested.'] },
      debates: ['animals', 'app', 'animalethics', 'sampling', 'validity'],
      vids: [['5AmmLVG4hQo', 'Fagen et al. – study & evaluation', 'EY', '8:55'], ['8__WNGa0rTQ', 'Fagen elephant learning', 'AICE Psychology', '9:48']],
      terms: [['Animal welfare', 'The physical and mental well-being of an animal.'], ['Control group', 'A comparison group that does not receive the treatment.'], ['Opportunity sample', 'Using participants (here elephants) who are available and suitable at the time.']] }
    ],
    quiz: [
      ['How many elephants were trained?', ['2', '5', '10', '20'], 1, '5 female elephants: 4 juveniles and 1 adult.'],
      ['In this study, the whistle was a…', ['Primary reinforcer', 'Secondary reinforcer', 'Punishment', 'Neutral stimulus throughout'], 1, 'Paired with bananas, the whistle became a secondary reinforcer (bridge).'],
      ['Which elephants learned the full trunk wash?', ['All five', 'The four juveniles', 'Only the adult', 'None'], 1, 'The four juveniles did; the adult did not complete the sequence.'],
      ['Linking behaviours into a sequence is called…', ['Shaping', 'Behavioural chaining', 'Luring', 'Extinction'], 1, 'Each step becomes the cue for the next.'],
      ['Why is the trunk wash done?', ['To clean the elephant', 'To test for tuberculosis', 'For tourists', 'To cool down'], 1, 'The blown-out water is tested for TB.'],
      ['Giving a banana after “trunk up” is…', ['Negative reinforcement', 'Positive reinforcement', 'Positive punishment', 'Negative punishment'], 1, 'Something pleasant is added ➜ behaviour increases.'],
      ['Which is a weakness of the study?', ['It harmed the elephants', 'No control group of traditionally trained elephants', 'Too many elephants', 'It used punishment'], 1, 'Without a comparison group, we can’t show SPR is better than traditional methods.']
    ],
    exam: [
      { p: 1, q: 'Explain how the whistle in Fagen et al.’s study became a secondary reinforcer. [3]', guide: ['The whistle was originally a neutral stimulus with no value to the elephant.', 'It was repeatedly paired with chopped bananas (primary reinforcer) – bridge training.', 'Through this association (classical conditioning) the whistle itself became rewarding and could mark correct behaviour.'] },
      { p: 1, q: 'Evaluate the study by Fagen et al. in terms of two strengths and two weaknesses. At least one of your evaluation points must be about the use of animals in research. [10]', guide: ['Animals: positive reinforcement improved welfare – ethical (strength).', 'Animals: chained in stalls / can’t consent; generalising to other elephants (weakness).', 'Ecological validity: real working elephants.', 'Quantitative checklist data.', 'Weakness: only 5 female elephants.', 'Weakness: no control group; training not fully standardised.'] },
      { p: 2, q: 'Fagen et al. used a behavioural checklist to measure success. Suggest how the reliability of this checklist could be checked. [3]', guide: ['Use two (or more) observers to record the same sessions independently.', 'Compare their records/percentages for each behaviour.', 'High agreement (correlation) = good inter-observer reliability; behaviours should be clearly operationalised.'] }
    ] },

  /* ───────────── 3.3 SAAVEDRA AND SILVERMAN ───────────── */
  { id: 'al3', code: '3.3', title: 'Saavedra and Silverman (button phobia)', emoji: '🔘',
    subs: [
    { id: 'al31', code: '3.3.1', title: 'Phobias, conditioning & disgust',
      inShort: 'A phobia is an extreme, irrational fear. Classical conditioning explains how a neutral thing (a button) can become feared after being linked with a bad experience. Evaluative learning explains how something can become “disgusting”.',
      notes: `
<h4>The psychology being investigated</h4>
<p>The syllabus lists: <b>evaluative learning</b>, <b>operant conditioning</b>, <b>classical conditioning</b> and <b>phobias</b>.</p>
<h4>Phobias</h4>
<ul><li>A <b>specific phobia</b> = an intense, irrational fear of a particular object or situation, leading to <b>avoidance</b> and distress that interferes with daily life.</li><li>Phobias usually involve <b>fear</b> – but some involve <b>disgust</b> (a feeling of revulsion, “it’s gross”).</li></ul>
<h4>Classical conditioning (Pavlov)</h4>
<table class="mini"><tr><th>Before</th><th>During</th><th>After</th></tr>
<tr><td>Bowl of buttons falling (UCS) ➜ distress (UCR)</td><td>Buttons (NS) + falling/upset (UCS)</td><td>Buttons (CS) ➜ distress/disgust (CR)</td></tr></table>
<p>A neutral stimulus becomes a <b>conditioned stimulus</b> by being associated with an unpleasant experience.</p>
<h4>Operant conditioning keeps phobias going</h4>
<p>Avoiding the feared object makes anxiety go away – this is <b>negative reinforcement</b>, so avoidance is repeated and the phobia is maintained. Rewards (positive reinforcement) can be used in therapy to encourage facing the fear – <b>contingency management</b>.</p>
<h4>Evaluative learning</h4>
<p><b>Evaluative learning</b> = learning to like or dislike something because it has been paired with something pleasant or unpleasant. It changes the <b>evaluation</b> (good/bad, “disgusting”) of the stimulus – and is thought to be harder to extinguish than fear. To treat disgust, therapy may need to change the <b>evaluation</b>, not just reduce fear.</p>
<h4>Exposure therapy</h4>
<ul><li><b>In vivo exposure</b>: facing the real stimulus gradually, following a <b>hierarchy</b> from least to most distressing.</li><li><b>Imagery (imaginal) exposure</b>: imagining the stimulus in detail.</li></ul>`,
      debates: ['nn', 'app', 'children'],
      vids: [['jd7Jdug5SRc', 'Pavlov’s classical conditioning', 'Sprouts', '4:43'], ['lkxIGKihFeY', 'Classical conditioning and phobias', 'Karin Fehlmann', '3:04'], ['UITwU58PR5Q', '3 types of phobia & the famous case of “button boy”', 'Sprouts', '5:34']],
      terms: [['Specific phobia', 'An intense, irrational fear of a particular object or situation.'], ['Classical conditioning', 'Learning by association: a neutral stimulus is paired with one that already produces a response.'], ['Evaluative learning', 'Learning to like/dislike a stimulus through pairing – changes its evaluation (e.g. disgusting).'], ['Contingency management', 'Rewarding desired behaviour (e.g. facing buttons) – positive reinforcement.'], ['Hierarchy', 'A list of feared situations ranked from least to most distressing.']] },

    { id: 'al32', code: '3.3.2', title: 'The study: the button phobia case', ks: 'saavedra2002',
      inShort: 'A 9-year-old boy was disgusted by buttons after a bowl of buttons fell on him at age 5. Exposure with rewards didn’t reduce his distress, but imagining buttons while changing how he thought about them (disgust) did – and the improvement lasted.',
      notes: `
<h4>Study at a glance</h4>
<table class="mini"><tr><th>Feature</th><th>Details</th></tr>
<tr><td>Aim</td><td>To investigate how a child’s button phobia could be treated using conditioning – targeting <b>disgust</b> as well as fear.</td></tr>
<tr><td>Method</td><td><b>Case study</b> using <b>interviews</b>, <b>rating scales</b> and <b>observations</b>.</td></tr>
<tr><td>Participant</td><td>A <b>9-year-old Hispanic-American boy</b> with a button phobia for about 4 years, brought by his mother to a child anxiety and phobia clinic.</td></tr></table>
<h4>Background of the case</h4>
<p>At <b>age 5</b>, in kindergarten, he ran out of buttons for an art project, went to the teacher’s desk for more – and the <b>whole bowl of buttons fell on him</b>. Since then he avoided buttons; he said they were <b>disgusting</b> and even “smelled”. He couldn’t dress himself in clothes with buttons, and it affected school.</p>
<h4>Assessment</h4>
<ul><li>A semi-structured interview with the boy and his mother (the <b>ADIS-C/P</b>) ➜ diagnosis of a <b>specific phobia</b> of buttons.</li><li>A <b>Feelings Thermometer</b> (0–8) to rate distress, and an <b>11-step hierarchy</b> – from large denim jeans buttons (least distressing) to small, clear plastic buttons (most).</li></ul>
<h4>Two kinds of treatment</h4>
<div class="two"><div class="box"><b>① Exposure + contingency management (4 sessions)</b><br>Gradual <b>in vivo</b> exposure up the hierarchy; his mother gave <b>rewards</b> (positive reinforcement) for completing each step. Sessions: 30 min alone with the therapist + 20 min with his mother.</div>
<div class="box"><b>② Imagery exposure + disgust (evaluative) work</b><br>He imagined buttons in disturbing scenarios (e.g. buttons falling on him; hugging his mother while she wore buttons) and described what he saw and smelled – and was helped to think again about why buttons were “disgusting” (cognitive self-control).</div></div>
<h4>Key results</h4>
<ul><li>After the <b>exposure + rewards</b> sessions he could handle more buttons, but his <b>distress ratings did not go down</b> (they even rose) – his disgust remained.</li><li>During <b>imagery exposure</b> his distress dropped clearly – e.g. imagining buttons falling on him fell from <b>8 to 3</b>.</li><li>At <b>6- and 12-month follow-ups</b> his improvement had lasted and he was no longer diagnosed with a button phobia.</li></ul>
<p class="tip">💡 <b>Conclusion:</b> the phobia was based on <b>disgust</b> (learned by evaluative learning), so treating fear alone wasn’t enough – targeting the disgust worked.</p>`,
      debates: ['case', 'interviews', 'longitudinal', 'quantqual', 'children'],
      vids: [['a2z9CHLFycY', 'Saavedra and Silverman (2002) – button phobia', 'Mayfair’s Magic', '4:20'], ['2snXgyaY1mI', 'Button phobia – study explained', 'EY', '7:20']],
      terms: [['Case study', 'An in-depth study of one person using several techniques.'], ['ADIS-C/P', 'Anxiety Disorders Interview Schedule for Children and Parents – a semi-structured interview.'], ['Feelings Thermometer', 'A 0–8 scale the boy used to rate his distress.'], ['In vivo exposure', 'Facing the real feared object step by step.'], ['Imagery exposure', 'Imagining the feared object in vivid detail.']] },

    { id: 'al33', code: '3.3.3', title: 'Evaluating Saavedra and Silverman',
      inShort: 'Rich detail from many techniques (interviews, ratings, follow-ups) and a successful, useful treatment. But it’s one boy – we can’t generalise – and his distress ratings and memories are subjective.',
      notes: `
<h4>Methodology</h4>
<ul><li><b>Case study strengths:</b> detailed qualitative and quantitative data about a <b>rare</b> phobia; several techniques (interviews with boy and mother, rating scales, observation) allow <b>triangulation</b>.</li><li><b>Follow-ups</b> at 6 and 12 months show long-term effects – a longitudinal element.</li><li><b>Subjective data:</b> the Feelings Thermometer relies on the boy’s own ratings – he might give answers to please the therapist (demand characteristics / social desirability).</li><li><b>Retrospective data:</b> the origin of the phobia relies on memories of an event 4 years earlier – may be inaccurate.</li><li>Hard to know <b>which part</b> worked – the imagery sessions came after the exposure sessions (an order effect is possible).</li></ul>
<h4>Generalisation</h4>
<p>One 9-year-old boy with an unusual phobia – findings can’t be generalised to all phobias or all children. But they suggest disgust should be checked in other phobias.</p>
<h4>Ethics (use of children)</h4>
<ul><li>His <b>mother</b> consented and took part; the treatment <b>benefited</b> him.</li><li>Exposure deliberately causes distress, so it must be gradual and he must feel able to stop.</li><li><b>Confidentiality</b> – he isn’t named.</li></ul>
<h4>Issues & debates</h4>
<ul><li><b>Application:</b> therapists should assess <b>disgust</b> as well as fear and use imagery/cognitive techniques when needed.</li><li><b>Nature vs nurture:</b> the phobia was <b>learned</b> from one experience (nurture).</li><li><b>Use of children:</b> research with children can directly help them.</li></ul>`,
      ev: { plus: ['Rich, detailed data from several techniques – triangulation.', 'Follow-ups at 6 and 12 months show lasting change.', 'Practical application to treating disgust-based phobias.', 'Ethical benefit – the child was helped.'],
            minus: ['One child – cannot generalise.', 'Subjective self-ratings could be biased.', 'Origin of the phobia relies on memory of an event years earlier.', 'Treatments were given in a fixed order – hard to separate their effects.'] },
      debates: ['case', 'children', 'app', 'validity', 'nn'],
      vids: [['qeaSzAOYWXs', 'Saavedra and Silverman (button phobia) – learning approach', 'Cambridge Study Materials', '19:00'], ['Tp_fRSW0kXA', 'Saavedra & Silverman on button phobia', 'A Levels Psychology (9990)', '21:22']],
      terms: [['Triangulation', 'Using several methods or sources to check findings agree.'], ['Retrospective data', 'Information based on memories of the past.'], ['Follow-up', 'Assessing a participant again some time after the study or treatment ends.']] }
    ],
    quiz: [
      ['How old was the boy when he was treated?', ['5', '7', '9', '12'], 2, 'He was 9; the phobia began at age 5.'],
      ['What started his button phobia?', ['A dog wearing a coat', 'A bowl of buttons falling on him at school', 'A film', 'His mother’s coat'], 1, 'In kindergarten the bowl of buttons fell on him.'],
      ['What emotion was most important in his phobia?', ['Anger', 'Disgust', 'Joy', 'Surprise'], 1, 'He described buttons as disgusting and smelly.'],
      ['What scale did he use to rate distress?', ['Likert 1–5', 'Feelings Thermometer 0–8', 'IQ test', 'AQ'], 1, 'A 0–8 Feelings Thermometer.'],
      ['Which treatment reduced his distress most?', ['Exposure with rewards', 'Imagery exposure targeting disgust', 'Medication', 'No treatment'], 1, 'Imagery exposure + disgust work cut distress (e.g. 8 to 3).'],
      ['Rewards from his mother for facing buttons are an example of…', ['Negative reinforcement', 'Positive reinforcement (contingency management)', 'Punishment', 'Extinction'], 1, 'Adding a reward after the behaviour.'],
      ['Which research method was used?', ['Field experiment', 'Case study', 'Correlation', 'Questionnaire survey'], 1, 'An in-depth case study of one child.']
    ],
    exam: [
      { p: 1, q: 'Use classical conditioning to explain how the boy in Saavedra and Silverman’s study may have developed his button phobia. [4]', guide: ['Buttons were originally a neutral stimulus.', 'The bowl of buttons falling on him (UCS) caused distress/upset (UCR).', 'Buttons were associated with this unpleasant event.', 'Buttons became a conditioned stimulus producing distress/disgust (CR).'] },
      { p: 1, q: 'Evaluate the study by Saavedra and Silverman in terms of two strengths and two weaknesses. At least one of your evaluation points must be about generalisations from findings. [10]', guide: ['Generalisation: one 9-year-old boy with a rare phobia – can’t generalise (weakness).', 'But it suggests checking disgust in other phobias (strength).', 'Rich data, triangulation from several techniques.', 'Follow-ups at 6 and 12 months.', 'Subjective ratings – social desirability.', 'Retrospective memories / fixed order of treatments.'] },
      { p: 2, q: 'Saavedra and Silverman used a case study. Describe two features of a case study, using examples from this study. [4]', guide: ['Focus on a single participant/unit – one 9-year-old boy.', 'In-depth/detailed – history of the phobia, many sessions.', 'Several techniques – interview (ADIS-C/P), Feelings Thermometer ratings, observation.', 'Often over time – follow-ups at 6 and 12 months.'] }
    ] }
  ]
};

Object.assign(PSY.y12.studies, {
  bandura1961: { opt: 'lrn', sub: 'al12', name: 'Bandura et al. (1961)', short: 'Aggression (Bobo doll)',
    ref: 'Bandura, A., Ross, D. and Ross, S. A. (1961). Transmission of aggression through imitation of aggressive models. Journal of Abnormal and Social Psychology, 63(3), 575–82.',
    context: 'Social learning theory proposes that behaviour can be learned by observing and imitating models, without direct reinforcement. Earlier studies showed children copy a model while the model is present; Bandura wanted to know if imitation generalises to a new setting when the model is absent. Aggression was considered sex-typed (masculine).',
    aim: 'To investigate whether children would imitate aggressive behaviour they had seen an adult model perform, in a new setting without the model present, and whether the sex of the model and child affected imitation.',
    sample: '72 children (36 boys, 36 girls) aged 37–69 months (mean about 52 months) from Stanford University Nursery School, USA. Two adult models (one male, one female) and one female experimenter.',
    method: 'Laboratory experiment with a matched groups design; data collected by controlled observation through a one-way mirror. IVs: model behaviour (aggressive, non-aggressive, none), sex of model, sex of child. DV: imitative and non-imitative aggression.',
    procedure: ['Children were rated for physical aggression, verbal aggression, aggression to objects and aggressive inhibition by the experimenter and a nursery teacher (high inter-rater reliability) and matched into groups. 24 formed a control group; 48 were split into 8 experimental groups of 6.', 'Stage 1 (modelling, ~10 min): the child played with potato prints and stickers while an adult in the corner either played quietly with tinker toys (non-aggressive) or attacked a 5-foot Bobo doll with distinctive acts – sitting on it and punching its nose, hitting it with a mallet, tossing it in the air, kicking it – with verbal aggression such as “Sock him in the nose” and “Pow”. Controls saw no model.', 'Stage 2 (mild aggression arousal): the child was taken to a room with attractive toys; after about 2 minutes the experimenter said these were her very best toys and she had decided to save them for other children.', 'Stage 3 (test, 20 min): the child was in a room with aggressive toys (3-foot Bobo, mallet, dart guns, tether ball) and non-aggressive toys (tea set, crayons, dolls, bears, cars, farm animals). Observers behind a one-way mirror recorded behaviour every 5 seconds (240 response units).', 'Categories included imitative physical aggression, imitative verbal aggression, partially imitative acts (e.g. mallet aggression on other toys), and non-imitative aggression (e.g. punching Bobo, gun play).'],
    results: ['Children who watched the aggressive model showed far more imitative physical and verbal aggression than those who saw the non-aggressive model or no model.', 'Boys showed more imitative physical aggression than girls; boys imitated the male model most (mean 25.8 vs 12.4 with the female model).', 'Girls showed more imitative verbal aggression with the female model (13.7 vs 2.0) but more physical aggression after the male model (7.2 vs 5.5).', 'Children who saw the non-aggressive model generally showed less aggression than the control group.'],
    conclusion: 'Observation of an aggressive model leads children to imitate that aggression in a new setting, even without reinforcement – supporting social learning theory. Children are more likely to imitate same-sex models and behaviour seen as sex-appropriate.',
    ev: { plus: ['Highly standardised lab procedure – shows cause and effect; replicable.', 'Matched groups controlled for children’s normal aggressiveness.', 'Behavioural categories and a second observer – high inter-rater reliability.'],
          minus: ['Bobo dolls are designed to be hit – demand characteristics, questionable validity for real aggression.', 'Ethical issues: children exposed to aggression and deliberately frustrated; no long-term follow-up.', 'Sample from one university nursery; artificial setting.'] },
    debates: { nn: 'Supports nurture – aggression learned through observation; boys’ greater physical aggression may also reflect nature.', children: 'Young children cannot give informed consent and were potentially harmed – though findings help protect children.', app: 'Raised concern about violent role models and media; adults should model non-aggressive behaviour.', indsit: 'The situation (the model) influenced aggression, but sex of child (individual) also mattered.' } },

  fagen2014: { opt: 'lrn', sub: 'al22', name: 'Fagen et al. (2014)', short: 'Elephant learning',
    ref: 'Fagen, A., Acharya, N. and Kaufman, G. E. (2014). Positive reinforcement training for a trunk wash in Nepal’s working elephants: Demonstrating alternatives to traditional elephant training techniques. Journal of Applied Animal Welfare Science, 17(2), 83–97.',
    context: 'Working elephants in Nepal are traditionally trained using punishment and negative reinforcement. Elephants need tuberculosis (TB) testing using a trunk wash, which requires cooperation. Operant conditioning suggests positive reinforcement – using a secondary reinforcer as a bridge, with shaping and chaining – could teach this humanely.',
    aim: 'To investigate whether secondary positive reinforcement (SPR) training could be used to train working elephants to voluntarily take part in a trunk wash, demonstrating an alternative to traditional training techniques.',
    sample: '5 female Asian elephants in Nepal: 4 juveniles (about 5–7 years old) and 1 adult (about 50 years old), chosen by opportunity sampling – docile, not pregnant or nursing, and with a mahout willing to take part.',
    method: 'Observation of a training programme with a before-and-after (repeated measures) element; success measured with a behavioural checklist (percentage of correct responses) and training time – quantitative data.',
    procedure: ['Bridge training: a short whistle blow (secondary reinforcer) was repeatedly paired with chopped bananas (primary reinforcer).', 'Five behaviours were trained individually: “trunk here” (trunk tip into trainer’s hand), “trunk up”, “steady”, “bucket” (trunk into a bucket) and “blow” – using shaping, luring and capturing.', 'The behaviours were then chained into the full trunk wash sequence.', 'Sessions took place in the morning and afternoon while elephants were in their stalls; mahouts were present for safety but did not interact; water was offered beforehand.', 'Performance tests of all behaviours learned so far began at session 10 and then occurred every fifth session, recording the percentage of correct responses.'],
    results: ['All four juvenile elephants learned the complete trunk wash sequence; the adult elephant made progress but did not learn the full sequence.', 'Total training time per elephant ranged from about 257 to 451 minutes.', '“Trunk here” required the most training; performance on the tests improved steadily over time.'],
    conclusion: 'Secondary positive reinforcement can successfully train working elephants to take part in a trunk wash for TB testing, providing a humane alternative to traditional punishment-based training; younger elephants may learn more readily.',
    ev: { plus: ['Real working elephants – high ecological validity and direct practical value.', 'Quantitative, objective checklist measures.', 'Ethical – rewards rather than punishment improve welfare.'],
          minus: ['Very small sample (5 female elephants) from one place.', 'No control group trained traditionally for comparison.', 'Training was adapted to each elephant, reducing standardisation.'] },
    debates: { animals: 'Animals benefited directly; ethical guidelines on rewards over aversive stimuli were met, though elephants were chained during training.', app: 'Shows mahouts and zoos a humane, effective way to train elephants for health care.', nn: 'New behaviours were learned (nurture), although age – a biological factor – affected success.' } },

  saavedra2002: { opt: 'lrn', sub: 'al32', name: 'Saavedra and Silverman (2002)', short: 'Button phobia',
    ref: 'Saavedra, L. M. and Silverman, W. K. (2002). Case study: disgust and a specific phobia of buttons. Journal of the American Academy of Child and Adolescent Psychiatry, 41(11), 1376–79.',
    context: 'Phobias are usually explained by classical conditioning and treated with exposure therapy that reduces fear. However, some phobias are based on disgust, which may be learned through evaluative learning and may not respond to fear-based treatment. Operant conditioning (contingency management) can also be used to reward facing the feared object.',
    aim: 'To investigate how classical conditioning (and operant conditioning) can be used to treat a child’s button phobia, targeting disgust as well as fear.',
    sample: 'One 9-year-old Hispanic-American boy with a specific phobia of buttons for about 4 years, referred by his mother to a child anxiety and phobia programme.',
    method: 'Case study using interviews (ADIS-C/P semi-structured interview with child and mother), rating scales (Feelings Thermometer 0–8; distress hierarchy) and observation; follow-ups at 6 and 12 months.',
    procedure: ['The boy and his mother were interviewed; he met the criteria for a specific phobia. The phobia began at age 5 when a bowl of buttons fell on him at school.', 'An 11-item hierarchy of button situations was created, from large denim jeans buttons (least distressing) to small clear plastic buttons (most); he rated distress on the 0–8 Feelings Thermometer.', 'Treatment 1: four sessions of exposure-based contingency management – gradual in vivo exposure up the hierarchy, with his mother rewarding (positively reinforcing) progress (30 min with the boy alone + 20 min with mother).', 'Treatment 2: imagery exposure – he imagined disgust-related button scenarios (e.g. buttons falling on him, hugging his mother while she wore buttons), described what he saw, felt and smelled, and used cognitive self-control to re-evaluate why buttons were disgusting.', 'He was assessed again at 6 and 12 months after treatment.'],
    results: ['During exposure with contingency management he completed the tasks, but his distress ratings did not fall (they increased between sessions) – disgust remained.', 'During imagery exposure his distress fell markedly, e.g. from 8 to 3 for imagining buttons falling on him.', 'At the 6- and 12-month follow-ups his improvement had been maintained and he no longer met the diagnosis for a button phobia.'],
    conclusion: 'The boy’s phobia was based on disgust, learned by evaluative learning, so exposure that targeted fear alone was not enough. Imagery exposure that targeted disgust successfully reduced his distress.',
    ev: { plus: ['Detailed case study with several techniques – triangulation.', 'Follow-ups show lasting improvement.', 'Useful application: assess and treat disgust in phobias.'],
          minus: ['A single child – cannot generalise.', 'Subjective self-ratings may be affected by demand characteristics/social desirability.', 'Retrospective account of the origin; treatments in a fixed order.'] },
    debates: { children: 'Mother consented and the child benefited, but exposure deliberately causes distress so must be handled carefully.', app: 'Therapists should assess disgust and may need imagery-based techniques.', nn: 'The phobia was learned from experience (nurture).' } }
});

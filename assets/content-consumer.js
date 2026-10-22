/* Consumer Psychology — Cambridge International A Level Psychology 9990 (syllabus for 2027), Specialist Option 2 */
window.PSY = window.PSY || { options: {}, studies: {} };

PSY.options.consumer = {
  id: 'consumer', name: 'Consumer Psychology', short: 'Consumer', emoji: '🛍️', color: '#ff7a45',
  blurb: 'Why we buy: shops, restaurants, decisions, products and adverts.',
  intro: `Consumer psychology is about how the <b>retail environment</b> (shops, restaurants, websites), our <b>decision-making</b>, <b>products</b> and <b>advertising</b> affect what we buy. Lots of it is about tricks sellers use – so it’s full of everyday examples you can use in answers.`,
  topics: [
  /* ───────────── 2.1 PHYSICAL ENVIRONMENT ───────────── */
  { id: 's1', code: '2.1', title: 'The physical environment', emoji: '🏬',
    subs: [
    { id: 's211', code: '2.1.1', title: 'Retail store design',
      inShort: 'The outside of a shop (storefront, windows, landscaping) draws people in. Inside, layouts can be grid, freeform or racetrack – and online shops have “virtual layouts” too.',
      notes: `
<h4>Store exterior design</h4>
<ul><li><b>Storefront</b>: the sign, entrance, materials and lighting – the shop’s first impression and brand image.</li>
<li><b>Window displays</b>: show products and style, attract attention and tempt passers-by inside.</li>
<li><b>Landscaping</b>: plants, flowers and greenery around the store make it feel more pleasant.</li>
<li>Example study: <b>Mower et al. (2012)</b> showed people images of a store front with and without landscaping and window displays. Both features increased how much people <b>liked</b> the store, which increased their intention to visit (patronage intentions).</li></ul>
<h4>Store interior layouts</h4>
<div class="three">
<div class="box"><b>🔲 Grid</b><br>Long parallel aisles (supermarkets). <i>+</i> efficient use of space, easy to find things, good for planned shopping. <i>−</i> boring, little browsing.</div>
<div class="box"><b>〰️ Freeform</b><br>Irregular, flowing displays (boutiques). <i>+</i> relaxed browsing, impulse buys, feels upmarket. <i>−</i> wastes space, can be confusing, costly.</div>
<div class="box"><b>🔁 Racetrack (loop)</b><br>One main path loops past every department (e.g. IKEA). <i>+</i> exposes shoppers to everything. <i>−</i> can feel forced; hard to “just grab one thing”.</div></div>
<h4>Virtual (online) store layouts</h4>
<ul><li>Online shops can also use grid, freeform or racetrack-style navigation.</li>
<li>Example study: <b>Vrechopoulos et al. (2004)</b> compared virtual grocery stores with different layouts in a lab experiment. The layout affected how <b>easy to use</b> and how <b>enjoyable</b> shoppers found the online store and how long they spent – so online layouts should be designed as carefully as physical ones.</li></ul>`,
      debates: ['culture', 'questionnaires', 'quantqual', 'objsubj', 'ecological'],
      vids: [['WTsQELtA5KA', '5 types of retail store layout', 'Your Retail Coach', '2:20'], ['kYNyXcHcmy8', 'The psychology of retail marketing', 'Marketing Society', '6:53']],
      terms: [['Grid layout', 'Parallel aisles; efficient and easy to navigate (supermarkets).'], ['Freeform layout', 'Irregular displays encouraging browsing (boutiques).'], ['Racetrack layout', 'A loop path that takes shoppers past every department.'], ['Patronage intention', 'How likely a consumer is to visit/shop at a store.']] },

    { id: 's212', code: '2.1.2', title: 'Sound and consumer behaviour', ks: 'north2003',
      inShort: 'Classical music in a restaurant made people spend more (North et al.). Loud background noise changes how food tastes – e.g. less sweet and salty (Woods et al.).',
      notes: `
<h4>Music in restaurants</h4>
<ul><li>Music affects mood, arousal and the <b>image</b> of a place. Music that “fits” (is congruent with) a product or setting can prime related ideas – e.g. French music in a wine shop increased sales of French wine (North et al., 1999).</li>
<li>➜ Key study <b>North et al. (2003)</b>: classical music made diners spend more than pop music or no music.</li>
<li>Explanation: classical music primes feelings of <b>sophistication and affluence</b>, so people act “in role” by buying more expensive items.</li></ul>
<h4>Background noise and the taste of food</h4>
<ul><li>Example study: <b>Woods et al. (2011)</b>: participants wearing headphones ate foods (e.g. crisps, biscuits) while hearing loud or quiet background noise. With <b>loud noise</b>, foods were rated <b>less sweet and less salty</b> but <b>crunchier</b>.</li>
<li>Why sound affects taste:
<ul><li><b>Attention</b> – noise distracts attention away from taste.</li>
<li><b>Cross-modal effects</b> – the brain combines senses; sounds (like crunch) change perceived texture and flavour.</li>
<li><b>Arousal/stress</b> from noise changes how we perceive food.</li></ul></li>
<li>🌍 Real world: airlines know food tastes blander in noisy planes, so meals are seasoned more strongly (tomato juice tastes better on planes!).</li></ul>`,
      debates: ['indsit', 'red', 'det', 'gen', 'validity'],
      vids: [['Tn9IpWEpHBc', 'North et al. (2003): music genres & restaurant spending', 'TheTeacherKind', '4:42'], ['CONe3iW-xww', 'Does sound affect taste? Try it yourself', 'BBC Earth Science', '6:17']],
      terms: [['Congruence (fit)', 'When music or atmosphere matches the product/setting, priming related choices.'], ['Priming', 'Exposure to one stimulus influences responses to a later one.'], ['Cross-modal perception', 'One sense (e.g. hearing) influencing another (e.g. taste).']] },

    { id: 's213', code: '2.1.3', title: 'Retail atmospherics',
      inShort: 'Mehrabian and Russell’s PAD model: the store environment affects Pleasure, Arousal and Dominance, which makes us approach or avoid. Scent can improve shopping; crowding usually makes it worse.',
      notes: `
<h4>Mehrabian and Russell’s PAD model (1974)</h4>
<p><b>Environmental stimuli</b> (music, scent, lighting, crowding) ➜ <b>emotional states</b> ➜ <b>approach or avoidance</b> behaviour.</p>
<ul><li><b>P</b>leasure – how happy/satisfied you feel.</li>
<li><b>A</b>rousal – how stimulated/excited you feel.</li>
<li><b>D</b>ominance – how much in control you feel.</li>
<li><b>Approach</b> behaviours: staying longer, exploring, spending more, returning. <b>Avoidance</b>: leaving, spending less.</li></ul>
<h4>Effects of odour (scent)</h4>
<ul><li>Pleasant ambient scents can improve mood and how people judge the store and products.</li>
<li>Example study: <b>Chebat and Michon (2003)</b>: a pleasant citrus scent was spread through a Canadian shopping mall. Shoppers rated the mall environment and product quality more positively, which was linked to more spending. They suggested scent works mainly by changing <b>thoughts/perceptions</b> (cognition) rather than just pleasure and arousal – a challenge to the PAD model.</li></ul>
<h4>Effects of crowding</h4>
<ul><li><b>Density</b> = number of people in a space; <b>crowding</b> = the unpleasant <i>feeling</i> that there are too many.</li>
<li>Crowding usually lowers <b>pleasure</b> and <b>dominance</b> (you feel less in control) ➜ avoidance.</li>
<li>Example study: <b>Machleit et al. (2000)</b>: in surveys of shoppers, perceived crowding reduced shopping satisfaction, but the effect depended on <b>expectations</b> (expecting crowds, e.g. at sales, made it less bad) and personal <b>tolerance</b> for crowding; emotions partly explained the link.</li></ul>
<p class="mem">🧠 PAD = “Pleased, Aroused, Dominant? Then you’ll stay and spend!”</p>`,
      debates: ['app', 'culture', 'questionnaires', 'quantqual', 'objsubj'],
      vids: [['FkVFzQjgUKU', 'How does music influence emotions in retail?', 'Entuned', '5:13'], ['qL8pVOe_8zQ', 'How grocery stores exploit consumer psychology', 'In Human Form', '12:15']],
      terms: [['PAD model', 'Mehrabian and Russell: environment → pleasure, arousal, dominance → approach/avoidance.'], ['Approach behaviour', 'Staying, exploring, spending and returning.'], ['Avoidance behaviour', 'Leaving, spending less, not returning.'], ['Crowding', 'The subjective, unpleasant feeling of too many people (vs objective density).']] }
    ],
    quiz: [
      ['A supermarket with long parallel aisles has a…', ['Freeform layout', 'Grid layout', 'Racetrack layout', 'Boutique layout'], 1, 'Grid layout – efficient and easy to navigate.'],
      ['IKEA’s one-way path past all departments is a…', ['Grid', 'Freeform', 'Racetrack', 'Virtual'], 2, 'Racetrack (loop) layout.'],
      ['In North et al. (2003), spending was highest with…', ['Pop music', 'No music', 'Classical music', 'Jazz'], 2, 'Classical music (about £32.52 per head vs about £29.50).'],
      ['Woods et al. (2011) found that loud background noise made food taste…', ['Sweeter and saltier', 'Less sweet and less salty', 'Exactly the same', 'Spicier'], 1, 'Less sweet and salty but crunchier.'],
      ['In the PAD model, “D” stands for…', ['Density', 'Desire', 'Dominance', 'Decision'], 2, 'Pleasure, Arousal, Dominance.'],
      ['Chebat and Michon (2003) used which type of scent?', ['Vanilla', 'Citrus', 'Coffee', 'Lavender'], 1, 'A citrus scent in a shopping mall.']
    ],
    exam: [
      { p: 3, q: '(a) Describe how sound can affect consumer behaviour. [6]  (b) Evaluate research into sound and consumer behaviour, including a discussion of determinism versus free will. [10]', guide: ['(a) Music in restaurants: North et al. (2003) – classical vs pop vs none, spend per head; priming/congruence.', '(a) Noise and taste: Woods et al. (2011) – loud noise reduces sweet/salty ratings; attention and cross-modal reasons.', '(b) Determinism: music “makes” us spend – environmental determinism; but people still choose (soft determinism).', '(b) Field experiment = high ecological validity but less control; lab = control but artificial.', '(b) Usefulness to restaurants; ethics of manipulation; generalisation across cultures; conclusion.'] },
      { p: 4, q: 'Plan a field experiment to investigate whether the tempo of music affects how long customers stay in a café. [10]', guide: ['Aim + hypothesis (directional, e.g. slow music → longer stays).', 'IV: slow vs fast tempo music (same volume, genre); DV: time from sitting to leaving, recorded by hidden observers or receipts.', 'Location: one café, alternating conditions on matched days/times (counterbalanced).', 'Controls: same menu, staff, volume, time of day.', 'Sample: opportunity sample of customers; ethics: public behaviour, no names, debrief issues.', 'Data: mean minutes per condition; bar chart.'] }
    ] },

  /* ───────────── 2.2 PSYCHOLOGICAL ENVIRONMENT ───────────── */
  { id: 's2', code: '2.2', title: 'The psychological environment', emoji: '🧭',
    subs: [
    { id: 's221', code: '2.2.1', title: 'Environmental influences on consumers',
      inShort: 'Wayfinding (finding your way) in malls is helped by signs and “you are here” maps. CCTV tracking shows different types of shopping trip and types of shopper.',
      notes: `
<h4>Wayfinding in shopping malls</h4>
<ul><li><b>Wayfinding</b> = how people find their way through an environment. In big malls, getting lost causes stress and fewer visits.</li>
<li>Helpful features: clear <b>signs</b>, <b>“you are here” maps</b> (best when aligned with the direction you’re facing), landmarks, simple layouts and good lighting.</li>
<li>Example study: <b>Dogu and Erkip (2000)</b> surveyed shoppers in a large mall in Ankara, Turkey. Shoppers often had difficulty finding their way; familiarity with the mall helped, and the researchers concluded that better signs and maps were needed.</li></ul>
<h4>Shopper spatial behaviour (tracked with CCTV)</h4>
<p>Researchers such as <b>Gil et al. (2009)</b> used <b>CCTV tracking</b> to record shoppers’ routes in supermarkets – objective data on real behaviour (but raises privacy/ethics issues).</p>
<p><b>Types of trip</b> (commonly described):</p>
<ul><li><b>Short</b> – uses only a small part of the store near the entrance, for a few items.</li>
<li><b>Round</b> – circles the store, usually around the outside (perimeter).</li>
<li><b>Central</b> – mostly uses the main central aisle(s).</li>
<li><b>Wave</b> – zig-zags up and down the aisles, covering most of the store.</li></ul>
<p><b>Five spatial behaviour patterns (types of shopper):</b></p>
<ul><li><b>Specialist</b> – knows the layout well and goes straight to specific items; direct route, little browsing.</li>
<li><b>Native</b> – a regular who follows familiar, habitual routes.</li>
<li><b>Tourist</b> – unfamiliar with the store; wanders, less predictable, often for leisure.</li>
<li><b>Explorer</b> – deliberately explores the whole store, browsing widely and discovering products.</li>
<li><b>Raider</b> – a quick, targeted visit (“in and out”), e.g. for offers or one item.</li></ul>`,
      debates: ['red', 'idio', 'questionnaires', 'gen', 'reliability'],
      vids: [['UT0xBbHl5Q4', 'How shopping malls are designed to overwhelm you', 'Architectural Digest', '18:12'], ['JoJg0657y-8', 'The invisible psychology behind shopping decisions', 'Mind Codes', '12:42']],
      terms: [['Wayfinding', 'How people navigate and find their way in an environment.'], ['You-are-here map', 'A map showing your current location; best when aligned with your view.'], ['CCTV tracking', 'Using video cameras to record shoppers’ routes objectively.'], ['Raider', 'A shopper making a quick targeted visit.'], ['Explorer', 'A shopper who explores the whole store.']] },

    { id: 's222', code: '2.2.2', title: 'Menu design psychology',
      inShort: 'Menu layout guides where diners look (eye-tracking). Items at the top or bottom of a list are chosen more (primacy/recency). Attractive food names increase choice.',
      notes: `
<h4>Menu design features</h4>
<ul><li><b>Positive features</b>: highlighting profitable dishes with boxes, photos or colour; placing them where eyes land first; tempting descriptions; prices written <b>without currency signs</b> (“12” not “$12.00”) and not lined up in a column (so diners don’t compare prices).</li>
<li><b>Negative features</b>: cluttered pages, too many choices, small/fancy fonts, prices in a neat right-hand column.</li>
<li>Example: <b>Pavesic (2005)</b> gave practical advice on menu design and on studying menus – including <b>eye-tracking</b>, which records exactly where and how long people look, to find the “sweet spots” on a page.</li></ul>
<h4>Primacy, recency and item position</h4>
<ul><li><b>Primacy effect</b>: items at the <b>start</b> of a list are remembered/chosen more. <b>Recency effect</b>: items at the <b>end</b> are too.</li>
<li>Example study: <b>Dayan and Bar-Hillel (2011)</b> changed the order of items on real café menus. Items at the <b>beginning or end</b> of a category list were chosen about 20% more often than the same items in the middle.</li></ul>
<h4>Food names</h4>
<ul><li>Descriptive, appealing names (“succulent Italian seafood fillet” vs “seafood fillet”) make dishes seem tastier and higher quality.</li>
<li>Example study: <b>Lockyer (2006)</b> found that the wording and names of menu items influenced what diners in New Zealand chose and how they perceived the food (alongside price).</li></ul>
<p class="tip">💡 Link to the AS study of memory: primacy/recency is classic cognitive psychology applied to food choice.</p>`,
      debates: ['app', 'fieldexp', 'objsubj', 'gen', 'validity'],
      vids: [['hdQb6pI7o6Q', 'The psychology of restaurant menu design', 'The Buy Mind', '5:06'], ['sbkbekz82wQ', 'Eye-tracking explained', 'Psyched!', '4:21']],
      terms: [['Eye-tracking', 'Technology that records where and how long a person looks.'], ['Primacy effect', 'Better recall/choice of items at the start of a list.'], ['Recency effect', 'Better recall/choice of items at the end of a list.'], ['Menu sweet spot', 'The place on a menu where diners look first, used for profitable items.']] },

    { id: 's223', code: '2.2.3', title: 'Consumer behaviour & personal space', ks: 'robson2011',
      inShort: 'We each have zones of personal space (Hall). Tables placed too close make diners uncomfortable (Robson et al.). People defend their place in queues, especially those directly behind an intruder (Milgram et al.).',
      notes: `
<h4>Hall’s four zones of personal space (proxemics)</h4>
<table class="mini"><tr><th>Zone</th><th>Distance (approx.)</th><th>Used for</th></tr>
<tr><td>Intimate</td><td>0–45 cm</td><td>Close family, partners</td></tr>
<tr><td>Personal</td><td>45 cm–1.2 m</td><td>Friends, conversations</td></tr>
<tr><td>Social</td><td>1.2–3.6 m</td><td>Strangers, work, shops</td></tr>
<tr><td>Public</td><td>over 3.6 m</td><td>Speeches, public settings</td></tr></table>
<h4>Why personal-space invasion feels bad (functions)</h4>
<ul><li><b>Overload</b> – too much stimulation (noise, sights, smells) to cope with.</li>
<li><b>Arousal</b> – invasion raises arousal, which we interpret as stress (or excitement).</li>
<li><b>Behaviour constraint</b> – our freedom is reduced (we can’t talk privately or move freely).</li></ul>
<p>➜ Key study <b>Robson et al. (2011)</b>: how diners respond to table spacing in restaurants.</p>
<h4>Defending a place in a queue</h4>
<ul><li>Queues are little social systems with rules (“first come, first served”).</li>
<li>Example study: <b>Milgram et al. (1986)</b>: confederates calmly pushed into 129 queues in New York (e.g. ticket lines). With <b>one</b> intruder, someone objected in about <b>54%</b> of queues; with <b>two</b> intruders, about <b>91%</b>. Most objections came from people <b>directly behind</b> the intrusion point. When “buffers” (passive confederates) stood behind the intruder, objections dropped – people expected the buffers to complain.</li>
<li>Key factors: <b>nature</b> of intrusion, <b>number</b> of intrusions, <b>social structure</b> of the queue and <b>responses</b> of people queuing.</li></ul>`,
      debates: ['indsit', 'culture', 'observations', 'quantqual', 'ethics'],
      vids: [['pw3FZ3xOBVo', 'Proxemics: the study of personal space', 'Vox', '4:45'], ['d_J9UxKBl7o', 'Hall’s proxemics in nonverbal communication', 'Course Please', '4:49']],
      terms: [['Proxemics', 'The study of how people use space (Hall).'], ['Personal space', 'The invisible area around a person they feel is “theirs”.'], ['Behaviour constraint', 'Reduced freedom when space is invaded.'], ['Overload', 'Too much stimulation when space is invaded.'], ['Buffer (queue)', 'A person standing behind an intruder who “should” object instead.']] }
    ],
    quiz: [
      ['A “you are here” map works best when it is…', ['Very detailed', 'Aligned with the direction you face', 'At the exit', 'Coloured red'], 1, 'Alignment reduces mental rotation and errors.'],
      ['A shopper who goes straight to specific items they know the location of is a…', ['Tourist', 'Explorer', 'Specialist', 'Raider'], 2, 'Specialists know the layout and take direct routes.'],
      ['Dayan and Bar-Hillel (2011) found items were chosen more when placed…', ['In the middle of a list', 'At the beginning or end of a list', 'With no price', 'In bold only'], 1, 'Primacy and recency – about 20% more popular.'],
      ['Hall’s personal zone is roughly…', ['0–45 cm', '45 cm–1.2 m', '1.2–3.6 m', 'over 3.6 m'], 1, 'Personal distance is 45 cm to 1.2 m.'],
      ['In Milgram et al. (1986), objections were most likely with…', ['No intruders', 'One intruder', 'Two intruders', 'Buffers present'], 2, 'Two intruders → about 91% objection rate.'],
      ['In Robson et al. (2011), the closest table distance tested was…', ['2 inches', '6 inches', '24 inches', '1 metre'], 1, '6, 12 and 24 inches were tested.']
    ],
    exam: [
      { p: 3, q: '(a) Describe research into consumer behaviour and personal space. [6]  (b) Evaluate this research, including a discussion of cultural differences. [10]', guide: ['(a) Hall’s zones and functions (overload, arousal, behaviour constraint).', '(a) Robson et al. (2011): survey, 6/12/24 inches, romantic scenario worst, women less comfortable.', '(a) Milgram et al. (1986): queue intrusions, 54% vs 91%, buffers.', '(b) Culture: personal space norms differ (contact vs non-contact cultures) – US samples only.', '(b) Field observation (Milgram) high ecological validity vs ethical issues; self-report survey (Robson) – imagined scenarios lack validity.', '(b) Usefulness for restaurant design; conclusion.'] },
      { p: 4, q: 'Robson et al. (2011) used an online survey. (a) Explain why using images of tables increases reliability. (b) Explain one weakness of asking about imagined dining scenarios.', guide: ['(a) Everyone saw the same standardised images/distances → consistent stimulus, replicable.', '(b) Imagined, not real, experiences → behavioural intentions may not match real behaviour (low ecological validity).'] }
    ] },

  /* ───────────── 2.3 DECISION-MAKING ───────────── */
  { id: 's3', code: '2.3', title: 'Consumer decision-making', emoji: '🤔',
    subs: [
    { id: 's231', code: '2.3.1', title: 'Models & strategies of decision-making',
      inShort: 'Utility theory says we choose the best option logically; satisficing says we pick the first “good enough” one; prospect theory says losses hurt more than gains. Strategies can be compensatory, non-compensatory or partially compensatory.',
      notes: `
<h4>Models of consumer decision-making</h4>
<ul><li><b>Utility theory</b> (rational choice): consumers weigh up all options and choose the one that gives the greatest <b>expected utility</b> (benefit/value). <i>Example:</i> comparing every phone’s price, camera and battery before buying. Criticism: unrealistic – we don’t have the time, information or brainpower.</li>
<li><b>Satisficing</b> (Simon, 1956): people have <b>bounded rationality</b>, so they choose the <b>first option that is “good enough”</b> (satisfies + suffices). <i>Example:</i> buying the first pair of shoes that fit and look fine.</li>
<li><b>Prospect theory</b> (Kahneman and Tversky, 1979): we judge outcomes as <b>gains or losses</b> from a <b>reference point</b>, and <b>losses hurt more than equal gains feel good</b> (<b>loss aversion</b>). Framing matters: “save £20” vs “avoid losing £20”. <i>Example:</i> “Only 2 left – don’t miss out!”</li></ul>
<h4>Decision-making strategies</h4>
<ul><li><b>Compensatory</b>: a weakness in one feature can be <b>made up for</b> by strength in another; you consider all attributes. <i>Example:</i> a laptop with a poor battery chosen because its speed and price are great.</li>
<li><b>Non-compensatory</b>: a weakness <b>cannot</b> be made up – options are rejected if they fail a key rule. E.g. <b>conjunctive</b> (must meet a minimum on every feature), <b>lexicographic</b> (choose the best on the most important feature), <b>elimination by aspects</b>.</li>
<li><b>Partially compensatory</b>: a mix – e.g. compare options on each feature and pick the one that wins on <b>most</b> features (majority of confirming dimensions), or count good vs bad features (frequency of good and bad features).</li></ul>
<h4>Internet shopping and website design</h4>
<ul><li>Websites can support different strategies – e.g. comparison tables help compensatory decisions; filters (“under £50”, “4 stars+”) support non-compensatory ones.</li>
<li>Example study: <b>Jedetski et al. (2002)</b> studied how the design of shopping websites (e.g. tools that help compare products) affected consumers’ decision-making and satisfaction, concluding that sites should support the strategies shoppers want to use.</li></ul>`,
      debates: ['app', 'culture', 'red', 'det', 'idio'],
      vids: [['wYN1bfOSQSY', 'What is prospect theory? (easiest explanation)', 'Helpful Professor', '4:27'], ['IdNy2qWzcjA', 'Compensatory & non-compensatory decision rules', 'Marketing Study Guide', '5:55']],
      terms: [['Utility theory', 'Rational model: choose the option with the highest expected value.'], ['Satisficing', 'Choosing the first option that is good enough (Simon).'], ['Prospect theory', 'Losses loom larger than gains; outcomes judged from a reference point.'], ['Loss aversion', 'Losses feel worse than equivalent gains feel good.'], ['Compensatory strategy', 'Strengths in some attributes can make up for weaknesses in others.'], ['Non-compensatory strategy', 'A weakness on a key attribute rules an option out.']] },

    { id: 's232', code: '2.3.2', title: 'Choice heuristics',
      inShort: 'Heuristics are mental shortcuts: availability, representativeness, recognition, take-the-best and anchoring. Sellers use them, e.g. multiple-unit pricing and purchase limits (Wansink et al.).',
      notes: `
<h4>Five heuristics (mental shortcuts)</h4>
<ul><li><b>Availability</b>: judging how likely/common something is by how easily examples come to mind. <i>Example:</i> buying a brand you’ve just seen advertised everywhere.</li>
<li><b>Representativeness</b>: judging by how similar something is to a typical example (stereotype), ignoring other information. <i>Example:</i> assuming a product in plain packaging is cheap/low quality.</li>
<li><b>Recognition</b>: if you recognise one option but not the other, you assume the recognised one is better. <i>Example:</i> choosing a famous brand over an unknown one.</li>
<li><b>Take-the-best</b> (Gigerenzer): look at cues in order of importance and decide using the <b>first cue that tells the options apart</b>. <i>Example:</i> “Both phones cost the same – which has the better camera? That one.”</li>
<li><b>Anchoring</b>: relying too much on the first number you see (the anchor) and adjusting too little. <i>Example:</i> “Was £100, now £60” feels like a bargain.</li></ul>
<h4>Point-of-purchase decisions</h4>
<ul><li><b>Multiple-unit pricing</b>: “3 for £3” instead of “£1 each” – the number 3 acts as an anchor.</li>
<li><b>Suggestive selling</b>: e.g. purchase limits (“Limit 12 per person”) or “buy 18 for your freezer”.</li>
<li>Example study: <b>Wansink et al. (1998)</b> – in supermarkets, multiple-unit promotions increased sales compared with single-unit pricing, and a sign saying “Limit 12 per person” led shoppers to buy about <b>7 cans of soup</b> on average compared with about <b>3</b> with no limit – an anchoring effect.</li></ul>
<h4>Heuristics and decision-making styles</h4>
<ul><li>People differ in style – e.g. more <b>rational</b>/deliberate vs more <b>intuitive</b>/spontaneous.</li>
<li>Example study: <b>del Campo et al. (2016)</b> investigated whether people’s decision-making styles predict how much they fall for heuristic biases such as anchoring, availability and representativeness, finding that style is linked to some biases but not others.</li></ul>`,
      debates: ['app', 'indsit', 'experiments', 'quantqual', 'objsubj'],
      vids: [['nSFHFfevfms', 'Types of heuristics: availability, representativeness & base rates', 'appsychfun', '7:09'], ['-6JDRXQB3LU', 'The anchoring heuristic', 'Opinion Science', '2:57']],
      terms: [['Heuristic', 'A mental shortcut that makes decisions quicker but can cause errors.'], ['Availability heuristic', 'Judging likelihood by how easily examples come to mind.'], ['Representativeness heuristic', 'Judging by similarity to a typical example.'], ['Recognition heuristic', 'Choosing the option you recognise.'], ['Take-the-best', 'Deciding using the first important cue that distinguishes options.'], ['Anchoring', 'Being overly influenced by an initial number.']] },

    { id: 's233', code: '2.3.3', title: 'Mistakes in decision-making', ks: 'hall2010',
      inShort: 'System 1 is fast and automatic, System 2 slow and logical – System 1 causes many errors. Choice blindness: people often don’t notice their choice was swapped (Hall et al.). Ads compete in memory through interference.',
      notes: `
<h4>Thinking fast and slow: System 1 and System 2 (Kahneman)</h4>
<div class="two">
<div class="box"><b>⚡ System 1</b><ul><li>Fast, automatic, intuitive, emotional, effortless.</li><li><i>Example:</i> grabbing your usual cereal, impulse-buying sweets at the till.</li></ul></div>
<div class="box"><b>🐢 System 2</b><ul><li>Slow, deliberate, logical, effortful.</li><li><i>Example:</i> comparing mortgage deals or reading phone specs carefully.</li></ul></div></div>
<p>Many errors happen because we use System 1 when System 2 is needed. <b>Shleifer (2012)</b> reviewed Kahneman’s ideas and their importance for economics and consumer behaviour.</p>
<h4>Choice blindness</h4>
<ul><li>People often fail to notice when the option they chose is secretly swapped – and then happily give reasons for the choice they <b>didn’t</b> make.</li>
<li>Shows we don’t always know why we choose; we <b>defend</b> choices after the event.</li>
<li>➜ Key study <b>Hall et al. (2010)</b>: jam and tea choice blindness in a supermarket.</li></ul>
<h4>Consumer memory for advertising: interference</h4>
<ul><li><b>Retroactive interference</b>: new information (later ads) disrupts memory for older information (an earlier ad).</li>
<li><b>Proactive interference</b>: old information (earlier ads) disrupts learning new information.</li>
<li>Example study: <b>Burke and Srull (1988)</b>: participants saw ads for a target brand plus other ads. Recall of the target brand’s information was <b>worse when the other ads were for similar products</b> (same product category), through both proactive and retroactive interference – but not when they were for different products.</li>
<li>🌍 Application: avoid placing your ad next to competitors’ ads.</li></ul>`,
      debates: ['indsit', 'det', 'experiments', 'interviews', 'reliability'],
      vids: [['Cfd8z3l3TYk', 'Thinking fast and slow – System 1 & System 2', 'HowtoDoit', '3:50'], ['_VPcl04Adh8', 'BBC: choice blindness for the taste of jam', 'ChoiceBlindnessLab', '2:16'], ['tuEGoAabL9o', 'Choice blindness – Petter Johansson (TEDx)', 'TEDx Talks', '16:03']],
      terms: [['System 1', 'Fast, automatic, intuitive thinking.'], ['System 2', 'Slow, deliberate, logical thinking.'], ['Choice blindness', 'Failing to notice that your chosen option has been swapped.'], ['Retroactive interference', 'New learning disrupts memory of old information.'], ['Proactive interference', 'Old learning disrupts memory of new information.']] }
    ],
    quiz: [
      ['Choosing the first option that is “good enough” is…', ['Utility theory', 'Satisficing', 'Prospect theory', 'Anchoring'], 1, 'Simon’s satisficing (bounded rationality).'],
      ['“Losses loom larger than gains” comes from…', ['Prospect theory', 'Utility theory', 'PAD model', 'Satisficing'], 0, 'Kahneman and Tversky’s prospect theory.'],
      ['A strategy where a poor battery can be made up for by a great camera is…', ['Non-compensatory', 'Compensatory', 'Lexicographic', 'Conjunctive'], 1, 'Compensatory strategies allow trade-offs.'],
      ['“Was £100, now £60” mainly uses…', ['Availability', 'Anchoring', 'Recognition', 'Take-the-best'], 1, 'The original price is an anchor.'],
      ['Wansink et al. (1998): with “Limit 12 per person”, shoppers bought about…', ['1 can', '3 cans', '7 cans', '12 cans'], 2, 'About 7 cans vs about 3 with no limit.'],
      ['In Hall et al. (2010), how many manipulated trials were detected overall?', ['Almost all', 'About half', 'No more than a third', 'None'], 2, 'No more than a third of manipulations were detected.'],
      ['An earlier ad making it harder to remember a newer ad is…', ['Retroactive interference', 'Proactive interference', 'Primacy', 'Choice blindness'], 1, 'Proactive = old disrupts new.']
    ],
    exam: [
      { p: 3, q: '(a) Describe choice heuristics used by consumers. [6]  (b) Evaluate research into choice heuristics, including a discussion of individual and situational explanations. [10]', guide: ['(a) Availability, representativeness, recognition, take-the-best, anchoring with examples.', '(a) Point of purchase: Wansink et al. (1998) multiple-unit pricing and purchase limits.', '(b) Situational: store signs and prices steer choices. Individual: decision-making styles (del Campo et al., 2016).', '(b) Field experiments (Wansink) – ecological validity vs control.', '(b) Usefulness, ethics of manipulating shoppers; conclusion.'] },
      { p: 4, q: 'Hall et al. (2010) used a field experiment in a supermarket. Explain one strength and one weakness of collecting data in this setting.', guide: ['Strength: real shoppers in a natural environment → high ecological validity; shoppers naïve to the aim.', 'Weakness: less control over extraneous variables (noise, time pressure, who stopped) and volunteer-type sample of passers-by.'] }
    ] },

  /* ───────────── 2.4 THE PRODUCT ───────────── */
  { id: 's4', code: '2.4', title: 'The product', emoji: '📦',
    subs: [
    { id: 's241', code: '2.4.1', title: 'Packaging & positioning', ks: 'becker2011',
      inShort: 'Gift-wrapping changes how gifts are perceived. Package shape and colour change how food tastes (Becker et al.). Products in the centre of a shelf get more attention and are chosen more (central gaze cascade).',
      notes: `
<h4>Gift-wrapping</h4>
<ul><li><b>Why we wrap gifts</b>: creates <b>surprise</b> and anticipation, shows <b>effort and thought</b>, follows <b>social norms/ritual</b>, and makes the moment of opening special.</li>
<li><b>Types</b>: elaborate/neat paper and bows vs plain or sloppy wrapping; bags; no wrapping.</li>
<li><b>Beliefs of giver vs recipient</b>: givers usually think neat wrapping makes the gift better. Research suggests wrapped gifts put recipients in a good mood and are liked more (Howard, 1992) – but expectations matter: <b>neatly</b> wrapped gifts can raise expectations, so from a <b>friend</b> a <b>sloppily</b> wrapped gift may be liked <i>more</i> because it beats expectations (Rixom et al., 2020).</li></ul>
<h4>Food package design</h4>
<ul><li>Packaging features (shape, colour, materials) carry meanings that “transfer” to the product – <b>sensation transference</b>.</li>
<li>➜ Key study <b>Becker et al. (2011)</b>: angular packages made yoghurt taste stronger.</li></ul>
<h4>Attention and shelf position</h4>
<ul><li><b>Planograms</b>: diagrams that show exactly where each product goes on the shelves. Brands pay for good positions; “<b>eye level is buy level</b>”.</li>
<li><b>Central gaze cascade effect</b>: people look more at products in the <b>horizontal centre</b> of a display, and their gaze increasingly focuses (“cascades”) on the item they end up choosing ➜ central items are chosen more.</li>
<li><b>Eye-tracking</b> measures attention objectively.</li>
<li>Example study: <b>Atalay et al. (2012)</b> used eye-tracking with product displays: brands in the centre received more visual attention and were chosen more often, even though shoppers didn’t realise position influenced them.</li></ul>`,
      debates: ['red', 'det', 'gen', 'objsubj', 'validity'],
      vids: [['GSWflrXFw5M', 'Key study: food package design & taste – Becker et al. (2011)', 'TheTeacherKind', '9:10'], ['T8L0p8ImE8Q', 'How brands persuade you with packaging', 'Boonmind', '8:37']],
      terms: [['Sensation transference', 'Qualities of a package (shape, colour) transfer to how the product is perceived.'], ['Planogram', 'A diagram showing where products are placed on shelves.'], ['Central gaze cascade effect', 'More attention to and choice of items in the centre of a display.'], ['Eye level is buy level', 'Products at eye level are noticed and bought more.']] },

    { id: 's242', code: '2.4.2', title: 'Selling the product',
      inShort: 'Sales techniques can focus on the customer, the competitor or the product. Disrupt-then-reframe confuses then persuades – it works best when people need “cognitive closure”. Cialdini’s six principles help close a sale.',
      notes: `
<h4>Sales techniques</h4>
<ul><li><b>Customer-focused</b>: discovering the customer’s needs, listening, solving their problem ➜ builds trust and a <b>long-term</b> buyer–seller relationship.</li>
<li><b>Competitor-focused</b>: comparing with rival products and stressing advantages over them ➜ can work but may seem negative or pushy.</li>
<li><b>Product-focused</b>: emphasising the product’s features and benefits (“hard sell”) ➜ quick sale but weaker relationship if the product doesn’t meet the customer’s needs.</li></ul>
<h4>Disrupt-then-reframe (DTR)</h4>
<ul><li>The seller says something slightly odd to <b>disrupt</b> normal thinking (“It’s 300 pennies… that’s just £3”), then <b>reframes</b> the offer positively (“…it’s a bargain!”). The confusion lowers resistance.</li>
<li><b>Need for cognitive closure</b> (NFCC): the desire for a firm answer and to end uncertainty. People high in NFCC accept the reframe quickly to end confusion.</li>
<li>Factors that <b>increase</b> NFCC: time pressure, tiredness, noise, boredom, alcohol.</li>
<li>Example study: <b>Kardes et al. (2007)</b> found DTR was more persuasive for people with a <b>high need for cognitive closure</b> (and when the reframing message was strong).</li></ul>
<h4>Cialdini’s six ways to close a sale (principles of influence)</h4>
<ol><li><b>Reciprocity</b> – give something first (free sample) and people feel they owe you.</li>
<li><b>Commitment and consistency</b> – get a small “yes” first; people want to act consistently.</li>
<li><b>Social proof</b> – “Best seller!”, “thousands of 5-star reviews”.</li>
<li><b>Liking</b> – we buy from people we like (friendly, similar, compliments).</li>
<li><b>Authority</b> – experts/doctors recommend it.</li>
<li><b>Scarcity</b> – “limited time”, “only 3 left”.</li></ol>
<p class="mem">🧠 “<b>R</b>eally <b>C</b>ool <b>S</b>ellers <b>L</b>ove <b>A</b>ll <b>S</b>ales” = Reciprocity, Commitment, Social proof, Liking, Authority, Scarcity.</p>`,
      debates: ['app', 'culture', 'det', 'idio', 'fieldexp'],
      vids: [['1_urunjhCsw', 'Robert Cialdini explains the principles of influence', 'Roger Dooley', '5:45'], ['_DEEWxw6DCk', 'The disrupt-then-reframe technique in sales', 'LearningPsychology', '6:00']],
      terms: [['Disrupt-then-reframe', 'A persuasion technique: an odd statement disrupts thinking, then the offer is reframed positively.'], ['Need for cognitive closure', 'The desire for a definite answer and to avoid ambiguity.'], ['Reciprocity', 'Feeling obliged to return a favour.'], ['Social proof', 'Following what other people do.'], ['Scarcity', 'Things seem more valuable when rare or limited.']] },

    { id: 's243', code: '2.4.3', title: 'Buying the product',
      inShort: 'The Engel–Kollat–Blackwell model describes the stages of buying. Store choice depends on things like convenience and products, and differs by age and gender. After buying, we may feel post-purchase dissonance.',
      notes: `
<h4>The Engel–Kollat–Blackwell (EKB) model</h4>
<p>A model of the buyer’s decision process, with <b>inputs</b> (stimuli like adverts), <b>information processing</b> (exposure ➜ attention ➜ comprehension ➜ acceptance ➜ retention) and a <b>decision process</b>:</p>
<ol><li><b>Need/problem recognition</b> – “My phone is broken.”</li>
<li><b>Information search</b> – internal (memory) and external (reviews, friends).</li>
<li><b>Evaluation of alternatives</b> – comparing brands/features.</li>
<li><b>Purchase</b> – where and when to buy.</li>
<li><b>Outcomes / post-purchase evaluation</b> – satisfaction or dissonance, which feeds back into future choices.</li></ol>
<p>Influenced by <b>individual</b> variables (motives, personality, lifestyle) and <b>environmental</b> variables (culture, family, social class, situation).</p>
<h4>Deciding where to buy (store choice)</h4>
<ul><li>Reasons: <b>location/convenience</b>, price, product range and quality (<b>merchandise</b>), service, ambience, store image, parking.</li>
<li>Demographics: e.g. older shoppers may value convenience and service; younger shoppers may value ambience, brands and variety; gender differences in priorities.</li>
<li>Example study: <b>Sinha et al. (2002)</b> surveyed shoppers in India about why they chose particular stores; <b>convenience</b> and <b>merchandise</b> were the most common reasons, and reasons varied with demographics such as age and gender.</li></ul>
<h4>Post-purchase cognitive dissonance</h4>
<ul><li>Festinger: an uncomfortable feeling of tension when our beliefs and actions don’t match – after buying: “Did I make the right choice?” (<b>buyer’s remorse</b>).</li>
<li><b>Increases</b> when: the purchase is expensive/important, hard to reverse, there were attractive alternatives, the buyer felt pressured or had little knowledge.</li>
<li><b>Reduced</b> by: seeking positive information/reviews, avoiding negative information, returning the product, convincing yourself it was right; sellers help with warranties, follow-up messages and easy returns.</li>
<li>Example study: <b>Nordvall (2014)</b> investigated post-purchase dissonance in everyday grocery shopping in Sweden, showing that dissonance can occur even for ordinary low-cost purchases and that shoppers use justifications to reduce it.</li></ul>`,
      debates: ['culture', 'red', 'idio', 'objsubj', 'validity'],
      vids: [['CRY7428UBls', 'Engel Kollat Blackwell (EKB) model', 'Kanwal Sidhu', '3:38'], ['G1-vaIe2FGM', 'Cognitive dissonance (definition + 3 examples)', 'Practical Psychology', '5:26']],
      terms: [['EKB model', 'Engel–Kollat–Blackwell model: need recognition, information search, evaluation, purchase, outcomes.'], ['Post-purchase dissonance', 'Uncomfortable doubt after buying (buyer’s remorse).'], ['Cognitive dissonance', 'Tension from holding inconsistent beliefs and actions (Festinger).'], ['Store choice', 'Why consumers choose one shop over another.']] }
    ],
    quiz: [
      ['In Becker et al. (2011), yoghurt from an angular package was rated as…', ['Sweeter', 'More intense/stronger tasting', 'Less healthy', 'Cheaper'], 1, 'Angular shapes transferred “intensity” to taste.'],
      ['A diagram showing where products go on shelves is a…', ['Planogram', 'Heuristic', 'Storyboard', 'Racetrack'], 0, 'Planogram.'],
      ['The central gaze cascade effect means…', ['Top shelf items sell most', 'Items in the horizontal centre get more attention and are chosen more', 'People look at prices first', 'Cheap items attract the eye'], 1, 'Atalay et al. (2012).'],
      ['“300 pennies – that’s just £3… a bargain!” is…', ['Social proof', 'Disrupt-then-reframe', 'Reciprocity', 'Anchoring'], 1, 'Disrupt (odd phrasing) then reframe.'],
      ['Which is NOT one of Cialdini’s principles?', ['Scarcity', 'Authority', 'Liking', 'Dominance'], 3, 'Dominance is from the PAD model.'],
      ['Post-purchase dissonance is likely to be highest for…', ['A cheap snack', 'An expensive, hard-to-return car', 'A free sample', 'A routine purchase'], 1, 'Important, costly, irreversible purchases increase dissonance.']
    ],
    exam: [
      { p: 3, q: '(a) Describe sales techniques and interpersonal influence techniques. [6]  (b) Evaluate these techniques, including a discussion of the application of psychology to everyday life. [10]', guide: ['(a) Customer/competitor/product-focused techniques and buyer–seller relationship.', '(a) Disrupt-then-reframe and NFCC (Kardes et al., 2007); Cialdini’s six principles.', '(b) Application: widely used in shops and online – useful for sellers, and for consumers to protect themselves.', '(b) Ethics: manipulation, vulnerable groups; culture (relationship-based selling); evidence quality; conclusion.'] },
      { p: 4, q: 'Becker et al. (2011) asked shoppers to rate yoghurt. Suggest how the study could be changed to increase ecological validity.', guide: ['Run it as a field experiment in real homes/shops over several weeks.', 'Measure real purchases or repeat buying (objective) rather than ratings only.', 'Use real brands and real shelf settings.'] }
    ] },

  /* ───────────── 2.5 ADVERTISING ───────────── */
  { id: 's5', code: '2.5', title: 'Advertising', emoji: '📺',
    subs: [
    { id: 's251', code: '2.5.1', title: 'Types of advertising & techniques',
      inShort: 'The Yale model: who says what, through which medium, to whom, with what effect. Adverts appear in print, on TV, online and on phones – eye-tracking and EEG measure their impact. Lauterborn’s 4 Cs: consumer, cost, convenience, communication.',
      notes: `
<h4>The Yale model of communication (Hovland et al., 1953)</h4>
<p>“<b>Who</b> says <b>what</b>, by what <b>means</b>, to <b>whom</b>, with what <b>effect</b>?” Five features that affect persuasion:</p>
<ol><li><b>Source</b> (communicator) – credibility (expertise, trustworthiness) and attractiveness/likeability.</li>
<li><b>Message</b> – one-sided vs two-sided arguments, fear appeals, order (primacy/recency), repetition.</li>
<li><b>Medium/channel</b> – TV, print, internet, face to face.</li>
<li><b>Audience</b> – age, intelligence, self-esteem, mood, existing attitudes.</li>
<li><b>Effect/response</b> – attitude change happens through <b>attention ➜ comprehension ➜ acceptance</b> (and retention).</li></ol>
<p class="tip">💡 Textbooks label the five features slightly differently – the key idea is that source, message, medium and audience all affect whether an advert changes attitudes.</p>
<h4>Advertising media</h4>
<ul><li><b>Printed</b> (newspapers, magazines, posters) – can be read at your own pace; targeted readership.</li>
<li><b>Television</b> – sound + moving images, huge reach, but expensive and easy to skip.</li>
<li><b>Internet</b> – banners, pop-ups, social media, personalised targeting.</li>
<li><b>Smartphone</b> – apps, notifications, location-based ads.</li>
<li><b>Measuring impact</b>: <b>eye-tracking</b> (attention) and <b>EEG</b> (brain activity) give objective data beyond self-report.</li>
<li>Example study: <b>Ciceri et al. (2020)</b> compared newspaper ads on paper, as a PDF on a tablet and on a website, using eye-tracking, EEG and memory tests. Ads on paper and tablet got <b>more visual attention</b> than on the website, and the <b>website performed worst</b> for attention and memory – supporting “<b>banner blindness</b>”.</li></ul>
<h4>Lauterborn’s 4 Cs marketing mix model (1990)</h4>
<p>A customer-centred update of the traditional 4 Ps:</p>
<table class="mini"><tr><th>4 Cs</th><th>replaces</th><th>Meaning</th></tr>
<tr><td><b>Consumer</b> (wants & needs)</td><td>Product</td><td>Make what customers actually want</td></tr>
<tr><td><b>Cost</b></td><td>Price</td><td>Total cost to the customer (money, time, effort)</td></tr>
<tr><td><b>Convenience</b></td><td>Place</td><td>How easy it is to buy</td></tr>
<tr><td><b>Communication</b></td><td>Promotion</td><td>Two-way dialogue, not just one-way ads</td></tr></table>`,
      debates: ['app', 'culture', 'objsubj', 'gen', 'validity'],
      vids: [['tnwJKTQU4gs', 'The Yale attitude change approach', 'Social Science Explainer', '3:15'], ['DKFjbqZWmjw', '4Cs vs 4Ps of marketing', 'Educrawl', '4:44']],
      terms: [['Yale model', 'Persuasion depends on the source, message, medium and audience.'], ['Source credibility', 'How expert and trustworthy the communicator seems.'], ['Banner blindness', 'Website users ignoring advertising banners.'], ['4 Cs', 'Lauterborn: consumer, cost, convenience, communication.'], ['EEG', 'Electroencephalography: recording electrical brain activity from the scalp.']] },

    { id: 's252', code: '2.5.2', title: 'Advertising–consumer interaction', ks: 'snyder1985',
      inShort: 'High self-monitors respond to image-based ads; low self-monitors respond to quality claims (Snyder and DeBono). Product placement in films influences children’s choices through mere exposure and reminders (Auty and Lewis).',
      notes: `
<h4>Advertising and personality: self-monitoring</h4>
<ul><li><b>Self-monitoring</b> (Snyder, 1974): how much people adjust their behaviour to fit social situations.</li>
<li><b>High self-monitors</b> care about the image they present ➜ respond to <b>“soft sell” image</b> adverts (how the product makes you look).</li>
<li><b>Low self-monitors</b> act on their inner values ➜ respond to <b>“hard sell” quality</b> adverts (what the product actually does).</li>
<li>➜ Key study <b>Snyder and DeBono (1985)</b> – focus on study 3.</li></ul>
<h4>Product placement in films</h4>
<ul><li>Brands appear within films/TV shows (a character drinks a branded cola).</li>
<li>Explanations: <b>mere exposure effect</b> (repeated exposure creates liking/familiarity) and <b>reminders</b> (it brings an already-known brand to mind).</li>
<li>Example study: <b>Auty and Lewis (2004)</b>: children (aged about 6–7 and 11–12) watched a clip from <i>Home Alone</i> in which Pepsi was spilled and named, or a control clip. Afterwards, offered a choice of Pepsi or Coke, <b>62%</b> of those who saw the Pepsi clip chose Pepsi compared with <b>42%</b> of the control group. Children who had seen the film before were even more affected – a <b>reminder</b> effect.</li></ul>`,
      debates: ['children', 'det', 'selfreport', 'quantqual', 'validity'],
      vids: [['PRJoG3BJyF0', 'Self-monitoring & advertising: Snyder & DeBono', 'TheTeacherKind', '6:54'], ['L-2Vv4fTsyQ', 'The mere exposure effect: the science behind ads', 'Sprouts', '5:28']],
      terms: [['Self-monitoring', 'The degree to which people adjust behaviour to fit social situations.'], ['Soft sell', 'Image-based advertising appealing to how a product makes you look.'], ['Hard sell', 'Quality-based advertising about what the product does.'], ['Product placement', 'Brands deliberately shown within films/TV.'], ['Mere exposure effect', 'Repeated exposure increases liking.']] },

    { id: 's253', code: '2.5.3', title: 'Brand awareness & recognition',
      inShort: 'Children learn to recognise brand logos very young – Fischer et al. found most 6-year-olds recognised the Joe Camel cigarette logo. Effective slogans are simple, linked to the brand and used consistently.',
      notes: `
<h4>Brand recognition in children</h4>
<ul><li>Children learn about advertising in stages: first recognising logos and characters, later understanding that adverts are trying to sell (persuasive intent), often not until about age 8.</li>
<li>Example study: <b>Fischer et al. (1991)</b>: children aged 3–6 were shown 22 brand logos and asked to match each to the right product picture. Recognition increased with age. The <b>Old Joe Camel</b> (cigarette) logo was recognised by about <b>30% of 3-year-olds</b> and <b>91% of 6-year-olds</b> – as familiar as the Disney Channel’s Mickey Mouse logo – even though the product was for adults.</li>
<li>This raised ethical concern about advertising aimed at children.</li></ul>
<h4>Brand awareness, brand image and slogans</h4>
<ul><li><b>Brand awareness</b>: whether consumers know/recall the brand. <b>Brand image</b>: what they associate with it (luxury, fun, trustworthy).</li>
<li><b>Slogans</b> (taglines) build awareness and image, and give continuity across campaigns. Types: descriptive (“The ultimate driving machine”), benefit-focused, emotional, questions/commands (“Just do it”).</li>
<li>Guidelines for effective slogans (e.g. <b>Kohli et al., 2007</b>):
<ul><li>Keep it <b>short, simple and memorable</b> (rhyme, rhythm, jingles help).</li>
<li><b>Link it clearly to the brand name</b> so people remember whose slogan it is.</li>
<li>Highlight a key <b>benefit</b> or the brand’s position.</li>
<li>Use it <b>consistently and repeatedly over time</b> – slogans are a long-term investment.</li>
<li>Be creative but avoid confusion with competitors.</li></ul></li></ul>`,
      debates: ['app', 'children', 'det', 'experiments', 'interviews'],
      vids: [['-MG0oigSqLY', 'How to create a great slogan (examples)', 'HubSpot Marketing', '9:11'], ['QTl6xUFxyOY', 'The power of advertising slogans', 'HubSpot Marketing', '1:45']],
      terms: [['Brand awareness', 'How familiar consumers are with a brand.'], ['Brand image', 'The associations and personality consumers link to a brand.'], ['Slogan/tagline', 'A short memorable phrase linked to a brand.'], ['Persuasive intent', 'Understanding that adverts are trying to sell you something.']] }
    ],
    quiz: [
      ['In the Yale model, a celebrity doctor’s credibility relates to the…', ['Message', 'Source', 'Audience', 'Medium'], 1, 'Source (communicator) credibility.'],
      ['In Lauterborn’s 4 Cs, “Convenience” replaces which P?', ['Product', 'Price', 'Place', 'Promotion'], 2, 'Convenience replaces Place.'],
      ['Ciceri et al. (2020) found ads got least attention…', ['On paper', 'On a tablet', 'On a website', 'On TV'], 2, 'Website performed worst – banner blindness.'],
      ['High self-monitors respond best to…', ['Quality claims', 'Image-based ads', 'No ads', 'Price comparisons'], 1, 'Image (soft sell) ads.'],
      ['In Auty and Lewis (2004), what % of children who saw the Pepsi clip chose Pepsi?', ['42%', '50%', '62%', '91%'], 2, '62% vs 42% in the control group.'],
      ['In Fischer et al. (1991), Joe Camel was recognised by about what % of 6-year-olds?', ['30%', '50%', '75%', '91%'], 3, 'About 91%.']
    ],
    exam: [
      { p: 3, q: '(a) Describe research into brand awareness and recognition in children. [6]  (b) Evaluate this research, including a discussion of the use of children in psychological research. [10]', guide: ['(a) Fischer et al. (1991): 3–6 year-olds, 22 logos, matching task, Joe Camel 30% → 91%.', '(a) Auty and Lewis (2004) product placement (as supporting evidence).', '(b) Children: valid consent from parents, protection from harm, limited language/understanding, demand characteristics.', '(b) Matching task is simple and objective but recognition ≠ purchase or liking.', '(b) Usefulness for regulating advertising to children; conclusion.'] },
      { p: 4, q: 'Snyder and DeBono (1985) measured self-monitoring with a questionnaire. Outline one strength and one weakness of using a psychometric test here.', guide: ['Strength: standardised, quantitative, allows participants to be classed reliably as high/low self-monitors.', 'Weakness: self-report – social desirability; dividing people into high/low simplifies a continuous trait.'] }
    ] }
  ]
};

/* ───────────── CONSUMER KEY STUDIES ───────────── */
Object.assign(PSY.studies, {
  north2003: { opt: 'consumer', sub: 's212', name: 'North et al. (2003)', short: 'Musical style & restaurant spending',
    ref: 'North, A. C., Shilcock, A. & Hargreaves, D. J. (2003). The effect of musical style on restaurant customers’ spending. Environment and Behavior, 35(5), 712–718.',
    context: 'Earlier research showed background music affects shoppers (e.g. tempo affects how fast people move; French music increased sales of French wine). Music may “prime” ideas linked to it – classical music is associated with sophistication and affluence.',
    aim: 'To investigate whether the style of background music (classical, pop or none) affects how much customers spend in a restaurant.',
    sample: 'Diners at a British restaurant over 18 evenings (several hundred customers in total).',
    method: 'Field experiment with three conditions (independent measures); the IV was music style and the DV was spending per head.',
    procedure: ['Over 18 evenings, the restaurant played classical music, pop music or no music (each condition used on several evenings).', 'The music was played at a similar, unobtrusive volume.', 'Receipts were used to calculate the mean spend per head for each table on starters, main courses, desserts, coffee, bar drinks, wine, total drinks, total food and overall.'],
    results: ['There was a significant overall difference between conditions.', 'Classical music led to higher spending per head on starters, coffee, total food and overall spend.', 'Mean total spend per head was about £32.52 with classical music, compared with about £29.46 with pop and £29.73 with no music (figures as reported in later reviews).'],
    conclusion: 'Classical music increased restaurant spending, probably by priming feelings of sophistication and upmarket-ness, so customers behaved in a way that matched that image.',
    ev: { plus: ['Field experiment in a real restaurant – high ecological validity; customers unaware of the study.', 'Objective quantitative data from receipts – reliable.', 'Practical application: restaurants can choose music to increase revenue.'],
          minus: ['Less control – different evenings may have had different customers, events or weather.', 'One restaurant in one culture – limited generalisation.', 'Ethics: customers didn’t consent and may be manipulated into spending more.'] },
    debates: { det: 'Suggests music can determine spending (environmental determinism), though customers still choose.', indsit: 'A situational factor (music) changed behaviour.', red: 'Reduces complex spending decisions to one variable (music).', gen: 'One British restaurant – may not generalise to other settings or cultures.' } },

  robson2011: { opt: 'consumer', sub: 's223', name: 'Robson et al. (2011)', short: 'Table spacing in restaurants',
    ref: 'Robson, S. K. A., Kimes, S. E., Becker, F. D. & Evans, G. W. (2011). Consumers’ responses to table spacing in restaurants. Cornell Hospitality Quarterly, 52(3), 253–264.',
    context: 'Restaurants often put tables close together to fit in more customers and earn more. But Hall’s proxemics suggests strangers inside our personal zone cause discomfort, stress and a loss of privacy and control.',
    aim: 'To investigate how consumers respond (emotionally and in their behavioural intentions) to different distances between restaurant tables in different dining situations.',
    sample: 'Over 1,000 American adults who completed a web-based survey (roughly 45% male, 53% female).',
    method: 'Online survey (self-report questionnaire) with an experimental design: participants were randomly assigned to one of nine conditions.',
    procedure: ['Participants saw an image of two-person tables set 6, 12 or 24 inches (about 15, 30 or 60 cm) apart.', 'They imagined one of three scenarios: a business meal, a meal with a friend, or a romantic date.', 'This created 3 distances × 3 scenarios = 9 conditions, with at least 90 valid responses each.', 'They rated 32 statements on 7-point Likert scales about feelings such as pleasure, stress, arousal, control, comfort and privacy, and their likely behaviour (e.g. satisfaction, returning).'],
    results: ['Tables 6 inches apart produced significantly more negative responses (less privacy, less comfort, more stress, less pleasure) than 12 or 24 inches.', 'The effect was strongest in the romantic scenario; the business scenario mattered less.', 'Women were significantly more uncomfortable than men with close spacing in every scenario.', 'Respondents also disliked banquette (bench-style) seating; tight spacing might not lower spending but may make diners less likely to return.'],
    conclusion: 'Diners dislike closely spaced tables, especially for romantic meals and especially women; restaurants should consider giving tables more space and matching spacing to the dining occasion.',
    ev: { plus: ['Very large sample with random allocation to conditions – good for generalising and comparing.', 'Standardised images and scales – reliable and replicable; quantitative data.', 'Useful for restaurant design and management.'],
          minus: ['Imagined scenarios and photos, not real dining – behavioural intentions may not match real behaviour (low ecological validity).', 'Self-report – social desirability and demand characteristics.', 'American sample only – personal space norms differ across cultures.'] },
    debates: { culture: 'Personal space needs differ between cultures; only Americans were tested.', indsit: 'Both individual (gender) and situational (scenario, distance) factors affected comfort.', app: 'Directly applicable to restaurant layout decisions.' } },

  hall2010: { opt: 'consumer', sub: 's233', name: 'Hall et al. (2010)', short: 'Choice blindness for jam and tea',
    ref: 'Hall, L., Johansson, P., Tärning, B., Sikström, S. & Deutgen, T. (2010). Magic at the marketplace: Choice blindness for the taste of jam and the smell of tea. Cognition, 117(1), 54–61.',
    context: 'Earlier lab studies found choice blindness for faces: people didn’t notice when the face they chose was swapped and then justified the choice they hadn’t made. Would this happen in a real marketplace with taste and smell?',
    aim: 'To see whether choice blindness occurs for the taste of jam and the smell of tea in a real supermarket.',
    sample: '180 consumers (118 female) at a supermarket in Sweden, aged 16 to 80, who stopped at a tasting stall.',
    method: 'Field experiment with deception, using special “magic” jars.',
    procedure: ['Shoppers were invited to a tasting stall and sampled pairs of jams (or smelled pairs of teas), then chose which they preferred.', 'Three pairs of jams and three pairs of teas were used, varying in how similar they were (some very different, e.g. cinnamon-apple vs bitter grapefruit jam).', 'The jars were two-sided: each end held a different product, so the researchers could secretly flip the jar.', 'Participants were asked to taste/smell their chosen sample again and explain why they preferred it – but on manipulated trials they were actually given the option they had rejected.', 'Detection was recorded as concurrent (noticed straight away) or retrospective (when told at the end). Half were offered their chosen product as a gift.'],
    results: ['In total, no more than a third of the manipulated trials were detected.', 'Even for very different pairs (cinnamon-apple vs grapefruit jam; mango vs Pernod-scented tea) fewer than half of the manipulations were detected.', 'Participants often confidently explained the reasons for a choice they had not actually made.'],
    conclusion: 'Choice blindness happens in real consumer decisions about taste and smell: people often don’t notice what they chose and construct reasons after the event.',
    ev: { plus: ['Field experiment in a real supermarket with real products – high ecological validity.', 'Large sample with a wide age range.', 'Clever, standardised procedure (magic jars) – replicable.'],
          minus: ['Deception – participants were misled (though debriefed); possible embarrassment.', 'Less control in a busy supermarket (noise, distractions).', 'Swedish shoppers who chose to stop at a stall – volunteer-type sample.'] },
    debates: { det: 'Suggests we are less in control of our choices than we think – challenges free will.', indsit: 'Situational manipulation strongly affected decisions.', app: 'Taste tests and market research may not be as reliable as companies assume.' } },

  becker2011: { opt: 'consumer', sub: 's241', name: 'Becker et al. (2011)', short: 'Package design & taste',
    ref: 'Becker, L., van Rompay, T. J. L., Schifferstein, H. N. J. & Galetzka, M. (2011). Tough package, strong taste: The influence of packaging design on taste impressions and product evaluations. Food Quality and Preference, 22(1), 17–23.',
    context: 'Sensation transference: people transfer impressions of a package to the product inside. Angular shapes are associated with intensity and potency; rounded shapes with softness and mildness. Colour saturation also carries meaning.',
    aim: 'To investigate whether package shape (angular vs rounded) and colour saturation affect taste impressions and product evaluations of yoghurt, and whether design-sensitive people are affected more.',
    sample: 'Shoppers in a supermarket (around 150 participants).',
    method: 'Experiment (independent measures) comparing packages that differed in shape and colour saturation; ratings by questionnaire.',
    procedure: ['The same yoghurt was presented in packages that were either angular or rounded and had either high or low colour saturation.', 'Participants rated their expectations and their taste experience (e.g. intensity), and evaluated the product (including price expectations).', 'Their sensitivity to design (how important visual product aesthetics are to them) was also measured.'],
    results: ['Yoghurt in angular packaging was rated as tasting more intense than the same yoghurt in rounded packaging – shape transferred to taste.', 'Shape had more effect on taste than colour; colour saturation mainly affected general product evaluations and price expectations, mostly before tasting.', 'The effects were strongest for participants who were highly sensitive to design.'],
    conclusion: 'Package design – especially shape – changes how a food is experienced and evaluated, so packaging should match the taste the product is meant to deliver (e.g. angular for strong flavours).',
    ev: { plus: ['Experimental control – same yoghurt in every condition, so differences must come from the package.', 'Useful for food companies designing packaging.', 'Measured individual differences (design sensitivity) – more holistic.'],
          minus: ['Ratings are subjective self-report.', 'One product (yoghurt) and one culture – limited generalisation.', 'Tasting in a study setting may differ from everyday eating at home (ecological validity).'] },
    debates: { red: 'Reduces taste experience to one feature (package shape) – but shows senses interact.', det: 'Packaging influences perception without people realising – limits free will.', validity: 'Subjective taste ratings vs objective measures.' } },

  snyder1985: { opt: 'consumer', sub: 's252', name: 'Snyder and DeBono (1985)', short: 'Self-monitoring & advertising (study 3)',
    ref: 'Snyder, M. & DeBono, K. G. (1985). Appeals to image and claims about quality: Understanding the psychology of advertising. Journal of Personality and Social Psychology, 49(3), 586–597.',
    context: 'Adverts take two broad forms: “soft sell” image appeals (how the product makes you look) and “hard sell” quality claims (what it does). Self-monitoring theory (Snyder, 1974) suggests high self-monitors care about image and low self-monitors about inner values and substance. (Studies 1 and 2 used ads for products such as whisky and cigarettes and showed high self-monitors preferred image ads; you only need study 3 in detail.)',
    aim: 'Study 3: to see whether high and low self-monitors differ in their willingness to try a product depending on whether its advert used an image appeal or a quality claim.',
    sample: 'University students classed as high or low self-monitors using the self-monitoring scale (a questionnaire).',
    method: 'Experiment (2 × 2 design: self-monitoring high/low × advert type image/quality), with a questionnaire measure.',
    procedure: ['Participants completed the self-monitoring questionnaire.', 'They read an advert for a new shampoo that was either image-oriented (soft sell, e.g. how it makes you look) or quality-oriented (hard sell, e.g. how well it cleans).', 'They indicated how willing they were to try the product.'],
    results: ['High self-monitors were more willing to try the shampoo when it was advertised with an image appeal.', 'Low self-monitors were more willing to try it when it was advertised with claims about quality.', 'The hypotheses were supported.'],
    conclusion: 'People respond to adverts that match their personality: image ads work for high self-monitors and quality ads for low self-monitors, so advertisers should match ad type to their target audience.',
    ev: { plus: ['Controlled experiment – advert type manipulated while product stayed the same.', 'Standardised self-monitoring scale – reliable, quantitative.', 'Useful for targeted advertising.'],
          minus: ['Student sample – limited generalisation to other consumers.', 'Willingness to try is not actual buying behaviour – low ecological validity.', 'Classing people as only “high” or “low” oversimplifies personality.'] },
    debates: { indsit: 'Response to ads depends on individual personality, not just the ad itself.', det: 'Personality “determines” which ads work – but people can still choose.', validity: 'Self-report intentions may not predict real purchases.' } }
});

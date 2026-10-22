/* Organisational Psychology — Cambridge International A Level Psychology 9990 (syllabus for 2027), Specialist Option 4 */
window.PSY = window.PSY || { options: {}, studies: {} };

PSY.options.organisational = {
  id: 'organisational', name: 'Organisational Psychology', short: 'Organisational', emoji: '💼', color: '#3b82f6',
  blurb: 'People at work: motivation, leaders, teams, working conditions and job satisfaction.',
  intro: `Organisational psychology studies <b>behaviour in the workplace</b>: what <b>motivates</b> people, what makes a good <b>leader</b>, how <b>groups</b> make decisions and handle conflict, how <b>working conditions</b> affect health and safety, and how <b>satisfied</b> people are with their jobs. Lots of named theories – learn the lists with the memory tricks!`,
  topics: [
  /* ───────────── 4.1 MOTIVATION ───────────── */
  { id: 'o1', code: '4.1', title: 'Motivation to work', emoji: '🚀',
    subs: [
    { id: 'o411', code: '4.1.1', title: 'Need theories',
      inShort: 'Maslow: five needs in a hierarchy from physiological to self-actualisation. McClelland: three needs – achievement, affiliation and power.',
      notes: `
<h4>Maslow’s hierarchy of needs (1943)</h4>
<ol class="pyramid"><li><b>Self-actualisation</b> – reaching your full potential (challenging, creative work).</li>
<li><b>Esteem</b> – respect, recognition, status (job titles, praise, promotion).</li>
<li><b>Love/belonging</b> (social) – friendships, teamwork, feeling part of a group.</li>
<li><b>Safety</b> – security, safe conditions, job security, pensions.</li>
<li><b>Physiological</b> – basic survival: food, water, rest (a wage that pays for these).</li></ol>
<ul><li>Lower <b>deficiency needs</b> must usually be met before higher <b>growth needs</b> motivate us.</li>
<li>At work: managers should satisfy lower needs (fair pay, safety) and then offer recognition and growth.</li>
<li>Example study: <b>Saeednia (2011)</b> developed and tested a questionnaire measuring how well people’s basic needs (based on Maslow’s hierarchy) are satisfied – a way to turn the theory into a measurable scale.</li></ul>
<p class="mem">🧠 From the bottom: “<b>P</b>lease <b>S</b>top <b>L</b>aughing, <b>E</b>veryone’s <b>S</b>taring” – Physiological, Safety, Love, Esteem, Self-actualisation.</p>
<h4>McClelland’s theory of achievement motivation (needs theory)</h4>
<ul><li><b>Need for achievement (nAch)</b>: wants to excel, likes <b>moderately difficult</b> goals, personal responsibility and <b>feedback</b>. Suits sales, entrepreneurs.</li>
<li><b>Need for affiliation (nAff)</b>: wants to be liked, prefers cooperation and teamwork, avoids conflict.</li>
<li><b>Need for power (nPow)</b>: wants influence and control over others – <b>personal</b> power (for oneself) or <b>institutional</b> power (for the organisation – best in managers).</li>
<li>Needs are <b>learned</b> through experience, and people have different mixes; measured with the Thematic Apperception Test (stories about pictures).</li></ul>`,
      debates: ['app', 'indsit', 'culture', 'det', 'validity'],
      vids: [['O-4ithG_07Q', 'Maslow’s hierarchy of needs', 'Sprouts', '2:48'], ['nmqAl-8I838', 'McClelland: achievement, affiliation, power', 'Psychology Exposed', '3:29']],
      terms: [['Hierarchy of needs', 'Maslow: physiological, safety, love/belonging, esteem, self-actualisation.'], ['Self-actualisation', 'Fulfilling your full potential.'], ['Need for achievement', 'McClelland: desire to excel, with moderate risks and feedback.'], ['Need for affiliation', 'Desire to be liked and to belong.'], ['Need for power', 'Desire for influence – personal or institutional.']] },

    { id: 'o412', code: '4.1.2', title: 'Cognitive theories',
      inShort: 'Goal-setting theory: specific, challenging goals with feedback boost performance (SMART goals). Vroom’s expectancy theory: motivation = Expectancy × Instrumentality × Valence.',
      notes: `
<h4>Latham and Locke’s goal-setting theory</h4>
<p>Specific, difficult goals lead to higher performance than vague “do your best” goals.</p>
<p><b>Goal-setting principles</b>:</p>
<ul><li><b>Clarity</b> – clear, specific, measurable.</li>
<li><b>Challenge</b> – difficult but achievable.</li>
<li><b>Commitment</b> – the person accepts the goal (more if involved in setting it).</li>
<li><b>Feedback</b> – regular information on progress.</li>
<li><b>Task complexity</b> – complex tasks need time and support so goals don’t overwhelm.</li></ul>
<p><b>SMART goals</b>: <b>S</b>pecific, <b>M</b>easurable, <b>A</b>chievable, <b>R</b>elevant (realistic), <b>T</b>ime-bound. <i>Example:</i> “Increase sales by 10% by the end of June” not “sell more”.</p>
<h4>Vroom’s VIE (expectancy) theory (1964)</h4>
<ul><li><b>Expectancy</b> (E): belief that effort will lead to good <b>performance</b> (“If I try hard, can I do it?”).</li>
<li><b>Instrumentality</b> (I): belief that performance will lead to a <b>reward</b> (“If I do it, will I get the bonus?”).</li>
<li><b>Valence</b> (V): how much the person <b>values</b> the reward (“Do I want the bonus?”).</li>
<li><b>Motivation = E × I × V</b> – because they are <b>multiplied</b>, if any one is zero, motivation is zero.</li></ul>
<p class="tip">💡 Both are <b>cognitive</b> theories: motivation depends on how people <i>think</i> about goals and rewards – unlike need theories, which focus on what people <i>need</i>.</p>`,
      debates: ['indsit', 'culture', 'red', 'det', 'idio'],
      vids: [['dWOt2HyjCno', 'Locke and Latham’s goal-setting theory', 'Mindtools', '1:51'], ['sfBoqdjKgKI', 'Expectancy theory explained in 3 minutes', 'Social Science Explainer', '3:00']],
      terms: [['Goal-setting theory', 'Specific, challenging goals with feedback improve performance.'], ['SMART goals', 'Specific, Measurable, Achievable, Relevant, Time-bound.'], ['Expectancy', 'Belief that effort leads to performance.'], ['Instrumentality', 'Belief that performance leads to reward.'], ['Valence', 'How much a reward is valued.']] },

    { id: 'o413', code: '4.1.3', title: 'Motivators at work', ks: 'landry2019',
      inShort: 'Extrinsic motivators are rewards like pay and bonuses. Intrinsic motivators are things like praise, respect and belonging. Self-determination theory says we need competence, autonomy and relatedness – and how rewards are presented matters (Landry et al.).',
      notes: `
<h4>Extrinsic motivators: reward systems</h4>
<ul><li><b>Pay</b>: hourly wages or annual salary – basic, but doesn’t reward extra effort.</li>
<li><b>Bonuses</b>: one-off payments for meeting targets.</li>
<li><b>Profit-sharing</b>: employees receive a share of company profits – encourages loyalty and teamwork.</li>
<li><b>Performance-related pay (PRP)</b>: pay linked to individual performance/appraisal – can motivate, but can feel unfair or cause competition.</li></ul>
<h4>Intrinsic motivators: non-monetary rewards</h4>
<ul><li><b>Praise</b>, <b>respect</b>, <b>recognition</b> (e.g. “employee of the month”), <b>empowerment</b> (responsibility and decision-making) and a <b>sense of belonging</b>.</li>
<li>These satisfy psychological needs and tend to produce longer-lasting motivation.</li></ul>
<h4>Deci and Ryan’s self-determination theory (SDT)</h4>
<ul><li>Three basic psychological needs: <b>Competence</b> (feeling capable), <b>Autonomy</b> (feeling in control/choice), <b>Relatedness</b> (feeling connected to others).</li>
<li>When these are satisfied ➜ <b>intrinsic</b> (autonomous) motivation, better performance and well-being.</li>
<li>Rewards can be experienced as <b>informational</b> (recognising competence – supports autonomy) or <b>controlling</b> (pressuring – frustrates autonomy). Controlling rewards can <b>undermine</b> intrinsic motivation.</li>
<li>➜ Key study <b>Landry et al. (2019)</b>, study 1.</li></ul>
<p class="mem">🧠 SDT needs = “<b>CAR</b>” – Competence, Autonomy, Relatedness.</p>`,
      debates: ['indsit', 'red', 'det', 'idio', 'gen'],
      vids: [['_juPDoa3GBY', 'Self-determination theory explained', 'Sprouts', '6:27'], ['YoquZEZIVLA', 'Applying SDT to motivational rewards: Landry et al.', 'TheTeacherKind', '3:56']],
      terms: [['Extrinsic motivation', 'Doing something for an external reward.'], ['Intrinsic motivation', 'Doing something because it is interesting or satisfying in itself.'], ['Performance-related pay', 'Pay linked to individual performance.'], ['Self-determination theory', 'Deci and Ryan: needs for competence, autonomy and relatedness.'], ['Informational reward', 'A reward presented as recognition of competence – supports autonomy.'], ['Controlling reward', 'A reward presented as pressure to perform – undermines autonomy.']] }
    ],
    quiz: [
      ['Which is at the TOP of Maslow’s hierarchy?', ['Esteem', 'Safety', 'Self-actualisation', 'Physiological'], 2, 'Self-actualisation.'],
      ['A manager who wants influence to benefit the organisation has high…', ['nAff', 'Personal power', 'Institutional power', 'nAch'], 2, 'Institutional power need.'],
      ['In SMART, “T” stands for…', ['Tough', 'Time-bound', 'Targeted', 'Teamwork'], 1, 'Time-bound.'],
      ['In Vroom’s theory, if valence is zero, motivation is…', ['High', 'Medium', 'Zero', 'Unaffected'], 2, 'E × I × V – any zero makes the product zero.'],
      ['Which is an intrinsic motivator?', ['Bonus', 'Profit-sharing', 'Recognition', 'Pay rise'], 2, 'Recognition is non-monetary.'],
      ['SDT’s three needs are…', ['Power, achievement, affiliation', 'Competence, autonomy, relatedness', 'Safety, esteem, love', 'Expectancy, instrumentality, valence'], 1, 'CAR.'],
      ['In Landry et al. (2019) study 1, which condition performed better?', ['Controlling', 'Autonomy-supportive (informational)', 'No difference', 'No reward'], 1, 'Mean performance 0.76 vs 0.54.']
    ],
    exam: [
      { p: 3, q: '(a) Describe two need theories of motivation. [6]  (b) Evaluate these theories, including a discussion of cultural differences. [10]', guide: ['(a) Maslow’s five levels, deficiency vs growth; McClelland’s nAch, nAff, nPow.', '(b) Culture: Maslow’s order reflects individualist Western values – collectivist cultures may put belonging above self-actualisation.', '(b) Hard to test/measure (Saeednia’s scale is an attempt); people may pursue several needs at once.', '(b) Useful for managers; determinism vs free will; conclusion.'] },
      { p: 4, q: 'Plan a laboratory experiment to test whether SMART goals improve performance on a simple data-entry task compared with “do your best” instructions. [10]', guide: ['IV: SMART goal vs “do your best”; DV: number of correct entries in 15 minutes.', 'Independent measures with random allocation.', 'Controls: same task, time, room, instructions script.', 'Sample: e.g. 40 students (opportunity/volunteer); ethics: consent, debrief, right to withdraw.', 'Data: mean correct entries; bar chart; standard deviation.'] }
    ] },

  /* ───────────── 4.2 LEADERSHIP ───────────── */
  { id: 'o2', code: '4.2', title: 'Leadership & management', emoji: '🧑‍✈️',
    subs: [
    { id: 'o421', code: '4.2.1', title: 'Traditional & modern theories of leadership',
      inShort: 'Universalist theories say leaders have special traits (great person, charismatic, transformational). Behavioural theories (Ohio and Michigan) focus on what leaders do. Heifetz describes adaptive leadership for complex challenges.',
      notes: `
<h4>Universalist theories (one best type of leader)</h4>
<ul><li><b>Great person theory</b>: leaders are <b>born</b> with special traits (intelligence, confidence, charisma) – e.g. historical figures. ❌ Can’t identify a consistent list of traits; ignores situation.</li>
<li><b>Charismatic leaders</b>: inspire followers through personal charm, confidence and a compelling vision; followers are emotionally attached. ❌ Can be risky (followers stop questioning).</li>
<li><b>Transformational leaders</b> (Burns; Bass): transform followers by raising their motivation and commitment – the <b>4 Is</b>: <b>i</b>dealised influence (role model), <b>i</b>nspirational motivation (vision), <b>i</b>ntellectual stimulation (encouraging new ideas), <b>i</b>ndividualised consideration (caring for each person).</li></ul>
<h4>Behavioural theories (what leaders do)</h4>
<ul><li><b>Ohio State studies</b>: two independent dimensions – <b>initiating structure</b> (task-focused: organising work, setting goals) and <b>consideration</b> (people-focused: trust, respect, care). Leaders can be high or low on each; high–high was often seen as most effective.</li>
<li><b>University of Michigan studies</b>: <b>employee-oriented</b> (focus on people’s needs) vs <b>production-oriented</b> (focus on tasks and output). Employee-oriented leaders tended to have more productive, satisfied groups.</li></ul>
<h4>Heifetz – adaptive leadership</h4>
<ul><li><b>Technical problems</b> have known solutions; <b>adaptive challenges</b> need people to change their values, beliefs or behaviour.</li>
<li><b>Six principles</b> for meeting adaptive challenges (Heifetz and Laurie):
<ol><li><b>Get on the balcony</b> – step back to see the whole picture.</li>
<li><b>Identify the adaptive challenge</b>.</li>
<li><b>Regulate distress</b> – keep pressure high enough to motivate change but not overwhelming.</li>
<li><b>Maintain disciplined attention</b> – stop people avoiding the hard issues.</li>
<li><b>Give the work back to the people</b> – let them solve it, building responsibility.</li>
<li><b>Protect voices of leadership from below</b> – listen to people who raise difficult questions.</li></ol></li>
<li><b>Responsibilities</b> of an adaptive leader: providing <b>direction</b> (identify the challenge), <b>protection</b> (let people feel external pressure at a bearable rate), <b>orientation</b> (challenge current roles), managing <b>conflict</b> (expose it, use it to learn) and shaping <b>norms</b> (challenge unproductive norms).</li></ul>`,
      debates: ['app', 'indsit', 'nn', 'red', 'gen'],
      vids: [['yW-ls6hRPVc', 'Charismatic vs transformational leadership', 'Mima', '2:43'], ['eP8gVWuFy9c', 'Ohio State leadership studies', 'Organizational Communication', '3:25'], ['1TuZmX_fq-w', 'Michigan leadership studies', 'Organizational Communication', '2:32'], ['9kVxxfknua4', 'Adaptive leadership in 12 minutes – Ron Heifetz', 'How to Dialogue', '12:29']],
      terms: [['Great person theory', 'Leaders are born with special traits.'], ['Transformational leadership', 'Inspiring followers through the 4 Is to go beyond self-interest.'], ['Initiating structure', 'Task-focused leader behaviour (Ohio State).'], ['Consideration', 'People-focused leader behaviour (Ohio State).'], ['Adaptive challenge', 'A problem that needs people to change values or behaviour (Heifetz).']] },

    { id: 'o422', code: '4.2.2', title: 'Leadership style', ks: 'cuadrado2008',
      inShort: 'Muczyk and Reimann: four styles from two dimensions (decision-making and execution). Scouller: public, private and personal levels of leadership. Leadership style and gender – Cuadrado et al.',
      notes: `
<h4>Muczyk and Reimann’s four styles of leader behaviour (1987)</h4>
<p>Two dimensions: <b>decision-making</b> (democratic – involves followers, vs autocratic – leader decides) and <b>execution</b> (directive – closely supervises, vs permissive – lets people work their own way).</p>
<table class="mini"><tr><th></th><th>Directive (close supervision)</th><th>Permissive (freedom)</th></tr>
<tr><th>Autocratic decisions</th><td><b>Directive autocrat</b> – decides alone and supervises closely (good for new staff, crises)</td><td><b>Permissive autocrat</b> – decides alone but lets staff choose how to do the work</td></tr>
<tr><th>Democratic decisions</th><td><b>Directive democrat</b> – involves staff in decisions but supervises closely</td><td><b>Permissive democrat</b> – involves staff in decisions and gives freedom (good for experienced, motivated teams)</td></tr></table>
<h4>Scouller’s three levels of leadership (2011)</h4>
<ul><li><b>Public</b> leadership – behaviours with the whole group: setting vision, building team spirit, organising.</li>
<li><b>Private</b> leadership – one-to-one: coaching, supporting and challenging individuals.</li>
<li><b>Personal</b> leadership – the inner level: the leader’s <b>technical know-how</b>, <b>attitude</b> towards others and <b>self-mastery</b> (“presence”). Scouller says this is the core – it drives the other two.</li></ul>
<h4>Leadership style and gender</h4>
<ul><li>Women are under-represented in top management. <b>Role congruity theory</b>: women may be judged unfavourably when they lead in stereotypically “male” ways (e.g. autocratic, task-focused) because it clashes with the female gender role.</li>
<li>➜ Key study <b>Cuadrado et al. (2008)</b>.</li></ul>`,
      debates: ['app', 'indsit', 'red', 'idio', 'gen'],
      vids: [['-MpRfv3O3To', 'The three levels of leadership (Scouller)', 'Brackley Partners', '3:17'], ['TexhMnOEqYo', 'Women’s access to managerial positions: Cuadrado et al.', 'TheTeacherKind', '4:13']],
      terms: [['Directive autocrat', 'Makes decisions alone and supervises closely.'], ['Permissive democrat', 'Involves staff in decisions and lets them work freely.'], ['Public leadership', 'Scouller: leading the group as a whole.'], ['Private leadership', 'Scouller: one-to-one leadership.'], ['Personal leadership', 'Scouller: the leader’s inner know-how, attitude and self-mastery.'], ['Role congruity theory', 'Leaders are judged badly when their style clashes with expectations of their gender role.']] },

    { id: 'o423', code: '4.2.3', title: 'Leaders & followers',
      inShort: 'Kouzes and Posner’s Leadership Practices Inventory measures five practices of exemplary leaders. Kelley’s followership: two dimensions create five types of follower.',
      notes: `
<h4>Kouzes and Posner – five practices of exemplary leadership</h4>
<ol><li><b>Model the way</b> – set an example, act on shared values.</li>
<li><b>Inspire a shared vision</b> – picture the future and enlist others.</li>
<li><b>Challenge the process</b> – look for new ways, take risks, learn from mistakes.</li>
<li><b>Enable others to act</b> – build trust and collaboration, share power.</li>
<li><b>Encourage the heart</b> – recognise contributions and celebrate success.</li></ol>
<p><b>Leadership Practices Inventory (LPI)</b>: a <b>30-item</b> questionnaire (6 items per practice) rated on a 10-point frequency scale; there is a <b>self</b> version and an <b>observer</b> version (completed by colleagues) – a 360° view. <i>+</i> standardised, quantitative, useful for leader development. <i>−</i> self-report bias; Western, individualist model.</p>
<p class="mem">🧠 “<b>M</b>y <b>I</b>nspiring <b>C</b>oach <b>E</b>nables <b>E</b>veryone” – Model, Inspire, Challenge, Enable, Encourage.</p>
<h4>Kelley’s followership (1988)</h4>
<ul><li><b>Followership</b>: the ability to actively and effectively follow and support a leader and the organisation’s goals – good followers are as important as good leaders.</li>
<li><b>Two dimensions</b>: <b>independent critical thinking</b> (vs dependent, uncritical) and <b>active</b> (vs passive) engagement.</li></ul>
<table class="mini"><tr><th>Style</th><th>Thinking</th><th>Engagement</th><th>Description</th></tr>
<tr><td><b>Exemplary</b> (effective)</td><td>Independent, critical</td><td>Active</td><td>Ideal: thinks for themselves and gets involved</td></tr>
<tr><td><b>Alienated</b></td><td>Independent, critical</td><td>Passive</td><td>Cynical; criticises but doesn’t help</td></tr>
<tr><td><b>Conformist</b> (“yes people”)</td><td>Dependent, uncritical</td><td>Active</td><td>Enthusiastic but don’t question</td></tr>
<tr><td><b>Passive</b> (“sheep”)</td><td>Dependent, uncritical</td><td>Passive</td><td>Do only what they are told</td></tr>
<tr><td><b>Pragmatist</b></td><td colspan="2">In the middle of both</td><td>Fence-sitters; adapt to whatever works</td></tr></table>`,
      debates: ['app', 'culture', 'idio', 'selfreport', 'psychometrics'],
      vids: [['oMiGTEudElI', 'Five practices of exemplary leadership', 'Masterclass Training', '2:50'], ['QWfQIbW6btI', 'Kelley’s followership model (5 types)', 'Business School 101', '7:59']],
      terms: [['LPI', 'Leadership Practices Inventory: 30 items measuring Kouzes and Posner’s five practices.'], ['Followership', 'Actively and effectively supporting a leader and goals (Kelley).'], ['Exemplary follower', 'Independent critical thinker who is actively engaged.'], ['Alienated follower', 'Critical but passive.'], ['Conformist follower', 'Active but uncritical (“yes person”).']] }
    ],
    quiz: [
      ['“Leaders are born, not made” is…', ['Transformational theory', 'Great person theory', 'Ohio State theory', 'Adaptive leadership'], 1, 'Great person (trait) theory.'],
      ['Ohio State’s two dimensions are…', ['Employee and production orientation', 'Initiating structure and consideration', 'Public and private', 'Directive and permissive'], 1, 'Initiating structure and consideration.'],
      ['“Get on the balcony” is one of whose principles?', ['Kouzes and Posner', 'Heifetz', 'Scouller', 'Kelley'], 1, 'Heifetz’s adaptive leadership.'],
      ['A leader who decides alone but lets staff choose how to work is a…', ['Directive autocrat', 'Permissive autocrat', 'Directive democrat', 'Permissive democrat'], 1, 'Autocratic decisions + permissive execution.'],
      ['Scouller’s inner level of leadership is…', ['Public', 'Private', 'Personal', 'Adaptive'], 2, 'Personal leadership.'],
      ['How many items are on the LPI?', ['5', '10', '30', '50'], 2, '30 items (6 per practice).'],
      ['A follower who thinks critically but doesn’t get involved is…', ['Exemplary', 'Alienated', 'Conformist', 'Passive'], 1, 'Alienated follower.']
    ],
    exam: [
      { p: 3, q: '(a) Describe universalist and behavioural theories of leadership. [6]  (b) Evaluate these theories, including a discussion of nature versus nurture. [10]', guide: ['(a) Great person, charismatic, transformational (4 Is).', '(a) Ohio State (initiating structure, consideration) and Michigan (employee vs production orientation).', '(b) Nature: great person theory – born leaders. Nurture: behavioural theories – leadership skills can be trained.', '(b) Ignore situation (contingency); cultural bias; usefulness for training; conclusion.'] },
      { p: 4, q: 'Cuadrado et al. (2008) asked students to evaluate fictional leaders. Explain one strength and one weakness of using a student sample.', guide: ['Strength: easy to access, allows a controlled 2×2 experiment with random allocation.', 'Weakness: students have little managerial experience – may not reflect how employees judge real managers (generalisation/ecological validity).'] }
    ] },

  /* ───────────── 4.3 GROUP BEHAVIOUR ───────────── */
  { id: 'o3', code: '4.3', title: 'Group behaviour in organisations', emoji: '👥',
    subs: [
    { id: 'o431', code: '4.3.1', title: 'Group development & decision-making',
      inShort: 'Groups develop through forming, storming, norming, performing and adjourning. Belbin identified nine team roles. Groups make faulty decisions through groupthink and cognitive errors (Forsyth).',
      notes: `
<h4>Stages of group development (Tuckman; Tuckman and Jensen)</h4>
<ol><li><b>Forming</b> – polite, unsure; getting to know each other and the task.</li>
<li><b>Storming</b> – conflict over roles, ideas and leadership.</li>
<li><b>Norming</b> – rules and roles agreed; cohesion grows.</li>
<li><b>Performing</b> – the team works effectively towards its goals.</li>
<li><b>Adjourning</b> – the task ends and the group breaks up (added later, with Jensen).</li></ol>
<h4>Belbin’s nine team roles</h4>
<table class="mini"><tr><th>Action roles</th><th>People roles</th><th>Thinking roles</th></tr>
<tr><td><b>Shaper</b> – drives the team, challenges<br><b>Implementer</b> – turns ideas into practical plans<br><b>Completer finisher</b> – polishes, checks for errors, meets deadlines</td>
<td><b>Coordinator</b> – clarifies goals, delegates<br><b>Teamworker</b> – supportive, keeps harmony<br><b>Resource investigator</b> – explores contacts and opportunities</td>
<td><b>Plant</b> – creative ideas<br><b>Monitor evaluator</b> – logical, judges options<br><b>Specialist</b> – expert knowledge</td></tr></table>
<p>Balanced teams with a mix of roles perform best.</p>
<h4>Faulty decision-making 1: groupthink (Janis, 1972)</h4>
<p>A cohesive group wants agreement so much that it stops thinking critically. <b>Features (symptoms)</b>:</p>
<ul><li>Illusion of <b>invulnerability</b> • <b>collective rationalisation</b> (dismissing warnings) • belief in the group’s <b>morality</b> • <b>stereotyping</b> outsiders • <b>direct pressure</b> on dissenters • <b>self-censorship</b> • illusion of <b>unanimity</b> • self-appointed <b>mindguards</b> who block bad news.</li>
<li>Examples: the Bay of Pigs invasion (1961), the Challenger space shuttle disaster (1986).</li>
<li><b>Avoiding it</b>: appoint a <b>devil’s advocate</b>; leader stays impartial and speaks last; invite outside experts; split into subgroups; hold a “second-chance” meeting.</li></ul>
<h4>Faulty decision-making 2: Forsyth’s cognitive limitations and errors</h4>
<p>Groups, like individuals, make errors when processing information. Types and sub-types:</p>
<ul><li><b>Errors of commission</b> – <i>misusing</i> information: e.g. <b>belief perseverance</b> (sticking with information shown to be false), <b>sunk cost bias</b> (continuing a failing plan because of what’s already been invested), <b>extra-evidentiary bias</b> (using information you were told to ignore), <b>hindsight bias</b>.</li>
<li><b>Errors of omission</b> – <i>overlooking</i> useful information: e.g. <b>base-rate bias</b> (ignoring general statistics), <b>fundamental attribution error</b> (blaming people, ignoring situations).</li>
<li><b>Errors of imprecision</b> – relying too much on <i>heuristics</i>: e.g. the <b>availability</b> heuristic, <b>conjunctive bias</b>, <b>representativeness</b> heuristic.</li>
<li>Groups also tend to discuss <b>shared</b> information everyone already knows rather than unique information (the shared information bias).</li></ul>`,
      debates: ['app', 'indsit', 'red', 'idio', 'gen'],
      vids: [['-RwkZxGPQb8', 'Tuckman’s 5 stages of team development', 'The Right Questions', '5:59'], ['eFsA4wUf3I0', 'The official guide to Belbin team roles', 'Belbin', '2:01'], ['uZo2BrOdMBQ', 'What is groupthink? (3 minutes)', 'Social Science Explainer', '4:46']],
      terms: [['Storming', 'Tuckman stage of conflict over roles and ideas.'], ['Groupthink', 'A cohesive group prioritising agreement over critical thinking (Janis).'], ['Mindguard', 'A group member who shields the group from dissenting information.'], ['Devil’s advocate', 'Someone who deliberately argues against the group to test ideas.'], ['Sunk cost bias', 'Continuing a failing course of action because of past investment.'], ['Plant', 'Belbin’s creative “ideas” team role.']] },

    { id: 'o432', code: '4.3.2', title: 'Individual & group performance', ks: 'claypoole2019',
      inShort: 'Social facilitation: others watching improves easy tasks (drive theory, evaluation apprehension). Social loafing: people try less in groups (social impact theory) – but less so in collectivist cultures (Earley). Electronic monitoring can improve attention (Claypoole and Szalma).',
      notes: `
<h4>Social facilitation</h4>
<ul><li><b>Definition</b>: performance changes when others are present – usually <b>better on simple/well-learned</b> tasks and <b>worse on complex/new</b> tasks (Triplett, 1898, found cyclists raced faster with others).</li>
<li><b>Drive theory</b> (Zajonc, 1965): the presence of others increases <b>arousal</b>, which boosts the <b>dominant response</b> – correct for easy tasks, incorrect for hard ones.</li>
<li><b>Evaluation apprehension</b> (Cottrell, 1968): arousal comes from worrying about being <b>judged</b>, not just from others being there.</li></ul>
<h4>Social loafing</h4>
<ul><li><b>Definition</b>: people put in <b>less effort</b> when working in a group where individual contributions aren’t identified (the Ringelmann effect – less pull per person in tug-of-war teams).</li>
<li><b>Social impact theory</b> (Latané, 1981): social influence depends on the <b>strength</b>, <b>immediacy</b> and <b>number</b> of people; in groups the pressure is <b>divided</b> among members, so each feels less responsible.</li></ul>
<h4>Group performance across cultures</h4>
<ul><li>Example study: <b>Earley (1993)</b> compared managers from the <b>USA</b> (individualist) with managers from <b>China</b> and <b>Israel</b> (collectivist) on a work task done alone, in an in-group or in an out-group. Americans performed <b>best alone</b> (social loafing in groups), while Chinese and Israeli managers performed <b>best in their in-group</b> (social striving) and worse in out-groups.</li></ul>
<h4>Performance monitoring of employee productivity</h4>
<ul><li>Many workplaces use <b>electronic performance monitoring</b> (EPM) – cameras, keystroke counting, screen recording.</li>
<li>➜ Key study <b>Claypoole and Szalma (2019)</b>: being watched electronically improved sustained attention (social facilitation).</li></ul>`,
      debates: ['app', 'culture', 'det', 'idio', 'quantqual'],
      vids: [['yT-BpKlHMps', 'Social facilitation and social loafing', 'Khan Academy', '4:38'], ['zTn1dZHTabk', 'Performance monitoring: Claypoole & Szalma', 'TheTeacherKind', '7:49']],
      terms: [['Social facilitation', 'Better performance on easy tasks (worse on hard tasks) when others are present.'], ['Drive theory', 'Others increase arousal, strengthening the dominant response (Zajonc).'], ['Evaluation apprehension', 'Arousal caused by fear of being judged.'], ['Social loafing', 'Reduced individual effort in groups.'], ['Social impact theory', 'Influence depends on strength, immediacy and number of sources (Latané).'], ['Electronic performance monitoring', 'Using technology to monitor employees’ work.']] },

    { id: 'o433', code: '4.3.3', title: 'Conflict at work',
      inShort: 'Conflict happens at four levels: within a person, between people, within a group and between groups. Thomas–Kilmann’s five modes: competing, collaborating, compromising, avoiding, accommodating. Bullying at work has types, phases and causes (Einarsen).',
      notes: `
<h4>Levels of conflict</h4>
<ul><li><b>Intra-individual</b> – inside one person (e.g. role conflict between work and family).</li>
<li><b>Inter-individual</b> – between two people (personality clash).</li>
<li><b>Intra-group</b> – within one team (disagreement over tasks).</li>
<li><b>Inter-group</b> – between teams or departments (sales vs production).</li></ul>
<p><b>Causes</b> of organisational/interpersonal conflict: competition for scarce resources, task interdependence, unclear responsibilities (jurisdictional ambiguity), poor communication, status differences, different goals, and personality differences.</p>
<h4>Thomas–Kilmann’s five conflict-handling modes</h4>
<p>Based on two dimensions: <b>assertiveness</b> (meeting your own concerns) and <b>cooperativeness</b> (meeting others’ concerns).</p>
<table class="mini"><tr><th>Mode</th><th>Assertive?</th><th>Cooperative?</th><th>Example</th></tr>
<tr><td><b>Competing</b></td><td>High</td><td>Low</td><td>“My way” – emergencies</td></tr>
<tr><td><b>Collaborating</b></td><td>High</td><td>High</td><td>Win–win problem-solving</td></tr>
<tr><td><b>Compromising</b></td><td>Medium</td><td>Medium</td><td>Split the difference</td></tr>
<tr><td><b>Avoiding</b></td><td>Low</td><td>Low</td><td>Postponing the issue</td></tr>
<tr><td><b>Accommodating</b></td><td>Low</td><td>High</td><td>Giving in to keep the peace</td></tr></table>
<h4>Bullying at work</h4>
<ul><li><b>Types</b>: <b>work-related</b> (unreasonable deadlines, withholding information, excessive monitoring) and <b>person-related</b> (insults, gossip, humiliation, social exclusion), plus physical intimidation.</li>
<li><b>Phases</b> (Einarsen, 1999): (1) <b>aggressive behaviour</b> – indirect, subtle; (2) <b>bullying</b> – more direct and frequent; (3) <b>stigmatisation</b> – the victim is seen as the problem; (4) <b>severe trauma</b> – the victim suffers serious psychological harm and may leave work.</li>
<li><b>Causes</b>: individual (personalities of perpetrator and victim), social (group dynamics, scapegoating) and <b>organisational</b> (poor leadership, high stress, competitive culture, tolerance of bullying).</li>
<li>Example: <b>Einarsen (1999)</b> reviewed research on the nature and causes of workplace bullying, distinguishing predatory bullying (victim did nothing to provoke it) from dispute-related bullying (escalating conflict).</li></ul>`,
      debates: ['app', 'indsit', 'culture', 'red', 'idio'],
      vids: [['7YuJPYlsz30', 'Thomas–Kilmann conflict-handling modes explained', 'OakridgeConsulting', '4:05'], ['Q5lvyopCAr4', 'Workplace bullying: what it is and is not', 'Workplace Bullying Institute', '4:17']],
      terms: [['Intra-group conflict', 'Conflict within one group.'], ['Inter-group conflict', 'Conflict between different groups.'], ['Collaborating', 'High assertiveness + high cooperativeness – win–win.'], ['Accommodating', 'Low assertiveness + high cooperativeness – giving in.'], ['Stigmatisation', 'Bullying phase where the victim is blamed and seen as the problem.']] }
    ],
    quiz: [
      ['The Tuckman stage involving conflict over roles is…', ['Forming', 'Storming', 'Norming', 'Adjourning'], 1, 'Storming.'],
      ['The Belbin role that checks for errors and meets deadlines is…', ['Plant', 'Shaper', 'Completer finisher', 'Coordinator'], 2, 'Completer finisher.'],
      ['Someone who stops the group hearing bad news shows which groupthink symptom?', ['Self-censorship', 'Mindguards', 'Stereotyping', 'Invulnerability'], 1, 'Self-appointed mindguards.'],
      ['Continuing a failing project because of money already spent is…', ['Base-rate bias', 'Sunk cost bias', 'Availability', 'FAE'], 1, 'An error of commission.'],
      ['Zajonc’s drive theory says the presence of others increases…', ['Boredom', 'Arousal', 'Loafing', 'Conformity'], 1, 'Arousal strengthens the dominant response.'],
      ['Earley (1993) found Chinese managers performed best…', ['Alone', 'In an out-group', 'In an in-group', 'Under monitoring'], 2, 'Collectivist participants worked hardest in their in-group.'],
      ['High assertiveness + low cooperativeness =', ['Collaborating', 'Competing', 'Accommodating', 'Avoiding'], 1, 'Competing.']
    ],
    exam: [
      { p: 3, q: '(a) Describe social facilitation and social loafing. [6]  (b) Evaluate research into individual and group performance, including a discussion of cultural differences. [10]', guide: ['(a) Definitions, drive theory, evaluation apprehension; social loafing, social impact theory.', '(a) Earley (1993) and Claypoole and Szalma (2019).', '(b) Culture: loafing in individualist vs striving in collectivist (Earley).', '(b) Lab tasks lack ecological validity; EPM ethics (privacy); usefulness for managers; conclusion.'] },
      { p: 4, q: 'Plan an observation to investigate the Thomas–Kilmann conflict-handling modes used by employees in team meetings. [10]', guide: ['Overt or covert, non-participant, structured observation using the five modes as behavioural categories with operational definitions.', 'Two observers – inter-rater reliability; event sampling of each conflict episode.', 'Sample: meetings in one organisation (opportunity); ethics: consent (overt) or public-meeting justification, confidentiality.', 'Data: frequency tallies of each mode; bar chart.'] }
    ] },

  /* ───────────── 4.4 WORK CONDITIONS ───────────── */
  { id: 'o4', code: '4.4', title: 'Organisational work conditions', emoji: '🏭',
    subs: [
    { id: 'o441', code: '4.4.1', title: 'Physical work conditions',
      inShort: 'Physical conditions affect productivity – but the Hawthorne studies showed being studied/getting attention can improve work regardless. Moving to open-plan offices reduced satisfaction (Oldham and Brass).',
      notes: `
<h4>Physical conditions and productivity</h4>
<ul><li>Lighting, temperature, noise, ventilation, space and furniture can all affect comfort, health and productivity.</li>
<li><b>The Hawthorne studies</b> (Western Electric Company, USA, 1920s–30s, Mayo and colleagues): researchers changed lighting and other conditions for groups of workers. Productivity rose with <b>almost every change</b> – even when lighting was made worse. The conclusion: workers improved because they were <b>being observed and given attention</b> – the <b>Hawthorne effect</b>.</li>
<li>Example: <b>Kompier (2006)</b> reviewed the Hawthorne studies and their impact, noting they shifted attention towards social and psychological factors at work but also that the original studies had methodological weaknesses (small groups, poor control).</li></ul>
<h4>Design of the work environment: open-plan offices</h4>
<ul><li><i>+</i> cheaper, easier communication, more flexible, teamwork.</li>
<li><i>−</i> noise, interruptions, lack of privacy, loss of personal control.</li>
<li>Example study: <b>Oldham and Brass (1979)</b> studied employees of a US newspaper company who moved from conventional offices into an <b>open-plan</b> office (a quasi-experiment with measures before and after the move, and comparison groups). After the move, employees reported <b>lower satisfaction</b> with work and the environment and lower internal motivation – linked to more interruptions, less privacy and fewer friendships forming.</li></ul>`,
      debates: ['det', 'experiments', 'questionnaires', 'longitudinal', 'quantqual'],
      vids: [['fei2WVqEykM', 'The Hawthorne effect (definition + examples)', 'Practical Psychology', '5:53'], ['lOLCgZ_WvIo', 'Why open plan offices don’t work for everyone', 'SBS The Feed', '2:44']],
      terms: [['Hawthorne effect', 'Behaviour/performance changes because people know they are being studied or given attention.'], ['Open-plan office', 'A large shared workspace without private offices.'], ['Quasi-experiment', 'An experiment where participants are not randomly allocated (naturally occurring groups).']] },

    { id: 'o442', code: '4.4.2', title: 'Temporal conditions of work',
      inShort: 'Shift patterns include rapid and slow rotation, on-call and flexitime. Shiftwork disrupts body clocks, harming health and increasing accidents – rotating-shift nurses had more sleep problems and accidents (Gold et al.).',
      notes: `
<h4>Designs of work (temporal = to do with time)</h4>
<ul><li><b>Shiftwork</b>: work divided into shifts covering 24 hours (e.g. early, late, night).</li>
<li><b>Rapid rotation</b>: shifts change every few days (e.g. 2 mornings, 2 afternoons, 2 nights). <i>+</i> body clock never fully shifts, so less disruption overall; fewer nights in a row. <i>−</i> constant change, hard to plan life.</li>
<li><b>Slow rotation</b>: shifts change every week or few weeks. <i>+</i> time to adjust. <i>−</i> each change disrupts the body clock again; many nights in a row.</li>
<li>Rotating <b>forwards</b> (morning ➜ afternoon ➜ night) is easier than backwards (“phase delay” fits the body’s natural tendency).</li>
<li><b>On-call</b>: available to work if needed, outside normal hours (doctors, engineers) – unpredictable, disturbs sleep.</li>
<li><b>Flexitime</b>: employees choose start/finish times around compulsory <b>core hours</b> – increases control and work–life balance.</li></ul>
<h4>Effects of shiftwork on health and accidents</h4>
<ul><li>Shiftwork disrupts <b>circadian rhythms</b> (the 24-hour body clock) ➜ poor sleep and fatigue, digestive problems, heart disease risk, mood problems, and more <b>errors and accidents</b> (especially at night).</li>
<li>Example study: <b>Gold et al. (1992)</b> surveyed over 600 nurses at a US hospital. Nurses who <b>rotated</b> between shifts had more sleep problems and were about <b>twice as likely</b> to report accidents or errors (and nodding off while driving to/from work) as nurses on fixed day or evening shifts.</li></ul>`,
      debates: ['app', 'det', 'questionnaires', 'quantqual', 'validity'],
      vids: [['Pk6mVOZT5XU', 'Rotating night shift work and heart disease risk', 'JAMA Network', '3:31'], ['ahKbzQx9sWY', 'How is shift work affecting my health?', 'Kick It Naturally', '14:08']],
      terms: [['Rapid rotation', 'Shifts that change every few days.'], ['Slow rotation', 'Shifts that change weekly or less often.'], ['Flexitime', 'Flexible start and finish times around core hours.'], ['On-call', 'Being available to work outside normal hours if needed.'], ['Circadian rhythm', 'The body’s roughly 24-hour biological clock.']] },

    { id: 'o443', code: '4.4.3', title: 'Health & safety', ks: 'swat1997',
      inShort: 'Accidents come from human errors (omission, commission, sequence, timing) and system errors (badly designed controls and displays). Token economies reduce accidents (Fox et al.). Monitoring accidents and risk events helps prevent them (Swat).',
      notes: `
<h4>Accidents at work: human errors</h4>
<ul><li><b>Omission</b> – failing to do something (forgetting to switch off a machine).</li>
<li><b>Commission</b> – doing something wrong (pressing the wrong button).</li>
<li><b>Sequencing</b> – doing steps in the wrong order.</li>
<li><b>Timing</b> – doing something too early, too late or too slowly.</li></ul>
<p class="mem">🧠 “<b>OCST</b>” – <b>O</b>ops I forgot, <b>C</b>ompletely wrong, <b>S</b>teps mixed up, <b>T</b>oo late!</p>
<h4>System errors in operator–machine systems</h4>
<ul><li>Errors caused by poor <b>design</b> rather than careless people.</li>
<li><b>Machine displays</b> (information the operator reads – dials, screens, warning lights) must be easy to read and understand, with important information clearly highlighted.</li>
<li><b>Machine controls</b> (buttons, levers, switches) should be clearly labelled, distinguishable by shape/colour, logically placed and move in expected directions (up = on).</li>
<li>Good <b>ergonomics</b> reduces errors; e.g. the Three Mile Island nuclear accident (1979) involved confusing displays.</li></ul>
<h4>Reducing accidents: token economy</h4>
<ul><li>Workers earn tokens for safe behaviour, which can be exchanged for rewards (operant conditioning).</li>
<li>Example study: <b>Fox et al. (1987)</b> – trading stamps for accident-free work at two US open-pit mines led to large, long-lasting falls in days lost through injury and in accident costs (see also Health 3.5.2).</li></ul>
<h4>Monitoring accidents</h4>
<p>Recording accidents <b>and</b> near-misses/minor injuries reveals patterns and causes so they can be prevented. ➜ Key study <b>Swat (1997)</b>.</p>`,
      debates: ['indsit', 'idio', 'longitudinal', 'objsubj', 'gen'],
      vids: [['XC301FqHv28', 'Human error in safety: slips, lapses & violations', 'HSEworkplace', '1:47'], ['-ELyuXbm_AE', 'Monitoring and preventing accidents at work: the Swat study', 'TheTeacherKind', '3:56'], ['0aZOz5_JR_Q', 'Reducing accidents at work (9990 revision)', 'Mr. Luis', '10:39']],
      terms: [['Error of omission', 'Failing to do a required action.'], ['Error of commission', 'Doing an action incorrectly.'], ['Sequence error', 'Doing steps in the wrong order.'], ['Timing error', 'Doing an action too early, too late or too slowly.'], ['System error', 'An error caused by poor design of controls or displays.'], ['Token economy', 'Earning exchangeable tokens for desired behaviour.']] }
    ],
    quiz: [
      ['In the Hawthorne studies, productivity increased because…', ['Lighting improved', 'Workers were paid more', 'Workers were being observed and given attention', 'Shifts were shorter'], 2, 'The Hawthorne effect.'],
      ['Oldham and Brass (1979) found moving to open-plan offices…', ['Increased satisfaction', 'Reduced satisfaction', 'Had no effect', 'Increased pay'], 1, 'Lower satisfaction and motivation.'],
      ['Shifts that change every few days are…', ['Slow rotation', 'Rapid rotation', 'Flexitime', 'On-call'], 1, 'Rapid rotation.'],
      ['Gold et al. (1992) studied…', ['Miners', 'Nurses', 'Pilots', 'Students'], 1, 'Nurses on rotating vs fixed shifts.'],
      ['Pressing the wrong button is an error of…', ['Omission', 'Commission', 'Sequence', 'Timing'], 1, 'Commission – doing the wrong thing.'],
      ['Swat (1997) found that roughly what % of minor incidents went unreported at the meat plant?', ['5%', '45%', '95%', '0%'], 2, 'About 95% of minor incidents were unreported.']
    ],
    exam: [
      { p: 3, q: '(a) Describe the effects of shiftwork on health and accidents. [6]  (b) Evaluate research into shiftwork, including a discussion of the application of psychology to everyday life. [10]', guide: ['(a) Rapid/slow rotation, circadian rhythm disruption, health problems, accidents.', '(a) Gold et al. (1992): nurses, rotating vs fixed, ~twice the accidents/errors.', '(b) Application: designing forward, rapid rotations; flexitime; reducing night shifts.', '(b) Self-report questionnaires (validity), correlational data (other factors), one hospital (generalisation); conclusion.'] },
      { p: 4, q: 'Swat (1997) analysed accident records. Explain one strength and one weakness of using records (secondary data) to study accidents.', guide: ['Strength: objective, already collected, covers long periods/many workers – no observer effects.', 'Weakness: many minor incidents are never recorded (~95% at the meat plant); records may lack detail on causes.'] }
    ] },

  /* ───────────── 4.5 SATISFACTION ───────────── */
  { id: 'o5', code: '4.5', title: 'Satisfaction at work', emoji: '😊',
    subs: [
    { id: 'o451', code: '4.5.1', title: 'Theories of job satisfaction',
      inShort: 'Herzberg: hygiene factors prevent dissatisfaction; motivators create satisfaction. Hackman and Oldham: five job characteristics lead to three psychological states. Job design: enrichment, rotation, enlargement.',
      notes: `
<h4>Herzberg’s two-factor theory (1959)</h4>
<div class="two">
<div class="box minus"><b>🧼 Hygiene factors</b> (job context)<br>Pay, working conditions, company policy, supervision, relationships with colleagues, job security.<br>➜ If poor they cause <b>dissatisfaction</b>; if good they only remove dissatisfaction – they <b>don’t motivate</b>.</div>
<div class="box plus"><b>⭐ Motivators</b> (job content)<br>Achievement, recognition, the work itself, responsibility, advancement/growth.<br>➜ Create <b>satisfaction</b> and motivation.</div></div>
<p>Based on interviews with about 200 engineers and accountants using the <b>critical incident technique</b> (describe times you felt very good/bad about your job). Satisfaction and dissatisfaction are <b>separate</b> scales, not opposite ends of one.</p>
<h4>Hackman and Oldham’s job characteristics theory (1976)</h4>
<table class="mini"><tr><th>Core job characteristics</th><th>➜ Critical psychological states</th></tr>
<tr><td><b>Skill variety</b> – range of skills used<br><b>Task identity</b> – completing a whole piece of work<br><b>Task significance</b> – impact on others</td><td><b>Experienced meaningfulness</b> of the work</td></tr>
<tr><td><b>Autonomy</b> – freedom to decide how to work</td><td><b>Experienced responsibility</b> for outcomes</td></tr>
<tr><td><b>Feedback</b> – clear information about performance</td><td><b>Knowledge of results</b></td></tr></table>
<p>➜ Outcomes: high motivation, performance, satisfaction, low absenteeism/turnover – especially for people with high <b>growth need strength</b>. <b>Motivating potential score</b> = ((SV + TI + TS) ÷ 3) × A × F.</p>
<h4>Techniques of job design</h4>
<ul><li><b>Job enrichment</b> (vertical) – more responsibility, autonomy and decision-making (a motivator in Herzberg’s terms).</li>
<li><b>Job rotation</b> – moving between different tasks/jobs to reduce boredom and build skills.</li>
<li><b>Job enlargement</b> (horizontal) – more tasks at the <b>same level</b> (can just mean more work).</li>
<li>Example: <b>Belias and Sklikas (2013)</b> discussed how these job design techniques can increase motivation and job satisfaction, especially job enrichment.</li></ul>`,
      debates: ['app', 'culture', 'red', 'idio', 'gen'],
      vids: [['HQoqGao6a8s', 'What is two-factor theory? (easiest explanation)', 'Helpful Professor', '4:25'], ['tWBLeOD8SN8', 'Hackman & Oldham’s job design model', 'tutor2u', '4:26']],
      terms: [['Hygiene factors', 'Herzberg: factors that prevent dissatisfaction (pay, conditions).'], ['Motivators', 'Herzberg: factors that create satisfaction (achievement, recognition).'], ['Task identity', 'Completing a whole, identifiable piece of work.'], ['Job enrichment', 'Adding responsibility and autonomy (vertical).'], ['Job enlargement', 'Adding more tasks at the same level (horizontal).'], ['Job rotation', 'Moving workers between tasks.']] },

    { id: 'o452', code: '4.5.2', title: 'Measuring job satisfaction',
      inShort: 'The Job Descriptive Index (JDI) rates five facets of a job with yes/no/? answers. Walton’s quality of working life (QWL) has eight conditions and can be measured with a QWL scale.',
      notes: `
<h4>Rating scales and questionnaires: the Job Descriptive Index (JDI)</h4>
<ul><li>Developed by Smith, Kendall and Hulin (1969). Measures satisfaction with <b>five facets</b>: the <b>work itself</b>, <b>pay</b>, <b>promotion opportunities</b>, <b>supervision</b> and <b>co-workers</b>.</li>
<li>Employees respond to short words/phrases describing each facet (e.g. “fascinating”, “routine”, “underpaid”) with <b>Yes</b>, <b>No</b> or <b>?</b> (cannot decide). A separate “Job in General” scale gives overall satisfaction.</li>
<li><i>+</i> quick, standardised, quantitative, widely used and well validated. <i>−</i> doesn’t explain <b>why</b>; social desirability (fear of managers seeing answers); fixed facets may miss what matters to a particular worker.</li></ul>
<h4>Walton’s quality of working life (QWL) – eight conditions (1975)</h4>
<ol><li><b>Adequate and fair compensation</b>.</li>
<li><b>Safe and healthy working conditions</b>.</li>
<li><b>Opportunity to use and develop human capacities</b> (autonomy, skills).</li>
<li><b>Opportunity for continued growth and security</b> (career development).</li>
<li><b>Social integration</b> in the work organisation (belonging, no prejudice).</li>
<li><b>Constitutionalism</b> – rights at work: privacy, free speech, fair treatment.</li>
<li><b>Work and the total life space</b> – balance between work and personal life.</li>
<li><b>Social relevance of work life</b> – the organisation is socially responsible.</li></ol>
<p>A <b>QWL evaluation scale</b> (questionnaire) asks employees to rate each condition, giving a profile of strengths and weaknesses.</p>
<p class="mem">🧠 Walton’s 8: “<b>C</b>ash, <b>S</b>afety, <b>S</b>kills, <b>G</b>rowth, <b>B</b>elonging, <b>R</b>ights, <b>B</b>alance, <b>S</b>ociety”.</p>`,
      debates: ['indsit', 'quantqual', 'psychometrics', 'validity', 'reliability'],
      vids: [['CB92_8wFisA', 'Job attitudes & job satisfaction (I/O psychology)', 'Professor Q', '7:13'], ['volPGT2mrDg', 'Organisational 4.5.2 – how to measure job satisfaction', 'Excelling Psychology', '35:10']],
      terms: [['JDI', 'Job Descriptive Index: yes/no/? responses about five job facets.'], ['Quality of working life', 'Walton: eight conditions that make work life good.'], ['Constitutionalism', 'Workers’ rights at work: privacy, free speech, fairness.'], ['Facet', 'A specific aspect of a job (pay, supervision, etc.).']] },

    { id: 'o453', code: '4.5.3', title: 'Attitudes to work', ks: 'giacalone1987',
      inShort: 'Workplace sabotage includes slowdowns, destruction, dishonesty and causing chaos – people justify it for different reasons (Giacalone and Rosenfeld). Blau and Boal: job involvement and organisational commitment predict types of absence.',
      notes: `
<h4>Workplace sabotage</h4>
<ul><li><b>Methods</b>: <b>slowdowns</b> (deliberately working slowly), <b>destructiveness</b> (damaging equipment or products), <b>dishonesty</b> (lying, stealing, falsifying records) and <b>causing chaos</b> (disrupting systems or procedures).</li>
<li><b>Reasons</b>: revenge for unfair treatment, protecting yourself or others, frustration, boredom, gaining control, or for fun.</li>
<li>➜ Key study <b>Giacalone and Rosenfeld (1987)</b>.</li></ul>
<h4>Blau and Boal’s absenteeism and organisational commitment model (1987)</h4>
<p>Two attitudes predict absence: <b>job involvement</b> (how much you identify with your job) and <b>organisational commitment</b> (loyalty to the organisation).</p>
<table class="mini"><tr><th></th><th>High organisational commitment</th><th>Low organisational commitment</th></tr>
<tr><th>High job involvement</th><td><b>Institutional stars</b> – lowest absenteeism</td><td><b>Lone wolves</b> – committed to their job/career, not the company</td></tr>
<tr><th>Low job involvement</th><td><b>Corporate citizens</b> – loyal to the company but not excited by the job</td><td><b>Apathetic employees</b> – highest absenteeism</td></tr></table>
<p><b>Types of absence</b>:</p>
<ul><li><b>Medical</b> – genuine illness, injury or family demands; random, unavoidable.</li>
<li><b>Career-enhancing</b> – time off for interviews, training, other career goals (common in lone wolves).</li>
<li><b>Normative</b> – following the organisation’s norms about acceptable absence (e.g. using expected personal days).</li>
<li><b>Calculative</b> – deliberately using up the allowed number of absence days (linked to very low commitment).</li></ul>`,
      debates: ['app', 'indsit', 'red', 'idio', 'gen'],
      vids: [['2A5QfGmedF0', 'Giacalone & Rosenfeld (1987): employee sabotage', 'TheTeacherKind', '4:58'], ['I7EOghXzQns', 'Absenteeism in the workplace', 'Future Learning', '2:41']],
      terms: [['Sabotage', 'Deliberate damage to an organisation’s work, property or reputation.'], ['Job involvement', 'How much someone identifies with and cares about their job.'], ['Organisational commitment', 'Loyalty and attachment to the organisation.'], ['Institutional star', 'High job involvement + high commitment – lowest absence.'], ['Calculative absence', 'Deliberately using up allowed absence days.']] }
    ],
    quiz: [
      ['According to Herzberg, pay is a…', ['Motivator', 'Hygiene factor', 'Job characteristic', 'Critical state'], 1, 'Pay is a hygiene factor.'],
      ['In Hackman and Oldham’s model, autonomy leads to…', ['Experienced meaningfulness', 'Experienced responsibility', 'Knowledge of results', 'Hygiene'], 1, 'Autonomy → experienced responsibility.'],
      ['Adding more tasks at the same level is…', ['Enrichment', 'Enlargement', 'Rotation', 'Empowerment'], 1, 'Job enlargement (horizontal).'],
      ['The JDI’s response options are…', ['1–10', 'Yes / No / ?', 'True / False', 'Strongly agree–disagree'], 1, 'Yes, No or ? (cannot decide).'],
      ['Which is one of Walton’s eight QWL conditions?', ['Constitutionalism', 'Valence', 'Storming', 'Initiating structure'], 0, 'Constitutionalism = rights at work.'],
      ['High job involvement + low organisational commitment =', ['Institutional star', 'Lone wolf', 'Corporate citizen', 'Apathetic employee'], 1, 'Lone wolves.'],
      ['Which sabotage method did people find hardest to justify (Giacalone and Rosenfeld)?', ['Slowdowns', 'Causing chaos', 'Dishonesty', 'Destructiveness'], 2, 'Dishonesty was justified least, even by those accepting many reasons.']
    ],
    exam: [
      { p: 3, q: '(a) Describe two theories of job satisfaction. [6]  (b) Evaluate these theories, including a discussion of reductionism versus holism. [10]', guide: ['(a) Herzberg: hygiene factors vs motivators, separate scales, critical incident technique.', '(a) Hackman and Oldham: five core characteristics → three psychological states → outcomes; growth need strength.', '(b) Reductionism: Herzberg reduces satisfaction to two factors; H&O more holistic with moderators.', '(b) Methodology (Herzberg’s self-serving attributions in interviews), culture, usefulness (job design); conclusion.'] },
      { p: 4, q: 'Plan a study using a questionnaire to investigate whether job involvement is related to absenteeism in a hotel. [10]', guide: ['Correlational study: co-variable 1 = job involvement score (questionnaire, rating scale), co-variable 2 = days absent from HR records (objective).', 'Example closed questions, scoring, plus an open question about reasons for absence.', 'Sample: all staff willing to take part (volunteer); ethics: anonymity, confidentiality, consent, no pressure from managers.', 'Data: scatter graph; expected negative correlation; reliability via test–retest.'] }
    ] }
  ]
};

/* ───────────── ORGANISATIONAL KEY STUDIES ───────────── */
Object.assign(PSY.studies, {
  landry2019: { opt: 'organisational', sub: 'o413', name: 'Landry et al. (2019)', short: 'Self-determination theory & cash rewards (study 1)',
    ref: 'Landry, A. T., Zhang, Y., Papachristopoulos, K. & Forest, J. (2019). Applying self-determination theory to understand the motivational impact of cash rewards: New evidence from lab experiments. International Journal of Psychology, 55(3), 487–498.',
    context: 'Money is widely used to motivate employees, but research is mixed: sometimes rewards motivate and sometimes they undermine intrinsic motivation. Self-determination theory suggests the meaning of the reward matters – rewards presented in an informational (autonomy-supportive) way should satisfy the needs for competence, autonomy and relatedness, while controlling rewards frustrate them.',
    aim: 'To test whether presenting a cash reward in an informational (autonomy-supportive) or a controlling way affects psychological need satisfaction, motivation and performance – and whether need satisfaction explains (mediates) the effect.',
    sample: '123 French-speaking university students from an organisational behaviour course in Canada (65 in the autonomy-supportive condition, 58 in the controlling condition); mean age 23; 60% women; volunteers.',
    method: 'Laboratory experiment, independent measures with random allocation; self-report questionnaires and a performance task.',
    procedure: ['Participants were randomly assigned to one of two conditions and read a short instruction paragraph about a task and its reward – a $10 gift card for a local coffee shop.', 'Autonomy-supportive (informational) condition: the reward was presented as “a token of appreciation for their contribution”.', 'Controlling condition: the reward was presented as “a means to reinforce the performance standards for the task”.', 'Both versions were checked by 7 experts and pilot-tested on 50 students; a manipulation check asked participants to summarise the instructions.', 'Participants completed measures of positive/negative affect and the perceived value of the reward (control variables).', 'They then had 2 minutes to find as many 4-letter words as possible in 25 strings of scrambled letters (anagram task); performance = right answers minus wrong answers, relative to the maximum.', 'Finally they rated their psychological need satisfaction and frustration and their intrinsic and extrinsic motivation (7-point Likert scales).'],
    results: ['The autonomy-supportive condition reported higher need satisfaction (5.79 vs 5.39) and lower need frustration (2.41 vs 2.83).', 'Intrinsic motivation was higher (5.31 vs 4.56) and extrinsic motivation lower (3.10 vs 3.95) in the autonomy-supportive condition.', 'Performance was much better in the autonomy-supportive condition (0.76 vs 0.54) – all differences were significant.', 'Path analysis showed need satisfaction explained (mediated) the link between condition and intrinsic motivation and performance.'],
    conclusion: 'The same cash reward motivates people more when it is presented in an informational, autonomy-supportive way: it satisfies psychological needs, which increases intrinsic motivation and performance. Managers should think about how rewards are communicated, not just how big they are.',
    ev: { plus: ['Laboratory experiment with random allocation and control variables – high control, cause and effect.', 'Standardised, pilot-tested instructions and validated scales – reliable.', 'Practical application: how managers present rewards can be changed cheaply.'],
          minus: ['Student sample doing a short anagram task for a $10 card – low ecological validity for real jobs and salaries.', 'Self-report measures of motivation – social desirability/demand characteristics.', 'One culture (French-speaking Canadian students) – limited generalisation (study 2 tried to address this online).'] },
    debates: { indsit: 'Shows a situational factor (how a reward is framed) affects motivation.', red: 'Reduces motivation to responses to one reward on one task.', det: 'Supports a degree of free will – autonomy matters to motivation.', gen: 'Students in a lab may not represent employees at work.' } },

  cuadrado2008: { opt: 'organisational', sub: 'o422', name: 'Cuadrado et al. (2008)', short: 'Leadership style and gender',
    ref: 'Cuadrado, I., Morales, J. F. & Recio, P. (2008). Women’s access to managerial positions: an experimental study of leadership styles and gender. The Spanish Journal of Psychology, 11(1), 55–65.',
    context: 'Women are under-represented in top management worldwide. Role congruity theory predicts that women who lead in stereotypically masculine ways (e.g. autocratic, task-oriented) will be judged less favourably because this conflicts with expectations of women, while feminine styles (e.g. democratic, relationship-oriented) fit the female role.',
    aim: 'To test whether evaluations of leaders depend on the leader’s sex and on whether their leadership style is stereotypically masculine or feminine.',
    sample: '136 undergraduate students in Spain.',
    method: 'Laboratory experiment with a 2 × 2 independent measures design (leader sex: male/female × leadership style: masculine-stereotyped/feminine-stereotyped); questionnaire ratings.',
    procedure: ['Participants read a description of a leader that varied in the leader’s sex and in the leadership style used (masculine-stereotyped, e.g. task-oriented/autocratic, vs feminine-stereotyped, e.g. relationship-oriented/democratic).', 'They then rated the leader on competence, efficacy (effectiveness) and a series of traits.'],
    results: ['Regardless of the leader’s sex, leaders using stereotypically feminine styles were rated as more competent and efficient and were evaluated more favourably than leaders using masculine styles.'],
    conclusion: 'Feminine-stereotyped leadership styles are evaluated positively, so the scarcity of women in top management cannot simply be explained by women having “less effective” leadership styles; the findings are discussed in relation to role congruity and women’s under-representation.',
    ev: { plus: ['Controlled 2 × 2 experiment – leader sex and style manipulated independently, so effects can be separated.', 'Standardised written descriptions – replicable.', 'Relevant to real issues of gender equality in management.'],
          minus: ['Students with little management experience rating fictional leaders – low ecological validity.', 'Self-report ratings may be affected by social desirability (not wanting to appear sexist).', 'Spanish sample only – gender stereotypes differ across cultures.'] },
    debates: { indsit: 'Evaluation depended on leadership behaviour (situational) more than the leader’s sex.', gen: 'Student sample limits generalisation to workplaces.', app: 'Informs leadership training and fair promotion practices.' } },

  claypoole2019: { opt: 'organisational', sub: 'o432', name: 'Claypoole and Szalma (2019)', short: 'Electronic performance monitoring & sustained attention (experiment 1)',
    ref: 'Claypoole, V. L. & Szalma, J. L. (2019). Electronic Performance Monitoring and sustained attention: Social facilitation for modern applications. Computers in Human Behavior, 94, 25–34.',
    context: 'Social facilitation research shows that being watched can improve performance on simple tasks. Today many workers are monitored electronically rather than by a person. Vigilance (sustained attention) tasks – like monitoring screens for rare signals – are boring and performance usually declines over time.',
    aim: 'To investigate whether electronic presence (being monitored by cameras) improves performance on a sustained attention (vigilance) task – i.e. whether social facilitation occurs with electronic monitoring.',
    sample: '106 participants (university students) in experiment 1.',
    method: 'Laboratory experiment, independent measures: electronic monitoring vs control (alone).',
    procedure: ['Participants performed a vigilance task – watching a display for a long period and responding when rare “critical” signals appeared.', 'In the electronic presence condition, two forms of monitoring were used at the same time – a webcam and a video recorder – and participants knew they were being monitored.', 'In the control condition, participants did the task alone with no monitoring.', 'Correct detections and false alarms were recorded; self-reports (e.g. stress, workload) were also collected.'],
    results: ['Monitored participants made a higher proportion of correct detections (about 0.69) than controls (about 0.60).', 'Monitored participants made significantly fewer false alarms (about 0.006 vs 0.020).'],
    conclusion: 'Electronic monitoring can produce social facilitation effects similar to a physically present observer, improving sustained attention – relevant to the growing use of electronic performance monitoring at work (though its effects on stress and privacy also need considering).',
    ev: { plus: ['Controlled lab experiment with a clear IV – cause and effect; quantitative, objective measures (detections, false alarms).', 'Relevant to modern workplaces that use electronic monitoring.', 'Reasonably large sample (106).'],
          minus: ['Students doing an artificial lab task – low ecological validity for real jobs.', 'Short-term effects only – long-term monitoring might increase stress and lower morale.', 'Ethical concerns about monitoring employees (privacy, trust).'] },
    debates: { app: 'Informs the use of monitoring technology at work.', det: 'Behaviour is shaped by the situation (being watched).', quantqual: 'Mainly quantitative performance data.' } },

  swat1997: { opt: 'organisational', sub: 'o443', name: 'Swat (1997)', short: 'Monitoring accidents & risk events',
    ref: 'Swat, K. (1997). Monitoring of accidents and risk events in industrial plants. Journal of Occupational Health, 39(2), 100–104.',
    context: 'Official accident records usually only include serious accidents, so many minor injuries and “risk events” (near misses) go unrecorded – losing information that could help prevent future accidents. The author worked at the Nofer Institute of Occupational Medicine in Poland.',
    aim: 'To develop a practical method of recording accidents and risk events in industrial plants so that their causes can be identified and accidents prevented.',
    sample: 'Four Polish industrial plants from different branches – a foundry, a machinery plant, a meat-processing plant and a furniture factory – employing a total of 2,964 workers.',
    method: 'A three-year longitudinal study (from 1994) analysing accident records and monitoring data (secondary and observational data, case-study style).',
    procedure: ['83 accidents that occurred in the four plants in 1993 were analysed for their frequency, severity, and direct and indirect causes.', 'A method for recording accidents and risk events was developed.', 'A follow-up was carried out at the meat plant in 1994 to look at minor incidents.'],
    results: ['At least 45.8% of the accidents involved violations of basic housekeeping principles (e.g. untidy, poorly organised workplaces).', 'The meat-plant follow-up suggested that most minor incidents – about 95% – are never reported.'],
    conclusion: 'Accidents should be recorded according to the circumstances in which they occur and their type, and minor injuries (especially those needing first aid) should be recorded too, so that hazards can be spotted and prevented.',
    ev: { plus: ['Real-world data from four different industries – high ecological validity.', 'Longitudinal follow-up adds depth.', 'Practical value: a simple recording method that companies can use to prevent accidents.'],
          minus: ['Relies on records, which are incomplete (as the study itself shows).', 'Polish plants in the 1990s – may not generalise to other countries or modern workplaces.', 'Mostly descriptive – cannot establish cause and effect.'] },
    debates: { indsit: 'Housekeeping violations point to situational/organisational causes as well as individual errors.', objsubj: 'Uses objective accident records, though reporting depends on people.', gen: 'Four plants in one country.' } },

  giacalone1987: { opt: 'organisational', sub: 'o453', name: 'Giacalone and Rosenfeld (1987)', short: 'Reasons for employee sabotage',
    ref: 'Giacalone, R. A. & Rosenfeld, P. (1987). Reasons for employee sabotage in the workplace. Journal of Business and Psychology, 1(4), 367–378.',
    context: 'Sabotage costs organisations a lot, yet little research had asked employees themselves when they think sabotage is justified. Understanding the reasons could help managers prevent it.',
    aim: 'To investigate which reasons employees see as justifying sabotage, and how justifiable they consider different methods of sabotage.',
    sample: 'Unionised workers at a US factory (reported in revision sources as 38 employees).',
    method: 'Self-report questionnaire using rating scales (quantitative).',
    procedure: ['Workers rated how far a variety of reasons would justify the use of sabotage in an organisation (e.g. revenge for unfair treatment, protecting oneself or co-workers, boredom, fun).', 'They also rated how justifiable four general methods of sabotage are: slowdowns, destructiveness, dishonesty and causing chaos.'],
    results: ['Workers who accepted a wide variety of reasons for sabotage more readily justified all forms of sabotage except dishonesty, compared with those who accepted fewer reasons.', 'Dishonesty received the least justification overall.', 'Reasons involving protecting oneself or responding to unfair treatment tended to be seen as more justifiable than sabotage for fun or personal gain.'],
    conclusion: 'Employees’ beliefs about when sabotage is justified are linked to their acceptance of sabotage methods; organisations can reduce sabotage by reducing the perceived reasons for it, such as unfair treatment.',
    ev: { plus: ['Asks employees directly – useful insight into motives for a hidden behaviour.', 'Rating scales give quantitative, comparable data.', 'Useful for managers: treating staff fairly may reduce sabotage.'],
          minus: ['Small sample from one unionised factory – limited generalisation.', 'Self-report on a sensitive topic – social desirability; justifying ≠ actually doing.', 'Fixed lists of reasons and methods may miss others (no qualitative detail).'] },
    debates: { indsit: 'Sabotage linked to situational factors (unfair treatment) as well as individual attitudes.', app: 'Helps prevent sabotage through fair management.', gen: 'Small, specific sample.' } }
});

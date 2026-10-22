/* Clinical Psychology — Cambridge International A Level Psychology 9990 (syllabus for 2027), Specialist Option 1 */
window.PSY = window.PSY || { options: {}, studies: {} };

PSY.options.clinical = {
  id: 'clinical', name: 'Clinical Psychology', short: 'Clinical', emoji: '🧠', color: '#7c5cff',
  blurb: 'Mental disorders: how they are diagnosed, explained and treated.',
  intro: `Clinical psychology looks at five groups of disorders. For each one you need to know the <b>diagnostic criteria (ICD-11)</b>, the <b>explanations</b> (biological and psychological) and the <b>treatments</b>, and be able to <b>evaluate and compare</b> them. Biological = genes, brain chemicals, drugs, ECT. Psychological = behavioural, cognitive and psychodynamic explanations and therapies.`,
  topics: [
  /* ───────────────────────── 1.1 SCHIZOPHRENIA ───────────────────────── */
  { id: 'c1', code: '1.1', title: 'Schizophrenia', emoji: '🌀',
    subs: [
    { id: 'c111', code: '1.1.1', title: 'Diagnosing schizophrenia', ks: 'freeman2003',
      inShort: 'Schizophrenia is a psychotic disorder where a person loses touch with reality. ICD-11 diagnosis needs symptoms for at least a month, including at least one “core” symptom such as delusions or hallucinations.',
      notes: `
<h4>What is schizophrenia?</h4>
<p>A severe mental disorder in which thinking, perception, emotion and behaviour are disturbed so much that the person partly loses contact with reality (<b>psychosis</b>). About 1 in 100 people develop it, usually in late teens to early 30s.</p>
<h4>ICD-11 diagnostic criteria (simplified)</h4>
<ul>
<li>At least <b>two</b> symptoms, present most of the time for <b>at least 1 month</b>.</li>
<li>At least <b>one</b> of them must be a <b>core</b> symptom: persistent <b>delusions</b>, persistent <b>hallucinations</b>, <b>disorganised thinking</b> (shown in speech), or experiences of <b>influence, passivity or control</b> (feeling your thoughts or actions are controlled by an outside force).</li>
<li>Other symptoms can include grossly disorganised behaviour, <b>psychomotor disturbances</b> (e.g. catatonia) and <b>negative symptoms</b>.</li>
<li>The symptoms are <b>not</b> caused by another health condition or by drugs/medication.</li>
</ul>
<h4>Positive vs negative symptoms</h4>
<div class="two">
<div class="box plus"><b>➕ Positive symptoms</b> (something <i>added</i> to normal experience)
<ul><li><b>Hallucinations</b> – perceiving things that are not there (hearing voices is most common).</li><li><b>Delusions</b> – fixed false beliefs.</li><li><b>Disorganised thinking/speech</b> – e.g. jumping between topics, “word salad”.</li></ul></div>
<div class="box minus"><b>➖ Negative symptoms</b> (something <i>taken away</i>)
<ul><li><b>Avolition</b> – loss of motivation.</li><li><b>Alogia</b> – very little speech.</li><li><b>Flat (blunted) affect</b> – little emotional expression.</li><li><b>Anhedonia</b> – no pleasure; <b>asociality</b> – withdrawal from others.</li></ul></div>
</div>
<p class="mem">🧠 Memory trick: <b>Positive = Plus</b> (extra experiences). <b>Negative = Not there any more</b> (lost abilities).</p>
<h4>Types of delusion</h4>
<ul>
<li><b>Persecution</b> – “People are plotting against me / out to harm me.” (the most common)</li>
<li><b>Grandeur</b> – believing you are extremely important, powerful or famous.</li>
<li><b>Reference</b> – believing ordinary events (TV, songs, number plates) carry special messages for you.</li>
<li><b>Control</b> – believing your thoughts or actions are controlled by others.</li>
<li>Others: <b>erotomania</b> (someone famous is secretly in love with you), <b>nihilistic</b> (you or the world don’t exist), <b>jealousy</b>.</li>
</ul>
<h4>A case study of schizophrenia: the Genain quadruplets</h4>
<p>Four identical sisters born in the USA in 1930 (given the pseudonyms Nora, Iris, Myra and Hester) <b>all</b> developed schizophrenia, studied over many years by Rosenthal (1963) at the US National Institute of Mental Health. Their symptoms differed in severity (Hester was most severely affected, Myra least). Their home life was also very stressful – their father was controlling and abusive.</p>
<p class="tip">💡 Use this case to show <b>both</b> sides of nature–nurture: identical genes (all four affected) <i>and</i> a harsh environment (and different severity despite the same genes).</p>
<h4>Investigating delusions with virtual reality</h4>
<p>Paranoid (persecutory) thoughts exist on a <b>continuum</b> – many ordinary people have them occasionally. Virtual reality (VR) lets researchers create a <b>neutral</b> social situation where every person sees exactly the same thing. If someone feels threatened by neutral computer characters, the threat must come from their <i>interpretation</i>, not from the situation. ➜ See the key study <b>Freeman et al. (2003)</b>.</p>`,
      debates: ['indsit', 'children', 'idio', 'case', 'gen'],
      vids: [['0zHU6fiM2KY', 'Schizophrenia explained (symptoms & delusions)', 'Rhesus Medicine', '8:33'], ['ESNpR8jgRSU', 'Positive and negative symptoms', 'Lauren Kennedy West', '6:01'], ['SKF6UcBcjAU', 'Key study: Freeman et al. (2003)', 'TheTeacherKind', '4:34']],
      terms: [['Psychosis', 'Losing contact with reality, e.g. through hallucinations and delusions.'], ['Hallucination', 'A perception (usually hearing voices) of something that is not there.'], ['Delusion', 'A firmly held false belief that is not changed by evidence.'], ['Persecutory delusion', 'A false belief that others are trying to harm or plot against you.'], ['Avolition', 'A negative symptom: loss of motivation to start or complete activities.'], ['Alogia', 'A negative symptom: poverty of speech.']] },

    { id: 'c112', code: '1.1.2', title: 'Explaining schizophrenia',
      inShort: 'Biological explanations blame genes and too much dopamine. The cognitive explanation says faulty thinking (like not recognising your own thoughts) causes symptoms.',
      notes: `
<h4>1. Genetic explanation</h4>
<p>Schizophrenia runs in families – the closer the genetic relationship, the higher the risk. Gottesman (1991) summarised about 40 family and twin studies:</p>
<table class="mini"><tr><th>Relationship to person with schizophrenia</th><th>Lifetime risk</th></tr>
<tr><td>General population</td><td>about 1%</td></tr><tr><td>Sibling</td><td>about 9%</td></tr><tr><td>Dizygotic (non-identical) twin</td><td>about 17%</td></tr><tr><td>Child of two parents with schizophrenia</td><td>about 46%</td></tr><tr><td>Monozygotic (identical) twin</td><td>about 48%</td></tr></table>
<ul><li>It is <b>polygenic</b> – many genes each add a small risk (e.g. genes involved in dopamine such as <i>DRD2</i> and <i>COMT</i>).</li>
<li>Identical twins share 100% of genes but only about 48% concordance ➜ genes give a <b>vulnerability</b>, not certainty.</li></ul>
<h4>2. Biochemical explanation: the dopamine hypothesis</h4>
<ul>
<li><b>Original version:</b> too much dopamine activity (<b>hyperdopaminergia</b>) – too many D2 receptors or too much dopamine released – in the <b>mesolimbic pathway</b> causes <b>positive symptoms</b> like hallucinations.</li>
<li><b>Revised version</b> (Davis et al., 1991): also too <b>little</b> dopamine (<b>hypodopaminergia</b>) in the <b>prefrontal cortex</b> (mesocortical pathway) causes <b>negative symptoms</b> and thinking problems.</li>
</ul>
<p><b>Evidence:</b> amphetamines (which increase dopamine) can produce schizophrenia-like symptoms; antipsychotic drugs that block D2 receptors reduce positive symptoms; Parkinson’s patients given L-dopa (which raises dopamine) sometimes hallucinate.</p>
<h4>3. Psychological (cognitive) explanation</h4>
<ul>
<li><b>Frith (1992) – faulty “metarepresentation”</b>: the ability to reflect on your own thoughts is damaged, so the person cannot recognise their inner speech as their own ➜ <b>hearing voices</b> and feeling that thoughts are being inserted.</li>
<li><b>Faulty “central control”</b>: inability to suppress automatic responses ➜ <b>disorganised speech</b> (derailment) and odd behaviour.</li>
<li><b>Cognitive biases</b>: e.g. <b>jumping to conclusions</b> on little evidence (Garety and Freeman) and seeing threat in neutral events ➜ delusions.</li>
<li><b>Beck and Rector (2005)</b>: negative symptoms are linked to dysfunctional beliefs (“There’s no point trying, I’ll fail”).</li>
</ul>
<p class="tip">💡 Exam favourite: <b>compare</b> biological vs cognitive explanations using debates – <i>reductionism</i>, <i>nature–nurture</i>, <i>determinism</i>. The <b>diathesis–stress model</b> combines them: genetic vulnerability + stressful life events ➜ disorder.</p>`,
      ev: { plus: ['Genetic: strong twin and family evidence; explains why it runs in families.', 'Dopamine: supported by drug evidence and led to effective antipsychotic drugs (useful – application to everyday life).', 'Cognitive: explains the content of symptoms (voices, odd speech) and led to CBT for psychosis.'],
            minus: ['Genetic: MZ concordance is only ~48%, so environment must matter; families share environments too.', 'Dopamine: cause or effect? Drugs block dopamine within hours but take weeks to work; atypical drugs also act on serotonin; glutamate is also involved.', 'Cognitive: describes the faulty thinking but does not explain where it comes from; harder to test objectively.', 'Biological explanations are reductionist and deterministic; ignore social stress (e.g. Genain family environment).'] },
      debates: ['indsit', 'nn', 'red', 'det', 'idio'],
      vids: [['akqy2sRYiBo', 'Genetic explanation of schizophrenia', "Faye Carlisle's Psychology Videos", '5:34'], ['Ox8kpMXBEV4', 'Dopamine hypothesis & revised dopamine hypothesis', 'Renwick Psychology', '3:28'], ['HOnYCQ_GW1I', 'Psychological (cognitive) explanations of schizophrenia', 'Psych Boost', '8:57']],
      terms: [['Concordance rate', 'How often both twins share a disorder (as a percentage).'], ['Polygenic', 'Caused by many genes, each adding a small amount of risk.'], ['Dopamine hypothesis', 'Schizophrenia is caused by too much dopamine activity (mesolimbic pathway) – revised to include too little in the prefrontal cortex.'], ['Metarepresentation', 'The ability to reflect on your own thoughts; Frith says it is faulty in schizophrenia.'], ['Diathesis–stress model', 'A vulnerability (diathesis, e.g. genes) plus a trigger (stress) together cause a disorder.']] },

    { id: 'c113', code: '1.1.3', title: 'Treating schizophrenia',
      inShort: 'Antipsychotic drugs (typical and atypical) reduce dopamine activity. ECT is used rarely. CBT helps people challenge their beliefs about voices and delusions.',
      notes: `
<h4>Biological: antipsychotic drugs</h4>
<div class="two">
<div class="box"><b>Typical (1st generation)</b> e.g. chlorpromazine, haloperidol
<ul><li><b>Dopamine antagonists</b>: block D2 receptors ➜ reduce positive symptoms.</li><li>Side effects: <b>extrapyramidal symptoms</b> (tremors, stiffness), <b>tardive dyskinesia</b> (involuntary face/mouth movements).</li></ul></div>
<div class="box"><b>Atypical (2nd generation)</b> e.g. clozapine, risperidone, olanzapine
<ul><li>Block D2 more loosely/briefly <b>and</b> block serotonin (5-HT2A) receptors ➜ also help some negative symptoms.</li><li>Fewer movement side effects but <b>weight gain</b> and diabetes risk; clozapine can cause a dangerous blood disorder (agranulocytosis), so patients need regular blood tests.</li></ul></div></div>
<h4>Biological: electro-convulsive therapy (ECT)</h4>
<ul><li>Under general anaesthetic and a muscle relaxant, a brief electric current is passed through the brain to cause a short seizure; usually a course of several sessions.</li>
<li>Rarely used for schizophrenia – mainly for <b>catatonia</b> or people who do not respond to drugs, often <b>alongside</b> medication.</li>
<li>Side effects: memory loss (especially around the treatment time), confusion, headaches. Ethical concerns because of its history of misuse.</li></ul>
<h4>Psychological: cognitive-behavioural therapy (CBT for psychosis)</h4>
<ul><li>Aim: not to “cure” but to <b>reduce distress</b> and improve functioning.</li>
<li><b>Normalising</b> – explaining that many people hear voices; <b>reality testing</b> – checking evidence for delusions; <b>challenging</b> beliefs about voices (“the voice is powerful”); coping strategies.</li>
<li>Example study: <b>Sensky et al. (2000)</b> – a randomised controlled trial with 90 patients whose schizophrenia had not responded to drugs. They received up to 19 sessions over 9 months of either CBT or <b>befriending</b> (a control for spending time with a therapist). Both groups improved by the end of treatment, but at the <b>9-month follow-up</b> the CBT group <b>kept improving</b> while the befriending group lost its gains.</li></ul>`,
      ev: { plus: ['Drugs work fairly quickly, are cheap and let many people live outside hospital.', 'Atypicals help a wider range of symptoms with fewer movement side effects.', 'CBT gives long-lasting benefits (Sensky) and empowers the patient (free will).', 'Combining drugs + CBT is often most effective (holistic).'],
            minus: ['Drugs treat symptoms, not causes; relapse is common if stopped; serious side effects reduce adherence.', 'Ethical issues: side effects, informed consent with severely ill patients, ECT memory loss.', 'CBT needs a motivated patient who can engage – hard during severe psychosis; it is expensive and slow.', 'ECT evidence for schizophrenia is limited and effects may not last.'] },
      debates: ['idio', 'experiments', 'longitudinal', 'gen', 'ethics'],
      vids: [['NvQRbl9C3hc', 'Typical vs atypical antipsychotics', 'Rhesus Medicine', '6:16'], ['AcmarVpo2xE', 'The truth about electroconvulsive therapy (ECT)', 'TED-Ed', '4:24'], ['VcOICx73pyQ', 'CBT for psychosis', 'PsychEd', '5:54']],
      terms: [['Antipsychotic', 'A drug that reduces psychotic symptoms, mainly by blocking dopamine D2 receptors.'], ['Typical antipsychotic', 'First-generation drug (e.g. chlorpromazine) that blocks D2 receptors; movement side effects.'], ['Atypical antipsychotic', 'Second-generation drug (e.g. clozapine) blocking D2 and serotonin receptors.'], ['Tardive dyskinesia', 'Involuntary repetitive movements (often face/mouth) caused by long-term typical antipsychotic use.'], ['ECT', 'Electro-convulsive therapy: a brief electric current causes a controlled seizure under anaesthetic.'], ['Befriending', 'A control condition in therapy trials: friendly contact with a therapist but no CBT techniques.']] }
    ],
    quiz: [
      ['According to ICD-11, how long must schizophrenia symptoms be present (most of the time)?', ['At least 1 week', 'At least 1 month', 'At least 6 months', 'At least 1 year'], 1, 'ICD-11 requires symptoms most of the time for at least one month.'],
      ['Which of these is a NEGATIVE symptom?', ['Hearing voices', 'Delusions of grandeur', 'Avolition', 'Word salad'], 2, 'Negative symptoms are things taken away – avolition is loss of motivation.'],
      ['A man believes the newsreader is sending him secret messages. This is a delusion of…', ['Persecution', 'Reference', 'Grandeur', 'Control'], 1, 'Delusions of reference = ordinary events seem to carry special personal meaning.'],
      ['The revised dopamine hypothesis says negative symptoms are linked to…', ['Too much dopamine in the mesolimbic pathway', 'Too little dopamine in the prefrontal cortex', 'Too much serotonin', 'Too little GABA'], 1, 'Hypodopaminergia in the prefrontal (mesocortical) pathway is linked to negative symptoms.'],
      ['The concordance rate for schizophrenia in identical (MZ) twins is roughly…', ['100%', '75%', '48%', '9%'], 2, 'About 48% (Gottesman, 1991) – showing genes are important but not the whole story.'],
      ['In Sensky et al. (2000), what happened at the 9-month follow-up?', ['Both groups relapsed', 'Befriending was better than CBT', 'CBT patients kept improving; befriending lost gains', 'No one was followed up'], 2, 'CBT benefits lasted and even grew; the befriending group’s improvement faded.'],
      ['Clozapine requires regular blood tests because it can cause…', ['Tardive dyskinesia', 'Agranulocytosis', 'Memory loss', 'Weight loss'], 1, 'Clozapine can cause agranulocytosis, a dangerous fall in white blood cells.'],
      ['In Freeman et al. (2003), why were the virtual characters programmed to be neutral?', ['To save money', 'So any persecutory thoughts came from the participant’s interpretation', 'To scare participants', 'To test hallucinations'], 1, 'Because the avatars were neutral, any paranoid thoughts must have come from the person, not the situation.']
    ],
    exam: [
      { p: 3, q: '(a) Describe two explanations of schizophrenia. [6]  (b) Evaluate these explanations, including a discussion of reductionism versus holism. [10]', guide: ['(a) Genetic: family/twin evidence with figures (MZ ~48%, general ~1%), polygenic.', '(a) Dopamine hypothesis: hyperdopaminergia in mesolimbic pathway → positive symptoms; revised: hypodopaminergia in prefrontal cortex → negative.', '(b) Reductionism: reduces a complex disorder to genes/chemicals; ignores family stress (Genain).', '(b) Holism: diathesis–stress or combining cognitive + biological gives a fuller picture.', '(b) Use evidence: drug evidence for dopamine; concordance not 100%.', '(b) Also: nature–nurture, determinism, usefulness (led to treatments).', '(b) End with a reasoned conclusion.'] },
      { p: 4, q: 'A psychiatrist wants to compare a new atypical antipsychotic with an older typical drug. Plan a randomised controlled trial to investigate this. [10]', guide: ['Aim + directional/non-directional hypothesis.', 'Sample: e.g. 60 adults diagnosed (ICD-11) recruited from hospitals – volunteer sampling; random allocation to drug A / drug B / placebo-or-treatment-as-usual.', 'Double-blind procedure.', 'IV: type of drug; DV: symptom score e.g. a standardised rating scale at baseline, 6 and 12 weeks.', 'Controls: same dose schedule, same raters, same time points.', 'Ethics: valid consent (capacity), right to withdraw, monitoring side effects, debrief.', 'Quantitative data; compare mean change scores; bar chart.'] }
    ] },

  /* ───────────────────────── 1.2 MOOD DISORDERS ───────────────────────── */
  { id: 'c2', code: '1.2', title: 'Mood (affective) disorders', emoji: '🌦️',
    subs: [
    { id: 'c121', code: '1.2.1', title: 'Diagnosing depression & bipolar',
      inShort: 'Depressive disorder = low mood or loss of interest nearly every day for 2+ weeks. Bipolar disorder includes manic (or hypomanic) episodes. Depression can be measured with the Beck Depression Inventory (BDI).',
      notes: `
<h4>Depressive disorder (unipolar) – ICD-11</h4>
<ul><li>A <b>depressive episode</b>: depressed mood or <b>loss of interest/pleasure</b> nearly every day for <b>at least 2 weeks</b>, plus other symptoms such as:</li>
<li>poor concentration or indecisiveness • feelings of <b>worthlessness</b> or excessive guilt • <b>hopelessness</b> • thoughts of death or suicide • changes in <b>sleep</b> and <b>appetite</b> • psychomotor agitation or slowing • tiredness / low energy.</li>
<li>Can be a <b>single episode</b> or <b>recurrent</b> depressive disorder (two or more episodes).</li></ul>
<h4>Bipolar disorders – ICD-11</h4>
<ul><li><b>Bipolar type I</b>: at least one <b>manic</b> (or mixed) episode. Mania = an extreme mood state (very elevated, euphoric or irritable) with increased activity/energy, lasting at least 1 week, plus e.g. rapid/pressured speech, racing thoughts (flight of ideas), inflated self-esteem, much less need for sleep, distractibility and impulsive/reckless behaviour (spending, risk-taking).</li>
<li><b>Bipolar type II</b>: at least one <b>hypomanic</b> episode (milder, no severe impairment) <b>and</b> at least one depressive episode – no full manic episode.</li>
<li>Episodes of depression often alternate with episodes of mania/hypomania.</li></ul>
<p class="mem">🧠 “Uni” = one pole (only lows). “Bi” = two poles (highs <b>and</b> lows).</p>
<h4>Measuring depression: the Beck Depression Inventory (BDI)</h4>
<ul><li>Created by <b>Beck</b> (1961; revised as BDI-II in 1996). A <b>self-report questionnaire</b> with <b>21 items</b> (e.g. sadness, pessimism, guilt, loss of energy, changes in sleep).</li>
<li>Each item scored <b>0–3</b> ➜ total <b>0–63</b>. BDI-II guide: 0–13 minimal, 14–19 mild, 20–28 moderate, 29–63 severe.</li>
<li>A <b>psychometric</b> test: quick, standardised, gives <b>quantitative</b> data; good reliability. But it relies on honest self-report (social desirability), and was developed in Western cultures – symptoms may be described differently in other cultures (e.g. as physical complaints).</li></ul>`,
      debates: ['indsit', 'culture', 'quantqual', 'psychometrics', 'validity'],
      vids: [['ZwMlHkWKDwM', 'Depressive and bipolar disorders', 'CrashCourse', '10:00'], ['7qir8-ncvBA', 'Bipolar disorder explained clearly', 'Rhesus Medicine', '6:49'], ['kMVWWObn0uM', 'Beck Depression Inventory (BDI) – guide', 'clinicaltoolslibrary', '6:00']],
      terms: [['Unipolar depression', 'Depressive disorder with only depressive episodes (no mania).'], ['Mania', 'An extreme elevated or irritable mood with high energy, little need for sleep and reckless behaviour, lasting at least a week.'], ['Hypomania', 'A milder form of mania without severe impairment.'], ['Bipolar I', 'At least one manic or mixed episode.'], ['Bipolar II', 'At least one hypomanic episode and one depressive episode, but no full mania.'], ['BDI', 'Beck Depression Inventory: 21-item self-report, scored 0–63.']] },

    { id: 'c122', code: '1.2.2', title: 'Explaining depression', ks: 'oruc1997',
      inShort: 'Biological: low serotonin/noradrenaline and genes (Oruč et al. studied serotonin genes). Psychological: Beck’s negative thinking and Seligman’s learned helplessness / attributional style.',
      notes: `
<h4>Biological: biochemical (monoamine) explanation</h4>
<ul><li>Depression is linked to <b>low levels of monoamine neurotransmitters</b>, especially <b>serotonin</b> and <b>noradrenaline</b>.</li>
<li>Evidence: antidepressants that raise serotonin (SSRIs) reduce symptoms; lowering serotonin (tryptophan depletion) can bring back low mood in recovered patients.</li>
<li>Problems: drugs change serotonin within hours but take weeks to work; recent reviews question whether low serotonin is a <i>cause</i> – it may be an <i>effect</i> or one part of a bigger picture.</li></ul>
<h4>Biological: genetic explanation</h4>
<ul><li>Depression and especially <b>bipolar disorder</b> run in families; MZ twins show higher concordance than DZ twins (bipolar is one of the most heritable disorders).</li>
<li><b>Candidate genes</b> involved in serotonin, e.g. the <b>serotonin transporter gene (5-HTT)</b> and the <b>5-HT2C receptor gene</b>.</li>
<li>➜ Key study <b>Oruč et al. (1997)</b> tested whether these genes are associated with bipolar disorder.</li></ul>
<h4>Psychological: Beck’s cognitive theory of depression</h4>
<ul><li><b>Negative cognitive triad</b>: negative views about the <b>self</b> (“I’m useless”), the <b>world</b> (“everyone is against me”) and the <b>future</b> (“it will never get better”).</li>
<li><b>Negative schemas</b> develop in childhood (e.g. through criticism or loss) and are activated by stress.</li>
<li><b>Cognitive biases/errors</b>: overgeneralisation, magnification and minimisation, selective abstraction (focusing on one negative detail), arbitrary inference (jumping to conclusions), personalisation, all-or-nothing thinking.</li></ul>
<h4>Psychological: learned helplessness & attributional style</h4>
<ul><li><b>Seligman (1975)</b>: dogs given unavoidable shocks later did not try to escape even when they could – they had <b>learned helplessness</b>. People who feel that nothing they do changes anything may become depressed.</li>
<li><b>Attributional style</b> (Abramson, Seligman and Teasdale, 1978): depression-prone people explain bad events as <b>internal</b> (“it’s my fault”), <b>stable</b> (“it will always be like this”) and <b>global</b> (“it ruins everything”).</li>
<li>Example study: <b>Seligman et al. (1988)</b> – as depressed patients improved during cognitive therapy, their explanatory style became more optimistic, and those whose style stayed pessimistic were more likely to relapse.</li></ul>
<p class="mem">🧠 Attributional style = <b>I.S.G.</b> – “It’s me, it’s forever, it’s everything.”</p>`,
      ev: { plus: ['Biochemical: explains why antidepressants work; objective, scientific evidence.', 'Genetic: twin/family studies support a biological vulnerability, especially for bipolar.', 'Beck: supported by research on negative thinking; led to effective cognitive therapy.', 'Learned helplessness: explains why uncontrollable stress (poverty, abuse) can cause depression – situational.'],
            minus: ['Biochemical: cause-and-effect problem; ignores life events.', 'Genetic: no single gene; association studies (like Oruč) give small, inconsistent effects.', 'Beck: negative thinking might be a symptom rather than a cause; blames the individual.', 'Learned helplessness: based partly on animal research – generalisation to humans and ethical problems.'] },
      debates: ['nn', 'red', 'det', 'experiments', 'reliability'],
      vids: [['KZlLiPR7ll4', 'Psychology – Depression', 'Cognito', '6:13'], ['EhVbSBlcbdI', 'Oruč et al. (1997) – mood disorders key study', 'Alt Academy', '15:14'], ['SVeAD-PKnwc', 'Beck’s negative triad and depression', 'Psychology Unlocked', '4:56'], ['_1SqVxoGIuA', 'The learned helplessness model of depression', 'Peak Brain Performance Centers', '3:43']],
      terms: [['Monoamine hypothesis', 'Depression is caused by low levels of monoamines such as serotonin and noradrenaline.'], ['Negative cognitive triad', 'Beck: negative views of the self, the world and the future.'], ['Negative schema', 'A mental framework of negative beliefs formed in childhood and activated by stress.'], ['Learned helplessness', 'Learning that you cannot control outcomes, so you stop trying (Seligman).'], ['Attributional style', 'How you explain events; a depressive style is internal, stable and global.'], ['Candidate gene', 'A gene suspected of being linked to a disorder because of what it does (e.g. 5-HTT).']] },

    { id: 'c123', code: '1.2.3', title: 'Treating depression',
      inShort: 'Antidepressants (tricyclics, MAOIs, SSRIs) raise monoamine levels. Psychological therapies change thinking: Beck’s cognitive restructuring and Ellis’s REBT (ABC model).',
      notes: `
<h4>Biological: antidepressant drugs</h4>
<table class="mini"><tr><th>Type</th><th>How it works</th><th>Downsides</th></tr>
<tr><td><b>Tricyclics</b> (e.g. amitriptyline)</td><td>Block reuptake of serotonin <b>and</b> noradrenaline</td><td>Many side effects (dry mouth, drowsiness, weight gain); dangerous in overdose</td></tr>
<tr><td><b>MAOIs</b> (e.g. phenelzine)</td><td>Inhibit the enzyme <b>monoamine oxidase</b>, which breaks down monoamines ➜ more serotonin/noradrenaline</td><td>Need a special diet – foods with tyramine (cheese, cured meat) can cause dangerously high blood pressure</td></tr>
<tr><td><b>SSRIs</b> (e.g. fluoxetine/Prozac, sertraline)</td><td><b>Selectively</b> block reuptake of <b>serotonin</b></td><td>Fewer side effects (nausea, sexual problems); take 2–6 weeks to work</td></tr></table>
<p>For bipolar disorder, <b>mood stabilisers</b> such as lithium are commonly used.</p>
<h4>Psychological: Beck’s cognitive restructuring (cognitive therapy)</h4>
<ul><li>The therapist and client work together (<b>collaborative empiricism</b>) to identify <b>automatic negative thoughts</b>.</li>
<li>The client keeps a <b>thought diary</b>, then <b>challenges</b> thoughts by looking for evidence for and against them and replacing them with more balanced thoughts.</li>
<li><b>Behavioural experiments</b> test beliefs in real life (“If I phone my friend she will ignore me”).</li></ul>
<h4>Psychological: Ellis’s rational emotive behaviour therapy (REBT)</h4>
<p><b>ABC model</b>: <b>A</b>ctivating event ➜ <b>B</b>elief about it ➜ <b>C</b>onsequence (emotion/behaviour). It is the <i>belief</i>, not the event, that causes the depression.</p>
<ul><li>Irrational beliefs: “<b>musturbation</b>” (I must be perfect), <b>awfulising</b> (“this is the worst thing ever”), “I-can’t-stand-it-itis”.</li>
<li>Therapy adds <b>D</b> – <b>Disputing</b> beliefs (empirical: “where’s the evidence?”, logical: “does it follow?”, pragmatic: “does believing this help you?”) – and <b>E</b> – an <b>Effective</b> new belief.</li></ul>
<p class="mem">🧠 ABCDE: Activating event, Belief, Consequence, Dispute, Effect.</p>`,
      ev: { plus: ['Drugs are quick to prescribe, cheap and need little effort from very depressed patients.', 'SSRIs are safer than tricyclics/MAOIs.', 'Cognitive therapies have long-lasting effects and lower relapse; they give the client skills (free will).', 'Combining drugs and therapy often works best (holism).'],
            minus: ['Drugs treat symptoms, not causes; relapse when stopped; side effects lower adherence.', 'Drug effects may be partly placebo, especially for mild depression.', 'CBT/REBT need motivation and time; may not suit severe depression or every culture.', 'REBT can feel confrontational; therapy assumes the problem is “in the person” and ignores real situational problems (poverty, abuse).'] },
      debates: ['app', 'indsit', 'red', 'det', 'gen'],
      vids: [['xQM-gn8jgQM', 'Antidepressants – animation', 'Alila Medical Media', '5:02'], ['orPPdMvaNGA', 'Cognitive restructuring in CBT', 'Beck Institute', '5:43'], ['WRRdSm4ZjX4', 'The ABC model', 'Therapist Aid', '3:52'], ['YJnZBm6Y51Y', 'ABCDE model – changing negative beliefs', 'Lewis Psychology', '6:35']],
      terms: [['SSRI', 'Selective serotonin reuptake inhibitor – blocks the reuptake of serotonin only (e.g. fluoxetine).'], ['MAOI', 'Monoamine oxidase inhibitor – stops the enzyme that breaks down monoamines.'], ['Tricyclic', 'An older antidepressant that blocks reuptake of serotonin and noradrenaline.'], ['Cognitive restructuring', 'Beck’s technique of identifying and challenging negative automatic thoughts.'], ['REBT', 'Rational emotive behaviour therapy (Ellis): disputing irrational beliefs using the ABC(DE) model.'], ['Musturbation', 'Ellis’s term for rigid “must” beliefs, e.g. “I must be liked by everyone”.']] }
    ],
    quiz: [
      ['A depressive episode in ICD-11 must last at least…', ['3 days', '2 weeks', '2 months', '6 months'], 1, 'Depressed mood or loss of interest nearly every day for at least two weeks.'],
      ['Bipolar type II involves…', ['At least one full manic episode', 'Hypomania and depression but no full mania', 'Only depression', 'Only hallucinations'], 1, 'Type II = hypomanic + depressive episodes, never a full manic episode.'],
      ['The BDI has how many items?', ['10', '21', '40', '63'], 1, '21 items, each scored 0–3, total 0–63.'],
      ['Beck’s cognitive triad refers to negative views of…', ['Past, present, future', 'Self, world, future', 'Family, friends, school', 'Body, mind, spirit'], 1, 'Self, world and future.'],
      ['Explaining failure as “internal, stable and global” is…', ['A depressive attributional style', 'Learned optimism', 'A positive symptom', 'Cognitive restructuring'], 0, 'A depressive (pessimistic) attributional style.'],
      ['MAOIs require dietary restrictions because…', ['They cause weight gain', 'Tyramine-rich foods can cause dangerously high blood pressure', 'They work only with food', 'They block serotonin'], 1, 'Tyramine (in cheese, cured meats) can trigger a hypertensive crisis with MAOIs.'],
      ['In Ellis’s ABC model, what directly causes the Consequence?', ['The Activating event', 'The Belief', 'The therapist', 'Genes'], 1, 'The belief about the event – not the event itself.'],
      ['Oruč et al. (1997) found significant associations…', ['In the whole sample', 'Only trends, in female patients', 'Only in men', 'In the control group'], 1, 'No significant association in the total sample; trends in women (p ≈ .05).']
    ],
    exam: [
      { p: 3, q: '(a) Describe Beck’s cognitive restructuring and Ellis’s REBT as treatments for depression. [6]  (b) Evaluate these treatments, including a comparison with biological treatments. [10]', guide: ['(a) Beck: identify automatic negative thoughts, thought diary, challenge with evidence, behavioural experiments, collaborative empiricism.', '(a) Ellis: ABC model, irrational beliefs (musturbation, awfulising), disputing (empirical/logical/pragmatic), effective new beliefs.', '(b) Strengths: lasting effects, lower relapse, client skills (free will).', '(b) Weaknesses: need motivation, time, cost; may ignore situational causes.', '(b) Compare with SSRIs etc.: quicker but symptom-focused, side effects, relapse.', '(b) Debates: individual vs situational, reductionism, determinism; conclude.'] },
      { p: 4, q: 'Oruč et al. (1997) used a case–control design. (a) Explain one strength and one weakness of the sample used. (b) Suggest how the study could be improved.', guide: ['Sample: 42 bipolar I patients, 40 healthy controls (Croatia).', 'Strength: clearly diagnosed patients and controls → valid comparison.', 'Weakness: small sample → low power, results only trends; one culture → limited generalisation.', 'Improvement: much larger samples, several countries, equal sexes, genome-wide approach.'] }
    ] },

  /* ───────────────────────── 1.3 IMPULSE CONTROL ───────────────────────── */
  { id: 'c3', code: '1.3', title: 'Impulse control disorders', emoji: '🎰',
    subs: [
    { id: 'c131', code: '1.3.1', title: 'Diagnosing impulse control disorders',
      inShort: 'People repeatedly fail to resist strong urges: stealing things they don’t need (kleptomania), setting fires (pyromania) or gambling despite harm (gambling disorder). Kleptomania can be measured with the K-SAS.',
      notes: `
<p>The core idea in all three: <b>repeated failure to resist a strong impulse</b>, with <b>tension before</b> the act and <b>relief or pleasure</b> during/after it, causing distress or harm.</p>
<h4>Kleptomania</h4>
<ul><li>Repeated failure to control strong impulses to <b>steal objects</b> that are <b>not needed</b> for personal use or for their money value.</li>
<li>Increasing tension before stealing; pleasure, gratification or relief during/after.</li>
<li>Not done out of anger/revenge and not better explained by another disorder.</li></ul>
<h4>Pyromania</h4>
<ul><li>Repeated failure to control strong impulses to <b>set fires</b> – multiple acts or attempts.</li>
<li>Tension or arousal before; intense <b>fascination</b> with fire and its surroundings; pleasure or relief when setting or watching fires.</li>
<li>Not for money, revenge, political reasons or to hide a crime.</li></ul>
<h4>Gambling disorder</h4>
<ul><li>A persistent pattern of gambling (online or offline) with <b>impaired control</b> (when, how often, how much), gambling taking <b>increasing priority</b> over other interests, and <b>continuing despite negative consequences</b> (debt, lost relationships).</li>
<li>Usually evident for at least <b>12 months</b>. (In ICD-11 it is grouped with “disorders due to addictive behaviours”.)</li></ul>
<h4>Measuring: the Kleptomania Symptom Assessment Scale (K-SAS)</h4>
<ul><li>A <b>self-report</b> rating scale (Grant and Kim) with <b>11 questions</b> about the past week: urges to steal (how often, how strong, how much time), thoughts, tension, excitement, actual stealing and the problems caused.</li>
<li>Each item scored 0–4 ➜ total up to 44; higher = more severe. Gives <b>quantitative</b> data and is useful for tracking change during treatment.</li>
<li>Weakness: <b>subjective</b> – people may under-report illegal behaviour (social desirability).</li></ul>`,
      debates: ['idio', 'questionnaires', 'case', 'quantqual', 'objsubj'],
      vids: [['N5Xc2RNzRBY', 'Introduction to impulse control disorders', 'Mr. Luis', '10:25'], ['bSlesHk0ShU', 'Impulse control disorder – A Level psychology', 'Alt Academy', '18:46']],
      terms: [['Kleptomania', 'Recurrent failure to resist impulses to steal objects not needed for use or money.'], ['Pyromania', 'Recurrent failure to resist impulses to set fires, with fascination and relief.'], ['Gambling disorder', 'Impaired control over gambling that takes priority and continues despite harm.'], ['K-SAS', 'Kleptomania Symptom Assessment Scale: 11-item self-report of urges, thoughts and behaviour over the past week.']] },

    { id: 'c132', code: '1.3.2', title: 'Explaining impulse control disorders',
      inShort: 'Biological: the dopamine reward system. Behavioural: positive reinforcement (especially unpredictable rewards). Cognitive: Miller’s feeling-state theory – a behaviour gets “fused” with an intense positive feeling.',
      notes: `
<h4>Biological: dopamine</h4>
<ul><li>Impulsive behaviours activate the brain’s <b>reward pathway</b> (mesolimbic dopamine system, e.g. nucleus accumbens) – the same system involved in drug addiction.</li>
<li>The “high” of winning/stealing/fire-setting releases dopamine, which strengthens the urge to repeat.</li>
<li>Evidence: some <b>Parkinson’s disease</b> patients given <b>dopamine agonist</b> drugs suddenly develop gambling or compulsive shopping problems.</li></ul>
<h4>Psychological – behavioural: positive reinforcement</h4>
<ul><li>A pleasant consequence (a win, excitement, the thrill of stealing) <b>positively reinforces</b> the behaviour, so it is repeated (operant conditioning).</li>
<li>Gambling uses a <b>variable ratio schedule</b> – wins are unpredictable – which makes behaviour very <b>resistant to extinction</b>. “Near misses” also feel rewarding.</li>
<li>Relief from tension also acts as <b>negative reinforcement</b>.</li></ul>
<h4>Psychological – cognitive: Miller’s feeling-state theory (2010)</h4>
<ul><li>During an intense positive experience, a <b>feeling</b> (e.g. “I’m a winner”, excitement, power) becomes <b>fixed together</b> with a specific <b>behaviour</b> (e.g. gambling) – a “<b>feeling-state</b>”.</li>
<li>Later, when the person wants that feeling (often because of unmet needs or low self-worth), the feeling-state is triggered and they feel compelled to repeat the behaviour.</li>
<li>Treatment idea: the <b>Feeling-State Addiction Protocol</b> breaks the link between the feeling and the behaviour (using eye-movement techniques similar to EMDR).</li></ul>`,
      ev: { plus: ['Dopamine: links to strong evidence from addiction and Parkinson’s drug effects; explains why treatments like opioid antagonists work.', 'Reinforcement: explains why gambling is so persistent (variable ratio schedule) – useful for designing safer gambling machines.', 'Feeling-state theory explains why the urge is so specific and emotional.'],
            minus: ['Dopamine: reductionist; not everyone who gets a dopamine “high” develops a disorder.', 'Reinforcement: ignores thoughts and why only some gamblers become addicted; based on animal learning.', 'Feeling-state theory is based on case studies by its founder – little controlled research.'] },
      debates: ['app', 'indsit', 'nn', 'red', 'det'],
      vids: [['2Marb5-DfwY', 'Impulse control disorder explained in 4 minutes', 'Mental Health Explained', '3:57'], ['5D7OqcO_rQM', 'The feeling-state theory', 'EY', '6:59']],
      terms: [['Positive reinforcement', 'A pleasant consequence that makes a behaviour more likely to be repeated.'], ['Variable ratio schedule', 'Rewards after an unpredictable number of responses – very resistant to extinction.'], ['Feeling-state theory', 'Miller: an intense feeling becomes fixed to a specific behaviour, driving the impulse.'], ['Reward pathway', 'Mesolimbic dopamine system that produces pleasure and motivation.']] },

    { id: 'c133', code: '1.3.3', title: 'Treating impulse control disorders', ks: 'grant2008',
      inShort: 'Drugs such as opioid antagonists (naltrexone, nalmefene) reduce urges – Grant et al. looked at who responds. CBT methods include covert sensitisation and imaginal desensitisation.',
      notes: `
<h4>Biological treatments</h4>
<ul><li><b>Opioid antagonists</b> such as <b>naltrexone</b> and <b>nalmefene</b> block opioid receptors, which reduces dopamine release in the reward pathway ➜ weaker <b>urges</b> and less pleasure from gambling/stealing.</li>
<li>SSRIs and mood stabilisers are sometimes used too.</li>
<li>➜ Key study <b>Grant et al. (2008)</b>: what predicts who responds to these drugs (and to placebo)?</li></ul>
<h4>Psychological (CBT): covert sensitisation</h4>
<ul><li>A form of <b>aversion therapy in the imagination</b> (“covert” = hidden). The person imagines carrying out the behaviour (e.g. stealing) and then imagines an <b>unpleasant</b> consequence – feeling sick, being caught, humiliation.</li>
<li>The behaviour becomes associated with negative feelings (classical conditioning).</li>
<li>Example study: <b>Glover (1985)</b> treated a woman with long-standing kleptomania with covert sensitisation (imagining stealing paired with nausea); her stealing stopped and she remained free of it at follow-up.</li></ul>
<h4>Psychological (CBT): imaginal desensitisation</h4>
<ul><li>The person learns <b>relaxation</b>, then <b>imagines</b> a sequence of situations that would normally trigger the behaviour (e.g. walking past a betting shop, feeling the urge) – but imagines <b>leaving without</b> gambling, while staying relaxed.</li>
<li>This reduces the arousal/tension that drives the impulse.</li>
<li>Example study: <b>Blaszczynski and Nower (2003)</b> described this brief, structured, relaxation-based technique for gambling; earlier trials found it reduced gambling urges and behaviour more than aversion-based therapy.</li></ul>`,
      ev: { plus: ['Drugs: supported by randomised placebo-controlled trials; quick to use.', 'Imaginal methods are ethical (no real harm), cheap and can be done in a clinic.', 'Psychological therapies address triggers and give self-control skills.'],
            minus: ['Drugs: side effects (nausea), high placebo response, relapse when stopped; don’t teach coping.', 'Covert sensitisation relies on the person’s ability to imagine vividly; evidence is mostly case studies (idiographic, hard to generalise).', 'Individual differences: what works for one person may not work for another (Grant et al.).'] },
      debates: ['app', 'red', 'idio', 'interviews', 'gen'],
      vids: [['sRHGGDwSLeQ', 'Medications for pathological gambling', 'MentalHealthThoughts', '2:22'], ['fdSfkaH3wMA', 'Gambling: imaginal desensitisation', 'Counsellors Aid', '10:45']],
      terms: [['Opioid antagonist', 'A drug (e.g. naltrexone) that blocks opioid receptors, reducing the reward of the behaviour.'], ['Covert sensitisation', 'Imagining the problem behaviour paired with an unpleasant consequence.'], ['Imaginal desensitisation', 'Imagining trigger situations while relaxed and not acting on the urge.'], ['Placebo', 'An inactive substance used to compare against a real drug.']] }
    ],
    quiz: [
      ['A woman repeatedly steals cheap items she doesn’t need and feels relief afterwards. This fits…', ['Pyromania', 'Kleptomania', 'Gambling disorder', 'OCD'], 1, 'Kleptomania – stealing objects not needed, with tension then relief.'],
      ['How many items are on the K-SAS?', ['5', '11', '21', '40'], 1, 'The Kleptomania Symptom Assessment Scale has 11 items.'],
      ['Why is gambling so resistant to extinction?', ['Fixed interval rewards', 'Variable ratio reinforcement', 'Punishment', 'Classical conditioning only'], 1, 'Unpredictable wins (variable ratio) make behaviour very persistent.'],
      ['Miller’s feeling-state theory says impulses are driven by…', ['Low serotonin', 'A feeling fused with a specific behaviour', 'Unconscious conflicts', 'Genes only'], 1, 'An intense positive feeling becomes fixed to a behaviour (a feeling-state).'],
      ['In Grant et al. (2008), which variable most strongly predicted response to opioid antagonists?', ['Being female', 'Family history of alcoholism', 'Younger age', 'Gambling online'], 1, 'A positive family history of alcoholism (p = .006).'],
      ['Covert sensitisation involves…', ['Real electric shocks', 'Imagining the behaviour with an unpleasant consequence', 'Relaxing while gambling', 'Taking naltrexone'], 1, '“Covert” – it is done in the imagination.'],
      ['Some Parkinson’s patients develop gambling problems after taking…', ['SSRIs', 'Dopamine agonists', 'Antipsychotics', 'Beta-blockers'], 1, 'Dopamine agonists – evidence for the dopamine explanation.']
    ],
    exam: [
      { p: 3, q: '(a) Describe two psychological treatments for impulse control disorders. [6]  (b) Evaluate these treatments, including a discussion of idiographic versus nomothetic approaches. [10]', guide: ['(a) Covert sensitisation: imagined behaviour + aversive consequence; Glover (1985).', '(a) Imaginal desensitisation: relaxation + imagined trigger sequence without acting; Blaszczynski and Nower (2003).', '(b) Idiographic: case studies give rich detail but can’t generalise.', '(b) Nomothetic: RCT evidence (e.g. drug trials like Grant) allows general laws.', '(b) Ethics, cost, reliance on imagination, comparison with drugs; conclusion.'] },
      { p: 4, q: 'Grant et al. (2008) pooled data from two placebo-controlled trials. Explain why using a placebo group increases validity, and one problem with the measure of “response”.', guide: ['Placebo controls for expectation effects – any extra improvement is due to the drug.', 'Response = ≥35% reduction on PG-YBOCS for at least 1 month – a cut-off is arbitrary; self-report element; may miss partial improvement.'] }
    ] },

  /* ───────────────────────── 1.4 ANXIETY & FEAR ───────────────────────── */
  { id: 'c4', code: '1.4', title: 'Anxiety & fear-related disorders', emoji: '😨',
    subs: [
    { id: 'c141', code: '1.4.1', title: 'Diagnosing anxiety & fear-related disorders',
      inShort: 'Generalised anxiety disorder = constant worry about many things. Agoraphobia = fear of places that are hard to escape. Blood-injection-injury phobia often causes fainting. Measures: GAD-7 and the BIPI.',
      notes: `
<h4>Generalised anxiety disorder (GAD)</h4>
<ul><li>Marked anxiety lasting <b>at least several months</b>, on more days than not – either general “free-floating” apprehension or <b>excessive worry about many everyday things</b> (family, health, money, school/work).</li>
<li>Plus symptoms such as muscle tension, restlessness, nervousness, poor concentration, irritability, sleep problems and physical arousal (racing heart, sweating).</li></ul>
<h4>Agoraphobia</h4>
<ul><li>Marked, excessive fear of <b>multiple situations</b> where <b>escape might be difficult</b> or help unavailable – e.g. public transport, crowds, shops, being outside the home alone.</li>
<li>The person fears panic-like or embarrassing symptoms, so <b>avoids</b> these places or endures them with great distress; lasts several months.</li></ul>
<h4>Specific phobia – blood-injection-injury (BII) type</h4>
<ul><li>Marked, excessive fear of a specific object/situation that is out of proportion to the real danger, leading to avoidance.</li>
<li>BII phobia (blood, injections, medical procedures, injury) is <b>unusual</b>: it causes a <b>biphasic (two-stage) response</b> – heart rate and blood pressure first <b>rise</b>, then suddenly <b>drop</b> (<b>vasovagal response</b>) ➜ dizziness and <b>fainting</b>.</li></ul>
<h4>Measures</h4>
<ul><li><b>GAD-7</b>: 7 self-report questions about the <b>past 2 weeks</b>, each scored 0–3 ➜ total 0–21 (5 = mild, 10 = moderate, 15 = severe). Quick screening tool used by doctors.</li>
<li><b>Blood-Injection Phobia Inventory (BIPI)</b>: a self-report inventory listing BII situations and asking about cognitive, physiological and behavioural reactions to each. Example study: <b>Mas et al. (2010)</b> examined its psychometric properties and found it to be a reliable and valid measure.</li></ul>`,
      debates: ['questionnaires', 'psychometrics', 'objsubj', 'validity', 'reliability'],
      vids: [['U0l7b9zm2cU', 'Anxiety disorders and fear-related disorders', 'Mr. Luis', '11:27'], ['-gPiV1eNS8Y', 'Why do some people faint at the sight of blood?', 'BrainStuff – HowStuffWorks', '3:47']],
      terms: [['GAD', 'Generalised anxiety disorder: excessive worry about many things for at least several months.'], ['Agoraphobia', 'Fear of situations where escape may be difficult, leading to avoidance.'], ['Vasovagal response', 'A sudden drop in heart rate and blood pressure that causes fainting (typical of BII phobia).'], ['GAD-7', '7-item self-report scale (0–21) measuring anxiety over the past two weeks.'], ['BIPI', 'Blood-Injection Phobia Inventory – a self-report measure of BII phobia reactions.']] },

    { id: 'c142', code: '1.4.2', title: 'Explaining fear-related disorders',
      inShort: 'Genetic: phobias like BII run in families (Öst). Behavioural: phobias are learned by classical conditioning (Little Albert). Psychodynamic: phobias are displaced unconscious fears (Little Hans).',
      notes: `
<h4>Biological: genetic</h4>
<ul><li>Fear-related disorders run in families; BII phobia has an especially strong family link.</li>
<li>Example study: <b>Öst (1992)</b> studied people with blood and injection phobias and found that a large proportion (around two-thirds of the blood phobics) had at least one close relative with the same phobia, and most had a history of fainting.</li>
<li>We may also have an evolved readiness to fear certain things (e.g. blood/injury) – fainting may once have reduced blood loss.</li></ul>
<h4>Psychological – behavioural: classical conditioning</h4>
<ul><li>A neutral stimulus (NS) is paired with something frightening (unconditioned stimulus, UCS) until the NS alone triggers fear (conditioned response).</li>
<li>Example study: <b>Watson and Rayner (1920) – “Little Albert”</b>: an 11-month-old boy showed no fear of a white rat. Each time he touched it, a steel bar was struck loudly behind him. Soon he cried at the rat alone, and the fear <b>generalised</b> to a rabbit, a dog, a fur coat and a Santa Claus mask.</li>
<li><b>Two-process model</b> (Mowrer): phobias are <b>learned</b> by classical conditioning and <b>maintained</b> by operant conditioning – avoiding the feared thing reduces anxiety (negative reinforcement).</li></ul>
<h4>Psychological – psychodynamic</h4>
<ul><li>Freud: phobias are a <b>defence mechanism</b> – unconscious anxiety is <b>displaced</b> onto a safer, external object.</li>
<li>Example study: <b>Freud (1909) – “Little Hans”</b>: a 5-year-old boy feared horses (especially that they would bite him or fall down). Freud, working mainly from letters written by Hans’s father, said Hans unconsciously feared his <b>father</b> (Oedipus complex – castration anxiety) and displaced this onto horses (the horses’ black muzzles and blinkers resembled his father’s moustache and glasses).</li></ul>`,
      ev: { plus: ['Genetic: explains why only some people develop phobias after the same experiences.', 'Conditioning: well supported by experiments; explains how phobias start and continue; led to systematic desensitisation.', 'Psychodynamic: considers unconscious meaning and childhood; rich case detail.'],
            minus: ['Genetic: families share environments too; can’t separate nature and nurture.', 'Conditioning: many phobics can’t remember a frightening event; ignores thoughts; Little Albert was unethical (never deconditioned) and was a single case.', 'Psychodynamic: Little Hans relied on biased interpretation and the father’s reports – unfalsifiable; a simpler explanation is that Hans had seen a horse fall in the street.'] },
      debates: ['nn', 'det', 'case', 'longitudinal', 'validity'],
      vids: [['C9f0GWJCTAk', 'Watson and Rayner (1920) – Little Albert', 'PsychEd', '5:44'], ['nZCIPVWALno', 'The case of Little Hans', 'Renwick Psychology', '2:56']],
      terms: [['Classical conditioning', 'Learning by association: a neutral stimulus paired with a fear-producing stimulus comes to cause fear.'], ['Generalisation', 'A conditioned response spreading to similar stimuli (Albert fearing a rabbit and a fur coat).'], ['Two-process model', 'Phobias are acquired by classical conditioning and maintained by operant conditioning (avoidance).'], ['Displacement', 'A defence mechanism: moving unconscious feelings onto a safer target.'], ['Oedipus complex', 'Freud: a boy’s unconscious desire for his mother and rivalry with his father.']] },

    { id: 'c143', code: '1.4.3', title: 'Treating anxiety & fear-related disorders', ks: 'chapman2013',
      inShort: 'Systematic desensitisation gradually exposes a relaxed person to their fear. CBT changes fearful thoughts and uses exposure. Applied tension stops people with blood phobia from fainting.',
      notes: `
<h4>Behavioural therapy: systematic desensitisation (SD)</h4>
<ol><li><b>Relaxation training</b> – e.g. progressive muscle relaxation.</li>
<li>Build an <b>anxiety hierarchy</b> – feared situations ranked from least to most frightening.</li>
<li><b>Gradual exposure</b> – work up the hierarchy while relaxed, moving on only when calm at each step.</li></ol>
<p>Based on <b>counterconditioning / reciprocal inhibition</b> (Wolpe): you can’t be relaxed and afraid at the same time, so relaxation replaces fear. Exposure can be imagined (<i>in vitro</i>) or real (<i>in vivo</i>). Works for any fear-related disorder.</p>
<h4>Cognitive-behavioural therapy (CBT)</h4>
<ul><li><b>Psychoeducation</b> about fear and anxiety, <b>cognitive restructuring</b> of catastrophic thoughts (“I will faint and die”), and <b>exposure</b> to feared situations to test predictions.</li></ul>
<h4>Applied tension – for blood-injection-injury phobia</h4>
<ul><li>Because BII phobia causes a <b>drop in blood pressure</b>, relaxing (as in SD) can make fainting <b>more</b> likely.</li>
<li>Instead the person <b>tenses</b> the muscles of the arms, legs and torso to <b>raise blood pressure</b> and prevent fainting (developed by Öst).</li>
<li>In Chapman and DeLapp’s case: tense for <b>10–15 seconds</b>, release for <b>20–30 seconds</b>, repeat <b>5 times</b>; practise 5 times a day, then use it during exposure.</li></ul>
<p>➜ Key study <b>Chapman and DeLapp (2013)</b>: nine sessions of manualised CBT with applied tension for a man with BII phobia.</p>`,
      ev: { plus: ['SD and CBT have strong evidence and lasting results; patient stays in control (ethical, gradual).', 'Applied tension is quick to learn and targets the specific fainting problem.', 'CBT addresses thoughts as well as behaviour (more holistic).'],
            minus: ['SD needs time and the ability to imagine/relax; exposure can be distressing (dropout).', 'Evidence from single case studies (e.g. Chapman) is hard to generalise.', 'Treatments may not address underlying causes (psychodynamic critics say symptoms may return in another form – symptom substitution).'] },
      debates: ['idio', 'case', 'selfreport', 'longitudinal', 'gen'],
      vids: [['D5IfjJ1qW5A', 'Systematic desensitisation explained in 3 minutes', 'Social Science Explainer', '3:08'], ['a4ONEYiP5-Q', 'How to use applied muscle tension to prevent fainting', 'American Red Cross', '1:08'], ['Y22GZnDIGo4', 'Blood-injection-injury phobia: Chapman (key study)', 'AICE Psychology', '14:41']],
      terms: [['Systematic desensitisation', 'Gradual exposure to a fear hierarchy while relaxed.'], ['Anxiety hierarchy', 'A ranked list of feared situations from least to most frightening.'], ['Reciprocal inhibition', 'Two incompatible states (relaxation and fear) cannot exist at once.'], ['Applied tension', 'Tensing muscles to raise blood pressure and prevent fainting in BII phobia.'], ['SUDS', 'Subjective Units of Discomfort Scale: a 0–100 self-rating of distress.']] }
    ],
    quiz: [
      ['GAD in ICD-11 involves anxiety lasting…', ['A few hours', 'At least several months', 'Exactly 2 weeks', 'Only during panic attacks'], 1, 'Marked anxiety on more days than not for at least several months.'],
      ['Why is blood-injection-injury phobia unusual?', ['It has no physical symptoms', 'It often causes fainting due to a drop in blood pressure', 'It only affects children', 'It is treated with antipsychotics'], 1, 'A biphasic vasovagal response: BP rises then drops, causing fainting.'],
      ['GAD-7 asks about symptoms over the past…', ['24 hours', '2 weeks', '6 months', 'Year'], 1, 'Two weeks; 7 items scored 0–3 (total 0–21).'],
      ['Little Albert’s fear spreading to a fur coat is called…', ['Extinction', 'Generalisation', 'Discrimination', 'Displacement'], 1, 'Stimulus generalisation.'],
      ['Freud thought Little Hans’s fear of horses was really fear of…', ['Dogs', 'His father', 'Doctors', 'Falling'], 1, 'Displaced fear of his father (Oedipus complex).'],
      ['Why isn’t relaxation used for BII phobia exposure?', ['It is too slow', 'Relaxing lowers blood pressure, making fainting more likely', 'Patients can’t relax', 'It is unethical'], 1, 'Applied tension raises BP instead.'],
      ['In Chapman and DeLapp’s procedure, muscles were tensed for…', ['1–2 seconds', '10–15 seconds', '2 minutes', '10 minutes'], 1, 'Tense 10–15 s, release 20–30 s, repeat 5 times.']
    ],
    exam: [
      { p: 3, q: '(a) Describe the behavioural and psychodynamic explanations of fear-related disorders. [6]  (b) Evaluate these explanations, including a discussion of the use of case studies. [10]', guide: ['(a) Classical conditioning: NS + UCS → CS; Little Albert details; two-process model.', '(a) Psychodynamic: displacement of unconscious anxiety; Little Hans details.', '(b) Case studies: rich detail but single participants, researcher bias (Freud), ethics (Albert).', '(b) Conditioning testable and scientific; psychodynamic unfalsifiable.', '(b) Nature–nurture, determinism; conclusion.'] },
      { p: 4, q: 'Plan a study to investigate whether applied tension or systematic desensitisation is more effective for blood-injection-injury phobia. [10]', guide: ['Experiment (could be RCT), independent measures with random allocation.', 'Sample: adults with BII phobia diagnosed by interview; volunteer sample from clinics.', 'IV: applied tension vs SD; DV: BIPI score and fainting during a standardised blood test simulation.', 'Controls: same number of sessions, same therapist training, same measures at baseline/end/3-month follow-up.', 'Ethics: valid consent, right to withdraw, minimise distress, debrief.', 'Data: quantitative scores, means, bar chart.'] }
    ] },

  /* ───────────────────────── 1.5 OCD ───────────────────────── */
  { id: 'c5', code: '1.5', title: 'Obsessive-compulsive disorder', emoji: '🔁',
    subs: [
    { id: 'c151', code: '1.5.1', title: 'Diagnosing OCD',
      inShort: 'OCD = obsessions (unwanted repeated thoughts) and/or compulsions (repeated actions to reduce anxiety) that take lots of time or cause distress. Measured with the MOCI and the Y-BOCS.',
      notes: `
<h4>ICD-11 criteria (simplified)</h4>
<ul><li>Persistent <b>obsessions</b> and/or <b>compulsions</b>.</li>
<li><b>Obsessions</b>: repeated, persistent thoughts, images or impulses/urges that are <b>intrusive</b> and <b>unwanted</b> and usually cause anxiety. The person tries to ignore or neutralise them.</li>
<li><b>Compulsions</b>: repetitive behaviours (washing, checking, ordering) or mental acts (counting, repeating words) the person feels <b>driven</b> to perform in response to an obsession or rigid rules, to reduce anxiety or prevent a feared event.</li>
<li>They are <b>time-consuming</b> (e.g. more than an hour a day) or cause significant distress or impairment.</li></ul>
<h4>Common types of obsessions and compulsions</h4>
<table class="mini"><tr><th>Obsession</th><th>Linked compulsion</th></tr>
<tr><td>Contamination (germs, dirt)</td><td>Washing, cleaning</td></tr>
<tr><td>Doubt / harm (“Did I leave the cooker on?”)</td><td>Checking</td></tr>
<tr><td>Symmetry / exactness</td><td>Ordering, arranging, repeating</td></tr>
<tr><td>Forbidden or taboo thoughts (violent, sexual, religious)</td><td>Mental rituals, praying, reassurance-seeking</td></tr></table>
<p>Example study: <b>Rapoport (1989) – “Charles”</b>, “the boy who couldn’t stop washing”. A teenage boy spent hours each day washing in a fixed ritual because of contamination fears, which disrupted school and family life. He improved on the drug clomipramine, but the benefit faded over time.</p>
<h4>Measures</h4>
<ul><li><b>Maudsley Obsessive-Compulsive Inventory (MOCI)</b> (Hodgson and Rachman, 1977): <b>30 true/false</b> self-report statements, with subscales for <b>checking, washing/cleaning, slowness and doubting</b>.</li>
<li><b>Yale-Brown Obsessive-Compulsive Scale (Y-BOCS)</b> (Goodman et al., 1989): a <b>clinician-administered semi-structured interview</b>. A symptom checklist plus <b>10 severity items</b> (5 for obsessions, 5 for compulsions: time spent, interference, distress, resistance, control), each scored 0–4 ➜ total <b>0–40</b>.</li></ul>`,
      debates: ['interviews', 'case', 'quantqual', 'psychometrics', 'validity'],
      vids: [['iXnVjqeAzP4', 'OCD explained for beginners', 'Doctor Ali Mattu', '8:47'], ['I8Jofzx_8p4', 'Obsessive compulsive disorder – causes & symptoms', 'Osmosis', '5:19']],
      terms: [['Obsession', 'An intrusive, unwanted, repeated thought, image or urge that causes anxiety.'], ['Compulsion', 'A repetitive behaviour or mental act performed to reduce anxiety.'], ['MOCI', 'Maudsley Obsessive-Compulsive Inventory: 30 true/false self-report items.'], ['Y-BOCS', 'Yale-Brown Obsessive-Compulsive Scale: clinician interview, 10 severity items scored 0–40.']] },

    { id: 'c152', code: '1.5.2', title: 'Explaining OCD',
      inShort: 'Biological: low serotonin, a faulty brain “worry circuit” and genes. Psychological: thinking errors about normal intrusive thoughts, operant conditioning (compulsions reduce anxiety) and Freud’s psychodynamic ideas.',
      notes: `
<h4>Biological: biochemical</h4>
<ul><li><b>Low serotonin</b> activity is linked to OCD – SSRIs reduce symptoms in many patients. High dopamine may also play a part.</li>
<li>Brain circuits: overactivity in the <b>orbitofrontal cortex – caudate nucleus – thalamus loop</b> (the “worry circuit”), which normally passes on worry signals and then switches them off.</li></ul>
<h4>Biological: genetic</h4>
<ul><li>OCD runs in families; MZ twins show higher concordance than DZ twins.</li>
<li>Candidate genes involved in serotonin (e.g. the <b>SERT/5-HTT</b> serotonin transporter gene) and dopamine (e.g. <b>COMT</b>). OCD is <b>polygenic</b>.</li></ul>
<h4>Psychological – cognitive (thinking errors)</h4>
<ul><li>Almost everyone has odd intrusive thoughts – Rachman and de Silva (1978) found about 80% of ordinary people do.</li>
<li>People with OCD <b>misinterpret</b> them: <b>inflated responsibility</b> (“if something bad happens it’s my fault”), <b>thought–action fusion</b> (“thinking it makes it more likely / is as bad as doing it”), <b>overestimating threat</b> and <b>intolerance of uncertainty</b>.</li>
<li>Compulsions are attempts to “neutralise” these thoughts.</li></ul>
<h4>Psychological – behavioural (operant conditioning)</h4>
<ul><li>Performing a compulsion reduces anxiety ➜ the compulsion is <b>negatively reinforced</b> and repeated.</li>
<li>The person never learns that the feared outcome wouldn’t happen anyway, so the cycle continues.</li></ul>
<h4>Psychological – psychodynamic</h4>
<ul><li>Freud: OCD comes from conflict between the <b>id</b> (unacceptable urges) and the <b>superego</b>, and from <b>fixation at the anal stage</b> (e.g. harsh toilet training ➜ obsession with cleanliness, order and control).</li>
<li>Defence mechanisms: <b>undoing</b> (a compulsion “cancels” a forbidden thought), <b>reaction formation</b> (urge to be messy becomes extreme tidiness), <b>isolation</b>.</li></ul>`,
      ev: { plus: ['Biological: SSRI success and brain-scan evidence support it; objective data.', 'Cognitive: explains why normal intrusive thoughts become distressing for some people; led to CBT.', 'Behavioural: explains maintenance and led to ERP (very effective).'],
            minus: ['Biological: cause or effect? Not all patients respond to SSRIs; reductionist.', 'Cognitive: thinking errors could be a result of OCD rather than a cause.', 'Behavioural: doesn’t explain how the obsession starts.', 'Psychodynamic: unfalsifiable, little scientific support.'] },
      debates: ['indsit', 'nn', 'red', 'det', 'idio'],
      vids: [['BJshegpcFv8', '2-minute neuroscience: OCD', 'Neuroscientifically Challenged', '1:59'], ['b2qOFW9RG2s', 'Biological explanations for OCD', 'SMCartledge', '13:19']],
      terms: [['Worry circuit', 'Orbitofrontal cortex–caudate–thalamus loop that is overactive in OCD.'], ['Thought–action fusion', 'Believing that thinking about something makes it more likely or is as bad as doing it.'], ['Inflated responsibility', 'Exaggerated belief that you are responsible for preventing harm.'], ['Undoing', 'A defence mechanism: performing an act to “cancel out” an unacceptable thought.']] },

    { id: 'c153', code: '1.5.3', title: 'Treating OCD', ks: 'lovell2006',
      inShort: 'SSRIs raise serotonin. Exposure and response prevention (ERP) exposes people to their fears without letting them do the compulsion. CBT can even work over the telephone (Lovell et al.).',
      notes: `
<h4>Biological: SSRIs</h4>
<ul><li>e.g. fluoxetine, sertraline – increase serotonin by blocking its reuptake. For OCD often <b>higher doses</b> and longer (8–12 weeks) are needed. Clomipramine (a tricyclic) is also used.</li>
<li>Help many people but symptoms often return when medication stops; side effects (nausea, sleep problems).</li></ul>
<h4>Psychological: exposure and response prevention (ERP)</h4>
<ul><li>The person is <b>exposed</b> to the thing that triggers the obsession (e.g. touching a “dirty” door handle) – usually gradually, using a hierarchy.</li>
<li>They are then <b>prevented from performing the compulsion</b> (no hand-washing).</li>
<li>Anxiety rises, then falls naturally (<b>habituation</b>), and the person learns the feared outcome doesn’t happen.</li>
<li>Example study: <b>Lehmkuhl et al. (2008)</b> – a case study in which CBT with ERP successfully reduced OCD symptoms in a child with autism, showing it can be adapted for different needs.</li></ul>
<h4>Psychological: cognitive-behavioural therapy (CBT)</h4>
<ul><li>Combines ERP with <b>cognitive</b> work: challenging inflated responsibility and thought–action fusion, and seeing intrusive thoughts as normal.</li>
<li>➜ Key study <b>Lovell et al. (2006)</b>: CBT delivered by <b>telephone</b> was as effective as face-to-face CBT.</li></ul>`,
      ev: { plus: ['ERP/CBT: strong evidence and lasting gains; teaches self-help skills.', 'Telephone CBT increases access (rural areas, mobility problems) – application to everyday life.', 'SSRIs are easy to give and help people too anxious to start therapy.'],
            minus: ['ERP is distressing at first – high dropout; needs commitment.', 'SSRIs: relapse after stopping, side effects, don’t teach coping.', 'Some patients (e.g. with severe depression too) respond poorly to all treatments.'] },
      debates: ['indsit', 'culture', 'children', 'case', 'reliability'],
      vids: [['7RSDLmnle3E', 'ERP therapy for OCD: what to expect', 'NOCD', '4:33'], ['Ydecq6Lw34w', 'CBT for OCD: how it works', 'Choosing Therapy', '6:17'], ['j8AvYDG__wM', 'Lovell et al. (2006) – telephone CBT for OCD (detailed)', 'Emjay', '32:14']],
      terms: [['ERP', 'Exposure and response prevention: facing the trigger without performing the compulsion.'], ['Habituation', 'Anxiety naturally decreasing with continued exposure to a stimulus.'], ['Non-inferiority trial', 'An RCT testing whether a new treatment is “not worse than” an existing one.'], ['Clomipramine', 'A tricyclic antidepressant used to treat OCD.']] }
    ],
    quiz: [
      ['Which is an obsession (not a compulsion)?', ['Washing hands 50 times', 'Checking the door is locked', 'An unwanted thought that you might hurt someone', 'Counting to 10 repeatedly'], 2, 'Obsessions are thoughts/images/urges; compulsions are actions or mental acts.'],
      ['The Y-BOCS total score ranges from…', ['0–10', '0–21', '0–40', '0–63'], 2, '10 severity items scored 0–4 = 0–40.'],
      ['The MOCI uses which format?', ['Clinician interview', '30 true/false items', 'Brain scans', 'Observation'], 1, '30 true/false self-report statements.'],
      ['“Thinking about it makes it more likely to happen” is…', ['Thought–action fusion', 'Reaction formation', 'Learned helplessness', 'Habituation'], 0, 'A cognitive thinking error in OCD.'],
      ['From a behavioural view, compulsions continue because they are…', ['Positively punished', 'Negatively reinforced by anxiety reduction', 'Classically conditioned only', 'Genetically fixed'], 1, 'Relief from anxiety negatively reinforces the compulsion.'],
      ['In ERP, the “response prevention” part means…', ['Preventing the obsession', 'Not performing the compulsion', 'Taking medication', 'Avoiding the trigger'], 1, 'The person is stopped from doing the compulsion after exposure.'],
      ['Lovell et al. (2006) found that telephone CBT was…', ['Much worse than face-to-face', 'About as effective as face-to-face', 'Better for everyone', 'Not tested'], 1, 'Equivalent outcomes (difference in Y-BOCS at 6 months −0.55), high satisfaction in both.']
    ],
    exam: [
      { p: 3, q: '(a) Describe biological and psychological explanations of obsessive-compulsive disorder. [6]  (b) Evaluate these explanations, including a discussion of nature versus nurture. [10]', guide: ['(a) Biochemical (serotonin, worry circuit), genetic (twin, candidate genes).', '(a) Cognitive thinking errors, behavioural negative reinforcement (and/or psychodynamic).', '(b) Nature: twin/gene evidence. Nurture: learning, family, stress.', '(b) Interactionist/diathesis–stress view; reductionism; treatment evidence; conclusion.'] },
      { p: 4, q: 'Lovell et al. (2006) was a randomised controlled non-inferiority trial. (a) Explain what is meant by a randomised controlled trial. (b) Give one strength of measuring outcomes with the Y-BOCS.', guide: ['(a) Participants randomly allocated to conditions (here telephone vs face-to-face CBT) and outcomes compared – random allocation removes participant variables.', '(b) Y-BOCS is standardised, reliable and quantitative → easy to compare groups over time.'] }
    ] }
  ]
};

/* ───────────────────────── CLINICAL KEY STUDIES ───────────────────────── */
Object.assign(PSY.studies, {
  freeman2003: { opt: 'clinical', sub: 'c111', name: 'Freeman et al. (2003)', short: 'Virtual reality & persecutory ideation',
    ref: 'Freeman, D. et al. (2003). Can virtual reality be used to investigate persecutory ideation? Journal of Nervous and Mental Disease, 191(8), 509–514.',
    context: 'Persecutory (paranoid) thoughts are common in schizophrenia, but milder versions are also common in the general population – paranoia exists on a continuum. In real life it is hard to tell if someone’s suspicion is justified. Virtual reality (VR) can create a social situation that is identical and genuinely neutral for everyone, so any persecutory interpretation must come from the person.',
    aim: 'To see whether virtual reality can be used to investigate persecutory ideation (paranoid thinking) – i.e. whether neutral computer characters would trigger persecutory thoughts in some people, and which characteristics predict this.',
    sample: '24 non-clinical volunteers from the general population (recruited in London; a pilot study).',
    method: 'A study using VR with questionnaires (self-report) – largely correlational (relating personal characteristics to paranoid responses).',
    procedure: ['Before VR, participants completed questionnaires measuring traits such as paranoia, anxiety and interpersonal sensitivity.', 'Each participant entered a virtual library (via a head-mounted display) occupied by five computer characters (avatars) who were programmed to behave neutrally (e.g. breathing, looking around, occasionally glancing at the participant).', 'They spent a short time exploring the room.', 'Afterwards they completed questionnaires about their thoughts about the characters (including persecutory thoughts) and their sense of “presence” in the virtual world.'],
    results: ['Many participants reported neutral or positive thoughts about the characters.', 'But a substantial minority had persecutory thoughts – according to the researchers’ report, 9 of the 24 felt that someone in the room “had it in for” them, and many felt the characters were talking about them.', 'Persecutory thoughts in VR were predicted by higher pre-existing (trait) paranoia (and related traits such as anxiety and interpersonal sensitivity) and by a greater sense of presence in the virtual environment.'],
    conclusion: 'VR can be used to study persecutory ideation: even completely neutral social situations trigger paranoid interpretations in some people, which supports the idea that paranoia lies on a continuum with normal experience and comes from how situations are interpreted.',
    ev: { plus: ['Highly controlled and standardised – every participant saw identical, neutral avatars (high internal validity, replicable).', 'Ethical: non-clinical sample, short exposure, no real people deceived.', 'Useful: VR can be used to assess and later treat paranoia (application to everyday life).'],
          minus: ['Small, non-clinical sample (24) – hard to generalise to people with schizophrenia.', 'VR is artificial – low ecological validity.', 'Self-report questionnaires may be affected by demand characteristics or social desirability.'] },
    debates: { indsit: 'Persecutory thoughts came from individual differences (trait paranoia), not the neutral situation – an individual explanation.', idio: 'Nomothetic: looked for general predictors across participants rather than detailed individual cases.', gen: 'Non-clinical pilot sample limits generalisation to clinical populations.' } },

  oruc1997: { opt: 'clinical', sub: 'c122', name: 'Oruč et al. (1997)', short: 'Serotonin genes & bipolar disorder',
    ref: 'Oruč, L. et al. (1997). Association analysis of the 5-HT2C receptor and 5-HT transporter genes in bipolar disorder. American Journal of Medical Genetics, 74(5), 504–506.',
    context: 'Family and twin studies show bipolar disorder is strongly heritable. Serotonin (5-HT) is involved in mood, so genes that control serotonin are “candidate genes”. Association (case–control) studies compare how often particular gene variants appear in patients and in healthy people.',
    aim: 'To investigate whether variations (polymorphisms) in two serotonin genes – the 5-HT2C receptor gene (5-HTR2c) and the serotonin transporter gene (5-HTT) – are associated with bipolar disorder.',
    sample: '42 patients with bipolar I disorder and 40 healthy controls (recruited in Croatia).',
    method: 'Case–control association study using objective biological data (genotyping of DNA).',
    procedure: ['Patients diagnosed with bipolar I disorder were recruited, and a control group of healthy people was selected for comparison.', 'DNA samples were taken (blood) and genotyped for polymorphisms in the 5-HTR2c and 5-HTT genes.', 'Frequencies of the gene variants were compared between patients and controls, for the whole sample and then separately for males and females.'],
    results: ['No significant association was found between either gene and bipolar disorder in the total patient sample.', 'When the sample was split by sex, there were trends towards an association for both polymorphisms in female patients (p = 0.051 for 5-HTR2c and p = 0.049 for 5-HTT).'],
    conclusion: 'Variations in these serotonin genes may cause a minor increase in susceptibility to bipolar disorder in women, but they are not major causes on their own – bipolar disorder is likely polygenic.',
    ev: { plus: ['Objective, quantitative genetic data – high reliability.', 'Use of a control group allows a comparison and supports validity.', 'Contributes to understanding the biology of bipolar disorder (could lead to better treatments).'],
          minus: ['Small sample – especially when split by sex – so results were only trends.', 'Correlational: an association would not show the gene causes the disorder.', 'One population (Croatian) – limited generalisation; reductionist (ignores environment).'] },
    debates: { nn: 'Supports the nature side, but the weak findings show genes are only part of the explanation.', red: 'Reduces a complex mood disorder to single genes – reductionist.', det: 'Genetic explanations are biologically deterministic, though small effects suggest only a slightly increased risk.' } },

  grant2008: { opt: 'clinical', sub: 'c133', name: 'Grant et al. (2008)', short: 'Predicting response to drugs for gambling',
    ref: 'Grant, J. E., Kim, S. W., Hollander, E. & Potenza, M. N. (2008). Predicting response to opiate antagonists and placebo in the treatment of pathological gambling. Psychopharmacology, 200(4), 521–527.',
    context: 'Opioid (opiate) antagonists such as naltrexone and nalmefene reduce gambling urges by dampening dopamine release in the reward pathway. But not everyone responds, and placebo responses are common in gambling trials. Knowing who responds helps choose treatment.',
    aim: 'To identify clinical variables that predict a positive response to opiate antagonists and to placebo in people with pathological gambling.',
    sample: '284 people with pathological gambling, whose data were pooled from two double-blind, placebo-controlled trials (one of nalmefene, one of naltrexone).',
    method: 'Analysis of data from randomised, double-blind, placebo-controlled drug trials (experiments).',
    procedure: ['Participants were randomly allocated to an opiate antagonist (at different doses) or placebo.', 'Clinical variables were recorded, e.g. age, gender, gambling severity, intensity of urges and family history of alcoholism (gathered by interview).', '“Response” was defined as a reduction of at least 35% on the PG-YBOCS (gambling version of the Y-BOCS) lasting at least one month.', 'Statistical analysis tested which variables were associated with responding.'],
    results: ['A positive family history of alcoholism was the variable most strongly associated with a good response to opiate antagonists (p = .006).', 'Among people on higher doses, stronger gambling urges at the start were associated with a better response (a trend, p = .036).', 'In the placebo group, younger age was associated with a positive outcome (a trend, p = .012).'],
    conclusion: 'Opiate antagonists may work best for gamblers with a family history of alcoholism and strong urges, suggesting shared biology with addiction. Treatment should be matched to individual characteristics.',
    ev: { plus: ['Large sample (284) from double-blind placebo-controlled trials – reduces bias and supports validity.', 'Useful: helps clinicians choose the right treatment for each gambler.', 'Standardised measure (PG-YBOCS) – reliable and quantitative.'],
          minus: ['Family history relies on self-report and may be inaccurate.', 'The 35% cut-off for “response” is arbitrary.', 'Mostly US participants – may not generalise to other cultures.'] },
    debates: { app: 'Helps doctors match patients to drug treatment.', red: 'Focuses on biological treatment and predictors – ignores psychological factors.', idio: 'Nomothetic: large-scale statistical predictors rather than individual cases.' } },

  chapman2013: { opt: 'clinical', sub: 'c143', name: 'Chapman and DeLapp (2013)', short: 'CBT + applied tension for blood-injection-injury phobia',
    ref: 'Chapman, L. K. & DeLapp, R. C. T. (2013). Nine session treatment of a blood–injection–injury phobia with manualized cognitive behavioral therapy: An adult case example. Clinical Case Studies.',
    context: 'Blood-injection-injury (BII) phobia is unusual because it can cause fainting (vasovagal syncope). Applied muscle tension raises blood pressure and is an effective treatment; few case studies had shown it combined with manualised CBT.',
    aim: 'To describe the treatment of an adult man’s BII phobia using nine sessions of manualised CBT that included applied muscle tension.',
    sample: 'One participant, “T”: a 42-year-old non-Hispanic White man who self-referred because of an intense fear of medical procedures (panic in doctors’ waiting rooms, with blood-pressure cuffs, and fainting during blood tests). It affected his family life – he could not attend his child’s frequent medical appointments.',
    method: 'Case study (idiographic, longitudinal) using interviews, self-report measures and SUDS ratings.',
    procedure: ['Assessment and history: T had feared medical procedures for over 20 years; childhood experiences included being with his grandfather when he died and an anxious grandmother.', 'Treatment followed a CBT manual (“Mastering Your Fears and Phobias”), one session a week with homework.', 'Sessions 1–2: psychoeducation about phobias and fainting, self-monitoring.', 'Session 3: cognitive restructuring of catastrophic thoughts.', 'Session 4: building an exposure hierarchy rated with SUDS (0–100).', 'Session 5: applied tension introduced – tense arms, torso and legs for 10–15 s, release for 20–30 s, repeat 5 times; practise 5 times a day.', 'Sessions 6–9: graded exposure – tourniquet and touching veins, phlebotomy videos, finger-prick blood tests, observing blood donation at a blood bank, then having his own blood taken.'],
    results: ['SUDS ratings fell across the hierarchy (e.g. watching live blood donation started at SUDS 65 and fell to 5).', 'By session 9 he had had his own blood taken with a peak SUDS of 40 that quickly dropped, needing little applied tension.', 'He then had a full medical check-up and blood pressure taken; at follow-ups (4, 10 and about 12 months) gains were maintained and he said he had completely overcome the phobia.'],
    conclusion: 'Nine sessions of manualised CBT with applied muscle tension effectively treated BII phobia in this adult, and the improvement lasted.',
    ev: { plus: ['Rich, detailed data (qualitative and quantitative SUDS) with long follow-up.', 'Manualised treatment – standardised and replicable.', 'Clear application to everyday life – he could get medical care again.'],
          minus: ['One participant – cannot generalise to everyone with BII phobia.', 'Self-report (SUDS) is subjective and may show demand characteristics.', 'Several techniques were combined, so we can’t tell which part caused the improvement.'] },
    debates: { idio: 'Idiographic case study – detailed understanding of one person.', gen: 'Single case limits generalisation.', det: 'Shows learned fears can be changed – supports some free will / control over behaviour.' } },

  lovell2006: { opt: 'clinical', sub: 'c153', name: 'Lovell et al. (2006)', short: 'Telephone CBT for OCD',
    ref: 'Lovell, K. et al. (2006). Telephone administered cognitive behaviour therapy for treatment of obsessive compulsive disorder: randomised controlled non-inferiority trial. BMJ, 333(7574), 883.',
    context: 'CBT with exposure and response prevention is an effective treatment for OCD, but many people cannot access face-to-face therapy (long waiting lists, travel, time). Telephone therapy could increase access.',
    aim: 'To compare the effectiveness of CBT (exposure and response prevention) delivered by telephone with CBT delivered face to face for people with OCD.',
    sample: '72 adults with OCD referred to two psychology outpatient departments in the UK.',
    method: 'Randomised controlled non-inferiority trial (experiment, independent measures).',
    procedure: ['Participants were randomly allocated to telephone or face-to-face treatment.', 'Both groups received 10 weekly sessions of exposure therapy and response prevention.', 'Symptoms were measured with the Y-BOCS (and other measures such as depression and satisfaction) before treatment, after treatment and at follow-ups up to 6 months.'],
    results: ['Both groups improved significantly.', 'At six months the difference in Y-BOCS scores between telephone and face-to-face treatment was tiny (−0.55; 95% confidence interval −4.26 to 3.15).', 'Patient satisfaction was high for both forms of treatment.'],
    conclusion: 'Telephone-administered CBT is as effective as face-to-face CBT for OCD, so it can be used to make treatment more accessible.',
    ev: { plus: ['RCT with random allocation – strong design, reduces participant variables.', 'Standardised measure (Y-BOCS) – reliable and quantitative.', 'Highly useful: telephone therapy saves travel, time and money and reaches more people.'],
          minus: ['Relatively small sample for an RCT; only UK participants.', 'Patients and therapists knew which treatment they had (not blind).', 'People who volunteer for telephone therapy may be more motivated – limits generalisation.'] },
    debates: { app: 'Shows a practical way to improve access to OCD treatment.', culture: 'Conducted in the UK; telephone therapy may work differently in other cultures.', indsit: 'Treatment changed behaviour through learning – supports situational factors in maintaining OCD.' } }
});

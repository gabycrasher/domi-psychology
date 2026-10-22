/* Domi’s Psychology – A Level 9990 revision app (static, no build step). */
(() => {
'use strict';
const P = window.PSY;

/* ───────────── year packs: Year 12 (AS) and Year 13 (A Level) ───────────── */
const PACKS = {
  13: { year: 13, options: P.options, studies: P.studies, order: ['clinical', 'consumer', 'health', 'organisational'], debates: P.debates, debateOrder: P.debateOrder, methods: P.methods, exam: P.exam, pick: true, logo: '🧠',
    L: { short: 'Y13', name: 'Year 13', level: 'A Level', badge: 'A Level · 9990 · Year 13', eyebrow: 'Cambridge A Level Psychology · 9990', units: 'Your options', unit: 'Specialist option', unitsWord: 'options',
      learnH: 'Your specialist options', learnLead: 'In Year 13 you study <b>two</b> of these four options for Papers 3 and 4. Tap one to see its topics.',
      ks: 'Key studies', ks1: 'Key study', ksLead: 'Five per option. For each you need: context, aim, sample, procedure, results, conclusions, evaluation and issues & debates.', ksAll: 'All 20 in one place',
      examqDesc: 'Paper 3 essays & Paper 4 plans', papers: 'Paper 3/4', examH: 'How Papers 3 & 4 work', examLead: 'Year 13 = Papers 3 and 4. Both are 1 hour 30 minutes, 60 marks, and each is 25% of your A Level. You answer on your <b>two</b> options.',
      essayH: 'Paper 3 essays: describe (6) + evaluate (10)', planH: 'Paper 4 planning question', moreExam: 'Papers 3 & 4, command words, essay & planning help',
      debLead: 'Paper 3 essays always ask you to discuss one of these eight issues and debates – and Paper 4 is all about research methods. Learn them once, use them everywhere.',
      searchEg: 'e.g. dopamine, Maslow, cortisol', vibe: 'Deep focus' } },
  12: { year: 12, options: P.y12.options, studies: P.y12.studies, order: ['bio', 'cog', 'lrn', 'soc', 'rm'], debates: Object.assign({}, P.y12.debates), debateOrder: P.y12.debateOrder, methods: null, exam: Object.assign({}, P.y12.exam, { commands: P.exam.commands }), pick: false, logo: '🧩',
    L: { short: 'Y12', name: 'Year 12', level: 'AS Level', badge: 'AS Level · 9990 · Year 12', eyebrow: 'Cambridge AS Level Psychology · 9990', units: 'Your approaches', unit: 'Approach', unitsWord: 'approaches',
      learnH: 'The four approaches + research methods', learnLead: 'Year 12 (AS) = Papers 1 and 2. You study <b>12 core studies</b> – three for each approach – plus research methods. Tap one to start.',
      ks: 'Core studies', ks1: 'Core study', ksLead: 'Three per approach – 12 in total. For each you need: background, aim, sample, method, procedure, results, conclusions, evaluation and issues & debates.', ksAll: 'All 12 in one place',
      examqDesc: 'Paper 1 & Paper 2 style', papers: 'Paper 1/2', examH: 'How Papers 1 & 2 work', examLead: 'Year 12 (AS) = Papers 1 and 2. Both are 1 hour 30 minutes and 60 marks; each is 50% of your AS (25% of the full A Level). Every question is compulsory.',
      essayH: 'Paper 1: short answers, evaluating & comparing', planH: 'Paper 2 planning question', moreExam: 'Papers 1 & 2, command words, evaluation & planning help',
      debLead: 'At AS you need five issues and debates – Paper 1 questions often say “at least one of your points must be about…” one of them. Every core study links to them.',
      searchEg: 'e.g. REM, oxytocin, Milgram, sampling', vibe: 'Fresh start' } }
};
let Y = PACKS[13], ORDER = Y.order;

/* ───────────── helpers ───────────── */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const strip = h => String(h || '').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const dkey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const parseD = k => { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); };
const daysBetween = (a, b) => Math.round((parseD(dkey(b)) - parseD(dkey(a))) / 864e5);
const fmtDate = k => parseD(k).toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' });
const ago = t => { const s = (Date.now() - t) / 1000; if (s < 60) return 'just now'; if (s < 3600) return Math.floor(s / 60) + ' min ago'; if (s < 86400) return Math.floor(s / 3600) + ' h ago'; const d = Math.floor(s / 86400); return d === 1 ? 'yesterday' : d < 7 ? d + ' days ago' : new Date(t).toLocaleDateString(); };

/* ───────────── icons ───────────── */
const I = {
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"/>',
  book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 21.5A2.5 2.5 0 0 1 6.5 19H20v3H6.5"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  note: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
  more: '<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  sound: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
  play: '<path d="M7 4.5v15l12-7.5z" fill="currentColor"/>',
  pause: '<path d="M8 4.5v15M16 4.5v15" stroke-width="3.2"/>',
  next: '<path d="m6 5 10 7-10 7z" fill="currentColor"/><path d="M19 5v14"/>',
  prev: '<path d="m18 5-10 7 10 7z" fill="currentColor"/><path d="M5 5v14"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  print: '<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 14h12v7H6z"/>',
  ext: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  upload: '<path d="M12 20V9M7 14l5-5 5 5M5 4h14"/>'
};
const ic = (n, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${I[n]}</svg>`;

/* ───────────── content indexes ───────────── */
const SUBS = {}, TOPICS = {}, SUBLIST = [];
let STUDIES = {}, searchIndex;
function indexContent() {
  for (const k in SUBS) delete SUBS[k];
  for (const k in TOPICS) delete TOPICS[k];
  SUBLIST.length = 0;
  for (const oid of ORDER) {
    const o = Y.options[oid];
    o.topics.forEach(t => { TOPICS[t.id] = { t, o }; t.subs.forEach(s => { SUBS[s.id] = { s, t, o }; SUBLIST.push(s.id); }); });
  }
  STUDIES = Y.studies; searchIndex = null;
}

/* ───────────── state ───────────── */
const KEY = 'dpsy:v1';
// everything you do is saved per school year; name, look & feel, voice and streak are shared
const YEAR_KEYS = ['opts', 'examDate', 'conf', 'visited', 'last', 'quiz', 'flash', 'notes', 'examAns', 'plan'];
const YDEF = () => ({ opts: [], examDate: '', conf: {}, visited: {}, last: '', quiz: {}, flash: {}, notes: [], examAns: {}, plan: null });
const DEF = { name: 'Domi', year: 13, yd: {}, news: 0, opts: [], onboarded: false, examDate: '', theme: 'auto', fs: 1, spacious: false, reduce: false, voice: '', rate: 1,
  conf: {}, visited: {}, last: '', quiz: {}, flash: {}, notes: [], examAns: {}, plan: null, streak: { last: '', n: 0 } };
let S = (() => { try { return Object.assign(structuredClone(DEF), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { return structuredClone(DEF); } })();
function applyYear() {
  if (!PACKS[S.year]) S.year = 13;
  Y = PACKS[S.year]; ORDER = Y.order; indexContent();
  document.documentElement.dataset.year = S.year;
}
function switchYear(y) {
  y = +y; if (y === S.year || !PACKS[y]) return false;
  const stash = {}; YEAR_KEYS.forEach(k => { stash[k] = S[k]; });
  S.yd = S.yd || {}; S.yd[S.year] = stash;
  const load = Object.assign(YDEF(), S.yd[y] || {}); YEAR_KEYS.forEach(k => { S[k] = load[k]; }); delete S.yd[y];
  S.year = y; save(true); applyYear(); return true;
}
applyYear();
let saveTimer;
function save(now) {
  clearTimeout(saveTimer);
  const go = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast('⚠️ Could not save – storage is full or blocked. Export a backup in Settings.'); } };
  now ? go() : (saveTimer = setTimeout(go, 250));
}
addEventListener('pagehide', () => save(true));
const chosen = () => { const c = ORDER.filter(o => S.opts.includes(o)); return c.length ? c : ORDER; };
const subsOf = oid => Y.options[oid].topics.flatMap(t => t.subs.map(s => s.id));
function touch() {
  const today = dkey();
  if (S.streak.last === today) return;
  const y = new Date(); y.setDate(y.getDate() - 1);
  S.streak.n = S.streak.last === dkey(y) ? S.streak.n + 1 : 1;
  S.streak.last = today; save();
}
const streakNow = () => { const y = new Date(); y.setDate(y.getDate() - 1); return (S.streak.last === dkey() || S.streak.last === dkey(y)) ? S.streak.n : 0; };
function optProgress(oid) {
  const ids = subsOf(oid); let pts = 0, got = 0;
  ids.forEach(id => { const c = S.conf[id]; if (c === 3) { pts += 1; got++; } else if (c === 2) pts += .5; else if (c === 1) pts += .15; });
  return { pct: Math.round(pts / ids.length * 100), got, total: ids.length };
}
const examDays = () => S.examDate ? daysBetween(new Date(), parseD(S.examDate)) : null;

/* ───────────── appearance ───────────── */
function applyLook() {
  const r = document.documentElement;
  if (S.theme === 'auto') delete r.dataset.theme; else r.dataset.theme = S.theme;
  r.style.setProperty('--fs', S.fs);
  document.body.classList.toggle('spacious', !!S.spacious);
  document.body.classList.toggle('reduce', !!S.reduce);
  const dark = S.theme === 'dark' || (S.theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
  $('meta[name="theme-color"]').content = S.year === 12 ? (dark ? '#0b1517' : '#f1f8f7') : (dark ? '#0f0e17' : '#f6f5fb');
}
const setAcc = c => c ? document.documentElement.style.setProperty('--acc', c) : document.documentElement.style.removeProperty('--acc');

/* ───────────── toast / modal / confetti ───────────── */
let toastT;
function toast(msg) {
  $('.toast')?.remove(); clearTimeout(toastT);
  const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; document.body.appendChild(t);
  toastT = setTimeout(() => t.remove(), 2600);
}
function modal(html, { wide = false, onClose } = {}) {
  const s = document.createElement('div'); s.className = 'scrim';
  s.innerHTML = `<div class="modal ${wide ? 'wide' : ''}" role="dialog" aria-modal="true">${html}</div>`;
  const close = () => { s.remove(); onClose && onClose(); document.removeEventListener('keydown', key); };
  const key = e => { if (e.key === 'Escape') close(); };
  s.addEventListener('click', e => { if (e.target === s || e.target.closest('[data-close]')) close(); });
  document.addEventListener('keydown', key);
  document.body.appendChild(s);
  return { el: s.firstElementChild, close };
}
function confetti() {
  if (S.reduce) return;
  const c = $('#confetti'), x = c.getContext('2d'); c.width = innerWidth; c.height = innerHeight;
  const cols = ['#6d4aff', '#a855f7', '#ff7ab6', '#14a88e', '#ff7a45', '#3b82f6', '#f59e0b'];
  const ps = Array.from({ length: 140 }, () => ({ x: innerWidth / 2 + (Math.random() - .5) * 200, y: innerHeight * .35, vx: (Math.random() - .5) * 14, vy: -Math.random() * 14 - 4, r: Math.random() * 6 + 4, c: cols[Math.floor(Math.random() * cols.length)], a: Math.random() * 6, va: (Math.random() - .5) * .3 }));
  let f = 0;
  (function tick() {
    x.clearRect(0, 0, c.width, c.height);
    ps.forEach(p => { p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.a += p.va; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c; x.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); x.restore(); });
    if (++f < 150) requestAnimationFrame(tick); else x.clearRect(0, 0, c.width, c.height);
  })();
}
function download(name, text, type = 'text/plain') {
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type })); a.download = name;
  document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}

/* ───────────── markdown-lite for notes ───────────── */
const inline = s => s.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/==(.+?)==/g, '<mark>$1</mark>').replace(/(^|[^*])\*(?!\s)(.+?)\*/g, '$1<i>$2</i>');
function md(t) {
  let out = '', list = false;
  for (const raw of esc(t).split('\n')) {
    if (/^\s*[-*•]\s+/.test(raw)) { if (!list) { out += '<ul>'; list = true; } out += `<li>${inline(raw.replace(/^\s*[-*•]\s+/, ''))}</li>`; continue; }
    if (list) { out += '</ul>'; list = false; }
    if (/^#{1,3}\s+/.test(raw)) out += `<h3>${inline(raw.replace(/^#{1,3}\s+/, ''))}</h3>`;
    else if (raw.trim()) out += `<p>${inline(raw)}</p>`;
  }
  return out + (list ? '</ul>' : '');
}

/* ───────────── text-to-speech (Listen) ───────────── */
const TTS = { q: [], i: 0, on: false, title: '', voice: null };
const hasTTS = 'speechSynthesis' in window;
function voices() { return hasTTS ? speechSynthesis.getVoices().filter(v => /^en(-|_|$)/i.test(v.lang)) : []; }
function bestVoice() {
  const vs = voices(); if (!vs.length) return null;
  if (S.voice) { const v = vs.find(v => v.name === S.voice); if (v) return v; }
  const rank = v => { const n = v.name.toLowerCase(); let s = 0;
    if (/natural|neural|premium|enhanced/.test(n)) s += 50; if (/google/.test(n)) s += 30; if (/samantha|daniel|serena|karen|moira|libby|sonia|ryan|aria|jenny|guy/.test(n)) s += 25;
    if (/en-gb/i.test(v.lang)) s += 8; if (/en-us/i.test(v.lang)) s += 6; if (v.localService) s += 2; return s; };
  return vs.slice().sort((a, b) => rank(b) - rank(a))[0];
}
if (hasTTS) speechSynthesis.onvoiceschanged = () => { TTS.voice = bestVoice(); };
function ttsCollect(root) {
  const sel = 'h1, .tldr p, .notes h4, .notes p, .notes li, .notes tr, .box > b, .ev h5, .ev li, .ks-sec h4, .ks-sec p, .ks-sec li, .md-prev h3, .md-prev p, .md-prev li, .read-me';
  const els = $$(sel, root).filter(el => !el.closest('.no-read'));
  const items = [];
  els.forEach(el => {
    const clone = el.cloneNode(true);
    $$('ul, ol, table, p, h4, h5', clone).forEach(n => n.remove());
    let text = clone.textContent.replace(/[➜→]/g, ', leads to, ').replace(/\s+/g, ' ').trim();
    text = text.replace(/\bvs\b\.?/g, 'versus').replace(/\be\.g\./g, 'for example').replace(/\bi\.e\./g, 'that is').replace(/[🧠💡🌍➕➖⚡🐢🧼⭐🔲〰️🔁]/gu, '');
    if (text.length < 2) return;
    // split long text into sentence chunks so speech engines don't cut out
    const parts = text.match(/[^.!?]+[.!?]*\s*/g) || [text]; let buf = '';
    parts.forEach(p => { if ((buf + p).length > 220 && buf) { items.push({ el, text: buf.trim() }); buf = ''; } buf += p; });
    if (buf.trim()) items.push({ el, text: buf.trim() });
  });
  return items;
}
function ttsStart(root, title) {
  if (!hasTTS) return toast('Sorry – this browser can’t read aloud.');
  ttsStop();
  TTS.q = ttsCollect(root); TTS.i = 0; TTS.title = title || document.title;
  if (!TTS.q.length) return toast('Nothing to read on this page.');
  TTS.voice = bestVoice(); TTS.on = true; drawPlayer(); speak();
}
function speak() {
  if (!TTS.on) return;
  if (speechSynthesis.speaking || speechSynthesis.pending) speechSynthesis.cancel();
  $$('.tts-on').forEach(e => e.classList.remove('tts-on'));
  const it = TTS.q[TTS.i];
  if (!it) { ttsStop(); toast('Finished reading ✅'); return; }
  it.el.classList.add('tts-on');
  it.el.scrollIntoView({ block: 'center', behavior: S.reduce ? 'auto' : 'smooth' });
  const u = new SpeechSynthesisUtterance(it.text);
  if (TTS.voice) { u.voice = TTS.voice; u.lang = TTS.voice.lang; } else u.lang = 'en-GB';
  u.rate = S.rate || 1;
  const idx = TTS.i;
  u.onend = () => { if (TTS.on && TTS.i === idx) { TTS.i++; speak(); } };
  u.onerror = e => { if (e.error !== 'interrupted' && e.error !== 'canceled' && TTS.on && TTS.i === idx) { TTS.i++; speak(); } };
  // speak straight away when idle (iOS needs this to happen inside the tap); otherwise let cancel() finish first
  if (speechSynthesis.speaking || speechSynthesis.pending) setTimeout(() => { if (TTS.on && TTS.i === idx) speechSynthesis.speak(u); }, 80);
  else speechSynthesis.speak(u);
  drawPlayer();
}
function ttsPause() { TTS.on = false; speechSynthesis.cancel(); drawPlayer(); }
function ttsStop() { TTS.on = false; TTS.q = []; if (hasTTS) speechSynthesis.cancel(); $$('.tts-on').forEach(e => e.classList.remove('tts-on')); $('#playerHost').innerHTML = ''; }
function drawPlayer() {
  if (!TTS.q.length) { $('#playerHost').innerHTML = ''; return; }
  // keep the same outer element between sentences so the slide-in animation only plays once
  let pl = $('#playerHost .player');
  if (!pl) { $('#playerHost').innerHTML = '<div class="player no-print" role="region" aria-label="Read aloud controls"></div>'; pl = $('#playerHost .player'); }
  pl.innerHTML = `
    <button class="iconbtn" data-tts="prev" aria-label="Previous">${ic('prev')}</button>
    <button class="iconbtn play-main" data-tts="toggle" aria-label="${TTS.on ? 'Pause' : 'Play'}">${ic(TTS.on ? 'pause' : 'play')}</button>
    <button class="iconbtn" data-tts="next" aria-label="Next">${ic('next')}</button>
    <div class="pinfo" title="${TTS.voice ? 'Voice: ' + esc(TTS.voice.name) : ''}"><b>🎧 ${esc(TTS.title)}</b><span>${TTS.on ? 'Reading' : 'Paused'} · ${Math.min(TTS.i + 1, TTS.q.length)} / ${TTS.q.length}</span></div>
    <select data-tts="rate" aria-label="Speed">${[.75, .9, 1, 1.15, 1.3, 1.5].map(r => `<option value="${r}" ${+S.rate === r ? 'selected' : ''}>${r}×</option>`).join('')}</select>
    <button class="iconbtn" data-tts="stop" aria-label="Stop">${ic('x')}</button>`;
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-tts]'); if (!b || b.tagName === 'SELECT') return;
  const a = b.dataset.tts;
  if (a === 'toggle') { if (TTS.on) ttsPause(); else { TTS.on = true; speak(); } }
  if (a === 'next') { TTS.i = Math.min(TTS.i + 1, TTS.q.length - 1); TTS.on = true; speak(); }
  if (a === 'prev') { TTS.i = Math.max(TTS.i - 1, 0); TTS.on = true; speak(); }
  if (a === 'stop') ttsStop();
});
document.addEventListener('change', e => { if (e.target.dataset.tts === 'rate') { S.rate = +e.target.value; save(); if (TTS.on) speak(); } });
document.addEventListener('visibilitychange', () => { /* keep reading in background where the browser allows */ });

/* ───────────── year switch ───────────── */
// a two-position toggle with a sliding pill; each year keeps its own notes and progress
const yearSwitch = (cls = '') => `<div class="yr-sw ${cls}" data-y="${S.year}" role="radiogroup" aria-label="School year"><span class="yr-pill" aria-hidden="true"></span>${[12, 13].map(y => `<button type="button" role="radio" aria-checked="${S.year === y}" data-year="${y}" title="${PACKS[y].L.name} · ${PACKS[y].L.level}"><b>Y${y}</b><small>${y === 12 ? 'AS' : 'A2'}</small></button>`).join('')}</div>`;
function doYearSwitch(y) {
  y = +y; if (y === S.year) return;
  ttsStop();
  const path = location.hash.replace(/^#\/?/, '').split('?')[0];
  const keep = /^(|learn|practice|flash|examq|notes|plan|exam|debates|studies|settings|more|search)$/.test(path);
  $$('.yr-sw').forEach(sw => { sw.dataset.y = y; $$('button', sw).forEach(b => b.setAttribute('aria-checked', +b.dataset.year === y)); });
  const go = () => {
    switchYear(y); applyLook(); buildShell();
    if (keep) route(); else location.hash = '#/';
  };
  // let the pill slide first, then swap the whole theme with a cross-fade where supported
  setTimeout(() => { if (document.startViewTransition && !S.reduce) document.startViewTransition(go); else go(); toast(`${y === 12 ? '🧩' : '🧠'} ${PACKS[y].L.name} · ${PACKS[y].L.level} – your ${PACKS[y === 12 ? 13 : 12].L.name} work is saved`); }, S.reduce ? 0 : 220);
}
document.addEventListener('click', e => { const b = e.target.closest('[data-year]'); if (b && b.closest('.yr-sw')) doYearSwitch(b.dataset.year); });

/* ───────────── shell ───────────── */
function buildShell() {
  const opts = chosen();
  $('#yrTop').innerHTML = yearSwitch('top-yr');
  $('#side').innerHTML = `
    <a class="brand" href="#/"><span class="logo">${Y.logo}</span><span><b>${esc(S.name || 'My')}’s Psychology</b><span>${Y.L.badge}</span></span></a>
    ${yearSwitch('side-yr')}
    <nav class="nav">
      <a href="#/" data-r="">${'<span class="dot">🏠</span>'}Home</a>
      <div class="nav-sec">Learn</div>
      ${opts.map(o => `<a href="#/o/${o}" data-r="o/${o}"><span class="dot">${Y.options[o].emoji}</span>${Y.options[o].short}</a>`).join('')}
      <a href="#/studies" data-r="studies"><span class="dot">⭐</span>${Y.L.ks}</a>
      <a href="#/debates" data-r="debates"><span class="dot">⚖️</span>Debates & methods</a>
      <div class="nav-sec">Practise</div>
      <a href="#/practice" data-r="practice"><span class="dot">🎯</span>Quizzes</a>
      <a href="#/flash" data-r="flash"><span class="dot">🃏</span>Flashcards</a>
      <a href="#/examq" data-r="examq"><span class="dot">✍️</span>Exam questions</a>
      <div class="nav-sec">Organise</div>
      <a href="#/notes" data-r="notes"><span class="dot">📒</span>My notes</a>
      <a href="#/plan" data-r="plan"><span class="dot">🗓️</span>Revision planner</a>
      <a href="#/exam" data-r="exam"><span class="dot">🏆</span>Exam guide</a>
      <a href="#/settings" data-r="settings"><span class="dot">⚙️</span>Settings</a>
    </nav>
    <div class="side-foot">Made with 💜 for ${esc(S.name || 'you')}. Based on the Cambridge 9990 syllabus for 2027.</div>`;
  $('#tabs').innerHTML = [['', 'home', 'Home'], ['learn', 'book', 'Learn'], ['practice', 'target', 'Practise'], ['notes', 'note', 'Notes'], ['more', 'more', 'More']]
    .map(([r, i, l]) => `<a href="#/${r}" data-r="${r}">${ic(i)}<span>${l}</span></a>`).join('');
}
function updateNav(path) {
  const top = path.split('/')[0];
  const map = { s: 'learn', o: 'learn', k: 'learn', studies: 'learn', debates: 'more', quiz: 'practice', flash: 'practice', examq: 'practice', note: 'notes', plan: 'more', exam: 'more', settings: 'more', search: 'none' };
  $$('#tabs a').forEach(a => a.classList.toggle('on', a.dataset.r === (map[top] ?? top)));
  let side = path;
  if (top === 's') side = 'o/' + SUBS[path.split('/')[1]]?.o.id;
  if (top === 'k') side = 'studies'; if (top === 'quiz') side = 'practice'; if (top === 'note') side = 'notes';
  $$('#side .nav a').forEach(a => a.classList.toggle('on', a.dataset.r === side || (a.dataset.r && side.startsWith(a.dataset.r + '/') && a.dataset.r !== '')));
}
const view = () => $('#view');
function render({ title = '', html = '', acc = null, back = null, readable = false }) {
  document.title = title ? `${title} · ${S.name || 'My'}’s Psychology` : `${S.name || 'My'}’s Psychology · A Level 9990`;
  setAcc(acc);
  $('#topTitle').textContent = title || (innerWidth < 960 ? 'Psychology' : `${S.name || 'My'}’s Psychology`);
  $('#backBtn').dataset.href = back ?? '';
  $('#backBtn').style.visibility = back === null ? 'hidden' : 'visible';
  $('#listenBtn').classList.toggle('hide', !readable);
  view().innerHTML = `<div class="page">${html}</div>`;
  window.scrollTo(0, 0);
}
$('#backBtn').addEventListener('click', () => { const h = $('#backBtn').dataset.href; if (history.length > 1 && sessionStorage.getItem('navd')) history.back(); else location.hash = '#/' + h; });
$('#listenBtn').addEventListener('click', () => { if (TTS.q.length) { TTS.on ? ttsPause() : (TTS.on = true, speak()); } else ttsStart($('#view .page'), $('#topTitle').textContent); });
addEventListener('scroll', () => $('#top').classList.toggle('scrolled', scrollY > 4), { passive: true });

/* ───────────── shared fragments ───────────── */
function optCard(oid, extra = '') {
  const o = Y.options[oid], pr = optProgress(oid);
  return `<a class="opt-card ${extra}" href="#/o/${oid}" style="--c:${o.color}">
    <span class="em">${o.emoji}</span>
    <span style="flex:1;min-width:0"><h4>${o.name}</h4><p>${o.blurb}</p></span>
    <span class="ring" style="--c:${o.color};--p:${pr.pct}"><b>${pr.pct}%</b></span></a>`;
}
function vidCards(vids, q) {
  return `<div class="vids">${vids.map(([id, t, ch, len]) => `<a class="vid" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener" aria-label="Watch on YouTube: ${esc(t)}">
      <span class="th" style="background-image:url('https://i.ytimg.com/vi/${id}/mqdefault.jpg')"><span class="play">${ic('play')}</span><span class="len">${len}</span></span>
      <span class="meta"><b>${esc(t)}</b><span>${esc(ch)} · opens YouTube ↗</span></span></a>`).join('')}</div>
    ${q ? `<p class="small muted" style="margin-top:10px">Want more? <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(q)}" target="_blank" rel="noopener">🔎 Search YouTube for “${esc(q)}”</a></p>` : ''}`;
}
document.addEventListener('click', e => {
  const v = e.target.closest('[data-vid]'); if (!v) return;
  const id = v.dataset.vid;
  if (TTS.on) ttsPause();
  modal(`<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1" title="${v.dataset.t}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>
    <div class="row wrap" style="padding:12px 6px 4px"><div style="flex:1;min-width:200px"><b>${v.dataset.t}</b><div class="small muted">${v.dataset.ch}</div></div>
    <a class="btn sm" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener">${ic('ext')} Open in YouTube</a><button class="btn sm ghost" data-close>Close</button></div>`, { wide: true });
});
const debChips = keys => `<div class="chips">${(keys || []).map(k => { const d = Y.debates[k]; if (!d) return ''; return d.kind === 'debate'
  ? `<a class="chip debate" href="#/debates?go=${k}">${d.emoji} ${d.name}</a>` : `<a class="chip" href="${d.sub ? '#/s/' + d.sub : '#/debates?m=' + d.link}">${d.emoji} ${d.name}</a>`; }).join('')}</div>`;
const evBlock = ev => ev ? `<div class="ev"><div class="plus"><h5>👍 Strengths</h5><ul>${ev.plus.map(x => `<li>${x}</li>`).join('')}</ul></div><div class="minus"><h5>👎 Weaknesses</h5><ul>${ev.minus.map(x => `<li>${x}</li>`).join('')}</ul></div></div>` : '';
const secH = (emoji, title, extra = '') => `<div class="sec-h"><span class="ic-badge">${emoji}</span><h3>${title}</h3>${extra}</div>`;

/* ───────────── pages ───────────── */
function home() {
  const h = new Date().getHours(), greet = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  const days = examDays(), opts = chosen();
  const allSubs = opts.flatMap(subsOf), got = allSubs.filter(id => S.conf[id] === 3).length;
  const due = dueCards(allCardsFor(opts)).length;
  const last = S.last && SUBS[S.last];
  const todayPlan = (S.plan?.items || []).filter(i => i.date === dkey() && SUBS[i.sid]);
  const suggest = todayPlan.length ? todayPlan.map(i => i.sid) : allSubs.filter(id => S.conf[id] !== 3).sort((a, b) => (S.conf[a] || 0.5) - (S.conf[b] || 0.5)).slice(0, 3);
  const tips = Y.exam.tips, tip = tips[(new Date().getDate()) % tips.length];
  render({ title: '', html: `
    <section class="hero home-hero" style="margin-top:6px">
      <span class="yr-big" aria-hidden="true">${[...String(S.year)].map((d, i) => `<i style="--i:${i}">${d}</i>`).join('')}</span>
      <span class="emoji-big">${Y.logo}</span>
      <span class="yr-chip">${Y.L.name} · ${Y.L.level} · ${Y.L.vibe}</span>
      <span class="eyebrow" style="color:#fff;opacity:.85">${Y.L.eyebrow}</span>
      <h1>${greet}, ${esc(S.name || 'there')} 👋</h1>
      <p>${days === null ? 'Let’s make psychology make sense – one topic at a time.' : days > 0 ? `<span class="count">⏳ ${days} day${days === 1 ? '' : 's'} until your exam</span>&nbsp; You’ve got this.` : days === 0 ? '<span class="count">🍀 Exam day!</span>&nbsp; Breathe – you know more than you think.' : 'Your exam date has passed – update it in Settings.'}</p>
      <div class="stats">
        <div class="stat"><b>🔥 ${streakNow()}</b><span>day streak</span></div>
        <div class="stat"><b>${got}/${allSubs.length}</b><span>topics “got it”</span></div>
        <div class="stat"><b>${due}</b><span>flashcards due</span></div>
      </div>
    </section>
    ${last ? `<a class="ks-card" href="#/s/${S.last}" style="margin-top:16px;--acc:${last.o.color}"><span class="em">${last.o.emoji}</span><span style="flex:1"><b>Continue where you left off</b><span>${last.s.code} · ${esc(last.s.title)}</span></span>${ic('next')}</a>` : ''}
    ${secH('📚', Y.L.units, Y.pick ? `<span class="spacer"></span><a class="btn sm ghost" href="#/settings">Change</a>` : '')}
    <div class="grid">${opts.map(o => optCard(o)).join('')}</div>
    ${secH('✨', todayPlan.length ? 'Today’s plan' : 'Up next for you', `<span class="spacer"></span><a class="btn sm ghost" href="#/plan">Planner</a>`)}
    <div>${suggest.length ? suggest.map(id => subLink(id)).join('') : '<div class="card">🎉 You’ve marked everything as “got it”. Keep it fresh with flashcards and exam questions!</div>'}</div>
    ${secH('⚡', 'Quick practice')}
    <div class="grid g2">
      <a class="opt-card" style="--c:#f59e0b" href="#/flash/due"><span class="em">🃏</span><span><h4>Flashcards</h4><p>${due} card${due === 1 ? '' : 's'} due today</p></span></a>
      <a class="opt-card" style="--c:#6d4aff" href="#/quiz/mix"><span class="em">🎯</span><span><h4>Mixed quiz</h4><p>10 questions from your ${Y.L.unitsWord}</p></span></a>
      <a class="opt-card" style="--c:#14a88e" href="#/examq"><span class="em">✍️</span><span><h4>Exam questions</h4><p>${Y.L.examqDesc}</p></span></a>
      <a class="opt-card" style="--c:#ff7ab6" href="#/note/new"><span class="em">📝</span><span><h4>Write a note</h4><p>Saved safely on this device</p></span></a>
    </div>
    <div class="card" style="margin-top:16px"><span class="eyebrow" style="color:var(--brand)">💡 Tip of the day</span><p style="margin:6px 0 0">${tip}</p></div>` });
}
function subLink(id, inOpt = false) {
  const { s, o } = SUBS[id]; const c = S.conf[id];
  const meta = [inOpt ? '' : `${o.emoji} ${o.short}`, s.ks && STUDIES[s.ks] ? '⭐ ' + esc(STUDIES[s.ks].name) : ''].filter(Boolean).join(' · ');
  return `<a class="sub-link" href="#/s/${id}" style="--acc:${o.color};--acc-soft:color-mix(in srgb, ${o.color} 12%, transparent)"><span class="code">${s.code}</span><span class="t">${esc(s.title)}${meta ? `<small>${meta}</small>` : ''}</span><span class="conf-dot ${c ? 'c' + c : ''}" title="${['Not rated', 'Not yet', 'Getting there', 'Got it'][c || 0]}"></span></a>`;
}

function learn() {
  const opts = chosen(), others = ORDER.filter(o => !opts.includes(o));
  render({ title: 'Learn', html: `
    <span class="eyebrow">📖 Learn · ${Y.L.name}</span><h1>${Y.L.learnH}</h1>
    <p class="lead">${Y.L.learnLead}</p>
    <div class="grid">${opts.map(o => optCard(o)).join('')}</div>
    ${others.length ? `<h3>Other options</h3><p class="muted small" style="margin-top:-4px">Not in your chosen two – but still here if you need them.</p><div class="grid">${others.map(o => optCard(o, 'dim')).join('')}</div>` : ''}
    <h3>Also useful</h3>
    <div class="grid g2">
      <a class="opt-card" style="--c:#f59e0b" href="#/studies"><span class="em">⭐</span><span><h4>${Y.L.ks}</h4><p>${Y.L.ksAll}</p></span></a>
      <a class="opt-card" style="--c:#6d4aff" href="#/debates"><span class="em">⚖️</span><span><h4>Issues, debates & methods</h4><p>The evaluation toolkit</p></span></a>
    </div>` });
}

function optionPage(oid) {
  const o = Y.options[oid]; if (!o) return notFound();
  const pr = optProgress(oid);
  const studies = Object.entries(STUDIES).filter(([, k]) => k.opt === oid);
  render({ title: o.name, acc: o.color, back: 'learn', html: `
    <section class="hero"><span class="emoji-big">${o.emoji}</span>
      <span class="eyebrow" style="color:#fff;opacity:.85">${Y.L.unit}</span><h1>${o.name}</h1><p>${o.blurb}</p>
      <div class="stats"><div class="stat"><b>${pr.got}/${pr.total}</b><span>subtopics “got it”</span></div><div class="stat"><b>${pr.pct}%</b><span>confidence</span></div><div class="stat"><b>${studies.length || o.topics.length}</b><span>${studies.length ? Y.L.ks.toLowerCase() : 'topics'}</span></div></div></section>
    <div class="card" style="margin-top:14px"><p style="margin:0">${o.intro}</p></div>
    ${o.topics.map(t => { const qb = S.quiz[t.id]?.best; return `<section class="topic">
      <div class="topic-h"><span class="num">${t.emoji}</span><div><h3>${t.code} ${esc(t.title)}</h3><small>${t.subs.length} subtopics${qb != null ? ` · quiz best ${qb}%` : ''}</small></div></div>
      ${t.subs.map(s => subLink(s.id, true)).join('')}
      <div class="topic-actions"><a class="btn sm soft" href="#/quiz/${t.id}">🎯 Quiz</a><a class="btn sm soft" href="#/flash/t:${t.id}">🃏 Flashcards</a><a class="btn sm soft" href="#/examq/${t.id}">✍️ Exam questions</a></div>
    </section>`; }).join('')}
    ${studies.length ? secH('⭐', Y.L.ks) : ''}
    <div class="grid">${studies.map(([id, k]) => `<a class="ks-card" href="#/k/${id}"><span class="em">⭐</span><span><b>${k.name}</b><span>${esc(k.short)} · ${SUBS[k.sub].s.code}</span></span></a>`).join('')}</div>` });
}

function subPage(id) {
  const x = SUBS[id]; if (!x) return notFound();
  const { s, t, o } = x;
  S.last = id; S.visited[id] = Date.now(); touch(); save();
  const ids = subsOf(o.id), i = ids.indexOf(id), prev = ids[i - 1], next = ids[i + 1];
  const ks = s.ks && STUDIES[s.ks];
  const myNotes = S.notes.filter(n => n.tag === id);
  render({ title: s.title, acc: o.color, back: 'o/' + o.id, readable: true, html: `
    <div class="row wrap"><span class="eyebrow">${o.emoji} ${o.short} · ${t.code} ${esc(t.title)}</span></div>
    <h1>${s.code} ${esc(s.title)}</h1>
    <div class="row wrap no-print" style="margin:6px 0 4px"><button class="btn sm pri" data-act="listen">${ic('sound')} Listen</button><button class="btn sm" data-act="print">${ic('print')} Print</button><a class="btn sm" href="#/note/new?tag=${id}">${ic('plus')} Note</a></div>
    <div class="tldr"><span class="e">⚡</span><p><b class="k">In short</b>${s.inShort}</p></div>
    <article class="notes">${s.notes}</article>
    ${s.ev ? secH('⚖️', 'Strengths & weaknesses') + evBlock(s.ev) : ''}
    ${ks ? secH('⭐', Y.L.ks1) + `<a class="ks-card" href="#/k/${s.ks}"><span class="em">⭐</span><span style="flex:1"><b>${ks.name}</b><span>${esc(ks.short)} – aim, procedure, results & evaluation</span></span>${ic('next')}</a>` : ''}
    <div class="no-read">
    ${secH('🧩', 'Issues, debates & methods to use here')}
    <p class="small muted" style="margin-top:-6px">These are listed in the syllabus for this topic – exam questions often name one. Tap for help.</p>
    ${debChips(s.debates)}
    ${secH('🎬', 'Watch & learn')}
    ${vidCards(s.vids, `${s.title} A level psychology`)}
    ${secH('🔑', 'Key terms', `<span class="spacer"></span><a class="btn sm soft" href="#/flash/sub:${id}">🃏 Flashcards</a>`)}
    <div class="card" style="padding:6px 16px">${s.terms.map(([a, b]) => `<div class="set-row"><div class="lbl"><b>${esc(a)}</b><small style="font-size:.9rem;color:var(--ink-2)">${esc(b)}</small></div></div>`).join('')}</div>
    ${secH('🎚️', 'How confident are you?')}
    <div class="conf" id="conf">${[[1, '😟', 'Not yet'], [2, '🤔', 'Getting there'], [3, '😎', 'Got it']].map(([v, e, l]) => `<button class="c${v} ${S.conf[id] === v ? 'on' : ''}" data-conf="${v}"><span>${e}</span>${l}</button>`).join('')}</div>
    ${secH('📝', 'My notes on this')}
    <div id="subNotes">${myNotes.map(n => `<a class="mini-note" href="#/note/${n.id}"><span>📝</span><div><b>${esc(n.title || 'Untitled')}</b><br>${esc(n.body.slice(0, 160))}${n.body.length > 160 ? '…' : ''}</div></a>`).join('')}</div>
    <textarea class="inline-note" id="quickNote" placeholder="Jot something down about ${esc(s.title)}… (saved to your notebook)" style="margin-top:10px"></textarea>
    <div class="row" style="margin-top:8px"><button class="btn sm pri" id="saveQuick">Save note</button><span class="small muted">Tip: use **bold** and - bullet points</span></div>
    <div class="pn">${prev ? `<a href="#/s/${prev}"><small>← Previous</small><b>${SUBS[prev].s.code} ${esc(SUBS[prev].s.title)}</b></a>` : '<span></span>'}${next ? `<a class="next" href="#/s/${next}"><small>Next →</small><b>${SUBS[next].s.code} ${esc(SUBS[next].s.title)}</b></a>` : `<a class="next" href="#/quiz/${t.id}"><small>Finished the topic? →</small><b>🎯 Take the ${t.code} quiz</b></a>`}</div>
    </div>` });
  $('#conf').addEventListener('click', e => {
    const b = e.target.closest('[data-conf]'); if (!b) return;
    const v = +b.dataset.conf; S.conf[id] = S.conf[id] === v ? 0 : v; if (!S.conf[id]) delete S.conf[id]; save();
    $$('#conf button').forEach(x => x.classList.toggle('on', +x.dataset.conf === S.conf[id]));
    if (v === 3 && S.conf[id] === 3) { toast('😎 Nice – marked as “got it”'); const pr = optProgress(o.id); if (pr.got === pr.total) confetti(); }
  });
  $('#saveQuick').addEventListener('click', () => {
    const txt = $('#quickNote').value.trim(); if (!txt) return toast('Write something first ✏️');
    const n = newNote({ tag: id, body: txt, title: txt.split('\n')[0].replace(/\*\*|==|^#+\s*|^[-*•]\s*/g, '').trim().slice(0, 60) || `Note on ${s.code}` });
    $('#quickNote').value = '';
    $('#subNotes').insertAdjacentHTML('beforeend', `<a class="mini-note" href="#/note/${n.id}"><span>📝</span><div><b>${esc(n.title)}</b><br>${esc(n.body.slice(0, 160))}</div></a>`);
    toast('📒 Saved to your notebook');
  });
}

function studyPage(id) {
  const k = STUDIES[id]; if (!k) return notFound();
  const { s, o } = SUBS[k.sub];
  touch();
  const sec = (e, h, body) => `<div class="ks-sec"><h4>${e} ${h}</h4>${body}</div>`;
  const kvids = s.vids.filter(v => /key study|study|et al|\(\d{4}\)/i.test(v[1]));
  render({ title: k.name, acc: o.color, back: 's/' + k.sub, readable: true, html: `
    <span class="eyebrow">⭐ ${Y.L.ks1} · ${o.emoji} ${o.short} · ${s.code}</span>
    <h1>${k.name}</h1><p class="lead" style="margin-bottom:6px">${esc(k.short)}</p>
    <div class="row wrap no-print" style="margin:4px 0 10px"><button class="btn sm pri" data-act="listen">${ic('sound')} Listen</button><a class="btn sm" href="#/s/${k.sub}">📖 Topic notes</a><a class="btn sm" href="#/note/new?tag=${k.sub}">${ic('plus')} Note</a></div>
    <p class="ref">${esc(k.ref)}</p>
    ${sec('🧭', 'Context', `<p>${k.context}</p>`)}
    ${sec('🎯', 'Aim', `<p>${k.aim}</p>`)}
    <div class="grid g2">${sec('👥', 'Sample', `<p>${k.sample}</p>`)}${sec('🧪', 'Method / design', `<p>${k.method}</p>`)}</div>
    ${sec('📋', 'Procedure', `<ol>${k.procedure.map(p => `<li>${p}</li>`).join('')}</ol>`)}
    ${sec('📊', 'Results', `<ul>${k.results.map(p => `<li>${p}</li>`).join('')}</ul>`)}
    ${sec('💡', 'Conclusion', `<p>${k.conclusion}</p>`)}
    ${secH('⚖️', 'Evaluation')}${evBlock(k.ev)}
    ${secH('🧩', 'Issues & debates')}
    <div class="ks-sec">${Object.entries(k.debates).map(([dk, txt]) => `<p><b>${Y.debates[dk]?.emoji || '•'} ${Y.debates[dk]?.name || dk}:</b> ${txt}</p>`).join('')}</div>
    <div class="no-read">${kvids.length ? secH('🎬', 'Watch') + vidCards(kvids, `${k.name} psychology key study`) : secH('🎬', 'Watch') + vidCards([], `${k.name} psychology key study`)}
    <div class="row wrap" style="margin-top:18px"><a class="btn soft" href="#/flash/ks:${o.id}">🃏 ${Y.L.ks1} flashcards</a><a class="btn soft" href="#/studies">⭐ All ${Y.L.ks.toLowerCase()}</a></div></div>` });
}

function studiesPage() {
  render({ title: Y.L.ks, back: 'learn', html: `
    <span class="eyebrow">⭐ ${Y.L.ks}</span><h1>All your ${Y.L.ks.toLowerCase()}</h1>
    <p class="lead">${Y.L.ksLead}</p>
    ${chosen().filter(oid => Object.values(STUDIES).some(k => k.opt === oid)).map(oid => { const o = Y.options[oid]; return `${secH(o.emoji, o.name, `<span class="spacer"></span><a class="btn sm soft" href="#/flash/ks:${oid}" style="--acc:${o.color}">🃏 Flashcards</a>`)}
      <div class="grid">${Object.entries(STUDIES).filter(([, k]) => k.opt === oid).map(([id, k]) => `<a class="ks-card" style="--acc:${o.color};--acc-soft:color-mix(in srgb, ${o.color} 12%, transparent)" href="#/k/${id}"><span class="em">⭐</span><span style="flex:1"><b>${k.name}</b><span>${esc(k.short)} · ${SUBS[k.sub].s.code}</span></span>${ic('next')}</a>`).join('')}</div>`; }).join('')}` });
}

/* ───────────── practice hub & quizzes ───────────── */
function practice() {
  render({ title: 'Practise', html: `
    <span class="eyebrow">🎯 Practise</span><h1>Test yourself</h1>
    <p class="lead">Testing yourself is the fastest way to remember. Mix quizzes, flashcards and real exam-style questions.</p>
    <div class="grid g3">
      <a class="opt-card" style="--c:#6d4aff" href="#/quiz/mix"><span class="em">🎲</span><span><h4>Mixed quiz</h4><p>10 random questions</p></span></a>
      <a class="opt-card" style="--c:#f59e0b" href="#/flash"><span class="em">🃏</span><span><h4>Flashcards</h4><p>${dueCards(allCardsFor(chosen())).length} due</p></span></a>
      <a class="opt-card" style="--c:#14a88e" href="#/examq"><span class="em">✍️</span><span><h4>Exam questions</h4><p>With answer guides</p></span></a>
    </div>
    ${chosen().map(oid => { const o = Y.options[oid]; return `${secH(o.emoji, o.name + ' quizzes')}
      <div class="grid g2">${o.topics.map(t => { const r = S.quiz[t.id]; return `<a class="opt-card" style="--c:${o.color}" href="#/quiz/${t.id}"><span class="em">${t.emoji}</span><span style="flex:1"><h4>${t.code} ${esc(t.title)}</h4><p>${t.quiz.length} questions${r ? ` · best ${r.best}%` : ' · not tried yet'}</p></span>${r ? `<span class="ring" style="--c:${o.color};--p:${r.best}"><b>${r.best}%</b></span>` : ''}</a>`; }).join('')}</div>`; }).join('')}` });
}
function quizPage(qid) {
  let qs, title, acc = null, back = 'practice';
  if (qid === 'mix') {
    qs = shuffle(chosen().flatMap(oid => Y.options[oid].topics.flatMap(t => t.quiz.map(q => [...q, t.id])))).slice(0, 10);
    title = 'Mixed quiz';
  } else {
    const x = TOPICS[qid]; if (!x) return notFound();
    qs = shuffle(x.t.quiz.map(q => [...q, qid])); title = `${x.t.code} ${x.t.title} quiz`; acc = x.o.color; back = 'o/' + x.o.id;
  }
  let i = 0, score = 0; const wrong = [];
  render({ title, acc, back, html: `<div class="q-wrap" id="quiz"></div>` });
  const host = $('#quiz');
  function step() {
    if (i >= qs.length) return finish();
    const [q, opts, correct, why] = qs[i];
    const order = shuffle(opts.map((o, k) => k));
    host.innerHTML = `<div class="q-top"><span class="small muted">${i + 1} / ${qs.length}</span><div class="bar"><i style="width:${i / qs.length * 100}%"></i></div><span class="small"><b>${score}</b> ✓</span></div>
      <div class="q-card"><h2>${esc(q)}</h2><div class="ans">${order.map((k, n) => `<button data-k="${k}"><span class="l">${'ABCD'[n]}</span><span>${esc(opts[k])}</span></button>`).join('')}</div><div id="why"></div></div>`;
    host.querySelector('.ans').addEventListener('click', e => {
      const b = e.target.closest('button[data-k]'); if (!b || b.disabled) return;
      const k = +b.dataset.k, ok = k === correct;
      $$('.ans button', host).forEach(x => { x.disabled = true; if (+x.dataset.k === correct) x.classList.add('right'); });
      if (!ok) { b.classList.add('wrong'); wrong.push(qs[i]); } else score++;
      $('#why', host).innerHTML = `<div class="why">${ok ? '✅ <b>Correct!</b>' : '❌ <b>Not quite.</b>'} ${esc(why)}</div><button class="btn pri block" id="nextQ" style="margin-top:12px">${i + 1 < qs.length ? 'Next question →' : 'See my score 🎉'}</button>`;
      $('#nextQ').addEventListener('click', () => { i++; step(); });
      $('#nextQ').focus({ preventScroll: true });
    });
  }
  function finish() {
    const pct = Math.round(score / qs.length * 100);
    const prev = S.quiz[qid]; S.quiz[qid] = { best: Math.max(pct, prev?.best || 0), last: pct, n: (prev?.n || 0) + 1, at: Date.now() }; touch(); save();
    if (pct >= 80) confetti();
    const msg = pct === 100 ? 'Perfect score! 🏆' : pct >= 80 ? 'Brilliant work! 🌟' : pct >= 60 ? 'Good effort – review the ones you missed 💪' : 'Keep going – re-read the notes, then try again 📖';
    host.innerHTML = `<div class="q-card" style="text-align:center"><span class="eyebrow">Your score</span><div class="score-big">${pct}%</div><p style="margin:0 0 4px"><b>${score} / ${qs.length}</b> correct</p><p class="muted">${msg}</p>
      <div class="row wrap" style="justify-content:center;margin-top:12px"><button class="btn pri" id="retry">↻ Try again</button>${qid !== 'mix' ? `<a class="btn" href="#/flash/t:${qid}">🃏 Flashcards</a><a class="btn" href="#/examq/${qid}">✍️ Exam questions</a>` : `<a class="btn" href="#/practice">More practice</a>`}</div></div>
      ${wrong.length ? `<h3>Review your mistakes</h3>${wrong.map(([q, o, c, w, tid]) => `<div class="card" style="margin-top:10px"><b>${esc(q)}</b><p style="margin:6px 0 0">✅ ${esc(o[c])}</p><p class="small muted" style="margin:4px 0 0">${esc(w)} · <a href="#/o/${TOPICS[tid].o.id}">${TOPICS[tid].t.code} notes</a></p></div>`).join('')}` : ''}`;
    $('#retry').addEventListener('click', () => quizPage(qid));
  }
  step();
}

/* ───────────── flashcards (spaced repetition, Leitner boxes) ───────────── */
const INTERVALS = [0, 1, 2, 4, 8, 16, 32];
function cardsForSub(sid) { const { s } = SUBS[sid]; return s.terms.map((tm, n) => ({ id: `term:${sid}:${n}`, f: tm[0], b: tm[1], tag: `${s.code} ${s.title}` })); }
function studyCard(id) { const k = STUDIES[id]; return { id: `ks:${id}`, f: k.name, sub: k.short, b: `<b>Aim:</b> ${k.aim}<br><br><b>Key finding:</b> ${k.results[0]}`, tag: Y.L.ks1, html: true }; }
function allCardsFor(opts) { return opts.flatMap(oid => [...subsOf(oid).flatMap(cardsForSub), ...Object.keys(STUDIES).filter(k => STUDIES[k].opt === oid).map(studyCard)]); }
function deck(id) {
  if (id === 'due') return { name: 'Due today', cards: dueCards(allCardsFor(chosen())), due: true };
  if (id === 'cmd') return { name: 'Command words', cards: Y.exam.commands.map(([w, m], n) => ({ id: `cmd:${n}`, f: w, b: m, tag: 'Command word' })) };
  const [kind, ref] = id.split(':');
  if (kind === 'o' && Y.options[ref]) return { name: Y.options[ref].name, acc: Y.options[ref].color, cards: subsOf(ref).flatMap(cardsForSub) };
  if (kind === 'ks' && Y.options[ref]) return { name: Y.options[ref].short + ' ' + Y.L.ks.toLowerCase(), acc: Y.options[ref].color, cards: Object.keys(STUDIES).filter(k => STUDIES[k].opt === ref).map(studyCard) };
  if (kind === 't' && TOPICS[ref]) return { name: `${TOPICS[ref].t.code} ${TOPICS[ref].t.title}`, acc: TOPICS[ref].o.color, cards: TOPICS[ref].t.subs.flatMap(s => cardsForSub(s.id)) };
  if (kind === 'sub' && SUBS[ref]) return { name: `${SUBS[ref].s.code} ${SUBS[ref].s.title}`, acc: SUBS[ref].o.color, cards: cardsForSub(ref) };
  return null;
}
const dueCards = cards => cards.filter(c => !S.flash[c.id] || S.flash[c.id].d <= Date.now());
function flashHub() {
  const total = allCardsFor(chosen()), due = dueCards(total), learned = total.filter(c => (S.flash[c.id]?.b || 0) >= 3).length;
  render({ title: 'Flashcards', back: 'practice', html: `
    <span class="eyebrow">🃏 Flashcards</span><h1>Flashcards</h1>
    <p class="lead">Cards you find hard come back sooner; cards you know come back later (spaced repetition). A few minutes a day beats hours of cramming.</p>
    <div class="grid g3"><div class="card"><b style="font-size:1.6rem">${due.length}</b><div class="small muted">due today</div></div><div class="card"><b style="font-size:1.6rem">${learned}</b><div class="small muted">well learned</div></div><div class="card"><b style="font-size:1.6rem">${total.length}</b><div class="small muted">cards in total</div></div></div>
    <a class="btn pri block" href="#/flash/due" style="margin-top:14px">🃏 Study the ${due.length} due card${due.length === 1 ? '' : 's'}</a>
    ${chosen().map(oid => { const o = Y.options[oid]; const oc = subsOf(oid).flatMap(cardsForSub); return `${secH(o.emoji, o.name)}
      <div class="grid g2"><a class="opt-card" style="--c:${o.color}" href="#/flash/o:${oid}"><span class="em">🔑</span><span><h4>All key terms</h4><p>${oc.length} cards · ${dueCards(oc).length} due</p></span></a>
      ${Object.values(STUDIES).some(k => k.opt === oid) ? `<a class="opt-card" style="--c:${o.color}" href="#/flash/ks:${oid}"><span class="em">⭐</span><span><h4>${Y.L.ks}</h4><p>Aims & key findings</p></span></a>` : ''}
      ${o.topics.map(t => { const tc = t.subs.flatMap(s => cardsForSub(s.id)); return `<a class="opt-card" style="--c:${o.color}" href="#/flash/t:${t.id}"><span class="em">${t.emoji}</span><span><h4>${t.code} ${esc(t.title)}</h4><p>${tc.length} cards · ${dueCards(tc).length} due</p></span></a>`; }).join('')}</div>`; }).join('')}
    ${secH('🗣️', 'Exam skills')}<a class="opt-card" style="--c:#6d4aff" href="#/flash/cmd"><span class="em">📣</span><span><h4>Command words</h4><p>Describe, evaluate, explain, suggest…</p></span></a>` });
}
function flashSession(id) {
  const d = deck(id); if (!d) return notFound();
  let queue = d.due ? shuffle(d.cards) : shuffle(dueCards(d.cards));
  let practiceAll = false;
  if (!queue.length) {
    render({ title: d.name, acc: d.acc, back: 'flash', html: `<div class="empty"><span class="e">🎉</span><h2>All caught up!</h2><p>No cards in <b>${esc(d.name)}</b> are due right now. Come back tomorrow – or practise them anyway.</p>${d.cards.length ? '<button class="btn pri" id="anyway">Practise anyway</button>' : ''}</div>` });
    $('#anyway')?.addEventListener('click', () => { practiceAll = true; queue = shuffle(d.cards); run(); });
    return;
  }
  run();
  function run() {
    let done = 0; const start = queue.length;
    render({ title: d.name, acc: d.acc, back: 'flash', html: `<div class="q-top" style="max-width:560px;margin:0 auto 16px"><span class="small muted" id="fcCount"></span><div class="bar"><i id="fcBar"></i></div></div><div id="fcHost"></div>` });
    const host = $('#fcHost');
    function show() {
      if (!queue.length) { touch(); save(); confetti(); host.innerHTML = `<div class="empty"><span class="e">🌟</span><h2>Session complete!</h2><p>You reviewed ${start} card${start === 1 ? '' : 's'}. ${practiceAll ? '' : 'They’ll come back when you’re about to forget them.'}</p><a class="btn pri" href="#/flash">Back to flashcards</a></div>`; $('#fcBar').style.width = '100%'; $('#fcCount').textContent = 'Done'; return; }
      const c = queue[0];
      $('#fcCount').textContent = `${queue.length} left`; $('#fcBar').style.width = (done / (done + queue.length) * 100) + '%';
      host.innerHTML = `<div class="fc-stage"><div class="fc" id="fc" tabindex="0" role="button" aria-label="Flip card">
        <div class="face front"><small style="opacity:.85;margin-bottom:8px">${esc(c.tag)}</small><b>${esc(c.f)}</b>${c.sub ? `<p style="margin:8px 0 0;opacity:.9">${esc(c.sub)}</p>` : ''}<span class="hint">Tap to flip ↻</span></div>
        <div class="face back"><div>${c.html ? c.b : esc(c.b)}</div></div></div></div>
        <div class="fc-btns hide" id="fcBtns"><button class="again" data-g="0">Again<small>show again soon</small></button><button class="good" data-g="1">Good<small>${INTERVALS[Math.min((S.flash[c.id]?.b || 0) + 1, 6)]} day(s)</small></button><button class="easy" data-g="2">Easy<small>${INTERVALS[Math.min((S.flash[c.id]?.b || 0) + 2, 6)]} day(s)</small></button></div>
        <p class="small muted" style="text-align:center;margin-top:14px">Keyboard: <b>Space</b> flip · <b>1</b> again · <b>2</b> good · <b>3</b> easy</p>`;
      const fc = $('#fc');
      const flip = () => { fc.classList.toggle('flip'); $('#fcBtns').classList.remove('hide'); };
      fc.addEventListener('click', flip);
      $('#fcBtns').addEventListener('click', e => { const b = e.target.closest('[data-g]'); if (b) grade(+b.dataset.g); });
    }
    function grade(g) {
      const c = queue.shift(); const cur = S.flash[c.id] || { b: 0 };
      if (g === 0) { S.flash[c.id] = { b: 0, d: Date.now() }; queue.splice(Math.min(3, queue.length), 0, c); }
      else { const b = Math.min(cur.b + g, 6); S.flash[c.id] = { b, d: Date.now() + INTERVALS[b] * 864e5 - 36e5 }; done++; }
      save(); show();
    }
    const key = e => {
      if (!$('#fc')) { document.removeEventListener('keydown', key); return; }
      if (e.target.closest('input, textarea, select')) return;
      if (e.key === ' ') { e.preventDefault(); $('#fc').click(); }
      if (!$('#fcBtns').classList.contains('hide') && ['1', '2', '3'].includes(e.key)) grade(+e.key - 1);
    };
    document.addEventListener('keydown', key);
    show();
  }
}

/* ───────────── exam practice ───────────── */
function examqHub() {
  render({ title: 'Exam questions', back: 'practice', html: `
    <span class="eyebrow">✍️ Exam practice</span><h1>Exam-style questions</h1>
    <p class="lead">Write your answer, then reveal what a good answer includes and tick off what you covered. Answers are saved on this device.</p>
    <a class="btn soft" href="#/exam">🏆 Read the exam guide first</a>
    ${chosen().map(oid => { const o = Y.options[oid]; return `${secH(o.emoji, o.name)}<div class="grid g2">${o.topics.map(t => { const n = t.exam.length, done = t.exam.filter((_, k) => (S.examAns[`${t.id}:${k}`]?.text || '').trim()).length; return `<a class="opt-card" style="--c:${o.color}" href="#/examq/${t.id}"><span class="em">${t.emoji}</span><span><h4>${t.code} ${esc(t.title)}</h4><p>${n} questions · ${done} answered</p></span></a>`; }).join('')}</div>`; }).join('')}` });
}
function examqPage(tid) {
  const x = TOPICS[tid]; if (!x) return notFound();
  const { t, o } = x;
  render({ title: `${t.code} exam questions`, acc: o.color, back: 'examq', html: `
    <span class="eyebrow">✍️ ${o.emoji} ${o.short} · ${t.code}</span><h1>${esc(t.title)}: exam practice</h1>
    <p class="lead">Rule of thumb: about <b>1 minute per mark</b>. Try to answer without looking at your notes first.</p>
    ${t.exam.map((e, k) => { const key = `${tid}:${k}`, a = S.examAns[key] || { text: '', ticks: [] }; return `<div class="exq" data-key="${key}">
      <span class="chip pill-acc">Paper ${e.p}</span>
      <p class="q">${esc(e.q)}</p>
      <textarea placeholder="Write your answer here…">${esc(a.text)}</textarea>
      <div class="row wrap" style="margin-top:8px"><button class="btn sm soft" data-reveal>👀 Show what a good answer includes</button><span class="saved small muted"></span></div>
      <div class="guide ${a.ticks?.length ? '' : 'hide'}">${e.guide.map((g, n) => `<label><input type="checkbox" data-n="${n}" ${a.ticks?.includes(n) ? 'checked' : ''}><span>${esc(g)}</span></label>`).join('')}</div></div>`; }).join('')}
    <div class="row wrap" style="margin-top:18px"><a class="btn" href="#/o/${o.id}">📖 Back to ${o.short} notes</a><a class="btn" href="#/quiz/${tid}">🎯 Topic quiz</a></div>` });
  $$('.exq').forEach(box => {
    const key = box.dataset.key; const get = () => (S.examAns[key] ||= { text: '', ticks: [] });
    let tmr; box.querySelector('textarea').addEventListener('input', e => { get().text = e.target.value; clearTimeout(tmr); tmr = setTimeout(() => { save(); box.querySelector('.saved').textContent = 'Saved ✓'; }, 400); });
    box.querySelector('[data-reveal]').addEventListener('click', () => box.querySelector('.guide').classList.toggle('hide'));
    box.querySelector('.guide').addEventListener('change', e => { const n = +e.target.dataset.n; const a = get(); a.ticks = e.target.checked ? [...new Set([...a.ticks, n])] : a.ticks.filter(x => x !== n); save(); if (a.ticks.length === box.querySelectorAll('.guide input').length) { toast('🏆 You covered everything!'); confetti(); } });
  });
}

/* ───────────── notebook ───────────── */
const COLORS = ['', '#6d4aff', '#ff7ab6', '#f59e0b', '#14a88e', '#3b82f6', '#ef4444'];
function newNote(o = {}) { const n = { id: uid(), title: '', body: '', tag: '', color: '', pinned: false, created: Date.now(), updated: Date.now(), ...o }; S.notes.unshift(n); save(); return n; }
const tagLabel = tag => { if (!tag) return ''; if (SUBS[tag]) return `${SUBS[tag].o.emoji} ${SUBS[tag].s.code} ${SUBS[tag].s.title}`; if (tag.startsWith('o:') && Y.options[tag.slice(2)]) return `${Y.options[tag.slice(2)].emoji} ${Y.options[tag.slice(2)].short} – general`; if (tag === 'exam') return '🏆 Exam skills'; return tag; };
const tagOpt = tag => SUBS[tag]?.o.id || (tag.startsWith('o:') ? tag.slice(2) : '');
let noteFilter = { q: '', f: 'all' };
function notesPage() {
  const opts = chosen();
  render({ title: 'My notes', html: `
    <span class="eyebrow">📒 Notebook</span><h1>My notes</h1>
    <p class="lead">Organised by topic, searchable, and saved on this device. Export a backup now and then so you never lose them.</p>
    <div class="nb-tools"><label class="search-in">${ic('search')}<input id="nq" placeholder="Search your notes…" value="${esc(noteFilter.q)}" aria-label="Search notes"></label>
      <a class="btn pri" href="#/note/new">${ic('plus')} New note</a></div>
    <div class="chips" id="nf">${[['all', '🗂️ All'], ['pin', '📌 Pinned'], ...opts.map(o => [o, `${Y.options[o].emoji} ${Y.options[o].short}`]), ['exam', '🏆 Exam skills'], ['none', '📎 No topic']].map(([k, l]) => `<button class="chip ${noteFilter.f === k ? 'on' : ''}" data-f="${k}">${l}</button>`).join('')}</div>
    <div id="nlist" style="margin-top:14px"></div>
    <div class="row wrap no-print" style="margin-top:22px"><button class="btn sm" id="expTxt">${ic('download')} Download notes (.txt)</button><button class="btn sm" id="expJson">${ic('download')} Backup notes (.json)</button><label class="btn sm">${ic('upload')} Import notes<input type="file" accept=".json,application/json" id="impJson" class="sr"></label></div>` });
  const draw = () => {
    const q = noteFilter.q.toLowerCase(), f = noteFilter.f;
    let list = S.notes.filter(n => (n.title + ' ' + n.body + ' ' + tagLabel(n.tag)).toLowerCase().includes(q));
    if (f === 'pin') list = list.filter(n => n.pinned); else if (f === 'none') list = list.filter(n => !n.tag); else if (f === 'exam') list = list.filter(n => n.tag === 'exam'); else if (f !== 'all') list = list.filter(n => tagOpt(n.tag) === f);
    list.sort((a, b) => (b.pinned - a.pinned) || b.updated - a.updated);
    $('#nlist').innerHTML = list.length ? `<div class="note-list">${list.map(n => `<a class="note-card" href="#/note/${n.id}" style="--nc:${n.color || (Y.options[tagOpt(n.tag)]?.color) || 'var(--line)'}">
        ${n.pinned ? '<span class="pin">📌</span>' : ''}<b>${esc(n.title || 'Untitled note')}</b><p>${esc(n.body.replace(/[*#=]/g, '').slice(0, 220))}</p>
        <span class="foot">${n.tag ? `<span class="chip" style="font-size:.7rem;padding:2px 8px">${esc(tagLabel(n.tag).slice(0, 34))}</span>` : ''}<span>${ago(n.updated)}</span></span></a>`).join('')}</div>`
      : `<div class="empty"><span class="e">${S.notes.length ? '🔍' : '📝'}</span><b>${S.notes.length ? 'No notes match.' : 'No notes yet.'}</b><p>${S.notes.length ? 'Try another search or filter.' : 'Write your first note – or add one from any topic page.'}</p>${S.notes.length ? '' : '<a class="btn pri" href="#/note/new">Write a note</a>'}</div>`;
  };
  draw();
  $('#nq').addEventListener('input', e => { noteFilter.q = e.target.value; draw(); });
  $('#nf').addEventListener('click', e => { const b = e.target.closest('[data-f]'); if (!b) return; noteFilter.f = b.dataset.f; $$('#nf .chip').forEach(c => c.classList.toggle('on', c === b)); draw(); });
  $('#expTxt').addEventListener('click', exportNotesTxt);
  $('#expJson').addEventListener('click', () => download(`my-psychology-notes-y${S.year}-${dkey()}.json`, JSON.stringify({ app: 'domi-psychology', kind: 'notes', notes: S.notes }, null, 2), 'application/json'));
  $('#impJson').addEventListener('change', e => importFile(e.target.files[0], 'notes'));
}
function exportNotesTxt() {
  if (!S.notes.length) return toast('No notes to export yet');
  const groups = {};
  S.notes.forEach(n => { const k = n.tag ? tagLabel(n.tag) : '📎 Other notes'; (groups[k] ||= []).push(n); });
  const order = Object.keys(groups).sort((a, b) => { const ia = SUBLIST.findIndex(id => tagLabel(id) === a), ib = SUBLIST.findIndex(id => tagLabel(id) === b); return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib); });
  let txt = `${S.name || 'My'}'s psychology notes – exported ${new Date().toLocaleString()}\n${'='.repeat(60)}\n\n`;
  order.forEach(k => { txt += `■ ${k}\n${'-'.repeat(50)}\n`; groups[k].forEach(n => { txt += `\n${n.pinned ? '[pinned] ' : ''}${n.title || 'Untitled'}  (${new Date(n.updated).toLocaleDateString()})\n${n.body}\n`; }); txt += '\n\n'; });
  download(`my-psychology-notes-y${S.year}-${dkey()}.txt`, txt);
}
function importFile(file, mode) {
  if (!file) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const data = JSON.parse(r.result);
      if (mode === 'notes' || data.kind === 'notes') {
        const incoming = (data.notes || data.state?.notes || []).filter(n => n && n.id); const have = new Set(S.notes.map(n => n.id)); let added = 0;
        incoming.forEach(n => { if (!have.has(n.id)) { S.notes.push({ title: '', body: '', tag: '', color: '', pinned: false, created: Date.now(), updated: Date.now(), ...n }); added++; } });
        save(true); toast(`📥 Imported ${added} note${added === 1 ? '' : 's'}`); route();
      } else if (data.app === 'domi-psychology' && data.kind === 'backup') {
        if (!confirm('Restore this backup? It will replace everything currently saved on this device.')) return;
        S = Object.assign(structuredClone(DEF), data.state); applyYear(); save(true); applyLook(); buildShell(); toast('✅ Backup restored'); route();
      } else toast('That file doesn’t look like a backup from this site.');
    } catch (e) { toast('Could not read that file.'); }
  };
  r.readAsText(file);
}
function noteEdit(id, qs) {
  if (id === 'new') {
    const n = newNote({ tag: qs.get('tag') || '' });
    history.replaceState(null, '', `#/note/${n.id}`); id = n.id;
  }
  const n = S.notes.find(x => x.id === id); if (!n) return notFound();
  const opts = chosen();
  const tagSel = `<select id="ntag" aria-label="Topic"><option value="">📎 No topic</option><option value="exam" ${n.tag === 'exam' ? 'selected' : ''}>🏆 Exam skills</option>
    ${ORDER.filter(o => opts.includes(o) || tagOpt(n.tag) === o).map(oid => { const o = Y.options[oid]; return `<optgroup label="${o.emoji} ${o.name}"><option value="o:${oid}" ${n.tag === 'o:' + oid ? 'selected' : ''}>${o.short} – general</option>${subsOf(oid).map(sid => `<option value="${sid}" ${n.tag === sid ? 'selected' : ''}>${SUBS[sid].s.code} ${esc(SUBS[sid].s.title)}</option>`).join('')}</optgroup>`; }).join('')}</select>`;
  render({ title: n.title || 'Note', back: 'notes', readable: true, html: `
    <div class="editor">
      <input class="title" id="ntitle" placeholder="Title" value="${esc(n.title)}" aria-label="Note title">
      <div class="bar-row">${tagSel}
        <div class="swatches" id="nsw">${COLORS.map(c => `<button data-c="${c}" class="${n.color === c ? 'on' : ''}" style="background:${c || 'var(--surface-3)'}" aria-label="Colour ${c || 'none'}"></button>`).join('')}</div>
        <button class="btn sm ${n.pinned ? 'soft' : 'ghost'}" id="npin">📌 ${n.pinned ? 'Pinned' : 'Pin'}</button>
        <button class="btn sm ghost" id="nprev">👁 Preview</button>
        <span class="spacer"></span><span class="saved" id="nsaved">Saved ✓</span></div>
      <textarea id="nbody" placeholder="Start typing…  Tips: **bold**, ==highlight==, - bullet points, # heading" aria-label="Note text">${esc(n.body)}</textarea>
      <div class="md-prev notes hide" id="nmd"></div>
    </div>
    <div class="row wrap no-print" style="margin-top:12px"><button class="btn sm" data-act="listen-note">${ic('sound')} Listen</button>${n.tag && SUBS[n.tag] ? `<a class="btn sm" href="#/s/${n.tag}">📖 Open topic</a>` : ''}<span class="spacer"></span><button class="btn sm danger" id="ndel">${ic('trash')} Delete</button></div>
    <p class="small muted" style="margin-top:10px">Created ${new Date(n.created).toLocaleString()} · notes are saved in this browser on this device.</p>` });
  const body = $('#nbody'), grow = () => { body.style.height = 'auto'; body.style.height = Math.max(300, body.scrollHeight) + 'px'; };
  grow();
  let tmr; const changed = () => { n.updated = Date.now(); $('#nsaved').textContent = 'Saving…'; clearTimeout(tmr); tmr = setTimeout(() => { save(true); $('#nsaved').textContent = 'Saved ✓'; }, 400); };
  $('#ntitle').addEventListener('input', e => { n.title = e.target.value; $('#topTitle').textContent = n.title || 'Note'; changed(); });
  body.addEventListener('input', e => { n.body = e.target.value; grow(); changed(); });
  $('#ntag').addEventListener('change', e => { n.tag = e.target.value; changed(); });
  $('#nsw').addEventListener('click', e => { const b = e.target.closest('[data-c]'); if (!b) return; n.color = b.dataset.c; $$('#nsw button').forEach(x => x.classList.toggle('on', x === b)); changed(); });
  $('#npin').addEventListener('click', e => { n.pinned = !n.pinned; e.currentTarget.className = `btn sm ${n.pinned ? 'soft' : 'ghost'}`; e.currentTarget.textContent = `📌 ${n.pinned ? 'Pinned' : 'Pin'}`; changed(); });
  $('#nprev').addEventListener('click', () => { const on = $('#nmd').classList.toggle('hide'); body.classList.toggle('hide', !on); $('#nmd').innerHTML = md(n.body) || '<p class="muted">Nothing to preview yet.</p>'; $('#nprev').textContent = on ? '👁 Preview' : '✏️ Edit'; });
  $('#ndel').addEventListener('click', () => { if (!confirm('Delete this note? This can’t be undone.')) return; S.notes = S.notes.filter(x => x.id !== id); save(true); toast('🗑️ Note deleted'); location.hash = '#/notes'; });
  if (!n.body && !n.title) setTimeout(() => $('#ntitle').focus(), 50);
}
function cleanupEmptyNotes(exceptId) { const before = S.notes.length; S.notes = S.notes.filter(n => n.id === exceptId || n.title.trim() || n.body.trim()); if (S.notes.length !== before) save(true); }

/* ───────────── exam guide, debates, planner, search, settings, more ───────────── */
function examGuide() {
  const E = Y.exam;
  render({ title: 'Exam guide', back: 'more', readable: true, html: `
    <span class="eyebrow">🏆 Exam guide</span><h1>${Y.L.examH}</h1>
    <p class="lead">${Y.L.examLead}</p>
    <div class="grid g2">${E.papers.map(p => `<div class="card"><span class="chip pill-acc">Paper ${p.n}</span><h3 style="margin:10px 0 4px">${p.name.replace(/^Paper \d – /, '')}</h3><p class="small muted" style="margin:0 0 8px">⏱ ${p.time} · ${p.marks} marks · ${p.weight}</p><p class="read-me" style="margin:0 0 8px">${p.what}</p><p class="tip small" style="margin:0">${p.ao}</p></div>`).join('')}</div>
    ${secH('🎯', 'Assessment objectives')}
    <div class="grid g3">${E.aos.map(([a, b, c]) => `<div class="card"><b style="color:var(--brand)">${a}</b><div style="font-weight:600">${b}</div><p class="small muted read-me" style="margin:4px 0 0">${c}</p></div>`).join('')}</div>
    ${secH('📣', 'Command words', `<span class="spacer"></span><a class="btn sm soft" href="#/flash/cmd">🃏 Learn them</a>`)}
    <div class="card" style="padding:4px 16px">${E.commands.map(([w, m]) => `<div class="set-row"><div class="lbl"><b>${w}</b><small style="font-size:.9rem;color:var(--ink-2)" class="read-me">${m}</small></div></div>`).join('')}</div>
    ${secH('📝', Y.L.essayH)}
    <div class="notes ex-guide">${E.essay}</div>
    ${secH('🧪', Y.L.planH)}
    <div class="notes ex-guide">${E.planning}</div>
    ${secH('🚀', 'Top revision tips')}
    <div class="card"><ol style="margin:0;padding-left:1.2rem">${E.tips.map(t => `<li style="margin:6px 0">${t}</li>`).join('')}</ol></div>
    <div class="row wrap" style="margin-top:16px"><a class="btn pri" href="#/examq">✍️ Practise exam questions</a><a class="btn" href="#/debates">⚖️ Issues & debates</a></div>` });
}
function debatesPage(qs) {
  const go = qs.get('go'), m = qs.get('m');
  render({ title: 'Debates & methods', back: 'learn', readable: true, html: `
    <span class="eyebrow">⚖️ Evaluation toolkit</span><h1>Issues, debates & methods</h1>
    <p class="lead">${Y.L.debLead}</p>
    ${Y.debateOrder.map(k => { const d = Y.debates[k]; return `<div class="deb" id="deb-${k}"><h4><span class="e">${d.emoji}</span>${d.name}</h4><p>${d.def}</p><p class="tip small">💡 <b>How to use it:</b> ${d.use}</p><ul>${d.eg.map(x => `<li>${x}</li>`).join('')}</ul></div>`; }).join('')}
    ${secH('🧪', 'Research methods toolkit')}
    ${Y.methods ? `<p class="small muted" style="margin-top:-6px">A Level adds RCTs, postal questionnaires, rating scales, psychometrics, hypotheses and temporal validity – the AS methods are still needed too.</p>
    <div class="methods">${Y.methods.map(x => `<details class="acc" id="${x.id}" ${m === x.id ? 'open' : ''}><summary><span>${x.emoji}</span>${x.title}<span class="lvl ${x.level === 'A Level' ? 'a' : ''}">${x.level}</span></summary><div class="notes">${x.body}</div></details>`).join('')}</div>` : `<p class="small muted" style="margin-top:-6px">Everything for Paper 2 – each one links to full notes, videos and a quiz.</p>${Y.options.rm.topics.map(t => `<section class="topic"><div class="topic-h"><span class="num">${t.emoji}</span><div><h3>${t.code} ${esc(t.title)}</h3></div></div>${t.subs.map(s => subLink(s.id, true)).join('')}</section>`).join('')}`}` });
  const target = go ? $('#deb-' + go) : m ? $('#' + m) : null;
  if (target) setTimeout(() => { target.scrollIntoView({ behavior: S.reduce ? 'auto' : 'smooth', block: 'start' }); target.animate?.([{ boxShadow: '0 0 0 4px var(--brand)' }, { boxShadow: '0 0 0 0 transparent' }], { duration: 1600 }); }, 80);
}
function buildPlan() {
  const days = examDays();
  if (days === null || days < 1) return null;
  const subs = chosen().flatMap(subsOf);
  const rank = id => ({ 1: 0, undefined: 1, 2: 2, 3: 3 })[S.conf[id]] ?? 1;
  const first = subs.slice().sort((a, b) => rank(a) - rank(b) || subs.indexOf(a) - subs.indexOf(b));
  const studyDays = Math.max(1, days - 3);
  // first pass covers everything (weakest first); with lots of time, extra review passes revisit
  // weaker topics first, then everything again – spread evenly up to the final 3 days (spaced repetition)
  let list = first.slice();
  const review = first.filter(id => S.conf[id] !== 3).concat(first.filter(id => S.conf[id] === 3));
  while (list.length + review.length <= studyDays && list.length < first.length * 5) list = list.concat(review);
  const items = []; const d = new Date();
  for (let k = 0; k < list.length; k++) { const day = new Date(d); day.setDate(d.getDate() + Math.floor(k * studyDays / list.length)); items.push({ date: dkey(day), sid: list[k] }); }
  return { created: Date.now(), exam: S.examDate, items, done: {} };
}
function planPage() {
  const days = examDays();
  if (!S.examDate || days === null || days < 1) {
    render({ title: 'Revision planner', back: 'more', html: `<span class="eyebrow">🗓️ Planner</span><h1>Revision planner</h1>
      <p class="lead">Tell me when your first ${Y.L.papers} exam is and I’ll spread your topics across the days left – starting with the ones you feel least confident about.</p>
      <div class="card"><label class="field">📅 Exam date<input type="date" id="pd" value="${S.examDate}" min="${dkey()}"></label><button class="btn pri" id="pgo">Build my plan</button></div>` });
    $('#pgo').addEventListener('click', () => { const v = $('#pd').value; if (!v) return toast('Pick a date first'); S.examDate = v; S.plan = buildPlan(); save(true); planPage(); });
    return;
  }
  if (!S.plan || S.plan.exam !== S.examDate) { S.plan = buildPlan(); save(); }
  const items = S.plan.items, today = dkey();
  const byDay = {}; items.forEach(it => (byDay[it.date] ||= []).push(it));
  const dayKeys = Object.keys(byDay).sort();
  const doneN = items.filter(it => S.plan.done[it.date + '|' + it.sid]).length;
  const behind = items.filter(it => it.date < today && !S.plan.done[it.date + '|' + it.sid]).length;
  render({ title: 'Revision planner', back: 'more', html: `
    <span class="eyebrow">🗓️ Planner</span><h1>Your revision plan</h1>
    <p class="lead">${days} days until ${fmtDate(S.examDate)}. Topics you rated “not yet” come first; the last 3 days are for mixed quizzes, flashcards and exam questions.</p>
    <div class="card"><div class="row"><b>${doneN} / ${items.length}</b><span class="muted small">sessions done</span><span class="spacer"></span>${behind ? `<span class="chip" style="background:color-mix(in srgb,var(--mid) 18%,transparent);color:var(--tip-ink)">⏰ ${behind} catching up</span>` : '<span class="chip">✅ On track</span>'}</div><div class="bar" style="margin-top:10px"><i style="width:${items.length ? doneN / items.length * 100 : 0}%"></i></div>
      <div class="row wrap" style="margin-top:12px"><button class="btn sm" id="prebuild">↻ Rebuild plan from my current confidence</button><label class="field" style="margin:0;flex-direction:row;align-items:center">📅 <input type="date" id="pd" value="${S.examDate}" min="${dkey()}"></label></div></div>
    ${dayKeys.filter(k => k >= today || byDay[k].some(it => !S.plan.done[it.date + '|' + it.sid])).map(k => `<div class="day ${k === today ? 'today' : ''}"><div class="day-h">${k === today ? '📍 Today' : fmtDate(k)}<small>${k < today ? 'overdue' : ''}</small></div>
      ${byDay[k].map(it => { const key = it.date + '|' + it.sid, sx = SUBS[it.sid]; return `<div class="plan-item ${S.plan.done[key] ? 'done' : ''}"><input type="checkbox" data-key="${key}" ${S.plan.done[key] ? 'checked' : ''} aria-label="Done"><a href="#/s/${it.sid}">${sx.o.emoji} <b>${sx.s.code}</b> ${esc(sx.s.title)}</a><span class="conf-dot ${S.conf[it.sid] ? 'c' + S.conf[it.sid] : ''}"></span></div>`; }).join('')}</div>`).join('')}
    <div class="day"><div class="day-h">🏁 Final 3 days</div><div class="plan-item"><a href="#/quiz/mix">🎯 Mixed quizzes</a></div><div class="plan-item"><a href="#/flash/due">🃏 All due flashcards</a></div><div class="plan-item"><a href="#/examq">✍️ Timed exam questions</a></div><div class="plan-item"><a href="#/exam">🏆 Re-read the exam guide</a></div></div>` });
  $$('.plan-item input[data-key]').forEach(cb => cb.addEventListener('change', e => { const k = e.target.dataset.key; if (e.target.checked) S.plan.done[k] = 1; else delete S.plan.done[k]; e.target.closest('.plan-item').classList.toggle('done', e.target.checked); save(); if (e.target.checked) toast('✅ Nice one!'); }));
  $('#prebuild').addEventListener('click', () => { S.plan = buildPlan(); save(true); planPage(); toast('🗓️ Plan rebuilt'); });
  $('#pd').addEventListener('change', e => { if (!e.target.value) return; S.examDate = e.target.value; S.plan = buildPlan(); save(true); planPage(); });
}
function buildIndex() {
  searchIndex = [];
  SUBLIST.forEach(id => { const { s, o } = SUBS[id]; searchIndex.push({ href: `#/s/${id}`, title: `${s.code} ${s.title}`, sub: `${o.emoji} ${o.name}`, text: strip(s.inShort + ' ' + s.notes + ' ' + s.terms.map(t => t.join(' ')).join(' ')), opt: o.id }); });
  Object.entries(STUDIES).forEach(([id, k]) => searchIndex.push({ href: `#/k/${id}`, title: `⭐ ${k.name}`, sub: k.short, text: strip([k.context, k.aim, k.sample, k.method, ...k.procedure, ...k.results, k.conclusion].join(' ')), opt: k.opt }));
  Y.debateOrder.forEach(k => { const d = Y.debates[k]; searchIndex.push({ href: `#/debates?go=${k}`, title: `${d.emoji} ${d.name}`, sub: 'Issues & debates', text: strip(d.def + ' ' + d.use + ' ' + d.eg.join(' ')) }); });
  (Y.methods || []).forEach(m => searchIndex.push({ href: `#/debates?m=${m.id}`, title: `${m.emoji} ${m.title}`, sub: 'Research methods', text: strip(m.body) }));
}
function searchPage(qs) {
  if (!searchIndex) buildIndex();
  render({ title: 'Search', back: '', html: `<label class="search-in" style="margin-top:6px">${ic('search')}<input id="sq" type="search" placeholder="Search notes, studies, terms… ${Y.L.searchEg}" value="${esc(qs.get('q') || '')}" aria-label="Search"></label><div id="sres" style="margin-top:12px"></div>` });
  const inp = $('#sq');
  const run = () => {
    const q = inp.value.trim(); history.replaceState(null, '', '#/search' + (q ? '?q=' + encodeURIComponent(q) : ''));
    if (q.length < 2) { $('#sres').innerHTML = `<div class="empty"><span class="e">🔎</span>Type at least 2 letters to search everything – notes, key studies, debates, methods and your own notebook.</div>`; return; }
    const ql = q.toLowerCase(), re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'ig');
    const snip = t => { const i = t.toLowerCase().indexOf(ql); if (i < 0) return esc(t.slice(0, 140)) + '…'; const a = Math.max(0, i - 60); return (a ? '…' : '') + esc(t.slice(a, i + 100)).replace(re, m => `<mark>${m}</mark>`) + '…'; };
    const res = searchIndex.map(r => ({ r, sc: (r.title.toLowerCase().includes(ql) ? 10 : 0) + (r.text.toLowerCase().split(ql).length - 1) + (chosen().includes(r.opt) ? 1 : 0) })).filter(x => x.sc > 0).sort((a, b) => b.sc - a.sc).slice(0, 40);
    const mine = S.notes.filter(n => (n.title + ' ' + n.body).toLowerCase().includes(ql));
    $('#sres').innerHTML = (mine.length ? `<h3>📒 Your notes</h3>${mine.map(n => `<a class="res" href="#/note/${n.id}"><b>${esc(n.title || 'Untitled')}</b><span>${snip(n.body.replace(/\*\*|==|^#+\s*/gm, ''))}</span></a>`).join('')}` : '') +
      (res.length ? `<h3>📚 Revision content</h3>${res.map(({ r }) => `<a class="res" href="${r.href}"><b>${esc(r.title).replace(re, m => `<mark>${m}</mark>`)}</b><span class="small muted">${esc(r.sub)}</span><br><span>${snip(r.text)}</span></a>`).join('')}` : (mine.length ? '' : `<div class="empty"><span class="e">🤷</span>No results for “${esc(q)}”.</div>`));
  };
  let t; inp.addEventListener('input', () => { clearTimeout(t); t = setTimeout(run, 150); });
  run(); setTimeout(() => inp.focus(), 60);
}
function settingsPage() {
  const vs = voices();
  render({ title: 'Settings', back: 'more', html: `
    <span class="eyebrow">⚙️ Settings</span><h1>Settings</h1>
    <div class="card">
      <div class="set-row"><div class="lbl"><b>Your name</b><small>Shown on the home page</small></div><input type="text" id="sname" value="${esc(S.name)}" style="max-width:160px;border:1px solid var(--line);border-radius:11px;padding:8px 10px;background:var(--surface-2)"></div>
      <div class="set-row"><div class="lbl"><b>Exam date</b><small>Used for the countdown and planner</small></div><input type="date" id="sdate" value="${S.examDate}" style="border:1px solid var(--line);border-radius:11px;padding:8px 10px;background:var(--surface-2)"></div>
    </div>
    ${secH('🎓', 'School year')}
    <div class="card"><div class="set-row"><div class="lbl"><b>Which year are you revising?</b><small>Switch any time – Year 12 and Year 13 each keep their own notes, progress, scores, flashcards and plan.</small></div>${yearSwitch('set-yr')}</div></div>
    ${Y.pick ? `${secH('📚', 'My two options')}
    <div class="pick" id="spick">${ORDER.map(o => `<button data-o="${o}" class="${S.opts.includes(o) ? 'on' : ''}" style="--c:${Y.options[o].color}"><span class="e">${Y.options[o].emoji}</span><b>${Y.options[o].short}</b><small>${Y.options[o].blurb}</small></button>`).join('')}</div>
    <p class="small muted" style="margin-top:-4px">Not sure which your school does? Ask your teacher – or select all four.</p>` : ''}
    ${secH('🎨', 'Look & feel')}
    <div class="card">
      <div class="set-row"><div class="lbl"><b>Theme</b></div><div class="seg" id="stheme">${[['auto', 'Auto'], ['light', '☀️ Light'], ['dark', '🌙 Dark']].map(([v, l]) => `<button data-v="${v}" class="${S.theme === v ? 'on' : ''}">${l}</button>`).join('')}</div></div>
      <div class="set-row"><div class="lbl"><b>Text size</b><small id="fsl">${Math.round(S.fs * 100)}%</small></div><input type="range" id="sfs" min="0.85" max="1.35" step="0.05" value="${S.fs}"></div>
      <div class="set-row"><div class="lbl"><b>Easier reading spacing</b><small>More space between letters and lines</small></div><label class="switch"><input type="checkbox" id="ssp" ${S.spacious ? 'checked' : ''}><span></span></label></div>
      <div class="set-row"><div class="lbl"><b>Reduce motion</b><small>Turn off animations and confetti</small></div><label class="switch"><input type="checkbox" id="srm" ${S.reduce ? 'checked' : ''}><span></span></label></div>
    </div>
    ${secH('🎧', 'Listen (read aloud)')}
    <div class="card">
      ${hasTTS ? `<div class="set-row"><div class="lbl"><b>Voice</b><small>Uses the voices built into your phone/computer – free and works offline</small></div><select id="svoice" style="max-width:200px;border:1px solid var(--line);border-radius:11px;padding:8px;background:var(--surface-2)"><option value="">✨ Best available</option>${vs.map(v => `<option value="${esc(v.name)}" ${S.voice === v.name ? 'selected' : ''}>${esc(v.name)} (${v.lang})</option>`).join('')}</select></div>
      <div class="set-row"><div class="lbl"><b>Speed</b><small id="srl">${S.rate}×</small></div><input type="range" id="srate" min="0.7" max="1.6" step="0.05" value="${S.rate}"></div>
      <div class="set-row"><div class="lbl"><b>Test the voice</b></div><button class="btn sm" id="stest">${ic('sound')} Play sample</button></div>` : '<p class="muted">Your browser doesn’t support read-aloud. Try Chrome, Edge or Safari.</p>'}
      ${hasTTS && !vs.length ? '<p class="small muted">Voices are still loading – reopen this page in a moment.</p>' : ''}
    </div>
    ${secH('💾', 'Your data')}
    <div class="card">
      <p class="small muted" style="margin-top:0">Everything (notes, progress, scores) is saved privately in this browser on this device. Download a backup regularly – you can restore it on any device.</p>
      <div class="row wrap"><button class="btn" id="sback">${ic('download')} Download full backup</button><label class="btn">${ic('upload')} Restore backup<input type="file" accept=".json,application/json" id="srest" class="sr"></label><button class="btn danger" id="sreset">${ic('trash')} Reset everything</button></div>
    </div>
    ${secH('ℹ️', 'About')}
    <div class="card small"><p style="margin-top:0">Built for <b>${esc(S.name || 'you')}</b> – Cambridge International AS & A Level Psychology (9990): Year 12 (AS core studies & research methods) and Year 13 (specialist options), following the official <a href="https://www.cambridgeinternational.org/Images/721433-2027-syllabus.pdf" target="_blank" rel="noopener">syllabus for 2027</a> and <a href="https://www.cambridgeinternational.org/Images/721441-2027-reference-list.pdf" target="_blank" rel="noopener">reference list</a>.</p>
    <p>Videos belong to their creators on YouTube (Psych Boost, TheTeacherKind, Mr. Luis, Alila Medical Media, TED-Ed, CrashCourse and others) – thank you to them. These notes are a revision aid: always check with your teacher and textbook too.</p><p style="margin-bottom:0">Works offline once loaded · Add it to your home screen from your browser menu for an app-like experience.</p></div>` });
  $('#sname').addEventListener('input', e => { S.name = e.target.value.trim().slice(0, 24); save(); buildShell(); updateNav('settings'); });
  $('#sdate').addEventListener('change', e => { S.examDate = e.target.value; S.plan = null; save(); toast('📅 Exam date saved'); });
  $('#spick')?.addEventListener('click', e => { const b = e.target.closest('[data-o]'); if (!b) return; const o = b.dataset.o; S.opts = S.opts.includes(o) ? S.opts.filter(x => x !== o) : [...S.opts, o]; b.classList.toggle('on'); S.plan = null; save(); buildShell(); updateNav('settings'); });
  $('#stheme').addEventListener('click', e => { const b = e.target.closest('[data-v]'); if (!b) return; S.theme = b.dataset.v; $$('#stheme button').forEach(x => x.classList.toggle('on', x === b)); save(); applyLook(); });
  $('#sfs').addEventListener('input', e => { S.fs = +e.target.value; $('#fsl').textContent = Math.round(S.fs * 100) + '%'; save(); applyLook(); });
  $('#ssp').addEventListener('change', e => { S.spacious = e.target.checked; save(); applyLook(); });
  $('#srm').addEventListener('change', e => { S.reduce = e.target.checked; save(); applyLook(); });
  if (hasTTS) {
    $('#svoice').addEventListener('change', e => { S.voice = e.target.value; save(); TTS.voice = bestVoice(); });
    $('#srate').addEventListener('input', e => { S.rate = +e.target.value; $('#srl').textContent = S.rate + '×'; save(); });
    $('#stest').addEventListener('click', () => { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(`Hi ${S.name || 'there'}! This is how your psychology notes will sound. The dopamine hypothesis says schizophrenia is linked to too much dopamine activity.`); const v = bestVoice(); if (v) { u.voice = v; u.lang = v.lang; } u.rate = S.rate; speechSynthesis.speak(u); });
  }
  $('#sback').addEventListener('click', () => download(`psychology-backup-${dkey()}.json`, JSON.stringify({ app: 'domi-psychology', kind: 'backup', at: Date.now(), state: S }, null, 2), 'application/json'));
  $('#srest').addEventListener('change', e => importFile(e.target.files[0], 'backup'));
  $('#sreset').addEventListener('click', () => { if (!confirm('Reset EVERYTHING – notes, progress and scores? Download a backup first if you might want them.')) return; if (!confirm('Are you completely sure? This can’t be undone.')) return; S = structuredClone(DEF); applyYear(); save(true); applyLook(); buildShell(); location.hash = '#/'; onboard(); });
}
function morePage() {
  const L = [['exam', '🏆', 'Exam guide', Y.L.moreExam], ['debates', '⚖️', 'Issues, debates & methods', 'Your evaluation toolkit'], ['studies', '⭐', Y.L.ks, Y.L.ksAll], ['plan', '🗓️', 'Revision planner', 'A day-by-day plan to your exam'], ['search', '🔎', 'Search', 'Find anything fast'], ['settings', '⚙️', 'Settings', 'Year, theme, voice, backup']];
  render({ title: 'More', html: `<span class="eyebrow">☰ More</span><h1>More tools</h1><div class="grid">${L.map(([h, e, t, d]) => `<a class="opt-card" style="--c:#6d4aff" href="#/${h}"><span class="em">${e}</span><span><h4>${t}</h4><p>${d}</p></span></a>`).join('')}</div>` });
}
function notFound() { render({ title: 'Not found', back: '', html: `<div class="empty"><span class="e">🧭</span><h2>Page not found</h2><p>That link doesn’t go anywhere.</p><a class="btn pri" href="#/">Go home</a></div>` }); }

/* ───────────── onboarding ───────────── */
function onboard() {
  let year = S.onboarded ? S.year : 13;
  const picked = new Set(S.opts);
  const P13 = PACKS[13];
  const m = modal(`<span class="eyebrow" style="color:var(--brand)">👋 Welcome</span><h1 style="margin-top:4px">Hi ${esc(S.name || 'there')}!</h1>
    <p class="muted" style="margin-top:0">This is your psychology companion: simple notes, videos, quizzes, flashcards, exam practice and your own notebook – all in one place. Let’s set it up (takes 10 seconds).</p>
    <b>Which year are you revising?</b>
    <div class="yr-pick" id="oyear">${[12, 13].map(y => `<button type="button" data-y="${y}" class="yr-card y${y} ${year === y ? 'on' : ''}"><span class="n">${y}</span><b>${PACKS[y].L.name}</b><small>${y === 12 ? 'AS Level · Papers 1 & 2 · 12 core studies + research methods' : 'A Level · Papers 3 & 4 · specialist options'}</small></button>`).join('')}</div>
    <p class="small muted" style="margin-top:-4px">You can switch any time with the <b>Y12 / Y13</b> switch – each year keeps its own notes and progress.</p>
    <div id="oopts" class="${year === 13 ? '' : 'hide'}"><b>Which two Year 13 options does your class study?</b>
    <div class="pick" id="opick">${P13.order.map(o => `<button data-o="${o}" class="${picked.has(o) ? 'on' : ''}" style="--c:${P13.options[o].color}"><span class="e">${P13.options[o].emoji}</span><b>${P13.options[o].short}</b><small>${P13.options[o].blurb}</small></button>`).join('')}</div>
    <p class="small muted" style="margin-top:-6px">Not sure? Leave them all unselected and you’ll see all four. You can change this any time in Settings.</p></div>
    <label class="field">📅 <span id="odl">When is your first ${PACKS[year].L.papers} exam?</span> <small class="muted" style="font-weight:400">(optional – for the countdown & planner)</small><input type="date" id="odate" value="${S.examDate}" min="${dkey()}"></label>
    <label class="field">🙂 Your name<input type="text" id="oname" value="${esc(S.name)}" maxlength="24"></label>
    <button class="btn pri block" id="ogo" style="margin-top:6px">Let’s go 🚀</button>`);
  $('#oyear', m.el).addEventListener('click', e => {
    const b = e.target.closest('[data-y]'); if (!b) return; year = +b.dataset.y;
    $$('#oyear .yr-card', m.el).forEach(x => x.classList.toggle('on', x === b));
    $('#oopts', m.el).classList.toggle('hide', year !== 13);
    $('#odl', m.el).textContent = `When is your first ${PACKS[year].L.papers} exam?`;
  });
  $('#opick', m.el).addEventListener('click', e => { const b = e.target.closest('[data-o]'); if (!b) return; picked.has(b.dataset.o) ? picked.delete(b.dataset.o) : picked.add(b.dataset.o); b.classList.toggle('on'); });
  $('#ogo', m.el).addEventListener('click', () => {
    const date = $('#odate', m.el).value;
    switchYear(year);
    if (year === 13) S.opts = P13.order.filter(o => picked.has(o));
    S.examDate = date; S.name = $('#oname', m.el).value.trim() || 'Domi'; S.onboarded = true; S.news = 1; S.plan = null; save(true);
    m.close(); buildShell(); route(); toast('✨ All set – enjoy!');
  });
}
// one-time announcement for people who set up the site before Year 12 existed
function whatsNew() {
  S.news = 1; save(true);
  const m = modal(`<span class="eyebrow" style="color:var(--brand)">✨ New</span><h1 style="margin-top:4px">Year 12 is here!</h1>
    <p class="muted" style="margin-top:0">You can now revise <b>both</b> years. Year 12 has all <b>12 AS core studies</b>, the full <b>research methods</b> unit for Paper 2, and Paper 1 & 2 exam practice.</p>
    <div class="yr-pick">${[12, 13].map(y => `<button type="button" data-goyear="${y}" class="yr-card y${y} ${S.year === y ? 'on' : ''}"><span class="n">${y}</span><b>${PACKS[y].L.name}</b><small>${y === 12 ? 'AS · Papers 1 & 2' : 'A Level · Papers 3 & 4'}</small></button>`).join('')}</div>
    <p class="small muted">Switch any time with the <b>Y12 / Y13</b> switch at the top. Each year keeps its <b>own</b> notes, progress, quiz scores, flashcards and plan – nothing you’ve done so far is lost.</p>
    <button class="btn pri block" data-close>Got it 👍</button>`);
  $$('[data-goyear]', m.el).forEach(b => b.addEventListener('click', () => { m.close(); doYearSwitch(b.dataset.goyear); }));
}

/* ───────────── global actions ───────────── */
document.addEventListener('click', e => {
  const a = e.target.closest('[data-act]'); if (!a) return;
  const act = a.dataset.act;
  if (act === 'listen') ttsStart($('#view .page'), $('#topTitle').textContent);
  if (act === 'listen-note') { const prev = $('#nmd'); prev.innerHTML = md($('#nbody').value); const wasHidden = prev.classList.contains('hide'); if (wasHidden) { prev.classList.remove('hide'); $('#nbody').classList.add('hide'); $('#nprev').textContent = '✏️ Edit'; } ttsStart(prev, $('#ntitle').value || 'Note'); }
  if (act === 'print') { ttsStop(); print(); }
});
addEventListener('keydown', e => {
  if (e.key === '/' && !e.target.closest('input, textarea, select, [contenteditable]')) { e.preventDefault(); location.hash = '#/search'; }
});

/* ───────────── router ───────────── */
let curNote = null;
const routes = [
  [/^$/, home], [/^learn$/, learn], [/^o\/(\w+)$/, optionPage], [/^s\/(\w+)$/, subPage], [/^k\/(\w+)$/, studyPage], [/^studies$/, studiesPage],
  [/^practice$/, practice], [/^quiz\/([\w-]+)$/, quizPage], [/^flash$/, flashHub], [/^flash\/([\w:-]+)$/, flashSession], [/^examq$/, examqHub], [/^examq\/(\w+)$/, examqPage],
  [/^notes$/, notesPage], [/^note\/([\w-]+)$/, noteEdit], [/^exam$/, examGuide], [/^debates$/, debatesPage], [/^plan$/, planPage], [/^search$/, searchPage], [/^settings$/, settingsPage], [/^more$/, morePage]
];
function route() {
  const h = decodeURI(location.hash.replace(/^#\/?/, ''));
  const [path, q] = h.split('?'); const qs = new URLSearchParams(q || '');
  ttsStop();
  $$('.scrim').forEach(s => s.remove());
  const noteId = path.startsWith('note/') ? path.slice(5) : null;
  if (curNote && curNote !== noteId) cleanupEmptyNotes(noteId);
  curNote = noteId;
  for (const [re, fn] of routes) { const m = path.match(re); if (m) { fn(...m.slice(1), qs); updateNav(path); return; } }
  notFound(); updateNav(path);
}
addEventListener('hashchange', () => { sessionStorage.setItem('navd', '1'); route(); });

/* ───────────── boot ───────────── */
applyLook(); buildShell(); route();
matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', applyLook);
if (!S.onboarded) setTimeout(onboard, 250); else if ((S.news || 0) < 1) setTimeout(whatsNew, 700);
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  const hadSW = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.register('sw.js').catch(() => {});
  // a new version took over in the background: offer a one-tap refresh
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!hadSW || $('.update-bar')) return;
    const b = document.createElement('div'); b.className = 'update-bar no-print';
    b.innerHTML = '<span>✨ A new version is ready</span><button class="btn sm pri">Refresh</button>';
    b.querySelector('button').addEventListener('click', () => { save(true); location.reload(); });
    document.body.appendChild(b);
  });
}
})();

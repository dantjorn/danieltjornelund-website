// ── Question data ─────────────────────────────────────────
const QUESTIONS = [
  { id:'q1', module:'Company Context', text:"How would you describe your company's current business model challenge?", options:[
    {l:'A', t:'The model works well — we primarily need to execute it more efficiently and at greater scale.'},
    {l:'B', t:'We have proven product-market fit and need to build the systems to support rapid growth.'},
    {l:'C', t:'Our core is healthy, but we need to build new growth engines — adjacent markets, new products, new revenue models.'},
    {l:'D', t:'We need to fundamentally redesign significant elements of how the business operates — the model itself must change.'},
  ]},
  { id:'q2', module:'Company Context', text:"How old is your company, and what is your approximate annual revenue?", options:[
    {l:'A', t:'Early stage — under 3 years old or under $3M revenue.'},
    {l:'B', t:'Growth stage — 3–7 years old, $3M–$15M revenue.'},
    {l:'C', t:'Scale-up stage — 7–12 years old, $15M–$50M revenue.'},
    {l:'D', t:'Mature scale-up — over 10 years old or over $50M revenue.'},
  ]},
  { id:'q3', module:'Company Context', text:"Which best describes your current capital situation?", options:[
    {l:'A', t:'Bootstrapped — growing entirely from internal cash flow.'},
    {l:'B', t:'Lightly funded — one or two small rounds, still primarily self-sustaining.'},
    {l:'C', t:'VC-backed — raised significant external capital, currently investing for growth.'},
    {l:'D', t:'PE-backed or late-stage — institutional capital with significant governance involvement.'},
  ]},
  { id:'q4', module:'Organizational Debt', text:"When a decision needs to be made in your organization, what typically happens?", options:[
    {l:'A', t:'Decisions move quickly through clear channels — people know who owns what.'},
    {l:'B', t:'Most decisions work, but important ones tend to escalate to senior leadership more than they should.'},
    {l:'C', t:"Decision-making is slow and unclear. People are unsure who has authority over what."},
    {l:'D', t:"Almost everything flows back to the CEO or founders. We can't scale a decision without it reaching the top."},
  ]},
  { id:'q5', module:'Organizational Debt', text:"How would you describe the state of your core operational processes?", options:[
    {l:'A', t:'Documented, standardized, and improving. New people ramp quickly using established methods.'},
    {l:'B', t:'Partially documented. Key processes work but depend on specific people who know how things are done.'},
    {l:'C', t:'Largely informal. We rely heavily on experience and workarounds. Quality varies by person.'},
    {l:'D', t:'Almost entirely improvised. The same task done by different people produces very different outcomes.'},
  ]},
  { id:'q6', module:'Organizational Debt', text:"What does your customer retention data tell you?", options:[
    {l:'A', t:'Retention is strong and improving. NRR is above 100%. Customers expand their relationship with us.'},
    {l:'B', t:"Retention is acceptable but we're not fully confident in the trend. We watch it carefully."},
    {l:'C', t:"We know retention is a problem. Churn is higher than we'd like and we're working to fix it."},
    {l:'D', t:'Retention is a serious vulnerability. We depend heavily on new logo acquisition to offset churn.'},
  ]},
  { id:'q7', module:'Organizational Debt', text:"How aligned is your board or investor group with where the company is heading?", options:[
    {l:'A', t:'Strongly aligned. Everyone around the table understands the transformation and supports the investment required.'},
    {l:'B', t:'Mostly aligned, with some differences in risk appetite or time horizon that we manage.'},
    {l:'C', t:"There is meaningful misalignment. Different board members have different visions for the company's future."},
    {l:'D', t:'The board is a source of significant friction. Governance decisions are slowing the transformation.'},
  ]},
  { id:'q8', module:'Organizational Debt', text:"How does your leadership team make strategic decisions — and where does the data come from?", options:[
    {l:'A', t:'We have reliable data across all key functions. Decisions are grounded in evidence.'},
    {l:'B', t:'We have reasonable visibility into the numbers that matter most, though some blind spots exist.'},
    {l:'C', t:'We have good financial data but weak operational and customer data. We manage significant blind spots.'},
    {l:'D', t:"Most strategic decisions are made on instinct. We don't have the data infrastructure to do otherwise."},
  ]},
  { id:'q9', module:'Transformation Capacity', text:"How many significant organizational change initiatives are running simultaneously right now?", options:[
    {l:'A', t:'One — we are focused and disciplined about not overloading the organization.'},
    {l:'B', t:'Two or three — manageable but we feel the load.'},
    {l:'C', t:'Four or more — we are running in multiple directions and execution quality is suffering.'},
    {l:'D', t:'Almost everything is changing at once. We are attempting to transform every dimension of the business simultaneously.'},
  ]},
  { id:'q10', module:'Transformation Capacity', text:"How would you describe the energy and bandwidth of your executive team right now?", options:[
    {l:'A', t:'High. Executives are operating well within their capacity and have bandwidth to lead new initiatives.'},
    {l:'B', t:'Stretched but functional. People are working hard but holding up.'},
    {l:'C', t:'Overloaded. Several executives are carrying more than they can sustainably manage.'},
    {l:'D', t:'We have a burnout problem. Key people are exhausted and some are near or past breaking point.'},
  ]},
  { id:'q11', module:'Transformation Capacity', text:"When you introduce a major change — new processes, new priorities, new structures — how does the organization typically respond?", options:[
    {l:'A', t:'Adaptation is relatively smooth. People understand the reasons and adjust without significant friction.'},
    {l:'B', t:"There is resistance, but it's manageable. Change takes longer than we'd like but happens."},
    {l:'C', t:'Change meets significant cultural resistance. The organization reverts to old ways without sustained pressure.'},
    {l:'D', t:'Almost every change initiative faces serious organizational push-back. Culture is actively fighting transformation.'},
  ]},
  { id:'q12', module:'Transformation Capacity', text:"If you had to raise external capital or attract a strategic partner today, how ready is the company?", options:[
    {l:'A', t:'Ready. Our financial infrastructure, governance, and strategic narrative are all investor-grade.'},
    {l:'B', t:'Mostly ready. Some gaps remain but we could move forward with 3–6 months of preparation.'},
    {l:'C', t:'Not ready. We have significant structural prerequisites to address before institutional engagement is realistic.'},
    {l:'D', t:'Very far from ready. We lack the financial infrastructure, governance, and narrative required for external scrutiny.'},
  ]},
  { id:'q13', module:'Performance Lens', text:"When your board asks 'how is the company doing?' — which lens dominates the conversation?", options:[
    {l:'A', t:'Primarily financial: revenue, EBITDA, margins, and cash flow.'},
    {l:'B', t:'A mix of financial and operational metrics, but financial results drive the conversation.'},
    {l:'C', t:'We use leading indicators — retention, CAC/LTV, revenue per employee, product adoption — alongside financials.'},
    {l:'D', t:'We explicitly use three lenses: financial (lagging), semi-financial (leading), and strategic (future optionality).'},
  ]},
  { id:'q14', module:'Performance Lens', text:"Which statement best describes the relationship between your financial performance and your strategic health?", options:[
    {l:'A', t:'They are aligned. Strong financials reflect strong underlying fundamentals.'},
    {l:'B', t:'Mostly aligned, though I suspect the financials are slightly more optimistic than the underlying reality.'},
    {l:'C', t:'There is a gap. Our financials look healthier than our strategic position actually is.'},
    {l:'D', t:'The financials are masking serious strategic deterioration. We are harvesting the present at the expense of the future.'},
  ]},
  { id:'q15', module:'Performance Lens', text:"What is the single most important thing your company needs to do in the next 12 months?", options:[
    {l:'A', t:'Execute the existing model better — improve efficiency, conversion, and unit economics.'},
    {l:'B', t:'Build the systems and team to support the growth we already have.'},
    {l:'C', t:'Launch the next growth engine while protecting the core.'},
    {l:'D', t:'Fundamentally change how the business works — the model itself, not just the execution.'},
  ]},
];

// ── Category weight table: question -> answer -> [[category, points], ...] ──
const CAT_WEIGHTS = {
  q1:  { A:[[1,3]], B:[[2,3]], C:[[3,3]], D:[[4,3],[5,3]] },
  q4:  { A:[[1,1],[2,1]], B:[[2,1],[3,1]], C:[[4,2]], D:[[4,2],[5,2]] },
  q5:  { A:[[1,1]], B:[[2,2]], C:[[3,2],[4,2]], D:[[4,2],[5,2]] },
  q6:  { A:[[1,1],[2,1]], B:[[2,1]], C:[[3,2],[4,2]], D:[[4,2],[5,2]] },
  q7:  { A:[[1,1],[2,1]], B:[[2,1],[3,1]], C:[[4,2]], D:[[4,3],[5,3]] },
  q8:  { A:[[1,1]], B:[[2,1]], C:[[3,2],[4,2]], D:[[4,2],[5,2]] },
  q9:  { A:[[1,1],[2,1]], B:[[2,1],[3,1]], C:[[4,2]], D:[[4,3],[5,3]] },
  q10: { A:[[1,1],[2,1]], B:[[2,1],[3,1]], C:[[4,2]], D:[[4,3],[5,3]] },
  q11: { A:[[1,1],[2,1]], B:[[2,1],[3,1]], C:[[4,2]], D:[[4,2],[5,2]] },
  q12: { A:[[1,1],[2,1]], B:[[2,1],[3,1]], C:[[3,2],[4,2]], D:[[4,2],[5,2]] },
  q13: { A:[[1,1]], B:[[1,1],[2,1]], C:[[3,2],[4,2]], D:[[4,2]] },
  q14: { A:[[1,1]], B:[[1,1],[2,1]], C:[[3,2],[4,2]], D:[[4,3],[5,3]] },
  q15: { A:[[1,2]], B:[[2,2]], C:[[3,2]], D:[[4,2],[5,2]] },
};
const DEBT_Q = { q4:'Management', q5:'Process', q6:'Customer', q7:'Governance', q8:'Data', q14:'Strategic' };
const SEV = { A:0, B:0, C:1, D:2 };
const CAPVAL = { A:0, B:1, C:2, D:3 };

const DEBT_DESC = {
  Management: "Authority blurs; spans of control widen; leaders govern more than they can see. Decisions slow, accountability diffuses.",
  Process: "Informal workarounds multiply; activities depend on people, not repeatable systems. Quality degrades as volume grows.",
  Customer: "Promises outpace delivery; onboarding and retention fall behind sales velocity. Churn rises after initial growth.",
  Governance: "Decision rights lag complexity; board and executives act as if the company were smaller than it is. Strategic drift, founder bottlenecks.",
  Data: "Reporting lags operational complexity; leaders manage by instinct rather than evidence. Blind spots multiply, surprises increase.",
  Strategic: "Short-term execution crowds out investment in future competitive position. Differentiation erodes, competitors close the gap.",
};

const PROFILES = {
  1: {
    tag: "Category 1 · Optimization",
    headline: "Your model is working. The challenge is executing it with more precision.",
    body: "You have achieved something many companies never do: a business model that works. The challenge you face is not reinvention — it is the discipline to make what works, work better. Complacency is your primary risk. The financial lens is your dominant measurement tool at this stage, but watch the semi-financial indicators carefully: they will reveal when this stage is ending before the P&L does.",
    defaultDebt: "Process",
    debtNote: "Process Debt is most common at this stage — informal workarounds that worked when the company was smaller begin to constrain quality as volume grows.",
    risk: "Complacency. Optimization companies often underinvest in future capacity because today's results are strong. By the time the financial indicators show deterioration, the window for preparation has narrowed.",
    questions: [
      "Which of our core processes still depend on specific people rather than repeatable systems?",
      "Are our semi-financial indicators (retention, CAC/LTV, revenue per employee) improving or stagnating?",
      "What would break first if we doubled our customer volume?",
      "Are we investing enough in the next growth engine, or only in the current one?",
    ],
    book: "Chapters 1–3 of Scale-Up Nation address the transition from optimization to scaling.",
  },
  2: {
    tag: "Category 2 · Scaling",
    headline: "You have product-market fit. Now you need to build the machine that delivers it at scale.",
    body: "You have the hardest part behind you: proof that the model works. What you are now discovering is that the organizational model that achieved PMF is not the same organizational model required to scale it. The systems, management layers, and processes that were optional during the sprint to PMF are now mandatory infrastructure.",
    defaultDebt: "Management",
    debtNote: "Management Debt is most common at this stage — decision-making remains too centralized, spans of control are widening faster than management layers can be built, and accountability is diffusing as the team grows.",
    risk: "Infrastructure failure. Growth outpaces the organizational capacity to sustain it, creating a compounding cycle: customers are acquired faster than they can be onboarded, processes break under volume, and the CEO becomes the bottleneck for an increasing share of decisions.",
    questions: [
      "Can our organization make the right decisions without my involvement?",
      "Which functions are still running on improvisation that will break at twice the current volume?",
      "Do we have the management layer between the executive team and the front line that translation of strategy requires?",
      "What is our retention rate — and what does it predict about our growth treadmill?",
    ],
    book: "Chapters 2, 6, and 7 of Scale-Up Nation address the institutionalization of management and the completion of the value chain.",
  },
  3: {
    tag: "Category 3 · Evolution",
    headline: "Your core is healthy, but it cannot take you where you need to go.",
    body: "You are in a position of relative strength — but you can see the horizon approaching. The current model is working, but its serviceable addressable market is either saturating or its competitive position is eroding. You need new growth engines without disrupting the core that is funding the investment in them. This is the most psychologically difficult stage: everything is fine until suddenly it isn't.",
    defaultDebt: "Strategic",
    debtNote: "Strategic Debt is most common at this stage — the urgency of today's execution crowds out investment in tomorrow's competitive position. The next growth engine is perpetually deferred because the current one still works.",
    risk: "Organizational resistance. The culture, incentives, and leadership that are optimized for the existing model will actively resist the new direction — not out of bad faith, but because the new direction asks them to cannibalize what made them successful.",
    questions: [
      "What does our SAM exhaustion curve look like — when does the current model stop growing?",
      "Are we investing in the next growth engine before we need it, or after?",
      "Who owns the new direction, and do they have enough organizational authority to protect it from the core business?",
      "What would we stop doing if we could start fresh?",
    ],
    book: "Chapters 4, 11, and 12 of Scale-Up Nation address market maturity, the Three Lenses, and the transition to product-led growth.",
  },
  4: {
    tag: "Category 4 · Transformation",
    headline: "You are attempting to redesign the machine while flying it. This is the hardest thing a scale-up does.",
    body: "A Level 4 Transformation is not a growth challenge. It is an organizational redesign challenge. You are attempting simultaneous shifts across multiple dimensions — and each additional change front multiplies the risk that the organization runs out of capacity before the new model becomes self-sustaining. This is the category where most transformations fail — not because the strategy was wrong, but because alignment collapses first.",
    isMultiDebt: true,
    risk: "Alignment collapse — Transformation Risk. Stakeholders lose conviction at different speeds. Investors see risk. Founders see progress. Boards see neither clearly. Capital tightens. Executive energy diverts to internal conflict. The transformation stalls before the new model becomes self-sustaining.",
    questions: [
      "Do I have a single, clear answer to: 'Does every investment we are making increase our transformation capacity?'",
      "Which of our six debt categories is closest to its compounding threshold?",
      "Does my board understand what we are building — or are they evaluating the future company through the lens of the company we used to be?",
      "Am I measuring transformation progress through semi-financial and strategic indicators, or only through the P&L?",
    ],
    book: "Scale-Up Nation is the story of a Level 4 Transformation. Chapters 9–19 address capital, governance, executive leadership, and the graduation from transformation to firm.",
  },
  5: {
    tag: "Category 5 · Reinvention",
    headline: "The existing model can no longer support the future. You must rebuild while continuing to operate.",
    body: "This is the most demanding transformation category. You are not optimizing, scaling, or evolving — you are attempting to build a fundamentally different business while the current one continues to fund the effort. The primary risk is not strategic: it is organizational. Can the stakeholders maintain enough alignment and conviction for long enough to reach the other side?",
    isExistential: true,
    risk: "Collapse before renewal. The organization runs out of transformation capacity before the new model takes hold. This can happen through financial exhaustion, governance failure, leadership burnout, or the simple loss of collective conviction that the journey is worth completing.",
    questions: [
      "Does everyone in the governance structure understand that we are in a reinvention — not a performance problem?",
      "Do we have enough runway — financial and organizational — to reach the point where the new model can carry itself?",
      "What is the minimum viable version of the new model that could become self-sustaining before the legacy model stops working?",
      "Who is the keeper of conviction during the valley — and is that person protected?",
    ],
    book: "Chapter 19 of Scale-Up Nation addresses transformation risk, the valley of death, and graduation.",
  },
};

const CAPACITY_MODIFIERS = {
  HIGH: "Your organization currently has the capacity to absorb the change this stage requires. Use that capacity deliberately — invest in building the systems and management layers that will sustain capacity as complexity grows. High capacity is not permanent; it is consumed by growth if not actively replenished through institutionalization.",
  MODERATE: "Your organization can sustain one well-managed change front, but scope discipline is critical. Every additional initiative you launch reduces execution quality across all others. Focus before expanding. The most common mistake at this capacity level is launching the next initiative before the previous one has been institutionalized.",
  DEPLETED: "Your organization is at serious risk of stalling. The transformation may be strategically correct — but the organization does not currently have the capacity to execute it. Before adding new initiatives, reduce active change fronts, address the most compounding debt category, and protect the energy of your highest-performing leaders. A correct strategy executed by a depleted organization produces neither.",
};

// ── Render questions ─────────────────────────────────────────
const root = document.getElementById('q-root');
let lastModule = null;
QUESTIONS.forEach(q => {
  let sectionHTML = '';
  if (q.module !== lastModule) {
    lastModule = q.module;
    sectionHTML = `<div class="diag-section-label">${q.module}</div>`;
  }
  const opts = q.options.map(o => `<label><input type="radio" name="${q.id}" value="${o.l}"><span><strong>${o.l}.</strong> ${o.t}</span></label>`).join('');
  root.insertAdjacentHTML('beforeend', `${sectionHTML}<div class="likert-q"><p class="q-text">${q.text}</p><div class="choice-q">${opts}</div></div>`);
});

// ── Scoring ─────────────────────────────────────────
function getVal(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : null;
}

function computeResult() {
  const answers = {};
  for (const q of QUESTIONS) {
    const v = getVal(q.id);
    if (v === null) return null;
    answers[q.id] = v;
  }

  const cat = {1:0,2:0,3:0,4:0,5:0};
  Object.entries(CAT_WEIGHTS).forEach(([q, map]) => {
    (map[answers[q]] || []).forEach(([c, pts]) => cat[c] += pts);
  });

  const debt = { Management:0, Process:0, Customer:0, Governance:0, Data:0, Strategic:0 };
  Object.entries(DEBT_Q).forEach(([q, name]) => { debt[name] += SEV[answers[q]] * 2; });

  const capacitySum = CAPVAL[answers.q9] + CAPVAL[answers.q10] + CAPVAL[answers.q11] + CAPVAL[answers.q12];
  const capacityLevel = capacitySum <= 3 ? 'HIGH' : capacitySum <= 7 ? 'MODERATE' : 'DEPLETED';

  const maxCat = Math.max(...Object.values(cat));
  const topCats = Object.keys(cat).map(Number).filter(k => cat[k] === maxCat);
  let primary = topCats[0];
  let combined45 = false;
  if ((primary === 4 || primary === 5) && Math.abs(cat[4] - cat[5]) <= 2 && (cat[4] > 0 || cat[5] > 0)) {
    combined45 = true;
    primary = cat[4] >= cat[5] ? 4 : 5;
  }

  let debtLabel, debtText;
  if (primary === 4) {
    const maxDebt = Math.max(...Object.values(debt));
    const elevated = Object.entries(debt).filter(([,v]) => v === maxDebt && maxDebt > 0).map(([k]) => k);
    debtLabel = "Multi-Debt";
    debtText = `At this stage, debt accumulates across all six categories simultaneously. Right now, ${elevated.join(', ')} Debt ${elevated.length > 1 ? 'are' : 'is'} most elevated — the question is which category is closest to its compounding threshold, not which single type you have.`;
  } else if (primary === 5) {
    debtLabel = "Existential Debt";
    debtText = "The debt at this stage is not a specific category — it is the accumulated cost of a business model that is no longer sufficient. Every resource spent sustaining the legacy model is a resource not available for the reinvention.";
  } else {
    const maxDebt = Math.max(...Object.values(debt));
    const topDebt = Object.entries(debt).find(([,v]) => v === maxDebt);
    debtLabel = topDebt && maxDebt > 0 ? topDebt[0] : PROFILES[primary].defaultDebt;
    debtText = PROFILES[primary].debtNote;
  }

  return { primary, combined45, capacityLevel, capacitySum, debtLabel, debtText, cat, debt };
}

document.getElementById('diag-submit').addEventListener('click', () => {
  const r = computeResult();
  const panel = document.getElementById('diag-result');
  if (!r) {
    alert('Please answer every question before seeing your diagnosis.');
    return;
  }
  const profile = PROFILES[r.primary];
  const tagText = r.combined45 ? "Category 4/5 · Transformation / Reinvention" : profile.tag;
  document.getElementById('result-tag').textContent = tagText;
  document.getElementById('result-headline').textContent = profile.headline;
  document.getElementById('result-body').textContent = profile.body;
  document.getElementById('result-debt').innerHTML = `<strong>${r.debtLabel} Debt.</strong> ${r.debtText}`;
  document.getElementById('result-risk').textContent = profile.risk;
  const qList = document.getElementById('result-questions');
  qList.innerHTML = profile.questions.map(q => `<li>${q}</li>`).join('');
  document.getElementById('result-book').innerHTML = `<strong>Book reference:</strong> ${profile.book}`;
  document.getElementById('result-capacity').innerHTML = `<strong>${r.capacityLevel} CAPACITY</strong> (${r.capacitySum}/12) — ${CAPACITY_MODIFIERS[r.capacityLevel]}`;
  panel.classList.add('show');
  panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.getElementById('diag-reset').addEventListener('click', () => {
  document.querySelectorAll('#q-root input[type="radio"]').forEach(r => r.checked = false);
  document.getElementById('diag-result').classList.remove('show');
});

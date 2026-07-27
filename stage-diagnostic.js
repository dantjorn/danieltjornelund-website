// ── Question data ─────────────────────────────────────────
const QUESTIONS = [
  { id:'q1', module:'Growth Engine', text:"What best describes the revenue concentration of your current product or service portfolio?", options:[
    {l:'A', t:'One product or service generates more than 80% of our revenue — and it is still growing strongly.'},
    {l:'B', t:'One dominant product generates most revenue, but growth is slowing and we need adjacent offerings.'},
    {l:'C', t:'We have two or three products contributing meaningfully to revenue, and we are building more.'},
    {l:'D', t:'We are actively rebuilding the portfolio — the flagship offering is in structural decline.'},
  ]},
  { id:'q1b', module:'Growth Engine', text:"How much runway remains in your existing Serviceable Addressable Market (SAM)? Estimate your SAM size from known market data and divide by current ARR.", options:[
    {l:'A', t:'More than 10× our current revenue — we have barely scratched the surface.'},
    {l:'B', t:'5–10× our current revenue — significant room remains in the current model.'},
    {l:'C', t:'2–5× our current revenue — the market is maturing and we are approaching saturation.'},
    {l:'D', t:'Less than 2× our current revenue — the current SAM can no longer sustain our growth ambitions.'},
  ]},
  { id:'q2', module:'Growth Engine', text:"What is your Net Revenue Retention (NRR) — the percentage of last year's revenue you retained and expanded from existing customers?", options:[
    {l:'A', t:'Above 110% — existing customers are growing in value faster than we are losing others.'},
    {l:'B', t:'90–110% — broadly flat; retention is stable but expansion is limited.'},
    {l:'C', t:'70–90% — we are losing meaningful revenue from the existing base and relying on new logos to compensate.'},
    {l:'D', t:'Below 70%, or we do not track this metric reliably.'},
  ]},
  { id:'q3', module:'Growth Engine', text:"Where do you expect the majority of your revenue growth to come from in the next 24 months?", options:[
    {l:'A', t:'More of the same: deeper penetration of our existing market with our existing product.'},
    {l:'B', t:'The same product, at much greater scale — new geographies, new sales channels, significantly larger addressable market.'},
    {l:'C', t:'Adjacent growth: new products, new customer segments, or geographic expansion beyond the core.'},
    {l:'D', t:'A fundamentally different model: we need to change how we create, deliver, or capture value — not just add to what we have.'},
  ]},
  { id:'q4', module:'Growth Engine', text:"How does your current operating model compare to what your growth ambitions require?", options:[
    {l:'A', t:'Well matched. The current model can scale to meet our targets with incremental improvements.'},
    {l:'B', t:'Mostly matched, but systems and management layers need significant strengthening to avoid breaking under growth.'},
    {l:'C', t:'Mismatched in one major dimension — e.g. we are a service company that needs to become a product company, or a domestic company going global.'},
    {l:'D', t:'Fundamentally mismatched. Meaningful growth requires redesigning multiple elements of the operating model simultaneously.'},
  ]},
  { id:'q5', module:'Transformation Load', text:"Which of the following best represents how many dimensions of your business are actively changing right now? (Dimensions include: new product, new customer segment, new geography, new pricing model, new operating model, management professionalization, organizational redesign, capital raise, M&A integration, technology platform change.)", options:[
    {l:'A', t:'One or two dimensions are changing — the rest of the business is stable.'},
    {l:'B', t:'Three or four dimensions are in active transition. The organization feels the load but is managing.'},
    {l:'C', t:'Five or more dimensions are changing simultaneously. Execution quality is visibly suffering.'},
    {l:'D', t:'Almost every dimension is in motion at once: product, go-to-market, operating model, management, capital structure, and culture.'},
  ]},
  { id:'q6', module:'Transformation Load', text:"How many significant strategic initiatives did your executive team launch in the past 12 months?", options:[
    {l:'A', t:'One or two — we are disciplined about focus.'},
    {l:'B', t:'Three to five — we are busy but each initiative has clear ownership.'},
    {l:'C', t:'Six or more — the agenda is crowded and some initiatives are stalling.'},
    {l:'D', t:'We have lost count. Everything is a priority, which means nothing is.'},
  ]},
  { id:'q7', module:'Transformation Load', text:"Is your company currently running a legacy business and a new growth engine simultaneously?", options:[
    {l:'A', t:'No — we have one business and one operating model.'},
    {l:'B', t:'Partially — we are beginning to build something new alongside the core, but it is early.'},
    {l:'C', t:'Yes — we are running two meaningfully different businesses with different economics, metrics, and cultures.'},
    {l:'D', t:'Yes, and the two are in active tension — the legacy model is consuming resources the new engine urgently needs.'},
  ]},
  { id:'q8', module:'Organizational Debt', text:"When a decision needs to be made, what typically happens?", options:[
    {l:'A', t:'Decisions move quickly through clear channels. People know who owns what.'},
    {l:'B', t:'Most decisions work, but important ones escalate to senior leadership more than they should.'},
    {l:'C', t:'Decision-making is slow and opaque. Authority is unclear across functions.'},
    {l:'D', t:'Almost everything flows back to the CEO or founders. No decision scales without reaching the top.'},
  ]},
  { id:'q9', module:'Organizational Debt', text:"What do your customer retention metrics look like — specifically logo retention and NRR?", options:[
    {l:'A', t:'Logo retention above 85% and NRR above 100%. The customer base is growing in value.'},
    {l:'B', t:'Logo retention 70–85% and NRR roughly flat. Retention is stable but not compounding.'},
    {l:'C', t:'Logo retention below 70%. We rely significantly on new logos to offset churn.'},
    {l:'D', t:'We do not track these metrics reliably, or the numbers are materially worse than above.'},
  ]},
  { id:'q10', module:'Organizational Debt', text:"How aligned is your board or investor group with the transformation the company needs to execute?", options:[
    {l:'A', t:'Fully aligned — the board understands the transformation, the investment required, and the timeline.'},
    {l:'B', t:'Mostly aligned, with manageable differences in risk appetite or time horizon.'},
    {l:'C', t:'Meaningfully misaligned — different board members have different views of where the company should go.'},
    {l:'D', t:'The board is a source of active friction. Governance is slowing or complicating the transformation.'},
  ]},
  { id:'q11', module:'Transformation Capacity', text:"How would you describe the current state of your executive team's bandwidth?", options:[
    {l:'A', t:'High. Executives are operating well within capacity and have bandwidth for new initiatives.'},
    {l:'B', t:'Stretched but functional. The team is working hard and holding together.'},
    {l:'C', t:'Overloaded. Several executives are carrying more than they can sustainably manage.'},
    {l:'D', t:'We have a burnout problem. Key people are exhausted, and some are at or near a breaking point.'},
  ]},
  { id:'q12', module:'Transformation Capacity', text:"When your organization faces a major change — new priorities, new structures, new processes — what typically happens?", options:[
    {l:'A', t:'Adaptation is smooth. People understand the reasons and adjust without significant friction.'},
    {l:'B', t:'There is resistance, but it is manageable. Change takes longer than we would like but happens.'},
    {l:'C', t:'The organization actively reverts to old ways without sustained pressure from leadership.'},
    {l:'D', t:'Cultural resistance is severe. Almost every change initiative faces serious pushback and many fail to stick.'},
  ]},
  { id:'q13', module:'Transformation Capacity', text:"What is your approximate monthly cash runway, and how dependent is the transformation on external capital?", options:[
    {l:'A', t:'12+ months of runway. The transformation is fundable from internal cash flow.'},
    {l:'B', t:'6–12 months. We need to raise capital within the next 12 months but have a credible path.'},
    {l:'C', t:'3–6 months. We are in active fundraising and the transformation depends on closing a round.'},
    {l:'D', t:'Less than 3 months, or the transformation cannot proceed without capital we do not yet have committed.'},
  ]},
  { id:'q14', module:'Transformation Capacity', text:"Which best describes how your company measures whether the transformation is working?", options:[
    {l:'A', t:'We track financial indicators (revenue, EBITDA, margins) and semi-financial indicators (NRR, CAC/LTV, retention, revenue per employee) together.'},
    {l:'B', t:'We primarily track financial results, but we have started adding operational metrics.'},
    {l:'C', t:'We track financial results only. Strategy conversations default to the P&L.'},
    {l:'D', t:'We do not have a systematic measurement framework. Key decisions rely on judgment and experience.'},
  ]},
];

// ── Render ─────────────────────────────────────────
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

const SEV = { A:0, B:1, C:2, D:3 };
const GH_POINTS = {
  q1:  { A:25, B:18, C:12, D:5 },
  q1b: { A:25, B:20, C:10, D:3 },
  q2:  { A:25, B:18, C:8,  D:3 },
  q3:  { A:25, B:20, C:12, D:5 },
};

const STAGE_PROFILES = {
  1: {
    tag: "Stage 1 · Optimization", color: "#1B5E20",
    headline: "Your business model works. The challenge is executing it with more precision and at greater scale.",
    body: "You have achieved something many companies never do: a model that is proven, a market that has room, and economics that work. The transformation required here is operational, not existential. Complacency is your primary risk — Optimization companies often underinvest in future capacity precisely because today's results are strong. The financial lens is your dominant measurement tool, but watch the semi-financial indicators carefully: they will reveal when this stage is ending before the P&L does.",
    questions: [
      "Which of our core processes still depend on specific people rather than repeatable systems?",
      "Are our semi-financial indicators (NRR, CAC/LTV, revenue per employee) improving or stagnating?",
      "What would break first if we doubled our customer volume without adding headcount?",
    ],
  },
  2: {
    tag: "Stage 2 · Scaling", color: "#2E5C8A",
    headline: "You have proven the model. Now you need to build the machine that delivers it at scale.",
    body: "You have the hardest part behind you: evidence that the model works, and a market large enough to sustain significant growth. What you are discovering is that the organization which achieved product-market fit is not the same organization required to scale it. Systems, management layers, and processes that were optional during the sprint to PMF are now mandatory infrastructure. The most expensive mistake at this stage is adding headcount before defining the work those people will do.",
    questions: [
      "Can the organization make the right decisions without my direct involvement?",
      "What is our logo retention rate — and what does it predict about our acquisition treadmill?",
      "Do we have the management layer that can translate strategy into execution without the CEO in every room?",
    ],
  },
  3: {
    tag: "Stage 3 · Evolution", color: "#7A4100",
    headline: "Your core is healthy, but it cannot take you where you need to go.",
    body: "You are in a position of relative strength — but the horizon is approaching. The current model is working, and its economics are sound, but its serviceable addressable market is maturing. You need new growth engines alongside the core: adjacent products, new customer segments, or geographic expansion. This is the most psychologically difficult stage because everything is fine — until suddenly it isn't. The clock is running, and it is not visible in the P&L.",
    questions: [
      "When does our current SAM reach natural saturation — and what is the plan for before that happens?",
      "Who owns the next growth engine, and do they have enough organizational protection to build it without being consumed by the core?",
      "Are we investing in the next engine before we need it, or are we waiting until we have to?",
    ],
  },
  4: {
    tag: "Stage 4 · Transformation", color: "#7B1F1F",
    headline: "You are redesigning the machine while flying it. This is the hardest thing a scale-up does.",
    body: "A Level 4 Transformation is not a growth challenge. It is an organizational redesign challenge under time pressure. You are executing simultaneous shifts across multiple dimensions — and each additional change front multiplies the risk that the organization runs out of capacity before the new model becomes self-sustaining. Most transformations fail not because the strategy was wrong, but because stakeholder alignment collapses first. Transformation risk — the risk that investors, board members, executives, and employees lose conviction before the new model can carry itself — is your dominant management challenge.",
    questions: [
      "Does every investment we are making increase our transformation capacity — or are we spending on things that feel strategic but do not compound?",
      "Does my board understand what we are building — or are they evaluating the future company through the lens of the company we used to be?",
      "Which of our active change fronts could we pause without losing strategic position — and what would that give back in organizational capacity?",
    ],
  },
  5: {
    tag: "Stage 5 · Reinvention", color: "#4A0E0E",
    headline: "The existing model can no longer support the future. Stabilization before transformation.",
    body: "You are not in a growth challenge. You are in a survival challenge. The existing business model is structurally insufficient, and the priority is creating the financial and organizational stability required to build something new. Reinvention is the rarest and most demanding transformation category — and it is frequently misdiagnosed as a Stage 4 Transformation. The difference is urgency: in Stage 5, the legacy model cannot fund the new one for long enough to complete the transition without intervention.",
    questions: [
      "Do we have enough runway — financial and organizational — to reach the point where the new model can carry itself?",
      "What is the minimum viable version of the new model that could become self-sustaining before the legacy stops working?",
      "Is everyone in the governance structure clear that this is a reinvention — not a performance problem that better execution will solve?",
    ],
  },
};

function scoreClass(val, thresholds) {
  if (val >= thresholds[0]) return 'good';
  if (val >= thresholds[1]) return 'warn';
  return 'bad';
}

function computeResult() {
  const a = {};
  for (const q of QUESTIONS) {
    const v = getVal(q.id);
    if (v === null) return null;
    a[q.id] = v;
  }

  // ── Stage (hierarchical) ──
  let stage = { A:1, B:2, C:3, D:4 }[a.q3];
  const originalQ3Stage = stage;
  if ((a.q4 === 'C' || a.q4 === 'D') && (stage === 2 || stage === 3)) stage += 1;
  if (a.q1b === 'D' && stage < 4) stage += 1;
  if (a.q7 === 'C' || a.q7 === 'D') stage = Math.max(stage, 4);
  if (originalQ3Stage === 2 && (a.q2 === 'C' || a.q2 === 'D')) stage = Math.max(stage, 3);
  if (a.q3 === 'D' && a.q4 === 'D' && a.q1b === 'D' && a.q1 === 'D') stage = 5;

  // ── Growth Health (0-100) ──
  const growthHealth = GH_POINTS.q1[a.q1] + GH_POINTS.q1b[a.q1b] + GH_POINTS.q2[a.q2] + GH_POINTS.q3[a.q3];
  const ghBand = growthHealth >= 80 ? 'Strong' : growthHealth >= 55 ? 'Moderate' : growthHealth >= 30 ? 'Weakening' : 'Critical';

  // ── Transformation Load (0-9) ──
  const load = SEV[a.q5] + SEV[a.q6] + SEV[a.q7];
  const loadBand = load <= 2 ? 'Low' : load <= 4 ? 'Moderate' : load <= 7 ? 'High' : 'Critical';

  // ── Capacity (0-21) ──
  const capacitySum = SEV[a.q8] + SEV[a.q9] + SEV[a.q10] + SEV[a.q11] + SEV[a.q12] + SEV[a.q13] + SEV[a.q14];
  const capBand = capacitySum <= 5 ? 'High' : capacitySum <= 11 ? 'Moderate' : capacitySum <= 17 ? 'Depleted' : 'Critical';

  // ── Dominant debt (highest, or within 1 point = co-elevated) ──
  const debt = { Management: SEV[a.q8], Customer: SEV[a.q9], Governance: SEV[a.q10] };
  const maxDebt = Math.max(...Object.values(debt));
  const elevated = Object.entries(debt).filter(([,v]) => v >= maxDebt - 1 && maxDebt > 0).map(([k]) => k);
  const dominantDebt = elevated.length ? elevated.join(' + ') + ' Debt' : 'None significant';

  // ── Primary constraint lookup ──
  let constraint;
  if (stage <= 2 && growthHealth >= 80) {
    constraint = "The current engine is healthy and has runway. The primary constraint is building the management infrastructure to sustain growth before complexity outpaces the organization.";
  } else if (stage === 2 && elevated.includes('Management')) {
    constraint = "Growth is proven but systems are lagging. Decision-making is becoming a bottleneck. Investing in management layers and process infrastructure now will prevent a painful catch-up later.";
  } else if (stage === 2 && elevated.includes('Customer')) {
    constraint = "Your acquisition is working but retention is not compounding. The growth treadmill is accelerating. Fixing retention economics before scaling acquisition is the single highest-leverage investment available.";
  } else if (stage === 3) {
    constraint = "The core is healthy but the clock is running. The existing SAM is approaching its natural ceiling. The primary constraint is building the next growth engine before the core begins to decline.";
  } else if (stage === 4 && growthHealth < 55) {
    constraint = "The legacy engine is weakening while the new model is not yet self-sustaining. This is the most dangerous window in any transformation. Protecting cash flow and reducing active change fronts is more important than accelerating the new model.";
  } else if (stage === 4) {
    constraint = "You are attempting to redesign the machine while flying it. The primary constraint is transformation capacity — the organization's finite ability to absorb simultaneous change fronts without losing stakeholder alignment.";
  } else if (stage === 5) {
    constraint = "The existing model is no longer viable. The immediate priority is stabilization — protecting cash flow, reducing cost, and creating the runway to build the next model. Transformation without financial stability is reinvention without oxygen.";
  } else {
    constraint = "The current engine is healthy and has runway. The primary constraint is building the management infrastructure to sustain growth before complexity outpaces the organization.";
  }

  return { stage, growthHealth, ghBand, load, loadBand, capacitySum, capBand, dominantDebt, constraint };
}

document.getElementById('diag-submit').addEventListener('click', () => {
  const r = computeResult();
  const panel = document.getElementById('diag-result');
  if (!r) {
    alert('Please answer every question before seeing your diagnosis.');
    return;
  }
  const profile = STAGE_PROFILES[r.stage];
  document.getElementById('result-tag').textContent = profile.tag;
  document.getElementById('result-tag').style.color = profile.color;
  document.getElementById('result-headline').textContent = profile.headline;
  document.getElementById('result-body').textContent = profile.body;
  document.getElementById('result-constraint').innerHTML = `<strong>Primary Constraint:</strong> ${r.constraint}`;
  const qList = document.getElementById('result-questions');
  qList.innerHTML = profile.questions.map(q => `<li>${q}</li>`).join('');

  const dash = document.getElementById('score-dashboard');
  dash.innerHTML = `
    <div class="score-cell"><span class="score-label">Growth Health</span><div class="score-val ${scoreClass(r.growthHealth,[80,55])}">${r.growthHealth}/100 · ${r.ghBand}</div></div>
    <div class="score-cell"><span class="score-label">Transformation Load</span><div class="score-val ${(r.loadBand==='Low'||r.loadBand==='Moderate')?'good':'bad'}">${r.loadBand}</div></div>
    <div class="score-cell"><span class="score-label">Capacity</span><div class="score-val ${r.capBand==='High'?'good':(r.capBand==='Moderate'?'warn':'bad')}">${r.capBand}</div></div>
    <div class="score-cell"><span class="score-label">Dominant Debt</span><div class="score-val" style="font-size:15px;">${r.dominantDebt}</div></div>
  `;

  panel.classList.add('show');
  panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.getElementById('diag-reset').addEventListener('click', () => {
  document.querySelectorAll('#q-root input[type="radio"]').forEach(r => r.checked = false);
  document.getElementById('diag-result').classList.remove('show');
});

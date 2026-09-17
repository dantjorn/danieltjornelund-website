// ══════════════════════════════════════════════════════════
// SCALE-UP TRANSFORMATION DIAGNOSTIC — v3
// Deterministic free version. No AI. See spec sections 1-13.
// ══════════════════════════════════════════════════════════

const AREAS = [
  'Existing product/solution', 'Additional problem-solution fit', 'GTM/sales model',
  'Customer Success/retention', 'Operations/delivery', 'Product/R&D capability',
  'Data/technology systems', 'Executive capability', 'Middle management',
  'Organizational structure/decision rights', 'Cross-functional integration',
  'Culture/behavioral norms', 'Geography/internationalization',
  'Pricing/monetization/economic model', 'Capital/financing', 'Governance',
  'M&A/integration', 'Other',
];
const CLOCKS = [
  'Legacy-engine deterioration', 'Cash/runway', 'Competitive movement', 'Technology disruption',
  'Customer commitments', "Owner/investor time horizon", 'Regulatory deadline', 'Talent/retention', 'Other',
];

const root = document.getElementById('q-root');

function textQ(id, label, placeholder, tag) {
  root.insertAdjacentHTML('beforeend', `<div class="text-q">${tag ? `<div class="diag-section-label">${tag}</div>` : ''}<label for="${id}">${label}</label><input type="text" id="${id}" name="${id}" placeholder="${placeholder || ''}"></div>`);
}

function radioQ(id, tag, text, options, hidden) {
  const opts = options.map(o => `<label><input type="radio" name="${id}" value="${o.l}"><span><strong>${o.l}.</strong> ${o.t}</span></label>`).join('');
  root.insertAdjacentHTML('beforeend', `<div class="likert-q" id="wrap-${id}" ${hidden ? 'style="display:none;"' : ''}>${tag ? `<div class="diag-section-label">${tag}</div>` : ''}<p class="q-text">${text}</p><div class="choice-q">${opts}</div></div>`);
}

// ── SECTION A: TRANSFORMATION DIAGNOSIS ──
textQ('a1_dest', "What is the company trying to become over the next 3–5 years? (Target scale, principal customer/market, principal offering.)", "e.g. A $50M global platform serving mid-market law firms directly", "Section A — Transformation Diagnosis (not scored — anchors every answer below)");

radioQ('a2', null, "Assume excellent execution of the problem-solution fit you have already proven. Could that existing fit plausibly support the destination you described?", [
  { l:'A', t:'Yes. The proven customer/problem/solution space appears economically sufficient.' },
  { l:'B', t:'Probably yes, but only if we become substantially better at reproducing and delivering it.' },
  { l:'C', t:'No. Reaching the destination requires meaningful additional problem-solution fit.' },
  { l:'D', t:'No. Reaching the destination increasingly depends on a business or engine materially different from the one that created the company.' },
]);

radioQ('a3', null, "If the current problem-solution fit is sufficient, what prevents the company from exploiting it at the scale required by the destination?", [
  { l:'A', t:'Mainly penetration, replication, and incremental execution improvement.' },
  { l:'B', t:'Important capabilities still depend too heavily on founders, individual employees, or immature functions.' },
  { l:'C', t:'The organization lacks several capabilities necessary to reproduce, integrate, or govern the existing model at the required scale.' },
], true);

radioQ('a4', null, "At the destination you described, what role is the current business expected to play?", [
  { l:'A', t:"It remains the company's strategic and economic center of gravity; new offerings/customers extend it." },
  { l:'B', t:'It remains important, but a newer engine is expected to become at least equally important.' },
  { l:'C', t:'It primarily finances, enables, or bridges the company toward a successor engine that becomes central.' },
], true);

radioQ('a5', null, "At the intended destination, approximately how much of the company's economic value do you expect to come from problem-solution fit that has already been proven today?", [
  { l:'A', t:'More than 75%.' },
  { l:'B', t:'50–75%.' },
  { l:'C', t:'25–50%.' },
  { l:'D', t:'Less than 25%.' },
]);

// ── TURNAROUND / REINVENTION FLAG ──
radioQ('t1', 'Turnaround / Reinvention Check', "If no new growth engine succeeded, could the existing business remain economically viable for approximately the next two years with reasonable operational adjustments?", [
  { l:'A', t:'Yes, comfortably.' },
  { l:'B', t:'Yes, but material restructuring or efficiency improvements would be needed.' },
  { l:'C', t:'Probably not without substantial intervention or external support.' },
  { l:'D', t:'No; the existing engine itself appears structurally unsustainable.' },
]);
radioQ('t2', null, "Does the current core still solve an economically meaningful customer problem?", [
  { l:'A', t:'Yes, clearly.' },
  { l:'B', t:'Yes, although demand/economics are weakening.' },
  { l:'C', t:'Increasingly unclear.' },
  { l:'D', t:'The underlying problem-solution fit itself appears to be deteriorating materially.' },
]);

// ── SECTION B: TRANSFORMATION LOAD ──
root.insertAdjacentHTML('beforeend', `<div class="diag-section-label">Section B — Transformation Load</div><p class="q-text" style="font-weight:600;">Which areas must materially change for the company to reach its destination? Select all that apply, and how severe the required change is.</p>`);
const b1wrap = document.createElement('div');
AREAS.forEach((area, i) => {
  const id = `b1_${i}`;
  const item = document.createElement('div');
  item.className = 'check-item';
  item.innerHTML = `<input type="checkbox" id="${id}" data-area="${area}">
    <label for="${id}">${area}</label>
    <select id="${id}_sev" disabled>
      <option value="1">Limited</option>
      <option value="2" selected>Material</option>
      <option value="3">Fundamental</option>
    </select>`;
  b1wrap.appendChild(item);
});
root.appendChild(b1wrap);
b1wrap.querySelectorAll('input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', () => {
    document.getElementById(cb.id + '_sev').disabled = !cb.checked;
  });
});

radioQ('b2', null, "How much of the required transformation must progress simultaneously?", [
  { l:'A', t:'Most changes can be sequenced.' },
  { l:'B', t:'Several have to develop together, but meaningful sequencing remains possible.' },
  { l:'C', t:'Most critical changes are materially interdependent and must progress concurrently.' },
  { l:'D', t:'Delaying one major change front materially threatens several others.' },
]);

root.insertAdjacentHTML('beforeend', `<p class="q-text" style="font-weight:600; margin-top:24px;">Which clocks materially constrain how long the organization has to complete the transformation? Select all that apply.</p>`);
const b3wrap = document.createElement('div');
CLOCKS.forEach((clock, i) => {
  const id = `b3_${i}`;
  const item = document.createElement('div');
  item.className = 'check-item';
  item.innerHTML = `<input type="checkbox" id="${id}" data-clock="${clock}"><label for="${id}">${clock}</label>`;
  b3wrap.appendChild(item);
});
root.appendChild(b3wrap);

radioQ('b4', null, "How much discretion does management have to stop, postpone, or sequence major transformation initiatives?", [
  { l:'A', t:'High.' },
  { l:'B', t:'Moderate.' },
  { l:'C', t:'Low.' },
  { l:'D', t:'Very low.' },
]);

// ── SECTION C: ORGANIZATIONAL DEBT (dynamic, built after B1 selections known) ──
root.insertAdjacentHTML('beforeend', `<div class="diag-section-label">Section C — Organizational Debt</div><p id="c1-intro" class="q-text" style="font-weight:600;">Select at least one area above in Section B to see the organizational debt questions.</p>`);
const c1wrap = document.createElement('div');
c1wrap.id = 'c1-wrap';
root.appendChild(c1wrap);

function rebuildDebtQuestions() {
  const checked = Array.from(b1wrap.querySelectorAll('input[type="checkbox"]:checked'));
  c1wrap.innerHTML = '';
  document.getElementById('c1-intro').style.display = checked.length ? 'none' : 'block';
  checked.forEach((cb, i) => {
    const area = cb.dataset.area;
    const id = `c1_${i}`;
    const opts = [
      { l:'A', t:'Established — repeatable, owned, and functioning without recurring exceptional intervention.' },
      { l:'B', t:'Developing — capability exists, but remains inconsistent or person-dependent.' },
      { l:'C', t:'Material gap — organization cannot yet perform at the level required by the transformation.' },
      { l:'D', t:'Critical gap — capability is largely absent or repeatedly depends on exceptional intervention.' },
    ].map(o => `<label><input type="radio" name="${id}" value="${o.l}"><span><strong>${o.l}.</strong> ${o.t}</span></label>`).join('');
    const div = document.createElement('div');
    div.className = 'likert-q';
    div.dataset.area = area;
    div.innerHTML = `<p class="q-text">How developed is the capability required for <strong>${area}</strong> today?</p><div class="choice-q">${opts}</div>`;
    c1wrap.appendChild(div);
  });
}
b1wrap.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.addEventListener('change', rebuildDebtQuestions));

radioQ('c2', null, "Over the last 6–12 months, what has happened to the most important capability gaps?", [
  { l:'A', t:'Clearly narrowing.' },
  { l:'B', t:'Mixed.' },
  { l:'C', t:'Broadly unchanged.' },
  { l:'D', t:'Widening, because complexity is increasing faster than capability.' },
]);

// ── SECTION D: CURRENT TRANSFORMATION CAPACITY ──
radioQ('d1', 'Section D — Current Transformation Capacity', "How would you describe leadership bandwidth right now?", [
  { l:'A', t:'Meaningful bandwidth exists.' }, { l:'B', t:'Stretched but functional.' },
  { l:'C', t:'Several critical leaders are overloaded.' }, { l:'D', t:'Sustained heroic effort or burnout risk is present.' },
]);
radioQ('d2', null, "How well-funded is the transformation plan relative to available financial room?", [
  { l:'A', t:'Required journey is substantially funded through committed resources/internal economics.' },
  { l:'B', t:'Funding path is credible, although further capital or improved economics will be required.' },
  { l:'C', t:'Important parts depend on capital that is not yet secured.' },
  { l:'D', t:'Current financial room is clearly insufficient for the transformation plan.' },
]);
radioQ('d3', null, "How does the organization handle prioritizing and stopping work?", [
  { l:'A', t:'Management routinely reallocates/stops work.' }, { l:'B', t:'Priorities are generally clear but initiatives sometimes accumulate.' },
  { l:'C', t:'Organization struggles to stop work once launched.' }, { l:'D', t:'Almost everything remains a priority.' },
]);
radioQ('d4', null, "When consequential decisions cross functional boundaries, what typically happens?", [
  { l:'A', t:'Relevant leaders usually resolve them at the appropriate level.' }, { l:'B', t:'Some escalate, but the system generally works.' },
  { l:'C', t:'Important issues repeatedly stall or escalate to the CEO.' }, { l:'D', t:'CEO/founders remain the necessary integrator for most consequential cross-functional issues.' },
]);
radioQ('d5', null, "How does the organization update its plans when evidence contradicts them?", [
  { l:'A', t:'Contradictory evidence is surfaced quickly and plans adapt.' }, { l:'B', t:'Learning occurs, but slower than desirable.' },
  { l:'C', t:'Plans tend to persist until financial outcomes force reconsideration.' }, { l:'D', t:'No reliable mechanism exists for testing and updating important strategic assumptions.' },
]);

// ── SECTION E: MANDATE & EVIDENCE READINESS ──
radioQ('e1', 'Section E — Mandate & Evidence Readiness', "How explicit is agreement between management and the board/owners about the journey — not merely the destination?", [
  { l:'A', t:'Destination, major investments, time horizon, and risk boundaries are explicit and understood.' },
  { l:'B', t:'Broad agreement exists, but some major assumptions remain implicit.' },
  { l:'C', t:'Destination is aligned, but investment/time/risk appetite is not clearly aligned.' },
  { l:'D', t:'Management and owners appear to be pursuing materially different journeys.' },
]);
radioQ('e2', null, "Before committing substantial resources, have management and the board agreed what evidence should indicate that the transformation is working?", [
  { l:'A', t:'Yes: causal assumptions, milestones, and reassessment points are explicit.' },
  { l:'B', t:'Partly.' }, { l:'C', t:'Primarily financial outcomes are monitored.' },
  { l:'D', t:'No systematic evidence architecture exists.' },
]);

// ── Show/hide A3/A4 based on A2 ──
document.addEventListener('change', (e) => {
  if (e.target.name === 'a2') {
    const v = e.target.value;
    document.getElementById('wrap-a3').style.display = (v === 'A' || v === 'B') ? 'block' : 'none';
    document.getElementById('wrap-a4').style.display = (v === 'C' || v === 'D') ? 'block' : 'none';
  }
});

// ═══════════════════════════════════════════════════════════
// SCORING
// ═══════════════════════════════════════════════════════════
function getVal(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : null;
}

const DIAGNOSIS_INFO = {
  1: { name: 'L1 — Replicate', color: '#1B5E20', body: "The company's existing problem-solution fit can plausibly support the chosen destination. The deepest transformation requirement is reproducing, penetrating, and extending execution of an engine whose strategic thesis is already sufficient. This may still require management, systems, product, customer success, geographic expansion, and organizational development — but those activities don't change the underlying diagnosis." },
  2: { name: 'L2 — Institutionalize', color: '#2E5C8A', body: "The existing problem-solution fit can plausibly support the destination, but the organization cannot yet reproduce, integrate, and govern it at the required scale. The deepest constraint is organizational capability — typically management depth, systems, repeatability, decision rights, functional capability, middle management, and cross-functional integration." },
  3: { name: 'L3 — Extend', color: '#7A4100', body: "The current problem-solution fit remains viable and strategically central, but it cannot provide enough economically serviceable opportunity to support the chosen destination. The company must establish additional problem-solution fit. The existing business remains the center of gravity; new fit extends it." },
  4: { name: 'L4 — Renew', color: '#7B1F1F', body: "The existing business remains economically valuable, but cannot plausibly remain the company's long-term center of gravity. The future increasingly depends on a successor or renewed engine, while the company continues operating — and often financing the journey — from the existing one." },
};

function computeResult() {
  const dest = document.getElementById('a1_dest').value.trim();
  const a2 = getVal('a2');
  if (!a2) return null;

  let diagnosis, a4TieBreak = false;
  if (a2 === 'A' || a2 === 'B') {
    const a3 = getVal('a3');
    if (!a3) return null;
    diagnosis = (a3 === 'A') ? 1 : 2;
  } else {
    const a4 = getVal('a4');
    if (!a4) return null;
    if (a4 === 'A') diagnosis = 3;
    else if (a4 === 'C') diagnosis = 4;
    else { a4TieBreak = true; } // resolved below via A5
  }

  const a5 = getVal('a5');
  if (!a5) return null;
  if (a4TieBreak) diagnosis = (a5 === 'A' || a5 === 'B') ? 3 : 4;

  // A5 consistency check
  let consistencyFlag = null;
  if ((diagnosis === 1 || diagnosis === 2) && (a5 === 'C' || a5 === 'D')) {
    consistencyFlag = "Your answers appear internally inconsistent. You describe the existing fit as sufficient to reach your destination, but expect most future value to depend on fit that has not yet been proven. Reconsider your answers before relying on this diagnosis.";
  } else if (diagnosis === 3 && a5 === 'D') {
    consistencyFlag = "Your answers appear internally inconsistent. You describe the existing business as remaining central and extended by new fit, but expect the large majority of future value to come from fit not yet proven — which reads closer to a Renew (L4) situation than an Extend (L3) one. Reconsider your answers before relying on this diagnosis.";
  } else if (diagnosis === 4 && a5 === 'A') {
    consistencyFlag = "Your answers appear internally inconsistent. You describe the future as depending on a successor engine, but expect more than 75% of future value to come from fit already proven today. Reconsider your answers before relying on this diagnosis.";
  } else if (diagnosis === 4 && a5 === 'B') {
    consistencyFlag = "There's a moderate tension in your answers: you describe the future as depending on a successor engine, but expect roughly half or more of future value to come from fit already proven today. Worth reconciling before relying on this diagnosis.";
  }

  const boundaryNote = a4TieBreak
    ? `Your answer to "future role of the existing engine" placed this near the boundary between Extend (L3) and Renew (L4). Based on how much future value you expect from already-proven fit, this reads as ${diagnosis === 3 ? 'L3-leaning' : 'L4-leaning'}.`
    : null;

  // ── Turnaround flag ──
  const t1 = getVal('t1'), t2 = getVal('t2');
  if (!t1 || !t2) return null;
  const turnaroundTriggered = (t1 === 'D' || t2 === 'D' || (t1 === 'C' && t2 === 'C'));

  // ── Section B: Transformation Load ──
  const checkedAreas = Array.from(document.querySelectorAll('#q-root .check-item input[type="checkbox"][data-area]:checked'));
  if (checkedAreas.length === 0) return null;
  let areaScore = 0;
  const areaSeverities = [];
  checkedAreas.forEach(cb => {
    const sev = Number(document.getElementById(cb.id + '_sev').value);
    areaScore += sev;
    areaSeverities.push({ area: cb.dataset.area, sev });
  });
  const b2 = getVal('b2');
  const b4 = getVal('b4');
  if (!b2 || !b4) return null;
  const sevMap = { A:0, B:1, C:2, D:3 };
  const concurrencyScore = sevMap[b2];
  const deferScore = sevMap[b4];
  const clocks = Array.from(document.querySelectorAll('#q-root input[data-clock]:checked')).map(cb => cb.dataset.clock);
  const clockScore = Math.min(clocks.length, 4);
  const loadTotal = areaScore + concurrencyScore*3 + clockScore*2 + deferScore*3;
  let loadBand;
  if (loadTotal < 12) loadBand = 'Low';
  else if (loadTotal < 23) loadBand = 'Moderate';
  else if (loadTotal < 33) loadBand = 'High';
  else loadBand = 'Very High';

  const topAreas = [...areaSeverities].sort((a,b) => b.sev - a.sev).slice(0, 4).map(a => a.area);
  const loadDriverText = `Driven primarily by ${checkedAreas.length} area${checkedAreas.length !== 1 ? 's' : ''} of required change (most consequential: ${topAreas.join(', ')})${clocks.length ? `, ${clocks.length} material clock${clocks.length !== 1 ? 's' : ''} constraining the timeline` : ''}, with ${{A:'high',B:'moderate',C:'low',D:'very low'}[b4]} discretion to sequence or defer.`;

  // ── Section C: Organizational Debt ──
  const debtCells = Array.from(document.querySelectorAll('#c1-wrap .likert-q'));
  const debtVals = [];
  for (const cell of debtCells) {
    const name = cell.querySelector('input').name;
    const v = getVal(name);
    if (!v) return null;
    debtVals.push({ area: cell.dataset.area, sev: sevMap[v] });
  }
  const avgDebt = debtVals.reduce((a,b) => a+b.sev, 0) / debtVals.length;
  let debtBand;
  if (avgDebt < 0.75) debtBand = 'Low';
  else if (avgDebt < 1.5) debtBand = 'Moderate';
  else if (avgDebt < 2.25) debtBand = 'Significant';
  else debtBand = 'Severe';
  const c2 = getVal('c2');
  if (!c2) return null;
  const trendMap = { A:'declining', B:'mixed', C:'unchanged', D:'rising' };
  const topGaps = [...debtVals].sort((a,b) => b.sev - a.sev).slice(0, 4).filter(d => d.sev >= 2).map(d => d.area);

  // ── Section D: Capacity ──
  const d1 = getVal('d1'), d2 = getVal('d2'), d3 = getVal('d3'), d4 = getVal('d4'), d5 = getVal('d5');
  if (!d1 || !d2 || !d3 || !d4 || !d5) return null;
  const capVals = [
    { name: 'Leadership bandwidth', sev: sevMap[d1] },
    { name: 'Financial room', sev: sevMap[d2] },
    { name: 'Ability to prioritize and stop', sev: sevMap[d3] },
    { name: 'Cross-functional integration', sev: sevMap[d4] },
    { name: 'Learning capacity', sev: sevMap[d5] },
  ];
  const capTotal = capVals.reduce((a,b) => a+b.sev, 0);
  let capBand;
  if (capTotal <= 4) capBand = 'Supportive';
  else if (capTotal <= 9) capBand = 'Constrained';
  else capBand = 'Fragile';
  const capConstraints = [...capVals].sort((a,b) => b.sev - a.sev).slice(0, 2).filter(c => c.sev >= 2).map(c => c.name);

  // ── Section E ──
  const e1 = getVal('e1'), e2 = getVal('e2');
  if (!e1 || !e2) return null;
  const mandateMap = { A:'Low', B:'Moderate', C:'High', D:'High' };
  const evidenceMap = { A:'Strong', B:'Partial', C:'Partial', D:'Weak' };
  const mandateRisk = mandateMap[e1];
  const evidenceReadiness = evidenceMap[e2];

  // ── Discussion questions, priority order ──
  const candidates = [];
  if (consistencyFlag) candidates.push(`You've described the existing fit and your expected future value in ways that don't fully line up. Which of those two beliefs is actually the one you're building the plan around?`);
  if (turnaroundTriggered) candidates.push(`If the transformation took eighteen months longer than planned, would the existing business still generate enough value to fund it — or does the stabilization clock run faster than the transformation clock?`);
  if (diagnosis === 3 || diagnosis === 4) candidates.push(`What specifically has to be true about the new problem-solution fit — customer, economics, or capability — for it to actually replace what the existing engine can no longer provide?`);
  if (topGaps.length) candidates.push(`In ${topGaps[0]}, is the gap something the current team can close with time and attention, or does it require capability the organization doesn't yet have inside it at all?`);
  if (capBand === 'Fragile') candidates.push(`If you could only fully resource one of your current transformation fronts for the next two quarters, which one — and what happens to the others while you wait?`);
  if (mandateRisk === 'High') candidates.push(`Has your board actually approved the time horizon and the temporary pressure on results this transformation requires — or only the destination itself?`);
  if (evidenceReadiness === 'Weak' || evidenceReadiness === 'Partial') candidates.push(`What result, visible within the next two quarters, would tell you clearly that this transformation is working — as opposed to simply that revenue hasn't yet declined?`);

  const fallbacks = [
    `Given the destination you described, what would have to be true in three years for this diagnosis to have been the right one in hindsight?`,
    `Which single capability, if it existed today, would most change how confident you feel in this journey?`,
    `What decision are you currently avoiding because you don't yet have enough evidence to make it?`,
  ];
  while (candidates.length < 3) candidates.push(fallbacks[candidates.length % fallbacks.length]);
  const discussionQuestions = candidates.slice(0, 3);

  return {
    destination: dest, diagnosis, consistencyFlag, boundaryNote, turnaroundTriggered,
    loadBand, loadDriverText, debtBand, debtTrend: trendMap[c2], topGaps, capBand, capConstraints,
    mandateRisk, evidenceReadiness, discussionQuestions,
  };
}

document.getElementById('diag-submit').addEventListener('click', () => {
  const r = computeResult();
  const panel = document.getElementById('diag-result');
  if (!r) {
    alert('Please answer every visible question before seeing your diagnosis — some questions only appear after you answer the one before them, and Section B requires at least one area selected.');
    return;
  }
  const info = DIAGNOSIS_INFO[r.diagnosis];
  document.getElementById('result-tag').textContent = info.name;
  document.getElementById('result-tag').style.color = info.color;
  document.getElementById('result-headline').textContent = r.destination ? `Toward: ${r.destination}` : 'Your diagnosis';
  document.getElementById('result-body').textContent = info.body + (r.boundaryNote ? ' ' + r.boundaryNote : '');

  const cFlag = document.getElementById('consistency-flag');
  if (r.consistencyFlag) { cFlag.style.display = 'block'; cFlag.textContent = r.consistencyFlag; }
  else cFlag.style.display = 'none';

  const tFlag = document.getElementById('turnaround-flag');
  if (r.turnaroundTriggered) {
    tFlag.style.display = 'block';
    tFlag.innerHTML = `<strong>Turnaround / Reinvention Flag.</strong> Your answers indicate that part of the immediate managerial problem may be stabilization rather than scale-up alone. The existing business may not remain sufficiently viable to finance or support the transformation without intervention. This is not part of the L1–L4 diagnosis above — it's a separate signal about immediate viability.`;
  } else tFlag.style.display = 'none';

  const dash = document.getElementById('score-dashboard');
  dash.innerHTML = `
    <div class="score-cell"><span class="score-label">Transformation Load</span><div class="score-val ${r.loadBand==='Low'||r.loadBand==='Moderate'?'good':'bad'}">${r.loadBand}</div></div>
    <div class="score-cell"><span class="score-label">Organizational Debt</span><div class="score-val ${r.debtBand==='Low'||r.debtBand==='Moderate'?'good':'bad'}">${r.debtBand} — ${r.debtTrend}</div></div>
    <div class="score-cell"><span class="score-label">Capacity Conditions</span><div class="score-val ${r.capBand==='Supportive'?'good':(r.capBand==='Constrained'?'warn':'bad')}">${r.capBand}</div></div>
    <div class="score-cell"><span class="score-label">Mandate / Evidence</span><div class="score-val ${r.mandateRisk==='Low'?'good':'warn'}" style="font-size:15px;">${r.mandateRisk} risk · ${r.evidenceReadiness}</div></div>
  `;

  document.getElementById('result-load-drivers').textContent = r.loadDriverText;
  document.getElementById('result-debt-gaps').textContent = r.topGaps.length ? r.topGaps.join(', ') : 'No domain currently shows a material or critical gap.';
  document.getElementById('result-capacity-constraints').textContent = r.capConstraints.length ? r.capConstraints.join(', ') : 'No dimension currently shows a significant constraint.';
  document.getElementById('result-questions').innerHTML = r.discussionQuestions.map(q => `<li>${q}</li>`).join('');

  panel.classList.add('show');
  panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.getElementById('diag-reset').addEventListener('click', () => {
  document.querySelectorAll('#q-root input[type="radio"], #q-root input[type="checkbox"]').forEach(el => el.checked = false);
  document.getElementById('a1_dest').value = '';
  document.querySelectorAll('#q-root select').forEach(s => { s.disabled = true; s.value = '2'; });
  document.getElementById('wrap-a3').style.display = 'none';
  document.getElementById('wrap-a4').style.display = 'none';
  rebuildDebtQuestions();
  document.getElementById('diag-result').classList.remove('show');
});

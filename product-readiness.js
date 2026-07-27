// ── Question data ─────────────────────────────────────────
const LIKERT_QUESTIONS = [
  { id: 'q1', section: 'A — Repeatability', text: "If you removed the specific people currently doing this work and replaced them with equally trained people, would the output be materially different?", low: "No, totally standardized outcome", high: "Yes, deeply person-dependent" },
  { id: 'q2', section: 'A — Repeatability', text: "How much does the correct approach change based on the specific situation, client, or case in front of you?", low: "Barely varies", high: "Every case is fundamentally different" },
  { id: 'q3', section: 'A — Repeatability', text: "Could a smart new hire learn to do this well mainly from written procedures and examples, without years of apprenticeship?", low: "Yes, fully", high: "No, requires years of tacit judgment" },
  { id: 'q4', section: 'A — Repeatability', text: "Does the customer or client need to actively participate in creating the outcome — not just requesting it?", low: "No, we just deliver it", high: "Yes, it's co-created throughout" },
  { id: 'q5', section: 'B — Friction Density', text: "How many separate parties or systems typically have to hand this off between each other before it's done?", low: "One party, start to finish", high: "Many fragmented handoffs" },
  { id: 'q6', section: 'B — Friction Density', text: "How much of the pain here is regulation, licensing, or compliance rather than the actual work itself?", low: "None", high: "It's most of the friction" },
  { id: 'q7', section: 'B — Friction Density', text: "How much of this work today is manual and repetitive rather than judgment-based?", low: "Almost none", high: "The majority" },
  { id: 'q8', section: 'B — Friction Density', text: "Do the systems and tools involved in this workflow talk to each other, or is there a lot of manual re-entry and reconciliation?", low: "Fully integrated", high: "Constant manual bridging" },
  { id: 'q9', section: 'C — Reclassification Check', text: "Is the core output here something with a definable \u2018correct answer\u2019 or \u2018correct outcome\u2019 — even if getting there today looks like judgment?", low: "No, it's genuinely open-ended", high: "Yes, there's a right answer, it's just hard to reach today" },
  { id: 'q10', section: 'C — Reclassification Check', text: "If quality here became fully measurable and auditable tomorrow, would clients still pay a premium mainly for who delivers it \u2014 brand, name, relationship \u2014 rather than the measurable quality itself?", low: "No, they'd follow the measurable quality", high: "Yes, the name/institution still matters independent of quality" },
];

const BINARY_Q11 = { id: 'q11', section: 'D — Binding Constraint', text: "Can this task already be done to an acceptable standard by existing software or AI tools today?", options: [{ label: 'No', value: 'no' }, { label: 'Yes', value: 'yes' }] };
const BINARY_Q12 = { id: 'q12', section: 'D — Binding Constraint', text: "If it can be done \u2014 can the quality of the output be independently verified or benchmarked today, not just asserted?", options: [{ label: 'No', value: 'no' }, { label: 'Yes', value: 'yes' }] };
const CHOICE_Q13 = { id: 'q13', section: 'D — Binding Constraint', text: "If quality can be verified \u2014 would courts, regulators, insurers, or enterprise compliance teams currently accept that verification as sufficient, or would they still require a licensed human sign-off regardless?", options: [
  { label: "Human sign-off still required \u2014 and there's no clear path to insuring the system's output", value: 'insurability' },
  { label: "Sign-off required mainly because no one has built the accepted standard yet", value: 'legibility' },
  { label: "Verification would likely be accepted \u2014 the constraint is largely resolved", value: 'resolved' },
] };
const CHOICE_Q14 = { id: 'q14', section: 'E — Value Type (colors the narrative only)', text: "What's the primary thing the client is actually paying for?", options: [
  { label: 'A correct answer or output', value: 'functional' },
  { label: 'Someone to coordinate a messy process', value: 'coordination' },
  { label: 'An ongoing trusted relationship', value: 'relational' },
  { label: 'Being changed or coached through something', value: 'transformational' },
  { label: 'Navigating genuine uncertainty', value: 'strategic' },
  { label: 'The name on the door', value: 'legitimacy' },
] };

// ── Rendering ─────────────────────────────────────────
const root = document.getElementById('q-root');
let lastSection = null;

function sectionLabel(section) {
  if (section === lastSection) return '';
  lastSection = section;
  return `<div class="diag-section-label">${section}</div>`;
}

LIKERT_QUESTIONS.forEach(q => {
  const opts = [1,2,3,4,5].map(n => `<input type="radio" name="${q.id}" id="${q.id}-${n}" value="${n}"><label class="opt" for="${q.id}-${n}">${n}</label>`).join('');
  root.insertAdjacentHTML('beforeend', `
    ${sectionLabel(q.section)}
    <div class="likert-q">
      <p class="q-text">${q.text}</p>
      <div class="likert-scale">
        <span class="anchor">${q.low}</span>
        <span class="opts">${opts}</span>
        <span class="anchor right">${q.high}</span>
      </div>
    </div>`);
});

function renderBinary(q, wrapId) {
  const opts = q.options.map(o => `<input type="radio" name="${q.id}" id="${q.id}-${o.value}" value="${o.value}"><label class="opt" for="${q.id}-${o.value}" style="width:auto;padding:0 18px;">${o.label}</label>`).join('');
  return `<div class="likert-q" id="${wrapId}">
      <p class="q-text">${q.text}</p>
      <div class="likert-scale"><span class="opts">${opts}</span></div>
    </div>`;
}

function renderChoice(q, wrapId) {
  const opts = q.options.map(o => `<label><input type="radio" name="${q.id}" value="${o.value}"><span>${o.label}</span></label>`).join('');
  return `<div class="likert-q" id="${wrapId}">
      <p class="q-text">${q.text}</p>
      <div class="choice-q">${opts}</div>
    </div>`;
}

root.insertAdjacentHTML('beforeend', sectionLabel(BINARY_Q11.section) + renderBinary(BINARY_Q11, 'wrap-q11'));
root.insertAdjacentHTML('beforeend', `<div id="wrap-q12" class="q-hidden">${renderBinary(BINARY_Q12, '')}</div>`);
root.insertAdjacentHTML('beforeend', `<div id="wrap-q13" class="q-hidden">${renderChoice(CHOICE_Q13, '')}</div>`);
root.insertAdjacentHTML('beforeend', sectionLabel(CHOICE_Q14.section) + renderChoice(CHOICE_Q14, 'wrap-q14'));

// Conditional reveal logic
document.addEventListener('change', (e) => {
  if (e.target.name === 'q11') {
    document.getElementById('wrap-q12').classList.toggle('q-hidden', e.target.value !== 'yes');
    document.getElementById('wrap-q13').classList.add('q-hidden');
  }
  if (e.target.name === 'q12') {
    document.getElementById('wrap-q13').classList.toggle('q-hidden', e.target.value !== 'yes');
  }
});

// ── Scoring ─────────────────────────────────────────
function getVal(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : null;
}

const QUADRANT_INFO = {
  'Human Craft': "Genuinely bespoke work where the person is the product. Structural repeatability is low and friction is low \u2014 augmentation, not automation, is the right lens.",
  'Commodity Automation': "Repeatable and low-friction \u2014 the textbook automation case. Straightforward to build, but often just as straightforward for competitors to replicate.",
  'Complex Human Systems': "High friction, low repeatability \u2014 value comes from navigating coordination and judgment under real variability.",
  'Platform Goldmine': "High repeatability and high friction \u2014 the friction is exactly what a well-built platform gets paid to remove.",
};

const BINDING_INFO = {
  'Capability': "The underlying task can't yet be done to an acceptable standard by existing tools \u2014 the ceiling is technical, not adoption.",
  'Measurability': "The task can be done, but quality can't yet be independently verified \u2014 trust, not capability, is the bottleneck.",
  'Legibility': "Quality can be verified, but no accepted standard exists yet for institutions to rely on that verification.",
  'Insurability': "Quality can be verified, but institutions require a human sign-off regardless \u2014 and there's no clear path to insuring the system's output.",
  'Resolved': "The technical and institutional barriers are largely resolved \u2014 the real bottleneck now is adoption and go-to-market, not the framework's structural constraints.",
};

const PATHWAY_INFO = {
  'Full Automation (build first)': "Build the automated solution directly \u2014 the constraint isn't technical feasibility, it's execution speed.",
  'Transparency Infrastructure': "Invest first in making quality independently verifiable \u2014 trust infrastructure, not more automation, unlocks the next stage.",
  'Expertise Productization': "Codify the tacit expertise into structured tools, playbooks, or software \u2014 the judgment is real, but more reducible than it currently looks.",
  'Institutional Encapsulation': "Wrap the automated capability inside an institutionally-accepted structure \u2014 partnership, licensed entity, certification \u2014 rather than trying to win trust head-on.",
  'Intelligence Augmentation': "Build tools that make the humans faster and more consistent \u2014 full automation isn't the right target here.",
  'Expertise Productization + Transparency Infrastructure': "Two-track: codify the underlying expertise into structured tools, and build verification infrastructure in parallel \u2014 the friction and the tacit-knowledge problem need to be solved together.",
  'Not a productization candidate': "This is genuinely bespoke, low-friction work. The right investment is in the people doing it, not a platform around them.",
  'Full Automation \u2014 weak moat': "Straightforward to automate \u2014 but so is it for anyone else. Prioritize distribution and defensibility as much as the build itself.",
};

function computeResult() {
  const vals = {};
  for (let i = 1; i <= 10; i++) {
    const v = getVal('q' + i);
    if (v === null) return null;
    vals['q' + i] = Number(v);
  }
  const q11 = getVal('q11');
  if (q11 === null) return null;
  let q12 = null, q13 = null;
  if (q11 === 'yes') {
    q12 = getVal('q12');
    if (q12 === null) return null;
    if (q12 === 'yes') {
      q13 = getVal('q13');
      if (q13 === null) return null;
    }
  }
  const q14 = getVal('q14');

  const R = ((6 - vals.q1) + (6 - vals.q2) + (6 - vals.q3) + (6 - vals.q4)) / 4;
  const F = (vals.q5 + vals.q6 + vals.q7 + vals.q8) / 4;

  let quadrant;
  if (R >= 3 && F < 3) quadrant = 'Commodity Automation';
  else if (R >= 3 && F >= 3) quadrant = 'Platform Goldmine';
  else if (R < 3 && F < 3) quadrant = 'Human Craft';
  else quadrant = 'Complex Human Systems';

  let reclass = null, reclassIsCandidate = false;
  if (R < 3) {
    const score14 = ((6 - vals.q1) + (6 - vals.q4)) / 2;
    const score23 = ((6 - vals.q2) + (6 - vals.q3)) / 2;
    if (vals.q9 >= 4 && score23 < score14) {
      reclassIsCandidate = true;
      reclass = `Presents as ${quadrant}, but structural analysis suggests an underlying Platform Goldmine obscured by incumbent friction \u2014 the repeatability score was pulled down more by context variability and tacit-knowledge framing than by genuinely irreducible person-dependence or necessary co-creation. Worth a deeper diagnosis.`;
    } else {
      reclass = `Classification appears structurally genuine \u2014 this reads as real ${quadrant}, not a disguised Platform Goldmine.`;
    }
  } else {
    reclass = `Reclassification check applies to low-repeatability quadrants only \u2014 your ${quadrant} classification stands on its own.`;
  }

  let binding;
  if (q11 === 'no') binding = 'Capability';
  else if (q12 === 'no') binding = 'Measurability';
  else if (q13 === 'insurability') binding = 'Insurability';
  else if (q13 === 'legibility') binding = 'Legibility';
  else binding = 'Resolved';

  let pathway;
  if (quadrant === 'Platform Goldmine') {
    pathway = { Capability: 'Full Automation (build first)', Measurability: 'Transparency Infrastructure', Legibility: 'Expertise Productization', Insurability: 'Institutional Encapsulation', Resolved: 'Full Automation (build first)' }[binding];
  } else if (quadrant === 'Complex Human Systems') {
    pathway = reclassIsCandidate ? 'Expertise Productization + Transparency Infrastructure' : 'Intelligence Augmentation';
  } else if (quadrant === 'Commodity Automation') {
    pathway = 'Full Automation \u2014 weak moat';
  } else {
    pathway = reclassIsCandidate ? 'Expertise Productization' : 'Not a productization candidate';
  }

  const legitFlag = vals.q10 >= 4;

  return { quadrant, reclass, binding, pathway, legitFlag, valueType: q14 };
}

document.getElementById('diag-submit').addEventListener('click', () => {
  const r = computeResult();
  const panel = document.getElementById('diag-result');
  if (!r) {
    alert('Please answer every question \u2014 some later questions only appear after you answer the one before them.');
    return;
  }
  document.getElementById('result-quadrant-tag').textContent = 'Your Classification';
  document.getElementById('result-quadrant-title').textContent = r.quadrant;
  document.getElementById('result-quadrant-desc').textContent = QUADRANT_INFO[r.quadrant];
  document.getElementById('result-reclass').textContent = r.reclass;
  document.getElementById('result-binding').innerHTML = `<strong>${r.binding}</strong> \u2014 ${BINDING_INFO[r.binding]}`;
  document.getElementById('result-pathway').innerHTML = `<strong>${r.pathway}</strong> \u2014 ${PATHWAY_INFO[r.pathway]}`;
  const legit = document.getElementById('legit-callout');
  if (r.legitFlag) {
    legit.style.display = 'block';
    legit.textContent = "Note: legitimacy value is present here and will resist compression even if quality becomes fully measurable. Productization strategy should route around this, not through it.";
  } else {
    legit.style.display = 'none';
  }
  panel.classList.add('show');
  panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.getElementById('diag-reset').addEventListener('click', () => {
  document.querySelectorAll('#q-root input[type="radio"]').forEach(r => r.checked = false);
  document.getElementById('wrap-q12').classList.add('q-hidden');
  document.getElementById('wrap-q13').classList.add('q-hidden');
  document.getElementById('diag-result').classList.remove('show');
});

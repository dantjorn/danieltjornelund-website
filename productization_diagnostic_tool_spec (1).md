# Static Self-Assessment Tool — Spec
## "Is Your Industry a Platform Goldmine?" (working title)
Based on the Daniel T Framework v3.1

---

## 1. Design Constraints for the Static Version

- **No AI call, no backend.** Pure deterministic scoring logic (weighted averages + a
  small decision tree) that runs client-side. This is what makes it "static" — the
  full framework has ~15 dimensions; this tool compresses to the minimum set that
  still produces a defensible, non-generic output.
- **~12–14 questions**, single-select, 4–5 point Likert scale each. More than that
  and completion drops; fewer and the output feels like a horoscope.
- **The output must feel earned.** Because the framework's own answer is often
  counter-intuitive (the reclassification insight), the tool should occasionally
  surprise the visitor — that's the "aha" that makes it shareable and makes LexAI's
  own diagnostic capability legible.
- **The tool doesn't need to cover the whole framework.** It needs to reliably
  answer four questions: *what quadrant are you in, is that quadrant real or is it
  a reclassification opportunity, what's binding you, and what pathway follows.*
  Everything else (trust taxonomy, accountability compression, value-type
  granularity) is depth for the full paid/consulting engagement — not the teaser.

---

## 2. What the Tool Actually Computes

Four outputs, derived from two axis scores + two follow-on checks:

1. **Quadrant** (Repeatability × Friction) → Human Craft / Commodity Automation /
   Complex Human Systems / **Platform Goldmine**
2. **Reclassification verdict** — is this a *genuine* Q1/Q3, or a Q1/Q3-presenting
   industry that structural analysis reveals as Q4?
3. **Binding constraint** — Capability / Measurability / Legibility / Insurability
   (which one is currently the ceiling, per the constraint-migration logic)
4. **Recommended pathway** — one of the 7 productization pathways

This mirrors the framework's own sequence: classify → reclassify-check →
diagnose binding constraint → prescribe pathway. Nothing invented, just compressed.

---

## 3. Question Set

### Section A — Repeatability Axis (4 questions)
Maps to: Repeatability, Context Variability, Tacit Knowledge, Co-Creation dimensions.

1. **"If you removed the specific people currently doing this work and replaced
   them with equally trained people, would the output be materially different?"**
   (1 = No, totally standardized outcome → 5 = Yes, deeply person-dependent)
2. **"How much does the correct approach change based on the specific
   situation/client/case in front of you?"**
   (1 = Barely varies → 5 = Every case is fundamentally different)
3. **"Could a smart new hire learn to do this well mainly from written procedures
   and examples, without years of apprenticeship?"**
   (1 = Yes, fully → 5 = No, requires years of tacit judgment)
4. **"Does the customer/client need to actively participate in *creating* the
   outcome (not just requesting it)?"**
   (1 = No, we just deliver it → 5 = Yes, it's co-created throughout)

**Repeatability Score** = average of (6 − Q1, 6 − Q2, 6 − Q3, 6 − Q4) → high score
= high structural repeatability.

### Section B — Friction Density Axis (4 questions)
Maps to: Coordination, Institutional, Workflow, Integration friction.

5. **"How many separate parties/systems typically have to hand this off between
   each other before it's done?"** (1 = one party, start to finish → 5 = many
   fragmented handoffs)
6. **"How much of the pain here is regulation, licensing, or compliance rather
   than the actual work itself?"** (1 = none → 5 = it's most of the friction)
7. **"How much of this work today is manual/repetitive rather than judgment-based?"**
   (1 = almost none → 5 = the majority)
8. **"Do the systems/tools involved in this workflow talk to each other, or is
   there a lot of manual re-entry/reconciliation?"** (1 = fully integrated →
   5 = constant manual bridging)

**Friction Score** = average of Q5–Q8 → high score = high friction density.

### Section C — Reclassification Check (2 questions)
This is the section that produces the "aha." It tests whether the *perceived*
difficulty is structural (real) or incumbent (artifact of legacy delivery).

9. **"Is the core output here something with a definable 'correct answer' or
   'correct outcome' — even if getting there today looks like judgment?"**
   (1 = No, it's genuinely open-ended → 5 = Yes, there's a right answer, it's just
   hard to reach today)
10. **"If quality here became fully measurable and auditable tomorrow, would
    clients still pay a premium mainly for *who* delivers it (brand, name,
    relationship) rather than the measurable quality itself?"**
    (1 = No, they'd follow the measurable quality → 5 = Yes, the name/institution
    still matters independent of quality — flags **Legitimacy Value**, which
    resists compression regardless of quadrant)

### Section D — Binding Constraint Check (3 questions)
Maps to Capability → Measurability → Legibility → Insurability migration.

11. **"Can this task already be done to an acceptable standard by existing
    software/AI tools today?"** (No → Capability is binding, stop here) /
    (Yes → continue)
12. **"If it can be done, can the quality of the output be independently verified
    or benchmarked today (not just asserted)?"** (No → Measurability is binding) /
    (Yes → continue)
13. **"If quality can be verified, would courts/regulators/insurers/enterprise
    compliance teams currently accept that verification as sufficient — or would
    they still require a licensed human sign-off regardless?"**
    (Human sign-off still required, and there's no clear path to insuring the
    system's output → **Insurability** is binding. Sign-off required mainly
    because no one has built the standard yet → **Legibility** is binding.
    Otherwise → constraint is largely resolved.)

### Section E — Value-Type Flag (1 question, optional depth)
14. **"What's the primary thing the client is actually paying for?"**
    (single-select: *A correct answer/output* / *Someone to coordinate a messy
    process* / *An ongoing trusted relationship* / *Being changed/coached through
    something* / *Navigating genuine uncertainty* / *The name on the door*)
    — Maps directly to Functional / Coordination / Relational / Transformational /
    Strategic / Legitimacy value types. Used to color the narrative output, not
    the quadrant math.

---

## 4. Scoring Logic (Decision Tree)

```
Repeatability Score (R) = avg(6-Q1, 6-Q2, 6-Q3, 6-Q4)   // 1–5, high = repeatable
Friction Score (F)      = avg(Q5, Q6, Q7, Q8)            // 1–5, high = friction-heavy

QUADRANT:
  R >= 3 and F <  3  →  Commodity Automation
  R >= 3 and F >= 3  →  Platform Goldmine
  R <  3 and F <  3  →  Human Craft
  R <  3 and F >= 3  →  Complex Human Systems

RECLASSIFICATION CHECK (only relevant if quadrant is Human Craft or Complex
Human Systems — i.e., R < 3):
  IF Q9 >= 4  (there IS a definable correct answer under the surface)
     AND R was pulled down mainly by Q2/Q3 (context variability / tacit
         knowledge) rather than Q1/Q4 (irreducible person-dependence /
         necessary co-creation)
  → Flag: "RECLASSIFICATION CANDIDATE — presents as [quadrant], structural
     analysis suggests underlying Platform Goldmine obscured by incumbent
     friction. Worth deeper diagnosis."
  ELSE → "Classification appears structurally genuine — this is real Q1/Q3,
     not disguised Q4."

LEGITIMACY FLAG:
  IF Q10 >= 4 → append: "Note: legitimacy value is present here and will
     resist compression even if/when quality becomes fully measurable.
     Productization strategy should route around this, not through it —
     see Institutional Encapsulation / Human-in-the-Loop pathways."

BINDING CONSTRAINT (sequential — stop at first "no"):
  Q11 = No  → Capability
  Q11 = Yes, Q12 = No → Measurability
  Q11 = Yes, Q12 = Yes, Q13 = "insurability" → Insurability
  Q11 = Yes, Q12 = Yes, Q13 = "legibility"   → Legibility
  Q11 = Yes, Q12 = Yes, Q13 = "resolved"     → "Constraint largely resolved —
     the bottleneck is now adoption/go-to-market, not the framework's
     technical/institutional barriers."

PATHWAY RECOMMENDATION (lookup table keyed on quadrant + binding constraint):
  Platform Goldmine + Capability        → Full Automation (build first)
  Platform Goldmine + Measurability     → Transparency Infrastructure
  Platform Goldmine + Legibility        → Expertise Productization
  Platform Goldmine + Insurability      → Institutional Encapsulation
  Complex Human Systems (reclass'd)     → Expertise Productization +
                                            Transparency Infrastructure
  Complex Human Systems (genuine)       → Intelligence Augmentation
  Commodity Automation                  → Full Automation (weak moat — flag
                                            defensibility risk explicitly)
  Human Craft (genuine)                 → Not a productization candidate;
                                            augmentation only
  Human Craft (reclass'd)               → Expertise Productization
```

---

## 5. Output Template (what the visitor sees)

```
Your Classification: [QUADRANT]
[1-line quadrant description]

Reclassification Read: [Genuine / Candidate]
[2-3 sentence explanation using their specific answers]

What's Binding You: [Capability / Measurability / Legibility / Insurability]
[1-2 sentence explanation of what that means practically]

Recommended Pathway: [Pathway name]
[1-2 sentence description]

[If legitimacy flag triggered: callout box]

→ CTA: "This is a compressed read using 4 of the framework's ~15 diagnostic
   dimensions. A full analysis adds friction-centrality mapping, trust-type
   breakdown, and transformation sequencing. [Book a working session / see
   the full framework]"
```

The CTA is important structurally: the static tool should be *genuinely useful*
on its own (this is the "reliable and valuable" bar you set) while making clear
it's a compressed slice — a taste, not the instrument. That's what makes the
teaser credible rather than a lead-gen gimmick.

---

## 6. Calibration Note for Build

Before shipping, run the tool against your validated case library (Stripe,
Deel/Papaya, Blue Dot, Azami TLE, McKinsey, Cinereach, Unframe AI, Harbor
Compliance, RapidSeedbox) by hand-answering as if you were diagnosing each
company cold. If the tool doesn't land Cinereach as genuine-Q3 and Harbor/
Unframe as Platform Goldmine / reclassification candidates, the question
wording or thresholds need adjustment before it goes live — that's your
regression test suite.

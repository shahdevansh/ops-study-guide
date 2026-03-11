# Economic Order Quantity (EOQ) — Complete Study Guide

> **MBA 204 Operations | Class 9 | Module C**
> **Priority: HIGH** — Tested on CC3 and Final Review

---

## 📋 Quick Reference Card

| Parameter | Formula |
|---|---|
| **EOQ** | $EOQ = \sqrt{\frac{2SD}{H}}$ |
| **Total Relevant Cost** | $TC(Q) = S \cdot \frac{D}{Q} + H \cdot \frac{Q}{2}$ |
| **TC at EOQ** | $TC(EOQ) = \sqrt{2SDH}$ |
| **Holding Cost** | $H = i \cdot c + h$ |
| **% Savings** | $\frac{TC(Q_{\text{current}}) - TC(EOQ)}{TC(Q_{\text{current}})}$ |
| **Consolidation Savings** | $1 - \frac{1}{\sqrt{n}}$ |

---

## 1. The EOQ Problem: Repetitive Ordering

EOQ answers: **How much to order each time** to minimize total annual cost.

### Key Assumptions
- **Demand is deterministic and stationary** (known, constant rate)
- **Full batch delivery** — entire order arrives at once
- **No shortages** allowed
- Only **two relevant costs**: ordering cost ($S$) and holding cost ($H$)

### The Core Tradeoff

| Order Small & Often | Order Large & Rarely |
|---|---|
| ✅ Low holding costs | ✅ Low ordering costs |
| ❌ Many orders → high ordering costs | ❌ Lots of inventory → high holding costs |

> **Objective:** Minimize total relevant annual cost = ordering cost + holding cost.

---

## 2. Holding Cost Components

$$\boxed{H = i \cdot c + h}$$

| Component | Formula | Examples |
|---|---|---|
| **Financial** | $i \cdot c$ | Interest, opportunity cost of capital, taxes |
| **Physical** | $h$ | Warehousing, insurance, obsolescence, spoilage, theft |

### Example

**Hawaii Five-0:** $c = \$50$, $i = 15\%$, $h \approx 0$

$$H = 0.15 \times 50 + 0 = \$7.50/\text{unit/year}$$

> **Rule of thumb:** Many companies use **20-40%** of unit cost as total annual holding cost.

---

## 3. Total Relevant Cost and the EOQ Formula

### Total Cost Function

$$\boxed{TC(Q) = S \cdot \frac{D}{Q} + H \cdot \frac{Q}{2}}$$

| Component | Formula | Interpretation |
|---|---|---|
| **Ordering cost/year** | $S \cdot \frac{D}{Q}$ | $\frac{D}{Q}$ orders per year, each costing $S$ |
| **Holding cost/year** | $H \cdot \frac{Q}{2}$ | Average inventory = $\frac{Q}{2}$, each costs $H$/year |

### Why the Cost Curve is U-Shaped

- **Ordering cost** decreases as $Q$ increases (fewer orders)
- **Holding cost** increases as $Q$ increases (more inventory)
- **Minimum** occurs where the two curves cross

### The EOQ Formula

$$\boxed{EOQ = \sqrt{\frac{2SD}{H}}}$$

> **Critical property:** At EOQ, **ordering cost exactly equals holding cost**:
> $$S \cdot \frac{D}{EOQ} = H \cdot \frac{EOQ}{2}$$

### TC at EOQ (Shortcut)

$$TC(EOQ) = \sqrt{2SDH}$$

### Step-by-Step: "Given D, S, H → Find EOQ and TC"

1. **Identify:** $D$ (annual demand), $S$ (ordering cost), $H$ (holding cost)
2. **If H not given:** Calculate $H = i \cdot c + h$
3. **Calculate:** $EOQ = \sqrt{\frac{2SD}{H}}$
4. **Total cost:** $TC = \sqrt{2SDH}$ or compute both cost components
5. **Verify:** Ordering cost ≈ holding cost at EOQ ✓

---

## 4. EOQ Robustness — Why Being Wrong Is OK

The total cost curve is like a **wide, shallow bowl** — being off-center barely matters.

### Sensitivity Analysis

| Error in Q | Extra Cost |
|---|---|
| ±10% | ~0.5% extra |
| ±25% | ~2.5% extra |
| ±50% | ~6% extra |
| 2× EOQ | ~12.5% extra |

$$\% \text{ savings} = \frac{TC(Q_{\text{current}}) - TC(EOQ)}{TC(Q_{\text{current}})}$$

> **Key insight:** Being **25% wrong** only costs about **3% more**. Don't obsess over exact EOQ — round to convenient sizes (cases, pallets, truckloads).

> **Exam tip:** If asked "should they worry about Q being slightly off?" → **No**, the cost curve is flat near the minimum.

---

## 5. Consolidation Effect — Square-Root Economies of Scale

When multiple locations **merge demand**, EOQ creates savings through **√n scaling**.

### The Math

For $n$ identical locations, each with demand $D$:

- **Separate:** Total cost = $n \times \sqrt{2SDH}$
- **Combined:** Total cost = $\sqrt{2S(nD)H} = \sqrt{n} \times \sqrt{2SDH}$

$$\boxed{\% \text{ savings from consolidation} = 1 - \frac{1}{\sqrt{n}}}$$

### Savings Table

| Locations ($n$) | Combined EOQ | % Cost Savings |
|---|---|---|
| 2 → 1 | $\sqrt{2} \times$ individual | **29.3%** |
| 3 → 1 | $\sqrt{3} \times$ individual | **42.3%** |
| 4 → 1 | $2 \times$ individual | **50.0%** |
| 9 → 1 | $3 \times$ individual | **66.7%** |

> **Same √n scaling as newsvendor postponement** — universal principle of pooling.

### Cross-Reference
- **Final Review Q2d:** Retailer merger — 29.3% savings from 2 → 1
- **CC3:** Coffee maker 3-DC consolidation — 42.3% savings

---

## 6. Worked Examples

### Example 1: Hawaii Five-0 Photos (Classic)

**Given:** $D = 900$/yr, $S = \$10$, $c = \$50$, $i = 15\%$, $h = 0$, Current $Q = 75$

<details>
<summary><strong>Click for full solution</strong></summary>

**Step 1:** $H = 0.15 \times 50 = \$7.50$/unit/year

**Step 2:** Current TC at $Q = 75$:
$$TC(75) = 10 \times \frac{900}{75} + 7.50 \times \frac{75}{2} = \$120 + \$281.25 = \$401.25$$

> Holding (\$281) ≫ Ordering (\$120) → currently ordering too much!

**Step 3:** $EOQ = \sqrt{\frac{2 \times 10 \times 900}{7.50}} = \sqrt{2{,}400} = 49$ photos

**Step 4:** $TC(49) = 10 \times \frac{900}{49} + 7.50 \times \frac{49}{2} = \$184 + \$184 = \$368$

> At EOQ: Ordering cost = Holding cost = \$184 ✓

**Step 5:** Savings $= \frac{401.25 - 368}{401.25} = 8.3\%$

</details>

### Example 2: Retailer Shovel (Final Review Q2)

**Given:** $D = 22{,}500$/yr, $S = \$19.50$, $c = \$45.20$, $i = 17\%$, $h = 0$, Current $Q = 500$

<details>
<summary><strong>Click for full solution</strong></summary>

**a) EOQ:**

$H = 0.17 \times 45.20 = \$7.684$/unit/year

$EOQ = \sqrt{\frac{2 \times 19.50 \times 22{,}500}{7.684}} = \sqrt{114{,}217} = 338$ units

**b) TC at EOQ:**

$TC(338) = \sqrt{2 \times 19.50 \times 22{,}500 \times 7.684} = \$2{,}593$

**c) Savings vs. current Q = 500:**

$TC(500) = 19.50 \times \frac{22{,}500}{500} + 7.684 \times \frac{500}{2} = \$877.50 + \$1{,}921 = \$2{,}798.50$

Savings = $\$2{,}798.50 - \$2{,}593 = \$205.50$

**d) Consolidation (2 stores merged):**

Combined $D = 45{,}000$. New $EOQ = 338 \times \sqrt{2} = 478$

Savings $= 1 - \frac{1}{\sqrt{2}} = 29.3\%$

</details>

### Example 3: Bicycle Frames

**Given:** $D = 5{,}000$/yr, $S = \$10{,}000$, $c = \$1{,}000$, $i = 15\%$, $h = \$100$

<details>
<summary><strong>Click for full solution</strong></summary>

$H = 0.15 \times 1{,}000 + 100 = \$250$/unit/year

$EOQ = \sqrt{\frac{2 \times 10{,}000 \times 5{,}000}{250}} = \sqrt{400{,}000} = 632$ frames

$TC(632) = 10{,}000 \times \frac{5{,}000}{632} + 250 \times \frac{632}{2} = \$79{,}114 + \$79{,}000 = \$158{,}114$

> High setup cost (\$10K) → large batch size. Analogous to setup times in process analysis.

</details>

### Example 4: Coffee Maker — Single DC + Consolidation

**Given (per DC):** $D = 7{,}800$/yr, $S = \$22$, $c = \$35$, $i = 18\%$, Current $Q = 325$

<details>
<summary><strong>Click for full solution</strong></summary>

**Single DC:**

$H = 0.18 \times 35 = \$6.30$/unit/year

$EOQ = \sqrt{\frac{2 \times 22 \times 7{,}800}{6.30}} = 234$ units

$TC(234) = \$733 + \$737 = \$1{,}470$

**3 DCs consolidated:**

Combined $D = 23{,}400$

$EOQ_{\text{combined}} = \sqrt{3} \times 234 = 405$ units

$TC_{\text{combined}} = \$2{,}547$

3 separate: $3 \times \$1{,}470 = \$4{,}410$

**Savings = 42.3%** ($= 1 - 1/\sqrt{3}$)

</details>

---

## 7. Key Insights for Exam

1. **At EOQ, ordering cost = holding cost** — always verify
2. **U-shaped cost curve** — minimum where two costs cross
3. **Robustness:** 25% error → only 3% extra cost
4. **Consolidation:** savings $= 1 - 1/\sqrt{n}$ — square-root scaling
5. **Setup cost S is the monetary equivalent of setup time** — connects process analysis to inventory
6. **EOQ assumes deterministic demand** — for uncertain demand, use newsvendor

---

## 8. Concept Cross-Reference Map

| Concept | Tested On | Related To |
|---|---|---|
| C50 — EOQ | CC3, Final | C51, C52, C53, C54 |
| C51 — Total Relevant Cost | CC3, Final | C52 |
| C52 — Holding Cost (H) | CC3 | C51 |
| C53 — Robustness/Savings | Final | C51 |
| C54 — Consolidation Effect | Final | C66 (Postponement — same √n) |
| C08 — Setup Time | Midterm | C50 (S = monetary setup cost) |
| P01 — Setups | CC1, Midterm, CC3 | C08, C50 |

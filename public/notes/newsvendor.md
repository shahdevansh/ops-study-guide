# Newsvendor Model — Complete Study Guide

> **MBA 204 Operations | Class 10 | Module C**
> **Priority: HIGH** — Most-tested quantitative topic on CC4 and Final

---

## 📋 Quick Reference Card

| Parameter | Formula |
|---|---|
| **Critical Fractile** | $p_c = \frac{C_u}{C_u + C_o}$ |
| **Optimal Order Qty** | $Q^* = \text{NORM.INV}(p_c, \mu, \sigma)$ |
| **Z-Score Method** | $Q^* = \mu + z^* \cdot \sigma$ where $z^* = \text{NORM.S.INV}(p_c)$ |
| **Service Level** | $\text{NORM.DIST}(Q, \mu, \sigma, \text{TRUE})$ |
| **Underage Cost** | $C_u = \text{Price} - \text{Cost}$ |
| **Overage Cost** | $C_o = \text{Cost} - \text{Salvage}$ |
| **Postponement** | $\sigma_{\text{total}} = \sigma \times \sqrt{n}$ |

---

## 1. The Newsvendor Problem

The newsvendor model applies whenever **three conditions** hold simultaneously:

1. **One product, one selling season** — a single ordering opportunity
2. **Demand is uncertain** — you don't know how much customers will want
3. **"Too much–too little" challenge** — excess = waste, shortage = lost profit

### Core Tradeoff

| Order Too Much | Order Too Few |
|---|---|
| Leftover inventory at salvage value | Lost sales and missed profit |
| Incur **overage cost** ($C_o$) | Incur **underage cost** ($C_u$) |

> **The ordering decision must be made *before* the selling season.** Objective: maximize expected profit.

### Where It Applies
- Newspapers, fashion, seasonal products, fresh produce
- New product launches, airline seats, event tickets
- **Any one-shot decision** under demand uncertainty

### Newsvendor vs. EOQ — Don't Confuse Them!

| Feature | EOQ | Newsvendor |
|---|---|---|
| Demand | Deterministic (known) | Uncertain (random) |
| Ordering | Repetitive (ongoing) | One-shot (single season) |
| Key tradeoff | Ordering cost vs. holding cost | Overage vs. underage cost |
| Formula | $EOQ = \sqrt{\frac{2SD}{H}}$ | $Q^* = \text{NORM.INV}(p_c, \mu, \sigma)$ |

---

## 2. Critical Fractile — The Heart of the Model

The critical fractile tells you the **optimal service level**: the probability that you should be able to satisfy all demand.

### Cost Definitions

$$C_u = \text{Price} - \text{Cost} \quad \text{(underage: profit lost per unmet unit)}$$

$$C_o = \text{Cost} - \text{Salvage Value} \quad \text{(overage: loss per unsold unit)}$$

### The Formula

$$\boxed{p_c = \frac{C_u}{C_u + C_o}}$$

### Intuition

> "Should I stock one more unit?" Stock it **only if** the probability of selling it outweighs the probability of being stuck with it.

Formally: buy one more unit if $(1 - p(n)) \cdot C_u - p(n) \cdot C_o \geq 0$

### What Drives the Critical Fractile

| Scenario | $p_c$ | Strategy |
|---|---|---|
| High margin ($C_u \gg C_o$) | Close to 1.0 | Stock aggressively — lost sales are expensive |
| Equal costs ($C_u = C_o$) | 0.50 | Stock at mean demand |
| Low margin ($C_u \ll C_o$) | Close to 0 | Stock conservatively — overage dominates |
| Zero salvage ($C_o = \text{Cost}$) | $= \text{Profit margin \%}$ | Even more conservative (BrightSide case) |

### Cross-References
- **Tested on:** CC4 (BrightSide), Final Review Q3 (Bookstore World Cup)
- **Builds into:** C64 (Service Level), C65 (Normal Distribution application)

---

## 3. Finding the Optimal Order Quantity

### Step-by-Step Procedure

> **Given: Price, Cost, Salvage, μ, σ → Find Q***

1. **Calculate costs:**
   - $C_u = \text{Price} - \text{Cost}$
   - $C_o = \text{Cost} - \text{Salvage}$

2. **Calculate critical fractile:**
   - $p_c = \frac{C_u}{C_u + C_o}$

3. **Find optimal Q:**
   - $Q^* = \text{NORM.INV}(p_c, \mu, \sigma)$

4. **Verify:** Service level at $Q^*$ should equal $p_c$
   - $\text{NORM.DIST}(Q^*, \mu, \sigma, \text{TRUE}) = p_c$ ✓

### Alternative: Z-Score Method

$$z^* = \text{NORM.S.INV}(p_c)$$
$$Q^* = \mu + z^* \cdot \sigma$$

### Excel Functions Reference

| Function | Purpose | Example |
|---|---|---|
| `NORM.INV(p, μ, σ)` | Probability → Q | `NORM.INV(0.675, 180, 65)` = 210 |
| `NORM.DIST(Q, μ, σ, TRUE)` | Q → Service level | `NORM.DIST(210, 180, 65, TRUE)` = 0.675 |
| `NORM.S.INV(p)` | Probability → z-score | `NORM.S.INV(0.675)` = 0.454 |
| `NORM.S.DIST(z, TRUE)` | z-score → Probability | `NORM.S.DIST(0.454, TRUE)` = 0.675 |

---

## 4. Service Level Curve Shape

As service level approaches 100%, order quantity increases **exponentially** (convex curve).

| Service Level Increase | Additional Inventory | Incremental Cost |
|---|---|---|
| 50% → 60% | Small | Low |
| 80% → 90% | Moderate | Medium |
| 90% → 95% | ~20% more | High |
| 95% → 99% | ~100% more | Very High |
| 99% → 99.9% | Massive | Astronomical |

> **Think of climbing a cliff.** The first 80% is a gentle slope. The last 5% is a vertical wall.

**Business implications:**
- 100% service is virtually impossible and prohibitively expensive
- Even Amazon doesn't guarantee 100% availability
- The optimal service level (= $p_c$) balances marginal cost vs. marginal benefit

> **Exam tip:** If asked to sketch the curve, draw a **convex curve** getting steeper as it approaches 100%.

**Cross-Reference:** Final Review Q3d explicitly asks to sketch and explain this curve.

---

## 5. Postponement / Delayed Customization

**Core idea:** Hold a generic "vanilla box" and customize only *after* demand is known.

### Risk Pooling Formula

For $n$ independent product variants, each with standard deviation $\sigma$:

$$\sigma_{\text{total}} = \sigma \times \sqrt{n}$$

This is **much less** than $n \times \sigma$ (stocking each variant separately).

### Printer Example

| Strategy | Uncertainty | Calculation |
|---|---|---|
| 5 country-specific models | $5 \times 4{,}000 = 20{,}000$ total σ | High |
| 1 vanilla box | $4{,}000 \times \sqrt{5} = 8{,}944$ σ | **55% less** |

### When to Use Postponement

| Good Fit | Poor Fit |
|---|---|
| High variety (many SKUs) | Low variety |
| Independent demand across variants | Correlated demand |
| Quick customization possible | Long customization lead time |
| Common platform across variants | Fundamentally different products |

> **Same √n scaling as EOQ consolidation** — a universal principle of pooling.

---

## 6. Revenue Management — Newsvendor for Airlines

| Segment | Fare | Demand | Timing |
|---|---|---|---|
| Leisure | Low (discounted) | Abundant | Book early |
| Business | High (unrestricted) | Uncertain (normal) | Book late |

**Newsvendor connection:**
- "Product" = seats reserved for high-fare passengers
- $C_u = \text{High fare} - \text{Low fare}$
- $C_o = \text{High fare}$ (empty seat if no high-fare demand)

$$p_c = \frac{\text{High Fare} - \text{Low Fare}}{\text{High Fare}}$$

---

## 7. Worked Examples

### Example 1: Tuxedo Manufacturing (Classic)

**Given:** $\mu = 500$, $\sigma = 175$, Price = \$750, Cost = \$400, Salvage = \$200

<details>
<summary><strong>Click for full solution</strong></summary>

**Step 1:** $C_o = 400 - 200 = \$200$, $C_u = 750 - 400 = \$350$

**Step 2:** $p_c = \frac{350}{350 + 200} = 0.6364$

**Step 3:** $Q^* = \text{NORM.INV}(0.6364, 500, 175) = 561$ units

**Alternatively:** $z^* = 0.35$, so $Q^* = 500 + 0.35 \times 175 = 561$

**Interpretation:** Produce 561 tuxedos. Accept 36.4% stockout probability because the high profit margin justifies the overage risk.

</details>

### Example 2: Bookstore — Soccer World Cup (Final Review Q3)

**Given:** $\mu = 180$, $\sigma = 65$, Price = \$50, Cost = \$23, Salvage = \$10

<details>
<summary><strong>Click for full solution</strong></summary>

**a) How many books?**

$C_u = 50 - 23 = \$27$, $C_o = 23 - 10 = \$13$

$p_c = \frac{27}{27 + 13} = \frac{27}{40} = 0.675$

$z^* = \text{NORM.S.INV}(0.675) \approx 0.454$

$Q^* = 180 + 0.454 \times 65 = 210$ books

**b) Probability of stockout at Q*?**

$1 - p_c = 1 - 0.675 = 32.5\%$

**c) Service level at Q = 190?**

$z = \frac{190 - 180}{65} = 0.154$

$\text{NORM.DIST}(190, 180, 65, \text{TRUE}) = 56.1\%$

**d) Service level curve:** Convex (exponential) shape — gets exponentially steeper approaching 100%.

</details>

### Example 3: Printer Distribution

**Given:** $\mu = 10{,}000$, $\sigma = 4{,}000$, Price = \$1,000, Cost = \$625, Salvage = \$450

<details>
<summary><strong>Click for full solution</strong></summary>

$C_o = 625 - 450 = \$175$, $C_u = 1{,}000 - 625 = \$375$

$p_c = \frac{375}{375 + 175} = 0.6818$

$Q^* = \text{NORM.INV}(0.6818, 10{,}000, 4{,}000) = 11{,}891$ units

Note: $Q^* > \mu$ because $p_c > 0.5$ — high profit margin justifies stocking above average.

</details>

### Example 4: Ski Parka (Product A)

**Given:** $\mu = 1{,}017$, $\sigma = 388$, Price = \$153, Cost = \$110, Salvage = \$88

<details>
<summary><strong>Click for full solution</strong></summary>

$C_o = 110 - 88 = \$22$, $C_u = 153 - 110 = \$43$

$p_c = \frac{43}{43 + 22} = 0.6615$

$Q^* = \text{NORM.INV}(0.6615, 1017, 388) = 1{,}179$ units

Service level = 66.2%. For 90% service: $Q = \text{NORM.INV}(0.90, 1017, 388) = 1{,}514$ (335 more units for 24% more service).

</details>

---

## 8. Key Insights for Exam

1. **At Q*, service level = critical fractile** — always verify this
2. **Higher margins → higher pc → stock more** aggressively
3. **Higher variability → higher Q*** (when $p_c > 0.5$)
4. **Zero salvage → pc = profit margin %** (BrightSide case)
5. **100% service is exponentially expensive** — convex curve shape
6. **Postponement uses √n pooling** — same principle as EOQ consolidation
7. **Revenue management is newsvendor for capacity** — airlines, hotels

---

## 9. Concept Cross-Reference Map

| Concept | Tested On | Related To |
|---|---|---|
| C60 — Newsvendor Model | CC4, Final | C61, C62, C63, C64, C65 |
| C61 — Critical Fractile | CC4, Final | C62, C63, C64 |
| C62 — Overage Cost | CC4 | C63 |
| C63 — Underage Cost | CC4 | C62 |
| C64 — Service Level | CC4, Final | C61, C65, C67 |
| C65 — Normal Distribution | CC4, Final | C64 |
| C66 — Postponement | — | C54 (EOQ Consolidation) |
| C67 — Service Level Curve | Final | C64 |
| C69 — Revenue Management | — | C60 |

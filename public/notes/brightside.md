# BrightSide Produce

**Module:** C | **Priority:** HIGH | **Key Question:** How do we allocate limited supply fairly across customers?

---

## 📋 Overview

BrightSide Produce tackles 'food deserts' - neighborhoods where fresh, healthy food is hard to find. This case shows newsvendor in action with a twist: fresh produce has zero salvage value (if it doesn't sell, it's worthless), and with limited supply, you must allocate inventory fairly across stores. Instead of maximizing profit, BrightSide aims for equal service levels - meaning bigger stores get proportionally more inventory, but all stores have the same probability of having what customers want.

**Prerequisites:** newsvendor

---

## 📖 Core Concepts

### 1. Newsvendor with Zero Salvage Value (C68)

**Concepts:** C68

For **fresh produce** that spoils if unsold, the salvage value is **zero**. This simplifies the newsvendor formulas:

#### Cost Structure

| Cost | General Formula | With Zero Salvage |
|---|---|---|
| **Overage ($C_o$)** | $C_o = \text{Cost} - \text{Salvage}$ | $C_o = \text{Cost} - 0 = \text{Cost}$ |
| **Underage ($C_u$)** | $C_u = \text{Price} - \text{Cost}$ | $C_u = \text{Price} - \text{Cost}$ |

#### Simplified Critical Fractile

$$p_c = \frac{C_u}{C_u + C_o} = \frac{\text{Price} - \text{Cost}}{\text{Price} - \text{Cost} + \text{Cost}} = \frac{\text{Price} - \text{Cost}}{\text{Price}}$$

> **With zero salvage, the critical fractile equals the profit margin percentage!**

#### Example: Avocados

- Cost: $\$1.50$, Price: $\$2.00$, Salvage: $\$0$
- $C_o = \$1.50$, $C_u = \$0.50$
- $p_c = \frac{0.50}{0.50 + 1.50} = \frac{0.50}{2.00} = 0.25 = 25\%$

> **Interpretation:** Only stock to the 25th percentile of demand! With low margins and zero salvage, you should be **conservative** — it's better to run out than to waste expensive produce.

> **Key Insight:** Zero salvage value makes the critical fractile **lower** (more conservative ordering) and more **sensitive to cost structure**. Small changes in margin have big effects on optimal stocking.

**Cross-references:**
- ← Prerequisite: C60 (Newsvendor Model) — the general framework being specialized, C61 (Critical Fractile) — simplified to profit margin when salvage = 0
- 📝 Exam: CC4: BrightSide Produce — all 11 products have zero salvage, Final Review Q3: Compare with non-zero salvage (bookstore has $10 salvage)

---

### 2. Service Level Analysis (C64, C65)

**Concepts:** C64, C65

#### Checking Current Service Levels

For any current order quantity $Q$:

$$\text{Service Level} = \text{NORM.DIST}(Q, \mu, \sigma, \text{TRUE})$$

#### Finding Order Quantities for Target Service Levels

To achieve a specific service level (e.g., 95%):

$$Q = \text{NORM.INV}(0.95, \mu, \sigma)$$

#### Worked Example

**Avocados:** $\mu = 210.35$, $\sigma = 37.32$

| Scenario | Formula | Result |
|---|---|---|
| Current Q = 200 | $\text{NORM.DIST}(200, 210.35, 37.32, \text{TRUE})$ | 39.1% service |
| Optimal Q (25% pc) | $\text{NORM.INV}(0.25, 210.35, 37.32)$ | 185 units |
| 95% service target | $\text{NORM.INV}(0.95, 210.35, 37.32)$ | 272 units |

#### The BrightSide Tension

| Goal | Implication |
|---|---|
| **Availability** (high service) | Stock more → higher costs, more waste |
| **Accessibility** (reach more stores) | Spread inventory thin → lower per-store service |
| **Affordability** (low prices) | Low margins → low critical fractile → stock less |
| **Financial sustainability** | Can't waste too much produce → conservative ordering |

> **Key Insight:** BrightSide faces a multi-objective problem — the profit-maximizing newsvendor solution may not serve the **social mission** of getting healthy food to underserved communities.

**Cross-references:**
- ← Prerequisite: C65 (Normal Distribution) — NORM.DIST and NORM.INV functions, C64 (Service Level) — the probability being calculated
- → Builds into: C67 (Service Level Curve Shape) — why high service levels are exponentially expensive
- 📝 Exam: CC4: Calculate service levels for current order quantities, CC4: Find order quantities for 95% service target

---

### 3. Allocating Limited Inventory (C68)

**Concepts:** C68

When total optimal demand **exceeds** available inventory, how do you allocate fairly?

#### Setup
- **Available inventory:** 165 units
- **Total optimal demand:** 258 units
- **Problem:** Not enough for everyone's optimal order

#### Approach 1: Proportional Scaling (Simple but Unfair)

Scale each store's order proportionally:

$$Q_i^{\text{scaled}} = Q_i^{\text{optimal}} \times \frac{\text{Available}}{\text{Total Optimal}} = Q_i^{\text{optimal}} \times \frac{165}{258}$$

**Example:** TJ's optimal = 20 → scaled = $20 \times \frac{165}{258} = 12.79$

**Problem:** Different stores end up with **different service levels**:
$$\text{Service Level}_{\text{TJ's}} = \text{NORM.DIST}(12.79, 14.9, 3.8, \text{TRUE}) = 29\%$$

> Proportional scaling gives **bigger stores better service** — not equitable!

#### Approach 2: Common Service Level (Fair — Use Goal Seek)

Find a **single service level** $p$ such that the sum of all stores' quantities equals available inventory:

$$\sum_{i=1}^{n} \text{NORM.INV}(p, \mu_i, \sigma_i) = 165$$

**Method:** Use Excel **Goal Seek** to vary $p$ until the constraint is satisfied.

**Result:** All stores get the **same probability** of meeting demand — more equitable.

#### Why Equal Service Levels Matter

| Proportional Scaling | Common Service Level |
|---|---|
| Larger stores get higher service | All stores get same service |
| Small stores underserved | Equitable across communities |
| Simpler calculation | Requires Goal Seek/Solver |
| ❌ Not fair | ✅ Fair |

**Cross-references:**
- ← Prerequisite: C64 (Service Level) — what's being equalized, C65 (Normal Distribution) — NORM.INV for each store
- 📝 Exam: CC4: Full allocation problem with Goal Seek, CC4: Compare proportional vs. common service level approaches

---

### 4. Food Deserts and Social Impact (C68)

**Concepts:** C68

#### What Are Food Deserts?

**Food deserts** are neighborhoods (typically low-income, often minority communities) where residents lack access to **fresh, healthy, affordable food**. The nearest grocery store may be miles away, and available options are limited to convenience stores with processed food.

#### BrightSide's Mission

BrightSide distributes fresh produce to underserved areas, balancing:

| Business Need | Social Need |
|---|---|
| Financial sustainability | Availability of healthy food |
| Minimize waste (perishable goods) | Accessibility for all communities |
| Cover operating costs | Affordability for low-income families |

#### The Operations Connection

> **Operations decisions have social impact beyond financial metrics.** The choice of:
> - **How much to stock** → determines availability
> - **Where to allocate** → determines which communities get served
> - **What service level to target** → determines equity vs. efficiency
> - **What prices to set** → determines the critical fractile and ordering behavior

#### Brainstorm Solutions
- Partner with food banks for unsold produce (non-zero salvage → changes critical fractile)
- Dynamic pricing to reduce waste
- Better demand forecasting from community engagement
- Multiple smaller deliveries vs. one large one
- Community-supported agriculture (CSA) pre-orders to reduce uncertainty

**Cross-references:**
- ← Prerequisite: C60 (Newsvendor Model) — quantitative framework for BrightSide decisions
- 📝 Exam: CC4: BrightSide case discussion — social impact of operations decisions

---

## 🔢 Formulas

| Formula | Expression | Variables |
|---------|-----------|-----------|
| **Critical Fractile (Zero Salvage)** | $$p_c = \frac{\text{Price} - \text{Cost}}{\text{Price}}$$ | Price: selling price, Cost: purchase cost |
| **Service Level Calculation** | $$\text{Service Level} = \text{NORM.DIST}(Q, \mu, \sigma, \text{TRUE})$$ | Q: order quantity, μ: mean, σ: std dev |
| **Target Order Quantity** | $$Q = \text{NORM.INV}(\text{target service level}, \mu, \sigma)$$ | Target service level: e.g., 0.95 for 95% |

---

## 📝 Practice Problems

### Problem 1: Optimal Order Quantities
**Source:** Concept Check #4 BrightSide Produce | **Concepts:** C60, C68

What are BrightSide's **optimal order quantities and service levels** for each of the 11 items in Table 1 using the newsvendor model?

*Assume demand is normally distributed for all items and salvage value = $0.*

<details>
<summary>Show Solution</summary>

**For each product:**

1. **Calculate critical fractile:**
$$p_c = \frac{\text{Price} - \text{Cost}}{\text{Price}} = \text{Profit Margin \%}$$

2. **Find optimal order quantity:**
$$Q^* = \text{NORM.INV}(p_c, \mu, \sigma)$$

3. **Verify service level:**
$$\text{NORM.DIST}(Q^*, \mu, \sigma, \text{TRUE}) = p_c \checkmark$$

> **Note:** With zero salvage, products with **low margins** will have low critical fractiles → stock **below mean demand**. Products with **high margins** stock closer to or above the mean.

</details>

---

### Problem 2: Current Service Levels
**Source:** Concept Check #4 BrightSide Produce | **Concepts:** C64, C65

What are the **service levels** for BrightSide's **current** order quantities?

<details>
<summary>Show Solution</summary>

For each product, apply:

$$\text{Service Level} = \text{NORM.DIST}(Q_{\text{current}}, \mu, \sigma, \text{TRUE})$$

> **Expected Finding:** Current service levels likely **differ across products** — some overstocked (high service, high waste), some understocked (low service, lost sales). The newsvendor model would equalize the **marginal economics** across all products.

</details>

---

### Problem 3: 95% Service Target
**Source:** Concept Check #4 BrightSide Produce | **Concepts:** C64, C65

What order quantities would BrightSide need to achieve a **95% service level** for all products?

<details>
<summary>Show Solution</summary>

For each product:

$$Q_{95\%} = \text{NORM.INV}(0.95, \mu, \sigma)$$

**Example — Avocados:** $\mu = 210.35$, $\sigma = 37.32$

$$Q = \text{NORM.INV}(0.95, 210.35, 37.32) = 272 \text{ units}$$

> **Important:** 95% service level ≫ optimal critical fractile for most produce items. This means **significantly more waste** but near-guaranteed availability. The question is whether BrightSide's social mission justifies the extra cost.

</details>

---

### Problem 4: Limited Inventory Allocation
**Source:** BrightSide Produce After Class Handouts | **Concepts:** C68

BrightSide has only **165 units** of a product available, but total optimal demand across stores is **258 units**.

**How should they allocate? Compare proportional scaling vs. common service level.**

<details>
<summary>Show Solution</summary>

#### Approach 1: Proportional Scaling

Each store gets: $Q_i = Q_i^{\text{optimal}} \times \frac{165}{258} = Q_i^{\text{optimal}} \times 0.640$

**Example:** TJ's optimal = 20 → $Q = 20 \times 0.640 = 12.79$

Service level: $\text{NORM.DIST}(12.79, 14.9, 3.8, \text{TRUE}) = 29\%$

**Problem:** Different stores get different service levels — not equitable.

#### Approach 2: Common Service Level (Goal Seek)

**Step 1:** Set up Excel with all stores' $\mu_i$ and $\sigma_i$

**Step 2:** Create a cell for "common service level" $p$

**Step 3:** For each store: $Q_i = \text{NORM.INV}(p, \mu_i, \sigma_i)$

**Step 4:** Sum all $Q_i$ values

**Step 5:** Use **Goal Seek**: set Sum = 165 by changing $p$

**Result:** All stores achieve the **same service level** — fair allocation.

> **Verdict:** Common service level is more equitable and aligns with BrightSide's mission of serving all communities equally.

</details>

---

## 🔗 Connections

**Related Lectures:**
- Newsvendor — the foundational framework BrightSide applies

**Exam Appearances:**
- CC4: Complete BrightSide analysis with zero salvage value
- Final Review Q3: Contrast with non-zero salvage scenarios

**Excel Templates:**
- newsvendor.xlsx (adapted for zero salvage value)
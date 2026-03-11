# Beer Game & Bullwhip Effect

**Module:** C | **Priority:** HIGH | **Key Question:** Why does order variability amplify as we move up the supply chain from consumers to suppliers?

---

## 📋 Overview

The bullwhip effect shows how small changes in consumer demand can create massive swings in orders upstream in the supply chain. Like the telephone game but with orders - a 10% demand increase at retail becomes a 40% order increase at the manufacturer. Through the eBeer game simulation, you'll experience firsthand how reasonable local decisions create system-wide chaos, and learn the information sharing and coordination strategies that can tame the bullwhip.

**Prerequisites:** processes-1-kristens, queueing

---

## 📖 Core Concepts

### 1. The Bullwhip Effect Phenomenon (C40)

**Concepts:** C40

**Definition:** Order variability **amplifies** as you move **upstream** in the supply chain — from consumers to retailers to distributors to manufacturers to suppliers.

> **The telephone game, but with orders.** A small demand signal gets distorted and magnified at every link in the chain.

#### How It Works

| Supply Chain Level | Demand Signal | Order Variability |
|---|---|---|
| **Consumer** | +10% increase | Baseline |
| **Retailer** | Sees +10%, orders +15% | 1.5× amplification |
| **Distributor** | Sees +15%, orders +25% | 2.5× amplification |
| **Manufacturer** | Sees +25%, orders +40% | 4× amplification |

#### Beer Game Evidence

In the eBeer Game simulation, typical inventory patterns show:
- **Retail:** Relatively stable inventory (±small swings)
- **Distributor:** Moderate swings
- **Wholesaler:** Large swings
- **Factory:** Massive swings — inventory can reach **50,000 units** while retail stays stable

> **Key Insight:** Demand information is **distorted** — upstream decision makers **do not see the true picture of demand**. Each player acts rationally with local information, but the system-wide result is chaos.

**Cross-references:**
- ← Prerequisite: P03 (Uncertainty & Variability) — variability as a fundamental operations challenge
- → Builds into: C41 (Causes of Bullwhip) — understanding WHY amplification occurs, C42 (Counter-Strategies) — how to fight it
- 📝 Exam: Final Review S2a: 'What supply chain problem was evident for functional products like beer in the eBeer game?'

---

### 2. Real-World Examples (C40)

**Concepts:** C40

#### COVID Toilet Paper Crisis (2020–2021)

| Timeline | What Happened |
|---|---|
| **April 2020** | *"Americans Have Too Much Toilet Paper. Finally, Sales Slow."* |
| **April 2021** | *"Tissue sales fall to below prepandemic levels as consumers work through stockpiles."* |

**Pattern:** Small consumer panic → massive retailer orders → manufacturer overproduction → glut → orders crash to zero.

#### Semiconductor Chip Shortage → Glut (2020–2023)

> *"Once-Thin Chip Inventories Swell as Gadget Sales Falter. The world is now awash in chips. The oversupply marks a sharp turnaround from a global shortage during two years of supercharged demand."*

**Pattern:** COVID demand spike → everyone double-orders → manufacturers build capacity → demand normalizes → massive oversupply.

> **The bullwhip effect is evident in many industries and can generate significant costs** — from wasted inventory to unnecessary capacity investments to lost sales.

**Cross-references:**
- ← Prerequisite: C40 (Bullwhip Effect) — the phenomenon these examples illustrate
- → Builds into: C41 (Causes) — these examples demonstrate specific causes like shortage gaming and over-reactive ordering
- 📝 Exam: Final Review S2a: Real-world examples of bullwhip in functional products

---

### 3. Four Root Causes of Bullwhip (C41)

**Concepts:** C41

#### 1. Over-Reactive Ordering & Information Delays
- **Over-reaction to backlogs** — seeing a spike and panicking
- **Lack of communication** between supply chain partners
- **Delay times** for information and delivery of materials
- **Neglecting to order based on inventory position** — ordering based on fear, not facts

#### 2. Price Variations (Trade Promotions)
- **"High-low" pricing** and trade promotions encourage **forward buying**
- Retailers buy extra during promotions → huge order spike → then buy nothing for weeks
- Creates artificial demand variability even when **consumption is steady**

#### 3. Shortage Gaming (Rationing & Phantom Orders)
- When shortages are expected, retailers **inflate orders** to secure better allocations
- Place **"phantom orders"** — ordering more than they actually need
- Manufacturer sees inflated demand → overinvests in capacity → orders get cancelled

#### 4. Unrestricted Order Sizes
- No limits on how much a retailer can order in a period
- Enables wild swings in order quantities
- No penalties for order cancellations

#### Cause → Effect → Counter-Strategy Map

| Root Cause | Effect | Counter-Strategy |
|---|---|---|
| Over-reactive ordering | Amplified signals | Share demand info (S&OP, CPFR) |
| Trade promotions | Forward buying spikes | Everyday Low Pricing (EDLP) |
| Shortage gaming | Phantom orders | Allocation based on history, penalize cancellations |
| Unrestricted orders | Wild swings | Limit order sizes, cap % increases |

**Cross-references:**
- ← Prerequisite: C40 (Bullwhip Effect) — the phenomenon being explained
- → Builds into: C42 (Counter-Strategies) — each cause has specific counter-strategies
- 📝 Exam: Final Review S2a: 'What strategies and tools can be used to improve functional product supply chains?'

---

### 4. Information Sharing Solutions — Internal (S&OP) (C43)

**Concepts:** C43

**S&OP = Internal information sharing** through regular cross-functional meetings.

#### How It Works

- **Weekly meetings** with Sales, Operations, Finance, Supply Chain
- Share information about **promotions, capacity, inventory, production plans**
- Like having a **family meeting** every week where parents (Sales and Operations) share what they know and plan together

#### What Gets Shared

| Function | Shares |
|---|---|
| **Sales** | Upcoming promotions, demand forecasts, customer feedback |
| **Operations** | Capacity constraints, production schedules |
| **Finance** | Budget impacts, cost targets |
| **Supply Chain** | Inventory levels, supplier lead times |

> **Key Insight:** S&OP breaks down internal silos. When Sales knows about capacity constraints and Operations knows about upcoming promotions, better decisions happen.

**Cross-references:**
- ← Prerequisite: C42 (Counter-Strategies) — S&OP is one of the key counter-strategies
- → Builds into: C44 (CPFR) — extends S&OP principles across company boundaries
- 📝 Exam: Final Review S2a: S&OP as internal information sharing strategy

---

### 5. Information Sharing Solutions — External (CPFR) (C44)

**Concepts:** C44

**CPFR = S&OP but between companies.** Supply chain partners share forecasts and coordinate plans.

#### How It Works

- Partners share information about **promotions, capacity, inventory, production plans**
- Forecasts that differ by >10% trigger **email or meeting to resolve**
- **Walmart and Procter & Gamble** sitting down together and sharing forecasts

#### S&OP vs. CPFR

| Feature | S&OP | CPFR |
|---|---|---|
| Scope | Internal (within company) | External (across companies) |
| Participants | Sales, Ops, Finance | Buyer + Supplier teams |
| Data shared | Internal plans | Cross-company forecasts |
| Trust required | Moderate | High |
| Implementation difficulty | Medium | Hard |

> **Key Insight:** CPFR is more powerful but harder to implement. It requires **trust between competitors** and willingness to share sensitive data.

**Cross-references:**
- ← Prerequisite: C43 (S&OP) — CPFR extends S&OP externally
- → Builds into: C45 (VMI) — the next level beyond CPFR, where the supplier takes over ordering
- 📝 Exam: Final Review S2a: CPFR as external information sharing strategy

---

### 6. Vendor Managed Inventory (VMI) (C45)

**Concepts:** C45

**VMI = Same as CPFR, but the vendor takes over the ordering decision entirely.**

#### How It Works

1. Customer shares **daily or weekly POS (point-of-sale) data** with supplier
2. Supplier **monitors customer's inventory levels**
3. Supplier **decides when and how much to replenish**
4. Customer **no longer places orders**

> **Analogy:** Like having your grocery supplier stock your pantry directly. Instead of *you* deciding when to order more cereal, the cereal company monitors your pantry and automatically delivers when you're running low.

#### Why VMI Crushes Bullwhip

- **Eliminates the retailer's ordering decision** entirely
- Supplier sees **real consumption data**, not distorted order signals
- No panic ordering, no phantom demand, no amplification
- Breaks the chain of information distortion at its source

#### Progression of Coordination

| Level | Who Orders | Info Shared | Bullwhip Reduction |
|---|---|---|---|
| **No coordination** | Each level independently | None | ❌ Maximum bullwhip |
| **S&OP** | Each level, but informed | Internal plans | ⚠️ Moderate |
| **CPFR** | Each level, coordinated | Cross-company forecasts | ✅ Significant |
| **VMI** | Supplier orders for customer | Real-time POS data | ✅✅ Maximum |

**Cross-references:**
- ← Prerequisite: C44 (CPFR) — VMI goes beyond CPFR by transferring the ordering decision
- 📝 Exam: Final Review S2a: VMI as the most advanced counter-strategy

---

### 7. Complete Counter-Strategy Framework (C42)

**Concepts:** C42

#### Information Sharing Strategies
- **S&OP** — internal cross-functional planning
- **CPFR** — external planning with supply chain partners
- **VMI** — supplier manages customer's inventory
- **Share demand/sell-through data** — so upstream sees real consumption

#### Pricing Strategies
- **Everyday Low Pricing (EDLP)** — eliminates forward buying from promotions
- **Discount based on sell-through** (not sell-into) — rewards actual sales, not loading the channel

#### Order Management Strategies
- **Orders based on inventory position** — rational, data-driven ordering
- **Limit order sizes** — cap maximum order per period
- **Limit percent increase in orders** — prevent sudden spikes
- **Penalize cancelled orders** — discourage phantom ordering

#### Allocation Strategies
- **Restructure allocation rules** — base on loyalty, historical sales (not current order size)
- Removes incentive for shortage gaming

> **Key Insight:** The counter-strategies directly attack each of the four root causes. **Information sharing** attacks over-reaction and delays. **EDLP** attacks trade promotions. **Allocation rules and penalties** attack shortage gaming. **Order limits** attack unrestricted ordering.

> **Implementation reality:** The benefits of coordination look obvious, but implementation is difficult. It requires **buy-in from multiple functions AND multiple firms**.

**Cross-references:**
- ← Prerequisite: C41 (Causes of Bullwhip) — counter-strategies map to specific causes
- → Builds into: C70 (Fisher Matrix) — efficient SC design uses these strategies for functional products, C71 (Efficient vs. Responsive SC) — counter-strategies enable efficient supply chains
- 📝 Exam: Final Review S2a: Complete list of bullwhip counter-strategies expected

---

## 🔢 Formulas

| Formula | Expression | Variables |
|---------|-----------|-----------|
| **Bullwhip Amplification** | Variability increases exponentially up the supply chain | Consumer demand = base level, amplified at each upstream level |

---

## 📝 Practice Problems

### Problem 1: eBeer Game Retailer Ordering Decision
**Source:** eBeer Game simulation experience | **Concepts:** C40, C41

You are playing the role of **Retailer** in the eBeer game.

**Given:**
- Consumer demand: steady at **4 units/week** for several weeks
- Demand **jumps to 8 units** in Week 5
- Current inventory: **6 units**
- Units on order arriving this week: **4 units**
- Target inventory: **12 units**

**How many units should you order from your Distributor?**

<details>
<summary>Show Solution</summary>

**Step 1: Current position**
- Inventory on hand: 6 units
- Arriving this week: +4 units
- **Available:** $6 + 4 = 10$ units

**Step 2: After serving demand**
- Available − Demand: $10 - 8 = 2$ units remaining

**Step 3: Order to reach target**
- Target inventory − Remaining: $12 - 2 = 10$ units needed
- **Should order: 10 units**

> **The Bullwhip Trap:** Most players **over-react** and order significantly more than 10, thinking demand will stay high or continue increasing. This is rational locally but creates amplified orders upstream — the essence of the bullwhip effect.

> **Better approach:** Order based on **inventory position** (what you have + what's on order − what you need), not on fear of future increases.

</details>

---

### Problem 2: Trade Promotion Bullwhip
**Source:** eBeer Game Debrief After Class Handouts | **Concepts:** C40, C41

A grocery chain runs a **'buy 2 get 1 free'** promotion on Campbell's soup during Week 1. Normal weekly demand is **100 cases**. During the promotion, demand jumps to **300 cases**.

**What will happen to orders upstream, and why is this problematic?**

<details>
<summary>Show Solution</summary>

**What happens:**
1. **Promotion week:** Retailer orders heavily to restock (300+ cases)
2. **Weeks 2-4:** Retailer orders **very little or zero** — customers are consuming stockpiled soup
3. **Actual consumption:** Stays at ~100 cases/week throughout

**Campbell's sees:**
- Week 1: 300 cases ordered → *"Demand is booming!"*
- Weeks 2-4: 0, 0, 50 → *"Demand collapsed!"*

**The Problem:**
- Campbell's may **over-produce** thinking demand increased
- Then faces **excess inventory** when orders dry up
- Creates **boom-bust cycle** in manufacturing
- Underlying consumption was **steady at 100/week the entire time**

> **Counter-strategy:** EDLP (Everyday Low Pricing) eliminates promotion-driven forward buying. Alternatively, base discounts on **sell-through** (actual consumer purchases) rather than **sell-into** (retailer orders).

</details>

---

### Problem 3: VMI vs. Traditional Ordering
**Source:** eBeer Game Debrief After Class Handouts | **Concepts:** C42, C45

Compare two scenarios:
1. **Traditional:** Each retailer independently orders from distributor
2. **VMI:** Distributor manages all retailer inventory using shared POS data

**How would VMI reduce bullwhip?**

<details>
<summary>Show Solution</summary>

**Traditional Ordering:**
- Retailer sees local demand spike → panics → over-orders
- Distributor sees massive aggregate orders → thinks total demand spiked
- Information is **distorted at every step**

**VMI:**
- Distributor sees **real POS data** showing actual consumer demand stayed steady
- No panic ordering — because the retailer isn't making order decisions
- No phantom demand signal — no information distortion
- Distributor can make **rational, system-wide decisions**

**Why VMI works:**

| Problem | VMI Solution |
|---|---|
| Retailer over-reacts | Retailer doesn't order — supplier does |
| Information distortion | Supplier sees real consumption data |
| Phantom orders | No ordering = no phantom orders |
| Amplification chain | Chain is **broken** at the first link |

> **VMI eliminates the retailer's ordering decision entirely**, breaking the amplification chain at its source.

</details>

---

## 🔗 Connections

**Related Lectures:**
- Supply Chain Risk — information sharing reduces risk exposure
- Supply Chain Strategy — bullwhip affects functional products needing efficient SCs

**Exam Appearances:**
- Final Review S2a: Complete bullwhip analysis for functional products
- eBeer Game simulation — experience the effect firsthand

**Excel Templates:**
- bullwhip-simulation.xlsx
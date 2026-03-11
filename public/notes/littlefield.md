# Littlefield Simulation

**Module:** C | **Priority:** LOW | **Key Question:** How do we apply operations concepts in a dynamic, realistic simulation?

---

## 📋 Overview

Littlefield Labs is a hands-on simulation where you manage a medical testing laboratory for about 4 days of real time (representing 104 simulated days). You'll make decisions about machine capacity, inventory management, customer contracts, and pricing while trying to maximize cash at the end. It's like running a real business where you apply everything you've learned: capacity analysis to find bottlenecks, EOQ for inventory decisions, and Factory Physics to understand the WIP-throughput tradeoff.

**Prerequisites:** processes-1-kristens, factory-physics, eoq

---

## 📖 Core Concepts

### 1. Simulation Overview and Objectives (C09)

**Concepts:** C09

**Littlefield Laboratories (LL)** is a state-of-the-art, highly automated lab that receives medical samples from regional hospitals and clinics. The lab performs a **capital-intensive test** on each sample and transmits results back to customers.

#### Process Flow (4 Steps, 3 Stations)

```
Step 1          Step 2         Step 3          Step 4
[Sample Prep] → [Testing] → [Centrifuge] → [Testing again]
  Station 1      Station 2     Station 3       Station 2
```

> **Note:** Station 2 (Testing) is used **twice** — for Step 2 and Step 4. This makes it a natural bottleneck candidate.

#### Objective

> **GOAL:** Maximize cash position at the end of the simulation (Day 268)

**Key decisions you control:**
- Machine purchases (capacity investment)
- Inventory reorder quantity and reorder point
- Contract selection (revenue vs. lead time tradeoff)
- Timing of all decisions

**Cross-references:**
- ← Prerequisite: C01 (Bottleneck), C02 (Process Capacity), C03 (Flow Rate), C04 (Utilization) — foundation concepts for capacity analysis

---

### 2. Capacity Management (C01, C09)

**Concepts:** C01, C09

#### Initial Station Configuration

| Station | Avg Time (Steps 1-3) | Avg Time (Step 4) | Total Time/Station | # Machines | Avg Service Time/Job | Service Rate (jobs/hr) |
|---|---|---|---|---|---|---|
| **Sample Prep** | 5.3 hrs | 0 | 5.3 hrs | 3 | 1.77 hrs | 0.566 |
| **Testing** | 0.5 hrs | 1.4 hrs | 1.9 hrs | 1 | 1.90 hrs | 0.526 |
| **Centrifuge** | 1.8 hrs | 0 | 1.8 hrs | 1 | 1.80 hrs | 0.556 |

#### Machine Economics

| Station | Purchase Cost | Order Lead Time |
|---|---|---|
| Sample Prep | $90,000 | 5 days |
| Testing | $80,000 | 5 days |
| Centrifuge | $100,000 | 5 days |

#### Key Capacity Principles

- **Testing** (Station 2) is the initial bottleneck with lowest service rate: $0.526$ jobs/hr
- Monitor **long-run average utilization** before purchasing machines
- With variability in arrivals and processing, you need utilizations **well below 100%**
- Buying machines is **irreversible** — you can't sell them back

> ⚠️ **Critical:** Don't buy machines based on short-term spikes. Look at the long-run trend of queue lengths and utilization.

**Cross-references:**
- ← Prerequisite: C01 (Bottleneck), C02 (Process Capacity), C04 (Utilization), C09 (Capacity Analysis) — tools for finding and managing bottlenecks
- → Builds into: C23 (WIP-Throughput Tradeoff) — balancing efficiency vs. responsiveness
- 📝 Exam: Midterm Q1: Capacity analysis with setup times — same methodology applies to Littlefield stations

---

### 3. Inventory Management (EOQ Application) (C01)

**Concepts:** C01

Each job requires a **test kit** from the materials buffer. No kit available = job cannot start.

#### Given Parameters
- **Cost per kit:** $c = \$600$
- **Fixed ordering cost:** $S = \$1,000$
- **Order lead time:** 4 days (deterministic)
- **Interest rate:** $i = 10\%$ per year

#### EOQ Calculation

$$D = 12.2 \times 365 = 4{,}460 \text{ orders/year}$$

$$EOQ = \sqrt{\frac{2SD}{ic}} = \sqrt{\frac{2 \times 1000 \times 4460}{600 \times 0.10}} = \sqrt{\frac{8{,}920{,}000}{60}} = \sqrt{148{,}667} \approx 386 \text{ kits}$$

#### Reorder Point Calculation

- **Lead time:** $L = 4$ days (deterministic)
- **Average daily demand:** $\bar{D} \approx 12.2$ orders/day
- **Std dev of daily demand:** $\sigma_D \approx 3.4$ orders/day

$$\text{Avg demand during LT} = L \times \bar{D} = 4 \times 12.2 = 49 \text{ orders}$$

$$\sigma_{LT} = \sqrt{L} \times \sigma_D = \sqrt{4} \times 3.4 = 6.7 \text{ orders}$$

$$\text{ROP} = 49 + z \times 6.7 = 49 + 2 \times 6.7 = 62 \text{ orders}$$

> Using $z = 2$ for approximately **97.5% service level** — aggressive safety stock because stockouts halt production entirely.

**Cross-references:**
- ← Prerequisite: C50 (EOQ), C51 (Total Relevant Cost), C52 (Holding Cost) — theoretical foundation for inventory decisions
- 📝 Exam: Final Review Q2: EOQ calculation for shovel retailer — identical methodology, CC3: EOQ calculations with holding cost components

---

### 4. Revenue and Contract Management (C01)

**Concepts:** C01

#### Available Contracts

| Contract | Revenue | Quoted Lead Time | Max Lead Time | Risk Level |
|---|---|---|---|---|
| **Contract 1** | $750 | 7 days | 14 days | Low |
| **Contract 2** | $1,000 | 1 day | 3 days | Medium |
| **Contract 3** | $1,250 | 0.5 day | 1 day | High |

#### Revenue Rules
- **Within quoted LT:** Full revenue
- **Between quoted and max LT:** Revenue decreases **linearly** from full price to $0
- **Beyond max LT:** $0 revenue

#### Strategic Implications

> **The fundamental tradeoff:** Higher revenue contracts demand shorter lead times, which require **lower utilization** and **more capacity investment**.

- **Contract 1** is safe but low revenue — good when capacity is tight
- **Contract 3** is lucrative but punishing — only viable with significant excess capacity
- **Switch contracts dynamically** as you add capacity and demand changes

> ⚠️ **Capacity management and marketing strategies must be aligned.** A busy factory (high utilization) is efficient but drives up lead times — must balance factory productivity with customer needs.

**Cross-references:**
- ← Prerequisite: C04 (Utilization), C23 (WIP-Throughput Tradeoff), C32 (Utilization Effect) — understanding the utilization-lead time relationship

---

### 5. End Game Strategy (Newsvendor Application) (C01)

**Concepts:** C01

As the simulation nears its end, you face a **newsvendor-style** one-shot decision on final inventory.

#### Approach 1: Big Final Order

1. Place a **large order** right before losing control
2. Set reorder quantity impossibly high (prevent further orders)

**How big should the final order be?**

$$\mu = \bar{D} \times 50 \text{ days} = 12.2 \times 50 = 611 \text{ orders}$$
$$\sigma = \sqrt{50} \times 3.4 = 23.8 \text{ orders}$$

**Newsvendor calculation:**
- $C_u = \$1,250 - \$600 = \$650$ (lost contribution per stockout)
- $C_o = \$600$ (purchase cost of unused kit)
- $p_c = \frac{650}{650 + 600} = \frac{650}{1250} = 0.52$

$$Q^* = \text{NORM.INV}(0.52, 611, 23.8) \approx 612 \text{ orders}$$

**Cost:** $612 \times \$600 = \$367K$

#### Approach 2: JIT System

Switch to a **just-in-time** ordering system to minimize inventory you might get "stuck" with at simulation end.

> **Both approaches use the same logic:** Balancing the cost of excess inventory vs. lost revenue from stockouts — pure newsvendor thinking.

**Cross-references:**
- ← Prerequisite: C60 (Newsvendor Model), C61 (Critical Fractile), C62 (Overage Cost), C63 (Underage Cost) — theoretical foundation for end-game decision
- 📝 Exam: Final Review Q3: Newsvendor order quantity calculation — same Cu/Co/pc framework, CC4: Newsvendor with BrightSide — identical methodology

---

### 6. Variability and Factory Physics (C23)

**Concepts:** C23

#### The Core Tension

> A busy factory (high utilization) is **efficient** but drives up lead times — must balance factory productivity with customer needs.

This is the **WIP-Throughput tradeoff** from Factory Physics, playing out in real time:

| High Utilization | Low Utilization |
|---|---|
| ✅ Efficient use of machines | ✅ Short lead times |
| ❌ Long queues and lead times | ❌ Idle (wasted) capacity |
| Good for Contract 1 | Good for Contract 3 |

#### Practical Lessons

- **Machine purchases** should be based on **long-run** demand trends
- **Contract management** should be based on **short-run** queue behavior
- **Reaction time matters** — monitor queues and utilization continuously
- **Variability hurts** — queue lengths fluctuate even with stable average demand

> **The three pain points all show up in Littlefield:**
> 1. **Setups** → fixed ordering cost for inventory
> 2. **Bottlenecks** → testing station constrains the system
> 3. **Uncertainty & Variability** → demand fluctuations drive queue volatility

**Cross-references:**
- ← Prerequisite: C20 (Little's Law), C21 (WIP), C22 (Variability Effect), C24 (Buffer or Suffer) — Factory Physics principles applied to real-time simulation
- 📝 Exam: Midterm Q3: Grohe Lux WIP-throughput tradeoff — Buffer or Suffer principle, Midterm Q1: Bottleneck shifting when batch sizes change

---

## 🔢 Formulas

| Formula | Expression | Variables |
|---------|-----------|-----------|
| **EOQ for Littlefield** | $$EOQ = \sqrt{\frac{2SD}{ic}}$$ | D: 4,460 orders/year, S: $1,000, i: 10%, c: $600 |
| **Reorder Point** | $$ROP = \mu_{LT} + z \times \sigma_{LT}$$ | $\mu_{LT}$: mean demand during lead time, $\sigma_{LT} = \sqrt{LT} \times \sigma_{daily}$, z: safety factor |
| **Capacity per Machine** | $$\text{Capacity} = \frac{1}{\text{Service Time}}$$ | Service Time: processing time per job |

---

## 📝 Practice Problems

### Problem 1: Bottleneck Identification
**Source:** Littlefield Debrief Slides | **Concepts:** C01, C09

Given the Littlefield parameters (Sample Prep: 1.77 hrs/job with 3 machines → 0.566 jobs/hr each; Testing: 1.90 hrs/job with 1 machine → 0.526 jobs/hr; Centrifuge: 1.80 hrs/job with 1 machine → 0.556 jobs/hr), what is the bottleneck station at the start of the simulation?

<details>
<summary>Show Solution</summary>

**Testing station** is the bottleneck with the **lowest service rate at 0.526 jobs/hr** with only 1 machine.

| Station | Total Time | # Machines | Service Rate |
|---|---|---|---|
| Sample Prep | 5.3 hrs | 3 | $3 \times 0.566 = 1.698$ jobs/hr |
| Testing | 1.9 hrs | 1 | $0.526$ jobs/hr ← **Bottleneck** |
| Centrifuge | 1.8 hrs | 1 | $0.556$ jobs/hr |

Station-level capacity is service rate × number of machines. Testing has the lowest station capacity.

</details>

---

### Problem 2: EOQ Calculation
**Source:** Littlefield Debrief Slides | **Concepts:** C01

Calculate the optimal EOQ and reorder point for Littlefield's inventory system given: $D = 4{,}460$ orders/year, $S = \$1{,}000$, $c = \$600$, $i = 10\%$, lead time = 4 days, daily demand $\bar{D} = 12.2$ with $\sigma_D = 3.4$.

<details>
<summary>Show Solution</summary>

**EOQ:**
$$EOQ = \sqrt{\frac{2 \times 1000 \times 4460}{600 \times 0.10}} = \sqrt{\frac{8{,}920{,}000}{60}} = \sqrt{148{,}667} \approx 386 \text{ orders}$$

**Reorder Point** (with $z = 2$ for ~97.5% service):
$$ROP = (4 \times 12.2) + 2 \times (\sqrt{4} \times 3.4) = 49 + 2(6.7) = 62 \text{ orders}$$

</details>

---

### Problem 3: End-Game Newsvendor
**Source:** Littlefield Debrief Slides | **Concepts:** C01

What is the optimal final order quantity using newsvendor logic? Assume 50 remaining days, $\bar{D} = 12.2$/day, $\sigma_D = 3.4$/day, Contract 3 revenue = $\$1{,}250$, kit cost = $\$600$.

<details>
<summary>Show Solution</summary>

**Parameters:**
- $\mu = 12.2 \times 50 = 611$ orders
- $\sigma = \sqrt{50} \times 3.4 = 23.8$ orders
- $C_u = \$1{,}250 - \$600 = \$650$
- $C_o = \$600$ (no salvage value)
- $p_c = \frac{650}{650 + 600} = \frac{650}{1250} = 0.52$

$$Q^* = \text{NORM.INV}(0.52, 611, 23.8) \approx 612 \text{ orders}$$

> The critical fractile is barely above 0.50, so $Q^*$ is barely above the mean — the costs of overage and underage are nearly balanced.

</details>

---

## 🔗 Connections

**Related Lectures:**
- Processes 1 (Kristen's) — capacity analysis foundation
- Processes 2 (Beleza) — capacity calculations with multiple resources
- Factory Physics — WIP-throughput tradeoffs in practice
- EOQ — inventory management theory applied
- Newsvendor — end-game inventory decision

**Exam Appearances:**
- Concepts appear across multiple exams but Littlefield-specific questions are rare

**Excel Templates:**
- Uses multiple templates: capacity analysis, EOQ, newsvendor calculations
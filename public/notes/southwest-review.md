# Southwest Airlines & Final Exam Review

**Module:** C | **Priority:** MEDIUM | **Key Question:** How do we integrate operations strategy with all course concepts for the final exam?

---

## 📋 Overview

This comprehensive review session covers Southwest Airlines' operations strategy and integrates all major course concepts for the final exam. Southwest exemplifies perfect alignment between operations and marketing strategy through interlocking tactics like point-to-point service, fast turnarounds, and standardized aircraft. We'll also work through quantitative problems in queueing, EOQ, and newsvendor while reviewing key principles from capacity analysis, factory physics, and supply chain management.

**Prerequisites:** ops-strategy, queueing, eoq, newsvendor

---

## 📖 Core Concepts

### 1. Southwest Airlines Operations Strategy (CQDF Analysis) (C11, C12)

**Concepts:** C11, C12

For Southwest's traditional model, analyze their operations objectives:

| Objective | Define | Rank | Measure |
|---|---|---|---|
| **Cost** | Lowest cost | **1** | Cost per passenger; cost per flight; fuel costs; staffing costs |
| **Quality** | Standard / low | **3** | Clean planes; no meals; no frills; fun |
| **Delivery** | Frequent flights; on time; we get you there; ease to change flights | **2** | On time percent; flights per day between cities; price for a customer to change flights |
| **Flexibility** | Low flexibility; no first class; no meals or frills | **4** | Number of options for flight services and seats |

**Interlocking Ops Strategy/Tactics:** Point-to-point Service, Fast Turn Time, Low Cost Operations, High Demand, Smaller Airports, Boarding Process, Ticketing Process, Slow Growth, All 737 Aircraft, Low Prices, No Meals, SWA Culture

> **Key Insight:** Alignment of operations and marketing strategy is critical to a successful business strategy. The best operations strategies are supported through many individual elements (levers/tactics) that are consistent with the objectives (C,Q,D,F).

**Cross-references:**
- ← Prerequisite: C11 (Operations Strategy — CQDF), C12 (Management Levers) — Southwest demonstrates perfect strategic alignment
- → Builds into: All other course concepts show up in Southwest's execution
- 📝 Exam: Southwest case demonstrates integrated operations strategy

---

### 2. Southwest's Operational Efficiency Analysis (C11)

**Concepts:** C11

#### A Simple Quick-Turn Analysis:

| | Minutes |
|---|---|
| | **SW** | **Industry Ave** |
| Air Time | 115 | 115 |
| Turn Time | 25 | 60 |
| **Total** | **140** | **175** |
| **Percent Increase** | | **25%** |

**Conclusion:** Competitors need 25% more planes
- **Planes:** Southwest 539 Boeing 737s vs Competitor 674 Boeing 737s
- **Cost of planes:** $8,085,000,000 vs $10,110,000,000 ($60M/plane)
- **Annual cost:** $808,500,000 (10% cost of capital)

#### A Simple Meal Cost Analysis:

- **Meals:** Cost per meal $10.00
- **Seats:** 137, Load factor: 0.712, Full seats: 97.5
- **Meal cost per flight:** $975
- **Flights per day:** 3300, Percent with meals: 0.333
- **Meal cost per day:** $1,071,911
- **Annual:** $391,247,521

> **Key Insight:** While each element may have value, competitors cannot achieve parity by simply copying individual elements – the whole is more than the sum of the parts.

**Cross-references:**
- ← Prerequisite: C11 (Operations Strategy — CQDF) — quantifying strategic advantages
- → Builds into: Understanding why integrated strategies create competitive advantage
- 📝 Exam: Quantitative analysis of strategic choices

---

### 3. **MASTER REVIEW:** The Three Pain Points Framework (P01, P02, P03)

**Concepts:** P01, P02, P03

> **Three things that hurt you in operations: Setups, Bottlenecks, Uncertainty & Variability ...but proper actions mitigate this pain**

#### 1. Setups (P01)
- **Where they appear:** Kristen's Cookie (oven cleaning), Beleza Natural (chair adjustments), EOQ (ordering costs), Littlefield (test kit ordering)
- **How they hurt:** Reduce effective capacity, create batching incentives, force tough size vs. variety tradeoffs
- **How to fight them:** SMED, training, standardization, parallel setups

#### 2. Bottlenecks (P02)
- **Where they appear:** Process capacity analysis, Factory Physics, Littlefield testing station, queueing servers
- **How they hurt:** Limit system performance, can shift unexpectedly, improvement elsewhere is often wasted
- **How to fight them:** Identify correctly, focus improvement efforts, add capacity strategically

#### 3. Uncertainty & Variability (P03)
- **Where they appear:** Queueing (Ca, Cs), Factory Physics WIP curves, Newsvendor demand uncertainty, Bullwhip effect, Supply chain risks
- **How they hurt:** Degrade performance below theoretical optimum, require buffers, create boom-bust cycles
- **How to fight them:** Information sharing, standardization, buffers (inventory, capacity, time), flexible systems

**Cross-references:**
- → All major course topics connect to these three fundamental challenges
- 📝 Exam: Understanding these three themes helps synthesize across all topics

---

### 4. **MASTER REVIEW:** Queueing Theory (C30, C31, C32, C33)

**Concepts:** C30, C31, C32, C33

#### Single Server P-K Formula

$$W = M \times \frac{\rho}{1-\rho} \times \frac{C_a^2 + C_s^2}{2}$$

#### Better Buzz Coffee Example:
- **Given:** Service time: M = 3.3 min (σ = 4.8), Arrivals: A = 4.0 min (σ = 3.2)
- **Calculate:** ρ = 3.3/4.0 = 0.825, Ca = 3.2/4.0 = 0.8, Cs = 4.8/3.3 = 1.45
- **Result:** W = 3.3 × [0.825/0.175] × [(0.64+2.11)/2] = 3.3 × 4.71 × 1.375 = **21.4 minutes**

#### Multi-Server Formula

$$W = \frac{M}{n} \times \frac{\rho^{\sqrt{2(n+1)}-1}}{1-\rho} \times \frac{C_a^2 + C_s^2}{2}$$

- **With 2 servers:** ρ = 3.3/(2×4.0) = 0.41, exponent = √6-1 = 1.45
- **Result:** W = (3.3/2) × (0.41^1.45/0.59) × 1.375 = **1.22 minutes**

> **Dramatic improvement:** 21.3 min → 1.22 min by adding ONE server. This is the pooling effect in action.

**Cross-references:**
- ← Prerequisite: C04 (Utilization), C20 (Little's Law) — foundation concepts
- → Builds into: C36 (Operations Triangle) — cost vs. delivery vs. flexibility tradeoffs
- 📝 Exam: Final Review Q1: Better Buzz Coffee complete calculation

---

### 5. **MASTER REVIEW:** EOQ and Inventory Management (C50, C51, C53, C54)

**Concepts:** C50, C51, C53, C54

#### EOQ Formula and Shovel Example

$$EOQ = \sqrt{\frac{2SD}{H}}$$

**Shovel Retailer:** Cost $45.20, ordering cost $19.50, capital cost 17%, demand 22,500/year

- **H = ic:** $45.20 × 0.17 = $7.684
- **EOQ:** $\sqrt{2×19.50×22,500/7.684} = 338$ units
- **Total Cost:** $2,594/year

#### EOQ Consolidation Effect

**Merger with identical retailer:**
- **Combined demand:** 45,000 units
- **New EOQ:** $\sqrt{2×19.50×45,000/7.684} = 478$ units (not 676!)
- **Combined TC:** $3,670 vs separate $5,188
- **Savings:** 29.2%

> **Square-root law:** EOQ scales by √n for n locations, creating consolidation savings

**Cross-references:**
- ← Prerequisite: C08 (Setup Time) — ordering cost S is a setup cost
- → Builds into: Littlefield inventory decisions, supply chain efficiency
- 📝 Exam: Final Review Q2: Complete EOQ calculation with consolidation analysis

---

### 6. **MASTER REVIEW:** Newsvendor Model (C60, C61, C64, C65, C67)

**Concepts:** C60, C61, C64, C65, C67

#### Core Formula

$$Q^* = \text{NORM.INV}(p_c, \mu, \sigma)$$
$$p_c = \frac{C_u}{C_u + C_o}$$

#### Soccer World Cup Book Example:
- **Cost:** $23, **Price:** $50, **Discount:** $10
- **Demand:** μ = 180, σ = 65
- **Calculate:** Co = 23-10 = $13, Cu = 50-23 = $27, pc = 27/40 = 0.675
- **Result:** Q* = NORM.INV(0.675, 180, 65) = **210 books**
- **Service Level:** 67.5% (stockout probability = 32.5%)

#### Service Level Curve Shape (C67)

As you approach 100% service level:
- **90% service:** NORM.INV(0.90, 180, 65) = 263 units
- **95% service:** NORM.INV(0.95, 180, 65) = 287 units  
- **99% service:** NORM.INV(0.99, 180, 65) = 331 units

> **Exponential growth:** The curve becomes steeper at high service levels — why 100% service is rarely economical.

**Cross-references:**
- ← Prerequisite: C65 (Normal Distribution) — NORM.INV and NORM.DIST functions
- → Builds into: BrightSide (zero salvage), Sport Obermeyer (fashion), Littlefield (end game)
- 📝 Exam: Final Review Q3: Complete newsvendor with service level curve analysis

---

### 7. **MASTER REVIEW:** Supply Chain Strategy (C70, C71, C73)

**Concepts:** C70, C71, C73

#### Fisher Matrix

| | **Functional Products** | **Innovative Products** |
|---|---|---|
| **Efficient SC** | ✅ Beer, pasta, toilet paper | ❌ Mismatch |
| **Responsive SC** | ❌ Mismatch | ✅ Fashion, electronics |

#### Strategies by Product Type

**Functional Products (Beer):**
- **Problem:** Bullwhip effect from information distortion
- **Solutions:** S&OP (internal info sharing), CPFR (external sharing), VMI (supplier manages inventory), EDLP pricing

**Innovative Products (Sport Obermeyer):**
- **Problem:** Demand uncertainty with long lead times
- **Solutions:** Forecast distributions, newsvendor model, early order info, reactive capacity, dual response (stable + flexible factories)

**Cross-references:**
- ← Prerequisite: C40-C42 (Bullwhip) for functional products, C60 (Newsvendor) for innovative products
- → Builds into: C46-C47 (Supply Chain Risk Management) — broader risk management framework
- 📝 Exam: Final Review S2: Complete Fisher Matrix analysis with strategies for each quadrant

---

### 8. **MASTER REVIEW:** Supply Chain Risk Management (C46, C47)

**Concepts:** C46, C47

#### Two-Stage Framework

**Stage 1: Anticipatory Strategies ("Buy Options")**
- **Information & Planning:** Scenario planning, risk monitoring
- **Structure Design:** China+1, multi-region sourcing, vertical integration
- **Process Adjustments:** Safety stock, directed buy agreements

**Stage 2: Reactive Adaptations ("Exercise Options")**
- Shift sourcing dynamically
- Invoke priority allocation
- Activate backup suppliers
- Real-time monitoring enables rapid response

#### Complete Risk Toolkit

| Risk Type | Common Risks | Black Swan Risks |
|---|---|---|
| **Approach** | Optimize and hedge | Build resilience and options |
| **Examples** | Demand fluctuations, shipping delays | Pandemic, war, natural disasters |
| **Strategies** | Safety stock, information sharing | Geographic diversification, backup suppliers |

**Cross-references:**
- ← Prerequisite: C24 (Buffer or Suffer) — buffers are necessary for variability
- ← Builds on: C70-C71 (Supply Chain Strategy) — risk-sensitive products need responsive chains
- 📝 Exam: Final Review S3: Complete risk management framework with anticipatory and reactive strategies

---

## 🔢 **MASTER REFERENCE:** All Key Formulas

| Topic | Formula | Key Variables |
|-------|---------|---------------|
| **Utilization** | $$\rho = \frac{\text{Flow Rate}}{\text{Capacity}} = \frac{M}{A}$$ | M: service time, A: inter-arrival time |
| **Little's Law** | $$\text{WIP} = \text{Throughput Rate} \times \text{Throughput Time}$$ | Universal relationship for any stable system |
| **Queueing (Single)** | $$W = M \times \frac{\rho}{1-\rho} \times \frac{C_a^2 + C_s^2}{2}$$ | W: wait time, Ca/Cs: coefficients of variation |
| **Queueing (Multi)** | $$W = \frac{M}{n} \times \frac{\rho^{\sqrt{2(n+1)}-1}}{1-\rho} \times \frac{C_a^2 + C_s^2}{2}$$ | n: number of servers |
| **EOQ** | $$EOQ = \sqrt{\frac{2SD}{H}}$$ | S: setup cost, D: annual demand, H: holding cost |
| **Newsvendor** | $$Q^* = \text{NORM.INV}(p_c, \mu, \sigma)$$ | pc = Cu/(Cu+Co): critical fractile |
| **Risk** | $$\text{Risk} = \text{Probability} \times \text{Impact}$$ | Quantifying expected risk exposure |

---

## 📝 **MASTER PRACTICE:** Comprehensive Problems

### Problem 1: Better Buzz Queueing Analysis
**Source:** Final Exam Review After Class Handouts | **Concepts:** C30, C32, C33

Better Buzz Coffee has average service time 3.3 minutes (σ=4.8) and average time between arrivals 4.0 minutes (σ=3.2) with one server.

1. What is the average waiting time in line?
2. How many customers are in line on average?
3. What would happen with a second server?

<details>
<summary>Show Solution</summary>

**Part 1: Single server wait time**
- ρ = 3.3/4.0 = 0.825
- Ca² = (3.2/4.0)² = 0.64, Cs² = (4.8/3.3)² = 2.11
- W = 3.3 × [0.825/0.175] × [(0.64+2.11)/2] = 3.3 × 4.71 × 1.375 = **21.4 minutes**

**Part 2: Customers in line**
- L = W/A = 21.4/4.0 = **5.35 customers**

**Part 3: Two servers**
- ρ = 3.3/(2×4.0) = 0.4125
- Exponent = √(2×3) - 1 = 1.45
- W = (3.3/2) × (0.4125^1.45/0.5875) × 1.375 = **1.22 minutes**

> **Pooling effect:** Adding second server reduces wait from 21.4 → 1.22 minutes!

</details>

---

### Problem 2: EOQ Consolidation Analysis
**Source:** Final Exam Review After Class Handouts | **Concepts:** C50, C51, C53, C54

A retailer pays $45.20 per shovel, ordering cost $19.50, capital cost 17%, demand 22,500/year.

1. Find optimal EOQ and total cost
2. If they merge with identical retailer, what are the savings?

<details>
<summary>Show Solution</summary>

**Part 1: Single retailer**
- H = 45.20 × 0.17 = $7.684
- EOQ = √(2×19.50×22,500/7.684) = **338 units**
- TC = 19.50×(22,500/338) + 7.684×(338/2) = **$2,594**

**Part 2: Merged operation**
- Combined demand = 45,000 units
- New EOQ = √(2×19.50×45,000/7.684) = **478 units** (not 676!)
- Combined TC = **$3,670**
- Separate TC = 2×$2,594 = $5,188
- **Savings = 29.2%**

> **Square-root law:** Consolidation creates efficiency gains because EOQ scales by √n, not n.

</details>

---

### Problem 3: Complete Newsvendor Analysis
**Source:** Final Exam Review After Class Handouts | **Concepts:** C60, C61, C64, C67

Bookstore: books cost $23, sell $50, discount $10. Mean demand 180, σ=65.

1. How many to order?
2. What's the service level?
3. How many for 95% service?
4. Explain the service level curve shape

<details>
<summary>Show Solution</summary>

**Part 1: Optimal order quantity**
- Co = 23-10 = $13, Cu = 50-23 = $27
- pc = 27/(27+13) = 0.675
- **Q* = NORM.INV(0.675, 180, 65) = 210 books**

**Part 2: Service level**
- Service level = pc = **67.5%**
- Stockout probability = 32.5%

**Part 3: For 95% service**
- **Q95% = NORM.INV(0.95, 180, 65) = 287 books**
- Increase from 210 → 287 = 37% more inventory for 95% vs 67.5% service

**Part 4: Service level curve**
- **90%:** 263 units (+53 from optimal)
- **95%:** 287 units (+77 from optimal)  
- **99%:** 331 units (+121 from optimal)

> **Exponential growth:** Each incremental service level improvement requires exponentially more inventory — why 100% service is rarely economical.

</details>

---

### Problem 4: Southwest Strategy Integration
**Source:** Southwest After Class Handouts + Final Exam Review | **Concepts:** C11, C12

Analyze Southwest's CQDF priorities and explain how operational tactics support their strategy.

<details>
<summary>Show Solution</summary>

**CQDF Ranking:**
1. **Cost** (lowest cost carrier)
2. **Delivery** (frequent flights, on-time performance)
3. **Quality** (standard service, no frills)
4. **Flexibility** (limited options)

**Supporting Tactics:**

| Strategic Priority | Supporting Tactics |
|---|---|
| **Cost Leadership** | All 737s (maintenance efficiency), no meals, point-to-point (no hub), smaller airports (lower fees) |
| **Delivery** | Fast 25-min turns, frequent flights, reliable schedule |
| **Standard Quality** | Consistent but basic service, fun culture |
| **Limited Flexibility** | One aircraft type, no first class, limited routes |

**Integration Insight:** Every operational tactic reinforces the strategic priorities. Competitors can't copy individual elements because the **system** creates the advantage — the whole is greater than the sum of its parts.

</details>

---

## 🔗 **MASTER CONNECTIONS:** Course Integration

### How Everything Connects

1. **Process Analysis** → identifies bottlenecks → **Factory Physics** → manages WIP-throughput tradeoffs → **Queueing** → quantifies wait times
2. **Operations Strategy** → aligns with product characteristics → **Supply Chain Strategy** → handles uncertainty → **Risk Management**
3. **EOQ** → manages inventory costs → **Newsvendor** → handles demand uncertainty → **Supply Chain** coordination
4. **Three Pain Points** → appear across ALL contexts → require integrated solutions

### Final Exam Strategy

- **Quantitative problems:** Master queueing, EOQ, newsvendor formulas
- **Conceptual questions:** Connect to three pain points framework
- **Strategic analysis:** Use CQDF + Fisher Matrix for any company case
- **Supply chain:** Know bullwhip causes/solutions + risk management framework

### The Big Picture

> **Operations is about making systematic tradeoffs under constraints and uncertainty.** Every tool in this course helps you either:
> 1. **Understand the tradeoffs** (capacity analysis, queueing theory)
> 2. **Optimize the tradeoffs** (EOQ, newsvendor, strategy alignment)
> 3. **Manage the uncertainty** (supply chain coordination, risk management)

**Final insight:** The best operations strategies, like Southwest's, create **integrated systems** where every element reinforces the others. Individual tactics can be copied; systems are much harder to replicate.
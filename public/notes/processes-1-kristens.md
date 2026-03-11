# Processes I — Kristen's Cookies
**Module:** A | **Priority:** HIGH | **Key Question:** How do we identify and analyze bottlenecks in business processes?

---

## 📋 Overview

Process analysis reveals the hidden constraints in every business operation. Using Kristen's Cookie Company, you'll learn to map workflows, identify bottlenecks (the slowest step that limits everything else), and calculate capacity. Think of it like finding the narrowest lane on a highway that causes all the traffic jams. The oven that bakes for 10 minutes becomes your constraint, not the mixing that takes 6 minutes. Setups (like cleaning between batches) and bottleneck shifting (when improvements move the constraint to a different step) add complexity that real managers must navigate every day.

**Case:** Kristen's Cookie Company

**Prerequisites:** None  
**Builds into:** C20 (Little's Law), C23 (WIP-Throughput Tradeoff), C30 (Queueing Models)

---

## 📖 Core Concepts

### Process Flow Diagrams
**Concepts:** C05 (Throughput Time), C07 (Lead Time)

A **process flow diagram** is a graphical representation of workflow in a business process. It shows every step, who performs it, and how long it takes.

#### Kristen's Cookies Process

| Step | Time | Resource |
|------|------|----------|
| Take Order | 1 min/order | You |
| Mix | 6 min/batch | You |
| Spoon | 2 min/doz | Roommate |
| Bake | 10 min/doz | Oven |
| Cool | 2 min/doz | Natural |
| Pack | 1 min/order | You |
| Pay | 5 min/order | You |

#### Key Time Definitions

- **Throughput Time** (also called **Flow Time** or **Turn-Around Time**): The time required to complete a given job — from the time it enters the system until it leaves
- **Lead Time**: The time between the *placement* and *fulfillment* of the order (broader — includes time before production starts)

> 💡 **Key Insight:** Drawing the process flow diagram is the **first step** in any process analysis — it reveals the sequence of activities and helps identify potential bottlenecks.

**Cross-references:**
- → Builds into: C20 (Little's Law) — throughput time is a key variable in $WIP = \text{Throughput Rate} \times \text{Throughput Time}$
- → Builds into: C30 (Queueing) — process flow reveals where queues form
- 📝 Exam: CC1 Q1 — Draw process flow and calculate throughput time for Kristen's Cookies
- 📝 Exam: Midterm 2026 Q1 — Station-by-station process analysis for Factory Physics problem

---

### Cycle Time and Capacity
**Concepts:** C02 (Process Capacity), C06 (Cycle Time)

#### Cycle Time
**Cycle Time** ($\text{time/unit}$): The time between successive completions of a batch.

> The cycle time for the **system** equals the cycle time of the **slowest stage** (the bottleneck).

#### Capacity (Throughput Rate)

$$\text{Capacity} = \frac{1}{\text{Cycle Time}}$$

**Throughput Rate** ($\text{units/time}$): The rate at which work gets done. The **maximum possible** throughput rate is the **capacity** of the system.

#### Important Distinctions
- **Cycle time** = time *between* successive outputs (the gap)
- **Throughput time** = total time for *one unit* to traverse the entire system (the journey)
- Capacity can be defined for an **individual stage** or the **entire system**

> 💡 **Key Insight:** System capacity equals the capacity of the bottleneck resource — not the sum of all resources.

**Cross-references:**
- → Builds into: C03 (Flow Rate) — flow rate depends on capacity vs. demand
- → Builds into: C09 (Capacity Analysis) — systematic method to find capacity of each resource
- 📝 Exam: CC1 Q2 — Calculate cycle time and capacity for multi-station process
- 📝 Exam: Midterm 2026 Q1 — Capacity calculations with setup times and batch sizes

---

### Bottleneck Analysis
**Concepts:** C01 (Bottleneck), C13 (Bottleneck Shifting)

#### What Is a Bottleneck?
A **bottleneck** is the resource that limits the processing activity — the stage with the **longest cycle time** (or **least capacity**).

#### Kristen's Cookies — Finding the Bottleneck (1-dozen orders)

| Resource | Time per Dozen | Capacity |
|----------|---------------|----------|
| **You** | 8 min/doz | $60/8 = 7.5$ doz/hr |
| **Oven** | 10 min/doz | $60/10 = 6$ doz/hr |
| **Roommate** | 4 min/doz | $60/4 = 15$ doz/hr |

**Bottleneck = Oven** at $6$ doz/hr (lowest capacity)

#### ⚠️ Bottleneck Shifting

**Critical concept:** Doubling the capacity of the bottleneck will **NOT** necessarily double system capacity — because the **bottleneck may shift** to another resource!

- Bottlenecks may move as **order size changes**
- There may be **more than one bottleneck** simultaneously
- After fixing the bottleneck, **always re-check** which step is now the constraint

> 💡 **Key Insight:** Bottlenecks may move as order size changes. Doubling capacity of bottleneck resource will not necessarily double system capacity because the bottleneck may shift.

**Cross-references:**
- → Builds into: C13 (Bottleneck Shifting) — what happens when you fix one bottleneck
- → Builds into: C23 (WIP-Throughput Tradeoff) — bottleneck determines the throughput ceiling in Factory Physics curves
- 📝 Exam: CC1 Q2 — Identify bottleneck and calculate flow rate for multi-station process
- 📝 Exam: Midterm 2026 Q1 — Bottleneck shifts from Station D to Station A when batch size changes
- 📝 Exam: Midterm 2026 Q1 — Optimal batch size to maximize capacity (~12-13 units)

---

### Setup Effects on Capacity
**Concepts:** C08 (Setup Time)

#### What Is Setup Time?
**Setup time** is the time needed to prepare a machine, person, or system for a new task — from the end of the last batch to the start of the first good piece of the next batch.

Types: Cleaning, tool changes, adjustments, programming, test runs

#### Three Categories of Setup Impact

| Category | Capacity vs. Batch Size | Example |
|----------|------------------------|---------|
| **No setups** | Capacity does **not** depend on order size | Continuous flow process |
| **Uncapacitated setups** | Capacity **increases** (at decreasing rate) as batch size increases | Machine with changeover time |
| **Capacitated setups** | Capacity may **increase or decrease** with batch size | Kristen's mixer (limited bowl size) |

#### Capacity with Setups Formula

$$\text{Capacity} = \frac{\text{Batch Size}}{\text{Setup Time} + (\text{Processing Time per Unit} \times \text{Batch Size})}$$

> 💡 **Key Insight:** Setups create economies of scale — larger batches spread the setup time across more units, improving per-unit capacity.

**Cross-references:**
- → Builds into: C50 (EOQ) — the fixed ordering cost in EOQ is essentially a setup cost
- → Builds into: C01 (Bottleneck) — setups can change which resource is the bottleneck
- 📝 Exam: Midterm 2026 Q1 — Setup times change bottleneck when batch size shrinks
- 📝 Exam: Midterm 2026 Q1 — Optimal batch size balances setup frequency vs. capacity (~12-13 units)

---

### Flow Rate and Utilization
**Concepts:** C03 (Flow Rate), C04 (Utilization)

#### Flow Rate

$$\text{Flow Rate} = \min(\text{Demand Rate}, \text{Process Capacity})$$

| Scenario | Condition | Implication |
|----------|-----------|-------------|
| **Capacity-constrained** | Demand > Capacity | Flow rate = Capacity; losing potential sales |
| **Demand-constrained** | Capacity > Demand | Flow rate = Demand; idle resources |

#### Utilization

$$\text{Utilization} = \frac{\text{Flow Rate}}{\text{Capacity}} = \frac{\text{Time Busy}}{\text{Time Available}}$$

**Kristen's Cookies Example:** With oven as bottleneck at $6$ doz/hr:

$$\text{Utilization of You (mixing)} = \frac{6 \text{ doz/hr}}{7.5 \text{ doz/hr}} = 80\%$$

> 💡 **Key Insight:** Non-bottleneck resources will always have utilization less than 100%. Only the bottleneck determines the flow rate of the entire system.

**Cross-references:**
- ← Prerequisite: C01 (Bottleneck) — must identify bottleneck to determine process capacity
- ← Prerequisite: C02 (Process Capacity) — capacity is the denominator in utilization
- → Builds into: C30 (Queueing) — utilization ($\rho$) drives the hockey-stick waiting time curve
- → Builds into: C32 (Utilization Effect) — $\rho/(1-\rho)$ shows why high utilization = long waits
- 📝 Exam: CC1 Q2 — Calculate utilization for each station in multi-station process
- 📝 Exam: Midterm 2026 Q1 — Determine demand-constrained vs. capacity-constrained; calculate utilizations

---

### Capacity Analysis Tool
**Concepts:** C09 (Capacity Analysis)

**Tool: Capacity Analysis** — Determine capacity of each resource in isolation, then find the constraint.

#### Steps:
1. **Calculate processing time per unit** for each resource
2. **Convert to capacity** (units per hour): $\text{Capacity} = 60 / \text{processing time (min)}$
3. **Identify bottleneck** — the resource with the **lowest capacity**
4. **Calculate flow rate**: $\text{Flow Rate} = \min(\text{Demand}, \text{Bottleneck Capacity})$
5. **Calculate utilizations** for each resource: $\text{Utilization} = \text{Flow Rate} / \text{Station Capacity}$
6. **Analyze impact of changes** — adding resources, changing batch sizes, reducing setups

#### Watch for These Traps
- Setup times that **change with batch size**
- **Shared resources** that serve multiple steps
- **Workers who do different tasks** (aggregate their time per unit)
- Batch size effects on bottleneck identity

> 💡 **Key Insight:** Capacity analysis is the **foundation** for all process improvement decisions — it shows where to focus your efforts for maximum impact.

**Cross-references:**
- ← Prerequisite: C01 (Bottleneck), C02 (Process Capacity), C03 (Flow Rate), C04 (Utilization), C06 (Cycle Time)
- → Builds into: C13 (Bottleneck Shifting) — what happens after you improve the bottleneck
- 📝 Exam: CC1 Q2 — Full capacity analysis for Power Toys assembly line
- 📝 Exam: Midterm 2026 Q1 — Capacity analysis with setup times for 4-station process
- 📝 Exam: Final Review — Capacity analysis appears as foundation for queueing problems

---

## 🔢 Formulas

| Formula | Expression | Variables |
|---------|-----------|-----------|
| Capacity | $$\text{Capacity} = \frac{1}{\text{Cycle Time}}$$ | Capacity in units/hr; Cycle Time in hr/unit |
| Flow Rate | $$\text{Flow Rate} = \min(\text{Demand Rate}, \text{Process Capacity})$$ | Actual throughput rate |
| Utilization | $$\text{Utilization} = \frac{\text{Flow Rate}}{\text{Capacity}}$$ | Fraction of time resource is busy |
| Capacity with Setups | $$\text{Capacity} = \frac{\text{Batch Size}}{\text{Setup Time} + (\text{Proc. Time/Unit} \times \text{Batch Size})}$$ | Effective capacity accounting for setup overhead |

**Worked Example:**
- Oven cycle time = $10$ min/dozen = $0.167$ hr/dozen
- Oven capacity = $1 \div 0.167 = 6$ dozen/hour
- If demand = $8$ dozen/hr → Flow rate = $\min(8, 6) = 6$ dozen/hr (capacity-constrained)
- Mixing utilization = $6/7.5 = 80\%$

---

## 📝 Practice Problems

### Problem 1: Kristen's Cookie Throughput Time
**Source:** Kristen's Cookie Company After Class Handouts Haas 2026 | **Concepts:** C05, C07

For Kristen's Cookie Company with **one oven**, calculate the **throughput time** for an order of one dozen cookies. Show the Gantt chart timing.

<details>
<summary>Show Solution</summary>

#### Gantt Chart Timing

| Step | Start | End | Resource |
|------|-------|-----|----------|
| Take Order | $0$ | $1$ min | You |
| Mix | $1$ | $7$ min | You |
| Spoon | $7$ | $9$ min | Roommate |
| Bake | $9$ | $19$ min | Oven |
| Cool | $19$ | $21$ min | Natural |
| Pack | $21$ | $22$ min | You |
| Pay | $22$ | $27$ min | You |

$$\text{Total throughput time} = 27 \text{ minutes for one dozen cookies}$$

> 💡 For subsequent orders, the throughput time per order decreases because steps can **overlap** (pipelining). The oven bakes order 1 while You mix order 2.

</details>

---

### Problem 2: Power Toys Assembly Line
**Source:** Capacity Analysis After Class Practice Problems and Solutions | **Concepts:** C01, C02, C03, C04

Power Toys Inc. produces toy trucks on a **9-station assembly line**:

| Station | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---------|---|---|---|---|---|---|---|---|---|
| Time (sec) | $72$ | $80$ | $90$ | $68$ | $70$ | $60$ | $95$ | $58$ | $80$ |

1. Which station is the bottleneck?
2. What is the system capacity (trucks/hour)?
3. If demand is $60$ trucks/hour, what is the flow rate?
4. What is the utilization of Station 2?

<details>
<summary>Show Solution</summary>

#### Step 1: Identify Bottleneck
**Station 7** has the longest processing time at $95$ seconds → **Bottleneck**

#### Step 2: System Capacity
$$\text{Capacity} = \frac{3600 \text{ sec/hr}}{95 \text{ sec/unit}} = 37.9 \text{ trucks/hr}$$

#### Step 3: Flow Rate
$$\text{Flow Rate} = \min(60, 37.9) = 37.9 \text{ trucks/hr}$$

The system is **capacity-constrained** (demand exceeds capacity).

#### Step 4: Utilization of Station 2
$$\text{Station 2 Capacity} = \frac{3600}{80} = 45 \text{ trucks/hr}$$
$$\text{Utilization} = \frac{37.9}{45} = 84.2\%$$

> 💡 Station 2 is **not** the bottleneck, so its utilization is below $100\%$.

</details>

---

### Problem 3: Setup Time and Batch Size
**Source:** Capacity Analysis After Class Practice Problems and Solutions | **Concepts:** C08, C02

A machine has a $110$-minute setup time and $8$ minutes processing per unit. Compare the capacity for batch sizes of **40 units** vs. **100 units**.

<details>
<summary>Show Solution</summary>

#### Batch Size = 40 Units
$$\text{Total time} = 110 + (8 \times 40) = 430 \text{ minutes}$$
$$\text{Capacity} = \frac{40}{430} \times 60 = 5.58 \text{ units/hr}$$

#### Batch Size = 100 Units
$$\text{Total time} = 110 + (8 \times 100) = 910 \text{ minutes}$$
$$\text{Capacity} = \frac{100}{910} \times 60 = 6.59 \text{ units/hr}$$

#### Comparison

| Batch Size | Total Time | Capacity | Setup % of Total |
|-----------|-----------|----------|------------------|
| $40$ | $430$ min | $5.58$ units/hr | $110/430 = 25.6\%$ |
| $100$ | $910$ min | $6.59$ units/hr | $110/910 = 12.1\%$ |

> 💡 Larger batches **spread setup cost** across more units, increasing effective capacity. But improvement has **diminishing returns** — going from $40$ to $100$ (+150%) only increases capacity by $18\%$.

</details>

---

## 🔗 Connections
- **Related lectures:** [Operations Strategy](ops-strategy.md), [Processes II — Beleza Natural](processes-2-beleza.md), Factory Physics
- **Excel template:** capacity-analysis.xlsx
- **Exam appearances:**
  - CC1: Full capacity analysis with bottleneck identification
  - Midterm 2026 Q1: Factory Physics problem with setup times, bottleneck shifting, optimal batch size
  - Midterm 2026 Q1: Demand-constrained vs. capacity-constrained scenarios

# 🏭 Factory Physics — Class 4

> **Module B** | **Priority: HIGH** | **Foundation for Queueing & WIP Management**
>
> **Key Question:** *How do we balance the tradeoff between throughput time and capacity when variability is present?*
>
> **Case:** Pharmaceutical Manufacturing & Dumbo at Disneyland

---

## Overview

Factory Physics reveals the **fundamental relationships** governing all production systems when variability is present. **Little's Law** is the central equation:

$$\text{WIP} = \text{Throughput Rate} \times \text{Throughput Time}$$

It connects inventory, flow, and time in **any** system — assembly lines, email inboxes, Disneyland rides. The key insight: **variability degrades performance**, forcing you to choose between holding more inventory (WIP) or accepting reduced throughput. This is the **"Buffer or Suffer"** principle.

### Prerequisites
- ← **C01 (Bottleneck)** — defines max throughput rate
- ← **C03 (Flow Rate)** — throughput rate = flow rate
- ← **C05 (Throughput Time)** — time for a job to traverse the system

### Builds Into
- → **C30 (Queueing Model)** — L = λW is Little's Law for queues
- → **C32 (Utilization Effect)** — high utilization = high WIP = long waits
- → **C48 (Safety Stock)** — buffers in supply chains

---

## 📐 Variable Definitions

| Symbol | Meaning |
|--------|---------|
| WIP | Work in Process — units currently in the system |
| Throughput Rate | Units completed per time period |
| Throughput Time | Time a unit spends in the system (also: Flow Time) |
| Bottleneck Rate | Maximum possible throughput rate |

---

## Core Concepts

### 1. Little's Law (C20) — The Universal Law

$$\boxed{\text{WIP} = \text{Throughput Rate} \times \text{Throughput Time}}$$

Equivalently:

$$\text{Throughput Time} = \frac{\text{WIP}}{\text{Throughput Rate}} \qquad \text{Throughput Rate} = \frac{\text{WIP}}{\text{Throughput Time}}$$

> **Draw a box around ANY process** — or part of a process — and Little's Law applies to whatever is inside. Know any two variables → get the third.

**Why it's powerful:**
- **No assumptions** — works for any stable system
- **Universal** — factories, hospitals, Starbucks, email, theme parks
- **Swiss Army knife** — when stuck on an exam problem, try Little's Law first

← *Prerequisite:* C03 (Flow Rate), C05 (Throughput Time)
→ *Builds into:* C30 (Queueing), C23 (WIP-Throughput Tradeoff)
📝 *Exam:* CC2, Midterm Q3 (Grohe Lux), Final Review Q1 (L = λW)

---

### 2. Visualizing Little's Law (C20, C21)

**The Pipe Analogy:**
- Water flows out at 10 gal/min, takes 2 min through pipe
- Water in pipe = $10 \times 2 = 20$ gallons

**GM Oklahoma City Assembly Plant:**

| Variable | Value |
|----------|-------|
| Throughput Rate | 72 cars/hour |
| Throughput Time | 28.5 hours |
| **WIP** | $72 \times 28.5 = \mathbf{2{,}052}$ **cars** |

**Dumbo at Disneyland 🎢:**

| Parameter | Value |
|-----------|-------|
| Seats/ride | 26 |
| Cycle | 3 min (2 ride + 1 load) |
| Throughput Rate | $26/3 = 8.67$ riders/min |
| WIP in line | 520 riders |
| **Wait time** | $520/8.67 = \mathbf{60}$ **min** |

← *Prerequisite:* C20 (Little's Law)
→ *Builds into:* C21 (WIP understanding)
📝 *Exam:* Midterm Q3 (Grohe Lux WIP before/after), CC2

---

### 3. Variability Effects (C22)

> **Variability ALWAYS degrades system performance.** Systems with more variability perform worse than systems with the same averages but less variability.

**Assembly line example:**
- Each station averages 1-hour cycle time (varies 0.5–1.5 hours)
- No WIP between stations
- **Result:** Throughput < 1 unit/hour due to **blocking** and **starving**

**Why variability hurts:**
- **Blocking:** Station B finishes fast but Station C is still busy
- **Starving:** Station C finishes fast but Station B hasn't passed work yet
- Even identical averages → mismatches waste capacity

**Implications:**
- Reducing variability = **free capacity** (no new machines needed)
- **Standardization** (Toyota) reduces variability
- Lean manufacturing obsesses over **consistency**

← *Prerequisite:* C20 (Little's Law)
→ *Builds into:* C33 (Variance Effect in Queueing), C23 (WIP-Throughput Tradeoff)
📝 *Exam:* Midterm Q3 (Grohe Lux — variability explains throughput drop)

---

### 4. WIP-Throughput Tradeoff (C23)

**The Fundamental Tradeoff:**

| As WIP Increases... | Throughput Rate | Throughput Time |
|---------------------|:---:|:---:|
| Low WIP → adding more | ↑ Rises (keeps machines fed) | ↑ Rises (more in pipe) |
| At bottleneck capacity | Plateaus (can't go faster) | ↑ Still rises |
| Beyond bottleneck | Flat (just piles up) | ↑ Keeps rising |

| Choice | Rate | Time | Strategy |
|--------|:---:|:---:|---|
| **Low WIP** | ↓ Lower | ↓ Faster | Prioritize speed |
| **High WIP** | ↑ Higher (to max) | ↑ Slower | Prioritize utilization |

> **You cannot optimize both simultaneously when variability exists.** Choose your operating point based on strategic priorities.

← *Prerequisite:* C20 (Little's Law), C22 (Variability)
→ *Builds into:* C24 (Buffer or Suffer), C32 (Utilization Effect)
📝 *Exam:* Midterm Q3 (Grohe Lux — WIP 7,500→1,200, rate 1,744→1,200)

---

### 5. Buffer or Suffer (C24)

> **"Buffer or Suffer"** — In a system with variability, you MUST hold a buffer or accept reduced throughput. There is no third option.

**Three types of buffers:**

| Buffer Type | Example | Cost |
|-------------|---------|------|
| **Inventory** | Extra WIP keeps machines fed | Holding costs |
| **Capacity** | Run below max utilization | Idle resources |
| **Time** | Accept longer lead times | Customer patience |

**Grohe Lux Case — Buffer or Suffer in Action:**

| Metric | Before | After |
|--------|:---:|:---:|
| WIP | 7,500 | 1,200 |
| Throughput Time | 4.3 weeks | 1.0 week ✅ |
| Throughput Rate | 1,744/week | 1,200/week ❌ |

They removed the buffer and **suffered**: faster flow but **31% less output** = lost revenue.

**Strategic choice depends on CQDF:**
- Cost-focused → accept time buffer
- Delivery-focused → hold inventory buffer
- Flexibility-focused → hold capacity buffer

← *Prerequisite:* C23 (WIP-Throughput Tradeoff), C22 (Variability)
→ *Builds into:* C48 (Safety Stock), C36 (Operations Triangle)
📝 *Exam:* Midterm Q3 ("Buffer or Suffer" is THE answer for Grohe Lux)

---

### 6. Applications Across Domains (C20, C21)

| Context | Given | Little's Law Result |
|---------|-------|-------------------|
| **Frank's Factory** | Lead time: 5 weeks, Demand: 2,000/week | WIP = $5 \times 2{,}000 = \mathbf{10{,}000}$ units |
| **Drug Store** | Sales: 240 boxes/month, Inventory: 80 boxes | Time in stock = $80/240 = \mathbf{10}$ days |
| **Email Inbox** | 25 emails/day, 75 in inbox | Response time = $75/25 = \mathbf{3}$ days |

> Same formula explains factory WIP, shelf life, AND email response time. The principles are truly universal.

---

## 📋 Formula Reference Table

| Formula | LaTeX | When to Use |
|---------|-------|-------------|
| **Little's Law** | $\text{WIP} = \text{Rate} \times \text{Time}$ | Any stable system — know 2, get 3rd |
| **Throughput Time** | $\text{Time} = \text{WIP} / \text{Rate}$ | Find how long units stay in system |
| **Throughput Rate** | $\text{Rate} = \text{WIP} / \text{Time}$ | Find output rate |
| **Queue version** | $L = \lambda W$ | Customers in queue from wait time |

---

## 🎯 Practice Problems

### Problem 1: Frank's Factory WIP

Lead times average 5 weeks, demand = 2,000 units/week. Pat estimates 12-13K WIP, Marcia says 10K, operator says 5K. Who's right?

<details>
<summary>📖 Solution</summary>

$$\text{WIP} = 2{,}000 \times 5 = \mathbf{10{,}000 \text{ units}}$$

**Marcia is correct.** Little's Law gives the mathematically exact answer. Pat overestimates (counting finished goods?), operator underestimates (only seeing their station).

</details>

---

### Problem 2: Department Store

220 customers/hour enter, stay 45 min average. How many in store?

<details>
<summary>📖 Solution</summary>

$$\text{WIP} = 220 \times 0.75 = \mathbf{165 \text{ customers}}$$

> **Watch units!** Convert 45 min → 0.75 hours. Unit mismatch is the #1 Little's Law error.

</details>

---

### Problem 3: Email Response Time

25 emails/day requiring response, 75 in inbox. Average response time?

<details>
<summary>📖 Solution</summary>

$$\text{Time} = 75 / 25 = \mathbf{3 \text{ days}}$$

Want 1-day response? Either reduce WIP to 25 emails or increase rate to 75/day.

</details>

---

### Problem 4: Dumbo at Disneyland 🎢

26 seats/ride, 3-min cycle. 520 in line. What wait time to post?

<details>
<summary>📖 Solution</summary>

$$\text{Rate} = 26/3 = 8.67 \text{ riders/min}$$
$$\text{Wait} = 520/8.67 = \mathbf{60 \text{ minutes}}$$

> Disney overestimates posted times slightly so actual wait feels like a pleasant surprise (Psychology of Waiting #4).

</details>

---

## 🔗 Connections

### Related Lectures
- **Process Analysis (Class 1-2):** Bottleneck, capacity, flow rate → throughput rate in Little's Law
- **Queueing (Class 5):** L = λW is Little's Law for queues; variability quantified via P-K formula

### Exam Appearances
- **CC2:** Little's Law applications
- **Midterm Q1:** Capacity analysis with bottleneck shifting
- **Midterm Q3:** Grohe Lux — Buffer or Suffer (the defining exam question for this lecture)
- **Final Review Q1:** Better Buzz Coffee uses L = λW

### Key Takeaways for the Exam

1. **Little's Law is your first tool** — when stuck, ask "Can Little's Law give me the missing variable?"
2. **Watch units** — throughput rate and throughput time must be in compatible units
3. **Buffer or Suffer** — if asked "why not eliminate all inventory?" this is the answer
4. **Grohe Lux** — memorize the before/after numbers and the Factory Physics curve explanation
5. **Variability degrades everything** — connects to queueing (variance effect) and supply chains (safety stock)

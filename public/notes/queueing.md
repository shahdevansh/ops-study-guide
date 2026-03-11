# 📊 Queueing Theory — Class 5

> **Module B** | **Priority: HIGH** | **Most Tested Topic**
>
> **Key Question:** *How do we design service systems to balance capacity costs with customer waiting times?*
>
> **Case:** Hanover Post Office & Starbucks Service Times

---

## Overview

Queueing theory quantifies the relationship between **utilization**, **variability**, and **waiting times** in service systems. The **Pollaczek-Khinchine (P-K) formula** is your primary weapon:

$$W = M \cdot \frac{\rho}{1-\rho} \cdot \frac{C_a^2 + C_s^2}{2}$$

Two key insights:
1. Waiting times **explode exponentially** as utilization approaches 100% (hockey stick)
2. Variability in arrivals or service **magnifies** these effects dramatically

### Prerequisites
- ← **C04 (Utilization)** — ρ = flow rate / capacity
- ← **C20 (Little's Law)** — WIP = Throughput Rate × Throughput Time
- ← **C22 (Variability Effect)** — variability degrades performance

### Builds Into
- → **C60 (Newsvendor)** — queueing informs service level decisions
- → **C36 (Operations Triangle)** — Cost vs. Delivery vs. Flexibility tradeoff
- → **P03 (Uncertainty & Variability)** — cross-cutting course theme

---

## 📐 Variable Definitions

| Symbol | Meaning | Formula |
|--------|---------|--------|
| $A$ | Average time between arrivals | Given |
| $M$ | Average service time | Given |
| $\lambda$ | Average arrival rate | $\lambda = 1/A$ |
| $\mu$ | Average service rate | $\mu = 1/M$ |
| $\rho$ | **Utilization** | $\rho = M/A = \lambda/\mu$ |
| $s_a$ | Std. deviation of inter-arrival time | Given |
| $s_s$ | Std. deviation of service time | Given |
| $C_a$ | Coefficient of variation (arrivals) | $C_a = s_a / A$ |
| $C_s$ | Coefficient of variation (service) | $C_s = s_s / M$ |
| $W$ | Average wait time in queue | P-K formula |
| $T$ | Total time in system | $T = W + M$ |
| $L$ | Average customers in queue | $L = \lambda W$ |
| $n$ | Number of servers | Given |

---

## Core Concepts

### 1. Basic Queueing Model (C30)

**Setting up any queueing problem:**

1. Identify $A$ (inter-arrival time) and $M$ (service time)
2. Calculate $\rho = M/A$ — **must be < 1** for stability
3. Calculate $C_a = s_a/A$ and $C_s = s_s/M$
4. Plug into P-K formula

> **Critical:** If $\rho \geq 1$ (arrival rate ≥ service rate), the queue grows **without bound**. The system is unstable.

**Connecting to Little's Law:**
- Customers in queue: $L = \lambda W$
- Total in system: $\text{WIP} = \lambda(W + M)$
- Total time: $T = W + M$

← *Prerequisite:* C04 (Utilization), C20 (Little's Law)
→ *Builds into:* C32 (Utilization Effect), C33 (Variance Effect)
📝 *Exam:* CC2 (convenience store), Final Review Q1 (Better Buzz Coffee)

---

### 2. The P-K Formula — Single Server (C30, C32, C33)

$$\boxed{W = M \cdot \frac{\rho}{1-\rho} \cdot \frac{C_a^2 + C_s^2}{2}}$$

**Three multiplicative components:**

| Component | Formula | What It Captures |
|-----------|---------|-----------------|
| **Base** | $M$ | Longer service → longer waits |
| **Utilization Effect** | $\frac{\rho}{1-\rho}$ | Busier server → exponentially longer waits |
| **Variance Effect** | $\frac{C_a^2 + C_s^2}{2}$ | More randomness → longer waits |

> **Because the formula is a PRODUCT:** if ANY component is zero, waiting is zero. Zero variability eliminates all waiting. Very low utilization minimizes waiting.

← *Prerequisite:* C04 (Utilization), C20 (Little's Law)
→ *Builds into:* C31 (Multi-Server), C36 (Operations Triangle)
📝 *Exam:* CC2 Part 2 (convenience store), Final Review Q1 (Better Buzz: W = 3.3 × 4.71 × 1.37 = 21.3 min)

---

### 3. Utilization Effect — The Hockey Stick (C32)

$$\text{Utilization Effect} = \frac{\rho}{1-\rho}$$

| Utilization ($\rho$) | Effect | Interpretation |
|:---:|:---:|---|
| 50% | **1.0** | Baseline |
| 75% | **3.0** | 3× baseline |
| 80% | **4.0** | 4× baseline |
| 85% | **5.7** | Getting dangerous |
| 90% | **9.0** | Waits mushroom |
| 95% | **19.0** | System near collapse |
| 99% | **99.0** | Non-functional |

> **The hockey stick:** Going from 50%→80% increases the effect 4×. Going from 80%→95% increases it another 4.75×. **Small changes near 100% have massive consequences.**

**Strategic implications:**
- **Emergency services** (fire, ER): Low utilization (~30-50%) — responsiveness critical
- **Fast food / retail**: High utilization (~80-90%) — cost efficiency prioritized
- **Rule of thumb:** Never plan for >85% utilization where waiting matters

← *Prerequisite:* C04 (Utilization), C22 (Variability Effect)
→ *Builds into:* C36 (Operations Triangle), C24 (Buffer or Suffer)
📝 *Exam:* CC2 (calculate ρ/(1-ρ)), Final Review Q1 (ρ = 0.825, effect = 4.71)

---

### 4. Variance Effect — The Silent Multiplier (C33, C34)

$$\text{Variance Effect} = \frac{C_a^2 + C_s^2}{2}$$

Where $C_a = s_a/A$ and $C_s = s_s/M$ (coefficients of variation).

| CV Value | Meaning | Example |
|:---:|---|---|
| 0 | **Deterministic** | Assembly line, ATM |
| 0.5 | **Low variability** | Appointments |
| 1.0 | **High variability** | Random arrivals |
| >1.0 | **Very high** | Emergency room |

**Management actions:**

| Reduce $C_a$ (arrivals) | Reduce $C_s$ (service) |
|---|---|
| Appointment systems | Training & standardization |
| Reservations | Fewer menu options |
| Demand smoothing | Specialization (dedicated lanes) |
| Online check-in | Better tools & technology |

> **A system with no variability ($C_a = C_s = 0$) has ZERO waiting** regardless of utilization. Variability is the root cause of all queueing pain.

← *Prerequisite:* C22 (Variability Effect), C34 (Coefficient of Variation)
→ *Builds into:* P03 (Uncertainty & Variability), C48 (Safety Stock)
📝 *Exam:* CC2 (calculate Ca, Cs), Final Review Q1 (Ca = 0.8, Cs = 1.45, effect = 1.37)

---

### 5. Multi-Server Queueing (C31)

$$\boxed{W = \frac{M}{n} \cdot \frac{\rho^{\sqrt{2(n+1)}-1}}{1-\rho} \cdot \frac{C_a^2 + C_s^2}{2}}$$

Where $\rho = M/(n \cdot A)$ = per-server utilization.

**Single vs. Multi-Server:**

| Feature | Single ($n=1$) | Multi ($n$ servers) |
|---------|:---:|:---:|
| Formula prefix | $M$ | $M/n$ |
| Utilization term | $\frac{\rho}{1-\rho}$ | $\frac{\rho^{\sqrt{2(n+1)}-1}}{1-\rho}$ |
| Per-server utilization | $M/A$ | $M/(nA)$ |

> **Pooling Effect:** Adding a 2nd server doesn't just halve wait — it often reduces it by **90%+** because you move left on the hockey stick AND get statistical pooling benefits.

← *Prerequisite:* C30 (Single Server), C32 (Utilization Effect)
→ *Builds into:* C36 (Operations Triangle), C12 (Management Levers)
📝 *Exam:* CC2 (single vs. multi comparison), Final Review Q1c (2nd server: 21.3 min → 1.22 min)

---

### 6. Psychology of Waiting (C35)

When you can't reduce actual waits, manage **perceived** waits:

| # | Principle | Action |
|---|----------|--------|
| 1 | **Unoccupied time** feels longer | Mirrors, menus, TV |
| 2 | **Pre-process waits** feel longer | Triage, greet immediately |
| 3 | **Anxiety** makes waits seem longer | Explain what's happening |
| 4 | **Uncertain waits** feel longer | Post expected times (Disney) |
| 5 | **Unexplained waits** feel longer | Announce delay reasons |
| 6 | **Unfair waits** feel longer | Number systems, single queue |
| 7 | **More valuable** service → more patience | Express lanes |
| 8 | **Solo waits** feel longer | Encourage interaction |

---

### 7. Operations Triangle (C36)

```
         Delivery
          /    \
         / "Bad  \
        /  Stuff"  \
       / (queues,   \
      /   WIP, wait) \
     /________________\
   Cost           Flexibility
```

**Pick two, sacrifice the third:**

| Emphasize | Sacrifice | Example |
|---|---|---|
| Cost + Delivery | Flexibility | Southwest Airlines |
| Cost + Flexibility | Delivery | Build-to-order furniture |
| Delivery + Flexibility | Cost | Emergency room |

> The Operations Triangle is the **qualitative version** of the P-K formula. The formula gives the math; the triangle gives the strategy.

---

## 📋 Formula Reference Table

| Formula | LaTeX | When to Use |
|---------|-------|-------------|
| **Single-server wait** | $W = M \cdot \frac{\rho}{1-\rho} \cdot \frac{C_a^2 + C_s^2}{2}$ | Any single-server queue |
| **Multi-server wait** | $W = \frac{M}{n} \cdot \frac{\rho^{\sqrt{2(n+1)}-1}}{1-\rho} \cdot \frac{C_a^2 + C_s^2}{2}$ | Queue with n servers |
| **Utilization** | $\rho = M/A = \lambda/\mu$ | Always calculate first |
| **Per-server utilization** | $\rho = M/(nA)$ | Multi-server problems |
| **Coeff. of variation** | $C_a = s_a/A$, $C_s = s_s/M$ | Variability measurement |
| **Queue length** | $L = \lambda W = W/A$ | Little's Law for queues |
| **Total time** | $T = W + M$ | Customer's full experience |
| **Total in system** | $\text{WIP} = \lambda(W + M)$ | System-level Little's Law |

---

## ✏️ Worked Example: Hanover Post Office

**Given:**
- Average inter-arrival time: $A = 2.16$ min, $s_a = 2.25$ min
- Average service time: $M = 1.75$ min, $s_s = 1.88$ min
- Single server ($n = 1$)

**Step 1: Utilization**
$$\rho = \frac{M}{A} = \frac{1.75}{2.16} = 0.81$$

**Step 2: Coefficients of variation**
$$C_a = \frac{s_a}{A} = \frac{2.25}{2.16} = 1.04 \qquad C_s = \frac{s_s}{M} = \frac{1.88}{1.75} = 1.07$$

**Step 3: Utilization effect**
$$\frac{\rho}{1-\rho} = \frac{0.81}{0.19} = 4.26$$

**Step 4: Variance effect**
$$\frac{C_a^2 + C_s^2}{2} = \frac{1.04^2 + 1.07^2}{2} = \frac{1.08 + 1.14}{2} = 1.11$$

**Step 5: Wait time**
$$W = 1.75 \times 4.26 \times 1.11 = \boxed{8.3 \text{ minutes}}$$

**Step 6: Total time**
$$T = W + M = 8.3 + 1.75 = 10.05 \text{ minutes}$$

**Step 7: Customers in queue**
$$L = \frac{W}{A} = \frac{8.3}{2.16} = 3.84 \text{ customers}$$

---

## ✏️ Worked Example: Better Buzz Coffee (Final Review Q1)

**Given:** $M = 3.3$ min, $s_s = 4.8$ min, $A = 4.0$ min, $s_a = 3.2$ min

### Part (a): Average time in line (1 server)

1. $\rho = 3.3/4.0 = 0.825$
2. $C_a = 3.2/4.0 = 0.8$, $C_s = 4.8/3.3 = 1.45$
3. Utilization: $0.825/0.175 = 4.71$
4. Variance: $(0.64 + 2.10)/2 = 1.37$
5. $W = 3.3 \times 4.71 \times 1.37 = \boxed{21.3 \text{ min}}$

### Part (b): Customers in line

$$L = \frac{1}{4.0} \times 21.3 = \boxed{5.3 \text{ customers}}$$

### Part (c): With 2 servers

1. $\rho = 3.3/(2 \times 4.0) = 0.41$
2. Exponent: $\sqrt{2(3)} - 1 = \sqrt{6} - 1 = 1.45$
3. Utilization effect: $0.41^{1.45}/0.59 = 0.32/0.59 = 0.54$
4. $W = (3.3/2) \times 0.54 \times 1.37 = \boxed{1.22 \text{ min}}$

> **Dramatic improvement:** 21.3 min → 1.22 min by adding ONE server. This is the pooling effect in action.

---

## 🎯 Practice Problems

### Problem 1: FAA Thumb-Print Reader

Customers arrive every 3 min ($s_a = 3$), service = 2.5 min ($s_s = 2.5$). With thumb-print: service = 2.75 min ($s_s = 2.512$). Calculate total time with and without.

<details>
<summary>📖 Solution</summary>

**Without thumb-print:**
- $\rho = 2.5/3 = 0.833$, $C_a = 1.0$, $C_s = 1.0$
- $W = 2.5 \times (0.833/0.167) \times 1.0 = 2.5 \times 4.99 = 12.5$ min
- **Total = 15.0 min**

**With thumb-print:**
- $\rho = 2.75/3 = 0.917$ ⚠️ Hockey stick territory!
- $C_s = 2.512/2.75 = 0.913$
- Variance = $(1 + 0.834)/2 = 0.917$
- $W = 2.75 \times (0.917/0.083) \times 0.917 = 2.75 \times 11.05 \times 0.917 = 27.9$ min
- **Total = 30.6 min**

> A 15-second service increase **doubles** total time! At 92% utilization, the hockey stick is devastating.

</details>

---

### Problem 2: Bank ATM vs. Teller

ATM: arrive every 2 min ($s_a = 1$), service 1 min ($s_s = 0$). Teller: arrive every 8 min ($s_a = 4$), service 5 min ($s_s = 3$).

<details>
<summary>📖 Solution</summary>

**ATM:**
- $\rho = 0.5$, $C_a = 0.5$, $C_s = 0$ (deterministic!)
- Variance = $(0.25 + 0)/2 = 0.125$
- $W = 1 \times 1.0 \times 0.125 = **0.125$ min** (7.5 seconds)

**Teller:**
- $\rho = 0.625$, $C_a = 0.5$, $C_s = 0.6$
- Variance = $(0.25 + 0.36)/2 = 0.305$
- $W = 5 \times 1.667 \times 0.305 = **2.54$ min**

> Zero service variability ($C_s = 0$) eliminates almost all waiting — **this is why automation reduces queues**.

</details>

---

### Problem 3: Starbucks Service Goal

Arrive at 0.25/min ($s_a = 5.2$ min), service 2.2 min ($s_s = 4$ min). (a) Current wait. (b) With M = 2 min, what $s_s$ achieves 4-min total?

<details>
<summary>📖 Solution</summary>

**(a) Current state:**
- $A = 4$ min, $\rho = 0.55$, $C_a = 1.3$, $C_s = 1.82$
- Variance = $(1.69 + 3.31)/2 = 2.50$
- $W = 2.2 \times 1.22 \times 2.50 = 6.7$ min → **Total = 8.9 min**

**(b) Target with M = 2:**
- Need $W = 2$ min, $\rho = 0.5$, $C_a = 1.3$
- $2 = 2 \times 1.0 \times (1.69 + C_s^2)/2$
- $C_s^2 = 0.31$, $C_s = 0.557$
- $s_s = 0.557 \times 2 = **1.11$ min**

> Must cut service std. dev. from 4 min to 1.1 min — requires **standardized drink prep**.

</details>

---

## 🔗 Connections

### Related Lectures
- **Factory Physics (Class 4):** Little's Law foundation, variability effects, Buffer or Suffer
- **Process Analysis (Class 1-2):** Utilization, capacity, bottleneck concepts feed into ρ

### Exam Appearances
- **CC2:** Convenience store queueing — single and multi-server
- **Final Review Q1:** Better Buzz Coffee — single→multi server comparison (most likely final exam format)
- **Midterm Q3:** Grohe Lux — connects Factory Physics WIP tradeoffs to queueing intuition

### Key Takeaways for the Exam

1. **Always calculate ρ first** — if it's >85%, expect huge waits
2. **Watch for the hockey stick** — small utilization changes near 100% → massive wait changes
3. **Multi-server problems:** recalculate ρ as $M/(nA)$, use the modified formula
4. **Little's Law connects everything:** $L = \lambda W$ gives queue length from wait time
5. **Management actions:** reduce $C_a$ (appointments), reduce $C_s$ (training), add servers
6. **Unit consistency:** always check that A, M, s_a, s_s are in the same time units

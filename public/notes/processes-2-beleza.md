# Processes II — Beleza Natural
**Module:** A | **Priority:** HIGH | **Key Question:** How do we balance resources across a production system to extract value from underutilized resources?

---

## 📋 Overview

Beleza Natural revolutionized the beauty salon industry by applying focused operations strategy — delivering one standardized service (Afro-textured hair treatment) through a rigid, assembly-line process instead of the traditional flexible salon approach. This lecture shows how product-process alignment creates competitive advantage, how to rebalance resources to extract value from underutilized capacity, and why focused operations can achieve both low cost and high quality. The key insight: you can't be everything to everyone, but you can be the absolute best at one thing.

**Case:** Beleza Natural

**Prerequisites:** C01 (Bottleneck), C02 (Process Capacity), C03 (Flow Rate), C04 (Utilization), C09 (Capacity Analysis) — all from [Processes I](processes-1-kristens.md)  
**Builds into:** C23 (WIP-Throughput Tradeoff), C70 (Fisher Matrix), C71 (Efficient vs. Responsive SC)

---

## 📖 Core Concepts

### Product-Process Matrix
**Concepts:** C10 (Product-Process Matrix), C14 (Focused Operations)

The **Product-Process Matrix** maps the natural fit between product variety and process type:

|  | Low Volume / High Variety | High Volume / Low Variety |
|---|---|---|
| **Flexible process** (Job Shop) | ✅ Natural fit — high unit cost | ❌ Mismatch |
| **Rigid process** (Production Line) | ❌ Mismatch | ✅ Natural fit — low unit cost |

#### Industry Examples

| Flexible (Job Shop) | Focused (Production Line) |
|---|---|
| Traditional salon | **Beleza Natural** |
| Full-service restaurant | **McDonald's** |
| General hospital | **Shouldice Hospital** |
| Full-service airline | **JetBlue / Southwest** |

#### Traditional Salon vs. Beleza
- **Traditional salon**: Flexible processes (high unit cost) → high product variety, low volume per service type
- **Beleza Natural**: Rigid, well-defined processes (low unit cost) → standardized product, high volume

> 💡 **Key Insight:** Rigid, well-defined processes enable operational efficiencies. Customers prefer customization and will pay a premium — but focused operations can achieve low cost through specialization.

**Cross-references:**
- ← Prerequisite: C11 (CQDF) — CQDF ranking determines where you sit on the matrix
- → Builds into: C14 (Focused Operations) — extreme position on the matrix
- → Builds into: C70 (Fisher Matrix) — extends product-process thinking to supply chain strategy
- 📝 Exam: Midterm 2026 Q2 — AA company shifting position on product-process matrix (high volume → high customization)
- 📝 Exam: Final Review S1 — Southwest's position on the matrix and impact of adding service classes

---

### Focused Operations Model
**Concepts:** C14 (Focused Operations)

**Focused business model** = Standardized product + Rigid, well-defined processes

#### Strengths
- **Low cost** through specialization and efficiency
- **Competitive differentiation** — do one thing better than anyone
- **Consistent quality** through standardization
- **High volume throughput** — economies of scale

#### Limitations
- Places **limits on change and evolution**
- Restricts **market diversification**
- Vulnerable if the one market you serve **shrinks**

#### Beleza's 5-Step Assembly Line

| Step | Function | Specialized? |
|------|----------|--------------|
| 1. Reception | Check in, assess hair | Yes — trained greeters |
| 2. Division | Section hair for treatment | Yes — skilled technicians |
| 3. Super Relaxing | Chemical treatment | Yes — specialized workers + equipment |
| 4. Hydration | Moisture treatment | Yes — dedicated stations |
| 5. Hair Style | Final styling | Yes — trained stylists |

> 💡 **Key Insight:** Focused operational model exploits the power of rigid, well-defined processes to deliver a narrow product offering at low cost. Innovation in how services/products are delivered creates value and enables new business models.

**Cross-references:**
- ← Prerequisite: C10 (Product-Process Matrix) — focused operations sit in the high-volume/rigid-process quadrant
- ← Prerequisite: C11 (CQDF) — focused model implies specific CQDF ranking
- → Builds into: C71 (Efficient vs. Responsive SC) — focused operations align with efficient supply chains
- 📝 Exam: Midterm 2026 Q2 — AA company's focused model vs. proposed shift to customization
- 📝 Exam: Final Review — Beleza as example of product-process alignment

---

### Beleza Capacity Analysis — Saturday
**Concepts:** C01 (Bottleneck), C02 (Process Capacity), C13 (Bottleneck Shifting)

#### Demand
$$\text{Saturday demand} = \frac{513 \text{ customers/day}}{12 \text{ hours}} = 42.75 \text{ customers/hour}$$

#### Station Capacities

$$\text{Station Capacity} = \frac{\text{Number of Workers} \times 60}{\text{Activity Time per Customer}}$$

| Station | Workers | Time/Customer | Capacity (cust/hr) |
|---------|---------|--------------|---------------------|
| Reception | $2$ | $2$ min | $(2 \times 60)/2 = 60$ |
| Division | $8$ | $12.5$ min | $(8 \times 60)/12.5 = 38.4$ |
| **Super Relaxing** | $18$ | $40$ min | $(18 \times 60)/40 = 27$ |
| Hydration | $4$ | $8$ min | $(4 \times 60)/8 = 30$ |
| Hair Style | $9$ | $14$ min | $(9 \times 60)/14 = 38.6$ |

#### Bottleneck Identification

**Bottleneck = Super Relaxing** at $27$ cust/hr (lowest capacity)

$$\text{Flow Rate} = \min(42.75, 27) = 27 \text{ cust/hr}$$

The system is **capacity-constrained** — demand ($42.75$) exceeds capacity ($27$).

> 💡 **Key Insight:** System performance is determined by the limiting resource (bottleneck capacity). The bottleneck is Super Relaxing, limiting the entire salon to $27$ customers per hour despite having $41$ total workers.

**Cross-references:**
- ← Prerequisite: C01 (Bottleneck), C02 (Process Capacity), C03 (Flow Rate), C09 (Capacity Analysis)
- → Builds into: C13 (Bottleneck Shifting) — rebalancing workers shifts the bottleneck
- 📝 Exam: CC1 Q2 — Same capacity analysis approach applied to different process
- 📝 Exam: Midterm 2026 Q1 — Capacity analysis with setup times (more complex version)

---

### Resource Rebalancing Analysis
**Concepts:** C13 (Bottleneck Shifting)

#### Current Saturday Utilizations

$$\text{Utilization} = \frac{\text{Flow Rate}}{\text{Station Capacity}} = \frac{27}{\text{Station Capacity}}$$

| Station | Capacity | Utilization |
|---------|----------|-------------|
| Reception | $60$ | $27/60 = 45\%$ |
| Division | $38.4$ | $27/38.4 = 70\%$ |
| **Super Relaxing** | $27$ | $27/27 = 100\%$ |
| Hydration | $30$ | $27/30 = 90\%$ |
| Hair Style | $38.6$ | $27/38.6 = 70\%$ |

**Average labor utilization: $78.6\%$**

> Notice the imbalance: Reception at $45\%$ while Super Relaxing is at $100\%$

#### Option 1: Add One SR Worker
- New SR capacity: $(19 \times 60)/40 = 28.5$ cust/hr
- New bottleneck: Still SR
- Weekly flow rate: $1820 \to 1856$ (+36 customers)

#### Option 2: Shift Workers to SR (Recommended)
Move $1$ from Reception and $1$ from Hair Style → SR ($20$ workers)

| Station | Workers | New Capacity | New Utilization |
|---------|---------|-------------|-----------------|
| Reception | $1$ | $30$ | $100\%$ |
| Division | $8$ | $38.4$ | $78\%$ |
| **Super Relaxing** | $20$ | $30$ | $100\%$ |
| Hydration | $4$ | $30$ | $100\%$ |
| Hair Style | $8$ | $34.3$ | $88\%$ |

- New process capacity: $30$ cust/hr (**multiple co-bottlenecks**)
- Weekly flow rate: $1820 \to 1892$ (+72 customers)
- **Average labor utilization: $81.7\%$** (up from $78.6\%$)

> 💡 **Key Insight:** Rebalancing resources across a production system to (roughly) equalize utilization levels extracts value from previously underutilized resources. A more balanced production system achieves higher throughput.

**Cross-references:**
- ← Prerequisite: C01 (Bottleneck), C04 (Utilization), C09 (Capacity Analysis)
- → Builds into: C13 (Bottleneck Shifting) — rebalancing creates new bottlenecks at different stations
- 📝 Exam: CC1 — Capacity analysis with resource rebalancing
- 📝 Exam: Midterm 2026 Q1 — System changes when batch size changes (analogous to rebalancing)

---

### Bottleneck Management Principles
**Concepts:** C01 (Bottleneck), C13 (Bottleneck Shifting)

#### Key Principles

1. **Doubling capacity of bottleneck ≠ doubling system capacity**
   - Adding workers to SR eventually shifts the bottleneck to another station
   - In the rebalanced example, $3$ stations become co-bottlenecks at $30$ cust/hr

2. **Balance the system** — aim to roughly equalize utilization levels
   - No single resource should be dramatically underutilized while another is overloaded
   - Perfect balance is often impossible, but directional improvement helps

3. **Bottlenecks vary by demand pattern**
   - Different days of the week may have different bottlenecks due to varying demand
   - Saturday's bottleneck (SR) may not be Tuesday's bottleneck

4. **Focus improvement on the current bottleneck**
   - Improving a non-bottleneck resource is **wasted effort**
   - But always prepare for where the bottleneck will shift next

> 💡 **Key Insight:** Bottlenecks may move as capacity changes. There may be more than one bottleneck. Focus improvement efforts on the current bottleneck, but prepare for bottleneck shifting.

**Cross-references:**
- ← Prerequisite: C01 (Bottleneck), C09 (Capacity Analysis)
- → Builds into: C23 (WIP-Throughput Tradeoff) — bottleneck capacity determines throughput ceiling
- → Builds into: C24 (Buffer or Suffer) — buffers protect bottlenecks from starvation
- 📝 Exam: Midterm 2026 Q1 — Bottleneck shifts from Station D to Station A when batch size changes
- 📝 Exam: Midterm 2026 Q3 — Grohe Lux: reducing WIP impacts throughput (bottleneck starvation)

---

## 🔢 Formulas

| Formula | Expression | Variables |
|---------|-----------|-----------|
| Resource Capacity | $$\text{Capacity} = \frac{\text{Workers} \times 60}{\text{Activity Time}}$$ | Workers = # at station; Activity Time = min/customer |
| Cycle Time | $$\text{Cycle Time} = \frac{\text{Activity Time}}{\text{Workers}}$$ | Time between successive completions |
| Utilization | $$\text{Utilization} = \frac{\text{Flow Rate}}{\text{Station Capacity}}$$ | Fraction of capacity being used |

**Worked Example — Division Station:**
- $8$ workers, $12.5$ min/customer
- Capacity: $(8 \times 60) / 12.5 = 38.4$ cust/hr
- Cycle time: $12.5 / 8 = 1.56$ min between completions
- Utilization (at flow rate $27$): $27/38.4 = 70\%$

---

## 📝 Practice Problems

### Problem 1: Beleza Saturday Capacity Analysis
**Source:** Beleza Natural After Class Handouts Haas 2026 | **Concepts:** C01, C02

For Beleza Natural on Saturday, calculate the process capacity and identify the bottleneck.

| Station | Workers | Time/Customer |
|---------|---------|---------------|
| Reception | $2$ | $2$ min |
| Division | $8$ | $12.5$ min |
| Super Relaxing | $18$ | $40$ min |
| Hydration | $4$ | $8$ min |
| Hair Style | $9$ | $14$ min |

<details>
<summary>Show Solution</summary>

#### Step 1: Calculate Each Station's Capacity

$$\text{Capacity} = \frac{\text{Workers} \times 60}{\text{Time per Customer}}$$

| Station | Calculation | Capacity |
|---------|-----------|----------|
| Reception | $(2 \times 60)/2$ | $60$ cust/hr |
| Division | $(8 \times 60)/12.5$ | $38.4$ cust/hr |
| Super Relaxing | $(18 \times 60)/40$ | $27$ cust/hr |
| Hydration | $(4 \times 60)/8$ | $30$ cust/hr |
| Hair Style | $(9 \times 60)/14$ | $38.6$ cust/hr |

#### Step 2: Identify Bottleneck
**Bottleneck = Super Relaxing** (minimum capacity at $27$ cust/hr)

#### Step 3: Process Capacity
$$\text{Process Capacity} = \text{Bottleneck Capacity} = 27 \text{ cust/hr}$$

> 💡 Despite $41$ total workers, the system can only serve $27$ customers per hour.

</details>

---

### Problem 2: Beleza Resource Rebalancing
**Source:** Beleza Natural After Class Handouts Haas 2026 | **Concepts:** C13, C04

If Beleza shifts **1 worker from Reception** and **1 worker from Hair Style** to Super Relaxing, calculate the new process capacity and utilizations for Saturday demand of $42.75$ cust/hr.

<details>
<summary>Show Solution</summary>

#### New Configuration
Reception ($1$), Division ($8$), Super Relaxing ($20$), Hydration ($4$), Hair Style ($8$)

#### New Capacities

| Station | Calculation | New Capacity |
|---------|-----------|-------------|
| Reception | $(1 \times 60)/2$ | $30$ cust/hr |
| Division | $(8 \times 60)/12.5$ | $38.4$ cust/hr |
| Super Relaxing | $(20 \times 60)/40$ | $30$ cust/hr |
| Hydration | $(4 \times 60)/8$ | $30$ cust/hr |
| Hair Style | $(8 \times 60)/14$ | $34.3$ cust/hr |

#### New Bottleneck
**Multiple co-bottlenecks**: Reception, Super Relaxing, and Hydration at $30$ cust/hr

$$\text{New Process Capacity} = 30 \text{ cust/hr}$$

#### Utilizations (Flow Rate = $30$ cust/hr)

| Station | Capacity | Utilization |
|---------|----------|-------------|
| Reception | $30$ | $100\%$ |
| Division | $38.4$ | $78\%$ |
| Super Relaxing | $30$ | $100\%$ |
| Hydration | $30$ | $100\%$ |
| Hair Style | $34.3$ | $88\%$ |

> 💡 Throughput increased from $27$ to $30$ cust/hr (+$11\%$) **without adding any workers** — just by moving underutilized resources to the bottleneck.

</details>

---

### Problem 3: Beleza's Focused Operations Strategy (Qualitative)
**Source:** Beleza Natural After Class Handouts Haas 2026 | **Concepts:** C10, C14

Explain why Beleza Natural's focused operations strategy creates competitive advantage over traditional salons. Reference the Product-Process Matrix.

<details>
<summary>Show Solution</summary>

#### Product-Process Matrix Position

**Traditional salons** = Job Shop quadrant
- High variety (cuts, colors, perms, treatments, etc.)
- Flexible processes — each stylist handles entire service
- **High unit cost**, lower volume per service type

**Beleza Natural** = Production Line quadrant
- Low variety (one standardized hair treatment)
- Rigid, well-defined 5-step assembly line
- **Low unit cost**, high volume

#### Sources of Competitive Advantage

1. **Low cost** through specialization — workers specialize in one step → learning curve benefits
2. **Consistent quality** through standardization — every customer gets the same proven treatment
3. **High volume throughput** — assembly-line process serves many more customers
4. **Competitive differentiation** — built expertise in underserved Afro-textured hair market

#### The Tradeoff
Beleza **sacrifices flexibility** (can't offer cuts, colors, or other services) to achieve **cost and quality advantages** in their specific market. Product-process alignment creates sustainable advantage — competitors would need to fundamentally restructure their operations to compete.

</details>

---

## 🔗 Connections
- **Related lectures:** [Processes I — Kristen's Cookies](processes-1-kristens.md), [Operations Strategy](ops-strategy.md)
- **Excel template:** beleza-capacity.xlsx
- **Exam appearances:**
  - Midterm 2026 Q2: Product-process matrix analysis for AA company (analogous to Beleza)
  - Midterm 2026 Q1: Bottleneck shifting when parameters change
  - Final Review S1: Southwest as another example of focused operations + impact of changing strategy

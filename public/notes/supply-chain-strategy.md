# Supply Chain Strategy

**Module:** C | **Priority:** HIGH | **Key Question:** How do we match our supply chain strategy to our products?

---

## 📋 Overview

Ever wondered why Walmart's supply chain is so different from Zara's? This lecture explains the Fisher Matrix - a simple framework that shows why functional products (like pasta or toilet paper) need efficient supply chains focused on low cost, while innovative products (like fashion or new electronics) need responsive supply chains that can react quickly to what's hot. We'll use Sport Obermeyer's ski jacket business to see how companies cope with uncertain demand through better forecasting, early sales data, and dual response strategies that combine both efficiency and flexibility.

**Prerequisites:** newsvendor

---

## 📖 Core Concepts

### 1. The Fisher Matrix: Matching Products with Supply Chains (C70)

**Concepts:** C70

The Fisher Matrix is the **core framework** for matching supply chain strategy to product type:

| | **Functional / Replenishment Products** | **Innovative / Style Products** |
|---|---|---|
| **Efficient Supply Chain** | ✅ **Match** | ❌ Mismatch |
| **Responsive Supply Chain** | ❌ Mismatch | ✅ **Match** |

#### Key Characteristics

**Functional Products** (Barilla pasta, eBeer, toilet paper):
- **Predictable** demand patterns
- Long product life cycles
- Low profit margins
- Low stockout costs

**Innovative Products** (Sport Obermeyer, fashion, new electronics):
- **Unpredictable** demand
- Short product life cycles
- High profit margins
- High stockout costs (lost sales + lost trends)

> **The cardinal sin:** Pairing an innovative product with an efficient supply chain (slow to react) or a functional product with a responsive supply chain (unnecessarily expensive).

**Cross-references:**
- → Builds into: C71 (Efficient vs. Responsive SC), C72 (Dual Response Strategy), C73 (Sport Obermeyer Strategies)
- 📝 Exam: Final Review S2: Classify beer as functional product and ski parkas as innovative product, then prescribe appropriate SC strategies

---

### 2. Efficient vs. Responsive Supply Chains (C71)

**Concepts:** C71

#### Efficient Supply Chain
> **Match with Functional Products** (Barilla Pasta, eBeer)

- **Goal:** Minimize cost, maximize throughput
- **Strategy:** Coordinate internally and with partners
- **Tools:**
  - **S&OP** (Sales & Operations Planning) — internal info sharing
  - **CPFR** (Coordinated Planning, Forecasting & Replenishment) — external info sharing
  - **VMI** (Vendor Managed Inventory) — share decision rights

#### Responsive Supply Chain
> **Match with Innovative Products** (Sport Obermeyer ski jackets)

- **Goal:** React quickly to demand signals, minimize stockouts
- **Strategy:** Use information + flexibility/redundancy

**Four-part framework:**

| Strategy | Approach | Tools |
|---|---|---|
| **Quantify risk** | Forecast distributions, not just means | Newsvendor model |
| **Reduce risk** | Improve forecast accuracy | Early order information |
| **Avoid risk** | Build reactive capacity | Flexible manufacturing |
| **Hedge residual risk** | Diversify | Common components, postponement |

> **Key insight:** Different product/supply characteristics require fundamentally different supply chain strategies — there is no one-size-fits-all.

**Cross-references:**
- ← Prerequisite: C70 (Fisher Matrix) — the framework that determines which approach to use
- → Builds into: C72 (Dual Response Strategy) — combining both approaches
- 📝 Exam: Final Review S2a: Describe strategies for functional products (beer) — S&OP, CPFR, VMI, Final Review S2b: Describe strategies for innovative products (ski parkas) — information + flexibility

---

### 3. Dual Response Strategy (C72)

**Concepts:** C72

> *Source: Dr. Hau Lee, Stanford University*

The **dual response** approach combines efficiency AND responsiveness through **risk-based deployment** of two types of capacity:

#### Two Factory Model

| Factory Type | Characteristics | Purpose |
|---|---|---|
| **Stable Factory** | Ultra-low cost, inflexible | Handles **predictable** base demand |
| **Variable Factory** | Highly flexible, premium price | Handles **uncertain** demand spikes |

#### How It Works

1. **Before season:** Produce predictable demand at the **stable factory** (low cost)
2. **During season:** React to actual demand signals using the **variable factory** (fast response)
3. **Result:** Get both cost efficiency AND demand responsiveness

#### Real-World Examples

- **L.L. Bean:** Uses offshore (efficient) for base production + domestic (responsive) for reactive orders
- **Sport Obermeyer:** Hong Kong factory (stable, 6-month lead) + Chinese subcontractors (variable, short lead)
- **Zara:** Spain factories (responsive) for fashion items + outsourced (efficient) for basics

> **Key insight:** You don't have to choose between efficient and responsive — mixed strategies can achieve both, at the cost of managing two supply chain modes.

**Cross-references:**
- ← Prerequisite: C70 (Fisher Matrix), C71 (Efficient vs. Responsive SC) — dual response combines both approaches
- 📝 Exam: Final Review S2b: Flexibility/redundancy strategies include reactive capacity — dual response is a key example

---

### 4. Sport Obermeyer Strategies (C73)

**Concepts:** C73

Sport Obermeyer sells fashionable ski apparel with **highly uncertain demand** and **long production lead times**. Their strategy is a masterclass in applying operations tools to real uncertainty.

#### The Obermeyer Playbook

1. **Forecast** the distribution of demand (not just a point estimate)
2. **Assess** overage ($C_o$) and underage ($C_u$) costs
3. **Determine** initial production quantities using the **Newsvendor model**
4. **Read** early demand indicators (trade shows, early orders)
5. **Update** demand forecast with new information
6. **Determine** final production quantities

#### Improved Forecasting Method

| Aspect | Previous Method | Current Method |
|---|---|---|
| **Who forecasts** | Wally Obermeyer alone | Committee of experts independently |
| **Mean ($\mu$)** | Single point estimate | **Average** of individual forecasts |
| **Std Dev ($\sigma$)** | Gut feel | **2× standard deviation** of individual forecasts |

> **Why independent forecasting works:** Each expert captures different information. Averaging reduces individual bias (wisdom of crowds). The spread between forecasts captures genuine uncertainty about demand.

#### Connecting to Newsvendor

For each SKU:
$$Q^* = \text{NORM.INV}\left(\frac{C_u}{C_u + C_o}, \mu, \sigma\right)$$

Where:
- $C_u = \text{Price} - \text{Cost}$ (lost profit from understocking)
- $C_o = \text{Cost} - \text{Salvage}$ (loss from overstocking)
- $\mu$ = average of committee forecasts
- $\sigma$ = 2 × std dev of committee forecasts

**Cross-references:**
- ← Prerequisite: C60 (Newsvendor Model), C61 (Critical Fractile), C65 (Normal Distribution), C70 (Fisher Matrix) — Sport Obermeyer applies newsvendor to innovative products
- 📝 Exam: Final Review S2b: Describe strategies for innovative products — forecast distributions, newsvendor, early order info, reactive capacity, CC4: Newsvendor calculations (same framework applied to BrightSide)

---

### 5. Coping with Supply Chain Risk (C73)

**Concepts:** C73

A comprehensive two-pronged approach for innovative/style products:

#### 1. Use of Information

**Quantify Risk:**
- Forecast **distributions**, not just means
- Understand the shape of demand uncertainty ($\mu$ and $\sigma$)
- Make intelligent gambles with the **Newsvendor model**

**Reduce Risk:**
- Improve forecast accuracy with **early order information**
- Use retailer input, trade show data, and committee forecasting
- Update forecasts as new data arrives

#### 2. Use of Flexibility / Redundancy

**Avoid Risk:**
- Increase **reactive capacity** (ability to produce after demand is known)
- Dual response strategy: stable factory + variable factory

**Hedge Against Residual Risk:**
- **Common components** reduce variety-driven uncertainty
- **Pre-positioned inventories** enable fast response
- **Postponement** — delay final customization until demand is revealed

> **The complete toolkit for uncertain demand:**
> 1. Quantify it (distributions + newsvendor)
> 2. Reduce it (better forecasting)
> 3. Avoid it (reactive capacity)
> 4. Hedge what remains (common components + postponement)

**Cross-references:**
- ← Prerequisite: C60 (Newsvendor Model), C70 (Fisher Matrix), C71 (Efficient vs. Responsive SC) — comprehensive framework for innovative products
- → Builds into: C46 (Supply Chain Risk Management), C47 (Risk Mitigation Strategies) — extends to broader risk management
- 📝 Exam: Final Review S2b: Complete framework for innovative product supply chains, Final Review S3: Supply chain risk management — anticipatory strategies and reactive adaptations

---

## 🔢 Formulas

| Formula | Expression | Variables |
|---------|-----------|-----------|
| **Newsvendor (Sport Obermeyer)** | $$Q^* = \text{NORM.INV}\left(\frac{C_u}{C_u + C_o}, \mu, \sigma\right)$$ | $C_u$: underage cost, $C_o$: overage cost, $\mu$: mean forecast, $\sigma$: forecast uncertainty |
| **Committee Forecasting** | $$\mu = \text{Average of forecasts}, \sigma = 2 \times \text{Std dev of forecasts}$$ | Captures both central tendency and disagreement |

---

## 📝 Practice Problems

### Problem 1: Fisher Matrix Classification
**Source:** Final Review After Class Handouts | **Concepts:** C70

Classify the following products and recommend appropriate supply chain strategies:
1. Beer (eBeer game)
2. Ski parkas (Sport Obermeyer)
3. Toilet paper
4. Fashion clothing

<details>
<summary>Show Solution</summary>

| Product | Type | Demand Pattern | Supply Chain Strategy |
|---|---|---|---|
| **Beer** | Functional | Predictable, stable | **Efficient** — S&OP, CPFR, VMI |
| **Ski Parkas** | Innovative | Unpredictable, seasonal | **Responsive** — forecasting, newsvendor, reactive capacity |
| **Toilet Paper** | Functional | Very predictable, commodity | **Efficient** — cost minimization, coordination |
| **Fashion** | Innovative | Highly uncertain, trends | **Responsive** — flexibility, fast reaction |

> **Key insight:** Product characteristics (demand predictability, life cycle, margins) determine the appropriate supply chain design.

</details>

---

### Problem 2: Sport Obermeyer Forecasting
**Source:** Supply Chain Strategies After Class Handouts | **Concepts:** C73

Sport Obermeyer has 5 forecasters predicting demand for a new jacket. Their forecasts are: 1000, 1200, 800, 1100, 900 units.

Using the Obermeyer method, what are the mean and standard deviation for the newsvendor calculation?

<details>
<summary>Show Solution</summary>

**Step 1: Calculate mean**
$$\mu = \frac{1000 + 1200 + 800 + 1100 + 900}{5} = \frac{5000}{5} = 1000 \text{ units}$$

**Step 2: Calculate standard deviation of forecasts**
- Deviations: (0, 200, -200, 100, -100)
- Squared deviations: (0, 40000, 40000, 10000, 10000) = 100,000 total
- Variance: $100,000/4 = 25,000$
- Std dev: $\sqrt{25,000} = 158.1$ units

**Step 3: Apply Obermeyer formula**
$$\sigma = 2 \times 158.1 = 316.2 \text{ units}$$

> **Result:** Use $\mu = 1000$ and $\sigma = 316$ in the newsvendor formula. The disagreement among forecasters (captured by their std dev) becomes the uncertainty parameter.

</details>

---

### Problem 3: Dual Response Strategy Design
**Source:** Supply Chain Strategies After Class Handouts | **Concepts:** C72

A clothing company faces seasonal demand with high uncertainty. Design a dual response strategy with one efficient factory and one responsive factory.

<details>
<summary>Show Solution</summary>

#### Proposed Structure

| Factory | Location | Characteristics | Capacity Allocation |
|---|---|---|---|
| **Stable Factory** | Southeast Asia | Low cost, 6-month lead time | 70% of expected demand |
| **Variable Factory** | Mexico/US | High cost, 2-week lead time | 30% reactive capacity |

#### Operating Model

1. **Pre-season:** Order 70% of expected demand from stable factory
2. **Early season:** Monitor actual sales vs. forecast
3. **Mid-season:** Use variable factory to:
   - Increase production of hot-selling items
   - Reduce production of slow-selling items
4. **Result:** Lower average cost than all-responsive, better service than all-efficient

#### Tradeoffs

| Benefit | Cost |
|---|---|
| ✅ Cost efficiency for predictable demand | ❌ Complexity of managing two suppliers |
| ✅ Responsiveness for uncertain demand | ❌ Higher unit cost for reactive production |
| ✅ Better service than efficient-only | ❌ More working capital (two lead times) |

</details>

---

## 🔗 Connections

**Related Lectures:**
- Newsvendor — quantitative foundation for Sport Obermeyer approach
- Beer Game & Bullwhip — efficient supply chain strategies for functional products
- Supply Chain Risk — extends responsive strategies to risk management

**Exam Appearances:**
- Final Review S2: Complete Fisher Matrix analysis with functional vs. innovative products
- Final Review S3: Risk management strategies build on responsive supply chain concepts

**Excel Templates:**
- None specific, but uses newsvendor calculations extensively
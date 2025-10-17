# 💼 Lendify: AI-driven Loan Master Agent BFSI Chatbot (Tata Capital)

An **AI-powered conversational loan sales system** built for the **Banking, Financial Services, and Insurance (BFSI)** domain.  
This project simulates a **multi-agent AI system** for Tata Capital that handles **end-to-end personal loan processing** — from customer chat to loan sanction.

## 🚀 Overview

This project demonstrates how **Agentic AI** can transform financial sales.  
It features a **Master Agent (AI Controller)** orchestrating multiple **Worker Agents** that collaboratively handle tasks like:
- Customer engagement and persuasion  
- Loan eligibility and verification  
- Credit evaluation and underwriting  
- Sanction letter generation  

The interface is built as a **web-based chatbot** for Tata Capital to increase personal loan sales conversion rates.

## 🧠 Agentic AI Architecture

### 🔹 Master Agent
- Controls the conversation flow  
- Identifies user intent and triggers relevant Worker Agents  
- Coordinates tasks and closes the loan process  

### 🔹 Worker Agents
| Agent | Responsibility |
|--------|----------------|
| 💬 **Sales Agent** | Engages customers, discusses loan amount, tenure, and interest |
| 🔍 **Verification Agent** | Performs KYC checks using a mock CRM server |
| 🧾 **Underwriting Agent** | Fetches credit score (mock API), validates eligibility, requests salary slip if required |
| 📄 **Sanction Letter Generator** | Generates PDF sanction letters automatically for approved loans |

## 🧩 System Design

**Mock APIs and Servers**
- `CRM Server`: Simulated KYC validation (name, phone, address)
- `Credit Bureau API`: Returns dummy credit scores (out of 900)
- `OfferMart Server`: Hosts pre-approved loan offers
- `File Upload`: Dummy salary slip upload (PDF/image)

**Sample Data**
- 10 dummy customers with pre-approved loan limits and credit profiles  
  (stored locally in `/src/data/customers.ts`)

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend Framework** | [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| **State Management** | React Hooks / Context |
| **AI Simulation** | Modular JS classes for Master & Worker agents |
| **PDF Generation** | jsPDF / html2pdf (for sanction letter) |

## 📂 Project Structure

```

loan-master-agent/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── agents/             # Master + Worker agent logic
│   ├── components/         # Reusable React UI components
│   ├── data/               # Synthetic customer and loan data
│   ├── pages/              # Chatbot page + landing UI
│   ├── services/           # Mock API calls
│   └── utils/              # Helper functions
├── index.html
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json

````

## ⚙️ Installation & Setup

```bash
# Clone the repo
git clone https://github.com/RSN601KRI/loan-master-agent.git

# Navigate to folder
cd loan-master-agent

# Install dependencies
npm install

# Run the project
npm run dev
````

> The app will start at `http://localhost:5173/`

## 🧪 Key Features

✅ Human-like conversational interface
✅ Multi-agent orchestration logic
✅ Realistic loan eligibility simulation
✅ KYC & credit score verification flow
✅ Dynamic sanction letter generation
✅ Edge-case handling (rejection, salary slip validation)

## 🧠 Example Chat Flow

**User:** I’m interested in a personal loan
**Master Agent:** Great! Could you share how much you need and for what purpose?
**Sales Agent:** Offers suitable tenure and rates
**Verification Agent:** Confirms your KYC from CRM
**Underwriting Agent:** Fetches credit score → Validates EMI conditions
**Sanction Agent:** Generates final sanction letter (PDF download)

## 📸 Screenshots

(Add screenshots of chatbot UI, sanction letter, and flow diagram)

## 🏗️ Future Enhancements

* Integration with real APIs for credit score and KYC
* NLP-powered conversation layer using LLMs
* Dashboard for loan statistics
* Secure backend integration with databases

## 📜 License

This project is licensed under the **MIT License**.
Feel free to use, modify and distribute with proper attribution.

**“Transforming BFSI with Conversational AI — one loan at a time.”**

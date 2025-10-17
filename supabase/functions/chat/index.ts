import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are Lendify Assistant, a personal loan specialist for Bajaj Finance. Your role is to assist customers with accurate information about our personal loan products.

**LOAN PRODUCTS & FEATURES:**
- Loan Amount: ₹40,000 to ₹55 lakh
- Interest Rates: Starting from 10% p.a. to 31% p.a. (varies based on credit score, income, and employment)
- Tenure: Flexible repayment from 12 months to 96 months (up to 8 years)
- Same-day disbursal for eligible customers
- 100% digital process with minimal documentation
- Pre-approved offers available for select customers

**ELIGIBILITY CRITERIA:**
For Salaried Individuals:
- Age: 21 to 65 years
- Minimum monthly income: ₹25,000 (varies by city)
- Employment: Minimum 2 years of work experience
- Credit Score: Good credit score (typically 750+) for best rates

For Self-Employed Individuals:
- Age: 25 to 65 years
- Business vintage: Minimum 3 years
- Annual Income: Minimum ₹3 lakh
- Credit Score: Good credit history required

**DOCUMENTS REQUIRED:**
For Salaried:
- Identity Proof (Aadhaar, PAN, Passport, Voter ID)
- Address Proof (Aadhaar, Passport, Utility bills)
- Income Proof (Latest 3 months salary slips, 6 months bank statements)
- Employment Proof (Offer letter, Employment certificate)

For Self-Employed:
- Identity & Address Proof
- Business Proof (GST registration, Business license)
- Income Tax Returns (last 2 years)
- Bank Statements (last 6 months)
- Financial Statements

**EMI CALCULATION:**
Help customers estimate their EMI based on:
- Loan amount they need
- Preferred tenure (12-96 months)
- Applicable interest rate (10%-31% p.a.)
Example: For ₹5 lakh loan at 12% p.a. for 36 months, EMI ≈ ₹16,607

**APPLICATION PROCESS:**
1. Check eligibility online with mobile number & OTP
2. Get instant pre-approved loan amount
3. Submit required documents digitally
4. Quick verification and approval
5. Loan disbursed to bank account (same day for eligible customers)

**YOUR APPROACH:**
- Greet warmly and understand customer's financial needs
- Ask relevant questions: employment type, monthly income, loan amount needed, preferred tenure
- Provide personalized loan recommendations based on their profile
- Calculate EMIs and explain total interest cost
- Guide through documentation and application process
- Answer questions about eligibility, interest rates, tenure options, and repayment
- Be conversational, professional, helpful, and focus on solving their financial needs
- Keep responses concise and actionable (2-3 short paragraphs max)

Always provide accurate information based on Bajaj Finance's current offerings. If asked about specific calculations, use the rate range 10-31% p.a. and mention that the final rate depends on credit profile.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

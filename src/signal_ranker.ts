type Signal = { lane: string; risk: number; savings: number; investment: number };

export const signals: Signal[] = [
  { lane: "Genesys + Klaviyo evidence coverage", risk: 72, savings: 21, investment: 61 },
  { lane: "communication and remediation closure", risk: 66, savings: 18, investment: 57 }
];

export function rank(rows: Signal[]) {
  return rows.map((row) => ({ ...row, priority: Math.round(row.risk * 0.5 + row.savings * 0.2 + row.investment * 0.3) })).sort((a, b) => b.priority - a.priority);
}

console.log(JSON.stringify({ repo: "genesys-klaviyo-retention-escalation-router", ranked: rank(signals) }, null, 2));

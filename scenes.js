/* Scene definitions. All artwork is original SVG drawn in code. Company names are plain text wordmarks (no official logos). */
(function () {
  const W = 1600, H = 900;
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const svg = (inner, label) =>
    `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(label)}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${W}" height="${H}" fill="var(--paper)"/>
      <rect width="${W}" height="${H}" filter="url(#grain)" opacity=".5"/>
      ${inner}</svg>`;
  const head = (t, sub) =>
    `<text class="t-head a" style="--d:0" x="110" y="118" font-size="46">${esc(t)}</text>` +
    (sub ? `<text class="t-mono a" style="--d:80" x="112" y="158" font-size="15">${esc(sub)}</text>` : "");
  const hit = (next, aria, inner) =>
    `<g class="hit" data-go="${next}" role="button" tabindex="0" aria-label="${esc(aria)}">${inner}</g>`;
  const chip = (x, y, text, color = "var(--ink2)", d = 0) => {
    const w = text.length * 8.4 + 26;
    return `<g class="a" style="--d:${d}"><rect x="${x}" y="${y}" width="${w}" height="30" rx="15" fill="none" stroke="${color}" stroke-width="1.5"/>
      <text class="t-mono" x="${x + w / 2}" y="${y + 20}" font-size="13" text-anchor="middle" style="fill:${color}">${esc(text)}</text></g>`;
  };
  const note = (x, y, lines, d = 0, anchor = "start", size = 17) =>
    `<g class="a" style="--d:${d}">${lines.map((l, i) =>
      `<text class="${i === 0 ? "t-label" : "t-small"}" x="${x}" y="${y + i * (size + 7)}" font-size="${i === 0 ? size : size - 2}" text-anchor="${anchor}">${esc(l)}</text>`).join("")}</g>`;

  /* small original emblems */
  const bank = (x, y, s = 1, c = "var(--ink)") => `<g transform="translate(${x} ${y}) scale(${s})" fill="none" stroke="${c}" stroke-width="3" stroke-linejoin="round">
    <path d="M-34 -8 L0 -30 L34 -8 Z" fill="var(--paper2)"/><path d="M-26 -4 V24 M-9 -4 V24 M9 -4 V24 M26 -4 V24" /><path d="M-36 28 H36" stroke-width="4"/></g>`;
  const shop = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">
    <rect x="-40" y="-6" width="80" height="44" rx="3" fill="#FBF8F1" stroke="var(--ink)" stroke-width="3"/>
    <path d="M-46 -6 L-38 -30 H38 L46 -6 Z" fill="var(--copper2)" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/>
    <path d="M-23 -30 L-27 -6 M0 -30 V-6 M23 -30 L27 -6" stroke="var(--ink)" stroke-width="2"/>
    <rect x="-12" y="10" width="24" height="28" fill="var(--paper2)" stroke="var(--ink)" stroke-width="2.5"/></g>`;
  const bag = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round">
    <path d="M-14 -14 Q-14 -34 0 -34 Q14 -34 14 -14" fill="none"/><path d="M-30 -14 H30 L26 34 H-26 Z" fill="var(--teal2)"/></g>`;
  const bubble = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round">
    <path d="M-38 -28 H38 Q46 -28 46 -20 V14 Q46 22 38 22 H-8 L-24 36 L-20 22 H-38 Q-46 22 -46 14 V-20 Q-46 -28 -38 -28 Z" fill="var(--teal)"/>
    <circle cx="-18" cy="-3" r="4" fill="var(--paper)" stroke="none"/><circle cx="0" cy="-3" r="4" fill="var(--paper)" stroke="none"/><circle cx="18" cy="-3" r="4" fill="var(--paper)" stroke="none"/></g>`;
  const agent = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">
    <rect x="-28" y="-24" width="56" height="48" rx="14" fill="var(--teal)" stroke="var(--ink)" stroke-width="3"/>
    <circle cx="-10" cy="-2" r="5" fill="var(--paper)"/><circle cx="10" cy="-2" r="5" fill="var(--paper)"/>
    <path d="M-8 12 H8" stroke="var(--paper)" stroke-width="3" stroke-linecap="round"/><path d="M0 -24 V-34" stroke="var(--ink)" stroke-width="3"/><circle cx="0" cy="-37" r="4" fill="var(--copper)"/></g>`;
  const card = (x, y, r = 0, s = 1) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">
    <rect x="-120" y="-76" width="240" height="152" rx="14" fill="url(#cardInk)" filter="url(#soft)"/>
    <rect x="-92" y="-30" width="40" height="30" rx="5" fill="var(--copper2)"/><path d="M-92 -15 H-52 M-72 -30 V0" stroke="#8B5A2B" stroke-width="1.5"/>
    <text class="t-mono" x="-92" y="44" font-size="14" style="fill:#E9E1D2">•••• •••• •••• 4021</text>
    <text class="t-mono" x="-92" y="62" font-size="10" style="fill:#B9B2A4">TOKENIZED</text></g>`;

  const cart = (x, y) => `<g transform="translate(${x} ${y})" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round" fill="none">
    <path d="M-40 -26 H-28 L-18 10 H26 L34 -16 H-24" fill="var(--copper2)"/><circle cx="-12" cy="22" r="6" fill="var(--paper)"/><circle cx="20" cy="22" r="6" fill="var(--paper)"/></g>`;
  const S = {};

  /* ---------- COVER ---------- */
  S.cover = () => {
    const rows = ["Discovery", "Checkout", "Network", "Issuer"];
    const receipt = `<g class="a slide" style="--d:0;--sy:40px">
      <g class="lift"><g transform="translate(1180 450) rotate(-3)">
        ${card(90, 250, 11, .95)}
        <path d="M-210 -350 H210 V300 l-17.5 16 -17.5 -16 -17.5 16 -17.5 -16 -17.5 16 -17.5 -16 -17.5 16 -17.5 -16 -17.5 16 -17.5 -16 -17.5 16 -17.5 -16 -17.5 16 -17.5 -16 -17.5 16 -17.5 -16 -17.5 16 -17.5 -16 -17.5 16 -17.5 -16 -17.5 16 -17.5 -16 -17.5 16 -17.5 -16 Z" fill="#FBF8F1" stroke="#D6CCBA" stroke-width="1.5" filter="url(#soft)"/>
        <text class="t-mono" x="0" y="-292" font-size="20" text-anchor="middle">RECEIPT</text>
        <text class="t-small" x="0" y="-262" font-size="14" text-anchor="middle">ORDER PLACED BY AI AGENT</text>
        <path d="M-170 -236 H170" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="5 6"/>
        ${rows.map((r, i) => `<g class="a" style="--d:${300 + i * 120}">
          <text class="t-label" x="-170" y="${-180 + i * 62}" font-size="24">${r}</text>
          <path d="M${-170 + r.length * 13 + 10} ${-186 + i * 62} H110" stroke="#BFB3A0" stroke-width="2" stroke-dasharray="2 7"/>
          <text class="t-num" x="170" y="${-180 + i * 62}" font-size="30" text-anchor="end" style="fill:var(--copper)">?</text></g>`).join("")}
        <path d="M-170 70 H170" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="5 6"/>
        <text class="t-mono" x="-170" y="114" font-size="16">PAID BY</text>
        <g transform="translate(70 160) rotate(-14)"><g class="a pop" style="--d:900">
          <circle r="66" fill="none" stroke="var(--teal)" stroke-width="5"/><circle r="56" fill="none" stroke="var(--teal)" stroke-width="1.5"/>
          <text class="t-mono" y="10" font-size="30" text-anchor="middle" style="fill:var(--teal);letter-spacing:.14em">AGENT</text></g></g>
        <text class="t-mono cue" x="0" y="282" font-size="15" text-anchor="middle">CLICK RECEIPT TO BEGIN</text>
      </g></g></g>`;
    return svg(`
      <text class="t-mono a" style="--d:0" x="112" y="268" font-size="17">AGENT PAYMENTS · SEP 2026</text>
      <text class="t-display a" style="--d:60" x="106" y="372" font-size="84">Who gets paid</text>
      <text class="t-display a" style="--d:120" x="106" y="468" font-size="84">when the customer</text>
      <text class="t-display a" style="--d:180" x="106" y="564" font-size="84">is an <tspan style="fill:var(--copper)">agent?</tspan></text>
      <text class="t-small a" style="--d:260" x="112" y="628" font-size="24">Value, fees and trust in AI-agent commerce</text>
      ${hit("s1", "Begin: open the receipt", receipt)}`, "Cover: Who gets paid when the customer is an agent?");
  };

  /* ---------- S1: everyone built a door ---------- */
  S.s1 = () => {
    const t0 = Date.UTC(2025, 3, 1), t1 = Date.UTC(2026, 8, 30), x0 = 150, x1 = 1450;
    const X = d => x0 + (Date.parse(d) - t0) / (t1 - t0) * (x1 - x0);
    const ev = [
      ["2025-04-29", "Mastercard", "Agent Pay"], ["2025-04-30", "Visa", "Intelligent Commerce"], ["2025-05-06", "Coinbase", "x402"],
      ["2025-09-16", "Google", "AP2"], ["2025-09-29", "OpenAI · Stripe", "ACP · Instant Checkout"], ["2025-10-14", "Visa", "Trusted Agent Protocol"],
      ["2025-11-25", "PayPal · Perplexity", "Instant Buy"], ["2025-12-11", "Stripe", "Agentic Commerce Suite"], ["2026-01-11", "Google", "UCP"],
      ["2026-03-18", "Stripe · Tempo", "MPP"], ["2026-04-14", "American Express", "ACE kit"], ["2026-06-10", "Mastercard", "Agent Pay for Machines"],
      ["2026-06-10", "Visa · OpenAI", "Partnership"], ["2026-09-02", "Anthropic", "Commerce blueprints"]];
    const TW = 196, TH = 70, rowsY = [214, 300, 386, 472, 558], rowEnd = rowsY.map(() => -1e9);
    let tags = "";
    ev.forEach(([d, b, p], i) => {
      const x = X(d); let left = Math.min(Math.max(x - 16, 60), 1540 - TW);
      let r = rowEnd.findIndex(e => e + 10 < left); if (r < 0) r = rowEnd.indexOf(Math.min(...rowEnd));
      rowEnd[r] = left + TW; const y = rowsY[r];
      tags += `<g class="a drop" style="--d:${120 + i * 55}">
        <path d="M${x} ${y + TH} V742" stroke="#B9AD98" stroke-width="1.5" stroke-dasharray="3 4"/>
        <rect x="${left}" y="${y}" width="${TW}" height="${TH}" rx="6" fill="#FBF8F1" stroke="var(--ink)" stroke-width="2" filter="url(#soft)"/>
        <rect x="${left}" y="${y}" width="6" height="${TH}" rx="3" fill="var(--copper)"/>
        <text class="wm" x="${left + 18}" y="${y + 30}" font-size="19">${esc(b)}</text>
        <text class="t-small" x="${left + 18}" y="${y + 54}" font-size="15">${esc(p)}</text>
        <circle cx="${x}" cy="746" r="5" fill="var(--copper)"/></g>`;
    });
    const months = [["Apr 2025", "2025-04-01"], ["Jul", "2025-07-01"], ["Oct", "2025-10-01"], ["Jan 2026", "2026-01-01"], ["Apr", "2026-04-01"], ["Jul", "2026-07-01"]];
    const ticks = months.map(([l, d]) => `<path d="M${X(d)} 738 V756" stroke="var(--ink)" stroke-width="2"/><text class="t-small" x="${X(d)}" y="786" font-size="16" text-anchor="middle">${l}</text>`).join("");
    const nx = X("2026-09-26");
    const now = hit("s2", "Next: from announcements to actual use", `<g class="lift">
      <rect x="${nx - 58}" y="640" width="116" height="200" fill="transparent"/>
      <path d="M${nx} 668 V770" stroke="var(--verm)" stroke-width="4"/>
      <path d="M${nx} 668 h-66 v34 h66 z" fill="var(--verm)"/>
      <text class="t-mono" x="${nx - 33}" y="691" font-size="14" text-anchor="middle" style="fill:#FBF8F1">NOW</text>
      <text class="t-small" x="${nx}" y="818" font-size="15" text-anchor="middle">Sep 2026</text>
      <circle class="ring" cx="${nx}" cy="746" r="26" fill="none" stroke="var(--verm)" stroke-width="2"/></g>`);
    return svg(`${head("Everyone built a door.", "ANNOUNCED · APR 2025 – SEP 2026")}
      <path class="a draw" style="--d:0;--len:1400" d="M${x0} 746 H${x1}" stroke="var(--ink)" stroke-width="3"/>
      ${ticks}${tags}${now}`, "Timeline of agent payment announcements");
  };

  /* ---------- S2: few walked through ---------- */
  S.s2 = () => {
    let dots = ""; const cols = 60, rows = 30, gx = 110, gy = 228, sp = 15;
    for (let r = 0; r < rows; r++) { let row = ""; for (let c = 0; c < cols; c++) row += `<circle cx="${gx + c * sp}" cy="${gy + r * sp}" r="3.3"/>`; dots += `<g class="a" style="--d:${r * 18}">${row}</g>`; }
    const mx = gx + 59 * sp, my = gy + 29 * sp; /* the magnified dot */
    const lens = hit("s3", "Next: how far consumers trust agents", `<g class="lift">
      <path d="M${mx + 6} ${my - 6} L1150 560" stroke="var(--ink)" stroke-width="2"/>
      <circle cx="${mx}" cy="${my}" r="9" fill="none" stroke="var(--ink)" stroke-width="2"/>
      <circle cx="1230" cy="640" r="112" fill="#FBF8F1" stroke="var(--ink)" stroke-width="4" filter="url(#soft)"/>
      <circle cx="1230" cy="640" r="70" fill="#CBBFAA"/>
      <circle cx="1268" cy="604" r="2.2" fill="var(--copper)"/>
      <circle cx="1268" cy="604" r="10" fill="none" stroke="var(--copper)" stroke-width="1.5"/>
      <circle class="ring" cx="1230" cy="640" r="122" fill="none" stroke="var(--copper)" stroke-width="2"/>
      <text class="t-mono" x="1230" y="782" font-size="13" text-anchor="middle">ONE DOT, MAGNIFIED</text></g>`);
    return svg(`${head("Few have walked through.", "MEASURED USE · WHAT HAS BEEN DISCLOSED")}
      <g fill="#CBBFAA">${dots}</g>
      ${note(110, 700, ["Visa processed transactions: 72 billion", "Apr–Jun 2026 quarter  ·  1 dot ≈ 40 million"], 500)}
      <g class="a" style="--d:700">
        <text class="t-mono" x="1090" y="250" font-size="14">AGENT TRANSACTIONS VISA REPORTED</text>
        <text class="t-num" x="1088" y="316" font-size="60" style="fill:var(--copper)">“hundreds”</text>
        <text class="t-small" x="1090" y="348" font-size="17">Visa, Dec 2025  ·  under 1/40,000 of one dot</text>
        <path d="M1090 380 H1500" stroke="var(--line)" stroke-width="1.5"/>
        <text class="t-mono" x="1090" y="418" font-size="14">AGENT VOLUMES DISCLOSED BY NETWORKS</text>
        <text class="t-num" x="1088" y="478" font-size="52" style="fill:var(--ink)">None</text>
        <text class="t-small" x="1090" y="506" font-size="17">as of Sep 2026</text></g>
      <g class="a pop" style="--d:900">${lens}</g>
      <text class="t-small a" style="--d:900" x="1230" y="806" font-size="14" text-anchor="middle">Copper point still drawn far too large</text>`,
      "Scale: 72 billion Visa transactions versus hundreds of agent transactions");
  };

  /* ---------- S3: trust ladder ---------- */
  S.s3 = () => {
    const base = 730, full = 480, data = [[74, "Routine tasks", "var(--teal)"], [32, "Purchase decisions", "#5E9993"], [9, "Fully autonomous buying", "var(--copper)"]];
    const bars = data.map(([v, l, c], i) => {
      const x = 230 + i * 360, h = full * v / 100, y = base - h;
      const body = `<rect class="a grow" style="--d:${200 + i * 200}" x="${x}" y="${y}" width="250" height="${h}" rx="4" fill="${c}"/>
        <text class="t-num a" style="--d:${400 + i * 200};fill:${i === 2 ? "var(--copper)" : "var(--ink)"}" x="${x + 125}" y="${y - 22}" font-size="68" text-anchor="middle">${v}%</text>
        <text class="t-label a" style="--d:${300 + i * 200}" x="${x + 125}" y="${base + 40}" font-size="21" text-anchor="middle">${l}</text>`;
      if (i < 2) return body;
      return hit("s4", "Next: where the money sits today", `<g class="lift">${body}
        <rect class="ring" x="${x - 14}" y="${y - 110}" width="278" height="${h + 176}" rx="10" fill="none" stroke="var(--copper)" stroke-width="2"/>
        <rect x="${x - 14}" y="${y - 110}" width="278" height="${h + 176}" fill="transparent"/></g>`);
    }).join("");
    return svg(`${head("Help, yes. Pay for me? Rarely.", "SHARE OF CONSUMERS WHO WOULD LET AN AI AGENT…")}
      <path d="M200 ${base - full} H1330" stroke="#BFB3A0" stroke-width="1.5" stroke-dasharray="4 6"/>
      <text class="t-small" x="196" y="${base - full + 5}" font-size="15" text-anchor="end">100%</text>
      <path d="M200 ${base} H1330" stroke="var(--ink)" stroke-width="3"/>
      ${bars}
      ${note(110, 842, ["Accenture Consumer Pulse 2026 · 25,590 consumers · 16 countries (not Thailand)"], 900, "start", 16)}
      <g class="a" style="--d:1000"><rect x="1360" y="380" width="200" height="120" rx="8" fill="#FBF8F1" stroke="var(--ink)" stroke-width="1.5"/>
        <text class="t-mono" x="1378" y="410" font-size="12">US · GARTNER · JAN 2026</text>
        <text class="t-num" x="1378" y="458" font-size="40" style="fill:var(--copper)">≤11%</text>
        <text class="t-small" x="1378" y="484" font-size="14">would let AI decide</text></g>`,
      "Trust ladder: 74%, 32%, 9%");
  };

  /* ---------- S4: fee stack ---------- */
  S.s4 = () => {
    const tag = `<g class="a slide" style="--d:0;--sx:-40px">
      <path d="M150 300 H560 L660 450 L560 600 H150 Z" fill="#FBF8F1" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round" filter="url(#soft)"/>
      <circle cx="585" cy="450" r="14" fill="var(--paper)" stroke="var(--ink)" stroke-width="3"/>
      <text class="t-mono" x="190" y="360" font-size="16">ONLINE CARD PURCHASE</text>
      <text class="t-display" x="186" y="440" font-size="58">Price</text>
      <path d="M440 300 L480 300 L480 600 L440 600" fill="var(--copper)" opacity=".9"/>
      <text class="t-small" x="190" y="500" font-size="17">merchant pays a cut</text>
      <text class="t-small" x="190" y="524" font-size="17">on every sale</text></g>`;
    const layers = [["Issuer", "interchange", 250, bank(0, 0, .9, "var(--paper)")], ["Network", "Visa · Mastercard", 90, ""], ["Acquirer / PSP", "Stripe · Adyen · …", 120, ""]];
    let y = 200, stack = "";
    layers.forEach(([n, s, h], i) => {
      stack += `<g class="a growx" style="--d:${500 + i * 160}">
        <rect x="960" y="${y}" width="360" height="${h - 8}" rx="6" fill="${["var(--ink)", "#4A5670", "var(--copper)"][i]}"/>
        <text class="t-label" x="984" y="${y + 36}" font-size="24" style="fill:#FBF8F1">${n}</text>
        <text class="t-small" x="984" y="${y + 60}" font-size="16" style="fill:#E9E1D2">${esc(s)}</text></g>`;
      if (i === 0) stack += `<g class="a" style="--d:700">${bank(1256, y + 150, 1.1, "#FBF8F1")}</g>`;
      y += h;
    });
    const hitStack = hit("s5", "Next: the new layer above checkout", `<g class="lift">${stack}
      <rect class="ring" x="946" y="186" width="388" height="${y - 186 + 6}" rx="10" fill="none" stroke="var(--copper)" stroke-width="2"/></g>`);
    return svg(`${head("Today’s toll: the card fee.", "WHERE THE CHECKOUT FEE GOES")}
      ${tag}
      <path class="a draw" style="--d:400;--len:500" d="M480 300 C640 230 800 206 940 206 M480 600 C660 660 840 640 940 ${y - 6}" fill="none" stroke="var(--copper)" stroke-width="2" stroke-dasharray="6 6"/>
      <g class="a pop" style="--d:300"><text class="t-num" x="800" y="470" font-size="76" text-anchor="middle" style="fill:var(--copper)">2.35%</text>
        <text class="t-small" x="800" y="506" font-size="16" text-anchor="middle">avg. US merchant fee</text>
        <text class="t-small" x="800" y="528" font-size="16" text-anchor="middle">Visa &amp; Mastercard · 2024</text></g>
      ${hitStack}
      ${chip(1346, 200, "SPLIT ILLUSTRATIVE", "var(--verm)", 900)}
      ${note(960, y + 40, ["Largest share: issuer interchange"], 1000, "start", 17)}`,
      "Card fee stack: issuer, network, acquirer");
  };

  /* ---------- S5: discovery layer (thesis) ---------- */
  S.s5 = () => {
    const tile = (x, kind, sponsored) => `<g transform="translate(${x} 262)">
      <rect width="230" height="170" rx="10" fill="#FBF8F1" stroke="#C7D9D6" stroke-width="2"/>
      ${kind === 0 ? `<path d="M85 120 H145 M115 120 V80 M88 80 L115 36 L142 80 Z" stroke="var(--ink)" stroke-width="3" fill="var(--copper2)" stroke-linejoin="round"/>` :
        kind === 1 ? `<path d="M60 118 H176 Q180 100 160 96 L126 88 L110 64 H72 Q62 64 62 76 Z" fill="var(--teal2)" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/>` :
        `<path d="M80 118 H152 L146 70 H86 Z M90 70 Q116 40 142 70 M152 84 Q172 90 150 106" fill="#E9E1D2" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/>`}
      <rect x="18" y="138" width="${sponsored ? 90 : 120}" height="10" rx="5" fill="#D8CFC0"/>
      ${sponsored ? `<rect x="120" y="14" width="96" height="26" rx="13" fill="var(--copper)"/><text class="t-mono" x="168" y="32" font-size="12" text-anchor="middle" style="fill:#FBF8F1">SPONSORED</text>` : ""}</g>`;
    const panel = hit("s6", "Next: who controls trust", `<g class="lift">
      <rect x="380" y="176" width="840" height="300" rx="18" fill="#FBF8F1" stroke="var(--ink)" stroke-width="3" filter="url(#soft)"/>
      <path d="M380 194 Q380 176 398 176 H1202 Q1220 176 1220 194 V236 H380 Z" fill="var(--teal)"/>
      <circle cx="418" cy="206" r="13" fill="var(--paper)"/><circle cx="418" cy="206" r="5" fill="var(--teal)"/>
      <text class="t-label" x="444" y="214" font-size="20" style="fill:#FBF8F1">AI answer</text>
      ${tile(410, 0, false)}${tile(685, 1, true)}${tile(960, 2, false)}
      <rect class="ring" x="368" y="164" width="864" height="324" rx="24" fill="none" stroke="var(--teal)" stroke-width="2"/></g>`);
    const buy = `<g class="a slide" style="--d:500;--sx:470px;--sy:-236px">
      <rect x="258" y="676" width="124" height="44" rx="22" fill="var(--ink)"/>
      <text class="t-label" x="320" y="704" font-size="18" text-anchor="middle" style="fill:#FBF8F1">Checkout</text></g>`;
    return svg(`${head("The new toll sits above checkout.", "DISCOVERY CAPTURES ATTENTION AND AD MONEY")}
      <g class="a pop" style="--d:0">${panel}</g>
      <path class="a draw" style="--d:300;--len:420" d="M300 590 C300 520 330 470 380 430" fill="none" stroke="var(--copper)" stroke-width="4" stroke-dasharray="2 10" stroke-linecap="round"/>
      <g class="a" style="--d:800"><circle cx="300" cy="560" r="16" fill="var(--copper2)" stroke="var(--ink)" stroke-width="2.5"/><text class="t-num" x="300" y="567" font-size="18" text-anchor="middle">$</text></g>
      <g class="a" style="--d:100">${shop(320, 650, 1.9)}</g>
      <text class="t-label a" style="--d:200" x="320" y="770" font-size="20" text-anchor="middle">Merchant</text>
      ${buy}
      <path class="a draw" style="--d:700;--len:700" d="M400 698 C560 700 700 640 730 480" fill="none" stroke="var(--ink2)" stroke-width="2" stroke-dasharray="5 7"/>
      ${note(460, 610, ["Mar 2026: checkout goes back to merchants", "OpenAI: merchants use their own checkout"], 1000, "start", 18)}
      ${note(282, 470, ["Ad money", "$1B annualized run rate", "ChatGPT ads · Aug 2026"], 900, "end", 18)}
      <g class="a" style="--d:600">
        <rect x="1180" y="600" width="300" height="190" rx="10" fill="var(--ink)"/>
        <rect x="1180" y="600" width="300" height="56" rx="10" fill="#4A5670"/><rect x="1180" y="646" width="300" height="10" fill="#4A5670"/>
        <text class="t-label" x="1204" y="636" font-size="18" style="fill:#FBF8F1">Payment rails</text>
        <text class="t-num" x="1204" y="716" font-size="44" style="fill:var(--copper2)">~2.35%</text>
        <text class="t-small" x="1204" y="746" font-size="15" style="fill:#E9E1D2">US avg. card fee · 2024</text>
        <text class="t-small" x="1204" y="768" font-size="15" style="fill:#E9E1D2">unchanged by agents so far</text></g>
      <g class="a" style="--d:1100"><rect x="1250" y="500" width="300" height="66" rx="8" fill="none" stroke="var(--verm)" stroke-width="1.5" stroke-dasharray="4 4"/>
        <text class="t-label" x="1266" y="527" font-size="15" style="fill:var(--verm)">Reported: 4% in-chat checkout fee</text>
        <text class="t-small" x="1266" y="550" font-size="14">Shopify merchants · Jan 2026 · news report</text></g>`,
      "Discovery layer above checkout captures ad money");
  };

  /* ---------- S6: trust gate ---------- */
  S.s6 = () => {
    const pipes = ["ACP", "AP2 / UCP", "TAP", "MPP", "x402"];
    const py = i => 300 + i * 82;
    const pipeSvg = pipes.map((p, i) => `<g>
      <path class="a draw" style="--d:${200 + i * 80};--len:1100" d="M300 ${py(i)} H1300" stroke="#B9AD98" stroke-width="16" stroke-linecap="round"/>
      <path class="a draw" style="--d:${260 + i * 80};--len:1100" d="M300 ${py(i)} H1300" stroke="#FBF8F1" stroke-width="8" stroke-linecap="round"/>
      <text class="t-label a" style="--d:${200 + i * 80}" x="280" y="${py(i) + 7}" font-size="20" text-anchor="end">${p}</text></g>`).join("");
    const gate = hit("s7", "Next: the machine-payment rail", `<g class="a drop" style="--d:700"><g class="lift">
      <rect x="690" y="236" width="220" height="440" rx="12" fill="var(--ink)" filter="url(#soft)"/>
      <rect x="712" y="258" width="176" height="44" rx="6" fill="#FBF8F1"/>
      <text class="t-mono" x="800" y="286" font-size="13" text-anchor="middle">TRUST GATE</text>
      ${["Visa", "Mastercard", "Amex"].map((b, i) => `<rect x="712" y="${330 + i * 62}" width="176" height="48" rx="6" fill="#2C364A" stroke="#56627A"/>
        <text class="wm" x="800" y="${361 + i * 62}" font-size="20" text-anchor="middle" style="fill:#FBF8F1">${b}</text>`).join("")}
      <text class="t-small" x="800" y="540" font-size="15" text-anchor="middle" style="fill:#E9E1D2">tokens</text>
      <text class="t-small" x="800" y="564" font-size="15" text-anchor="middle" style="fill:#E9E1D2">agent ID</text>
      <text class="t-small" x="800" y="588" font-size="15" text-anchor="middle" style="fill:#E9E1D2">disputes</text>
      <rect class="ring" x="678" y="224" width="244" height="464" rx="16" fill="none" stroke="var(--copper)" stroke-width="2"/></g></g>`);
    return svg(`${head("Incumbents build the trust gate.", "EVERY NEW PROTOCOL STILL PASSES A CARD-NETWORK CHECKPOINT")}
      ${chip(1330, 92, "INTERPRETATION", "var(--verm)", 0)}
      <g class="a" style="--d:100">${agent(140, 400)}${agent(200, 500, .8)}${agent(130, 590, .9)}</g>
      <text class="t-label a" style="--d:100" x="160" y="690" font-size="20" text-anchor="middle">Agents</text>
      ${pipeSvg}
      <g class="a" style="--d:900">${shop(1420, 400, .9)}${shop(1470, 520, .8)}${shop(1410, 630, .85)}</g>
      <text class="t-label a" style="--d:900" x="1440" y="720" font-size="20" text-anchor="middle">Merchants</text>
      ${gate}
      ${note(300, 760, ["Visa Intelligent Commerce Connect: TAP · MPP · ACP · UCP", "Pilot · Apr 2026"], 1000, "start", 17)}
      ${note(930, 760, ["Visa, Mastercard, Amex among x402 Foundation backers", "Linux Foundation · Apr 2026"], 1050, "start", 17)}`,
      "Protocols pass through a card-network trust gate");
  };

  /* ---------- S7: two rails ---------- */
  S.s7 = () => {
    const rail = (y, d) => `<path class="a draw" style="--d:${d};--len:1300" d="M160 ${y} H1440" stroke="var(--ink)" stroke-width="5"/>
      ${Array.from({ length: 26 }, (_, i) => `<path class="a" style="--d:${d + i * 12}" d="M${180 + i * 49} ${y - 12} V${y + 12}" stroke="var(--ink)" stroke-width="3"/>`).join("")}`;
    const big = 1000, small = Math.max(big * 0.187861 / 44.121, 1);
    const bars = hit("s8", "Next: who pays when an agent is wrong", `<g class="lift">
      <rect x="160" y="560" width="${big}" height="54" fill="#BFB3A0" class="a growx" style="--d:600"/>
      <text class="t-label a" style="--d:700" x="${160 + big + 18}" y="586" font-size="24">$44.1M</text>
      <text class="t-small a" style="--d:700" x="${160 + big + 18}" y="610" font-size="15">settled via x402 on Base · 280 days</text>
      <rect x="160" y="650" width="${small}" height="54" fill="var(--copper)" class="a" style="--d:900"/>
      <text class="t-label a" style="--d:950" x="190" y="676" font-size="24" style="fill:var(--copper)">$0.19M</text>
      <text class="t-small a" style="--d:950" x="190" y="700" font-size="15">provably reached named services</text>
      <rect class="ring" x="146" y="546" width="1300" height="172" rx="10" fill="none" stroke="var(--copper)" stroke-width="2"/>
      <rect x="146" y="546" width="1300" height="172" fill="transparent"/></g>`);
    return svg(`${head("Machine payments: big counts, small money.", "TWO RAILS FOR AGENTS")}
      ${rail(250, 100)}
      <text class="t-label a" style="--d:200" x="160" y="222" font-size="22">Shopping → card tokens</text>
      <g class="a slide" style="--d:500;--sx:-300px">${cart(1000, 214)}</g>
      ${rail(420, 300)}
      ${[0,1,2,3,4,5].map(i => `<g class="a slide" style="--d:${600 + i * 60};--sx:-200px"><rect x="${520 + i * 74}" y="400" width="58" height="26" rx="4" fill="var(--teal)"/><text class="t-mono" x="${549 + i * 74}" y="418" font-size="12" text-anchor="middle" style="fill:#FBF8F1">402</text></g>`).join("")}
      <text class="t-label a" style="--d:400" x="160" y="392" font-size="22">APIs &amp; data → HTTP 402 · stablecoins</text>
      <g class="a" style="--d:500"><rect x="1130" y="328" width="310" height="62" rx="8" fill="#FBF8F1" stroke="var(--ink)" stroke-width="1.5"/>
        <text class="t-label" x="1148" y="354" font-size="15">Coinbase claim via media · Aug 2026</text>
        <text class="t-small" x="1148" y="376" font-size="14">205M transactions · $53M</text></g>
      ${bars}
      ${note(160, 790, ["Ling et al., arXiv preprint, Jul 2026 · not peer-reviewed · bars to scale"], 1100, "start", 16)}`,
      "x402 settled value versus value provably reaching named services");
  };

  /* ---------- S8: liability gap ---------- */
  S.s8 = () => {
    const q = hit("s9", "Next: the conditional map", `<g class="a pop" style="--d:700"><g class="lift">
      <circle cx="800" cy="470" r="92" fill="var(--verm)" filter="url(#soft)"/>
      <text class="t-num" x="800" y="512" font-size="120" text-anchor="middle" style="fill:#FBF8F1">?</text>
      <circle class="ring" cx="800" cy="470" r="104" fill="none" stroke="var(--verm)" stroke-width="2"/></g></g>`);
    const parties = [[330, 300, bag(0, 0, 1.3), "Shopper"], [1270, 300, shop(0, 0, 1.2), "Merchant"], [330, 660, bank(0, 0, 1.3), "Issuing bank"], [1270, 660, bubble(0, 0, 1.2), "AI platform"]];
    const ps = parties.map(([x, y, g, l], i) => `<g class="a" style="--d:${200 + i * 100}">
      <path d="M${x} ${y} L800 470" stroke="var(--verm)" stroke-width="2" stroke-dasharray="6 7"/>
      <circle cx="${x}" cy="${y}" r="70" fill="#FBF8F1" stroke="var(--ink)" stroke-width="2"/>${g.replace(/translate\(0 0\)/, `translate(${x} ${y})`)}
      <text class="t-label" x="${x}" y="${y + 104}" font-size="21" text-anchor="middle">${l}</text></g>`).join("");
    return svg(`${head("Agent bought the wrong thing. Who pays?", "LIABILITY · STATUS SEP 2026")}
      <g class="a" style="--d:0"><g transform="translate(800 470) rotate(4)">
        <rect x="-150" y="-190" width="300" height="380" rx="4" fill="#FBF8F1" stroke="#D6CCBA" stroke-width="1.5" filter="url(#soft)"/>
        ${[0, 1, 2, 3, 4].map(i => `<rect x="-120" y="${-150 + i * 34}" width="${[200, 150, 180, 120, 160][i]}" height="10" rx="5" fill="#D8CFC0"/>`).join("")}
        <g transform="translate(0 120) rotate(-10)"><rect x="-118" y="-30" width="236" height="60" rx="6" fill="none" stroke="var(--verm)" stroke-width="4"/>
          <text class="t-mono" y="10" font-size="24" text-anchor="middle" style="fill:var(--verm)">WRONG ITEM</text></g></g></g>
      ${ps}${q}
      <text class="t-label a" style="--d:900" x="800" y="236" font-size="22" text-anchor="middle" style="fill:var(--verm)">No agent-specific liability shift yet</text>
      ${note(110, 812, ["Amex: protects cardholders from registered-agent errors · Apr 2026"], 1000, "start", 15)}
      ${note(110, 840, ["6 banks: voluntary agentic-commerce principles · Sep 2026"], 1050, "start", 15)}`,
      "Liability gap between shopper, merchant, bank and AI platform");
  };

  /* ---------- S9: conditional map (final) ---------- */
  S.s9 = () => {
    /* layers: [label, sub, fill, text colour, y, h] */
    const L = [["Discovery", "AI answers · ads · ranking", "var(--teal)", "#FBF8F1", 200, 170],
               ["Merchant checkout", "", "#FBF8F1", "var(--ink)", 400, 80],
               ["Card network", "", "#4A5670", "#FBF8F1", 500, 80],
               ["Issuing bank", "", "var(--ink)", "#FBF8F1", 600, 80]];
    const st = L.map(([n, sub, c, tc, y, h], i) => `<g class="a ${i === 0 ? "grow" : ""}" style="--d:${i === 0 ? 650 : 100 + i * 110}">
        <rect x="170" y="${y}" width="${i === 0 ? 760 : 620}" height="${h}" rx="10" fill="${c}" stroke="var(--ink)" stroke-width="${i === 1 ? 2 : 0}"/>
        <text class="t-label" x="200" y="${y + (i === 0 ? 62 : 49)}" font-size="${i === 0 ? 34 : 22}" style="fill:${tc}">${n}</text>
        ${sub ? `<text class="t-small" x="200" y="${y + 100}" font-size="19" style="fill:#E6F1EF">${sub}</text>` : ""}</g>`).join("");
    const arrows = [0, 1, 2].map(i => {
      const y = 440 + i * 100, x = 1010 + i * 44, ty = 250 + i * 44;
      return `<path class="a draw" style="--d:${350 + i * 90};--len:900" d="M790 ${y} H${x - 20} Q${x} ${y} ${x} ${y - 20} V${ty + 20} Q${x} ${ty} ${x - 20} ${ty} H948" fill="none" stroke="var(--copper)" stroke-width="5" stroke-linecap="round"/>
        <path class="a" style="--d:${900 + i * 90}" d="M950 ${ty - 9} L934 ${ty} L950 ${ty + 9}" fill="none" stroke="var(--copper)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" transform="rotate(180 942 ${ty})"/>`;
    }).join("");
    const th = hit("th", "Branch: Thailand", `<g class="a pop" style="--d:1100"><g class="lift"><g transform="translate(1400 690) rotate(-8)">
      <circle r="92" fill="#FBF8F1" stroke="var(--ink)" stroke-width="3" filter="url(#soft)"/><circle r="78" fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="3 5"/>
      <text class="t-num" y="12" font-size="48" text-anchor="middle">TH</text>
      <text class="t-mono" y="46" font-size="13" text-anchor="middle">THAILAND</text>
      <circle class="ring" r="104" fill="none" stroke="var(--copper)" stroke-width="2"/></g></g></g>`);
    return svg(`${head("Value follows discovery — if trust holds.", "CONDITIONAL MAP")}
      ${chip(1330, 92, "SCENARIO, NOT FORECAST", "var(--verm)", 0)}
      ${st}${arrows}
      <g class="a" style="--d:950">
        <path d="M985 395 H1160" stroke="var(--verm)" stroke-width="6" stroke-linecap="round" stroke-dasharray="26 14"/>
        <rect x="1190" y="352" width="290" height="94" rx="8" fill="#FBF8F1" stroke="var(--verm)" stroke-width="2"/>
        <text class="t-mono" x="1210" y="382" font-size="13" style="fill:var(--verm)">ONLY IF</text>
        <text class="t-label" x="1210" y="409" font-size="19">agents are trusted</text>
        <text class="t-label" x="1210" y="433" font-size="19">+ liability rules exist</text></g>
      ${note(170, 760, ["Rails keep their cut; the new margin sits in discovery"], 1000, "start", 19)}
      ${th}`, "Conditional map: value flows toward discovery if trust holds");
  };

  /* ---------- Branch: Thailand ---------- */
  S.th = () => {
    const issuers = ["KBank", "KTC", "ttb", "AEON Thana Sinsap"];
    let qr = ""; const seed = [0x9d, 0x3a, 0xe6, 0x51, 0xb7, 0x2c, 0x7f, 0xc8, 0x46, 0x1b, 0xf2, 0x69, 0xa5, 0x3e];
    for (let r = 0; r < 14; r++) for (let c = 0; c < 14; c++) { const on = (seed[r] >> (c % 8)) & 1 ^ (c > 7 ? (r & 1) : 0); const corner = (r < 4 && c < 4) || (r < 4 && c > 9) || (r > 9 && c < 4); if (on && !corner) qr += `<rect x="${c * 14}" y="${r * 14}" width="14" height="14"/>`; }
    const finder = (x, y) => `<rect x="${x}" y="${y}" width="56" height="56" fill="none" stroke="var(--ink)" stroke-width="8"/><rect x="${x + 16}" y="${y + 16}" width="24" height="24"/>`;
    const back = hit("s9", "Return to the conditional map", `<g class="lift">
      <rect x="1300" y="770" width="220" height="56" rx="28" fill="var(--ink)"/>
      <text class="t-label" x="1410" y="805" font-size="18" text-anchor="middle" style="fill:#FBF8F1">Back to the map</text>
      <rect class="ring" x="1290" y="760" width="240" height="76" rx="38" fill="none" stroke="var(--copper)" stroke-width="2"/></g>`);
    return svg(`${head("Thailand: still in the test lab.", "BRANCH · STATUS SEP 2026")}
      <g class="a" style="--d:100">
        <rect x="110" y="210" width="720" height="440" rx="18" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-dasharray="10 8"/>
        <text class="t-mono" x="140" y="252" font-size="15">VISA AGENTIC READY · ISSUER TESTING · SINCE APR 2026</text></g>
      ${issuers.map((b, i) => `<g class="a drop" style="--d:${250 + i * 110}">
        <rect x="${150 + (i % 2) * 330}" y="${300 + Math.floor(i / 2) * 150}" width="300" height="110" rx="10" fill="#FBF8F1" stroke="var(--ink)" stroke-width="2" filter="url(#soft)"/>
        <text class="wm" x="${300 + (i % 2) * 330}" y="${366 + Math.floor(i / 2) * 150}" font-size="${b.length > 8 ? 22 : 30}" text-anchor="middle">${b}</text></g>`).join("")}
      <g class="a" style="--d:700"><g transform="translate(960 250)">
        <rect x="-24" y="-24" width="244" height="244" rx="14" fill="#FBF8F1" stroke="var(--ink)" stroke-width="2"/>
        <g fill="var(--ink)">${qr}${finder(0, 0)}${finder(140, 0)}${finder(0, 140)}</g>
        <text class="t-label" x="98" y="262" font-size="22" text-anchor="middle">PromptPay</text></g></g>
      ${note(1240, 300, ["Agent-payment policy", "none found (BOT, Sep 2026)"], 850, "start", 20)}
      ${note(1240, 420, ["USDT / USDC", "trading pairs only, not payments", "Thai SEC · Mar 2025"], 950, "start", 20)}
      ${note(110, 720, ["Generic QR pattern drawn for illustration; not a real code or logo"], 1000, "start", 15)}
      ${back}`, "Thailand branch");
  };

  window.SCENES = { order: ["cover", "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"], branches: { th: "s9" }, build: S };
})();

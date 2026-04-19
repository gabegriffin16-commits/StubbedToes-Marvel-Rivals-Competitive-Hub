import { useState, useEffect, useCallback } from "react";

const API = "https://marvelrivalsapi.com/api/v1/player/";
const KEY = "85d2073929f02ab57111e6b059dc1076cc4d1430bb3519c7c1e7a2c98f32411b";

const PLAYERS = [
  { label: "Begin", ign: "Begooon", id: "1347122425" },
  { label: "Begin (Alt)", ign: "Deanna Schmidt", id: "1436317669" },
  { label: "Ayden", ign: "VeloxG", id: "33050531" },
  { label: "Tristen", ign: "keetohwo", alt: "potsmoker34", id: "1340539275" },
  { label: "T-Money", ign: "xGhost-Emx", id: "88489080" },
  { label: "Gabe", ign: "froglin_", id: "1767308270" },
  { label: "Sam", ign: "SAMBRI912", id: "1558596661" },
  { label: "Zach", ign: "Rothmaxing", id: "802297818" },
  { label: "Raquel", ign: "Wendigloop", id: "997192574" },
  { label: "Jace", ign: "Jaejanken", id: "1899986434" },
];

const SEASONS = { "Season 7": 14, "Season 7.5": 15 };

const C = { bg: "#0b0a12", panel: "#12111a", sec: "#1a1825", border: "#2a2740", brand: "#4eca6a", accent: "#ff4d6a", gold: "#ffd700", blue: "#4d9fff", purple: "#a855f7", text: "#e8e6f0", dim: "#9994b8", muted: "#6b6588" };

function Badge({ color, text }) {
  return <span style={{ background: `${color}22`, color, border: `1px solid ${color}44`, padding: "2px 8px", borderRadius: "4px", fontSize: "10px", fontWeight: 700, letterSpacing: "0.8px", fontFamily: "'Rajdhani',sans-serif" }}>{text}</span>;
}

function formatKDA(k, d, a, g) {
  if (!g) return "—";
  const kpg = (k / g).toFixed(1), dpg = (d / g).toFixed(1), apg = (a / g).toFixed(1);
  const ratio = d > 0 ? ((k + a) / d).toFixed(2) : "Perfect";
  return `${kpg}/${dpg}/${apg} (${ratio})`;
}

function processPlayer(raw, label) {
  if (!raw || raw.error || raw.message) return { label, error: raw?.message || raw?.error || "Failed to fetch", private: raw?.message?.includes("private") };

  const os = raw.overall_stats || {};
  const rw = os.ranked?.total_wins || 0;
  const rt = os.ranked?.total_matches || 0;

  const heroes = (raw.heroes_ranked || [])
    .filter(h => (h.total_matches || h.matches || 0) > 0)
    .map(h => {
      const g = h.total_matches || h.matches || 0;
      const w = h.total_wins || h.win || 0;
      const k = h.total_kills || h.kills || 0;
      const d = h.total_deaths || h.deaths || 0;
      const a = h.total_assists || h.assists || 0;
      return { name: h.hero_name || "Unknown", g, w, wr: g > 0 ? Math.round((w / g) * 100) : 0, k, d, a, kda: formatKDA(k, d, a, g), mvp: h.total_mvp || h.mvp || 0, svp: h.total_svp || h.svp || 0 };
    })
    .sort((a, b) => b.g - a.g);

  const matches = (raw.match_history || []).map(m => ({
    hero: m.player_performance?.hero_name || "Unknown",
    mode: m.game_mode_id,
    modeLabel: m.game_mode_id === 1 ? "QP" : m.game_mode_id === 2 ? "Comp" : m.game_mode_id === 9 ? "Tournament" : `Mode${m.game_mode_id}`,
    season: m.season,
    win: m.player_performance?.is_win?.is_win,
    k: m.player_performance?.kills || 0,
    d: m.player_performance?.deaths || 0,
    a: m.player_performance?.assists || 0,
    map: m.map_id,
    duration: Math.round((m.duration || 0) / 60),
  }));

  const teammates = (raw.team_mates || []).map(t => ({
    name: t.name || t.nick_name || "Unknown",
    wr: t.win_rate || "0",
    g: t.total_matches || 0,
  }));

  return {
    label,
    name: raw.name,
    uid: raw.uid,
    rank: raw.player?.rank?.rank || "N/A",
    private: raw.isPrivate,
    comp: { w: rw, l: rt - rw, total: rt },
    heroes,
    matches,
    teammates,
    allModes: { total: os.total_matches || 0, wins: os.total_wins || 0 },
  };
}

function generateClaudeExport(results, seasonLabel) {
  let out = `# STUBBEDTOES SCRAPE — ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })}\n`;
  out += `## Source: marvelrivalsapi.com | Season: ${seasonLabel}\n\n`;

  for (const r of results) {
    if (r.error) {
      out += `### ${r.label} — ${r.private ? "PRIVATE" : "ERROR"}\n${r.error}\n\n`;
      continue;
    }
    out += `### ${r.label} (${r.name}) — ${r.rank}\n`;
    out += `Comp: ${r.comp.w}W ${r.comp.l}L (${r.comp.total}g)`;
    if (r.comp.total > 0) out += ` ${Math.round((r.comp.w / r.comp.total) * 100)}%`;
    out += `\n`;

    if (r.heroes.length > 0) {
      out += `Heroes (Comp):\n`;
      for (const h of r.heroes) {
        out += `  ${h.name}: ${h.g}g ${h.kda} | ${h.mvp}MVP ${h.svp}SVP\n`;
      }
    } else {
      out += `Heroes (Comp): None\n`;
    }

    const compMatches = r.matches.filter(m => m.mode === 2);
    const tourneyMatches = r.matches.filter(m => m.mode === 9);
    const qpMatches = r.matches.filter(m => m.mode === 1);

    if (tourneyMatches.length > 0) {
      const tw = tourneyMatches.filter(m => m.win).length;
      out += `Tournament (${tw}W ${tourneyMatches.length - tw}L):\n`;
      for (const m of tourneyMatches) {
        out += `  ${m.hero} ${m.win ? "WIN" : "LOSS"} ${m.k}/${m.d}/${m.a} ${m.duration}m\n`;
      }
    }

    if (compMatches.length > 0) {
      out += `Recent Comp (${compMatches.length}g):\n`;
      for (const m of compMatches.slice(0, 8)) {
        out += `  ${m.hero} ${m.win ? "WIN" : "LOSS"} ${m.k}/${m.d}/${m.a} ${m.duration}m\n`;
      }
    }

    if (r.teammates.length > 0) {
      out += `Teammates: ${r.teammates.map(t => `${t.name} ${t.wr}% ${t.g}g`).join(" | ")}\n`;
    }
    out += `\n`;
  }
  return out;
}

export default function StubbedToesScraper() {
  const [season, setSeason] = useState("Season 7.5");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [expanded, setExpanded] = useState(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    setResults([]);
    setError(null);
    const seasonNum = SEASONS[season];
    const total = PLAYERS.length;
    setProgress({ done: 0, total });

    const fetched = [];
    for (let i = 0; i < PLAYERS.length; i++) {
      const p = PLAYERS[i];
      const igns = [p.ign];
      if (p.alt) igns.push(p.alt);

      let data = null;
      for (const ign of igns) {
        try {
          const url = `${API}${encodeURIComponent(ign)}?season=${seasonNum}`;
          const resp = await fetch(url, { headers: { "x-api-key": KEY } });
          const json = await resp.json();
          if (!json.error && !json.message) {
            data = json;
            break;
          }
          if (json.message?.includes("private")) {
            data = json;
            break;
          }
        } catch (e) { /* try next IGN */ }
      }

      fetched.push(processPlayer(data, p.label));
      setProgress({ done: i + 1, total });
      setResults([...fetched]);

      // Rate limit delay: 1.5s between requests
      if (i < PLAYERS.length - 1) await new Promise(r => setTimeout(r, 1500));
    }

    setLoading(false);
  }, [season]);

  const copyForClaude = () => {
    const text = generateClaudeExport(results, season);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const heroColor = (name) => {
    const tanks = ["thor", "groot", "magneto", "doctor strange", "venom", "hulk", "the thing", "captain america", "peni parker", "emma frost", "rogue"];
    const heals = ["rocket raccoon", "jeff", "cloak & dagger", "luna snow", "invisible woman", "adam warlock", "mantis", "loki", "gambit", "white fox", "ultron"];
    const n = name.toLowerCase();
    if (tanks.some(t => n.includes(t))) return "#4d9fff";
    if (heals.some(h => n.includes(h))) return C.brand;
    return C.accent;
  };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", padding: "20px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: C.text }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "24px", borderBottom: `2px solid ${C.brand}44`, paddingBottom: "16px" }}>
          <h1 style={{ margin: 0, fontSize: "28px", fontWeight: 900, letterSpacing: "3px", color: C.brand }}>STUBBEDTOES SCRAPER</h1>
          <p style={{ margin: "4px 0 0", color: C.muted, fontSize: "13px" }}>Marvel Rivals Team Data Tool — marvelrivalsapi.com</p>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "20px", alignItems: "center", flexWrap: "wrap" }}>
          <select value={season} onChange={e => setSeason(e.target.value)} style={{ background: C.panel, color: C.text, border: `1px solid ${C.border}`, padding: "8px 16px", borderRadius: "6px", fontSize: "14px", cursor: "pointer" }}>
            {Object.keys(SEASONS).map(s => <option key={s} value={s}>{s}</option>)}
          </select>

          <button onClick={fetchAll} disabled={loading} style={{ background: loading ? C.muted : C.brand, color: "#000", border: "none", padding: "8px 24px", borderRadius: "6px", fontSize: "14px", fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", letterSpacing: "1px" }}>
            {loading ? `SCRAPING... ${progress.done}/${progress.total}` : "SCRAPE ALL PLAYERS"}
          </button>

          {results.length > 0 && (
            <button onClick={copyForClaude} style={{ background: copied ? C.brand : C.purple, color: "#fff", border: "none", padding: "8px 24px", borderRadius: "6px", fontSize: "14px", fontWeight: 700, cursor: "pointer", letterSpacing: "1px" }}>
              {copied ? "COPIED!" : "COPY FOR CLAUDE"}
            </button>
          )}

          {loading && (
            <div style={{ flex: 1, height: "6px", background: C.sec, borderRadius: "3px", overflow: "hidden", minWidth: "100px" }}>
              <div style={{ width: `${(progress.done / Math.max(progress.total, 1)) * 100}%`, height: "100%", background: C.brand, transition: "width 0.5s ease", borderRadius: "3px" }} />
            </div>
          )}
        </div>

        {/* Results */}
        {results.map((r, idx) => (
          <div key={idx} onClick={() => setExpanded(expanded === idx ? null : idx)} style={{ background: C.panel, border: `1px solid ${expanded === idx ? C.brand : C.border}`, borderRadius: "10px", marginBottom: "8px", cursor: "pointer", overflow: "hidden" }}>
            {/* Summary Row */}
            <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={{ fontWeight: 700, fontSize: "15px", color: r.error ? C.muted : C.text, minWidth: "110px" }}>{r.label}</span>
                {r.private ? <Badge color={C.accent} text="PRIVATE" /> :
                 r.error ? <Badge color={C.muted} text="ERROR" /> :
                 <>
                   <Badge color={C.purple} text={r.rank} />
                   <span style={{ color: r.comp.total > 0 ? (r.comp.w / r.comp.total >= 0.5 ? C.brand : C.accent) : C.muted, fontWeight: 700, fontSize: "14px" }}>
                     {r.comp.w}W {r.comp.l}L
                   </span>
                   {r.heroes.length > 0 && <span style={{ color: C.dim, fontSize: "12px" }}>{r.heroes.map(h => h.name).join(", ")}</span>}
                 </>
                }
              </div>
              <span style={{ color: C.muted, fontSize: "16px" }}>{expanded === idx ? "▲" : "▼"}</span>
            </div>

            {/* Expanded Details */}
            {expanded === idx && !r.error && (
              <div style={{ padding: "0 16px 16px", borderTop: `1px solid ${C.border}` }}>
                {/* Heroes */}
                {r.heroes.length > 0 && (
                  <div style={{ marginTop: "12px" }}>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: C.brand, letterSpacing: "1px", marginBottom: "8px" }}>COMPETITIVE HEROES</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "6px" }}>
                      {r.heroes.map((h, i) => (
                        <div key={i} style={{ background: C.sec, borderRadius: "6px", padding: "8px 12px", borderLeft: `3px solid ${heroColor(h.name)}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div>
                            <span style={{ fontWeight: 700, fontSize: "13px", color: heroColor(h.name), textTransform: "capitalize" }}>{h.name}</span>
                            <span style={{ color: C.dim, fontSize: "11px", marginLeft: "6px" }}>{h.g}g</span>
                          </div>
                          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <span style={{ color: C.dim, fontSize: "11px" }}>{h.kda}</span>
                            {h.mvp > 0 && <Badge color={C.gold} text={`${h.mvp}MVP`} />}
                            {h.svp > 0 && <Badge color={C.blue} text={`${h.svp}SVP`} />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Match History */}
                {r.matches.length > 0 && (
                  <div style={{ marginTop: "12px" }}>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: C.gold, letterSpacing: "1px", marginBottom: "8px" }}>RECENT MATCHES ({r.matches.length})</div>
                    <div style={{ display: "grid", gap: "4px", maxHeight: "200px", overflowY: "auto" }}>
                      {r.matches.map((m, i) => (
                        <div key={i} style={{ background: C.sec, borderRadius: "4px", padding: "5px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", borderLeft: `3px solid ${m.win ? C.brand : C.accent}`, fontSize: "12px" }}>
                          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <Badge color={m.modeLabel === "Tournament" ? C.purple : m.modeLabel === "Comp" ? C.blue : C.muted} text={m.modeLabel} />
                            <span style={{ color: heroColor(m.hero), fontWeight: 600, textTransform: "capitalize" }}>{m.hero}</span>
                          </div>
                          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <span style={{ color: m.win ? C.brand : C.accent, fontWeight: 700 }}>{m.win ? "WIN" : "LOSS"}</span>
                            <span style={{ color: C.dim }}>{m.k}/{m.d}/{m.a}</span>
                            <span style={{ color: C.muted }}>{m.duration}m</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Teammates */}
                {r.teammates.length > 0 && (
                  <div style={{ marginTop: "12px" }}>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: C.blue, letterSpacing: "1px", marginBottom: "8px" }}>TEAMMATES</div>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      {r.teammates.map((t, i) => (
                        <div key={i} style={{ background: C.sec, borderRadius: "4px", padding: "4px 10px", fontSize: "12px", display: "flex", gap: "6px", alignItems: "center" }}>
                          <span style={{ color: C.text, fontWeight: 600 }}>{t.name}</span>
                          <span style={{ color: parseFloat(t.wr) >= 50 ? C.brand : C.accent, fontWeight: 700 }}>{t.wr}%</span>
                          <span style={{ color: C.muted }}>{t.g}g</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Empty State */}
        {results.length === 0 && !loading && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: C.muted }}>
            <p style={{ fontSize: "16px", margin: 0 }}>Select a season and click <strong style={{ color: C.brand }}>SCRAPE ALL PLAYERS</strong> to begin.</p>
            <p style={{ fontSize: "13px", marginTop: "8px" }}>Data is fetched from marvelrivalsapi.com with staggered timing to respect rate limits.</p>
            <p style={{ fontSize: "13px", marginTop: "4px" }}>After scraping, click <strong style={{ color: C.purple }}>COPY FOR CLAUDE</strong> and paste the results into your Claude chat for analysis.</p>
          </div>
        )}

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: "24px", padding: "12px", borderTop: `1px solid ${C.border}`, color: C.muted, fontSize: "11px" }}>
          StubbedToes Team Tool • marvelrivalsapi.com Free Tier (3K req/day) • Rate limited to ~1.5s between requests
        </div>
      </div>
    </div>
  );
}

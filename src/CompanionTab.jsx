// src/CompanionTab.jsx — Companion App download page
// Import the C and F objects from App.jsx, or redefine them inline
const C={bg:"#0a0b0f",panel:"#12141c",sec:"#0e1018",accent:"#e63946",gold:"#f4a825",blue:"#4cc9f0",purple:"#9b5de5",green:"#06d6a0",text:"#e8e8e8",dim:"#8892a4",muted:"#555e70",border:"#1e2233",brand:"#06d6a0"};
const F={xs:"13px",sm:"14px",md:"16px",lg:"19px",xl:"24px",xxl:"30px",pad:"22px",padL:"28px",gap:"14px",rad:"14px"};

const DOWNLOAD_URL = "https://github.com/gabegriffin16-commits/StubbedToes-Marvel-Rivals-Competitive-Hub/releases/download/companion-v1.0.0/StubbedToes-Companion-Setup-1.0.0.exe";
const VERSION = "1.0.0";

export default function CompanionTab() {
  return <div style={{display:"grid",gap:"20px",maxWidth:"900px"}}>
    {/* Hero download panel */}
    <div style={{background:`linear-gradient(135deg,${C.panel},${C.sec})`,border:`1px solid ${C.brand}55`,borderRadius:F.rad,padding:"32px",textAlign:"center"}}>
      <div style={{fontSize:"48px",marginBottom:"8px"}}>📥</div>
      <h2 style={{margin:"0 0 6px",fontFamily:"'Teko','Rajdhani'",fontWeight:700,fontSize:"38px",letterSpacing:"3px",color:C.brand,lineHeight:1}}>STUBBEDTOES COMPANION</h2>
      <p style={{margin:"0 0 4px",color:C.dim,fontSize:F.sm,letterSpacing:"2px"}}>MARVEL RIVALS MATCH CAPTURE · v{VERSION}</p>
      <p style={{margin:"0 0 24px",color:C.muted,fontSize:F.xs,fontStyle:"italic"}}>"Every match. Every stat. Every timeline." — The One Above All</p>
      <a href={DOWNLOAD_URL} style={{display:"inline-block",background:C.brand,color:"#000",padding:"14px 32px",borderRadius:"8px",textDecoration:"none",fontFamily:"'Rajdhani',sans-serif",fontWeight:900,fontSize:F.md,letterSpacing:"3px",border:`2px solid ${C.brand}`,transition:"all 0.2s"}} onMouseOver={e=>{e.target.style.background="#08e5ac"}} onMouseOut={e=>{e.target.style.background=C.brand}}>
        ⬇ DOWNLOAD INSTALLER
      </a>
      <p style={{margin:"14px 0 0",color:C.muted,fontSize:"11px"}}>Windows · ~130 MB · .exe installer</p>
    </div>

    {/* What it does */}
    <div style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:F.rad,padding:F.padL}}>
      <h3 style={{margin:"0 0 14px",fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.xl,color:C.brand,letterSpacing:"2px"}}>WHAT IT DOES</h3>
      <ul style={{margin:0,paddingLeft:"20px",color:C.dim,fontSize:F.sm,lineHeight:1.8}}>
        <li>Runs quietly in the background while you play Marvel Rivals</li>
        <li>Captures every Quick Play + Competitive match automatically</li>
        <li>Tracks per-hero KDA, damage, healing, accuracy for your account</li>
        <li>Records full 12-player rosters with hero picks and ELO</li>
        <li>Uploads to the team backend for coaching analysis</li>
        <li>Zero effort once configured — just play normally</li>
      </ul>
    </div>

    {/* Setup steps */}
    <div style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:F.rad,padding:F.padL}}>
      <h3 style={{margin:"0 0 14px",fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.xl,color:C.gold,letterSpacing:"2px"}}>SETUP (2 MINUTES, ONE TIME)</h3>
      <ol style={{margin:0,paddingLeft:"20px",color:C.dim,fontSize:F.sm,lineHeight:1.9}}>
        <li>Click <span style={{color:C.brand,fontWeight:700}}>DOWNLOAD INSTALLER</span> above and run it</li>
        <li>Windows SmartScreen warning → <span style={{color:C.gold}}>"More info"</span> → <span style={{color:C.gold}}>"Run anyway"</span> (app is unsigned, this is normal)</li>
        <li>Accept defaults through the installer (creates desktop shortcut + launches app)</li>
        <li>In the app, click the <span style={{color:C.blue,fontWeight:700}}>SETTINGS</span> tab</li>
        <li>Get the <span style={{color:C.purple}}>Backend URL</span> and <span style={{color:C.purple}}>API Key</span> from me (Discord)</li>
        <li>Fill in the form: Backend URL, API Key, your team name, UID, IGN</li>
        <li>Click <span style={{color:C.brand,fontWeight:700}}>SAVE SETTINGS</span>, then <span style={{color:C.blue,fontWeight:700}}>TEST CONNECTION</span></li>
        <li>Status bar should read <span style={{color:C.brand,fontWeight:700}}>↑ TEAM SYNC</span> — you're done</li>
      </ol>
    </div>

    {/* Finding your UID */}
    <div style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:F.rad,padding:F.padL}}>
      <h3 style={{margin:"0 0 14px",fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.xl,color:C.blue,letterSpacing:"2px"}}>FINDING YOUR UID</h3>
      <p style={{margin:"0 0 10px",color:C.dim,fontSize:F.sm,lineHeight:1.6}}>Your Marvel Rivals UID is a numeric ID. To find it:</p>
      <ol style={{margin:0,paddingLeft:"20px",color:C.dim,fontSize:F.sm,lineHeight:1.9}}>
        <li>Go to <a href="https://rivalsmeta.com" target="_blank" rel="noopener noreferrer" style={{color:C.blue}}>rivalsmeta.com</a> and search your IGN</li>
        <li>Copy the number at the end of your profile URL</li>
        <li>Example: <code style={{background:C.sec,padding:"2px 6px",borderRadius:"3px",color:C.gold}}>rivalsmeta.com/player/1767308270</code> → UID is <span style={{color:C.gold,fontWeight:700}}>1767308270</span></li>
      </ol>
    </div>

    {/* What gets shared */}
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px"}}>
      <div style={{background:`${C.green}11`,border:`1px solid ${C.green}44`,borderRadius:F.rad,padding:"18px"}}>
        <h4 style={{margin:"0 0 10px",color:C.green,fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.md,letterSpacing:"1.5px"}}>✓ SHARED WITH TEAM</h4>
        <ul style={{margin:0,paddingLeft:"18px",color:C.dim,fontSize:F.xs,lineHeight:1.6}}>
          <li>Match IDs, maps, game modes</li>
          <li>Your per-hero performance</li>
          <li>Full roster (visible in-game anyway)</li>
          <li>Your IGN and UID (public on rivalsmeta)</li>
        </ul>
      </div>
      <div style={{background:`${C.accent}11`,border:`1px solid ${C.accent}44`,borderRadius:F.rad,padding:"18px"}}>
        <h4 style={{margin:"0 0 10px",color:C.accent,fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.md,letterSpacing:"1.5px"}}>✗ NEVER SHARED</h4>
        <ul style={{margin:0,paddingLeft:"18px",color:C.dim,fontSize:F.xs,lineHeight:1.6}}>
          <li>Data from other games</li>
          <li>Personal info, chat, voice</li>
          <li>Screen captures or keystrokes</li>
          <li>Anything while app is closed</li>
        </ul>
      </div>
    </div>

    {/* FAQ */}
    <div style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:F.rad,padding:F.padL}}>
      <h3 style={{margin:"0 0 14px",fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.xl,color:C.purple,letterSpacing:"2px"}}>FAQ</h3>
      {[
        {q:"Will this get my account banned?",a:"No. The app uses official GEP framework which is approved by NetEase. It only reads data visible in-game — no modification of game files, no memory injection."},
        {q:"Does this give me an in-game advantage?",a:"No. NetEase compliance rules prevent anything that could be considered cheating. The app is purely for post-match analysis."},
        {q:"Why does Windows warn me?",a:"The installer isn't code-signed ($500/year cert is overkill for a private team tool). Click 'More info' then 'Run anyway' once and Windows will remember."},
        {q:"How do updates work?",a:"The app shows a green banner at the top when a new version is out. Click DOWNLOAD, run the new installer, done. Usually takes 1 minute."},
        {q:"Matches aren't uploading?",a:"Go to SETTINGS in the app and click TEST CONNECTION. If it fails, message me — the backend may be down."},
      ].map((item,i)=><div key={i} style={{padding:"12px 0",borderBottom:i<4?`1px solid ${C.border}`:"none"}}>
        <div style={{color:C.gold,fontWeight:700,fontSize:F.sm,marginBottom:"4px"}}>{item.q}</div>
        <div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{item.a}</div>
      </div>)}
    </div>

    {/* Footer note */}
    <div style={{textAlign:"center",padding:"8px 0 20px",color:C.muted,fontSize:F.xs}}>
      Questions? Ask mefuckass. · Built with Electron + Cloudflare Workers.
    </div>
  </div>;
}
import { useState, useEffect } from "react";

const C={bg:"#0b0a12",panel:"#12111c",ph:"#1a1828",accent:"#e63946",gold:"#f4a825",blue:"#4cc9f0",purple:"#9b5de5",green:"#06d6a0",text:"#e8e8e8",dim:"#8892a4",muted:"#555e70",border:"#1e2033",tank:"#4a9eff",dps:"#ff4757",heal:"#2ed573",sec:"#0e0d18",brand:"#4eca6a"};
const F={xs:"15px",sm:"16px",md:"18px",lg:"22px",xl:"28px",xxl:"34px",h1:"40px",pad:"24px",padL:"30px",gap:"16px",rad:"14px"};
const MF={xs:"13px",sm:"14px",md:"16px",lg:"19px",xl:"24px",xxl:"28px",h1:"34px",pad:"16px",padL:"20px",gap:"12px",rad:"12px"};
function useMobile(){const[m,setM]=useState(typeof window!=="undefined"&&window.innerWidth<768);useEffect(()=>{const h=()=>setM(window.innerWidth<768);window.addEventListener("resize",h);return()=>window.removeEventListener("resize",h);},[]);return m;}


const STATS={
Ayden:{ign:"VeloxG",rank:"Dia 2",rs:4361,wr:"57%",rec:"39W 29L",r20:"65%",r20r:"13W 7L",
heroes:[{h:"Jeff",w:"57.9%",g:19,k:"10.86",l:"22/4.5/27.2"},{h:"Emma Frost",w:"50%",g:16,k:"4.14",l:"17.6/5.1/3.4"},{h:"Punisher",w:"66.7%",g:12,k:"3.89",l:"19.8/5.1/0"},{h:"Mr. Fantastic",w:"50%",g:12,k:"6.09",l:"17.7/3.6/4.2"},{h:"White Fox",w:"100%",g:3,k:"8.27",l:"19/5/22.3"},{h:"Venom",w:"50%",g:2,k:"2.45",l:"10/5.5/3.5"}],
extra:"Alt (The Mom Porker): Plat 3, 87% WR, 13W 2L. White Fox 100% WR 3g 51.0 KDA. Emma 100% 5g 8.47 KDA. Venom 75% 4g.",
note:"The most versatile player. White Fox now on MAIN competitive: 100% 3g 8.27 KDA — validated from alt to comp. Jeff at 10.86 KDA across 19 games = strongest healer stats on the entire roster. Climbed to Diamond 2 with 3 straight comp wins. The rank trajectory is the strongest upward trend on the roster.",
url:"https://rivalsmeta.com/player/33050531"},
Begin:{ign:"Begooon",rank:"GM3",rs:4544,wr:"62%",rec:"18W 11L",r20:"35%",r20r:"7W 13L",
heroes:[{h:"Thor",w:"70%",g:20,k:"4.23",l:"22.1/6/3.3"},{h:"Dr. Strange",w:"44.4%",g:9,k:"3.66",l:"23.1/6.6/0.9"}],
extra:"Alt accounts: Begoooon (GM1, 4,724 RS, 73% WR) and Deanna Schmidt (lower ELO stacking account). Begoooon: 66W 25L. Thor 66.7% 33g, Strange 69.2% 26g, Magneto 75% 12g, Groot 77.8% 9g, Magik 100% 9g 5.10 KDA. Combined data shows mastery across multiple tanks at the highest level.",
note:"Highest-ranked player. GM3 main creates a MATCHMAKING PENALTY — stacking with Plat/Diamond teammates in GM lobbies tanks everyone's WR. Synergy data proves it: 7-45% WR with roster on main vs 61-80% on alt (Deanna Schmidt). In tournament against Celestial/Eternity players, this advantage disappears — the 1W-9L record is the real baseline. Begin's individual skill is not in question. The team composition around him is.",
url:"https://rivalsmeta.com/player/1347122425"},
Gabe:{ign:"froglin_",rank:"Dia 3",rs:4288,wr:"56%",rec:"37W 29L",r20:"50%",r20r:"10W 10L",
heroes:[{h:"Dr. Strange",w:"57.7%",g:26,k:"3.96",l:"21.2/6/2.5"},{h:"Ultron",w:"58.3%",g:12,k:"8.75",l:"19/5.4/28.4"},{h:"Thing",w:"45.5%",g:11,k:"5.35",l:"22.2/5.7/8.5"},{h:"Magneto",w:"75%",g:12,k:"4.55",l:"15.6/4.4/4.5"},{h:"Star-Lord",w:"0%",g:2,k:"1.44",l:"13/9/0"}],
extra:"Alt (nega.froglin): Plat 3, 42% WR, 5W 7L. Magneto 50% 6g. Strange 20% 5g on alt — his Strange struggles at lower elo too, suggesting fundamentals may be the issue not just lobbies. NEW: Strange 10.75 KDA WIN (38/4/5) on Tokyo 2099 = best comp game on the entire roster this review cycle. Also Cap America 0% 1g LOSS, Emma 100% 1g 8.00 KDA in comp. Season hero table now includes Loki 0% 1g and Cap 0% 1g.",
note:"THE MAGNETO COMMITMENT IS PAYING OFF. 75% WR across 12 games (+5 since last review) validates everything the dashboard recommended. R20 recovered from 20% to 50% — directly correlated with playing more Magneto. The Strange paradox remains (10.75 KDA ceiling, catastrophic floor) but Magneto is now the proven primary. RS climbed 4216→4288. The path forward is clear: Magneto default, Strange for portal-value maps only.",
url:"https://rivalsmeta.com/player/1767308270"},
Jace:{ign:"Jaejanken",rank:"Plat 1",rs:4145,wr:"48%",rec:"32W 34L",r20:"55%",r20r:"11W 9L",
heroes:[{h:"Daredevil",w:"72%",g:25,k:"4.32",l:"21.3/6.7/7.6"},{h:"Blade",w:"33.3%",g:9,k:"3.52",l:"16/6/5.1"},{h:"Deadpool (V)",w:"22.2%",g:9,k:"2.72",l:"13.4/6.4/4.1"},{h:"Deadpool (S)",w:"50%",g:6,k:"5.50",l:"20.3/7/18.2"},{h:"Iron Man",w:"50%",g:2,k:"4.45",l:"24.5/5.5/0"}],
extra:"Peaked Diamond 3 (4,201 RS). Also played: Angela 50% 2g, Loki 100% 1g 5.43 KDA, Magneto 100% 1g 3.83 KDA, Spider-Man 0% 1g, Human Torch 50% 2g, Dr. Strange 0% 2g, Punisher 0% 1g, Winter Soldier 0% 1g. Role breakdown: Duelist 54.55% (24W 20L, 44g) vs Vanguard 26.67% (4W 11L, 15g) vs Strategist 57.14% (4W 3L, 7g). Best maps: Hydra Charteris 83.3%, Empire Eternal Night 75%, Tokyo 2099 Convoy 100% (3g). Worst maps: Yggsgard 30%, Hellfire Gala 25%, K'un-Lun 36%.",
note:"Daredevil SPECIALIST. 72% WR across 25 games with 4.32 KDA is the strongest single-hero DPS data on the entire roster at this volume. His recent 20 at 55% WR shows upward trajectory despite the 48% season. Blade at 33.3% across 9 games has high variance — individual games show 10.75 KDA MVP and 7.50 KDA MVP alongside sub-2.0 losses. Deadpool (V) at 22.2% confirms he is NOT a tank player. Deadpool (S) at 50% with 5.50 KDA across 6g shows genuine support flex potential — worth exploring. The Daredevil data alone makes him a direct fit for every poke composition.",
url:"https://rivalsmeta.com/player/1899986434"},
Raquel:{ign:"Wendigloop",rank:"Plat 3",rs:3900,wr:"59%",rec:"16W 11L",r20:"25%",r20r:"5W 15L",
heroes:[{h:"Cloak & Dagger",w:"55.6%",g:18,k:"12.82",l:"12.9/3.3/29.8"},{h:"Jeff",w:"100%",g:4,k:"18.44",l:"20/2.3/21.5"},{h:"Luna Snow",w:"0%",g:3,k:"3.64",l:"11/8.3/19.3"},{h:"White Fox",w:"67%",g:3,k:"~5.8",l:"~12/5/14 (QP)"}],
extra:"C&D 12.82 KDA with 29.8 assists/game = massive healing output when the hero is working. The 55.6% season WR vs 18% recent WR gap is enormous — something fundamentally changed in her play. JEFF THE LAND SHARK: 100% WR 4g 18.44 KDA (20/2.3/21.5) — the highest KDA stat on the entire roster at any game count. White Fox at 67% in R20 (2W 1L) is developing. Hero pool expanded from 3 to 4 viable heroes.",
note:"JEFF CHANGES EVERYTHING. 100% WR across 4g with 18.44 KDA is not a fluke — it's 4 consecutive wins with an average of 2.3 deaths per game. Jeff should be tested as her PRIMARY healer immediately because C&D at 18% R20 (3W 14L) is a confirmed slump. The C&D data proves she CAN heal at an elite level (12.82 KDA season) but something broke in the recent meta. Jeff might be the answer — his speed boost and team healing ult fit the current meta better than C&D's positioning-dependent kit. White Fox at 67% R20 adds a third option. The 3-hero vulnerability is being addressed, but Jeff needs 15+ comp games to confirm the trend.",
url:"https://rivalsmeta.com/player/997192574"},
Sam:{ign:"SAMBRI912",rank:"Plat 1",rs:4155,wr:"49%",rec:"32W 33L",r20:"45%",r20r:"9W 11L",
heroes:[{h:"Invisible Woman",w:"47.2%",g:53,k:"5.99",l:"16.1/6.3/21.6"},{h:"Cloak & Dagger",w:"55.6%",g:9,k:"7.51",l:"18.6/7.9/40.7"},{h:"Rocket Raccoon",w:"66.7%",g:3,k:"4.29",l:"10/7/20"}],
extra:"Highest game count of any support player (50 Sue + 9 C&D + 3 Rocket = 62 support games). C&D 40.7 assists/game is enormous — proving high healing output even in losses. Also playing Strange (0% WR 4g) and Thing in recent matches — confirmed role confusion.",
note:"Climbed to Plat 1 with 3 straight comp wins — strongest recent streak. Invisible Woman (formerly Sue Storm) improved from 44% to 47.2% across 53g — slow progress but trending upward for the first time. C&D at 55.6% remains her strongest hero. R20 still contaminated by Vanguard games (38% across 8g) — role confusion persists but the comp WR is approaching 50% for the first time this season.",
url:"https://rivalsmeta.com/player/1558596661"},
"T-Money":{ign:"xGhost-Emx",rank:"Plat 1",rs:4137,wr:"56%",rec:"30W 24L",r20:"55%",r20r:"11W 9L",
heroes:[{h:"Punisher",w:"66.7%",g:9,k:"2.25",l:"19.2/8.6/0"},{h:"Angela",w:"100%",g:5,k:"4.76",l:"17.2/4.2/2.8"},{h:"Magneto",w:"40%",g:5,k:"2.42",l:"13.4/6.6/2.6"},{h:"Moon Knight",w:"20%",g:5,k:"2.17",l:"15.2/7/0"},{h:"Peni Parker",w:"50%",g:4,k:"5.14",l:"18.5/5.5/9.8"}],
extra:"HUGE DISCOVERY: Playing WAY more heroes than originally listed. Angela 100% WR 5g 4.76 KDA. Peni Parker 50% 4g 5.14 KDA. Also playing: Hulk, Namor, Squirrel Girl, Loki, Thor, Wolverine, Deadpool (V), Thing, Invisible Woman. Vanguard role: 71% WR (7g). DPS role: 50% (10g). Strategist: 0% WR (3g). HE IS A BETTER TANK THAN DPS according to the data.",
note:"Climbed to Plat 1 — the Closet Vanguard rises. Vanguard R20 at 75% (4g) continues to dramatically outperform Duelist (57%). Daredevil appearing in R20 at 75% (3W 1L, 4g) is a meaningful new DPS option. Namor comp debut WIN (4.25 KDA) adds another hero. Punisher improved to 66.7% 9g. Moon Knight dropped to 20% 5g — confirmed dead. Angela 100% 5g holds. The path: Peni/Angela for tanks, Punisher/Daredevil for DPS, avoid Moon Knight and Strategist.",
url:"https://rivalsmeta.com/player/88489080"},
Tristen:{ign:"keetoh1337 / potsmoker34",rank:"Dia 2",rs:4319,wr:"73%",rec:"35W 13L",r20:"60%",r20r:"12W 8L",
heroes:[{h:"Spider-Man",w:"80%",g:30,k:"2.72",l:"18.2/8/3.5"},{h:"Iron Man",w:"63.6%",g:11,k:"3.13",l:"21.7/7/0.2"},{h:"Invisible Woman",w:"50%",g:2,k:"6.13",l:"25.5/8/23.5"},{h:"Dr. Strange",w:"100%",g:1,k:"11.00",l:"10/1/1"},{h:"Hela",w:"100%",g:1,k:"3.88",l:"30/8/1"},{h:"Psylocke",w:"0%",g:2,k:"3.18",l:"26.5/8.5/0.5"},{h:"Luna Snow",w:"0%",g:1,k:"1.40",l:"1/5/6"}],
extra:"Spider-Man RECOVERING: 80% WR across 30g, R20 back to 60%. Iron Man still 0% R20 — dead. Invisible Woman 50% 2g 6.13 KDA comp. Dr. Strange 100% 1g 11.00 KDA comp WIN — emergency portal swap, not a role change. Luna Snow 5.00 KDA in tournament only win. R20 Duelist 62% (8W 5L), Strategist 50% (3W 3L), Vanguard 100% (1g). The R20 recovery from 25% to 60% is dramatic.",
note:"R20 RECOVERY: 25% → 60% (12W 8L). Spider-Man back to 80% across 30g — the slump is over. R20 Duelist 62% proves the DPS role is stabilizing. Iron Man R20 still 0% — permanently dead in comp. The Dr. Strange comp WIN (11.00 KDA) was a clutch emergency portal swap, not a role shift — Tristen plays DPS and swaps to Strange for last-second point saves when tanks can't swap. Invisible Woman at 50% 2g confirms his support flex remains viable but secondary to his DPS identity.",
url:"https://rivalsmeta.com/player/1340539275"},
Zach:{ign:"Rothmaxing",rank:"Plat 3",rs:3976,wr:"60%",rec:"12W 8L",r20:"35%",r20r:"7W 13L",
heroes:[{h:"Thor",w:"83.3%",g:6,k:"4.48",l:"16.2/4.2/2.5"},{h:"Deadpool (V)",w:"75%",g:4,k:"5.37",l:"20.5/4.8/5"},{h:"Thing",w:"25%",g:4,k:"3.14",l:"18.5/9/9.8"},{h:"Ultron",w:"100%",g:1,k:"51.0",l:"21/1/30"},{h:"Rocket Raccoon",w:"100%",g:1,k:"7.50",l:"13/6/32"}],
extra:"Gambit showing 8.50 KDA MVP in recent QP. Deadpool (V) NOT on original list but 75% WR. Playing Mantis (0%), Sue (0%), Daredevil, Gambit across recent games. Widest hero experimentation on roster.",
note:"Thor 83.3% is the highest single-hero WR on the roster (minimum 5 games). Deadpool Vanguard at 75% confirms a genuine new weapon. The issue is identical to T-Money: too many heroes being tested without enough depth on any of them. His recent 20 at 35% WR mirrors his experimental phase. When he plays Thor or Deadpool (V), he wins. When he plays anything else, he doesn't.",
url:"https://rivalsmeta.com/player/802297818"},
}
const TM=[
{map:"Klyntar",sc:"2:0",res:"WIN",p:[{n:"Begin",h:"Thor",k:"27/0/2",r:"∞",b:"MVP"},{n:"Gabe",h:"Strange",k:"16/4/2",r:"4.50"},{n:"Raquel",h:"C&D",k:"6/2/26",r:"16.00"},{n:"Tristen",h:"Luna Snow",k:"13/5/12",r:"5.00"},{n:"Ayden",h:"—",k:"TBD",r:"—"},{n:"Zach",h:"—",k:"TBD",r:"—"}],a:"THE ONLY WIN. Begin's perfect Thor. Tristen played LUNA SNOW (healer!) with 5.00 KDA — his best tournament KDA. Everyone performed. This is what the team looks like when composition and coordination align. Key lesson: Tristen flexing to support freed up a slot that may have enabled a better overall comp."},
{map:"Tokyo 2099",sc:"0:1",res:"LOSS",p:[{n:"Begin",h:"Thor",k:"4/4/1",r:"1.25"},{n:"Gabe",h:"Strange",k:"4/6/0",r:"0.67"},{n:"Raquel",h:"C&D",k:"6/3/9",r:"5.00"},{n:"Tristen",h:"Luna",k:"6/5/3",r:"1.80",b:"SVP"},{n:"Ayden",h:"—",k:"TBD",r:"—"},{n:"Zach",h:"—",k:"TBD",r:"—"}],a:"Quick loss. Tristen again on Luna — his tournament heal flex. Raquel actually had best KDA. DPS/tank output completely absent. Gabe's Strange at 0.67 KDA — his alt account shows Strange at 20% WR, confirming Strange may not be tournament-viable for Gabe."},
{map:"Tokyo 2099",sc:"1:3",res:"LOSS",p:[{n:"Begin",h:"Groot",k:"16/9/1",r:"1.89"},{n:"Gabe",h:"Ultron",k:"15/7/18",r:"4.71"},{n:"Raquel",h:"C&D",k:"8/9/20",r:"3.11"},{n:"Tristen",h:"Iron Man",k:"19/10/4",r:"2.30",b:"SVP"},{n:"Ayden",h:"—",k:"TBD",r:"—"},{n:"Zach",h:"—",k:"TBD",r:"—"}],a:"Closest loss. Gabe's Ultron had his best tournament game (4.71 KDA, 18 assists). This suggests Ultron heals may actually be a viable role for Gabe in specific comps. Begin's Groot solid but 9 deaths shows he was being dove. Tristen back on Iron Man DPS — immediately worse than his Luna performance."},
{map:"Hydra Charteris",sc:"0:2",res:"LOSS",p:[{n:"Begin",h:"Angela",k:"2/7/0",r:"0.29",b:"SVP"},{n:"Gabe",h:"Strange",k:"1/8/0",r:"0.13"},{n:"Raquel",h:"C&D",k:"0/7/3",r:"0.43"},{n:"Tristen",h:"Spider-Man",k:"2/10/0",r:"0.20"},{n:"Ayden",h:"—",k:"TBD",r:"—"},{n:"Zach",h:"—",k:"TBD",r:"—"}],a:"CATASTROPHE. Every player sub-0.5 KDA. Angela pick demolished Begin's impact — his worst game by far. Gabe's Strange 0.13 KDA (1 kill, 8 deaths). Tristen's Spider-Man completely shut down (2 kills, 10 deaths). This game alone justifies banning Angela from the team's pool permanently. Hydra Charteris is a multi-level dive map — the team had no anti-dive tools."},
{map:"Intergalactic Empire",sc:"0:3",res:"LOSS",p:[{n:"Begin",h:"Magneto",k:"11/8/1",r:"1.50",b:"SVP"},{n:"Gabe",h:"Ultron",k:"7/9/5",r:"1.33"},{n:"Raquel",h:"C&D",k:"3/10/13",r:"1.60"},{n:"Tristen",h:"Spider-Man",k:"6/12/1",r:"0.58"},{n:"Ayden",h:"—",k:"TBD",r:"—"},{n:"Zach",h:"—",k:"TBD",r:"—"}],a:"Gabe forced onto Ultron heals — the team's role assignments were scrambled. Raquel dying 10 times with C&D means she's being focused/dove without peel. Tristen's Spider-Man at 0.58 KDA — dive DPS can't function when the support line is collapsing. Begin's Magneto was the best individual performance but couldn't carry alone."},
{map:"Yggsgard",sc:"1:3",res:"LOSS",p:[{n:"Begin",h:"Magneto",k:"14/12/1",r:"1.25"},{n:"Gabe",h:"Emma Frost",k:"12/15/3",r:"1.00",b:"SVP"},{n:"Raquel",h:"C&D",k:"6/11/13",r:"1.73"},{n:"Tristen",h:"Moon Knight",k:"9/17/1",r:"0.59"},{n:"Ayden",h:"—",k:"TBD",r:"—"},{n:"Zach",h:"—",k:"TBD",r:"—"}],a:"Tristen's Moon Knight: 17 DEATHS. Moon Knight is a flanker who gets punished hard without escape tools when caught. Emma Frost at C-tier in S7 meta — Gabe shouldn't be on her in tournament. Both tanks dying 12+ times = no frontline surviving. Yggsgard is a long convoy with open sightlines — brawl/melee heroes get shredded here."},
{map:"Hellfire Gala",sc:"0:2",res:"LOSS",p:[{n:"Begin",h:"Thor",k:"2/7/0",r:"0.29"},{n:"Gabe",h:"Thing",k:"5/6/0",r:"0.83",b:"SVP"},{n:"Raquel",h:"C&D",k:"1/6/4",r:"0.83"},{n:"Tristen",h:"Iron Man",k:"4/6/0",r:"0.67"},{n:"Ayden",h:"—",k:"TBD",r:"—"},{n:"Zach",h:"—",k:"TBD",r:"—"}],a:"Begin's worst Thor game (0.29 KDA). NOBODY above 1.0 KDA. Hellfire Gala's tight corridors should favor brawl but the team isn't coordinating the engage timing. Thing is ineffective in these tight spaces against coordinated teams. Tristen's Iron Man continues to underperform in tournament (0.67 KDA)."},
{map:"Empire Eternal Night",sc:"0:1",res:"LOSS",p:[{n:"Begin",h:"Thor",k:"6/5/0",r:"1.20",b:"SVP"},{n:"Gabe",h:"Thing",k:"3/4/2",r:"1.25"},{n:"Raquel",h:"C&D",k:"0/4/2",r:"0.50"},{n:"Tristen",h:"Iron Man",k:"1/5/0",r:"0.20"},{n:"Ayden",h:"—",k:"TBD",r:"—"},{n:"Zach",h:"—",k:"TBD",r:"—"}],a:"Quick loss. Tristen 0.20 KDA on Iron Man (1 kill, 5 deaths). Raquel 0 kills. Midtown is a long-sightline Convoy map where Iron Man's flight makes him a visible target. This map should favor poke/range — Tristen should be on Hela or Spider-Man here, not Iron Man."},
{map:"Intergalactic Empire",sc:"1:2",res:"LOSS",p:[{n:"Begin",h:"Thor",k:"7/9/0",r:"0.78",b:"SVP"},{n:"Gabe",h:"Cap America",k:"6/8/1",r:"0.88"},{n:"Raquel",h:"C&D",k:"2/7/10",r:"1.71"},{n:"Tristen",h:"Spider-Man",k:"4/15/2",r:"0.40"},{n:"Ayden",h:"—",k:"TBD",r:"—"},{n:"Zach",h:"—",k:"TBD",r:"—"}],a:"Gabe on Captain America — C-tier tank in S7. Cap lacks the shield utility of Magneto and the wall control of Groot. Tristen dying 15 times on Spider-Man = he's being punished every dive attempt without follow-up. 15 deaths means he was likely diving alone without the team collapsing together."},
{map:"Hellfire Gala",sc:"0:3",res:"LOSS",p:[{n:"Begin",h:"Strange",k:"9/13/0",r:"0.69"},{n:"Gabe",h:"Thing",k:"8/12/8",r:"1.33"},{n:"Raquel",h:"C&D",k:"N/A",r:"N/A"},{n:"Tristen",h:"Iron Man",k:"14/20/0",r:"0.70",b:"SVP"},{n:"Ayden",h:"—",k:"TBD",r:"—"},{n:"Zach",h:"—",k:"TBD",r:"—"}],a:"TRISTEN DIED 20 TIMES on Iron Man. Begin's Strange 13 deaths. Getting completely rolled on Hellfire Gala for the second time. This map is a confirmed disaster for the team. Iron Man in tight corridors = no escape, no sightlines, constant death. Strange without portal value in chaotic close-quarters = liability."},
];

const TSUMMARY={
rec:"1W – 9L (10% WR)",win:"Klyntar 2:0 — Begin perfect Thor + Tristen on Luna Snow heals",
players:[
{n:"Begin",r:"1W 9L",d:"Thor 1W 4L | Strange 0W 1L | Mag 0W 2L | Groot 0W 1L | Angela 0W 1L. Best game: Klyntar Thor (perfect). Worst: Angela on Hydra (0.29)."},
{n:"Gabe",r:"1W 9L",d:"Strange 1W 2L | Thing 0W 3L | Emma 0W 1L | Cap 0W 1L | Ultron 0W 2L. Magneto NEVER PLAYED. Best game: Ultron heals on Tokyo (4.71 KDA)."},
{n:"Tristen",r:"1W 9L",d:"Iron Man 0W 4L | Spider-Man 0W 3L | Luna Snow 1W 1L | Moon Knight 0W 1L. Best game: Luna Snow on Klyntar (5.00 KDA). Iron Man confirmed NOT a tournament pick."},
{n:"Raquel",r:"1W 8L",d:"C&D every game. Zero hero adaptation. Best: Klyntar 16.00 KDA. Worst: multiple 0-kill games."},
{n:"Ayden",r:"Participated",d:"Tournament KDA data not captured in web fetch — please provide manually."},
{n:"Zach",r:"Participated",d:"Tournament KDA data not captured in web fetch — please provide manually."},
],
issues:[
"1W 9L. The single win happened when (a) Begin played his best hero at his best, (b) Tristen flexed to Luna Snow healer — a role the team didn't plan for him, and (c) the map was Klyntar which favors close-quarters team fighting. Every other game fell apart.",
"HERO SELECTION INSTABILITY: Gabe played 5 different heroes in 10 games. Begin played 5. Tristen played 4. This screams 'we don't have pre-planned compositions.' The team needs to lock in 2-3 comps and practice them, not improvise.",
"Gabe's Magneto (71.4% comp WR) was NEVER played in tournament. Instead he played Thing (45.5% WR, 3 games all losses), Captain America (C-tier), Emma Frost (C-tier), and Ultron (healer — not his role). This is the single biggest coaching failure.",
"Tristen's Iron Man went 0W 4L with a combined 38 kills and 41 deaths across 4 games. His comp WR on Iron Man is 63.6% — but tournament is a completely different environment. Spider-Man (78.6% comp WR) also went 0W 3L — the team isn't enabling dive follow-up.",
"Raquel played C&D every single game with zero adaptation. When C&D wasn't working (multiple 0-kill, 4-7 death games), she had no backup plan. An opponent who bans C&D removes her entirely.",
"Hellfire Gala: 0:2 and 0:3 across two matches. Combined team performance on this map is catastrophic. The team needs a dedicated Hellfire Gala strategy or should force opponents off this map via map pick.",
"Death counts are catastrophic team-wide: Tristen averaged ~10.5 deaths/game. Begin ~7.0. Gabe ~8.0. Raquel ~6.1. These numbers suggest fundamental positioning and peel failures.",
"The team played tournament matches with scrambled roles (Gabe on Ultron heals, Tristen on Luna Snow). This indicates the comp plan broke down during the session and players were forced into uncomfortable positions.",
]};

const MAPS=[
{name:"Midtown",mode:"Convoy",aka:"Empire of Eternal Night",best:"Poke / Anti-Dive",bans:"Magneto, C&D, Groot",picks:"Hela, Daredevil, Groot, Hawkeye",
why:"Long sightlines on the main street heavily favor ranged poke compositions. The payload path is a straight corridor with limited flanking routes in the first section, expanding into more complex geometry near the final checkpoint. Groot's wall is S-tier here because it blocks the entire corridor. Dive is risky due to the open ground — divers get caught in no-man's land with no cover.",
tips:"First checkpoint: Hela on the elevated buildings left of payload — she has unobstructed sightlines down the entire street. Daredevil should play the side alleys for wall-hack info on flankers trying to use the parallel street. Second checkpoint: Geometry opens up — this is where dive teams try to engage. Groot wall placement at the intersection is critical. Spider-Man can be effective at the final indoor section where the ceiling creates vertical play.",
ourComp:"PRIMARY: POKE. Begin Groot + Gabe Magneto + Tristen Hela + Jace Daredevil + Ayden Rocket + Raquel C&D. Groot wall blocks the main corridor. FALLBACK: 1-2-3 if enemy runs burst. CONVOY DEF: Wall at first checkpoint choke — team holds angles. CONVOY OFF: Wall creates safe advance, poke from behind. Player data: Ayden 43% here, Gabe 60%."},
{name:"Arakko",mode:"Convoy",aka:"Hellfire Gala",best:"Brawl",bans:"Venom, Gambit, Thor",picks:"Thor, Psylocke, Wolverine, Magik",
why:"YOUR WORST MAP (0:2 and 0:3 in tournament). Tight corridors, elevated catwalks, and close-quarters engagements. The payload path winds through narrow passages where long-range heroes lose value. Brawl heroes thrive because engagement distances are short. Iron Man and Strange are liabilities here — no room to kite or use portals effectively.",
tips:"Payload start: Thor should control the high catwalk above the payload — his AoE lightning cleaves groups in the tight space below. Psylocke flanks through the side room to backstab healers. Mid-section: Wolverine excels in the winding corridors where he can chase without being kited. Point 2: The open arena section briefly favors poke — have Hela ready as a map-section swap. Final stretch: The narrow bridge is THE brawl zone — whoever wins the brawl here wins the map. All-in with ults.",
ourComp:"PRIMARY: BRAWL. Begin Thor + Gabe Magneto + Tristen Psylocke + Zach Wolverine + Ayden Gambit + Raquel C&D. Tight corridors. DO NOT run poke — tournament proved it. FALLBACK: FLEX (Thor+Magneto core). CONVOY DEF: Thor zones the narrow bridge — whoever wins brawl here wins. CONVOY OFF: Thor leads the push through corridors. Player data: Tristen 80% here, Gabe 67%."},
{name:"Spider-Islands",mode:"Convoy",aka:"Tokyo 2099",best:"Poke / Hybrid",bans:"Magneto, Groot, Spider-Man",picks:"Hela, Spider-Man, Iron Man, Daredevil",
why:"Multi-level urban environment with rooftops and vertical play. The payload path alternates between open streets (poke-favored) and enclosed sections (brawl/dive-favored). Spider-Man's web-swing is uniquely strong because the tall buildings provide constant swing points. Mixed sightlines mean hybrid comps that can flex between range and aggression excel.",
tips:"Opening section: Wide street favors poke. Hela on rooftops, Daredevil tracking enemy positions. Spider-Man should NOT dive during this section — play ranged poke. Mid-section: The enclosed underpass is where dive activates. Venom/Magik portal into the underpass where ranged heroes can't escape. Final section: Back to open streets. Groot wall blocks the final push corridor. Iron Man can fly above the final checkpoint for aerial damage but is VERY exposed to hitscan.",
ourComp:"PRIMARY: POKE on streets, DIVE in enclosed sections. HYBRID approach: Begin Groot + Gabe Magneto + Tristen Spider-Man + Jace Daredevil + Ayden Rocket + Raquel C&D. Spider-Man plays poke-phase on rooftops, dives enclosed sections. FALLBACK: Full DIVE if enemy runs poke. CONVOY: Alternate between poke (open streets) and dive (indoor sections) mid-match. Player data: Ayden 71%, Jace 100%, Gabe 17%⚠️."},
{name:"Yggdrasill Path",mode:"Convoy",aka:"Yggsgard",best:"Poke / Anti-Dive",bans:"Magneto, C&D, Groot",picks:"Groot, Hela, Hawkeye, Daredevil",
why:"Long escort with open sightlines and elevated tree-branch platforms. Ranged DPS dominates the open stretches. The team lost 1:3 here running brawl heroes (Moon Knight 17 deaths, Emma 15 deaths) — melee heroes get shredded on this map. Groot wall is premium because the pathway is narrow.",
tips:"Start: The Bifrost bridge section is pure poke territory. Hela and Hawkeye on the elevated platforms have unobstructed angles. This is a 'win condition' position — whoever controls these platforms controls the fight. Mid: The tree interior section gets tighter — this is where dive teams try to engage. Groot wall at the tree entrance is critical. Moon Knight and melee flankers should NOT be here. Final: The open clearing before the final point is another poke zone. Daredevil tags from the tree canopy for wallhack info.",
ourComp:"PRIMARY: POKE. Begin Groot + Gabe Magneto + Tristen Hela + Jace Daredevil + Ayden Rocket + Sam C&D (Sam 100% WR here!). Long convoy sightlines. FALLBACK: 1-2-3 Triple Support. CONVOY DEF: Groot wall at chokepoints. CONVOY OFF: Slow advance behind double shield. Player data: Sam 100% 9.32 KDA, Gabe 80%, Jace 30%⚠️ — consider benching Jace on this map."},
{name:"Museum",mode:"Convoy",aka:"Museum of Contemplation",best:"Poke / Brawl Hybrid",bans:"Magneto, Gambit",picks:"Hela, Daredevil, Groot, Thor",
why:"Indoor/outdoor alternating map. Poke dominates the outdoor garden sections. Brawl takes over in the museum interior. A comp that can transition between both phases excels. The museum halls have destructible cover that changes geometry mid-fight.",
tips:"Garden section: Hela on the museum balcony overlooking the garden = dominant position. Daredevil in the side corridors for flank detection. Groot wall blocks the main entrance. Interior: Thor excels in the museum halls — his lightning AoE bounces off walls and hits targets around corners. Psylocke can flank through the exhibit rooms. Final room: The circular exhibition hall is a brawl arena. Wolverine and Thor dominate here.",
ourComp:"PRIMARY: BRAWL indoors / POKE outdoors. Begin Thor or Groot (swap mid-match by section). Gabe Magneto + Tristen Hela (outdoor) / Psylocke (indoor) + Jace Daredevil + Ayden Rocket + Raquel C&D. FALLBACK: 1-2-3 for sustained fights. Player data: Tristen 80%, Zach 67%."},
{name:"Krakoa",mode:"Domination",aka:"Hellfire Gala (Dom)",best:"Brawl",bans:"Magneto, Groot, Gambit",picks:"Thor, Wolverine, Psylocke, Venom",
why:"Tight domination point surrounded by close-quarters corridors. The point is small enough that AoE abilities hit everyone. Mobile heroes contest from multiple angles. Poke is weak because sightlines are short.",
tips:"Point center: Thor's AoE lightning is devastating on the small point. Diamond Form Emma can contest through damage reduction. Off-point flank: Psylocke and Wolverine lurk in the side tunnels to backstab healers rotating to point. High ground: The elevated platform above the point gives ranged heroes brief sightlines — useful for Hela to poke before the fight reaches the point, but she must reposition once the brawl starts. Venom can swing from the ceiling structures to initiate onto the point from unexpected angles.",
ourComp:"PRIMARY: BRAWL. Begin Thor + Gabe Magneto + Tristen Psylocke + Zach Wolverine + Ayden Gambit + Raquel C&D. Tight point fights favor melee deathball. FALLBACK: ANTI-DIVE if enemy dives. Player data: Raquel 75%, Sam 67%."},
{name:"Hell's Heaven",mode:"Domination",aka:"Hydra Charteris Base",best:"Dive / Brawl",bans:"Venom, Magneto, Spider-Man",picks:"Spider-Man, Magik, Psylocke, Venom",
why:"Multi-level point with extensive flanking routes above and below. Dive thrives because of the vertical engagement options. THIS IS WHERE THE TEAM GOT DESTROYED (0:2, everyone sub-0.5 KDA with Angela). The map punishes heroes without mobility — Angela, Thing, and Iron Man all failed catastrophically here.",
tips:"Upper level: Spider-Man and Magik own the catwalks above the point — they can drop onto the point from above for surprise engages. Venom swings between levels. Lower level: The tunnel system below the point allows flanking healers. Psylocke should use these tunnels exclusively. Point itself: The point is exposed from multiple angles — tanks need to use cover pillars, not stand in the open. Magneto's bubble protects the point holder. NEVER play Angela, Iron Man, or Thing on this map.",
ourComp:"PRIMARY: DIVE. Ayden Venom + Gabe Magneto + Begin Magik + Tristen Spider-Man + Zach Gambit + Raquel C&D. Vertical map with flanking routes. FALLBACK: BRAWL if Venom banned. If not dive: Begin Groot (wall on point) + Gabe Magneto (bubble). Player data: Tristen 83%, Jace 83%, T-Money 75%, Ayden 63%."},
{name:"Birnin T'Challa",mode:"Domination",aka:"Intergalactic Empire (Dom)",best:"Brawl / Hybrid",bans:"Magneto, C&D, Gambit",picks:"Thor, Wolverine, Gambit, Groot",
why:"Central point with surrounding high ground and water feature. Brawl comps control the point while ranged heroes pressure from elevated positions. Multiple tournament losses here (0:3, 1:2) — the team needs a clear plan for this map.",
tips:"Point: Thor and Wolverine contest directly. The point's water feature provides slight cover — use it. High ground left: Hela or Daredevil on the elevated platform has clear sightlines to the point AND the enemy spawn route. High ground right: Flankers use this to approach the enemy healer rotation. Spawn corridor: Spider-Man can set up aggressive web-trap positions in the corridor between enemy spawn and point — catching rotations before they arrive. Gambit ult from high ground onto the point is devastating.",
ourComp:"PRIMARY: BRAWL. Begin Thor + Gabe Magneto + Tristen Hela (high ground) + Zach Wolverine (point) + Ayden Gambit + Raquel C&D. FALLBACK: POKE from high ground positions. Player data: Begin 67%, T-Money 50%, Gabe 25%⚠️."},
{name:"Celestial Husk",mode:"Domination",aka:"Klyntar (Dom)",best:"Dive / Brawl",bans:"Venom, Gambit, Magik",picks:"Spider-Man, Magik, Wolverine, Thor",
why:"YOUR BEST MAP — the only tournament win was here (Klyntar 2:0). Enclosed arena that favors mobile heroes and close-quarters team fighting. The symbiote aesthetic isn't just visual — the organic walls create unusual angles and soft cover.",
tips:"Point: The enclosed arena has organic pillars that break sightlines — use them. Thor can hammer from behind pillars and re-engage. Side chambers: Magik portals from the side chambers directly onto the point for surprise engages. Spider-Man web-swings from the ceiling tendrils. Spawn area: The elevated spawn platform gives ranged heroes brief poke angles — Hela can open fights from here before repositioning. REPLICATE THE WINNING COMP: Begin Thor + Tristen Luna Snow healer. This worked. Don't change what worked.",
ourComp:"PRIMARY: DIVE. Ayden Venom + Gabe Magneto + Begin Magik + Tristen Spider-Man + Zach Gambit + Raquel C&D. THE WINNING COMP from tournament. FALLBACK: BRAWL (Begin Thor + Gabe Strange). Player data: T-Money 80%, Begin 75%, Tristen 75%."},
{name:"Symbiotic Surface",mode:"Convergence",aka:"Klyntar (Conv)",best:"Dive",bans:"Venom, Groot, Spider-Man",picks:"Spider-Man, Magik, Venom, Wolverine",
why:"Open convergence point then escort. The convergence phase is chaotic — mobile heroes collapse onto the point fastest. Dive excels because the initial capture is a race and dive heroes win races.",
tips:"Convergence phase: Venom and Spider-Man reach the point first due to mobility. Magik portals the team forward for instant contest. This is a 'first to arrive wins' scenario. Escort phase: The symbiote surface terrain has organic barriers — Groot wall adds to them for total corridor blockage. Daredevil's wallhack is valuable in the organic tunnels where visibility is limited. Final section: The open Celestial area briefly favors poke before returning to close quarters.",
ourComp:"PRIMARY: DIVE. Ayden Venom + Gabe Magneto + Begin Magik + Tristen Spider-Man + Zach Gambit + Raquel C&D. Convergence dive map. FALLBACK: BRAWL if Venom banned. Player data: T-Money 71%, Raquel 67%."},
{name:"Heart of Heaven",mode:"Convergence",aka:"K'un-Lun",best:"Poke / Anti-Dive",bans:"Magneto, C&D, Groot",picks:"Groot, Hela, Daredevil, Hawkeye",
why:"Elevation-heavy map with temples and platforms. Ranged heroes with high ground control dominate. Groot wall is extremely strong at the temple chokepoints. The convergence point is elevated — heroes who can fly or swing have faster access.",
tips:"Convergence point: The temple platform is elevated — Spider-Man, Iron Man, and flying heroes reach it fastest. Groot wall on the temple stairs blocks ground-level rushes. Temple interior: Tight spaces inside the temple favor brawl briefly — Thor and Wolverine excel in these moments. Escort phase: The mountain path has steep drops — knockback abilities (Thor hammer, Groot root) can environmental-kill here. Hela on the pagoda rooftops has dominant sightlines down the entire mountain path.",
ourComp:"PRIMARY: POKE. Begin Groot + Gabe Magneto + Tristen Hela + Jace Daredevil + Ayden Rocket + Sam C&D. Long sightlines favor ranged. FALLBACK: 1-2-3 Triple Support. Player data: Ayden 60%, Sam 60%, Jace 36%⚠️ — Jace struggles here despite being poke."},
{name:"Shin-Shibuya",mode:"Convergence",aka:"Tokyo 2099 (Conv)",best:"Dive / Brawl",bans:"Venom, Spider-Man, Magik",picks:"Magik, Psylocke, Thor, Spider-Man",
why:"Returned to comp pool in S7. Fully vertical urban map with tight alleyways, neon-lit streets, and dramatic elevation changes. High ground control is CRITICAL — whoever owns the rooftops controls the fight. Close-quarters alley fights favor dive and brawl heroes.",
tips:"Convergence point: Street-level point with buildings on all sides. Spider-Man and Magik dive from rooftops. Venom swings between buildings. The point is overlooked by balconies — Hela can poke from above but must relocate constantly. Alleyways: Psylocke and Wolverine own the tight alleys. These are death traps for slow heroes. DO NOT play Groot here — his wall gets bypassed by vertical movement. Rooftops: Iron Man and Spider-Man contest rooftop control. Whoever wins the rooftop fight wins the sightline advantage for the entire team.",
ourComp:"PRIMARY: DIVE. Ayden Venom + Gabe Magneto + Begin Magik + Tristen Spider-Man + Zach Gambit + Raquel C&D. Vertical urban map. FALLBACK: BRAWL on tight sections. Player data: T-Money 100%, Gabe 71%, Tristen 75%, Jace 67%."},
{name:"Hall of Djalia",mode:"Convergence",aka:"Intergalactic Empire (Conv)",best:"Hybrid Poke/Dive",bans:"Magneto, Venom, C&D",picks:"Groot, Spider-Man, Hela, Daredevil",
why:"Large convergence map with both long sightlines AND flanking routes. Hybrid comps excel because the map geometry supports both poke and dive simultaneously. The main hall is open (poke), while the side chambers create dive opportunities.",
tips:"Main hall: Long sightlines favor Hela and Daredevil. Groot wall blocks the central corridor. Magneto bubble protects the poke line. Side chambers: Spider-Man and Magik use these for flanking dives onto the enemy backline. The chambers have elevated platforms — vertical dive entry is possible. Convergence point: The Wakandan throne area is a circular room with moderate cover — brawl can work here briefly. Escort section: Opens back up to long sightlines — transition back to poke. Daredevil's wallhack tracks which side chamber enemies are using.",
ourComp:"PRIMARY: POKE with dive flex. Begin Groot + Gabe Magneto + Tristen Spider-Man (dive flanks) + Jace Daredevil (info) + Ayden Rocket + Raquel C&D. FALLBACK: Full POKE (Tristen Hela). Player data: Ayden 56%, everyone else 25-33%⚠️ — TEAM WEAKNESS MAP."},
{name:"Central Park",mode:"Convergence",aka:"Empire Eternal Night (Conv)",best:"Poke",bans:"Magneto, Groot, C&D",picks:"Hela, Daredevil, Groot, Hawkeye",
why:"Open park setting with trees providing soft cover but generally long sightlines. The convergence point is in the open — ranged heroes dominate. Dive is risky because there's limited hard cover to escape to after engaging.",
tips:"Convergence point: The open park clearing = poke paradise. Hela from the monument pedestal has 360° sightlines. Groot wall in the center creates artificial cover for your team. Park perimeter: Daredevil plays the tree line for wallhack info on enemies trying to flank through the park edges. Spider-Man CAN work here — swinging between trees for hit-and-run, but he's exposed mid-swing. Escort section: The path narrows near the buildings — this is where brawl/dive teams try to force engagement. Magneto bubble at the choke is critical.",
ourComp:"PRIMARY: POKE. Begin Groot + Gabe Magneto + Tristen Hela + Jace Daredevil + Ayden Rocket + Sam C&D. Open sightlines, poke paradise. FALLBACK: 1-2-3 Triple Support. Player data: Jace 75%, Sam 71%, Ayden 67%."},
{name:"Lower Manhattan",mode:"Convergence",aka:"NEW — Added April 3",best:"TBD",bans:"Default meta bans",picks:"TBD — needs scouting",
why:"Newest map. High verticality with Kingpin lore elements. Convergence mode. Not enough competitive data exists yet for definitive meta analysis. The team MUST practice this map in scrims before encountering it in tournament — being unprepared on a new map is an automatic disadvantage.",
tips:"Based on early reports: vertical map with rooftop control being critical (similar to Shin-Shibuya). Spider-Man and Magik likely excel. Expect dive-favored geometry based on the building density. Groot wall may be strong at street-level chokepoints. SCOUT THIS MAP: Run 5+ scrim games here before tournament to develop positioning knowledge.",
ourComp:"PRIMARY: POKE. Close-range corridors but poke still dominant per map guides. Default: Begin Groot + Gabe Magneto + Tristen Hela + Jace Daredevil + Ayden Rocket + Raquel C&D. FALLBACK: BRAWL for tight sections. Map is NEW — needs scouting. Player data: Limited."},
];

const COMPS=[
{name:"DRAFT",tag:"Ban/Save Philosophy",color:"#50C878",desc:"Elsa Bloodstone is always ban #1 — S+ DPS that warps games around her. Hela and Gambit are 'forever bans' at Diamond+ per Celestial players — Hela's oppressive poke and Gambit's 8-second ult are too volatile. Third ban is context-dependent: ban what counters YOUR comp, not generically strong heroes. At Celestial+, Tank Deadpool is a rising must-ban. Saves protect your comp's keystone — default save Magneto (most banned hero in Diamond+ because Metal Bulwark absorbs infinite damage).",
lineup:[],tu:[],alt:"",
bs:{b:[{h:"Elsa Bloodstone",w:"ALWAYS FIRST. S+ game-warping DPS even post-nerf."},{h:"Hela / Gambit",w:"'Forever bans' at Diamond+. Hela's hitscan poke and Gambit's 8-second ult are too volatile to leave open."},{h:"Context Ban",w:"Ban what COUNTERS your comp. Running poke? Ban Venom (prevents dive). Running dive? Ban Groot (removes walls). At Celestial: Tank Deadpool is a rising must-ban."}],s:[{h:"Magneto",w:"Default save. Most banned hero in Diamond+ — Metal Bulwark absorbs infinite damage."},{h:"Comp Keystone",w:"Groot for Poke, Venom for Dive, Thor for Brawl."},{h:"C&D",w:"Double flashbang buff makes C&D a defensive powerhouse. Denies enemy AND secures your heals."}]}},
{name:"POKE",tag:"Double Shield",color:C.blue,desc:"WHY IT WORKS: Groot's wall denies space at base kit level — no ult required. In S7's extended neutral phases (50+ seconds between ults), this positional denial is enormously valuable. Magneto's Metal Bulwark absorbs infinite damage behind the wall. Hela and Daredevil deal sustained ranged damage from behind both shields. The comp wins by controlling space and slowly breaking enemy defenses. Groot+Magneto is the most stable dual-tank foundation in the game per Celestial analysis.",
lineup:[{p:"Begin",h:"Groot",r:"tank",n:"Wall denial at base kit level. Planet X Pals +150HP with Jeff/Rocket in comp."},{p:"Gabe",h:"Magneto",r:"tank",n:"75% WR. Metal Bulwark absorbs infinite damage behind Groot wall = double shield."},{p:"Tristen",h:"Hela",r:"dps",n:"S-tier hitscan. Anti-air vs flyers. Sustained poke from behind shields."},{p:"Jace",h:"Daredevil",r:"dps",n:"72% WR. Wallhack = permanent team info. Spots flankers before they arrive."},{p:"Ayden",h:"Invisible Woman",r:"heal",n:"S-tier support. Self-shield + slow = nightmare for divers. Psionic Mayhem team-up if Strange subbed."},{p:"Raquel",h:"C&D",r:"heal",n:"12.82 KDA. Double flashbang shuts down aggressive plays."}],
tu:["Planet X Pals (Groot+Jeff/Rocket) — Groot +150HP if Jeff or Rocket in comp. Niche shoulder ride.","Psionic Mayhem (IW+Strange) — if Strange subbed for Magneto, psionic vortex pulls enemies.","Primal Flame (Phoenix+Wolverine+Black Widow) — if Phoenix subbed for Hela, and Zach Wolverine for a DPS slot, both get lifesteal fire. Transforms poke into hybrid poke/flank."],
alt:"GROOT BANNED → Begin Thor, comp shifts to BRAWL (lose wall control entirely). MAGNETO BANNED → Gabe Strange (portal is offensive repositioning — portal TO fights, NOT escape). Psionic Mayhem team-up with Invisible Woman activates. HELA BANNED → Tristen Phoenix (S+ at Diamond+. Self-sustaining flanker, ult destroys bonus health/deployables. Primal Flame team-up with Wolverine if Zach subbed). Or Tristen Punisher (Bestial Hunt with DD activates). DAREDEVIL BANNED → Jace Blade (melee maps) or T-Money Punisher (Bestial Hunt with new DD player). Lose wallhack info — team must communicate positions manually. C&D BANNED → Sam Invisible Woman or Sam C&D backup. Ayden can flex to White Fox if learned.",
maps:"Midtown, Yggsgard, K'un-Lun, Central Park, Empire Eternal Night Conv, Hall of Djalia",
convoy:"DEFENSE: Groot wall at chokepoints, hold angles behind double shield. OFFENSE: Groot wall creates safe advance — plant, poke, advance when enemy retreats.",
bs:{b:[{h:"Elsa Bloodstone",w:"Always."},{h:"Hela / Gambit",w:"Deny enemy poke or burst."},{h:"Venom",w:"Prevent enemy dive into poke line."}],s:[{h:"Magneto",w:"Metal Bulwark IS half the double shield."},{h:"Groot",w:"Wall denial is irreplaceable."}]}},
{name:"1-2-3",tag:"Triple Support",color:C.blue,desc:"WHY IT WORKS: Raw healing throughput between ults is better than anything else. Three strategists cycle defensive ults ONE AT A TIME — never overlapping. Jeff ult → C&D ult → Ultron ult = ~40 seconds of near-invulnerability. The S7 ult nerf didn't kill this — raw healing in neutral is still unmatched. Gambit and Invisible Woman pump out numbers that make 2-2-2 cry. Every season someone declares triple support dead. Every season win rate data corrects them.",
lineup:[{p:"Begin",h:"Groot",r:"tank",n:"Solo tank anchor. Wall denies space. Vibrant Vitality wall heals if Loki+Mantis subbed."},{p:"Tristen",h:"Hela",r:"dps",n:"Primary ranged DPS behind triple heals."},{p:"Jace",h:"Daredevil",r:"dps",n:"72% WR. Info advantage + sustained poke."},{p:"Ayden",h:"Jeff",r:"heal",n:"10.86 KDA. Ult FIRST in cycle. Planet X Pals with Groot = +150HP to Groot."},{p:"Gabe",h:"Ultron",r:"heal",n:"58.3% WR 8.75 KDA. Imperatice: Patch passive AoE heal. Stark Protocol Nano Ray if Iron Man subbed. Ult THIRD in cycle."},{p:"Raquel",h:"C&D",r:"heal",n:"Ult SECOND in cycle. Double flashbang shuts down dives."}],
tu:["Planet X Pals (Groot+Jeff) — active by default. Groot +150HP.","Vibrant Vitality (Mantis+Groot+Loki) — if Loki subbed, Groot wall heals, Loki lamp buffs damage. S-tier.","Stark Protocol (Iron Man+Ultron) — if Iron Man subbed, Ultron gains Nano Ray."],
alt:"GROOT BANNED → Comp collapses (no solo tank anchor). Swap to BRAWL or DIVE entirely. DAREDEVIL BANNED → Jace Blade or T-Money Punisher. Lose info advantage but maintain DPS output. HELA BANNED → Tristen Phoenix (S+ Diamond+. Self-sustaining, doesn't need healer peel — critical when 3 supports are focused on cycling ults). Or Tristen Punisher for ranged backup. GAMBIT BANNED → N/A (Gambit not in this comp). C&D BANNED → Sam C&D backup. Critical — losing one ult from the cycle degrades the rotation. Must practice 2-support ult cycling as backup. ULTRON UNAVAILABLE → Gabe on Sam Invisible Woman (loses aerial, gains forcefield peel).",
maps:"Same poke maps + Museum. Best when enemy runs burst. 1-2-3 is the answer to 'we keep dying too fast.'",
convoy:"DEFENSE-FAVORED. Ult cycling sustains through extended holds. CRITICAL: If two supports ult simultaneously, comp falls apart. Practice the sequence.",
bs:{b:[{h:"Elsa Bloodstone",w:"Always."},{h:"Gambit",w:"#1 counter to triple support — 8-second burst kills through healing."},{h:"Venom / Spider-Man",w:"Deny enemy dive into backline."}],s:[{h:"Groot",w:"Solo tank. If banned, no anchor."},{h:"C&D",w:"Losing one ult from the cycle cripples rotation."}]}},
{name:"DIVE",tag:"Collapse & Kill",color:C.purple,desc:"WHY IT WORKS: Everyone collapses on ONE target simultaneously. Venom CC immobilizes → team follows up → target dies in <2 seconds. Pro-play standard, hardest to execute but highest ceiling. The key is CALL TARGETING on voice — everyone attacks the same person. Magneto bubble provides safe regroup after each attempt. Symbiote Shenanigans (Venom+Jeff+Hela) is S-tier if running that trio: Venom +150HP, Jeff healing tendrils, Hela sphere pulls enemies in.",
lineup:[{p:"Ayden",h:"Venom",r:"tank",n:"Dive initiator. Web CC = opening. Symbiote Shenanigans +150HP if Jeff+Hela in comp."},{p:"Gabe",h:"Magneto",r:"tank",n:"75% WR. Anchor — do NOT dive. Bubble = safe regroup after failed dives."},{p:"Tristen",h:"Spider-Man",r:"dps",n:"80% WR 30g. Follow on Venom's CC target. MUST dive WITH Venom, not solo. Parker Power-Up with Peni."},{p:"Jace",h:"Daredevil",r:"dps",n:"Wallhack CALLS the dive target. Most approachable dive entry point."},{p:"Zach",h:"Gambit",r:"heal",n:"AoE heals keep dive team alive during resets."},{p:"Raquel",h:"C&D",r:"heal",n:"Teleport follows dive for immediate heals on divers."}],
tu:["Symbiote Shenanigans (Venom+Jeff+Hela) — S-tier IF Jeff and Hela in comp. Venom +150HP, Jeff healing tendrils, Hela sphere pull.","Parker Power-Up (Peni+Spider-Man) — if T-Money Peni subbed as 2nd tank, Spider-Man gets sticky bomb.","Bestial Hunt (DD+Punisher) — if Punisher subbed, grenade blinds enemies."],
alt:"VENOM BANNED → DIVE IS DEAD. Swap to POKE or BRAWL immediately — no other hero replaces Venom's initiation. GROOT BANNED → Actually helps dive (enemy loses wall control). No change needed. C&D BANNED → Sam Invisible Woman or Sam C&D backup. Dive still functions without C&D teleport but heals are less mobile. DAREDEVIL BANNED → Lose dive target calling. Jace Blade (can dive alongside Venom) or T-Money Punisher (ranged support from backline). HELA BANNED → N/A (Hela not in default dive). If running Symbiote Shenanigans variant with Hela, swap to default dive lineup. GAMBIT BANNED → Ayden Jeff (Planet X Pals with Groot if running dual tank), or Sam Invisible Woman. Lose AoE heals during resets.",
maps:"Hydra Charteris, Klyntar, Tokyo 2099 Conv, Shin-Shibuya — vertical play + flanking routes.",
convoy:"OFFENSE-FAVORED. Dive creates picks → push with numbers advantage. On defense, pick off attackers before they reach payload.",
bs:{b:[{h:"Elsa Bloodstone",w:"Always."},{h:"Hela / Gambit",w:"Deny enemy damage."},{h:"Groot",w:"Enemy walls block dive lanes."}],s:[{h:"Venom",w:"Dive dies without Venom. Non-negotiable."},{h:"Magneto",w:"Bubble is the safety net."}]}},
{name:"BRAWL",tag:"Thor Rush",color:C.accent,desc:"WHY IT WORKS: Tight corridors negate range advantage. Team moves as one unit — a deathball. Thor engages with Awakening Rune (burst through healing), Magneto bubble protects the push. Explosive Entanglement (Gambit+Magneto+Rogue) is S-tier: Magneto gets explosive greatswords (impact + delayed 2nd hit), Rogue's attacks trigger kinetic explosions that damage enemies AND heal allies. KEY: STAY TOGETHER. Anyone who peels off alone dies.",
lineup:[{p:"Begin",h:"Thor",r:"tank",n:"70% WR. Awakening Rune burst > healing. Divine Armory with Angela = Thunder Spear + teleport."},{p:"Gabe",h:"Magneto",r:"tank",n:"75% WR. Explosive Entanglement = explosive greatswords."},{p:"Tristen",h:"Psylocke",r:"dps",n:"Melee flanker. Backstabs during Thor's chaos."},{p:"Zach",h:"Wolverine",r:"dps",n:"S-tier sustained melee. Self-heals with lifesteal."},{p:"Ayden",h:"Gambit",r:"heal",n:"Explosive Entanglement anchor. Supercharges Magneto + Rogue."},{p:"Raquel",h:"C&D",r:"heal",n:"Position BEHIND the brawl. Double flashbang shuts down counter-engage."}],
tu:["Explosive Entanglement (Gambit+Magneto+Rogue) — S-tier. Magneto explosive greatswords, Rogue kinetic explosions + heal.","Divine Armory (Angela+Thor) — if T-Money Angela subbed, Thor gets Thunder Spear + teleport."],
alt:"MAGNETO BANNED → Gabe Rogue (Explosive Entanglement still works — kinetic explosions + heal). Loses bubble but gains Rogue's ability steal flexibility. Note: Rogue's ult drain is ultimate-only, not passive. S7.5 CC Protection limits her CC chaining in extended brawls. GAMBIT BANNED → CRITICAL — lose Explosive Entanglement entirely. Ayden switches to Jeff or Invisible Woman. Comp still functions as deathball but without the S-tier team-up damage. Consider swapping to POKE. C&D BANNED → Sam Invisible Woman (forcefield peel for the brawl) or Sam C&D backup. GROOT BANNED → N/A (Groot not in brawl). Doesn't affect this comp. HELA BANNED → N/A. DAREDEVIL BANNED → N/A. Jace Blade can sub for Zach or Tristen on narrow maps. T-Money Angela for tight corridors (100% WR, triggers Divine Armory with Thor).",
maps:"Hellfire Gala, Krakoa, Birnin T'Challa, Museum indoor — tight corridors.",
convoy:"BOTH SIDES. Offense — Thor leads, team collapses behind bubble. Defense — hold corridors, Thor zones with AoE. Whoever wins the brawl at the chokepoint wins.",
bs:{b:[{h:"Elsa Bloodstone",w:"Always."},{h:"Hela / Gambit",w:"Losing Gambit = losing Explosive Entanglement."},{h:"C&D",w:"Deny enemy sustain in extended brawls."}],s:[{h:"Thor",w:"The comp IS Thor."},{h:"Magneto",w:"Explosive greatswords + bubble."}]}},
{name:"ANTI-DIVE",tag:"Wall + Info + Drain",color:C.green,desc:"WHY IT WORKS: PREVENTS the dive, doesn't fight it. The PRIMARY anti-dive tools are Groot walls (physically block dive lanes) and Daredevil wallhack (spots divers 3-5 seconds early). Rogue provides supplementary punishment. Rogue's ULTIMATE drains ult charge from enemies caught in it — in S7's slower ult economy, that stolen charge is 20% harder to rebuild, punishing their NEXT fight. Between ults, Explosive Entanglement (Gambit+Rogue) kinetic explosions damage attackers AND heal your team. NOTE: S7.5 Chain-CC Protection (purge after 5.5s CC / 6 CC effects) weakens Rogue's ability to chain stolen CC on divers. She's still strong but less oppressive than S7. Make the enemy come to YOU.",
lineup:[{p:"Begin",h:"Groot",r:"tank",n:"Walls BLOCK dive lanes. Plant at flank routes."},{p:"Gabe",h:"Rogue",r:"tank",n:"Ultimate drains enemy ult charge (not passive — ult only). Explosive Entanglement kinetic explosions damage+heal between ults. S7.5 CC protection limits her CC chaining."},{p:"Tristen",h:"Hela",r:"dps",n:"Punishes overextended divers from range."},{p:"Jace",h:"Daredevil",r:"dps",n:"72% WR. Wallhack = early warning. CALL IT OUT."},{p:"Ayden",h:"Gambit",r:"heal",n:"Explosive Entanglement anchor. Supercharges Rogue."},{p:"Sam",h:"Invisible Woman",r:"heal",n:"S-tier anti-dive. Self-shield + slow. Psionic Mayhem if Strange subbed."}],
tu:["Explosive Entanglement (Gambit+Rogue) — Rogue's attacks explode + heal allies. S-tier.","Planet X Pals (Groot+Jeff/Rocket) — Groot +150HP if Jeff or Rocket in comp.","Psionic Mayhem (IW+Strange) — if Strange subbed, psionic vortex PULLS enemies."],
alt:"GROOT BANNED → Begin Thor (loses wall control, gains AoE zone denial). Anti-dive weakens significantly without physical dive lane blockers. GAMBIT BANNED → CRITICAL — lose Explosive Entanglement. Ayden switches to Jeff or Rocket. Rogue still has base kit ult drain but loses kinetic explosions. C&D BANNED → Raquel sits, Sam stays on Invisible Woman. Or Raquel Rocket if practiced. DAREDEVIL BANNED → Lose early warning wallhack. Jace Blade (can punish divers in melee) or T-Money Punisher (ranged anti-dive). Team must communicate dive sightings manually. HELA BANNED → Tristen Phoenix (S+ Diamond+. Ult destroys bonus health — hard counters Venom/Rocket ult which divers rely on). Primal Flame with Wolverine if Zach subbed. Or Tristen Punisher.",
maps:"Counter-comp. Run when enemy shows Venom, Spider-Man, Magik, Black Panther in draft.",
convoy:"DEFENSE-FAVORED. Groot walls at dive entry points. Let them come to you.",
bs:{b:[{h:"Elsa Bloodstone",w:"Always."},{h:"Venom",w:"Ban their dive tank."},{h:"Spider-Man",w:"Remove follow-up dive threat."}],s:[{h:"Groot",w:"Wall control IS the anti-dive foundation."},{h:"Rogue",w:"Ult drain is the punishment."}]}},
{name:"ANTI-3 SUPP",tag:"Burst Through Healing",color:"#ff006e",desc:"WHY IT WORKS: Counters triple-support by bursting THROUGH healing. Moon Knight is S-tier after multiple buffs — Hand of Khonshu ult has massive talon generation and explosion radius. Groot ult (Strangling Prison) ISOLATES a target from their healers — combined with MK ult, even defensive strategist ults can't save the isolated target. Team PROVED this works in competitive. Thor's Awakening Rune adds burst that exceeds healing throughput.",
lineup:[{p:"Begin",h:"Groot",r:"tank",n:"Strangling Prison ISOLATES a healer. Combo with MK ult = guaranteed kill."},{p:"Gabe",h:"Magneto",r:"tank",n:"75% WR. Ult counters enemy C&D. Bubble protects during ult combos."},{p:"Tristen",h:"Moon Knight",r:"dps",n:"S-tier. Hand of Khonshu + Groot ult = kill through any healing. Blade of Khonshu team-up with Blade."},{p:"Zach",h:"Thor",r:"tank",n:"83.3% WR. Awakening Rune burst exceeds healing throughput. Yes, 3 tanks — the comp trades DPS slots for raw burst from tank ults."},{p:"Ayden",h:"Rocket",r:"heal",n:"C.Y.A. damage boost stacks with burst. Planet X Pals +150HP to Groot."},{p:"Raquel",h:"C&D",r:"heal",n:"12.82 KDA. Bubble protects during ult combos."}],
tu:["Blade of Khonshu (Moon Knight+Blade) — if Jace Blade subbed, Blade gets Eclipse Edge dash + 5% damage boost.","Planet X Pals (Groot+Rocket) — Groot +150HP.","Divine Armory (Angela+Thor) — if Angela subbed, Thor gets Thunder Spear + teleport."],
alt:"GROOT BANNED → CRITICAL — lose Strangling Prison isolation combo. Swap to BRAWL or POKE. ALTERNATIVE: Phoenix ult (Endsong Inferno) destroys bonus health and deployables — a different way to burst through triple support healing without Groot isolation. DAREDEVIL BANNED → N/A (DD not in default lineup). HELA BANNED → N/A (Hela not in default lineup). GAMBIT BANNED → N/A (Gambit not in this comp). C&D BANNED → Sam Invisible Woman or Raquel Rocket. Lose one heal slot but burst combo still works. MOON KNIGHT NOT PRACTICED → Tristen Hela (loses Groot+MK combo but gains consistent poke). Jace Blade can sub (activates Blade of Khonshu with MK if both in comp).",
maps:"Counter-comp vs triple support. Most effective on Convergence/Domination where fights concentrate.",
convoy:"OFFENSE-FAVORED. Groot ult isolates healer → MK ult kills through remaining heals → push 6v5.",
bs:{b:[{h:"Elsa Bloodstone",w:"Always."},{h:"Gambit",w:"Remove strongest enemy support."},{h:"Enemy Anchor",w:"Ban Groot/Magneto to weaken frontline."}],s:[{h:"Groot",w:"Strangling Prison isolation IS the combo."},{h:"Moon Knight",w:"The burst. Losing MK removes kill-through-healing."}]}},
{name:"FLEX",tag:"Fallback Plan",color:C.gold,desc:"You WILL get banned out of your primary comp. This is the plan. Built around Ayden (any role), Tristen (DPS/support flex), Gabe (Magneto default). The goal isn't to win with a perfect comp — it's to not LOSE because you had no plan.",
lineup:[{p:"Gabe",h:"Magneto",r:"tank",n:"75% WR. Default if available."},{p:"Begin",h:"Thor",r:"tank",n:"70% WR. Backup when Groot banned."},{p:"Tristen",h:"Hela",r:"dps",n:"Default ranged. Can flex to Invisible Woman support."},{p:"Jace",h:"Daredevil",r:"dps",n:"72% WR. Can flex to Blade for melee."},{p:"Ayden",h:"Jeff",r:"heal",n:"10.86 KDA. Can flex to Venom if dive needed."},{p:"Raquel",h:"C&D",r:"heal",n:"Default support."}],
tu:["Explosive Entanglement (Gambit+Magneto) — if Ayden swaps to Gambit.","Divine Armory (Angela+Thor) — if T-Money Angela subbed.","Bestial Hunt (DD+Punisher) — if T-Money Punisher alongside Jace DD."],
alt:"This IS the fallback. COMMON BAN RESPONSES: GROOT+MAGNETO both banned → Begin Thor + Gabe Strange. Psionic Mayhem team-up activates with IW. HELA+DAREDEVIL both banned → Tristen Punisher + Jace Blade. Bestial Hunt activates. C&D BANNED → Sam Invisible Woman or Ayden White Fox (if learned). GAMBIT BANNED → Ayden stays on Jeff (10.86 KDA, best healer stats). SUBS: T-Money for DPS (Punisher 67%, DD 75% R20) or tank (Angela 100%, Peni 50%). Tristen to Invisible Woman or Luna Snow for emergency support flex.",
maps:"Any map when primary comp is banned out.",
convoy:"Adapt. Hela/DD = poke angles. Thor = engage windows.",
bs:{b:[{h:"Elsa Bloodstone",w:"Always."},{h:"Hela / Gambit",w:"Best available."},{h:"Best Counter",w:"Ban whatever counters remaining comp."}],s:[{h:"Magneto",w:"ALWAYS save if available."},{h:"Best Available",w:"Save most critical remaining hero."}]}},
];


const LEARNS=[
{h:"White Fox",p:"CRITICAL",r:"S-tier S7 Strategist with charm CC. Blessing of the Kumiho team-up with Luna Snow adds healing + damage + CC in one ability. Meta-defining at Diamond+. Ayden 100% WR on alt. Raquel 67% QP. Both must get 30+ comp games. Enables a future comp variant that replaces C&D in poke lineups.",w:["Ayden","Raquel"]},
{h:"Ult Cycling Discipline",p:"CRITICAL",r:"The 1-2-3 Triple Support comp REQUIRES ult cycling: Jeff ult → C&D ult → Ultron ult in sequence, NEVER overlapping. If two supports accidentally ult at the same time, the comp falls apart. The team needs to practice this timing in QP/scrims before running it in tournament. This is the #1 reason 1-2-3 fails at lower ranks.",w:["Ayden","Raquel","Gabe"]},
{h:"Venom (Backup Dive Tank)",p:"CRITICAL",r:"Only Ayden plays Venom. If Ayden is on heals (his BEST role — 10.86 KDA Jeff), dive is impossible. Begin or Zach learning Venom enables comps where Ayden heals and someone else dives. Without a backup Venom player, the entire dive archetype lives and dies on one person's role assignment.",w:["Begin","Zach"]},
{h:"Begin: Groot Comp Reps",p:"CRITICAL",r:"Begin has ZERO competitive Groot games on his main account — only Thor (70% 20g) and Strange (44% 9g) in S7 comp. Multiple comps assign him Groot. His alt (Deanna Schmidt) has Groot 67% 3g in comp, proving the skill exists at a lower MMR. He MUST get 10+ competitive Groot games on main before the next tournament. Without this, every poke comp that puts Begin on Groot is running an untested player on that hero at GM level.",w:["Begin"]},
{h:"Phoenix",p:"HIGH",r:"S+ at Diamond+ per Celestial-ranked analysis. Self-sustaining flanker with splash damage, infinite-range stun (cancels enemy ults), and Endsong Inferno that DESTROYS bonus health/deployables — hard counters Venom ult, Rocket rez, shield stacking. Primal Flame team-up with Wolverine (Zach) gives both lifesteal fire. Replaces Hela when banned without requiring headshot precision. Priority over Hawkeye (B-tier at Diamond+, requires consistent headshots our Plat-Diamond roster can't reliably land against Celestial opponents).",w:["Tristen","Jace"]},
{h:"Jace: Blade Primary Shift",p:"HIGH",r:"S7.5 DATA CONFIRMS: Blade 2g 3.60 KDA with 1 MVP vs Daredevil 6g 3.37 KDA with 1 SVP. Blade is OUTPERFORMING DD in S7.5. DD went from 72% S7 → struggling in S7.5 (4W 7L overall). Blade's lifesteal self-sustain means he doesn't need healer peel — critical against Celestial+ pressure. Blade of Khonshu team-up with Moon Knight adds synergy. Consider making Blade the PRIMARY pick on brawl/dive maps, DD secondary on poke maps only.",w:["Jace"]},
{h:"Gambit (Multiple Players)",p:"HIGH",r:"Explosive Entanglement is the highest-value team-up — enables both Magneto bubble AND Rogue drain comps. Currently only Ayden and Zach play Gambit. Sam needs this for 1-2-3 variants. More Gambit players = more comp flexibility.",w:["Sam","Zach"]},
{h:"Groot (Gabe Backup)",p:"HIGH",r:"Gabe needs Groot for when Magneto is banned. Groot wall is the most impactful single ability on poke maps. Begin's Groot is 77.8% on alt — he can teach Gabe. Without Groot access for Gabe, Magneto ban collapses both Poke AND 1-2-3.",w:["Gabe"]},
{h:"Dive Coordination",p:"HIGH",r:"Dive comp requires EVERYONE to attack the SAME target simultaneously. Venom web → Spider-Man follow → Magik portal behind. Practice target calling in QP stacks. The comp has the highest ceiling but fails completely without voice coordination.",w:["Ayden","Tristen","Begin"]},
{h:"Peni Parker",p:"MEDIUM",r:"T-Money already at 50% WR 4g with 5.14 KDA. Solid flex tank for 2-2-2 comps. Spider drone provides area control. Add to tournament pool.",w:["T-Money"]},
{h:"Deadpool (S) — Jace Emergency Flex",p:"MEDIUM",r:"Jace 50% WR 6g with 5.50 KDA as emergency support. Same flex pattern that won the only tournament game (Tristen Luna Snow). Frees a healer slot in 1-2-3 variants.",w:["Jace"]},
{h:"Rocket Raccoon (Raquel)",p:"MEDIUM",r:"Raquel grinding Rocket in QP (19 R20 games). Planet X Pals with Groot. Second healer option when C&D is banned. Needs comp games to validate.",w:["Raquel"]},
{h:"Angela (T-Money Niche)",p:"LOW",r:"100% WR 5g. Niche pick for tight corridor maps (Hellfire Gala, Krakoa) where her kit excels. Small sample — keep playing in comp.",w:["T-Money"]},
]


const FB=[
{n:"Ayden",i:"🔧",v:"THE FLEX PLAYER",g:"A",
s:"Diamond 3 (4,288 RS). Jeff: 57.9% WR, 10.86 KDA across 19g — strongest healer stats on roster by a wide margin. Emma: 50% WR 16g. Punisher: 66.7% 12g. Mr. Fantastic: 6.09 KDA. Alt: 87% WR with White Fox at 100% WR 51.0 KDA. Can play every role.",
w:"Main recent 20: 45% — likely solo queue team issues. Venom only 2g at Diamond. White Fox not yet comp-tested on main account. The versatility can become a weakness if he's constantly being shuffled between roles without a defined primary identity.",
r:"Your identity should be: primary healer (Jeff/White Fox) with Venom as a strategic flex. Jeff at 10.86 KDA across 19 games makes you objectively the best healer on the roster. White Fox at 100% WR on alt proves the skill is there — get 30+ comp games on main ASAP. Venom reps at Diamond+ are critical because you're the only dive tank. The team should NOT be putting you on DPS (Punisher/Mr. Fantastic) in tournament — your healer stats are too valuable to waste on a DPS role that Tristen can fill."},
{n:"Begin",i:"⚡",v:"TEAM ANCHOR",g:"A-",
s:"GM3 main (4,544 RS). Second account: GM1 (4,724 RS, 73% WR). Thor 70% WR main, 66.7% across 33g on second account. Groot 77.8% 9g, Magneto 75% 12g, Magik 100% 9g on second account. The mechanical skill ceiling on this roster lives here — GM1 is the top 0.5% of the competitive player base.",
w:"Main account recent 20: 35% WR despite being GM3. Tournament: 1W 9L. Thor went 1W 4L in tournament — the team isn't enabling his engages. Strange at 44.4% comp WR on main is declining. Angela (0.29 KDA tournament) is confirmed dead pick. Even with GM-level mechanics, the team coordination gap is dragging performance down.",
r:"Thor is your weapon, but the tournament proved individual skill can't carry alone. The team needs pre-planned comps that SUPPORT your engages — when you leap in as Thor, the DPS and healers must follow within 1-2 seconds or you die alone. Drop Angela permanently. Your Magik (100% WR second account) should be the dive comp centerpiece but needs team practice. Push the team to run structured dive scrims with callouts. Consider learning ONE support (Rocket or C&D) — in the Klyntar win, Tristen flexed to Luna Snow and you got your best game. If YOU could also flex to support in emergencies, the team gains massive draft flexibility."},
{n:"Gabe",i:"🛡️",v:"ANCHOR TANK — MAGNETO COMMITTED",g:"A-",
s:"Diamond 3 (4,216 RS). Magneto 71.4% WR is elite. Strange 57.7% across 26g. Ultron heals 58.3%. The Magneto data proves high-level tank play IS in his toolkit.",
w:"20% last 20 WR — the most alarming stat on the entire roster. Tournament: 1W 9L playing 5 different heroes without committing to Magneto. MAG NEVER PLAYED IN TOURNAMENT. Thing 3 tourney games all losses. Cap America (C-tier). Emma (C-tier). Alt account: Strange at 20% WR confirms Strange may be carried by teammates on main, not individual mastery.",
r:"This is the most important coaching conversation on the roster: WHY DIDN'T YOU PLAY MAGNETO IN TOURNAMENT? If Magneto was banned every game — that's information the team needs to plan around. If it was a comp/draft issue — the team needs to restructure drafts around securing Magneto. If it was a personal comfort issue — you need to understand that 71.4% WR is your BEST hero by far and playing Thing at 45.5% instead is actively hurting the team. Your Strange at 20% on alt raises real questions about whether Strange is viable for you in tournament. The path forward: Magneto primary (always, unless banned). Learn Groot as backup. Consider Ultron heals as an emergency flex (4.71 KDA in tournament when forced onto it — your best non-Magneto tournament performance). Drop Thing, Cap, Star-Lord, Emma from all tournament consideration."},
{n:"Jace",i:"🎯",v:"DAREDEVIL SPECIALIST",g:"B+",
s:"Plat 1 (4,145 RS, peaked Diamond 3 at 4,201). Daredevil: 72% WR across 25g with 4.32 KDA — the strongest single-hero DPS data at volume on the entire roster. Recent 20 at 55% WR shows an upward trajectory. Blade has shown MVP ceiling games (10.75 KDA, 7.50 KDA). Deadpool (S) at 50% WR 6g 5.50 KDA indicates genuine support flex. Best maps: Hydra Charteris 83.3%, Empire Eternal Night 75%.",
w:"48% overall season WR — the recent climb hasn't offset the early losses yet. Blade at 33.3% across 9g is high-variance and not tournament-stable. Deadpool (V) at 22.2% across 9g confirms Vanguard is a dead role (26.67% role WR overall). Hero pool outside Daredevil is thin — most heroes have 1-2 game samples. Yggsgard 30% WR and Hellfire Gala 25% are disaster maps. The gap between his best (Daredevil 72%) and everything else is enormous.",
r:"You have one of the most valuable assets on the roster: a 72% Daredevil across 25 games. Daredevil is S-tier at Diamond+ — his wallhack gives the ENTIRE TEAM permanent information advantage, which in tournament play is priceless. Your tournament role is clear: Daredevil in every poke comp. This directly benefits the team because Zach was slotted into Daredevil but has no comp data on him — you fill this gap with PROVEN stats. Secondary path: Blade for dive/brawl maps. The 33.3% WR is misleading — your individual games show massive KDA spikes (10.75 MVP, 7.50 MVP) that suggest the losses are team-comp issues not individual skill issues. Blade's S7 buffs and lifesteal self-sustain make him a legitimate dive DPS. DO NOT play Deadpool (V) in tournament — 22.2% WR. Your Deadpool (S) at 5.50 KDA is intriguing as an emergency healer flex. The priority: master Daredevil (already done), stabilize Blade (get to 50%+ over 20g), and keep Deadpool (S) in the pocket for emergency support."},
{n:"Tristen",i:"🎯",v:"DPS CORE — VERIFIED",g:"B+",
s:"Diamond 2-3 across accounts. Spider-Man: 78.6% WR across 28g — elite. Iron Man: 63.6% 11g. Hela: 100% 1g 3.88 KDA. Multiple MVP games on Spider-Man. Also capable of flexing to Luna Snow and Invisible Woman in support role.",
w:"Tournament: 1W 9L. Iron Man 0W 4L (KDA range 0.20-2.30). Spider-Man 0W 3L (averaged 12.3 deaths/game). Moon Knight 0W 1L (17 deaths). Psylocke 0% recent comp WR. The tournament data is brutal — his best game was on Luna Snow (5.00 KDA), not on any DPS hero. Iron Man collapses in organized play because tournament teams punish his flight predictability and lack of escape tools.",
r:"Spider-Man is your weapon — 78.6% comp WR doesn't lie. But tournament showed the team isn't enabling dive follow-up, which means Spider-Man dives into 1v6 and dies. Solution: (1) the team must practice coordinated dive timing — Venom CC → Magik portal → THEN you engage, not before. (2) DROP Iron Man from tournament entirely — 0W 4L is definitive. (3) Learn Phoenix (S+ at Diamond+) for comps where dive isn't viable — self-sustaining flanker, ult destroys bonus health. Primal Flame team-up with Wolverine. (4) The Luna Snow flex is genuinely valuable — your 5.00 KDA in the only win proves you can heal at a competitive level. Keep Luna in the pocket for maps/comps where having 3 supports is correct."},
{n:"Zach",i:"🏗️",v:"THE WILD CARD",g:"B",
s:"Plat 3 (3,943 RS). Thor 83.3% WR (6g) — highest single-hero WR on the roster (min 5g). Deadpool (V) 75% 4g. Gambit 8.50 KDA MVP recently.",
w:"35% recent 20. Thing 25%. Mantis/Sue 0%. 18+ heroes experimented with but only Thor and Deadpool (V) are winning. Tournament data incomplete.",
r:"Thor 83.3% is remarkable — but Begin also plays Thor at 70%. In tournament, Begin should be on Thor and you should fill the flex role. Your tournament pool: Deadpool (V) and Magneto for tanks. Daredevil and Wolverine for DPS. Gambit and C&D for heals. That's 6 heroes. The Deadpool (V) at 75% is your unique weapon — nobody else on the roster plays it. Own that. DROP: Thing, Mantis, Sue, Bucky, Loki, Ultron, Mr. Fantastic. The experimentation phase needs to end and the mastery phase needs to begin."},
{n:"T-Money",i:"📈",v:"THE CLOSET VANGUARD",g:"B-",
s:"Plat 2 (4,077 RS, peaked Plat 1). 54% WR. HIDDEN WEAPON: Angela 100% WR 5g 4.76 KDA. Peni Parker 50% 4g 5.14 KDA. Vanguard role 71% WR (7g) dramatically outperforms DPS role (50%). Also playing: Hulk, Namor, Squirrel Girl, Loki, Thor, Wolverine, Deadpool (V), Thing. Much wider hero pool than originally reported.",
w:"Magneto 40% WR (5g) — his supposed main tank is underperforming. Moon Knight 25% WR (4g) — not a tournament pick. Strategist 0% WR (3g) — support role confirmed impossible. Playing too many heroes without depth on any. Punisher at 62.5% is decent but 8.8 deaths/game is concerning.",
r:"The data says you're a TANK player, not a DPS player. Your Vanguard WR (71%) vs DPS WR (50%) isn't close. Your tournament pool should be: Peni Parker (5.14 KDA), Magneto (needs improvement — play more), and Angela (100% WR small sample — keep growing it on tight corridor maps). For DPS: Punisher only (62.5% WR). DROP Moon Knight (25%), Squirrel Girl (niche), Namor (niche). Don't play support in tournament — 0% WR across 3 games. Focus tank: Peni → Magneto → Angela. Phoenix is the priority DPS pickup if expanding pool — S+ at Diamond+, doesn't require headshot precision. The Angela stats are intriguing but 5 games is NOT enough to call it proven — get to 15+ games."},
{n:"Sam",i:"💊",v:"SUPPORT SPECIALIST",g:"C+",
s:"Plat 2 (4,062 RS). 50 comp Sue Storm games. C&D 55.6% WR 9g (40.7 assists/game — enormous healing output). Rocket 66.7% 3g. Highest total support game count on roster (62 games).",
w:"47% overall. Sue 44% after 50g — ceiling reached. Strange 0% WR 4g. Role confusion with tank experiments.",
r:"Make C&D your primary — the 55.6% WR with 40.7 assists/game proves you heal at an elite level on that hero. Sue at 44% after 50 games means you've hit the skill ceiling on Sue at your current rank. That's not failure — it's information. The information says: switch to C&D. Learn Gambit for Explosive Entanglement team-up value. The Strange experiments at 0% WR (4g) must stop immediately — you are a support player and every game you spend on Strange is a game you could be improving on Gambit or C&D."},
{n:"Raquel",i:"🚨",v:"CRITICAL LIABILITY",g:"C+",
s:"C&D 55.6% season WR (18g, 12.82 KDA, 29.8 assists/game). Learning White Fox (67% QP). The KDA and assist numbers prove the healing output is elite when the hero is working.",
w:"3 heroes total (C&D, Luna 0%, White Fox QP-only). C&D 18% last 20. Tournament 1W 8L on C&D with zero adaptation. Multiple 0-kill games. A player who drops from 55.6% to 18% WR without a hero change has encountered either a meta shift, a confidence spiral, or both.",
r:"The forensic analysis: your C&D at 12.82 KDA with 29.8 assists/game proves the HEALING OUTPUT is not the problem — you're dying too much. In your 55.6% WR games, you were likely dying ~3 times/game. In the recent 18% stretch, you're dying ~7+ times. That's a positioning/peel issue. Two hypotheses: (1) S7's dive meta means more enemies are targeting supports — you need to position further back than you did in S6, or (2) your team's composition isn't providing enough peel. The tournament data supports both — games where the team ran proper tanks (Klyntar win) you had 16.00 KDA. Games where the team was scrambled, you died 7-11 times. FIX: (1) Position 5-10m further from the fight than you currently do. (2) Learn to toggle to Dagger form when being dove — the damage can kill flankers. (3) EXPAND YOUR POOL — Rocket, Gambit, Sue. Not negotiable."},
];


const RULES=[{l:"Format",v:"Open Quals (BO1) → Closed Quals (BO1) → Double Elim (BO3→BO5→BO7)"},{l:"Bans",v:"3 bans + 2 saves each (6 banned, 4 saved)"},{l:"Roster",v:"6+ per Faction. Subs between maps OK."},{l:"Rank",v:"Platinum 3 minimum"},{l:"Maps",v:"14 maps + Lower Manhattan. 1st=random Dom. Loser picks next."},{l:"Reg",v:"March 28–April 11 (AMERICAS)"},{l:"Open",v:"April 11–12 | 7-11pm ET"},{l:"Closed",v:"April 18–19 | 7-11pm ET"},{l:"Elim",v:"April 25–May 10"},{l:"Prize",v:"$7K / $3.5K / $2.5K / $1.5K"}];

// ─── META TIER DATA ───
const META_TIERS={
vanguard:[
{tier:"S+",heroes:[
{h:"Groot",n:"S7's anchor king. Wall control is the single most impactful non-ult ability now that neutral phases stretch 50+ seconds. Blocks corridors, denies dive, scales with slower ult economy. Planet X Pals with Rocket adds team-up value."},
{h:"Deadpool (V)",n:"Most flexible tank in the game. Selfie for invulnerability, pistols shred backlines, Pool Party ult deletes teams. S+ because versatility at the highest level is unmatched."},
{h:"Magneto",n:"Metal Bulwark remains the premier team-protection tool. Bubble shields your entire poke line during long S7 neutrals. Top 3 ban target at Diamond+. Gabe's 71.4% WR proves this is real."},
]},
{tier:"S",heroes:[
{h:"Emma Frost",n:"Diamond Form brawling is powerful with 100-to-0 tank combo at high elo. Mobalytics confirms S-tier at Diamond+ — her kit excels WITH a team built around her. Ayden's 50% 16g and recent 7+ KDA games validate the pick."},
{h:"Rogue",n:"Ult drain is 20% more devastating in S7. Draining an enemy's ult removes 50+ seconds of progress. Explosive Entanglement with Gambit amplifies. Anti-ult-economy specialist."},
{h:"The Thing",n:"Gamma Charge team-up plus durability makes him a solid anchor. Damage reduction and CC are deceptively effective. Consistent rather than flashy — and consistency matters in tournament."},
]},
{tier:"A",heroes:[
{h:"Thor",n:"Damage machine but provides zero team utility beyond kills. Begin's 70% WR proves he works. Zach's 83.3% is the highest single-hero WR on the roster. At highest level, Thor comps need extra support infrastructure."},
{h:"Hulk",n:"Massive S7 buffs. Stall potential on objectives is now elite. Strong on domination maps. Less valuable on convoy where positioning matters more than raw HP."},
{h:"Venom",n:"THE dive tank. Only Vanguard who truly initiates dives. Symbiote Shenanigans +150 HP. Ayden's new 3.36 KDA WIN shows improvement. But Gambit cleanse hard-counters Venom ult."},
{h:"Dr. Strange",n:"Portal and Eye of Agamotto remain two of the best abilities in the game. Gabe's 10.75 KDA game (38/4/5 on Tokyo) proves the ceiling is elite. Shield of the Seraphim is largest in the game. Inconsistency is the issue, not capability."},
{h:"Captain America",n:"Mobile off-tank. Can dive AND take hits — not the best at either, but versatile. Mobalytics places him A-tier. Tournament data for Gabe on Cap was poor (0.88 KDA) — roster should avoid."},
{h:"Angela",n:"Mobalytics A-tier Vanguard. Niche effective in tight corridor maps (Hellfire Gala, Krakoa). T-Money's 100% WR (5g) 4.76 KDA is intriguing but small sample. High mobility melee tank."},
]},
{tier:"B",heroes:[
{h:"Peni Parker",n:"Spider drone provides area denial, ult zones enemies. T-Money's 5.14 KDA proves viability. Solid flex tank in 2-2-2 comps. Backup, not primary."},
]},
],
duelist:[
{tier:"S+",heroes:[
{h:"Elsa Bloodstone",n:"Most impactful DPS when unbanned. Burst damage and self-sufficiency make her a terror. Ban-or-build-around at Diamond+."},
{h:"Phoenix",n:"Despite nerfs, resurrection mechanic is game-warping. Dying is a minor inconvenience. Lower damage post-nerf but passive alone keeps her S+."},
{h:"Psylocke",n:"S7 dive buff hit her hard. Slower defensive ults mean wider assassination windows. Melee burst combo deletes squishies. Scariest flanker on the map."},
{h:"Loki",n:"Value comes from copying S+ heroes. When Invisible Woman or Gambit is banned, Loki becomes them. Galaxy-brain draft flexibility."},
]},
{tier:"S",heroes:[
{h:"Winter Soldier",n:"Despite Assassin's Charge CD nerf (3s to 6s), dominant hitscan. Burst headshots still instant kills. Nerf slowed engage frequency, didn't touch kill power."},
{h:"Star-Lord",n:"Consistent ranged DPS with strong mobility. Element Guns provide flexible damage. Aerial mobility makes him hard to pin. Solid in poke and hybrid comps."},
{h:"Namor",n:"Rose from D-tier. Turrets provide consistent zone damage. Team-up with Hela. Turret playstyle scales with S7's longer neutral phases."},
{h:"Daredevil",n:"S-tier per Mobalytics. Wallhack passive gives ENTIRE TEAM permanent info advantage. Jace's 72% WR 25g 4.32 KDA validates — strongest single-hero DPS data at volume on the roster."},
{h:"Moon Knight",n:"S-tier Duelist per Mobalytics. Mobility and burst nightmare for isolated supports. Groot + Moon Knight ult combo is a guaranteed fight win vs triple support — the foundation of our Anti-3 Supp comp. Tristen has tournament data (0W 1L, 17 deaths) proving it's in his pool but needs practice. High-ceiling pick that rewards discipline."},
]},
{tier:"A",heroes:[
{h:"Wolverine",n:"Sustained melee with self-healing. In S7's longer neutrals, sustain lets him outlast opponents. Excellent in brawl, weak on open poke maps."},
{h:"Hela",n:"Top-tier ranged hitscan. Goddess of Death ult = 10s aerial AoE. Aim-dependent: S-tier in skilled hands, B-tier otherwise. Team-ups with Namor and Venom."},
{h:"Spider-Man",n:"Elite dive DPS. Tristen's 78.6% season WR proves the ceiling. BUT R20 crashed to 22% (2W 7L). NEEDS team follow-up — solo dives = death. Web-pull environmental kills are unique niche."},
{h:"Magik",n:"S-tier dive assassin. Portal pressure forces constant backline checks. Begin 100% WR (9g on second acct). S7 dive buffs widened her windows."},
{h:"Blade",n:"Major S7 buffs. Lifesteal self-sustain frees supports. Jace showing MVP ceiling games (10.75, 7.50 KDA). Blade of Khonshu team-up with Moon Knight."},
{h:"Black Panther",n:"Meaningful S7 buffs. Stealth and burst make him strong flanker. Less mechanical than Psylocke, similar assassination potential."},
{h:"Punisher",n:"Consistent ranged damage with grenade utility. Bestial Hunt team-up with Daredevil. Solid mid-range DPS."},
{h:"Storm",n:"AoE damage and support hybrid. Cosmic Cyclone team-up with Adam Warlock (new S7). Strong on domination maps. Can flex between Duelist and Strategist roles."},
]},
{tier:"B",heroes:[
{h:"Iron Man",n:"S7 buffs improved aerial pressure but predictable flight gets punished. Tristen's tournament: 0W 4L. R20 now 0% (0W 5L). Ranked viable, tournament/comp liability confirmed."},
{h:"Hawkeye",n:"Charged headshots instant kills but glass cannon. Mobalytics B-tier at Diamond+ — aim-dependent inconsistency. Still the roster's biggest missing archetype (hitscan sniper)."},
{h:"Iron Fist",n:"Matchup-dependent. Hard-counters some, gets hard-countered. Strange movement hard to track below Diamond."},
{h:"Human Torch",n:"S7 buff with more teased. Not strong enough to justify over S/A-tier options."},
{h:"Deadpool (D)",n:"Worst of Deadpool's three forms. Blocks superior Vanguard/Strategist kits."},
{h:"Mr. Fantastic",n:"Off-tank Duelist. Dominates below Diamond, damage too low for Diamond+ DPS slot."},
{h:"Squirrel Girl",n:"Can't confirm kills in 3-healer meta. Damage outhealed constantly."},
]},
{tier:"C",heroes:[
{h:"Black Widow",n:"Lowest-performing DPS at Diamond+. Kit hasn't kept up with power creep."},
{h:"Scarlet Witch",n:"S7 buffs but still bottom at Diamond+. Countered by coordinated teams. Dominates below Diamond."},
]},
],
strategist:[
{tier:"S+",heroes:[
{h:"Gambit",n:"Most impactful support. Ragin' Royal Flush supercharges allies. CC cleanse is unique and invaluable. Removing him via ban is almost always correct."},
{h:"Invisible Woman",n:"Piercing attack heals AND damages simultaneously. Barrier + invisibility = unmatched defensive utility. S+ at every rank. Tristen's 8.67 KDA comp WIN shows DPS players can pilot her effectively."},
{h:"Cloak & Dagger",n:"S-tier comeback in S7. Dual-form versatility is unpredictable. C&D ult has more security with Magneto bubble. Team's most-played support across 4 players."},
]},
{tier:"S",heroes:[
{h:"White Fox",n:"S7's new Strategist. Charm CC from support is genuinely disruptive. Kumiho team-up with Luna Snow. Ayden 100% WR on alt, Raquel 67% R20. Both developing."},
{h:"Mantis",n:"Team-buffing kit unlocks teammates. Prevalent in coordinated teams. Scales with team quality."},
{h:"Luna Snow",n:"Dual-role: heals allies, damages enemies. Kumiho team-up with White Fox. Tristen's 5.00 KDA in the only tournament WIN proves her value in flex comps."},
]},
{tier:"A",heroes:[
{h:"Rocket Raccoon",n:"Simple kit, strong damage, Planet X Pals with Groot. Sam's 66.7% WR. C.Y.A. damage boost empowers Thor ult to one-shot 300HP healers in anti-triple-support comps."},
{h:"Deadpool (S)",n:"Strategist Deadpool surprisingly viable. Jace's 50% WR 6g 5.50 KDA confirms. Solid healing, impactful ult."},
{h:"Adam Warlock",n:"Lost team-up anchor in S7 (15% healing gone). Flight addition exciting but indirect nerf hurts. Ult still amazing."},
]},
{tier:"B",heroes:[
{h:"Ultron",n:"Solid third healer vs dive. Being airborne forces opponents off dive. Gabe's 58.3% 12g 8.75 KDA, 4.71 KDA in tournament. Not primary healer but effective emergency flex."},
{h:"Jeff",n:"Mobalytics B-tier at Diamond+. Two team-ups. Ult now provides team healing. Speed-boost bubbles. Raquel's Jeff is 100% 4g 18.44 KDA — individually strong but meta placement is lower than expected."},
{h:"Sue Storm",n:"Sam's 44% WR after 50g = ceiling hero. R20 dropped to 25% (2W 6L). Shields protect pushes but healing output can't match S/A-tier. Outscaled at Diamond+."},
]},
],
teamups:[
{tier:"S",tu:[
{n:"Vibrant Vitality",h:"Mantis + Groot / Loki",d:"HIGH IMPACT per Mobalytics. Groot gets a 4th healing wall. Loki gets larger immortality rune with damage boost that stacks with Mantis' standard boost. Game-changing sustain."},
{n:"Arcane Order",h:"Dr. Strange + Scarlet Witch",d:"HIGH IMPACT per Mobalytics. Scarlet Witch gets rapid-fire right-click + primary fire simultaneously. Only 20s downtime. Transforms Wanda into a backline assassin."},
{n:"Primal Flame",h:"Phoenix + Wolverine",d:"HIGH IMPACT per Mobalytics. Lifesteal makes Wolverine nearly unkillable. Was the most banned team-up in S3. Still devastating when both heroes are picked."},
]},
{tier:"A",tu:[
{n:"Chilling Assault",h:"Luna Snow + Hawkeye / Iron Fist",d:"MEDIUM per Mobalytics. Ice arrows stun and pierce — gives Hawkeye a guaranteed headshot KO every 20s. Iron Fist gets AoE healing."},
{n:"Stark Protocol",h:"Iron Man + Ultron / Squirrel Girl",d:"MEDIUM per Mobalytics. Nano Ray pierces entire map through enemies AND allies — heals and damages simultaneously. Massive ult charge generation."},
{n:"Symbiote Shenanigans",h:"Venom + Jeff / Hela",d:"MEDIUM per Mobalytics. Symbiote tendrils heal linked allies with burst healing at end. Excess converts to bonus HP. +150 HP for Venom."},
{n:"Explosive Entanglement",h:"Gambit + Magneto / Rogue",d:"S7 addition. Enables Rogue ult drain AND Magneto bubble. Two S+ heroes made stronger. Highest roster team-up value."},
{n:"Blessing of the Kumiho",h:"White Fox + Luna Snow",d:"S7 addition. Charm CC + healing + damage. Meta-defining triple threat. Ayden and Raquel both developing White Fox."},
]},
{tier:"B",tu:[
{n:"Planet X Pals",h:"Groot + Rocket",d:"LOW IMPACT per Mobalytics. The heroes are individually S+/A tier but the team-up bonus itself is passive and minor. Still run together for individual hero value, not team-up value."},
{n:"Stars Aligned",h:"Captain America + Winter Soldier",d:"LOW per Mobalytics. Bucky gets AoE slam + slow + bonus HP for allies. Versatile but both heroes rarely picked together at Diamond+."},
{n:"Bestial Hunt",h:"Punisher + Daredevil",d:"S7 addition. Grenade blind effect. Niche utility. Jace's Daredevil activates this with any Punisher player."},
{n:"Blade of Khonshu",h:"Blade + Moon Knight",d:"S7 addition. Dive flanker synergy. Jace plays Blade, Tristen has MK data."},
{n:"Cosmic Cyclone",h:"Storm + Adam Warlock",d:"S7 addition. AoE synergy. Niche on domination maps."},
{n:"Fastball Special",h:"Hulk + Thing + Wolverine",d:"LOW per Mobalytics. Fun meme. Not tournament-viable."},
]},
{tier:"—",tu:[
{n:"Jeff-nado (REMOVED)",h:"Storm + Jeff",d:"Was HIGH IMPACT — removed in S7. Former best team-up in the game. Rest in peace."},
{n:"Duality Dance (REMOVED)",h:"Adam Warlock + Luna Snow",d:"Was MEDIUM IMPACT — removed in S7. Adam Warlock lost 15% healing anchor. Significant indirect nerf."},
]},
]};

// ─── ROLE FLEXIBILITY MATRIX ───
const ROLE_MATRIX=[
{name:"Ayden",roles:{
vanguard:{wr:"50%",conf:"FLEX",heroes:"Emma 50% 16g, Venom 50% 2g",note:"Emma 12g in R20 at 50% with 7+ KDA peaks. Venom NEW WIN 3.36 KDA. Climbing Plat 1 → Dia 3 on Vanguard picks.",c:C.gold},
duelist:{wr:"66.7%",conf:"STRONG",heroes:"Punisher 66.7% 12g, Mr. Fantastic 50%",note:"Solid DPS but healer stats are so much better.",c:C.blue},
strategist:{wr:"57.9%",conf:"ELITE",heroes:"Jeff 57.9% 10.86 KDA, White Fox 100% alt",note:"BEST healer by KDA. THIS is his primary role.",c:C.green}
}},
{name:"Begin",roles:{
vanguard:{wr:"70%",conf:"ELITE",heroes:"Thor 70%, Groot 77.8%, Magneto 75%, Magik 100%",note:"GM1 tank player. Thor/Groot/Magneto all proven at highest level.",c:C.green},
duelist:{wr:"—",conf:"NONE",heroes:"No DPS data",note:"Not a DPS player. All successful picks are Vanguard-class.",c:C.muted},
strategist:{wr:"—",conf:"NONE",heroes:"No support data",note:"Learning Rocket/C&D recommended for emergency flex.",c:C.muted}
}},
{name:"Gabe",roles:{
vanguard:{wr:"71.4%",conf:"ELITE",heroes:"Magneto 71.4% 7g, Strange 57.7% 26g, Thing 45.5%",note:"Magneto 71.4% ELITE. NEVER PLAYED IN TOURNAMENT. Strange hit 10.75 KDA (38/4/5) = best comp game on roster. Ceiling is GM-level, floor is catastrophic.",c:C.green},
duelist:{wr:"0%",conf:"DEAD",heroes:"Star-Lord 0% 2g",note:"Not a DPS player.",c:C.accent},
strategist:{wr:"58.3%",conf:"FLEX",heroes:"Ultron 58.3% 12g, 8.75 KDA",note:"Emergency Ultron heals. 4.71 KDA in tourney was his best non-Mag game.",c:C.gold}
}},
{name:"Jace",roles:{
vanguard:{wr:"26.7%",conf:"DEAD",heroes:"Deadpool V 22.2% 9g, Magneto 100% 1g, Thing 0% 1g",note:"26.67% Vanguard role WR across 15 games. DO NOT put on tank. Deadpool V 22.2% across 9g is definitive.",c:C.accent},
duelist:{wr:"72%",conf:"ELITE",heroes:"Daredevil 72% 25g, Blade 33.3% 9g, Iron Man 50% 2g",note:"Daredevil 72% across 25g = strongest single-hero DPS on roster at volume. S-tier pick. Blade high-variance but ceiling is real (10.75 KDA MVP).",c:C.green},
strategist:{wr:"57.1%",conf:"FLEX",heroes:"Deadpool S 50% 6g 5.50 KDA, Loki 100% 1g",note:"Deadpool (S) 5.50 KDA across 6g is promising emergency flex. 57.14% role WR. Small sample but real output.",c:C.gold}
}},
{name:"Raquel",roles:{
vanguard:{wr:"—",conf:"NONE",heroes:"None",note:"Not a tank player.",c:C.muted},
duelist:{wr:"—",conf:"NONE",heroes:"None",note:"Not a DPS player.",c:C.muted},
strategist:{wr:"55.6%",conf:"IMPROVING",heroes:"C&D 55.6% 18g, Jeff 100% 4g 18.44 KDA, Luna 0% 3g, White Fox 67% QP",note:"Jeff 100% 4g 18.44 KDA is a breakthrough. C&D 18% R20 but Jeff may be new primary. Pool expanding from 3 to 4.",c:C.blue}
}},
{name:"Sam",roles:{
vanguard:{wr:"—",conf:"NONE",heroes:"Thing experiments, Strange 0% 4g",note:"9 Vanguard games in R20 at 22% WR (2W 7L). Role confusion WORSENING. Every tank game is a support game wasted.",c:C.muted},
duelist:{wr:"—",conf:"NONE",heroes:"No Duelist data",note:"No DPS games on record. Sam is a support player.",c:C.muted},
strategist:{wr:"55.6%",conf:"STRONG",heroes:"C&D 55.6% 9g, Sue 44% 50g, Rocket 66.7% 3g",note:"62 support games. C&D should be primary. Sue R20 dropped to 25% (2W 6L) — ceiling confirmed. Invisible Woman R20 also 25% (2W 6L).",c:C.blue}
}},
{name:"T-Money",roles:{
vanguard:{wr:"71%",conf:"STRONG",heroes:"Angela 100% 5g, Peni 50% 4g, Magneto 40%",note:"71% Vanguard WR vs 50% DPS. HE IS A TANK PLAYER.",c:C.blue},
duelist:{wr:"50%",conf:"WEAK",heroes:"Punisher 62.5%, Moon Knight 25%",note:"Moon Knight 25% = dead pick. Duelist NOT his role.",c:C.gold},
strategist:{wr:"0%",conf:"DEAD",heroes:"0% across 3g",note:"IMPOSSIBLE. Do not put on support.",c:C.accent}
}},
{name:"Tristen",roles:{
vanguard:{wr:"—",conf:"NONE",heroes:"No tank data",note:"Not a tank player.",c:C.muted},
duelist:{wr:"78.6%",conf:"ELITE",heroes:"Spider-Man 78.6% 28g, Hela 100% 1g, Iron Man 63.6%",note:"Spider-Man elite season but R20 CRASHED to 22% (2W 7L). Iron Man 0% R20 (0W 5L) = DEAD. Duelist R20 role: 19% (3W 13L).",c:C.green},
strategist:{wr:"—",conf:"FLEX",heroes:"Luna Snow 5.00 KDA tourney, Invis Woman 8.67 KDA WIN",note:"Strategist R20 role: 50% (2W 2L). OUTPERFORMING his Duelist R20 (19%). Luna in ONLY WIN. IW 8.67 KDA new comp game.",c:C.gold}
}},
{name:"Zach",roles:{
vanguard:{wr:"83.3%",conf:"ELITE",heroes:"Thor 83.3% 6g, Deadpool V 75% 4g, Thing 25%",note:"Thor 83.3% = highest hero WR on roster. DP(V) is unique weapon.",c:C.green},
duelist:{wr:"—",conf:"FLEX",heroes:"Daredevil, Wolverine, Gambit 8.50 KDA QP",note:"Experimentation phase. DD and Wolverine fit team comps.",c:C.gold},
strategist:{wr:"0%",conf:"WEAK",heroes:"Mantis 0%, Sue 0%, Gambit QP only",note:"0% on Mantis/Sue. Gambit only viable support path, untested comp.",c:C.accent}
}},
];

// ─── ALL HEROES ───
const ALL_HEROES=[
{h:"Groot",r:"tank",t:"S+"},{h:"Deadpool (V)",r:"tank",t:"S+"},{h:"Magneto",r:"tank",t:"S+"},
{h:"Rogue",r:"tank",t:"S"},{h:"Emma Frost",r:"tank",t:"S"},{h:"The Thing",r:"tank",t:"S"},
{h:"Thor",r:"tank",t:"A"},{h:"Hulk",r:"tank",t:"A"},{h:"Venom",r:"tank",t:"A"},{h:"Dr. Strange",r:"tank",t:"A"},{h:"Captain America",r:"tank",t:"A"},{h:"Angela",r:"tank",t:"A"},
{h:"Peni Parker",r:"tank",t:"B"},
{h:"Elsa Bloodstone",r:"dps",t:"S+"},{h:"Phoenix",r:"dps",t:"S+"},{h:"Psylocke",r:"dps",t:"S+"},{h:"Loki",r:"dps",t:"S+"},
{h:"Winter Soldier",r:"dps",t:"S"},{h:"Star-Lord",r:"dps",t:"S"},{h:"Namor",r:"dps",t:"S"},{h:"Daredevil",r:"dps",t:"S"},{h:"Moon Knight",r:"dps",t:"S"},
{h:"Wolverine",r:"dps",t:"A"},{h:"Hela",r:"dps",t:"A"},{h:"Spider-Man",r:"dps",t:"A"},{h:"Magik",r:"dps",t:"A"},{h:"Blade",r:"dps",t:"A"},{h:"Black Panther",r:"dps",t:"A"},{h:"Punisher",r:"dps",t:"A"},{h:"Storm",r:"dps",t:"A"},
{h:"Iron Man",r:"dps",t:"B"},{h:"Hawkeye",r:"dps",t:"B"},{h:"Iron Fist",r:"dps",t:"B"},{h:"Human Torch",r:"dps",t:"B"},{h:"Deadpool (D)",r:"dps",t:"B"},{h:"Mr. Fantastic",r:"dps",t:"B"},{h:"Squirrel Girl",r:"dps",t:"B"},
{h:"Black Widow",r:"dps",t:"C"},{h:"Scarlet Witch",r:"dps",t:"C"},
{h:"Gambit",r:"heal",t:"S+"},{h:"Invisible Woman",r:"heal",t:"S+"},{h:"Cloak & Dagger",r:"heal",t:"S+"},
{h:"White Fox",r:"heal",t:"S"},{h:"Mantis",r:"heal",t:"S"},{h:"Luna Snow",r:"heal",t:"S"},
{h:"Rocket Raccoon",r:"heal",t:"A"},{h:"Deadpool (S)",r:"heal",t:"A"},{h:"Jeff",r:"heal",t:"A"},{h:"Adam Warlock",r:"heal",t:"A"},
{h:"Ultron",r:"heal",t:"B"},{h:"Sue Storm",r:"heal",t:"B"},
];
const OUR_HEROES={
"Begin":["Thor","Groot","Magneto","Magik","Dr. Strange"],
"Ayden":["Jeff","White Fox","Venom","Emma Frost","Punisher","Mr. Fantastic","Rocket Raccoon"],
"Tristen":["Spider-Man","Hela","Iron Man","Psylocke","Luna Snow","Invisible Woman","Dr. Strange"],
"Gabe":["Magneto","Dr. Strange","The Thing","Ultron","Rogue"],
"Sam":["Cloak & Dagger","Invisible Woman","Rocket Raccoon"],
"Zach":["Thor","Deadpool (V)","Wolverine","Daredevil","Gambit","Rocket Raccoon"],
"Raquel":["Cloak & Dagger","Jeff","Luna Snow","White Fox"],
"T-Money":["Angela","Peni Parker","Punisher","Magneto","Daredevil","Namor"],
"Jace":["Daredevil","Blade","Deadpool (V)","Deadpool (S)","Iron Man"],
};


// ─── SYNERGY DATA (S7 all modes) ───
const SYNERGY=[
{p1:"Jace",p2:"Ayden",wr:"90.91%",g:11,v:"ELITE"},
{p1:"Raquel",p2:"Begin (alt)",wr:"70.37%",g:27,v:"STRONG"},
{p1:"Jace",p2:"Begin (alt)",wr:"70%",g:10,v:"STRONG"},
{p1:"Ayden",p2:"Begin (alt)",wr:"66.67%",g:45,v:"STRONG"},
{p1:"Jace",p2:"T-Money",wr:"63.64%",g:11,v:"GOOD"},
{p1:"T-Money",p2:"Begin (alt)",wr:"61.54%",g:26,v:"GOOD"},
{p1:"Tristen",p2:"T-Money",wr:"59.09%",g:22,v:"GOOD"},
{p1:"Ayden",p2:"Gabe",wr:"58.82%",g:85,v:"GOOD"},
{p1:"Gabe",p2:"Tristen",wr:"58.82%",g:51,v:"GOOD"},
{p1:"Tristen",p2:"Raquel",wr:"58.33%",g:48,v:"GOOD"},
{p1:"Ayden",p2:"Tristen",wr:"57.58%",g:66,v:"GOOD"},
{p1:"Gabe",p2:"T-Money",wr:"57.14%",g:28,v:"GOOD"},
{p1:"T-Money",p2:"Ayden",wr:"55.56%",g:36,v:"NEUTRAL"},
{p1:"Raquel",p2:"Gabe",wr:"53.85%",g:52,v:"NEUTRAL"},
{p1:"Gabe",p2:"Sam",wr:"51.81%",g:83,v:"NEUTRAL"},
{p1:"Ayden",p2:"Sam",wr:"47.14%",g:70,v:"WEAK"},
{p1:"T-Money",p2:"Sam",wr:"46.43%",g:28,v:"WEAK"},
{p1:"Raquel",p2:"Ayden",wr:"45.35%",g:86,v:"WEAK"},
{p1:"Ayden",p2:"Begin",wr:"44.68%",g:47,v:"WEAK"},
{p1:"Sam",p2:"Raquel",wr:"41.67%",g:24,v:"CRISIS"},
{p1:"Begin",p2:"Tristen",wr:"31.82%",g:22,v:"CRISIS"},
{p1:"Ayden",p2:"Zach",wr:"26.67%",g:15,v:"CRISIS"},
{p1:"Raquel",p2:"Zach",wr:"26.67%",g:15,v:"CRISIS"},
{p1:"Gabe",p2:"Zach",wr:"25%",g:20,v:"CRISIS"},
{p1:"Tristen",p2:"Zach",wr:"15.38%",g:13,v:"CRISIS"},
{p1:"Begin",p2:"Zach",wr:"9.09%",g:11,v:"CRISIS"},
{p1:"Begin",p2:"Raquel",wr:"7.14%",g:14,v:"CRISIS"},
{p1:"Begin",p2:"Gabe",wr:"7.14%",g:14,v:"CRISIS"},
];

// ─── MAP PLAYER DATA (S7 Competitive WR per player per map, 3+ games only) ───
const MAP_PLAYERS={
"Midtown":[{p:"Ayden",wr:"42.86%",g:7},{p:"Gabe",wr:"60%",g:5}],
"Arakko":[{p:"Ayden",wr:"42.86%",g:7},{p:"Gabe",wr:"66.67%",g:6},{p:"Tristen",wr:"80%",g:5},{p:"Sam",wr:"40%",g:5},{p:"Jace",wr:"25%",g:4}],
"Spider-Islands":[{p:"Ayden",wr:"71.43%",g:7},{p:"Gabe",wr:"16.67%",g:6},{p:"Begin",wr:"25%",g:4},{p:"Tristen",wr:"75%",g:4},{p:"T-Money",wr:"33.33%",g:3},{p:"Raquel",wr:"66.67%",g:3},{p:"Jace",wr:"100%",g:3},{p:"Zach",wr:"33.33%",g:3}],
"Yggdrasill Path":[{p:"Gabe",wr:"80%",g:5},{p:"Sam",wr:"100%",g:4},{p:"Begin",wr:"33.33%",g:3},{p:"Jace",wr:"30%",g:10}],
"Museum":[{p:"Gabe",wr:"50%",g:4},{p:"Tristen",wr:"80%",g:5},{p:"Zach",wr:"66.67%",g:3}],
"Krakoa":[{p:"Sam",wr:"66.67%",g:3},{p:"Raquel",wr:"75%",g:4}],
"Hell's Heaven":[{p:"Ayden",wr:"62.5%",g:8},{p:"Tristen",wr:"83.33%",g:6},{p:"Gabe",wr:"42.86%",g:7},{p:"Jace",wr:"83.33%",g:6},{p:"T-Money",wr:"75%",g:4},{p:"Sam",wr:"50%",g:8},{p:"Raquel",wr:"66.67%",g:3},{p:"Zach",wr:"33.33%",g:3}],
"Birnin T'Challa":[{p:"Begin",wr:"66.67%",g:3},{p:"Gabe",wr:"25%",g:4},{p:"Tristen",wr:"33.33%",g:3},{p:"T-Money",wr:"50%",g:4},{p:"Sam",wr:"25%",g:4}],
"Celestial Husk":[{p:"Begin",wr:"75%",g:4},{p:"Tristen",wr:"75%",g:4},{p:"T-Money",wr:"80%",g:5},{p:"Gabe",wr:"40%",g:5},{p:"Raquel",wr:"66.67%",g:3}],
"Symbiotic Surface":[{p:"T-Money",wr:"71.43%",g:7},{p:"Gabe",wr:"40%",g:5},{p:"Raquel",wr:"66.67%",g:3}],
"Heart of Heaven":[{p:"Ayden",wr:"60%",g:5},{p:"T-Money",wr:"33.33%",g:6},{p:"Gabe",wr:"50%",g:4},{p:"Sam",wr:"60%",g:5},{p:"Jace",wr:"36.36%",g:11}],
"Shin-Shibuya":[{p:"T-Money",wr:"100%",g:4},{p:"Gabe",wr:"71.43%",g:7},{p:"Tristen",wr:"75%",g:4},{p:"Raquel",wr:"25%",g:4},{p:"Jace",wr:"66.67%",g:6}],
"Hall of Djalia":[{p:"Ayden",wr:"55.56%",g:9},{p:"Gabe",wr:"28.57%",g:7},{p:"Tristen",wr:"33.33%",g:6},{p:"Jace",wr:"33.33%",g:6},{p:"Zach",wr:"25%",g:4},{p:"Sam",wr:"33.33%",g:6}],
"Central Park":[{p:"Ayden",wr:"66.67%",g:9},{p:"Gabe",wr:"50%",g:8},{p:"Tristen",wr:"50%",g:6},{p:"Jace",wr:"75%",g:4},{p:"Sam",wr:"71.43%",g:7}],
};

// ─── UI (35% larger) ───
function Tab({a,onClick,children,color,m:mob}){const ac=color||C.brand;return <button onClick={onClick} style={{background:a?`${ac}33`:"transparent",color:a?ac:C.dim,border:a?`1px solid ${ac}55`:`1px solid ${C.border}`,padding:mob?"7px 0":"14px 22px",borderRadius:mob?"6px":"8px",cursor:"pointer",fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:mob?"10px":"16px",letterSpacing:mob?"0.5px":"1.2px",textTransform:"uppercase",whiteSpace:"nowrap",transition:"all 0.2s ease",textAlign:"center",width:"100%"}}>{children}</button>}
function Bd({color,text}){return <span style={{background:`${color}22`,color,padding:"3px 10px",borderRadius:"5px",fontSize:"12px",fontWeight:700,letterSpacing:"1px",fontFamily:"'Rajdhani'"}}>{text}</span>}
function Gr({g}){const c=g.startsWith("S")?"#ff006e":g.startsWith("A")?C.green:g.startsWith("B")?C.blue:g.startsWith("C")?C.gold:C.accent;return <span style={{background:c,color:"#000",padding:"5px 16px",borderRadius:"8px",fontSize:"20px",fontWeight:900,fontFamily:"'Rajdhani'"}}>{g}</span>}
function Sec({bg,border,title,titleColor,children}){const mob=useMobile();const f=mob?MF:F;return <div style={{background:bg||C.panel,borderRadius:f.rad,border:`1px solid ${border||C.border}`,padding:f.padL,marginBottom:f.gap}}>{title&&<h4 style={{margin:"0 0 14px",fontFamily:"'Rajdhani'",fontWeight:900,color:titleColor||C.text,letterSpacing:"1.2px",fontSize:f.lg}}>{title}</h4>}{children}</div>}

function StatsTab(){const m=useMobile();const f=m?MF:F;const[sel,setSel]=useState(null);return <div style={{display:"grid",gap:F.gap}}>{Object.entries(STATS).map(([n,s])=>{const o=sel===n;return <div key={n} onClick={()=>setSel(o?null:n)} style={{background:o?C.ph:C.panel,borderRadius:F.rad,border:`1px solid ${o?C.gold:C.border}`,padding:F.pad,cursor:"pointer"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><div style={{fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.xl,color:C.text}}>{n} <span style={{fontSize:F.sm,color:C.dim,fontWeight:500}}>({s.ign})</span></div>
<div style={{display:"flex",gap:"8px",marginTop:"6px",flexWrap:"wrap"}}><Bd color={C.purple} text={s.rank+" ("+s.rs+" RS)"}/><Bd color={parseFloat(s.wr)>=55?C.green:parseFloat(s.wr)>=45?C.gold:C.accent} text={s.wr+" "+s.rec}/><Bd color={parseFloat(s.r20)>=50?C.green:parseFloat(s.r20)>=35?C.gold:C.accent} text={"L20: "+s.r20}/></div></div><span style={{color:C.muted,fontSize:F.lg}}>{o?"▲":"▼"}</span></div>
{o&&<div style={{marginTop:"18px",display:"grid",gap:F.gap}}>
<div style={{overflowX:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",fontSize:m?MF.xs:F.sm,minWidth:m?"500px":"auto"}}><thead><tr style={{borderBottom:`1px solid ${C.border}`}}>{["Hero","WR","Games","KDA","K/D/A"].map(h=><th key={h} style={{textAlign:"left",padding:"8px",color:C.dim,fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",letterSpacing:"1px"}}>{h}</th>)}</tr></thead>
<tbody>{s.heroes.map((h,i)=>{const w=parseFloat(h.w),wc=w>=60?C.green:w>=45?C.gold:C.accent;return <tr key={i} style={{borderBottom:`1px solid ${C.border}22`}}><td style={{padding:"8px",color:C.text,fontWeight:600}}>{h.h}</td><td style={{padding:"8px",color:wc,fontWeight:700}}>{h.w}</td><td style={{padding:"8px",color:C.dim}}>{h.g}</td><td style={{padding:"8px",color:C.blue,fontWeight:600}}>{h.k}</td><td style={{padding:"8px",color:C.dim}}>{h.l}</td></tr>})}</tbody></table></div>
{s.extra&&<div style={{background:`${C.purple}11`,borderRadius:"8px",padding:"14px",border:`1px solid ${C.purple}33`}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"13px",color:C.purple,letterSpacing:"1px",marginBottom:"6px"}}>ADDITIONAL DATA</div><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{s.extra}</div></div>}
<div style={{background:`${C.gold}11`,borderRadius:"8px",padding:"14px",border:`1px solid ${C.gold}33`}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"13px",color:C.gold,letterSpacing:"1px",marginBottom:"6px"}}>ANALYSIS</div><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{s.note}</div></div>
<a href={s.url} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} style={{color:C.blue,fontSize:F.xs,textDecoration:"none"}}>View on RivalsMeta →</a></div>}</div>})}
<Sec border={`${C.purple}44`} title="TEAM SYNERGY — DUO WIN RATES" titleColor={C.purple}>
<p style={{color:C.dim,fontSize:F.xs,lineHeight:1.6,margin:"0 0 12px"}}>Win rates when two players queue together (S7 all modes). Begin main account synergy is deflated by GM3 matchmaking penalty — teammates get pulled into harder lobbies. Tournament lobbies against Celestial/Eternity players will not be easier.</p>
<div style={{display:"grid",gridTemplateColumns:m?"1fr":"1fr 1fr",gap:"6px"}}>
{SYNERGY.map((s,i)=>{const wr=parseFloat(s.wr);const c=s.v==="ELITE"?"#ff006e":s.v==="STRONG"?C.green:s.v==="GOOD"?C.blue:s.v==="NEUTRAL"?C.gold:s.v==="WEAK"?C.accent:C.accent;
return <div key={i} style={{background:C.sec,borderRadius:"8px",padding:"8px 12px",borderLeft:`3px solid ${c}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div style={{display:"flex",gap:"6px",alignItems:"center"}}><span style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:m?MF.xs:F.xs,color:C.text}}>{s.p1}</span><span style={{color:C.muted,fontSize:"10px"}}>+</span><span style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:m?MF.xs:F.xs,color:C.text}}>{s.p2}</span></div>
<div style={{display:"flex",gap:"8px",alignItems:"center"}}><span style={{color:c,fontWeight:700,fontSize:m?MF.xs:F.xs}}>{s.wr}</span><span style={{color:C.muted,fontSize:"10px"}}>{s.g}g</span></div>
</div>})}
</div></Sec></div>}

function TourneyTab(){const m=useMobile();const f=m?MF:F;const[ex,setEx]=useState(null);return <div style={{display:"grid",gap:"18px"}}>
<Sec border={`${C.accent}44`} title={"TOURNAMENT: "+TSUMMARY.rec} titleColor={C.accent}><div style={{fontSize:F.sm,marginBottom:"12px"}}><span style={{color:C.green,fontWeight:700}}>Only Win:</span> <span style={{color:C.dim}}>{TSUMMARY.win}</span></div>
{TSUMMARY.players.map((p,i)=><div key={i} style={{color:C.dim,fontSize:F.xs,marginBottom:"6px",lineHeight:1.5}}><strong style={{color:C.text}}>{p.n}:</strong> {p.r} — {p.d}</div>)}</Sec>
<Sec border={`${C.gold}44`} title="KEY ISSUES" titleColor={C.gold}>{TSUMMARY.issues.map((s,i)=><div key={i} style={{background:C.sec,borderRadius:"8px",padding:"10px 14px",marginBottom:"8px",display:"flex",gap:"10px"}}><span style={{color:C.gold,fontWeight:700,fontSize:F.sm}}>▸</span><span style={{color:C.dim,fontSize:F.xs,lineHeight:"22px"}}>{s}</span></div>)}</Sec>
<h4 style={{margin:0,fontFamily:"'Rajdhani'",fontWeight:900,color:C.text,fontSize:F.lg}}>MATCH-BY-MATCH</h4>
{TM.map((mt,i)=>{const o=ex===i,rc=mt.res==="WIN"?C.green:C.accent;return <div key={i} onClick={()=>setEx(o?null:i)} style={{background:C.panel,borderRadius:"10px",border:`1px solid ${o?rc:C.border}`,cursor:"pointer",overflow:"hidden"}}>
<div style={{padding:"14px 18px",display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{display:"flex",alignItems:"center",gap:"12px"}}><span style={{background:rc,color:"#000",padding:"3px 12px",borderRadius:"5px",fontSize:"12px",fontWeight:900,fontFamily:"'Rajdhani'"}}>{mt.res}</span><span style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:F.lg,color:C.text}}>{mt.map}</span><span style={{color:C.dim,fontSize:F.sm}}>{mt.sc}</span></div><span style={{color:C.muted}}>{o?"▲":"▼"}</span></div>
{o&&<div style={{padding:"0 18px 18px"}}><div style={{display:"grid",gap:"6px",marginBottom:"14px"}}>{mt.p.map((p,j)=>{const kr=parseFloat(p.r)||0,kc=p.r==="∞"?"#ff006e":kr>=3?C.green:kr>=1.5?C.gold:C.accent;return <div key={j} style={{background:C.sec,borderRadius:"6px",padding:"10px",display:"grid",gridTemplateColumns:m?"1fr 1fr":"90px 110px 90px 1fr",gap:"8px",alignItems:"center",fontSize:F.xs}}>
<span style={{fontFamily:"'Rajdhani'",fontWeight:700,color:C.text}}>{p.n}</span><span style={{color:C.blue,fontWeight:600}}>{p.h}</span><span style={{color:C.dim}}>{p.k}</span>
<div style={{display:"flex",gap:"6px",alignItems:"center"}}><span style={{color:kc,fontWeight:700}}>{p.r==="∞"?"PERFECT":p.r+" KDA"}</span>{p.b&&<Bd color={p.b==="MVP"?"#ff006e":C.gold} text={p.b}/>}</div></div>})}</div>
<div style={{background:`${rc}11`,borderRadius:"8px",padding:"12px",border:`1px solid ${rc}33`}}><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{mt.a}</div></div></div>}</div>})}
</div>}

function CompsTab(){const m=useMobile();const f=m?MF:F;const[idx,setIdx]=useState(0);const comp=COMPS[idx];
return <div>
<div style={{display:"flex",gap:"2px",flexWrap:"wrap",marginBottom:"12px",alignItems:"center"}}>
{COMPS.map((c,i)=>{const active=idx===i;const groupStart=i===1||i===5;return <div key={i} style={{display:"flex",alignItems:"center"}}>
{groupStart&&<span style={{display:"inline-block",width:"2px",height:"20px",background:C.muted,margin:"0 6px"}}/>}
<button onClick={()=>setIdx(i)} style={{background:active?`${c.color}33`:"transparent",color:active?c.color:C.dim,border:"1px solid "+(active?c.color+"55":C.border),padding:m?"5px 8px":"6px 12px",borderRadius:"6px",cursor:"pointer",fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:m?"9px":"12px",letterSpacing:"0.8px",textTransform:"uppercase",whiteSpace:"nowrap"}}>{c.name}</button>
</div>})}</div>
<div style={{background:C.panel,borderRadius:F.rad,border:`1px solid ${C.border}`,overflow:"hidden"}}>
<div style={{padding:F.padL,borderBottom:`1px solid ${C.border}`}}><h3 style={{margin:"0 0 8px",fontSize:F.xxl,fontFamily:"'Rajdhani'",fontWeight:900,color:comp.color,letterSpacing:"2px"}}>{comp.name} <span style={{fontSize:F.md,color:C.dim,fontWeight:600}}>{comp.tag}</span></h3>
<p style={{margin:0,color:C.dim,fontSize:F.sm,lineHeight:1.7}}>{comp.desc}</p></div>
<div style={{padding:F.padL}}>
{comp.lineup.length>0&&<div style={{display:"grid",gridTemplateColumns:m?"1fr":"1fr 1fr",gap:"6px"}}>{comp.lineup.filter(s=>s.r!=="note").map((s,i)=>{const rc=s.r==="tank"?C.tank:s.r==="dps"?C.dps:C.heal;return <div key={i} style={{background:C.sec,borderRadius:"8px",padding:"10px 12px",borderLeft:`3px solid ${rc}`,display:"flex",gap:"10px",alignItems:"center"}}>
<div style={{minWidth:m?"60px":"80px"}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:m?MF.sm:F.sm,color:C.text}}>{s.p}</div><div style={{fontFamily:"'Rajdhani'",fontWeight:600,fontSize:m?"11px":"13px",color:rc}}>{s.h}</div></div>
<div style={{color:C.muted,fontSize:m?"10px":"12px",lineHeight:1.4,flex:1}}>{s.n}</div></div>})}</div>}
{comp.tu&&comp.tu.length>0&&<div style={{marginTop:"14px",padding:"14px",background:`${comp.color}11`,borderRadius:"10px",border:`1px solid ${comp.color}33`}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",color:comp.color,letterSpacing:"1px",marginBottom:"6px"}}>TEAM-UPS</div>
{comp.tu.map((t,i)=><div key={i} style={{color:C.dim,fontSize:F.xs}}>• {t}</div>)}</div>}
{comp.maps&&<div style={{marginTop:"8px",padding:"14px",background:`${C.blue}11`,borderRadius:"10px",border:`1px solid ${C.blue}33`}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",color:C.blue,letterSpacing:"1px",marginBottom:"6px"}}>BEST MAPS</div>
<div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{comp.maps}</div></div>}
{comp.convoy&&<div style={{marginTop:"8px",padding:"14px",background:`${C.purple}11`,borderRadius:"10px",border:`1px solid ${C.purple}33`}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",color:C.purple,letterSpacing:"1px",marginBottom:"6px"}}>CONVOY OFFENSE / DEFENSE</div>
<div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{comp.convoy}</div></div>}
{comp.alt&&<div style={{marginTop:"8px",padding:"14px",background:`${C.gold}11`,borderRadius:"10px",border:`1px solid ${C.gold}33`}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",color:C.gold,letterSpacing:"1px",marginBottom:"6px"}}>IF BANNED / ALTERNATE</div>
<div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{comp.alt}</div></div>}
{comp.bs&&<div style={{marginTop:"12px",display:"grid",gridTemplateColumns:m?"1fr":"1fr 1fr",gap:"10px"}}>
<div style={{background:`${C.accent}11`,borderRadius:"10px",padding:"14px",border:`1px solid ${C.accent}33`}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",color:C.accent,letterSpacing:"1px",marginBottom:"8px"}}>PRIORITY BANS</div>
{comp.bs.b.map((b,i)=><div key={i} style={{background:C.sec,borderRadius:"6px",padding:"10px",marginBottom:"6px"}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:F.sm,color:C.text}}>{i+1}. {b.h}</div><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.4}}>{b.w}</div></div>)}</div>
<div style={{background:`${C.green}11`,borderRadius:"10px",padding:"14px",border:`1px solid ${C.green}33`}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",color:C.green,letterSpacing:"1px",marginBottom:"8px"}}>PRIORITY SAVES</div>
{comp.bs.s.map((s,i)=><div key={i} style={{background:C.sec,borderRadius:"6px",padding:"10px",marginBottom:"6px"}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:F.sm,color:C.text}}>{i+1}. {s.h}</div><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.4}}>{s.w}</div></div>)}</div>
</div>}
</div></div></div>}

function MapsTab(){const m=useMobile();const f=m?MF:F;const[sel,setSel]=useState(null);const modes=["Convoy","Domination","Convergence"];return <div style={{display:"grid",gap:"20px"}}>
{modes.map(mode=><div key={mode}><h4 style={{margin:"0 0 12px",fontFamily:"'Rajdhani'",fontWeight:900,color:C.purple,letterSpacing:"1.5px",fontSize:F.lg}}>{mode.toUpperCase()}</h4>
<div style={{display:"grid",gap:"10px"}}>{MAPS.filter(mp=>mp.mode===mode).map((mp,i)=>{const o=sel===mp.name;return <div key={i} onClick={()=>setSel(o?null:mp.name)} style={{background:o?C.ph:C.panel,borderRadius:"10px",border:`1px solid ${o?C.blue:C.border}`,padding:"16px",cursor:"pointer"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><span style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:F.lg,color:C.text}}>{mp.name}</span><span style={{color:C.dim,fontSize:F.xs,marginLeft:"10px"}}>{mp.aka}</span></div>
<div style={{display:"flex",gap:"6px",alignItems:"center"}}><Bd color={C.blue} text={mp.best}/><span style={{color:C.muted}}>{o?"▲":"▼"}</span></div></div>
{o&&<div style={{marginTop:"14px",display:"grid",gap:"10px"}}>
<div style={{display:"grid",gridTemplateColumns:m?"1fr":"1fr 1fr 1fr",gap:"10px"}}>
{[{l:"TOP BANS",c:C.accent,t:mp.bans},{l:"TOP PICKS",c:C.green,t:mp.picks},{l:"BEST ARCHETYPE",c:C.blue,t:mp.best}].map((x,j)=><div key={j} style={{background:C.sec,borderRadius:"8px",padding:"12px"}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"11px",color:x.c,letterSpacing:"1px",marginBottom:"4px"}}>{x.l}</div><div style={{color:C.dim,fontSize:F.xs}}>{x.t}</div></div>)}</div>
{MAP_PLAYERS[mp.name]&&<div style={{background:`${C.brand}11`,borderRadius:"8px",padding:"14px",border:`1px solid ${C.brand}33`}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"11px",color:C.brand,letterSpacing:"1px",marginBottom:"8px"}}>PLAYER PERFORMANCE ON THIS MAP</div>
<div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>{MAP_PLAYERS[mp.name].sort((a,b)=>parseFloat(b.wr)-parseFloat(a.wr)).map((pl,k)=>{const wr=parseFloat(pl.wr);const c=wr>=70?C.green:wr>=50?C.gold:C.accent;return <div key={k} style={{background:C.sec,borderRadius:"6px",padding:"6px 10px",border:`1px solid ${c}33`,display:"flex",gap:"6px",alignItems:"center"}}>
<span style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"13px",color:C.text}}>{pl.p}</span>
<span style={{color:c,fontWeight:700,fontSize:"12px"}}>{pl.wr}</span>
<span style={{color:C.muted,fontSize:"10px"}}>{pl.g}g</span></div>})}</div></div>}
<div style={{background:`${C.gold}11`,borderRadius:"8px",padding:"14px",border:`1px solid ${C.gold}33`}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"11px",color:C.gold,letterSpacing:"1px",marginBottom:"6px"}}>MAP ANALYSIS</div><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{mp.why}</div></div>
<div style={{background:`${C.purple}11`,borderRadius:"8px",padding:"14px",border:`1px solid ${C.purple}33`}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"11px",color:C.purple,letterSpacing:"1px",marginBottom:"6px"}}>POSITIONING & HERO TIPS</div><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{mp.tips}</div></div>
<div style={{background:`${C.green}11`,borderRadius:"8px",padding:"14px",border:`1px solid ${C.green}33`}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"11px",color:C.green,letterSpacing:"1px",marginBottom:"6px"}}>OUR COMP</div><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{mp.ourComp}</div></div>
</div>}</div>})}</div></div>)}</div>}

function FeedbackTab(){const m=useMobile();const f=m?MF:F;const[ex,setEx]=useState(null);return <div style={{display:"grid",gap:"12px"}}>{FB.map((p,i)=>{const o=ex===i;return <div key={i} onClick={()=>setEx(o?null:i)} style={{background:C.panel,borderRadius:F.rad,border:`1px solid ${o?C.accent:C.border}`,cursor:"pointer",overflow:"hidden"}}>
<div style={{padding:"16px 20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{display:"flex",alignItems:"center",gap:"12px"}}><span style={{fontSize:"26px"}}>{p.i}</span><div><div style={{fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.xl,color:C.text}}>{p.n}</div><div style={{fontSize:F.xs,color:C.dim}}>{p.v}</div></div></div><Gr g={p.g}/></div>
{o&&<div style={{padding:"0 20px 20px",display:"grid",gap:"10px"}}>
{[{l:"STRENGTHS (DATA-BACKED)",c:C.green,t:p.s},{l:"WEAKNESSES (DATA-BACKED)",c:C.accent,t:p.w},{l:"THE ONE ABOVE ALL DECREES",c:C.gold,t:p.r}].map((s,j)=><div key={j} style={{background:`${s.c}11`,borderRadius:"10px",padding:"16px",border:`1px solid ${s.c}33`}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",color:s.c,letterSpacing:"1px",marginBottom:"6px"}}>{s.l}</div>
<div style={{color:C.dim,fontSize:F.sm,lineHeight:1.7}}>{s.t}</div></div>)}</div>}</div>})}</div>}

function LearnTab(){const m=useMobile();const f=m?MF:F;return <div style={{display:"grid",gap:"12px"}}>
<div style={{background:`${C.accent}11`,borderRadius:F.rad,border:`1px solid ${C.accent}33`,padding:F.pad}}><p style={{margin:0,color:C.dim,fontSize:F.sm,lineHeight:1.7}}><strong style={{color:C.accent}}>CRITICAL ROSTER GAPS:</strong> Raquel's 3-hero pool is vulnerability #1. No hitscan sniper. Only 1 dive tank player. Iron Man is NOT a tournament pick (0W 4L). T-Money is secretly a better tank than DPS. Emma and Cap are C-tier — deprioritize.</p></div>
{LEARNS.map((r,i)=><div key={i} style={{background:C.panel,borderRadius:F.rad,border:`1px solid ${C.border}`,padding:F.pad}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"}}><h4 style={{margin:0,fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.lg,color:C.text}}>{r.h}</h4><Bd color={r.p==="CRITICAL"?C.accent:r.p==="HIGH"?C.gold:r.p==="MEDIUM"?C.blue:C.muted} text={r.p}/></div>
<p style={{margin:"0 0 8px",color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{r.r}</p>
<div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>{r.w.map(p=><span key={p} style={{background:`${C.blue}22`,color:C.blue,padding:"3px 10px",borderRadius:"5px",fontSize:"12px",fontWeight:700}}>{p}</span>)}</div></div>)}</div>}

function InfoTab(){const m=useMobile();const f=m?MF:F;return <div style={{display:"grid",gap:"16px"}}>
<Sec title="MRC SEASON 7" titleColor={C.gold}>{RULES.map((t,i)=><div key={i} style={{display:"grid",gridTemplateColumns:m?"1fr":"120px 1fr",gap:"12px",padding:"8px 0",borderBottom:i<RULES.length-1?`1px solid ${C.border}`:"none"}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:F.xs,color:C.gold,letterSpacing:"1px"}}>{t.l}</div><div style={{color:C.dim,fontSize:F.sm}}>{t.v}</div></div>)}</Sec>
<Sec border={`${C.gold}44`} title="BAN-SAVE PROCEDURE" titleColor={C.gold}>
<p style={{color:C.dim,fontSize:F.xs,lineHeight:1.7,margin:"0 0 14px"}}>The draft alternates between bans (removing heroes from the match) and saves (protecting heroes from being banned). Each team gets 3 bans and 2 saves. Phases are 15 seconds each. In BO3+, the winner of the previous game bans first in the next game. The visual below shows the full 10-phase sequence — red = ban, green = save.</p>
<div style={{display:"grid",gridTemplateColumns:m?"repeat(5,1fr)":"repeat(5,1fr)",gap:m?"3px":"6px"}}>{[{s:1,a:"A BAN",c:C.accent},{s:2,a:"B BAN",c:C.blue},{s:3,a:"B SAVE",c:C.green},{s:4,a:"A SAVE",c:C.green},{s:5,a:"A BAN",c:C.accent},{s:6,a:"B BAN",c:C.blue},{s:7,a:"B SAVE",c:C.green},{s:8,a:"A SAVE",c:C.green},{s:9,a:"A BAN",c:C.accent},{s:10,a:"B BAN",c:C.blue}].map(x=><div key={x.s} style={{background:`${x.c}22`,border:`1px solid ${x.c}44`,borderRadius:"8px",padding:"10px",textAlign:"center"}}><div style={{fontSize:"10px",color:C.muted,fontFamily:"'Rajdhani'"}}>{x.s}</div><div style={{fontSize:F.xs,color:x.c,fontWeight:700,fontFamily:"'Rajdhani'"}}>{x.a}</div></div>)}</div>
</Sec></div>}

// ─── DRAFT SIMULATOR ───
function DraftTab(){const m=useMobile();const f=m?MF:F;
const PHASES=[
{step:1,team:"A",action:"BAN"},{step:2,team:"B",action:"BAN"},
{step:3,team:"B",action:"SAVE"},{step:4,team:"A",action:"SAVE"},
{step:5,team:"A",action:"BAN"},{step:6,team:"B",action:"BAN"},
{step:7,team:"B",action:"SAVE"},{step:8,team:"A",action:"SAVE"},
{step:9,team:"A",action:"BAN"},{step:10,team:"B",action:"BAN"},
];
const allPlayers=Object.keys(OUR_HEROES).sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()));
const[roster,setRoster]=useState([]);
const[ourSide,setOurSide]=useState(null);
const[selectedMap,setSelectedMap]=useState(null);
const[phase,setPhase]=useState(0);
const[actions,setActions]=useState([]);
const[filter,setFilter]=useState("all");
const[search,setSearch]=useState("");
const step=roster.length<6?"roster":!ourSide?"side":!selectedMap?"map":phase<PHASES.length?"draft":"done";
const cur=step==="draft"?PHASES[phase]:null;
const bans=actions.filter(a=>a.action==="BAN");
const locks=actions.filter(a=>a.action==="SAVE");
const bannedSet=new Set(bans.map(b=>b.hero));
const used=new Set(actions.map(a=>a.hero));
// Roster heroes for selected 6 players only
const activeHeroes={};roster.forEach(p=>{if(OUR_HEROES[p])activeHeroes[p]=OUR_HEROES[p];});
const allActiveHeroes=[...new Set(Object.values(activeHeroes).flat())];
function pick(hero){if(step!=="draft")return;const entry={hero,team:cur.team,action:cur.action,step:cur.step};setActions(p=>[...p,entry]);setPhase(p=>p+1);}
function undo(){if(actions.length===0)return;setActions(p=>p.slice(0,-1));setPhase(p=>p-1);}
function reset(){setPhase(0);setActions([]);setSearch("");setOurSide(null);setSelectedMap(null);setRoster([]);}
function togglePlayer(p){setRoster(r=>r.includes(p)?r.filter(x=>x!==p):r.length<6?[...r,p]:r);}
const available=ALL_HEROES.filter(h=>!used.has(h.h)).filter(h=>filter==="all"||h.r===filter).filter(h=>!search||h.h.toLowerCase().includes(search.toLowerCase()));
// Map-aware smart recommendations
const mapData=selectedMap?MAPS.find(mp=>mp.name===selectedMap):null;
const mapBanList=mapData?mapData.bans.split(", ").map(s=>s.trim()):[];
const mapPickList=mapData?mapData.picks.split(", ").map(s=>s.trim()):[];
const isOurTurn=cur&&cur.team===ourSide;
const rosterHeroPool=new Set(allActiveHeroes);
const recHeroes=(()=>{if(!isOurTurn)return[];
if(cur.action==="BAN"){
// BAN priority: Elsa always → Deadpool(V) always → map-specific bans → high-tier non-roster heroes
const banRecs=[];const seen=new Set();
const tryAdd=(name,reason)=>{if(!used.has(name)&&!seen.has(name)){const hero=ALL_HEROES.find(a=>a.h===name);if(hero){seen.add(name);banRecs.push({h:name,t:hero.t,r:hero.r,reason});}}};
tryAdd("Elsa Bloodstone","ALWAYS BAN — S+ game-warping DPS");
tryAdd("Deadpool (V)","ALWAYS BAN — S+ most flexible tank");
mapBanList.forEach(h=>tryAdd(h,"Strong on "+mapData.name));
ALL_HEROES.filter(h=>!used.has(h.h)&&!seen.has(h.h)&&(h.t==="S+"||h.t==="S")&&!rosterHeroPool.has(h.h)).sort((a,b)=>{const ord={"S+":0,"S":1};return(ord[a.t]||5)-(ord[b.t]||5);}).forEach(h=>tryAdd(h.h,"S/S+ meta threat"));
return banRecs.slice(0,8);
}else{
// SAVE priority: map picks our roster plays → roster's highest-tier heroes
const saveRecs=[];const seen=new Set();
const tryAdd=(name,reason)=>{if(!used.has(name)&&!seen.has(name)&&rosterHeroPool.has(name)){const hero=ALL_HEROES.find(a=>a.h===name);if(hero){seen.add(name);saveRecs.push({h:name,t:hero.t,r:hero.r,reason});}}};
mapPickList.forEach(h=>tryAdd(h,"Strong on "+mapData.name));
allActiveHeroes.filter(h=>!used.has(h)&&!seen.has(h)).map(h=>{const hero=ALL_HEROES.find(a=>a.h===h);return hero?{h,t:hero.t,r:hero.r}:null;}).filter(Boolean).sort((a,b)=>{const ord={"S+":0,"S":1,"A":2,"B":3,"C":4};return(ord[a.t]||5)-(ord[b.t]||5);}).forEach(h=>tryAdd(h.h,"Roster S/A tier"));
return saveRecs.slice(0,6);
}})();
// Comp survival with replacement suggestions
const compAnalysis=COMPS.map(comp=>{
const compPlayers=comp.lineup.filter(l=>l.r!=="note");
const inRoster=compPlayers.every(l=>roster.includes(l.p));
const bannedInComp=compPlayers.filter(l=>bannedSet.has(l.h));
const alive=bannedInComp.length===0&&inRoster;
const missingPlayers=compPlayers.filter(l=>!roster.includes(l.p));
const playerSubs=missingPlayers.map(mp=>{const subs=[];Object.entries(activeHeroes).forEach(([player,heroes])=>{if(!compPlayers.some(l=>l.p===player)||!roster.includes(player)){
if(heroes.includes(mp.h))subs.push({player,hero:mp.h,exact:true,tier:""});
else{heroes.forEach(h=>{const hd=ALL_HEROES.find(a=>a.h===h);if(hd&&hd.r===mp.r&&!bannedSet.has(h)&&!used.has(h))subs.push({player,hero:h,exact:false,tier:hd.t});});}}});
subs.sort((a,b)=>a.exact?-1:b.exact?1:0);return {missing:mp.p,hero:mp.h,subs:subs.slice(0,3)};});
const replacements=bannedInComp.map(banned=>{
const alts=[];Object.entries(activeHeroes).forEach(([player,heroes])=>{
heroes.forEach(h=>{if(!bannedSet.has(h)&&!used.has(h)){const hd=ALL_HEROES.find(a=>a.h===h);
if(hd&&hd.r===banned.r)alts.push({player,hero:h,tier:hd.t});}});});
alts.sort((a,b)=>{const ord={"S+":0,"S":1,"A":2,"B":3,"C":4};return(ord[a.tier]||5)-(ord[b.tier]||5);});
return {banned:banned.h,player:banned.p,alts:alts.slice(0,3)};});
return {name:comp.name,color:comp.color,tag:comp.tag,alive,inRoster,bannedInComp,replacements,missingPlayers,playerSubs};});
// === RENDER ===
if(step==="roster")return <div style={{display:"grid",gap:"16px"}}>
<Sec border={`${C.gold}44`} title="DRAFT SIMULATOR" titleColor={C.gold}>
<p style={{color:C.dim,fontSize:F.sm,lineHeight:1.7,margin:0}}>Step 1: Select the 6 players competing in this match.</p></Sec>
<div style={{display:"grid",gridTemplateColumns:m?"repeat(3,1fr)":"repeat(9,1fr)",gap:m?"6px":"8px"}}>
{allPlayers.map(p=>{const picked=roster.includes(p);const fb=FB.find(f=>f.n===p);
return <div key={p} onClick={()=>togglePlayer(p)} style={{background:picked?`${C.green}22`:C.panel,border:`2px solid ${picked?C.green:C.border}`,borderRadius:"10px",padding:m?"8px":"10px",cursor:"pointer",textAlign:"center"}}>
<div style={{fontSize:m?"18px":"20px"}}>{fb?fb.i:"👤"}</div>
<div style={{fontFamily:"'Rajdhani'",fontWeight:900,fontSize:m?MF.sm:F.sm,color:picked?C.green:C.text}}>{p}</div>
{picked&&<div style={{color:C.green,fontSize:"10px",fontWeight:700}}>✓</div>}
</div>})}</div>
<div style={{textAlign:"center",color:C.dim,fontSize:F.sm}}>{roster.length}/6 players selected</div>
{roster.length===6&&<div style={{textAlign:"center"}}><button onClick={()=>setOurSide("pending")} style={{background:C.green,color:"#000",border:"none",borderRadius:"8px",padding:"12px 30px",cursor:"pointer",fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.md,letterSpacing:"1px"}}>CONFIRM ROSTER →</button></div>}
</div>;
if(step==="side")return <div style={{display:"grid",gap:"16px"}}>
<Sec border={`${C.gold}44`} title="DRAFT SIMULATOR" titleColor={C.gold}>
<p style={{color:C.dim,fontSize:F.sm,lineHeight:1.7,margin:0}}>Step 2: Is StubbedToes Team A (first ban) or Team B (second ban)?</p></Sec>
<div style={{display:"grid",gridTemplateColumns:m?"1fr":"1fr 1fr",gap:"14px"}}>
{[{side:"A",label:"TEAM A",sub:"First Ban → Second Lock → First Ban → Second Lock → First Ban",c:C.accent},{side:"B",label:"TEAM B",sub:"Second Ban → First Lock → Second Ban → First Lock → Second Ban",c:C.blue}].map(s=>
<div key={s.side} onClick={()=>setOurSide(s.side)} style={{background:C.panel,border:`2px solid ${s.c}44`,borderRadius:F.rad,padding:F.padL,cursor:"pointer",textAlign:"center"}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.xxl,color:s.c,letterSpacing:"3px"}}>{s.label}</div>
<div style={{color:C.dim,fontSize:F.xs,marginTop:"8px",lineHeight:1.5}}>{s.sub}</div>
</div>)}</div>
<div style={{textAlign:"center"}}><button onClick={reset} style={{background:"transparent",border:`1px solid ${C.border}`,borderRadius:"6px",padding:"8px 18px",cursor:"pointer",color:C.dim,fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px"}}>← CHANGE ROSTER</button></div>
</div>;
// MAP SELECTION
if(step==="map") {const modes=["Convoy","Domination","Convergence"];
return <div style={{display:"grid",gap:"16px"}}>
<Sec border={`${C.gold}44`} title="DRAFT SIMULATOR" titleColor={C.gold}>
<p style={{color:C.dim,fontSize:F.sm,lineHeight:1.7,margin:0}}>Step 3: Select the map for this match. Ban and save recommendations will adapt to the map's meta.</p></Sec>
{modes.map(mode=><div key={mode}>
<h4 style={{margin:"0 0 8px",fontFamily:"'Rajdhani'",fontWeight:900,color:C.purple,letterSpacing:"1.5px",fontSize:F.lg}}>{mode.toUpperCase()}</h4>
<div style={{display:"grid",gridTemplateColumns:m?"1fr 1fr":"repeat(auto-fill,minmax(200px,1fr))",gap:"6px",marginBottom:"14px"}}>
{MAPS.filter(mp=>mp.mode===mode).map((mp,i)=><div key={i} onClick={()=>setSelectedMap(mp.name)} style={{background:C.panel,border:`2px solid ${C.border}`,borderRadius:"10px",padding:"12px",cursor:"pointer"}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:F.md,color:C.text}}>{mp.name}</div>
<div style={{display:"flex",gap:"6px",marginTop:"4px",alignItems:"center"}}><Bd color={C.blue} text={mp.best}/></div>
<div style={{color:C.muted,fontSize:"11px",marginTop:"4px"}}>{mp.aka}</div>
</div>)}
</div></div>)}
<div style={{textAlign:"center"}}><button onClick={()=>setOurSide(null)} style={{background:"transparent",border:`1px solid ${C.border}`,borderRadius:"6px",padding:"8px 18px",cursor:"pointer",color:C.dim,fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px"}}>← CHANGE SIDE</button></div>
</div>}
// DRAFT + DONE states
const enemySide=ourSide==="A"?"B":"A";
return <div style={{display:"grid",gap:"16px"}}>
<Sec border={`${C.gold}44`} title={"DRAFT — STUBBEDTOES IS TEAM "+ourSide} titleColor={C.gold}>
<p style={{color:C.dim,fontSize:F.sm,lineHeight:1.7,margin:0}}>Active roster: {roster.join(", ")}. Map: <span style={{color:C.blue,fontWeight:700}}>{selectedMap}</span>{mapData?" ("+mapData.best+")":""}. {step==="done"?"Draft complete.":"Select heroes to ban or save."}</p></Sec>
<div style={{display:"grid",gridTemplateColumns:m?"repeat(5,1fr)":"repeat(5,1fr)",gap:m?"3px":"6px"}}>
{PHASES.map((p,i)=>{const isCur=i===phase&&step==="draft";const isDone=i<phase;const entry=actions.find(x=>x.step===p.step);const ac=p.action==="BAN"?C.accent:C.green;const isOurs=p.team===ourSide;
return <div key={i} style={{background:isCur?`${ac}44`:isDone?`${ac}22`:`${C.border}44`,border:`2px solid ${isCur?ac:isDone?`${ac}66`:C.border}`,borderRadius:"10px",padding:"10px",textAlign:"center"}}>
<div style={{fontSize:"10px",color:isOurs?C.gold:C.muted,fontFamily:"'Rajdhani'",fontWeight:isOurs?900:400}}>{isOurs?"US":"THEM"}</div>
<div style={{fontSize:F.xs,color:ac,fontWeight:700,fontFamily:"'Rajdhani'"}}>{p.action}</div>
{entry&&<div style={{fontSize:"11px",color:C.text,fontWeight:600,marginTop:"4px",fontFamily:"'Rajdhani'"}}>{entry.hero}</div>}
{isCur&&!entry&&<div style={{fontSize:"10px",color:C.gold,marginTop:"4px",fontFamily:"'Rajdhani'"}}>← SELECT</div>}
</div>})}
</div>
{step==="draft"&&<div style={{background:`${cur.action==="BAN"?C.accent:C.green}11`,border:`1px solid ${cur.action==="BAN"?C.accent:C.green}44`,borderRadius:"10px",padding:"16px",textAlign:"center"}}>
<span style={{fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.xl,color:cur.team===ourSide?C.gold:C.dim,letterSpacing:"2px"}}>{cur.team===ourSide?"YOUR TURN":"OPPONENT'S TURN"} — {cur.action} A HERO</span>
</div>}
{step==="done"&&<div style={{background:`${C.gold}11`,border:`1px solid ${C.gold}44`,borderRadius:"10px",padding:"16px",textAlign:"center"}}><span style={{fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.xl,color:C.gold,letterSpacing:"2px"}}>DRAFT COMPLETE</span></div>}
{/* Recommendations for our turn */}
{isOurTurn&&recHeroes.length>0&&<div style={{background:`${C.gold}11`,border:`1px solid ${C.gold}44`,borderRadius:"10px",padding:"14px"}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",color:C.gold,letterSpacing:"1px",marginBottom:"8px"}}>{cur.action==="BAN"?"RECOMMENDED BANS — "+selectedMap+" meta + global threats":"RECOMMENDED SAVES — protect your roster's best for "+selectedMap}</div>
<div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>{recHeroes.map(r=>{const tc=r.t==="S+"?"#ff006e":r.t==="S"?C.green:r.t==="A"?C.blue:C.gold;
return <div key={r.h} onClick={()=>pick(r.h)} style={{background:C.sec,border:`1px solid ${tc}44`,borderRadius:"8px",padding:"8px 12px",cursor:"pointer",display:"flex",flexDirection:"column",gap:"2px"}}>
<div style={{display:"flex",gap:"6px",alignItems:"center"}}><span style={{color:C.text,fontSize:F.xs,fontWeight:600}}>{r.h}</span><span style={{color:tc,fontSize:"10px",fontWeight:900}}>{r.t}</span></div>
{r.reason&&<div style={{color:C.muted,fontSize:"9px",lineHeight:1.2}}>{r.reason}</div>}
</div>})}</div></div>}
{/* Filters, Search, Undo, Reset */}
<div style={{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}}>
<input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search heroes..." style={{background:C.sec,border:`1px solid ${C.border}`,borderRadius:"8px",padding:"10px 14px",color:C.text,fontFamily:"'Rajdhani'",fontSize:F.sm,flex:"1",minWidth:"140px",outline:"none"}}/>
{[{id:"all",l:"All"},{id:"tank",l:"Vanguard"},{id:"dps",l:"Duelist"},{id:"heal",l:"Strategist"}].map(f=>
<button key={f.id} onClick={()=>setFilter(f.id)} style={{background:filter===f.id?(f.id==="tank"?C.tank:f.id==="dps"?C.dps:f.id==="heal"?C.heal:C.purple):"transparent",color:filter===f.id?"#fff":C.dim,border:`1px solid ${C.border}`,borderRadius:"6px",padding:"8px 14px",cursor:"pointer",fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",letterSpacing:"1px"}}>{f.l}</button>)}
<button onClick={undo} disabled={actions.length===0} style={{background:actions.length>0?C.gold:"transparent",color:actions.length>0?"#000":C.muted,border:`1px solid ${actions.length>0?C.gold:C.border}`,borderRadius:"6px",padding:"8px 18px",cursor:actions.length>0?"pointer":"default",fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",letterSpacing:"1px",opacity:actions.length>0?1:0.4}}>UNDO</button>
<button onClick={reset} style={{background:C.accent,color:"#fff",border:"none",borderRadius:"6px",padding:"8px 18px",cursor:"pointer",fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",letterSpacing:"1px"}}>RESET</button>
</div>
{/* Hero grid */}
{step==="draft"&&<div style={{display:"grid",gridTemplateColumns:m?"repeat(auto-fill,minmax(100px,1fr))":"repeat(auto-fill,minmax(140px,1fr))",gap:"6px"}}>
{available.map(h=>{const rc=h.r==="tank"?C.tank:h.r==="dps"?C.dps:C.heal;const tc=h.t==="S+"?"#ff006e":h.t==="S"?C.green:h.t==="A"?C.blue:h.t==="B"?C.gold:C.muted;
const ourPlayers=Object.entries(activeHeroes).filter(([,heroes])=>heroes.includes(h.h)).map(([p])=>p);
return <div key={h.h} onClick={()=>pick(h.h)} style={{background:C.sec,border:`1px solid ${ourPlayers.length>0?`${C.gold}66`:C.border}`,borderRadius:"8px",padding:"10px",cursor:"pointer"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{color:C.text,fontSize:F.xs,fontWeight:600,fontFamily:"'Rajdhani'"}}>{h.h}</span><span style={{color:tc,fontSize:"10px",fontWeight:900,fontFamily:"'Rajdhani'"}}>{h.t}</span></div>
<div style={{display:"flex",gap:"4px",marginTop:"4px",alignItems:"center"}}><span style={{width:"8px",height:"8px",borderRadius:"50%",background:rc,display:"inline-block"}}/><span style={{color:C.muted,fontSize:"10px"}}>{h.r==="tank"?"VAN":h.r==="dps"?"DUE":"STR"}</span></div>
{ourPlayers.length>0&&<div style={{marginTop:"4px"}}>{ourPlayers.map(p=><span key={p} style={{background:`${C.gold}22`,color:C.gold,padding:"1px 6px",borderRadius:"3px",fontSize:"9px",fontWeight:700,marginRight:"3px",fontFamily:"'Rajdhani'"}}>{p}</span>)}</div>}
</div>})}
</div>}
{/* Roster Impact Analysis */}
{bans.length>0&&<Sec border={`${C.accent}44`} title="ROSTER IMPACT ANALYSIS" titleColor={C.accent}>
{(()=>{const impacted=[];Object.entries(activeHeroes).forEach(([player,heroes])=>{const lost=heroes.filter(h=>bannedSet.has(h));if(lost.length>0)impacted.push({player,lost,remaining:heroes.filter(h=>!bannedSet.has(h))});});
return impacted.length===0?<div style={{color:C.green,fontSize:F.sm}}>No roster heroes banned. All compositions available.</div>:impacted.map((imp,i)=><div key={i} style={{background:C.sec,borderRadius:"8px",padding:"12px",marginBottom:"8px"}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,color:C.text,fontSize:F.md}}>{imp.player}</div>
<div style={{color:C.accent,fontSize:F.xs,marginTop:"4px"}}>LOST: {imp.lost.join(", ")}</div>
<div style={{color:C.green,fontSize:F.xs,marginTop:"2px"}}>REMAINING: {imp.remaining.length>0?imp.remaining.join(", "):<span style={{color:C.accent,fontWeight:700}}>NO HEROES LEFT</span>}</div>
</div>)})()}
<div style={{marginTop:"12px"}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,color:C.gold,fontSize:"12px",letterSpacing:"1px",marginBottom:"8px"}}>COMPOSITION SURVIVAL</div>
{compAnalysis.filter(ca=>ca.name!=="DRAFT").map((ca,i)=>{
const hasBannedHeroes=ca.bannedInComp.length>0&&ca.inRoster;
const hasMissingPlayers=!ca.inRoster&&ca.missingPlayers&&ca.missingPlayers.length>0;
const allBannedHaveSubs=hasBannedHeroes?ca.replacements.every(r=>r.alts.length>0):true;
const allMissingHaveSubs=hasMissingPlayers?(ca.playerSubs||[]).every(ps=>ps.subs.length>0):true;
const playableWithSubs=!ca.alive&&(hasBannedHeroes||hasMissingPlayers)&&allBannedHaveSubs&&allMissingHaveSubs;
const unplayable=!ca.alive&&!playableWithSubs;
const dotColor=ca.alive?C.green:playableWithSubs?C.blue:C.muted;
return <div key={i} style={{marginBottom:"6px"}}>
<div style={{display:"flex",gap:"8px",alignItems:"center"}}>
<span style={{width:"10px",height:"10px",borderRadius:"50%",background:dotColor}}/>
<span style={{color:ca.alive||playableWithSubs?C.text:C.muted,fontSize:F.xs,fontFamily:"'Rajdhani'",fontWeight:ca.alive?600:playableWithSubs?500:400,textDecoration:unplayable?"line-through":"none"}}>{ca.name} <span style={{color:C.dim,fontWeight:400}}>{ca.tag}</span></span>
{hasMissingPlayers&&<span style={{color:C.muted,fontSize:"10px"}}>({ca.missingPlayers.map(m=>m.p).join(", ")} not in match)</span>}
{hasBannedHeroes&&<span style={{color:C.accent,fontSize:"10px"}}>({ca.bannedInComp.map(b=>b.h).join(", ")})</span>}
</div>
{hasBannedHeroes&&ca.replacements.map((rep,j)=>rep.alts.length>0&&<div key={j} style={{marginLeft:"26px",marginTop:"3px",display:"flex",gap:"6px",alignItems:"center",flexWrap:"wrap"}}>
<span style={{color:C.blue,fontSize:"10px"}}>↳ {rep.banned}:</span>
{rep.alts.map((alt,k)=>{const tc=alt.tier==="S+"?"#ff006e":alt.tier==="S"?C.green:alt.tier==="A"?C.blue:C.gold;
return <span key={k} style={{background:`${tc}22`,color:tc,padding:"1px 8px",borderRadius:"4px",fontSize:"10px",fontWeight:700,fontFamily:"'Rajdhani'"}}>{alt.player}→{alt.hero} ({alt.tier})</span>})}
</div>)}
{hasMissingPlayers&&(ca.playerSubs||[]).map((ps,j)=>ps.subs.length>0&&<div key={j} style={{marginLeft:"26px",marginTop:"3px",display:"flex",gap:"6px",alignItems:"center",flexWrap:"wrap"}}>
<span style={{color:C.blue,fontSize:"10px"}}>↳ {ps.missing}({ps.hero}):</span>
{ps.subs.map((sub,k)=>{const tc=sub.exact?C.green:sub.tier==="S+"?"#ff006e":sub.tier==="S"?C.green:sub.tier==="A"?C.blue:C.gold;
return <span key={k} style={{background:`${tc}22`,color:tc,padding:"1px 8px",borderRadius:"4px",fontSize:"10px",fontWeight:700,fontFamily:"'Rajdhani'"}}>{sub.player}→{sub.hero}{sub.exact?" ✓":` (${sub.tier})`}</span>})}
</div>)}
</div>})}
</div></Sec>}
</div>}

// ─── ROLE MATRIX TAB ───
function RoleTab(){const m=useMobile();const f=m?MF:F;
const roles=["vanguard","duelist","strategist"];
const labels={vanguard:"VANGUARD",duelist:"DUELIST",strategist:"STRATEGIST"};
const roleColors={vanguard:C.tank,duelist:C.dps,strategist:C.heal};
const[sel,setSel]=useState(null);
return <div style={{display:"grid",gap:"16px"}}>
<Sec border={`${C.blue}44`} title="ROLE FLEXIBILITY MATRIX" titleColor={C.blue}>
<p style={{color:C.dim,fontSize:F.sm,lineHeight:1.7,margin:0}}>Every player mapped against every role. Color = confidence level. Click any cell for breakdown. Green = Elite/Strong. Gold = Flex/At Risk. Red = Dead/Impossible. Gray = No Data.</p>
</Sec>
<div style={{overflowX:"auto"}}>
<table style={{width:"100%",borderCollapse:"separate",borderSpacing:"4px"}}>
<thead><tr>
<th style={{padding:"12px",textAlign:"left",fontFamily:"'Rajdhani'",fontWeight:700,color:C.dim,fontSize:"12px",letterSpacing:"1px",width:"120px"}}>PLAYER</th>
{roles.map(r=><th key={r} style={{padding:"12px",textAlign:"center",fontFamily:"'Rajdhani'",fontWeight:900,color:roleColors[r],fontSize:"13px",letterSpacing:"1.5px"}}>{labels[r]}</th>)}
</tr></thead>
<tbody>
{ROLE_MATRIX.map((p,i)=><tr key={i}>
<td style={{padding:"12px",fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.md,color:C.text,background:C.sec,borderRadius:"8px"}}>{p.name}</td>
{roles.map(r=>{const d=p.roles[r];const isOpen=sel===p.name+r;
return <td key={r} onClick={()=>setSel(isOpen?null:p.name+r)} style={{padding:"12px",background:`${d.c}11`,border:`2px solid ${d.c}44`,borderRadius:"10px",cursor:"pointer",textAlign:"center",verticalAlign:"top",boxShadow:isOpen?`0 0 12px ${d.c}33`:"none"}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:900,color:d.c,fontSize:F.md,letterSpacing:"1px"}}>{d.conf}</div>
<div style={{color:d.wr!=="—"?C.text:C.muted,fontSize:F.sm,fontWeight:700,marginTop:"2px"}}>{d.wr!=="—"?d.wr:"—"}</div>
{isOpen&&<div style={{textAlign:"left",marginTop:"10px",borderTop:`1px solid ${d.c}33`,paddingTop:"10px"}}>
<div style={{color:C.blue,fontSize:"11px",fontWeight:700,fontFamily:"'Rajdhani'",marginBottom:"4px"}}>HEROES</div>
<div style={{color:C.dim,fontSize:"11px",lineHeight:1.5}}>{d.heroes}</div>
<div style={{color:C.gold,fontSize:"11px",fontWeight:700,fontFamily:"'Rajdhani'",marginTop:"6px",marginBottom:"4px"}}>ANALYSIS</div>
<div style={{color:C.dim,fontSize:"11px",lineHeight:1.5}}>{d.note}</div>
</div>}
</td>})}
</tr>)}
</tbody></table></div>
<Sec border={`${C.gold}44`} title="CRITICAL INSIGHTS" titleColor={C.gold}>
{[
{t:"SINGLE POINT OF FAILURE — DIVE TANK",d:"Only Ayden plays Venom (2 games). If Ayden heals (his BEST role), dive is impossible. Begin or Zach must learn Venom.",c:C.accent},
{t:"SUPPORT DEPTH CRISIS",d:"Raquel: 3 heroes, 1 tourney-viable. T-Money: 0% support. Sam: Sue 44% ceiling. Only Ayden and Sam have proven comp support data.",c:C.accent},
{t:"HIDDEN TANK PLAYER",d:"T-Money 71% Vanguard vs 50% Duelist. Should be tank sub. Angela (100%) and Peni (5.14 KDA) are real weapons.",c:C.blue},
{t:"DPS→SUPPORT FLEX ASSET",d:"Tristen Luna Snow 5.00 KDA tourney + Invis Woman 4.22 KDA. DPS-to-healer flex won the only match. Strategic asset.",c:C.green},
].map((ins,i)=><div key={i} style={{background:C.sec,borderRadius:"8px",padding:"12px",marginBottom:"8px",borderLeft:`4px solid ${ins.c}`}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,color:ins.c,fontSize:F.sm}}>{ins.t}</div>
<div style={{color:C.dim,fontSize:F.xs,lineHeight:1.5,marginTop:"4px"}}>{ins.d}</div>
</div>)}
</Sec></div>}

// ─── META TAB ───
function MetaTab(){const m=useMobile();const f=m?MF:F;
const[roleFilter,setRoleFilter]=useState("vanguard");
const[showTU,setShowTU]=useState(false);
const tierColors={"S+":"#ff006e","S":C.green,"A":C.blue,"B":C.gold,"C":C.muted,"—":C.muted};
const roleData=META_TIERS[roleFilter]||[];
const labels={vanguard:"VANGUARD",duelist:"DUELIST",strategist:"STRATEGIST"};
return <div style={{display:"grid",gap:"16px"}}>
<Sec border={`${C.purple}44`} title="S7 META SNAPSHOT — DIAMOND+" titleColor={C.purple}>
<p style={{color:C.dim,fontSize:F.sm,lineHeight:1.7,margin:"0 0 14px"}}>Complete hero tier list for S7 competitive play (Diamond+ / Tournament). Data sourced primarily from Mobalytics with high-elo consensus cross-referencing. The 20% ult charge nerf defines this meta — base kit value outweighs ult cycling, dive has wider windows, neutral phases stretch 50+ seconds.</p>
<img src="/mobalytics-tierlist.jpg" alt="Mobalytics S7 Diamond+ Tier List" style={{width:"100%",borderRadius:"10px",border:`1px solid ${C.border}`,marginBottom:"8px"}} onError={(e)=>{e.target.style.display="none"}}/>
<div style={{color:C.muted,fontSize:"12px",fontStyle:"italic",textAlign:"center"}}>Source: Mobalytics Diamond+ Tier List — Season 7</div>
</Sec>
<div style={{display:"grid",gridTemplateColumns:m?"1fr":"1fr 1fr 1fr",gap:"10px"}}>
{[{t:"ULT ECONOMY",c:C.accent,d:"Vanguard/Duelist: dmg-to-energy 90%→70%. Strategist: heal-to-energy 90%→75%, passive 12/s→8/s. Neutrals now 50+ seconds."},{t:"DOMINANT FORMAT",c:C.green,d:"1-2-3 (1 Van, 2 Due, 3 Str) dominant at Diamond+. Raw healing in neutrals > ult cycling. 2-2-2 viable but niche."},{t:"DIVE BUFFED",c:C.purple,d:"Slower defensive ults = wider dive windows. Venom/Spider-Man/Magik/Psylocke all benefit."}].map((x,i)=><div key={i} style={{background:C.sec,borderRadius:"10px",padding:"14px",border:`1px solid ${x.c}33`}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,color:x.c,fontSize:"12px",letterSpacing:"1px",marginBottom:"6px"}}>{x.t}</div>
<div style={{color:C.dim,fontSize:F.xs,lineHeight:1.5}}>{x.d}</div></div>)}
</div>
<div style={{display:"flex",gap:"8px",alignItems:"center"}}>
{["vanguard","duelist","strategist"].map(r=><button key={r} onClick={()=>{setRoleFilter(r);setShowTU(false);}} style={{background:roleFilter===r&&!showTU?(r==="vanguard"?C.tank:r==="duelist"?C.dps:C.heal):"transparent",color:roleFilter===r&&!showTU?"#fff":C.dim,border:`1px solid ${C.border}`,borderRadius:"8px",padding:"12px 20px",cursor:"pointer",fontFamily:"'Rajdhani'",fontWeight:700,fontSize:F.sm,letterSpacing:"1.2px",textTransform:"uppercase"}}>{labels[r]}</button>)}
<button onClick={()=>setShowTU(true)} style={{background:showTU?C.gold:"transparent",color:showTU?"#000":C.dim,border:`1px solid ${C.border}`,borderRadius:"8px",padding:"12px 20px",cursor:"pointer",fontFamily:"'Rajdhani'",fontWeight:700,fontSize:F.sm,letterSpacing:"1.2px"}}>TEAM-UPS</button>
</div>
{!showTU&&roleData.map((tier,ti)=><div key={ti} style={{background:C.panel,borderRadius:F.rad,border:`1px solid ${C.border}`,overflow:"hidden"}}>
<div style={{background:`${tierColors[tier.tier]}11`,borderBottom:`1px solid ${tierColors[tier.tier]}33`,padding:"12px 20px",display:"flex",alignItems:"center",gap:"12px"}}>
<span style={{background:tierColors[tier.tier],color:tier.tier==="B"||tier.tier==="C"?"#000":"#fff",padding:"6px 18px",borderRadius:"8px",fontSize:F.xl,fontWeight:900,fontFamily:"'Rajdhani'",letterSpacing:"2px",minWidth:"50px",textAlign:"center"}}>{tier.tier}</span>
<span style={{color:C.dim,fontSize:F.sm}}>{tier.heroes.length} {tier.heroes.length===1?"hero":"heroes"}</span></div>
<div style={{padding:"14px 20px",display:"grid",gap:"10px"}}>
{tier.heroes.map((hero,hi)=>{const whoPlays=Object.entries(OUR_HEROES).filter(([,arr])=>arr.includes(hero.h)).map(([p])=>p);
return <div key={hi} style={{background:C.sec,borderRadius:"10px",padding:"14px",borderLeft:`4px solid ${tierColors[tier.tier]}`}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px"}}>
<span style={{fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.lg,color:C.text}}>{hero.h}</span>
{whoPlays.length>0&&<div style={{display:"flex",gap:"4px"}}>{whoPlays.map(p=><span key={p} style={{background:`${C.gold}33`,color:C.gold,padding:"2px 8px",borderRadius:"4px",fontSize:"10px",fontWeight:700,fontFamily:"'Rajdhani'"}}>{p}</span>)}</div>}
</div>
<div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{hero.n}</div>
</div>})}
</div></div>)}
{showTU&&META_TIERS.teamups.map((tier,ti)=><div key={ti} style={{background:C.panel,borderRadius:F.rad,border:`1px solid ${C.border}`,overflow:"hidden"}}>
<div style={{background:`${tierColors[tier.tier]}11`,borderBottom:`1px solid ${tierColors[tier.tier]}33`,padding:"12px 20px",display:"flex",alignItems:"center",gap:"12px"}}>
<span style={{background:tierColors[tier.tier],color:tier.tier==="B"?"#000":"#fff",padding:"6px 18px",borderRadius:"8px",fontSize:F.xl,fontWeight:900,fontFamily:"'Rajdhani'",letterSpacing:"2px"}}>{tier.tier}</span>
<span style={{color:C.dim,fontSize:F.sm}}>TEAM-UPS</span></div>
<div style={{padding:"14px 20px",display:"grid",gap:"10px"}}>
{tier.tu.map((tu,i)=><div key={i} style={{background:C.sec,borderRadius:"10px",padding:"14px",borderLeft:`4px solid ${tierColors[tier.tier]}`}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.lg,color:C.text}}>{tu.n}</div>
<div style={{color:C.blue,fontSize:F.xs,fontWeight:600,marginTop:"2px"}}>{tu.h}</div>
<div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6,marginTop:"6px"}}>{tu.d}</div>
</div>)}</div></div>)}
<Sec border={`${C.gold}44`} title="S7 KEY CHANGES" titleColor={C.gold}>
{["White Fox added: S-tier Strategist. Charm CC + Kumiho team-up with Luna Snow. Meta-defining.",
"Hulk dramatically buffed: now legitimate S/A-tier tank at Diamond+.",
"New team-ups: Kumiho (WF+Luna), Cosmic Cyclone (Storm+Adam Warlock).",
"Removed team-ups: Jeff-nado and Duality Dance. Adam Warlock lost 15% healing.",
"Winter Soldier nerfed: Assassin's Charge CD 3s→6s. Still S-tier, slower engage.",
"Black Panther buffed: re-entered Diamond+ conversations as viable flanker.",
"Blade buffed: finally viable with lifesteal self-sustain.",
"Scarlet Witch buffed: first improvement in ages, still C-tier Diamond+.",
"Iron Man buffed: aerial pressure improved, still B-tier predictable flight.",
"Shin-Shibuya returned to comp. Lower Manhattan added April 3.",
"Emma Frost: S-tier per Mobalytics Diamond+ (contrary to some sources listing C-tier). Powerful with team support, vulnerable solo. Captain America: A-tier per Mobalytics. Gabe showing 5.75 KDA on Cap in S7.5 — may be viable for Gabe specifically despite earlier 0.88 KDA tournament showing.",
"Rogue ult drain more valuable — stolen charge is 20% harder to rebuild under the new ult economy. She punishes ult-dependent comps harder than ever.",
].map((n,i)=><div key={i} style={{background:C.sec,borderRadius:"8px",padding:"10px 14px",marginBottom:"6px",display:"flex",gap:"10px"}}><span style={{color:C.gold,fontWeight:700}}>▸</span><span style={{color:C.dim,fontSize:F.xs,lineHeight:"22px"}}>{n}</span></div>)}
</Sec>
<Sec border={`${C.brand}44`} title="SEASON 7.5 — EARLY INTEL" titleColor={C.brand}>
<p style={{color:C.dim,fontSize:F.sm,lineHeight:1.7,margin:"0 0 14px"}}>Season 7.5 launched April 17, 2026. 5 of 9 players have S7.5 competitive data. Tournament played ~12 hours ago (1W 4L). S7 data remains the primary baseline but S7.5 trends are emerging. Raquel's profile is currently private.</p>
{[
"S7.5 ACTIVE: Gabe (2W 0L, Dia 2), Tristen (2W 0L, Spider-Man), Sam (2W 0L, Dia 3 CLIMB from Plat 1!), Jace (4W 7L, RS dropping). Begin alt (Deanna Schmidt) 2W 0L Dia 1. 4 players have 0 S7.5 comp games. Raquel profile PRIVATE.",
"TOURNAMENT 12 HOURS AGO: Team went 1W 4L. Ayden played White Fox (1W 3L) and Venom (0W 1L). White Fox WIN was a 35/7/45 monster (11.43 KDA). All-time tournament record now approximately 2W-13L.",
"JACE S7.5 DEEPER: Now 4W 7L across 11 games. DD 6g 3.37 KDA (1 SVP) — still his primary but struggling. BLADE 2g 3.60 KDA (1 MVP) — actually performing BETTER than DD in S7.5. Strange 1g, Iron Man 1g. Consider shifting Jace's primary to Blade on brawl/dive maps.",
"GABE MAGNETO MONSTER: 17/1/3 = 20.00 KDA on Magneto in S7.5 comp. Also Cap America 5.75 KDA. Gabe is the most consistent player in S7.5. The 'avoid Cap' guidance may need revisiting.",
"BEGIN GROOT CRISIS: Begin has ZERO competitive Groot games on his main account. All Groot games are QP or alt account. Multiple comps assign him Groot. His alt (Deanna Schmidt) has Groot 67% 3g comp — the skill exists but needs main-account comp reps BEFORE tournament.",
"SAM CLIMBED TO DIAMOND 3 from Plat 1. 100% WR with Invisible Woman 38.00 KDA and Rocket 10.60 KDA. Most improved player on the roster. IW is now tournament-viable in her pool.",
"AYDEN WHITE FOX TOURNAMENT-TESTED: Played 4 tournament matches on White Fox. High variance (11.43 KDA peak, 0.17 KDA floor). Committed to the hero. Also flexed to Venom in tournament (0.25 KDA — rough).",
"All S7 data remains valid as baseline. S7.5 meta still settling. Black Cat added to roster pool — Lucky Loan team-up with White Fox + Cap America.",
].map((n,i)=><div key={i} style={{background:C.sec,borderRadius:"8px",padding:"10px 14px",marginBottom:"6px",display:"flex",gap:"10px"}}><span style={{color:C.brand,fontWeight:700}}>▸</span><span style={{color:C.dim,fontSize:F.xs,lineHeight:"22px"}}>{n}</span></div>)}
</Sec></div>}

// ─── CHANGELOG TAB ───
const CHANGELOG=[
{ver:"v1.7",date:"April 19, 2026 (Late)",changes:[
"FULL SCRAPE via marvelrivalsapi.com API (free tier, 3K req/day). All 10 accounts scraped: 8 players + Deanna Schmidt + Raquel (private).",
"S7.5 Early Intel updated with latest data: Jace now 4W 7L (DD 6g, Blade 2g), Gabe 2W 0L (Magneto 20.00 KDA monster), Sam climbed to Dia 3.",
"TOURNAMENT DATA: Team played 1W 4L tournament ~12 hours ago. Ayden on White Fox (1W 3L) and Venom (0W 1L). All-time tournament record now ~2W-13L.",
"BEGIN GROOT CRISIS DOCUMENTED: Zero competitive Groot games on main account (Thor+Strange ONLY in S7 comp). Alt has Groot 67% 3g comp. Added CRITICAL LEARNS priority.",
"JACE BLADE > DD IN S7.5: Blade 2g 3.60 KDA (1 MVP) vs Daredevil 6g 3.37 KDA (1 SVP). Blade performing better with smaller sample.",
"Raquel profile confirmed PRIVATE via API (403). Using S7 baseline data.",
"Cap America guidance updated — Gabe showing 5.75 KDA on Cap, 'avoid Cap' guidance may need revisiting.",
"Phoenix prioritized over Hawkeye as Hela-banned fallback (S+ vs B at Diamond+).",
"Comp system rebuilt with verified S7.5 team-ups (24 active). Anti-3 Supp restored. Rogue ult drain corrected to ultimate-only + S7.5 CC Protection noted.",
],timeline:{date:"April 19, 2026 (Late)",players:[
{n:"Gabe",d:"S7.5: 2W 0L (100%). Dia 2 (4339 RS). Cap America 5.75 KDA, Magneto 20.00 KDA (17/1/3 MONSTER). Most consistent player in S7.5."},
{n:"Tristen",d:"S7.5: 2W 0L. Spider-Man 2g 3.81 KDA. Stacking with Sam+Gabe+Begin(alt)."},
{n:"Sam",d:"S7.5: 2W 0L (100%). CLIMBED Plat 1→Diamond 3. Rocket 10.60 KDA, Invisible Woman 38.00 KDA (17/1/21). Most improved player."},
{n:"Jace",d:"S7.5: 4W 7L (36%). RS still dropping. DD 6g 3.37 KDA (struggling). BLADE 2g 3.60 KDA 1 MVP — performing better. Strange 1g, Iron Man 1g. Consider primary shift to Blade."},
{n:"Ayden",d:"S7.5: 0W 0L comp. TOURNAMENT: 1W 4L — White Fox (1W 3L, peak 11.43 KDA), Venom (0W 1L). White Fox is tournament-committed. Also grinding WF in QP."},
{n:"Begin (main)",d:"S7.5: 0W 0L. INACTIVE 6+ days. S7 comp: ONLY Thor+Strange (29 games). Zero Groot/Magik comp games on main. CRITICAL: needs comp reps on Groot before tournament."},
{n:"Begin (alt)",d:"S7.5: 2W 0L Dia 1 (4414 RS). Magik 4.50 KDA, Angela 4.75 KDA in comp. Wider pool (Groot 67% 3g, Spider-Man 100% 2g on S7). Active 14 hours ago."},
{n:"T-Money",d:"S7.5: 0W 0L. Inactive."},
{n:"Zach",d:"S7.5: 0W 0L. Inactive."},
{n:"Raquel",d:"PROFILE PRIVATE. Cannot scrape. S7 baseline: Plat 3, 59% (16W 11L), C&D 12.82 KDA. Needs to unprivate for next review."},
]}},
{ver:"v1.6",date:"April 19, 2026",changes:[
"COMP SYSTEM OVERHAUL: Reduced from 12 comps to 7 focused, executable compositions based on pro-play research. Removed all theoretical/fantasy comps that were never practiced.",
"New comp structure: DRAFT (ban/save) → POKE (double shield) → 1-2-3 (triple support meta) → DIVE (Venom+Spider-Man) → BRAWL (Thor rush) → ANTI-DIVE (wall+info counter) → FLEX (fallback plan).",
"Fixed Anti-Dive B: Removed claim that Strange portals team to safety — portal is an offensive repositioning tool, not an escape. Rebuilt anti-dive around Groot walls + Daredevil wallhack + Rogue ult drain.",
"Removed ANTI-3 SUPP comp (Groot+Moon Knight ult combo never practiced, requires coordination team hasn't demonstrated).",
"Each comp now specifies: exact 6-player lineup, WHY it works (ability synergies, team-ups), which maps it's designed for, convoy offense/defense notes, and what to do when key heroes are banned.",
"MAPS ↔ COMPS integration: Every map now lists PRIMARY comp + FALLBACK comp with specific player assignments. Convoy maps include offense/defense strategy notes.",
"Map ourComp fields now include per-player WR data so you can see who performs best/worst on each map alongside the recommended comp.",
"LEARNS overhauled: Added Ult Cycling Discipline (CRITICAL for 1-2-3), Dive Coordination (practice target calling), Venom Backup (CRITICAL — only one dive tank player). Removed outdated learn items for deleted comps.",
"Comp selector UI updated for 8 comps (DRAFT | core comps | situational comps).",
"Anti-3 Supp restored — team proved it works in competitive. Groot ult isolates + Moon Knight ult = kill through healing.",
"ALL team-up references verified against marvelrivals.gg S7.5 (24 active). Removed inactive team-ups. Added Lucky Loan (Black Cat+White Fox+Cap).",
"Comp logic rebuilt: base kit synergy first, team-ups as bonuses. Fixed Strange portal (offensive, not escape).",
]},
{ver:"v1.5",date:"April 18, 2026",changes:[
"NEW: Team Synergy section in Stats tab — duo WR matrix for all roster pairs. Color-coded: Elite (pink), Strong (green), Good (blue), Neutral (gold), Weak/Crisis (red).",
"NEW: Player Performance on Maps — each map in the Maps tab now shows per-player WR data when expanded. Sorted by WR, color-coded by performance.",
"NEW: Duo Synergy section in Player Profile — select a player to see their WR with every partner.",
"NEW: Draft Sim map selection step — Step 3 selects map before drafting. Bans/saves now factor in map-specific meta.",
"Begin alt 'Deanna Schmidt' identified and documented. Begin's synergy analysis updated: GM3 matchmaking penalty confirmed — 7-45% WR with roster on main vs 61-80% on alt.",
"Tournament context corrected: opponents are Celestial/Eternity/Top 500. The 1W-9L record is against players 2-3 full tiers above the roster. Begin's alt synergy does NOT predict tournament performance.",
"Zach identified as roster's biggest synergy liability: 9-27% WR with all teammates despite 60% solo WR.",
"Jace + Ayden duo identified at 90.91% WR (11g) — strongest pair on the roster by far.",
"Sam + Raquel duo at 41.67% (24g) — weakest support pair. Every comp running both starts at a disadvantage.",
"Map specializations discovered: Sam 100% Yggsgard, T-Money 100% Tokyo Conv, Begin 75% Domination mode, Tristen 83% Hydra Charteris.",
"Fixed: Maps tab was using wrong variable for ban/pick/archetype display (m → mp).",
"Learns subtab moved from REFERENCE to TEAM group.",
"Mobile UI improvements: condensed player cards, single-row draft roster, 5-col nav grid.",
"Comp hero names now match role colors (blue=Vanguard, red=Duelist, green=Strategist).",
],timeline:{date:"April 18, 2026",players:[
{n:"Gabe",d:"S7.5: 1W 0L (100%). Climbed Dia 3→Dia 2 (4288→4339 RS). Captain America WIN 5.75 KDA — contrary to 'avoid Cap' guidance but only 1g sample. Active 44 min ago."},
{n:"Tristen",d:"S7.5: 3W 1L (75%). Spider-Man 100% 2g comp. Hela 0% 1g. Stacking with Sam+Gabe+Begin(alt) at 75% WR. Active 18 min ago."},
{n:"Sam",d:"S7.5: 2W 0L (100%). Invisible Woman 38.00 KDA (17/1/21). Rocket 10.60 KDA. Best start on the roster. Active 7 min ago."},
{n:"Jace",d:"S7.5: 3W 5L (38%). RS 4145→4120 (DOWN). Daredevil 25% 4g — CRISIS. Was 72% S7. Blade 100% 1g, Iron Man 100% 1g showing as alternatives. Monitor closely."},
{n:"Ayden",d:"S7.5: 0W 0L comp. Playing QP (White Fox grinding). Last match 4 hrs ago. S7 data unchanged (Dia 2, 57%)."},
{n:"Begin",d:"S7.5: 0W 0L. Last match 6+ days ago. Inactive. S7 data unchanged (GM3, 62%)."},
{n:"T-Money",d:"S7.5: 0W 0L. No activity. S7 data unchanged (Plat 1, 56%)."},
{n:"Zach",d:"S7.5: 0W 0L. No activity. S7 data unchanged (Plat 3, 60%)."},
{n:"Raquel",d:"S7.5: 0W 0L comp. Playing QP (Rocket Raccoon). Active 8 min ago. S7 data unchanged (Plat 3, 59%)."},
]}},
{ver:"v1.4.2",date:"April 17, 2026",changes:[
"Visual rebrand: MARVEL RIVALS → STUBBEDTOES. Team emblem displayed in header. Season badge updated to S7.5.",
"Color scheme updated: emblem green (#4eca6a) as primary brand color. Backgrounds shifted to subtle purple-navy tint matching emblem. Softened tab active states — translucent colored backgrounds replace harsh solid fills.",
"Analysis methodology updated: R20 now tracks competitive games ONLY (excludes Quick Play and Tournament). QP games weighed extremely lightly in all analysis (experimentation/learning only).",
"Gabe grade B+ → A- (title: ANCHOR TANK — MAGNETO COMMITTED). Sam hero name: Sue Storm → Invisible Woman.",
],timeline:{date:"April 17, 2026",players:[
{n:"Ayden",d:"Dia 3→Dia 2 (4288→4361 RS). 55%→57% (39W 29L, +3W/+0L = 3 straight comp wins). White Fox 100% 3g 8.27 KDA on MAIN competitive — validated from alt. Rank trajectory is strongest upward trend on roster."},
{n:"Tristen",d:"RS 4274→4319. 73% (35W 13L, +3W/+1L). Spider-Man 78.6%→80% at 30g — slump is over. R20 25%→60% (12W 8L). Dr. Strange 100% 1g 11.00 KDA WIN — emergency portal swap for clutch point save, not a role shift. Invisible Woman 50% 2g."},
{n:"Gabe",d:"RS 4216→4288. 54%→56% (37W 29L, +4W/+1L). MAGNETO 71.4% 7g → 75% 12g (+5 games, WR UP). R20 20%→50%. Biggest coaching win — dashboard recommendation fully validated."},
{n:"T-Money",d:"Plat 2→Plat 1 (4077→4137 RS). 54%→56% (30W 24L, +3W/+1L). Daredevil NEW in R20: 75% 4g. Namor comp debut WIN 4.25 KDA. Moon Knight 25%→20% (dead). Vanguard R20 75% continues to outperform Duelist."},
{n:"Sam",d:"Plat 2→Plat 1 (4062→4155 RS). 47%→49% (32W 33L, +3W/+0L). Invisible Woman 44%→47.2% 53g. R20 30%→45%. Vanguard still 38% of R20 (8g) — role confusion persists despite climb."},
{n:"Zach",d:"RS 3943→3976. 58%→60% (12W 8L, +1W). Rocket Raccoon comp debut: 100% 1g 7.50 KDA (32/6/49 match). R20 unchanged at 35%."},
{n:"Begin",d:"No new competitive games. Last match 4 days ago. Data unchanged."},
{n:"Raquel",d:"No new competitive games. Grinding Rocket Raccoon in QP (19 of R20 games). Positive sign for pool expansion — weighed lightly per QP rules."},
{n:"Jace",d:"No new competitive games. Grinding Daredevil in QP. Data unchanged."},
]}},
{ver:"v1.4.1",date:"April 16, 2026",changes:[
"Bans tab removed. Ban-save visual aid and procedure explanation moved to Rules tab.",
"Draft strategy integrated into Comps tab: new 'Overall Draft Suggestions' sub-tab appears first with universal ban/save philosophy (Elsa Bloodstone always first ban, Deadpool V always second, context-dependent third).",
"Per-comp ban and save priorities added to every composition. Each comp now shows which heroes to ban and which to save specific to that strategy.",
"Comps restructured to fit the meta and roster more appropriately.",
"Terminology updated: 'Lock' → 'Save' across all tabs to match team communication.",
"Tab count: 13 → 12 (Bans removed, content redistributed).",
]},
{ver:"v1.4",date:"April 16, 2026",changes:[
"Meta Snapshot overhauled: all tiers sourced from Mobalytics Diamond+. Featured tier list image. Moon Knight corrected to Duelist. Team-ups rebuilt from Mobalytics (Vibrant Vitality/Arcane Order/Primal Flame = S-tier; Planet X Pals = B-tier). Hero designations cleaned — removed (V)/(D)/(S) from all except Deadpool.",
"Added ANTI-TRIPLE SUPPORT comp (Mobalytics-sourced): Groot+Magneto+Thor+Moon Knight+Rocket+C&D. Groot+MK ult combo = guaranteed fight win.",
"Draft Simulator rebuilt: pre-draft roster selection (6 of 9), Team A/B side declaration, undo button, smart recommendations on your turn, replacement hero suggestions for banned comps in survival analysis.",
"Added Player Profile tab: select any player to see all data aggregated from every tab. Tab count: 8 → 13.",
"Timeline review: Tristen R20 crash (50%→25%), Gabe 10.75 KDA Strange, Ayden Venom WIN, Raquel Jeff 100% 4g 18.44 KDA. Grades: Gabe B-→A-, Tristen B+→B, Sam B-→C+, Raquel D→C+. T-Money → THE CLOSET VANGUARD.",
"Tristen Moon Knight practice added to Learns (HIGH) for Anti-3 Supp comp.",
]},
{ver:"v1.3",date:"April 16, 2026",changes:[
"Timeline review: all 9 profiles fetched, new competitive games integrated.",
"Ayden: 9 new comp games. Emma 12g in R20 at 50% with 7+ KDA peaks. Venom WIN 3.36 KDA. Climbing Plat 1 → Diamond 3.",
"Gabe: 3 new comp games. Strange 10.75 KDA WIN (38/4/5) = best comp game ever. Cap LOSS 1.59. Grade B- → A-.",
"Tristen: R20 crashed 50% → 25%. Iron Man 0% in R20 (0W 5L). Invisible Woman 8.67 KDA comp WIN. Grade B+ → B.",
"Raquel: Jeff 100% 4g 18.44 KDA discovered. White Fox 67% R20. Emma removed from pool. Grade D → C+.",
"Sam: 9 Vanguard games in R20 at 22% WR. Role confusion worsening. Grade B- → C+.",
"Zach: Deadpool (V) R20 improved to 80% (5g). Strategist role 18%.",
"T-Money: Magneto R20 67%, Moon Knight R20 50%. Nickname → THE CLOSET VANGUARD.",
"Begin and Jace: no new competitive games.",
]},
{ver:"v1.2",date:"April 16, 2026",changes:[
"Added Jace (Jaejanken) to roster — Plat 1, peaked Dia 3. Daredevil specialist: 72% WR 25g, 4.32 KDA. Integrated into Stats, Intel, Comps, Maps, Bans, Learns, Role Matrix, and Draft Sim.",
"Jace replaces Zach as primary Daredevil in all poke/anti-dive/hybrid compositions. Zach freed for Thor/Deadpool(V)/flex roles.",
"Font sizes increased ~15-20% across all elements (second pass).",
"Added Changelog tab.",
]},
{ver:"v1.1",date:"April 16, 2026",changes:[
"Added 3 new tabs: Draft Simulator (interactive 10-phase ban-lock with roster impact and composition survival analysis), Role Flexibility Matrix (player × role confidence grid), Meta Snapshot (full S7 Diamond+ tier list for all 48 heroes + team-ups with roster cross-references).",
"Tab count: 8 → 11.",
]},
{ver:"v1.0",date:"April 16, 2026",changes:[
"Initial deployment. 8 tabs: Stats, Tournament, Comps, Maps, Bans, Intel, Learns, Rules.",
"Full roster data for Begin, Ayden, Tristen, T-Money, Gabe, Sam, Zach, Raquel.",
"Tournament match-by-match analysis (1W-9L record).",
"10 team compositions, 15 maps, ban-lock strategy, hero learning priorities.",
]},
];
function ChangelogTab(){const m=useMobile();const f=m?MF:F;return <div style={{display:"grid",gap:"16px"}}>
<Sec border={`${C.blue}44`} title="CHANGELOG" titleColor={C.blue}>
<p style={{color:C.dim,fontSize:F.sm,lineHeight:1.7,margin:0}}>Version history for the StubbedToes Competitive Hub. Every change is recorded so the team knows exactly what was updated and when.</p>
</Sec>
{CHANGELOG.map((entry,i)=><div key={i} style={{background:C.panel,borderRadius:F.rad,border:`1px solid ${C.border}`,padding:F.padL}}>
<div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"}}>
<span style={{background:i===0?C.green:C.muted,color:i===0?"#000":"#fff",padding:"4px 14px",borderRadius:"6px",fontSize:F.md,fontWeight:900,fontFamily:"'Rajdhani'",letterSpacing:"1px"}}>{entry.ver}</span>
<span style={{color:C.dim,fontSize:F.sm,fontFamily:"'Rajdhani'"}}>{entry.date}</span>
{i===0&&<Bd color={C.green} text="LATEST"/>}
</div>
{entry.changes.map((c,j)=><div key={j} style={{background:C.sec,borderRadius:"8px",padding:"10px 14px",marginBottom:"6px",display:"flex",gap:"10px"}}>
<span style={{color:i===0?C.green:C.dim,fontWeight:700}}>▸</span>
<span style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{c}</span>
</div>)}
{entry.timeline&&<div style={{marginTop:"12px",background:`${C.purple}11`,borderRadius:"10px",border:`1px solid ${C.purple}33`,padding:F.pad}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.lg,color:C.purple,letterSpacing:"1.5px",marginBottom:"10px"}}>TIMELINE REVIEW — {entry.timeline.date}</div>
{entry.timeline.players.map((p,k)=><div key={k} style={{background:C.sec,borderRadius:"8px",padding:"10px 14px",marginBottom:"6px"}}>
<span style={{fontFamily:"'Rajdhani'",fontWeight:700,color:C.text,fontSize:F.sm}}>{p.n}: </span>
<span style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{p.d}</span>
</div>)}
</div>}
</div>)}
</div>}

// ─── PLAYER PROFILE TAB ───
function PlayerTab(){const m=useMobile();const f=m?MF:F;
const names=Object.keys(STATS).sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()));
const[sel,setSel]=useState(null);
if(!sel)return <div style={{display:"grid",gap:"16px"}}>
<Sec border={`${C.gold}44`} title="PLAYER PROFILES" titleColor={C.gold}>
<p style={{color:C.dim,fontSize:F.sm,lineHeight:1.7,margin:0}}>Select a player to view their complete profile — all data from every tab filtered into a single view. Use this for individual coaching sessions.</p>
</Sec>
<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px"}}>
{names.map(n=>{const s=STATS[n];const fb=FB.find(f=>f.n===n);return <div key={n} onClick={()=>setSel(n)} style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:F.rad,padding:m?"10px":"14px",cursor:"pointer",textAlign:"center"}}>
<div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"}}><span style={{fontSize:m?"18px":"22px"}}>{fb?fb.i:"👤"}</span><span style={{fontFamily:"'Rajdhani'",fontWeight:900,fontSize:m?F.lg:F.xl,color:C.text}}>{n}</span></div>
<div style={{display:"flex",gap:"6px",justifyContent:"center",alignItems:"center",marginTop:"6px",flexWrap:"wrap"}}>{fb&&<Gr g={fb.g}/>}<Bd color={C.purple} text={s.rank}/></div>
<div style={{color:C.muted,fontSize:m?"9px":"11px",marginTop:"6px",fontFamily:"'Rajdhani'",letterSpacing:"0.5px"}}>{s.ign}</div>
</div>})}
</div></div>;
const s=STATS[sel];const fb=FB.find(f=>f.n===sel);const rm=ROLE_MATRIX.find(r=>r.name===sel);
const myComps=COMPS.filter(c=>c.lineup.some(l=>l.p===sel));
const myMatches=TM.filter(m=>m.p.some(p=>p.n===sel));
const myLearns=LEARNS.filter(l=>l.w.includes(sel));
const myHeroes=OUR_HEROES[sel]||[];
const roles=["vanguard","duelist","strategist"];
const roleColors={vanguard:C.tank,duelist:C.dps,strategist:C.heal};
const roleLabels={vanguard:"VANGUARD",duelist:"DUELIST",strategist:"STRATEGIST"};
return <div style={{display:"grid",gap:"16px"}}>
{/* Back button + Header */}
<div style={{display:"flex",alignItems:"center",gap:"14px"}}>
<button onClick={()=>setSel(null)} style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:"8px",padding:"10px 18px",cursor:"pointer",color:C.dim,fontFamily:"'Rajdhani'",fontWeight:700,fontSize:F.sm}}>← ALL PLAYERS</button>
<div style={{flex:1}}>
<div style={{display:"flex",alignItems:"center",gap:"12px"}}>{fb&&<span style={{fontSize:"30px"}}>{fb.i}</span>}
<div><div style={{fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.xxl,color:C.text}}>{sel}</div>
<div style={{color:C.dim,fontSize:F.sm}}>{fb?fb.v:""}</div></div>
{fb&&<Gr g={fb.g}/>}</div>
</div></div>
{/* Stats Overview */}
<Sec border={`${C.purple}44`} title="COMPETITIVE STATS" titleColor={C.purple}>
<div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"14px"}}>
<Bd color={C.purple} text={s.rank+" ("+s.rs+" RS)"}/><Bd color={parseFloat(s.wr)>=55?C.green:parseFloat(s.wr)>=45?C.gold:C.accent} text={s.wr+" "+s.rec}/><Bd color={parseFloat(s.r20)>=50?C.green:parseFloat(s.r20)>=35?C.gold:C.accent} text={"L20: "+s.r20+" "+s.r20r}/>
</div>
<div style={{overflowX:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",fontSize:m?MF.xs:F.sm,minWidth:m?"500px":"auto"}}><thead><tr style={{borderBottom:`1px solid ${C.border}`}}>{["Hero","WR","Games","KDA","K/D/A"].map(h=><th key={h} style={{textAlign:"left",padding:"8px",color:C.dim,fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",letterSpacing:"1px"}}>{h}</th>)}</tr></thead>
<tbody>{s.heroes.map((h,i)=>{const w=parseFloat(h.w),wc=w>=60?C.green:w>=45?C.gold:C.accent;return <tr key={i} style={{borderBottom:`1px solid ${C.border}22`}}><td style={{padding:"8px",color:C.text,fontWeight:600}}>{h.h}</td><td style={{padding:"8px",color:wc,fontWeight:700}}>{h.w}</td><td style={{padding:"8px",color:C.dim}}>{h.g}</td><td style={{padding:"8px",color:C.blue,fontWeight:600}}>{h.k}</td><td style={{padding:"8px",color:C.dim}}>{h.l}</td></tr>})}</tbody></table></div>
{s.extra&&<div style={{background:`${C.purple}11`,borderRadius:"8px",padding:"14px",marginTop:"12px",border:`1px solid ${C.purple}33`}}><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{s.extra}</div></div>}
{s.note&&<div style={{background:`${C.gold}11`,borderRadius:"8px",padding:"14px",marginTop:"8px",border:`1px solid ${C.gold}33`}}><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{s.note}</div></div>}
</Sec>
{/* Intel Assessment */}
{fb&&<Sec border={`${C.accent}44`} title="INTEL ASSESSMENT" titleColor={C.accent}>
{[{l:"STRENGTHS",c:C.green,t:fb.s},{l:"WEAKNESSES",c:C.accent,t:fb.w},{l:"THE ONE ABOVE ALL DECREES",c:C.gold,t:fb.r}].map((x,i)=><div key={i} style={{background:`${x.c}11`,borderRadius:"10px",padding:"16px",marginBottom:"10px",border:`1px solid ${x.c}33`}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",color:x.c,letterSpacing:"1px",marginBottom:"6px"}}>{x.l}</div>
<div style={{color:C.dim,fontSize:F.sm,lineHeight:1.7}}>{x.t}</div></div>)}
</Sec>}
{/* Learning Priorities */}
{myLearns.length>0&&<Sec border={`${C.gold}44`} title={"LEARNING PRIORITIES ("+myLearns.length+")"} titleColor={C.gold}>
{myLearns.map((l,i)=><div key={i} style={{background:C.sec,borderRadius:"8px",padding:"12px",marginBottom:"8px",display:"flex",gap:"12px",alignItems:"start"}}>
<Bd color={l.p==="CRITICAL"?C.accent:l.p==="HIGH"?C.gold:l.p==="MEDIUM"?C.blue:C.muted} text={l.p}/>
<div><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:F.md,color:C.text}}>{l.h}</div>
<div style={{color:C.dim,fontSize:F.xs,lineHeight:1.5,marginTop:"4px"}}>{l.r}</div></div>
</div>)}
</Sec>}
{/* Role Matrix */}
{rm&&<Sec border={`${C.blue}44`} title="ROLE FLEXIBILITY" titleColor={C.blue}>
<div style={{display:"grid",gridTemplateColumns:m?"1fr":"repeat(3,1fr)",gap:"10px"}}>
{roles.map(r=>{const d=rm.roles[r];return <div key={r} style={{background:`${d.c}11`,border:`2px solid ${d.c}44`,borderRadius:"10px",padding:"14px",textAlign:"center"}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:900,color:roleColors[r],fontSize:"12px",letterSpacing:"1.5px",marginBottom:"4px"}}>{roleLabels[r]}</div>
<div style={{fontFamily:"'Rajdhani'",fontWeight:900,color:d.c,fontSize:F.lg}}>{d.conf}</div>
<div style={{color:d.wr!=="—"?C.text:C.muted,fontSize:F.md,fontWeight:700}}>{d.wr!=="—"?d.wr:"—"}</div>
<div style={{color:C.dim,fontSize:"11px",lineHeight:1.4,marginTop:"6px",textAlign:"left"}}>{d.heroes}</div>
<div style={{color:C.muted,fontSize:"11px",lineHeight:1.4,marginTop:"4px",textAlign:"left",fontStyle:"italic"}}>{d.note}</div>
</div>})}
</div></Sec>}
{/* Synergy */}
{(()=>{const mySyn=SYNERGY.filter(s=>s.p1===sel||s.p2===sel).map(s=>({partner:s.p1===sel?s.p2:s.p1,wr:s.wr,g:s.g,v:s.v})).sort((a,b)=>parseFloat(b.wr)-parseFloat(a.wr));
return mySyn.length>0?<Sec border={`${C.purple}44`} title={"DUO SYNERGY ("+mySyn.length+" PARTNERS)"} titleColor={C.purple}>
<div style={{display:"grid",gridTemplateColumns:m?"1fr":"1fr 1fr",gap:"6px"}}>
{mySyn.map((s,i)=>{const c=s.v==="ELITE"?"#ff006e":s.v==="STRONG"?C.green:s.v==="GOOD"?C.blue:s.v==="NEUTRAL"?C.gold:C.accent;
return <div key={i} style={{background:C.sec,borderRadius:"8px",padding:"8px 12px",borderLeft:`3px solid ${c}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<span style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:F.xs,color:C.text}}>{s.partner}</span>
<div style={{display:"flex",gap:"8px",alignItems:"center"}}><span style={{color:c,fontWeight:700,fontSize:F.xs}}>{s.wr}</span><span style={{color:C.muted,fontSize:"10px"}}>{s.g}g</span><Bd color={c} text={s.v}/></div>
</div>})}
</div></Sec>:null})()}
{/* Map Performance */}
{(()=>{const myMaps=Object.entries(MAP_PLAYERS).filter(([,pls])=>pls.some(p=>p.p===sel)).map(([map,pls])=>{const me=pls.find(p=>p.p===sel);return{map,wr:me.wr,g:me.g};}).sort((a,b)=>parseFloat(b.wr)-parseFloat(a.wr));
return myMaps.length>0?<Sec border={`${C.brand}44`} title={"MAP PERFORMANCE ("+myMaps.length+" MAPS)"} titleColor={C.brand}>
<div style={{display:"grid",gridTemplateColumns:m?"1fr":"1fr 1fr 1fr",gap:"6px"}}>
{myMaps.map((mp,i)=>{const wr=parseFloat(mp.wr);const c=wr>=70?C.green:wr>=50?C.gold:C.accent;
return <div key={i} style={{background:C.sec,borderRadius:"8px",padding:"10px 12px",borderLeft:`3px solid ${c}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<span style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:m?MF.xs:F.xs,color:C.text}}>{mp.map}</span>
<div style={{display:"flex",gap:"8px",alignItems:"center"}}><span style={{color:c,fontWeight:700,fontSize:m?MF.xs:F.xs}}>{mp.wr}</span><span style={{color:C.muted,fontSize:"10px"}}>{mp.g}g</span></div>
</div>})}
</div></Sec>:null})()}
{/* Draft Pool */}
{myHeroes.length>0&&<Sec border={`${C.green}44`} title={"DRAFT POOL ("+myHeroes.length+" HEROES)"} titleColor={C.green}>
<div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>{myHeroes.map(h=>{const hero=ALL_HEROES.find(a=>a.h===h);const rc=hero?(hero.r==="tank"?C.tank:hero.r==="dps"?C.dps:C.heal):C.muted;const tc=hero?(hero.t==="S+"?"#ff006e":hero.t==="S"?C.green:hero.t==="A"?C.blue:hero.t==="B"?C.gold:C.muted):C.muted;
return <div key={h} style={{background:C.sec,border:`1px solid ${C.border}`,borderRadius:"8px",padding:"10px 14px",display:"flex",alignItems:"center",gap:"8px"}}>
<span style={{width:"10px",height:"10px",borderRadius:"50%",background:rc}}/>
<span style={{color:C.text,fontSize:F.sm,fontWeight:600,fontFamily:"'Rajdhani'"}}>{h}</span>
<span style={{color:tc,fontSize:"11px",fontWeight:900,fontFamily:"'Rajdhani'"}}>{hero?hero.t:""}</span>
</div>})}</div>
</Sec>}
{/* Compositions */}
{myComps.length>0&&<Sec border={`${C.purple}44`} title={"COMPOSITIONS ("+myComps.length+")"} titleColor={C.purple}>
{myComps.map((comp,i)=>{const mySlot=comp.lineup.find(l=>l.p===sel&&l.r!=="note");return <div key={i} style={{background:C.sec,borderRadius:"10px",padding:"14px",marginBottom:"8px",borderLeft:`4px solid ${comp.color}`}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px"}}>
<span style={{fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.lg,color:comp.color}}>{comp.name} <span style={{fontSize:F.sm,color:C.dim,fontWeight:600}}>{comp.tag}</span></span>
{mySlot&&<Bd color={mySlot.r==="tank"?C.tank:mySlot.r==="dps"?C.dps:C.heal} text={mySlot.h}/>}
</div>
{mySlot&&<div style={{color:C.dim,fontSize:F.xs,lineHeight:1.5}}>{mySlot.n}</div>}
</div>})}
</Sec>}
{/* Tournament Matches */}
{myMatches.length>0&&<Sec border={`${myMatches.some(m=>m.res==="WIN")?C.green:C.accent}44`} title={"TOURNAMENT MATCHES ("+myMatches.length+")"} titleColor={myMatches.some(m=>m.res==="WIN")?C.green:C.accent}>
{myMatches.map((mt,i)=>{const me=mt.p.find(p=>p.n===sel);const rc=mt.res==="WIN"?C.green:C.accent;const kr=parseFloat(me.r)||0;const kc=me.r==="∞"?"#ff006e":kr>=3?C.green:kr>=1.5?C.gold:C.accent;
return <div key={i} style={{background:C.sec,borderRadius:"8px",padding:"12px",marginBottom:"6px",display:"grid",gridTemplateColumns:m?"1fr 1fr":"60px 120px 100px 80px 1fr",gap:"10px",alignItems:"center",fontSize:F.xs}}>
<span style={{background:rc,color:"#000",padding:"3px 10px",borderRadius:"5px",fontSize:"11px",fontWeight:900,fontFamily:"'Rajdhani'",textAlign:"center"}}>{mt.res}</span>
<span style={{color:C.text,fontWeight:600}}>{mt.map} <span style={{color:C.dim}}>{mt.sc}</span></span>
<span style={{color:C.blue,fontWeight:600}}>{me.h}</span>
<span style={{color:C.dim}}>{me.k}</span>
<div style={{display:"flex",gap:"6px",alignItems:"center"}}><span style={{color:kc,fontWeight:700}}>{me.r==="∞"?"PERFECT":me.r+" KDA"}</span>{me.b&&<Bd color={me.b==="MVP"?"#ff006e":C.gold} text={me.b}/>}</div>
</div>})}
</Sec>}
{/* Profile Link */}
{s.url&&<a href={s.url} target="_blank" rel="noopener noreferrer" style={{color:C.blue,fontSize:F.sm,textDecoration:"none",display:"block",textAlign:"center",padding:"12px",background:C.panel,borderRadius:F.rad,border:`1px solid ${C.border}`}}>View {sel} on RivalsMeta →</a>}
</div>}

export default function App(){const m=useMobile();const f=m?MF:F;const[tab,setTab]=useState("player");
const[openGroup,setOpenGroup]=useState(null);
const groups=[{label:"TEAM",color:"#3d9ec2",tabs:[{id:"stats",l:"Stats"},{id:"feedback",l:"Intel"},{id:"roles",l:"Roles"},{id:"learn",l:"Learns"}]},{label:"STRATEGY",color:"#7e4fba",tabs:[{id:"comps",l:"Comps"},{id:"maps",l:"Maps"},{id:"draft",l:"Draft Sim"}]},{label:"REFERENCE",color:"#c48e28",tabs:[{id:"meta",l:"Meta"},{id:"info",l:"Rules"},{id:"tourney",l:"Tournament"}]}];
const activeGroup=groups.find(g=>g.tabs.some(t=>t.id===tab));
return <div style={{minHeight:"100vh",background:C.bg,color:C.text,fontFamily:"'Rajdhani',sans-serif"}}>
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@700;900&family=Teko:wght@500;600;700&display=swap" rel="stylesheet"/>
<div style={{background:`linear-gradient(135deg,#0f0e1a,${C.bg})`,borderBottom:`2px solid ${C.brand}33`,padding:m?"16px 16px 12px":"24px 32px 16px",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",top:0,left:0,right:0,bottom:0,background:`radial-gradient(ellipse at 10% 50%, ${C.brand}08 0%, transparent 60%)`,pointerEvents:"none"}}/>
<div style={{maxWidth:"1200px",margin:"0 auto",position:"relative"}}>
<div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:m?"10px":"16px",marginBottom:"8px",flexWrap:m?"wrap":"nowrap"}}>
{!m&&<img src="/team-emblem.png" alt="StubbedToes" style={{width:"48px",height:"48px",borderRadius:"8px",border:`2px solid ${C.brand}44`}} onError={(e)=>{e.target.style.display="none"}}/>}
<div style={{display:"flex",alignItems:"center",gap:m?"8px":"14px",flexWrap:m?"wrap":"nowrap",justifyContent:m?"center":"flex-start"}}>
<h1 style={{margin:0,fontFamily:"'Teko'",fontWeight:700,fontSize:m?"28px":"42px",letterSpacing:m?"3px":"6px",background:`linear-gradient(135deg,${C.brand},#8aefaa)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",lineHeight:1}}>STUBBEDTOES</h1>
{!m&&<div style={{width:"1px",height:"28px",background:`${C.dim}55`}}/>}
<div style={{display:"flex",alignItems:"center",gap:"8px"}}>
<span style={{fontFamily:"'Rajdhani'",fontWeight:600,fontSize:m?"12px":"22px",color:C.dim,letterSpacing:"2px",lineHeight:1}}>MARVEL RIVALS</span>
<span style={{background:`${C.brand}22`,color:C.brand,padding:m?"3px 8px":"5px 12px",borderRadius:"5px",fontSize:m?"11px":"15px",fontWeight:700,border:`1px solid ${C.brand}44`,fontFamily:"'Rajdhani'",letterSpacing:"1px",lineHeight:1}}>S7.5</span>
</div></div></div>
{!m&&<p style={{margin:"0 0 14px",color:C.muted,fontSize:F.xs,fontStyle:"italic",textAlign:"center"}}>"I have watched every timeline, every match, every misplay. The data does not lie." — The One Above All</p>}
<div style={{display:"grid",gridTemplateColumns:m?"repeat(5,1fr)":"repeat(5,1fr)",gap:m?"3px":"8px",alignItems:"center"}}>
<Tab m={m} a={tab==="player"} onClick={()=>{setTab("player");setOpenGroup(null);}}>{m?"PLAYER":"Player"}</Tab>
{groups.map(g=>{const isOpen=openGroup===g.label;const hasActive=g.tabs.some(t=>t.id===tab);const shortLabel=m?(g.label==="STRATEGY"?"STRAT":g.label==="REFERENCE"?"REF":g.label):g.label;
return <button key={g.label} onClick={()=>setOpenGroup(isOpen?null:g.label)} style={{background:hasActive?`${g.color}22`:isOpen?`${g.color}15`:"transparent",color:hasActive?g.color:isOpen?g.color:C.dim,border:`1px solid ${hasActive||isOpen?`${g.color}44`:C.border}`,padding:m?"7px 0":"14px 22px",borderRadius:m?"6px":"8px",cursor:"pointer",fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:m?"10px":"16px",letterSpacing:m?"0.5px":"1.2px",textTransform:"uppercase",whiteSpace:"nowrap",transition:"all 0.2s ease",textAlign:"center",width:"100%"}}>{shortLabel} {isOpen?"▲":"▼"}</button>})}
<Tab m={m} a={tab==="changelog"} onClick={()=>{setTab("changelog");setOpenGroup(null);}}>{m?"LOG":"Changelog"}</Tab>
</div>
{(openGroup||activeGroup)&&<div style={{display:"grid",gridTemplateColumns:`repeat(${(groups.find(g=>g.label===openGroup)||activeGroup).tabs.length},1fr)`,gap:"4px",marginTop:m?"6px":"10px"}}>
{(groups.find(g=>g.label===openGroup)||activeGroup).tabs.map(t=><Tab key={t.id} a={tab===t.id} onClick={()=>{setTab(t.id);setOpenGroup(null);}} m={m} color={(groups.find(g=>g.label===openGroup)||activeGroup).color}>{t.l}</Tab>)}
</div>}
</div>
</div>
<div style={{padding:m?"12px 16px":"24px 32px",maxWidth:"1200px",margin:"0 auto"}}>
{tab==="stats"&&<StatsTab/>}{tab==="tourney"&&<TourneyTab/>}{tab==="comps"&&<CompsTab/>}{tab==="maps"&&<MapsTab/>}
{tab==="feedback"&&<FeedbackTab/>}{tab==="learn"&&<LearnTab/>}{tab==="info"&&<InfoTab/>}
{tab==="draft"&&<DraftTab/>}{tab==="roles"&&<RoleTab/>}{tab==="meta"&&<MetaTab/>}{tab==="player"&&<PlayerTab/>}{tab==="changelog"&&<ChangelogTab/>}
</div></div>}

import { useState } from "react";

const C={bg:"#0a0b0f",panel:"#12141c",ph:"#181b26",accent:"#e63946",gold:"#f4a825",blue:"#4cc9f0",purple:"#9b5de5",green:"#06d6a0",text:"#e8e8e8",dim:"#8892a4",muted:"#555e70",border:"#1e2233",tank:"#3a86a8",dps:"#e63946",heal:"#06d6a0",sec:"#0e1018"};
const F={xs:"15px",sm:"16px",md:"18px",lg:"22px",xl:"28px",xxl:"34px",h1:"40px",pad:"24px",padL:"30px",gap:"16px",rad:"14px"};

const STATS={
Ayden:{ign:"VeloxG",rank:"Dia 3",rs:4288,wr:"55%",rec:"36W 29L",r20:"45%",r20r:"9W 11L",
heroes:[{h:"Jeff",w:"57.9%",g:19,k:"10.86",l:"22/4.5/27.2"},{h:"Emma Frost",w:"50%",g:16,k:"4.14",l:"17.6/5.1/3.4"},{h:"Punisher",w:"66.7%",g:12,k:"3.89",l:"19.8/5.1/0"},{h:"Mr. Fantastic",w:"50%",g:12,k:"6.09",l:"17.7/3.6/4.2"},{h:"Venom",w:"50%",g:2,k:"2.45",l:"10/5.5/3.5"}],
extra:"Alt (The Mom Porker): Plat 3, 87% WR, 13W 2L. White Fox 100% WR 3g 51.0 KDA. Emma 100% 5g 8.47 KDA. Venom 75% 4g.",
note:"The most versatile player. Can play every role competently. White Fox progress on alt is months ahead of expectation. Jeff at 10.86 KDA across 19 games = strongest healer stats on the entire roster. The gap between alt performance (87% WR) and main (45% recent) is almost certainly a team composition issue in solo queue, not individual skill.",
url:"https://rivalsmeta.com/player/33050531"},
Begin:{ign:"Begooon",rank:"GM3",rs:4544,wr:"62%",rec:"18W 11L",r20:"35%",r20r:"7W 13L",
heroes:[{h:"Thor",w:"70%",g:20,k:"4.23",l:"22.1/6/3.3"},{h:"Dr. Strange",w:"44.4%",g:9,k:"3.66",l:"23.1/6.6/0.9"}],
extra:"Second account (Begoooon): GM1, 4,724 RS, 73% WR, 66W 25L. Thor 66.7% 33g, Strange 69.2% 26g, Magneto 75% 12g, Groot 77.8% 9g, Magik 100% 9g 5.10 KDA. Combined data shows mastery across multiple tanks at the highest level.",
note:"Highest-ranked player across all accounts. GM1 on second account proves the ceiling. Main account recent 20 at 35% WR is concerning — but second account at 80% recent 20 suggests the main account slump is lobbies or team composition issues, not skill degradation.",
url:"https://rivalsmeta.com/player/1347122425"},
Gabe:{ign:"froglin_",rank:"Dia 3",rs:4216,wr:"54%",rec:"33W 28L",r20:"20%",r20r:"4W 16L",
heroes:[{h:"Dr. Strange",w:"57.7%",g:26,k:"3.96",l:"21.2/6/2.5"},{h:"Ultron",w:"58.3%",g:12,k:"8.75",l:"19/5.4/28.4"},{h:"Thing",w:"45.5%",g:11,k:"5.35",l:"22.2/5.7/8.5"},{h:"Magneto",w:"71.4%",g:7,k:"5.14",l:"16.1/4.1/5.1"},{h:"Star-Lord",w:"0%",g:2,k:"1.44",l:"13/9/0"}],
extra:"Alt (nega.froglin): Plat 3, 42% WR, 5W 7L. Magneto 50% 6g. Strange 20% 5g on alt — his Strange struggles at lower elo too, suggesting fundamentals may be the issue not just lobbies. NEW: Strange 10.75 KDA WIN (38/4/5) on Tokyo 2099 = best comp game on the entire roster this review cycle. Also Cap America 0% 1g LOSS, Emma 100% 1g 8.00 KDA in comp. Season hero table now includes Loki 0% 1g and Cap 0% 1g.",
note:"The 10.75 KDA Strange game (38/4/5 on Tokyo 2099) is a STATEMENT. That is elite-level performance at Diamond — proof that Gabe's ceiling on Strange is genuinely high. But the very next game was Strange at 1.36 KDA (9/11/6 LOSS). This is the Gabe paradox: the ceiling is GM-level, the floor is catastrophic, and the team needs consistency. The 20% R20 is still the most alarming stat on the roster but the trend is no longer pure freefall — he's finding wins between the losses. Magneto 71.4% remains untapped in tournament. Cap America at 0% comp WR confirms it's not viable. The path: Strange for maps where portals have value (Tokyo, Midtown), Magneto for everything else.",
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
Sam:{ign:"SAMBRI912",rank:"Plat 2",rs:4062,wr:"47%",rec:"29W 33L",r20:"30%",r20r:"6W 14L",
heroes:[{h:"Sue Storm",w:"44%",g:50,k:"5.92",l:"16.1/6.4/21.7"},{h:"Cloak & Dagger",w:"55.6%",g:9,k:"7.51",l:"18.6/7.9/40.7"},{h:"Rocket Raccoon",w:"66.7%",g:3,k:"4.29",l:"10/7/20"}],
extra:"Highest game count of any support player (50 Sue + 9 C&D + 3 Rocket = 62 support games). C&D 40.7 assists/game is enormous — proving high healing output even in losses. Also playing Strange (0% WR 4g) and Thing in recent matches — confirmed role confusion.",
note:"Sam is the most experienced support player by volume but the 44% Sue WR after 50 games is a ceiling indicator. When a hero isn't above 50% after that many games, the player has likely reached their skill ceiling on that hero at their current rank. The C&D at 55.6% with 40.7 assists per game suggests C&D should be the primary pick — the healing output is there even when the team loses.",
url:"https://rivalsmeta.com/player/1558596661"},
"T-Money":{ign:"xGhost-Emx",rank:"Plat 2",rs:4077,wr:"54%",rec:"27W 23L",r20:"50%",r20r:"10W 10L",
heroes:[{h:"Punisher",w:"62.5%",g:8,k:"2.21",l:"19.4/8.8/0"},{h:"Angela",w:"100%",g:5,k:"4.76",l:"17.2/4.2/2.8"},{h:"Magneto",w:"40%",g:5,k:"2.42",l:"13.4/6.6/2.6"},{h:"Moon Knight",w:"25%",g:4,k:"2.36",l:"14.8/6.3/0"},{h:"Peni Parker",w:"50%",g:4,k:"5.14",l:"18.5/5.5/9.8"}],
extra:"HUGE DISCOVERY: Playing WAY more heroes than originally listed. Angela 100% WR 5g 4.76 KDA. Peni Parker 50% 4g 5.14 KDA. Also playing: Hulk, Namor, Squirrel Girl, Loki, Thor, Wolverine, Deadpool (V), Thing, Invisible Woman. Vanguard role: 71% WR (7g). DPS role: 50% (10g). Strategist: 0% WR (3g). HE IS A BETTER TANK THAN DPS according to the data.",
note:"The original assessment was WRONG. T-Money is not primarily a DPS player — his Vanguard WR (71%) dramatically outperforms his Duelist WR (50%). Angela at 100% WR is a small sample but the 4.76 KDA is real. Magneto at 40% WR is a red flag — his supposed main tank is underperforming. Moon Knight at 25% WR confirms it's not a tournament pick. Strategist at 0% (3g) means support flex is confirmed impossible. The hero pool is much wider than reported — he just needs to focus on what actually wins.",
url:"https://rivalsmeta.com/player/88489080"},
Tristen:{ign:"keetoh1337 / potsmoker34",rank:"Dia 2-3",rs:4274,wr:"73%",rec:"32W 12L (alt)",r20:"25%",r20r:"5W 15L (main)",
heroes:[{h:"Spider-Man",w:"78.6%",g:28,k:"2.61",l:"17.8/8.1/3.4"},{h:"Iron Man",w:"63.6%",g:11,k:"3.13",l:"21.7/7/0.2"},{h:"Hela",w:"100%",g:1,k:"3.88",l:"30/8/1"},{h:"Psylocke",w:"0%",g:2,k:"3.18",l:"26.5/8.5/0.5"},{h:"Luna Snow",w:"0%",g:1,k:"1.40",l:"1/5/6"}],
extra:"Spider-Man is elite: 78.6% WR across 28 games on alt. Multiple MVP games. Iron Man has 63.6% WR but drops catastrophically in tournament play (0W 4L) and now 0% in R20 (0W 5L). Psylocke recent comp: 0% WR 2g — the hero isn't translating at Diamond. Also played Invisible Woman (8.67 KDA comp WIN, previously 4.22 KDA) and Luna Snow in tournament (5.00 KDA in the only win). R20 Duelist role: 19% (3W 13L). R20 Strategist role: 50% (2W 2L). His support flex is literally outperforming his DPS right now.",
note:"R20 FREEFALL: 50% → 25% (5W 15L). Spider-Man R20 dropped to 22% (2W 7L). Iron Man R20 is 0% (0W 5L) — the hero is DEAD in comp, not just tournament. The Invisible Woman 8.67 KDA comp WIN confirms his support flex is real and getting stronger. His R20 Strategist WR (50%) is more than double his Duelist WR (19%). The data is screaming: Tristen's highest-value role right now might be support, not DPS. Spider-Man remains elite at 78.6% season but the recent collapse needs diagnosis — is he being target-banned, or has the meta shifted around him?",
url:"https://rivalsmeta.com/player/1340539275"},
Zach:{ign:"Rothmaxing",rank:"Plat 3",rs:3943,wr:"58%",rec:"11W 8L",r20:"35%",r20r:"7W 13L",
heroes:[{h:"Thor",w:"83.3%",g:6,k:"4.48",l:"16.2/4.2/2.5"},{h:"Deadpool (V)",w:"75%",g:4,k:"5.37",l:"20.5/4.8/5"},{h:"Thing",w:"25%",g:4,k:"3.14",l:"18.5/9/9.8"},{h:"Ultron",w:"100%",g:1,k:"51.0",l:"21/1/30"}],
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
ourComp:"POKE: Begin Groot + Gabe Magneto + Tristen Hela + Jace Daredevil + Ayden Rocket + Sam C&D. Tournament showed: Iron Man and Thing failed here (0.20 and 1.25 KDA). Don't repeat that."},
{name:"Arakko",mode:"Convoy",aka:"Hellfire Gala",best:"Brawl",bans:"Venom, Gambit, Thor",picks:"Thor, Psylocke, Wolverine, Magik",
why:"YOUR WORST MAP (0:2 and 0:3 in tournament). Tight corridors, elevated catwalks, and close-quarters engagements. The payload path winds through narrow passages where long-range heroes lose value. Brawl heroes thrive because engagement distances are short. Iron Man and Strange are liabilities here — no room to kite or use portals effectively.",
tips:"Payload start: Thor should control the high catwalk above the payload — his AoE lightning cleaves groups in the tight space below. Psylocke flanks through the side room to backstab healers. Mid-section: Wolverine excels in the winding corridors where he can chase without being kited. Point 2: The open arena section briefly favors poke — have Hela ready as a map-section swap. Final stretch: The narrow bridge is THE brawl zone — whoever wins the brawl here wins the map. All-in with ults.",
ourComp:"BRAWL: Begin Thor + Ayden Emma + Tristen Psylocke + Zach Wolverine + Sam Sue + Raquel C&D. DO NOT run Iron Man or Strange on this map — tournament proved it."},
{name:"Spider-Islands",mode:"Convoy",aka:"Tokyo 2099",best:"Poke / Hybrid",bans:"Magneto, Groot, Spider-Man",picks:"Hela, Spider-Man, Iron Man, Daredevil",
why:"Multi-level urban environment with rooftops and vertical play. The payload path alternates between open streets (poke-favored) and enclosed sections (brawl/dive-favored). Spider-Man's web-swing is uniquely strong because the tall buildings provide constant swing points. Mixed sightlines mean hybrid comps that can flex between range and aggression excel.",
tips:"Opening section: Wide street favors poke. Hela on rooftops, Daredevil tracking enemy positions. Spider-Man should NOT dive during this section — play ranged poke. Mid-section: The enclosed underpass is where dive activates. Venom/Magik portal into the underpass where ranged heroes can't escape. Final section: Back to open streets. Groot wall blocks the final push corridor. Iron Man can fly above the final checkpoint for aerial damage but is VERY exposed to hitscan.",
ourComp:"HYBRID Poke/Dive: Begin Groot + Gabe Magneto + Tristen Spider-Man + Jace Daredevil + Ayden Rocket + Sam C&D. Spider-Man plays poke-phase on rooftops, then dives enclosed sections."},
{name:"Yggdrasill Path",mode:"Convoy",aka:"Yggsgard",best:"Poke / Anti-Dive",bans:"Magneto, C&D, Groot",picks:"Groot, Hela, Hawkeye, Daredevil",
why:"Long escort with open sightlines and elevated tree-branch platforms. Ranged DPS dominates the open stretches. The team lost 1:3 here running brawl heroes (Moon Knight 17 deaths, Emma 15 deaths) — melee heroes get shredded on this map. Groot wall is premium because the pathway is narrow.",
tips:"Start: The Bifrost bridge section is pure poke territory. Hela and Hawkeye on the elevated platforms have unobstructed angles. This is a 'win condition' position — whoever controls these platforms controls the fight. Mid: The tree interior section gets tighter — this is where dive teams try to engage. Groot wall at the tree entrance is critical. Moon Knight and melee flankers should NOT be here. Final: The open clearing before the final point is another poke zone. Daredevil tags from the tree canopy for wallhack info.",
ourComp:"POKE: Begin Groot + Gabe Magneto + Tristen Hela + Jace Daredevil + Ayden Rocket + Sam C&D. ABSOLUTELY DO NOT run Moon Knight, Emma, or melee DPS here — tournament proved it."},
{name:"Museum",mode:"Convoy",aka:"Museum of Contemplation",best:"Poke / Brawl Hybrid",bans:"Magneto, Gambit",picks:"Hela, Daredevil, Groot, Thor",
why:"Indoor/outdoor alternating map. Poke dominates the outdoor garden sections. Brawl takes over in the museum interior. A comp that can transition between both phases excels. The museum halls have destructible cover that changes geometry mid-fight.",
tips:"Garden section: Hela on the museum balcony overlooking the garden = dominant position. Daredevil in the side corridors for flank detection. Groot wall blocks the main entrance. Interior: Thor excels in the museum halls — his lightning AoE bounces off walls and hits targets around corners. Psylocke can flank through the exhibit rooms. Final room: The circular exhibition hall is a brawl arena. Wolverine and Thor dominate here.",
ourComp:"HYBRID: Begin Thor (brawl sections) or Groot (poke sections) — consider mid-match hero swap. Gabe Magneto + Tristen Hela (outdoor) / Psylocke (indoor) + Jace Daredevil + Ayden Rocket + Sam C&D."},
{name:"Krakoa",mode:"Domination",aka:"Hellfire Gala (Dom)",best:"Brawl",bans:"Magneto, Groot, Gambit",picks:"Thor, Wolverine, Psylocke, Venom",
why:"Tight domination point surrounded by close-quarters corridors. The point is small enough that AoE abilities hit everyone. Mobile heroes contest from multiple angles. Poke is weak because sightlines are short.",
tips:"Point center: Thor's AoE lightning is devastating on the small point. Diamond Form Emma can contest through damage reduction. Off-point flank: Psylocke and Wolverine lurk in the side tunnels to backstab healers rotating to point. High ground: The elevated platform above the point gives ranged heroes brief sightlines — useful for Hela to poke before the fight reaches the point, but she must reposition once the brawl starts. Venom can swing from the ceiling structures to initiate onto the point from unexpected angles.",
ourComp:"BRAWL: Begin Thor + Ayden Emma + Tristen Psylocke + Zach Wolverine + Sam Sue + Raquel C&D"},
{name:"Hell's Heaven",mode:"Domination",aka:"Hydra Charteris Base",best:"Dive / Brawl",bans:"Venom, Magneto, Spider-Man",picks:"Spider-Man, Magik, Psylocke, Venom",
why:"Multi-level point with extensive flanking routes above and below. Dive thrives because of the vertical engagement options. THIS IS WHERE THE TEAM GOT DESTROYED (0:2, everyone sub-0.5 KDA with Angela). The map punishes heroes without mobility — Angela, Thing, and Iron Man all failed catastrophically here.",
tips:"Upper level: Spider-Man and Magik own the catwalks above the point — they can drop onto the point from above for surprise engages. Venom swings between levels. Lower level: The tunnel system below the point allows flanking healers. Psylocke should use these tunnels exclusively. Point itself: The point is exposed from multiple angles — tanks need to use cover pillars, not stand in the open. Magneto's bubble protects the point holder. NEVER play Angela, Iron Man, or Thing on this map.",
ourComp:"DIVE: Ayden Venom + Begin Magik + Tristen Spider-Man + Zach Gambit + Sam C&D + 6th flex. If not dive: Begin Groot (wall on point) + Gabe Magneto (bubble)."},
{name:"Birnin T'Challa",mode:"Domination",aka:"Intergalactic Empire (Dom)",best:"Brawl / Hybrid",bans:"Magneto, C&D, Gambit",picks:"Thor, Wolverine, Gambit, Groot",
why:"Central point with surrounding high ground and water feature. Brawl comps control the point while ranged heroes pressure from elevated positions. Multiple tournament losses here (0:3, 1:2) — the team needs a clear plan for this map.",
tips:"Point: Thor and Wolverine contest directly. The point's water feature provides slight cover — use it. High ground left: Hela or Daredevil on the elevated platform has clear sightlines to the point AND the enemy spawn route. High ground right: Flankers use this to approach the enemy healer rotation. Spawn corridor: Spider-Man can set up aggressive web-trap positions in the corridor between enemy spawn and point — catching rotations before they arrive. Gambit ult from high ground onto the point is devastating.",
ourComp:"BRAWL: Begin Thor + Gabe Magneto + Tristen Hela (high ground) + Zach Wolverine (point) + Ayden Gambit + Sam C&D."},
{name:"Celestial Husk",mode:"Domination",aka:"Klyntar (Dom)",best:"Dive / Brawl",bans:"Venom, Gambit, Magik",picks:"Spider-Man, Magik, Wolverine, Thor",
why:"YOUR BEST MAP — the only tournament win was here (Klyntar 2:0). Enclosed arena that favors mobile heroes and close-quarters team fighting. The symbiote aesthetic isn't just visual — the organic walls create unusual angles and soft cover.",
tips:"Point: The enclosed arena has organic pillars that break sightlines — use them. Thor can hammer from behind pillars and re-engage. Side chambers: Magik portals from the side chambers directly onto the point for surprise engages. Spider-Man web-swings from the ceiling tendrils. Spawn area: The elevated spawn platform gives ranged heroes brief poke angles — Hela can open fights from here before repositioning. REPLICATE THE WINNING COMP: Begin Thor + Tristen Luna Snow healer. This worked. Don't change what worked.",
ourComp:"THE WINNING COMP: Begin Thor + Gabe Strange + Tristen Luna Snow + [Ayden/Zach TBD from original win] + Raquel C&D. If not replicating: DIVE with Ayden Venom + Begin Magik + Tristen Spider-Man."},
{name:"Symbiotic Surface",mode:"Convergence",aka:"Klyntar (Conv)",best:"Dive",bans:"Venom, Groot, Spider-Man",picks:"Spider-Man, Magik, Venom, Wolverine",
why:"Open convergence point then escort. The convergence phase is chaotic — mobile heroes collapse onto the point fastest. Dive excels because the initial capture is a race and dive heroes win races.",
tips:"Convergence phase: Venom and Spider-Man reach the point first due to mobility. Magik portals the team forward for instant contest. This is a 'first to arrive wins' scenario. Escort phase: The symbiote surface terrain has organic barriers — Groot wall adds to them for total corridor blockage. Daredevil's wallhack is valuable in the organic tunnels where visibility is limited. Final section: The open Celestial area briefly favors poke before returning to close quarters.",
ourComp:"DIVE: Ayden Venom + Begin Magik + Tristen Spider-Man + Zach Gambit + Sam C&D + Raquel bench/WF."},
{name:"Heart of Heaven",mode:"Convergence",aka:"K'un-Lun",best:"Poke / Anti-Dive",bans:"Magneto, C&D, Groot",picks:"Groot, Hela, Daredevil, Hawkeye",
why:"Elevation-heavy map with temples and platforms. Ranged heroes with high ground control dominate. Groot wall is extremely strong at the temple chokepoints. The convergence point is elevated — heroes who can fly or swing have faster access.",
tips:"Convergence point: The temple platform is elevated — Spider-Man, Iron Man, and flying heroes reach it fastest. Groot wall on the temple stairs blocks ground-level rushes. Temple interior: Tight spaces inside the temple favor brawl briefly — Thor and Wolverine excel in these moments. Escort phase: The mountain path has steep drops — knockback abilities (Thor hammer, Groot root) can environmental-kill here. Hela on the pagoda rooftops has dominant sightlines down the entire mountain path.",
ourComp:"POKE: Begin Groot + Gabe Magneto + Tristen Hela + Jace Daredevil + Ayden Rocket + Sam C&D."},
{name:"Shin-Shibuya",mode:"Convergence",aka:"Tokyo 2099 (Conv)",best:"Dive / Brawl",bans:"Venom, Spider-Man, Magik",picks:"Magik, Psylocke, Thor, Spider-Man",
why:"Returned to comp pool in S7. Fully vertical urban map with tight alleyways, neon-lit streets, and dramatic elevation changes. High ground control is CRITICAL — whoever owns the rooftops controls the fight. Close-quarters alley fights favor dive and brawl heroes.",
tips:"Convergence point: Street-level point with buildings on all sides. Spider-Man and Magik dive from rooftops. Venom swings between buildings. The point is overlooked by balconies — Hela can poke from above but must relocate constantly. Alleyways: Psylocke and Wolverine own the tight alleys. These are death traps for slow heroes. DO NOT play Groot here — his wall gets bypassed by vertical movement. Rooftops: Iron Man and Spider-Man contest rooftop control. Whoever wins the rooftop fight wins the sightline advantage for the entire team.",
ourComp:"DIVE: Ayden Venom + Begin Magik + Tristen Spider-Man + Zach Gambit + Sam C&D + 6th flex."},
{name:"Hall of Djalia",mode:"Convergence",aka:"Intergalactic Empire (Conv)",best:"Hybrid Poke/Dive",bans:"Magneto, Venom, C&D",picks:"Groot, Spider-Man, Hela, Daredevil",
why:"Large convergence map with both long sightlines AND flanking routes. Hybrid comps excel because the map geometry supports both poke and dive simultaneously. The main hall is open (poke), while the side chambers create dive opportunities.",
tips:"Main hall: Long sightlines favor Hela and Daredevil. Groot wall blocks the central corridor. Magneto bubble protects the poke line. Side chambers: Spider-Man and Magik use these for flanking dives onto the enemy backline. The chambers have elevated platforms — vertical dive entry is possible. Convergence point: The Wakandan throne area is a circular room with moderate cover — brawl can work here briefly. Escort section: Opens back up to long sightlines — transition back to poke. Daredevil's wallhack tracks which side chamber enemies are using.",
ourComp:"HYBRID: Begin Groot + Gabe Magneto + Tristen Spider-Man (dive flanks) + Jace Daredevil (info) + Ayden Rocket + Sam C&D."},
{name:"Central Park",mode:"Convergence",aka:"Empire Eternal Night (Conv)",best:"Poke",bans:"Magneto, Groot, C&D",picks:"Hela, Daredevil, Groot, Hawkeye",
why:"Open park setting with trees providing soft cover but generally long sightlines. The convergence point is in the open — ranged heroes dominate. Dive is risky because there's limited hard cover to escape to after engaging.",
tips:"Convergence point: The open park clearing = poke paradise. Hela from the monument pedestal has 360° sightlines. Groot wall in the center creates artificial cover for your team. Park perimeter: Daredevil plays the tree line for wallhack info on enemies trying to flank through the park edges. Spider-Man CAN work here — swinging between trees for hit-and-run, but he's exposed mid-swing. Escort section: The path narrows near the buildings — this is where brawl/dive teams try to force engagement. Magneto bubble at the choke is critical.",
ourComp:"POKE: Begin Groot + Gabe Magneto + Tristen Hela + Jace Daredevil + Ayden Rocket + Sam C&D."},
{name:"Lower Manhattan",mode:"Convergence",aka:"NEW — Added April 3",best:"TBD",bans:"Default meta bans",picks:"TBD — needs scouting",
why:"Newest map. High verticality with Kingpin lore elements. Convergence mode. Not enough competitive data exists yet for definitive meta analysis. The team MUST practice this map in scrims before encountering it in tournament — being unprepared on a new map is an automatic disadvantage.",
tips:"Based on early reports: vertical map with rooftop control being critical (similar to Shin-Shibuya). Spider-Man and Magik likely excel. Expect dive-favored geometry based on the building density. Groot wall may be strong at street-level chokepoints. SCOUT THIS MAP: Run 5+ scrim games here before tournament to develop positioning knowledge.",
ourComp:"Default to POKE until map meta develops. Then adjust based on scrim results."},
];

const COMPS=[
{name:"POKE A",tag:"Double Shield",color:C.blue,desc:"Primary poke composition. Groot wall + Magneto shield = fortress. S7's 20% ult nerf stretches neutral phases to 50+ seconds, which means base kit value matters enormously. Groot and Magneto both provide massive neutral-phase value without needing ults. Ranged DPS shreds from behind the double barrier.",
lineup:[{p:"Begin",h:"Groot",r:"tank",n:"Wall control. Planet X Pals w/ Rocket. 77.8% WR on second account."},{p:"Gabe",h:"Magneto",r:"tank",n:"71.4% WR. Metal Bulwark. MUST be default tournament pick."},{p:"Tristen",h:"Hela",r:"dps",n:"Primary ranged hitscan. Goddess of Death ult = 10s aerial AoE."},{p:"Jace",h:"Daredevil",r:"dps",n:"72% WR 25g 4.32 KDA. Wallhack = permanent team info. Bestial Hunt w/ Punisher."},{p:"Ayden",h:"Rocket",r:"heal",n:"Planet X Pals w/ Groot."},{p:"Sam",h:"C&D",r:"heal",n:"55.6% WR. Primary healer."}],tu:["Planet X Pals (Groot+Rocket)","Explosive Entanglement (Mag+Gambit — flex)"],alt:"Groot banned: Begin Thor. Mag banned: Gabe Strange (57.7%). Jace unavailable: Zach Daredevil backup."},
{name:"POKE B",tag:"1-2-3 Triple Heal",color:C.blue,desc:"Triple-support poke. The 1-2-3 format (1 Tank, 2 DPS, 3 Strategists) remains dominant at Diamond+ even after the ult nerf. The raw healing throughput between ults is still better than 2-2-2 in most scenarios. Longer neutral phases mean more time where consistent healing matters.",
lineup:[{p:"Begin",h:"Groot",r:"tank",n:"Solo tank anchor. Wall control sustains poke without needing a second tank."},{p:"Tristen",h:"Hela",r:"dps",n:"Primary poke DPS."},{p:"Jace",h:"Daredevil",r:"dps",n:"72% WR. Primary info DPS. Frees Zach for flex/sub."},{p:"Ayden",h:"Jeff",r:"heal",n:"57.9% WR, 10.86 KDA — best healer stats on roster."},{p:"Sam",h:"C&D",r:"heal",n:"55.6% WR."},{p:"Raquel",h:"White Fox",r:"heal",n:"IF ready. Kumiho w/ Luna if available. Otherwise Raquel on C&D, Sam on Rocket."}],tu:["Planet X Pals (Groot+Jeff if applicable)"],alt:"Raquel not ready on WF: Raquel C&D + Sam Rocket for Planet X Pals."},
{name:"BRAWL A",tag:"Thor Rush",color:C.accent,desc:"Begin's Thor (70% WR main, 66.7% second acct across 33g) is the team's most proven hero. Thor excels in close-range fights where his AoE hammer and lightning chain hit multiple targets. Emma's Diamond Form adds a second melee threat. The comp needs tight coordination on engage timing — tournament showed brawl failing when players go in at different times.",
lineup:[{p:"Begin",h:"Thor",r:"tank",n:"70% WR. Primary engage and brawl anchor."},{p:"Ayden",h:"Emma Frost",r:"tank",n:"50% WR main. Diamond Form for close-range. NOTE: Emma is C-tier in S7 — use only when brawl is clearly correct."},{p:"Tristen",h:"Psylocke",r:"dps",n:"Melee flanker. Backstabs during frontline engage."},{p:"Zach",h:"Wolverine",r:"dps",n:"S-tier sustained melee DPS."},{p:"Sam",h:"Sue Storm",r:"heal",n:"50g experience. Shields protect the push."},{p:"Raquel",h:"C&D",r:"heal",n:"Must position BEHIND the brawl, not in it."}],tu:["Chilling Assault (Luna+Emma — requires swap)"],alt:"Zach to Gambit heals for 1-2-3. Gabe subs for Ayden on Magneto. Jace Blade can replace Zach/Tristen for self-sustaining melee DPS."},
{name:"BRAWL B",tag:"Rogue Drain",color:C.accent,desc:"Rogue's ult drain is the most underrated ability in S7. With ults taking 50+ seconds to charge, stealing that charge is devastating — the enemy effectively loses minutes of progress. Gambit's Explosive Entanglement team-up amplifies Rogue further. This comp wins by making the enemy's ult economy miserable.",
lineup:[{p:"Gabe",h:"Rogue",r:"tank",n:"Ult drain punishes slow S7 ult charge."},{p:"Begin",h:"Thor",r:"tank",n:"70% WR. Brawl monster."},{p:"Tristen",h:"Psylocke",r:"dps",n:"Melee flanker."},{p:"Zach",h:"Wolverine",r:"dps",n:"Sustained melee."},{p:"Ayden",h:"Gambit",r:"heal",n:"Explosive Entanglement w/ Rogue."},{p:"Sam",h:"C&D",r:"heal",n:"Primary healer."}],tu:["Explosive Entanglement (Gambit+Rogue)"],alt:"Rogue banned: Gabe Magneto. Sub Raquel for Sam if C&D form recovers."},
{name:"DIVE A",tag:"Magik Core",color:C.purple,desc:"Begin's Magik (100% WR, 9g, 5.10 KDA on second account) combined with Ayden's Venom creates the highest-ceiling comp on the roster. S7 buffed dive by slowing defensive ults — enemies can't use healing ults as often to survive dives. Requires the highest coordination. Every player must collapse simultaneously or the dive fails — tournament Spider-Man at 0W 3L with 15 deaths/game proves dive without follow-up is suicide.",
lineup:[{p:"Ayden",h:"Venom",r:"tank",n:"ONLY dive tank. +150 HP Symbiote Shenanigans."},{p:"Begin",h:"Magik",r:"dps",n:"S-tier dive DPS. Portal pressure. 100% WR 9g on second acct."},{p:"Tristen",h:"Spider-Man",r:"dps",n:"78.6% WR on alt. Dive mobility king. MUST dive WITH Venom, not solo."},{p:"Zach",h:"Gambit",r:"heal",n:"8.50 KDA MVP recent. AoE heals."},{p:"Sam",h:"C&D",r:"heal",n:"Teleport for aggressive positioning."},{p:"T-Money",h:"Peni Parker",r:"tank",n:"50% WR 4g 5.14 KDA. Second tank for 2-2-2 variant if needed."}],tu:["Symbiote Shenanigans (Venom+Jeff/Hela)"],alt:"Venom banned: Dive is dead. Swap to Poke/Brawl. Jace Blade can sub for Zach (lifesteal = self-sustaining dive DPS)."},
{name:"DIVE B",tag:"Triple Heal Dive",color:C.purple,desc:"1-2-3 dive variant. The insight from tournament: Tristen's best game was on Luna Snow healer (5.00 KDA in the only win). Having a DPS player flex to support can unlock comps that a traditional role-locked roster can't run. This comp uses Tristen's Luna Snow flex with Ayden's Venom and Begin's Magik.",
lineup:[{p:"Ayden",h:"Venom",r:"tank",n:"Dive initiator."},{p:"Begin",h:"Magik",r:"dps",n:"Primary dive assassin."},{p:"Zach",h:"Wolverine",r:"dps",n:"Follow-up dive DPS."},{p:"Tristen",h:"Luna Snow",r:"heal",n:"Tournament-proven: 5.00 KDA in the only win. Kumiho team-up if WF available."},{p:"Sam",h:"C&D",r:"heal",n:"Teleport."},{p:"Ayden",h:"—",r:"note",n:"PROBLEM: Ayden is on Venom. Need Raquel or T-Money to fill 6th. Raquel C&D or T-Money on Peni backup tank."}],tu:["Blessing of Kumiho (WF+Luna — future)"],alt:"Raquel C&D as 6th. Or T-Money Peni Parker as 2nd tank for 2-2-2."},
{name:"ANTI-DIVE A",tag:"Groot Fortress",color:C.green,desc:"Designed to punish enemy dive attempts. Groot walls physically block dive lanes. Daredevil spots flankers through walls before they reach the backline. Rogue drains the ult charge divers desperately need. Every enemy who dives into this comp loses their engage AND their ult progress.",
lineup:[{p:"Gabe",h:"Rogue",r:"tank",n:"Ult drain devastates divers who commit resources."},{p:"Begin",h:"Groot",r:"tank",n:"Walls block dive lanes. Planet X Pals."},{p:"Tristen",h:"Hela",r:"dps",n:"Punishes from range. Divers eat damage the entire approach."},{p:"Jace",h:"Daredevil",r:"dps",n:"72% WR. Wall-hack spots dives before they happen."},{p:"Ayden",h:"Gambit",r:"heal",n:"Explosive Entanglement w/ Rogue."},{p:"Sam",h:"Rocket",r:"heal",n:"66.7% WR. Planet X Pals w/ Groot."}],tu:["Explosive Entanglement (Gambit+Rogue)","Planet X Pals (Groot+Rocket)"],alt:"Groot banned: Begin Thor. Rogue banned: Gabe Magneto."},
{name:"ANTI-DIVE B",tag:"Shield Stack",color:C.green,desc:"Double-shield defensive comp. Magneto bubble + Strange portal repositioning = the most survivable backline possible. When the enemy dives, Strange portals the team to safety, Magneto shields the landing, and the ranged DPS shreds the overextended divers.",
lineup:[{p:"Gabe",h:"Magneto",r:"tank",n:"71.4% WR. Metal Bulwark."},{p:"Begin",h:"Dr. Strange",r:"tank",n:"Portal repositions punish overcommitted divers. 69.2% WR on second acct."},{p:"Tristen",h:"Hela",r:"dps",n:"Ranged damage from safety."},{p:"Jace",h:"Daredevil",r:"dps",n:"72% WR. Info tracking. Bestial Hunt w/ Punisher."},{p:"Ayden",h:"Jeff",r:"heal",n:"57.9% WR, 10.86 KDA. Best healer stats."},{p:"Sam",h:"C&D",r:"heal",n:"Primary healer."}],tu:["Arcane Order (Strange+Magik+SW — partial)"],alt:"Raquel C&D if form recovers, Sam to Rocket."},
{name:"HYBRID: Poke/Dive",tag:"Flex Engage",color:C.gold,desc:"The most adaptable comp. Poke from range to build damage advantage, then Spider-Man dives the weakened target. The key insight: you don't have to commit to dive OR poke for the entire match. This comp plays poke for 80% of the fight and dives for the killing blow. Daredevil's wallhack identifies the low-health target for Spider-Man to finish.",
lineup:[{p:"Begin",h:"Groot",r:"tank",n:"Wall control for poke phase."},{p:"Gabe",h:"Magneto",r:"tank",n:"Shield during poke. Can flex to aggressive positioning for dive phase."},{p:"Tristen",h:"Spider-Man",r:"dps",n:"78.6% WR. Pokes from rooftops, dives when target is low."},{p:"Jace",h:"Daredevil",r:"dps",n:"72% WR. Wall-hack IDs dive targets. Info bridges poke and dive."},{p:"Ayden",h:"Rocket",r:"heal",n:"Planet X Pals w/ Groot."},{p:"Sam",h:"C&D",r:"heal",n:"Teleport repositions for dive follow-up."}],tu:["Planet X Pals (Groot+Rocket)"],alt:"Tristen to Hela for more consistent poke if Spider-Man dives aren't converting."},
{name:"HYBRID: Poke/Brawl",tag:"Range to Rush",color:C.gold,desc:"Poke to soften, then Thor rushes in when enemies are low. This is actually how Begin's Thor SHOULD play — he has 70% WR because he picks his moments. Thor's hammer throw pokes at range, then he commits with the leap when targets are softened. The comp supports this playstyle by having poke heroes weaken the enemy before Thor engages.",
lineup:[{p:"Begin",h:"Thor",r:"tank",n:"70% WR. Pokes w/ lightning, hammer engages when enemies are low."},{p:"Gabe",h:"Magneto",r:"tank",n:"Shield during poke phase. Push forward for brawl."},{p:"Tristen",h:"Hela",r:"dps",n:"Ranged poke damage softens targets for Thor's engage."},{p:"Zach",h:"Wolverine",r:"dps",n:"Waits for poke to soften, dives for cleanup with Thor."},{p:"Ayden",h:"Gambit",r:"heal",n:"AoE heals for brawl phase. Explosive Entanglement w/ Mag."},{p:"Sam",h:"C&D",r:"heal",n:"Primary heals."}],tu:["Explosive Entanglement (Gambit+Magneto)"],alt:"Jace on Daredevil for more poke (swap Zach out). Jace Blade for melee maps. T-Money tank sub."},
];

const LEARNS=[
{h:"White Fox",p:"CRITICAL",r:"S-tier S7 Strategist. Ayden 100% WR on alt (51.0 KDA). Raquel 67% QP. Both must get tournament-ready. Blessing of the Kumiho with Luna Snow adds free charm CC into poke lanes — the team-up is considered meta-defining at Diamond+ because it combines healing, damage, AND crowd control in a single ability activation. No other team-up offers that triple threat.",w:["Ayden","Raquel"]},
{h:"Expand Pool to 5+ Healers",p:"CRITICAL",r:"Raquel has 3 heroes with only C&D tournament-viable. One C&D ban = dead seat. Rocket Raccoon is fastest to learn (simple kit, strong damage, Planet X Pals team-up). Gambit is highest team-up value (Explosive Entanglement enables Rogue comp). Sue Storm is simplest mechanically. She needs AT MINIMUM 2 additions before tournament.",w:["Raquel"]},
{h:"Hawkeye",p:"HIGH",r:"S-tier poke DPS in S7. Zero hitscan snipers on roster — this is the biggest DPS gap. Hawkeye's charged headshots are instant kills at any range. In the slower S7 neutral phases, consistent long-range picks are more valuable than ever because teams can't cycle healing ults to undo the damage. Tristen's Hela fills part of this niche but Hawkeye has higher single-target burst.",w:["Tristen","T-Money"]},
{h:"Blade",p:"HIGH",r:"S-tier dive DPS. Self-sufficient with lifesteal. Blade of Khonshu team-up with Moon Knight (Tristen/T-Money play MK). The lifesteal means Blade doesn't need healer peel to survive — he sustains himself, freeing your supports to focus on tanks. In dive comps, this self-sufficiency is game-changing. Jace already playing at 33.3% 9g with MVP ceiling games (10.75, 7.50 KDA) — needs volume to stabilize.",w:["Tristen","Zach","Jace"]},
{h:"Jace: Stabilize Blade",p:"HIGH",r:"Blade at 33.3% WR 9g is high-variance — individual games hit 10.75 and 7.50 KDA MVPs but losses drag the average. S7 Blade buffs (lifesteal self-sustain) make him a legitimate dive DPS. Jace needs 20+ comp games to stabilize toward 50%+ WR. Blade is the secondary pick for maps where Daredevil poke isn't optimal (Hellfire Gala, Krakoa, Shin-Shibuya). Blade of Khonshu team-up with Moon Knight adds synergy.",w:["Jace"]},
{h:"Deadpool (V)",p:"MEDIUM",r:"Zach already playing at 75% WR (4g, 5.37 KDA). Officially add to roster. Deadpool Vanguard is one of the most flexible tanks in S7 — he can selfie for invulnerability, flex between roles mid-match, and his ult is impactful in any comp. The flexibility alone justifies the pick.",w:["Zach"]},
{h:"Venom",p:"MEDIUM",r:"Only Ayden plays dive tank. If Ayden is on heals (which he should be — he has the best healer stats), dive becomes impossible. Begin or Zach learning Venom enables comps where Ayden can flex to Jeff/White Fox while someone else dives. Without a backup Venom, the dive archetype lives and dies on one player.",w:["Begin","Zach"]},
{h:"Groot",p:"MEDIUM",r:"S-tier anchor tank. Gabe needs a backup when Magneto is banned. Begin's Groot is 77.8% WR on second account — he can teach Gabe the fundamentals. Groot's wall is the most impactful single ability on poke maps (Midtown, Yggsgard, Central Park). Without Groot access, the poke comp loses its strongest tool.",w:["Gabe"]},
{h:"Gambit (Heals)",p:"MEDIUM",r:"Explosive Entanglement is the highest-value team-up on the roster because it enables Rogue (ult drain) and Magneto (shield) simultaneously. Sam needs this for team-up value. Zach already showing 8.50 KDA MVP games on Gambit.",w:["Sam","Zach"]},
{h:"Daredevil",p:"MEDIUM",r:"S-tier info DPS. Bestial Hunt team-up with Punisher (Tristen already plays Punisher). The wallhack passive is arguably the most underrated ability in the game — it gives your ENTIRE TEAM permanent information advantage. In tournament where teams actively try to surprise each other, knowing where the enemy is at all times is priceless. Jace is now the primary DD player (72% WR 25g) — this slot is filled. Tristen as backup.",w:["Tristen"]},
{h:"Peni Parker",p:"MEDIUM",r:"T-Money already playing at 50% WR 4g with 5.14 KDA — his HIGHEST KDA hero. Peni is a solid flex tank that pairs well in 2-2-2 comps. Her spider drone provides area control and her ult zones enemies. T-Money's data shows he performs well on her — add to his official tournament pool.",w:["T-Money"]},
{h:"Jace: Deadpool (S) Flex",p:"MEDIUM",r:"50% WR 6g with 5.50 KDA = genuine support flex potential from a DPS player. The same pattern that made Tristen's Luna Snow flex win the only tournament game. Jace on Deadpool (S) in emergency 1-2-3 comps frees a healer slot for someone with deeper support pools. Needs 15+ comp games to prove reliability.",w:["Jace"]},
{h:"Angela (T-Money only)",p:"LOW",r:"T-Money has Angela at 100% WR 5g with 4.76 KDA — by far his best performer. Angela is generally C-tier BUT in tight corridor maps (Hellfire Gala Convoy, Krakoa Dom) she can be niche effective. Small sample warning: 5 games is enough to note but not enough to build a strategy around. Keep playing her in comp to grow the sample.",w:["T-Money"]},
{h:"Invisible Woman",p:"LOW",r:"Tristen played Sue in comp (4.22 KDA on main, 8.67 KDA on alt). Emergency healer flex from a DPS player. Tournament proved Tristen CAN flex to support (Luna Snow 5.00 KDA in only win). Sue gives him a second support option with more defensive utility.",w:["Tristen"]},
];

const FB=[
{n:"Ayden",i:"🔧",v:"THE FLEX PLAYER",g:"A",
s:"Diamond 3 (4,288 RS). Jeff: 57.9% WR, 10.86 KDA across 19g — strongest healer stats on roster by a wide margin. Emma: 50% WR 16g. Punisher: 66.7% 12g. Mr. Fantastic: 6.09 KDA. Alt: 87% WR with White Fox at 100% WR 51.0 KDA. Can play every role.",
w:"Main recent 20: 45% — likely solo queue team issues. Venom only 2g at Diamond. White Fox not yet comp-tested on main account. The versatility can become a weakness if he's constantly being shuffled between roles without a defined primary identity.",
r:"Your identity should be: primary healer (Jeff/White Fox) with Venom as a strategic flex. Jeff at 10.86 KDA across 19 games makes you objectively the best healer on the roster. White Fox at 100% WR on alt proves the skill is there — get 30+ comp games on main ASAP. Venom reps at Diamond+ are critical because you're the only dive tank. The team should NOT be putting you on DPS (Punisher/Mr. Fantastic) in tournament — your healer stats are too valuable to waste on a DPS role that Tristen can fill."},
{n:"Begin",i:"⚡",v:"TEAM ANCHOR",g:"A-",
s:"GM3 main (4,544 RS). Second account: GM1 (4,724 RS, 73% WR). Thor 70% WR main, 66.7% across 33g on second account. Groot 77.8% 9g, Magneto 75% 12g, Magik 100% 9g on second account. The mechanical skill ceiling on this roster lives here — GM1 is the top 0.5% of the competitive player base.",
w:"Main account recent 20: 35% WR despite being GM3. Tournament: 1W 9L. Thor went 1W 4L in tournament — the team isn't enabling his engages. Strange at 44.4% comp WR on main is declining. Angela (0.29 KDA tournament) is confirmed dead pick. Even with GM-level mechanics, the team coordination gap is dragging performance down.",
r:"Thor is your weapon, but the tournament proved individual skill can't carry alone. The team needs pre-planned comps that SUPPORT your engages — when you leap in as Thor, the DPS and healers must follow within 1-2 seconds or you die alone. Drop Angela permanently. Your Magik (100% WR second account) should be the dive comp centerpiece but needs team practice. Push the team to run structured dive scrims with callouts. Consider learning ONE support (Rocket or C&D) — in the Klyntar win, Tristen flexed to Luna Snow and you got your best game. If YOU could also flex to support in emergencies, the team gains massive draft flexibility."},
{n:"Gabe",i:"🛡️",v:"ANCHOR TANK IN CRISIS",g:"A-",
s:"Diamond 3 (4,216 RS). Magneto 71.4% WR is elite. Strange 57.7% across 26g. Ultron heals 58.3%. The Magneto data proves high-level tank play IS in his toolkit.",
w:"20% last 20 WR — the most alarming stat on the entire roster. Tournament: 1W 9L playing 5 different heroes without committing to Magneto. MAG NEVER PLAYED IN TOURNAMENT. Thing 3 tourney games all losses. Cap America (C-tier). Emma (C-tier). Alt account: Strange at 20% WR confirms Strange may be carried by teammates on main, not individual mastery.",
r:"This is the most important coaching conversation on the roster: WHY DIDN'T YOU PLAY MAGNETO IN TOURNAMENT? If Magneto was banned every game — that's information the team needs to plan around. If it was a comp/draft issue — the team needs to restructure drafts around securing Magneto. If it was a personal comfort issue — you need to understand that 71.4% WR is your BEST hero by far and playing Thing at 45.5% instead is actively hurting the team. Your Strange at 20% on alt raises real questions about whether Strange is viable for you in tournament. The path forward: Magneto primary (always, unless banned). Learn Groot as backup. Consider Ultron heals as an emergency flex (4.71 KDA in tournament when forced onto it — your best non-Magneto tournament performance). Drop Thing, Cap, Star-Lord, Emma from all tournament consideration."},
{n:"Jace",i:"🎯",v:"DAREDEVIL SPECIALIST",g:"B+",
s:"Plat 1 (4,145 RS, peaked Diamond 3 at 4,201). Daredevil: 72% WR across 25g with 4.32 KDA — the strongest single-hero DPS data at volume on the entire roster. Recent 20 at 55% WR shows an upward trajectory. Blade has shown MVP ceiling games (10.75 KDA, 7.50 KDA). Deadpool (S) at 50% WR 6g 5.50 KDA indicates genuine support flex. Best maps: Hydra Charteris 83.3%, Empire Eternal Night 75%.",
w:"48% overall season WR — the recent climb hasn't offset the early losses yet. Blade at 33.3% across 9g is high-variance and not tournament-stable. Deadpool (V) at 22.2% across 9g confirms Vanguard is a dead role (26.67% role WR overall). Hero pool outside Daredevil is thin — most heroes have 1-2 game samples. Yggsgard 30% WR and Hellfire Gala 25% are disaster maps. The gap between his best (Daredevil 72%) and everything else is enormous.",
r:"You have one of the most valuable assets on the roster: a 72% Daredevil across 25 games. Daredevil is S-tier at Diamond+ — his wallhack gives the ENTIRE TEAM permanent information advantage, which in tournament play is priceless. Your tournament role is clear: Daredevil in every poke comp. This directly benefits the team because Zach was slotted into Daredevil but has no comp data on him — you fill this gap with PROVEN stats. Secondary path: Blade for dive/brawl maps. The 33.3% WR is misleading — your individual games show massive KDA spikes (10.75 MVP, 7.50 MVP) that suggest the losses are team-comp issues not individual skill issues. Blade's S7 buffs and lifesteal self-sustain make him a legitimate dive DPS. DO NOT play Deadpool (V) in tournament — 22.2% WR. Your Deadpool (S) at 5.50 KDA is intriguing as an emergency healer flex. The priority: master Daredevil (already done), stabilize Blade (get to 50%+ over 20g), and keep Deadpool (S) in the pocket for emergency support."},
{n:"Tristen",i:"🎯",v:"DPS CORE — VERIFIED",g:"B",
s:"Diamond 2-3 across accounts. Spider-Man: 78.6% WR across 28g — elite. Iron Man: 63.6% 11g. Hela: 100% 1g 3.88 KDA. Multiple MVP games on Spider-Man. Also capable of flexing to Luna Snow and Invisible Woman in support role.",
w:"Tournament: 1W 9L. Iron Man 0W 4L (KDA range 0.20-2.30). Spider-Man 0W 3L (averaged 12.3 deaths/game). Moon Knight 0W 1L (17 deaths). Psylocke 0% recent comp WR. The tournament data is brutal — his best game was on Luna Snow (5.00 KDA), not on any DPS hero. Iron Man collapses in organized play because tournament teams punish his flight predictability and lack of escape tools.",
r:"Spider-Man is your weapon — 78.6% comp WR doesn't lie. But tournament showed the team isn't enabling dive follow-up, which means Spider-Man dives into 1v6 and dies. Solution: (1) the team must practice coordinated dive timing — Venom CC → Magik portal → THEN you engage, not before. (2) DROP Iron Man from tournament entirely — 0W 4L is definitive. (3) Add Hawkeye for poke comps where Spider-Man dive isn't viable. (4) The Luna Snow flex is genuinely valuable — your 5.00 KDA in the only win proves you can heal at a competitive level. Keep Luna in the pocket for maps/comps where having 3 supports is correct."},
{n:"Zach",i:"🏗️",v:"THE WILD CARD",g:"B",
s:"Plat 3 (3,943 RS). Thor 83.3% WR (6g) — highest single-hero WR on the roster (min 5g). Deadpool (V) 75% 4g. Gambit 8.50 KDA MVP recently.",
w:"35% recent 20. Thing 25%. Mantis/Sue 0%. 18+ heroes experimented with but only Thor and Deadpool (V) are winning. Tournament data incomplete.",
r:"Thor 83.3% is remarkable — but Begin also plays Thor at 70%. In tournament, Begin should be on Thor and you should fill the flex role. Your tournament pool: Deadpool (V) and Magneto for tanks. Daredevil and Wolverine for DPS. Gambit and C&D for heals. That's 6 heroes. The Deadpool (V) at 75% is your unique weapon — nobody else on the roster plays it. Own that. DROP: Thing, Mantis, Sue, Bucky, Loki, Ultron, Mr. Fantastic. The experimentation phase needs to end and the mastery phase needs to begin."},
{n:"T-Money",i:"📈",v:"THE CLOSET VANGUARD",g:"B-",
s:"Plat 2 (4,077 RS, peaked Plat 1). 54% WR. HIDDEN WEAPON: Angela 100% WR 5g 4.76 KDA. Peni Parker 50% 4g 5.14 KDA. Vanguard role 71% WR (7g) dramatically outperforms DPS role (50%). Also playing: Hulk, Namor, Squirrel Girl, Loki, Thor, Wolverine, Deadpool (V), Thing. Much wider hero pool than originally reported.",
w:"Magneto 40% WR (5g) — his supposed main tank is underperforming. Moon Knight 25% WR (4g) — not a tournament pick. Strategist 0% WR (3g) — support role confirmed impossible. Playing too many heroes without depth on any. Punisher at 62.5% is decent but 8.8 deaths/game is concerning.",
r:"The data says you're a TANK player, not a DPS player. Your Vanguard WR (71%) vs DPS WR (50%) isn't close. Your tournament pool should be: Peni Parker (5.14 KDA), Magneto (needs improvement — play more), and Angela (100% WR small sample — keep growing it on tight corridor maps). For DPS: Punisher only (62.5% WR). DROP Moon Knight (25%), Squirrel Girl (niche), Namor (niche). Don't play support in tournament — 0% WR across 3 games. Focus tank: Peni → Magneto → Angela. Add Hawkeye for DPS if you want a second DPS option. The Angela stats are intriguing but 5 games is NOT enough to call it proven — get to 15+ games."},
{n:"Sam",i:"💊",v:"SUPPORT SPECIALIST",g:"C+",
s:"Plat 2 (4,062 RS). 50 comp Sue Storm games. C&D 55.6% WR 9g (40.7 assists/game — enormous healing output). Rocket 66.7% 3g. Highest total support game count on roster (62 games).",
w:"47% overall. Sue 44% after 50g — ceiling reached. Strange 0% WR 4g. Role confusion with tank experiments.",
r:"Make C&D your primary — the 55.6% WR with 40.7 assists/game proves you heal at an elite level on that hero. Sue at 44% after 50 games means you've hit the skill ceiling on Sue at your current rank. That's not failure — it's information. The information says: switch to C&D. Learn Gambit for Explosive Entanglement team-up value. The Strange experiments at 0% WR (4g) must stop immediately — you are a support player and every game you spend on Strange is a game you could be improving on Gambit or C&D."},
{n:"Raquel",i:"🚨",v:"CRITICAL LIABILITY",g:"C+",
s:"C&D 55.6% season WR (18g, 12.82 KDA, 29.8 assists/game). Learning White Fox (67% QP). The KDA and assist numbers prove the healing output is elite when the hero is working.",
w:"3 heroes total (C&D, Luna 0%, White Fox QP-only). C&D 18% last 20. Tournament 1W 8L on C&D with zero adaptation. Multiple 0-kill games. A player who drops from 55.6% to 18% WR without a hero change has encountered either a meta shift, a confidence spiral, or both.",
r:"The forensic analysis: your C&D at 12.82 KDA with 29.8 assists/game proves the HEALING OUTPUT is not the problem — you're dying too much. In your 55.6% WR games, you were likely dying ~3 times/game. In the recent 18% stretch, you're dying ~7+ times. That's a positioning/peel issue. Two hypotheses: (1) S7's dive meta means more enemies are targeting supports — you need to position further back than you did in S6, or (2) your team's composition isn't providing enough peel. The tournament data supports both — games where the team ran proper tanks (Klyntar win) you had 16.00 KDA. Games where the team was scrambled, you died 7-11 times. FIX: (1) Position 5-10m further from the fight than you currently do. (2) Learn to toggle to Dagger form when being dove — the damage can kill flankers. (3) EXPAND YOUR POOL — Rocket, Gambit, Sue. Not negotiable."},
];

const BANS={g:"S7: A ban→B ban→B lock→A lock→A ban→B ban→B lock→A lock→A ban→B ban. 3 bans + 2 locks each. 15s/phase. In BO3+, winner bans first next game. STRATEGY: Use first ban to remove enemy's best hero. Use first LOCK (phase 3-4) to protect YOUR critical hero. Use bans 2-3 to target enemy healer pool or one-tricks.",
b:[{h:"C&D",w:"Best healer. 4 of your players play it. If not running it, deny it."},{h:"Magneto",w:"Metal Bulwark dominates neutral phases. Top Diamond+ ban."},{h:"Gambit",w:"Ragin' Royal Flush = highest-impact ult even post-nerf."},{h:"Groot",w:"Wall control is premium in S7's longer neutrals."},{h:"Spider-Man",w:"Premier dive DPS. Ban if running anti-dive."},{h:"Venom",w:"THE dive tank. Ban to prevent dive entirely."}],
s:[{h:"Thor",w:"Begin's best. 70% WR. 66.7% across 33g on second acct."},{h:"Magneto",w:"Gabe's 71.4%. MUST ACTUALLY PLAY IN TOURNAMENT."},{h:"C&D",w:"Multiple pilots. Lock denies enemy AND secures your heals."},{h:"Venom",w:"Ayden's only dive tank option."},{h:"Groot",w:"Begin's second tank. 77.8% WR on second acct."},{h:"Daredevil",w:"Jace's 72% WR 25g. S-tier info DPS. Lock secures permanent wallhack advantage."}]};

const RULES=[{l:"Format",v:"Open Quals (BO1) → Closed Quals (BO1) → Double Elim (BO3→BO5→BO7)"},{l:"Bans",v:"3 bans + 2 locks each (6 banned, 4 locked)"},{l:"Roster",v:"6+ per Faction. Subs between maps OK."},{l:"Rank",v:"Platinum 3 minimum"},{l:"Maps",v:"14 maps + Lower Manhattan. 1st=random Dom. Loser picks next."},{l:"Reg",v:"March 28–April 11 (AMERICAS)"},{l:"Open",v:"April 11–12 | 7-11pm ET"},{l:"Closed",v:"April 18–19 | 7-11pm ET"},{l:"Elim",v:"April 25–May 10"},{l:"Prize",v:"$7K / $3.5K / $2.5K / $1.5K"}];

// ─── NEW: META TIER DATA (Diamond+ S7) ───
const META_TIERS={
vanguard:[
{tier:"S+",heroes:[
{h:"Groot",n:"S7's anchor king. Wall control is the single most impactful non-ult ability now that neutral phases stretch 50+ seconds. Blocks corridors, denies dive, scales with slower ult economy. Planet X Pals with Rocket adds team-up value."},
{h:"Deadpool (V)",n:"Most flexible tank in the game. Selfie for invulnerability, pistols shred backlines, Pool Party ult deletes teams. Answers every problem. S+ because versatility at the highest level is unmatched."},
{h:"Magneto",n:"Metal Bulwark remains the premier team-protection tool. Bubble shields your entire poke line during long S7 neutrals. Top 3 ban target at Diamond+. Gabe's 71.4% WR proves this is real."},
]},
{tier:"S",heroes:[
{h:"Rogue",n:"Ult drain is 20% more devastating in S7 — stolen charge is agonizingly slow to rebuild. Draining an enemy's ult removes 50+ seconds of their progress. Explosive Entanglement with Gambit amplifies. Anti-ult-economy specialist."},
{h:"Emma Frost",n:"Diamond Form brawling is powerful with 100-to-0 tank combo at high elo. S-tier WITH a team built around her, C-tier as solo tank. Sources disagree on placement — Mobalytics S-tier, others C-tier. Map/comp dependent."},
{h:"The Thing",n:"Gamma Charge team-up plus durability makes him a solid anchor. Damage reduction and CC are deceptively effective. Not flashy but consistent — and consistency matters in tournament."},
{h:"Moon Knight",n:"Flanking Vanguard. Mobility and kill threat on isolated targets is real. Gets PUNISHED in tournament when teams track flanks — your data shows 17 deaths in one game. Map-dependent."},
]},
{tier:"A",heroes:[
{h:"Thor",n:"Damage machine but provides zero team utility beyond kills. Begin's 70% WR proves he works. At highest level, Thor comps need extra support infrastructure because he offers no shields or walls."},
{h:"Hulk",n:"Massive S7 buffs. Stall potential on objectives is now elite. Strong on domination maps. Less valuable on convoy where positioning matters more than raw HP."},
{h:"Venom",n:"THE dive tank. Only Vanguard who truly initiates dives. Symbiote Shenanigans +150 HP. But Gambit's cleanse hard-counters Venom ult."},
{h:"Dr. Strange",n:"Portal and Eye of Agamotto remain two of the best abilities in the game. Shield of the Seraphim is largest in the game. Meta shifted away from him but still A-tier in right hands and map."},
{h:"Captain America",n:"Mobile off-tank. Can dive AND take hits. WR dropped at Diamond+ in S7. Effective below Diamond where all-around kit compensates for uncoordinated teams."},
]},
{tier:"B",heroes:[
{h:"Peni Parker",n:"Spider drone provides area denial, ult zones enemies. Solid flex tank in 2-2-2. T-Money's 5.14 KDA proves viability. Lacks raw impact of Groot wall or Magneto bubble. Backup, not primary."},
]},
],
duelist:[
{tier:"S+",heroes:[
{h:"Elsa Bloodstone",n:"Most impactful DPS when unbanned. Burst damage and self-sufficiency make her a terror. Ban-or-build-around at Diamond+."},
{h:"Phoenix",n:"Despite nerfs, resurrection mechanic is game-warping. Dying is a minor inconvenience. Lower damage post-nerf but passive alone keeps her S+."},
{h:"Psylocke",n:"S7 dive buff hit her hard. Slower defensive ults mean wider assassination windows. Melee burst combo deletes squishies. Scariest flanker on the map."},
{h:"Loki",n:"Value comes from copying S+ heroes. When Invisible Woman or Gambit is banned, Loki becomes them. Galaxy-brain draft flexibility — banning Loki limits your ability to ban other heroes."},
]},
{tier:"S",heroes:[
{h:"Winter Soldier",n:"Despite Assassin's Charge CD nerf (3s→6s), dominant hitscan threat. Burst headshots still instant kills. Nerf slowed engage frequency, didn't touch kill power."},
{h:"Star-Lord",n:"Consistent ranged DPS with strong mobility. Element Guns provide flexible damage. Aerial mobility makes him hard to pin. Solid in poke and hybrid comps."},
{h:"Namor",n:"Rose from D-tier. Turrets provide consistent zone damage, trident does respectable burst. Team-up with Hela. Turret playstyle scales with S7's longer neutral phases."},
{h:"Daredevil",n:"Wallhack passive gives ENTIRE TEAM permanent info advantage. In tournament, permanent vision is priceless. Combo damage respectable. Bestial Hunt team-up with Punisher."},
{h:"Moon Knight (D)",n:"S-tier flanker. Mobility and burst nightmare for isolated supports. Requires discipline — overextending punished in tournament. Map-dependent."},
]},
{tier:"A",heroes:[
{h:"Wolverine",n:"Sustained melee with self-healing. In S7's longer neutrals, sustain lets him outlast opponents. Excellent in brawl, weak on open poke maps."},
{h:"Hela",n:"Top-tier ranged hitscan. Goddess of Death ult = 10s aerial AoE. Aim-dependent: S-tier in skilled hands, B-tier otherwise. Team-ups with Namor and Venom."},
{h:"Spider-Man",n:"Elite dive DPS. 78.6% WR on Tristen's alt. NEEDS team follow-up — solo dives = 15-death games. Web-pull environmental kills are his unique niche."},
{h:"Magik",n:"S-tier dive assassin. Portal pressure forces constant backline checks. Begin 100% WR (9g). S7 dive buffs widened her windows."},
{h:"Blade",n:"Major S7 buffs. Lifesteal self-sustain frees supports. In dive comps, self-sufficiency is game-changing. Blade of Khonshu team-up with Moon Knight."},
{h:"Black Panther",n:"Meaningful S7 buffs. Stealth and burst make him strong flanker. Less mechanical than Psylocke, similar assassination potential."},
{h:"Punisher",n:"Consistent ranged damage with grenade utility. Bestial Hunt team-up. Doesn't need team coordination to be effective."},
{h:"Storm",n:"AoE damage queen. Cosmic Cyclone team-up with Adam Warlock (new S7). Strong on domination maps."},
]},
{tier:"B",heroes:[
{h:"Iron Man",n:"S7 buffs improved aerial pressure but predictable flight gets punished. Your tournament data: 0W 4L, 20 deaths in one game. Ranked viable, tournament liability."},
{h:"Hawkeye",n:"Charged headshots are instant kills. Dies to a stiff breeze. Aim-dependent inconsistency keeps him in B."},
{h:"Iron Fist",n:"Matchup-dependent. Hard-counters some, gets hard-countered. Strange movement hard to track below Diamond."},
{h:"Human Torch",n:"S7 buff with more teased. Not strong enough to justify over S/A-tier options. Unrealized potential."},
{h:"Deadpool (D)",n:"Worst of Deadpool's three forms. Blocks superior Vanguard/Strategist kits."},
{h:"Mr. Fantastic",n:"Off-tank Duelist. Dominates below Diamond, damage too low for Diamond+ DPS slot."},
{h:"Squirrel Girl",n:"Can't confirm kills in 3-healer meta. Damage outhealed constantly. Niche Groot-wall-busting utility."},
]},
{tier:"C",heroes:[
{h:"Black Widow",n:"Lowest-performing DPS at Diamond+. Kit hasn't kept up with power creep. Stealth devalued by Daredevil wallhack."},
{h:"Scarlet Witch",n:"S7 buffs but still bottom at Diamond+. Countered by coordinated teams. Dominates below Diamond with no-aim kit."},
]},
],
strategist:[
{tier:"S+",heroes:[
{h:"Gambit",n:"Most impactful support. Ragin' Royal Flush supercharges allies (the Marvel Rivals Nano Boost). CC cleanse is unique and invaluable. Removing him via ban is almost always correct."},
{h:"Invisible Woman",n:"Piercing attack heals AND damages simultaneously. Barrier + invisibility = unmatched defensive utility. S+ at every rank: powerful AND easy to execute."},
{h:"Cloak & Dagger",n:"S-tier comeback in S7. Dual-form versatility (Dagger heals, Cloak controls) is unpredictable. C&D ult has more security with Magneto less present. Team's most-played support."},
]},
{tier:"S",heroes:[
{h:"White Fox",n:"S7's new Strategist and biggest meta development. Charm CC from support is genuinely new. Kumiho team-up with Luna Snow creates oppressive dual-support. Legitimate S-tier in first season."},
{h:"Mantis",n:"Team-buffing kit unlocks teammates. More prevalent in coordinated teams. Scales with team quality."},
{h:"Luna Snow",n:"Dual-role: heals allies, damages enemies. Share the Stage pockets two allies. Kumiho team-up with White Fox. Held back by freeze-reliance at Diamond+."},
]},
{tier:"A",heroes:[
{h:"Rocket Raccoon",n:"Simple kit, strong damage, Planet X Pals with Groot. Sam's 66.7% WR. Easy to learn, effective at all ranks. Fastest support to add to any pool."},
{h:"Loki (S)",n:"Copy banned S+ supports. When Invisible Woman or Gambit is banned, Loki becomes them. Enormous draft value."},
{h:"Phoenix (S)",n:"Resurrection + decent damage from support slot. Passive revive always valuable."},
{h:"Deadpool (S)",n:"Strategist Deadpool is surprisingly viable. Solid healing, impactful ult. Better than DPS form."},
{h:"Jeff",n:"Two team-ups. Ult now provides team healing. Speed-boost bubbles for objectives. Solid but doesn't outperform S-tier."},
{h:"Adam Warlock",n:"Lost team-up anchor in S7 (15% healing gone). Flight addition exciting but indirect nerf hurts. Ult still amazing."},
{h:"Angela",n:"Niche effective in tight corridors. T-Money's 100% WR (5g) is intriguing. Generally lower tier but map-specific value."},
]},
{tier:"B",heroes:[
{h:"Ultron",n:"Solid third healer vs dive. Being airborne forces opponents off dive. Two drones let you pocket divers OR protect backline. Not a primary healer."},
{h:"Sue Storm",n:"Sam's 44% WR after 50g = ceiling hero. Shields protect pushes but healing output can't match S/A-tier. Simple, good for beginners, outscaled at Diamond+."},
]},
],
teamups:[
{tier:"S",tu:[
{n:"Planet X Pals",h:"Groot + Rocket",d:"Wall + damage behind it = poke foundation. Passive synergy, zero coordination needed."},
{n:"Explosive Entanglement",h:"Gambit + Magneto/Rogue",d:"Highest-value team-up. Enables Rogue ult drain AND Magneto bubble. Two S-tier heroes made stronger."},
{n:"Blessing of the Kumiho",h:"White Fox + Luna Snow",d:"S7 marquee team-up. Charm CC + healing + damage. Meta-defining triple threat."},
{n:"Symbiote Shenanigans",h:"Venom + Jeff/Hela",d:"+150 HP for Venom. Simple, passive, always valuable."},
]},
{tier:"A",tu:[
{n:"Bestial Hunt",h:"Punisher + Daredevil",d:"Grenade blind effect. Utility is real but niche."},
{n:"Metal Bulwark",h:"Magneto shield team",d:"Magneto bubble protects poke line. Always active. Passive value."},
{n:"Gamma Charge",h:"Hulk + Thing + Wolverine",d:"Double-tank durability. Requires 2 specific tanks — inflexible at high elo."},
{n:"Cosmic Cyclone",h:"Storm + Adam Warlock",d:"New S7. AoE synergy. Niche but effective on domination."},
]},
{tier:"B",tu:[
{n:"Blade of Khonshu",h:"Blade + Moon Knight",d:"Dive flanker synergy. Both must be picked, limiting flexibility."},
{n:"Fastball Special",h:"Hulk + Thing + Wolverine",d:"Fun meme. Not tournament-viable."},
]},
]};

// ─── NEW: ROLE FLEXIBILITY MATRIX ───
const ROLE_MATRIX=[
{name:"Ayden",roles:{
vanguard:{wr:"50%",conf:"FLEX",heroes:"Emma 50% 16g, Venom 50% 2g",note:"Venom is ONLY dive tank on roster — needs 20+ games.",c:C.gold},
duelist:{wr:"66.7%",conf:"STRONG",heroes:"Punisher 66.7% 12g, Mr. Fantastic 50%",note:"Solid DPS but healer stats are so much better.",c:C.blue},
strategist:{wr:"57.9%",conf:"ELITE",heroes:"Jeff 57.9% 10.86 KDA, White Fox 100% alt",note:"BEST healer by KDA. THIS is his primary role.",c:C.green}
}},
{name:"Begin",roles:{
vanguard:{wr:"70%",conf:"ELITE",heroes:"Thor 70%, Groot 77.8%, Magneto 75%, Magik 100%",note:"GM1 tank player. Thor/Groot/Magneto all proven at highest level.",c:C.green},
duelist:{wr:"—",conf:"NONE",heroes:"No DPS data",note:"Not a DPS player. All successful picks are Vanguard-class.",c:C.muted},
strategist:{wr:"—",conf:"NONE",heroes:"No support data",note:"Learning Rocket/C&D recommended for emergency flex.",c:C.muted}
}},
{name:"Gabe",roles:{
vanguard:{wr:"71.4%",conf:"ELITE",heroes:"Magneto 71.4% 7g, Strange 57.7% 26g, Thing 45.5%",note:"Magneto 71.4% ELITE. NEVER PLAYED IN TOURNAMENT. #1 fix.",c:C.green},
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
vanguard:{wr:"—",conf:"NONE",heroes:"Thing experiments",note:"Stop playing tank. Every tank game is a support game wasted.",c:C.muted},
duelist:{wr:"0%",conf:"DEAD",heroes:"Strange 0% 4g",note:"Confirmed not viable.",c:C.accent},
strategist:{wr:"55.6%",conf:"STRONG",heroes:"C&D 55.6% 9g, Sue 44% 50g, Rocket 66.7% 3g",note:"62 support games. C&D should be primary. Sue = ceiling reached.",c:C.blue}
}},
{name:"T-Money",roles:{
vanguard:{wr:"71%",conf:"STRONG",heroes:"Angela 100% 5g, Peni 50% 4g, Magneto 40%",note:"71% Vanguard WR vs 50% DPS. HE IS A TANK PLAYER.",c:C.blue},
duelist:{wr:"50%",conf:"WEAK",heroes:"Punisher 62.5%, Moon Knight 25%",note:"Moon Knight 25% = dead pick. Duelist NOT his role.",c:C.gold},
strategist:{wr:"0%",conf:"DEAD",heroes:"0% across 3g",note:"IMPOSSIBLE. Do not put on support.",c:C.accent}
}},
{name:"Tristen",roles:{
vanguard:{wr:"—",conf:"NONE",heroes:"No tank data",note:"Not a tank player.",c:C.muted},
duelist:{wr:"78.6%",conf:"ELITE",heroes:"Spider-Man 78.6% 28g, Hela 100% 1g, Iron Man 63.6%",note:"Spider-Man elite. Iron Man NOT tournament-viable (0W 4L).",c:C.green},
strategist:{wr:"—",conf:"FLEX",heroes:"Luna Snow 5.00 KDA tourney, Invis Woman 4.22",note:"Tournament-proven support flex. Luna in ONLY WIN.",c:C.gold}
}},
{name:"Zach",roles:{
vanguard:{wr:"83.3%",conf:"ELITE",heroes:"Thor 83.3% 6g, Deadpool V 75% 4g, Thing 25%",note:"Thor 83.3% = highest hero WR on roster. DP(V) is unique weapon.",c:C.green},
duelist:{wr:"—",conf:"FLEX",heroes:"Daredevil, Wolverine, Gambit 8.50 KDA QP",note:"Experimentation phase. DD and Wolverine fit team comps.",c:C.gold},
strategist:{wr:"0%",conf:"WEAK",heroes:"Mantis 0%, Sue 0%, Gambit QP only",note:"0% on Mantis/Sue. Gambit only viable support path, untested comp.",c:C.accent}
}},
];

// ─── NEW: ALL HEROES FOR DRAFT SIM ───
const ALL_HEROES=[
{h:"Groot",r:"tank",t:"S+"},{h:"Deadpool (V)",r:"tank",t:"S+"},{h:"Magneto",r:"tank",t:"S+"},
{h:"Rogue",r:"tank",t:"S"},{h:"Emma Frost",r:"tank",t:"S"},{h:"The Thing",r:"tank",t:"S"},{h:"Moon Knight (V)",r:"tank",t:"S"},
{h:"Thor",r:"tank",t:"A"},{h:"Hulk",r:"tank",t:"A"},{h:"Venom",r:"tank",t:"A"},{h:"Dr. Strange",r:"tank",t:"A"},{h:"Captain America",r:"tank",t:"A"},
{h:"Peni Parker",r:"tank",t:"B"},
{h:"Elsa Bloodstone",r:"dps",t:"S+"},{h:"Phoenix",r:"dps",t:"S+"},{h:"Psylocke",r:"dps",t:"S+"},{h:"Loki",r:"dps",t:"S+"},
{h:"Winter Soldier",r:"dps",t:"S"},{h:"Star-Lord",r:"dps",t:"S"},{h:"Namor",r:"dps",t:"S"},{h:"Daredevil",r:"dps",t:"S"},{h:"Moon Knight (D)",r:"dps",t:"S"},
{h:"Wolverine",r:"dps",t:"A"},{h:"Hela",r:"dps",t:"A"},{h:"Spider-Man",r:"dps",t:"A"},{h:"Magik",r:"dps",t:"A"},{h:"Blade",r:"dps",t:"A"},{h:"Black Panther",r:"dps",t:"A"},{h:"Punisher",r:"dps",t:"A"},{h:"Storm (D)",r:"dps",t:"A"},
{h:"Iron Man",r:"dps",t:"B"},{h:"Hawkeye",r:"dps",t:"B"},{h:"Iron Fist",r:"dps",t:"B"},{h:"Human Torch",r:"dps",t:"B"},{h:"Deadpool (D)",r:"dps",t:"B"},{h:"Mr. Fantastic",r:"dps",t:"B"},{h:"Squirrel Girl",r:"dps",t:"B"},
{h:"Black Widow",r:"dps",t:"C"},{h:"Scarlet Witch",r:"dps",t:"C"},
{h:"Gambit",r:"heal",t:"S+"},{h:"Invisible Woman",r:"heal",t:"S+"},{h:"Cloak & Dagger",r:"heal",t:"S+"},
{h:"White Fox",r:"heal",t:"S"},{h:"Mantis",r:"heal",t:"S"},{h:"Luna Snow",r:"heal",t:"S"},
{h:"Rocket Raccoon",r:"heal",t:"A"},{h:"Loki (S)",r:"heal",t:"A"},{h:"Deadpool (S)",r:"heal",t:"A"},{h:"Jeff",r:"heal",t:"A"},{h:"Adam Warlock",r:"heal",t:"A"},{h:"Angela",r:"heal",t:"A"},
{h:"Ultron",r:"heal",t:"B"},{h:"Sue Storm",r:"heal",t:"B"},
];
const OUR_HEROES={
"Begin":["Thor","Groot","Magneto","Magik","Dr. Strange"],
"Ayden":["Jeff","White Fox","Venom","Emma Frost","Punisher","Mr. Fantastic","Rocket Raccoon"],
"Tristen":["Spider-Man","Hela","Iron Man","Psylocke","Luna Snow","Invisible Woman"],
"Gabe":["Magneto","Dr. Strange","The Thing","Ultron","Rogue"],
"Sam":["Cloak & Dagger","Sue Storm","Rocket Raccoon"],
"Zach":["Thor","Deadpool (V)","Wolverine","Daredevil","Gambit"],
"Raquel":["Cloak & Dagger","Jeff","Luna Snow","White Fox"],
"T-Money":["Angela","Peni Parker","Punisher","Magneto"],
"Jace":["Daredevil","Blade","Deadpool (V)","Deadpool (S)","Iron Man"],
};

// ─── UI (35% larger) ───
function Tab({a,onClick,children,color}){return<button onClick={onClick} style={{background:a?(color||C.accent):"transparent",color:a?"#fff":C.dim,border:a?"none":`1px solid ${C.border}`,padding:"14px 22px",borderRadius:"8px",cursor:"pointer",fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:F.sm,letterSpacing:"1.2px",textTransform:"uppercase",whiteSpace:"nowrap"}}>{children}</button>}
function Bd({color,text}){return<span style={{background:`${color}22`,color,padding:"3px 10px",borderRadius:"5px",fontSize:"12px",fontWeight:700,letterSpacing:"1px",fontFamily:"'Rajdhani'"}}>{text}</span>}
function Gr({g}){const c=g.startsWith("S")?"#ff006e":g.startsWith("A")?C.green:g.startsWith("B")?C.blue:g.startsWith("C")?C.gold:C.accent;return<span style={{background:c,color:"#000",padding:"5px 16px",borderRadius:"8px",fontSize:"20px",fontWeight:900,fontFamily:"'Rajdhani'"}}>{g}</span>}
function Sec({bg,border,title,titleColor,children}){return<div style={{background:bg||C.panel,borderRadius:F.rad,border:`1px solid ${border||C.border}`,padding:F.padL,marginBottom:F.gap}}>{title&&<h4 style={{margin:"0 0 14px",fontFamily:"'Rajdhani'",fontWeight:900,color:titleColor||C.text,letterSpacing:"1.2px",fontSize:F.lg}}>{title}</h4>}{children}</div>}

function StatsTab(){const[sel,setSel]=useState(null);return<div style={{display:"grid",gap:F.gap}}>{Object.entries(STATS).map(([n,s])=>{const o=sel===n;return<div key={n} onClick={()=>setSel(o?null:n)} style={{background:o?C.ph:C.panel,borderRadius:F.rad,border:`1px solid ${o?C.gold:C.border}`,padding:F.pad,cursor:"pointer"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><div style={{fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.xl,color:C.text}}>{n} <span style={{fontSize:F.sm,color:C.dim,fontWeight:500}}>({s.ign})</span></div>
<div style={{display:"flex",gap:"8px",marginTop:"6px",flexWrap:"wrap"}}><Bd color={C.purple} text={s.rank+" ("+s.rs+" RS)"}/><Bd color={parseFloat(s.wr)>=55?C.green:parseFloat(s.wr)>=45?C.gold:C.accent} text={s.wr+" "+s.rec}/><Bd color={parseFloat(s.r20)>=50?C.green:parseFloat(s.r20)>=35?C.gold:C.accent} text={"L20: "+s.r20}/></div></div><span style={{color:C.muted,fontSize:F.lg}}>{o?"▲":"▼"}</span></div>
{o&&<div style={{marginTop:"18px",display:"grid",gap:F.gap}}>
<table style={{width:"100%",borderCollapse:"collapse",fontSize:F.sm}}><thead><tr style={{borderBottom:`1px solid ${C.border}`}}>{["Hero","WR","Games","KDA","K/D/A"].map(h=><th key={h} style={{textAlign:"left",padding:"8px",color:C.dim,fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",letterSpacing:"1px"}}>{h}</th>)}</tr></thead>
<tbody>{s.heroes.map((h,i)=>{const w=parseFloat(h.w),wc=w>=60?C.green:w>=45?C.gold:C.accent;return<tr key={i} style={{borderBottom:`1px solid ${C.border}22`}}><td style={{padding:"8px",color:C.text,fontWeight:600}}>{h.h}</td><td style={{padding:"8px",color:wc,fontWeight:700}}>{h.w}</td><td style={{padding:"8px",color:C.dim}}>{h.g}</td><td style={{padding:"8px",color:C.blue,fontWeight:600}}>{h.k}</td><td style={{padding:"8px",color:C.dim}}>{h.l}</td></tr>})}</tbody></table>
{s.extra&&<div style={{background:`${C.purple}11`,borderRadius:"8px",padding:"14px",border:`1px solid ${C.purple}33`}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"13px",color:C.purple,letterSpacing:"1px",marginBottom:"6px"}}>ADDITIONAL DATA</div><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{s.extra}</div></div>}
<div style={{background:`${C.gold}11`,borderRadius:"8px",padding:"14px",border:`1px solid ${C.gold}33`}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"13px",color:C.gold,letterSpacing:"1px",marginBottom:"6px"}}>ANALYSIS</div><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{s.note}</div></div>
<a href={s.url} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} style={{color:C.blue,fontSize:F.xs,textDecoration:"none"}}>View on RivalsMeta →</a></div>}</div>})}</div>}

function TourneyTab(){const[ex,setEx]=useState(null);return<div style={{display:"grid",gap:"18px"}}>
<Sec border={`${C.accent}44`} title={"TOURNAMENT: "+TSUMMARY.rec} titleColor={C.accent}><div style={{fontSize:F.sm,marginBottom:"12px"}}><span style={{color:C.green,fontWeight:700}}>Only Win:</span> <span style={{color:C.dim}}>{TSUMMARY.win}</span></div>
{TSUMMARY.players.map((p,i)=><div key={i} style={{color:C.dim,fontSize:F.xs,marginBottom:"6px",lineHeight:1.5}}><strong style={{color:C.text}}>{p.n}:</strong> {p.r} — {p.d}</div>)}</Sec>
<Sec border={`${C.gold}44`} title="KEY ISSUES" titleColor={C.gold}>{TSUMMARY.issues.map((s,i)=><div key={i} style={{background:C.sec,borderRadius:"8px",padding:"10px 14px",marginBottom:"8px",display:"flex",gap:"10px"}}><span style={{color:C.gold,fontWeight:700,fontSize:F.sm}}>▸</span><span style={{color:C.dim,fontSize:F.xs,lineHeight:"22px"}}>{s}</span></div>)}</Sec>
<h4 style={{margin:0,fontFamily:"'Rajdhani'",fontWeight:900,color:C.text,fontSize:F.lg}}>MATCH-BY-MATCH</h4>
{TM.map((m,i)=>{const o=ex===i,rc=m.res==="WIN"?C.green:C.accent;return<div key={i} onClick={()=>setEx(o?null:i)} style={{background:C.panel,borderRadius:"10px",border:`1px solid ${o?rc:C.border}`,cursor:"pointer",overflow:"hidden"}}>
<div style={{padding:"14px 18px",display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{display:"flex",alignItems:"center",gap:"12px"}}><span style={{background:rc,color:"#000",padding:"3px 12px",borderRadius:"5px",fontSize:"12px",fontWeight:900,fontFamily:"'Rajdhani'"}}>{m.res}</span><span style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:F.lg,color:C.text}}>{m.map}</span><span style={{color:C.dim,fontSize:F.sm}}>{m.sc}</span></div><span style={{color:C.muted}}>{o?"▲":"▼"}</span></div>
{o&&<div style={{padding:"0 18px 18px"}}><div style={{display:"grid",gap:"6px",marginBottom:"14px"}}>{m.p.map((p,j)=>{const kr=parseFloat(p.r)||0,kc=p.r==="∞"?"#ff006e":kr>=3?C.green:kr>=1.5?C.gold:C.accent;return<div key={j} style={{background:C.sec,borderRadius:"6px",padding:"10px",display:"grid",gridTemplateColumns:"90px 110px 90px 1fr",gap:"8px",alignItems:"center",fontSize:F.xs}}>
<span style={{fontFamily:"'Rajdhani'",fontWeight:700,color:C.text}}>{p.n}</span><span style={{color:C.blue,fontWeight:600}}>{p.h}</span><span style={{color:C.dim}}>{p.k}</span>
<div style={{display:"flex",gap:"6px",alignItems:"center"}}><span style={{color:kc,fontWeight:700}}>{p.r==="∞"?"PERFECT":p.r+" KDA"}</span>{p.b&&<Bd color={p.b==="MVP"?"#ff006e":C.gold} text={p.b}/>}</div></div>})}</div>
<div style={{background:`${rc}11`,borderRadius:"8px",padding:"12px",border:`1px solid ${rc}33`}}><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{m.a}</div></div></div>}</div>})}
</div>}

function CompsTab(){const[idx,setIdx]=useState(0);const comp=COMPS[idx];return<div>
<div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"20px"}}>{COMPS.map((c,i)=><Tab key={i} a={idx===i} onClick={()=>setIdx(i)} color={c.color}>{c.name}</Tab>)}</div>
<div style={{background:C.panel,borderRadius:F.rad,border:`1px solid ${C.border}`,overflow:"hidden"}}>
<div style={{padding:F.padL,borderBottom:`1px solid ${C.border}`}}><h3 style={{margin:"0 0 8px",fontSize:F.xxl,fontFamily:"'Rajdhani'",fontWeight:900,color:comp.color,letterSpacing:"2px"}}>{comp.name} <span style={{fontSize:F.md,color:C.dim,fontWeight:600}}>{comp.tag}</span></h3>
<p style={{margin:0,color:C.dim,fontSize:F.sm,lineHeight:1.7}}>{comp.desc}</p></div>
<div style={{padding:F.padL}}><div style={{display:"grid",gap:"10px"}}>{comp.lineup.filter(s=>s.r!=="note").map((s,i)=><div key={i} style={{background:C.sec,borderRadius:"10px",padding:"16px",borderLeft:`4px solid ${s.r==="tank"?C.tank:s.r==="dps"?C.dps:C.heal}`,display:"grid",gridTemplateColumns:"130px 1fr",gap:"14px",alignItems:"start"}}>
<div><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:F.md,color:C.text}}>{s.p}</div><div style={{fontFamily:"'Rajdhani'",fontWeight:600,fontSize:F.sm,color:comp.color,marginBottom:"4px"}}>{s.h}</div><Bd color={s.r==="tank"?C.tank:s.r==="dps"?C.dps:C.heal} text={s.r==="tank"?"VANGUARD":s.r==="dps"?"DUELIST":"STRATEGIST"}/></div>
<div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{s.n}</div></div>)}</div>
<div style={{marginTop:"14px",padding:"14px",background:`${comp.color}11`,borderRadius:"10px",border:`1px solid ${comp.color}33`}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",color:comp.color,letterSpacing:"1px",marginBottom:"6px"}}>TEAM-UPS</div>
{comp.tu.map((t,i)=><div key={i} style={{color:C.dim,fontSize:F.xs}}>• {t}</div>)}</div>
<div style={{marginTop:"8px",padding:"14px",background:`${C.gold}11`,borderRadius:"10px",border:`1px solid ${C.gold}33`}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",color:C.gold,letterSpacing:"1px",marginBottom:"6px"}}>IF BANNED / ALTERNATE</div>
<div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{comp.alt}</div></div></div></div></div>}

function MapsTab(){const[sel,setSel]=useState(null);const modes=["Convoy","Domination","Convergence"];return<div style={{display:"grid",gap:"20px"}}>
{modes.map(mode=><div key={mode}><h4 style={{margin:"0 0 12px",fontFamily:"'Rajdhani'",fontWeight:900,color:C.purple,letterSpacing:"1.5px",fontSize:F.lg}}>{mode.toUpperCase()}</h4>
<div style={{display:"grid",gap:"10px"}}>{MAPS.filter(m=>m.mode===mode).map((m,i)=>{const o=sel===m.name;return<div key={i} onClick={()=>setSel(o?null:m.name)} style={{background:o?C.ph:C.panel,borderRadius:"10px",border:`1px solid ${o?C.blue:C.border}`,padding:"16px",cursor:"pointer"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><span style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:F.lg,color:C.text}}>{m.name}</span><span style={{color:C.dim,fontSize:F.xs,marginLeft:"10px"}}>{m.aka}</span></div>
<div style={{display:"flex",gap:"6px",alignItems:"center"}}><Bd color={C.blue} text={m.best}/><span style={{color:C.muted}}>{o?"▲":"▼"}</span></div></div>
{o&&<div style={{marginTop:"14px",display:"grid",gap:"10px"}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"10px"}}>
{[{l:"TOP BANS",c:C.accent,t:m.bans},{l:"TOP PICKS",c:C.green,t:m.picks},{l:"BEST ARCHETYPE",c:C.blue,t:m.best}].map((x,j)=><div key={j} style={{background:C.sec,borderRadius:"8px",padding:"12px"}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"11px",color:x.c,letterSpacing:"1px",marginBottom:"4px"}}>{x.l}</div><div style={{color:C.dim,fontSize:F.xs}}>{x.t}</div></div>)}</div>
<div style={{background:`${C.gold}11`,borderRadius:"8px",padding:"14px",border:`1px solid ${C.gold}33`}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"11px",color:C.gold,letterSpacing:"1px",marginBottom:"6px"}}>MAP ANALYSIS</div><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{m.why}</div></div>
<div style={{background:`${C.purple}11`,borderRadius:"8px",padding:"14px",border:`1px solid ${C.purple}33`}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"11px",color:C.purple,letterSpacing:"1px",marginBottom:"6px"}}>POSITIONING & HERO TIPS</div><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{m.tips}</div></div>
<div style={{background:`${C.green}11`,borderRadius:"8px",padding:"14px",border:`1px solid ${C.green}33`}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"11px",color:C.green,letterSpacing:"1px",marginBottom:"6px"}}>OUR COMP</div><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{m.ourComp}</div></div>
</div>}</div>})}</div></div>)}</div>}

function FeedbackTab(){const[ex,setEx]=useState(null);return<div style={{display:"grid",gap:"12px"}}>{FB.map((p,i)=>{const o=ex===i;return<div key={i} onClick={()=>setEx(o?null:i)} style={{background:C.panel,borderRadius:F.rad,border:`1px solid ${o?C.accent:C.border}`,cursor:"pointer",overflow:"hidden"}}>
<div style={{padding:"16px 20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{display:"flex",alignItems:"center",gap:"12px"}}><span style={{fontSize:"26px"}}>{p.i}</span><div><div style={{fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.xl,color:C.text}}>{p.n}</div><div style={{fontSize:F.xs,color:C.dim}}>{p.v}</div></div></div><Gr g={p.g}/></div>
{o&&<div style={{padding:"0 20px 20px",display:"grid",gap:"10px"}}>
{[{l:"STRENGTHS (DATA-BACKED)",c:C.green,t:p.s},{l:"WEAKNESSES (DATA-BACKED)",c:C.accent,t:p.w},{l:"THE ONE ABOVE ALL DECREES",c:C.gold,t:p.r}].map((s,j)=><div key={j} style={{background:`${s.c}11`,borderRadius:"10px",padding:"16px",border:`1px solid ${s.c}33`}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",color:s.c,letterSpacing:"1px",marginBottom:"6px"}}>{s.l}</div>
<div style={{color:C.dim,fontSize:F.sm,lineHeight:1.7}}>{s.t}</div></div>)}</div>}</div>})}</div>}

function BanTab(){return<div style={{display:"grid",gap:"16px"}}>
<Sec title="BAN-LOCK STRATEGY" titleColor={C.gold}><p style={{color:C.dim,fontSize:F.sm,lineHeight:1.7,margin:0}}>{BANS.g}</p></Sec>
<div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"6px"}}>{[{s:1,a:"A BAN",c:C.accent},{s:2,a:"B BAN",c:C.blue},{s:3,a:"B LOCK",c:C.green},{s:4,a:"A LOCK",c:C.green},{s:5,a:"A BAN",c:C.accent},{s:6,a:"B BAN",c:C.blue},{s:7,a:"B LOCK",c:C.green},{s:8,a:"A LOCK",c:C.green},{s:9,a:"A BAN",c:C.accent},{s:10,a:"B BAN",c:C.blue}].map(x=><div key={x.s} style={{background:`${x.c}22`,border:`1px solid ${x.c}44`,borderRadius:"8px",padding:"10px",textAlign:"center"}}><div style={{fontSize:"10px",color:C.muted,fontFamily:"'Rajdhani'"}}>{x.s}</div><div style={{fontSize:F.xs,color:x.c,fontWeight:700,fontFamily:"'Rajdhani'"}}>{x.a}</div></div>)}</div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px"}}>
<Sec border={`${C.accent}44`} title="PRIORITY BANS" titleColor={C.accent}>{BANS.b.map((b,i)=><div key={i} style={{background:C.sec,borderRadius:"8px",padding:"12px",marginBottom:"8px"}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:F.md,color:C.text}}>{i+1}. {b.h}</div><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.5}}>{b.w}</div></div>)}</Sec>
<Sec border={`${C.green}44`} title="PRIORITY LOCKS" titleColor={C.green}>{BANS.s.map((s,i)=><div key={i} style={{background:C.sec,borderRadius:"8px",padding:"12px",marginBottom:"8px"}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:F.md,color:C.text}}>{i+1}. {s.h}</div><div style={{color:C.dim,fontSize:F.xs,lineHeight:1.5}}>{s.w}</div></div>)}</Sec>
</div></div>}

function LearnTab(){return<div style={{display:"grid",gap:"12px"}}>
<div style={{background:`${C.accent}11`,borderRadius:F.rad,border:`1px solid ${C.accent}33`,padding:F.pad}}><p style={{margin:0,color:C.dim,fontSize:F.sm,lineHeight:1.7}}><strong style={{color:C.accent}}>CRITICAL ROSTER GAPS:</strong> Raquel's 3-hero pool is vulnerability #1. No hitscan sniper. Only 1 dive tank player. Iron Man is NOT a tournament pick (0W 4L). T-Money is secretly a better tank than DPS. Emma and Cap are C-tier — deprioritize.</p></div>
{LEARNS.map((r,i)=><div key={i} style={{background:C.panel,borderRadius:F.rad,border:`1px solid ${C.border}`,padding:F.pad}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"}}><h4 style={{margin:0,fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.lg,color:C.text}}>{r.h}</h4><Bd color={r.p==="CRITICAL"?C.accent:r.p==="HIGH"?C.gold:r.p==="MEDIUM"?C.blue:C.muted} text={r.p}/></div>
<p style={{margin:"0 0 8px",color:C.dim,fontSize:F.xs,lineHeight:1.6}}>{r.r}</p>
<div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>{r.w.map(p=><span key={p} style={{background:`${C.blue}22`,color:C.blue,padding:"3px 10px",borderRadius:"5px",fontSize:"12px",fontWeight:700}}>{p}</span>)}</div></div>)}</div>}

function InfoTab(){return<div style={{display:"grid",gap:"16px"}}>
<Sec title="MRC SEASON 7" titleColor={C.gold}>{RULES.map((t,i)=><div key={i} style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:"12px",padding:"8px 0",borderBottom:i<RULES.length-1?`1px solid ${C.border}`:"none"}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,fontSize:F.xs,color:C.gold,letterSpacing:"1px"}}>{t.l}</div><div style={{color:C.dim,fontSize:F.sm}}>{t.v}</div></div>)}</Sec>
<Sec border={`${C.purple}44`} title="S7 META" titleColor={C.purple}>
{["20% ult charge nerf globally. Neutral phases now 50+ seconds. Base kit value > ult cycling.","1-2-3 dominant at Diamond+. 2-2-2 has 54% WR, 62% play rate. Triple support isn't dead.","Dive stronger. Slower defensive ults = larger windows for Venom/Spider-Man/Magik/Psylocke.","S-tier Tanks: Magneto, Groot, Venom, Deadpool(V), Hulk.","S-tier DPS: Hela, Daredevil, Hawkeye, Blade, Spider-Man, Psylocke, Magik, Wolverine.","S-tier Heals: C&D, Rocket, Gambit, Luna, White Fox.","C-tier Tanks: Emma Frost, Captain America — lowest WR tanks. Deprioritize.","New team-ups: Kumiho (WF+Luna), Cosmic Cyclone (Storm+Adam). Removed: Jeff-nado, Duality Dance.","Rogue ult drain more valuable — stolen charge 20% harder to rebuild.","Bucky nerfed (CD 3s→6s). Shin-Shibuya returns to comp. Lower Manhattan added April 3."].map((n,i)=><div key={i} style={{background:C.sec,borderRadius:"8px",padding:"10px 14px",marginBottom:"6px",display:"flex",gap:"10px"}}><span style={{color:C.purple,fontWeight:700}}>▸</span><span style={{color:C.dim,fontSize:F.xs,lineHeight:"22px"}}>{n}</span></div>)}</Sec></div>}

// ─── NEW TAB: DRAFT SIMULATOR ───
function DraftTab(){
const PHASES=[
{step:1,team:"A",action:"BAN"},{step:2,team:"B",action:"BAN"},
{step:3,team:"B",action:"LOCK"},{step:4,team:"A",action:"LOCK"},
{step:5,team:"A",action:"BAN"},{step:6,team:"B",action:"BAN"},
{step:7,team:"B",action:"LOCK"},{step:8,team:"A",action:"LOCK"},
{step:9,team:"A",action:"BAN"},{step:10,team:"B",action:"BAN"},
];
const[phase,setPhase]=useState(0);
const[bans,setBans]=useState([]);
const[locks,setLocks]=useState([]);
const[filter,setFilter]=useState("all");
const[search,setSearch]=useState("");
const done=phase>=PHASES.length;
const cur=done?null:PHASES[phase];
function pick(hero){if(done)return;const entry={hero,team:cur.team,action:cur.action,step:cur.step};if(cur.action==="BAN")setBans(p=>[...p,entry]);else setLocks(p=>[...p,entry]);setPhase(p=>p+1);}
function reset(){setPhase(0);setBans([]);setLocks([]);setSearch("");}
const used=new Set([...bans,...locks].map(x=>x.hero));
const available=ALL_HEROES.filter(h=>!used.has(h.h)).filter(h=>filter==="all"||h.r===filter).filter(h=>!search||h.h.toLowerCase().includes(search.toLowerCase()));
const bannedSet=new Set(bans.map(b=>b.hero));
const impacted=[];
Object.entries(OUR_HEROES).forEach(([player,heroes])=>{const lost=heroes.filter(h=>bannedSet.has(h));if(lost.length>0)impacted.push({player,lost,remaining:heroes.filter(h=>!bannedSet.has(h))});});
return<div style={{display:"grid",gap:"16px"}}>
<Sec border={`${C.gold}44`} title="DRAFT SIMULATOR" titleColor={C.gold}>
<p style={{color:C.dim,fontSize:F.sm,lineHeight:1.7,margin:"0 0 14px"}}>Simulate the S7 ban-lock draft. Click heroes to ban or lock them through the 10-phase process. See which compositions survive and which players lose heroes. Gold-tagged heroes are on YOUR roster.</p>
</Sec>
<div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"6px"}}>
{PHASES.map((p,i)=>{const isCur=i===phase&&!done;const isDone=i<phase;const entry=[...bans,...locks].find(x=>x.step===p.step);const ac=p.action==="BAN"?C.accent:C.green;
return<div key={i} style={{background:isCur?`${ac}44`:isDone?`${ac}22`:`${C.border}44`,border:`2px solid ${isCur?ac:isDone?`${ac}66`:C.border}`,borderRadius:"10px",padding:"10px",textAlign:"center"}}>
<div style={{fontSize:"10px",color:C.muted,fontFamily:"'Rajdhani'"}}>{p.step}. Team {p.team}</div>
<div style={{fontSize:F.xs,color:ac,fontWeight:700,fontFamily:"'Rajdhani'"}}>{p.action}</div>
{entry&&<div style={{fontSize:"11px",color:C.text,fontWeight:600,marginTop:"4px",fontFamily:"'Rajdhani'"}}>{entry.hero}</div>}
{isCur&&!entry&&<div style={{fontSize:"10px",color:C.gold,marginTop:"4px",fontFamily:"'Rajdhani'"}}>← SELECT</div>}
</div>})}
</div>
{!done&&<div style={{background:`${cur.action==="BAN"?C.accent:C.green}11`,border:`1px solid ${cur.action==="BAN"?C.accent:C.green}44`,borderRadius:"10px",padding:"16px",textAlign:"center"}}><span style={{fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.xl,color:cur.action==="BAN"?C.accent:C.green,letterSpacing:"2px"}}>TEAM {cur.team} — {cur.action} A HERO</span></div>}
{done&&<div style={{background:`${C.gold}11`,border:`1px solid ${C.gold}44`,borderRadius:"10px",padding:"16px",textAlign:"center"}}><span style={{fontFamily:"'Rajdhani'",fontWeight:900,fontSize:F.xl,color:C.gold,letterSpacing:"2px"}}>DRAFT COMPLETE</span></div>}
<div style={{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"}}>
<input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search heroes..." style={{background:C.sec,border:`1px solid ${C.border}`,borderRadius:"8px",padding:"10px 14px",color:C.text,fontFamily:"'Rajdhani'",fontSize:F.sm,flex:"1",minWidth:"160px",outline:"none"}}/>
{[{id:"all",l:"All"},{id:"tank",l:"Vanguard"},{id:"dps",l:"Duelist"},{id:"heal",l:"Strategist"}].map(f=>
<button key={f.id} onClick={()=>setFilter(f.id)} style={{background:filter===f.id?(f.id==="tank"?C.tank:f.id==="dps"?C.dps:f.id==="heal"?C.heal:C.purple):"transparent",color:filter===f.id?"#fff":C.dim,border:`1px solid ${C.border}`,borderRadius:"6px",padding:"8px 14px",cursor:"pointer",fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",letterSpacing:"1px"}}>{f.l}</button>)}
<button onClick={reset} style={{background:C.accent,color:"#fff",border:"none",borderRadius:"6px",padding:"8px 18px",cursor:"pointer",fontFamily:"'Rajdhani'",fontWeight:700,fontSize:"12px",letterSpacing:"1px"}}>RESET</button>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))",gap:"6px"}}>
{available.map(h=>{const rc=h.r==="tank"?C.tank:h.r==="dps"?C.dps:C.heal;const tc=h.t==="S+"?"#ff006e":h.t==="S"?C.green:h.t==="A"?C.blue:h.t==="B"?C.gold:C.muted;
const ourPlayers=Object.entries(OUR_HEROES).filter(([,heroes])=>heroes.includes(h.h)).map(([p])=>p);
return<div key={h.h} onClick={()=>!done&&pick(h.h)} style={{background:C.sec,border:`1px solid ${C.border}`,borderRadius:"8px",padding:"10px",cursor:done?"default":"pointer",opacity:done?0.5:1}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{color:C.text,fontSize:F.xs,fontWeight:600,fontFamily:"'Rajdhani'"}}>{h.h}</span><span style={{color:tc,fontSize:"10px",fontWeight:900,fontFamily:"'Rajdhani'"}}>{h.t}</span></div>
<div style={{display:"flex",gap:"4px",marginTop:"4px",alignItems:"center"}}><span style={{width:"8px",height:"8px",borderRadius:"50%",background:rc,display:"inline-block"}}/><span style={{color:C.muted,fontSize:"10px"}}>{h.r==="tank"?"VAN":h.r==="dps"?"DUE":"STR"}</span></div>
{ourPlayers.length>0&&<div style={{marginTop:"4px"}}>{ourPlayers.map(p=><span key={p} style={{background:`${C.gold}22`,color:C.gold,padding:"1px 6px",borderRadius:"3px",fontSize:"9px",fontWeight:700,marginRight:"3px",fontFamily:"'Rajdhani'"}}>{p}</span>)}</div>}
</div>})}
</div>
{bans.length>0&&<Sec border={`${C.accent}44`} title="ROSTER IMPACT ANALYSIS" titleColor={C.accent}>
{impacted.length===0&&<div style={{color:C.green,fontSize:F.sm}}>No roster heroes banned. All compositions available.</div>}
{impacted.map((imp,i)=><div key={i} style={{background:C.sec,borderRadius:"8px",padding:"12px",marginBottom:"8px"}}>
<div style={{fontFamily:"'Rajdhani'",fontWeight:700,color:C.text,fontSize:F.md}}>{imp.player}</div>
<div style={{color:C.accent,fontSize:F.xs,marginTop:"4px"}}>LOST: {imp.lost.join(", ")}</div>
<div style={{color:C.green,fontSize:F.xs,marginTop:"2px"}}>REMAINING: {imp.remaining.length>0?imp.remaining.join(", "):<span style={{color:C.accent,fontWeight:700}}>NO HEROES LEFT</span>}</div>
</div>)}
<div style={{marginTop:"12px"}}><div style={{fontFamily:"'Rajdhani'",fontWeight:700,color:C.gold,fontSize:"12px",letterSpacing:"1px",marginBottom:"8px"}}>COMPOSITION SURVIVAL</div>
{COMPS.map((comp,i)=>{const compHeroes=comp.lineup.filter(l=>l.r!=="note").map(l=>l.h);const bannedInComp=compHeroes.filter(h=>bannedSet.has(h));const alive=bannedInComp.length===0;
return<div key={i} style={{display:"flex",gap:"8px",alignItems:"center",marginBottom:"4px"}}>
<span style={{width:"10px",height:"10px",borderRadius:"50%",background:alive?C.green:C.accent}}/>
<span style={{color:alive?C.text:C.muted,fontSize:F.xs,fontFamily:"'Rajdhani'",fontWeight:alive?600:400,textDecoration:alive?"none":"line-through"}}>{comp.name}</span>
{!alive&&<span style={{color:C.accent,fontSize:"10px"}}>({bannedInComp.join(", ")})</span>}
</div>})}
</div></Sec>}
</div>}

// ─── NEW TAB: ROLE FLEXIBILITY MATRIX ───
function RoleTab(){
const roles=["vanguard","duelist","strategist"];
const labels={vanguard:"VANGUARD",duelist:"DUELIST",strategist:"STRATEGIST"};
const roleColors={vanguard:C.tank,duelist:C.dps,strategist:C.heal};
const[sel,setSel]=useState(null);
return<div style={{display:"grid",gap:"16px"}}>
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
return<td key={r} onClick={()=>setSel(isOpen?null:p.name+r)} style={{padding:"12px",background:`${d.c}11`,border:`2px solid ${d.c}44`,borderRadius:"10px",cursor:"pointer",textAlign:"center",verticalAlign:"top",boxShadow:isOpen?`0 0 12px ${d.c}33`:"none"}}>
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
</tbody></table>
</div>
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

// ─── NEW TAB: META SNAPSHOT ───
function MetaTab(){
const[roleFilter,setRoleFilter]=useState("vanguard");
const[showTU,setShowTU]=useState(false);
const tierColors={"S+":"#ff006e","S":C.green,"A":C.blue,"B":C.gold,"C":C.muted};
const roleData=META_TIERS[roleFilter]||[];
const labels={vanguard:"VANGUARD",duelist:"DUELIST",strategist:"STRATEGIST"};
return<div style={{display:"grid",gap:"16px"}}>
<Sec border={`${C.purple}44`} title="S7 META SNAPSHOT — DIAMOND+" titleColor={C.purple}>
<p style={{color:C.dim,fontSize:F.sm,lineHeight:1.7,margin:0}}>Complete hero tier list for S7 competitive play (Diamond+ / Tournament). Data sourced from Mobalytics, MarvelRivals.gg, and high-elo consensus. The 20% ult charge nerf defines this meta — base kit value outweighs ult cycling, dive has wider windows, neutral phases stretch 50+ seconds.</p>
</Sec>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"10px"}}>
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
return<div key={hi} style={{background:C.sec,borderRadius:"10px",padding:"14px",borderLeft:`4px solid ${tierColors[tier.tier]}`}}>
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
"Emma Frost & Cap America: worst tank WRs in S7. Sources disagree on exact tier — Mobalytics S, others C. Exercise caution.",
].map((n,i)=><div key={i} style={{background:C.sec,borderRadius:"8px",padding:"10px 14px",marginBottom:"6px",display:"flex",gap:"10px"}}><span style={{color:C.gold,fontWeight:700}}>▸</span><span style={{color:C.dim,fontSize:F.xs,lineHeight:"22px"}}>{n}</span></div>)}
</Sec></div>}

// ─── CHANGELOG TAB ───
const CHANGELOG=[
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
function ChangelogTab(){return<div style={{display:"grid",gap:"16px"}}>
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
</div>)}
</div>}

export default function App(){const[tab,setTab]=useState("stats");
const tabs=[{id:"stats",l:"Stats"},{id:"tourney",l:"Tournament"},{id:"comps",l:"Comps"},{id:"maps",l:"Maps"},{id:"bans",l:"Bans"},{id:"feedback",l:"Intel"},{id:"learn",l:"Learns"},{id:"info",l:"Rules"},{id:"draft",l:"Draft Sim"},{id:"roles",l:"Roles"},{id:"meta",l:"Meta"},{id:"changelog",l:"Log"}];
return<div style={{minHeight:"100vh",background:C.bg,color:C.text,fontFamily:"'Rajdhani',sans-serif"}}>
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@700;900&display=swap" rel="stylesheet"/>
<div style={{background:`linear-gradient(135deg,${C.panel},${C.bg})`,borderBottom:`1px solid ${C.border}`,padding:"24px 32px 16px"}}>
<div style={{display:"flex",alignItems:"center",gap:"14px",marginBottom:"6px"}}><h1 style={{margin:0,fontFamily:"'Orbitron'",fontWeight:900,fontSize:F.h1,letterSpacing:"4px",background:`linear-gradient(90deg,${C.accent},${C.gold})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>MARVEL RIVALS</h1><span style={{background:C.accent,color:"#fff",padding:"4px 12px",borderRadius:"5px",fontSize:"12px",fontWeight:700}}>S7</span></div>
<p style={{margin:"0 0 14px",color:C.dim,fontSize:F.xs,fontStyle:"italic"}}>"I have watched every timeline, every match, every misplay. The data does not lie." — The One Above All</p>
<div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>{tabs.map(t=><Tab key={t.id} a={tab===t.id} onClick={()=>setTab(t.id)}>{t.l}</Tab>)}</div></div>
<div style={{padding:"24px 32px",maxWidth:"1200px"}}>
{tab==="stats"&&<StatsTab/>}{tab==="tourney"&&<TourneyTab/>}{tab==="comps"&&<CompsTab/>}{tab==="maps"&&<MapsTab/>}
{tab==="bans"&&<BanTab/>}{tab==="feedback"&&<FeedbackTab/>}{tab==="learn"&&<LearnTab/>}{tab==="info"&&<InfoTab/>}
{tab==="draft"&&<DraftTab/>}{tab==="roles"&&<RoleTab/>}{tab==="meta"&&<MetaTab/>}{tab==="changelog"&&<ChangelogTab/>}
</div></div>}

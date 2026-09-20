I want you to help me identify what I should do in my first round of a 6-player Twilight Imperium 4th Edition game, using a custom map/ruleset.

PROMPT FOR INPUTS
You need to get the map string from the user (tile IDs, Mecatol Rex excluded): <tile_string>

You need to get the faction the user is: <user_faction>

You can use that to figure out what home tile the player is by looking at the src/data/factionData.js factionToHomeSystemMap. Then you can figure out the speaker order, and what speaker number the user is. Speaker always starts as the top most tile in the outer ring on 6 player, they are strategy card picking first. Then it proceeds clockwise around the ring from there.

Finally, you need to find out if the user is playing with any expansion(s) <prophecy of kings and/or thunders edge>.

MAP INFORMATION
Reconstruct the board as a flat array [Mecatol Rex (tile 18), then this string in order], read as concentric closed rings: ring r starts at flat index 3*(r-1)*r+1 and has 6r tiles. Use src/helpers/Helpers.js (ringCoordinates, ringForPosition) and src/App.js's rotateHexGrid for the ring/index logic if you need to double check the math.

Home systems are NOT all in ring 3 always — some rulesets like "minor factions" and custom maps put them in ring 2. In minor factions ruleset, these planets are garrisoned with neutral units — 3 infantry, split 2-1 across two planets, or 3 on a single-planet tile. Infer which of the 36 tiles are home systems, and which faction owns each, using `homeSystemToFactionMap` in src/data/factionData.js (tile number -> faction name). Also infer the seating/speaker order: the topmost home system on the board is speaker (position 1), and speaker order proceeds clockwise around the board from there. Home systems are always on the outer ring.

The player count matches the home count, except in minor factions where they are double the player count. In a normal 6 player game, homes are evenly spaced, 60° apart on the ring-3 corners.

SLICE DEFINITION
For each player's home tile at ring r, side s, offset o (p = s*r+o within the ring, ring size S=6r):

- Left/right neighbor: same-ring tile at position (p±1 mod S). Note the wraparound is within that player's own ring, not necessarily the edge of the whole map string — that only coincides for homes in the outermost ring.
- Front tiles: step toward Mecatol one ring at a time (ring r, side s, offset o -> ring r-1, side s, offset o if o<r-1, else side s+1, offset 0), repeated until reaching Mecatol. This yields (r-1) front tiles.
- Left-equidistant tile: from the first front tile, take its same-ring left neighbor. This is clockwise left, p+1
- A player's slice = home + left neighbor + right neighbor + all front tiles + left-equidistant tile.

STRATEGY POOL / TOKENS
Each player starts with 3 tactical pool tokens and 2 strategy pool tokens. Tactical tokens activate systems to move into them. Strategy tokens pay for strategy card secondaries.

STRATEGY CARD PRIORITY (first round, general heuristic)
High: Warfare (extra movement), Trade (build more ships at home, funds Technology's secondary), Technology (path to techs enabling extra movement)
Medium: Leadership (gives more command tokens for next round, but hard to use them all turn 1), Politics (favors players picking later, sets up stronger 2nd-round picks)
Situational: Construction (round 2 setup / construction objectives), Diplomacy (if available, use it to refresh a strong planet)
Almost never: Imperial (no one reaches Mecatol turn 1)
Its worth noting that there are two very common deals: Trade almost always refreshes everyone for an I-owe-you of 1 trade good. And when using politics, the person just before you in speaker order is very likely to not want to get the worst pick, so will give you a trade good, and whatever you want for a strategy card, to be given the speaker token. Otherwise, the player often sets the speaker as themselves, so its usually more valuable later in the picking order.

UNIT DATA
Use src/data/unitData.js for base unit stats (cost, combat, move, capacity) to reason about what each faction can realistically reach and hold in their slice turn 1, given their starting fleet and any faction-specific starting units/abilities in factionData.js. Space stations can be captured by moving into the system they are in with ships, you do not land any units on them.

GENERAL GAME RULES
Planets come in exhausted when you gain control of them.
If playing with thunders edge, breakthroughs are worth considering for first round. A breakthrough can be earned by discarding... 1 secret, 2 action cards, or spending... 3 trade goods, 5 influence, 5 resources, or exhasting a planet with a tech specialty.
If there is combat, compute combat odds, don't estimate them. Combat is rolling a 10 sided dice, where the "combat" value of a unit shows the lowest roll for a hit. Sustain damage lets that unit take 2 hits.
Most time people won't fight outside of their slice on the first turn, unless there is something particularly valuable nearby, and the player can reach it unexpectedly.
Compute reachability as hex distance vs. move + capacity.
Usually, in the first round, the binding constraint is resources, not tokens.
Ships in a system holding your command token can't move out, but you can move through it (you cannot pick anything up).
Units built at home after activating home can't leave that round — which is why the Warfare primary/secondary (and construction primary in thunders edge) where production happens with no token placed is the linchpin for a three-target round.
The Diplomacy secondary (1 token, ready 2 planets) is a resource-doubler, not a defensive card in the first round. But it's less high value, because everyone else also gets their resources doubled.
At the end of strategy picking, two cards go unpicked in a 6-player game. In a 4 player or less game, you pick two strategy cards.
Warfare is most commonly used for a tactical action to either: take one system, then move those same ships to another system, OR build at home, to move out of home twice. It usually depends on the movement of the factions ships.
In the first turn, fighters are often left at home to not eat up transport space, and because the space dock can hold the fighters for free.

ANALYSIS
For each of the 6 players: identify their faction, their slice (from the definition above), their starting fleet from their faction information, and which of their slice systems they would most want to claim turn 1 given base-unit movement/capacity constraints.

OUTPUT 1 — Pick prediction
Table: player | faction | slice tiles | top 2 likely strategy card picks with reasoning | priority slice system(s) to move into. Process players in speaker order (1 through 6) so each pick removes that card from the pool for later pickers, and reflect that in later players' reasoning.

OUTPUT 2 — My best move per card
For each of the 8 strategy cards, assuming it's still available when it's my turn: would I take it, and if so, what would I do with it this round — which primary/secondary I'd use, which tactical tokens I'd spend, and which of my slice systems I'd move into and why, using my faction's actual unit stats.

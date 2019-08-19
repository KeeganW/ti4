# TI4 Race Picker
A tool to pick out races randomly for players playing in a Twilight Imperium 4 game

## Configuration
Depending on how many players you are playing with, you can change the `players` global variable so that it reflects 
the names of the players in your game.

You can add races to `exluded_races` to keep them out of the random draw. This lets you pull out "OP" races that your 
group would rather not play with. You can also use this to keep things fresh, and exclude any races which you have used 
in previous games with the same group.

By changing `race_seed` you can randomize which races are found. This is useful if you find that one person has a set of 
"OP" races that you think should be balanced accross the group of players. I recomend that you ask members inside your 
group to suggest a random value for this.

By changing `player_seat_seed` you change which players get which set of randomly selected races. I recommend that you 
use this with [this random map generator](https://ti4-map-generator.derekpeterson.ca/) to randomly set the seating 
arrangement. 

## Usage
After changing configuration variables, use 

`python3 ti4-race-picker.py`


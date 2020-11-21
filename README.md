# TI4 Generator
A tool to generate Twilight Imperium 4 game boards and assign races to players. This tool has a web client generator, as
well as 2 classes for picking races and for generating maps. The race picker and map generator can be run seperately
from the web client, however the web client makes everything easier.

## Web Quick Start

```bash
docker run -p 8080:80 -d --rm --name ti4 keeganwilliams/ti4:latest
```
Open you local browser to [localhost:8080](http://localhost:8080/)

To turn off, kill it with `docker stop ti4`.

## Map and Race Generator Quick Start

Assuming that python is installed locally (if it is not, see a guide to install it for your OS), simply run the 
following commands in your terminal.

```bash
python ti4_map_generator.py  # Starts the map generator
python ti4_race_picker.py  # Picks races for players
```

Both of these can be configured in the `if __name__ == '__main__':` section of their respective files.

### Race Picker Configuration

Depending on how many players you are playing with, you can change the `players` variable so that it reflects 
the names of the players in your game.

You can add races to `exluded_races` to keep them out of the random draw. This lets you pull out "OP" races that your 
group would rather not play with. You can also use this to keep things fresh, and exclude any races which you have used 
in previous games with the same group.

By changing `race_seed` you can randomize which races are found. This is useful if you find that one person has a set of 
"OP" races that you think should be balanced accross the group of players. I recomend that you ask members inside your 
group to suggest a random value for this.

By changing `player_seat_seed` you change which players get which set of randomly selected races.

### Map Generator Configuration

You can change your `player_count` to reflect the number of players you plan to play the game with. Be aware that this
will affect what game boards you can play on. You can see `get_board_styles` for possible options with your current 
player count.

Set the `pick_style` to reflect what you value most in a game. If your group prefers to play favoring resources, set it
to `resource`. For a balanced pick style, use `tas`.

Set `board_style` to pick the specific layout of the board you want to populate. Most player counts have some variations
that prioritize different hexes, which can be used to place the more heavily weighted tiles (based on `pick_style`)
closer to the tiles you care about.

Finally, set the `seed` if you want to have repeatable results to consult with your friends with when playing the game.

## Additional Useful Commands

To upload the latest version to docker, use the following commands (replacing the version with a new iteration of the
version count)
```shell script
docker build --tag keeganwilliams/ti4:latest --tag keeganwilliams/ti4:<new version> . 
docker push keeganwilliams/ti4:1.1
docker push keeganwilliams/ti4:latest
```

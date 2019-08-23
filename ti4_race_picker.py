#!/usr/bin/env python

# TI4 Race Picker
#
# A quick tool to help with random selection of races for a more fair and balanced picking. To use, just replace the
# players with the players from your game, and select a pair of random numbers to use as seeds for the RNG of race
# and position selection.
#
# Created by KeeganW

import random

# Change the names of the players playing this game here
players = ["P1", "P2", "P3", "P4", "P5", "P6"]

# Any races previously used (to be excluded to keep things interesting)
exluded_races = []

# The seed to split races apart into equal groupings
race_seed = 1

# The seed to set which player sits where, and what races they get to pick from.
player_seat_seed = 2

# All the races in TI4
races = [
    "Sardakk N'orr", "The Arborec", "The Barony of Letnev",
    "The Clan of Saar", "The Embers of Muaat", "The Emirates of Hacan",
    "The Federation of Sol", "The Ghosts of Creuss", "The Lizix Mindnet",
    "The Mentak Coalition", "The Naalu Collective", "The Nekro Virus",
    "The Universities of Jol-Nar", "The Winnu", "The Xxcha Kingdom",
    "The Yin Brotherhood", "The Yssaril Tribes"
]


def create_race_lists(player_count: int):
    """
    Generates a list of races evenly split amongst the number players playing in the game. Factors in any excluded races
    from being used.

    :param player_count: The number of players playing in this game of TI.
    :return: A list of lists of races.
    """
    # Get the races that are being used this round
    r = races[:]
    for race in exluded_races: r.remove(race)

    # Randomize the races based on input seed
    random.seed(race_seed)
    random.shuffle(r)
    r = r[:-(len(r) % player_count)]
    count = int(len(r) / player_count)

    # Loop through players and assign them races
    results = []
    for i in range(player_count):
        results.append(r[:count])
        r = r[count:]
    return results


def get_player_races():
    """
    Generate seating positions and race selections for a game of Twilight Imperium Version 4. To be used in conjunction
    with https://ti4-map-generator.derekpeterson.ca/ for a balanced randomized game of TI4.

    :return: None
    """
    p = players[:]
    c = 0

    # Randomize the seating positions, and races available to players
    random.seed(player_seat_seed)
    random.shuffle(p)

    # Generate the races for the players, then print out the results.
    for r in create_race_lists(len(p)):
        print("%s (%d): %s" % (p[c], c+1, ", ".join(r)))
        c += 1


if __name__ == '__main__':
    get_player_races()

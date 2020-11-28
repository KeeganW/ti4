# !/usr/bin/env python
"""
TI4 Race Picker

A quick tool to help with random selection of races for a more fair and balanced picking. To use,
modify the name == main function with the parameters of your choice.
"""
import random


class TI4Races:
    """
    Create a list of races that a player can pick from to play in a new TI4 game.
    """
    def __init__(self, player_count: int = 6, players: list = None) -> None:
        # Check that it is a valid number of players
        if player_count < 2:
            player_count = 2
        elif player_count > 6:
            player_count = 6
        self.player_count = player_count
        self.races = [
            "Sardakk N'orr", "The Arborec", "The Barony of Letnev",
            "The Clan of Saar", "The Embers of Muaat", "The Emirates of Hacan",
            "The Federation of Sol", "The Ghosts of Creuss", "The Lizix Mindnet",
            "The Mentak Coalition", "The Naalu Collective", "The Nekro Virus",
            "The Universities of Jol-Nar", "The Winnu", "The Xxcha Kingdom",
            "The Yin Brotherhood", "The Yssaril Tribes"
        ]
        self.excluded_races = []  # The names of any races to not assign to any player
        self.player_options = False  # Whether the player can pick from a set of races
        self.seed = 0

        # Generate a prefilled list of players
        players_default = ["P1", "P2", "P3", "P4", "P5", "P6"]
        players = players_default if players is None else players

        # Get only the number of players needed
        self.player_names = players[:player_count]

        # Check if the player names list is long enough
        if len(self.player_names) < player_count:
            self.player_names += players_default[len(self.player_names):player_count]
        self.player_races = [[]]

    def set_seed(self, new_seed: int) -> None:
        """
        Set the seeding of this instance, and then set random with the seed.
        :param new_seed: The new seed to set the instance to.
        """
        self.seed = new_seed

    def set_player_options(self, player_options: bool = True) -> None:
        """
        Set whether players will get a list of options to choose from, or just a single race.
        :param player_options: True if players should be given a list of races to choose from.
        """
        self.player_options = player_options

    def shuffle_player_position(self) -> bool:
        """
        Shuffle around the player positions.
        :return: A bool indicating if the shuffle occured.
        """
        random.seed(self.seed)
        random.shuffle(self.player_names)
        return True

    def create_race_lists(self) -> None:
        """
        Generates a list of races evenly split amongst the number players playing in the game.
        Factors out any excluded races from being used.
        :return: A list of lists of races.
        """
        random.seed(self.seed)

        # Get the races that are being used this round
        races = self.races.copy()
        for race in self.excluded_races:
            races.remove(race)

        if len(races) < self.player_count:
            # Removed too many races, cannot continue
            return None

        # Randomize the races
        random.shuffle(races)

        if self.player_options:
            # Reduce the list to be divisible by the number of players
            races = races[:-(len(races) % self.player_count)]

            # Get the number of races we are playing with
            count = int(len(races) / self.player_count)

        # Loop through players and assign them races
        self.player_races = []
        for i in range(self.player_count):
            if self.player_options:
                # Grab the first count races, then remove them from the list for subsequent calls
                self.player_races.append(races[:count])
                races = races[count:]
            else:
                # Just getting the next race in the list
                self.player_races.append([races.pop(0)])

        return None

    def __repr__(self) -> str:
        return self.__str__()

    def __str__(self) -> str:
        table_position = 0
        results = ""
        for races in self.player_races:
            results += "%s (%d): %s\n" % (self.player_names[table_position], table_position + 1,
                                          ", ".join(races))
            table_position += 1
        return results


if __name__ == '__main__':
    # Generate the new ti4 races object
    ti4_races = TI4Races(4, ['A', 'S', 'D', 'F'])

    # Set a specific seed to generate the race options with
    ti4_races.set_seed(1337)

    # Allow each player to have multiple races to pick from
    ti4_races.set_player_options(True)

    # Shuffle around the seats of the players
    ti4_races.shuffle_player_position()

    # Generate the list of races each player can play
    ti4_races.create_race_lists()

    # Print the board to console to view what races are played
    print(ti4_races)

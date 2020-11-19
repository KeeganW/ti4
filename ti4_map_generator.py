"""
TI4 Board provides a class for generating a representation of a TI4 board. The board can be
represented at a list, where the first element is mecatol rex, and the board is built out in a
clockwise fashion from there.
"""
import random

from boards_config import boards
from tile_data import tiles


class TI4Board:
    """
    TI4 Board generates a game board of tiles based on user constraints of player count, board
    layout styles, and tile picking styles.

    The board is represented in same format as Table Top Simulator. Mecatol Rex is always in the
    center, then going up and clockwise to fill in the missing hexes. For example, the planets
    around M-Rex could be listed in the format [24, 45, 19, 22, 21, 44]. 24 would be at the 12
    o'clock position, 45 at the 1:30 position, 19 at the 3 o'clock, and so on. The tile after 44
    would again be at M-Rex's 12 o'clock position, but the second ring out. In the list, -1 means
    empty, and 0 means an unregistered home system.
    """
    number_of_tiles = 37  # There are 37 tiles on the board, including M-Rex
    ring_outer = 18  # The number of tiles on the outer ring
    ring_middle = 10  # The number of tiles on the middle ring
    ring_inner = 6  # The number of tiles on the inner ring
    board_as_list = [-1] * number_of_tiles  # The board, initialized to -1s
    possible_boards = boards  # All the boards that can be used
    tile_data = tiles  # All the tile data
    shuffle_boards_before_placement = True  # Whether the board priorities should be shuffled
    possible_pick_styles = ['random', 'resource', 'influence', 'tas']  # For weighted picking tiles

    def __init__(self, player_count: int = 6) -> None:
        # M-Rex is always in the middle
        self.board_as_list[0] = 18

        # Users can provide their given player counts
        self.player_count = player_count
        self.board_style = 'normal'
        self.pick_style = 'random'

        random.seed(0)

    def get_planet_indexes_to_place(self) -> list:
        """
        Get a list of the indexes in the board_as_list that need to have planets assigned to them.

        :return: A list of indexes
        """
        primary = self.possible_boards[self.player_count][self.board_style]['primary_tiles']
        secondary = self.possible_boards[self.player_count][self.board_style]['secondary_tiles']
        tertiary = self.possible_boards[self.player_count][self.board_style]['tertiary_tiles']

        # If shuffling, we need to shuffle primary, secondary, and tertiary indexes.
        if self.shuffle_boards_before_placement:
            random.shuffle(primary)
            random.shuffle(secondary)
            random.shuffle(tertiary)

        planet_list = primary + secondary + tertiary

        # Return this list of planet tiles to populate
        return planet_list

    def get_possible_planets(self) -> list:
        """
        Based on pick style, get a list of planets to add to the board.
        If you add a pick style, make sure to add it to self.possible_pick_styles!
        :return: An ordered list of tiles to add to the board.
        """
        possible_planets = list(range(19, 50))  # M-Rex through all anomalies
        if self.pick_style == 'random':
            # Use true randomness to configure the tile placement
            random.shuffle(possible_planets)
            return possible_planets
        if self.pick_style == 'resource':
            # Favor resources above all else. Medium distribution for other components.
            weights = {
                'resource': 1.0,
                'influence': 0.1,
                'planet_count': 0.1,
                'specialty': 0.1,
                'anomaly': 0.1,
                'wormhole': 0.1
            }

            return self.get_weighted_planet_list(possible_planets, weights)
        if self.pick_style == 'influence':
            # Favor influence above all else. Medium distribution for other components.
            weights = {
                'resource': 0.1,
                'influence': 1.0,
                'planet_count': 0.1,
                'specialty': 0.1,
                'anomaly': 0.1,
                'wormhole': 0.1
            }

            return self.get_weighted_planet_list(possible_planets, weights)
        if self.pick_style == 'tas':
            # A custom set of weights favored by the author and the author's playing group.
            weights = {
                'resource': 1.0,
                'influence': 0.4,
                'planet_count': 0.4,
                'specialty': 0.6,
                'anomaly': 0.1,
                'wormhole': 0.1
            }

            return self.get_weighted_planet_list(possible_planets, weights)

    def get_weighted_planet_list(self, possible_planets, weights):
        # Get every planet's weight using the provided weights
        planet_weights = list()
        for planet_tile_number in possible_planets:
            planet_weights.append(
                (planet_tile_number, self.get_weight(planet_tile_number, weights)))
        # Sort the returned list by weight
        planet_weights.sort(key=lambda x: x[1])
        # Get just the planet number
        ordered_planets = list()
        for weighted_planet in planet_weights:
            ordered_planets.append(weighted_planet[0])
        return ordered_planets

    def get_weight(self, planet_tile_number, weights):
        total_weight = 0
        tile = self.tile_data[planet_tile_number]

        for planet in tile['planets']:
            total_weight += planet['resources'] * weights['resource']
            total_weight += planet['influence'] * weights['influence']
            total_weight += weights['planet_count']
            if planet['specialty']:
                total_weight += weights['specialty']

        if tile['type'] == 'anomaly':
            total_weight += weights['anomaly']
        if tile['wormhole']:
            total_weight += weights['wormhole']

        return total_weight

    def generate_new_board(self) -> list:
        """
        Generates a TI4 board using the set parameters for this instance of the board.
        :return: The board as a list.
        """
        # Get a list of planets to populate
        planet_indexes_to_place = self.get_planet_indexes_to_place()

        # Get an ordered list of planets to use to fill board with
        possible_planets = self.get_possible_planets()

        # Place planets in a specific order, focusing on spreading the planets evenly
        for planet_index in planet_indexes_to_place:
            planet = possible_planets.pop()
            self.board_as_list[planet_index] = planet

        # Set home worlds to 0
        for planet_index in \
                self.possible_boards[self.player_count][self.board_style]['home_worlds']:
            self.board_as_list[planet_index] = 0

        return self.board_as_list

    def get_board(self) -> list:
        """
        Get the board.
        :return: The board as a list.
        """
        return self.board_as_list

    def set_seed(self, new_seed: int) -> None:
        """
        Set the seeding of this instance.
        :param new_seed: The new seed to set the instance to.
        """
        # Check that the new style is acceptable
        random.seed(new_seed)

    def get_board_styles(self) -> list:
        """
        Get all the possible styles for a given player count.
        :return: A list of names of boards styles to play with
        """
        return list(self.possible_boards[self.player_count].keys())

    def set_board_style(self, new_style: str) -> bool:
        """
        Set the board style to a provided style.
        :param new_style: The new style to set the board too.
        :return: True if set, False if not
        """
        # Check that the new style is acceptable
        if new_style in self.possible_boards[self.player_count].keys():
            self.board_style = new_style
            return True
        return False

    def get_pick_styles(self) -> list:
        """
        Get all the possible styles for a given player count.
        :return: A list of names of boards styles to play with
        """
        return self.possible_pick_styles

    def set_pick_style(self, new_style: str) -> bool:
        """
        Set the pick style to a provided style.
        :param new_style: The new style to set the picking style too.
        :return: True if set, False if not
        """
        # Check that the new style is acceptable
        if new_style in self.possible_pick_styles:
            self.pick_style = new_style
            return True
        return False

    def set_shuffle_boards_before_placement(self, shuffle_board: bool):
        """
        Set whether or not to shuffle the individual priorities before placement.
        :param shuffle_board: A bool, true for shuffling
        :return: The current status of shuffle_boards_before_placement
        """
        if isinstance(shuffle_board, bool):
            self.shuffle_boards_before_placement = shuffle_board
        return self.shuffle_boards_before_placement

    def __repr__(self) -> str:
        information = "A -1 means an empty system with no tile, " \
                      "and 00 means an unplaced home system.\n"
        return information + self.__str__()

    def __str__(self) -> str:
        """
        Generates a string representation of the game board based on the current content of the
        board_as_list variable. The base map uses triple digits so that when a replacement happens,
        it is not re-replaced later on.
        :return: A string representation of the game board.
        """
        base_map = """                      ____
                     /    \\
                ____/ 019  \\____
               /    \\      /    \\
          ____/ 036  \\____/ 020  \\____
         /    \\      /    \\      /    \\
    ____/ 035  \\____/ 007  \\____/ 021  \\____
   /    \\      /    \\      /    \\      /    \\
  / 034  \\____/ 018  \\____/ 008  \\____/ 022  \\
  \\      /    \\      /    \\      /    \\      /
   \\____/ 017  \\____/ 001  \\____/ 009  \\____/
   /    \\      /    \\      /    \\      /    \\
  / 033  \\____/ 006  \\____/ 002  \\____/ 023  \\
  \\      /    \\      /    \\      /    \\      /
   \\____/ 016  \\____/ 000  \\____/ 010  \\____/
   /    \\      /    \\      /    \\      /    \\
  / 032  \\____/ 005  \\____/ 003  \\____/ 024  \\
  \\      /    \\      /    \\      /    \\      /
   \\____/ 015  \\____/ 004  \\____/ 011  \\____/
   /    \\      /    \\      /    \\      /    \\
  / 031  \\____/ 014  \\____/ 012  \\____/ 025  \\
  \\      /    \\      /    \\      /    \\      /
   \\____/ 030  \\____/ 013  \\____/ 026  \\____/
        \\      /    \\      /    \\      /
         \\____/ 029  \\____/ 027  \\____/
              \\      /    \\      /
               \\____/ 028  \\____/
                    \\      /
                     \\____/"""

        # Loop over the board as a list, getting the index and value, and replace it into the map
        for index in range(len(self.board_as_list)):
            tile_number = self.board_as_list[index]
            base_map = base_map.replace(
                str("{:03d}".format(index)), str(" {:02d}".format(tile_number)))

        return base_map


if __name__ == '__main__':
    # Create a new board object with your desired player count
    ti_board = TI4Board(player_count=6)

    # Set the pick style for how planets are weighted to be placed
    #   (use get_pick_styles to see options)
    ti_board.set_pick_style('random')

    # Set the specific board layout to configure what spaces will be filled
    #   (use get_board_styles to see options)
    ti_board.set_board_style('normal')

    # Set a specific seed to iterate over options, or work with your friends to find a board
    ti_board.set_seed(1337)

    # Generate the new board
    ti_board.generate_new_board()

    # Print the board out to console to view tile placements
    print(ti_board)

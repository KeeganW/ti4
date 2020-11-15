import random


class TI4Board:
    """
    Board is represented in same format as Table Top Simulator. Mecatol Rex is always in the center,
    then go up, and clockwise to fill in the missing hexes. For example, the planets around M-Rex
    could be listed in the format [24, 45, 19, 22, 21, 44]. 24 would be at the 12 o'clock position,
    45 at the 1:30 position, 19 at the 3 o'clock, and so on. The tile after 45 would again be at
    M-Rex's 12 o'clock position, but the second ring out. In the list, -1 means empty, and 0 means
    home system.
    """
    seed = 0
    number_of_tiles = 37  # There are 37 tiles on the board, including M-Rex
    ring_outer = 18
    ring_middle = 10
    ring_inner = 6
    board_as_list = [-1] * number_of_tiles
    possible_boards = {
        2: {
            'normal': {
                'empty_tiles': [],
                'home_worlds': [20, 23]
            }
        },
        3: {
            'normal': {
                'empty_tiles': [],
                'home_worlds': [20, 23, 26]
            }
        },
        4: {
            'normal': {
                'empty_tiles': [],
                'home_worlds': [20, 23, 26, 29]
            }
        },
        5: {
            'normal': {
                'empty_tiles': [],
                'home_worlds': [20, 23, 26, 29, 32]
            }
        },
        6: {
            'normal': {
                'empty_tiles': [],
                'home_worlds': [19, 22, 25, 28, 31, 34]
            }
        }
    }
    possible_pick_styles = ['random', 'resource', 'influence', 'tas']

    def __init__(self, player_count: int = 6):
        self.board_as_list[0] = 18  # M-Rex is always in the middle

        # Users can provide their given player counts
        self.player_count = player_count
        self.board_style = 'normal'
        self.pick_style = 'random'

    def get_planet_indexes_to_place(self):
        """
        Get a list of the indexes in the board_as_list that need to have planets assigned to them.

        :return: A list of indexes
        """
        # Setup planets that need to be allocated
        planet_list = list(range(self.number_of_tiles))

        # Get home world indexes
        home_world_locations = \
            self.possible_boards[self.player_count][self.board_style]['home_worlds']

        # Get empty tile indexes
        empty_tile_locations = \
            self.possible_boards[self.player_count][self.board_style]['empty_tiles']

        # Combine to two, since we want to remove both
        tiles_to_remove = home_world_locations + empty_tile_locations

        # Pop planets that are home worlds
        tiles_to_remove.sort(reverse=True)  # Need to go back to front
        for tile_index in tiles_to_remove:
            planet_list.pop(tile_index)

        # Finally, pop M-Rex
        planet_list.pop(0)

        # Return this list of planet tiles to populate
        return planet_list

    def get_board_styles(self):
        """
        Get all the possible styles for a given player count.

        :return: A list of names of boards styles to play with
        """
        return self.possible_boards[self.player_count].keys()

    def set_board_style(self, new_style):
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

    def get_pick_styles(self):
        """
        Get all the possible styles for a given player count.

        :return: A list of names of boards styles to play with
        """
        return self.possible_pick_styles

    def set_pick_style(self, new_style):
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

    def get_possible_planets(self):
        if self.pick_style == 'random':
            possible_planets = list(range(19, 50))
            random.seed(self.seed)
            random.shuffle(possible_planets)
            return possible_planets
        if self.pick_style == 'resource':
            return []
        if self.pick_style == 'influence':
            return []
        if self.pick_style == 'tas':
            return []

    def generate_new_board(self):
        """
        Generates a TI4 board using the set parameters for this instance of the board.

        :return: The board as a list.
        """
        # Get a list of planets to populate
        planet_indexes_to_place = self.get_planet_indexes_to_place()

        # Get a list of planets to use to fill with
        possible_planets = self.get_possible_planets()

        # Loop over planets we need to place
        for planet_index in planet_indexes_to_place:
            planet = possible_planets.pop()
            self.board_as_list[planet_index] = planet

        # Set home worlds to 0
        for planet_index in self.possible_boards[self.player_count][self.board_style]['home_worlds']:
            self.board_as_list[planet_index] = 0

        return self.board_as_list

    def get_board(self):
        """
        Get the board.

        :return: The board as a list.
        """
        return self.board_as_list

    def set_seed(self, new_seed: int):
        """
        Set the seeding of this instance.

        :param new_seed: The new seed to set the instance to.
        :return: None
        """
        # Check that the new style is acceptable
        self.seed = new_seed


if __name__ == '__main__':
    ti_board = TI4Board()

    print(ti_board.generate_new_board())

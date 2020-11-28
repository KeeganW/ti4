"""
This config configures all possible boards and their details. The dictionary is split up by player
 count, and then by various styles of boards. Each board layout per player count includes the
 following:

description: A quick blurb on what to expect from the map layout
empty_tiles: These are tiles that are not actually placed at game setup time. They are effectively
    empty and the player cannot enter them.
home_worlds: The locations on the board of the players home worlds. These can be used to
    automatically assign a random player their home world, or to be filled in later after a player
    chooses their race.
primary_tiles: These are key systems that each player will want to control on their first turn
secondary_tiles: These are systems which are a priority, but could be contested by other players
tertiary_tiles: These will be the contested systems of the galaxy where, for most of the game,
    they will be fought over by various races.

The numbers in each list reference a standard TI hex layout labeled board:
                      ____
                     /    \
                ____/  19  \____
               /    \      /    \
          ____/  36  \____/  20  \____
         /    \      /    \      /    \
    ____/  35  \____/  07  \____/  21  \____
   /    \      /    \      /    \      /    \
  /  34  \____/  18  \____/  08  \____/  22  \
  \      /    \      /    \      /    \      /
   \____/  17  \____/  01  \____/  09  \____/
   /    \      /    \      /    \      /    \
  /  33  \____/  06  \____/  02  \____/  23  \
  \      /    \      /    \      /    \      /
   \____/  16  \____/  00  \____/  10  \____/
   /    \      /    \      /    \      /    \
  /  32  \____/  05  \____/  03  \____/  24  \
  \      /    \      /    \      /    \      /
   \____/  15  \____/  04  \____/  11  \____/
   /    \      /    \      /    \      /    \
  /  31  \____/  14  \____/  12  \____/  25  \
  \      /    \      /    \      /    \      /
   \____/  30  \____/  13  \____/  26  \____/
        \      /    \      /    \      /
         \____/  29  \____/  27  \____/
              \      /    \      /
               \____/  28  \____/
                    \      /
                     \____/
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
"""
boards = {
    2: {
        'normal': {
            'description': 'Control what is around you for resources, and attack the center for '
                           'victory points.',
            'empty_tiles': [11, 17, 19, 20, 24, 25, 26, 27, 28, 29, 33, 34, 35, 36],
            'home_worlds': [22, 31],
            'primary_tiles': [32, 15, 30, 21, 9, 23],
            'secondary_tiles': [16, 5, 14, 8, 2, 10],
            'tertiary_tiles': [4, 13, 3, 12, 1, 7, 6, 18]
        }
    },
    3: {
        'normal': {
            'description': 'Control what is around you for resources, and attack the center for '
                           'victory points.',
            'empty_tiles': [19, 20, 24, 25, 26, 30, 31, 32, 36],
            'home_worlds': [22, 28, 34],
            'primary_tiles': [9, 13, 17, 21, 23, 27, 29, 33, 35],
            'secondary_tiles': [7, 8, 10, 11, 12, 14, 15, 16, 18],
            'tertiary_tiles': [1, 2, 3, 4, 5, 6]
        },
        'compact': {
            'description': 'A more compact variant, that encourages fighting. Recommended to play '
                           'with high resource values.',
            'empty_tiles': [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
            'home_worlds': [10, 14, 18],
            'primary_tiles': [7, 9, 11, 13, 15, 17],
            'secondary_tiles': [1, 2, 3, 4, 5, 6],
            'tertiary_tiles': [8, 12, 16]
        },
        'manta': {
            'description': 'A flatter 3 player map proposed by Arborec Soup.',
            'empty_tiles': [7, 8, 9, 17, 18, 19, 20, 21, 22, 23, 33, 34, 35, 36],
            'home_worlds': [25, 28, 31],
            'primary_tiles': [11, 13, 15],
            'secondary_tiles': [24, 26, 27, 29, 30, 32],
            'tertiary_tiles': [1, 2, 3, 4, 5, 6, 10, 12, 14, 16]
        }
    },
    4: {
        'normal': {
            'description': 'Control what is around you for resources, and attack the center for '
                           'victory points.',
            'empty_tiles': [],
            'home_worlds': [23, 27, 32, 36],
            'primary_tiles': [19, 22, 24, 26, 28, 31, 33, 35],
            'secondary_tiles': [7, 9, 10, 12, 13, 15, 16, 18],
            'tertiary_tiles': [1, 2, 3, 4, 5, 6, 8, 11, 14, 17, 20, 21, 25, 29, 30, 34]
        },
        'horizontal': {
            'description': 'A slightly smaller than normal 4 player board which is aligned '
                           'horizontally.',
            'empty_tiles': [19, 20, 27, 28, 29, 36],
            'home_worlds': [22, 25, 31, 34],
            'primary_tiles': [9, 11, 15, 17],
            'secondary_tiles': [21, 23, 24, 26, 30, 32, 33, 35],
            'tertiary_tiles': [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 16, 18, 22, 25, 31, 34]
        },
        'vertical': {
            'description': 'An even smaller board aligned vertically.',
            'empty_tiles': [19, 22, 23, 24, 25, 31, 32, 33, 34],
            'home_worlds': [21, 26, 30, 35],
            'primary_tiles': [9, 11, 15, 17, 20, 27, 29, 36],
            'secondary_tiles': [7, 8, 12, 13, 14, 18],
            'tertiary_tiles': [1, 2, 3, 4, 5, 6, 10, 16]
        },
        'gaps': {
            'description': 'Vertical, but with gaps to encourage fights with neighbors.',
            'empty_tiles': [1, 4, 19, 22, 23, 24, 25, 31, 32, 33, 34],
            'home_worlds': [21, 26, 30, 35],
            'primary_tiles': [9, 11, 15, 17, 20, 27, 29, 36],
            'secondary_tiles': [7, 8, 12, 13, 14, 18],
            'tertiary_tiles': [2, 3, 5, 6, 10, 16]
        }
    },
    5: {
        'normal': {
            'description': 'Control what is around you for resources, and attack the center for '
                           'victory points.',
            'empty_tiles': [],
            'home_worlds': [21, 25, 28, 31, 35],
            'primary_tiles': [9, 11, 13, 15, 17],
            'secondary_tiles': [8, 18, 22, 24, 26, 27, 29, 30, 32, 34],
            'tertiary_tiles': [1, 2, 3, 4, 5, 6, 7, 10, 12, 14, 16, 19, 20, 23, 33, 36]
        },
        'diamond': {
            'description': 'A slightly smaller map than normal, which focuses on being closer to '
                           'Mecatol Rex.',
            'empty_tiles': [22, 25, 26, 30, 31, 34],
            'home_worlds': [21, 24, 28, 32, 35],
            'primary_tiles': [9, 11, 13, 15, 17],
            'secondary_tiles': [8, 10, 16, 18, 20, 23, 27, 29, 33, 36],
            'tertiary_tiles': [1, 2, 3, 4, 5, 6, 7, 12, 14, 19]
        },
    },
    6: {
        'normal': {
            'description': 'Control what is around you for resources, and attack the center for '
                           'victory points.',
            'empty_tiles': [],
            'home_worlds': [19, 22, 25, 28, 31, 34],
            'primary_tiles': [7, 9, 11, 13, 15, 17],
            'secondary_tiles': [20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 36],
            'tertiary_tiles': [8, 10, 12, 14, 16, 18, 1, 2, 3, 4, 5, 6]
        },
        'warzone': {
            'description': 'To battle stations! This map layout favors the center of the galaxy. '
                           'Focus on controlling planets around Mecatol Rex.',
            'empty_tiles': [],
            'home_worlds': [19, 22, 25, 28, 31, 34],
            'primary_tiles': [8, 10, 12, 14, 16, 18, 1, 2, 3, 4, 5, 6],
            'secondary_tiles': [7, 9, 11, 13, 15, 17],
            'tertiary_tiles': [20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 36]
        }
    }
}

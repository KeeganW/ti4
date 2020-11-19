"""
This config configures all possible boards and their details. The dictionary is split up by player
 count, and then by various styles of boards from external sources. Each board layout per
 player count includes the following:

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
"""
boards = {
    2: {
        'normal': {
            'description': "",
            'empty_tiles': [],
            'home_worlds': [19, 28],
            'primary_tiles': [],
            'secondary_tiles': [],
            'tertiary_tiles': []
        }
    },
    3: {
        'normal': {
            'description': "",
            'empty_tiles': [],
            'home_worlds': [19, 25, 31],
            'primary_tiles': [],
            'secondary_tiles': [],
            'tertiary_tiles': []
        }
    },
    4: {
        'normal': {
            'description': "",
            'empty_tiles': [],
            'home_worlds': [19, 25, 28, 34],
            'primary_tiles': [],
            'secondary_tiles': [],
            'tertiary_tiles': []
        }
    },
    5: {
        'normal': {
            'description': "",
            'empty_tiles': [],
            'home_worlds': [19, 22, 25, 28, 31],
            'primary_tiles': [],
            'secondary_tiles': [],
            'tertiary_tiles': []
        }
    },
    6: {
        'normal': {
            'description': "Control what is around you for resources, and attack the center for victory points.",
            'empty_tiles': [],
            'home_worlds': [19, 22, 25, 28, 31, 34],
            'primary_tiles': [7, 9, 11, 13, 15, 17],
            'secondary_tiles': [20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 36],
            'tertiary_tiles': [8, 10, 12, 14, 16, 18, 1, 2, 3, 4, 5, 6]
        },
        'warzone': {
            'description': "To battle stations! This map layout favors the center of the galaxy. Focus on controlling planets around Mecatol Rex.",
            'empty_tiles': [],
            'home_worlds': [19, 22, 25, 28, 31, 34],
            'primary_tiles': [8, 10, 12, 14, 16, 18, 1, 2, 3, 4, 5, 6],
            'secondary_tiles': [7, 9, 11, 13, 15, 17],
            'tertiary_tiles': [20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 36]
        }
    }
}
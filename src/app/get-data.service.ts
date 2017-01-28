import {Injectable} from '@angular/core';

@Injectable()
export class GetDataService {

  constructor() {
  }

//Données sur les jeux..
  gamesJson = [{
    "id": 1,
    "name": "Super Mario World",
    "summary": "Super Mario World (known in Japan as Super Mario World: Super Mario Bros. 4) is a side-scrolling platformer developed by Nintendo EAD and published by Nintendo for the Super Nintendo Entertainment System on November 21, 1990 (in Japan), August 31, 1991 (in North America), and April 11, 1992 (in Europe).\n\nOne of the launch titles of the SNES (and bundled with early systems in North America), Super Mario World is the fifth main game in the Super Mario series. (starring Nintendo's mascot, Mario, and his brother, Luigi). The game follows both Mario brothers as they explore Dinosaur Land (known for its large amount of dinosaurs) to find and defeat the evil Koopa king Bowser (and his seven underlings, the Koopalings) while rescuing Princess Toadstool.\n\nAlong with new abilities (such as the \"Spin Jump\"), a new power-up (the \"Cape Feather\") and more obstacles, the game introduces dinosaur companions (known as Yoshi) that Mario and Luigi can ride. Yoshi, known for using their long tongues to snare and eat enemies, have become a fan-favorite among the series (giving them their own games and spin-offs, most notably this game's prequel).\n\nSpecial bundles of the SNES in 1994 included a compilation cartridge mixing Super Mario World with Super Mario All-Stars. The only difference in this version is a new sprite set for Luigi. The original game was later ported to the Game Boy Advance on February 11, 2002 as Super Mario World: Super Mario Advance 2. Along with a special version of the original Mario Bros., the port includes a variety of differences, including Luigi as a selectable character (who now has unique features, such as his floating jump from Super Mario Bros. 2), new voice acting, and the ability to save anywhere. The original game was also digitally re-released in Nintendo's Virtual Console platform for the Wii (on February 5, 2007) and Wii U (on April 26, 2013).",
    "genres": [16],
    "screenshots": [{
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/pdkvjmhh5urjnrwng5cg.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/bbkmycy8wacpka1hroy5.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/i9sgtqwdmmdjzox51rgu.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/xqj7kfjsgqrboda05dnp.png"
    }],
    "cover": {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/rbdpnsh7jkx4cvejygkc.png"
    }
  }, {
    "id": 2,
    "name": "Super Mario Bros. 3",
    "summary": "Super Mario Bros. 3 is a platform video game for the Nintendo Entertainment System (NES) video game console. Mario and Luigi embark on a quest to save Princess Toadstool and the rulers of seven different kingdoms from the antagonist Bowser and his children, the Koopalings. The player, as Mario or Luigi, is able to defeat enemies by stomping them or using items that bestow magical powers. Mario and Luigi are given a wider range of abilities than in previous Super Mario games, including flying or sliding down slopes. In addition, Super Mario Bros. 3 introduces numerous elements, such as new enemy characters and the use of a world map to transition between levels, that have reappeared in or have influenced subsequent Mario games.",
    "genres": [16],
    "screenshots": [{
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/epaagugpfhd0rmsd6kol.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/erjdg6rwwxg0vpbbvnat.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/cfuaaue2zxbhr20dubtq.png"
    }],
    "videos": [{
      "name": "Gameplay video",
      "video_id": "wz3BuYYhnn0"
    }, {
      "name": "Gameplay video",
      "video_id": "viozNEfDEWk"
    }],
    "cover": {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/ogguvec9vhrsml4uxqrg.png"
    }
  }, {
    "id": 3,
    "name": "Candy Crush Soda Saga",
    "summary": "Spin-off to the famous Candy Crush Saga, made by King, it's a game that has similar mechanics, introducing new features such as the soda bottles. Candy Crush Soda Saga is a brand new game from the makers of the legendary Candy Crush Saga. New candies, more divine combinations and challenging game modes brimming with purple soda!",
    "genres": [15],
    "screenshots": [{
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/rvwwnsmxrwkegkewqhlo.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/wh0fnoscy5eyhkdotosd.png"
    }],
    "cover": {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/bdacvq7evn1skjcsbozw.png"
    }
  }, {
    "id": 4,
    "name": "Super Mario Run",
    "summary": "Super Mario goes mobile!\nUnlike other games in the franchise, Mario will run on his own. All you do is tap the screen to jump. The longer you tap, the higher the jump meaning that you can play the game with one hand.\n\nIn this game, Mario constantly moves forward through the courses while you use a variety of jumps to navigate. Mario will behave differently depending on the timing of your taps, so it's up to you to show off particularly smooth moves, gather coins, and reach the goal.\n\nThere are three different game modes to play. The first mode features challenging courses for you to complete while collecting coins. The second mode has you challenge the play data of other players to show who can beat a course with the most style to impress Toads into joining you. In the third mode, you get to create your own Mushroom Kingdom using the coins and Toads collected by playing the first two game modes.",
    "genres": [16],
    "screenshots": [{
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/l7xdqj6emlchkeew1feb.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/wg4hsi2qjkwmcsaf3vks.png"
    }],
    "videos": [{
      "name": "Trailer",
      "video_id": "VTglyDBdp-A"
    }, {
      "name": "Gameplay video",
      "video_id": "E39ychZKnDI"
    }],
    "cover": {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/xlrghajdrbhlpuyk1xgf.png"
    }
  }, {
    "id": 5,
    "name": "Mario Kart 64",
    "genres": [14],
    "screenshots": [{
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/xnntl2zbklhepqro5xa6.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/yympbn0gjtmibqtp9fxi.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/vcz5gwipakmuhxrvnvsb.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/qovzv91obyrvq0qvwb4k.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/e1eca89sz7nqtp0f4xft.png"
    }],
    "cover": {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/tnapkuvk8aup3aoamxuz.png"
    }
  }, {
    "id": 6,
    "name": "Pokémon Trading Card Game Online",
    "summary": "Pokémon Trading Card Game Online (also referred to as Pokémon TCG Online or TCGO) is a downloadable game and the first Pokémon game of the MMOTCG (massively-multiplayer online trading card game) genre. It is based on the Pokémon Trading Card Game or TCG aspect of the Pokémon franchise and follows the same rules. The game was originally released as a browser-based game in March 2011 before being relaunched as a downloadable game in 2012 for the PC and Mac, iPad in 2014, and Android tablets in 2016. It officially emerged from open beta testing in February 2015 but continues to be refined and improved upon on a continual basis. The game is free to download and is accessible to both beginners and experienced players. It is also intended to be used by both adults and children. Players do not need to purchase physical Theme decks or Booster packs from a store in order to play. Players are provided with everything they need, and there are multiple means of earning new cards and other rewards as the game is played.",
    "genres": [9],
    "screenshots": [{
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/wlw3qjmd9u87he3zleh5.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/wlw3qjmd9u87he3zleh5.png"
    }],
    "cover": {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/wlw3qjmd9u87he3zleh5.png"
    }
  }, {
    "id": 7,
    "name": "Hello, Neighbour!",
    "summary": "Hello Neighbor is a stealth horror game about sneaking into your neighbor's house to figure out what horrible secrets he's hiding in the basement. You play against an advanced AI that learns from your every move. Really enjoying climbing through that backyard window? Expect a bear trap there. Sneaking through the front door? There'll be cameras there soon. Trying to escape? The Neighbor will find a shortcut and catch you.",
    "genres": [15],
    "screenshots": [{
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/y9s7qv25untipfcirlei.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/dlnozlv1jmjv5zrm3iqt.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/wwm17mai4r1jqaiggcvc.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/pahjxlwyniic8tijyu0t.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/mnokrxmkflaianxhsrkd.png"
    }],
    "videos": [{
      "name": "Teaser",
      "video_id": "VIbdZzCi048"
    }, {
      "name": "Gameplay video",
      "video_id": "ndwmRDdfoZk"
    }, {
      "name": "Gameplay video",
      "video_id": "t9L7Efy8dBU"
    }, {
      "name": "Trailer",
      "video_id": "TKLx5rhpS2k"
    }],
    "cover": {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/tyelx5vyuefiuff0gqai.png"
    }
  }, {
    "id": 8,
    "name": "Grand Theft Auto: Vice City",
    "summary": "In the year 1986, Tommy Vercetti is heavily indebted to his mafia superiors after a drug deal gone awry, but his dreams of taking over Vice City (based on Miami) push him down a different path. Featuring a wide variety of vehicles, unique radio stations playing hit songs from the era and an intense atmosphere, GTA: Vice City offers valuable insight into the excess and mob life of '80's Miami.",
    "storyline": "Welcome to Vice City. Welcome to the 1980s.&#13;&#13;\n&#13;&#13;\nHaving just made it back onto the streets of Liberty City after a long stretch in maximum security, Tommy Vercetti is sent to Vice City by his old boss, Sonny Forelli. They were understandably nervous about his re-appearance in Liberty City, so a trip down south seemed like a good idea. But all does not go smoothly upon his arrival in the glamorous, hedonistic metropolis of Vice City. He's set up and is left with no money and no merchandise. Sonny wants his money back, but the biker gangs, Cuban gangsters, and corrupt politicians stand in his way. Most of Vice City seems to want Tommy dead. His only answer is to fight back and take over the city himself.",
    "genres": [18],
    "screenshots": [{
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/yl0nzc7itjnc6oyawagp.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/tfcu496z7nwgnkbqfvrv.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/cqiwbbgjhersmqru7339.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/ilxqfgiaxygal1srqnfz.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/txxrbak4yycdogvvjwtb.png"
    }],
    "videos": [{
      "name": "Trailer",
      "video_id": "MpmDawqOfqs"
    }, {
      "name": "Gameplay video",
      "video_id": "Iq2Jzksu8BA"
    }],
    "cover": {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/wfeojuvgbk2kctpfdeff.png"
    }
  }, {
    "id": 9,
    "name": "PewDiePie's Tuber Simulator",
    "summary": "Follow in the footsteps of one of the biggest internet stars, PewDiePie, by creating your very own pocket Tuber in PewDiePie's Tuber Simulator! Will you become the biggest, baddest Tuber ever in no time and kick PewDiePie out of his own throne?",
    "genres": [11],
    "screenshots": [{
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/wkyy6zqq7qvya0klri7r.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/u5jiejfy788vbjcpahkd.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/syyspeboffyorriskhrh.png"
    }],
    "videos": [{
      "name": "Trailer",
      "video_id": "gx4dd54OjaY"
    }],
    "cover": {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/aqsq0z9glpf5y6vzldqi.png"
    }
  }, {
    "id": 10,
    "name": "Super Mario Bros.",
    "storyline": "Bowser, king of the Koopas, has invaded the Mushroom Kingdom, and turned all the citizens to stone! The only one who can break the spell, Princess Toadstool, has been locked away in Bowser's castle. To return peace to the Mushroom Kingdom, Mario must venture through eight challenging worlds, each packed to the brim with monsters and secrets.",
    "genres": [16],
    "screenshots": [{
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/nbrobfsaqkpb2c8d6x3f.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/bsnl27qzmcbfmsmarp6p.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/qheutgcgykhqfo9qdkm7.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/a1jehwpln0iwkczcgb1n.png"
    }, {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/enrninlix1pv7lwen3ql.png"
    }],
    "videos": [{
      "name": "Gameplay video",
      "video_id": "w2NjUDfOp2o"
    }],
    "cover": {
      "url": "http://images.igdb.com/igdb/image/upload/t_cover_big/ygfznmlzsw2yb4j88qlv.png"
    }
  }];

//Données sur les catégories...
  catJson = [
    {
      "id": 1,

      "name": "Arcade"
    },
    {
      "id": 2,

      "name": "Indie"
    },
    {
      "id": 3,

      "name": "Adventure"
    },
    {
      "id": 4,

      "name": "Pinball"
    },
    {
      "id": 5,

      "name": "Quiz/Trivia"
    },
    {
      "id": 6,

      "name": "Hack and slash/Beat 'em up"
    },
    {
      "id": 7,

      "name": "Tactical"
    },
    {
      "id": 8,

      "name": "Turn-based strategy (TBS)"
    },
    {
      "id": 9,

      "name": "Strategy"
    },
    {
      "id": 10,

      "name": "Sport"
    },
    {
      "id": 11,

      "name": "Simulator"
    },
    {
      "id": 12,

      "name": "Role-playing (RPG)"
    },
    {
      "id": 13,

      "name": "Real Time Strategy (RTS)"
    },
    {
      "id": 14,

      "name": "Racing"
    },
    {
      "id": 15,
      "name": "Puzzle"
    },
    {
      "id": 16,
      "name": "Platform"
    },
    {
      "id": 17,
      "name": "Music"
    },
    {
      "id": 18,
      "name": "Shooter"
    },
    {
      "id": 19,
      "name": "Fighting"
    },
    {
      "id": 20,
      "name": "Point-and-click"
    }];

//Recuperation des donnees Jeu
  getData() {
    return this.gamesJson;
  }

//Recuperation des donnees Categories
  getCat() {
    return this.catJson;
  }


}

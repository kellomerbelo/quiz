const allQuestions = [
    { question: "Which group released the song 'Butter'?", a: "BTS", b: "Blackpink", c: "EXO", d: "Twice", correct: "a" },
  { question: "Who is the leader of Blackpink?", a: "Jennie", b: "Jisoo", c: "Lisa", d: "Rosé", correct: "b" },
  { question: "Which group is known as the 'Nation's Girl Group'?", a: "Girls' Generation", b: "Twice", c: "ITZY", d: "Red Velvet", correct: "a" },
  { question: "What is the fandom name of EXO?", a: "Blinks", b: "Army", c: "EXO-L", d: "Carats", correct: "c" },
  { question: "Which K-pop group debuted in 2020 under HYBE?", a: "Treasure", b: "Enhypen", c: "Stray Kids", d: "Ateez", correct: "b" },
  { question: "Which female soloist released the hit 'Eight' featuring Suga?", a: "IU", b: "Taeyeon", c: "Chungha", d: "Sunmi", correct: "a" },
  { question: "Who is known as the 'Golden Maknae' of BTS?", a: "RM", b: "Jungkook", c: "Jimin", d: "V", correct: "b" },
  { question: "Which girl group has the song 'Dalla Dalla'?", a: "Twice", b: "ITZY", c: "GFriend", d: "Mamamoo", correct: "b" },
  { question: "Which group is Taeyong a member of?", a: "NCT", b: "SuperM", c: "WayV", d: "All of the above", correct: "d" },
  { question: "What is the fandom name of Seventeen?", a: "Carats", b: "Blinks", c: "ONCE", d: "ReVeluv", correct: "a" },
  { question: "Which K-pop group had the hit song 'Cheer Up'?", a: "Apink", b: "Red Velvet", c: "Twice", d: "Oh My Girl", correct: "c" },
  { question: "Which group is known for the song 'Fantastic Baby'?", a: "Big Bang", b: "SHINee", c: "EXO", d: "Super Junior", correct: "a" },
  { question: "Which member is the main vocalist of Mamamoo?", a: "Solar", b: "Moonbyul", c: "Wheein", d: "Hwasa", correct: "a" },
  { question: "Who is the maknae of BLACKPINK?", a: "Jisoo", b: "Lisa", c: "Jennie", d: "Rosé", correct: "b" },
  { question: "Which song is a debut track of ITZY?", a: "Wannabe", b: "Icy", c: "Dalla Dalla", d: "Not Shy", correct: "c" },
  { question: "Which member left Monsta X?", a: "Shownu", b: "Kihyun", c: "Wonho", d: "Minhyuk", correct: "c" },
  { question: "Which K-pop idol is known as 'Worldwide Handsome'?", a: "Jin", b: "Taemin", c: "Baekhyun", d: "Jimin", correct: "a" },
  { question: "Which K-pop group is known as the 'Concept Kings'?", a: "BTS", b: "VIXX", c: "EXO", d: "Seventeen", correct: "b" },
  { question: "What is the debut song of TXT?", a: "Crown", b: "Run Away", c: "Can't You See Me?", d: "Blue Hour", correct: "a" },
  { question: "Which K-pop group is known for their powerful choreographies and girl-crush concepts?", a: "GFriend", b: "IZ*ONE", c: "ITZY", d: "Fromis_9", correct: "c" },
  { question: "Which group has a subunit called 'Odd Eye Circle'?", a: "Twice", b: "Loona", c: "Oh My Girl", d: "Dreamcatcher", correct: "b" },
  { question: "Who is the main rapper of EXO?", a: "Chanyeol", b: "Sehun", c: "Kai", d: "Baekhyun", correct: "a" },
  { question: "Which group debuted with the song 'La Vie en Rose'?", a: "GFriend", b: "IZ*ONE", c: "WJSN", d: "ITZY", correct: "b" },
  { question: "Which group is known for the 'Love Yourself' album series?", a: "Monsta X", b: "Seventeen", c: "BTS", d: "NCT", correct: "c" },
  { question: "Which K-pop idol is known for the song 'PPORAPPIPPAM'?", a: "Chungha", b: "Sunmi", c: "IU", d: "Taeyeon", correct: "b" },
  { question: "Which K-pop girl group debuted under JYP Entertainment in 2015?", a: "Twice", b: "ITZY", c: "Wonder Girls", d: "Miss A", correct: "a" },
  { question: "Who is the leader of Stray Kids?", a: "Bang Chan", b: "Lee Know", c: "Hyunjin", d: "Felix", correct: "a" },
  { question: "Which group has a subunit called 'Irene & Seulgi'?", a: "Red Velvet", b: "Twice", c: "BLACKPINK", d: "GFriend", correct: "a" },
  { question: "Which boy group has a song called 'Adore U'?", a: "Seventeen", b: "NCT", c: "BTS", d: "EXO", correct: "a" },
  { question: "Which K-pop girl group released the song 'I Am the Best'?", a: "2NE1", b: "Girls' Generation", c: "KARA", d: "f(x)", correct: "a" },
  { question: "Which K-pop group has a song called 'Kill This Love'?", a: "TWICE", b: "BLACKPINK", c: "Red Velvet", d: "ITZY", correct: "b" },
  { question: "What is the fandom name of Mamamoo?", a: "ReVeluv", b: "MooMoo", c: "Once", d: "Blink", correct: "b" },
  { question: "Who is the main dancer of BTS?", a: "RM", b: "V", c: "Jungkook", d: "Jimin", correct: "d" },
  { question: "Which K-pop boy group debuted in 2020 under SM Entertainment?", a: "WayV", b: "SuperM", c: "NCT 2020", d: "Enhypen", correct: "c" },
  { question: "Who is the leader of NCT 127?", a: "Johnny", b: "Mark", c: "Taeil", d: "Taeyong", correct: "d" },
  { question: "Which group is known for the 'Love Scenario' song?", a: "Winner", b: "iKON", c: "Big Bang", d: "Stray Kids", correct: "b" },
  { question: "Who is the 'Nation's Center' of Wanna One?", a: "Kang Daniel", b: "Park Jihoon", c: "Ong Seongwu", d: "Hwang Minhyun", correct: "a" },
  { question: "Which K-pop idol is known for her solo debut with 'Solo'?", a: "Rosé", b: "Jennie", c: "Lisa", d: "Jisoo", correct: "b" },
  { question: "Which group is known for the song 'Up & Down'?", a: "Girl's Day", b: "EXID", c: "AOA", d: "Sistar", correct: "b" },
  { question: "Which K-pop group debuted in 2021 under JYP Entertainment?", a: "Enhypen", b: "NiziU", c: "ITZY", d: "Xdinary Heroes", correct: "d" },
  { question: "Which group has a song called 'Red Flavor'?", a: "Twice", b: "Blackpink", c: "Red Velvet", d: "GFriend", correct: "c" },
  { question: "What is the debut song of GOT7?", a: "Girls Girls Girls", b: "Just Right", c: "Hard Carry", d: "If You Do", correct: "a" },
  { question: "Who is the leader of TXT?", a: "Yeonjun", b: "Beomgyu", c: "Soobin", d: "Huening Kai", correct: "c" },
  { question: "Which K-pop group is known for their acrobatic choreography?", a: "NCT 127", b: "Stray Kids", c: "BTS", d: "Golden Child", correct: "a" },
  { question: "Which girl group debuted with the song 'Into the New World'?", a: "Wonder Girls", b: "Girls' Generation", c: "f(x)", d: "KARA", correct: "b" },
  { question: "Which group is known as the 'Kings of K-pop'?", a: "BTS", b: "EXO", c: "Big Bang", d: "Super Junior", correct: "c" },
  { question: "Which K-pop idol released the song 'Gashina'?", a: "Sunmi", b: "IU", c: "HyunA", d: "Chungha", correct: "a" },
  { question: "Which group has a member called D.O.?", a: "EXO", b: "BTS", c: "Stray Kids", d: "GOT7", correct: "a" },
  { question: "Which group released the song 'Bad Boy'?", a: "Twice", b: "Red Velvet", c: "Blackpink", d: "ITZY", correct: "b" },
  { question: "Who is known as the 'Human Gucci'?", a: "Kai", b: "Jungkook", c: "V", d: "Jimin", correct: "a" },
  { question: "Which group is known for the 'Eyes On You' tour?", a: "Twice", b: "BTS", c: "GOT7", d: "Seventeen", correct: "c" },
  { question: "What is the debut song of ITZY?", a: "Wannabe", b: "Icy", c: "Dalla Dalla", d: "Not Shy", correct: "c" },
  { question: "Which K-pop girl group is known for the song 'Boombayah'?", a: "2NE1", b: "Twice", c: "Blackpink", d: "Girls' Generation", correct: "c" },
  { question: "Which K-pop idol is known as the 'Queen of K-pop'?", a: "Taeyeon", b: "IU", c: "BoA", d: "Sunmi", correct: "c" },
  { question: "Who is the main vocalist of EXO?", a: "Chanyeol", b: "Baekhyun", c: "D.O.", d: "Kai", correct: "b" },
  { question: "Which group is known for their animal-inspired concepts?", a: "Astro", b: "Monsta X", c: "NCT Dream", d: "Stray Kids", correct: "d" },
  { question: "Which group is known for the song 'Bloom Bloom'?", a: "NCT Dream", b: "The Boyz", c: "Treasure", d: "Seventeen", correct: "b" },
  { question: "Who is the youngest member of TWICE?", a: "Tzuyu", b: "Nayeon", c: "Momo", d: "Dahyun", correct: "a" },
  { question: "Which group debuted with the song 'CROWN'?", a: "Enhypen", b: "Treasure", c: "TXT", d: "NCT 127", correct: "c" },
  { question: "Which K-pop girl group has a subunit called 'Odd Eye Circle'?", a: "LOONA", b: "WJSN", c: "Oh My Girl", d: "Red Velvet", correct: "a" },
  { question: "Who is the main dancer of EXO?", a: "Kai", b: "Sehun", c: "Lay", d: "Baekhyun", correct: "a" },
  { question: "Which K-pop group has a song called 'Naughty Boy'?", a: "Pentagon", b: "VIXX", c: "Golden Child", d: "WEi", correct: "a" },
  { question: "Which group released the song 'Tempo'?", a: "SuperM", b: "NCT 127", c: "EXO", d: "SHINee", correct: "c" },
  { question: "Which K-pop idol is known for her powerful high notes and belting?", a: "Wendy", b: "Taeyeon", c: "Solar", d: "All of the above", correct: "d" },
  { question: "What is the fandom name of BTS?", a: "Army", b: "Blink", c: "Once", d: "Carat", correct: "a" },
  { question: "Which K-pop group is known for their retro concepts?", a: "Twice", b: "EXID", c: "Super Junior", d: "T-ara", correct: "d" },
  { question: "Which K-pop girl group has a song called 'Ice Cream Cake'?", a: "Red Velvet", b: "Twice", c: "GFriend", d: "Blackpink", correct: "a" },
  { question: "Who is the visual of BLACKPINK?", a: "Jennie", b: "Lisa", c: "Jisoo", d: "Rosé", correct: "c" },
  { question: "Which K-pop idol is known for the solo song 'Siren'?", a: "Sunmi", b: "Chungha", c: "IU", d: "HyunA", correct: "a" },
  { question: "Which K-pop group has a subunit called 'Triple H'?", a: "Pentagon", b: "Cube Entertainment", c: "HyunA & Dawn", d: "All of the above", correct: "d" },
  { question: "Which K-pop boy group is known for the song 'Crown'?", a: "TXT", b: "NCT Dream", c: "Stray Kids", d: "Seventeen", correct: "a" },
  { question: "Which group released the hit song 'Energetic'?", a: "Wanna One", b: "NCT 127", c: "SuperM", d: "TXT", correct: "a" },
  { question: "Which group is known for their sharp synchronization in dances?", a: "Seventeen", b: "EXO", c: "BTS", d: "NCT 127", correct: "a" },
  { question: "Which girl group debuted with the song 'Boombayah'?", a: "Twice", b: "Blackpink", c: "Girls' Generation", d: "2NE1", correct: "b" },
  { question: "Which K-pop idol is known for the 'Shy Shy Shy' meme?", a: "Nayeon", b: "Momo", c: "Jihyo", d: "Sana", correct: "d" },
  { question: "Which group has a song called 'Crescent Moon'?", a: "NCT 127", b: "LOONA", c: "Red Velvet", d: "Seventeen", correct: "b" },
  { question: "Which girl group released the song 'Feel Special'?", a: "GFriend", b: "Blackpink", c: "Twice", d: "Red Velvet", correct: "c" },
  { question: "Who is the main vocalist of NCT 127?", a: "Jaehyun", b: "Haechan", c: "Taeil", d: "Mark", correct: "c" },
  { question: "Which group debuted in 2019 under Big Hit Entertainment?", a: "Enhypen", b: "TXT", c: "NCT 2020", d: "Treasure", correct: "b" },
  { question: "Which group is known for their bright, energetic, and colorful concepts?", a: "Twice", b: "Red Velvet", c: "WJSN", d: "Oh My Girl", correct: "a" },
  { question: "Which K-pop group is known for their Greek mythology concepts?", a: "EXO", b: "VIXX", c: "ASTRO", d: "Golden Child", correct: "b" },
  { question: "Which K-pop idol is known for the solo song 'Maria'?", a: "Hwasa", b: "Chungha", c: "Solar", d: "Moonbyul", correct: "a" },
  { question: "Who is known as the 'Main Visual' of BTS?", a: "Jin", b: "Jungkook", c: "V", d: "Jimin", correct: "c" },
  { question: "Which group debuted with the song 'Pirate King'?", a: "ONEUS", b: "ATEEZ", c: "Stray Kids", d: "Treasure", correct: "b" },
  { question: "Which K-pop group is known for the song 'Bboom Bboom'?", a: "Momoland", b: "GFriend", c: "Twice", d: "Sistar", correct: "a" },
  { question: "Which K-pop group debuted under Pledis Entertainment?", a: "Seventeen", b: "NU'EST", c: "After School", d: "All of the above", correct: "d" },
  { question: "Which K-pop group has a subunit called 'Odd Eye Circle'?", a: "LOONA", b: "EXO", c: "NCT Dream", d: "Red Velvet", correct: "a" },
  { question: "Which group has a song called 'Feel Special'?", a: "GFriend", b: "Red Velvet", c: "Twice", d: "Blackpink", correct: "c" },
  { question: "Who is the 'Visual' of BLACKPINK?", a: "Jisoo", b: "Jennie", c: "Lisa", d: "Rosé", correct: "a" },
  { question: "Which K-pop idol is known for her solo song 'BBIBBI'?", a: "IU", b: "Sunmi", c: "Chungha", d: "HyunA", correct: "a" },
  { question: "Which group debuted with the song 'Eleven'?", a: "IVE", b: "STAYC", c: "Weeekly", d: "LOONA", correct: "a" },
  { question: "Which K-pop idol is known for her powerful vocals and songs like 'You&I'?", a: "IU", b: "Taeyeon", c: "Wendy", d: "Solar", correct: "a" },
  { question: "Which group is known for the song 'Drunk-Dazed'?", a: "Enhypen", b: "TXT", c: "Stray Kids", d: "Treasure", correct: "a" },
  { question: "Which K-pop girl group is known for their retro concept and songs like 'Wee Woo'?", a: "Pristin", b: "Weki Meki", c: "fromis_9", d: "Cherry Bullet", correct: "a" },
  { question: "Which group debuted with the song 'DALLA DALLA'?", a: "ITZY", b: "TWICE", c: "Red Velvet", d: "GFriend", correct: "a" },
  { question: "Which group is known for the song 'No Air'?", a: "The Boyz", b: "NCT Dream", c: "TXT", d: "Golden Child", correct: "a" },
  { question: "Which K-pop idol is known for her solo debut with '24 Hours'?", a: "Sunmi", b: "Taeyeon", c: "HyunA", d: "IU", correct: "a" },
  { question: "Which K-pop girl group debuted with the song 'Siren'?", a: "Sunmi", b: "IU", c: "Chungha", d: "HyunA", correct: "a" },
  { question: "Which K-pop group has a song called 'Boy With Luv'?", a: "BTS", b: "EXO", c: "Stray Kids", d: "NCT 127", correct: "a" },
  { question: "Which group released the song 'Feel Special'?", a: "Twice", b: "GFriend", c: "Red Velvet", d: "Blackpink", correct: "a" },
  { question: "Who is the main rapper of BLACKPINK?", a: "Lisa", b: "Jennie", c: "Jisoo", d: "Rosé", correct: "a" },
  { question: "Which group debuted with the song 'Energetic'?", a: "Wanna One", b: "EXO", c: "TXT", d: "NCT 127", correct: "a" },
  { question: "Which K-pop idol is known for her solo song 'BBIBBI'?", a: "IU", b: "Taeyeon", c: "Chungha", d: "HyunA", correct: "a" },
  { question: "Which group released the song 'Bloom Bloom'?", a: "NCT Dream", b: "The Boyz", c: "Treasure", d: "Seventeen", correct: "b" },
  { question: "Which group is known for their vibrant and colorful concepts?", a: "Twice", b: "Red Velvet", c: "WJSN", d: "Oh My Girl", correct: "a" },
  { question: "Who is the youngest member of ITZY?", a: "Yuna", b: "Ryujin", c: "Yeji", d: "Lia", correct: "a" },
  { question: "Which group is known for their dark and intense concepts?", a: "VIXX", b: "NCT 127", c: "BTS", d: "EXO", correct: "a" },
  { question: "Which K-pop idol is known for her solo debut with '24 Hours'?", a: "Sunmi", b: "HyunA", c: "Taeyeon", d: "IU", correct: "a" },
  { question: "Which group has a member called San?", a: "ATEEZ", b: "Stray Kids", c: "TXT", d: "NCT 127", correct: "a" },
  { question: "Which K-pop group is known for their anime-style music videos?", a: "Red Velvet", b: "NCT 127", c: "Loona", d: "TXT", correct: "d" },
  { question: "Which group released the song 'Sherlock'?", a: "SHINee", b: "EXO", c: "Super Junior", d: "NCT 127", correct: "a" },
  { question: "Which group debuted with the song 'CROWN'?", a: "TXT", b: "Enhypen", c: "Treasure", d: "Stray Kids", correct: "a" },
  { question: "Which group is known for the song 'Siren'?", a: "Sunmi", b: "Twice", c: "Red Velvet", d: "GFriend", correct: "a" },
  { question: "Which group is known for their retro and neon aesthetics?", a: "SHINee", b: "EXO", c: "NCT Dream", d: "Seventeen", correct: "c" },
  { question: "Which group has a member called Ten?", a: "NCT", b: "Seventeen", c: "TXT", d: "Stray Kids", correct: "a" },
  { question: "Which K-pop idol is known for the solo song 'Maria'?", a: "Hwasa", b: "Chungha", c: "Sunmi", d: "HyunA", correct: "a" },
  { question: "Which group debuted with the song 'Given-Taken'?", a: "Enhypen", b: "TXT", c: "Treasure", d: "Stray Kids", correct: "a" },
  { question: "Which K-pop idol is known for her powerful vocals and songs like 'You&I'?", a: "IU", b: "Taeyeon", c: "Solar", d: "Wendy", correct: "a" },
  { question: "Which group released the song 'The Feels'?", a: "Twice", b: "Red Velvet", c: "GFriend", d: "Blackpink", correct: "a" },
  { question: "Which K-pop group is known for the song 'Bboom Bboom'?", a: "Momoland", b: "GFriend", c: "Twice", d: "Red Velvet", correct: "a" },
  { question: "Which group released the song 'Run Away'?", a: "TXT", b: "NCT Dream", c: "Enhypen", d: "Stray Kids", correct: "a" },
  { question: "Which group is known for their dark concepts?", a: "VIXX", b: "NCT 127", c: "ATEEZ", d: "EXO", correct: "a" },
  { question: "Which K-pop group is known for the song 'Boy With Luv'?", a: "BTS", b: "EXO", c: "Stray Kids", d: "NCT 127", correct: "a" },
  { question: "Which group released the song 'Bloom Bloom'?", a: "The Boyz", b: "NCT Dream", c: "Treasure", d: "Seventeen", correct: "a" },
  { question: "Which group is known for the song 'Feel Special'?", a: "Twice", b: "GFriend", c: "Red Velvet", d: "Blackpink", correct: "a" },
  { question: "Which K-pop group is known for their anime-style music videos?", a: "TXT", b: "Loona", c: "NCT 127", d: "Red Velvet", correct: "a" },
  { question: "Who is the artist of the song 'Gangnam Style'?", a: "PSY", b: "GDragon", c: "Rain", d: "BIGBANG", correct: "a" },
  { question: "Which K-pop group released the song 'How You Like That'?", a: "BLACKPINK", b: "ITZY", c: "GFriend", d: "Red Velvet", correct: "a" },
  { question: "What is the title of TWICE's debut song?", a: "Like Ooh-Ahh", b: "Cheer Up", c: "TT", d: "Fancy", correct: "a" },
  { question: "Which K-pop group released the song 'Likey'?", a: "TWICE", b: "Red Velvet", c: "ITZY", d: "GFriend", correct: "a" },
  { question: "Who is the artist of the song 'Dynamite'?", a: "BTS", b: "EXO", c: "NCT 127", d: "SEVENTEEN", correct: "a" },
  { question: "Which K-pop group released 'Love Scenario'?", a: "iKON", b: "BTS", c: "NCT 127", d: "ATEEZ", correct: "a" },
  { question: "What is the title of BLACKPINK’s song featuring Dua Lipa?", a: "Kiss and Make Up", b: "How You Like That", c: "Lovesick Girls", d: "Sour Candy", correct: "d" },
  { question: "Which K-pop group released 'Mamma Mia'?", a: "Momoland", b: "GFriend", c: "KARA", d: "Red Velvet", correct: "a" },
  { question: "Who is the artist of the song 'Haru Haru'?", a: "BIGBANG", b: "EXO", c: "SHINee", d: "iKON", correct: "a" },
  { question: "Which K-pop group released 'TT'?", a: "TWICE", b: "ITZY", c: "Red Velvet", d: "BLACKPINK", correct: "a" },
  { question: "What is the title of EXO's song featuring a holiday theme?", a: "Miracles in December", b: "Call Me Baby", c: "Love Shot", d: "Monster", correct: "a" },
  { question: "Which K-pop group released the song 'Luna'?", a: "f(x)", b: "GFriend", c: "Red Velvet", d: "ITZY", correct: "a" },
  { question: "Who is the artist of the song 'Gashina'?", a: "Sunmi", b: "IU", c: "CL", d: "HyunA", correct: "a" },
  { question: "Which K-pop group released 'Red Flavor'?", a: "Red Velvet", b: "BLACKPINK", c: "TWICE", d: "ITZY", correct: "a" },
  { question: "What is the title of BTS's song with the lyrics 'I need you'?", a: "I Need U", b: "Blood Sweat & Tears", c: "Dope", d: "Fire", correct: "a" },
  { question: "Which K-pop group released 'Love Me Right'?", a: "EXO", b: "NCT 127", c: "SEVENTEEN", d: "Stray Kids", correct: "a" },
  { question: "What is the title of BLACKPINK’s debut song?", a: "Boombayah", b: "As If It's Your Last", c: "Playing With Fire", d: "Whistle", correct: "d" },
  { question: "Which K-pop group released 'Dalla Dalla'?", a: "ITZY", b: "GFriend", c: "TWICE", d: "Red Velvet", correct: "a" },
  { question: "Who is the artist of the song 'Cherry Bomb'?", a: "NCT 127", b: "SEVENTEEN", c: "EXO", d: "Stray Kids", correct: "a" },
  { question: "Which K-pop group released 'Happiness'?", a: "Red Velvet", b: "TWICE", c: "BLACKPINK", d: "GFriend", correct: "a" },
  { question: "What is the title of BTS's song with the lyrics 'Fire'?", a: "Fire", b: "Dope", c: "I Need U", d: "Save Me", correct: "a" },
  { question: "Which K-pop group released 'Not Shy'?", a: "ITZY", b: "GFriend", c: "Red Velvet", d: "TWICE", correct: "a" },
  { question: "What is the title of SEVENTEEN's song with the lyrics 'Oh my'?", a: "Oh My!", b: "Clap", c: "Pretty U", d: "Mansae", correct: "a" },
  { question: "Which K-pop group released 'RBB (Really Bad Boy)'?", a: "Red Velvet", b: "BLACKPINK", c: "GFriend", d: "TWICE", correct: "a" },
  { question: "What is the title of BLACKPINK’s song featuring Selena Gomez?", a: "Ice Cream", b: "How You Like That", c: "Lovesick Girls", d: "Sour Candy", correct: "a" },
  { question: "Which K-pop group released 'Mosaic'?", a: "ATEEZ", b: "Stray Kids", c: "EXO", d: "GFriend", correct: "b" },
  { question: "Who is the artist of the song 'Siren'?", a: "Sunmi", b: "IU", c: "HyunA", d: "Chungha", correct: "a" },
  { question: "Which K-pop group released 'Super Clap'?", a: "SEVENTEEN", b: "EXO", c: "NCT 127", d: "Stray Kids", correct: "a" },
  { question: "What is the title of ITZY’s song with the lyrics 'Wannabe'?", a: "Wannabe", b: "Dalla Dalla", c: "Not Shy", d: "ICY", correct: "a" },
  { question: "Which K-pop group released 'Shine'?", a: "Pentagon", b: "SEVENTEEN", c: "Stray Kids", d: "NCT 127", correct: "a" },
  { question: "What is the title of TWICE's song with the lyrics 'Feel Special'?", a: "Feel Special", b: "Fancy", c: "Yes or Yes", d: "TT", correct: "a" },
  { question: "Which K-pop group released 'Uptown Funk'?", a: "N/A", b: "N/A", c: "N/A", d: "N/A", correct: "d" },
  { question: "Who is the artist of the song 'Loco'?", a: "ITZY", b: "GFriend", c: "TWICE", d: "Red Velvet", correct: "a" },
  { question: "Which K-pop group released 'Bing Bing'?", a: "KARD", b: "Red Velvet", c: "TWICE", d: "ITZY", correct: "a" },
  { question: "What is the title of BTS’s song with the lyrics 'Dope'?", a: "Dope", b: "Fire", c: "I Need U", d: "Save Me", correct: "a" },
  { question: "Which K-pop group released 'Love Bomb'?", a: "Momoland", b: "ITZY", c: "GFriend", d: "TWICE", correct: "a" },
  { question: "What is the title of BLACKPINK’s song with the lyrics 'Lovesick Girls'?", a: "Lovesick Girls", b: "How You Like That", c: "Kill This Love", d: "Playing With Fire", correct: "a" },
  { question: "Which K-pop group released 'Danger'?", a: "BTS", b: "EXO", c: "GFriend", d: "Red Velvet", correct: "a" },
  { question: "What is the title of ITZY’s song with the lyrics 'Icy'?", a: "ICY", b: "Wannabe", c: "Not Shy", d: "Dalla Dalla", correct: "a" },
  { question: "Which K-pop group released 'Nonstop'?", a: "OH MY GIRL", b: "GFriend", c: "TWICE", d: "Red Velvet", correct: "a" },
  { question: "What is the title of EXO’s song with the lyrics 'Love Shot'?", a: "Love Shot", b: "Call Me Baby", c: "Monster", d: "Overdose", correct: "a" },
  { question: "Which K-pop group released 'Hate You'?", a: "SISTAR", b: "Red Velvet", c: "GFriend", d: "ITZY", correct: "a" },
  { question: "What is the title of SEVENTEEN’s song with the lyrics 'Fear'?", a: "Fear", b: "Hit", c: "Clap", d: "Home", correct: "a" },
  { question: "Which K-pop group released 'Siren'?", a: "Sunmi", b: "HyunA", c: "Chungha", d: "IU", correct: "a" },
  { question: "What is the title of TWICE's song with the lyrics 'Cheer Up'?", a: "Cheer Up", b: "TT", c: "Fancy", d: "Feel Special", correct: "a" },
  { question: "Which K-pop group released 'Feel Special'?", a: "TWICE", b: "Red Velvet", c: "GFriend", d: "BLACKPINK", correct: "a" },
  { question: "What is the title of BLACKPINK’s song with the lyrics 'Kill This Love'?", a: "Kill This Love", b: "How You Like That", c: "Ddu-Du Ddu-Du", d: "Playing With Fire", correct: "a" },
  { question: "Which K-pop group released 'Savage Love'?", a: "BTS", b: "BLACKPINK", c: "EXO", d: "SEVENTEEN", correct: "d" },
  { question: "What is the title of ITZY’s song with the lyrics 'Not Shy'?", a: "Not Shy", b: "Wannabe", c: "Dalla Dalla", d: "ICY", correct: "a" },
  { question: "Which K-pop group released 'Dance The Night Away'?", a: "TWICE", b: "BLACKPINK", c: "ITZY", d: "GFriend", correct: "a" },
  { question: "What is the title of EXO's song with the lyrics 'Overdose'?", a: "Overdose", b: "Love Shot", c: "Call Me Baby", d: "Growl", correct: "a" },
  { question: "Which K-pop group released 'Boom Boom'?", a: "Momoland", b: "Red Velvet", c: "GFriend", d: "BLACKPINK", correct: "a" },
  { question: "What is the title of BLACKPINK’s song with the lyrics 'Playing With Fire'?", a: "Playing With Fire", b: "As If It's Your Last", c: "Ddu-Du Ddu-Du", d: "Kill This Love", correct: "a" },
  { question: "Which K-pop group released 'Mamma Mia'?", a: "Momoland", b: "Red Velvet", c: "GFriend", d: "ITZY", correct: "a" },
  { question: "What is the title of TWICE’s song with the lyrics 'Fancy'?", a: "Fancy", b: "Feel Special", c: "Cheer Up", d: "TT", correct: "a" },
  { question: "Which K-pop group released 'La Vie en Rose'?", a: "IZ*ONE", b: "BLACKPINK", c: "TWICE", d: "Red Velvet", correct: "a" },
  { question: "What is the title of SEVENTEEN’s song with the lyrics 'Clap'?", a: "Clap", b: "Home", c: "Fear", d: "Hit", correct: "a" },
  { question: "Which K-pop group released 'Solo'?", a: "Jennie", b: "Rosé", c: "Lisa", d: "Jisoo", correct: "a" },
  { question: "What is the title of EXO’s song with the lyrics 'Call Me Baby'?", a: "Call Me Baby", b: "Love Shot", c: "Monster", d: "Growl", correct: "a" },
  { question: "Which K-pop group released 'Next Level'?", a: "AESPA", b: "BLACKPINK", c: "ITZY", d: "TWICE", correct: "a" },
  { question: "What is the title of BLACKPINK’s song with the lyrics 'Whistle'?", a: "Whistle", b: "Boombayah", c: "Ddu-Du Ddu-Du", d: "Playing With Fire", correct: "a" },
  { question: "Which K-pop group released 'Good Boy'?", a: "GDragon", b: "BIGBANG", c: "EXO", d: "SEVENTEEN", correct: "b" },
  { question: "What is the title of TWICE’s song with the lyrics 'Yes or Yes'?", a: "Yes or Yes", b: "Fancy", c: "Cheer Up", d: "Feel Special", correct: "a" },
  { question: "Which K-pop group released 'Psycho'?", a: "Red Velvet", b: "BLACKPINK", c: "TWICE", d: "ITZY", correct: "a" },
  { question: "What is the title of BTS's song with the lyrics 'Blood Sweat & Tears'?", a: "Blood Sweat & Tears", b: "Fire", c: "I Need U", d: "Dope", correct: "a" },
  { question: "Which K-pop group released 'Supermoon'?", a: "GFriend", b: "EXO", c: "ITZY", d: "SEVENTEEN", correct: "a" },
  { question: "What is the title of BLACKPINK’s song with the lyrics 'How You Like That'?", a: "How You Like That", b: "Kill This Love", c: "Ddu-Du Ddu-Du", d: "Playing With Fire", correct: "a" },
  { question: "Which K-pop group released 'Cheer Up'?", a: "TWICE", b: "GFriend", c: "ITZY", d: "BLACKPINK", correct: "a" },
  { question: "What is the title of EXO's song with the lyrics 'Monster'?", a: "Monster", b: "Love Shot", c: "Call Me Baby", d: "Overdose", correct: "a" },
  { question: "Which K-pop group released 'Dumb Litty'?", a: "KARD", b: "ITZY", c: "Red Velvet", d: "TWICE", correct: "a" },
  { question: "What is the title of TWICE's song with the lyrics 'TT'?", a: "TT", b: "Cheer Up", c: "Fancy", d: "Feel Special", correct: "a" },
  { question: "Which K-pop group released 'O'?", a: "GFriend", b: "EXO", c: "TWICE", d: "BLACKPINK", correct: "b" },
  { question: "What is the title of SEVENTEEN’s song with the lyrics 'Hit'?", a: "Hit", b: "Fear", c: "Clap", d: "Home", correct: "a" },
  { question: "Which K-pop group released 'Love Scenario'?", a: "iKON", b: "BTS", c: "EXO", d: "NCT 127", correct: "a" },
  { question: "What is the title of BLACKPINK’s song with the lyrics 'Sour Candy'?", a: "Sour Candy", b: "How You Like That", c: "Ddu-Du Ddu-Du", d: "Playing With Fire", correct: "a" },
  { question: "What is the title of TWICE's song with the lyrics 'Dance The Night Away'?", a: "Dance The Night Away", b: "Fancy", c: "Cheer Up", d: "Feel Special", correct: "a" },
  { question: "Which K-pop group released 'Rollin’'?", a: "Brave Girls", b: "ITZY", c: "GFriend", d: "Red Velvet", correct: "a" },
  { question: "Which K-pop group released 'New Rules'?", a: "N/A", b: "N/A", c: "N/A", d: "N/A", correct: "d" },
  { question: "What is the title of BLACKPINK’s song with the lyrics 'Ddu-Du Ddu-Du'?", a: "Ddu-Du Ddu-Du", b: "How You Like That", c: "Playing With Fire", d: "Kill This Love", correct: "a" },
  { question: "Which K-pop group released 'Bad Boy'?", a: "Red Velvet", b: "BLACKPINK", c: "ITZY", d: "TWICE", correct: "a" },
  { question: "What is the title of TWICE's song with the lyrics 'Cheer Up'?", a: "Cheer Up", b: "Fancy", c: "TT", d: "Feel Special", correct: "a" },
  { question: "Which K-pop group released 'Scream'?", a: "ATEEZ", b: "EXO", c: "ITZY", d: "Red Velvet", correct: "a" },
  { question: "What is the title of BLACKPINK’s song with the lyrics 'As If It's Your Last'?", a: "As If It's Your Last", b: "Kill This Love", c: "How You Like That", d: "Playing With Fire", correct: "a" },
  { question: "Which K-pop group released 'GingaMingaYo'?", a: "ITZY", b: "GFriend", c: "TWICE", d: "BLACKPINK", correct: "a" },
  { question: "What is the title of SEVENTEEN’s song with the lyrics 'Home'?", a: "Home", b: "Fear", c: "Hit", d: "Clap", correct: "a" },
  { question: "Which K-pop group released 'Dolphin'?", a: "OH MY GIRL", b: "Red Velvet", c: "ITZY", d: "TWICE", correct: "a" },
  { question: "What is the title of TWICE’s song with the lyrics 'Yes or Yes'?", a: "Yes or Yes", b: "Fancy", c: "Feel Special", d: "Cheer Up", correct: "a" },
  { question: "Which K-pop group released 'Psycho'?", a: "Red Velvet", b: "BLACKPINK", c: "ITZY", d: "GFriend", correct: "a" },
  { question: "What is the title of EXO's song with the lyrics 'Growl'?", a: "Growl", b: "Love Shot", c: "Monster", d: "Overdose", correct: "a" },
  { question: "Which K-pop group released 'La Vie en Rose'?", a: "IZ*ONE", b: "GFriend", c: "TWICE", d: "BLACKPINK", correct: "a" },
  { question: "What is the title of BLACKPINK’s song with the lyrics 'Boombayah'?", a: "Boombayah", b: "Whistle", c: "Ddu-Du Ddu-Du", d: "Playing With Fire", correct: "a" },
  { question: "Which K-pop group released 'I'm Not Cool'?", a: "HyunA", b: "Chungha", c: "Sunmi", d: "IU", correct: "b" },
  { question: "What is the title of EXO's song with the lyrics 'Growl'?", a: "Growl", b: "Overdose", c: "Call Me Baby", d: "Love Shot", correct: "a" },
  { question: "Which K-pop group released 'Perfect World'?", a: "GFriend", b: "SEVENTEEN", c: "EXO", d: "ITZY", correct: "b" },
  { question: "What is the title of BLACKPINK’s song with the lyrics 'Sour Candy'?", a: "Sour Candy", b: "How You Like That", c: "Playing With Fire", d: "Ddu-Du Ddu-Du", correct: "a" },
  { question: "Which K-pop group released 'Not Shy'?", a: "ITZY", b: "TWICE", c: "GFriend", d: "BLACKPINK", correct: "a" },
  { question: "What is the title of TWICE’s song with the lyrics 'Dance The Night Away'?", a: "Dance The Night Away", b: "Fancy", c: "Cheer Up", d: "Feel Special", correct: "a" },
  { question: "Which K-pop group released 'Crazy Over You'?", a: "BLACKPINK", b: "TWICE", c: "ITZY", d: "GFriend", correct: "a" },
  { question: "What is the title of SEVENTEEN’s song with the lyrics 'Fear'?", a: "Fear", b: "Home", c: "Hit", d: "Clap", correct: "a" },
  { question: "Which K-pop group released 'Icy'?", a: "ITZY", b: "GFriend", c: "TWICE", d: "BLACKPINK", correct: "a" },
  { question: "What is the title of EXO's song with the lyrics 'Call Me Baby'?", a: "Call Me Baby", b: "Love Shot", c: "Monster", d: "Growl", correct: "a" },
  { question: "Which K-pop group released 'Oneus'?", a: "ONEUS", b: "ONEWE", c: "ATEEZ", d: "NCT 127", correct: "a" },
  { question: "Which K-pop group released 'Jopping'?", a: "SuperM", b: "SEVENTEEN", c: "EXO", d: "NCT 127", correct: "a" },
  { question: "What is the title of EXO’s song with the lyrics 'Overdose'?", a: "Overdose", b: "Love Shot", c: "Call Me Baby", d: "Growl", correct: "a" },
  { question: "Which K-pop group released 'Ring Ding Dong'?", a: "SHINee", b: "EXO", c: "Red Velvet", d: "SEVENTEEN", correct: "a" },
  { question: "Which K-pop group released 'Kill This Love'?", a: "BLACKPINK", b: "TWICE", c: "ITZY", d: "GFriend", correct: "a" },
  { question: "Which K-pop group released 'Love Shot'?", a: "EXO", b: "BTS", c: "SEVENTEEN", d: "NCT 127", correct: "a" },
  { question: "What is the title of TWICE’s song with the lyrics 'Feel Special'?", a: "Feel Special", b: "Cheer Up", c: "TT", d: "Fancy", correct: "a" },
  { question: "Which K-pop group released 'Don't Call Me'?", a: "SHINee", b: "EXO", c: "GFriend", d: "TWICE", correct: "a" },
  { question: "What is the title of EXO’s song with the lyrics 'Monster'?", a: "Monster", b: "Love Shot", c: "Call Me Baby", d: "Overdose", correct: "a" },
  { question: "Which K-pop group released 'I Love You'?", a: "N/A", b: "N/A", c: "N/A", d: "N/A", correct: "d" },
  { question: "Which K-pop group is known for their 'Mamma Mia' song?", a: "KARA", b: "Girls' Generation", c: "Wonder Girls", d: "Red Velvet", correct: "a" },
  { question: "Which K-pop group had the hit song 'Likey'?", a: "Red Velvet", b: "ITZY", c: "Twice", d: "GFriend", correct: "c" },
  { question: "Who is the leader of EXO?", a: "Baekhyun", b: "Suho", c: "Chen", d: "Xiumin", correct: "b" },
  { question: "Which K-pop girl group is known for the song 'Bad Boy'?", a: "Blackpink", b: "Red Velvet", c: "Twice", d: "GFriend", correct: "b" },
  { question: "Which K-pop idol is known for the song 'Freed'?", a: "Taeyeon", b: "Sunmi", c: "Chungha", d: "IU", correct: "a" },
  { question: "Which K-pop group debuted with the song 'Happiness'?", a: "Red Velvet", b: "Girls' Generation", c: "Wonder Girls", d: "Blackpink", correct: "a" },
  { question: "Which K-pop group has the hit song 'Not Shy'?", a: "ITZY", b: "GFriend", c: "Red Velvet", d: "Twice", correct: "a" },
  { question: "Who is the main vocalist of GOT7?", a: "Jinyoung", b: "Jackson", c: "Youngjae", d: "Mark", correct: "c" },
  { question: "Which K-pop group is known for the song 'Rough'?", a: "GFriend", b: "Twice", c: "Blackpink", d: "Red Velvet", correct: "a" },
  { question: "Which K-pop girl group is known for their 'Fever' concept?", a: "ITZY", b: "IZ*ONE", c: "Red Velvet", d: "GFriend", correct: "b" },
  { question: "Which K-pop group debuted under Big Hit Entertainment in 2020?", a: "TXT", b: "ENHYPEN", c: "GFriend", d: "ITZY", correct: "b" },
  { question: "Which K-pop group has a song called 'I Am the Best'?", a: "Girls' Generation", b: "2NE1", c: "KARA", d: "f(x)", correct: "b" },
  { question: "Who is the main rapper of Blackpink?", a: "Jennie", b: "Lisa", c: "Rosé", d: "Jisoo", correct: "b" },
  { question: "Which K-pop boy group is known for their hit song 'Growl'?", a: "SHINee", b: "EXO", c: "BTS", d: "NCT 127", correct: "b" },
  { question: "Who is the leader of Seventeen?", a: "S.Coups", b: "Joshua", c: "Woozi", d: "Jeonghan", correct: "a" },
  { question: "Which K-pop girl group debuted with the song 'Sober'?", a: "Red Velvet", b: "Blackpink", c: "GFriend", d: "IZ*ONE", correct: "c" },
  { question: "Which K-pop idol is known for her solo debut with 'Goodbye'?", a: "Taeyeon", b: "Sunmi", c: "IU", d: "Chungha", correct: "b" },
  { question: "Which K-pop group is known for their song 'I Love You'?", a: "EXID", b: "GFriend", c: "BLACKPINK", d: "Red Velvet", correct: "a" },
  { question: "Who is the main rapper of BTS?", a: "Suga", b: "RM", c: "J-Hope", d: "Jimin", correct: "b" },
  { question: "Which K-pop girl group released the song 'Dun Dun Dance'?", a: "ITZY", b: "Red Velvet", c: "Twice", d: "OH MY GIRL", correct: "d" },
  { question: "Which K-pop group has a song called 'Siren'?", a: "Sunmi", b: "Chungha", c: "IU", d: "HyunA", correct: "a" },
  { question: "Which K-pop group is known for the song 'Shh'?", a: "Apink", b: "GFriend", c: "EXID", d: "Twice", correct: "a" },
  { question: "Who is the leader of BLACKPINK?", a: "Jennie", b: "Lisa", c: "Jisoo", d: "Rosé", correct: "c" },
  { question: "Which K-pop girl group is known for their song 'Alcohol-Free'?", a: "Red Velvet", b: "Twice", c: "ITZY", d: "GFriend", correct: "b" },
  { question: "Which K-pop group has a song called 'Cherry Bomb'?", a: "NCT 127", b: "Stray Kids", c: "ATEEZ", d: "Treasure", correct: "a" },
  { question: "Who is the main dancer of ITZY?", a: "Chaeryeong", b: "Ryujin", c: "Yuna", d: "Lia", correct: "b" },
  { question: "Which K-pop group is known for the song 'Shy Shy Shy'?", a: "TWICE", b: "Blackpink", c: "Red Velvet", d: "GFriend", correct: "a" },
  { question: "Who is the leader of TXT?", a: "Soobin", b: "Yeonjun", c: "Beomgyu", d: "Huening Kai", correct: "a" },
  { question: "Which K-pop group is known for their song 'MAGO'?", a: "Red Velvet", b: "TWICE", c: "GFriend", d: "IZ*ONE", correct: "a" },
  { question: "Which K-pop group debuted with the song 'Survival Game'?", a: "Treasure", b: "ATEEZ", c: "TXT", d: "Stray Kids", correct: "b" },
  { question: "Who is the main vocalist of BLACKPINK?", a: "Lisa", b: "Jisoo", c: "Jennie", d: "Rosé", correct: "d" },
  { question: "Which K-pop group has a song called 'Miroh'?", a: "Stray Kids", b: "ATEEZ", c: "NCT 127", d: "TXT", correct: "a" },
  { question: "Who is the main rapper of NCT 127?", a: "Mark", b: "Haechan", c: "Taeyong", d: "Johnny", correct: "a" },
  { question: "Which K-pop girl group released the song 'Psycho'?", a: "Red Velvet", b: "GFriend", c: "ITZY", d: "TWICE", correct: "a" },
  { question: "Which K-pop group is known for their song 'Hala Hala'?", a: "ATEEZ", b: "NCT 127", c: "EXO", d: "BTS", correct: "a" },
  { question: "Who is the leader of ITZY?", a: "Lia", b: "Ryujin", c: "Yuna", d: "Chaeryeong", correct: "b" },
  { question: "Which K-pop group is known for their song 'Love Shot'?", a: "EXO", b: "SHINee", c: "VIXX", d: "NCT 127", correct: "a" },
  { question: "Which K-pop girl group debuted with the song 'Hush Hush'?", a: "2NE1", b: "TWICE", c: "Red Velvet", d: "T-ara", correct: "d" },
  { question: "Who is the main dancer of GOT7?", a: "Jinyoung", b: "Jackson", c: "Yugyeom", d: "Mark", correct: "c" },
  { question: "Which K-pop group is known for their song 'Oh My God'?", a: "GFriend", b: "Red Velvet", c: "TWICE", d: "ITZY", correct: "b" },
  { question: "Which K-pop group released the song 'Love Me Harder'?", a: "TWICE", b: "Red Velvet", c: "ITZY", d: "GFriend", correct: "b" },
  { question: "Who is the main vocalist of ITZY?", a: "Lia", b: "Yeji", c: "Ryujin", d: "Yuna", correct: "a" },
  { question: "Which K-pop girl group debuted with the song 'Breathe'?", a: "GFriend", b: "Red Velvet", c: "TWICE", d: "ITZY", correct: "a" },
  { question: "Who is the leader of NCT 127?", a: "Taeyong", b: "Mark", c: "Johnny", d: "Haechan", correct: "a" },
  { question: "Which K-pop group is known for their song 'Wannabe'?", a: "ITZY", b: "GFriend", c: "Red Velvet", d: "TWICE", correct: "a" },
  { question: "Who is the main vocalist of ATEEZ?", a: "Hongjoong", b: "San", c: "Yeosang", d: "Seonghwa", correct: "b" },
  { question: "Which K-pop group has a song called 'Adios'?", a: "GFriend", b: "Red Velvet", c: "ITZY", d: "KARA", correct: "d" },
  { question: "Who is the leader of EXO-CBX?", a: "Chen", b: "Baekhyun", c: "Xiumin", d: "Suho", correct: "a" },
  { question: "Which K-pop group released the song 'Dalla Dalla'?", a: "TWICE", b: "ITZY", c: "GFriend", d: "Red Velvet", correct: "b" },
  { question: "Which K-pop group is known for their song 'Shining Star'?", a: "SHINee", b: "EXO", c: "NCT 127", d: "TXT", correct: "a" },
  { question: "Who is the main rapper of Red Velvet?", a: "Seulgi", b: "Joy", c: "Wendy", d: "Irene", correct: "d" },
  { question: "Which K-pop girl group is known for the song 'Lalala'?", a: "Red Velvet", b: "GFriend", c: "Sunmi", d: "Oh My Girl", correct: "d" },
  { question: "Who is the main vocalist of GFriend?", a: "Yerin", b: "Eunha", c: "SinB", d: "Umji", correct: "b" },
  { question: "Which K-pop group released the song 'Goblin'?", a: "EXID", b: "GFriend", c: "Red Velvet", d: "BLACKPINK", correct: "b" },
  { question: "Who is the main dancer of Red Velvet?", a: "Irene", b: "Seulgi", c: "Wendy", d: "Joy", correct: "b" },
  { question: "Which K-pop group is known for their song 'Don't Call Me'?", a: "SHINee", b: "EXO", c: "NCT 127", d: "Stray Kids", correct: "a" },
  { question: "Who is the leader of WINNER?", a: "Jinwoo", b: "Seungyoon", c: "Mino", d: "Taehyun", correct: "b" },
  { question: "Which K-pop group debuted with the song 'DDU-DU DDU-DU'?", a: "BLACKPINK", b: "ITZY", c: "Red Velvet", d: "TWICE", correct: "a" },
  { question: "Who is the main vocalist of Stray Kids?", a: "Bang Chan", b: "Han", c: "Seungmin", d: "Hyunjin", correct: "b" },
  { question: "Which K-pop girl group has a song called 'Remember'?", a: "Red Velvet", b: "GFriend", c: "Twice", d: "BLACKPINK", correct: "b" },
  { question: "Who is the leader of KARA?", a: "Gyuri", b: "Seungyeon", c: "Hara", d: "Nicole", correct: "a" },
  { question: "Which K-pop group is known for their song 'Dear Me'?", a: "GFriend", b: "Red Velvet", c: "Twice", d: "ITZY", correct: "a" },
  { question: "Who is the main rapper of SEVENTEEN?", a: "S.Coups", b: "Joshua", c: "Woozi", d: "Vernon", correct: "d" },
  { question: "Which K-pop group is known for their song 'Hot'?", a: "SEVENTEEN", b: "ATEEZ", c: "Stray Kids", d: "NCT 127", correct: "b" },
  { question: "Who is the leader of ATEEZ?", a: "Hongjoong", b: "Seonghwa", c: "San", d: "Yeosang", correct: "a" },
  { question: "Which K-pop group released the song 'Super M'?", a: "Super Junior", b: "EXO", c: "NCT 127", d: "Super M", correct: "d" },
  { question: "Who is the main vocalist of MONSTA X?", a: "Shownu", b: "Kihyun", c: "Minhyuk", d: "Jooheon", correct: "b" },
  { question: "Which K-pop girl group is known for their song 'Me Gustas Tu'?", a: "TWICE", b: "GFriend", c: "Red Velvet", d: "ITZY", correct: "b" },
  { question: "Who is the leader of TREASURE?", a: "Hyunsuk", b: "Jihoon", c: "Yoshinori", d: "Asahi", correct: "a" },
  { question: "Which K-pop group released the song 'La Vie en Rose'?", a: "IZ*ONE", b: "GFriend", c: "Red Velvet", d: "BLACKPINK", correct: "a" },
  { question: "Who is the main dancer of NCT Dream?", a: "Chenle", b: "Jisung", c: "Renjun", d: "Jeno", correct: "d" },
  { question: "Which K-pop group is known for their song 'Boy With Luv'?", a: "SEVENTEEN", b: "TXT", c: "BTS", d: "EXO", correct: "c" },
  { question: "Which K-pop girl group has a song called 'Bboom Bboom'?", a: "GFriend", b: "Twice", c: "Momoland", d: "BLACKPINK", correct: "c" },
  { question: "Who is the leader of ENHYPEN?", a: "Sunghoon", b: "Heeseung", c: "Jungwon", d: "Sungkyu", correct: "b" },
  { question: "Which K-pop group released the song 'Dynamite'?", a: "TXT", b: "NCT 127", c: "BTS", d: "EXO", correct: "c" },
  { question: "Who is the main rapper of EXID?", a: "Hani", b: "LE", c: "Solji", d: "Jeonghwa", correct: "b" },
  { question: "Which K-pop girl group is known for their song 'Pink Venom'?", a: "Red Velvet", b: "ITZY", c: "BLACKPINK", d: "Twice", correct: "c" },
  { question: "Who is the main dancer of SF9?", a: "Chani", b: "Taeyang", c: "Youngbin", d: "Inseong", correct: "b" },
  { question: "Which K-pop group released the song 'Diva'?", a: "Red Velvet", b: "Sistar", c: "KARA", d: "Twice", correct: "b" },
  { question: "Who is the leader of PENTAGON?", a: "Hui", b: "Yanan", c: "Kino", d: "E'Dawn", correct: "a" },
  { question: "Which K-pop group is known for their song 'Fire'?", a: "BTS", b: "EXO", c: "ATEEZ", d: "Stray Kids", correct: "a" },
  { question: "Who is the main vocalist of ITZY?", a: "Yeji", b: "Lia", c: "Ryujin", d: "Yuna", correct: "b" },
  { question: "Which K-pop group released the song 'Not Shy'?", a: "ITZY", b: "Red Velvet", c: "GFriend", d: "Twice", correct: "a" },
  { question: "Who is the leader of CRAVITY?", a: "Serim", b: "Allen", c: "Jungmo", d: "Minhee", correct: "a" },
  { question: "Which K-pop girl group is known for their song 'Oh My Girl'?", a: "Oh My Girl", b: "GFriend", c: "Red Velvet", d: "ITZY", correct: "a" },
  { question: "Who is the main dancer of EXO?", a: "Kai", b: "Chanyeol", c: "Sehun", d: "Baekhyun", correct: "a" },
  { question: "Which K-pop group released the song 'Me and My Money'?", a: "ITZY", b: "TWICE", c: "Red Velvet", d: "EXO", correct: "b" },
  { question: "Which K-pop group is known for their song 'Moonlight'?", a: "ATEEZ", b: "NCT 127", c: "GFriend", d: "Stray Kids", correct: "a" },
  { question: "Who is the main vocalist of SEVENTEEN?", a: "Woozi", b: "Vernon", c: "S.Coups", d: "Joshua", correct: "a" },
  { question: "Which K-pop group released the song 'Neverland'?", a: "GFriend", b: "Red Velvet", c: "IZ*ONE", d: "TWICE", correct: "c" },
  { question: "Who is the main dancer of Red Velvet?", a: "Seulgi", b: "Wendy", c: "Joy", d: "Irene", correct: "a" },
  { question: "Which K-pop girl group is known for their song 'Twinkle'?", a: "Girls' Generation", b: "KARA", c: "Red Velvet", d: "TWICE", correct: "a" },
  { question: "Who is the leader of WINNER?", a: "Seungyoon", b: "Mino", c: "Jinwoo", d: "Taehyun", correct: "a" },
  { question: "Which K-pop group is known for their song 'More & More'?", a: "TWICE", b: "ITZY", c: "Red Velvet", d: "GFriend", correct: "a" },
  { question: "Who is the main vocalist of BLACKPINK?", a: "Rosé", b: "Jennie", c: "Jisoo", d: "Lisa", correct: "a" },
  { question: "Which K-pop group released the song 'Winter'?", a: "EXO", b: "GFriend", c: "Red Velvet", d: "TWICE", correct: "a" },
  { question: "Who is the leader of NCT Dream?", a: "Mark", b: "Jisung", c: "Renjun", d: "Haechan", correct: "a" },
  { question: "Which K-pop girl group is known for their song 'Sixteen'?", a: "TWICE", b: "ITZY", c: "Red Velvet", d: "GFriend", correct: "a" },
  { question: "Who is the main rapper of Stray Kids?", a: "Bang Chan", b: "Han", c: "Hyunjin", d: "Felix", correct: "b" },
  { question: "Which K-pop group is known for their song 'Baby Don't Cry'?", a: "SHINee", b: "BTS", c: "EXO", d: "NCT 127", correct: "a" },
  { question: "Who is the leader of ATEEZ?", a: "Hongjoong", b: "San", c: "Yeosang", d: "Mingi", correct: "a" },
  { question: "Which K-pop group released the song 'Love Scenario'?", a: "iKON", b: "EXO", c: "SEVENTEEN", d: "NCT 127", correct: "a" },
  { question: "Who is the main vocalist of GOT7?", a: "Jackson", b: "Youngjae", c: "Mark", d: "Jinyoung", correct: "b" },
  { question: "Which K-pop girl group is known for their song 'Blooming'?", a: "IZ*ONE", b: "GFriend", c: "Red Velvet", d: "TWICE", correct: "a" },
  { question: "Who is the leader of EXO-CBX?", a: "Chen", b: "Xiumin", c: "Baekhyun", d: "Suho", correct: "a" },
  { question: "Which K-pop group released the song 'Feel Special'?", a: "TWICE", b: "Red Velvet", c: "GFriend", d: "ITZY", correct: "a" },
  { question: "Which K-pop girl group is known for their song 'Zimzalabim'?", a: "Red Velvet", b: "GFriend", c: "ITZY", d: "Twice", correct: "a" },
  { question: "Who is the main vocalist of NCT 127?", a: "Taeyong", b: "Mark", c: "Haechan", d: "Yuta", correct: "c" },
  { question: "Which K-pop group released the song 'Dynamite'?", a: "BTS", b: "EXO", c: "SEVENTEEN", d: "TXT", correct: "a" },
  { question: "Which K-pop group is known for their song 'Call Me Baby'?", a: "EXO", b: "BTS", c: "NCT 127", d: "SHINee", correct: "a" },
  { question: "Who is the main vocalist of TREASURE?", a: "Yoshi", b: "Hyunsuk", c: "Asahi", d: "Jihoon", correct: "a" },
  { question: "Which K-pop girl group is known for their song 'Love Shot'?", a: "EXO", b: "BLACKPINK", c: "Red Velvet", d: "TWICE", correct: "a" },
  { question: "Who is the main dancer of Stray Kids?", a: "Hyunjin", b: "Bang Chan", c: "Jisung", d: "Seungmin", correct: "a" },
  { question: "Which K-pop group released the song 'Maverick'?", a: "SF9", b: "ATEEZ", c: "EXO", d: "Stray Kids", correct: "a" },
  { question: "Which K-pop group is known for their song 'Love Me Like That'?", a: "GFriend", b: "Red Velvet", c: "TWICE", d: "ITZY", correct: "a" },
  { question: "Who is the main rapper of NCT 127?", a: "Mark", b: "Taeyong", c: "Johnny", d: "Haechan", correct: "a" },
  { question: "Which K-pop girl group released the song 'Bibbidi Bobbidi Boo'?", a: "Red Velvet", b: "GFriend", c: "TWICE", d: "BLACKPINK", correct: "b" },
  { question: "Which K-pop group is known for their song 'Zimzalabim'?", a: "Red Velvet", b: "ITZY", c: "GFriend", d: "TWICE", correct: "a" },
  { question: "Which K-pop girl group released the song 'Dalla Dalla'?", a: "TWICE", b: "ITZY", c: "GFriend", d: "BLACKPINK", correct: "b" },
  { question: "Who is the leader of NCT 127?", a: "Taeyong", b: "Mark", c: "Johnny", d: "Yuta", correct: "a" },
  { question: "Which K-pop group is known for their song 'One of a Kind'?", a: "GDragon", b: "BIGBANG", c: "EXO", d: "NCT 127", correct: "b" },
  { question: "Who is the main dancer of Red Velvet?", a: "Irene", b: "Seulgi", c: "Joy", d: "Wendy", correct: "b" },
  { question: "Which K-pop girl group is known for their song 'I Love You'?", a: "GFriend", b: "Red Velvet", c: "Twice", d: "Oh My Girl", correct: "d" },
  { question: "Who is the leader of SEVENTEEN?", a: "S.Coups", b: "Woozi", c: "Joshua", d: "Vernon", correct: "a" },
  { question: "Which K-pop group released the song 'Can't You See Me?'?", a: "TXT", b: "NCT 127", c: "Stray Kids", d: "ATEEZ", correct: "a" },
  { question: "Who is the main vocalist of EXO?", a: "Chanyeol", b: "Baekhyun", c: "Kai", d: "D.O.", correct: "d" },
  { question: "Which K-pop girl group is known for their song 'Pretty U'?", a: "SEVENTEEN", b: "Red Velvet", c: "TWICE", d: "GFriend", correct: "a" },
  { question: "Who is the leader of GOT7?", a: "Jay B", b: "Mark", c: "Jackson", d: "Youngjae", correct: "a" },
  { question: "Which K-pop group is known for their song 'Love Bomb'?", a: "GFriend", b: "ITZY", c: "TWICE", d: "Momoland", correct: "d" },
  { question: "Who is the main rapper of EXO?", a: "Chanyeol", b: "Xiumin", c: "Suho", d: "Kai", correct: "a" },
  { question: "Which K-pop group released the song 'Bang Bang Bang'?", a: "BIGBANG", b: "EXO", c: "SEVENTEEN", d: "NCT 127", correct: "a" },
  { question: "Who is the main vocalist of TXT?", a: "Soobin", b: "Yeonjun", c: "Huening Kai", d: "Beomgyu", correct: "a" },
  { question: "Which K-pop girl group is known for their song 'Spring Day'?", a: "BTS", b: "Red Velvet", c: "TWICE", d: "GFriend", correct: "d" },
  { question: "Who is the leader of BLACKPINK?", a: "Jennie", b: "Lisa", c: "Rosé", d: "Jisoo", correct: "a" },
  { question: "Which K-pop group released the song 'Mamma Mia'?", a: "KARA", b: "GFriend", c: "Red Velvet", d: "Momoland", correct: "d" },
  { question: "Who is the main dancer of ITZY?", a: "Yeji", b: "Ryujin", c: "Lia", d: "Yuna", correct: "b" },
  { question: "Who is the leader of SHINee?", a: "Onew", b: "Key", c: "Minho", d: "Taemin", correct: "a" },
  { question: "Which K-pop group is known for their song 'Shine'?", a: "Pentagon", b: "SEVENTEEN", c: "NCT 127", d: "TXT", correct: "a" },
  { question: "Who is the main vocalist of Red Velvet?", a: "Wendy", b: "Seulgi", c: "Joy", d: "Irene", correct: "a" },
  { question: "Which K-pop group released the song 'Bad Boy'?", a: "Red Velvet", b: "GFriend", c: "TWICE", d: "BLACKPINK", correct: "a" },
  { question: "Who is the leader of NCT 127?", a: "Taeyong", b: "Mark", c: "Haechan", d: "Yuta", correct: "a" },
  { question: "Which K-pop group is known for their song 'Next Level'?", a: "ITZY", b: "GFriend", c: "Red Velvet", d: "AESPA", correct: "d" },
  { question: "Who is the main rapper of NCT 127?", a: "Mark", b: "Taeyong", c: "Haechan", d: "Johnny", correct: "a" },
  { question: "Which K-pop group released the song 'Oneus'?", a: "ONEUS", b: "ATEEZ", c: "Stray Kids", d: "EXO", correct: "a" },
  { question: "Who is the leader of EXO?", a: "Suho", b: "Chanyeol", c: "Baekhyun", d: "Kai", correct: "a" },
  { question: "Which K-pop girl group is known for their song 'Likey'?", a: "ITZY", b: "TWICE", c: "Red Velvet", d: "GFriend", correct: "b" },
  { question: "Who is the main vocalist of Stray Kids?", a: "Hyunjin", b: "Bang Chan", c: "Han", d: "Seungmin", correct: "c" },
  { question: "Which K-pop group released the song 'Boombayah'?", a: "BLACKPINK", b: "ITZY", c: "Red Velvet", d: "GFriend", correct: "a" },
  { question: "Which K-pop girl group released the song 'Love Me Like That'?", a: "GFriend", b: "Red Velvet", c: "ITZY", d: "TWICE", correct: "a" },
  { question: "Which K-pop group is known for their song 'I'm So Hot'?", a: "Momoland", b: "ITZY", c: "Red Velvet", d: "GFriend", correct: "a" },
  { question: "Who is the leader of NCT Dream?", a: "Mark", b: "Renjun", c: "Jisung", d: "Chenle", correct: "a" },
  { question: "Which K-pop girl group released the song 'Love Scenario'?", a: "iKON", b: "TWICE", c: "Red Velvet", d: "GFriend", correct: "a" },
  { question: "Who is the main dancer of BLACKPINK?", a: "Lisa", b: "Jennie", c: "Rosé", d: "Jisoo", correct: "a" },
  { question: "Who is the main vocalist of EXO?", a: "Chanyeol", b: "D.O.", c: "Kai", d: "Suho", correct: "b" },
  { question: "Which K-pop girl group is known for their song 'As If It's Your Last'?", a: "BLACKPINK", b: "ITZY", c: "TWICE", d: "Red Velvet", correct: "a" },
  { question: "Which K-pop girl group is known for their song 'Cherry Bomb'?", a: "NCT 127", b: "GFriend", c: "ITZY", d: "Stray Kids", correct: "a" },
  { question: "Which K-pop girl group released the song 'Dalla Dalla'?", a: "ITZY", b: "TWICE", c: "GFriend", d: "Red Velvet", correct: "a" },
  { question: "Which K-pop group released the song 'Butter'?", a: "BTS", b: "BLACKPINK", c: "EXO", d: "TWICE", correct: "a" }
];

// Function to shuffle an array (Fisher-Yates shuffle algorithm)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to get a subset of questions
function getRandomQuestions(pool, numQuestions) {
    shuffle(pool);
    return pool.slice(0, numQuestions);
}

let quizData = getRandomQuestions(allQuestions, 10); // Get 10 random questions

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');
const startButton = document.getElementById('start');
const retryButton = document.getElementById('retry');

function buildQuiz() {
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const currentQuestion = quizData[index];
    const answers = Object.keys(currentQuestion)
        .filter(key => key !== 'question' && key !== 'correct')
        .map(letter => 
            `<label>
                <input type="radio" name="answer" value="${letter}">
                ${letter} : ${currentQuestion[letter]}
            </label>`
        ).join('');
    quizContainer.innerHTML = `<div class="question">${currentQuestion.question}</div><div class="answers">${answers}</div>`;
    
    // Show the Next button if not on the last question, otherwise show Submit button
    if (index < quizData.length - 1) {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    } else {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
}

function showNextQuestion() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    const answerContainer = answerContainers[0];
    const selector = 'input[name=answer]:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // Check the answer
    if (userAnswer === quizData[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.style.display = 'none';
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';
    resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
    retryButton.style.display = 'inline-block';
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizData = getRandomQuestions(allQuestions, 10); // Get a new set of 10 questions
    quizContainer.style.display = 'block';
    resultsContainer.innerHTML = '';
    startButton.style.display = 'none';
    retryButton.style.display = 'none';
    buildQuiz();
}

// Event Listeners
nextButton.addEventListener('click', showNextQuestion);
submitButton.addEventListener('click', showResults);
startButton.addEventListener('click', startQuiz);
retryButton.addEventListener('click', startQuiz);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    startButton.style.display = 'inline-block';
    quizContainer.style.display = 'none';
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'none';
});

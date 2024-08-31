const quizData = [
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
            { question: "Which K-pop idol is known for her solo debut with '24 Hours'?", a: "Sunmi", b: "HyunA", c: "Taeyeon", d: "IU", correct: "a" },
            { question: "Which group released the song 'Run Away'?", a: "TXT", b: "NCT Dream", c: "Enhypen", d: "Stray Kids", correct: "a" },
            { question: "Which group is known for their dark concepts?", a: "VIXX", b: "NCT 127", c: "ATEEZ", d: "EXO", correct: "a" },
            { question: "Which K-pop group is known for the song 'Boy With Luv'?", a: "BTS", b: "EXO", c: "Stray Kids", d: "NCT 127", correct: "a" },
            { question: "Which group debuted with the song 'Energetic'?", a: "Wanna One", b: "EXO", c: "TXT", d: "NCT 127", correct: "a" },
            { question: "Who is the 'Visual' of BLACKPINK?", a: "Jisoo", b: "Jennie", c: "Lisa", d: "Rosé", correct: "a" },
            { question: "Which K-pop idol is known for her solo song 'BBIBBI'?", a: "IU", b: "Sunmi", c: "Chungha", d: "HyunA", correct: "a" },
            { question: "Which group released the song 'Bloom Bloom'?", a: "The Boyz", b: "NCT Dream", c: "Treasure", d: "Seventeen", correct: "a" },
            { question: "Which group is known for their retro and neon aesthetics?", a: "SHINee", b: "EXO", c: "NCT Dream", d: "Seventeen", correct: "c" },
            { question: "Which group is known for the song 'Feel Special'?", a: "Twice", b: "GFriend", c: "Red Velvet", d: "Blackpink", correct: "a" },
            { question: "Which K-pop idol is known for her solo debut with '24 Hours'?", a: "Sunmi", b: "HyunA", c: "Taeyeon", d: "IU", correct: "a" },
            { question: "Which group released the song 'Sherlock'?", a: "SHINee", b: "EXO", c: "Super Junior", d: "NCT 127", correct: "a" },
            { question: "Which K-pop group is known for their anime-style music videos?", a: "TXT", b: "Loona", c: "NCT 127", d: "Red Velvet", correct: "a" },
            { question: "Which group debuted with the song 'DALLA DALLA'?", a: "ITZY", b: "TWICE", c: "Red Velvet", d: "GFriend", correct: "a" },
            { question: "Which group is known for the song 'No Air'?", a: "The Boyz", b: "NCT Dream", c: "TXT", d: "Golden Child", correct: "a" },
            { question: "Which group is known for their vibrant and colorful concepts?", a: "Twice", b: "Red Velvet", c: "WJSN", d: "Oh My Girl", correct: "a" },
            { question: "Who is the youngest member of ITZY?", a: "Yuna", b: "Ryujin", c: "Yeji", d: "Lia", correct: "a" },
            { question: "Which group is known for their dark and intense concepts?", a: "VIXX", b: "NCT 127", c: "BTS", d: "EXO", correct: "a" },
            { question: "Which K-pop idol is known for her solo debut with '24 Hours'?", a: "Sunmi", b: "HyunA", c: "Taeyeon", d: "IU", correct: "a" },
            { question: "Which group has a member called Ten?", a: "NCT", b: "Seventeen", c: "TXT", d: "Stray Kids", correct: "a" },
            { question: "Which K-pop idol is known for the solo song 'Maria'?", a: "Hwasa", b: "Chungha", c: "Sunmi", d: "HyunA", correct: "a" },
            { question: "Which group debuted with the song 'Given-Taken'?", a: "Enhypen", b: "TXT", c: "Treasure", d: "Stray Kids", correct: "a" },
            { question: "Which K-pop idol is known for her powerful vocals and songs like 'You&I'?", a: "IU", b: "Taeyeon", c: "Solar", d: "Wendy", correct: "a" },
            { question: "Which group released the song 'The Feels'?", a: "Twice", b: "Red Velvet", c: "GFriend", d: "Blackpink", correct: "a" },
            { question: "Which K-pop group is known for the song 'Bboom Bboom'?", a: "Momoland", b: "GFriend", c: "Twice", d: "Red Velvet", correct: "a" },
            { question: "Which K-pop idol is known for her solo debut with '24 Hours'?", a: "Sunmi", b: "HyunA", c: "Taeyeon", d: "IU", correct: "a" },
            { question: "Which group released the song 'Run Away'?", a: "TXT", b: "NCT Dream", c: "Enhypen", d: "Stray Kids", correct: "a" },
            { question: "Which group is known for their dark concepts?", a: "VIXX", b: "NCT 127", c: "ATEEZ", d: "EXO", correct: "a" },
            { question: "Which K-pop group is known for the song 'Boy With Luv'?", a: "BTS", b: "EXO", c: "Stray Kids", d: "NCT 127", correct: "a" },
            { question: "Which group debuted with the song 'Energetic'?", a: "Wanna One", b: "EXO", c: "TXT", d: "NCT 127", correct: "a" },
            { question: "Who is the 'Visual' of BLACKPINK?", a: "Jisoo", b: "Jennie", c: "Lisa", d: "Rosé", correct: "a" },
            { question: "Which K-pop idol is known for her solo song 'BBIBBI'?", a: "IU", b: "Sunmi", c: "Chungha", d: "HyunA", correct: "a" },
            { question: "Which group released the song 'Bloom Bloom'?", a: "The Boyz", b: "NCT Dream", c: "Treasure", d: "Seventeen", correct: "a" },
            { question: "Which group is known for their retro and neon aesthetics?", a: "SHINee", b: "EXO", c: "NCT Dream", d: "Seventeen", correct: "c" },
            { question: "Which group is known for the song 'Feel Special'?", a: "Twice", b: "GFriend", c: "Red Velvet", d: "Blackpink", correct: "a" },
            { question: "Which K-pop idol is known for her solo debut with '24 Hours'?", a: "Sunmi", b: "HyunA", c: "Taeyeon", d: "IU", correct: "a" },
            { question: "Which group released the song 'Sherlock'?", a: "SHINee", b: "EXO", c: "Super Junior", d: "NCT 127", correct: "a" },
            { question: "Which K-pop group is known for their anime-style music videos?", a: "
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

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
    }
}

function showResults() {
    showNextQuestion();  // Check the answer for the last question
    quizContainer.style.display = 'none';
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';
    resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

buildQuiz();

nextButton.addEventListener('click', showNextQuestion);
submitButton.addEventListener('click', showResults);

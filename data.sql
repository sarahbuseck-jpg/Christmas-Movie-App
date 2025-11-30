INSERT INTO genre (genre)
VALUES
('family'),
('comedy'),
('animation'),
('fantasy'),
('adventure'),
('musical'),
('drama'),
('romance'),
('children'),
('holiday');



INSERT INTO production (production)
VALUES 
('hughes entertainment'),
('new line cinema'),
('illusion entertainment'),
('castle rock entertainment'),
('metro-goldwyn-mayer '),
('twentieth century fox'),
('imagine entertainment'),
('spa studios'),
('walt disney pictures'),
('aardman animations'),
('1492 pictures'),
('lee medelson films'),
('touchstone pictures'),
('rankin bass productions'),
('jim henson productions'),
('mirage studios'),
('columbia pictures'),
('paramount pictures'),
('rko pictures'),
('united artists'),
('pixar animation studios'),
('sony pictures animation'),
('noel coward productions'),
('rich in spirit productions'),
('largo entertainment'),
('regency enterprises'),
('motion picture corporation'),
('aardman animations'),
('rankin/bass productions');

INSERT INTO director (director)
VALUES 
('chris', 'columbus'),
('jon', 'favreau'),
('john', 'pasquin'),
('yarrow', 'chesney'),
('bob', 'clark'),
('jeremiah', 'checik'),
('george', 'seaton'),
('brian', 'levant'),
('serigo', 'pablos'),
('robert', 'zemeckis'),
('larry', 'roemer'),
('jules', 'bass'),
('jonathan', 'levin'),
('richard', 'donner'),
('bill',  'melendez'),
('tom', 'myers'),
('clay', 'kaytis'),
('nancy', 'meyers'),
('richard', 'curtis'),
('terry', 'zwigoff'),
('ron', 'howard'),
('john', 'whitesell'),
('sarah', 'smith'),
('alex', 'zamm'),
('mark', 'sandrich'),
('michael', 'curtiz'),
('brian', 'henson'),
('timothy', 'reckart'),
('chazz', 'palminteri'),
('paul', 'feig'),
('sean', 'anders');







INSERT INTO streaming_platform(streaming_platform)
VALUES
 ('apple tv'),
('disney plus'),
('hulu'),
('netflix'),
('paramount plus'),
('peacock'),
('prime video'),
('max'),
('starz'),
('tubi'),
('youtube');








INSERT INTO program(title, rating, runtime, yr_released, budget, gross, production_id, showing, poster)
VALUES ('home alone', 'pg', '1:30:00', 'movie', 1990, 1800000, 45000000, 67, 'disney plus', 'homealone.jpg'),

('elf', 'pg', '1:37:00', 'movie', 2003, 3300000, 22000000, 2, 'hulu', 'elf.jpg'),

('the santa clause', 'pg', '1:39:00', 'movie', 1994, 2200000, 19000000, 1, 'disney plus', 'santaclause.jpg'),

('the grinch', 'pg', '1:45:00', 'movie', 2000, 12300000, 27000000, 3, 'hulu', 'grinch.jpg'),

('a christmas story', 'pg', '1:50:00', 'movie', 1983, 8000000, 19000000, 4, 'hbomax', 'christmasstory.jpg'),

('christmas vaction', 'pg','0:95:00', 'movie', 1989, 9000000, 21000000, 5, 'hbomax', 'vaction.jpg'),
('miracle on 34th street', 'g', '1:36:00', 'movie', 1947, 2000000, 7500000, 8, 'hbomax', 'miracle34.jpg'),

('jingle all the way', 'pg', '1:30:00', 'movie', 1996, 1500000, 28000000, 9, 'hulu', 'jinglealltheway.jpg'),

('klaus', 'pg', '1:36:00', 'movie', 2019, 2000000, 4000000, 11, 'netflix', 'klaus.jpg'),

('the polar express', 'g', '1:40:00', 'movie', 2004, 16500000, 23000000, 7, 'hbomax', 'polarexpress.jpg'),

('rudolph the red nosed reindeer', 'g', '1:20:00', 'movie', 1964, 300000, 1200000, 8, 'hbomax', 'rudolph.jpg'),


('frosty the snowman', 'g', '0:50:00', 'movie', 1969, 200000, 800000, 10, 'hbomax', 'frosty.jpg'),
('scrooged', 'pg-13', '1:45:00', 'movie', 1988, 1500000, 4000000, 12, 'peacock', 'scrooged.jpg'),

('a charlie brown christmas', 'g', '0:30:00', 'movie', 1965, 150000, 600000, 9, 'hbomax', 'charliebrown.jpg'),

(' the christmas chronicles', 'pg', '1:45:00', 'movie', 2018, 6000000, 15000000, 13, 'netflix', 'christmaschronicles.jpg'),

('the holiday', 'pg-13', '2:05:00', 'movie', 2006, 5000000, 7000000, 13, 'peacock', 'theholiday.jpg'),

('bad santa', 'r', '1:35:00', 'movie', 2003, 7000000, 9000000, 14, 'hulu', 'badsanta.jpg'),

('how the grinch stole christmas', 'pg', '1:45:00', 'movie', 1966, 500000, 1500000, 6, 'hbomax', 'htgscc.jpg'),

('hoilday inn', 'g', '1:40:00', 'movie', 1942, 1200000, 4000000, 15, 'hbomax', 'holidayinn.jpg'),

('white christmas', 'g', '2:00:00', 'movie', 1954, 2500000, 8000000, 16, 'hbomax', 'whitechristmas.jpg'),

('the muppet christmas carol', 'g', '1:25:00', 'movie', 1992, 1500000, 5000000, 17, 'hbomax', 'muppetchristmascarol.jpg'),

('the star', 'pg', '1:30:00', 'movie', 2017, 2000000, 6000000, 18, 'peacock', 'thestar.jpg'),

('noel', 'pg-13', '1:50:00', 'movie', 2004, 3000000, 8000000, 19, 'hulu', 'noel.jpg'),

('last christmas', 'pg-13', '1:43:00', 'movie', 2019, 4000000, 10000000, 20, 'amazon prime', 'lastchristmas.jpg'),

('spirited', 'pg-13', '1:52:00', 'movie', 2020, 5000000, 12000000, 21, 'hulu', 'spirited.jpg'),

('deck the halls', 'pg-13', '1:30:00', 'movie', 2006, 6000000, 12000000, 22, 'hulu', 'deckthehalls.jpg'),

('the christmas prince', 'pg', '1:30:00', 'movie', 2017, 3000000, 7000000, 23, 'netflix', 'christmasprince.jpg'),

('a bad moms christmas', 'r', '1:44:00', 'movie', 2017, 4000000, 9000000, 24, 'hulu', 'badmomschristmas.jpg'),

('arthur christmas', 'pg', '1:40:00', 'movie', 2011, 1750000, 5000000, 20, 'peacock', 'arthurchristmas.jpg'),

('deck the halls', 'pg-13', '1:30:00', 'movie', 2006, 6000000, 12000000, 21, 'hulu', 'deckthehalls.jpg'),

('Its a wonderful life', 'pg', '2:10:00', 'movie', 1946, 2000000, 7000000, 25, 'hbomax', 'itsawonderfullife.jpg'),

('santa clause is coming to town', 'pg', '1:27:00', 'tv special', 1970, 400000, 1500000, 10, 'hbomax', 'santaclausetocometown.jpg'),


INSERT INTO program_to_genre (program_id, genre_id)
VALUES 
(1, 1), (1, 10),
(2, 1), (2, 2),(2,4),
(3, 1), (3,10),
(4, 1), (4,2), (4,4),
(5, 1), (5,2), (5,10),
(6, 1), (6,3), (6,10),
(7, 1), (7,5), (7,10),
(8, 1), (8,3), (8,4),
(9, 2), (9,4),
(10, 2), (10,4), (10,5),
(11, 1), (11,2), (11,4),
(12, 1), (12,2),  (12,4),
(13, 1), (13,3),  (13,5),
(14, 2), (14,4),
(15, 3), (15,4), (15,5),
(16, 3), (16,4), (16,10),
(17, 1), (17,2), (17,10),
(18, 2), (18,4), (18,5),
(19, 1), (19,5), (19,10),
(20, 1), (20,2), (20,10),
(21, 3), (21,4), (21,10),
(22, 3), (22,4), (22,10),
(23, 1), (23,2), (23,10),
(24, 3), (24,4), (24,10),
(25, 2), (25,4), (25,5),
(26, 3), (26,4), (26,10),
(27, 1), (27,10),
(28, 1), (28,2), (28,10),
(29, 1), (29,10),
(30, 1), (30,2), (30,10),

INSERT INTO program_to_streaming (program_id, streaming_platform_id)
VALUES
(1, 1), 
(2, 1), 
(3, 2), 
(4, 6), 
(5, 1), 
(6, 7), 
(7, 8), 
(8, 2),
(9, 3), 
(10, 9), 
(11, 8), 
(12, 6), 
(13, 4), 
(14, 1), 
(15, 1), 
(16, 2), 
(17, 8), 
(18, 6), 
(19, 10), 
(20, 7), 
(21, 2), 
(22, 2), 
(23, 1), 
(24, 8), 
(25, 6), 
(26, 38), 
(27, 2), 
(28, 17), 
(29, 83), 
(30, 1);

INSERT INTO program_to_actor (program_id, actor_id)
VALUES 
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5),
(2, 6), (2, 7), (2, 8), (2, 9), (2, 10),
(3, 11), (3, 12), (3, 13), (3, 14), (3, 15),
(4, 16), (4, 17), (4, 18), (4, 19), (4, 20),
(5, 21), (5, 22), (5, 23), (5, 24), (5, 25),
(6, 21), (6, 26), (6, 27), (6, 28), (6, 29),
(7, 30), (7, 31), (7, 32), (7, 33), (7, 34),
(8, 35), (8, 36), (8, 37), (8, 38), (8, 39),
(9, 40), (9, 41), (9, 42), (9, 43), (9, 44),
(10, 45), (10, 46), (10, 47), (10, 48), (10, 49),
(11, 50), (11, 51), (11, 52), (11, 53), (11, 54),
(12, 50), (12, 51), (12, 52), (12, 53), (12, 55),
(13, 56), (13, 57), (13, 58), (13, 59), (13, 60),
(14, 61), (14, 62), (14, 63), (14, 64), (14, 65),
(15, 66), (15, 67), (15, 68), (15, 69), (15, 70);

INSERT INTO program_to_director (program_id, director_id)
VALUES (1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15),
(16, 16),
(17, 17),
(18, 18),
(19, 19),
(20, 20),
(21, 21),
(22, 22),
(23, 23),
(24, 24),
(25, 25),
(26, 26),
(27, 27),
(28, 28),
(29, 29),
(30, 30);


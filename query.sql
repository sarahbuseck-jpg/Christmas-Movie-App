--SELECT THE TITLE, RATING, AND YEAR RELEASED OF EACH PROGRAM
Select title, rating, yr_released FROM program;



--SELECT THE FIRST AND LAST NAME OF EACH ACTOR, ORDERED ALPHABETICALLY BY LAST NAME
Select first_name, last_name FROM actor
ORDER BY last_name;


--SELECT EVERY PROGRAM THAT BEGINS WITH THE LETTER 'G'
Select title FROM program
Where title LIKE 'E%';




 --SELECT every actor whose last name ends with the letter N

 SELECT first_name as f, last_name as l FROM actor
 WHERE last_name LIKE '%N';

 --SELECT EVERY MOVIE THAT IS A COMEDY

 SELECT p.program_id, p.title, g.genre 
 FROM program p
 JOIN program_to_genre mtg ON p.program_id = mtg.program_id
 JOIN genre g ON mtg.genre_id = g.genre_id;
 


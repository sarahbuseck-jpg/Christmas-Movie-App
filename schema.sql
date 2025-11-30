DROP DATABASE IF EXISTS myCHRISTMASDB25;
    CREATE DATABASE myCHRISTMASDB25;
    USE myCHRISTMASDB25;


   CREATE TABLE genre(
    genre_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    genre VARCHAR(30),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_genre PRIMARY KEY(genre_id)
);

CREATE TABLE production(
    production_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    production VARCHAR(60),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_production PRIMARY KEY(production_id)
);

CREATE TABLE director(
    director_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    director VARCHAR(60),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_director PRIMARY KEY(director_id)
);

CREATE TABLE streaming_platform(
    streaming_platform_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    streaming_platform VARCHAR(40),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_streaming PRIMARY KEY(streaming_platform_id)
);

CREATE TABLE actor(
    actor_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    img_url BLOB,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_actor PRIMARY KEY(actor_id)
);

CREATE TABLE program(
    program_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    rating ENUM('g', 'pg', 'pg-13', 'r', 'nc-17', 'NR'),
        runtime TIME,
    nationality VARCHAR(3),
     yr_released YEAR,   
    budget BIGINT UNSIGNED,
    gross BIGINT UNSIGNED,
    production_id SMALLINT UNSIGNED,
    showing ENUM('theater', 'netflix', 'hulu', 'disney plus', 'amazon prime', 'hbomax', 'peacock', 'paramount plus', 'apple tv plus', 'other'),
    poster BLOB,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_program PRIMARY KEY(program_id),
    CONSTRAINT fk_production FOREIGN KEY(production_id) REFERENCES production(production_id)
);

CREATE TABLE program_to_streaming(
    program_id MEDIUMINT UNSIGNED NOT NULL,
    streaming_platform_id TINYINT UNSIGNED NOT NULL,
    CONSTRAINT fk_pro_str_program FOREIGN KEY(program_id) REFERENCES program(program_id),
    CONSTRAINT fk_pro_str_streaming FOREIGN KEY(streaming_platform_id) REFERENCES streaming_platform(streaming_platform_id)
   
);

CREATE TABLE program_to_actor(
    program_id MEDIUMINT UNSIGNED NOT NULL,
    actor_id MEDIUMINT UNSIGNED NOT NULL,
    CONSTRAINT fk_pro_act FOREIGN KEY(program_id) REFERENCES program(program_id),
    CONSTRAINT fk_act_pro FOREIGN KEY(actor_id) REFERENCES actor(actor_id)
);

-- Join table to associate programs with multiple genres
CREATE TABLE program_to_genre(

    program_id MEDIUMINT UNSIGNED NOT NULL,
    genre_id TINYINT UNSIGNED NOT NULL,
    CONSTRAINT fk_pro_gen FOREIGN KEY(program_id) REFERENCES program(program_id),
    CONSTRAINT fk_gen_pro FOREIGN KEY(genre_id) REFERENCES genre(genre_id)
);
-- Join table to associate programs with multiple directors

CREATE TABLE program_to_director(
    program_id MEDIUMINT UNSIGNED NOT NULL,
    director_id SMALLINT UNSIGNED NOT NULL,
    CONSTRAINT fk_pro_dir FOREIGN KEY(program_id) REFERENCES program(program_id),
    CONSTRAINT fk_dir_pro FOREIGN KEY(director_id) REFERENCES director(director_id)
);



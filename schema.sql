DROP DATABASE IF EXISTS myCHRISTMASDB25;
CREATE DATABASE myCHRISTMASDB25;
USE myCHRISTMASDB25;

-- =========================
--  TABLES
-- =========================

CREATE TABLE genre (
    genre_id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    genre VARCHAR(30) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE production (
    production_id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE director (
    director_id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    director VARCHAR(60) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE streaming_platform (
    streaming_platform_id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    streaming_platform VARCHAR(40) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE actor (
    actor_id MEDIUMINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    img_url VARCHAR(225),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- =========================
-- MAIN TABLE
-- =========================

CREATE TABLE programs (
    program_id MEDIUMINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    rating ENUM('g','pg','pg-13','r','nc-17','NR'),
    runtime TIME,
    nationality VARCHAR(3),
    yr_released YEAR,
    budget BIGINT UNSIGNED,
    gross BIGINT UNSIGNED,
    production_id SMALLINT UNSIGNED,
    poster VARCHAR(225),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_program_production
        FOREIGN KEY (production_id)
        REFERENCES production(production_id)
);

-- =========================
-- JOIN TABLES
-- =========================

CREATE TABLE program_to_actor (
    program_id MEDIUMINT UNSIGNED NOT NULL,
    actor_id MEDIUMINT UNSIGNED NOT NULL,
    PRIMARY KEY (program_id, actor_id),
    FOREIGN KEY (program_id) REFERENCES programs(program_id) ON DELETE CASCADE,
    FOREIGN KEY (actor_id) REFERENCES actor(actor_id) ON DELETE CASCADE
);

CREATE TABLE program_to_genre (
    program_id MEDIUMINT UNSIGNED NOT NULL,
    genre_id TINYINT UNSIGNED NOT NULL,
    PRIMARY KEY (program_id, genre_id),
    FOREIGN KEY (program_id) REFERENCES programs(program_id) ON DELETE CASCADE,
    FOREIGN KEY (genre_id) REFERENCES genre(genre_id) ON DELETE CASCADE
);

CREATE TABLE program_to_director (
    program_id MEDIUMINT UNSIGNED NOT NULL,
    director_id SMALLINT UNSIGNED NOT NULL,
    PRIMARY KEY (program_id, director_id),
    FOREIGN KEY (program_id) REFERENCES programs(program_id) ON DELETE CASCADE,
    FOREIGN KEY (director_id) REFERENCES director(director_id) ON DELETE CASCADE
);

CREATE TABLE program_to_streaming (
    program_id MEDIUMINT UNSIGNED NOT NULL,
    streaming_platform_id TINYINT UNSIGNED NOT NULL,
    PRIMARY KEY (program_id, streaming_platform_id),
    FOREIGN KEY (program_id) REFERENCES programs(program_id) ON DELETE CASCADE,
    FOREIGN KEY (streaming_platform_id)
        REFERENCES streaming_platform(streaming_platform_id) ON DELETE CASCADE
);

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

DROP SCHEMA IF EXISTS `mydb` ;
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET cp1251 COLLATE cp1251_general_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Categories`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Categories` ;

CREATE  TABLE IF NOT EXISTS `mydb`.`Categories` (
  `id` SMALLINT NOT NULL AUTO_INCREMENT ,
  `name` TINYTEXT NOT NULL DEFAULT 'Новости' ,
  `slug` TINYTEXT NOT NULL DEFAULT 'news' ,
  `path` TINYTEXT NOT NULL ,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Costumes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Costumes` ;

CREATE  TABLE IF NOT EXISTS `mydb`.`Costumes` (
  `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `slug` TINYTEXT NOT NULL ,
  `name` TINYTEXT NOT NULL ,
  `description` TEXT NULL ,
  `size` VARCHAR(8) NULL ,
  `price` TINYTEXT NOT NULL ,
  `category_id` TINYINT UNSIGNED NOT NULL ,
  `in_archive` TINYINT(1) NOT NULL DEFAULT 0 ,
  `big_image` TINYTEXT NOT NULL ,
  `small_image` TINYTEXT NOT NULL ,
  `Categories_id` SMALLINT NOT NULL ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) ,
  INDEX `fk_Costumes_Categories1_idx` (`Categories_id` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Articles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Articles` ;

CREATE  TABLE IF NOT EXISTS `mydb`.`Articles` (
  `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `slug` TINYTEXT NOT NULL ,
  `title` TEXT NOT NULL ,
  `datetime` DATETIME NOT NULL DEFAULT NOW() ,
  `text` TEXT NULL ,
  `Categories_id` SMALLINT NOT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `fk_Articles_Categories_idx` (`Categories_id` ASC) )
ENGINE = InnoDB;


SET SQL_MODE = '';
GRANT USAGE ON *.* TO admin;
 DROP USER admin;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER `admin` IDENTIFIED BY 'AMkijaya9999';


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

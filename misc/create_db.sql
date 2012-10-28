SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

DROP SCHEMA IF EXISTS `mydb` ;
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET cp1251 COLLATE cp1251_general_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Category` ;

CREATE  TABLE IF NOT EXISTS `mydb`.`Category` (
  `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `name` TINYTEXT NOT NULL ,
  `slug` TINYTEXT NOT NULL ,
  `path` TINYTEXT NOT NULL ,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Costume`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Costume` ;

CREATE  TABLE IF NOT EXISTS `mydb`.`Costume` (
  `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `slug` TINYTEXT NOT NULL ,
  `name` TINYTEXT NOT NULL ,
  `description` TEXT NULL ,
  `size` VARCHAR(8) NULL ,
  `price` TINYTEXT NOT NULL ,
  `in_archive` TINYINT(1) NOT NULL DEFAULT 0 ,
  `big_image` TINYTEXT NOT NULL ,
  `small_image` TINYTEXT NOT NULL ,
  `category_id` SMALLINT UNSIGNED NOT NULL ,
  PRIMARY KEY (`id`) ,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  INDEX `FK_costume_category_idx` (`category_id` ASC) ,
  CONSTRAINT `FK_costume_category`
    FOREIGN KEY (`category_id` )
    REFERENCES `mydb`.`Category` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Article`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Article` ;

CREATE  TABLE IF NOT EXISTS `mydb`.`Article` (
  `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `slug` TINYTEXT NOT NULL ,
  `title` TEXT NOT NULL ,
  `datetime` DATETIME NOT NULL ,
  `text` TEXT NOT NULL ,
  `category_id` SMALLINT UNSIGNED NOT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `category_idx` (`category_id` ASC) ,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  CONSTRAINT `FK_article_category`
    FOREIGN KEY (`category_id` )
    REFERENCES `mydb`.`Category` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

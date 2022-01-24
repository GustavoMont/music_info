CREATE DATABASE  IF NOT EXISTS `music_info` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `music_info`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: music_info
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artistas`
--

DROP TABLE IF EXISTS `artistas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artistas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) DEFAULT NULL,
  `nacionalidade` varchar(200) DEFAULT NULL,
  `genero_id` int DEFAULT NULL,
  `maior_hit` varchar(200) DEFAULT NULL,
  `image_url` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `genero_id` (`genero_id`),
  CONSTRAINT `artistas_ibfk_1` FOREIGN KEY (`genero_id`) REFERENCES `generos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artistas`
--

LOCK TABLES `artistas` WRITE;
/*!40000 ALTER TABLE `artistas` DISABLE KEYS */;
INSERT INTO `artistas` VALUES (1,'Oficina G3','Brasil',1,'O Tempo','https://pbs.twimg.com/profile_images/421607348692467712/ooHbXLEI_400x400.png'),(2,'Dj Alok','Brasil',3,'Hear me Now','https://exame.com/wp-content/uploads/2021/04/201222_COLCCI_ALOK_14809.jpg'),(3,'Michael Jackson','Estados Unidos',2,'Thriller','https://media.revide.com.br/upload/noticias/2019/10/25/12/01/michael-jackson-destaque.jpeg'),(4,'Wesley Safadão','Brasil',6,'Camarote','https://bahianoar.com/wp-content/uploads/2016/03/big_cd_cover.jpg'),(5,'Bruno Mars','Estados Unidos',2,'The Lazy Song','https://cdns-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/500x500.jpg'),(6,'Thalles Roberto','Brasil',5,'A Resposta','https://cdn.abcdoabc.com.br/thalles-1_2573b405.jpg'),(7,'Renato Russo','Brasil',1,'Tempo Perdido','https://www.vagalume.com.br/renato-russo/images/renato-russo.jpg'),(9,'Metallica','Estados Unidos',1,'Enter Sandman','https://rollingstone.uol.com.br/media/uploads/metallica_ross_halfin_rs_brasil.jpg'),(12,'Aviões do Forró','Brasil',6,'Naquele mesmo Bar','https://uploads.metropoles.com/wp-content/uploads/2019/05/30172514/Screenshot_35120-600x400.jpg');
/*!40000 ALTER TABLE `artistas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `generos`
--

DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO `generos` VALUES (3,'Eletronica'),(6,'Forró'),(5,'Gospel'),(2,'Pop'),(1,'Rock'),(4,'Sertanejo');
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-24 18:18:09

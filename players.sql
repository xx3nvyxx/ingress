-- phpMyAdmin SQL Dump
-- version 2.11.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 18, 2013 at 02:29 PM
-- Server version: 5.1.57
-- PHP Version: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `a3751175_ingress`
--

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `guid` varchar(40) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  `level` tinyint(4) NOT NULL DEFAULT '0',
  `faction` enum('ALIENS','RESISTANCE','UNKNOWN') NOT NULL DEFAULT 'UNKNOWN',
  PRIMARY KEY (`guid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `players`
--

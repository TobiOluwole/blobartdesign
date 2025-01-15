-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 15, 2025 at 10:10 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blobartdesign`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('066MUKmKeb3ewYT3', 's:7:\"forever\";', 2050559221),
('0Bg1ofoMTvuBqFco', 's:7:\"forever\";', 2050908584),
('0ifgGnQ2SZcZ66AA', 's:7:\"forever\";', 2050578574),
('0KH1ukVqK5cMdm2n', 's:7:\"forever\";', 2051790881),
('0KpDAtvWVto7vjL6', 's:7:\"forever\";', 2050911870),
('0pa5fQuLOFI7Kgc0', 's:7:\"forever\";', 2050582227),
('0S9GvuD6ojEmJzar', 's:7:\"forever\";', 2050644904),
('0SgKIV3gR0AUL5Mp', 's:7:\"forever\";', 2050983342),
('0sINdcWmkYEgqFkz', 's:7:\"forever\";', 2050911726),
('0vJHEw5YLEN6VtFz', 's:7:\"forever\";', 2051703046),
('0y26DKFmGBvj6yYR', 's:7:\"forever\";', 2051778559),
('11s9x7iIrqoQvrFy', 's:7:\"forever\";', 2051592224),
('17sOQ89QpEGsvkF3', 's:7:\"forever\";', 2050584026),
('1EoSM5eVZ8aKEgGE', 's:7:\"forever\";', 2050582239),
('1jgvGliR5Hr4yl2y', 's:7:\"forever\";', 2050644487),
('1JkkbIaY6ZUOmIq6', 's:7:\"forever\";', 2052116506),
('1ntg619K1HAnvq3e', 's:7:\"forever\";', 2050987659),
('1QcnUWseWfJ7Ov96', 's:7:\"forever\";', 2051265904),
('1SUqHPpxsvdIZGGK', 's:7:\"forever\";', 2051246546),
('1vAyzVKgQMIpBF75', 's:7:\"forever\";', 2051255025),
('1VyBT0kneFacz1L6', 's:7:\"forever\";', 2050568868),
('1ZkRaMyTLxuDar9P', 's:7:\"forever\";', 2051874961),
('21Wu9ndZcWFagSGn', 's:7:\"forever\";', 2051158109),
('23MJw48vSdnp7CGu', 's:7:\"forever\";', 2051264805),
('2aYxkXO1gn28CSBu', 's:7:\"forever\";', 2050558544),
('2eVYdnIiP8sy6yix', 's:7:\"forever\";', 2050896995),
('2nmM9EsFpLiEj3nT', 's:7:\"forever\";', 2051251037),
('2Pm4BGmGvTkZtK5D', 's:7:\"forever\";', 2050570359),
('2pNTwzs4dFhVE3Lb', 's:7:\"forever\";', 2050987618),
('2S11BJe8EKegTeUj', 's:7:\"forever\";', 2051249798),
('2ZtkPjf2AcGZ4aQa', 's:7:\"forever\";', 2051251373),
('3aSCx6aot9blDGaa', 's:7:\"forever\";', 2050996749),
('3BmAvj2Q67wayIco', 's:7:\"forever\";', 2050575676),
('3hKkE0smwH7zonrQ', 's:7:\"forever\";', 2051265827),
('3hyoe8bx2YOSb0Sm', 's:7:\"forever\";', 2051592939),
('3hzsY2rBNZ7Ixdw7', 's:7:\"forever\";', 2051246543),
('3UB9i5KVGxKj9dbP', 's:7:\"forever\";', 2050578589),
('3W9PeE5RbupOWBbF', 's:7:\"forever\";', 2051254989),
('42n4vofPXVWE26QL', 's:7:\"forever\";', 2051266266),
('43UHoVMXE8U4UG2Y', 's:7:\"forever\";', 2050911873),
('46rDSLiesq2eD5Yi', 's:7:\"forever\";', 2050558119),
('4Bdc7f5QSMVdcdUM', 's:7:\"forever\";', 2051589848),
('4jk1xNurylAEaDJg', 's:7:\"forever\";', 2051251304),
('4kfCsJaIEIZFNrlH', 's:7:\"forever\";', 2051254988),
('4MtVZfXwzncwdaKS', 's:7:\"forever\";', 2051250878),
('4OFq6PRuAWURIcIr', 's:7:\"forever\";', 2052116544),
('4qCXWTQtJ3ye2u7b', 's:7:\"forever\";', 2051778558),
('4WzBd83M6NWX5qc4', 's:7:\"forever\";', 2051507584),
('50LY5n7L6eImCSe3', 's:7:\"forever\";', 2050577478),
('50p3Cv3r3jFOsJ69', 's:7:\"forever\";', 2050584229),
('54FIlihSO5zzNchq', 's:7:\"forever\";', 2050909798),
('5A8xEDMFYKogIb3B', 's:7:\"forever\";', 2051704908),
('5FgCbeCiAC2i2r37', 's:7:\"forever\";', 2051158089),
('5kHnip7tCGalFh2L', 's:7:\"forever\";', 2051266539),
('5oTDMRrzVz4mhNBH', 's:7:\"forever\";', 2051529884),
('5ssssvEnpwAKCR1n', 's:7:\"forever\";', 2051701750),
('5zs0PAiaR5IMEOj8', 's:7:\"forever\";', 2051247561),
('6fOqXTEe5jgsMBUG', 's:7:\"forever\";', 2050983808),
('6fyHILwhdomCZI4c', 's:7:\"forever\";', 2051185517),
('6N0dtiH515h7DTgI', 's:7:\"forever\";', 2051595665),
('6O8mSUkKAnd0sPfm', 's:7:\"forever\";', 2050910281),
('6qvO1Hbz3kPZ2JCt', 's:7:\"forever\";', 2051513052),
('7697mdqI4qnOvaxH', 's:7:\"forever\";', 2050582974),
('7Bd4eHv41JhhG9hi', 's:7:\"forever\";', 2051874942),
('7efncnSLFMqSlUsF', 's:7:\"forever\";', 2051591572),
('7OjhVq09ZOAXFvrm', 's:7:\"forever\";', 2050584218),
('7RczLT3Q4hOB2eo9', 's:7:\"forever\";', 2051590699),
('7Xs4bNGeY6eW8n1c', 's:7:\"forever\";', 2050558095),
('7zKynBp7A5mSp7wz', 's:7:\"forever\";', 2051507652),
('8299GyT1GEDdUzse', 's:7:\"forever\";', 2051529764),
('85vq47gwtNvJn2zZ', 's:7:\"forever\";', 2050665582),
('8AzOuoqX80J54esD', 's:7:\"forever\";', 2051531930),
('8d7Xvx44VpnQjOfC', 's:7:\"forever\";', 2051251303),
('8gtUz1IXryzhu2PO', 's:7:\"forever\";', 2050983359),
('8hmieNBLTNP5NemH', 's:7:\"forever\";', 2050644482),
('8LWHUM8zGKHS4T6d', 's:7:\"forever\";', 2051265610),
('8N5ijFThcyQLlyxO', 's:7:\"forever\";', 2051507242),
('8OcnRCKKY9KLAq1G', 's:7:\"forever\";', 2051250984),
('8pTzdI48b5RyBhnQ', 's:7:\"forever\";', 2050996771),
('8qaJldTkgqmUgQfI', 's:7:\"forever\";', 2050570369),
('8tuNdK6DjjboihTP', 's:7:\"forever\";', 2051246539),
('8TwZakLGWOxcTnJf', 's:7:\"forever\";', 2050996747),
('8uUCdi2pVfpFXXSU', 's:7:\"forever\";', 2051772509),
('8WeeydZUKnMNfkip', 's:7:\"forever\";', 2050910318),
('8xucH45hDAI0c2tK', 's:7:\"forever\";', 2051245148),
('96RsHxNPNwoxuiqq', 's:7:\"forever\";', 2050559239),
('9d7IcA7pdfYxMS9h', 's:7:\"forever\";', 2051591759),
('9dcgpINqZBp6OPDC', 's:7:\"forever\";', 2051251371),
('9DYzpzY4CLqHemuM', 's:7:\"forever\";', 2051266894),
('9ePFaEDUp0IusNq8', 's:7:\"forever\";', 2050983733),
('9Hu2HdmgSe5NY9WC', 's:7:\"forever\";', 2051517399),
('9MsLTU45WyeTxZqD', 's:7:\"forever\";', 2050559410),
('9PjZkiXishaksN8F', 's:7:\"forever\";', 2050557916),
('9PLQhfg4RDF8zStQ', 's:7:\"forever\";', 2051510987),
('AD9qV5ijtPi0TfU7', 's:7:\"forever\";', 2050903960),
('aDhDD6SH08RwAAq4', 's:7:\"forever\";', 2051264790),
('AdHV8FIpPMyGVoLo', 's:7:\"forever\";', 2051591817),
('AL5t4hGWMbka3IAg', 's:7:\"forever\";', 2050585470),
('AmcarcM21fdCFeVo', 's:7:\"forever\";', 2051250854),
('amVDjuiwrnIT2SOn', 's:7:\"forever\";', 2051595649),
('AS8i2x01YaZ0wwW2', 's:7:\"forever\";', 2051249704),
('augs7Bo0N34IyS3b', 's:7:\"forever\";', 2051513122),
('AuW7mcelC8pZhtgI', 's:7:\"forever\";', 2050577741),
('AWZQtOKPtcGO2DDD', 's:7:\"forever\";', 2051265951),
('b1nXwwxzcmDtHd43', 's:7:\"forever\";', 2051592991),
('B9hKrmSKlJSlBdCi', 's:7:\"forever\";', 2051874814),
('BA3GSdDe7XdpJnmg', 's:7:\"forever\";', 2050910311),
('bDh3KEf7Eg5E04mU', 's:7:\"forever\";', 2050580254),
('be3WpzuunMrePkqb', 's:7:\"forever\";', 2050903964),
('bE4g8pjcii36JUy5', 's:7:\"forever\";', 2052116295),
('bER8zhTEsIplIFq6', 's:7:\"forever\";', 2051595659),
('bHbU4d2tYBrJ3Pxw', 's:7:\"forever\";', 2050983698),
('bi3D9E8EJlTwEsat', 's:7:\"forever\";', 2051510979),
('BI3hRD0CFqAduYr3', 's:7:\"forever\";', 2051518293),
('BKYdY4TJxisxY6bS', 's:7:\"forever\";', 2051590537),
('bLAC3tP9krIw0Gdd', 's:7:\"forever\";', 2051591699),
('Blybecd0Yq6fHYzE', 's:7:\"forever\";', 2051594679),
('BNpP6ycjMFFUkKPT', 's:7:\"forever\";', 2050581633),
('bola24YF1gQvs5y0', 's:7:\"forever\";', 2050575694),
('BoOkJmxvhgCs7xqO', 's:7:\"forever\";', 2051187297),
('boUeVyrAKZLCU0ca', 's:7:\"forever\";', 2050559228),
('bPHNKZERFM56Pfr0', 's:7:\"forever\";', 2050557366),
('bPJwhFoDXZbOCfU9', 's:7:\"forever\";', 2051185511),
('Bt2cONKLgcO79eIv', 's:7:\"forever\";', 2051510976),
('BtXHgCMLeIDPyRL5', 's:7:\"forever\";', 2050983721),
('bv4GxTe27wrPoxlA', 's:7:\"forever\";', 2050558120),
('bw2mInyO2h7Cqpgw', 's:7:\"forever\";', 2050568528),
('BXB9iTyXoZKcta1w', 's:7:\"forever\";', 2050985083),
('BZaEWlGCTTdVrN5g', 's:7:\"forever\";', 2050910279),
('bzt70fqzy4OcW2VO', 's:7:\"forever\";', 2050642358),
('c0L02NvvWndCU8R6', 's:7:\"forever\";', 2050986245),
('C0Y13FcZOoBBfa3J', 's:7:\"forever\";', 2050560575),
('C1S4pgY3DCKPoQwm', 's:7:\"forever\";', 2052115837),
('c25qndPtEBQhkQFi', 's:7:\"forever\";', 2050559621),
('C2Mv1soIU7dPHZWB', 's:7:\"forever\";', 2051266253),
('c5DHwr0jmVJJTuhl', 's:7:\"forever\";', 2050642929),
('C9u2uuyDH7u7X78k', 's:7:\"forever\";', 2051249412),
('CcqgichVr08Ih7ue', 's:7:\"forever\";', 2050583116),
('CD3UdjdXWYP8fpaN', 's:7:\"forever\";', 2050582144),
('CEleFwcva4Enzv3F', 's:7:\"forever\";', 2050911719),
('cioL9QSY946EGDcs', 's:7:\"forever\";', 2050577435),
('CJ38jTbo2XNEVwMx', 's:7:\"forever\";', 2051266054),
('cJULUQb9rWMGv3mp', 's:7:\"forever\";', 2051774120),
('CNWa2PW1ulXTAyEn', 's:7:\"forever\";', 2050983345),
('cSCIuaRWee87DyIY', 's:7:\"forever\";', 2051532059),
('cUmsMdizZMrC4Wao', 's:7:\"forever\";', 2050581635),
('CzQ3I8uXP5VZLlRl', 's:7:\"forever\";', 2051532886),
('D1m3EnTwcgdgJ1hs', 's:7:\"forever\";', 2050643577),
('d2dykUiKNDJvjj7O', 's:7:\"forever\";', 2050643576),
('d9M2QcMb5f0HXD14', 's:7:\"forever\";', 2051249320),
('Dan8HhDCDli58Del', 's:7:\"forever\";', 2050559227),
('DAR5M9LWyoDgBve0', 's:7:\"forever\";', 2051593129),
('DBhIlGWaihCE1hPc', 's:7:\"forever\";', 2050996751),
('dCqVH2JJmaoPCu8Y', 's:7:\"forever\";', 2051514766),
('dctz8KYblWcB8SGR', 's:7:\"forever\";', 2050985250),
('DDesAILyZK2wFcEF', 's:7:\"forever\";', 2050569051),
('DdtOnZDp0XwD8M1D', 's:7:\"forever\";', 2052116530),
('DFEcfsQobkm0yZLO', 's:7:\"forever\";', 2050582146),
('Dh2WmRJ4UHZiZvxo', 's:7:\"forever\";', 2050584118),
('dHvbPxxcwD5ox9OB', 's:7:\"forever\";', 2051264766),
('DImWecnNJbVQzK4V', 's:7:\"forever\";', 2051590147),
('dJCQegipvx4wEapa', 's:7:\"forever\";', 2050906581),
('dLyWA6ok2FS1Dq0H', 's:7:\"forever\";', 2051250702),
('dPI0nlNiGJYdLziX', 's:7:\"forever\";', 2050582975),
('DQjDsEzAf68i34JF', 's:7:\"forever\";', 2051185522),
('dvn07GDOgSly4898', 's:7:\"forever\";', 2050559599),
('DYFgDTtBlsnKN8Ik', 's:7:\"forever\";', 2050908836),
('dZYhD2HReVJ8J92o', 's:7:\"forever\";', 2050640530),
('E1hw1Ttt2rJM7la7', 's:7:\"forever\";', 2051595672),
('E529YUzJnqbA0EPt', 's:7:\"forever\";', 2051265870),
('e9ytCQxkQwO7MZMz', 's:7:\"forever\";', 2050986244),
('egpX7mtTSM8HB7nj', 's:7:\"forever\";', 2051877315),
('eLWVZPHUYshytEyW', 's:7:\"forever\";', 2050558112),
('EOmQLBhUTekYtRGv', 's:7:\"forever\";', 2050576316),
('Eq1mBoaVHE6quubO', 's:7:\"forever\";', 2051593044),
('EQCMTn5ceGmxWz9d', 's:7:\"forever\";', 2051701751),
('eSVnrYPZGNiLCEFR', 's:7:\"forever\";', 2050568356),
('eW2rFHLphhn6qgxZ', 's:7:\"forever\";', 2052115073),
('eypCUEfymme5ainv', 's:7:\"forever\";', 2051251385),
('ez9rse5ocoTuUYQD', 's:7:\"forever\";', 2051595545),
('F5Emc17ClBSDfUJC', 's:7:\"forever\";', 2051507530),
('F8Yoj4VXjdzbEVSG', 's:7:\"forever\";', 2050580317),
('fDHvT22ok7kekI6x', 's:7:\"forever\";', 2051591017),
('FGeuOYaFMvommKkX', 's:7:\"forever\";', 2051247466),
('fIC9m8GrDa7lj85I', 's:7:\"forever\";', 2050559213),
('fo4RU2uVUftzrhbh', 's:7:\"forever\";', 2051514511),
('FoN2mtbkZPOmEw3d', 's:7:\"forever\";', 2050557175),
('fpMxtg6qoGdCLzyE', 's:7:\"forever\";', 2051508280),
('Fpt5fUcUzyPd7zqj', 's:7:\"forever\";', 2051507672),
('Fstfd9Yyx8h6coxy', 's:7:\"forever\";', 2050643574),
('fv7Kvsypr1l0ZVzu', 's:7:\"forever\";', 2052116565),
('FwkolAP2fuHy18e2', 's:7:\"forever\";', 2050557940),
('fWMOuKVH8gFNAMaJ', 's:7:\"forever\";', 2050910308),
('Fy9uxzmUPjikSAaZ', 's:7:\"forever\";', 2050582210),
('FZ0LGQ2YB0INdDYe', 's:7:\"forever\";', 2050909780),
('fZiqycMkrKd2XNPF', 's:7:\"forever\";', 2051518341),
('g1auqN9vUiz0v30A', 's:7:\"forever\";', 2050577692),
('g36DcZ8vRMHb5PCy', 's:7:\"forever\";', 2050986268),
('g3neKX9pjgtF4B6G', 's:7:\"forever\";', 2051591819),
('g3VtiUiEtAz0Fo7e', 's:7:\"forever\";', 2050561030),
('g8Gpjzq5UmnV53On', 's:7:\"forever\";', 2050561142),
('G93cbqr0UnWNQWzq', 's:7:\"forever\";', 2051590114),
('gaAgjSogbOvdnNgG', 's:7:\"forever\";', 2052116547),
('gbF9Rr1r8eze9Smq', 's:7:\"forever\";', 2051517852),
('GCDRXYIBHxS2hw7p', 's:7:\"forever\";', 2051266000),
('GcYVgNXgadNDNZN0', 's:7:\"forever\";', 2050987649),
('gfimxAxZZu1FnM9H', 's:7:\"forever\";', 2050911723),
('gKwqny0eKgYOYeCo', 's:7:\"forever\";', 2050557942),
('gmds91iPgydRuHzj', 's:7:\"forever\";', 2051508037),
('Gmk71TaK9oFOf6o6', 's:7:\"forever\";', 2051595645),
('gSNK0GfrFgJq3AOg', 's:7:\"forever\";', 2050567436),
('Gv4M4quPkBsURZeA', 's:7:\"forever\";', 2051187313),
('GvlRS12Xx5MDguNk', 's:7:\"forever\";', 2051514231),
('GxI2HBO3AZqh8IJt', 's:7:\"forever\";', 2050644906),
('GxjHQlOlHzw9Vg5e', 's:7:\"forever\";', 2051251353),
('gXzE9Dm5DdLLmXVS', 's:7:\"forever\";', 2050649513),
('GzdGKObRj4zug5gX', 's:7:\"forever\";', 2051251312),
('gZMUDzO7EAnmAEn3', 's:7:\"forever\";', 2051511003),
('h6AJSloxxuUlNEz0', 's:7:\"forever\";', 2050911840),
('H8vCFEXb39e51K7t', 's:7:\"forever\";', 2051529762),
('Hd2wSgcPe3BIkfyw', 's:7:\"forever\";', 2051000269),
('hHRwHXJNRXqI2LiF', 's:7:\"forever\";', 2050906679),
('hkK4OV7MS23n9WXp', 's:7:\"forever\";', 2051532552),
('HkrHBwp1zPvTD7uT', 's:7:\"forever\";', 2051266279),
('Hl8X5xlNtTrjJVow', 's:7:\"forever\";', 2051268212),
('HmtQ32IJoBDnl7wq', 's:7:\"forever\";', 2052116344),
('HoxqTV6rtNfawdyo', 's:7:\"forever\";', 2051251085),
('hpK95QuJ7STv5ckV', 's:7:\"forever\";', 2050665580),
('hSFj20P0r98ovXz0', 's:7:\"forever\";', 2052115834),
('HtfvSqmo20inDdCU', 's:7:\"forever\";', 2050560118),
('htm6BaipTqj6a26R', 's:7:\"forever\";', 2051187320),
('HuYENTP0tbwOwbcc', 's:7:\"forever\";', 2050911784),
('HViLTCUU6Sc6yMz3', 's:7:\"forever\";', 2051265969),
('I04sJo0Km8XI1kpX', 's:7:\"forever\";', 2051518279),
('I4THckkztXVlsqEs', 's:7:\"forever\";', 2051594681),
('i5lUBrgMt923RRP9', 's:7:\"forever\";', 2050560227),
('iA5Xg8uNKL6uIoQZ', 's:7:\"forever\";', 2051265983),
('Iayt3PFmX65ShNu3', 's:7:\"forever\";', 2050559553),
('IBoAP99HEceol050', 's:7:\"forever\";', 2051507623),
('iC88BZV0LJLFZG8M', 's:7:\"forever\";', 2050575672),
('iEAc2EYeDIegvUYb', 's:7:\"forever\";', 2052116543),
('IFkUHmbSI2g30uz2', 's:7:\"forever\";', 2050567441),
('iFoA0CyUtebfy7Z6', 's:7:\"forever\";', 2050583114),
('ifXIgWxfFR15w7jw', 's:7:\"forever\";', 2050575989),
('IiqrKOHw1tUsMIZW', 's:7:\"forever\";', 2051589224),
('iJ2WgHuuSmNIhnBS', 's:7:\"forever\";', 2050991389),
('ipgFLtkWOQdkKMYX', 's:7:\"forever\";', 2051158108),
('ir7a0yrKsm4RQVsX', 's:7:\"forever\";', 2050644698),
('ITPnbQbq97VjsBch', 's:7:\"forever\";', 2051529761),
('Itsof6VgOLtQfdQW', 's:7:\"forever\";', 2050644565),
('iUECrT44Qp3jQnZ7', 's:7:\"forever\";', 2050559407),
('iwMiTOfqU9bWinsy', 's:7:\"forever\";', 2051532608),
('J5uCiHBVGOYaMUIs', 's:7:\"forever\";', 2051264806),
('j6lHFTCCwdlsswkU', 's:7:\"forever\";', 2051187310),
('J9r0oZKkOGP0w7AG', 's:7:\"forever\";', 2051513044),
('JArypwtYPQmbfih3', 's:7:\"forever\";', 2051265944),
('JEpkyohCuXYLJE2I', 's:7:\"forever\";', 2051507640),
('jEUpOd9DQhGhfD9e', 's:7:\"forever\";', 2051592227),
('jgwLvEveevlqA6Ag', 's:7:\"forever\";', 2051245146),
('jIsGnvs8TisNryGZ', 's:7:\"forever\";', 2051705001),
('jNSqzZb2VBbH5G8H', 's:7:\"forever\";', 2051532889),
('JqJqsRhBJOhtt0jl', 's:7:\"forever\";', 2050569058),
('k3inbJgnuWCVjAkl', 's:7:\"forever\";', 2050911721),
('K4ZqQr60JOZn8TYR', 's:7:\"forever\";', 2051874889),
('k69wmjLdsPFvWc8l', 's:7:\"forever\";', 2051701748),
('K7886cXSjGl8JjfQ', 's:7:\"forever\";', 2051266174),
('k9lYvci627sJNXhz', 's:7:\"forever\";', 2050577810),
('KDRHyHanYpb0uKrO', 's:7:\"forever\";', 2051532924),
('KfcVVj6sjvTPXIdP', 's:7:\"forever\";', 2051249623),
('kkBISvfrLdaZZrUu', 's:7:\"forever\";', 2050559231),
('Kkrol2i6K2xAQsov', 's:7:\"forever\";', 2050582212),
('kksmCsUJc5wWmpUR', 's:7:\"forever\";', 2050910300),
('klW2vsm1WRtazEEo', 's:7:\"forever\";', 2051251052),
('KMFi6du4ZRJPckUn', 's:7:\"forever\";', 2051158106),
('kUByCmVKkEUPm8y3', 's:7:\"forever\";', 2051158088),
('kUGnGUSbDcmqTD6j', 's:7:\"forever\";', 2050983356),
('KwTburPYCGMPUncV', 's:7:\"forever\";', 2050583912),
('kWwaNr24MYRPxTvX', 's:7:\"forever\";', 2051248921),
('kz2F4wYLGUFRGTWX', 's:7:\"forever\";', 2051507997),
('l0ESFZdkW5mI1KxI', 's:7:\"forever\";', 2050642212),
('l3JNmb1LE4EaCccP', 's:7:\"forever\";', 2050560404),
('l5EZpRrwUoyHalXt', 's:7:\"forever\";', 2051595554),
('l5gbtouHQ2LNB6ML', 's:7:\"forever\";', 2050559218),
('l8jIUmorfEIw5AHx', 's:7:\"forever\";', 2051249418),
('lBjO1yDKCMgKzxgB', 's:7:\"forever\";', 2051266319),
('Lc78CU6VZHhGBnz2', 's:7:\"forever\";', 2050582236),
('lojEefIEHUB8lYhg', 's:7:\"forever\";', 2051266162),
('lQ7oBzC6ghTW09nD', 's:7:\"forever\";', 2051249417),
('lsR0PH5nssCNA2er', 's:7:\"forever\";', 2050568565),
('lSwpiMMN0SDqdni0', 's:7:\"forever\";', 2050910314),
('LtVQHIypAeDUVlRF', 's:7:\"forever\";', 2051265565),
('Lz40oRhOjDhaI5Kc', 's:7:\"forever\";', 2050561088),
('lz84uj9S0PWOnSd1', 's:7:\"forever\";', 2051255951),
('m0EWp1KwcUE0X6RG', 's:7:\"forever\";', 2051874318),
('M6il4q8S0L4MN78f', 's:7:\"forever\";', 2051771374),
('mBLToRcS8Owq1bUR', 's:7:\"forever\";', 2050582240),
('mBy4NQh743fEBDGV', 's:7:\"forever\";', 2050569703),
('mdTZQ8WtryS1Iolr', 's:7:\"forever\";', 2050644883),
('MGqeJ1REclGfSjQz', 's:7:\"forever\";', 2051535274),
('Mh1ubMjGPmq7IRPm', 's:7:\"forever\";', 2050570367),
('MIg5rWykyDyYlIYW', 's:7:\"forever\";', 2051250790),
('MITDqet5EnFnjg7Q', 's:7:\"forever\";', 2051518307),
('MPh6YBjeBiEGhW7c', 's:7:\"forever\";', 2051186112),
('mro3bp3ipfjfsi07', 's:7:\"forever\";', 2050559220),
('mVjQHSxf901UhgFt', 's:7:\"forever\";', 2051265953),
('mWuYDXrtXB0MwuGr', 's:7:\"forever\";', 2050908732),
('MXj9xTOgCSIiNV91', 's:7:\"forever\";', 2050581652),
('MxUfZRMr00jvVe5y', 's:7:\"forever\";', 2051514234),
('my5M8z6YKQA0gxsU', 's:7:\"forever\";', 2051187302),
('N2KbO02f01xraBgw', 's:7:\"forever\";', 2051249342),
('n7dy5xLDLKp3MCzv', 's:7:\"forever\";', 2052116503),
('n7loFQXpJMDqdV6T', 's:7:\"forever\";', 2050581851),
('n943CwoIuMEwnt4x', 's:7:\"forever\";', 2051264788),
('nerLhPo8wOQQu8co', 's:7:\"forever\";', 2050559235),
('NF3vjLXNJJnLkcRk', 's:7:\"forever\";', 2051590558),
('nfVWIUwE0GezhfnI', 's:7:\"forever\";', 2051790892),
('NGuoVLprg7VdXcxD', 's:7:\"forever\";', 2051513048),
('nIDqHhof7I9yRzht', 's:7:\"forever\";', 2051265995),
('nJmcij1rbRivwJsL', 's:7:\"forever\";', 2051266214),
('nMlrfvjwX1raMvID', 's:7:\"forever\";', 2050558076),
('nPTXRo4KQWERcEP3', 's:7:\"forever\";', 2051249436),
('NUJAhpTjNXBTr1WH', 's:7:\"forever\";', 2051590536),
('nuMs0zeOOWfqkPjX', 's:7:\"forever\";', 2051874296),
('nZnHr8tDURT2OA1C', 's:7:\"forever\";', 2050985143),
('O1xXSKEeDJSwohib', 's:7:\"forever\";', 2050906709),
('oBF9tCy7GAGOtHSR', 's:7:\"forever\";', 2052116528),
('obK0yojlzo1IAUVs', 's:7:\"forever\";', 2050559215),
('ocbWFynhQ2wFndKr', 's:7:\"forever\";', 2051251006),
('OEqKlqwLQfwpFFg1', 's:7:\"forever\";', 2050559216),
('OgXAvExkU03cZa6B', 's:7:\"forever\";', 2051518685),
('oH4KgH57owWImI8f', 's:7:\"forever\";', 2051532431),
('OjaBbp7MKaecJYfk', 's:7:\"forever\";', 2051266896),
('okAZ99YyAbS3mebm', 's:7:\"forever\";', 2052116507),
('OKvwPPqLIovCKgvY', 's:7:\"forever\";', 2051510989),
('oLtUvWOfOA0iN86W', 's:7:\"forever\";', 2050644455),
('omDtypT3Miinkm7i', 's:7:\"forever\";', 2050568771),
('op63VnTpGfAyJ91o', 's:7:\"forever\";', 2050906631),
('or2CQOavaILOxDKv', 's:7:\"forever\";', 2050567440),
('oRHHkjGA3Hu1igsL', 's:7:\"forever\";', 2051874883),
('OU8KFj4x2TQHm1yC', 's:7:\"forever\";', 2050908229),
('OuK2EaO373uqzF6U', 's:7:\"forever\";', 2051251008),
('OX2Pe8QDEqXim7bN', 's:7:\"forever\";', 2051264796),
('oXHiGU3DMPzN3Uom', 's:7:\"forever\";', 2051507589),
('OXkPjrydK4cWZBUq', 's:7:\"forever\";', 2050987681),
('p7llsWMiH8RkgEPQ', 's:7:\"forever\";', 2051595555),
('p7ZFFOCzEhmnsY6p', 's:7:\"forever\";', 2050983716),
('p8owRiOIT6Wc0jrR', 's:7:\"forever\";', 2050985080),
('P9z3OsTn45IT3QJa', 's:7:\"forever\";', 2052115104),
('Pbzu1GMMwg9YRcP2', 's:7:\"forever\";', 2051532573),
('PEX0WKIexgTmJRya', 's:7:\"forever\";', 2051874834),
('pH6U0c6rbnu4wvDm', 's:7:\"forever\";', 2051266224),
('piHcbsAVWIhbluW1', 's:7:\"forever\";', 2051874301),
('Pml8rXPXb7Ndt3II', 's:7:\"forever\";', 2050576500),
('Pmr3JxjHr4aU4VaO', 's:7:\"forever\";', 2051771375),
('pNlEZCTmF0HRyh37', 's:7:\"forever\";', 2050558078),
('Pp7ytRovqtED4kEg', 's:7:\"forever\";', 2051187304),
('pPFQ6yp6nd8FyrMc', 's:7:\"forever\";', 2051593217),
('psgBmvcVBmI4XWIS', 's:7:\"forever\";', 2050649515),
('Psx21NulGdKeSWEN', 's:7:\"forever\";', 2051507624),
('pTMaXQrA8F365JkK', 's:7:\"forever\";', 2050991402),
('PtRswU8s2XJTEnse', 's:7:\"forever\";', 2051266046),
('PWnRxFp99HhXI6Kf', 's:7:\"forever\";', 2050996755),
('pxWLzdokjSwCNICh', 's:7:\"forever\";', 2050996752),
('PZzVPKaPawvArRVe', 's:7:\"forever\";', 2050577280),
('Q6uy5K8NsAAMpkbQ', 's:7:\"forever\";', 2051519480),
('q9cKFFZvyOuEf2D4', 's:7:\"forever\";', 2050576533),
('qAAWXpDMCh90MK8R', 's:7:\"forever\";', 2050560945),
('qAVlgJ17jjDDK1VY', 's:7:\"forever\";', 2050561084),
('qcp1Smr9pdNjcOP7', 's:7:\"forever\";', 2051248307),
('Qnxki3YASxwuEcVP', 's:7:\"forever\";', 2051265798),
('QplKdReyk0Jt3xCW', 's:7:\"forever\";', 2051590376),
('Qq5MXOTG5h835qkE', 's:7:\"forever\";', 2050560947),
('qTsyQtlEX5N0LHoi', 's:7:\"forever\";', 2051593094),
('qV6hNgycNwEoIagN', 's:7:\"forever\";', 2052115159),
('qwDo9Vl43B8PTNhF', 's:7:\"forever\";', 2051514302),
('QxesbjS2E7ewX365', 's:7:\"forever\";', 2051266211),
('QYcB2Gg9BplbAxQ6', 's:7:\"forever\";', 2050567486),
('QzlEbbwI6uLdxy0V', 's:7:\"forever\";', 2050640525),
('R1Gaqawb3Q9xFCZj', 's:7:\"forever\";', 2051187299),
('Ra6uK8FFNOfd8lBK', 's:7:\"forever\";', 2051251410),
('rAatazeXAVO2UMgS', 's:7:\"forever\";', 2051591299),
('RakpNkV5eQdIHQvO', 's:7:\"forever\";', 2051504632),
('rbl0XIGXxPNU4hjk', 's:7:\"forever\";', 2050985252),
('rcNi9tslan8JPQT1', 's:7:\"forever\";', 2051592865),
('RDfGXVMQR2mi9A73', 's:7:\"forever\";', 2050910068),
('rGIlzZQSpdPYV3Oz', 's:7:\"forever\";', 2051513739),
('Rh034R24RE074y0Y', 's:7:\"forever\";', 2050896990),
('rJwJTUc05j1AOu3b', 's:7:\"forever\";', 2051249072),
('Rqd6F1ZbO7kJp5Ge', 's:7:\"forever\";', 2051251031),
('rwgCHqjCVWCFlPMU', 's:7:\"forever\";', 2050559174),
('RXIyyneR2KXm26t1', 's:7:\"forever\";', 2051595668),
('RYrbW3U6LAKUEVac', 's:7:\"forever\";', 2051513519),
('s2vmJqmUVwNzDUG1', 's:7:\"forever\";', 2050985064),
('s2xcOBRDFGi0EZ4d', 's:7:\"forever\";', 2050561041),
('s4dSL784QYkqoowu', 's:7:\"forever\";', 2051507619),
('S6OCX3Taum2rafez', 's:7:\"forever\";', 2051533318),
('S8R4S2RJNDpRB2xK', 's:7:\"forever\";', 2050665585),
('SasBlFpCm2BzRLGz', 's:7:\"forever\";', 2051245150),
('SCj2T52leChTEklm', 's:7:\"forever\";', 2051516451),
('sddnqlxpGeG0zTTN', 's:7:\"forever\";', 2051249560),
('sFg891GqiI28guiU', 's:7:\"forever\";', 2050908209),
('SjOERgsxQB14GplS', 's:7:\"forever\";', 2051187311),
('skHGiruaCqaqDDpn', 's:7:\"forever\";', 2051514248),
('SlLkPvPDQsuHRuiH', 's:7:\"forever\";', 2050907307),
('sM2r52RefFiQURQI', 's:7:\"forever\";', 2051511030),
('sShfJ55Nhua4VOm0', 's:7:\"forever\";', 2051186108),
('SU6P5DV4uKoZZTZJ', 's:7:\"forever\";', 2050642734),
('sxS2OhUKdz0iPOSk', 's:7:\"forever\";', 2051790891),
('syajqwxX0AZuNQzC', 's:7:\"forever\";', 2051264793),
('t6euzxbbGL3n7BcR', 's:7:\"forever\";', 2051532519),
('tCtJFgz2EWSndYhE', 's:7:\"forever\";', 2051704880),
('tDITo1K0ykQ6W5qu', 's:7:\"forever\";', 2050909932),
('tipx2sBvnsMbfK42', 's:7:\"forever\";', 2051248888),
('TiUb6DoZ8OxtZBHF', 's:7:\"forever\";', 2050640527),
('TkhclESFX44vq1NN', 's:7:\"forever\";', 2051590890),
('TlF8z9RNUSbbGDiX', 's:7:\"forever\";', 2051516644),
('TLVhUreqwiN6XQUz', 's:7:\"forever\";', 2050987612),
('tPXtko7QhDS9ZgIi', 's:7:\"forever\";', 2051511028),
('Tpzo13Ev3WKBrk1s', 's:7:\"forever\";', 2050581852),
('TRt3tjjHtTPVwpMz', 's:7:\"forever\";', 2051266305),
('tRtMFDnqVEqsQsIu', 's:7:\"forever\";', 2051594681),
('TuwWgqiTX308Bz7L', 's:7:\"forever\";', 2050984618),
('TWPePtZRKULg72fM', 's:7:\"forever\";', 2051250912),
('txiJZy0ZWw7Smy0s', 's:7:\"forever\";', 2050558155),
('tyCaDUmN1OyQxrXe', 's:7:\"forever\";', 2050559224),
('tzgz2brLZ15unIFE', 's:7:\"forever\";', 2051187321),
('tZKxVGm3TyX0mEuv', 's:7:\"forever\";', 2051535137),
('u0UExOiGrYVDEnOS', 's:7:\"forever\";', 2051875067),
('u18RDdg0r4HSXJ5B', 's:7:\"forever\";', 2050584541),
('u235Pq0TOjwERneS', 's:7:\"forever\";', 2051249186),
('U5JwADyewzFDPoHf', 's:7:\"forever\";', 2050569239),
('U5oh8SC1qOugMTcz', 's:7:\"forever\";', 2052116497),
('ubovFBnzX7D7PMbq', 's:7:\"forever\";', 2051507437),
('UD9r3hc2KruaFUb7', 's:7:\"forever\";', 2051514233),
('ug1lZzstS8vLlps0', 's:7:\"forever\";', 2052116563),
('UGitF0tDC3z8iUsZ', 's:7:\"forever\";', 2050559236),
('UJLywwxZCri25EhX', 's:7:\"forever\";', 2050983735),
('uK3VH9sgCxdWseWh', 's:7:\"forever\";', 2051246523),
('uKpTs1Y6DLsEopLy', 's:7:\"forever\";', 2051590505),
('ulthwn1dRbVbrghY', 's:7:\"forever\";', 2051595553),
('Ut3le1Zrtk1OwtZk', 's:7:\"forever\";', 2051771364),
('uTzSUd0l7kAMHbS1', 's:7:\"forever\";', 2051249415),
('uVQ6h0EnyBcvp0kh', 's:7:\"forever\";', 2050559241),
('uwad5m5w2WI88YOV', 's:7:\"forever\";', 2051511044),
('UwmdfUAme1KPHYNy', 's:7:\"forever\";', 2050558074),
('uXrIEQJeO6rWxyBf', 's:7:\"forever\";', 2052117589),
('UZrRXghvx7URx2Jz', 's:7:\"forever\";', 2051771367),
('UZWEV6PptwXzD4gx', 's:7:\"forever\";', 2051590178),
('v0m6kwwVqmxjThXt', 's:7:\"forever\";', 2050983650),
('Vb2JbjMBmRK60KWz', 's:7:\"forever\";', 2051595674),
('Vfca1aECkYXiAytc', 's:7:\"forever\";', 2051510964),
('vFOsNBU3hlFAgCSK', 's:7:\"forever\";', 2050559305),
('VGFrHtgjbOoisvPT', 's:7:\"forever\";', 2050990918),
('vklcH5znehlHyFz8', 's:7:\"forever\";', 2052115070),
('VLYWtcEahinA8UBt', 's:7:\"forever\";', 2050568612),
('Vmu9aEDCHC6WwRrE', 's:7:\"forever\";', 2050910070),
('vqwvm0fA9ZVkQL0h', 's:7:\"forever\";', 2051250720),
('VtZjlFu3yA7mVuF5', 's:7:\"forever\";', 2051249973),
('VxrSNVrk8hYMl2ee', 's:7:\"forever\";', 2051250853),
('VZPyEOyCDdkzCARd', 's:7:\"forever\";', 2052115855),
('W3r4o3QZSv9XvVoG', 's:7:\"forever\";', 2051590133),
('W8gLXMSL3p6kvwLJ', 's:7:\"forever\";', 2051875070),
('wc8NWBcJ0x8uKII5', 's:7:\"forever\";', 2051593178),
('wI2q9IUWiidOReEn', 's:7:\"forever\";', 2051504635),
('wPZgi0G14FqTuyz3', 's:7:\"forever\";', 2050649517),
('WqbgaAjDYUO4sinz', 's:7:\"forever\";', 2051593187),
('wroJVokFYZt6F8Cz', 's:7:\"forever\";', 2051591142),
('WT00Ho7T1YMyipUc', 's:7:\"forever\";', 2050985157),
('wz6iYx1QTQyumiGJ', 's:7:\"forever\";', 2051250969),
('x2JMcIAYxr94NR8A', 's:7:\"forever\";', 2050896987),
('x4w3AMPAmlFJRQ9C', 's:7:\"forever\";', 2052116527),
('xangaLQ9mulxFTlm', 's:7:\"forever\";', 2051250967),
('xHHF6iccg6tXyYZC', 's:7:\"forever\";', 2051591816),
('xHwt3Zaj78Sk2Bgt', 's:7:\"forever\";', 2050644699),
('XLb6f4qyW2mXHqLU', 's:7:\"forever\";', 2050985227),
('XljKq39jteVJzhvC', 's:7:\"forever\";', 2051790890),
('xMEcAEuxfdIiz6uR', 's:7:\"forever\";', 2051266852),
('xmfAveGH3UQoqxiT', 's:7:\"forever\";', 2051245206),
('xmMQIcX9CS16MoxJ', 's:7:\"forever\";', 2051250113),
('xnHx2MVraYN9GEXx', 's:7:\"forever\";', 2051510997),
('XPlg9TaNxWIbCJhL', 's:7:\"forever\";', 2052115876),
('XPOR8G1rqw0p0k9D', 's:7:\"forever\";', 2051704900),
('XTovEXGkcYhUeAwr', 's:7:\"forever\";', 2050560416),
('xucyvQJ9MaVPxMu8', 's:7:\"forever\";', 2050642327),
('xuIzipNJlYAzEUBl', 's:7:\"forever\";', 2050558113),
('xUsclxZNFiWjeJJI', 's:7:\"forever\";', 2051511129),
('XUYMGp5AOmEz6zG8', 's:7:\"forever\";', 2051245152),
('xvtBMe2hEdFzqhD0', 's:7:\"forever\";', 2050580252),
('xWLYKqw2jkae5AvE', 's:7:\"forever\";', 2050911816),
('XY6xwJnQ5u7fMTdw', 's:7:\"forever\";', 2050559223),
('xZoJANZWfmVsavcf', 's:7:\"forever\";', 2051533171),
('Y9fXht9uxQfbFQH6', 's:7:\"forever\";', 2050582525),
('Ya7BMIZnFpEWFSH1', 's:7:\"forever\";', 2050576557),
('yBwsqXJ0DqTNYjAZ', 's:7:\"forever\";', 2051518910),
('yF4yilcOpFq9Bmza', 's:7:\"forever\";', 2051265793),
('YhBYv8StFuWNyp93', 's:7:\"forever\";', 2051249484),
('yIYEibY6fyBS2QyC', 's:7:\"forever\";', 2050557912),
('yoeWkWBSR2rEy5nq', 's:7:\"forever\";', 2050577212),
('YqlsnNNB9HCaxZza', 's:7:\"forever\";', 2050911730),
('ySMq8MqeHUwdnoRe', 's:7:\"forever\";', 2051250700),
('ysN2BYzJDXmVADxF', 's:7:\"forever\";', 2050577391),
('yTFbchXnx9JJgHPD', 's:7:\"forever\";', 2050911834),
('YtOfM419wHDtRvOC', 's:7:\"forever\";', 2051589222),
('yTPh3YwwVMf4xJzc', 's:7:\"forever\";', 2051265884),
('yZpdHIkWdlR4bDHu', 's:7:\"forever\";', 2050908683),
('z1pmZkHbo2rEbpM2', 's:7:\"forever\";', 2050984592),
('Z4VbYJtfAAKKenzP', 's:7:\"forever\";', 2051266166),
('Z79LIGSYHbUtgcL8', 's:7:\"forever\";', 2050577325),
('z8bL1fxrbmbSgfBL', 's:7:\"forever\";', 2050568661),
('Za7l3e8iv9y1tOjd', 's:7:\"forever\";', 2051594678),
('ZaeKkzVteLwDZ7ii', 's:7:\"forever\";', 2050583979),
('ZGcIgNyIP7ledE3t', 's:7:\"forever\";', 2050575992),
('Zmclr0dReGjUrug3', 's:7:\"forever\";', 2051591500),
('zMS93jHkVslZtCI8', 's:7:\"forever\";', 2051266287),
('zmzwsN0JJTU52n0d', 's:7:\"forever\";', 2050643570),
('ZQY3JbCdVlFHXhSK', 's:7:\"forever\";', 2050561117),
('zUFGZYRnluS75N9v', 's:7:\"forever\";', 2050568828),
('zUKZu12fKsugbqAa', 's:7:\"forever\";', 2051594651),
('zwyY3kYqs5NOOYUl', 's:7:\"forever\";', 2050583533),
('ZXMXIiTEQiR775ja', 's:7:\"forever\";', 2050903962);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '0001_01_01_000003_create_pages_table', 2),
(5, '0001_01_01_000004_create_sections_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `url` varchar(255) NOT NULL,
  `display_name` varchar(255) NOT NULL,
  `display_name_tr` varchar(255) NOT NULL,
  `page_id` int(11) DEFAULT NULL,
  `is_home` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `url`, `display_name`, `display_name_tr`, `page_id`, `is_home`, `created_at`, `updated_at`) VALUES
(1, '', 'HOME', 'ANASAYFA', 0, 1, NULL, '2025-01-13 06:21:43'),
(3, 'hakkimizda', 'ABOUT', 'HAKKİMİZDA', NULL, 0, '2024-12-25 07:02:14', '2025-01-13 06:22:07'),
(4, 'projeler', 'PROJECTS', 'PROJELER', NULL, 0, '2024-12-26 05:29:38', '2025-01-13 06:22:23'),
(5, 'proje-ekibi', 'PROJECT TEAM', 'PROJE EKİBİ', NULL, 0, '2024-12-26 05:30:01', '2025-01-13 06:22:43');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_reset_tokens`
--

INSERT INTO `password_reset_tokens` (`email`, `token`, `created_at`) VALUES
('admin@email.com', '$2y$12$spUloWaZ5jDujCRl5G.w6.r5jiRhdsb3x5QeCWSvvTOiLv6i0nWLG', '2024-12-19 07:54:17'),
('tobioluwole444@gmail.com', '$2y$12$Z02hplLE7bDOyvS0dgpwlOUmTK16VtQycrbOFRCYYVUn5I5.Xx11G', '2025-01-08 05:58:49'),
('tobioluwole69@gmail.com', '$2y$12$mdSP1lSdH63Rzvf3tMwniur8OboP1epiJBSYFOQDJd2LkHnz6Tt9q', '2024-12-19 08:03:45');

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `page_id` varchar(255) NOT NULL,
  `sort_id` int(11) NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `type` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`id`, `page_id`, `sort_id`, `content`, `type`, `created_at`, `updated_at`) VALUES
(20, '1', 0, '[{\"image\":\"\\/storage\\/uploads\\/sections\\/section_20_slide_0_0_i09352308f911da125c84d36afad100b.jpeg\",\"text_en\":\"HOUSING PROJECTS\",\"text_tr\":\"KONUT PROJELER\\u0130\"},{\"image\":\"\\/storage\\/uploads\\/sections\\/section_20_slide_1_0_o09352308f911da125c84d36afad100b.jpeg\",\"text_en\":\"HEAD OFFICE AND HOUSING PROJECTS\",\"text_tr\":\"MERKEZ OF\\u0130S VE KONUT PROJELER\\u0130\"},{\"image\":\"\\/storage\\/uploads\\/sections\\/section_20_slide_2_0_f09352308f911da125c84d36afad100b.jpeg\",\"text_en\":\"BANK SHOWROOM AND HOSING PROJECTS\",\"text_tr\":\"BANKA SHOWROOM VE KONUT PROJELER\\u0130\"},{\"image\":\"\\/storage\\/uploads\\/sections\\/section_20_slide_3_0_f09352308f911da125c84d36afad100b.jpeg\",\"text_en\":\"FILM STUDIO PROJECTS\",\"text_tr\":\"F\\u0130LM ST\\u00dcDIOSU PROJELER\\u0130\"}]', 'hero', '2025-01-03 05:52:00', '2025-01-10 11:16:01'),
(22, '3', 1, '{\"text_en\":\"<h1>ABOUT<\\/h1><p><br><\\/p><p>The office, which handles the architectural design process in line with the criteria of place, time and quality, has made it its mission to design innovative, dynamic and sustainable modern structures.<\\/p><p><br><\\/p><p>Each design has adopted the principle of combining nature and holistic concept artistic qualities with ethical and cultural values.<\\/p><p><br><\\/p><p>They have been involved in major projects with effective, unique and innovative designs.<\\/p><p><br><\\/p>\",\"text_tr\":\"<h1>HAKK\\u0130M\\u0130ZDA<\\/h1><p><br><\\/p><p>Mimari projelendirme s\\u00fcrecini, yer, zaman ve nitelik kriterleri do\\u011frultusunda ele alan ofis yenilik\\u00e7i, dinamik ve s\\u00fcrd\\u00fcr\\u00fclebilir modern yap\\u0131lar tasarlamay\\u0131 misyon edinmi\\u015f.<\\/p><p><br><\\/p><p>Her bir tasar\\u0131m do\\u011fa ile b\\u00fct\\u00fcnsel konsept sanatsal nitelikleri etik, k\\u00fclt\\u00fcrel de\\u011ferlerle birle\\u015ftirmeyi prensip edinmi\\u015ftir.<\\/p><p><br><\\/p><p>Etkili, benzersiz ve yenilik\\u00e7i tasar\\u0131mlar ile b\\u00fcy\\u00fck projelerde yer alm\\u0131\\u015flard\\u0131r.<\\/p><p><br><\\/p>\"}', 'text', '2025-01-03 05:54:38', '2025-01-13 05:59:19'),
(23, '4', 1, '{\"title_en\":\"All Projects\",\"title_tr\":\"T\\u00fcm Projeler\",\"galleries\":[{\"name_en\":\"BANKING SHOWROOM AND HOUSING PROJECT\",\"name_tr\":\"BANKA SHOWROOM VE KONUT PROJES\\u0130\",\"group_name_en\":\"housing\",\"group_name_tr\":\"konut\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_0_0_d1d74d6643267543f57790bf7416033d.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_0_1_o1d74d6643267543f57790bf7416033d.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_0_2_n1d74d6643267543f57790bf7416033d.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_0_3_t1d74d6643267543f57790bf7416033d.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_0_4_h1d74d6643267543f57790bf7416033d.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_0_5_j1d74d6643267543f57790bf7416033d.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_0_6_m1d74d6643267543f57790bf7416033d.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_0_7_f1d74d6643267543f57790bf7416033d.jpeg\"]},{\"name_en\":\"HEAD OFFICE AND HOUSING PROJECT\",\"name_tr\":\"MARKEZ OF\\u0130S VE KONUT PROJES\\u0130\",\"group_name_en\":\"housing\",\"group_name_tr\":\"konut\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_1_0_k02191adf21e14273339a6133c60dbbd.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_1_1_c02191adf21e14273339a6133c60dbbd.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_1_2_k02191adf21e14273339a6133c60dbbd.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_1_3_u02191adf21e14273339a6133c60dbbd.jpeg\"]},{\"name_en\":\"ZIYAMET WEDDING HALL PROJECT\",\"name_tr\":\"Z\\u0130YAMET D\\u00dc\\u011e\\u00dcN SALONU PROJES\\u0130\",\"group_name_en\":\"public\",\"group_name_tr\":\"kamusal\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_2_0_z1bc940f6126298dd304921977f2a6cc.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_2_1_m1bc940f6126298dd304921977f2a6cc.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_2_2_b1bc940f6126298dd304921977f2a6cc.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_2_3_e1bc940f6126298dd304921977f2a6cc.jpeg\"]},{\"name_en\":\"VILLA PROJECT\",\"name_tr\":\"V\\u0130LLA PROJES\\u0130\",\"group_name_en\":\"housing\",\"group_name_tr\":\"konut\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_3_0_rc02d87e4a60acb72487444ec431fe27.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_3_1_sc02d87e4a60acb72487444ec431fe27.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_3_2_yc02d87e4a60acb72487444ec431fe27.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_3_3_gc02d87e4a60acb72487444ec431fe27.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_3_4_xc02d87e4a60acb72487444ec431fe27.jpeg\"]},{\"name_en\":\"YOUTH CENTER AND SOCIAL ACTIVITY CENTER PROJECT\",\"name_tr\":\"GEN\\u00c7L\\u0130K MERKEZ\\u0130 VE SOSYAL AKT\\u0130V\\u0130TE MERKEZ\\u0130 PROJES\\u0130\",\"group_name_en\":\"public\",\"group_name_tr\":\"kamusal\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_4_0_x7910589a97e291b9050cad3c27532e1.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_4_1_c7910589a97e291b9050cad3c27532e1.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_4_2_t7910589a97e291b9050cad3c27532e1.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_4_3_i7910589a97e291b9050cad3c27532e1.jpeg\"]},{\"name_en\":\"CONCEPT HOLIDAY VILLAGE PROJECT\",\"name_tr\":\"KONSEPT TAT\\u0130L K\\u00d6Y\\u00dc PROJES\\u0130\",\"group_name_en\":\"hotel\",\"group_name_tr\":\"otel\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_5_0_ne2fce55db04dc0abe0b77471956da99.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_5_1_ae2fce55db04dc0abe0b77471956da99.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_5_2_be2fce55db04dc0abe0b77471956da99.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_5_3_je2fce55db04dc0abe0b77471956da99.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_5_4_we2fce55db04dc0abe0b77471956da99.jpeg\"]},{\"name_en\":\"VILLA PROJECT 3\",\"name_tr\":\"V\\u0130LLA PROJES\\u0130 3\",\"group_name_en\":\"housing\",\"group_name_tr\":\"konut\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_6_0_x64ed49e6493d051b4695986f96bc5dd.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_6_1_o64ed49e6493d051b4695986f96bc5dd.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_6_2_k64ed49e6493d051b4695986f96bc5dd.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_6_3_j64ed49e6493d051b4695986f96bc5dd.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_6_4_t64ed49e6493d051b4695986f96bc5dd.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_6_5_h64ed49e6493d051b4695986f96bc5dd.jpeg\"]},{\"name_en\":\"VILLA PROJECT 2\",\"name_tr\":\"V\\u0130LLA PROJES\\u0130 2\",\"group_name_en\":\"housing\",\"group_name_tr\":\"konut\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_7_0_o93e3de06beb7eb4e85ab54a9fc51cc6.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_7_1_c93e3de06beb7eb4e85ab54a9fc51cc6.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_7_2_i93e3de06beb7eb4e85ab54a9fc51cc6.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_7_3_j93e3de06beb7eb4e85ab54a9fc51cc6.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_7_4_r93e3de06beb7eb4e85ab54a9fc51cc6.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_7_5_e93e3de06beb7eb4e85ab54a9fc51cc6.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_7_6_k93e3de06beb7eb4e85ab54a9fc51cc6.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_7_7_m93e3de06beb7eb4e85ab54a9fc51cc6.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_7_8_n93e3de06beb7eb4e85ab54a9fc51cc6.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_7_9_q93e3de06beb7eb4e85ab54a9fc51cc6.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_7_10_r93e3de06beb7eb4e85ab54a9fc51cc6.jpeg\"]},{\"name_en\":\"VILLA PROJECT 1\",\"name_tr\":\"V\\u0130LLA PROJES\\u0130 1\",\"group_name_en\":\"housing\",\"group_name_tr\":\"konut\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_9_0_j22b1bf8fe6e5c10a1a595a9d2712229.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_9_1_i22b1bf8fe6e5c10a1a595a9d2712229.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_9_2_y22b1bf8fe6e5c10a1a595a9d2712229.jpeg\"]},{\"name_en\":\"VILLA PROJECT\",\"name_tr\":\"V\\u0130LLA PROJES\\u0130\",\"group_name_en\":\"housing\",\"group_name_tr\":\"konut\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_8_0_w30edf2573073e5340ca42506d2c17c4.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_8_1_l30edf2573073e5340ca42506d2c17c4.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_8_2_y30edf2573073e5340ca42506d2c17c4.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_8_3_k30edf2573073e5340ca42506d2c17c4.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_8_4_f30edf2573073e5340ca42506d2c17c4.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_8_5_o30edf2573073e5340ca42506d2c17c4.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_8_6_p30edf2573073e5340ca42506d2c17c4.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_8_7_z30edf2573073e5340ca42506d2c17c4.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_8_8_w30edf2573073e5340ca42506d2c17c4.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_8_9_v30edf2573073e5340ca42506d2c17c4.jpeg\"]},{\"name_en\":\"HOLIDAY VILLAGE AND RESTURANT PROJECT\",\"name_tr\":\"TAT\\u0130L K\\u00d6Y\\u00dc VE RESTAURANT PROJES\\u0130\",\"group_name_en\":\"hotel\",\"group_name_tr\":\"otel\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_10_0_w718f93d62997212dd2538bd6749d34f.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_10_1_d718f93d62997212dd2538bd6749d34f.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_10_2_a718f93d62997212dd2538bd6749d34f.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_10_3_q718f93d62997212dd2538bd6749d34f.jpeg\"]},{\"name_en\":\"SHOWROOM PROEJCT\",\"name_tr\":\"SHOWROOM PROJES\\u0130\",\"group_name_en\":\"commercial\",\"group_name_tr\":\"ticari\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_11_0_kd1ece4e38bd75da7ff0121bfb0f7cfb.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_11_1_pd1ece4e38bd75da7ff0121bfb0f7cfb.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_11_2_nd1ece4e38bd75da7ff0121bfb0f7cfb.jpeg\"]},{\"name_en\":\"FILM STUDIO PROJECT\",\"name_tr\":\"F\\u0130LM ST\\u00dcDYOSU PROJES\\u0130\",\"group_name_en\":\"education\",\"group_name_tr\":\"e\\u011fitim\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_12_0_ea93ed1a6a8fb43955b2faf0718d8a50.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_12_1_na93ed1a6a8fb43955b2faf0718d8a50.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_12_2_ba93ed1a6a8fb43955b2faf0718d8a50.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_12_3_da93ed1a6a8fb43955b2faf0718d8a50.jpeg\"]},{\"name_en\":\"BOUTIQUE HOTEL PROJECT\",\"name_tr\":\"BUT\\u0130K OTEL PROJES\\u0130\",\"group_name_en\":\"hotel\",\"group_name_tr\":\"otel\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_13_0_e1744cc41f3646fd18fef03fe0e60579.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_13_1_t1744cc41f3646fd18fef03fe0e60579.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_13_2_i1744cc41f3646fd18fef03fe0e60579.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_13_3_u1744cc41f3646fd18fef03fe0e60579.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_13_4_s1744cc41f3646fd18fef03fe0e60579.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_13_5_x1744cc41f3646fd18fef03fe0e60579.jpeg\"]},{\"name_en\":\"LIBRARY PROJECT\",\"name_tr\":\"K\\u00dcT\\u00dcPHANE PROJES\\u0130\",\"group_name_en\":\"education\",\"group_name_tr\":\"e\\u011fitim\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_14_0_h57f3917bd07176237c7e8f27b4ab834.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_14_1_o57f3917bd07176237c7e8f27b4ab834.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_14_2_h57f3917bd07176237c7e8f27b4ab834.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_14_3_b57f3917bd07176237c7e8f27b4ab834.jpeg\"]},{\"name_en\":\"BOUTIQUE HOTEL  PROJECT\",\"name_tr\":\"BUT\\u0130K OTEL  PROJES\\u0130\",\"group_name_en\":\"hotel\",\"group_name_tr\":\"otel\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_15_0_tcac4477427b72fd2ad2062d3e434c58.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_15_1_hcac4477427b72fd2ad2062d3e434c58.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_15_2_ocac4477427b72fd2ad2062d3e434c58.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_15_3_zcac4477427b72fd2ad2062d3e434c58.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_15_4_zcac4477427b72fd2ad2062d3e434c58.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_15_5_pcac4477427b72fd2ad2062d3e434c58.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_15_6_ocac4477427b72fd2ad2062d3e434c58.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_15_7_tcac4477427b72fd2ad2062d3e434c58.jpeg\"]},{\"name_en\":\"AL\\u00c7IDA\\u011e APARTMENT PROJECT\",\"name_tr\":\"AL\\u00c7IDA\\u011e APARTMAN PROJES\\u0130\",\"group_name_en\":\"housing\",\"group_name_tr\":\"konut\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_16_0_cdce6051ef526b091d4ad3f26095da48.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_16_1_ddce6051ef526b091d4ad3f26095da48.jpeg\",\"\\/storage\\/uploads\\/sections\\/section_23_slide_16_2_zdce6051ef526b091d4ad3f26095da48.jpeg\"]},{\"name_en\":\"CENG\\u0130ZKOY APARTMENT PROJECT\",\"name_tr\":\"CENG\\u0130ZK\\u00d6Y APARTMAN PROJES\\u0130\",\"group_name_en\":\"housing\",\"group_name_tr\":\"konut\",\"images\":[\"\\/storage\\/uploads\\/sections\\/section_23_slide_17_0_x3fd823262cb357b48ef22c002878cf7.jpeg\"]}]}', 'gallery', '2025-01-03 05:56:24', '2025-01-07 04:36:56'),
(24, '5', 0, '{\"image\":\"\\/storage\\/uploads\\/sections\\/section_24_slide_0_0.jpeg\"}', 'banner', '2025-01-03 05:57:11', '2025-01-13 06:11:16'),
(25, '5', 1, '{\"title_en\":\"Our Team\",\"title_tr\":\"Ek\\u0130b\\u0130m\\u0130z\",\"members\":[{\"name\":\"P\\u0131nar \\u015ea\\u015fmaz Kavas\",\"position_en\":\"Master Architect, Co-Founder\",\"position_tr\":\"Y\\u00fcksek Mimar, Kurucu Ortak\",\"image\":\"\\/storage\\/uploads\\/sections\\/section_25_slide_0_0_d390825698a48287364b1b11a7d35134.jpeg\"},{\"name\":\"Mehmet Aktun\\u00e7\",\"position_en\":\"Architect, Co-Founder\",\"position_tr\":\"Mimar, Kurucu Ortak\",\"image\":\"\\/storage\\/uploads\\/sections\\/section_25_slide_1_0_j60c03561d7caf175b8b94b9a9ab193e.jpeg\"},{\"name\":\"Beyza \\u00c7o\\u015flu\",\"position_en\":\"Architect\",\"position_tr\":\"Mimar\",\"image\":\"\\/storage\\/uploads\\/sections\\/section_25_slide_2_0_kefa3d361b271ecdaeac62d0e65ff78e.jpeg\"},{\"name\":\"ZEYN\\u0130 AL\\u0130C\\u0130K S\\u00d6NMEZLER\",\"position_en\":\"Interior Architect\",\"position_tr\":\"I\\u0307\\u00e7 Mi\\u0307mar\",\"image\":\"\\/storage\\/uploads\\/sections\\/section_25_slide_3_0_dd8424c7fbbbfd5807898829f630d5cb.png\"},{\"name\":\"CEMAL AKTUN\\u00c7\",\"position_en\":\"Architect\",\"position_tr\":\"Mimar\",\"image\":\"\\/storage\\/uploads\\/sections\\/section_25_slide_4_0_yb16014673aee0efb496a75098194873.jpeg\"},{\"name\":\"AKIN AKTUN\\u00c7\",\"position_en\":\"Civil Engineer\",\"position_tr\":\"I\\u0307n\\u015faat M\\u00fchendi\\u0307si\\u0307\",\"image\":\"\\/storage\\/uploads\\/sections\\/section_25_slide_5_0_y4c849ad42f51e4b09f0a7b72d2f6eb8.jpeg\"},{\"name\":\"Tun\\u00e7 Karkuto\\u011flu\",\"position_en\":\"Master Architect\",\"position_tr\":\"Y\\u00fcksek Mimar\",\"image\":\"\\/storage\\/uploads\\/sections\\/section_25_slide_6_0_lb886de5276afd4607257701a61f45e9.jpeg\"},{\"name\":\"E\\u015fref G\\u00fcnerman\",\"position_en\":\"Architect, Master Interior Architect\",\"position_tr\":\"Mimar, Y\\u00fcksek \\u0130\\u00e7 Mimar\",\"image\":\"\\/storage\\/uploads\\/sections\\/section_25_slide_7_0_f66ba1acdc2a8d4fcea6c73e960ec427.jpeg\"},{\"name\":\"Ya\\u011fmur Andreou (IONIC STUDIO)\",\"position_en\":\"Interior Architecture Consultant , Master Interior Architect\",\"position_tr\":\"\\u0130\\u00e7 Mimari Dan\\u0131\\u015fman , Y\\u00fcksek \\u0130\\u00e7 Mimar\",\"image\":\"\\/storage\\/uploads\\/sections\\/section_25_slide_8_0_e8247f9fa7a90911f39ed1064dd7147e.jpeg\"}]}', 'team', '2025-01-03 05:57:11', '2025-01-13 06:11:16'),
(26, '3', 0, '{\"image\":\"\\/storage\\/uploads\\/sections\\/section_temp_slide_0_0_ze96b36394df780c77cfb69f7efc549d.jpeg\"}', 'banner', '2025-01-06 06:45:22', '2025-01-13 05:59:19'),
(27, '3', 2, '{\"text_en\":\"<h1>MISSION<\\/h1><p><br><\\/p><p>To determine the principles of contemporary architecture as a design principle and to design architectural and interior spaces by blending the needs of investors and users with aesthetic and material requirements with an empathetic approach.<\\/p>\",\"text_tr\":\"<h1>M\\u0130SYON<\\/h1><p><br><\\/p><p>\\u00c7a\\u011fda\\u015f mimarl\\u0131k ilkelerini tasar\\u0131m prensibi olarak belirleyip, empatik yakla\\u015f\\u0131mla yat\\u0131r\\u0131mc\\u0131 ve kullan\\u0131c\\u0131 ihtiya\\u00e7lar\\u0131n\\u0131 estetik ve malzeme gereklilikleri ile harmanlay\\u0131p mimari ve i\\u00e7 mekan tasar\\u0131m\\u0131 yapmak.<\\/p>\"}', 'text', '2025-01-06 06:55:39', '2025-01-13 05:59:19'),
(28, '3', 3, '{\"text_en\":\"<h1>VISION<\\/h1><p><br><\\/p><p>To undertake projects across the country with a holistic approach in many different areas from hotels, hospitals, residences to offices, and to follow the requirements of the age and technology while doing this and to constantly renew.<\\/p>\",\"text_tr\":\"<h1>V\\u0130ZYON<\\/h1><p><br><\\/p><p>Otelden, hastaneye, konuttan ofise pek \\u00e7ok farkl\\u0131 alanda b\\u00fct\\u00fcnc\\u00fcl yakla\\u015f\\u0131mla t\\u00fcm \\u00fclke \\u00e7ap\\u0131nda projelere imza atmak ve bunu ger\\u00e7ekle\\u015ftirirken \\u00e7a\\u011f\\u0131n ve teknolojinin gereklerini takip edip s\\u00fcrekli yenilenmektir.<\\/p><p><br><\\/p><p><br><\\/p>\"}', 'text', '2025-01-06 06:55:39', '2025-01-13 05:59:19'),
(29, '4', 0, '{\"image\":\"\\/storage\\/uploads\\/sections\\/section_temp_slide_0_0_cde1a981a827d23a8fe0958ba71fd719.jpeg\"}', 'banner', '2025-01-06 07:04:08', '2025-01-07 04:36:56');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('25LRJUVdboKRxNPYTYl4FM7wTC6A1TXxyatzeSdX', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoib0c3cU54VFZrZXRGVUFqS1RMY0RsVWhDSTVUUE02Q3NOOWF2d0pGMSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRmNHaHpZeEZTRzJoMGRXaEdYa0pYWHdnWkdDQVNWbXQwS21vekZCODBDeFV3ZXowbkNtMEZGMjVmYnpKVE5oUnpZRGxWRkJzQVdWMUNXQmN0WWloekJpUjFUdzhFTlE0SU5XazRNQklNRFE5MEJ5ZDJmVGdOY20wMUoyOVFXRk5YR0VWRmZFaF9MSDBvZGpRWGZUb0pDR0VEWjNCU1hGVVZNVUFzRUZSN1VDd3lURUZjVjJkUWR3Z1pHQ0FTVm1wbUxCZyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736929037),
('29iKpI2QMlXZxfjUSa9JUKPQH40plbwwvMq8FSa6', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSUtHOGU5eFJqOWQ3OG9KUzBTTm52RnA0bUFTTjJMRXBvVEtXeW9UdCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRmVqVmthVXhGRVRWamZ6VlJWQjlBVlZVT0VuMEZYRFpqSURja0hrTW1Ba3doZDJBd0FEQVNIVE5JWlc5RVBFbGthbVJDSGtZWFV3QlZVa282YUhWa0RIbGlSVklUUDFNZlB6UXZPazhiQjFKakRYcGhkMlVhZURBaUxUSkhVZzVBRWhoU2RoVm9KaUFfZkdrQWQyY2VBbmNmYmh0RFZTdHpLa05XSEN4dmYwTW1hMkI4ZDBWdlNGVU9FbjBGWERkeEprVSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928508),
('3aVXqX6zEogqoNJ89i9HwrryHtZ7d0kkhVHPyRYV', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUDMwdkd6T1d6OXhjbTJsVHAyMXg0MFBEdVkzakRqZnNyWEhIQzhHUCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRmFtMWplUlJDQVcxa2IyMVdSRWRIUlEwSkFpVUNURzVrTUc4akRob2tFUkFnWVRnM0VHZ1ZEV3RQZFRkRExCRmplanhGRGg0UVExaFNRaEk5ZUMxakhDRmxWUW9VTHdzWUwyd29LaGNjRndwa0hTSm1aejBkYUdnbFBXcEFRbFpIQWtCVlprMXZObmc0YkRFSFp6OFpFbVFUZlhWQ1JsQUZLMFU4Q2xGclNpa2lWa1JNVFdKQWJRMEpBaVVDVEc5Mk5oMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736929101),
('3NLw0ZhSB052YZJryQK0XUEbirupsnMIhHvVUElY', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidDRtSndZQ3QwaEhWRVpQa1U3UlliYWZIRlBKVjdqZzZxQjVweWJaWiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGFnZSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928500),
('4agMHBxX14r6WbmXfrEIiuGv2VTdWcyK2QDYjeKJ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiV1FVY01yNHhXeWlZaTd1ZG9BcmozNGFaNnFGZ05EWjh0aFk2dWlPeSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRlluRnhjUWhRQ1hGMlozRkVURnRWVFJFYkNqa1FSSEoyT0hNeEJnY3pHZ2cwYnlRbEdIUUhCWGRkZlN0UkpBMXhjaUJYQmdJQ1MwUkFTZzR2Y0RGeEZEMTNYUllHSnhjS0ozQTZJZ3NPSHhaMkZUNTBieUVQWUhRM05YWlNTa3BWQ2x4SGJsRjlQbVFxWkMwVmJ5TUxHak1LZGw5V1RXOW1NZ2REQkdoNlp3Y3pjeVJwYndGNlVCRWJDamtRUkhOa1BnRSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928504),
('5K19DCYGSTVJdq7fuwKsGwYz8uGNYOmg0Z88Qm3r', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZTZZdFVCYzN6ckRYVHMyd25WNmtLM3QxZXZ4MGVpMTFhWHFFYUtvYyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRmFHTXdleG9SQTJNM2JXTUZSa2tVUndOYUFDdFJUbUEzTW1Gd0RCVnlFQnAxWlRaa0VtWkdEMlVjZHprUUxoOHdlRElXREJCRFFWWUJRQnh1ZWlNd0hpODJWd1JITFFWTExXSjdLQmxQRlFRM0h5dzFaVE5PYW1aMlAyUVRRRmdVQUU0R1pFTThOSFpyYmo5VVpURktFQ0ZMZkUwWFIzMG5PQlVDRG5vN2JSVnllVFlvWlJNN1dnTmFBQ3RSVG1FbE5CTSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928505),
('64WdPDRL9oFg254W7tznsSjNAgCp1RzZGDJoQdCP', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNGMzcUJ4TFBxTTFnRTNoYXVBNHc4RGVRc2tiR1JDMEVDRFRUdmF5aiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGFnZXMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1736929036),
('8lh6KYlZV9Y1w36CKj6l0oJjVlVYAqaN0TGCYGnl', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiS2YyNEVwQ2xtYnlWaW5rQjBmcmdlS1lSaUduaXk1ODdMaXRPb21zZiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRk5HMXFKeFJMWDIxdE1XMWZHa2RPR3cwQVhDVUxFbTV0Ym04cVVCc29UQlF2T1RnLVRtZ2NVMnRHS3pkS2NoRnFKRHhNVUI0WkhWaGJIQkkwSmkxcVFpRnNDd29kY1FzUmNXd2hkQmNWU1FwdFF5SnZPVDBVTm1nc1kycEpIRlpPWEVCY09FMW1hSGd4TWpFT09UOFFUQzhSSUVOTkczTjlaQnRZVW5SaE1Sc29KVGh5T1IxaEJnMEFYQ1VMRW05X2FCMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928509),
('8uMn3SfbpiYEJ6yFfLB29e5cODIvUDkzNfRtse3L', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZFNyNDdtTGpEcDgwU09LcXJhdmZiTm0zZk5ZYkhLcTlFMzVGWmM4RCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc29jaWFscyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736932018),
('9AGoX9hk8153z43inMP1kTJ8MgmaVEiSQ8lan9XD', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMVpNNjc2U0dYY2NUWjJsZkt2VGtDVGdtUWdsb0w3Wkgxc2w1QWplTSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRmFqUjJlVTFYQVRSeGJ6UkRSQjVTUlZRY0Fud1hURGR4TURZMkRrTXhFVWsxWVdFaUVERUFEVEphZFc1V0xFaDJlbVZRRGtjRlF3RkhRa3NvZUhSMkhIaHdWVk1CTDFJTkx6VTlLazRKRjFOeEhYdHpaMlFJYURFd1BUTlZRZzlTQWhsQVpoUjZOaUV0YkdnU1oyWU1FajBHZlN4WFJna1FLeHdwQ2doLVNuQTNWaDFaVFR0VmJWUWNBbndYVERaak5rUSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736929100),
('9f3nV69I7HoXzdg7kODds0GkaGQc6215XQhEk2gD', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibVNJaVJNaFRrMzVHTWRic0lHeGVYZnpPeVdlN3hHWEwxSm1hMnBuTyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRmIzWXhmQThRQkhZMmFuWUVRVndWUUJaYkJ6NVFTWFUyTlhSeEN3QndId2h3WmlWbEZYTkhDSEFkY0N3UktRb3hmeWNYQ3dWQ1JrTUFSd2x2ZlRZeEdUbzNVQkZHS2hCS0tuZDZMd3hPRWhFMkdEazBZaVpQYlhOM09IRVNSMDBWQjFzSFkxWTlNMk5xYVNwVllpUkxGelJLZTFnV1FHZ21Qd0FEQ1c4NmFnQnpmaU1wWWdZNlhSWmJCejVRU1hRa013WSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928685),
('C8UqwAZm5XT7eoILTEpaTmeOFPVuxDxEduImSkfL', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMHZzWFR5MVU4OEhrRW9KdG05OEY5YjJyZGpINElWajBYOHY1ZnIzdiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGFnZXMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1736926143),
('CatpHi0Irsh9DjIXtz7FE68DNEljpxL5GrGbm7xB', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZUtFUVpQWnRrc1oxbkN2TUIyMUdHVVFaQXVaMFNqS1lkTWpGSDNKeiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRlpXZHdkaDVSRG1kM1lHZEZTMDFVU2djYURTOFJRMlIzUDJVd0FSQTNIaG96YmpJa0gySUdBbUZjZWoxUUl4dHdkVFpXQVJRRFRGSkJUUmd1ZHlkd0V5dDJXZ0FISUFFTElHWTdKUjBQR0FCM0VpaDFhRGNPWjJJMk1tQlRUVnhVRFVwR2FVZDhPWElyWXpzVWFEVUtIVzRBY245UlNWb1dKRTh2QlZ0NFJTTXhXVTVmUW1oVFlnY2FEUzhSUTJWbE9SYyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736929039),
('CBL6ntPk4EJO6XD7AqB2xYgHLMKkdcv6tzbWRHGq', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMDRYUjRuSmVsc0hPZk83OG1HOE1jdk9ZOFlRbE9qaktaZzVPSlRJeCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRmJqVXpmVXdTQlRVMGF6VUdRQjhYUVZWWkJuMVNTRFkwTkRkekNrSjBGVWh3WldCbkZEQkZDVE1mY1c4VEtFa3pmbVFWQ2taQVJ3QUNSa3B0ZkhVekdIazFVVkpFSzFOSUt6UjRMazlNRTFJMEdYbzJZMlZOYkRCMU9USVFSZzRYQmhnRlloVV9NaUJvYUdsWFkyZEpGanhEZVMwU1FnaFZMeDFzRGdrN1RuRnlVaHdjU1RvUWFWVlpCbjFTU0RjbU1rVSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736929098),
('D60EJN1aDwBn7KlJVA3rYYfISGrgLJuILZQFci6d', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiclNHeXU4cE40OXU4NFRiaVpWcXRWSXFNQkhsbktCNWhEbUdXRjdoZCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc29jaWFscyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928700),
('DdMtKfpCaAWMgkfm3HwRy5QiBM00jxd2mQ07e5nI', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYk9BWWpJdlp2ZHJzbHJYMFJVcTNtWll4TGhlcldVTGhyVGRUemJTcSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc29jaWFscyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928684),
('dF6SXIczDUERXedR9RE9osxdSxAO1FA2rwrrCAKT', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiOWY0eHNaeGNicnYzam0zQTlxRTJwZHJUZ3cza013Y1NlMXhubjhJaiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGFnZSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736926322),
('Du3sx8rl2hmgFVlJ0hEQMWKSO5E67wPr17058NfP', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicnlzS0tscXhZbkROSm95SGkxcXFWS1pTaHU1QUdKWmxQVXIwcXUzWiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRmRqbGlaVUJESFRsbGN6bFhXQk5HV1ZrSUhuRURVRHBsTERzaUVrOGpCa2NqZjJvMkREd1VFVDlPYVdOQ01FVmlabWhFRWtvUlh3eFRYa1k4WkhsaUFIVmtTVjRWTTE4Wk16Z3BOa01kQzE1bEFYWm5lMmtjZER3a0lUNUJYZ0pHSGhSVWVobHVLaXc1Y0dVR2Uyc1lEbnNaWWhkRldTZDFKazlRRUNCcGMwOGdaMng2ZTBscFJGa0lIbkVEVUR0M0trayI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928687),
('EcXJLfztubkwOexm1z15j0g7vyd9QphkMz1bnuoL', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiczlNVzZEQlJVcHVTbHFWVG9FYlQ1TktJd2ZHbFZhU3JZNU5jdnBtdiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGFnZXMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1736926322),
('EWUhcoFhiHTV8H7pls66CDMh4Y9vww3trVz2tc9e', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNGV5clBIVlR2bXI0V3A1VFZQbmdVZjNyVXRtUGJYbXBGa1lzaXVaQiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRmVXUmhhaDFBRW1SbWZHUlVWMDVGVmdRTEVTd0FYMmRtSTJZaEhSSWdDUm9nY0RjMUEyRVhIbUpOWmo1QlB4aGhhVFZISFJjU1VGRlFVUnNfYXlSaER5aG5SZ01XUEFJYVBHVXFPUjRlQkFObURpdGtkRFFmZTJFbkxtTkNVVjlGRVVsWGRVUnRKWEU2ZnpnRmREWWJBU1lhYlVwR1ZucDJLUkpUSDMxcWZCSWphREY1ZEJScVN3UUxFU3dBWDJaMEpSUSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928685),
('fJQyW8eKYFs8JOWc0gowNvO32YJjTRlgA0nUmGr5', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVGVleVBqZTQ5UHhOTkZZdjA5OVN6Y0NYMHF0alNZS1JXOWI5cDY4byI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRlltNDJjUmNYQ1c0eFoyNERURVFTVFE1Y0NpWlhSRzB4T0d4MkJoaDNIQkYwYno5aUdHdEFCV2dhZlRRV0pCSTJjajhRQmgxRlMxc0hTaEZvY0M0MkZDSXdYUWxCSndoTkoyOTlJaFJKSHdreEZTRXpiejVJWUd0d05Xa1ZTbFVTQ2tNQWJrNDZQbnR0WkRKU2J6eE1HaXhOZGtBUlRYQWhNaGdFQkhjOVp4aDBjenN1Yng0OVVBNWNDaVpYUkd3alBoNCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928665),
('FNmSkpRqI1I6LQsNv1ApRpVlq1RPupWPRhQrreLA', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaW1PN2NHZUhxOWFmR2pLU09jdDI0Sld3ZTlIZVNXNlV2azBNOFdmdyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGFnZXMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1736932018),
('G6lrLpcBeBAh5HZvvqvOt8Z3fDHlgIJJdFI9Yf2L', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQm95UzVBQXh5SzNOVDZqTzlrN2syVGFVT3ZaUnlKdk1qaHVQZDFrVSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRmFYY3plZzRTQW5jMGJIY0dSMTBYUmhkWkFUOVNUM1EwTTNWekRBdDBFQVZ5WWlKbkUzSkZEbkVmZGkwVEx3c3plU1lWRFFSQVFFSUNRUWh0ZXpjekh6czFWaEJFTEJGSUxIWjRLUTFNRkJBMEhqZzJaQ2ROYTNKMVBuQVFRVXdYQVZvRlpWY19OV0pvYnl0WFpDVkpFVFZJZlZrVVJta2tPUUVCRDI0NGJBRnhlQ0lyWkFjNFd4ZFpBVDlTVDNVbU5RYyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736932031),
('GB4Ufu1tirAfq6CR2O5IJ1ZAxBmhguGnjSk7mSQX', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaTJBa1JDR3Z6c29kRjE5THRrWTB3amdRTzRRVHJvQ1VmZnY4a1pnTiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRk5IRnVKd2hQWDNGcE1YRmJHbHRLR3hFRVhEa1BFbkpwYm5NdVVBWXBUd3d0UHlRNlRuUVlVM2RDS3l0T2NnMXVKQ0JJVUFJZEhVUmZIQTR3SmpGdVFqMW9DeFlaY1JjVmNYQWxkQXNSU1JacFF6NXJPU0VRTm5Rb1kzWk5IRXBLWEZ4WU9GRmlhR1ExTWkwS09TTVVUSGdlSTJsUEdFd0lkVmt4VkUxbUZEVXZDRmhCRTM1Tk14RUVYRGtQRW5ON2FBRSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736929105),
('GhwjLU4LWoGGMSMppPSSk71vwyfxiWqAjg9rLIWv', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibENjTFVidUdHT2YxandXbXVHdHRIVGJ1aEF2VVlkSFh3MDczNzRtZiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRmJUTnZma3BPQmpOb2FETmFReGxMUWxNRkJYc09TekJvTnpFdkNFOG9GRUV1Wm1ZN0Z6WVpDalZEY21sUEswOXZmV0pKQ1VBY1JBWmVSVXd4ZjNOdkczOXBVbFFZS0ZVVUtESWtMVWtRRUZSb0dueHFZR01SYnpZcE9qUk1SUWhMQlI1WllSTmpNU1kwYTI4TFlHRVZGWEVVZVIxSVFpMTRQVVZkQ3lwa2FFVXRmR1ozWUVOa1gxTUZCWHNPU3pGNk1VTSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736932019),
('haLWyH5GsBqseev3Ha98kKYjvmWlZFS3wiz3Pg4O', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMHk3RW9MbWdUT3BOZUFWcFNWbFN5TDdLYU85bko0Tm52dzAwNFU3YiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRmFUYzVlazRZQWpjLWJEY01SeDBkUmxkVEFYOVlUelEtTXpWNURVRjRGMGg3WkdadEV6SlBEakVWZG0wWkwwczVlV1lmRFVSS1FBSUlRVWhuZTNjNUgzc19WbEJPTEZGQ0xEWnlLVTFHRkZBLUhuZzhaR2RIYXpKX1BqQWFRUXdkQVJvUFpSYzFOU0ppYjJ0ZFpHVkRFWFZDZlJrZVJpa3VPVUVMRHk0eWJFRjdlR0loWkVjeVcxZFRBWDlZVHpVc05VYyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928669),
('j2cHlCyJkjw5FI7aUr5tH0hYjUinFxYvkxGxkaTx', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidHluZmh1bXhIMmNYY3U3NVBaUTdnZUo3aThPUWhsU0U1eVNvWU5IUyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc29jaWFscyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928503),
('jhXBTIR5YMOix2pp0nbUcg4zzWXOBxnVJY2yl33B', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiREQ4SVBXQXVkN29mUjZXTVVXc1lwVTZRdGI2VFBZYVpKZzRtWjBJbCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRmRtUnJaUjFLSFdSc2MyUmVXRTVQV1FRQkhpd0tVR2RzTEdZckVoSXFDQnNwZXpVX0RHRWRFV0pIYVQ1TE1CaHJaalZORWhjWVgxRmFYaHMxWkNSckFDaHRTUU1jTXdJUU0yVWdOaDRVQ3dOc0FTdHVlelFWZEdFdElXTklYbDlQSGtsZGVrUm5LbkV3Y0RnUGV6WVJEaVlRWWtwTVdYcDhKaEpaRUgxZ2N4SXBaekZ6ZXhSZ1JBUUJIaXdLVUdaLUtoUSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928666),
('KhdgXB9b37cVLce00S9gLpsUCM6fgVryQR9jvolA', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicmQ3ZGN2VGpLc2prWFVQYTMyNGYyOVNqaXBLaGpUSmtWZWhqbkRtVCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6OTEwOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS8wM0FGY1dlQTZ3OGZTOXZDYUpvWGxyYkNSUTVDcUYtWHVHLVZFWGJ4UGJXNVRqRTduT2REd0ZyVFYyTjZUVGZrZFhBOVNLMlZiMFJad001cFozWDJjanpmYWl1dGJ6VG1fd2VvNllCUG1mLV96UUNCVzUwRHJpX25DS3kyampqTWN6WUlwUDdQWlVnTlFxUWplbWxTZlNrN3o0dVRBbFhUYVk5cjc5Z0ZJc1N4dk96YllEdmVobE44Y2JLMVNnS0lVR19PLU5qVGdqbW1MZG5SV3I1ZmFSU0hDeHJibnNhcmhxTElGR3FQZzh3c2x5SzVRYU95ZTByQlVPMWhJb1ZUcC1DN3BybEgtQklQYUp1ZmNTYTY0VDlJTWpnVGNjYUZUWFpVeTFDa1I5dEJJQkhrR2UxRkNlSDNXb3hBRXJ1bGJaWTVRMVMydXc5d05BdFM0X3JmLVVua2xOc3cteXc2Z0ZJZkdGVjQyUXA0Z051cDBYbGd4X0tTcW5OQlpsT0tWNFZHS3FoY0ZkcE5JcklHbjVqNzNMOGptV0pNSnROX0ZiTUFWWEl1ZDVMWWRIZVl0d1ZSNTlDMnJGRWw2RnRXNmpQc0t1ekI4LWRUT0Jyc3hZWk5JREZOQ09yejhuUzZhcURNc3l4UVo3dkxSb2x5ZmhqbE5qcTYzZkc3MEYwcXFBV3YzLXpDQmxqcU5JbzlfVE5lekVYWlRmRnVFdG9xd3JCZFh6Z3dIS3R1ejBEVjZXdHF3SGIwaEJWMm9oQy12WjF4OEt5Q0ptSy05OW5nMEFtM09pWm9ISXNIMHdEbUdGQWhNakpCN0lNanpTSVdlUko2WDE3c2xpbjE2ZXBDTEZqeXVpUWxHR3dXUElOLThxNVlNSUx5THg1OTg5NFNGNkhmUHJYaWZRS3pUWllqLVpTMGV3c1NuLWczalBFczQ2OTNOVy1OMllWb0I3LXZCaXVSX3BsX3dYYzZYdjlXR3Bjb0tiTVdmZE9GV21zODUwamRqSnA5OEVib2RKRlR6UElscmd5UkR3VlQwXzlNTHIwaXpockd4QUl6a09kaFdBcWNFa1BQWEd5M2FDS19QQVE5cnA4NlJOX1JCeXBSZTVocF9BQTlPdGUzTjBPM3NpdWtFSjV2dkVSVUNhallWdVlRIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1736932118),
('LBVxkLZ9tUYnQXBNVRZLemEQPQhMJEgJqPakjMo2', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQUJmTmxnbVo0REh1YUkyWkVXRG9FUW1UaDhZZnZpcnVCSnJ0VTBBeiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGFnZXMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1736926326),
('lfFjB6snlxwlaMkQV95ItfJ4E5k5hn6VUcey6oZJ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRlJkRXNyRkRDUThHUzVTRzRDS1ExZzdNWU1wY0RMREkzdTRrZ1lJMSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRk5IaGxKd0ZFWDNoaU1YaFFHbEpCR3hnUFhEQUVFbnRpYm5vbFVBNG5UQUVnT1MweFRuMFRVMzVKS3lKRmNnUmxKQ2xEVUFzV0hVMVVIQWM3SmpobFFqUmpDeDhTY1I0ZWNYa3VkQUlhU1I5aVF6ZGdPU2diTm4walkzOUdIRU5CWEZWVE9GaHBhRzAtTWlRQk9Tb2ZURG9lSUZaQ0cyWnlaQTVYVW1GdU1RNG5KUzE5T1FodUJoZ1BYREFFRW5wd2FBZyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928504),
('lGOGA3gpDekbCeScYxKHsTtPsFwhLW2syLAAqvKe', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaFJSaDFsNDMybUtjRElESENiUFd1akJ1M25pUk1iVVhFUTBrdWptdSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGFnZXMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1736928665),
('lhSU0UybpvOQ4qKYtL66viw408wJ6bskr92aWWYf', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibzA0Z0ZKcEJlQWdQbHlMQWVhdGFCVEpZRXlwa3V1YTd4cHVhdEo4QiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRk5HY3lKeDRUWDJjMU1XY0hHazBXR3dkWVhDOVRFbVExYm1WeVVCRnlUQjEwT0RCbVRtSkVVMkVlS3owU2Noc3lKRFlVVUJSQkhWSURIQmhzSmljeVFpczBDd0JGY1FGSmNXWjVkQjFOU1FBMVF5ZzNPVGRNTm1KMFkyQVJIRndXWEVvRU9FYy1hSEpwTWp0V09UVklUQ1ZKSUVrVkcza2xaQkVBVW40NU1SRndKVElxT1JjNUJnZFlYQzlURW1VbmFCYyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928701),
('mcMhIao00lBmane4rVoGsuP0t6NxnLK8oLSRd5Ys', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiczc4djBQSkY2VnZEbmhpV0FwY3ZUTUdQQlRqY3RrMmRtWm9GVkp4VyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRmVXZHFhaDVMRW1kdGZHZGZWMDFPVmdjQUVTOExYMlJ0STJVcUhSRXFBUjBzZFRBLUEySWNIbUZHWmoxS1B4dHFhVFpNSFJRWlVGSmJVUmcwYXlkcUR5dHNSZ0FkUEFFUlBHWWhPUjBWQkFCdERpaHZkRGNVZTJJc0xtQkpVVnhPRVVwY2RVZG1KWEl4ZnpzT2REVVFBU1VSYlVsTlZubDlLUkZZSDM1aGZCRW9hREp5ZEJkaFN3Y0FFUzhMWDJWX0pSYyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928701),
('mnjqPxP1J2mmAFQnyAFHQDU8kA4SyW5cNQt2zp3u', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoib3Q0NHNQRUdrWDl0VjZuNHh4TjA0b3hyd1JKSzl0Y0drQXBrZFJVaCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc29jaWFscyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736926326),
('MpZfNq45uVnQIYRrkZCf00E6nCRy2hp5BMnVAwFY', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidjJvemtXZGdLUm5qU3BleEtMdHE4SHlvUkhvZVNWSE9YQmtSdjZXSyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRk9XbzRLaE1aVW1vX1BHb05GMEFjRmdwU1VTSlpIMmtfWTJoNFhSeDVSeFY2TkR0c1EyOU9YbXdVSmpBWWZ4WTRLVHNlWFJsTEVGOEpFUlZtS3lvNFR5WS1CZzFQZkF4RGZHdHplUkJIUkEwX1RpVTlORHBHTzI5LWJtMGJFVkVjVVVjT05VbzBaWDlqUHpaY05EaENRU2hETFVRZkZuUXZhUndLWDNNelBCeDZLRDhnTkJvekN3cFNVU0paSDJndFpSbyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928668),
('N2S0aq035mkSXsZFxSBzg9loqfwA2FYysYfPcrqZ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiY3phQnRKbWtmVHdWODBsbXRpRUd5N1ZUTTloM09mMWRRbFJZSlN1ZCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGFnZXMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1736928700),
('NmcWVimbh4Rt4fkK3MpQ58rM9tvPt6oweEOaAW4v', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidWNOR0h5Zk5xVGlKREZyNTN3RUQxeHgyV1pQYnpOTUg3bDllWVFzNSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRlkzVnZjQXhPQ0hWb1puVmFUVjlMVEJVRkN6ME9SWFpvT1hjdkJ3TXVFd3N1YWlZN0dYQVpCSE5EZkM5UEpRbHZjeVJKQndZY1NrQmVTd294Y1RWdkZUbHBYQklZSmhNVUpuUWtJdzhRSGhKb0ZEcHFiaVVSWVhBcE5ISk1TMDVMQzFoWmIxVmpQMkEwWlNrTGJpY1ZHemNVZDF0SVRHdDRNd05kQld4a1pnTXRjaUIzYmdWa1VSVUZDejBPUlhkNlB3VSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928684),
('nnigJGbphTwo9nwqTg86L4tUm0QCQWE08fOWb7Wq', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNENEUFZLSzFDVVRFWlNyNUV1Q0pNdzB5ZGhuTFVESENGdllpb0ZKaCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGFnZXMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1736928503),
('PWQdUDRkJaSpTylmdOPTnw6Qu2gjRcEH6IKJWi7y', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWkhXRWd5NWFYeEp1RkFmektQNWVXVFJKdENtcUp2VFZ3NGlraEdoYyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc29jaWFscyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736926143),
('rkzR1pgJ2v2F94VkyE9DdCPgFP4PjbKqyci3AY0r', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTXVVMTJZTFg4cWtIWVljYkEyWU9YWVNTcmdGRnBIZVp6dWU2TWVkTiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRmVXZ3dhaEVSRW1nM2ZHZ0ZWMElVVmdoYUVTQlJYMnMzSTJwd0hSNXhDUlp4Y0R0a0EyMUdIbTRjWmpJUVB4UXdhVGtXSFJ0RFVGMEJVUmR1YXlnd0R5UTJSZzlIUEE1TFBHbDdPUkpQQkE4M0RpYzFkRGhPZTIxMkxtOFRVVk1VRVVVR2RVZzhKWDFyZnpSVWREcEtBU3BMYlVZWFZuWW5LUjRDSDNFN2ZCNXlhRDBvZEJnN1N3aGFFU0JSWDJvbEpSZyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928689),
('TgX8mj5JAMyQlmuIuendp92NZVgfoNtyS6SExmKv', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYW9GRkhPREd1cjVaQ3RraUx6NjRmZEFyeXhMSHJNWUJ1M0pkZndZZyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc29jaWFscyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928665),
('Tos04vgW6sFYhCb58Y082dLe8zI8jtFRuKF32g8i', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoid1gzMjYxUVRFamdMN21LVkQwcTV4cmlVM1hmSnMybUxHcGhNSGQzYiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRk5HTm5KeHBHWDJOZ01XTlNHa2xER3dNTlhDc0dFbUJnYm1FblVCVW5UQmtoT0RRelRtWVJVMlZMS3psSGNoOW5KREpCVUJBVUhWWldIQnc1SmlOblFpOWhDd1FRY1FVY2NXSXNkQmtZU1FSZ1F5eGlPVE1aTm1ZaFkyUkVIRmhEWEU1Uk9FTnJhSFk4TWo4RE9URWRUQ0VjSUUxQUczMXdaQlZWVW5wc01SVWxKVFpfT1JOc0JnTU5YQ3NHRW1GeWFCTSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928701),
('tpkgOojO9SlDFrqZRGsR7zC9ukWi05uR5WgJIRB1', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRkxRdWZuZUtDR3NtOGh4cEJKckhBUlI5bXNJdnpueGJXTDdRVzZVTCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRllXZHFjaDVMQ21kdFpHZGZUMDFPVGdjQUNTOExSMlJ0TzJVcUJSRXJIeGdvYkRZLUcySWNCbUZHZmoxS0p4dHFjVFpNQlJRWlNGSmJTUmcwY3lkcUZ5dHNYZ0FkSkFFUkpHWWhJUjBWSEFCdEZpaHZiRGNVWTJJc05tQkpTVnhPQ1VwY2JVZG1QWEl4WnpzT2JEVVFHU1VSZFVsTlRubDlNUkZZQjM1aFpCRW9jREp5YkJkaFV3Y0FDUzhMUjJWX1BSYyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928666),
('ttYbTV032zGzLhRfIm8pVIz48X1XQXCrhqUj9mUD', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibU1Nbzl3ZHhGOHZodnI5d3hqYzA1MlFHc3l4RE50WGxjeEVkMjcxYiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGFnZXMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1736928500),
('tUt8U74PHNbjSxg0Fi7Tz4lPV4Jz19w09EUdY7Dw', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicHJUWTFlajNsSVR0ZTNBaU5BMlAzZnVPZWhPdHZHT2FGcGZZdE9KayI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGFnZXMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1736928684),
('Ul42ynTo4fJSBtGmemFygzkF7VPoQOmd2OaF61iK', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiM2F6amE4eE1TU2FXeWpKbmhOM1l5OFVOU3hYdDdYNjZPenlNR0x0WSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc29jaWFscyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736926322),
('VhJFlCFw1vNzXkhdRE85shHDSsqNq57CvoYB0ngV', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicURtTVlYdmVQVG9PVWRCQlZjeUdwcFRqZG9GNUxFQ2U0RU5TczJTZiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc29jaWFscyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736926149),
('vTE1P9Gsost42zTeQcVN9Y1Fba9k0AYzZjauE2NT', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVnI0dTN3bWRzeHVvODRRNzhSMTRLeUI5NXB6NWpvenBySWRiMnVsUCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc29jaWFscyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736929036),
('ytpx5creYmNfOqlq7IweG3yKFncV3KoK9MrBYVHX', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZzFNMHBQMkhHZHJ6YjRtSmNQb1NMb29SOW1abnk5NjVjREZuT0c4MCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzM6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc29jaWFscyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736928500),
('yWJA4n29VHHqj5Hcl5yuDu7YsEndXJfVBFRZWSBm', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZ0VJbllqY3M4Vm04Y2k0S0RrOGxTaG56eGlkeGhuN1paQ004YTBFVSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRlkzQjNjQWxXQ0hCd1puQkNUVnBUVEJBZEN6Z1dSWE53T1hJM0Jnd3dHZ0kyYUNVakdYVUJCSFpiZkNwWEpReDNjeUZSQndNRVNrVkdTdzhwY1RCM0ZUeHhYQmNBSmhZTUpuRThJd29JSGhkd0ZEOXliaUFKWVhVeE5IZFVTMHRUQzExQmIxQjdQMlVzWlN3VGJpSU5HeklNZDE1UVRHNWdNd1pGQldsOFpnWTFjaVZ2YmdCOFVSQWRDemdXUlhKaVB3QSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736932019),
('ZDVpzxoC5Xlp5WozxOnqJPEJXbweaOnjkXEOUMo0', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibFpQZUZkb0RENTNnRTNFbnNFTlpoWEhQQXBtVVNrTGpoaERXc0lkeCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjM5OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlY2FwdGNoYVZlcmlmeS9IRmVISnVhd3RQRTNKcGZYSmJWbGhLVnhJRUVEb1BYbkZwSW5BdUhRNHBBUUF2Y3ljNkFuY1lIM1JDWnloT1BnNXVhQ05JSEFFZFVVZGZVQTB3YWpKdURqNW9SeFVaUFJRVlBYTWxPQWdSQlJWcER6MXJkU0lRZW5jb0wzVk5VRWxLRUY5WWRGSmlKR2MxZmk0S2RTQVVBREFWYkZ4SlYyeDVLQVJjSG10bGZRUXNhU2QyZFFKbFNoSUVFRG9QWG5CN0pBSSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1736932019);

-- --------------------------------------------------------

--
-- Table structure for table `socials`
--

CREATE TABLE `socials` (
  `id` int(11) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `location_link` varchar(255) DEFAULT '#',
  `facebook` varchar(255) DEFAULT '#',
  `twitter` varchar(255) DEFAULT '#',
  `instagram` varchar(255) DEFAULT '#',
  `linkedin` varchar(255) DEFAULT '#',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `socials`
--

INSERT INTO `socials` (`id`, `phone`, `email`, `address`, `location_link`, `facebook`, `twitter`, `instagram`, `linkedin`, `created_at`, `updated_at`) VALUES
(1, '+(90) 542 889 19 05', 'info@blobartdesign.com', '5 Meşe Sokak, Küçük Kaymaklı Lefkoşa', 'https://goo.gl/maps/zugKrxxBVvr7nmab9', 'https://www.facebook.com/profile.php?id=100064944105122', NULL, 'https://www.instagram.com/blobartdesign/', NULL, '2024-12-26 08:30:38', '2024-12-26 10:24:16');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'tobioluwole444@gmail.com', '$2y$12$gzd45JQCEP0ie9fJ0RJgSuP.DMu43V53R9/ZiSZE4oi93VLHt1/RC', NULL, NULL, '2024-12-19 11:41:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pages_url_unique` (`url`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `socials`
--
ALTER TABLE `socials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `socials`
--
ALTER TABLE `socials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

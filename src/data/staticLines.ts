import { LineData, StaticStop } from '../types.js';

// --- LIGNE 1 (ODYSSEUM <-> MOSSON / GARE SUD DE FRANCE) ---

const LINE_1_STOPS: StaticStop[] =

  [{ stopId: ['1071', ''], name: 'Mosson', order: 1 },
  { stopId: ['1764', '1765'], name: 'Stade de la Mosson', order: 2 },
  { stopId: ['1072', '1123'], name: 'Halles de la Paillade', order: 3 },
  { stopId: ['1073', '1122'], name: 'Saint-Paul', order: 4 },
  { stopId: ['1074', '1121'], name: 'Hauts de Massane', order: 5 },
  { stopId: ['1075', '1120'], name: 'Euromédecine', order: 6 },
  { stopId: ['1076', '1119'], name: 'Malbosc - Domaine d\'Ô', order: 7 },
  { stopId: ['1077', '1118'], name: 'Château d\'Ô', order: 8 },
  { stopId: ['1078', '1117'], name: 'Occitanie', order: 9 },
  { stopId: ['1079', '1116'], name: 'Hôpital Lapeyronie', order: 10 },
  { stopId: ['1080', '1115'], name: 'Universités Sciences et Lettres', order: 11 },
  { stopId: ['1081', '1114'], name: 'Saint-Éloi', order: 12 },
  { stopId: ['1082', '1113'], name: 'Boutonnet - Cité des Arts', order: 13 },
  { stopId: ['1083', '1112'], name: 'Stade Philippidès', order: 14 },
  { stopId: ['1084', '1111'], name: 'Place Albert 1er - Saint-Charles', order: 15 },
  { stopId: ['1085', '1110'], name: 'Louis Blanc - Agora de la Danse', order: 16 },
  { stopId: ['1086', '1109'], name: 'Corum', order: 17 },
  { stopId: ['1087', '1108'], name: 'Comédie', order: 18 },
  { stopId: ['1088', '1107'], name: 'Gare Saint-Roch', order: 19 },
  { stopId: ['1752', '1751'], name: 'Du Guesclin', order: 20 },
  { stopId: ['1090', '1105'], name: 'Antigone', order: 21 },
  { stopId: ['1091', '1104'], name: 'Léon Blum', order: 22 },
  { stopId: ['1092', '1103'], name: 'Place de l\'Europe', order: 23 },
  { stopId: ['1093', '1102'], name: 'Rives du Lez', order: 24 },
  { stopId: ['1094', '1101'], name: 'Moularès (Hôtel de Ville)', order: 25 },
  { stopId: ['1095', '1100'], name: 'Port Marianne', order: 26 },
  { stopId: ['1652', '1653'], name: 'Mondial 98', order: 27 },
  { stopId: ['1096', '1099'], name: 'Millénaire', order: 28 },
  { stopId: ['1540', '1541'], name: 'Place de France', order: 29 },
  { stopId: ['1097', '1098'], name: 'Odysseum', order: 30 },
  { stopId: ['2446', '2447'], name: 'Gare Sud de France', order: 31 },
  ]

const LINE_1: LineData = {
  id: 'L1',
  name: 'ODYSSEUM <-> MOSSON / GARE SUD DE FRANCE',
  color: '#0055A4',
  stops: LINE_1_STOPS,
};
// --- LIGNE 2 (SAINT-JEAN DE VÉDAS <-> JACOU / ND DE SABLASSOU) ---

const LINE_2_STOPS: StaticStop[] =
  [{ stopId: ['1180', ''], name: 'St Jean de Vedas Centre', order: 1 },
  { stopId: ['1181', '1247'], name: 'Saint-Jean le Sec', order: 2 },
  { stopId: ['1182', '1246'], name: 'La Condamine', order: 3 },
  { stopId: ['1183', '1245'], name: 'Victoire 2', order: 4 },
  { stopId: ['1184', '1243'], name: 'Sabines', order: 5 },
  { stopId: ['1185', '1242'], name: 'Villeneuve d\'Angoulême', order: 6 },
  { stopId: ['1186', '1241'], name: 'Croix d\'Argent', order: 7 },
  { stopId: ['1187', '1240'], name: 'Mas Drevon', order: 8 },
  { stopId: ['1188', '1239'], name: 'Lemasson', order: 9 },
  { stopId: ['1189', '1238'], name: 'Saint-Cléophas', order: 10 },
  { stopId: ['1190', '1237'], name: 'Nouveau Saint-Roch', order: 11 },
  { stopId: ['1191', '1236'], name: 'Rondelet', order: 12 },
  { stopId: ['1088', '1107'], name: 'Gare Saint-Roch', order: 13 },
  { stopId: ['1108', '1087'], name: 'Comédie', order: 14 },
  { stopId: ['1198', '1228'], name: 'Corum', order: 15 },
  { stopId: ['1199', '1227'], name: 'Beaux-Arts', order: 16 },
  { stopId: ['1200', '1226'], name: 'Jeu de Mail des Abbés', order: 17 },
  { stopId: ['1201', '1225'], name: 'Aiguelongue', order: 18 },
  { stopId: ['1202', '1224'], name: 'Saint-Lazare', order: 19 },
  { stopId: ['1203', '1223'], name: 'Charles de Gaulle', order: 20 },
  { stopId: ['1204', '1222'], name: 'Clairval', order: 21 },
  { stopId: ['1205', '1221'], name: 'La Galine', order: 22 },
  { stopId: ['1206', '1220'], name: 'Centurions', order: 23 },
  { stopId: ['1207', '1219'], name: 'Notre-Dame de Sablassou', order: 24 },
  { stopId: ['1210', '1217'], name: 'Aube Rouge', order: 25 },
  { stopId: ['1211', '1216'], name: 'Via Domitia', order: 26 },
  { stopId: ['1212', '1215'], name: 'Georges Pompidou', order: 27 },
  { stopId: ['', '1213'], name: 'Jacou', order: 28 },

  ];

const LINE_2: LineData = {
  id: 'L2',
  name: 'SAINT-JEAN DE VÉDAS <-> JACOU / ND DE SABLASSOU',
  color: '#FFD700',
  stops: LINE_2_STOPS,
};
// --- LIGNE 3 (JUVIGNAC <-> LATTES CENTRE / PÉROLS ÉTANG DE L'OR) ---

const LINE_3_STOPS: StaticStop[] = [
  // Extrémité Ouest (Juvignac)
  { stopId: ['', '1693'], name: 'Juvignac', order: 1 },
  { stopId: ['1742', '1694'], name: 'Mosson', order: 2 },
  { stopId: ['1741', '1695'], name: 'Celleneuve', order: 3 },
  { stopId: ['1740', '1696'], name: 'Pilory', order: 4 },
  { stopId: ['1739', '1697'], name: 'Hôtel du Département', order: 5 },
  { stopId: ['1738', '1698'], name: 'Pergola', order: 6 },
  { stopId: ['1737', '1699'], name: 'Tonnelles', order: 7 },
  { stopId: ['1736', '1700'], name: 'Jules Guesde', order: 8 },
  { stopId: ['1735', '1701'], name: 'Astruc', order: 9 },
  { stopId: ['1734', '1702'], name: 'Les Arceaux', order: 10 },
  { stopId: ['1733', '1703'], name: 'Plan Cabanes', order: 11 },
  { stopId: ['1732', '1704'], name: 'Saint-Denis', order: 12 },
  { stopId: ['1731', '1705'], name: 'Observatoire', order: 13 },
  { stopId: ['1730', '1193'], name: 'Gare Saint-Roch - République', order: 14 },
  { stopId: ['1234', '1193'], name: 'Place Carnot', order: 15 },
  { stopId: ['1233', '1194'], name: 'Voltaire', order: 16 },
  { stopId: ['1232', '1195'], name: 'Rives du lez - Consuls de Mer', order: 17 },
  { stopId: ['1101', '1094'], name: 'Moularès (Hôtel de Ville)', order: 18 },
  { stopId: ['1100', '1095'], name: 'Port Marianne', order: 19 },
  { stopId: ['1724', '1712'], name: 'Pablo Picasso', order: 20 },
  { stopId: ['1723', '1713'], name: 'Boirargues', order: 21 },
  { stopId: ['1744', '1718'], name: 'Courgulude', order: 22 },
  { stopId: ['1743', ''], name: 'Lattes Centre', order: 23 },
  { stopId: ['1222', '1714'], name: 'EcoPôle', order: 24 },
  { stopId: ['1721', '1715'], name: 'Parc Expo', order: 25 },
  { stopId: ['1720', '1726'], name: 'Pérols Centre', order: 26 },
  { stopId: ['1719', ''], name: 'Pérols Étang de l\'Or', order: 27 },

];

const LINE_3: LineData = {
  id: 'L3',
  // routeIds: ['3', 'A'],
  name: 'JUVIGNAC <-> LATTES CENTRE / PÉROLS ÉTANG DE L\'OR',
  color: '#800080',
  stops: LINE_3_STOPS,
};
// --- LIGNE 4 (L'ANNEAU - GARCIA LORCA / ND DE SABLASSOU) ---
// (4a et 4b).

const LINE_4_STOPS: StaticStop[] = [
  { stopId: ['1947', '2024'], name: 'Garcia Lorca', order: 1 },
  { stopId: ['1728', '1708'], name: 'Restanque', order: 2 },
  { stopId: ['1729', '1707'], name: 'Saint-Martin', order: 3 },
  { stopId: ['1190', '1237'], name: 'Nouveau Saint-Roch', order: 4 },
  { stopId: ['1191', '1236'], name: 'Rondelet', order: 5 },
  { stopId: ['1706', '1730'], name: 'Gare Saint-Roch - République', order: 6 },
  { stopId: ['1731', '1705'], name: 'Observatoire', order: 7 },
  { stopId: ['1951', '1952'], name: 'Saint-Guilhem - Courreau', order: 8 },
  { stopId: ['1945', '1950'], name: 'Peyrou - Arc de Triomphe', order: 9 },
  { stopId: ['1948', '1949'], name: 'Albert 1er - Cathédrale', order: 10 },
  { stopId: ['1085', '1110'], name: 'Louis Blanc - Agora de la Danse', order: 11 },
  { stopId: ['1086', '1109'], name: 'Corum', order: 12 },
  { stopId: ['1229', '1197'], name: 'Les Aubes', order: 13 },
  { stopId: ['1230', '1196'], name: 'Pompignane', order: 14 },
  { stopId: ['1092', '1103'], name: 'Place de l\'Europe', order: 15 },
  { stopId: ['1093', '1102'], name: 'Rives du Lez', order: 16 },
  { stopId: ['1725', '1711'], name: 'Georges Frêche - Hôtel de Ville', order: 17 },
  { stopId: ['1726', '1710'], name: 'La Rauze', order: 18 },
  { stopId: ['2024', '2027'], name: 'Garcia Lorca', order: 19 },
];
const LINE_4: LineData = {
  id: 'L4',
  name: 'L\'ANNEAU - GARCIA LORCA <-> ND DE SABLASSOU',
  color: '#FF7F00',
  stops: LINE_4_STOPS,
};

// L'objet principal exporté
export const ALL_LINES: LineData[] = [LINE_1, LINE_2, LINE_3, LINE_4];
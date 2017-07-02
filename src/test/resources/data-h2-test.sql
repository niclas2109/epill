-- Initialize database on startup. See
-- https://docs.spring.io/spring-boot/docs/current/reference/html/howto-database-initialization.html#howto-initialize-a-database-using-spring-jdbc
-- for explanation. This is a cool spring feature :-).


-- Delete all.

DELETE FROM drug_active_substance;
DELETE FROM drug_pharmaceutical_form;
DELETE FROM drug_drug_feature;
DELETE FROM drug_disease;
DELETE FROM drug_adverse_effect;
DELETE FROM user_preferred_topic;
DELETE FROM user_disease;
DELETE FROM user_drug_feature;
DELETE FROM user_query;

DELETE FROM tag;
DELETE FROM adverse_effect;
DELETE FROM packaging;
DELETE FROM packaging_section;
DELETE FROM packaging_topic;
DELETE FROM drug_feature;
DELETE FROM pharmaceutical_form;
DELETE FROM disease;
DELETE FROM item_invocation;
DELETE FROM user_drug_taking;
DELETE FROM user_drug_remember;
DELETE FROM drug;
DELETE FROM drug_simple;
DELETE FROM user_;
DELETE FROM user_simple;
DELETE FROM indication_group;
DELETE FROM active_substance;
DELETE FROM image;
DELETE FROM gender;
DELETE FROM language;
DELETE FROM country;
DELETE FROM question;



--
-- Dumping data for table `gender`
--
INSERT INTO gender (id, gender) VALUES (1,'männlich'), (2,'weiblich');


--
-- Dumping data for table `language`
--

INSERT INTO language (id, language) VALUES (1,'Deutsch');



--
-- Dumping data for table `country`
--

INSERT INTO country (id, name) VALUES (1,'Deutschland');



--
-- Dumping data for table `user_simple`
--


INSERT INTO user_simple (id, date_of_birth, date_of_registration, email, firstname, lastname, level_of_detail, password, preferred_font_size, salt, username)
	VALUES
	(1,'2017-06-27','2017-06-27 13:16:01','n.kannengiesser@web.de','Niclas','Kannengiesser',3,'a53c6f59e0cffc2a08a8d6086fd611024a53b4e123813dc60a08964a49db760eb2aa26778677e3b835175be8ffce2d58b51eebf2854d9f283174956f370d210c',12,'[B@22373b1f','nic');

--
-- Dumping data for table `user_`
--

INSERT INTO user_ (id, idcountry, idgender, idlanguage) VALUES (1,1,1,1);



--
-- Dumping data for table `drug_simple`
--

INSERT INTO drug_simple (id, name, number, status, version, year) VALUES (1,'Accupro® 10 Filmtabletten',0,'3915-06-01','1.59', NULL);
INSERT INTO drug_simple (id, name, number, status, version, year) VALUES (2,'Baymycard',0,'3915-06-01','1.59',NULL);
INSERT INTO drug_simple (id, name, number, status, version, year) VALUES (3,'Beloc-Zok® comp',6030,'3915-06-01','1.37',NULL);
INSERT INTO drug_simple (id, name, number, status, version, year) VALUES (4,'Cardular',0,'3915-06-01','1.59',NULL);
INSERT INTO drug_simple (id, name, number, status, version, year) VALUES (5,'Ciprobay',0,'3915-06-01','1.59',NULL);
INSERT INTO drug_simple (id, name, number, status, version, year) VALUES (6,'Clexane',0,'3915-06-01','1.59',NULL);
INSERT INTO drug_simple (id, name, number, status, version, year) VALUES (7,'Novalgin',0,'3915-06-01','1.59',NULL);
INSERT INTO drug_simple (id, name, number, status, version, year) VALUES (8,'REMINYL® 4 mg/ml Lösung zum Einnehmen',0,'3915-06-01','1.36',NULL);
INSERT INTO drug_simple (id, name, number, status, version, year) VALUES (9,'Topiramat-Janssen',0,'3915-06-01',NULL,NULL);
INSERT INTO drug_simple (id, name, number, status, version, year) VALUES (10,'Toujeo',0,'3915-06-01','1.59',NULL);


--
-- Dumping data for table `drug`
--

INSERT INTO drug (id, idindication_group, idproduct_group) VALUES (1,NULL,NULL);
INSERT INTO drug (id, idindication_group, idproduct_group) VALUES (2,NULL,NULL);
INSERT INTO drug (id, idindication_group, idproduct_group) VALUES (3,NULL,NULL);
INSERT INTO drug (id, idindication_group, idproduct_group) VALUES (4,NULL,NULL);
INSERT INTO drug (id, idindication_group, idproduct_group) VALUES (5,NULL,NULL);
INSERT INTO drug (id, idindication_group, idproduct_group) VALUES (6,NULL,NULL);
INSERT INTO drug (id, idindication_group, idproduct_group) VALUES (7,NULL,NULL);
INSERT INTO drug (id, idindication_group, idproduct_group) VALUES (8,NULL,NULL);
INSERT INTO drug (id, idindication_group, idproduct_group) VALUES (9,NULL,NULL);
INSERT INTO drug (id, idindication_group, idproduct_group) VALUES (10,NULL,NULL);


--
-- Dumping data for table `active_substance`
--

INSERT INTO active_substance (id, name, idsubstance_group) VALUES (1,'Quinaprilhydrochlorid',NULL);
INSERT INTO active_substance (id, name, idsubstance_group) VALUES (2,'Nisoldipin',NULL);
INSERT INTO active_substance (id, name, idsubstance_group) VALUES (3,'Hydrochlorothiazid',NULL);
INSERT INTO active_substance (id, name, idsubstance_group) VALUES (4,'Metoprololsuccinat',NULL);
INSERT INTO active_substance (id, name, idsubstance_group) VALUES (5,'Doxazosinmesilat',NULL);
INSERT INTO active_substance (id, name, idsubstance_group) VALUES (6,'Ciprofloxacin',NULL);
INSERT INTO active_substance (id, name, idsubstance_group) VALUES (7,'Enoxaparin-Natrium',NULL);
INSERT INTO active_substance (id, name, idsubstance_group) VALUES (8,'Metamizol-Natrium 1 H2O',NULL);
INSERT INTO active_substance (id, name, idsubstance_group) VALUES (9,'Galantamin',NULL);
INSERT INTO active_substance (id, name, idsubstance_group) VALUES (10,'Quinaprilhydrochlorid',NULL);


--
-- Dumping data for table `product_group`
--


--
-- Dumping data for table `question`
--

INSERT INTO question (id, address, question) VALUES (1,'Hallo %firstname% %lastname%','setzt du dich intentsiv mit deiner Gesundheit auseinander?');

--
-- Dumping data for table `substance_group`
--


--
-- Dumping data for table `tag`
--



--
-- Dumping data for table `adverse_effect`
--

--
-- Dumping data for table `packaging_topic`
--

INSERT INTO packaging_topic (id, order_number, title) VALUES (1,1,'Anwenderhinweise');
INSERT INTO packaging_topic (id, order_number, title) VALUES (2,2,'Allgemeine Hinweise');
INSERT INTO packaging_topic (id, order_number, title) VALUES (3,3,'Vorsichtsmaßnahmen und Warnhinweise');
INSERT INTO packaging_topic (id, order_number, title) VALUES (4,4,'Indikationen');
INSERT INTO packaging_topic (id, order_number, title) VALUES (5,5,'Anwendung und Dosierung');
INSERT INTO packaging_topic (id, order_number, title) VALUES (6,6,'Nebenwirkungen');
INSERT INTO packaging_topic (id, order_number, title) VALUES (7,7,'Aufbewahrung');
INSERT INTO packaging_topic (id, order_number, title) VALUES (8,8,'Zusatzinformationen');

--
-- Dumping data for table `pharmaceutical_form`
--

INSERT INTO pharmaceutical_form (id, name) VALUES (1,'Filmtabletten');
INSERT INTO pharmaceutical_form (id, name) VALUES (2,'Retardtablette');



--
-- Dumping data for table `packaging`
--

INSERT INTO packaging (id, name, pzn, iddrug) VALUES (1,'N3','03738798',1);
INSERT INTO packaging (id, name, pzn, iddrug) VALUES (2,'N1','03738775',1);
INSERT INTO packaging (id, name, pzn, iddrug) VALUES (3,'100','07358319',2);
INSERT INTO packaging (id, name, pzn, iddrug) VALUES (4,'50','07358302',2);
INSERT INTO packaging (id, name, pzn, iddrug) VALUES (5,'N3','04634747',3);
INSERT INTO packaging (id, name, pzn, iddrug) VALUES (6,'N1','04634724',3);
INSERT INTO packaging (id, name, pzn, iddrug) VALUES (7,'N2','04634730',3);
INSERT INTO packaging (id, name, pzn, iddrug) VALUES (8,'N3','00698199',4);
INSERT INTO packaging (id, name, pzn, iddrug) VALUES (9,'N1','08729309',4);
INSERT INTO packaging (id, name, pzn, iddrug) VALUES (10,'5','03229861',5);
INSERT INTO packaging (id, name, pzn, iddrug) VALUES (11,'12 Fertigspritzen','10813336',6);
INSERT INTO packaging (id, name, pzn, iddrug) VALUES (12,'24 Fertigspritzen','10813313',6);
INSERT INTO packaging (id, name, pzn, iddrug) VALUES (13,'50 St.','02948401',7);
INSERT INTO packaging (id, name, pzn, iddrug) VALUES (14,'10 St.','04129512',7);
INSERT INTO packaging (id, name, pzn, iddrug) VALUES (15,'30 St.','02948393',7);
INSERT INTO packaging (id, name, pzn, iddrug) VALUES (16,'100 ml Lösung','01416174',8);
INSERT INTO packaging (id, name, pzn, iddrug) VALUES (17,'N3','03738798',10);
INSERT INTO packaging (id, name, pzn, iddrug) VALUES (18,'N1','03738775',10);



--
-- Dumping data for table `answer`
--


--
-- Dumping data for table `disease`
--


--
-- Dumping data for table `drug_feature`
--

INSERT INTO drug_feature (id, drug_feature, listeners) VALUES (1,'ohne Tierversuche',NULL);
INSERT INTO drug_feature (id, drug_feature, listeners) VALUES (2,'halal',NULL);
INSERT INTO drug_feature (id, drug_feature, listeners) VALUES (3,'beeinträchtigt die Fahrtüchtigkeit',NULL);
INSERT INTO drug_feature (id, drug_feature, listeners) VALUES (4,'verschreibungspflichtig',NULL);
INSERT INTO drug_feature (id, drug_feature, listeners) VALUES (5,'ohne Alkohol',NULL);
INSERT INTO drug_feature (id, drug_feature, listeners) VALUES (6,'homöopathisch',NULL);
INSERT INTO drug_feature (id, drug_feature, listeners) VALUES (7,'glutenfrei',NULL);
INSERT INTO drug_feature (id, drug_feature, listeners) VALUES (8,'Für Schwangere ungeeignet.',NULL);
INSERT INTO drug_feature (id, drug_feature, listeners) VALUES (9,'vegan',NULL);
INSERT INTO drug_feature (id, drug_feature, listeners) VALUES (10,'lactosefrei',NULL);


--
-- Dumping data for table `drug_active_substance`
--

INSERT INTO drug_active_substance (iddrug, idactive_substance) VALUES (1,1);
INSERT INTO drug_active_substance (iddrug, idactive_substance) VALUES (2,2);
INSERT INTO drug_active_substance (iddrug, idactive_substance) VALUES (3,3);
INSERT INTO drug_active_substance (iddrug, idactive_substance) VALUES (3,4);
INSERT INTO drug_active_substance (iddrug, idactive_substance) VALUES (4,5);
INSERT INTO drug_active_substance (iddrug, idactive_substance) VALUES (5,6);
INSERT INTO drug_active_substance (iddrug, idactive_substance) VALUES (6,7);
INSERT INTO drug_active_substance (iddrug, idactive_substance) VALUES (7,8);
INSERT INTO drug_active_substance (iddrug, idactive_substance) VALUES (8,9);
INSERT INTO drug_active_substance (iddrug, idactive_substance) VALUES (10,10);

--
-- Dumping data for table `drug_adverse_effect`
--


--
-- Dumping data for table `drug_disease`
--


--
-- Dumping data for table `drug_drug_feature`
--

INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (1,1);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (2,1);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (3,1);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (5,1);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (3,2);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (4,2);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (5,2);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (1,3);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (2,3);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (4,3);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (1,4);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (2,4);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (3,4);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (4,4);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (5,4);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (2,5);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (3,5);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (4,5);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (2,7);
INSERT INTO drug_drug_feature (iddrug, iddrug_feature) VALUES (5,7);

--
-- Dumping data for table `drug_pharmaceutical_form`
--

INSERT INTO drug_pharmaceutical_form (iddrug, idpharmaceutical_form) VALUES (1,1);
INSERT INTO drug_pharmaceutical_form (iddrug, idpharmaceutical_form) VALUES (2,1);
INSERT INTO drug_pharmaceutical_form (iddrug, idpharmaceutical_form) VALUES (7,1);
INSERT INTO drug_pharmaceutical_form (iddrug, idpharmaceutical_form) VALUES (10,1);
INSERT INTO drug_pharmaceutical_form (iddrug, idpharmaceutical_form) VALUES (3,2);



--
-- Dumping data for table `interaction_drug`
--


--
-- Dumping data for table `item_invocation`
--


--
-- Dumping data for table `language`
--


--
-- Dumping data for table `login_attempt`
--

--
-- Dumping data for table `user_disease`
--


--
-- Dumping data for table `user_drug`
--


--
-- Dumping data for table `user_drug_feature`
--


--
-- Dumping data for table `user_preferred_topic`
--


--
-- Dumping data for table `user_query`
--


--
-- Dumping data for table `packaging_section`
--

INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (1,0,'<h4>Lesen Sie die gesamte Packungsbeilage sorgfältig durch, bevor Sie mit der Einnahme dieses Arzneimittels beginnen, denn sie enthält wichtige Informationen.</h4> <p>Ihr Arzt hat Ihnen ein wirksames Arzneimittel zur Behandlung von nicht organbedingtem Bluthochdruck und Herzleistungsschwäche verschrieben. Den Nutzen von Accupro 10 schätzt Ihr Arzt für Sie höher ein als die möglichen Risiken, die mit seiner Anwendung einhergehen können.</p> <ul> <li> <p>Heben Sie die Packungsbeilage auf. Vielleicht möchten Sie diese später nochmals lesen.</p> </li> <li> <p>Wenn Sie weitere Fragen haben, wenden Sie sich an Ihren Arzt oder Apotheker.</p> </li> <li> <p>Dieses Arzneimittel wurde Ihnen persönlich verschrieben. Geben Sie es nicht an Dritte weiter. Es kann anderen Menschen schaden, auch wenn diese die gleichen Beschwerden haben wie Sie.</p> </li> <li> <p>Wenn Sie Nebenwirkungen bemerken, wenden Sie sich an Ihren Arzt oder Apotheker. Dies gilt auch für Nebenwirkungen, die nicht in dieser Packungsbeilage angegeben sind. Siehe Abschnitt 4.</p> </li> </ul> <p> <italic>Die kursiv geschriebenen Informationen sind Zusatzinformationen für Ihren Arzt.</italic> </p>',1,1);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (2,0,'<h4>Was ist Accupro 10 und wofür wird es angewendet?</h4> <p>Accupro 10 ist ein Arzneimittel aus der Gruppe der sogenannten ACE(Angiotensin-Converting-Enzym)-Hemmer und wird zur Senkung des Bluthochdrucks und zur Behandlung der Herzleistungsschwäche angewendet.</p> <p> <b>Accupro 10 wird angewendet bei:</b> </p> <ul> <li> <p>nicht organbedingtem Bluthochdruck <i>(essenzieller Hypertonie)</i> </p> </li> <li> <p>Herzleistungsschwäche <i>(Herzinsuffizienz)</i> – zusätzlich zu harntreibenden Medikamenten <i>(Diuretika)</i> und insbesondere bei schwerer Herzinsuffizienz auch zu Digitalis</p></li></ul>',1,4);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (3,0,'<h4>Wie ist Accupro 10 richtig einzunehmen?(<i>Dosierung</i>)</h4> <p>Nehmen Sie dieses Arzneimittel immer genau nach Absprache mit Ihrem Arzt oder Apotheker ein. Fragen Sie bei Ihrem Arzt oder Apotheker nach, wenn Sie sich nicht sicher sind.</p> <p> <b>Wie Sie Accupro 10 richtig einnehmen</b> </p> <p>Die Einnahme von Accupro 10 kann unabhängig von den Mahlzeiten erfolgen, die Tagesdosis kann auf einmal eingenommen oder auf 2 Einzelgaben verteilt werden. Nehmen Sie die Tabletten bitte mit ausreichend Flüssigkeit, z. B. einem großen Glas Wasser, ein.</p> <p>Falls vom Arzt nicht anders verordnet, ist die übliche Dosis:</p> <table> <tbody> <tr> <td/> <td> <p> <b>Anfangsdosis</b> </p> </td> <td> <p> <b>Erhaltungsdosis</b> </p> </td> <td> <p> <b>Maximaldosis</b> </p> </td> </tr> <tr> <td> <p> <b>Nicht organbedingter Bluthochdruck <i>(essenzielle Hypertonie)</i> </b> </p> </td> <td> <p>10 mg Quinapril pro Tag (entsprechend 1 Filmtablette Accupro 10). Wird mit dieser Dosis keine Blutdrucknormalisierung erreicht, kann die Dosis auf 20 mg pro Tag (entsprechend 2 Filmtabletten Accupro 10) erhöht </p> </td> <td> <p>Die Erhaltungsdosis beträgt in der Regel 10 mg pro Tag (entsprechend 1 Filmtablette Accupro 10).</p> </td> <td> <p>Die Maximaldosis von zweimal 20 mg (entsprechend jeweils 2 Filmtabletten Accupro 10 morgens und abends) sollte nicht überschritten werden.</p> </td> </tr> <tr> <td/> <td> <p>werden. Eine Dosiserhöhung sollte erst nach 3 Wochen erfolgen. Die Tagesdosis kann auf einmal eingenommen werden oder auf 2 Einzelgaben verteilt werden (morgens und abends).</p> </td> <td/> <td/> </tr> <tr> <td> <p> <b>Herzleistungs-schwäche <i>(Herzinsuffizienz)</i> </b> </p> </td> <td> <p>Accupro 10 kann als Zusatzmedikation zu einer bestehenden Therapie mit harntreibenden Arzneimitteln (Diuretika) und Digitalis gegeben werden. Die Anfangsdosis beträgt 2,5 mg Quinapril morgens und abends (entsprechend je ½ Filmtablette Accupro 5; dafür steht Ihnen Accupro 5 zur Verfügung).</p> </td> <td> <p>Eine Erhöhung der Dosis darf nur schrittweise in Abhängigkeit vom individuellen Ansprechen des Patienten auf die Therapie erfolgen.</p> <p>Die Erhaltungsdosis ist in der Regel 10 bis 20 mg pro Tag (entsprechend 1 bis 2 Filmtabletten Accupro 10).</p> </td> <td> <p>Die Maximaldosis von zweimal 20 mg pro Tag (entsprechend zweimal 2 Filmtabletten Accupro 10) sollte nicht überschritten werden.</p> </td> </tr> <tr> <td> <p> <b>Dosierung bei mäßig eingeschränkter Nierenfunktion <i>(Kreatinin-Clearance 30 bis 60 ml/min)</i> und bei Patienten &gt; 65 Jahre</b> </p> </td> <td> <p>Die Anfangsdosis beträgt 5 mg Quinapril (entsprechend ½ Filmtablette Accupro 10).</p> </td> <td> <p>Die Erhaltungsdosis beträgt in der Regel 5 bis 10 mg Quinapril pro Tag (entsprechend ½ bis 1 Filmtablette Accupro 10).</p> </td> <td> <p>Die Maximaldosis von 20 mg Quinapril pro Tag (entsprechend 2 Filmtabletten Accupro 10) sollte nicht überschritten werden.</p> </td> </tr> <tr> <td> <p> <b>Dosierung bei stark eingeschränkter Nierenfunktion <i>(Kreatinin-Clearance 10 bis 30 ml/min)</i> </b> </p> </td> <td> <p>Die Anfangsdosis beträgt 2,5 mg Quinapril (entsprechend ½ Filmtablette Accupro 5).</p> </td> <td> <p>Die Erhaltungsdosis beträgt in der Regel ebenfalls 2,5 mg Quinapril pro Tag (entsprechend ½ Filmtablette Accupro 5).</p> </td> <td> <p>Die maximale tägliche Dosis beträgt 5 mg Quinapril (entsprechend ½ Filmtablette Accupro 10). Der Abstand zwischen 2 Einnahmen sollte mindestens 24 Stunden betragen.</p> </td> </tr> </tbody> </table> <p>Die Tablette kann in gleiche Dosen geteilt werden.</p> <p> <i>Hinweis:</i> </p> <p> <i>Insbesondere bei Patienten mit Salz- und/oder Flüssigkeitsmangel (z. B. bei Erbrechen, Durchfall, Diuretikatherapie), Herzleistungsschwäche, akutem Herzinfarkt, instabiler Angina pectoris, ischämischer Herzerkrankung (eine besondere Art der Herzerkrankung), Erkrankungen der Gefäße des zentralen Nervensystems (zerebrovaskuläre Erkrankungen) oder schwerem Bluthochdruck kann es zu Beginn der Accupro-10-Therapie zu einem übermäßigen Blutdruckabfall kommen. Falls möglich, sollten Salz- und/ oder Flüssigkeitsmangel vor Beginn der Accupro-10-Therapie ausgeglichen bzw. eine bestehende Therapie mit harntreibenden Arzneimitteln (Diuretika) reduziert oder ggf. abgesetzt werden. Bei diesen Patienten ist die Therapie mit der geringsten Einzeldosis von 2,5 mg Quinaprilhydrochlorid morgens (entsprechend ½ Filmtablette Accupro 5) zu beginnen. Für diese Fälle steht Ihnen Accupro 5 zur Verfügung. Nach Gabe der 1. Dosis, aber auch bei Erhöhung der Dosis von Quinapril und/ oder Schleifendiuretika sind diese Patienten mindestens 6 Stunden ärztlich zu überwachen, um eine unkontrolliert auftretende übermäßige Blutdrucksenkung zu vermeiden. Bei Patienten mit schwerwiegender Verlaufsform des Bluthochdrucks (maligne Hypertonie) oder bei gleichzeitigem Vorliegen einer schweren Herzleistungsschwäche soll die Einstellung der Accupro-10-Therapie im Krankenhaus erfolgen.</i> </p> <p> <b>Wie lange Sie Accupro 10 einnehmen sollen</b> </p> <p>Eine bestimmte zeitliche Begrenzung ist nicht vorgesehen. Die Dauer der Anwendung hängt vom Verlauf Ihrer Erkrankung ab. Bitte sprechen Sie darüber mit Ihrem Arzt.</p> <p>Bitte sprechen Sie mit Ihrem Arzt oder Apotheker, wenn Sie den Eindruck haben, dass die Wirkung von Accupro 10 zu stark oder zu schwach ist.</p> <p> <b>Wenn Sie eine größere Menge Accupro 10 eingenommen haben, als Sie sollten</b> </p> <p>Je nach Ausmaß der Überdosierung sind folgende Beschwerden möglich: zu starke Blutdrucksenkung, zu langsamer Herzschlag, Kreislaufschock, Störungen des Mineralhaushalts und Nierenversagen.</p> <p>Bei dringendem Verdacht auf eine Überdosierung verständigen Sie sofort einen Arzt, der gegebenenfalls Notfallmaßnahmen ergreifen kann.</p> <p> <i>Bei zu niedrigem Blutdruck sollten Kochsalzlösung und Flüssigkeit gegeben werden. Bei Nichtansprechen sollten zusätzlich blutdruckerhöhende Arzneimittel (Katecholamine oder Angiotensin II) intravenös gegeben werden. Bei zu langsamem Herzschlag sollte ein Schrittmacher gelegt werden. Die Nierenfunktion und der Mineralhaushalt sind engmaschig zu überwachen.</i> </p> <p> <b>Wenn Sie die Einnahme von Accupro 10 vergessen haben</b> </p> <p>Nehmen Sie die versäumte Dosis nicht nachträglich ein, sondern setzen Sie die Einnahme von Accupro 10 zum nächsten Einnahmetermin wie verordnet fort.</p> <p>Wenn Sie weitere Fragen zur Einnahme dieses Arzneimittels haben, wenden Sie sich an Ihren Arzt oder Apotheker.</p> ',1,5);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (4,0,'<h4>Inhalt der Packung und weitere Informationen</h4> <p> <b>Was Accupro 10 enthält</b> </p> <p>Der Wirkstoff ist: Quinaprilhydrochlorid. 1 Filmtablette enthält 10,832 mg Quinaprilhydrochlorid (entsprechend 10 mg Quinapril).</p> <p>Die sonstigen Bestandteile sind: Candelillawachs, Crospovidon, Gelatine, Hyprolose, Lactose-Monohydrat, Macrogol 400, schweres basisches Magnesiumcarbonat, Magnesiumstearat (Ph.Eur.), Hypromellose, Titandioxid (E 171).</p> <p> <b>Wie Accupro 10 aussieht und Inhalt der Packung</b> </p> <p>Die Filmtabletten sind weiß, dreieckig, beiderseits nach außen gewölbt, haben auf einer Seite eine „10“ eingeprägt und besitzen eine Bruchrille.</p> <p>Packung mit 30 Filmtabletten</p> <p>Packung mit 100 Filmtabletten</p>',1,8);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (5,0,'<h4>Welche Nebenwirkungen sind möglich?</h4> <p>Wie alle Arzneimittel kann auch dieses Arzneimittel Nebenwirkungen haben, die aber nicht bei jedem auftreten müssen.</p> <p> <b>Bedeutsame Nebenwirkungen oder Zeichen, auf die Sie achten sollten, und Maßnahmen, wenn Sie betroffen sind</b> </p> <p>Wenn Sie von einer der nachfolgend genannten Nebenwirkungen betroffen sind, nehmen Sie Accupro 10 nicht weiter ein und suchen Sie Ihren Arzt möglichst umgehend auf.</p> <p>Bei Verdacht auf eine schwerwiegende Hautreaktion muss sofort der behandelnde Arzt aufgesucht und ggf. die Therapie mit Accupro 10 abgebrochen werden. Hinweis: Es besteht eine erhöhte Gefahr der Ausbildung einer Schwellung im Gesichtsbereich bei schwarzhäutigen Patienten. Hautveränderungen können mit Fieber, Muskel- und Gelenkschmerzen <i>(Myalgien, Arthralgien, Arthritis)</i>, Gefäßentzündungen <i>(Vaskulitiden)</i>, Entzündungen seröser Häute und bestimmten Laborwertveränderungen <i>(Eosinophilie, Leukozytose und/ oder erhöhte ANA-Titer, erhöhte BSG)</i> einhergehen.</p> <p> <i>In Einzelfällen verliefen durch ACE-Hemmer ausgelöste Schwellungen im Gesichtsbereich (angioneurotische Ödeme) mit Beteiligung von Zunge, Rachen und/ oder Kehlkopf. Liegt eine derartige Verlaufsform vor, müssen sofort 0,3 bis 0,5 mg Epinephrin subkutan bzw. 0,1 mg Epinephrin (Verdünnungsanweisung beachten) <u>langsam</u> intravenös unter EKG- und Blutdruckkontrolle gegeben werden, im Anschluss daran Glukokortikoidgabe. Ferner wird die intravenöse Gabe von Antihistaminika und H<sub>2</sub>-Rezeptor-Antagonisten empfohlen. Zusätzlich zur Epinephrin-Anwendung kann bei bekanntem C<sub>1</sub>-Inaktivator-Mangel die Gabe von C<sub>1</sub>-Inaktivator erwogen werden.</i> </p> <p> <i>Bei Auftreten von Gelbsucht (Ikterus) oder bei einem deutlichen Anstieg der Leberenzyme ist die Therapie mit dem ACE-Hemmer abzubrechen.</i> </p> <p> <b>Andere mögliche Nebenwirkungen</b> </p> <p>Bei den Häufigkeitsangaben zu Nebenwirkungen werden folgende Kategorien zugrunde gelegt:</p> <table> <tbody> <tr> <td> <p>Sehr häufig: kann mehr als 1 von 10 Behandelten betreffen</p> </td> </tr> <tr> <td> <p>Häufig: kann bis zu 1 von 10 Behandelten betreffen</p> </td> </tr> <tr> <td> <p>Gelegentlich: kann bis zu 1 von 100 Behandelten betreffen</p> </td> </tr> <tr> <td> <p>Selten: kann bis zu 1 von 1.000 Behandelten betreffen</p> </td> </tr> <tr> <td> <p>Sehr selten: kann bis zu 1 von 10.000 Behandelten betreffen</p> </td> </tr> <tr> <td> <p>Nicht bekannt: Häufigkeit auf Grundlage der verfügbaren Daten nicht abschätzbar</p> </td> </tr> </tbody> </table> <p> <u>Allgemeine Erkrankungen und Beschwerden am Verabreichungsort</u> </p> <p>Häufig: Schmerzen im Brustkorb, Erschöpfung, Schwächegefühl</p> <p>Gelegentlich: Fieber, Wasseransammlungen im Gewebe</p> <p> <u>Erkrankungen des Immunsystems</u> </p> <p>Nicht bekannt: Überempfindlichkeitsreaktionen</p> <p> <u>Herzerkrankungen</u> </p> <p>Gelegentlich:<i> </i>Angina pectoris, Herzklopfen, erhöhte Herzschlagfolge, Wasseransammlungen im Gewebe, Herzinfarkt</p> <p>Sehr selten: Herzrhythmusstörungen, Schlaganfall</p> <p> <u>Gefäßerkrankungen</u> </p> <p>Häufig: Insbesondere zu Beginn der Accupro-10-Therapie sowie bei Patienten mit Salz- und/ oder Flüssigkeitsmangel (z. B. bei Erbrechen, Durchfall, Vorbehandlung mit harntreibenden Arzneimitteln), Herzleistungsschwäche oder schwerem Bluthochdruck, aber auch bei Erhöhung der Dosierung von Accupro 10 und/ oder Diuretika kann eine übermäßige Blutdrucksenkung mit Beschwerden wie Schwindel, Schwächegefühl, Sehstörungen, gelegentlich auch mit Bewusstseinsverlust auftreten.</p> <p>Gelegentlich: Erweiterung von Blutgefäßen, kurzfristige Mangeldurchblutung des Gehirns</p> <p>Nicht bekannt: Schwindel beim Aufstehen vom Sitzen oder Liegen</p> <p> <u>Erkrankungen des Gastrointestinaltrakts (Verdauungssystems)</u> </p> <p>Häufig: Übelkeit, Erbrechen, Durchfall, (Ober-)Bauchschmerzen, Sodbrennen, Entzündung des Rachenraums, Verdauungsstörungen</p> <p>Gelegentlich: Mundtrockenheit, trockener Hals, Blähungen, Bauchspeicheldrüsenentzündung (in einigen Fällen mit tödlichem Ausgang), Verstopfung, Appetitlosigkeit</p> <p>Selten: Geschmacksveränderungen, entzündliche Veränderung der Zungenschleimhaut</p> <p>Sehr selten:<i> </i>Darmverschluss, Schwellungen im Darmkanal</p> <p> <u>Erkrankungen des Blutes und des Lymphsystems</u> </p> <p>Gelegentlich: Veränderung der Blutplättchenzahl</p> <p>Nicht bekannt: krankhafte Verringerung oder Veränderung der Blutzellenzahl <i>(Neutropenie, hämolytische Anämie, Thrombozytopenie)</i>, vollständiger Verlust bestimmter Blutzellen (<i>Agranulozytose</i>)</p> <p> <u>Psychiatrische Erkrankungen/ Erkrankungen des Nervensystems</u> </p> <p>Häufig: Kopfschmerzen, Benommenheit, Erschöpfung, Schlaflosigkeit, Taubheits- und Kältegefühl an den Gliedmaßen, Müdigkeit, Schwindel</p> <p>Gelegentlich: Depressionen, Nervosität, Schläfrigkeit, Schlafstörungen, Kribbeln, Gleichgewichtsstörungen, Verwirrtheit, vorübergehender Geschmacksverlust</p> <p>Selten: Bewusstseinsverlust</p> <p> <u>Erkrankungen der Haut und des Unterhautzellgewebes</u> </p> <p>Häufig: allergische Hautreaktionen wie Hautausschlag</p> <p>Gelegentlich: Haarausfall, vermehrte Schweißbildung, Blasensucht, Juckreiz, Hautausschlag, Wasseransammlungen in den Lippen, Gesicht und/ oder den Extremitäten (sehr selten mit Beteiligung von Kehlkopf, Rachen und/ oder Zunge), Nesselsucht, Lichtempfindlichkeit</p> <p>Selten: schwerwiegende Hautreaktionen <i>(Erythema multiforme)</i> </p> <p>Sehr selten: schwerwiegende Hautreaktionen (wie psoriasiforme Hautveränderungen), Gesichtsrötung, Schwitzen, Nagelablösung, Zunahme der Gefäßkrämpfe bei Raynaud-Krankheit</p> <p>Nicht bekannt: schwerwiegende Hautreaktionen <i>(Stevens-Johnson-Syndrom, exfoliative Dermatitis, epidermale Nekrolyse)</i> </p> <p> <u>Erkrankungen der Nieren und Harnwege</u> </p> <p>Häufig: Nierenfunktionsstörungen</p> <p>Gelegentlich: Harnwegsinfektionen, vermehrte Eiweißausscheidung im Urin (teilweise mit gleichzeitiger Verschlechterung der Nierenfunktion)</p> <p>Sehr selten: akutes Nierenversagen</p> <p> <u>Erkrankungen der Geschlechtsorgane und der Brustdrüse</u> </p> <p>Gelegentlich: Impotenz</p> <p>Selten: erektile Dysfunktion</p> <p> <u>Augenerkrankungen</u> </p> <p>Gelegentlich: Schwachsichtigkeit</p> <p>Sehr selten: verschwommenes Sehen</p> <p> <u>Erkrankungen des Ohrs und des Labyrinths</u> </p> <p>Gelegentlich: Ohrgeräusche (<i>Tinnitus</i>), Schwindel</p> <p> <u>Skelettmuskulatur-, Bindegewebs- und Knochenerkrankungen</u> </p> <p>Häufig: Rückenschmerzen, Muskelschmerzen</p> <p> <u>Erkrankungen der Atemwege, des Brustraums und Mediastinums</u> </p> <p>Häufig: Husten, trockener Reizhusten, Atemnot, Schnupfen</p> <p>Gelegentlich: Nasennebenhöhlenentzündung, obere Atemwegsinfektionen, Entzündung der Bronchien, Lungenentzündung</p> <p>Selten: Durst</p> <p>Nicht bekannt: krampfartige Verengung der Bronchien mit daraus folgender Atemnot</p> <p>In Einzelfällen kam es bei Wasseransammlung im Gesichtsbereich zur Verlegung der Atemwege mit tödlichem Ausgang.</p> <p> <u>Leber- und Gallenerkrankungen</u> </p> <p>Gelegentlich: Leberentzündung</p> <p>Sehr selten: Gelbsucht durch Gallestau oder Leberfunktionsstörungen</p> <p> <u>Untersuchungen</u> </p> <p>Häufig<i>:</i> bestimmte Blutbildveränderungen (<i>Abfall von Hämoglobinkonzentration, Hämatokrit, Leukozytenzahl, Thrombozytenzahl sowie, insbesondere bei Patienten mit Nierenfunktionsstörungen, Anstieg der Serumkonzentrationen von Harnstoff oder Kreatinin [bei Begleittherapie mit Diuretika häufiger als unter Monotherapie mit Quinapril; häufig reversibel bei fortgesetzter Therapie], Kalium, Abfall der Natriumkonzentration im Serum</i>)</p> <p>Gelegentlich: bestimmte Blutbildveränderungen <i>(Insbesondere bei Patienten mit eingeschränkter Nierenfunktion, Kollagenkrankheiten [Kollagenosen] oder gleichzeitiger Therapie mit Allopurinol, Procainamid oder bestimmten Arzneimitteln, die die Abwehrreaktionen unterdrücken, kann es zu Anämie, Eosinophilie, selten sogar zu Panzytopenie kommen.)</i> </p> <p>Sehr selten: bestimmte Blutbildveränderungen <i>(Hämolyse, Erhöhung der Bilirubin- und Leberenzymkonzentrationen)</i> </p> <p>Nicht bekannt: bestimmte Blutbildveränderungen <i>(hämolytische Anämie im Zusammenhang mit G-6-PDH-Mangel)</i> </p> <p> <i>Bei Patienten mit Diabetes mellitus wurde ein Anstieg des Serumkaliums beobachtet. Im Urin kann eine vermehrte Eiweißausscheidung auftreten.</i> </p> <p> <u>Stoffwechsel- und Ernährungsstörungen</u> </p> <p>Häufig: erhöhte Kaliumkonzentrationen im Blut</p> <p> <i> <u>Hinweise:</u> </i> </p> <p> <i>Die o. g. Laborwerte sollen vor und regelmäßig während der Behandlung mit Accupro 10 kontrolliert werden.</i> </p> <p> <i>Sollten im Verlauf einer Accupro-10-Therapie Symptome wie Fieber, Lymphknotenschwellungen und/ oder Halsentzündungen auftreten, muss vom behandelnden Arzt umgehend das weiße Blutbild untersucht werden.</i> </p> <p> <b>Meldung von Nebenwirkungen</b> </p> <p>Wenn Sie Nebenwirkungen bemerken, wenden Sie sich an Ihren Arzt, Apotheker oder das medizinische Fachpersonal. Dies gilt auch für Nebenwirkungen, die nicht in dieser Packungsbeilage angegeben sind. Sie können Nebenwirkungen auch direkt dem Bundesinstitut für Arzneimittel und Medizinprodukte, Abt. Pharmakovigilanz, Kurt-Georg-Kiesinger-Allee 3, D-53175 Bonn, Website: www.bfarm.de anzeigen. Indem Sie Nebenwirkungen melden, können Sie dazu beitragen, dass mehr Informationen über die Sicherheit dieses Arzneimittels zur Verfügung gestellt werden.</p> ',1,6);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (6,0,'<h4>Wie ist Accupro 10 aufzubewahren?</h4> <p>Bewahren Sie dieses Arzneimittel für Kinder unzugänglich auf.</p> <p>Sie dürfen dieses Arzneimittel nach dem auf dem Umkarton bzw. dem Behältnis nach „Verwendbar bis“ angegebenen Verfalldatum nicht mehr verwenden. Das Verfalldatum bezieht sich auf den letzten Tag des angegebenen Monats.</p> <p>Entsorgen Sie Arzneimittel nicht im Abwasser oder Haushaltsabfall. Fragen Sie Ihren Apotheker, wie das Arzneimittel zu entsorgen ist, wenn Sie es nicht mehr verwenden. Sie tragen damit zum Schutz der Umwelt bei.</p> <p> <b>Aufbewahrungsbedingungen</b> </p> <p>Nicht über 25 ºC aufbewahren.</p>',1,7);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (7,0,'<h4>Was sollten Sie vor der Einnahme von Accupro 10 beachten?</h4> <p> <b>2.1 Accupro 10 darf <u>nicht eingenommen</u> werden:</b> <i>(Gegenanzeigen)</i> </p> <ul> <li> <p>wenn Sie allergisch (überempfindlich) gegen Quinaprilhydrochlorid oder einen der in Abschnitt 6 genannten sonstigen Bestandteile dieses Arzneimittels sind</p> </li> <li> <p>wenn Sie zu Gewebeschwellung neigen <i>(angioneurotisches Ödem oder sonstiges Angioödem, auch infolge einer früheren ACE-Hemmer-Therapie)</i> </p> </li> <li> <p>wenn Sie eine Nierenarterienverengung haben <i>(beidseitig bzw. einseitig bei Einzelniere)</i> </p> </li> <li> <p>wenn bei Ihnen eine Nierentransplantation durchgeführt wurde</p> </li> <li> <p>wenn Sie Veränderungen an der linken Herzkammer <i>(Aorten- oder Mitralklappenstenose)</i> bzw. andere Ausflussbehinderungen der linken Herzkammer haben <i>(z. B. hypertrophe Kardiomyopathie)</i> </p> </li> <li> <p>wenn bei Ihnen durch eine Überfunktion der Nebenniere das Hormon Aldosteron im Blut erhöht ist <i>(primärer Hyperaldosteronismus)</i> </p> </li> <li> <p>wenn Sie Diabetes mellitus oder eine eingeschränkte Nierenfunktion haben und mit einem blutdrucksenkenden Arzneimittel, das Aliskiren enthält, behandelt werden</p> </li> <li> <p>wenn Sie schwanger sind <i>(vorheriger Ausschluss sowie Verhütung des Eintritts einer Schwangerschaft)</i> </p> </li> <li> <p>wenn Sie stillen (abstillen!)</p> </li> </ul> <p>Sprechen Sie mit Ihrem Arzt, wenn einer der oben aufgeführten Punkte auf Sie zutrifft, da Sie dann Accupro 10 nicht einnehmen dürfen.</p> <p> <u>Hinweis für Dialysepatienten</u> </p> <p>Während der Behandlung mit Accupro 10 darf keine Blutwäsche <i>(Dialyse oder Hämofiltration)</i> mit speziellen Membranen <i>(Poly[acrylonitril,natrium-2-methylallylsulfonat]-high-flux-Membranen, z. B. „AN 69“)</i> erfolgen, da im Rahmen einer Dialysebehandlung oder Hämofiltration die Gefahr besteht, dass Überempfindlichkeitsreaktionen <i>(anaphylaktoide Reaktionen)</i> bis hin zum lebensbedrohlichen Schock auftreten können.</p> <p>Im Falle einer notfallmäßigen Dialyse oder Hämofiltration muss deshalb vorher auf ein anderes Arzneimittel gegen Bluthochdruck <i>(Hypertonie)</i> bzw. Herzleistungsschwäche <i>(Herzinsuffizienz)</i>, das kein ACE-Hemmer sein darf, umgestellt oder eine andere Dialysemembran verwendet werden.</p> <p>Teilen Sie Ihren behandelnden Ärzten mit, dass Sie mit Accupro 10 behandelt werden bzw. Dialyse benötigen, damit die Ärzte dies bei der Behandlung berücksichtigen können.</p> <p> <i> <u>Patienten mit einer LDL-Apherese-Behandlung</u> </i> </p> <p> <i>Während einer LDL(low-density lipoprotein)-Apherese (bei schwerer Hypercholesterinämie) mit Dextransulfat können unter der Anwendung eines ACE-Hemmers lebensbedrohliche Überempfindlichkeitsreaktionen auftreten.</i> </p> <p> <u>Hinweis für Patienten mit einer Hyposensibilisierungstherapie (gegen Insektengift)</u> </p> <p>Während einer Behandlung zur Schwächung bzw. Aufhebung der allergischen Reaktionsbereitschaft <i>(Hyposensibilisierungstherapie)</i> gegen Insektengifte (z. B. Bienen-, Wespenstich) und gleichzeitiger Anwendung eines ACE-Hemmers können z. T. lebensbedrohliche Überempfindlichkeitsreaktionen (z. B. Blutdruckabfall, Atemnot, Erbrechen, allergische Hautreaktionen) auftreten.</p> <p> <i>Falls eine LDL-Apherese bzw. Hyposensibilisierungstherapie gegen Insektengifte notwendig ist, ist das Präparat vorübergehend durch andere Arzneimittel zur Senkung des Bluthochdrucks und zur Behandlung der Herzleistungsschwäche zu ersetzen (siehe folgender Abschnitt).</i> </p> <p> <b>2.2 Warnhinweise und Vorsichtsmaßnahmen</b> </p> <p>Bitte sprechen Sie mit Ihrem Arzt oder Apotheker, bevor Sie Accupro 10 einnehmen.</p> <ul> <li> <p>wenn Sie eines der folgenden Arzneimittel zur Behandlung von hohem Blutdruck einnehmen:</p> <ul> <li> <p>einen Angiotensin-II-Rezeptor-Antagonisten (diese werden auch als Sartane bezeichnet – z. B. Valsartan, Telmisartan, Irbesartan), insbesondere wenn Sie Nierenprobleme aufgrund von Diabetes mellitus haben.</p> </li> <li> <p>Aliskiren.</p> </li> </ul> </li> </ul> <p>Ihr Arzt wird gegebenenfalls Ihre Nierenfunktion, Ihren Blutdruck und die Elektrolytwerte (z. B. Kalium) in Ihrem Blut in regelmäßigen Abständen überprüfen.</p> <p>Siehe auch Abschnitt„Accupro 10 darf nicht eingenommen werden“.</p> <p>Da keine ausreichenden Therapieerfahrungen vorliegen, darf Accupro 10 nicht angewendet werden bei:</p> <ul> <li> <p>sehr schweren Nierenfunktionsstörungen <i>(Kreatinin-Clearance &lt; 10 ml/min)</i> </p> </li> <li> <p>Dialysepatienten</p> </li> <li> <p>primärer Lebererkrankung oder Leberfunktionsstörungen</p> </li> </ul> <p>Teilen Sie Ihrem Arzt mit, wenn Sie vermuten schwanger zu sein (<u>oder schwanger werden könnten</u>).</p> <p> <u>Kinder und Jugendliche</u> </p> <p>Aus klinischen Studien liegen derzeit nur begrenzte Erfahrungen vor, sodass keine Dosierungsempfehlungen gemacht werden können.</p> <p> <i> <u>Hinweis</u> </i> </p> <p> <i>Vor Anwendung von Accupro 10 muss die Nierenfunktion überprüft worden sein.</i> </p> <p> <i>Insbesondere zu Therapiebeginn und bei Risikopatienten sollte Accupro 10 nur unter intensiver Überwachung von Blutdruck und/ oder bestimmten Laborwerten angewendet werden.</i> </p> <p> <i>Serumelektrolyte, Serumkreatinin und Blutzucker sowie Blutbild sind engmaschig zu kontrollieren.</i> </p> <p> <i>Accupro 10 darf nur nach sehr kritischer Nutzen-Risiko-Abwägung unter regelmäßiger Kontrolle von bestimmten klinischen Befunden und Laborwerten angewendet werden bei:</i> </p> <ul> <li> <p> <i>schweren Nierenfunktionsstörungen (Kreatinin-Clearance zwischen 10 und 30 ml/min)</i> </p> </li> <li> <p> <i>vermehrter Eiweißausscheidung im Urin (&gt; 1 g/Tag)</i> </p> </li> <li> <p> <i>schweren Elektrolytstörungen</i> </p> </li> <li> <p> <i>gestörter Immunreaktion oder Kollagenosen (z. B. Lupus erythematodes, Sklerodermie)</i> </p> </li> <li> <p> <i>gleichzeitiger Therapie mit Arzneimitteln, die die Abwehrreaktionen unterdrücken (z. B. Kortikoide, Zytostatika, Antimetaboliten), Allopurinol, Procainamid, Lithium, Digitalisglykosiden oder Laxanzien</i> </p> </li> <li> <p> <i>Patienten mit Salz- und/ oder Flüssigkeitsmangel</i> </p> </li> <li> <p> <i>Patienten mit eingeschränkter Nierenfunktion</i> </p> </li> <li> <p> <i>Patienten mit Bluthochdruck</i> </p> </li> <li> <p> <i>Patienten &gt; 65 Jahre (bei Patienten &gt; 65 Jahre sollte die Nierenfunktion überprüft und gegebenenfalls die Dosis reduziert werden)</i> </p> </li> <li> <p> <i>Patienten mit Herzleistungsschwäche (kardiogener Schock)</i> </p> </li> </ul> <p> <i>Bei Patienten mit oder ohne Allergie oder Bronchialasthma in der Krankengeschichte können Überempfindlichkeitsreaktionen auftreten, wie z. B. Hautblutungen (Purpura), Lichtempfindlichkeit, Nesselfieber (Urtikaria), Blutgefäßentzündung (nekrotisierende Angiitis), Atemnot einschließlich Lungenentzündung (Pneumonitis) und Lungenödem, anaphylaktische Reaktionen.</i> </p> <p> <i>Accupro 10 nicht zusammen mit Poly(acrylonitril,natrium-2-methylallylsulfonat)-high-flux-Membranen (z. B. „AN 69“), während einer LDL-Apherese mit Dextransulfat oder während einer Hyposensibilisierungsbehandlung gegen Insektengifte anwenden (siehe auch „Accupro 10 darf nicht eingenommen werden“).</i> </p> <p> <i>Patienten, die zu therapeutischen Zwecken gleichzeitig einen mTOR(mammalian Target of Rapamycin)-Hemmer (z. B. Temsirolimus) oder DPP-4(Dipeptidyl-Peptidase-4)-Hemmer (z. B. Vildagliptin) erhalten, haben möglicherweise ein erhöhtes Risiko für angioneurotische Ödeme. Besondere Vorsicht ist geboten, wenn bei Patienten, die schon einen ACE-Hemmer erhalten, eine Therapie mit einem mTOR-Hemmer oder DPP-4-Hemmer begonnen wird.</i> </p> <p> <i>Bei Patienten mit Herzschwäche kann während der Behandlung der Blutdruck massiv abfallen. Bei diesen Patienten kann die Therapie mit Quinapril zudem eine verminderte Urinausscheidung, einen erhöhten Gehalt an harnpflichtigen Substanzen im Blut, Nierenversagen und/oder den Tod zur Folge haben. Darum müssen diese Patienten sehr engmaschig vom behandelnden Arzt überwacht werden.</i> </p> <p> <b>2.3 Einnahme von Accupro 10 zusammen mit anderen Arzneimitteln</b> <br/>(<i>Wechselwirkungen</i>)</p> <p> <b>Informieren Sie Ihren Arzt oder Apotheker, wenn Sie andere Arzneimittel anwenden, kürzlich andere Arzneimittel angewendet haben oder beabsichtigen, andere Arzneimittel anzuwenden.</b> </p> <p>Bei der Verwendung von Accupro 10 sind Wechselwirkungen mit folgenden Wirkstoffen anderer Arzneimittel möglich (die Wirkstoffbezeichnungen finden Sie auf der Packung und der Packungsbeilage Ihrer Medikamente).</p> <p>Die Wirkung von Accupro 10 wird verstärkt durch:</p> <ul> <li> <p>andere blutdrucksenkende Arzneimittel, insbesondere durch harntreibende Arzneimittel <i>(Diuretika)</i> </p> </li> <li> <p>Schlafmittel, Betäubungsmittel (Information des Narkosearztes bezüglich der Accupro-10-Therapie!). Weiterhin kann es vermehrt zu Schwindelgefühlen beim Aufstehen vom Sitzen oder Liegen kommen</p> </li> <li> <p>Neuroleptika (bei Psychosen), Imipramin (bei Depression)</p> </li> </ul> <p>Die Wirkung von Accupro 10 wird abgeschwächt durch:</p> <ul> <li> <p>Arzneimittel gegen Schmerzen und Entzündungen (z. B. Acetylsalicylsäure, Indometacin, nichtsteroidale Antirheumatika [NSAR] einschließlich COX-2-Hemmer); NSAR können zusammen mit Accupro 10 verstärkt die Nierenfunktion beeinträchtigen und eine additive Zunahme der Serumkaliumkonzentration bewirken.</p> </li> </ul> <p>Arzneimittel, die das Serumkalium erhöhen: Die gleichzeitige Behandlung mit kaliumsparenden harntreibenden Arzneimitteln (z. B. Spironolacton, Amilorid, Triamteren), Kaliumsalzen oder anderen Arzneimitteln, die den Serumkaliumspiegel erhöhen, sollte mit Vorsicht erfolgen und die Serumkaliumkonzentration engmaschig überwacht werden.</p> <p> <i>Die gleichzeitige Verabreichung von Accupro 10 mit Arzneimitteln, die das Antibiotikum Trimethoprim enthalten, sollte bei älteren Patienten und bei Patienten mit eingeschränkter Nierenfunktion mit Vorsicht erfolgen, da es zu einer Erhöhung des Kaliumwertes im Blut kommen kann. Der Serumkaliumspiegel sollte daher regelmäßig kontrolliert werden!</i> </p> <p>Lithium (bei Depression): Erhöhung der Serumlithiumkonzentration (regelmäßige Kontrolle), somit Verstärkung der herz- und nervenschädigenden Wirkung von Lithium</p> <p>Allopurinol (bei erhöhtem Harnsäurespiegel im Blut): Abnahme der weißen Blutzellen <i>(Leukopenie)</i> </p> <p>Arzneimittel, die die Abwehrreaktion unterdrücken (Zytostatika, Immunsuppressiva, systemische Kortikoide): Abnahme der weißen Blutzellen <i>(Leukopenie)</i> </p> <p>Procainamid (bei Herzrhythmusstörungen): Abnahme der weißen Blutzellen <i>(Leukopenie)</i> </p> <p>Blutzuckersenkende Arzneimittel zum Einnehmen (z. B. Sulfonylharnstoffe/Biguanide), Insulin: Verstärkung des blutzuckersenkenden Effekts durch Accupro 10. Während des 1. Behandlungsmonats mit Accupro 10 sollten Sie daher Ihren Blutzuckerspiegel genau kontrollieren.</p> <p>Tetracycline (Antibiotika) und andere Wirkstoffe, die mit Magnesium reagieren: verminderte Aufnahme in den Körper</p> <p>Goldhaltige Arzneimittel (z. B. bei Rheuma): Hier sind z. B. Erweiterungen der Blutgefäße <i>(nitroide Reaktionen) </i>möglich.</p> <p>Bestimmte Schlaf- oder Beruhigungsmittel (Barbiturate): Es kann vermehrt zu Schwindelgefühlen beim Aufstehen vom Sitzen oder Liegen kommen.</p> <p>Arzneimittel gegen Übersäuerung des Magens (Antazida): verminderte Aufnahme von Quinapril in den Körper.</p> <p>mTOR-Hemmer (z. B. Temsirolimus) oder DPP-4-Hemmer (z. B. Vildagliptin): eventuell erhöhtes Risiko für angioneurotische Ödeme. Besondere Vorsicht ist geboten, wenn Sie schon einen ACE-Hemmer (z. B. Accupro 10) erhalten und eine Therapie mit einem mTOR-Hemmer oder DPP-4-Hemmer begonnen wird.</p> <p>Ihr Arzt muss unter Umständen Ihre Dosierung anpassen und/oder sonstige Vorsichtsmaßnahmen treffen:</p> <p>wenn Sie einen Angiotensin-II-Rezeptor-Antagonisten oder Aliskiren einnehmen (siehe auch Abschnitte „Accupro 10 darf nicht eingenommen werden“<i> </i>und<i> </i>„Warnhinweise und Vorsichtsmaßnahmen“).</p> <p> <b>Einnahme von Accupro 10 zusammen mit Nahrungsmitteln, Getränken und Alkohol</b> </p> <ul> <li> <p>Kochsalz kann die blutdrucksenkende Wirkung von Accupro 10 verringern. Sprechen Sie mit Ihrem Arzt, ob eine kochsalzarme Kost für Sie notwendig ist.</p> </li> <li> <p>Meiden Sie Alkohol, da Accupro 10 die Wirkung von Alkohol verstärkt und es vermehrt zu Schwindelgefühlen beim Aufstehen vom Sitzen oder Liegen kommen kann.</p> </li> </ul> <p> <b>2.4 Schwangerschaft, Stillzeit und Zeugungsfähigkeit</b> </p> <p>Wenn Sie schwanger sind oder stillen oder wenn Sie vermuten, schwanger zu sein, oder beabsichtigen, schwanger zu werden, fragen Sie vor der Einnahme dieses Arzneimittels Ihren Arzt oder Apotheker um Rat.</p> <p> <u>Schwangerschaft</u> </p> <p>Teilen Sie Ihrem Arzt mit, wenn Sie vermuten, schwanger zu sein (<u>oder schwanger werden könnten</u>). Ihr Arzt wird Ihnen empfehlen, Accupro 10 vor einer Schwangerschaft bzw. sobald Sie wissen, dass Sie schwanger sind, abzusetzen, und er wird Ihnen ein anderes Arzneimittel empfehlen, denn die Einnahme von Accupro 10 kann zu schweren Schädigungen Ihres ungeborenen Kindes führen<i>.</i> </p> <p> <u>Stillzeit</u> </p> <p>Teilen Sie Ihrem Arzt mit, wenn Sie stillen oder mit dem Stillen beginnen wollen. Das Stillen von Neugeborenen (in den ersten Wochen nach der Geburt) und besonders von Frühgeburten wird nicht empfohlen, wenn Sie Accupro 10 einnehmen. </p> <p> <b>2.5 Verkehrstüchtigkeit und Fähigkeit zum Bedienen von Maschinen</b> </p> <p>Die Fähigkeit zur aktiven Teilnahme am Straßenverkehr oder zum Bedienen von Maschinen kann beeinträchtigt werden. Dies gilt in verstärktem Maße bei Behandlungsbeginn, Dosiserhöhung und beim Wechsel des Arzneimittels sowie im Zusammenwirken mit Alkohol.</p> <p> <b>Dieses Arzneimittel enthält Milchzucker (Lactose)</b> </p> <p>Bitte nehmen Sie Accupro 10 daher erst nach Rücksprache mit Ihrem Arzt ein, wenn Ihnen bekannt ist, dass Sie an einer Unverträglichkeit gegenüber bestimmten Zuckern leiden.</p> ',1,3);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (8,0,'',2,2);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (9,0,'',2,8);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (10,0,'',2,6);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (11,0,'',2,3);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (12,0,'',2,7);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (13,0,'',2,4);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (14,0,'',2,5);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (15,0,'',2,1);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (16,0,'<h4>Was ist Beloc-Zok comp und wofür wird es angewendet?</h4> <p>Beloc-Zok comp ist eine Kombination aus einem Betablocker und einem Diuretikum, die beide auf unterschiedlichem Wege Ihren Blutdruck senken.</p> <p>Beloc-Zok comp wird angewendet bei nicht organbedingtem Bluthochdruck (essenzielle Hypertonie). Das Kombinationspräparat Beloc-Zok comp darf nur angewendet werden, wenn eine vorangegangene Therapie mit einem der Einzelwirkstoffe (retardiertes Metoprololsuccinat oder Hydrochlorothiazid) keine ausreichende Blutdrucknormalisierung bewirken konnte.</p> ',3,4);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (17,0,'<h4>Inhalt der Packung und weitere Informationen</h4> <p> <b>Was Beloc-Zok comp enthält</b> </p> <ul> <li> <p>Die Wirkstoffe sind Metoprololsuccinat (Ph.Eur.) und Hydrochlorothiazid. </p> </li> </ul> <p>1 Retardtablette enthält 95,0 mg Metoprololsuccinat und 12,5 mg Hydrochlorothiazid.</p> <ul> <li> <p>Die sonstigen Bestandteile sind hochdisperses Siliciumdioxid; Ethylcellulose; Hyprolose; mikrokristalline Cellulose; Maisstärke; Povidon K 25; Octadecylhydrogenfumarat, Natriumsalz; Hypromellose; Macrogol 6000; Hartparaffin. Farbstoffe: Titandioxid (E 171), Eisenoxide und -hydroxide (E 172).</p> </li> </ul> <p> <b>Wie Beloc-Zok comp aussieht und Inhalt der Packung</b> </p> <p>Die Retardtabletten sind gelblich, rund und bikonvex, haben einen Durchmesser von 10 mm mit einer Bruchkerbe auf der einen und der Prägung „A“ und „IL“ auf der anderen Seite. Die Bruchkerbe dient nur zum Teilen der Tablette, wenn Sie Schwierigkeiten haben, diese im Ganzen zu schlucken.</p> <p>Beloc-Zok comp ist in Packungen zu 30, 50 und 100 Retardtabletten erhältlich.</p> <p> <b>Pharmazeutischer Unternehmer und Hersteller</b> </p> <p> <b>Pharmazeutischer Unternehmer</b> </p> <p>PHARMACIA GmbH<br/>Linkstr. 10</p> <p>10785 Berlin</p> <p>Tel.: 030 550055-51000</p> <p>Fax: 030 550054-10000 </p> <p> <italic> </italic> <br/> <b>Hersteller </b> </p> <p>EXCELLA GmbH</p> <p>Nürnberger Str. 12</p> <p>90537 Feucht</p> <p> <b>Mitvertreiber</b> </p> <p>PFIZER PHARMA GmbH</p> <p>Linkstr. 10</p> <p>10785 Berlin</p> <p>Tel.: 030 550055-51000</p> <p>Fax: 030 550054-10000 </p> <p> <b>Diese Packungsbeilage wurde zuletzt überarbeitet im Januar 2015.</b> </p> <p>palde-5v14bz-rt-0</p>',3,8);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (18,0,'<h4>Lesen Sie die gesamte Packungsbeilage sorgfältig durch, bevor Sie mit der Einnahme dieses Arzneimittels beginnen, denn sie enthält wichtige Informationen.</h4> <ul> <li> <p>Heben Sie die Packungsbeilage auf. Vielleicht möchten Sie diese später nochmals lesen.</p> </li> <li> <p>Wenn Sie weitere Fragen haben, wenden Sie sich an Ihren Arzt oder Apotheker.</p> </li> <li> <p>Dieses Arzneimittel wurde Ihnen persönlich verschrieben. Geben Sie es nicht an Dritte weiter. Es kann anderen Menschen schaden, auch wenn diese die gleichen Beschwerden haben wie Sie.</p> </li> <li> <p>Wenn Sie Nebenwirkungen bemerken, wenden Sie sich an Ihren Arzt oder Apotheker oder das medizinische Fachpersonal. Dies gilt auch für Nebenwirkungen, die nicht in dieser Packungsbeilage angegeben sind. Siehe Abschnitt 4.</p> </li> </ul>',3,1);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (19,0,'<h4>Wie ist Beloc-Zok comp aufzubewahren?</h4> <p>Bewahren Sie dieses Arzneimittel für Kinder unzugänglich auf.</p> <p>Sie dürfen dieses Arzneimittel nach dem auf der Faltschachtel und Durchdrückpackung nach &quot;Verwendbar bis&quot; angegebenen Verfalldatum nicht mehr verwenden. Das Verfalldatum bezieht sich auf den letzten Tag des angegebenen Monats.</p> <p> <b>Aufbewahrungsbedingungen</b> </p> <p>Für dieses Arzneimittel sind keine besonderen Lagerungsbedingungen erforderlich.</p>',3,7);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (20,0,'<h4>Welche Nebenwirkungen sind möglich?</h4>´ <p>Wie alle Arzneimittel kann auch dieses Arzneimittel Nebenwirkungen haben, die aber nicht bei jedem auftreten müssen.</p> <p>Bei den Häufigkeitsangaben zu Nebenwirkungen werden folgende Kategorien zugrunde gelegt:</p> <table> <tbody> <tr> <td> <p>Sehr häufig: kann mehr als 1 von 10 Behandelten betreffen</p> </td> </tr> <tr> <td> <p>Häufig: kann bis zu 1 von 10 Behandelten betreffen</p> </td> </tr> <tr> <td> <p>Gelegentlich: kann bis zu 1 von 100 Behandelten betreffen</p> </td> </tr> <tr> <td> <p>Selten: kann bis zu 1 von 1.000 Behandelten betreffen</p> </td> </tr> <tr> <td> <p>Sehr selten: kann bis zu 1 von 10.000 Behandelten betreffen</p> <p>Nicht bekannt: Häufigkeit auf Grundlage der verfügbaren Daten nicht abschätzbar</p> </td> </tr> </tbody> </table> <p> <i>Erkrankungen des Blutes und des Lymphsystems</i> </p> <p>Selten: Blutbildveränderungen in Form einer Verminderung der roten Blutkörperchen (aplastische Anämie), Verminderung der Blutplättchen (Thrombozytopenie) und Leukozyten im Blut (Leukopenie), hochgradige Verminderung bestimmter weißer Blutkörperchen mit Infektneigung und schweren Allgemeinsymptomen (Agranulozytose)</p> <p> <i>Erkrankungen des Immunsystems</i> </p> <p>Selten: allergische Hauterscheinungen, Überempfindlichkeit (Idiosynkrasie)</p> <p>Sehr selten: allergischer Schnupfen</p> <p> <i>Stoffwechsel- und Ernährungsstörungen</i> </p> <p>Häufig: Eine unerkannte Zuckerkrankheit (latenter Diabetes mellitus) kann erkennbar werden oder eine bereits bestehende Zuckerkrankheit sich verschlechtern (Symptome: erhöhter Zuckergehalt des Blutes [Hyperglykämie] oder im Urin [Glykosurie]). Unter der Therapie kann es zu Störungen im Fettstoffwechsel kommen: Bei meist normalem Gesamtcholesterin wurde eine Verminderung des HDL-Cholesterins und eine Erhöhung der Triglyzeride im Plasma beobachtet.</p> <p>Die Harnsäurewerte im Blut können sich erhöhen (Hyperurikämie); bei disponierten Patienten können Gichtanfälle ausgelöst werden. Die Anwendung von Beloc-Zok comp kann bei langfristiger, kontinuierlicher Einnahme zu Veränderungen im Mineralstoffwechsel (Elektrolytveränderungen) führen, insbesondere zu einer Erniedrigung der Blutspiegel von Kalium (Hypokaliämie), Magnesium (Hypomagnesiämie), Natrium (Hyponatriämie) und Chlorid (Hypochlorämie) sowie zu einem erhöhten Calciumspiegel (Hyperkalzämie). Als Folge der Elektrolyt- und Flüssigkeitsverluste kann sich ein Überschuss an Alkali im Blut (metabolische Alkalose) entwickeln bzw. eine bereits bestehende metabolische Alkalose verschlechtern.</p> <p>Selten: Nach längerem strengen Fasten oder schwerer körperlicher Belastung kann es bei gleichzeitiger Therapie mit Beloc-Zok comp zu Zuständen mit erniedrigtem Blutzucker (hypoglykämische Zustände) kommen. Warnzeichen eines erniedrigten Blutzuckers – insbesondere erhöhte Herzfrequenz (Tachykardie) und Zittern der Finger (Tremor) – können verschleiert werden.</p> <p> <i>Psychiatrische Erkrankungen</i> </p> <p>Gelegentlich: depressive Verstimmungszustände, Verwirrtheit, Halluzinationen</p> <p>Selten: Nervosität, Ängstlichkeit</p> <p>Sehr selten: Persönlichkeitsveränderungen (z. B. Gefühlsschwankungen)</p> <p> <i>Erkrankungen des Nervensystems</i> </p> <p>Sehr häufig: Erschöpfung</p> <p>Häufig: Benommenheit, Kopfschmerzen</p> <p>Gelegentlich: Insbesondere zu Beginn der Behandlung zentralnervöse Störungen wie Müdigkeit, Schwindelgefühl, Schlafstörungen, Schlaflosigkeit, verstärkte Traumaktivität, Albträume, Konzentrationsstörungen. Diese Erscheinungen sind gewöhnlich leichterer Art und vorübergehend. Kribbeln in den Gliedmaßen, Muskelkrämpfe.</p> <p>Selten: Muskelschwäche, Impotenz, Libido- und Potenzstörungen</p> <p>Sehr selten: Erinnerungslücken (Amnesie), Gedächtnisstörungen</p> <p> <i>Augenerkrankungen</i> </p> <p>Selten: Entzündung der Bindehaut des Auges (Konjunktivitis) und verminderter Tränenfluss (dies ist beim Tragen von Kontaktlinsen zu beachten); Augenreizung, geringgradige Sehstörungen (z. B. verschwommenes Sehen, Farbsehstörungen [Gelbsehen]) oder eine Verschlimmerung einer bestehenden Kurzsichtigkeit</p> <p>Sehr selten: Flimmern vor den Augen</p> <p>Häufigkeit nicht bekannt: plötzlich auftretende Kurzsichtigkeit (akute Myopie), akutes Engwinkelglaukom</p> <p> <i>Erkrankungen des Ohrs und des Labyrinths (Gleichgewichtssystem)</i> </p> <p>Sehr selten: Hörstörungen, Ohrensausen</p> <p> <i>Herzerkrankungen</i> </p> <p>Häufig: Herzklopfen (Palpitationen), verlangsamter Herzschlag (Bradykardie), Blutdruckabfall beim Aufsetzen (orthostatische Hypotonie, sehr selten mit Bewusstlosigkeit)</p> <p>Gelegentlich: Verstärkung einer Herzmuskelschwäche mit peripheren Ödemen (Flüssigkeitsansammlungen), bei einem akuten Herzinfarkt kann der Blutdruck stark erniedrigt sein (kardiogener Schock), Herzschmerzen</p> <p>Selten: Störungen der Erregungsleitung am Herzen (atrioventrikuläre Überleitungsstörungen), unregelmäßige Herzschlagfolge (Arrhythmien)</p> <p>Sehr selten: Verstärkung der Anfälle bei Angina pectoris</p> <p> <i>Gefäßerkrankungen</i> </p> <p>Häufig: Kältegefühl in den Gliedmaßen</p> <p>Selten: Gefäßentzündung (Vaskulitis)</p> <p>Sehr selten: Verstärkung (bis zum Absterben des Gewebes) bereits bestehender peripherer Durchblutungsstörungen</p> <p> <i>Erkrankungen der Atemwege und des Brustraums</i> </p> <p>Häufig: Atemnot bei Belastung (Belastungsdyspnoe)</p> <p>Gelegentlich: Infolge einer möglichen Erhöhung des Atemwiderstands kann es bei Patienten mit Neigung zu Verkrampfungen der Atemwege (bronchospastischen Reaktionen, z. B. bei asthmoider Bronchitis) insbesondere bei obstruktiven Atemwegserkrankungen zu einer Verengung der Atemwege und zu Atemnot kommen.</p> <p>Selten: Lungenentzündung (akute interstitielle Pneumonie)</p> <p>Sehr selten: Flüssigkeitsansammlung in der Lunge (allergisches Lungenödem) mit Schocksymptomatik</p> <p> <i>Erkrankungen des Gastrointestinaltrakts (Magen-Darm-System)</i> </p> <p>Häufig: Vorübergehend Magen-Darm-Beschwerden wie Übelkeit, Leibschmerzen, Durchfall, Verstopfung</p> <p>Gelegentlich: Erbrechen, Appetitlosigkeit, Krämpfe</p> <p>Selten: Mundtrockenheit; Entzündung der Bauchspeicheldrüse</p> <p> <i>Leber- und Gallenerkrankungen</i> </p> <p>Selten: Erhöhung der Leberwerte (Transaminasen GOT, GPT); Gelbsucht, Gallestau (intrahepatische Cholestase); akute Gallenblasenentzündung (bei bestehendem Gallensteinleiden)</p> <p>Sehr selten: Leberentzündung (Hepatitis)</p> <p> <i>Erkrankungen der Haut und des Unterhautzellgewebes</i> </p> <p>Gelegentlich: Hautreaktionen wie Rötung und Juckreiz sowie Hautausschläge (meist psoriasiforme und dystrophische Hautläsionen), Schwitzen, stark juckende Quaddeln (Urtikaria), Lichtempfindlichkeit mit Auftreten von Hautausschlägen nach Lichteinwirkung.</p> <p>Selten: kleinflächige Einblutungen in der Haut und Schleimhaut (Purpura), Haarausfall, Blutgefäßentzündung (nekrotisierende Angiitis)</p> <p>Sehr selten: Arzneimittel, die Betarezeptorenblocker enthalten, können in Einzelfällen eine Schuppenflechte (Psoriasis vulgaris) auslösen, die Symptome dieser Erkrankung verschlechtern oder zu Schuppenflechte-ähnlichen (psoriasiformen) Hautausschlägen führen; Schmetterlingsflechte (kutaner Lupus erythematodes)</p> <p>Nicht bekannt: chronisch-entzündliche Bindegewebserkrankung (systemischer Lupus erythematodes)</p> <p> <i>Skelettmuskulatur-, Bindegewebs- und Knochenerkrankungen</i> </p> <p>Sehr selten: Bei Langzeittherapie wurde in Einzelfällen eine Erkrankung der Gelenke (Arthropathie) und/ oder Arthralgie (Gelenkschmerzen) beobachtet, wobei ein oder mehrere Gelenke betroffen sein können (Mono- und Polyarthritis).</p> <p> <i>Erkrankungen der Nieren und Harnwege</i> </p> <p>Selten: akute Nierenentzündung (interstitielle Nephritis)</p> <p> <i>Erkrankungen der Geschlechtsorgane und der Brustdrüse</i> </p> <p>Sehr selten: Verhärtung der Schwellkörper des männlichen Gliedes (Induratio penis plastica, Peyronie-Krankheit)</p> <p> <i>Allgemeine Erkrankungen und Beschwerden am Verabreichungsort</i> </p> <p>Gelegentlich: Gewichtszunahme</p> <p>Selten: Arzneimittelfieber. Bei hoher Dosierung kann es, insbesondere bei Vorliegen von Venenerkrankungen, zum Verschluss von Blutgefäßen durch Blutgerinnsel (Thrombosen und Embolien) kommen.</p> <p>Sehr selten: Geschmacksstörungen</p> <p> <i>Untersuchungen</i> </p> <p>Gelegentlich: reversibler Anstieg stickstoffhaltiger, harnpflichtiger Stoffe (Harnstoff, Kreatinin) im Blut, vor allem zu Behandlungsbeginn.</p> <p>Selten: Erhöhung der Blutfettwerte</p> <p>Eine Verstärkung der Beschwerden bei Patienten mit intermittierendem Hinken (Claudicatio intermittens) oder mit Gefäßkrämpfen im Bereich der Zehen und Finger (Raynaud-Syndrom) ist beobachtet worden.</p> <p>Die Symptome einer schweren Schilddrüsenüberfunktion (Thyreotoxikose) können verdeckt werden.</p> <p>Sollten bei Ihnen Nebenwirkungen aufgetreten sein, wird Ihr Arzt Ihnen eventuelle Gegenmaßnahmen empfehlen oder gegebenenfalls die Behandlung abbrechen.</p> <p> <b>Meldung von Nebenwirkungen</b> </p> <p>Wenn Sie Nebenwirkungen bemerken, wenden Sie sich an Ihren Arzt, Apotheker oder das medizinische Fachpersonal. Dies gilt auch für Nebenwirkungen, die nicht in dieser Packungsbeilage angegeben sind. Sie können Nebenwirkungen auch direkt dem Bundesinstitut für Arzneimittel und Medizinprodukte, Abt. Pharmakovigilanz, Kurt-Georg-Kiesinger-Allee 3, D-53175 Bonn, Website: www.bfarm.de anzeigen. Indem Sie Nebenwirkungen melden, können Sie dazu beitragen, dass mehr Informationen über die Sicherheit dieses Arzneimittels zur Verfügung gestellt werden.</p> ',3,6);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (21,0,'<h4>Wie ist Beloc-Zok comp aufzubewahren?</h4> <p>Bewahren Sie dieses Arzneimittel für Kinder unzugänglich auf.</p> <p>Sie dürfen dieses Arzneimittel nach dem auf der Faltschachtel und Durchdrückpackung nach „Verwendbar bis“ angegebenen Verfalldatum nicht mehr verwenden. Das Verfalldatum bezieht sich auf den letzten Tag des angegebenen Monats.</p> <p> <b>Aufbewahrungsbedingungen</b> </p> <p>Für dieses Arzneimittel sind keine besonderen Lagerungsbedingungen erforderlich.</p>',3,5);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (22,0,'<h4>Was sollten Sie vor der Einnahme von Beloc-Zok comp beachten?</h4> <p> <bold>Beloc-Zok comp darf nicht eingenommen werden,</bold> </p> <ul> <li> <p>wenn Sie allergisch gegen Metoprololsuccinat und Hydrochlorothiazid, den Wirkstoffen von Beloc-Zok comp, verwandten Derivaten oder einen der in Abschnitt 6 genannten sonstigen Bestandteile dieses Arzneimittels sind,</p> </li> <li> <p>bei Erregungsleitungsstörungen von den Vorhöfen auf die Kammern (AV-Block 2. oder 3. Grades),</p> </li> <li> <p>bei Sinusknoten-Syndrom (sick sinus syndrome), es sei denn, Sie haben einen Herzschrittmacher,</p> </li> <li> <p>bei gestörter Erregungsleitung zwischen Sinusknoten und Vorhof (sinuatrialem Block),</p> </li> <li> <p>bei kardiogenem Schock,</p> </li> <li> <p>bei instabiler, dekompensierter Herzmuskelschwäche (Lungenödem, Minderdurchblutung, zu niedrigem Blutdruck),</p> </li> <li> <p>bei dauerhafter oder intermittierender inotroper Therapie mit Betarezeptor-Agonisten,</p> </li> <li> <p>bei einem Ruhepuls vor der Behandlung unter 50 Schlägen pro Minute (Bradykardie),</p> </li> <li> <p>bei krankhaft niedrigem Blutdruck (Hypotonie, systolisch unter 90 mmHg),</p> </li> <li> <p>bei Übersäuerung des Blutes (Azidose),</p> </li> <li> <p>bei Spätstadium peripherer arterieller Durchblutungsstörungen,</p> </li> <li> <p>bei Neigung zu Bronchialverkrampfung (bronchiale Hyperreagibilität),</p> </li> <li> <p>bei gleichzeitiger Gabe von MAO-Hemmstoffen (Ausnahme MAO-B-Hemmstoffe),</p> </li> <li> <p>bei Überempfindlichkeit gegenüber Sulfonamiden (mögliche Kreuzreaktionen beachten).</p> </li> <li> <p>Falls Ihnen bekannt ist, dass Sie auf Sulfonamide (Medikamente zur Behandlung von Infektionen durch Bakterien) überempfindlich reagieren, informieren Sie bitte Ihren Arzt.</p> </li> <li> <p>bei fortgeschrittener Leistungsminderung der Nieren (Niereninsuffizienz mit stark eingeschränkter Harnproduktion; Kreatinin-Clearance kleiner als 30 ml/min und/ oder Serum-Kreatinin über 1,8 mg/100 ml) und akuter Nierenentzündung (Glomerulonephritis),</p> </li> <li> <p>bei schweren Leberfunktionsstörungen (Leberversagen mit Bewusstseinsstörungen),</p> </li> <li> <p>bei erniedrigtem Kaliumspiegel, der auf eine Behandlung nicht anspricht (unter 3,5 mmol/l),</p> </li> <li> <p>bei erhöhtem Blut-Calciumspiegel (Hyperkalzämie),</p> </li> <li> <p>bei Gicht, bei bekannter Erhöhung von Harnsäure im Blut,</p> </li> <li> <p>bei schwerem Natriummangel im Blut (Hyponatriämie),</p> </li> <li> <p>bei verminderter zirkulierender Blutmenge (Hypovolämie),</p> </li> <li> <p>in der Schwangerschaft,</p> </li> <li> <p>in der Stillzeit.</p> </li> </ul>',3,3);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (23,0,'',4,6);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (24,0,'',4,3);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (25,0,'',4,5);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (26,0,'',4,7);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (27,0,'',4,1);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (28,0,'',4,4);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (29,0,'',4,8);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (30,0,'',4,2);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (31,0,'',5,7);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (32,0,'',5,1);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (33,0,'',5,4);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (34,0,'',5,6);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (35,0,'',5,8);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (36,0,'',5,2);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (37,0,'',5,3);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (38,0,'',5,5);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (39,0,'',6,6);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (40,0,'',6,7);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (41,0,'',6,8);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (42,0,'',6,3);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (43,0,'',6,5);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (44,0,'',6,4);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (45,0,'',6,2);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (46,0,'',6,1);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (47,0,'',7,2);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (48,0,'',7,4);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (49,0,'',7,7);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (50,0,'',7,6);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (51,0,'',7,5);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (52,0,'',7,3);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (53,0,'',7,8);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (54,0,'',7,1);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (55,0,'',8,7);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (56,0,'',8,8);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (57,0,'',8,1);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (58,0,'',8,6);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (59,0,'',8,2);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (60,0,'',8,3);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (61,0,'',8,4);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (62,0,'',8,5);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (63,0,'',9,2);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (64,0,'',9,3);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (65,0,'',9,1);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (66,0,'',9,7);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (67,0,'',9,8);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (68,0,'',9,5);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (69,0,'',9,6);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (70,0,'',9,4);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (71,0,'',10,5);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (72,0,'',10,4);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (73,0,'',10,3);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (74,0,'',10,2);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (75,0,'',10,6);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (76,0,'',10,7);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (77,0,'',10,8);
INSERT INTO packaging_section (id, state, text, iddrug, idpackaging_topic) VALUES (78,0,'',10,1);

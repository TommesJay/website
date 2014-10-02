![](/img/accurate-bild-start.jpg) {.fancyheader-img}
# *Räumungskonzepte nach (Muster-)&#8203;Versammlungs&shy;stätten&shy;verordnung* {.fancyheader}


- Aussage Manuel Huber:
Nachweis, er erbracht wird, dass die Vorgabe, dass zwischen der ersten
Person, die den Ausgang passiert und der letzten Person, die den Ausgang
passiert, nicht mehr als 6 Minuten liegen.

- Ich würde ergänzen:
Zusätzliche Verteilung der Personen auf Fluchtwege, Sicherheitspersonal
platzieren, unterschiedliche Schadensereignisse betrachten

Ziel von Räumungskonzepten:
Maximale Anzahl zulässiger Gäste für eine Veranstaltung herausfinden


## Hintergrund

Die neue <cite id="MVStaettV">[Musterversammlungsstättenverordnung](http://www.bauministerkonferenz.de/IndexSearch.aspx?method=get&File=b8a84yy3y8b984808abb4yb8y9ya8ayyb9y884b94ya2a0a149aaa0a2ay49aaa0a3484b80b8y00tlswan1sun2g2ixhrm4yngi)</cite> (MVStättV) verlangt für Versammlungsstätten, die für mehr als 1.000 Besucher bestimmt sind, die Aufstellung eines Räumungskonzepts.
(Rechtsanwalt Thomas Waetke geht [hier](http://www.eventfaq.de/24614-wann-ist-ein-raeumungskonzept-erforderlich-und-was-muss-darin-enthalten-sein-teil-1/) näher auf die Kriterien ein.)

Aus dem <cite>[Dokument zur Begründung der Änderungen](http://www.bauministerkonferenz.de/IndexSearch.aspx?method=get&File=b8a84yy3y8b984808abb4yb8y9ya8ayyb9y884b94ya2a0a149aaa4a0494b80b8y00tlswan1sun2g2ixhrm4yngi)</cite>:

> Versammlungsstätten sind so zu planen, zu errichten und zu betreiben, dass es für die Personenrettung in der Regel nicht der Mitwirkung der Feuerwehr bedarf.
> [...]
> Die Feuerwehren sollen davon ausgehen können, dass bei ihrem Eintreffen die Räumung bereits durchgeführt ist.

und weiters

> **Hierfür kann bei komplexen Versammlungsstätten eine Evakuierungssimulation notwendig werden.**

Die einzelnen Bundesländer setzen nach und nach die MVStättV in Landesrecht um.
Eine [Liste der unterschiedlichen <abbr title="Versammlungsstättenverordnung">VStättV</abbr>s nach Bundesland](http://de.wikipedia.org/wiki/Versammlungsst%C3%A4ttenverordnung#Weblinks) ist in der Wikipedia zu finden.

Die wichtigsten von uns identifizierten Paragraphen der neuen MVStättV:

- <cite href="#MVStaettV">§ 6 Abs 5 Satz 2</cite>: <q>"Die nach § 7 Abs. 4 Satz 1 ermittelte Breite ist möglichst gleichmäßig auf die Ausgänge zu verteilen; die Mindestbreiten nach § 7 Abs. 4 Satz 3 und 4 bleiben unberührt."</q>

- <cite href="#MVStaettV">§ 42 Abs 1</cite>: <q>"Der Betreiber oder ein von ihm Beauftragter hat im Einvernehmen mit der Brandschutzdienststelle eine Brandschutzordnung und gegebenenfalls ein Räumungskonzept aufzustellen"</q>, u.a. falls <q>"die Maßnahmen, die im Gefahrenfall für eine schnelle und geordnete Räumung der gesamten Versammlungsstätte oder einzelner Bereiche unter besonderer Berücksichtigung von Menschen mit Behinderung erforderlich sind"</q> und die Versammlungsstätte mehr als 1000 Besucher fasst.

- <cite href="#MVStaettV">§ 42 Abs. 2</cite>: Die Unterweisung des Betriebspersonals über die Brandschutzordnung und <q>"bei einer sonstigen Gefahrenlage, gegebenenfalls in Verbindung mit dem Räumungskonzept"</q>

- <cite href="#MVStaettV">§ 44 Abs 1 Satz 2</cite>: Falls eine höhere Anzahl an Besuchern je m² Grundfläche als in §1 vorgesehen ist, so <q>"sind die schnelle und sichere Erreichbarkeit der Ausgänge ins Freie und die Möglichkeit zur Durchführung wirksamer Lösch- und Rettungsmaßnahmen gesondert darzustellen."</q>


## Herausforderungen statischer Berechnungen

- Es gibt keine Formel, die sowohl Ebene als auch Treppen berücksichtigen
kann
- Es gibt nicht DAS EINE Fundamentaldiagramm: Vielmehr ist es wichtig, dass
die Relation zunehmende Dichte vs. abnehmende Geschwindigkeit eingehalten
wird
- Wie kann man die Ungleichverteilung der Personen im Veranstaltungsgelände
berücksichtigen?
- Wie kann man erkennen, ob es sich an einem Fluchtweg mehr staut als an
anderen?
- Wie kann man Einsatzpläne für Sicherheitspersonal konzipieren bzw.
Personen gleichverteilen?
- Wie können die lt.§ 7 Absatz 4 geforderten Zwischenwerte bei den
Rettungswegbreiten miteinbezogen werden?


## Mehrwert Simulation Räumungskonzept

- Der Computer bildet durch passenden Input dynamische Entwicklungen ab -
ganz ohne Formel
- Es wird kein Fundamentaldiagramm benötigt, durch die gegenseitige
Beeinflussung der Agenten wird ganz automatisch das Abbremsen erzeugt
- Durch unterschiedliche Annahmen der Anfangsverteilung der Personen können
einfach unterschiedliche Szenarien betrachtet werden
- Simulationen liefern nicht nur per Knopfdruck Räumungszeiten, sie liefern
gleichzeitig die Verteilungen und Dichten der Personen auf dem
Veranstaltungsgelände während der gesamten Entluchtungsdauer
- Einfaches Variieren unterschiedlicher Fluchtwegsbreiten
- Überbeanspruchte Ausgänge können einfach identifiziert werden
- Schnelles Durchspielen unterschiedlicher Szenarien (z. B. versperrte
Ausgänge)


Quellen:

- <cite>[Bauministerkonferenz (ARGEBAU) Mustervorschriften und Mustererlasse](http://www.bauministerkonferenz.de/verzeichnis.aspx?id=991&o=759O986O991)</cite>
- <cite>[Thomas Waetke](http://schutt-waetke.de/fachanwalt-urheberrecht-medienrecht-thomas-waetke/): [Änderungen der MVStättVO im Anmarsch](http://www.eventfaq.de/10714-aenderungen-der-mvstaettvo-im-anmarsch/)</cite>

<!-- Abkürzungen: -->

*[MVStättV]: Musterversammlungsstättenverordnung
*[VStättV]: Versammlungsstättenverordnung
*[ARGEBAU]: Die deutsche Bauministerkonferenz

#meta#
pagetitle: Räumungskonzepte

![](/img/accurate-bild-start.jpg) {.fancyheader-img}
# *Räumungskonzepte nach (Muster-)&#8203;Versammlungs&shy;stätten&shy;verordnung* {.fancyheader}


In einem Räumungskonzept legt der Betreiber die notwendigen Berechnungen sowie die sich daraus ergebenden erforderlichen Maßnahmen und die Abläufe zu deren Umsetzung dar.
Dabei werden verschiedene Störungsszenarien zugrunde gelegt und deren Auswirkungen separat betrachtet.

![Deko Paragraph-Zeichen](img/paragraph.png) {.float-right}

Eins der Ziele ist die Ergründung der maximalen Anzahl zulässiger Gäste einer Veranstaltung beziehungsweise Veranstaltungsstätte.
Ein Räumungskonzept muss einen Nachweis über dessen Tragfähigkeit enthalten.

## Wie kann die Tragfähigkeit eines solchen Konzepts nachgewiesen werden?

Hat man es mit einer übersichtlichen Anzahl von Unterwiesenen zu tun - wie zum Beispiel Angestellte - können Räumungsübungen durchgeführt und so die benötigte Zeit ermittelt werden.

Manchmal ist dies jedoch nicht möglich, etwa weil es sich um eine einmalige Veranstaltung handelt.
Bei einer simplen Geometrie des Veranstaltungsgebäudes bzw. -geländes und einer homogenen Gästeliste kann mit Hilfe einfacher Formeln die Entfluchtungsdauer abgeschätzt werden.


## Herausforderungen von Berechnungen mittels Formeln

Es gibt eine Reihe von Formeln, die bei einfachen Fällen hinreichend gute Abschätzungen geben.
Diese Berechnungen können die Dynamik von Personenströmen jedoch nicht erfassen und haben eine Reihe von Nachteilen:

- Die Kombination von unterschiedlichen Geometrien (beispielweise Ebenen, Treppen, Lift) und das Miteinbeziehen ihrer gegenseitigen Beeinflussung ist nur schwer möglich
- Wie kann man die Ungleichverteilung der Personen im Veranstaltungsgelände berücksichtigen?
- Wie kann man erkennen, ob es sich an einem Fluchtweg mehr staut als an anderen?
- Wie können die lt. <cite href="MVStaettVO">§ 7 Absatz 4</cite> geforderten Zwischenwerte bei den Rettungswegbreiten miteinbezogen werden?
- Das *eine* bei statischen Berechnungen zugrunde liegende Fundamentaldiagramm existiert nicht: Vielmehr ist es wichtig, dass die Relation zunehmende Dichte vs. abnehmende Geschwindigkeit eingehalten wird.

Ist das Gelände unübersichtlich, die Räumungsszenarien komplex und/oder die Anzahl der Gäste groß, helfen statische Berechnungsverfahren nicht weiter.
Besonders bei größeren Veranstaltungen oder komplexen Geometrien bringen Simulationen einen großen Mehrwert - oder machen eine sichere Abschätzung überhaupt erst möglich.

## Mehrwert von Simulationen

- Der Computer bildet dynamische Entwicklungen ab - ganz ohne Formel
- Es wird kein Fundamentaldiagramm benötigt, durch die gegenseitige Beeinflussung der Agenten wird ganz automatisch das Abbremsen erzeugt
- Durch unterschiedliche Annahmen der räumlichen Verteilung der Personen können auf einfache Weise unterschiedliche Szenarien betrachtet werden
- Simulationen liefern nicht nur per Knopfdruck Räumungszeiten, sie liefern gleichzeitig die zu erwartenden Verteilungen und Dichten der Personen auf dem Veranstaltungsgelände während der gesamten Entluchtungsdauer
- Variieren Fluchtwegsbreiten ist sehr einfach möglich
- Überbeanspruchte Ausgänge können auf einen Blick identifiziert werden
- Schnelles Durchspielen unterschiedlicher Szenarien (wie zum Beispiel versperrte Ausgänge)


## Visualisierung der Ergebnisse

Ein weiterer Pluspunkt sind die aussagekräftigen Visualisierungen, die mittels Simulation erstellt werden können.

![Beispielvisualisierungen](img/raeumungskonzepte/combined.jpg "Beispielvisualisierungen")

## Hintergrund

Die neue <cite id="MVStaettVO">[Musterversammlungsstättenverordnung](http://www.bauministerkonferenz.de/IndexSearch.aspx?method=get&File=b8a84yy3y8b984808abb4yb8y9ya8ayyb9y884b94ya2a0a149aaa0a2ay49aaa0a3484b80b8y00tlswan1sun2g2ixhrm4yngi)</cite> (MVStättVO) verlangt für Versammlungsstätten, die für mehr als 1.000 Besucher bestimmt sind, die Aufstellung eines Räumungskonzepts.
Rechtsanwalt Thomas Waetke geht [hier](http://www.eventfaq.de/24614-wann-ist-ein-raeumungskonzept-erforderlich-und-was-muss-darin-enthalten-sein-teil-1/) näher auf die Kriterien ein.

Aus dem <cite>[Dokument zur Begründung der Änderungen](http://www.bauministerkonferenz.de/IndexSearch.aspx?method=get&File=b8a84yy3y8b984808abb4yb8y9ya8ayyb9y884b94ya2a0a149aaa4a0494b80b8y00tlswan1sun2g2ixhrm4yngi)</cite>:

> Versammlungsstätten sind so zu planen, zu errichten und zu betreiben, dass es für die Personenrettung in der Regel nicht der Mitwirkung der Feuerwehr bedarf.
> [...]
> Die Feuerwehren sollen davon ausgehen können, dass bei ihrem Eintreffen die Räumung bereits durchgeführt ist.

und weiter

> **Hierfür kann bei komplexen Versammlungsstätten eine Evakuierungssimulation notwendig werden.**

Die einzelnen Bundesländer setzen nach und nach die MVStättVO in Landesrecht um.
Eine [Liste der <abbr title="Versammlungsstättenverordnung">VStättV</abbr>s nach Bundesland](http://de.wikipedia.org/wiki/Versammlungsst%C3%A4ttenverordnung#Weblinks) ist in der Wikipedia zu finden.

Die wichtigsten von uns identifizierten Paragraphen der neuen MVStättVO:

- <cite href="#MVStaettVO">§ 6 Abs 5 Satz 2</cite>: <q>"Die nach § 7 Abs. 4 Satz 1 ermittelte Breite ist möglichst gleichmäßig auf die Ausgänge zu verteilen; die Mindestbreiten nach § 7 Abs. 4 Satz 3 und 4 bleiben unberührt."</q>

- <cite href="#MVStaettVO">§ 42 Abs 1</cite>: <q>"Der Betreiber oder ein von ihm Beauftragter hat im Einvernehmen mit der Brandschutzdienststelle eine Brandschutzordnung und gegebenenfalls ein Räumungskonzept aufzustellen"</q>, u.a. falls <q>"die Maßnahmen, die im Gefahrenfall für eine schnelle und geordnete Räumung der gesamten Versammlungsstätte oder einzelner Bereiche unter besonderer Berücksichtigung von Menschen mit Behinderung erforderlich sind"</q> und die Versammlungsstätte mehr als 1000 Besucher fasst.

- <cite href="#MVStaettVO">§ 42 Abs. 2</cite>: Die Unterweisung des Betriebspersonals über die Brandschutzordnung und <q>"bei einer sonstigen Gefahrenlage, gegebenenfalls in Verbindung mit dem Räumungskonzept"</q>

- <cite href="#MVStaettVO">§ 44 Abs 1 Satz 2</cite>: Falls eine höhere Anzahl an Besuchern je m² Grundfläche als in §1 vorgesehen ist, so <q>"sind die schnelle und sichere Erreichbarkeit der Ausgänge ins Freie und die Möglichkeit zur Durchführung wirksamer Lösch- und Rettungsmaßnahmen gesondert darzustellen."</q>


Quellen:

- <cite>[Bauministerkonferenz (ARGEBAU) Mustervorschriften und Mustererlasse](http://www.bauministerkonferenz.de/verzeichnis.aspx?id=991&o=759O986O991)</cite>
- <cite>[Thomas Waetke](http://schutt-waetke.de/fachanwalt-urheberrecht-medienrecht-thomas-waetke/): [Änderungen der MVStättVO im Anmarsch](http://www.eventfaq.de/10714-aenderungen-der-mvstaettvo-im-anmarsch/)</cite>

<!-- Abkürzungen: -->

*[MVStättVO]: Musterversammlungsstättenverordnung
*[VStättV]: Versammlungsstättenverordnung
*[ARGEBAU]: Die deutsche Bauministerkonferenz

#meta#
pagetitle: Räumungskonzepte
description: accu:rate bietet Sicherheitsnachweise für Räumungskonzepte nach MVStättVO durch Simulation und Analyse von Fußgängerströmen.


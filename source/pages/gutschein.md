
# Supergeheime Gutscheinseite

Das Formular ist noch nicht fertig.  Wir arbeiten momentan noch mit Hochdruck an unserem Angebot, und können frühestesn:

<!-- Formular:
* Name
* Firma
* Kontaktdaten
* Gutschein woher
* Wann
-->

<h1>Beispielformular</h1>
<form action="" method="post">
<!-- Hier die eigentlichen Formularfelder eintragen. Die folgenden sind Beispielangaben. -->
<dl>
<dt>Ihr Name:</dt>
<dd><input type="text" name="Versender" /></dd>
<dt>Ihre E-Mail:</dt>
<dd><input type="text" name="E-Mail" /></dd>
<dt>Sie können:</dt>
<dd><input type="checkbox" name="kannwas[]" value="HTML" />HTML <input type="checkbox" name="kannwas[]" value="PHP" />PHP</dd>
<dt>Sie sind:</dt>
<dd><input type="radio" name="sexus" value="M" />Mann <input type="radio" name="sexus" value="Frau" />Frau</dd>
<dt>Sie mögen:</dt>
<dd><select name="Browser"><option value="Opera">Opera</option><option value="Mozilla">Mozilla</option></select></dd>
<dt>Bemerkungen:</dt>
<dd><textarea name="Bemerkungen" rows="3" cols="20">Bemerkungen</textarea></dd>
</dl>
<!-- Ende der Beispielangaben -->
<p>
<input type="submit" value="Senden" />
<input type="reset" value="Zurücksetzen" />
</p>
</form>

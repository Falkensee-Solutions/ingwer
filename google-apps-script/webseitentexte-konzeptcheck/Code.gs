/*
 * Konzeptcheck für „Webseitentexte zur Überarbeitung“ in Google Docs.
 *
 * Standardmodus: echte, an Textbereiche gebundene Google-Docs-Kommentare.
 *
 * Voraussetzung ist die Freischaltung des verwendeten Workspace-Kontos UND
 * Google-Cloud-Projekts für die Google Workspace Developer Preview.
 * Nur das Aktivieren von Drive API und Docs API genügt nicht.
 */

const CONFIG = Object.freeze({
  // "ANNOTATIONS" oder "NATIVE_COMMENTS_PREVIEW"
  mode: "NATIVE_COMMENTS_PREVIEW",
  heading: "Redaktionelle Hinweise aus dem Konzepthandbuch",
  markerColor: "#FFF2CC",
  noteHeadingColor: "#7A2E1D",
  addPriorityToComment: true,
  dryRun: false,
});

const REVIEW_COMMENTS = [
  {
    anchor: "in Kooperation mit EKBO, Erzbistum Berlin und House of One",
    occurrence: 1,
    priority: "hoch",
    page: "Global",
    comment: "Den aktuellen formalen Status der Organisationen prüfen und zwischen Trägerschaft, Kooperation und fachlicher Unterstützung unterscheiden. Das Konzepthandbuch benennt Forum Dialog e.V. als Träger und erwähnt EKBO sowie Erzbistum Berlin als mögliche institutionelle bzw. theologische Unterstützung; House of One wird dort nicht genannt.",
  },
  {
    anchor: "Menschen unterschiedlicher religiöser und weltanschaulicher Hintergründe",
    priority: "hoch",
    page: "Startseite",
    comment: "Auf die im Konzepthandbuch beschriebene Hauptzielgruppe zuschneiden: vor allem junge Volljährige, die sich selbst als religiös verstehen oder im Umfeld einer religiösen Gemeinschaft aktiv sind. Eine Öffnung für weitere weltanschauliche Gruppen sollte als Anpassung oder Entwicklungsperspektive gekennzeichnet werden.",
  },
  {
    anchor: "gemeinsames Arbeiten an Werkstattprodukten",
    priority: "hoch",
    page: "Startseite",
    comment: "Nicht als zwingendes Kernelement darstellen. Das Konzepthandbuch beschreibt den Werkstatttag ausdrücklich als empfohlene und anpassbare Option. Vorschlag: „je nach Ausgestaltung gemeinsames kreatives oder praktisches Arbeiten“.",
  },
  {
    anchor: "Sie ist ein gemeinsamer Erfahrungsraum.",
    priority: "mittel",
    page: "Startseite",
    comment: "Konkretisieren, wodurch dieser Erfahrungsraum entsteht: mehrtägige gemeinsame Zeit, informeller Alltag, religiöse Praxis, Dialog, Wissensvermittlung und Reflexion. Das Handbuch verbindet ausdrücklich erfahrungsorientierte und wissensvermittelnde Elemente.",
  },
  {
    anchor: "Begegnung beginnt da, wo Menschen einander beim Beten, Essen und Schweigen erleben dürfen.",
    priority: "mittel",
    page: "Startseite",
    comment: "Dieser Wortlaut steht nicht im Konzepthandbuch. Entweder ohne Anführungszeichen als redaktionellen Leitsatz formulieren oder durch ein belegtes Zitat aus der Evaluation ersetzen, etwa „Je mehr Menschen du kennst, desto besser kennst du dich selbst.“.",
  },
  {
    anchor: "Die drei Kerninhalte des Formats",
    occurrence: 1,
    priority: "hoch",
    page: "Startseite",
    comment: "Besser „Drei prägende Merkmale“ nennen. Mehrtägigkeit und Unterkunft sind Rahmenmerkmale, keine Inhalte. Das Handbuch nennt außerdem Dialog, Reflexion, vorbereitende Workshops, Gotteshausbesuche und gemeinsame Aktivitäten als wesentliche Bestandteile.",
  },
  {
    anchor: "Das Teilen eines Zimmers schafft einen privaten und vertrauensvollen Rahmen.",
    priority: "hoch",
    page: "Startseite",
    comment: "Neutraler und schutzsensibler formulieren: Interreligiös belegte Zimmer können informelle Begegnungen ermöglichen, müssen aber behutsam vorbereitet und an persönliche, religiöse und geschlechtsspezifische Bedürfnisse angepasst werden.",
  },
  {
    anchor: "Alle Werkstätten folgen einem gemeinsamen Regelwerk.",
    priority: "hoch",
    page: "Startseite",
    comment: "Zwischen verbindlichen Grundsätzen und anpassbarer Ausgestaltung unterscheiden. Laut Handbuch können Regeln mit der jeweiligen Gruppe besprochen und ergänzt werden; verbindlich bleiben insbesondere respektvoller Umgang, Schutz vor Abwertung und der Verzicht auf aktive Bekehrungsversuche.",
  },
  {
    anchor: "Wir begleiten Planung, Workshops, Methoden und Durchführung gemeinsam mit Ihnen.",
    priority: "mittel",
    page: "Startseite",
    comment: "Den Umfang der tatsächlich verfügbaren Begleitung präzisieren. Das Handbuch ist zunächst ein Orientierungsmodell für eigenständig planende Gemeinden und Institutionen und verspricht keine vollständige operative Begleitung jeder Durchführung.",
  },
  {
    anchor: "lernen wir Religionen kennen",
    priority: "hoch",
    page: "Konzept",
    comment: "Durch „lernen wir persönliche religiöse Perspektiven und Formen gelebter Praxis kennen“ ersetzen. Das Handbuch betont, dass Teilnehmende aus eigener Erfahrung und nicht stellvertretend für eine gesamte Religion sprechen.",
  },
  {
    anchor: "weniger abstrakt, persönlicher und nachhaltiger",
    priority: "mittel",
    page: "Konzept",
    comment: "„Nachhaltiger“ ist durch die bisherige Evaluation nicht langfristig belegt. Vorsichtiger formulieren, zum Beispiel: „weniger abstrakt, persönlicher und langfristig anschlussfähig“.",
  },
  {
    anchor: "Konfessionslose Menschen sind willkommen.",
    priority: "hoch",
    page: "Konzept",
    comment: "Für das im Handbuch beschriebene Grundmodell präzisieren: Es setzt religiös positionierte Teilnehmende und die Bereitschaft voraus, über den eigenen Glauben zu sprechen. Eine Teilnahme konfessionsloser Personen kann bei angepassten Formaten möglich sein, soll aber die interreligiöse Zusammensetzung nicht ersetzen.",
  },
  {
    anchor: "als allein gültigen Maßstab für alle zu setzen",
    priority: "hoch",
    page: "Konzept",
    comment: "Näher am Handbuch formulieren: Eigene Wahrheitsüberzeugungen dürfen offen benannt werden; nicht erlaubt sind Druck, Abwertung und aktive Bekehrungsversuche. Das Handbuch untersagt nicht religiöse Wahrheitsansprüche als solche.",
  },
  {
    anchor: "Teilnehmende nehmen aus der Werkstatt mit:",
    priority: "mittel",
    page: "Konzept",
    comment: "Als angestrebte oder im Pilotprojekt beobachtete mögliche Wirkungen kennzeichnen. Ein einzelner Pilotdurchlauf belegt nicht, dass alle aufgeführten Ergebnisse bei allen Teilnehmenden eintreten.",
  },
  {
    anchor: "Das Konzepthandbuch beschreibt die Werkstatt als Format, das über Gemeinden, Schulen, Hochschulen, Ausbildungsinstitutionen und Träger organisiert werden kann.",
    priority: "hoch",
    page: "Konzept",
    comment: "Sachlich trennen: Das Handbuch beschreibt ein gemeindeorientiertes Grundmodell. Übertragungen auf Schulen, Hochschulen und Ausbildungsinstitutionen sind Anpassungen bzw. Weiterentwicklungen und werden dort nicht als vollständige Formatvarianten ausgearbeitet.",
  },
  {
    anchor: "Die Interreligiöse Werkstatt ist modular gedacht.",
    priority: "hoch",
    page: "Formate",
    comment: "Als Weiterentwicklung kennzeichnen. Näher am Handbuch: „Das gemeindeorientierte Grundmodell kann an unterschiedliche Zielgruppen, Orte und zeitliche Rahmen angepasst werden.“ Ein fertiges modulares System aus vier institutionellen Formaten beschreibt das Handbuch nicht.",
  },
  {
    anchor: "akademisch reflektierten Erfahrungsraum",
    priority: "hoch",
    page: "Universitäten",
    comment: "Als hochschulspezifische Adaption und nicht als Wesensmerkmal des Grundmodells kennzeichnen. Das Handbuch betont für den Pilotansatz ausdrücklich, dass anspruchsvoll, aber nicht zwangsläufig akademisch diskutiert werden soll.",
  },
  {
    anchor: "ECTS möglich (institutionsspezifisch).",
    priority: "mittel",
    page: "Universitäten",
    comment: "Nur nach konkreter Vereinbarung mit einer Hochschule veröffentlichen. Vorschlag: „Eine Anerkennung oder Vergabe von ECTS muss mit der jeweiligen Hochschule vereinbart werden.“ Das Handbuch enthält hierzu keine Zusage.",
  },
  {
    anchor: "Für Oberstufen, Religions- und Ethikkurse",
    occurrence: 3,
    priority: "hoch",
    page: "Schulen",
    comment: "Bereits im Kurztext darauf hinweisen, dass das Grundmodell Volljährige vorsieht. Für Minderjährige verlangt das Handbuch ausdrücklich ein gesondertes Schutz-, Aufsichts- und Unterbringungskonzept.",
  },
  {
    anchor: "weltanschaulich vielfältige Schulen",
    priority: "hoch",
    page: "Schulen",
    comment: "Erklären, wie bei dieser Zielgruppe mehrere religiöse Perspektiven und sichtbare Glaubenspraxis gesichert werden. Andernfalls als noch zu entwickelnde Variante kennzeichnen; das Grundmodell setzt religiös positionierte Teilnehmende voraus.",
  },
  {
    anchor: "religiöse und weltanschauliche Vielfalt im Berufsalltag",
    priority: "hoch",
    page: "Ausbildung",
    comment: "Als spezifisches Ziel eines neu entwickelten Ausbildungsformats kennzeichnen, nicht als Aussage aus dem Konzepthandbuch. Das Handbuch fokussiert interreligiöse Begegnung, religiöse Selbstreflexion und Beziehungen zwischen Gemeinden.",
  },
  {
    anchor: "Format wird wissenschaftlich begleitet",
    priority: "hoch",
    page: "Ausbildung",
    comment: "Nur für konkret bestätigte Vorhaben verwenden und Zuständigkeit sowie Umfang nennen. Das Handbuch beschreibt interne Evaluation und Teilnehmendenfeedback, aber keine allgemeine wissenschaftliche Begleitung.",
  },
  {
    anchor: "Junge Menschen als Dialogbotschafter:innen stärken",
    priority: "mittel",
    page: "Gemeinden",
    comment: "Entweder als neues Programmziel kennzeichnen oder näher am Handbuch formulieren: Dialogkompetenz entwickeln und langfristige Beziehungen zwischen Gemeinden fördern. Eine definierte Rolle als „Dialogbotschafter:in“ enthält das Handbuch nicht.",
  },
  {
    anchor: "Gemeinsame Gebete, Stille und kreative Werkstattphasen",
    priority: "hoch",
    page: "Gemeinden",
    comment: "Freiwilligkeit ergänzen. Das Handbuch bewertet gemeinsame Gebetserfahrungen positiv, hält aber verbindlich fest, dass niemand zu religiösen Handlungen gedrängt werden darf.",
  },
  {
    anchor: "Geeignet sind junge Erwachsene, Jugendgruppen, Studierende, Gemeindemitglieder und interessierte Gruppen.",
    priority: "hoch",
    page: "Teilnehmen",
    comment: "Die Kriterien des Grundmodells ergänzen: in der Regel 18 bis 35 Jahre, religiöses Selbstverständnis oder Nähe zu einer religiösen Gemeinschaft sowie Bereitschaft, über eigene Glaubenserfahrungen zu sprechen. Abweichende Zielgruppen sollten formatspezifisch erklärt werden.",
  },
  {
    anchor: "Wichtig sind Neugier, Verbindlichkeit, Respekt vor religiöser Praxis",
    priority: "mittel",
    page: "Teilnehmen",
    comment: "Um vollständige Teilnahme, Bereitschaft zum Zuhören, Einhaltung der Dialogregeln und das Sprechen aus der eigenen Perspektive ergänzen. Diese Voraussetzungen nennt das Handbuch ausdrücklich.",
  },
  {
    anchor: "Interesse zeigen und passenden Rahmen klären",
    priority: "hoch",
    page: "Teilnehmen",
    comment: "Im Teilnahmeweg einen eigenen Schritt für vorbereitende Workshops oder eine vergleichbare inhaltliche Vorbereitung ergänzen. Im Handbuch bilden diese Workshops den Auftakt und bauen Wissen, Sprachfähigkeit und Unsicherheiten vor der Begegnung auf bzw. ab.",
  },
  {
    anchor: "Koordinierungsgruppe bilden",
    priority: "hoch",
    page: "Mitorganisieren",
    comment: "Terminologie an das Handbuch angleichen und zwei Rollen unterscheiden: ein optionales fachlich-theologisches Begleitteam berät; das operative Organisationsteam plant und führt die Werkstatt durch.",
  },
  {
    anchor: "Gerade die erste Werkstatt braucht Geduld:",
    priority: "mittel",
    page: "Mitorganisieren",
    comment: "Konkrete Orientierung ergänzen: Für die erste Durchführung empfiehlt das Handbuch neun bis zwölf Monate Vorlauf; bei neuen Kontakten zu muslimischen Gemeinden möglichst mindestens ein halbes Jahr für Kennenlernen und Vertrauensaufbau.",
  },
  {
    anchor: "Zugang zu evangelischen, katholischen und muslimischen Ansprechpartner:innen",
    occurrence: 1,
    priority: "hoch",
    page: "Mitorganisieren",
    comment: "Nur als garantiertes Angebot formulieren, wenn die Kapazitäten bestehen. Sonst besser: „Unterstützung bei der Suche nach geeigneten Ansprechpartner:innen und lokalen Netzwerken“. Das Handbuch beschreibt diese Kontaktarbeit als zeitaufwendig und beziehungsabhängig.",
  },
  {
    anchor: "Eine reine Tagesveranstaltung ist kein Werkstattformat.",
    occurrence: 1,
    priority: "hoch",
    page: "Mitorganisieren",
    comment: "Weniger absolut formulieren. Das mehrtägige Format mit Übernachtung ist das empfohlene Grundmodell; der Anhang des Handbuchs erlaubt ausdrücklich kürzere angepasste Formen, sofern genug Raum für Begegnung, religiöse Praxis und gemeinsame Aktivitäten bleibt.",
  },
  {
    anchor: "ist Voraussetzung, nicht Verhandlungssache.",
    occurrence: 1,
    priority: "hoch",
    page: "Mitorganisieren",
    comment: "Zwischen verbindlichen Grundsätzen und anpassbarer Regelfassung unterscheiden. Respekt, Schutz vor Abwertung und Verzicht auf aktive Bekehrungsversuche sind verbindlich; weitere Regeln können gemeinsam besprochen und ergänzt werden.",
  },
  {
    anchor: "vier Trägern aus christlichen, muslimischen und interreligiösen Kontexten",
    priority: "hoch",
    page: "Über uns",
    comment: "In „einem Träger und drei Kooperationspartnern“ ändern, sofern dies dem aktuellen formalen Stand entspricht. Die Website selbst und das Handbuch bezeichnen Forum Dialog e.V. als Träger; die übrigen Organisationen dürfen nicht pauschal ebenfalls Träger genannt werden.",
  },
  {
    anchor: "Team innerhalb von Forum Dialog e.V.",
    priority: "mittel",
    page: "Über uns",
    comment: "Prüfen, ob alle genannten Personen organisatorisch Forum Dialog e.V. zugeordnet sind. Andernfalls neutraler: „interreligiös zusammengesetztes Projekt- und Konzeptteam unter Trägerschaft von Forum Dialog e.V.“.",
  },
  {
    anchor: "unterstützt das Projekt mit evangelischer Perspektive",
    priority: "hoch",
    page: "Partner",
    comment: "Die konkrete Rolle gegen aktuelle Kooperationsvereinbarungen prüfen. Das Handbuch erwähnt EKBO und Erzbistum Berlin als mögliche institutionelle bzw. theologische Unterstützung, legt aber keine dauerhafte Aufgabenverteilung fest.",
  },
  {
    anchor: "bringt Erfahrung, Symbolkraft und muslimisch-interreligiöse Perspektiven",
    priority: "hoch",
    page: "Partner",
    comment: "Belegen oder neutraler formulieren. House of One wird im maßgeblichen Konzepthandbuch nicht genannt; „Symbolkraft“ ist außerdem werblich und beschreibt keine überprüfbare Projektaufgabe.",
  },
];

function onOpen() {
  DocumentApp.getUi()
    .createMenu("Konzeptcheck")
    .addItem("Preview-Zugriff testen", "testNativeCommentAccess")
    .addItem("Prüflauf anzeigen", "showReviewSummary")
    .addItem("Hinweise einfügen", "applyConceptReview")
    .addSeparator()
    .addItem("Erzeugte Anmerkungen entfernen", "removeGeneratedAnnotations")
    .addToUi();
}

function testNativeCommentAccess() {
  const documentId = DocumentApp.getActiveDocument().getId();
  try {
    const docJson = fetchDocsJson_(documentId);
    const commentState = docJson.commentUpdateState || "nicht zurückgegeben";
    DocumentApp.getUi().alert(
      "Docs API erreichbar",
      "Das Dokument konnte über das verknüpfte Cloud-Projekt gelesen werden. " +
        "Kommentarstatus: " + commentState + ".\n\n" +
        "Der endgültige Nachweis für InsertCommentRequest erfolgt beim Einfügen der Kommentare.",
      DocumentApp.getUi().ButtonSet.OK
    );
  } catch (error) {
    DocumentApp.getUi().alert(
      "Kein Preview-Zugriff",
      explainPreviewError_(error),
      DocumentApp.getUi().ButtonSet.OK
    );
  }
}

function showReviewSummary() {
  const doc = DocumentApp.getActiveDocument();
  const body = getPrimaryBody_(doc);
  const result = inspectAnchors_(body);
  const message = [
    REVIEW_COMMENTS.length + " Hinweise definiert.",
    result.found + " Textanker gefunden.",
    result.missing.length + " Textanker fehlen.",
    result.duplicates.length + " Textanker kommen mehrfach vor.",
    "",
    result.missing.length ? "Fehlend:\n- " + result.missing.join("\n- ") : "Alle Textanker wurden gefunden.",
  ].join("\n");
  DocumentApp.getUi().alert("Konzeptcheck – Prüflauf", message, DocumentApp.getUi().ButtonSet.OK);
}

function applyConceptReview() {
  const ui = DocumentApp.getUi();
  const confirmation = ui.alert(
    "Konzeptcheck anwenden?",
    CONFIG.mode === "NATIVE_COMMENTS_PREVIEW"
      ? "Es werden native Kommentare über die Google Docs API Developer Preview angelegt."
      : "Betroffene Textstellen werden markiert und nummerierte Anmerkungen am Dokumentende ergänzt.",
    ui.ButtonSet.OK_CANCEL
  );
  if (confirmation !== ui.Button.OK) return;

  if (CONFIG.mode === "NATIVE_COMMENTS_PREVIEW") {
    applyNativeCommentsPreview_();
  } else {
    applyAnnotations_();
  }
}

function applyAnnotations_() {
  const doc = DocumentApp.getActiveDocument();
  const body = getPrimaryBody_(doc);
  const inspection = inspectAnchors_(body);

  if (inspection.duplicates.length) {
    throw new Error("Abbruch: Mehrdeutige Textanker:\n- " + inspection.duplicates.join("\n- "));
  }

  if (CONFIG.dryRun) {
    DocumentApp.getUi().alert("Trockenlauf: " + inspection.found + " von " + REVIEW_COMMENTS.length + " Ankern gefunden.");
    return;
  }

  const applied = [];
  REVIEW_COMMENTS.forEach(function (item, index) {
    const hit = selectHit_(findAll_(body, item.anchor), item);
    if (!hit) return;

    hit.element.setBackgroundColor(hit.start, hit.end, CONFIG.markerColor);
    hit.element.setBold(hit.start, hit.end, true);
    applied.push({ number: index + 1, item: item });
  });

  appendAnnotations_(body, applied, inspection.missing);
  doc.saveAndClose();

  DocumentApp.getUi().alert(
    "Konzeptcheck abgeschlossen",
    applied.length + " Hinweise eingefügt; " + inspection.missing.length + " Textanker nicht gefunden.",
    DocumentApp.getUi().ButtonSet.OK
  );
}

function appendAnnotations_(body, applied, missing) {
  body.appendPageBreak();
  const heading = body.appendParagraph(CONFIG.heading);
  heading.setHeading(DocumentApp.ParagraphHeading.HEADING1);
  heading.setForegroundColor(CONFIG.noteHeadingColor);

  body.appendParagraph(
    "Grundlage: Vergleich der Webseitentexte mit dem aktuelleren Konzepthandbuch. " +
      "Die Nummern beziehen sich auf die gelb markierten Textstellen."
  ).setItalic(true);

  applied.forEach(function (entry) {
    const item = entry.item;
    const title = "[K" + entry.number + "] " + item.page + " – Priorität " + item.priority;
    body.appendParagraph(title).setHeading(DocumentApp.ParagraphHeading.HEADING2);
    body.appendParagraph("Textstelle: „" + item.anchor + "“").setItalic(true);
    body.appendParagraph(item.comment);
  });

  if (missing.length) {
    body.appendParagraph("Nicht gefundene Textanker").setHeading(DocumentApp.ParagraphHeading.HEADING2);
    body.appendParagraph(
      "Diese Hinweise wurden nicht eingefügt. Vermutlich wurde der Text im Google Doc bereits verändert:"
    );
    missing.forEach(function (anchor) {
      body.appendListItem(anchor).setGlyphType(DocumentApp.GlyphType.BULLET);
    });
  }
}

function removeGeneratedAnnotations() {
  const doc = DocumentApp.getActiveDocument();
  const body = getPrimaryBody_(doc);
  const paragraphs = body.getParagraphs();
  let startIndex = -1;

  for (let i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i].getText() === CONFIG.heading) {
      startIndex = body.getChildIndex(paragraphs[i]);
      if (
        startIndex > 0 &&
        body.getChild(startIndex - 1).getType() === DocumentApp.ElementType.PAGE_BREAK
      ) {
        startIndex--;
      }
      break;
    }
  }

  if (startIndex === -1) {
    DocumentApp.getUi().alert("Kein erzeugter Anmerkungsabschnitt gefunden.");
    return;
  }

  for (let i = body.getNumChildren() - 1; i >= startIndex; i--) {
    body.removeChild(body.getChild(i));
  }

  // Markierungen anhand der bekannten Anker zurücksetzen.
  REVIEW_COMMENTS.forEach(function (item) {
    findAll_(body, item.anchor).forEach(function (hit) {
      hit.element.setBackgroundColor(hit.start, hit.end, null);
      hit.element.setBold(hit.start, hit.end, false);
    });
  });

  doc.saveAndClose();
  DocumentApp.getUi().alert("Erzeugte Anmerkungen und Markierungen wurden entfernt.");
}

function inspectAnchors_(body) {
  const missing = [];
  const duplicates = [];
  let found = 0;

  REVIEW_COMMENTS.forEach(function (item) {
    const hits = findAll_(body, item.anchor);
    const selected = selectHit_(hits, item);
    if (!selected) missing.push(item.anchor);
    else {
      found++;
      if (hits.length > 1 && !item.occurrence) duplicates.push(item.anchor);
    }
  });

  return { found: found, missing: missing, duplicates: duplicates };
}

function findAll_(body, literalText) {
  const pattern = escapeRegex_(literalText);
  const hits = [];
  let range = null;

  while ((range = body.findText(pattern, range))) {
    const element = range.getElement();
    if (element.getType() !== DocumentApp.ElementType.TEXT) continue;
    hits.push({
      element: element.asText(),
      start: range.getStartOffset(),
      end: range.getEndOffsetInclusive(),
    });
  }
  return hits;
}

function selectHit_(hits, item) {
  const occurrence = item.occurrence || 1;
  return hits[occurrence - 1] || null;
}

function escapeRegex_(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getPrimaryBody_(doc) {
  // Das Skript bearbeitet den ersten Tab. Die hochgeladene Markdown-Datei
  // sollte sich vollständig in diesem Tab befinden.
  const tabs = doc.getTabs ? doc.getTabs() : [];
  if (tabs.length) return tabs[0].asDocumentTab().getBody();
  return doc.getBody();
}

/*
 * Developer-Preview-Modus für echte, textgebundene Google-Docs-Kommentare.
 * Voraussetzungen:
 *   1. Workspace und Cloud-Projekt sind für die Docs API Developer Preview registriert.
 *   2. appsscript.json enthält die mitgelieferten OAuth-Scopes.
 *   3. CONFIG.mode === "NATIVE_COMMENTS_PREVIEW".
 */
function applyNativeCommentsPreview_() {
  const documentId = DocumentApp.getActiveDocument().getId();
  const docJson = fetchDocsJson_(documentId);
  const searchableTabs = buildSearchableTabs_(docJson);
  const requests = [];
  const missing = [];
  const duplicates = [];

  REVIEW_COMMENTS.forEach(function (item) {
    const matches = [];
    searchableTabs.forEach(function (tab) {
      let offset = tab.text.indexOf(item.anchor);
      while (offset !== -1) {
        matches.push({
          startIndex: tab.indexMap[offset],
          endIndex: tab.indexMap[offset + item.anchor.length - 1] + 1,
          tabId: tab.tabId,
        });
        offset = tab.text.indexOf(item.anchor, offset + 1);
      }
    });

    if (matches.length === 0) {
      missing.push(item.anchor);
      return;
    }
    if (matches.length > 1 && !item.occurrence) {
      duplicates.push(item.anchor);
      return;
    }

    const match = matches[(item.occurrence || 1) - 1];
    if (!match) {
      missing.push(item.anchor);
      return;
    }
    const range = { startIndex: match.startIndex, endIndex: match.endIndex };
    if (match.tabId) range.tabId = match.tabId;
    requests.push({
      insertComment: {
        content: formatComment_(item),
        range: range,
      },
    });
  });

  if (duplicates.length) {
    throw new Error("Abbruch: Mehrdeutige Textanker:\n- " + duplicates.join("\n- "));
  }
  if (!requests.length) {
    throw new Error("Keine Textanker gefunden; es wurden keine Kommentare angelegt.");
  }
  if (CONFIG.dryRun) {
    DocumentApp.getUi().alert("Trockenlauf: " + requests.length + " native Kommentare vorbereitet.");
    return;
  }

  const url = "https://docs.googleapis.com/v1/documents/" + encodeURIComponent(documentId) + ":batchUpdate";
  const response = UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    headers: { Authorization: "Bearer " + ScriptApp.getOAuthToken() },
    payload: JSON.stringify({
      requests: requests,
      writeControl: { requiredRevisionId: docJson.revisionId },
    }),
    muteHttpExceptions: true,
  });

  if (response.getResponseCode() < 200 || response.getResponseCode() >= 300) {
    throw new Error(
      "Docs API Fehler " + response.getResponseCode() + ":\n" +
        response.getContentText() + "\n\n" + previewSetupHint_()
    );
  }

  const result = JSON.parse(response.getContentText());
  const updateState = result.commentUpdateState || "nicht zurückgegeben";

  DocumentApp.getUi().alert(
    requests.length + " native Kommentare angelegt; " + missing.length +
      " Textanker nicht gefunden. Kommentarstatus: " + updateState + "."
  );
}

function fetchDocsJson_(documentId) {
  const url =
    "https://docs.googleapis.com/v1/documents/" +
    encodeURIComponent(documentId) +
    "?includeTabsContent=true&suggestionsViewMode=SUGGESTIONS_INLINE";
  const response = UrlFetchApp.fetch(url, {
    method: "get",
    headers: { Authorization: "Bearer " + ScriptApp.getOAuthToken() },
    muteHttpExceptions: true,
  });
  if (response.getResponseCode() !== 200) {
    throw new Error("Dokument konnte nicht über die Docs API gelesen werden:\n" + response.getContentText());
  }
  return JSON.parse(response.getContentText());
}

function collectTextRuns_(docJson) {
  const runs = [];
  const tabs = docJson.tabs || [];

  if (tabs.length) {
    tabs.forEach(function (tab) {
      collectTabRuns_(tab, runs);
    });
  } else if (docJson.body && docJson.body.content) {
    collectStructuralRuns_(docJson.body.content, null, runs);
  }
  return runs;
}

function buildSearchableTabs_(docJson) {
  const runs = collectTextRuns_(docJson);
  const byTab = {};

  runs.forEach(function (run) {
    const key = run.tabId || "__FIRST_TAB__";
    if (!byTab[key]) {
      byTab[key] = { tabId: run.tabId, text: "", indexMap: [] };
    }
    const target = byTab[key];
    for (let i = 0; i < run.text.length; i++) {
      target.text += run.text[i];
      target.indexMap.push(run.startIndex + i);
    }
  });

  return Object.keys(byTab).map(function (key) {
    return byTab[key];
  });
}

function collectTabRuns_(tab, runs) {
  const tabId = tab.tabProperties && tab.tabProperties.tabId;
  if (tab.documentTab && tab.documentTab.body) {
    collectStructuralRuns_(tab.documentTab.body.content || [], tabId, runs);
  }
  (tab.childTabs || []).forEach(function (child) {
    collectTabRuns_(child, runs);
  });
}

function collectStructuralRuns_(content, tabId, runs) {
  (content || []).forEach(function (element) {
    if (element.paragraph) {
      (element.paragraph.elements || []).forEach(function (paragraphElement) {
        if (paragraphElement.textRun && paragraphElement.textRun.content) {
          runs.push({
            text: paragraphElement.textRun.content,
            startIndex: paragraphElement.startIndex,
            endIndex: paragraphElement.endIndex,
            tabId: tabId,
          });
        }
      });
    }
    if (element.table) {
      (element.table.tableRows || []).forEach(function (row) {
        (row.tableCells || []).forEach(function (cell) {
          collectStructuralRuns_(cell.content || [], tabId, runs);
        });
      });
    }
    if (element.tableOfContents) {
      collectStructuralRuns_(element.tableOfContents.content || [], tabId, runs);
    }
  });
}

function formatComment_(item) {
  const prefix = CONFIG.addPriorityToComment
    ? "[Konzeptcheck · Priorität " + item.priority + "]\n"
    : "[Konzeptcheck]\n";
  return prefix + item.comment;
}

function explainPreviewError_(error) {
  return String(error && error.message ? error.message : error) + "\n\n" + previewSetupHint_();
}

function previewSetupHint_() {
  return [
    "Für echte, textgebundene Kommentare müssen erfüllt sein:",
    "1. Apps Script ist über die Projektnummer mit dem eigenen Cloud-Projekt verknüpft.",
    "2. Google Docs API ist in diesem Cloud-Projekt aktiviert.",
    "3. Das verwendete Workspace-Konto und genau dieses Cloud-Projekt sind für das Google Workspace Developer Preview Program registriert.",
    "4. Das Dokument ist ein natives Google-Dokument und das ausführende Konto besitzt Kommentar- oder Bearbeitungsrechte.",
    "",
    "Die Drive API mit eigenem anchor-JSON ist kein Ersatz: Google Docs zeigt solche Drive-Kommentare laut offizieller Dokumentation unverankert an.",
  ].join("\n");
}

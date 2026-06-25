export type ServiceDetail = {
  label: string;
  val: string;
};

export type Service = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  fullDesc: string;
  icon: "battery" | "screen" | "thermal";
  details: ServiceDetail[];
};

export const services: Service[] = [
  {
    id: "batteribytte",
    tag: "Batteri",
    title: "Batteribytte",
    desc: "Mister enheten lading raskt? Vi bytter batteri på telefoner, nettbrett og bærbare PC-er med OEM-kvalitetskomponenter.",
    fullDesc:
      "Et utslitt batteri er den vanligste årsaken til at en ellers god enhet føles ubrukelig. Vi bytter batteri på de fleste telefoner, nettbrett og bærbare PC-er. Alle batterier er OEM-kvalitet eller bedre, og vi tester kapasitet og ladeytelse både før og etter bytte.",
    icon: "battery",
    details: [
      { label: "Behandlingstid", val: "Samme dag (1–3 timer)" },
      { label: "Garanti", val: "2 år på deler" },
      { label: "Enheter", val: "Telefoner, nettbrett, bærbare" },
      { label: "Startpris", val: "fra kr 499" },
    ],
  },
  {
    id: "skjermbytte",
    tag: "Skjerm",
    title: "Skjermbytte",
    desc: "Knust skjerm eller dårlig bilde? Vi monterer OEM-skjermer med kalibrert fargebalanse for telefoner, nettbrett og bærbare.",
    fullDesc:
      "Knust glass, døde piksler eller dårlig berøringsfølsomhet — vi fikser det. Vi bruker OEM-skjermer med kalibrert fargebalanse, og tester lysstyrke, farger og berøring grundig etter montering. Tilgjengelig for de fleste iPhone-, Samsung-, iPad- og bærbare PC-modeller.",
    icon: "screen",
    details: [
      { label: "Behandlingstid", val: "Samme dag (2–4 timer)" },
      { label: "Garanti", val: "2 år på deler" },
      { label: "Enheter", val: "Telefoner, nettbrett, bærbare" },
      { label: "Startpris", val: "fra kr 699" },
    ],
  },
  {
    id: "kjølepasta",
    tag: "Ytelse",
    title: "Kjølepasta & rengjøring",
    desc: "Kjører maskinen varm eller tregt? Ny kjølepasta og støvfjerning kan senke temperaturen med 20°C eller mer.",
    fullDesc:
      "Over tid tørker kjølepastaen inne i maskinen ut, og støv blokkerer viftene. Resultatet er høyere temperatur, lavere ytelse og mer støy. Vi åpner maskinen, fjerner støv, påfører ny kjølepasta av høy kvalitet og setter alt tilbake. De fleste kunder opplever 15–25°C lavere temperaturer etter behandlingen.",
    icon: "thermal",
    details: [
      { label: "Behandlingstid", val: "1–2 timer" },
      { label: "Garanti", val: "6 måneder på arbeid" },
      { label: "Enheter", val: "Bærbare PC-er, stasjonære" },
      { label: "Startpris", val: "fra kr 349" },
    ],
  },
];

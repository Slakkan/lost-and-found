

export type UserTypes = 'zombie' | 'human' | 'alien' | 'lemonLady'
  | 'agent47' | 'trump' | 'death' | 'cthulu' | 'horse' | 'cat'
  | 'luffy' | 'goku' | 'zuckerberg';

export interface User {
  isOwner: boolean;
  objectId: number;
  userType: UserTypes;
  response: Response;
  asset: string;
}

export interface LostObject {
  id: number,
  userType: UserTypes[],
  isUnique?: boolean,
  color: string | undefined,
  detail: string | undefined,
  xRay: string | undefined,
  response: Response,
  fakeResponses: Response[];
  asset: string;
  texture: string;
}

export interface Response {
  intro: string,
  color: string,
  detail: string,
  xRay: string;
}

export const valigia1: LostObject = {
  id: 1,
  userType: ["human"],
  color: "Marrone",
  detail: "Graffi",
  xRay: "Nulla di rilevante",
  asset: "valigia",
  texture: "valigiaMarroneGraffi",
  response: {
    intro: "Mi scusi signore ha per caso visto la mia valigia?",
    color: "Difficile da dire ma mi pare sia marrone",
    detail: "Beh, veramente ha dei graffi",
    xRay: "Se proprio devo rispondere non c'è nulla"
  },
  fakeResponses: [
    {
      intro: "Mi scusi signore ha per caso visto la mia valigia?",
      color: "Mi faccia pensare la mia valigia è nera",
      detail: "Ovviamente non ha nulla",
      xRay: "Ah si ora ricordo, contiene dei vestiti"
    },
    {
      intro: "Mi scusi signore ha per caso visto la mia valigia?",
      color: "Certo, dunque la mia valigia è gialla",
      detail: "Non ha nulla di particolare",
      xRay: "Se ci tieni a saperlo, una camicia"
    },
  ]
};

export const valigia2: LostObject = {
  id: 2,
  userType: ["human"],
  color: "Marrone",
  detail: "Robaccia",
  xRay: "Solo Vestiti",
  asset: "valigia",
  texture: "valigiaMarroneVestiti",
  response: {
    intro: "Devo a tutti i costi ritrovare la mia valigia",
    color: "E' tutta marrone",
    detail: "Veramente non ha nulla",
    xRay: "Ci sono dei vestiti dentro"
  },
  fakeResponses: [
    {
      intro: "Devo a tutti i costi ritrovare la mia valigia",
      color: "Dovrebbe essere nera",
      detail: "Non ha nessun segno particolare",
      xRay: "Mi imbarazza dirlo ma contiene un tentacolo"
    },
    {
      intro: "Devo a tutti i costi ritrovare la mia valigia",
      color: "Il colore mi chiede? Verde",
      detail: "Che domande, non ha nulla",
      xRay: "Ci tengo le mie penne"
    },
  ]
};

export const valigia3: LostObject = {
  id: 3,
  userType: ["human"],
  color: "Nera",
  detail: undefined,
  xRay: "E' vuota",
  asset: "valigia",
  texture: "valigiaNera",
  response: {
    intro: "Mi ascolti è urgente ho smarrito la mia valigia",
    color: "Ah certo, dunque, è nera",
    detail: "E' come nuova",
    xRay: "Nulla di particolare"
  },
  fakeResponses: [
    {
      intro: "Mi ascolti è urgente ho smarrito la mia valigia",
      color: "Ah il colore? E' nera",
      detail: "L'ho appena comprata",
      xRay: "Se proprio devo rispondere cibarie"
    },
    {
      intro: "Mi ascolti è urgente ho smarrito la mia valigia",
      color: "E' nera",
      detail: "Presenta la mia targhetta",
      xRay: "Non c'è niente"
    },
  ]
};

export const valigia4: LostObject = {
  id: 4,
  userType: ["human"],
  color: "Nera",
  detail: undefined,
  xRay: "Ci sono tante penne",
  asset: "valigia",
  texture: "valigiaNeraPenne",
  response: {
    intro: "Salve ho smarrito la mia valigia",
    color: "Dovrebbe essere nera",
    detail: "Senza nessun difetto",
    xRay: "Se proprio devo rispondere, delle penne"
  },
  fakeResponses: [
    {
      intro: "Salve ho smarrito la mia valigia",
      color: "Ha un bel colore nero",
      detail: "Non ha niente",
      xRay: "Tutto tranne penne"
    },
    {
      intro: "Salve ho smarrito la mia valigia",
      color: "Mi sembra di ricordare fosse nera",
      detail: "Ha un pentacolo sul lato",
      xRay: "Delle matite colorate"
    },
  ]
};

export const ventiquattroh1: LostObject = {
  id: 5,
  userType: ["human"],
  color: "Nera",
  detail: undefined,
  xRay: "Nulla di rilevante",
  asset: "ventiquattroH",
  texture: "ventiquattroHNero",
  response: {
    intro: "E' Questione di vita o di morte devo ritrovare la mia 24h!",
    color: "Che domande è nera",
    detail: "Ovviamente è immacolata",
    xRay: "Aria"
  },
  fakeResponses: [
    {
      intro: "E' Questione di vita o di morte devo ritrovare la mia 24h!",
      color: "Dovrebbe essere nera",
      detail: "Non ha niente di particolare",
      xRay: "Dentro ci sono dei libri"
    },
    {
      intro: "E' Questione di vita o di morte devo ritrovare la mia 24h!",
      color: "Non me lo ricordo",
      detail: "Ha dei segni di morsi",
      xRay: "I miei gioielli di famiglia"
    },
  ]
};

export const ventiquattroh2: LostObject = {
  id: 6,
  userType: ["human"],
  color: "Nera",
  detail: "Codice",
  xRay: "ErRoR 4o4",
  asset: "ventiquattroH",
  texture: "ventiquattroHNera",
  response: {
    intro: "MI AIUTI! Sto cercando la mia 24h",
    color: "La mia 24h è nera",
    detail: "Ha un codice sul lato",
    xRay: "E' vuota"
  },
  fakeResponses: [
    {
      intro: "MI AIUTI! Sto cercando la mia 24h",
      color: "Dunque è rossa",
      detail: "E' come appena comprata",
      xRay: "Dentro c'è una spada"
    },
    {
      intro: "MI AIUTI! Sto cercando la mia 24h",
      color: "E' di un nero intenso",
      detail: "E' senza manico",
      xRay: "Non mi ricordo"
    },
  ]
};

export const ventiquattroh3: LostObject = {
  id: 7,
  userType: ["human"],
  color: "Nera",
  detail: "Codice",
  xRay: "Attenzione Arma da fuoco: Pistola",
  asset: "ventiquattroH",
  texture: "ventiquattroHNeraPistola",
  response: {
    intro: "Salve ha per caso visto una 24h?",
    color: "E' nera",
    detail: "Mi ricordo di un codice",
    xRay: "Ci tengo le mie armi"
  },
  fakeResponses: [
    {
      intro: "Salve ha per caso visto una 24h?",
      color: "E' solo nera",
      detail: "Non ha nulla",
      xRay: "All'interno c'è un gattino"
    },
    {
      intro: "Salve ha per caso visto una 24h?",
      color: "E' una bella 24h bianca",
      detail: "C'è un adesivo blu",
      xRay: "E' vuota"
    },
  ]
};

export const bagaglio1: LostObject = {
  id: 8,
  userType: ["human"],
  color: "Bianco",
  detail: "Adesivi",
  xRay: "Robaccia",
  asset: "bagaglio",
  texture: "bagaglioBiancoAdesivi",
  response: {
    intro: "Mi scusi, sto cercando il mio bagaglio",
    color: "E' di un bianco candido",
    detail: "Ha degli adesivi",
    xRay: "Niente di chè"
  },
  fakeResponses: [
    {
      intro: "Mi scusi, sto cercando il mio bagaglio",
      color: "E' un bagaglio bianco",
      detail: "Ha una pezza sul lato",
      xRay: "Dentro c'è una pizza"
    },
    {
      intro: "Mi scusi, sto cercando il mio bagaglio",
      color: "Ha i colori dell'arcobaleno",
      detail: "Ha dei graffi",
      xRay: "Non c'è nulla di particolare"
    },
  ]
};

export const bagaglio2: LostObject = {
  id: 9,
  userType: ["human"],
  color: "Giallo",
  detail: "Targhetta",
  xRay: "HAHA.",
  asset: "bagaglio",
  texture: "bagaglioGialloTarghetta",
  response: {
    intro: "Ha per caso visto il mio bagaglio?",
    color: "Dovrebbe essere giallo",
    detail: "Ha una targhetta",
    xRay: "Nulla"
  },
  fakeResponses: [
    {
      intro: "Ha per caso visto il mio bagaglio?",
      color: "E' un giallo canarino",
      detail: "Ha un buco",
      xRay: "Dentro ha solo ciabatte"
    },
    {
      intro: "Ha per caso visto il mio bagaglio?",
      color: "E' di un bel colore verde",
      detail: "Ci sono dei disegni",
      xRay: "Tante caramelle"
    },
  ]
};

export const bagaglio3: LostObject = {
  id: 10,
  userType: ["human"],
  color: "Giallo",
  detail: undefined,
  xRay: "Libri e tanta cultura",
  asset: "bagaglio",
  texture: "bagaglioGialloLibri",
  response: {
    intro: "Ha per caso visto il mio bagaglio?",
    color: "Ricordo fosse giallo",
    detail: "E' immacolato",
    xRay: "Dentro ci sono i miei libri"
  },
  fakeResponses: [
    {
      intro: "Ha per caso visto il mio bagaglio?",
      color: "Dovrebbe essere giallo",
      detail: "C'è disegnato un teschio",
      xRay: "Delle action figure"
    },
    {
      intro: "Ha per caso visto il mio bagaglio?",
      color: "Di un orrido color ocra",
      detail: "Nulla di particolare",
      xRay: "Ci tengo le mie pentole"
    },
  ]
};

export const bagaglio4: LostObject = {
  id: 11,
  userType: ["human"],
  color: "Rosa",
  detail: undefined,
  xRay: "Mmmhh interessante... è una bambola gonfiabile",
  asset: "bagaglio",
  texture: "bagaglioRosaBambola",
  response: {
    intro: "Salve, ho smarrito il mio bagaglio",
    color: "E' di un rosa fashion",
    detail: "Non ha nulla di particolare",
    xRay: "Mi imbarazza dirlo, c-c-c'è u-u-na b-b-ambola"
  },
  fakeResponses: [
    {
      intro: "Salve, ho smarrito il mio bagaglio",
      color: "E' un bagaglio viola",
      detail: "Non ha niente",
      xRay: "Un giocattolo per mio figlio"
    },
    {
      intro: "Salve, ho smarrito il mio bagaglio",
      color: "Dovrebbe essere arancione",
      detail: "Ha dei segni",
      xRay: "Dentro è pieno di arance"
    },
  ]
};

export const bagaglio5: LostObject = {
  id: 12,
  userType: ["human"],
  color: "Rosa",
  detail: undefined,
  xRay: "Nulla di rilevante",
  asset: "bagaglio",
  texture: "bagaglioRosa",
  response: {
    intro: "Mi scusi signore, ha per caso il mio bagaglio?",
    color: "Si ricordo è rosa",
    detail: "E' come nuovo",
    xRay: "Non ci ho messo niente"
  },
  fakeResponses: [
    {
      intro: "Mi scusi signore, ha per caso il mio bagaglio?",
      color: "Mi pare fosse rosa",
      detail: "Fuori non ha nulla",
      xRay: "Ci ho messo un jetpack"
    },
    {
      intro: "Mi scusi signore, ha per caso il mio bagaglio?",
      color: "E' solamente blu",
      detail: "C'è un codice alfabetico",
      xRay: "E' pieno di giornali datati del 2077"
    },
  ]
};

export const borsone1: LostObject = {
  id: 13,
  userType: ["human"],
  color: "Rosso",
  detail: undefined,
  xRay: "Nulla",
  asset: "borsone",
  texture: "borsoneRosso",
  response: {
    intro: "Devo a tutti i costi ritrovare il mio borsone!",
    color: "E' un grosso borsone rosso",
    detail: "E' senza difetti",
    xRay: "Dentro è completamente vuoto"
  },
  fakeResponses: [
    {
      intro: "Devo a tutti i costi ritrovare il mio borsone!",
      color: "Il mio borsone è grigio",
      detail: "Ha una grossa pezza",
      xRay: "Ci sono solo giochi da tavolo"
    },
    {
      intro: "Devo a tutti i costi ritrovare il mio borsone!",
      color: "E' un brutto borsone rosso",
      detail: "E' pieno di graffi",
      xRay: "Dentro è vuoto"
    },
  ]
};

export const borsone2: LostObject = {
  id: 14,
  userType: ["human"],
  color: "Blu",
  detail: "Pezza",
  xRay: "Giornali",
  asset: "borsone",
  texture: "borsoneBluPezzaGiornali",
  response: {
    intro: "Mi scusi buon uomo, ha per caso trovato un borsone?",
    color: "Sono sicuro fosse blu",
    detail: "C'è una grande pezza",
    xRay: "All'interno ci sono dei giornali"
  },
  fakeResponses: [
    {
      intro: "Mi scusi buon uomo, ha per caso trovato un borsone?",
      color: "Se non ricordo male è blu",
      detail: "Ha una targhetta vicino al manico",
      xRay: "E' piena di pistole"
    },
    {
      intro: "Mi scusi buon uomo, ha per caso trovato un borsone?",
      color: "E' azzurro come il cielo",
      detail: "Nessun segno particolare",
      xRay: "Una banana"
    },
  ]
};

export const borsone3: LostObject = {
  id: 15,
  userType: ["human"],
  color: "Blu",
  detail: "Pezza",
  xRay: "Cianfrusaglie",
  asset: "borsone",
  texture: "borsoneBluPezza",
  response: {
    intro: "Mi può aiutare? Ho perso il mio bagaglio",
    color: "E' blu come i miei occhi",
    detail: "L'ho sistemato con una pezza",
    xRay: "C'è roba inutile"
  },
  fakeResponses: [
    {
      intro: "Mi può aiutare? Ho perso il mio bagaglio",
      color: "Mi sembra sia Viola",
      detail: "E' strappato",
      xRay: "Ci ho messo i miei libri di ricette"
    },
    {
      intro: "Mi può aiutare? Ho perso il mio bagaglio",
      color: "Credo fosse Giallo",
      detail: "Ha degli animali disegnati",
      xRay: "Non ci tengo niente"
    },
  ]
};

export const borsone4: LostObject = {
  id: 16,
  userType: ["human"],
  color: "Verde",
  detail: undefined,
  xRay: "Cibarie",
  asset: "borsone",
  texture: "borsoneVerdeCibarie",
  response: {
    intro: "Buon giorno, sto cercando il mio borsone",
    color: "Il mio borsone è nero",
    detail: "Non ha niente",
    xRay: "Ci sono delle penne dentro"
  },
  fakeResponses: [
    {
      intro: "Buon giorno, sto cercando il mio borsone",
      color: "Il mio borsone è nero",
      detail: "Non ha niente",
      xRay: "Non c'è niente dentro"
    },
    {
      intro: "Buon giorno, sto cercando il mio borsone",
      color: "Il mio borsone è giallo",
      detail: "Non ha niente",
      xRay: "Non c'è niente dentro"
    },
  ]
};

export const tavolaDaSurf1: LostObject = {
  id: 17,
  userType: ["human"],
  color: "Bianca",
  detail: "Disegnino",
  xRay: "Non scannerizzabile",
  asset: "tavolaDaSurf",
  texture: "tavolaDaSurfBiancaDisegnino",
  response: {
    intro: "Aloha, ho perso la mia tavola da surf",
    color: "E' bianca",
    detail: "Ha un simpatico disegnino",
    xRay: "Immagino nulla"
  },
  fakeResponses: [
    {
      intro: "Aloha, ho perso la mia tavola da surf",
      color: "L'ho dipinta di arancione",
      detail: "Non ha niente",
      xRay: "Immagino nulla"
    },
    {
      intro: "Aloha, ho perso la mia tavola da surf",
      color: "Non ricordo",
      detail: "Ha un morso di squalo",
      xRay: "Immagino nulla"
    },
  ]
};

export const tavolaDaSurf2: LostObject = {
  id: 18,
  userType: ["human"],
  color: "Gialla",
  detail: undefined,
  xRay: "Non scannerizzabile",
  asset: "tavolaDaSurf",
  texture: "tavolaDaSurfGialla",
  response: {
    intro: "Aloha, non trovo più la mia tavola da surf",
    color: "E' gialla come il sole",
    detail: "Non ha nulla di particolare",
    xRay: "Immagino nulla"
  },
  fakeResponses: [
    {
      intro: "Aloha, non trovo più la mia tavola da surf",
      color: "E' blu come il mare",
      detail: "Ha un pentacolo disegnato sotto",
      xRay: "Immagino nulla"
    },
    {
      intro: "Aloha, non trovo più la mia tavola da surf",
      color: "E' di un giallo acceso",
      detail: "Ha dei graffi",
      xRay: "Immagino nulla"
    },
  ]
};

export const mazzeDaGolf1: LostObject = {
  id: 19,
  userType: ["human"],
  color: undefined,
  detail: "Animaletti",
  xRay: "Non scannerizzabile",
  asset: "mazzeDaGolf",
  texture: "mazzeDaGolfAnimaletti",
  response: {
    intro: "Mi scusi gentiluomo, ha per caso visto delle mazze da golf?",
    color: "Non ricordo",
    detail: "Hanno la sacca con animaletti",
    xRay: "Immagino nulla"
  },
  fakeResponses: [
    {
      intro: "Mi scusi gentiluomo, ha per caso visto delle mazze da golf?",
      color: "Non ricordo",
      detail: "C'è disegnato un dinosauro",
      xRay: "Immagino nulla"
    },
    {
      intro: "Mi scusi gentiluomo, ha per caso visto delle mazze da golf?",
      color: "Non ricordo",
      detail: "C'è una pezza",
      xRay: "Immagino nulla"
    },
  ]
};

export const mazzeDaGolf2: LostObject = {
  id: 20,
  userType: ["human"],
  color: undefined,
  detail: "Normale",
  xRay: "Non scannerizzabile",
  asset: "mazzeDaGolf",
  texture: "mazzeDaGolfNormale",
  response: {
    intro: "Mi scusi gentiluomo, ha per caso visto delle mazze da golf?",
    color: "Non ricordo",
    detail: "Sono come nuove",
    xRay: "Immagino nulla"
  },
  fakeResponses: [
    {
      intro: "Mi scusi gentiluomo, ha per caso visto delle mazze da golf?",
      color: "Non ricordo",
      detail: "La sacca è a strisce rosse",
      xRay: "Immagino nulla"
    },
    {
      intro: "Mi scusi gentiluomo, ha per caso visto delle mazze da golf?",
      color: "Non ricordo",
      detail: "Ci sono dei dollari",
      xRay: "Immagino nulla"
    },
  ]
};

export const zainoDaHiking1: LostObject = {
  id: 21,
  userType: ["human"],
  color: "Blu",
  detail: "Pentacolo",
  xRay: "Tentacolo",
  asset: "zainoDaHiking",
  texture: "hikingBluPentacolo",
  response: {
    intro: "Heilà, è qui il mio zaino?",
    color: "Mi pare sia blu",
    detail: "Ci ho disegnato un pentacolo",
    xRay: "Dentro ci ho messo un tentacolo"
  },
  fakeResponses: [
    {
      intro: "Heilà, è qui il mio zaino?",
      color: "Lo ricordo nero",
      detail: "Ha sopra un pentacolo disegnato",
      xRay: "Biscotti fatti in casa"
    },
    {
      intro: "Heilà, è qui il mio zaino?",
      color: "Mi sembra fosse verde vomito",
      detail: "Non ricordo",
      xRay: "Un polpo rosa"
    },
  ]
};

export const zainoDaHiking2: LostObject = {
  id: 22,
  userType: ["human"],
  color: "Blu",
  detail: undefined,
  xRay: "E' vuoto",
  asset: "zainoDaHiking",
  texture: "zainoDaHikingBlu",
  response: {
    intro: "Heilà, non trovo più il mio zaino",
    color: "E' di un intenso blu",
    detail: "Nulla di che",
    xRay: "l'ho lasciato vuoto"
  },
  fakeResponses: [
    {
      intro: "Heilà, non trovo più il mio zaino",
      color: "Forse è rosa",
      detail: "Non ha niente",
      xRay: "I miei libri di scuola"
    },
    {
      intro: "Heilà, non trovo più il mio zaino",
      color: "Non ricordo",
      detail: "Ha una targhetta con il mio nome",
      xRay: "Pieno di nulla"
    },
  ]
};

export const zainoDaHiking3: LostObject = {
  id: 23,
  userType: ["human"],
  color: "Rosso",
  detail: undefined,
  xRay: "Niente di utile",
  asset: "zainoDaHiking",
  texture: "zainoDaHikingRosso",
  response: {
    intro: "Heilà, è qui il mio zaino?",
    color: "E' rosso fuoco",
    detail: "E' come nuovo",
    xRay: "Solo cianfrusaglie"
  },
  fakeResponses: [
    {
      intro: "Heilà, è qui il mio zaino?",
      color: "Forse è verde acqua",
      detail: "Ha un adesivo rosa",
      xRay: "Non c'è niente dentro"
    },
    {
      intro: "Heilà, è qui il mio zaino?",
      color: "Mi pare fosse rosso chiaro",
      detail: "Non ha niente",
      xRay: "Dentro ci sono dei fiori"
    },
  ]
};

export const dildo1: LostObject = {
  id: 24,
  userType: ["human"],
  color: "Viola",
  detail: undefined,
  xRay: "Vedo molta felicità",
  asset: "dildo",
  texture: "dildoViola",
  response: {
    intro: "Mi può aiutare? Ho perso un oggetto importantissimo",
    color: "Sono sicura sia viola",
    detail: "Nulla di particolare",
    xRay: "La mia felicità"
  },
  fakeResponses: [
    {
      intro: "Mi può aiutare? Ho perso un oggetto importantissimo",
      color: "E' lungo e nero",
      detail: "Non ricordo",
      xRay: "Delle palline"
    },
    {
      intro: "Mi può aiutare? Ho perso un oggetto importantissimo",
      color: "E' viola",
      detail: "Ha un pentacolo disegnato",
      xRay: "La mia fantasia"
    },
  ]
};

export const dildo2: LostObject = {
  id: 25,
  userType: ["human"],
  color: "Verde",
  detail: undefined,
  xRay: "Un sacco di magia",
  asset: "dildo",
  texture: "dildoVerde",
  response: {
    intro: "Mi può aiutare? Ho perso un oggetto importantissimo",
    color: "E' verde",
    detail: "Nulla di particolare",
    xRay: "Ci ho messo della magia"
  },
  fakeResponses: [
    {
      intro: "Mi può aiutare? Ho perso un oggetto importantissimo",
      color: "Sono sicura sia viola",
      detail: "Ci sono degli adesivi",
      xRay: "Tanta tristezza"
    },
    {
      intro: "Mi può aiutare? Ho perso un oggetto importantissimo",
      color: "E' di un giallo intenso",
      detail: "Ha segni di morsi",
      xRay: "Non ricordo"
    },
  ]
};

export const ombrello1: LostObject = {
  id: 26,
  userType: ["human"],
  color: "Nero",
  detail: undefined,
  xRay: "E' nascosta la lama di una spada",
  asset: "ombrello",
  texture: "ombrelloNeroSpada",
  response: {
    intro: "Buongiorno, sto cercando il mio ombrello",
    color: "E' di un nero classico",
    detail: "Nulla di particolare",
    xRay: "E' la mia spada segreta"
  },
  fakeResponses: [
    {
      intro: "Buongiorno, sto cercando il mio ombrello",
      color: "Lo ricordo nero",
      detail: "Ha una pezza rossa",
      xRay: "Non c'è niente dentro"
    },
    {
      intro: "Buongiorno, sto cercando il mio ombrello",
      color: "E' di colore marrone",
      detail: "Non ha niente",
      xRay: "Dentro è di gomma"
    },
  ]
};

export const ombrello2: LostObject = {
  id: 27,
  userType: ["human"],
  color: "Nero",
  detail: undefined,
  xRay: "Non scannerizzabile",
  asset: "ombrello",
  texture: "ombrelloNero",
  response: {
    intro: "Buongiorno, sto cercando il mio ombrello",
    color: "Sono sicuro che sia nero",
    detail: "Non ha niente",
    xRay: "Immagino nulla"
  },
  fakeResponses: [
    {
      intro: "Buongiorno, sto cercando il mio ombrello",
      color: "E' blu scuro",
      detail: "Ha dei buchi nella tela",
      xRay: "Immagino nulla"
    },
    {
      intro: "Buongiorno, sto cercando il mio ombrello",
      color: "Mi pare sia bianco",
      detail: "Non ricordo",
      xRay: "Immagino nulla"
    },
  ]
};

export const ombrello3: LostObject = {
  id: 28,
  userType: ["human"],
  color: "Giallo",
  detail: undefined,
  xRay: "Non scannerizzabile",
  asset: "ombrello",
  texture: "ombrelloGialloBagnato",
  response: {
    intro: "Buongiorno, sto cercando il mio ombrello",
    color: "Ah è giallo",
    detail: "Nulla di particolare",
    xRay: "Immagino nulla"
  },
  fakeResponses: [
    {
      intro: "Buongiorno, sto cercando il mio ombrello",
      color: "E' tutto verde",
      detail: "Non ha niente",
      xRay: "Immagino nulla"
    },
    {
      intro: "Buongiorno, sto cercando il mio ombrello",
      color: "Lo ricordo giallo",
      detail: "Ha la foto di un cane",
      xRay: "Immagino nulla"
    },
  ]
};

export const cellulare1: LostObject = {
  id: 29,
  userType: ["human"],
  color: "Blu",
  detail: "Foto",
  xRay: "Non scannerizzabile",
  asset: "cellulare",
  texture: "cellulareBluFoto",
  response: {
    intro: "Mi aiuti, sono disperato, ho perso il cellulare!",
    color: "E' tutto blu",
    detail: "C'è la foto della mia ragazza",
    xRay: "Immagino nulla"
  },
  fakeResponses: [
    {
      intro: "Mi aiuti, sono disperato, ho perso il cellulare!",
      color: "E' viola",
      detail: "C'è la foto del mio cane",
      xRay: "Immagino nulla"
    },
    {
      intro: "Mi aiuti, sono disperato, ho perso il cellulare!",
      color: "E' tutto bianco",
      detail: "Ha segni di morsi",
      xRay: "Immagino nulla"
    },
  ]
};

export const cellulare2: LostObject = {
  id: 30,
  userType: ["human"],
  color: "Bianco",
  detail: "Schermo Rotto",
  xRay: "Non scannerizzabile",
  asset: "cellulare",
  texture: "cellulareBiancoSchermorotto",
  response: {
    intro: "Mi aiuti, sono disperato, ho perso il cellulare!",
    color: "Sono sicuro sia bianco",
    detail: "Ha lo schermo rotto",
    xRay: "Immagino nulla"
  },
  fakeResponses: [
    {
      intro: "Mi aiuti, sono disperato, ho perso il cellulare!",
      color: "E' grigio metallico",
      detail: "Ha un adesivo giallo",
      xRay: "Immagino nulla"
    },
    {
      intro: "Mi aiuti, sono disperato, ho perso il cellulare!",
      color: "E' verde",
      detail: "Non ricordo",
      xRay: "Immagino nulla"
    },
  ]
};

export const computer1: LostObject = {
  id: 31,
  userType: ["human"],
  color: "Grigio",
  detail: undefined,
  xRay: "Ci sono dei codici strani",
  asset: "computer",
  texture: "computerGrigio",
  response: {
    intro: "Salve, sto cercando il mio computer",
    color: "E' tutto grigio",
    detail: "Niente di che",
    xRay: "Ci sono tutti i miei codici di matrix"
  },
  fakeResponses: [
    {
      intro: "Salve, sto cercando il mio computer",
      color: "E' di un interessante colore rosso",
      detail: "Non ricordo",
      xRay: "Le foto dei miei gattini"
    },
    {
      intro: "Salve, sto cercando il mio computer",
      color: "Mi pare sia azzurro",
      detail: "Non ha un graffio",
      xRay: "Non ricordo"
    },
  ]
};

export const computer2: LostObject = {
  id: 32,
  userType: ["human"],
  color: "Nero",
  detail: "TastiMancanti",
  xRay: "Nulla di rilevante",
  asset: "computer",
  texture: "computerTastiMancanti",
  response: {
    intro: "Scusi, sto cercando il mio computer",
    color: "E' nero",
    detail: "Mancano dei tasti",
    xRay: "Nulla di importante"
  },
  fakeResponses: [
    {
      intro: "Scusi, sto cercando il mio computer",
      color: "E' viola scuro",
      detail: "Non ha la tastiera",
      xRay: "Non c'è niente dentro"
    },
    {
      intro: "Scusi, sto cercando il mio computer",
      color: "E' tutto rosso",
      detail: "Niente di che",
      xRay: "C'è la magia dei programmatori"
    },
  ]
};

export const computer3: LostObject = {
  id: 33,
  userType: ["human"],
  color: "Nero",
  detail: undefined,
  xRay: "Ci gira Crysis?",
  asset: "computer",
  texture: "computerNero",
  response: {
    intro: "Senta, sto cercando il mio computer",
    color: "E' nero pece",
    detail: "Non ha nulla di particolare",
    xRay: "C'è installato Crysis"
  },
  fakeResponses: [
    {
      intro: "Senta, sto cercando il mio computer",
      color: "E' tutto grigio chiaro",
      detail: "E' come nuovo",
      xRay: "C'è installato Giulia passione addetta agli oggetti smarriti"
    },
    {
      intro: "Senta, sto cercando il mio computer",
      color: "E' nero",
      detail: "Ha lo schermo rotto",
      xRay: "Non c'è installato nulla"
    },
  ]
};

export const braccio1: LostObject = {
  id: 34,
  userType: ["zombie"],
  color: undefined,
  detail: "Segni di morsi",
  xRay: "Sembra saporito",
  asset: "braccio",
  texture: "braccioSegni",
  response: {
    intro: "Rrhhrr   rhar   braa-ccio",
    color: "Ahaarh",
    detail: "Morsohh",
    xRay: "Molto    buonoh   rharrhh"
  },
  fakeResponses: [
    {
      intro: "Rrhhrr   rhar   braa-ccio",
      color: "Rahah",
      detail: "Piedeh    ahrr",
      xRay: "Arhahrr"
    },
    {
      intro: "Rrhhrr   rhar   braa-ccio",
      color: "Blallohhrh noo verdeh",
      detail: "mmhrhrmm",
      xRay: "Alienoh è più rarhhr    gustosohh"
    },
  ]
};

export const braccio2: LostObject = {
  id: 35,
  userType: ["zombie"],
  color: undefined,
  detail: undefined,
  xRay: "Oh oh",
  asset: "braccio",
  texture: "braccio",
  response: {
    intro: "Rrhhrr   rhar   braa-ccio",
    color: "Rrrahh",
    detail: "Braccioohh verdehh rahhr",
    xRay: "Fameh"
  },
  fakeResponses: [
    {
      intro: "Rrhhrr   rhar   braa-ccio",
      color: "Braccioh Rossoh rhraa",
      detail: "Rrrahh rhr",
      xRay: "Sangueh"
    },
    {
      intro: "Rrhhrr   rhar   braa-ccio",
      color: "Rrrahh neroh",
      detail: "rhar",
      xRay: "Occhih rahaar"
    },
  ]
};

export const cervello1: LostObject = {
  id: 36,
  userType: ["zombie"],
  color: undefined,
  detail: "Umano",
  xRay: "Bleah!",
  asset: "cervello",
  texture: "cervelloUmano",
  response: {
    intro: "Rrhhrr   rhar  cerveeh-llooh",
    color: "Rosah Argrh",
    detail: "Umanoh argrh",
    xRay: "Gnamh"
  },
  fakeResponses: [
    {
      intro: "Rrhhrr   rhar  cerveeh-llooh",
      color: "Azzurroh argrh",
      detail: "Rgahr",
      xRay: "Mmhrm hrm"
    },
    {
      intro: "Rrhhrr   rhar  cerveeh-llooh",
      color: "Argrh",
      detail: "Morsoh hrah",
      xRay: "Mmhrm hrm"
    },
  ]
};

export const cervello2: LostObject = {
  id: 37,
  userType: ["zombie"],
  color: undefined,
  detail: "Alieno",
  xRay: "Bleah!",
  asset: "cervello",
  texture: "cervelloAlieno",
  response: {
    intro: "Rrhhrr   rhar  cerveeh-llooh",
    color: "Violaah raha",
    detail: "Alieno gnamhr",
    xRay: "Arrhra"
  },
  fakeResponses: [
    {
      intro: "Rrhhrr   rhar  cerveeh-llooh",
      color: "Blu ahr",
      detail: "Occhih ahr",
      xRay: "Raahr"
    },
    {
      intro: "Rrhhrr   rhar  cerveeh-llooh",
      color: "Arcobalenoh ahr",
      detail: "rgeahh",
      xRay: "Sangueh"
    },
  ]
};

export const pistolaAliena1: LostObject = {
  id: 38,
  userType: ["alien"],
  color: "Verde",
  detail: undefined,
  xRay: "Si è aliena",
  asset: "pistolaAliena",
  texture: "pistolaAlienaVerde",
  response: {
    intro: "-SOS piZtola-",
    color: "-VerDe-",
    detail: "-??-",
    xRay: "-??-"
  },
  fakeResponses: [
    {
      intro: "-SOS piZtola-",
      color: "-RoZa-",
      detail: "-Graffi-",
      xRay: "-??!-"
    },
    {
      intro: "-SOS piZtola-",
      color: "-Nero-",
      detail: "-Rotta-",
      xRay: "-??!-"
    },
  ]
};

export const pistolaAliena2: LostObject = {
  id: 39,
  userType: ["alien"],
  color: "Verde",
  detail: "NumeroDiSerie",
  xRay: "Si è aliena",
  asset: "pistolaAliena",
  texture: "pistolaAlienaVerdeNumero",
  response: {
    intro: "-SOS piZtola-",
    color: "-VerDe-",
    detail: "-Mio Numero-",
    xRay: "-??-"
  },
  fakeResponses: [
    {
      intro: "-SOS piZtola-",
      color: "-AzzUrro-",
      detail: "-AdesiVo umaNo-",
      xRay: "-??!-"
    },
    {
      intro: "-SOS piZtola-",
      color: "-Verde-",
      detail: "-??!-",
      xRay: "-Fantasia-"
    },
  ]
};

export const astronave1: LostObject = {
  id: 40,
  userType: ["alien"],
  color: undefined,
  detail: undefined,
  xRay: "Dei piccoli alieni ci stanno salutando",
  asset: "astronave",
  texture: "astronaveAlieni",
  response: {
    intro: "-SOS naVe-",
    color: "-VioLa-",
    detail: "-NuoVa-",
    xRay: "-AmiCi-"
  },
  fakeResponses: [
    {
      intro: "-SOS naVe-",
      color: "-GialLo-",
      detail: "-??-",
      xRay: "-Pappa-"
    },
    {
      intro: "-SOS naVe-",
      color: "-BiaNco-",
      detail: "-RoTto-",
      xRay: "-??!-"
    },
  ]
};

export const astronave2: LostObject = {
  id: 41,
  userType: ["alien"],
  color: undefined,
  detail: undefined,
  xRay: "Nulla di particolare",
  asset: "astronave",
  texture: "astronave",
  response: {
    intro: "-SOS naVe-",
    color: "-VioLa-",
    detail: "-NulLa-",
    xRay: "-VuoTo-"
  },
  fakeResponses: [
    {
      intro: "-SOS naVe-",
      color: "-NeRo-",
      detail: "-??!-",
      xRay: "-Pianeti-"
    },
    {
      intro: "-SOS naVe-",
      color: "-??!-",
      detail: "-GrafFi-",
      xRay: "-CaZa-"
    },
  ]
};

export const limoni: LostObject = {
  id: 42,
  userType: ["lemonLady"],
  isUnique: true,
  color: undefined,
  detail: undefined,
  xRay: "SIGNORAAAAAAAAHHH",
  asset: "limoni",
  texture: "limoni",
  response: {
    intro: "Salve, sto cercando limoni belli freschi, lei ne ha?",
    color: "La rete o i limoni? Giovane, non ho tutto questo tempo, IO",
    detail: "È una rete di limoni, le serve un disegnino, forse?",
    xRay: "Dei limoni, spero"
  },
  fakeResponses: []

};

export const saccoCadaveri: LostObject = {
  id: 43,
  userType: ["agent47"],
  isUnique: true,
  color: undefined,
  detail: undefined,
  xRay: "Ehm... c'è uno scheletro",
  asset: "saccoCadaveri",
  texture: "saccoCadaveri",
  response: {
    intro: "Ho smarrito un bagaglio... particolare",
    color: "... nero",
    detail: "nero... lucido",
    xRay: "..."
  },
  fakeResponses: []

};

export const valigiaMissili: LostObject = {
  id: 44,
  userType: ["trump"],
  isUnique: true,
  color: undefined,
  detail: undefined,
  xRay: "E' sporco di arancione",
  asset: "valigiaMissili",
  texture: "valigiaMissili",
  response: {
    intro: "AMurica!",
    color: "AMurica?",
    detail: "... AMurica",
    xRay: "Great! Again!"
  },
  fakeResponses: []

};

export const falce: LostObject = {
  id: 45,
  userType: ["death"],
  isUnique: true,
  color: undefined,
  detail: undefined,
  xRay: "...Really?",
  asset: "falce",
  texture: "falce",
  response: {
    intro: "Lo strano figuro sembra impaziente",
    color: "Ti lancia un’occhiata glaciale",
    detail: "Ti fissa in modo inquietante",
    xRay: "?"
  },
  fakeResponses: []

};

export const pugnaleRituale: LostObject = {
  id: 46,
  userType: ["cthulu"],
  isUnique: true,
  color: undefined,
  detail: undefined,
  xRay: "The deep calls?",
  asset: "pugnaleRituale",
  texture: "pugnaleRituale",
  response: {
    intro: "...",
    color: "...",
    detail: "...",
    xRay: "..."
  },
  fakeResponses: []

};

export const costumeCavallo: LostObject = {
  id: 47,
  userType: ["horse"],
  isUnique: true,
  color: undefined,
  detail: undefined,
  xRay: "Juan?",
  asset: "costumeCavallo",
  texture: "costumeCavallo",
  response: {
    intro: "HIHIIInNHI",
    color: "NIHHihInH",
    detail: "NIhIn?",
    xRay: "HInIhInIHn!"
  },
  fakeResponses: []

};

export const cinturaOrione: LostObject = {
  id: 48,
  userType: ["cat"],
  isUnique: true,
  color: undefined,
  detail: undefined,
  xRay: "Ma quella è casa mia?",
  asset: "cinturaOrione",
  texture: "cinturaOrione",
  response: {
    intro: "Meow",
    color: "Nyaa",
    detail: "Prrr",
    xRay: "Mrh"
  },
  fakeResponses: []

};

export const forziere: LostObject = {
  id: 49,
  userType: ["luffy"],
  isUnique: true,
  color: undefined,
  detail: undefined,
  xRay: "Ma è il One Piece",
  asset: "forziere",
  texture: "forziere",
  response: {
    intro: "Ehi! Hai visto un forziere?",
    color: "Ha il colore di un tesoro!",
    detail: "Posso diventare il re dei pirati",
    xRay: "Il One Piece!"
  },
  fakeResponses: []

};

export const sfereDelDrago: LostObject = {
  id: 50,
  userType: ["goku"],
  isUnique: true,
  color: undefined,
  detail: undefined,
  xRay: "Ci sono in tutto 28 stelline",
  asset: "sfereDelDrago",
  texture: "sfereDelDrago",
  response: {
    intro: "Il radar cerca sfere indica qui!",
    color: "Sono 7 e sono arancioni!",
    detail: "Hanno delle stelline!",
    xRay: "Urca! C'è il drago Shenron"
  },
  fakeResponses: []

};

export const facebookPhone: LostObject = {
  id: 51,
  userType: ["zuckerberg"],
  isUnique: true,
  color: undefined,
  detail: undefined,
  xRay: "Global Password: 1234",
  asset: "facebookPhone",
  texture: "facebookPhone",
  response: {
    intro: ":>",
    color: ":!",
    detail: ":(",
    xRay: ">:|"
  },
  fakeResponses: []

};

export const objectList = [
  valigia1,
  valigia2,
  valigia3,
  valigia4,
  ventiquattroh1,
  ventiquattroh2,
  ventiquattroh3,
  bagaglio1,
  bagaglio2,
  bagaglio3,
  bagaglio4,
  bagaglio5,
  borsone1,
  borsone2,
  borsone3,
  borsone4,
  tavolaDaSurf1,
  tavolaDaSurf2,
  mazzeDaGolf1,
  mazzeDaGolf2,
  zainoDaHiking1,
  zainoDaHiking2,
  zainoDaHiking3,
  dildo1,
  dildo2,
  ombrello1,
  ombrello2,
  ombrello3,
  cellulare1,
  cellulare2,
  computer1,
  computer2,
  computer3,
  braccio1,
  braccio2,
  cervello1,
  cervello2,
  pistolaAliena1,
  pistolaAliena2,
  astronave1,
  astronave2,
  limoni,
  saccoCadaveri,
  valigiaMissili,
  falce,
  pugnaleRituale,
  costumeCavallo,
  cinturaOrione,
  forziere,
  sfereDelDrago,
  facebookPhone,
];
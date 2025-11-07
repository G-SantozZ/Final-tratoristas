// --- Seed automático de Frotas e Tratoristas para Santa Ana ---
const FAZENDA = "SANTA ANA";

// Frotas da Santa Ana
const frotasSantaAna = [
  "02-722","02-723","02-727","02-728","02-732","02-733",
  "02-741","02-743","02-737","02-740","02-739","02-747",
  "02-746","02-076","02-748","02-749","02-750","02-751",
  "02-752","02-014"
];

// Tratoristas da Santa Ana
const tratoristasSantaAna = [
  "ADRIEL AUGUSTO DE CAMARGO",
  "ALAF RODRIGUES DE CAMARGO",
  "ALISSON MARTINS DOS SANTOS",
  "ANDRE FELIPE GOMES BATISTA",
  "ANTONIO BENEDITO RAMOS",
  "AYRTON IZAAC NETO",
  "BRUNO TELES DA ROCHA",
  "CARLOS DE JESUS OLIVEIRA",
  "EDINALDO SILVA LEITE",
  "ELOANA DA SILVA SALES DOS SANTOS",
  "FRANCISCO CLEMERSON OLIVEIRA DE LIMA",
  "GILMAR LIMA DE SOUZA JUNIOR - IRRIGAÇÃO",
  "IVAN CARLOS GOMES",
  "JOSE RAVAEL RODRIGUES DE PAULA",
  "JOSE SEABRA DA SILVA NETO",
  "KAYK AUGUSTO DOS SANTOS PINTO",
  "MARCELINO DA SILVA FILHO",
  "MARCOS HENRIQUE APARECIDO NUNES",
  "MAURO DIAS RODRIGUES",
  "MAXSUEL DARIO DE OLIVEIRA",
  "RAPHAEL DE OLIVEIRA",
  "RICHARD DE OLIVEIRA",
  "RONALDO PEREIRA",
  "ZAQUEU ROCHEL"
];

// --- Insere no localStorage ---
const frotas = JSON.parse(localStorage.getItem("frotas") || "[]");
frotasSantaAna.forEach(f => { if (!frotas.includes(f)) frotas.push(f); });
localStorage.setItem("frotas", JSON.stringify(frotas));

const fazendas = JSON.parse(localStorage.getItem("fazendas") || "[]");
if (!fazendas.includes(FAZENDA)) {
  fazendas.push(FAZENDA);
  localStorage.setItem("fazendas", JSON.stringify(fazendas));
}

const tratoristas = JSON.parse(localStorage.getItem("tratoristas") || "{}");
tratoristas[FAZENDA] ??= {};
frotasSantaAna.forEach(f => {
  tratoristas[FAZENDA][f] = tratoristas[FAZENDA][f] || [];
  tratoristasSantaAna.forEach(nome => {
    if (!tratoristas[FAZENDA][f].includes(nome)) {
      tratoristas[FAZENDA][f].push(nome);
    }
  });
});
localStorage.setItem("tratoristas", JSON.stringify(tratoristas));

alert("✅ Dados da Santa Ana carregados! Agora recarregue o painel.");

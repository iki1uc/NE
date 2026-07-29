export const NE_AXIOM = {
    id: "NE",
    role: "fail",
    meaning: "Negativ-Axiom",
    info: "NE erkennt Fehler, Abweichungen und negative Muster"
};
export async function NE_PREFETCH() {
    const tmpNE  = await fetch("NE.tmp").then(r => r.text());
    const tmpBEN = await fetch("BEN.tmp").then(r => r.text());
    const tmpDA  = await fetch("DA.tmp").then(r => r.text());

    const room3 = await fetch("NENC3.room").then(r => r.text());
    const room6 = await fetch("NENC6e.room").then(r => r.text());
    const room9 = await fetch("NENC.room").then(r => r.text());

    return {
        axiome: NE_AXIOM,
        alt: { tmpNE, tmpBEN, tmpDA },
        room: { room3, room6, room9 },
        state: "NE-PREFETCH-READY"
    };
}
export async function NE_LOAD_LOGIC() {
    const argScan = await fetch("RESPO_ARG_SCAN.tmp").then(r => r.text());
    const arg     = await fetch("arg.tmp").then(r => r.text());
    const schach  = await fetch("SCHACH.tmp").then(r => r.text());
    const op9     = await fetch("9Operator.me").then(r => r.text());
    const op      = await fetch("operator.tmp").then(r => r.text());
    const score   = await fetch("score.tmp").then(r => r.text());

    return { argScan, arg, schach, op9, op, score };
}

export function NE_SCORE(pre) {

    const ARG = pre.arg.argScan.length % 100;
    const SCHACH = pre.schach.schach.length % 100;
    const BEN = pre.alt.tmpBEN.length % 100;
    const NE = pre.alt.tmpNE.length % 100;
    const ROOM = pre.room.room9.length % 100;
    const OP = pre.operator.length % 100;

    const eco = 
        0.20 * ARG +
        0.20 * SCHACH +
        0.20 * BEN +
        0.10 * (100 - NE) +
        0.20 * ROOM +
        0.10 * OP;

    return Math.round(eco);
}

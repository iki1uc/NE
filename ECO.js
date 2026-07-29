export function NE_ECO(pre) {
    const ARG = pre.argScan.length % 100;
    const SCHACH = pre.schach.length % 100;
    const BEN = pre.tmpBEN.length % 100;
    const NE = pre.tmpNE.length % 100;
    const ROOM = pre.room9.length % 100;
    const OP = pre.operator.length % 100;

    return Math.round(
        0.20 * ARG +
        0.20 * SCHACH +
        0.20 * BEN +
        0.10 * (100 - NE) +
        0.20 * ROOM +
        0.10 * OP
    );
}

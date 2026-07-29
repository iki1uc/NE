export function NE_GHOST(data) {
    return {
        id: "NE",
        ghost: true,
        source: data,
        state: "NE-GHOST-ACTIVE",
        info: "NE erzeugt Ghost-Layer aus Fehlerdaten"
    };
}

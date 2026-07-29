export function NE_VERIFY(da, ben, ki) {
    return {
        id: "NE",
        verify: true,
        da,
        ben,
        ki,
        state: "NE-VERIFY-OK"
    };
}

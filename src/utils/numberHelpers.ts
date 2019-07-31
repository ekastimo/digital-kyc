export const renderDecimal = (data: number) => {
    try {
        return data ? new Intl.NumberFormat('en-US', {maximumFractionDigits: 2}).format(data) : '';
    } catch (e) {
        return '';
    }
};

export const renderInteger = (data: number) => {
    try {
        return data ? new Intl.NumberFormat('en-US', {maximumFractionDigits: 0}).format(data) : '';
    } catch (e) {
        return '';
    }
};

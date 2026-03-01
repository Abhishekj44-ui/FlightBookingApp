//geberates randomly pnr number
const generatePNR = () => {
    return "PNR-" + Math.random().toString(36).substring(2, 8).toUpperCase();
}

export default generatePNR;
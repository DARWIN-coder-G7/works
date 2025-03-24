const isValidIPv4 = (ips) => {
    const isValidIp = ips.split('.').every((num) => ((num > 0 && num < 255) && !num.startsWith(0))
    );
    return ips.split('.').length === 4 ? isValidIp : false;
};

module.exports = isValidIPv4;

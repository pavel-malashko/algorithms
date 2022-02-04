// 1108. Defanging an IP Address - https://leetcode.com/problems/defanging-an-ip-address/

/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = (address) => address.replace(/[.]/g, "[.]");

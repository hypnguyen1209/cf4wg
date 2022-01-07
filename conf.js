module.exports = ({ privateKey, publicKey, config }) =>
    `
[Interface]
PrivateKey = ${privateKey}
# PublicKey = ${publicKey}
Address = ${config.interface.addresses.v4}
Address = ${config.interface.addresses.v6}
DNS = 1.1.1.1
[Peer]
PublicKey = ${config.peers[0].public_key}
Endpoint = ${config.peers[0].endpoint.host}
# Endpoint = ${config.peers[0].endpoint.v4}
# Endpoint = ${config.peers[0].endpoint.v6}
AllowedIPs = 0.0.0.0/0
AllowedIPs = ::/0`
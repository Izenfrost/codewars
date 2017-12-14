function getParticipants(handshakes){
  return Math.ceil((1 + Math.sqrt(1 + 8 * handshakes)) / 2)
}

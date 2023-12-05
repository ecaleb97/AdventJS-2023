function decode(message) {
  while (true) {
    let c = message.indexOf(")");    
    if (c === -1) break;
    let o = message.substring(0, c).lastIndexOf("(");
    let start = message.substring(0, o);
    let middle = message.substring(o + 1, c).split("").reverse().join("");
    let end = message.substring(c + 1, message.length);
    message = start + middle + end;
  }
  return message;
}


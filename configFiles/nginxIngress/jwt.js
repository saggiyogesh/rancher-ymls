function jwt(data) {
  var parts = data
    .split('.')
    .slice(0, 2)
    .map((v) => String.bytesFrom(v, 'base64url'))
    .map(JSON.parse);
  return { headers: parts[0], payload: parts[1] };
}
function jwtUserEmail(r) {
  if (r.headersIn.Authorization) {
    return jwt(r.headersIn.Authorization).payload.email;
  } else {
    return '';
  }
}
export default { jwt, jwtUserEmail };

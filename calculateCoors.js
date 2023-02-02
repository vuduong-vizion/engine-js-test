const radiansToDegrees = (radians) => {
  var pi = Math.PI;
  return radians * (180 / pi);
};

const cosTwoVectors = (a, b) => {
  return (
    (a.x * b.x + a.y * b.y + a.z * b.z) /
    (Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2) + Math.pow(a.z, 2)) *
      Math.sqrt(Math.pow(b.x, 2) + Math.pow(b.y, 2) + Math.pow(b.z, 2)))
  );
};

const calcAngleBetweenVectors = (a, b) => {
  const cosAngle = cosTwoVectors(a, b);
  let angle = radiansToDegrees(Math.acos(cosAngle));
  if (b.x > 0) angle = 360 - angle;
  return angle.toFixed(1);
};

// console.log(
//   calcAngleBetweenVectors(
//     { x: 0, y: 0, z: -500 },
//     { x: -207.1067811865475, y: 0, z: -500 }
//   )
// );

// console.log(
//     cosTwoVectors(
//       { x: 0, y: 0, z: -500 },
//       { x: -207.1067811865475, y: 0, z: -500 }
//     )
//   );

const calcCoordinate = (angle) => {
  var pi = Math.PI;
  angle = angle * (pi / 180);
  const cosAngle = Math.cos(angle);
  const bx = Math.sqrt(
    Math.pow(500, 2) / Math.pow(cosAngle, 2) - Math.pow(500, 2),
    2
  );
  return -bx;
};

console.log("X Coordinate", calcCoordinate(22.5));

const fs = require('fs');

/**
*count student in csv
*/

const countStudents = (dPath) => {
  if (!fs.existsSync(dPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const csvLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const sGroups = {};
  const dbNames = csvLines[0].split(',');
  const propNames = dbNames.slice(0, dbNames.length - 1);

  for (const line of csvLines.slice(1)) {
    const studentRec = line.split(',');
    const studentPropValues = studentRec.slice(0, studentRec.length - 1);
    const field = studentRec[studentRec.length - 1];
    if (!Object.keys(sGroups).includes(field)) {
      sGroups[field] = [];
    }
    const studentEntries = studentPropNames
      .map((propName, idx) => [propName, studentPropValues[idx]]);
    sGroups[field].push(Object.fromEntries(studentEntries));
  }

  const totalStud = Object
    .values(sGroups)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${totalStud}`);
  for (const [field, group] of Object.entries(sGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;

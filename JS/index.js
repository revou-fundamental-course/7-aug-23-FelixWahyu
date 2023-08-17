function hitungLuasSegitiga() {
  const alas = parseFloat(document.getElementById("input-alas").value);
  const tinggi = parseFloat(document.getElementById("input-tinggi").value);
  const luas = 0.5 * alas * tinggi;
  document.getElementById("hitungLuas").innerHTML = `L = 1/2 x a x t`;
  document.getElementById("hitungLuas1").innerHTML = `L = 1/2 x ${alas} x ${tinggi}`;
  document.getElementById("hitungLuas2").innerHTML = `L = ${luas}`;
}

function resetLuasSegitiga() {
  document.getElementById("input-alas").value = "";
  document.getElementById("input-tinggi").value = "";
  document.getElementById("hitungLuas").innerHTML = "";
  document.getElementById("hitungLuas1").innerHTML = "";
  document.getElementById("hitungLuas2").innerHTML = "";
}

function hitungKelilingSegitiga() {
  const sisi1 = parseFloat(document.getElementById("input-sisi1").value);
  const sisi2 = parseFloat(document.getElementById("input-sisi2").value);
  const sisi3 = parseFloat(document.getElementById("input-sisi3").value);
  const keliling = sisi1 + sisi2 + sisi3;
  document.getElementById("hitungKeliling").innerHTML = `K=S1+S2+S3`;
  document.getElementById("hitungKeliling1").innerHTML = `K=${sisi1}+${sisi2}+${sisi3}`;
  document.getElementById("hitungKeliling2").innerHTML = `K=${keliling}`;
}

function resetKelilingSegitiga() {
  document.getElementById("input-sisi1").value = "";
  document.getElementById("input-sisi2").value = "";
  document.getElementById("input-sisi3").value = "";
  document.getElementById("hitungKeliling").innerHTML = "";
  document.getElementById("hitungKeliling1").innerHTML = "";
  document.getElementById("hitungKeliling2").innerHTML = "";
}

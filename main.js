import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="container">
        <form class="form">
            <div class="inputNumber">
                <label for="numberMatrix">
                    De cuanto quieres la matriz?
                </label>
                <input type="number" placeholder="3" id="numberMatrix" name="numberMatrix">
            </div>

            <div>
                <div>
                    <input type="checkbox" id="diagonalPrincipal">
                    <label for="diagonalPrincipal">Mostrar diagonal princial</label>
                </div>

                <div>
                    <input type="checkbox" id="diagonalSecondary">
                    <label for="diagonalSecondary">Mostrar diagonal secundaria</label>
                </div>

                <div>
                    <input type="checkbox" id="bordersFills">
                    <label for="bordersFills">Llenar los bordes</label>
                </div>
            </div>
        </form>

    </div>
    <div id="matrix" class="matrix"></div>
`;

const numberMatrixHMTL = document.querySelector("#numberMatrix");

let arrayGlobal = [];

function fillMatrix(number) {
	const diagonalPrincipal =
		document.querySelector("#diagonalPrincipal").checked;
	const diagonalSecondary =
		document.querySelector("#diagonalSecondary").checked;
	const bordersFills = document.querySelector("#bordersFills").checked;

	let array = [];

	for (let i = 0; i < number; i++) {
		let arrayColums = [];

		for (let j = 0; j < number; j++) {
			if (diagonalPrincipal && i === j) {
				arrayColums.push(1);
				continue;
			}

			if (diagonalSecondary && i + j === number - 1) {
				arrayColums.push(1);
				continue;
			}

			if (
				bordersFills &&
				(i === 0 || j === 0 || i === number - 1 || j === number - 1)
			) {
				arrayColums.push(1);
				continue;
			}

			arrayColums.push(0);
		}
		array.push(arrayColums);
	}

	arrayGlobal = array;
}

function printMatrix(array) {
	document.querySelector("#matrix").innerHTML = array
		.map(
			(column) => `<div class="column">
            ${column
				.map(
					(row) =>
						`<span class="${
							row === 1 ? "row row__uno" : "row"
						}">${row}</span>`
				)
				.join("")}
        </div>`
		)
		.join("");
}

numberMatrixHMTL.addEventListener("input", (e) => {
	const number = +e.target.value;

	fillMatrix(number);
	printMatrix(arrayGlobal);
});

document.querySelector("#diagonalPrincipal").addEventListener("click", (e) => {
	const number = +numberMatrixHMTL.value;
	fillMatrix(number);
	printMatrix(arrayGlobal);
});

document.querySelector("#diagonalSecondary").addEventListener("click", (e) => {
	const number = +numberMatrixHMTL.value;
	fillMatrix(number);
	printMatrix(arrayGlobal);
});

document.querySelector("#bordersFills").addEventListener("click", (e) => {
	const number = +numberMatrixHMTL.value;
	fillMatrix(number);
	printMatrix(arrayGlobal);
});

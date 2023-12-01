let t = document.body.firstElementChild.firstElementChild;
let row = t.rows[0];
for (let i = 0; i <row.cells.length;i++) {
    let cell=row.cells[i]
    console.log(i)
    console.log(cell)
}
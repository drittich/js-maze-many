import { Cell } from "./Cell";
import { Maze } from "./Maze";

export class SidewinderMaze implements Maze  {
	cells: Cell[][];
	rows: number;
	columns: number;
	type: string;

	constructor(rows: number, columns: number) {
		this.type = "Sidewinder";
		this.rows = rows;
		this.columns = columns;
		this.cells = [];
		for (let row = 0; row < this.rows; row++) {
			this.cells[row] = [];
			for (let col = 0; col < this.columns; col++) {
				this.cells[row][col] = new Cell(row, col);
			}
		}

		this.generate();
	}

	generate() {
		for (let row = 0; row < this.rows; row++) {
			let run = [];
			for (let col = 0; col < this.columns; col++) {
				let cell = this.cells[row][col];
				run.push(cell);
				let atEasternBoundary = (cell.col === this.columns - 1);
				let atNorthernBoundary = (cell.row === 0);
				let shouldCloseOut = atEasternBoundary || (!atNorthernBoundary && Math.random() < 0.5);
				if (shouldCloseOut) {
					let member = run[Math.floor(Math.random() * run.length)];
					if (!atNorthernBoundary) {
						member.topWall = false;
						this.cells[member.row - 1][member.col].bottomWall = false;
					}
					run = [];
				} else {
					cell.rightWall = false;
					this.cells[cell.row][cell.col + 1].leftWall = false;
				}
			}
		}

	}
}
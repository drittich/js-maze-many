import { Cell } from "./Cell";
import { Maze } from "./Maze";

export class BinaryTreeMaze implements Maze {
	cells: Cell[][];
	rows: number;
	columns: number;
	type: string;


	constructor(rows: number, columns: number) {
		this.type = "Binary Tree";
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
			for (let col = 0; col < this.columns; col++) {
				let cell = this.cells[row][col];
				let neighbors = [];
				if (row > 0) {
					neighbors.push(this.cells[row - 1][col]);
				}
				if (col > 0) {
					neighbors.push(this.cells[row][col - 1]);
				}
				if (neighbors.length > 0) {
					let neighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
					if (neighbor.row < cell.row) {
						cell.topWall = false;
						neighbor.bottomWall = false;
					} else if (neighbor.col < cell.col) {
						cell.leftWall = false;
						neighbor.rightWall = false;
					}
				}
			}
		}
	}
}
export class Cell {
	topWall: boolean = true;
	rightWall: boolean = true;
	bottomWall: boolean = true;
	leftWall: boolean = true;
	row: number;
	col: number;
	
	constructor(row: number, col: number) {
		this.row = row;
		this.col = col;
	}
}
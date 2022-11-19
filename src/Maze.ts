import { Cell } from "./Cell";

export interface Maze {
	cells: Cell[][];
	rows: number;
	columns: number;
	type:string;
}
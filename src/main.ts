import './style.css'

import { Maze } from './Maze';
import { BinaryTreeMaze } from './BinaryTreeMaze';
import { SidewinderMaze } from './SidewinderMaze';

let rows = 16;
let cols = 16;

let mazeBt = new BinaryTreeMaze(rows, cols);
addDoors(mazeBt);
render(mazeBt);

let mazeSw = new SidewinderMaze(rows, cols);
addDoors(mazeSw);
render(mazeSw);

function render(maze: Maze) {
	renderTitle(maze);
	renderMaze(maze);
}

function renderTitle(maze: Maze) {
	const mazeTitle = document.body.appendChild(document.createElement('div'));
	mazeTitle.classList.add('maze-title');
	mazeTitle.innerHTML = maze.type;
}

function renderMaze(maze: Maze) {
	const mazeEl = document.body.appendChild(document.createElement('div'));
	mazeEl.classList.add('maze');

	for (let row = 0; row < maze.rows; row++) {
		for (let col = 0; col < maze.columns; col++) {
			let cell = maze.cells[row][col];
			let div = document.createElement('div');

			div.setAttribute('data-row', row.toString());
			div.setAttribute('data-col', col.toString());

			div.classList.add('cell');
			if (cell.topWall) {
				div.classList.add('top');
			}
			if (cell.bottomWall) {
				div.classList.add('bottom');
			}
			if (cell.leftWall) {
				div.classList.add('left');
			}
			if (cell.rightWall) {
				div.classList.add('right');
			}
			mazeEl.appendChild(div);
		}
		mazeEl.appendChild(document.createElement('br'));
	}
}

function addDoors(maze: BinaryTreeMaze) {
	// doors are always in the same place for now...
	maze.cells[0][1].topWall = false;
	maze.cells[maze.rows - 2][maze.columns - 1].rightWall = false;
}

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { MOCK_VACANCIES } from "../../mock/vacancy";
function getDaysDiff(date1: string | Date, date2: string | Date): number {
	const d1 = new Date(date1);
	const d2 = new Date(date2);
	const diffTime = Math.abs(d2.getTime() - d1.getTime());
	return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

function formatDateToDDMMYYYY(date: string | Date): string {
	const d = new Date(date);
	const day = String(d.getDate()).padStart(2, "0");
	const month = String(d.getMonth() + 1).padStart(2, "0");
	const year = d.getFullYear();
	return `${day}.${month}.${year}`;
}
function createData(
	id: string,
	name: string,
	createdAt: string,
	daysInWork: number,
	resAmount: number,
	status: string
) {
	return {
		id,
		name,
		createdAt,
		daysInWork,
		resAmount,
		status,
	};
}

const rows = MOCK_VACANCIES.map(resume =>
	createData(
		resume.id,
		resume.name,
		resume.createdAt,
		getDaysDiff(resume.createdAt, new Date().toISOString()),
		Math.floor(Math.random() * 100),
		"Открыта"
	)
);

export default function VacanciesTable() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead sx={{ backgroundColor: "#EFF6FF" }}>
					<TableRow>
						<TableCell align="left">Название</TableCell>
						<TableCell align="right">Дата&nbsp;открытия</TableCell>
						<TableCell align="right">Статус</TableCell>
						<TableCell align="right">Кол-во&nbsp;откликов</TableCell>
						<TableCell align="right">Дней&nbsp;в&nbsp;работе</TableCell>
						<TableCell align="right">{/* ghost */}</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow
							key={row.name}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">
								{formatDateToDDMMYYYY(row.createdAt)}
							</TableCell>
							<TableCell align="right">{row.status}</TableCell>
							<TableCell align="right">{row.resAmount}</TableCell>
							<TableCell align="right">{row.daysInWork}</TableCell>
							<TableCell align="right">
								<Button variant="text">Закрыть</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

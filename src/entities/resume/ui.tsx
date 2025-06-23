import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MOCK_RESUMES } from "../../mock/resume";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

function createData(
	id: string,
	name: string,
	proffession: string,
	desiredSalary: number,
	experienceYears: number,
	status: string
) {
	return {
		id,
		name,
		proffession,
		desiredSalary,
		experienceYears,
		status,
	};
}

const rows = MOCK_RESUMES.map(resume =>
	createData(
		resume.id,
		resume.name,
		resume.proffession,
		resume.desiredSalary,
		resume.experienceYears,
		"Получен отклик"
	)
);

export default function ResumesTable() {
	const nav = useNavigate();
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead sx={{ backgroundColor: "#EFF6FF" }}>
					<TableRow>
						<TableCell>Имя</TableCell>
						<TableCell align="right">Специальность</TableCell>
						<TableCell align="right">Опыт,&nbsp;лет</TableCell>
						<TableCell align="right">Желаемая&nbsp;ЗП</TableCell>
						<TableCell align="right">Статус</TableCell>
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
							<TableCell align="right">{row.proffession}</TableCell>
							<TableCell align="right">{row.experienceYears}</TableCell>
							<TableCell align="right">{row.desiredSalary}</TableCell>
							<TableCell align="right">{row.status}</TableCell>
							<TableCell align="right">
								<Button
									variant="text"
									onClick={() => {
										nav(`/resumes/${row.id}`);
									}}
								>
									Открыть
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

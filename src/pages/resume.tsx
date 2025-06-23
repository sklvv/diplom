import React from "react";
import { useNavigate, useParams } from "react-router";
import { Page } from "../components/Page";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { MOCK_RESUMES } from "../mock/resume";

const ResumePage = () => {
	const nav = useNavigate();
	const { id } = useParams();
	const currentResume = MOCK_RESUMES.filter(resume => resume.id === id)[0];
	return (
		<Page>
			<Box>
				<Typography onClick={() => nav(-1)} sx={{ cursor: "pointer" }}>
					Назад
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						width: "100%",
						justifyContent: "center",
					}}
				>
					<Avatar sx={{ width: "100px", height: "100px" }} />
					<Typography variant="subtitle1">{currentResume.name}</Typography>
					<Typography variant="subtitle2">
						{currentResume.proffession}
					</Typography>
					<Box sx={{ display: "flex", gap: "16px", mt: "16px" }}>
						<Button variant="contained">some@mail.ru</Button>
						<Button variant="contained" color="success">
							+7(999)-123-45-67
						</Button>
					</Box>
					<Box sx={{ width: "100%", mt: "32px", mb: "16px" }}>
						<Typography variant="h6">
							<span style={{ fontWeight: "bold" }}>Обо мне:</span>
						</Typography>
						<Typography variant="body1">{currentResume.about}</Typography>
					</Box>
					<Typography sx={{ width: "100%", mb: "16px" }}>
						<span style={{ fontWeight: "bold" }}>ФИО:</span>{" "}
						{currentResume.name}
					</Typography>
					<Typography sx={{ width: "100%", mb: "16px" }}>
						<span style={{ fontWeight: "bold" }}>Телефон:</span>{" "}
						+7(999)-123-45-67
					</Typography>
					<Typography sx={{ width: "100%", mb: "16px" }}>
						<span style={{ fontWeight: "bold" }}>Email:</span> some@mail.ru
					</Typography>
					<Typography sx={{ width: "100%", mb: "16px" }}>
						<span style={{ fontWeight: "bold" }}>Город:</span>{" "}
						{currentResume.location}
					</Typography>
					<Typography sx={{ width: "100%", mb: "16px" }}>
						<span style={{ fontWeight: "bold" }}>Лет опыта:</span>{" "}
						{currentResume.experienceYears}
					</Typography>
				</Box>
			</Box>
		</Page>
	);
};

export default ResumePage;

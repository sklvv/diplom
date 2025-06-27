import { PieChart } from "../feature/PieChart";
import Header from "../components/Header";
import { Box, Paper, Typography } from "@mui/material";
import { MOCK_RESUMES } from "../mock/resume";
import FaceIDUnlockDemo from "./face-id";

const StatsPage = () => {
	return (
		<>
			<Header title="Статистика" />
			<Box
				sx={{
					height: "100vh",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					gap: "16px",
				}}
			>
				<Paper
					sx={{ width: "400px", height: "fit-content", p: "16px" }}
					elevation={3}
				>
					<Typography>Создано вакансий</Typography>
					<Typography>20</Typography>
				</Paper>
				<Paper
					sx={{ width: "400px", height: "fit-content", p: "16px" }}
					elevation={3}
				>
					<Typography>Закрыто вакансий</Typography>
					<Typography>0</Typography>
				</Paper>
				<Paper
					sx={{ width: "400px", height: "400px", p: "16px" }}
					elevation={3}
				>
					<Typography>Состав резерва: {MOCK_RESUMES.length}</Typography>
					<PieChart />
				</Paper>
				<FaceIDUnlockDemo />
			</Box>
		</>
	);
};

export default StatsPage;

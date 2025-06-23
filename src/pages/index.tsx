import { createBrowserRouter } from "react-router";
import VacanciesListPage from "./vacancies";
import StatsPage from "./stats";
import ResumesListPage from "./resumes";
import NavTabs from "./Nav";
import ResumePage from "./resume";

const router = createBrowserRouter([
	{
		path: "/",
		children: [
			{
				path: "/",
				element: <VacanciesListPage />,
			},
			{
				path: "/stats",
				element: <StatsPage />,
			},
			{
				path: "/resumes",
				element: <ResumesListPage />,
			},
		],
		element: <NavTabs />,
	},
	{
		path: "/resumes/:id",
		element: <ResumePage />,
	},
]);

export default router;

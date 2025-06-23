import ResumesTable from "../entities/resume/ui";
import Header from "../components/Header";

const ResumesListPage = () => {
	return (
		<>
			<Header title="Соискатели" />
			<ResumesTable />
		</>
	);
};

export default ResumesListPage;

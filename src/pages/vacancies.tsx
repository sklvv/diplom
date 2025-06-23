import React from "react";
import Header from "../components/Header";
import VacanciesTable from "../entities/vacancy/ui";

const VacanciesListPage = () => {
	return (
		<>
			<Header title="Список вакансий" />
			<VacanciesTable />
		</>
	);
};

export default VacanciesListPage;

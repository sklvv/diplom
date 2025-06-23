import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import DataArrayIcon from "@mui/icons-material/DataArray";

import { Outlet, useNavigate } from "react-router";
import React, { useEffect } from "react";
import { Page } from "../components/Page";

export default function Nav() {
	const [value, setValue] = React.useState(0);
	const routes = ["/resumes", "/", "/stats"];
	const nav = useNavigate();
	const handleNavClick = (
		event: React.SyntheticEvent<Element, Event>,
		value: number
	) => {
		setValue(value);
		nav(routes[value]);
	};
	useEffect(() => {
		document.title = "HR-Analytics";
	}, []);
	return (
		<>
			<Page>
				<Outlet />
			</Page>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => handleNavClick(event, newValue)}
			>
				<BottomNavigationAction label="Соискатели" icon={<PersonIcon />} />
				<BottomNavigationAction label="Вакансии" icon={<CoPresentIcon />} />
				<BottomNavigationAction label="Статистика" icon={<DataArrayIcon />} />
			</BottomNavigation>
		</>
	);
}

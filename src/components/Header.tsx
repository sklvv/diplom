import { Box, Typography } from "@mui/material";

interface HeaderProps {
	title: string;
}
const Header = (props: HeaderProps) => {
	return (
		<Box sx={{ display: "flex", alignItems: "center", p: "32px", pl: 0 }}>
			<Typography>{props.title}</Typography>
		</Box>
	);
};

export default Header;

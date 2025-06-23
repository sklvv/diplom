import { Box, styled } from "@mui/material";

export const Page = styled(Box)(() => {
	return {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		overflowY: "auto",
	};
});

import { RouterProvider } from "react-router";

import ReactDOM from "react-dom/client";
import { Container, CssBaseline } from "@mui/material";
import router from "./pages";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = document.getElementById("root");

if (root) {
	ReactDOM.createRoot(root).render(
		<Provider store={store}>
			<Container
				maxWidth="xl"
				sx={{ display: "flex", flexDirection: "column", maxHeight: "100vh" }}
			>
				<CssBaseline />
				<RouterProvider router={router} />
			</Container>
		</Provider>
	);
} else {
	console.error("Root element not found");
}

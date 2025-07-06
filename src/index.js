import React from "react";
import ReactDOM from "react-dom";
import Login from "./Pages/Login";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Login />);

//   <ThemeProvider theme={theme}>
//     <Provider store={store}>
//       {/* <PersistGate loading={null} persistor={persistor}> */}
//       <PageRoutes history={history} />
//       {/* </PersistGate> */}
//     </Provider>
//   </ThemeProvider>,

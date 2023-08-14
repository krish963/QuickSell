import { ChakraProvider, theme} from "@chakra-ui/react";
import KanbanBoard from "./components/KanbanBoard";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <div
        style={{
          minHeight : "85vh",
        }}
      >
      <div style={{
        margin :"5vh 0",
        justifyContent
        : "center",
        alignItems: "center",
        display: "flex",
        height: "10vh",

      }}
      >
      </div>
      <KanbanBoard />
      </div>
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
          backgroundColor: "#e2e8f0",
          bottom
          : "0",

        }}
      >
      </footer>
    </ChakraProvider>
  );
}

export default App;

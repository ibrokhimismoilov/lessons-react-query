import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Films from "./components/Films";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <Films />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;

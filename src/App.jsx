import './App.css'
import Footer from "./layout/Footer/Footer";
import Main from "./layout/Main/Main";
import Header from "./layout/Header/Header";
import {QueryClient, QueryClientProvider} from 'react-query'
const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <div className='container'>
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </QueryClientProvider>
  )
}

export default App

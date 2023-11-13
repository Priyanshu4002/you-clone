import { BrowserRouter , Routes , Route} from "react-router-dom";
import { Box } from "@mui/material";
// import Navbar from "./components/Navbar";
// import { Feed } from "@mui/icons-material";
// import Video from "./components/Video";
// import Channel from "./components/Channel";
// import Search from "./components/Search";
import {Navbar , Feed , Video , Channel , Search} from "./components";


const App = ()=>  (
  
   <BrowserRouter>
      <Box sx={{background : '#000'}}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed/>}/>
            <Route path="/video/:id"  element={<Video />}/>
            <Route path="/channnel/:id" element={<Channel />}/>
            <Route path="/search/:searchTerm" element={<Search/>}/>
          </Routes>
      </Box>
   </BrowserRouter>
);

export default App

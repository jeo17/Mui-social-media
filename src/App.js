import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Stack,
  Divider,
  Box,
} from "@mui/material";
import AppBarr from "components/AppBar";
import { useMemo, useState } from "react";
import getDesignTokens from "styles/MyTheme";

import MyList from "components/List";
import Posts from "components/Posts";
import RightBar from "components/RightBar";
import AddPost from "components/AddPost";
import Loading from "components/loading page/Loading";

function App() {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [showList, setshowList] = useState("none");
  const [loading, setloading] = useState(true);
  setTimeout(() => {
    setloading(false)
  }, 3000);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />


      {loading === true &&
      <Box className="Loading-Body">
        <Loading/>
      </Box>
      
      }


      {loading === false &&
            <Box className={theme.palette.mode}>

            <AppBarr showList={showList} setshowList={setshowList} />
    
            <Stack
              divider={<Divider orientation="vertical" flexItem />}
              sx={{ flexDirection: "row" }}
            >
              <MyList {...{ setmyMOde, theme, showList, setshowList }} />
              <Posts />
    
              <RightBar theme={theme} />
            </Stack>
    
            <AddPost />
          </Box>
      }

    </ThemeProvider>
  );
}

export default App;

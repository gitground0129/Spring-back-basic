import {RouterProvider} from "react-router-dom";
import root from "./router/root";
// 그냥 기본 App function 설정해서 Router 만 root 로 설정하고 반환해주기 
function App() {
  return (
    <RouterProvider router={root}/>
  );
}

export default App;

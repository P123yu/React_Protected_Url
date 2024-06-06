// import A from "./A";
// // import A1 from "./A1";
// import "./App.css";
// function App() {
//   return (
//     <>
//       <A></A>
//       {/* <A1></A1> */}
//     </>
//   );
// }
// export default App;

// // <BrowserRouter>
// // <Routes>
// //   <Route path="/c" element={<C></C>}></Route>
// //   <Route path="/a" element={<A></A>}>
// //     {/* <Route path="b" element={<A1></A1>}></Route> */}
// //   </Route>
// //   {/* <Route path="/c" element={<C></C>}></Route>
// //   <Route path="/a">
// //     <Route index element={<A />} />
// //     <Route path="b" element={<A1></A1>} />
// // </Route>  */}
// // </Routes>
// // </BrowserRouter>

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import A from "./A";
import A1 from "./A1";
import C from "./C";
import Protected from "./Protected";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/a" element={<A></A>} />
          <Route path="/c" element={<C></C>}></Route>
          <Route element={<Protected />}>
            <Route path="/a1" element={<A1 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

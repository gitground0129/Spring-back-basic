import { Link } from "react-router-dom";
// nav Var 관련된 BasicMenu의 tailwind css와 Linkto 로 서로 페이지 이동 할 수 있게 해주는 그런 역할의 파일?
const BasicMenu = () => {
  return (  
  <nav id='navbar' className=" flex  bg-purple-500">

    <div className="w-4/5 bg-gray-500" >
      <ul className="flex p-4 text-white font-bold">
        <li className="pr-6 text-2xl">
          <Link to={'/'}>Main</Link>
        </li>
        <li className="pr-6 text-2xl">
          <Link to={'/about'}>About</Link>
        </li>
        <li className="pr-6 text-2xl">
          <Link to={'/todo/'}>Todo</Link>
        </li>
      </ul>
    </div>

    <div className="w-1/5 flex justify-end bg-red-200 p-4 font-medium">
        <div className="text-white text-sm m-1 rounded" >
          Login
        </div>
    </div>
  </nav>
  );
}
 
export default BasicMenu;

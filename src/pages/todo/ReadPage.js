import { useParams } from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {

  const {tno} = useParams()


  return ( 
    <div className="font-extrabold w-full bg-white mt-6">

      <div className="text-2xl ">
        Todo Read Page Component {tno}
      </div>
      
      <ReadComponent tno={tno}></ReadComponent> // tno 속성으로 빼기.
      
    </div> 

  );

}
 
export default ReadPage;

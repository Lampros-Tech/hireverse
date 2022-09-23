import {useState} from "react";
import EditQuestion from "./addToRepo";
function Questionfeed ()
{
    const [addToRepo, setAddToRepo] = useState(false)

    function Viewquestion() {
        console.log("hello");
        setAddToRepo(true);
      }
    return(
        <>
            <div className="parent-content">
                <div className="C_Content">
                    <div className="">
                        <div className="font-primary text-center py-5 bb-2">
                            Question Feed
                        </div>
                    </div>
                    <div className='Questions my-10'>
                        <div className="card-background uplift h-54 p-2 px-8 rounded-md">
                            <div className="flex my-4">
                                <div className="Tittle font-primary"><span>#</span> 1</div>
                                <div className="flex-grow"></div>
                                    <button
                                        className="Edit-Question px-3 py-1 rounded-md "
                                        onClick={() => {
                                            Viewquestion();
                                        }}
                                        >
                                            Add to Reopository
                                        </button>
                            </div>
                            <div className="font-secondary description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Veritatis, ducimus. Nesciunt ullam laudantium odio neque, maxime
                            quaerat vero a voluptatibus ratione quidem quo dignissimos dolor
                            libero vitae iusto odit facilis.
                            </div>
                            <div className="flex my-2">
                            <div className="mx-2 p-1 px-3 C_tag rounded-md">
                                Tag
                            </div>
                            <div className="mx-2 p-1  px-3 C_tag rounded-md">
                                Tag
                            </div>
                            <div className="mx-2 p-1 px-3 C_tag rounded-md">
                                Tag
                            </div>
                            </div>
                        </div>
                    </div>
                    {
                    addToRepo ? (
                    <div className="editquestion">
                        <EditQuestion hideComponent={setAddToRepo} />
                    </div>
                                ) : null}
                </div>
            </div>
            
        </>
    )
}
export default Questionfeed;
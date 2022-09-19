import "./Myrepos.css"
function Mytest ()
{
    return(
        <div className="parent-content">
            <div className='C_Content '>
            <div className='title text-center font-primary font-bold py-8'>
                List of Assessment
            </div>
            <div className='Questions my-10'>
                <div className='card-background uplift h-72 p-2 px-8 rounded-md'>
                <div className='Tittle font-primary'>
                    Assessment Name 
                </div>
                <div className="flex my-3 ">
                    <div className="mr-1 C_entity">
                        No of Question:
                    </div>
                    <div className="values">
                            100
                    </div> 
                    <div className="mr-1 ml-3 C_entity">
                        Duration:
                    </div> 
                    <div className="values">
                        120 minutes
                    </div>
                    <div className="mr-1 ml-3 C_entity">
                        Max-score:
                    </div>
                    <div className="values">
                            30
                    </div>
                    <div className="mr-1 ml-3 C_entity">
                        Fix-price:
                    </div>
                    <div className="values">
                            150T
                    </div>
                </div>
                    <div className='font-secondary description'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ducimus. Nesciunt ullam laudantium odio neque, maxime quaerat vero a voluptatibus ratione quidem quo dignissimos dolor libero vitae iusto odit facilis.
                    </div>
                    <button className="create-assessment-btn p-4 rounded-md mb-3">
                        View Assessment
                    </button>
           
                </div>
            </div>
          </div>

        </div>
    )
}
export default Mytest;
import "./Myrepos.css"
function Mytest ()
{
    return(
        <>
            <div className='Content '>
            <div className='title text-center font-primary font-bold my-8'>
                List of Assessment
            </div>
            <div className='Questions my-10'>
                <div className='card-background uplift h-72 p-2 px-8 rounded-md'>
                <div className='Tittle font-primary'>
                    Assessment Name 
                </div>
                <div className="flex my-3 ">
                    <div className="mr-1">
                        No of Question:
                    </div>
                    <div>
                            100
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

        </>
    )
}
export default Mytest;
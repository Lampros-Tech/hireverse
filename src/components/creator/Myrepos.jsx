import "./Myrepos.css"
function Myrepos ()
{
    return(
        <>
            <div className="parent-content">
                <div className="M-Content min-h-screen px-0.5 py-10">
                    <div className="font-primary text-left py-5 bb-2">
                        My Repositories
                    </div>
                    <div className="grid Myrepo-card">
                        <div className="card my-4 p-2">
                            <div className="font-secondary font-semibold text-2xl border-b-2 p-1">
                                Name of repository
                            </div>
                            <div>
                                Description.
                            </div>
                        </div>
                        <div className="card my-4 p-2">
                        <div className="font-secondary font-semibold text-2xl border-b-2 p-1">
                                Name of repository
                            </div>
                            <div>
                                Description.
                            </div>
                        </div>
                        <div className="card my-4 p-2">
                        <div className="font-secondary font-semibold text-2xl border-b-2 p-1">
                                Name of repository
                            </div>
                            <div>
                                Description.
                            </div>
                        </div>
                        <div className="card my-4 p-2">
                        <div className="font-secondary font-semibold text-2xl border-b-2 p-1">
                                Name of repository
                            </div>
                            <div>
                                Description.    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Myrepos;
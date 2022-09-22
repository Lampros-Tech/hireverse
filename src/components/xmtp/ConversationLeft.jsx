import Avatar from "../creator/Images/avatar.png"
const ConversationLeft = ({ allConversations, activeAddress, setActiveAddress }) => {

    const changeId = (addr) => {
        setActiveAddress(addr)
    }

    return (
        <>
            <div className="message__left">
                <div className="header">Messages</div>
                <div className="conv_box">
                    {
                        allConversations.map((addr, index) => {
                            return (
                                <div className={(activeAddress === addr.peerAddress) ? "conv active" : "conv"} key={index} onClick={() => changeId(addr.peerAddress)}>
                                    <div className="conv_left">
                                        <div className="avatar">
                                            <img src={Avatar} alt="icon" className="bitmap" />
                                        </div>
                                    </div>
                                    <div className="conv_right">
                                        <div className="top">
                                            <div className="name">{addr.peerAddress}</div>
                                        </div>
                                        {/* <div className="bottom">
                                            <div className="msg">
                                                Hmm
                                            </div>
                                            <div className="msg-time">3:20 PM</div>
                                        </div> */}
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <div className="conv active">
                        <div className="conv_left">
                            <div className="image">
                                <img src="https://images.unsplash.com/photo-1661294052753-c92664e3e1d6?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNjE5NjR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI1NDAyODk\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200" alt="icon" className="bitmap" />
                            </div>
                        </div>
                        <div className="conv_right">
                            <div className="top">
                                <div className="name">Vineetha Deepthi</div>
                            </div>
                            <div className="bottom">
                                <div className="msg">
                                    Hmm
                                </div>
                                <div className="msg-time">3:20 PM</div>
                            </div>
                        </div>
                    </div>
                    <div className="conv">
                        <div className="conv_left">
                            <div className="image">
                                <img src="https://images.unsplash.com/photo-1662377088248-6cf24d3791d8?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNjE5NjR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI1NDQyNDE\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200" alt="icon" className="bitmap" />
                            </div>
                        </div>
                        <div className="conv_right">
                            <div className="top">
                                <div className="name">Rajeev Singh</div>
                            </div>
                            <div className="bottom">
                                <div className="msg">
                                    Hello Rahul, How are you?
                                </div>
                                <div className="msg-time">3:20 PM</div>
                            </div>
                        </div>
                    </div>
                    <div className="conv unread">
                        <div className="conv_left">
                            <div className="image">
                                <img src="https://images.unsplash.com/photo-1659942546320-297ce58f567a?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNjE5NjR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI1NDU5NjU\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200" alt="icon" className="bitmap" />
                            </div>
                        </div>
                        <div className="conv_right">
                            <div className="top">
                                <div className="name-unread">Jenisha Modi</div>
                                <div className="unseen-msg">2</div>
                            </div>
                            <div className="bottom">
                                <div className="msg">
                                    You owe me 200₹. When are you giving back?
                                </div>
                                <div className="msg-time">3:20 PM</div>
                            </div>
                        </div>
                    </div>
                    <div className="conv">
                        <div className="conv_left">
                            <div className="image">
                                <img src="https://images.unsplash.com/photo-1661379935198-a2f4afb915df?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNjE5NjR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI1NDQ3ODA\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200" alt="icon" className="bitmap" />
                            </div>
                        </div>
                        <div className="conv_right">
                            <div className="top">
                                <div className="name">Vinay Solanki</div>
                            </div>
                            <div className="bottom">
                                <div className="msg">
                                    Hello Bro, Picnic ka kya plan hai?
                                </div>
                                <div className="msg-time">3:20 PM</div>
                            </div>
                        </div>
                    </div>
                    <div className="conv">
                        <div className="conv_left">
                            <div className="image">
                                <img src="https://images.unsplash.com/photo-1661435806102-1f9fa4c6050f?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNjE5NjR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI1NTExMTE\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200" alt="icon" className="bitmap" />
                            </div>
                        </div>
                        <div className="conv_right">
                            <div className="top">
                                <div className="name">Kessiya Cleates</div>
                            </div>
                            <div className="bottom">
                                <div className="msg">
                                    What is the current update of the files I have shared.
                                </div>
                                <div className="msg-time">3:20 PM</div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default ConversationLeft;
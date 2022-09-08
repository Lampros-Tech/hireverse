import "./creator_message.css";
import { useRef } from "react";
import SendIcon from "./SendIcon";
const CreatorMessage = () => {
    const message = useRef();
    return (
        <div className="message__main">
            <div className="message__left">
                {/* <div className="header">Conversations</div> */}
                <div className="conv_box">
                    <div className="conv active">
                        <div className="conv_left">
                            <div className="creator-image">
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
                            </div>
                        </div>
                    </div>
                    <div className="conv">
                        <div className="conv_left">
                            <div className="creator-image">
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
                            </div>
                        </div>
                    </div>
                    <div className="conv unread">
                        <div className="conv_left">
                            <div className="creator-image">
                                <img src="https://images.unsplash.com/photo-1659942546320-297ce58f567a?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzNjE5NjR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI1NDU5NjU\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200" alt="icon" className="bitmap" />
                            </div>
                        </div>
                        <div className="conv_right">
                            <div className="top">
                                <div className="name">Jenisha Modi</div>
                            </div>
                            <div className="bottom">
                                <div className="msg">
                                    You owe me 200₹. When are you giving back?
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="conv">
                        <div className="conv_left">
                            <div className="creator-image">
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
                            </div>
                        </div>
                    </div>
                    <div className="conv">
                        <div className="conv_left">
                            <div className="creator-image">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="message__right">
                <div className="header">
                    <div className="name">
                        Vineeta Deepthi
                    </div>
                </div>
                <div className="conversation">
                    <div className="left">
                        <div>Hi</div>
                    </div>
                    <div className="right">
                    <div class="grow"></div><div className="msg">Hi</div>
                    </div>
                    <div className="left">
                        How are you...................................................................................................................................?
                    </div>
                    <div className="right">
                        <div class="grow"></div><div className="msg">I am good. What about you?</div>
                    </div>
                    <div className="left">
                        I am good too.
                    </div>
                    <div className="right">
                        <div class="grow"></div><div className="msg">Nice Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad voluptas exercitationem libero obcaecati quia vitae quod optio! Libero laboriosam fuga amet voluptatibus similique harum, obcaecati doloribus officiis porro? Dignissimos.</div>
                    </div>
                    <div className="left">
                        Hmmm
                    </div>
                </div>
                <div className="message">
                    {/* <input
                        id="my-file"
                        type="file"
                        name="my-file"
                        style={{ display: "none" }}
                        onChange={() => { console.log("data") }}
                    />

                    <Editor
                        apiKey=""
                        onInit={(evt, editor) => (message.current = editor)}
                        initialValue="<p></p>"
                        init={{
                            height: 120,
                            max_width:1085,
                            menubar: false,
                            plugins: [
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "creator-image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                            ],
                            toolbar:
                                "undo redo | blocks | " +
                                "bold italic forecolor | alignleft aligncenter " +
                                "alignright alignjustify | bullist numlist outdent indent | " +
                                "removeformat | image",
                            image_title: true,
                            automatic_uploads: true,
                            file_picker_types: "creator-image",
                            file_picker_callback: function (callback, value, meta) {
                                if (meta.filetype === "creator-image") {
                                    var input = document.getElementById("my-file");
                                    input.click();
                                    input.onchange = function () {
                                        var file = input.files[0];
                                        var reader = new FileReader();
                                        reader.onload = function (e) {
                                            // console.log("name", e.target.result);
                                            callback(e.target.result, {
                                                alt: file.name,
                                            });
                                        };
                                        reader.readAsDataURL(file);
                                    };
                                }
                            },
                            paste_data_images: true,

                            content_style:
                                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                    /> */}
                    <input type="text" className="send" />
                    <SendIcon />
                </div>
            </div>
        </div>
    )
}

export default CreatorMessage;
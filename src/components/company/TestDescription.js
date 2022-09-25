import React, { useEffect, useState } from "react";
import "../company/styles/TestDescription.css";
import { connect } from "@tableland/sdk";
import Axios from "axios";
import { json } from "react-router-dom";

function TestDescription() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState([]);

  const showJobPosts = async () => {
    const name = "creators_assesment_table_80001_2849";
    const tableland = await connect({
      network: "testnet",
      chain: "polygon-mumbai",
    });
    const readRes = await tableland.read(
      `SELECT * FROM ${name} where assesment_id=6`
    );
    let creator_id = readRes["rows"][0][1];
    const res = await tableland.read(
      `SELECT name,profile_image FROM creators_table_80001_2155 where creator_id=${creator_id}`
    );
    let profile = "https://ipfs.io/ipfs/" + res["rows"][0][1];
    data.push([
      readRes["rows"][0][2],
      readRes["rows"][0][3],
      readRes["rows"][0][4],
      readRes["rows"][0][5],
      readRes["rows"][0][6],
      res["rows"][0][0],
      profile,
    ]);
    let url = "https://ipfs.io/ipfs/" + readRes["rows"][0][15];
    await Axios.get(url).then((response) => {
      let new_txt = response.data.replace(/'/g, '"');
      const obj = JSON.parse(new_txt);
      let final_data = obj.question_format;
      console.log(final_data);
      for (let i = 0; i < final_data.length; i++) {
        let from = final_data[i]["from"];
        let to = final_data[i]["to"];
        let no_questions = to - from + 1;
        question.push([
          no_questions,
          final_data[i]["genre"],
          final_data[i]["marks_for_each"],
        ]);
      }
      setQuestion(question);
      console.log(question);
    });
    // for (let i = 0; i < readRes["rows"].length; i++) {
    //   let jobId = readRes["rows"][i][0];
    //   const response = await tableland.read(
    //     `SELECT * FROM ${table} where job_id=${jobId}`
    //   );
    //   let noOfApplicants = response["rows"].length;
    //   data.push([
    //     readRes["rows"][i][3],
    //     readRes["rows"][i][4],
    //     noOfApplicants,
    //     jobId,
    //   ]);
    // }
    setData(data);
    setLoading(true);
  };

  useEffect(() => {
    showJobPosts();
  });
  if (loading) {
    return (
      <div className="tds-main">
        <div className="tds-container">
          <div className="tds-title">
            <h1>Test Description</h1>
          </div>
          <div className="tds-m-container">
            <div className="test-menu">
              <div className="tds-test-title">{data[0][0]}</div>
              <div className="tds-outer-heading">
                Use Our Account Management Test to hire best
              </div>
              <div className="tds-description">{data[0][1]}</div>

              <div className="tds-tbl">
                <table class="my_table">
                  <tr>
                    <th>SR. </th>
                    <th>Subject</th>
                    <th>NO. of Question</th>
                    <th>Marks</th>
                  </tr>
                  {question.map((inde, key) => {
                    return (
                      <tr>
                        <td>{key}</td>
                        <td>{inde[1]}</td>
                        <td>{inde[0]}</td>
                        <td>{inde[2]}</td>
                      </tr>
                    );
                  })}

                  {/* <tr className="total-tbl">
                    <td>total: 3</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr> */}
                </table>
              </div>
              <div className="des-box">
                <div className="des-oth">
                  <div className="rw-items">
                    <div className="duration">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="sp-mid">Fixed Cost:</span>
                      <span className="sp-sm">{data[0][2]}</span>
                    </div>
                    <div className="duration">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span className="sp-mid">Variable Cost:</span>
                      <span className="sp-sm">{data[0][3]}</span>
                    </div>
                    <div className="duration">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sp-mid">Duration:</span>
                      <span className="sp-sm">{data[0][4]}</span>
                    </div>
                  </div>
                  <div className="btn-dv">
                    <button class="button-24" role="button">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tds-sidebar">
              <div className="tds-user-img">
                <img className="avt-user-img" src={data[0][6]} />
              </div>
              <div className="tds-username">Creator : {data[0][5]}</div>
              <div className="tds-dscr">
                {/* <div className="tds-exl">
                  <span className="sp-bold">EXPERIENCE LEVEL</span>
                  <span className="sp-ot">3 Years</span>
                </div>
                <div className="tds-exl">
                  <span className="sp-bold"> RECOMMENDED FOR</span>
                  <span className="sp-ot">Lorem, ipsum dolor.</span>
                </div>
                <div className="tds-exl">
                  <span className="sp-bold">TEST INCLUDED</span>
                  <span className="sp-ot">XX TESTS</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading";
  }
}
export default TestDescription;

// import React from 'react'

// function TestDescription() {
//     return (
//         <div>

//             {/* <!-- component --> */}

//             <div class="bg-gray-100">
//                 <div class="w-full text-white bg-main-color">
//                     <div x-data="{ open: false }"
//                         class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 sm:flex-col sm:justify-end">
//                         <div class="p-4 flex flex-row items-center justify-between">
//                             <a href="#"
//                                 class="text-lg font-semibold black tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline">TEST DESCRIPTION</a>
//                         </div>
//                     </div>

//                     <div class="container mx-auto my-5 p-5">
//                         <div class="md:flex  md:-mx-2 ">

//                             {/* <!-- Right Side --> */}
//                             <div class="w-full md:w-9/12 mx-2 h-auto">
//                                 {/* <!-- Profile tab --> */}
//                                 {/* <!-- TD section --> */}
//                                 <div class="bg-white p-3 shadow-sm rounded-sm">
//                                     <div class="flex items-center space-x-2 space-y-2 font-semibold text-gray-900 leading-8" >
//                                         <span clas="text-green-500">
//                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
//                                             </svg>

//                                         </span>
//                                         <span class="tracking-wide">TEST DESCRIPTION</span>
//                                     </div>
//                                     <div class="text-gray-900">
//                                         <div class="grid md:grid-cols-3">
//                                             <h1 className='font-extrabold'>Account management TEST</h1>
//                                         </div>
//                                         <div>
//                                             <h3 className='font-bold'>Use our Account management test to hire the best</h3>
//                                         </div>

//                                         <p>
//                                             This communication test evaluates candidates' skills in communicating clearly and effectively using professional etiquette. The test assesses candidates in both written and verbal communication, as well as non-verbal cues and active listening.
//                                         </p>
//                                         <div>
//                                             <div class="flex flex-col">
//                                                 <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
//                                                     <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
//                                                         <div class="overflow-hidden">
//                                                             <table class="min-w-full">
//                                                                 <thead class="border-b">
//                                                                     <tr>
//                                                                         <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
//                                                                             SR.
//                                                                         </th>
//                                                                         <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
//                                                                             Subject
//                                                                         </th>
//                                                                         <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
//                                                                             No.Of Question
//                                                                         </th>
//                                                                         <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
//                                                                             Marks
//                                                                         </th>
//                                                                     </tr>
//                                                                 </thead>
//                                                                 <tbody>
//                                                                     <tr class="border-b">
//                                                                         <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
//                                                                         <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                                                                             Accountancy
//                                                                         </td>
//                                                                         <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                                                                             10
//                                                                         </td>
//                                                                         <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                                                                             50
//                                                                         </td>
//                                                                     </tr>
//                                                                     <tr class="bg-white border-b">
//                                                                         <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
//                                                                         <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                                                                             Corporate Accounts
//                                                                         </td>
//                                                                         <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                                                                             20
//                                                                         </td>
//                                                                         <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                                                                             50
//                                                                         </td>
//                                                                     </tr>
//                                                                     <tr class="bg-white border-b">
//                                                                         <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
//                                                                         <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                                                                             Cost Accounts
//                                                                         </td>
//                                                                         <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                                                                             10
//                                                                         </td>
//                                                                         <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                                                                             100
//                                                                         </td>
//                                                                     </tr>
//                                                                 </tbody>
//                                                             </table>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                     </div>

//                                 </div>
//                                 {/* <!-- TD section finish --> */}

//                                 <div class="my-4">
//                                 </div>

//                                 {/* <!-- cost section--> */}
//                                 <div class="bg-white p-3 shadow-sm rounded-sm">

//                                     <div class="grid grid-cols-3">
//                                         <div>
//                                             <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">

//                                                 <div className="flex-none flex items-center justify-center sm:justify-start  gap-10	">
//                                                     <div>
//                                                         <h5>
//                                                             <b>FIXED COST:</b>
//                                                         </h5>
//                                                         <h6>10,000</h6>
//                                                     </div>
//                                                     <div>
//                                                         <h5>
//                                                             <b>VARIABLE COST:</b>
//                                                         </h5>
//                                                         <h6>12,000</h6>
//                                                     </div>
//                                                 </div>

//                                             </div>
//                                             <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
//                                                 <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                                                     Buy Now
//                                                 </span>
//                                             </button>
//                                         </div>
//                                     </div>
//                                     {/* <!-- End of cost grid --> */}
//                                 </div>

//                                                         </div>

//                             <div class="w-full md:w-3/12 md:mx-3">

//                                 <div class="bg-white p-3 border-t-4 border-black-400">
//                                     <div class="image overflow-hidden">
//                                         <img class="h-20 w-20 justify-center rounded-full"
//                                             src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
//                                             alt="" />
//                                     </div>
//                                     <h3 class="text-gray-600 font-lg text-semibold leading-6">Test Created By</h3>
//                                     <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">Demo user</h1>

//                                     <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
//                                         consectetur adipisicing elit.
//                                         Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>

//                                 </div>

//                                 <div class="my-4"></div>
//                                 {/* <!-- area of expertise starts--> */}

//                                 <div class="bg-white p-3 border-t-4 border-black-400">

//                                     <h3 class="text-gray-900 font-lg text-center font-bold leading-6">Area Of Expertise</h3>
//                                     <h1 class="text-gray-900  text-center text-xl leading-8 my-1">3 year</h1>

//                                     <h3 class="text-gray-900 font-lg text-center font-bold leading-6">Recomemded For</h3>
//                                     <h1 class="text-gray-900  text-center text-xl leading-8 my-1">Lorem, ipsum dolor.</h1>

//                                     <h3 class="text-gray-900 font-lg text-center font-bold leading-6">Test Included</h3>
//                                     <h1 class="text-gray-900  text-center text-xl leading-8 my-1">Lorem, ipsum dolor.</h1>

//                                 </div>
//                                 {/* <!-- area of expertise ends --> */}
//                             </div>

//                         </div>

//                     </div>

//                 </div>

//             </div>
//         </div>
//     )
// }

// export default TestDescription

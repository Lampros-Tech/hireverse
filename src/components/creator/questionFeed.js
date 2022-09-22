import React, { useEffect, useState } from "react";
import { connect } from "@tableland/sdk";

function Questionfeed() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const showQuestions = async () => {
    const name = "creators_question_table_80001_2586";
    const tableland = await connect({
      network: "testnet",
      chain: "polygon-mumbai",
    });
    const readRes = await tableland.read(`SELECT * FROM ${name}`);
    for (let i = 0; i < readRes["rows"].length; i++) {
      data.push([
        readRes["rows"][i][0],
        readRes["rows"][i][10],
        readRes["rows"][i][2],
      ]);
    }
    setData(data);
    console.log(data);
    setLoading(true);
  };
  useEffect(() => {
    showQuestions();
  }, []);

  return (
    <>
      <div className="parent-content">
        <div className="C_Content">
          <div className="">
            <div className="font-primary text-center py-5 bb-2">
              Question Feed
            </div>
          </div>
          {data.map((inde) => {
            return (
              <div className="Questions my-10">
                <div className="card-background uplift h-72 p-2 px-8 rounded-md">
                  <div className="Tittle font-primary">Question {inde[0]}</div>
                  <div className="flex">
                    <div className="font-primary-sm mr-2">Question Type:</div>
                    <div className="font-secondary-sm ">{inde[1]}</div>
                  </div>
                  <div className="font-secondary overflow-x-auto description">
                    {inde[2]}
                  </div>
                  <div className="text-center w-full">
                    <button className="Edit-Question p-3 rounded-md mt-7">
                      Add to repository.
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Questionfeed;

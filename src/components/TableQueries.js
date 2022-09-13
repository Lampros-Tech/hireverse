import React, { useState } from "react";
import { connect } from "@tableland/sdk";

// const connect_ = async () => {
//   const tableland = await connect({
//     network: "testnet",
//     chain: "polygon-mumbai",
//   });
//   console.log(tableland);
// };

export const create_creators_question_table = async () => {
  const tableland = await connect({
    network: "testnet",
    chain: "polygon-mumbai",
  });
  console.log(tableland);

  const { name } = await tableland.create(
    `creators_question_id integer primary key, creators_id integer, question text, option1 text, option2 text, option3 text, option4 text, option5 text, answer text, solution text, added_at int, difficulty_level text, repo_name text, privacy int`, // Table schema definition
    {
      prefix: `creators_question_table`, // Optional `prefix` used to define a human-readable string
    }
  );

  console.log(name);
};

export const create_creators_assessment_table = async () => {
  const tableland = connect({
    network: "testnet",
    chain: "polygon-mumbai",
  });
  console.log(tableland);
  const { name } = await tableland.create(
    `assesment_id integer primary key, creators_id integer, title text, description text, date_time int, fixed_cost int, variable_cost int, duration int, number_of_question int, created_at int, experiance_level int`, // Table schema definition
    {
      prefix: `creators_assesment_table`, // Optional `prefix` used to define a human-readable string
    }
  );

  console.log(name);
};

export const create_creators_repo_table = async () => {
  const tableland = connect({
    network: "testnet",
    chain: "polygon-mumbai",
  });
  console.log(tableland);
  const { name } = await tableland.create(
    `repo_id integer primary key, creator_id integer, repo_name text, description text, visiblity int`, // Table schema definition
    {
      prefix: `creators_repo_table`, // Optional `prefix` used to define a human-readable string
    }
  );

  console.log(name);
};

export const insert_creators_repo_table = async (
  tablename,
  creator_id,
  repo_name,
  description,
  visiblity
) => {
  const tableland = await connect({
    network: "testnet",
    chain: "polygon-mumbai",
  });
  console.log(tablename);

  const writeRes = await tableland.write(
    `INSERT INTO ${tablename} (creator_id,repo_name,description,visiblity) VALUES (${creator_id},${repo_name},${description},${visiblity});`
  );
};

export const insert_creators_questions_table = async (
  tablename,
  creators_id,
  question,
  option1,
  option2,
  option3,
  option4,
  option5,
  answer,
  solution,
  added_at,
  difficulty_level,
  repo_name,
  privacy
) => {
  const tableland = await connect({
    network: "testnet",
    chain: "polygon-mumbai",
  });
  const writeRes = await tableland.write(
    `INSERT INTO ${tablename} (creators_id,question,option1,option2,option3,option4,option5,answer,solution,added_at,difficulty_level,repo_name,privacy) VALUES (${creators_id},${question},${option1},${option2},${option3},${option4},${option5},${answer},${solution},${added_at},${difficulty_level},${repo_name},${privacy});`
  );
  console.log(writeRes);
};

function TableQueries() {
  const [tableObject, setTableObject] = useState();

  //create question tabel
  const create_creators_question_table = async () => {
    const { name } = await tableObject.create(
      `creators_question_id integer primary key, creators_id integer, question text, option1 text, option2 text, option3 text, option4 text, option5 text, answer text, solution text, added_at int, difficulty_level text, repo_name text, privacy int`, // Table schema definition
      {
        prefix: `creators_question_table`, // Optional `prefix` used to define a human-readable string
      }
    );

    console.log(name);
  };

  //create assessment table
  const create_creators_assessment_table = async () => {
    const { name } = await tableObject.create(
      `assesment_id integer primary key, creators_id integer, title text, description text, date_time int, fixed_cost int, variable_cost int, duration int, number_of_question int, created_at int, experiance_level int`, // Table schema definition
      {
        prefix: `creators_assesment_table`, // Optional `prefix` used to define a human-readable string
      }
    );

    console.log(name);
  };
  //create repo table
  const create_creators_repo_table = async () => {
    const { name } = await tableObject.create(
      `repo_id integer primary key, creator_id integer, repo_name text, description text, visiblity int`, // Table schema definition
      {
        prefix: `creators_repo_table`, // Optional `prefix` used to define a human-readable string
      }
    );

    console.log(name);
  };
  return <div>TableQueries</div>;
}

export default TableQueries;

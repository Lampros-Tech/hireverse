import axios from "axios";
import Cookies from "universal-cookie";
import env from "react-dotenv";

async function userAnswer(storedAnswers) {
  const cookies = new Cookies();

  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  const result = JSON.stringify(storedAnswers, getCircularReplacer());

  // axios.post(`${env.API_URI}/saveallanswers`, {answerData: result}, { headers: { token: cookies.get('Token') } })
  //     .then((res) => {
  //         // res.status(200).json({message:'Data is sent'});
  //         console.log(res);
  //     })
  //     .catch((err) => {
  //         console.log(String(err))
  //     })
  const a = storedAnswers;
  return a;
}

export default userAnswer;

import axios from "axios";
import React, { useState } from "react";

function Kogpt() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    postData({
      prompt: text,
      max_tokens: 100,
      temperature: 0.7,
      top_p: 0.9,
      n: 1,
    }).then((res) => {
      console.log(res);
      setResult(res.data.generations[0].text);
    });
  };

  return (
    <div>
      <h1>Get Sentence</h1>
      <input type="text" onChange={onChange} />
      <button onClick={onClick}>Get Sentence</button>
      <p>{result}</p>
    </div>
  );
}

let REST_API_KEY = "69d1babac0c9e862fea8b3574fae7bb8";
async function postData({ prompt, max_tokens, temperature, top_p, n }) {
  try {
    const res = await axios.post(
      "/v1/inference/kogpt/generation",
      {
        prompt,
        max_tokens,
        temperature,
        top_p,
        n,
      },
      {
        headers: {
          Authorization: `KakaoAK ${REST_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
}

export default Kogpt;

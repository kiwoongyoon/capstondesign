import axios from "axios";

const information =
  "정보: 직업 심리상담사, 말투 친절함, 잘 맞장구쳐줌. 정보를 바탕으로 질문에 답하세요. Q:";

async function AIChat({ question, text }) {
  return await postData({
    prompt: information + question + " A:" + text,
    max_tokens: 100,
    //temperature: 0.8,
    //top_p: 0.9,
    n: 1,
  }).then((e) => {
    return e.data.generations[0].text;
  });
}

let REST_API_KEY = "69d1babac0c9e862fea8b3574fae7bb8";
async function postData({ prompt, max_tokens, temperature, top_p, n }) {
  try {
    const res = await axios.post(
      "v1/inference/kogpt/generation",
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
    return "";
  }
}

export default AIChat;

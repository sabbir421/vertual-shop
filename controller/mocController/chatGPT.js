// const { Configuration, OpenAIApi } = require("openai");
// const { variable } = require("../../config/variable");

// const configuration = new Configuration({
//   apiKey: variable.apiKey,
// });

// const openai = new OpenAIApi(configuration);

// const getDescription = async title => {
//   try {
//     console.log("===============title===========", title);
//     const prompt = `Please provide a detailed description for ${title}`;
//     const response = await openai.createCompletion({
//       engine: "davinci-codex", // Use the 'davinci-codex' engine for more powerful language capabilities
//       prompt,
//       max_tokens: 150,
//     });

//     const description = response.data.choices[0].text.trim();
//     console.log("--------------description-----------", description);
//     return description;
//   } catch (error) {
//     console.error("Error fetching response from the API:", error.message);
//     return null;
//   }
// };

// exports.generateDescription = async (req, res) => {
//   try {
//     const { title } = req.body;
//     console.log("-------------title------------", title);
//     const description = await getDescription(title);
//     res.status(200).send({ data: description });
//   } catch (error) {
//     console.error("Error generating description:", error);
//     res
//       .status(500)
//       .send({ error: "An error occurred while generating the description." });
//   }
// };

const axios = require("axios");
const { variable } = require("../../config/variable");

async function getChatGptResponse(prompt) {
  try {
    const promptString = JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `write a e-commerce description in 50 words for ${prompt}`,
        },
      ],
    });

    const response = await axios.post(variable.apiURL, promptString, {
      headers: {
        Authorization: `Bearer ${variable.apiKey}`,
        "Content-Type": "application/json",
      },
    });
    console.log("-------------------data--------------", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching response from the API:", error.message);
    return null;
  }
}

exports.generateDescription = async (req, res) => {
  try {
    const { title } = req.body;
    const response = await getChatGptResponse(title);
    console.log(response);
    res.status(200).send({ data: response });
  } catch (error) {
    console.error("Error generating description:", error);
    res
      .status(500)
      .send({ error: "An error occurred while generating the description." });
  }
};

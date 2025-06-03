import axios from 'axios';

const judge0Api = axios.create({
  baseURL: 'https://judge0-ce.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
    'Content-Type': 'application/json'
  }
});

export async function createBatchSubmission(userCode, testCases, id) {
  try {
    const submissions = testCases.map(testCase => ({
      language_id: id,
      source_code: userCode,
      stdin: testCase.input
    }));

    const response = await judge0Api.post('/submissions/batch?base64_encoded=false&wait=false', {
      submissions
    });

    return response.data.map(submission => submission.token);
  } catch (error) {
    console.error('Error creating batch submission:', error);
    throw error;
  }
}
export async function getBatchResults(tokens) {
  try {
    const url = `/submissions/batch?tokens=${tokens.join()}&base64_encoded=false&fields=token,stdout,stderr,status_id`;
    const response = await judge0Api.get(url);
    return response.data.submissions;
  } catch (error) {
    console.error('Error getting batch results:', error);
    throw error;
  }
}

export function evaluateResults(testCases, results) {
  return results.map((result, index) => {
    const { expectedOutput } = testCases[index];
    const actualOutput = result.stdout.trim();

    const isPass = actualOutput === expectedOutput || actualOutput === expectedOutput.trim();

    return {
      input: testCases[index].input,
      expectedOutput,
      actualOutput: result.stdout,
      status: isPass ? 'Pass' : 'Fail',
    }
  });
}



export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

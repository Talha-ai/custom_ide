import axios from 'axios';

export async function createBatchSubmission(userCode, testCases, id) {
  const submissions = testCases.map(testCase => ({
    language_id: id,
    source_code: userCode,
    stdin: testCase.input
  }));

  const response = await axios.post('https://judge.dcrypt.co.in/submissions/batch?base64_encoded=false&wait=false', { submissions });
  return response.data.map(submission => submission.token);
}

export async function getBatchResults(tokens) {
  const url = `https://judge.dcrypt.co.in/submissions/batch?tokens=${tokens.join()}&base64_encoded=false&fields=token,stdout,stderr,status_id`;
  const response = await axios.get(url);
  return response.data.submissions;
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

import axios from 'axios';

export async function createBatchSubmission(userCode, testCases, id) {
  const submissions = testCases.map(testCase => ({
    language_id: id,
    source_code: userCode,
    stdin: testCase.input
  }));

  const response = await axios.post('http://localhost:2358/submissions/batch?base64_encoded=false&wait=false', { submissions });
  return response.data.map(submission => submission.token);
}

export async function getBatchResults(tokens) {
  const url = `http://localhost:2358/submissions/batch?tokens=${tokens.join()}&base64_encoded=false&fields=token,stdout,stderr,status_id`;
  const response = await axios.get(url);
  return response.data.submissions;
}

export function evaluateResults(testCases, results) {
  return results.map((result, index) => {
    const actualOutput = result.stdout;
    const input = testCases[index].input;
    const expectedOutput = testCases[index].expectedOutput;
    const status = actualOutput === expectedOutput ? 'Pass' : 'Fail';
    return {
      input,
      actualOutput,
      expectedOutput,
      status,
    };
  });
}


export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

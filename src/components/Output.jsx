import { useState } from 'react';
import {
  Box,
  Button,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useToast,
} from '@chakra-ui/react';
import {
  createBatchSubmission,
  getBatchResults,
  evaluateResults,
  delay,
} from '../api';
import { LANGUAGE_VERSIONS } from '../constants';

const Output = ({ editorRef, language }) => {
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { id } = LANGUAGE_VERSIONS.find((lang) => lang?.name === language);

  const testCases = [
    { input: '2\n3\n', expectedOutput: '5' },
    { input: '0\n0\n', expectedOutput: '0' },
    { input: '-1\n1\n', expectedOutput: '0' },
    { input: '10\n15\n', expectedOutput: '25' },
  ];

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    setIsLoading(true);
    setIsError(false);

    try {
      const tokens = await createBatchSubmission(sourceCode, testCases, id);
      console.log('tokens', tokens);
      await delay(1500);
      const results = await getBatchResults(tokens);
      console.log('result', results);

      const feedback = evaluateResults(testCases, results);
      console.log('fb', feedback);

      setOutput(feedback);
    } catch (error) {
      console.error(error);
      setIsError(true);
      toast({
        title: 'An error occurred.',
        description: error.message || 'Unable to run code',
        status: 'error',
        duration: 6000,
        position: 'top',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box w={{ base: '100%', md: '50%' }}>
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
      <Box
        height="75vh"
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor="#333"
        overflowY="auto"
      >
        {output ? (
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Test Case</Th>
                <Th>Input</Th>
                <Th>Expected Output</Th>
                <Th>Actual Output</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {output.map((result, index) => (
                <Tr
                  key={index}
                  color={result.status === 'Pass' ? 'green.500' : 'red.500'}
                >
                  <Td>{index + 1}</Td>
                  <Td>{result.input}</Td>
                  <Td>{result.expectedOutput}</Td>
                  <Td>{result.actualOutput}</Td>
                  <Td>{result.status}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          'Click "Run Code" to see the output here'
        )}
      </Box>
    </Box>
  );
};

export default Output;

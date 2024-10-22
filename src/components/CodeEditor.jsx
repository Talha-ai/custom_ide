import { useRef, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Editor } from '@monaco-editor/react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../constants';
import Output from './Output';

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState('');
  const [language, setLanguage] = useState('javascript');

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box>
      <Flex direction={{ base: 'column', md: 'row' }} spacing={4} width="100%">
        <Box w={{ base: '100%', md: '50%' }}>
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            width="100%"
            theme="vs-dark"
            language={language}
            value={value}
            onMount={onMount}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </Flex>
    </Box>
  );
};

export default CodeEditor;

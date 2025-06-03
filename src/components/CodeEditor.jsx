import { useRef, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Editor } from '@monaco-editor/react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS, LANGUAGE_TO_MONACO_MAP } from '../constants';
import Output from './Output';

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState(CODE_SNIPPETS.python || '');
  const [language, setLanguage] = useState('python');

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
    editor.updateOptions({
      suggestOnTriggerCharacters: true,
      quickSuggestions: {
        other: true,
        comments: true,
        strings: true,
      },
      snippetSuggestions: 'on',
      wordBasedSuggestions: true,
      parameterHints: {
        enabled: true,
      },
    });
  };

  const onSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    const lowercaseLang = selectedLanguage.toLowerCase();
    setValue(
      CODE_SNIPPETS[lowercaseLang] ||
        '// Code snippet not available for this language'
    );
  };

  const getMonacoLanguage = () => {
    const lowercaseLang = language.toLowerCase();
    return LANGUAGE_TO_MONACO_MAP[lowercaseLang] || 'plaintext';
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
              fontSize: 14,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
            }}
            height="75vh"
            width="100%"
            theme="vs-dark"
            language={getMonacoLanguage()}
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

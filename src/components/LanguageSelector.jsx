/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { LANGUAGE_VERSIONS } from '../constants';

const languages = LANGUAGE_VERSIONS;
const ACTIVE_COLOR = 'blue.400';

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">
        Language:
      </Text>
      <Menu isLazy>
        <MenuButton as={Button}>{language}</MenuButton>
        <MenuList bg="#110c1b" maxHeight="400px" overflowY="auto">
          {languages.map((lang) => (
            <MenuItem
              key={lang.id}
              color={
                lang.name.toLowerCase() === language.toLowerCase()
                  ? ACTIVE_COLOR
                  : ''
              }
              bg={
                lang.name.toLowerCase() === language.toLowerCase()
                  ? 'gray.900'
                  : 'transparent'
              }
              _hover={{
                color: ACTIVE_COLOR,
                bg: 'gray.900',
              }}
              onClick={() => onSelect(lang.name)}
            >
              {lang.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;

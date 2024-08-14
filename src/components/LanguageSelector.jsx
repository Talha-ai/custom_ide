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
// console.log(LANGUAGE_VERSIONS.name.split(' '));

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
              key={lang.name}
              color={lang.name === language ? ACTIVE_COLOR : ''}
              bg={lang.name === language ? 'gray.900' : 'transparent'}
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

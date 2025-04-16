export const LANGUAGE_VERSIONS = [{
  "id": 45,
  "name": "Assembly (NASM 2.14.02)"
},
{
  "id": 46,
  "name": "Bash (5.0.0)"
},
{
  "id": 47,
  "name": "Basic (FBC 1.07.1)"
},
{
  "id": 50,
  "name": "C (GCC 9.2.0)"
},
{
  "id": 54,
  "name": "C++ (GCC 9.2.0)"
},
{
  "id": 86,
  "name": "Clojure (1.10.1)"
},
{
  "id": 51,
  "name": "C# (Mono 6.6.0.161)"
},
{
  "id": 77,
  "name": "COBOL (GnuCOBOL 2.2)"
},
{
  "id": 55,
  "name": "Common Lisp (SBCL 2.0.0)"
},
{
  "id": 56,
  "name": "D (DMD 2.089.1)"
},
{
  "id": 57,
  "name": "Elixir (1.9.4)"
},
{
  "id": 58,
  "name": "Erlang (OTP 22.2)"
},
{
  "id": 44,
  "name": "Executable"
},
{
  "id": 87,
  "name": "F# (.NET Core SDK 3.1.202)"
},
{
  "id": 59,
  "name": "Fortran (GFortran 9.2.0)"
},
{
  "id": 60,
  "name": "Go (1.13.5)"
},
{
  "id": 88,
  "name": "Groovy (3.0.3)"
},
{
  "id": 61,
  "name": "Haskell (GHC 8.8.1)"
},
{
  "id": 62,
  "name": "java"
},
{
  "id": 63,
  "name": "javascript"
},
{
  "id": 78,
  "name": "Kotlin (1.3.70)"
},
{
  "id": 64,
  "name": "Lua (5.3.5)"
},
{
  "id": 89,
  "name": "Multi-file program"
},
{
  "id": 79,
  "name": "Objective-C (Clang 7.0.1)"
},
{
  "id": 65,
  "name": "OCaml (4.09.0)"
},
{
  "id": 66,
  "name": "Octave (5.1.0)"
},
{
  "id": 67,
  "name": "Pascal (FPC 3.0.4)"
},
{
  "id": 85,
  "name": "Perl (5.28.1)"
},
{
  "id": 68,
  "name": "php"
},
{
  "id": 43,
  "name": "Plain Text"
},
{
  "id": 69,
  "name": "Prolog (GNU Prolog 1.4.5)"
},
{
  "id": 71,
  "name": "python"
},
{
  "id": 80,
  "name": "R (4.0.0)"
},
{
  "id": 72,
  "name": "Ruby (2.7.0)"
},
{
  "id": 73,
  "name": "Rust (1.40.0)"
},
{
  "id": 81,
  "name": "Scala (2.13.2)"
},
{
  "id": 82,
  "name": "SQL"
},
{
  "id": 83,
  "name": "swift"
},
{
  "id": 74,
  "name": "typescript"
},
{
  "id": 84,
  "name": "Visual Basic.Net (vbnc 0.0.0.5943)"
}
];

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  php: "<?php\n\n$name = 'Alex';\necho $name;\n",

  "c (gcc 9.2.0)": `#include <stdio.h>\n\nint main() {\n\tchar name[] = "Alex";\n\tprintf("Hello, %s!\\n", name);\n\treturn 0;\n}`,

  "c++ (gcc 9.2.0)": `#include <iostream>\n#include <string>\n\nint main() {\n\tstd::string name = "Alex";\n\tstd::cout << "Hello, " << name << "!" << std::endl;\n\treturn 0;\n}`,

  "c# (mono 6.6.0.161)": `using System;\n\nclass Program\n{\n\tstatic void Main()\n\t{\n\t\tstring name = "Alex";\n\t\tConsole.WriteLine("Hello, " + name + "!");\n\t}\n}`,

  "go (1.13.5)": `package main\n\nimport "fmt"\n\nfunc main() {\n\tname := "Alex"\n\tfmt.Printf("Hello, %s!\\n", name)\n}`,

  "ruby (2.7.0)": `name = "Alex"\nputs "Hello, #{name}!"`,

  "rust (1.40.0)": `fn main() {\n\tlet name = "Alex";\n\tprintln!("Hello, {}!", name);\n}`,

  "swift": `let name = "Alex"\nprint("Hello, \\(name)!")`,

  "kotlin (1.3.70)": `fun main() {\n\tval name = "Alex"\n\tprintln("Hello, $name!")\n}`,

  "bash (5.0.0)": `#!/bin/bash\n\nname="Alex"\necho "Hello, $name!"`,

  "sql": `SELECT 'Hello, Alex!' AS greeting;`,

  "plain text": `Hello, Alex!`
};

export const LANGUAGE_TO_MONACO_MAP = {
  // Direct mappings
  "javascript": "javascript",
  "typescript": "typescript",
  "python": "python",
  "java": "java",
  "php": "php",
  "c (gcc 9.2.0)": "c",
  "c++ (gcc 9.2.0)": "cpp",
  "c# (mono 6.6.0.161)": "csharp",
  "go (1.13.5)": "go",
  "ruby (2.7.0)": "ruby",
  "rust (1.40.0)": "rust",
  "swift": "swift",
  "kotlin (1.3.70)": "kotlin",
  "bash (5.0.0)": "shell",
  "sql": "sql",
  "plain text": "plaintext",

  // Additional mappings for other languages
  "assembly (nasm 2.14.02)": "asm",
  "basic (fbc 1.07.1)": "vb",
  "clojure (1.10.1)": "clojure",
  "cobol (gnucobol 2.2)": "cobol",
  "common lisp (sbcl 2.0.0)": "lisp",
  "d (dmd 2.089.1)": "d",
  "elixir (1.9.4)": "elixir",
  "erlang (otp 22.2)": "erlang",
  "executable": "plaintext",
  "f# (.net core sdk 3.1.202)": "fsharp",
  "fortran (gfortran 9.2.0)": "fortran",
  "groovy (3.0.3)": "groovy",
  "haskell (ghc 8.8.1)": "haskell",
  "lua (5.3.5)": "lua",
  "multi-file program": "plaintext",
  "objective-c (clang 7.0.1)": "objective-c",
  "ocaml (4.09.0)": "ocaml",
  "octave (5.1.0)": "matlab",
  "pascal (fpc 3.0.4)": "pascal",
  "perl (5.28.1)": "perl",
  "prolog (gnu prolog 1.4.5)": "prolog",
  "r (4.0.0)": "r",
  "scala (2.13.2)": "scala",
  "visual basic.net (vbnc 0.0.0.5943)": "vb"
};
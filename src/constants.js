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
};
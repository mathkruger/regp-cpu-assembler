import { ASM } from "./services/assembler.js";
import { DSM } from "./services/disassembler.js";

const code = `
PRINTS "Hello"
HALT
`;

const bytecodes = ASM.assemble(code).join(",");
console.log(bytecodes);

const reversed = DSM.disassemble(bytecodes.split(",").map(x => parseInt(x)));
console.log(reversed);
#!/usr/bin/env node

const generator = require('./src/generator');
const args = process.argv.slice(2);

if (args.length < 3) {
  console.log('Usage: codegen <template> <name> <output>');
  console.log('Templates:', generator.listTemplates().join(', '));
  process.exit(1);
}

const [template, name, output] = args;

try {
  const result = generator.generate(template, name, output);
  console.log(`✅ Generated ${output}`);
} catch (error) {
  console.error(`❌ Error: ${error.message}`);
  process.exit(1);
}

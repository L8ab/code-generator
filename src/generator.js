const fs = require('fs');
const path = require('path');

class CodeGenerator {
  constructor() {
    this.templates = {
      'react-component': this.reactComponentTemplate,
      'express-route': this.expressRouteTemplate,
      'mongodb-model': this.mongodbModelTemplate
    };
  }
  
  reactComponentTemplate(name) {
    return `import React from 'react';

const ${name} = () => {
  return (
    <div className="${name.toLowerCase()}">
      <h1>${name}</h1>
    </div>
  );
};

export default ${name};
`;
  }
  
  expressRouteTemplate(name) {
    return `const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: '${name} endpoint' });
});

module.exports = router;
`;
  }
  
  mongodbModelTemplate(name) {
    return `const mongoose = require('mongoose');

const ${name.toLowerCase()}Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('${name}', ${name.toLowerCase()}Schema);
`;
  }
  
  generate(templateType, name, outputPath) {
    if (!this.templates[templateType]) {
      throw new Error(`Template ${templateType} not found`);
    }
    
    const code = this.templates[templateType](name);
    fs.writeFileSync(outputPath, code);
    return { success: true, path: outputPath };
  }
  
  listTemplates() {
    return Object.keys(this.templates);
  }
}

module.exports = new CodeGenerator();

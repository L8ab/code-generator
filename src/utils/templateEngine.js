class TemplateEngine {
  render(template, variables) {
    let result = template;
    
    for (const [key, value] of Object.entries(variables)) {
      const regex = new RegExp(`{{\s*${key}\s*}}`, 'g');
      result = result.replace(regex, value);
    }
    
    return result;
  }
  
  extractVariables(template) {
    const regex = /{{\s*(\w+)\s*}}/g;
    const variables = [];
    let match;
    
    while ((match = regex.exec(template)) !== null) {
      variables.push(match[1]);
    }
    
    return [...new Set(variables)];
  }
}

module.exports = new TemplateEngine();

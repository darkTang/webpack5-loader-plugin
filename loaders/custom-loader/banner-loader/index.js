module.exports = function (content) {
  const schema = require('./schema.json')
  // schema对options的验证规则
  // schema符合JSON Schema的规则
  const options = this.getOptions(schema);
  const prefix = `
    /**
     * Author: ${options.author}
     * age: ${options.age}
    */
  `;
  return prefix + content;
};

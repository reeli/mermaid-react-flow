import mermaid from "mermaid"

describe('parser', () => {
  it('should parse mermaid syntax', () => {
    const text = `
    flowchart LR
      A-. text .-> B
    `
    expect(mermaid.parse(text)).toEqual("")
  });
});

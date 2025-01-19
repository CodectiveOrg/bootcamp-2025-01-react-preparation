export function doesInclude(text: string, query: string): boolean {
  return text.toLowerCase().includes(query.toLowerCase());
}

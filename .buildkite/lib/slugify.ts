export function slugify(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "-");
}

export function _env(value: string): string {
  return process.env[value] || '';
}


export const baseUrl = process.env.NEXT_BASE_URL || "https://tikirtin.com";
export const helpBaseUrl = _env('NEXT_HELP_BASE_URL') || "https://help.tikirtin.com";
export const blogBaseUrl = _env('NEXT_BLOG_BASE_URL') || "https://blog.tikirtin.com";
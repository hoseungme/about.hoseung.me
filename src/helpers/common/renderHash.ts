/**
 * input 문자열을 hash 라우팅을 위한 HTML id attribute 값으로 변환
 */
export function renderHash(input: string) {
  return input.replace(/\s/g, "-").replace(/[^가-힣A-Za-z0-9-]/g, "");
}

import React from "react";

const regex = /(?:__|[*#])|\[(.*?)\]\((.*?)\)/;

/**
 * input 문자열에서 URL을 파싱해서 span + anchor 태그로 치환
 */
export function renderWithAnchor(input: string) {
  let matched = input.match(regex);

  if (!matched) {
    return input;
  }

  let value = input;
  const content: (string | React.ReactNode)[] = [];
  while (matched !== null) {
    const [start, end] = [matched.index!, matched.index! + matched[0].length];
    const [pre, post] = [value.slice(0, start), value.slice(end)];

    console.log(matched);
    content.push([
      pre,
      <span key={matched[0]}>
        <a href={matched[2]}>{matched[1]}</a>
      </span>,
    ]);

    value = post;
    matched = value.match(regex);
    if (matched === null) {
      content.push(value);
    }
  }

  return content;
}

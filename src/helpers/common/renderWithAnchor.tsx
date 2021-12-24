import React from "react";

const regex = /(http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/;

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

    content.push([
      pre,
      <span key={matched[0]}>
        <a href={matched[0]}>{matched[0]}</a>
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

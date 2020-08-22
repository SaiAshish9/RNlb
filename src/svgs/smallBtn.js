import React from 'react';
import {SvgXml} from 'react-native-svg';

export default ({text,isLarge}) => {
  const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="120px" height="28px" viewBox="0 0 57 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>all</title>
    <defs>
        <linearGradient x1="124.414637%" y1="58.6060176%" x2="0%" y2="37.8223464%" id="linearGradient-1">
            <stop stop-color="#865CF4" offset="0%"></stop>
            <stop stop-color="#C01C8A" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="all">
            <g id="Group-26">
                <path d="M11.4724015,-8.61533067e-13 L50.1674999,-8.61533067e-13 C52.9289237,-8.55358702e-13 55.1674999,2.23857625 55.1674999,5 C55.1674999,5.44996814 55.1067598,5.89787718 54.9869248,6.3315947 L50.013571,24.3315947 C49.4147287,26.4989775 47.4427369,28 45.1941462,28 L6.55068347,28 C3.78925972,28 1.55068347,25.7614237 1.55068347,23 C1.55068347,22.5544972 1.61022413,22.1109925 1.72772424,21.6812641 L6.64944229,3.68126414 C7.24380785,1.50751508 9.21885867,-8.6023092e-13 11.4724015,-8.61533067e-13 Z" id="Rectangle" fill="url(#linearGradient-1)"></path>
                <text id="All" opacity="0.870000005" font-family="Montserrat-BoldItalic, Montserrat" font-size=${isLarge?"8":"10"} font-style="italic" font-weight="bold" line-spacing="16" fill="#FFFFFF">
                    <tspan x=${isLarge?"11":"15.6406825"} y="18">${text}</tspan>
                </text>
            </g>
            <g id="Group-14-Copy" transform="translate(20.000000, 6.000000)">
                <g id="Group-2-Copy-2" transform="translate(0.078459, 0.000000)"></g>
            </g>
        </g>
    </g>
</svg>
`;

  return <SvgXml xml={xml} width={60} />;
};

import React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="341px" height="162px" viewBox="0 0 341 162" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>card-lang</title>
    <defs>
        <linearGradient x1="2.34489553%" y1="50%" x2="100%" y2="50%" id="linearGradient-1">
            <stop stop-color="#433F4A" offset="0%"></stop>
            <stop stop-color="#282430" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M17.5408098,0 L341,0 L341,0 L341,162 L7.49142711,162 C3.62543386,162 0.491427106,158.865993 0.491427106,155 C0.491427106,154.841791 0.496790665,154.683628 0.507508541,154.525783 L10.5568913,6.52578331 C10.8063247,2.85230923 13.8588771,-1.09999676e-15 17.5408098,0 Z" id="card-lang" fill="url(#linearGradient-1)"></path>
    </g>
</svg>
`;

export default () => <SvgXml xml={xml} width="100%" />;

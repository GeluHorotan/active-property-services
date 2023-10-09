import { getOrCreateTooltip } from '@lib/getOrCreateTooltip';

export const externalTooltipHandler = (context: any) => {
  // Tooltip Element
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set Text
  if (tooltip.body) {
    const bodyLines = tooltip.body.map((b: any) => b.lines);

    const tableBody = document.createElement('div');
    bodyLines.forEach((body: any, i: number) => {
      const colors = tooltip.labelColors[i];
      const match = body[0].match(/\[(-?\d+), (-?\d+)\]/);

      const number1 = parseInt(match[1]);
      const number2 = parseInt(match[2]);

      // Step 2: Calculate the difference (subtract the second number from the first)
      const difference = number2 - number1;

      const tr = document.createElement('tr');
      tr.style.backgroundColor = 'inherit';
      tr.style.borderWidth = '0';

      const td = document.createElement('td');
      td.style.borderWidth = ' 0';
      td.style.color = colors.backgroundColor;
      td.style.paddingRight = '11px';
      td.style.paddingLeft = '11px';
      td.style.paddingTop = '9px';
      td.style.paddingBottom = '9px';
      td.style.fontWeight = '500';
      td.style.fontSize = '12px';
      tooltipEl.style.setProperty(
        '-webkit-filter',
        'drop-shadow(0px 0px 6px rgba(172,172,172,0.42))'
      );

      const text = document.createTextNode(`€${difference}`);

      td.appendChild(text);
      tr.appendChild(td);
      tableBody.appendChild(tr);
    });

    const tableRoot = tooltipEl.querySelector('table');

    // Remove old children
    while (tableRoot.firstChild) {
      tableRoot.firstChild.remove();
    }

    // Add new children

    tableRoot.appendChild(tableBody);
  }

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = positionX + tooltip.caretX + 'px';
  tooltipEl.style.top = positionY + tooltip.caretY + 'px';
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding =
    tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
};

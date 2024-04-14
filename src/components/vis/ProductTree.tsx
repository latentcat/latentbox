"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";

export interface ChartData {
  name: string;
  id?: string;
  children?: ChartData[];
  value?: number;
  iconType?: string;
}

function getChart(data: ChartData, assetsPrefix?: string) {
  // Specify the chart’s dimensions.
  const width = 1100;
  const height = width;
  const cx = width * 0.5; // adjust as needed to fit
  const cy = height * 0.5; // adjust as needed to fit
  const radius = Math.min(width, height) / 2 - 150;
  const iconSize = 10

  // Create a radial cluster layout. The layout’s first dimension (x)
  // is the angle, while the second (y) is the radius.
  const tree = d3
    .cluster<ChartData>()
    .size([2 * Math.PI, radius])
    .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

  // Sort the tree and apply the layout.
  const root = tree(
    d3.hierarchy(data).sort((a, b) => d3.ascending(a.data.name, b.data.name)),
  );

  // Creates the SVG container.
  const svg = d3
    .create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-cx, -cy, width, height])
    .attr("style", "width: 100%; height: auto; font: 10px sans-serif;");

  // Append links.
  svg
    .append("g")
    .attr("fill", "none")
    .attr("stroke", "#555")
    .attr("stroke-opacity", 0.4)
    .attr("stroke-width", 1.5)
    .selectAll()
    .data(root.links())
    .join("path")
    .attr(
      "d",
      d3
        .linkRadial<
          any,
          d3.HierarchyPointLink<ChartData>,
          d3.HierarchyPointNode<ChartData>
        >()
        .angle((d) => d.x)
        .radius((d) => d.y),
    );

  // Append nodes.
  svg
    .append("g")
    .selectAll()
    .data(root.descendants())
    .join("circle")
    .attr(
      "transform",
      (d) => `rotate(${(d.x * 180) / Math.PI - 90}) translate(${d.y},0)`,
    )
    .attr("fill", (d) => (d.children ? "#555" : "#999"))
    .attr("r", 2.5);

  // Append nodes.
  svg
    .append("g")
    .selectAll()
    .data(root.descendants())
    .join("image")
    .filter(d => (d.data.id !== undefined))
    .attr("xlink:href", d => (`${assetsPrefix}/${d.data.id}.${d.data.iconType ?? 'jpg'}`))
    .attr("x", -iconSize)  // 图像左上角的x坐标
    .attr("y", -iconSize)  // 图像左上角的y坐标
    .attr("width", 2 * iconSize)  // 图像宽度
    .attr("height", 2 * iconSize)  // 图像高度
    .attr("clip-path", "inset(0% round 15px)")  // 图像高度
    .attr(
      "transform",
      (d) => `rotate(${(d.x * 180) / Math.PI - 90}) translate(${d.y},0) rotate(${d.x >= Math.PI ? 180 : 0})`,
    )
    .attr("fill", (d) => (d.children ? "#555" : "#999"))

  // Append labels.
  svg
    .append("g")
    .attr("stroke-linejoin", "round")
    .attr("stroke-width", 3)
    .selectAll()
    .data(root.descendants())
    .join("text")
    .attr(
      "transform",
      (d) =>
        `rotate(${(d.x * 180) / Math.PI - 90}) translate(${d.y + (d.data.id ? iconSize : 0)},0) rotate(${d.x >= Math.PI ? 180 : 0})`,
    )
    .attr("dy", "0.31em")
    .attr("x", (d) => (d.x < Math.PI === !d.children ? 6 : -6))
    .attr("text-anchor", (d) =>
      d.x < Math.PI === !d.children ? "start" : "end",
    )
    .attr("paint-order", "stroke")
    .attr("stroke", "hsl(var(--background))")
    .attr("fill", "currentColor")
    .text((d) => d.data.name);

  return svg.node();
}

interface ProductTreeProps {
  data: ChartData
  assetsPrefix?: string
}

export default function ProductTree({ data, assetsPrefix }: ProductTreeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const chart = getChart(data, assetsPrefix);
    if (chart) {
      container.appendChild(chart);
    }
    return () => {
      if (chart) {
        container.removeChild(chart);
      }
    };
  }, [data]);
  return <div ref={containerRef}></div>;
}

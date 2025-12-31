/**
 * Color theory utilities for generating complementary color schemes
 * All functions work with hex color strings and return arrays of hex colors
 */

import { hexToHsl, hslToHex } from './colorConversions.js';

/**
 * Normalize hue value to 0-360 range
 * @param {number} hue - Hue value (may be outside 0-360)
 * @returns {number} Normalized hue (0-360)
 */
function normalizeHue(hue) {
  while (hue < 0) hue += 360;
  while (hue >= 360) hue -= 360;
  return hue;
}

/**
 * Generate complementary color scheme (2 colors)
 * Colors are opposite on the color wheel (180° apart)
 * @param {string} baseHex - Base color in hex format
 * @returns {string[]} Array of 2 hex colors
 */
export function generateComplementary(baseHex) {
  const { h, s, l } = hexToHsl(baseHex);

  const complementHue = normalizeHue(h + 180);
  const complementHex = hslToHex(complementHue, s, l);

  return [baseHex, complementHex];
}

/**
 * Generate triadic color scheme (3 colors)
 * Colors are evenly spaced around the color wheel (120° apart)
 * @param {string} baseHex - Base color in hex format
 * @returns {string[]} Array of 3 hex colors
 */
export function generateTriadic(baseHex) {
  const { h, s, l } = hexToHsl(baseHex);

  const hue2 = normalizeHue(h + 120);
  const hue3 = normalizeHue(h + 240);

  return [
    baseHex,
    hslToHex(hue2, s, l),
    hslToHex(hue3, s, l)
  ];
}

/**
 * Generate split-complementary color scheme (3 colors)
 * Base color + two colors adjacent to its complement
 * @param {string} baseHex - Base color in hex format
 * @returns {string[]} Array of 3 hex colors
 */
export function generateSplitComplementary(baseHex) {
  const { h, s, l } = hexToHsl(baseHex);

  const complementHue = normalizeHue(h + 180);
  const split1 = normalizeHue(complementHue - 30);
  const split2 = normalizeHue(complementHue + 30);

  return [
    baseHex,
    hslToHex(split1, s, l),
    hslToHex(split2, s, l)
  ];
}

/**
 * Generate tetradic/rectangle color scheme (4 colors)
 * Two complementary color pairs
 * @param {string} baseHex - Base color in hex format
 * @returns {string[]} Array of 4 hex colors
 */
export function generateTetradic(baseHex) {
  const { h, s, l } = hexToHsl(baseHex);

  const hue2 = normalizeHue(h + 60);
  const hue3 = normalizeHue(h + 180);
  const hue4 = normalizeHue(h + 240);

  return [
    baseHex,
    hslToHex(hue2, s, l),
    hslToHex(hue3, s, l),
    hslToHex(hue4, s, l)
  ];
}

/**
 * Generate square color scheme (4 colors)
 * Colors evenly spaced around the color wheel (90° apart)
 * @param {string} baseHex - Base color in hex format
 * @returns {string[]} Array of 4 hex colors
 */
export function generateSquare(baseHex) {
  const { h, s, l } = hexToHsl(baseHex);

  const hue2 = normalizeHue(h + 90);
  const hue3 = normalizeHue(h + 180);
  const hue4 = normalizeHue(h + 270);

  return [
    baseHex,
    hslToHex(hue2, s, l),
    hslToHex(hue3, s, l),
    hslToHex(hue4, s, l)
  ];
}

/**
 * Generate analogous color scheme (4 colors)
 * Colors adjacent on the color wheel, creating harmonious palettes
 * @param {string} baseHex - Base color in hex format
 * @returns {string[]} Array of 4 hex colors
 */
export function generateAnalogous(baseHex) {
  const { h, s, l } = hexToHsl(baseHex);

  const hue2 = normalizeHue(h + 30);
  const hue3 = normalizeHue(h + 60);
  const hue4 = normalizeHue(h + 90);

  return [
    baseHex,
    hslToHex(hue2, s, l),
    hslToHex(hue3, s, l),
    hslToHex(hue4, s, l)
  ];
}

/**
 * Generate monochromatic color scheme (4 colors)
 * Same hue with varying lightness levels
 * @param {string} baseHex - Base color in hex format
 * @returns {string[]} Array of 4 hex colors
 */
export function generateMonochromatic(baseHex) {
  const { h, s, l } = hexToHsl(baseHex);

  // Create lighter and darker versions
  const l1 = Math.max(15, l - 25);
  const l2 = Math.max(10, l - 10);
  const l3 = Math.min(90, l + 15);

  return [
    hslToHex(h, s, l1),
    hslToHex(h, s, l2),
    baseHex,
    hslToHex(h, s, l3)
  ];
}

/**
 * Generate shades and tints (4 colors)
 * Darker shades and lighter tints of the base color
 * @param {string} baseHex - Base color in hex format
 * @returns {string[]} Array of 4 hex colors
 */
export function generateShadesAndTints(baseHex) {
  const { h, s, l } = hexToHsl(baseHex);

  // Shades (darker) and tints (lighter)
  const shade2 = Math.max(10, l - 30);
  const shade1 = Math.max(15, l - 15);
  const tint1 = Math.min(95, l + 20);

  return [
    hslToHex(h, s, shade2),
    hslToHex(h, s, shade1),
    baseHex,
    hslToHex(h, s, tint1)
  ];
}

/**
 * Generate pastel palette (4 colors)
 * Soft, desaturated versions with high lightness
 * @param {string} baseHex - Base color in hex format
 * @returns {string[]} Array of 4 hex colors
 */
export function generatePastel(baseHex) {
  const { h, s, l } = hexToHsl(baseHex);

  // Desaturate and lighten for pastel effect
  const pastelS = Math.min(45, s * 0.6);
  const pastelL = Math.max(75, 80);

  const hue2 = normalizeHue(h + 30);
  const hue3 = normalizeHue(h + 90);
  const hue4 = normalizeHue(h + 180);

  return [
    hslToHex(h, pastelS, pastelL),
    hslToHex(hue2, pastelS, pastelL - 5),
    hslToHex(hue3, pastelS, pastelL),
    hslToHex(hue4, pastelS, pastelL + 5)
  ];
}

/**
 * Generate deep and rich palette (4 colors)
 * Highly saturated, darker colors for bold palettes
 * @param {string} baseHex - Base color in hex format
 * @returns {string[]} Array of 4 hex colors
 */
export function generateDeepRich(baseHex) {
  const { h, s, l } = hexToHsl(baseHex);

  // Increase saturation and decrease lightness for deep/rich effect
  const richS = Math.min(85, Math.max(s, 70));
  const richL = Math.min(45, Math.max(l * 0.7, 30));

  const hue2 = normalizeHue(h + 30);
  const hue3 = normalizeHue(h + 90);
  const hue4 = normalizeHue(h + 180);

  return [
    hslToHex(h, richS, richL),
    hslToHex(hue2, richS, richL - 5),
    hslToHex(hue3, richS, richL + 5),
    hslToHex(hue4, richS, richL)
  ];
}

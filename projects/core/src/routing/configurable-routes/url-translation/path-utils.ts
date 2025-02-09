/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export const isParam = (segment: string): boolean => segment.startsWith(':');

export const getParamName = (segment: string): string => segment.slice(1); // it just removes leading ':'

export const ensureLeadingSlash = (path: string): string =>
  path.startsWith('/') ? path : '/' + path;

export const removeLeadingSlash = (path: string): string =>
  path.startsWith('/') ? path.slice(1) : path;

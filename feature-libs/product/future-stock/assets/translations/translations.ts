/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TranslationChunksConfig, TranslationResources } from '@spartacus/core';
import { en } from './en/index';

export const futureStockTranslations: TranslationResources = {
  en,
};

// expose all translation chunk mapping for FutureStock feature
export const futureStockTranslationChunksConfig: TranslationChunksConfig = {
  futureStock: ['futureStockDropdown'],
};

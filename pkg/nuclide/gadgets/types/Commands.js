'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import type {Gadget} from './Gadget';

/**
 * The interface for changing the application state. These would also be called
 * "action creators" in vanilla Flux.
 */
export type Commands = {
  registerGadget(gadget: Gadget): void;
};

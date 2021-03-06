'use strict';

/**
 * Merge multiple objects together in to one single new object.
 *
 * @param {Object} Objects that need to be merged together.
 * @returns {Object} A fully merged object.
 * @api private
 */
export function assign(...args) {
  return args.filter(Boolean).reduce(function merger(result, obj) {
    Object.keys(obj).forEach(function each(key) {
      if ('undefined' !== typeof obj[key]) {
        result[key] = obj[key];
      }
    });

    return result;
  }, {});
}

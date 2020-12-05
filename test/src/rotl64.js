import test from 'ava';

import { rotl64 , get64 } from '../../src' ;

function macro (t, expected, s, a) {
	a = get64(...a);
	expected = get64(...expected);
	t.deepEqual(rotl64(a, s), expected);
}

macro.title = (providedTitle, expected, s, a) => `${providedTitle || ''} ${a} rotl ${s} === ${expected}`.trim();

test(macro, [0x00000000, 0x00000000],  0, [0x00000000, 0x00000000]);
test(macro, [0x00000000, 0x00000000], 53, [0x00000000, 0x00000000]);
test(macro, [0x00000000, 0x00000001],  1, [0x80000000, 0x00000000]);
test(macro, [0x00000000, 0x00000001], 60, [0x00000000, 0x00000010]);
test(macro, [0x00000000, 0x00000001],  0, [0x00000000, 0x00000001]);
test(macro, [0x00000000, 0x00000002],  0, [0x00000000, 0x00000002]);

test(macro, [0xFFFFFFFF, 0xFFFFFFFF],  0, [0xFFFFFFFF, 0xFFFFFFFF]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF],  4, [0xFFFFFFFF, 0xFFFFFFFF]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF],  8, [0xFFFFFFFF, 0xFFFFFFFF]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF], 12, [0xFFFFFFFF, 0xFFFFFFFF]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF], 16, [0xFFFFFFFF, 0xFFFFFFFF]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF], 20, [0xFFFFFFFF, 0xFFFFFFFF]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF], 24, [0xFFFFFFFF, 0xFFFFFFFF]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF], 28, [0xFFFFFFFF, 0xFFFFFFFF]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF], 32, [0xFFFFFFFF, 0xFFFFFFFF]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF], 36, [0xFFFFFFFF, 0xFFFFFFFF]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF], 40, [0xFFFFFFFF, 0xFFFFFFFF]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF], 44, [0xFFFFFFFF, 0xFFFFFFFF]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF], 48, [0xFFFFFFFF, 0xFFFFFFFF]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF], 52, [0xFFFFFFFF, 0xFFFFFFFF]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF], 56, [0xFFFFFFFF, 0xFFFFFFFF]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF], 60, [0xFFFFFFFF, 0xFFFFFFFF]);
test(macro, [0xFFFFFFFF, 0xFFFFFFFF], 64, [0xFFFFFFFF, 0xFFFFFFFF]);

test(macro, [0x01234567, 0x89ABCDEF],  0, [0x01234567, 0x89ABCDEF]);
test(macro, [0x01234567, 0x89ABCDEF],  4, [0xF0123456, 0x789ABCDE]);
test(macro, [0x01234567, 0x89ABCDEF],  8, [0xEF012345, 0x6789ABCD]);
test(macro, [0x01234567, 0x89ABCDEF], 12, [0xDEF01234, 0x56789ABC]);
test(macro, [0x01234567, 0x89ABCDEF], 16, [0xCDEF0123, 0x456789AB]);
test(macro, [0x01234567, 0x89ABCDEF], 20, [0xBCDEF012, 0x3456789A]);
test(macro, [0x01234567, 0x89ABCDEF], 24, [0xABCDEF01, 0x23456789]);
test(macro, [0x01234567, 0x89ABCDEF], 28, [0x9ABCDEF0, 0x12345678]);
test(macro, [0x01234567, 0x89ABCDEF], 32, [0x89ABCDEF, 0x01234567]);
test(macro, [0x01234567, 0x89ABCDEF], 36, [0x789ABCDE, 0xF0123456]);
test(macro, [0x01234567, 0x89ABCDEF], 40, [0x6789ABCD, 0xEF012345]);
test(macro, [0x01234567, 0x89ABCDEF], 44, [0x56789ABC, 0xDEF01234]);
test(macro, [0x01234567, 0x89ABCDEF], 48, [0x456789AB, 0xCDEF0123]);
test(macro, [0x01234567, 0x89ABCDEF], 52, [0x3456789A, 0xBCDEF012]);
test(macro, [0x01234567, 0x89ABCDEF], 56, [0x23456789, 0xABCDEF01]);
test(macro, [0x01234567, 0x89ABCDEF], 60, [0x12345678, 0x9ABCDEF0]);
test(macro, [0x01234567, 0x89ABCDEF], 64, [0x01234567, 0x89ABCDEF]);

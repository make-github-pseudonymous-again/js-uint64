import {add64} from './add64';

/**
 * Multiplies two uint32 into one uint64.
 */
const mul3264 = (a, b) => {
	const a0 = (a >>> 16) & 0xFFFF;
	const a1 = a & 0xFFFF;
	const b0 = (b >>> 16) & 0xFFFF;
	const b1 = b & 0xFFFF;

	const x = [Math.imul(a0,b0), Math.imul(a1, b1)];
	const t = Math.imul(a0,b1);
	const u = Math.imul(a1,b0);
	const y = [(t >>> 16) | 0, (t << 16) | 0];
	const z = [(u >>> 16) | 0, (u << 16) | 0];
	return add64(x,add64(y,z));
};

/**
 * Multiplies two uint64 into one uint64.
 */
export function mul64 (a, b) {

	const [a0, a1] = a;
	const [b0, b1] = b;

	const x = [(Math.imul(a1, b0) + Math.imul(a0, b1)) | 0, 0];
	const y = mul3264(a1, b1);
	return add64(x, y);

}

import { assert } from 'chai';
import API from '../src/api';

describe("src/api", () => {
    it("Must return sum of arguments", async () => {
        assert.equal(await API.mathOperation(123, 123, 'addition'), 246)
    });
})
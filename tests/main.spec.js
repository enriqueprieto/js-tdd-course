/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

import { expect } from 'chai'
import * as calc from '../src/main'

describe('Calc', () => {
	describe('Smoke tests', () => {
		it('should exist the calc lib', () => {
			expect(calc).to.exist
		})

		it('should exist the method `sum`', () => {
			expect(calc.sum).to.exist
			expect(calc.sum).to.be.an('function')
		})

		it('should exist the method `sub`', () => {
			expect(calc.sub).to.exist
			expect(calc.sub).to.be.an('function')
		})

		it('should exist the method `multi`', () => {
			expect(calc.multi).to.exist
			expect(calc.multi).to.be.an('function')
		})

		it('should exist the method `div`', () => {
			expect(calc.div).to.exist
			expect(calc.div).to.be.an('function')
		})
	})

	describe('Sum', () => {
		it('should return 4 when `sum(2, 2)`', () => {
			expect(calc.sum(2, 2)).to.be.equal(4)
		})
	})

	describe('Sub', () => {
		it('should return 4 when `sub(6, 2)`', () => {
			expect(calc.sub(6, 2)).to.be.equal(4)
		})

		it('should return -4 when `sub(6, 10)`', () => {
			expect(calc.sub(6, 10)).to.be.equal(-4)
		})
	})

	describe('Multi', () => {
		it('should return 4 when `multi(2, 2)`', () => {
			expect(calc.multi(2, 2)).to.be.equal(4)
		})
	})

	describe('Div', () => {
		it('should return 4 when `div(8, 2)`', () => {
			expect(calc.div(8, 2)).to.be.equal(4)
		})

		it('should return `Não é possível divisão por zero!` when `div(8, 0)`', () => {
			expect(calc.div(8, 0)).to.be.equal('Não é possível divisão por zero!')
		})
	})
})

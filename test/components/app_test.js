import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app'
import { describe, beforeEach, it } from 'mocha'
describe('App', () => {
  let component

  beforeEach(() => {
    component = renderComponent(App)
  })

  it('renders something', () => {
    expect(component).assert.truthy
  })
})

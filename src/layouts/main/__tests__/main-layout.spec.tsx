import { ChakraKBar } from '@chakra-ui-kbar/core'
import { render } from '@testing-library/react'
import { FeatureProvider } from 'toggled'

import { MainLayout } from '../main.layout'

describe('Layouts / Main', () => {
  it('renders the main layout', () => {
    const view = render(
      <FeatureProvider features={[]}>
        <ChakraKBar>
          <MainLayout>
            <h1>Content</h1>
          </MainLayout>
        </ChakraKBar>
      </FeatureProvider>,
    )

    expect(view.baseElement).toMatchSnapshot()
  })
})

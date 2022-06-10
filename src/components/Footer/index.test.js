import Footer from './'
import { render } from '@testing-library/react'
import { ThemeProvider } from '../../utils/contex'

describe('Footer', () => {
    test('Should render without crash', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>

        )
    })
})
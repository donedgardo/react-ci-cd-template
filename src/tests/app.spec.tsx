import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('App', () => {
  it("should should start counter at 0", () => {
    const { getByText } = render(<App />);
    expect(getByText(/count is 0/i)).toBeInTheDocument();
  })

  it("should increment counter by 1 on click", async () => {
    const { getByText, getByRole } = render(<App />);
    const user = userEvent.setup();
    await user.click(getByRole('button', { name: /count is/ }))
    expect(getByText(/count is 1/i)).toBeInTheDocument();
  })
})

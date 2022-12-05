import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
describe("App tests", () => {
  it("Renders title", async () => {
    render(<App />);
    const linkElement = screen.getByText(/REACT CHAT/i);
    await waitFor(
      () => {
        expect(linkElement).toBeInTheDocument();
      },
      {
        timeout: 3000,
      }
    );
  });

  it("Show chat box when user is clicked", async () => {
    render(<App />);

    const userDon = await screen.findByText("Don");
    fireEvent.click(userDon);
    await waitFor(
      () => {
        expect(
          screen.getByRole("textbox", { name: /your message/i })
        ).toBeInTheDocument();
        expect(
          screen.getByRole("button", { name: /send/i })
        ).toBeInTheDocument();
      },
      {
        timeout: 3000,
      }
    );
  });

  it("Check that messages are sent and displayed in the chat box", async () => {
    render(<App />);

    const userDon = await screen.findByText("Don");
    fireEvent.click(userDon);
    const chatInput = screen.getByRole("textbox", { name: /your message/i });
    fireEvent.click(chatInput);
    fireEvent.change(chatInput, {
      target: { value: "my chat text" },
    });
    const sendBtn = await screen.getByRole("button", { name: /send/i });
    fireEvent.click(sendBtn);
    await waitFor(
      () => {
        expect(screen.getByText(/my chat text/i)).toBeInTheDocument();
      },
      {
        timeout: 3000,
      }
    );
  });
});

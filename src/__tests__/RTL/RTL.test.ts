import { render, screen } from "../../RTLUtils";
import userEvents from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";
import { waitFor, waitForElementToBeRemoved } from "@testing-library/react";

describe("Demo app text", () => {
  beforeEach(() => {
    render();
  });

  test("Login page tests", async () => {
    expect(screen.getByLabelText(/user name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /login/i,
      })
    ).toBeEnabled();
    expect(screen.queryByTestId("errormessage")).toBeNull();

    userEvents.click(
      screen.getByRole("button", {
        name: /login/i,
      })
    );
    // expect(await screen.findByTestId("errormessage")).toHaveTextContent(
    //   "User Name and Password are required"
    // );

    expect(
      await screen.findByText(/user name and password are required/i)
    ).toBeVisible();

    //Invalide password
    userEvent.paste(screen.getByLabelText(/user name/i), "invalid username");
    userEvent.paste(screen.getByLabelText(/password/i), "invalid password");
    userEvents.click(
      screen.getByRole("button", {
        name: /login/i,
      })
    );
    expect(await screen.findByRole("progressbar")).toBeVisible();
    await waitForElementToBeRemoved(() => screen.getByRole("progressbar"), {
      timeout: 2000,
    });

    expect(screen.getByText(/invalid user name or password/i)).toBeVisible();

    //successful login
    userEvent.paste(screen.getByLabelText(/user name/i), "u1");
    userEvent.paste(screen.getByLabelText(/password/i), "p1");
    userEvents.click(
      screen.getByRole("button", {
        name: /login/i,
      })
    );
    expect(await screen.findByRole("progressbar")).toBeVisible();

    await waitFor(
      async () => {
        expect(
          await screen.findByRole("heading", {
            name: /home page/i,
          })
        ).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });

  test("Home page tests", async () => {
    expect(screen.getByText(/no rows/i)).toBeVisible();
    expect(screen.getByRole("grid")).toHaveTextContent("No Rows");
    expect(
      screen.getByRole("button", {
        name: /load data/i,
      })
    ).toBeEnabled();

    userEvent.click(
      screen.getByRole("button", {
        name: /load data/i,
      })
    );

    expect(await screen.findByRole("progressbar")).toBeVisible();
    await waitForElementToBeRemoved(() => screen.getByRole("progressbar"), {
      timeout: 2000,
    });

    expect(
      screen.getByRole("row", {
        name: /Frozen yoghurt 159 6 24 4/i,
      })
    ).toBeInTheDocument();

    expect(screen.getAllByRole("row")).toHaveLength(6);
  });
});

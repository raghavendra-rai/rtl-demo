import React from "react";
import Loader from "../Loader";

export const validateLogin = async (username: string, password: string) => {
  if (username === "" || password === "") {
    return false;
  }
  return true;
};

export interface ILoginStateToProps {
  loading: boolean;
  error: string;
}

export interface ILoginDispatchToProps {
  login: (username: string, password: string) => void;
}

export interface ILoginProps
  extends ILoginStateToProps,
    ILoginDispatchToProps {}

export default class Login extends React.Component<
  ILoginProps,
  { username: string; password: string; error: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { username: "", password: "", error: "" };
  }

  private handleSubmit = async (event: React.FormEvent) => {
    event.stopPropagation();
    event.preventDefault();

    const isValid: any = await validateLogin(
      this.state.username,
      this.state.password
    );
    if (isValid) {
      this.props.login(this.state.username, this.state.password);
    }

    this.setState({
      error: isValid ? "" : "User Name and Password are required",
      username: "",
      password: "",
    });
  };

  public render() {
    const { loading } = this.props;
    const error = this.state.error || this.props.error;
    return (
      <div style={{ marginTop: 100 }}>
        {loading ? (
          <Loader />
        ) : (
          <form onSubmit={this.handleSubmit}>
            {!error || (
              <div style={{ color: "red" }} data-testid="errormessage">
                {error}
              </div>
            )}
            <div>
              <label>
                User Name
                <input
                  type="text"
                  onChange={(event) =>
                    this.setState({ username: event.target.value })
                  }
                />
              </label>
            </div>
            <div>
              <label>
                Password
                <input
                  type="password"
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                />
              </label>
            </div>
            <div>
              <button type="submit">LOGIN</button>
            </div>
          </form>
        )}
      </div>
    );
  }
}

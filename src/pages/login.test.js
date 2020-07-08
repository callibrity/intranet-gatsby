import React from "react"
import { mount } from "enzyme"
import { googleClientId } from "@globals/constants" 
import { UserContext } from "@globals/contexts"
import Login from "@pages/login"

const mockSetUsername = jest.fn()
const mockSetUserEmail = jest.fn()
const mockNavigate = jest.fn()
const mockUseGoogleLogin = jest.fn()
const mockSignIn = jest.fn()

const contextProps = {
  value: {
    setUsername: mockSetUsername,
    setUserEmail: mockSetUserEmail
  }
} 

jest.mock("gatsby", () => ({
  ...jest.requireActual("gatsby"),
  navigate: val => mockNavigate(val)
}))

jest.mock("react-google-login", () => ({
  ...jest.requireActual("react-google-login"),
  useGoogleLogin: val => mockUseGoogleLogin(val)
}))

mockUseGoogleLogin.mockReturnValue({ signIn: mockSignIn })

describe("Login component", () => {

  beforeEach(() => { jest.clearAllMocks() })

  it("should render", () => {
    const wrapper = mount(<UserContext.Provider { ...contextProps }><Login /></UserContext.Provider>)

    expect(wrapper.exists()).toEqual(true)
  })

  it("should setUsername, setUserEmail, navigate on google login success", () => {
    const wrapper = mount(<UserContext.Provider { ...contextProps }><Login /></UserContext.Provider>)

    expect(wrapper.exists()).toEqual(true)
    expect(mockUseGoogleLogin).toHaveBeenCalledTimes(1)
    expect(mockUseGoogleLogin).toHaveBeenCalledWith({
      clientId: googleClientId,
      onSuccess: expect.any(Function),
      isSignedIn: true
    })

    mockUseGoogleLogin.mock.calls[0][0].onSuccess({
      profileObj: {
        name: "nameHere",
        email: "emailHere"
      }
    })

    expect(mockSetUsername).toHaveBeenCalledTimes(1)
    expect(mockSetUsername).toHaveBeenCalledWith("nameHere")
    expect(mockSetUserEmail).toHaveBeenCalledTimes(1)
    expect(mockSetUserEmail).toHaveBeenCalledWith("emailHere")
    expect(mockNavigate).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenCalledWith("/")
  })

  it("should signIn onClick", () => {
    const wrapper = mount(<UserContext.Provider { ...contextProps }><Login /></UserContext.Provider>)
    const signInButton = wrapper.find("button")
    
    signInButton.simulate("click")

    expect(mockSignIn).toHaveBeenCalledTimes(1)
  })
})

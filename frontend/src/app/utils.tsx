import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"

export const mobile_number = "+917678087061"
export const whatsApp_link = "https://wa.me/+917678087061"
export const instagram_link = "https://instagram.com"
export const facebook_link = "https://facebook.com"
export const email_id = "mailto:arungupta3810@gmail.com"

export const style = {
  loginButton: {
    padding: '5px 14px',
    borderRadius: '10px',
    fontSize: 'var(--font-size-small)',
    border: '1px solid var(--green)',
    cursor: 'pointer',
    color: 'white',
    background: 'var(--green)'
  },
  loginwrapper: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '10px'
  }
}
export const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      icon: <ShoppingCartOutlined />,
      name: "",
      link: "/cart",
    },
    {
      icon: true? <div style={style.loginwrapper}><p>Welcome back! </p><button style={style.loginButton}>Login</button></div> : <UserOutlined />,
      name: "",
      action: "LOGIN_MODAL_OPEN",
      link: "",
    },
  ];
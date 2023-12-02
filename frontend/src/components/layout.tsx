import FooterComponent from "./footer";
import HeaderComponent from "./header";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  )
}
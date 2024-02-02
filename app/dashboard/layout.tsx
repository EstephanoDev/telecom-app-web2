import { styles, Sidebar, Footer, Navbar } from "../ui/dashboard"
import { Provider } from "./provider"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        <Provider >
          {children}
        </Provider>
        <Footer />
      </div>
    </div>
  )
}

export default Layout

import { Layout, Image } from "antd"
import SideMenu from './components/SideMenu'
import AppRoutes from "./components/AppRoutes";
const { Sider, Content, Footer } = Layout;
function App() {

  return (
    <Layout>
      <Sider style={{ height: "100vh", backgroundColor: "white" }}>
        <Image preview={false} src='https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Logo-700x394.png' />
        <SideMenu />
      </Sider>
      <Layout>
        <Content style={{ backgroundColor: 'blue', }}>
          <AppRoutes />
        </Content>
        <Footer style={{ textAlign: 'center', }}>
          Uber Eats Resterant Dashboard 2023
        </Footer>
      </Layout>

    </Layout>

  )
}

export default App

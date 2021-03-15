import React from "react";
import { Input, Button, Layout } from "antd";
import SendIcon from "@material-ui/icons/Send";
import "antd/dist/antd.css";
import "./App.css";
const { Header, Content, Footer } = Layout;

export default class App extends React.Component {
state={
    iv:'',
    cv:[]
  };
  
  onc=(event)=>{
    this.setState({iv:event.target.value});
  };

  oc=()=>{
    var te=this.state.cv;
    te.push(this.state.iv);
    this.setState({cv:te,iv:''});
    console.log(this.state.cv);
  };
  handleKeyDown=(e)=>{
    if (e.key === 'Enter') {
      this.oc();
      console.log('do validate');
    }
  }
render(){
  return (
    <div>
      <Layout>
        <Header>
          <center>
            <h1 style={{color:"white"}}>College Enquiry Chatbot</h1>
          </center>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 540 }}>
{this.state.cv}
          </div>

        </Content>
        <Footer>
          <div class="send">
            <Input placeholder="Type here"  className="ca" value={this.state.iv} onKeyDown={this.handleKeyDown} onChange={this.onc}/>
            <Button className="ca" onClick={this.oc}>
              <SendIcon />
            </Button>
          </div>
        </Footer>
      </Layout>
    </div>
  );
}
};

import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import Topics from 'api/topics';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'all',
      tabs: [
        {
          id: 'all',
          text: '全部'
        },
        {
          id: 'good',
          text: '精华'
        },
        {
          id: 'share',
          text: '分享'
        },
        {
          id: 'ask',
          text: '问答'
        },
        {
          id: 'job',
          text: '招聘'
        },
        {
          id: 'dev',
          text: '客户端测试'
        }
      ],
      list: []
    };
  }

  componentDidMount() {
    this.getTopics(this.state.activeTab);
  }

  changeTab(tab) {
    if(this.state.activeTab === tab.id)
      return;
    this.setState({activeTab: tab.id});
    this.getTopics(tab.id);
  }

  getTopics(tab) {
    const self = this;
    Topics.get(tab).then(function(res){
      console.log(res.data[0])
      if (!res || !res.data || !res.data.length) {
        self.setState({list: []});
        return;
      }
      self.setState({list: res.data});
    }, function(err){
      console.log(err)
    })
  }

  getItemTabTitle(item) {
    if (item.top)
      return '置顶';
    if (item.good)
      return '精华';
    switch(item.tab) {
      case 'all':
        return '全部';
      case 'share':
        return '分享';
      case 'ask':
        return '问答';
      case 'job':
        return '招聘';
      case 'dev':
        return '客户端测试';
    }
  }

  render() {
    return (
      <div className={styles.page}>
        <div className={styles.header}>
          <i className={styles.logo} />
          <input className={styles.input} type="text" />
        </div>
        <div className={styles.content}>
          <div className={styles.inner}>
            <ul className={styles.tab}>
              {this.state.tabs.map(tab => (<li key={tab.id} className={styles.item+(this.state.activeTab === tab.id ? ' '+styles.active : '')} onClick={this.changeTab.bind(this, tab)}>{tab.text}</li>))}
            </ul>
            <ul className={styles.list}>
              {this.state.list.map(item => (
                <li key={item.id} className={styles.item+(this.state.activeTab === item.id ? ' '+styles.active : '')} onClick={this.changeTab.bind(this, item)}>
                  <img className={styles.avatar} src={item.author.avatar_url} />
                  <span className={styles.count}><span className={styles.reply}>{item.reply_count}</span>/<span className={styles.visit}>{item.visit_count}</span></span>
                  <span className={styles.itemTab+(item.top || item.good ? ' '+styles.top : '')}>{this.getItemTabTitle(item)}</span>
                  <span className={styles.title}>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(IndexPage);

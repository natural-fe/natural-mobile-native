/*
 * MIT License
 *
 * Copyright (c) 2016 yanbo
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import NetUtils from './../utils/NetUtils';
import ActionBar from './../components/ActionBar';
import { connect } from 'react-redux';
import NavigatorRoute from './../common/NavigatorRoute';
import TabNavigator from 'react-native-tab-navigator'
import HomePage from './HomePage';
import MinePage from './MinePage';
import WeiXinNewsPage from './WeiXinNewsPage';
/**
 * 主容器界面
 * 核心知识点：使用React Native Redux框架管理
 *           react-native-tab-navigator第三方底部导航栏的使用及封装学习
 */
class MainScene extends Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    route: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }

  componentDidMount() {
    const {dispatch} = this.props;
  }

  render() {
    const {mainPage} = this.props;
    return (
      <View style={styles.container}>
        <TabNavigator tabBarStyle={{ backgroundColor:'white' }} style={{backgroundColor: 'white'}}>
          <TabNavigator.Item
            title="潮流生活"
            selectedTitleStyle={{color: '#03a9f4'}}
            selected={this.state.selectedTab === 'home'}
            renderIcon={() => <Image source={require('./../res/ic_btm_home.png')} />}
            renderSelectedIcon={() => <Image source={require('./../res/ic_btm_home.png')} />}
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <HomePage
              navigator={this.props.navigator}
              route={this.props.route}/>
          </TabNavigator.Item>
          <TabNavigator.Item
            title="微信精选"
            selectedTitleStyle={{color: '#03a9f4'}}
            selected={this.state.selectedTab === 'weixin'}
            renderIcon={() => <Image source={require('./../res/ic_btm_weixin.png')} />}
            renderSelectedIcon={() => <Image source={require('./../res/ic_btm_weixin.png')} />}
            onPress={() => this.setState({ selectedTab: 'weixin' })}>
            <WeiXinNewsPage
              navigator={this.props.navigator}
              route={this.props.route}/>
          </TabNavigator.Item>
          <TabNavigator.Item
            title="个人中心"
            selectedTitleStyle={{color: '#03a9f4'}}
            selected={this.state.selectedTab === 'person'}
            renderIcon={() => <Image source={require('./../res/ic_btm_persion.png')} />}
            renderSelectedIcon={() => <Image source={require('./../res/ic_btm_persion.png')} />}
            onPress={() => this.setState({ selectedTab: 'person' })}>
            <MinePage
              navigator={this.props.navigator}
              route={this.props.route}/>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { mainPage } = state;
  return {
    mainPage,
  }
}
export default connect(mapStateToProps)(MainScene);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
});
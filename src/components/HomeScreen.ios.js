import React, {Component} from 'react';
import{
	TabBarIOS,
	Text
}from 'react-native';
import NewsFeed from './NewFeed';
import * as globalStyles from '../styles/global';

export default class HomeScreen extends Component {
	constructor(props){
		super(props);
		this.state = {
			tab: 'newsFeed'
		};
	}
	render(){
		return(
			<TabBarIOS
				barTintColor={globalStles.BAR_COLOR}
				tintColor={globalStyles.Link_COLOR}
				translucent={false}
			>		
				<TabBarIOS.item 
					badge={4}
					systemIcon={'featured'}
					selected={this.state.tab === 'newsFeed'}
					onPress={() => this.setState({tab: 'newsFeed'})}
					>
					<NewsFeed/>
				</TabBarIOS.item>
				
				<TabBarIOS.item 
					systemIcon={'search'}
					selected={this.state.tab === 'search'}
					onPress={() => this.setState({tab: 'search'})}
					>
					<Search/>
				</TabBarIOS.item>
				
				<TabBarIOS.item 
					systemIcon={'bookmarks'}
					selected={this.state.tab === 'bookmarks'}
					onPress={() => this.setState({tab: 'bookmarks'})}
					>
					<Text>Bookmarks</Text>
				</TabBarIOS.item>
			</TabBarIOS>
		);
	}
}
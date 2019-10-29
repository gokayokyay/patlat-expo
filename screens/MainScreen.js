import React from 'react';
import { View, Text, SafeAreaView, FlatList, Alert, ActivityIndicator } from 'react-native';
import CreatePostComponent from '../components/CreatePostComponent';
import FeedSelectionComponent from '../components/FeedSelectionComponent';
import PostComponent from '../components/PostComponent';
import LoadingOverlayComponent from '../components/LoadingOverlayComponent';
import { connect } from 'react-redux';

// DEV
import Parse from 'parse/react-native';
// DEV

class MainScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      loadingMore: true
    };
    this.retrieveMorePosts = this.retrieveMorePosts.bind(this);
    this.retrieveLatestPosts = this.retrieveLatestPosts.bind(this);
  }
  componentWillMount(){
    this.retrieveLatestPosts();
  }
  componentDidMount(){
    // console.log(this.props);
    Parse.User.currentAsync().then(user => console.log('Current User:', user));
  }
  componentWillUpdate(){
    // console.log("Main Screen props", this.props);
  }
  renderLoadingScreen(){
    if(typeof this.props.state.createPost.createPostPending !== "undefined" || this.props.state.createPost.createPostPending != null) {
      if (this.props.state.createPost.createPostPending) {
        this.retrieveLatestPosts();
        return <LoadingOverlayComponent />
      }
    } else {
      return;
    }
  }
  _renderFooter = () => {
    if (!this.state.loadingMore) return null;

    return (
      <View
        style={{
          position: 'relative',
          width: '100%',
          height: 140,
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  }
  async retrieveLatestPosts(){
    this.setState({loadingMore: true})
    var Post = Parse.Object.extend("Post");
    var query = new Parse.Query(Post);
    query.limit(12);
    query.descending("createdAt");
    query.find().then(data => this.setState({data, loadingMore: false})).catch(err => this.setState({loadingPostError: true}));
  }
  async retrieveMorePosts(){
    if (!this.state.loadingMore) {
      this.setState({loadingMore: true})
      console.log("retrieveMorePosts");
      var Post = Parse.Object.extend("Post");
      var query = new Parse.Query(Post);
      query.limit(12);
      query.descending("createdAt");
      query.skip(this.state.data.length);
      let result = await query.find();
      // query.find().then(result => this.setState({data: [...this.state.data, ...result], loadingMore: false})).catch(err => this.setState({loadingPostError: true}));
      // query.find().then(result => console.log("resultquery,", result)).catch(err => console.log("errrrrrr", err));
      console.log("retrieveMorePosts, results", result);
      this.setState({data: [...this.state.data, ...result], loadingMore: false});
    }
  }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee' }}>
            {this.renderLoadingScreen()}
            <View style={styles.topView}>
                <FeedSelectionComponent />
                <CreatePostComponent />
            </View>
            <View style={styles.bottomView}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => (
                        <PostComponent post={item} />
                    )}
                    style={{flex: 1, marginVertical: 20, overflow: 'visible', zIndex: 1, marginTop: -10}}
                    keyExtractor={item=>{
                      // console.log(item.id);
                      // console.log(item);
                      return item.id;
                    }}
                    ListFooterComponent={this._renderFooter}
                    // onEndReachedThreshold={0.5}
                    onEndReached={this.retrieveMorePosts}
                />
            </View>
        </View>
      );
    }
}

const styles = {
    topView: {
        flex: 2,
        height: '20%',
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        
        elevation: 15,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'black',
        zIndex: 2
    },
    bottomView: {
        flex: 8,
        height: '80%',
        width: '100%',
        paddingTop: 20
    }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(MainScreen);
  
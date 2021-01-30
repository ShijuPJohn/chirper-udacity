import React, {Component} from 'react'
import {connect} from "react-redux";
import {formatDate, formatTweet} from "../utils/helpers";

class Tweet extends Component {
    render() {
        const {tweet} = this.props
        if (tweet == null) {
            return <p>This tweet doesn't exist</p>
        }
        const {name, avatar, timestamp, text, hasLiked, likes, replies, id, parentTweet: parent} = tweet
        return (

            <div className={'tweet'}>
                <img src={avatar} alt={'profile icon'} className={'avatar'}/>
                <div className={'tweet-info'}>
                    <span>{name}</span>
                    <div>{formatDate(timestamp)}</div>
                    {parent &&
                    <button className={'replying-to'} onClick={(e)=>{this.toParent(e,parent.id)}}>
                        Replying to @ {parent.author}
                    </button>}
                </div>
                {this.props.tweet.text}
            </div>
        )
    }

}

function mapStateToProps({authedUser, users, tweets}, {id}) {
    const tweet = tweets[id]
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null
    return {
        authedUser,
        tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
            : null,
    }
}

export default connect(mapStateToProps)(Tweet)
import React from 'react';

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };

    this.handlebitrateClick = this.handlebitrateClick.bind(this);
    this.handleresClick = this.handleresClick.bind(this);

  }

  handlebitrateClick(event){
      this.setState({
        settings: Object.assign({},
                  this.state.settings, {
                    bitrate: 12
                  })
      });
  }

  handleresClick(event){
    this.setState({
      settings: Object.assign({}, this.state.settings,{
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    });
  }

  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.handlebitrateClick}>set bitrate</button>
        <button className="resolution" onClick={this.handleresClick}>set resolution</button>
      </div>
    );
  }
}

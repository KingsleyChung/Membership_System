import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Activities } from '../api/collection';
import AvatarList from '../components/AvatarList';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const ThickDivider = () => (
  <div className="col-xs-12 col-sm-12" style={{height: 10, backgroundColor: "#F3F3F3", borderTop: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", marginTop: 10, marginBottom: 10}}/>
)

const ThinDivider = () => (
  <div className="col-xs-12 col-sm-12" style={{height: 1, backgroundColor: "#E2E2E2", marginTop: 10, marginBottom: 10}}/>
)

class ActivityDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmStatus: false,
      resultStatus: false,
    }
  }

  handleApply() {
    if (!Meteor.user()) {
      this.props.history.push("/signin");
    }
    console.log('报名');
    Meteor.call('activity.apply', Meteor.userId(), this.props.activity._id);
    this.setState({confirmStatus: false, resultStatus: true})
  }

  render() {
    const confirmActions = [
      <FlatButton
        label="取消"
        primary={true}
        onClick={() => {this.setState({confirmStatus: false})}}
      />,
      <FlatButton
        label="确定"
        primary={true}
        onClick={this.handleApply.bind(this)}
      />,
    ];
    const resultActions = [
      <FlatButton
        label="确定"
        primary={true}
        onClick={() => {this.setState({resultStatus: false})}}
      />,
    ];
    return (
      <div className="container-fluid" style={{padding: 0, paddingBottom: 46}}>
        {this.props.activity && 
          <div className="container-fluid" style={{padding: 0}}>
            <Card style={{marginBottom: 10}}>
              <CardMedia
                overlay={<CardTitle title={this.props.activity.title} />}
              >
                <img src={this.props.activity.cover} alt="" />
              </CardMedia>
            </Card>
            <div className="col-xs-12 col-sm-12" style={{position: "fixed", top: 0, display: "flex", justifyContent: "space-between", alignItems: "center", padding: 0}}>
              <div style={{fontSize: 18, marginLeft: 16}}  onClick={() => {this.props.history.goBack()}}>
                <i className="fas fa-chevron-left" style={{color: "white"}}></i>
              </div>
              <IconMenu
                iconButtonElement={<IconButton iconStyle={{color: "white"}}><MoreVertIcon /></IconButton>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                <MenuItem primaryText="收藏" />
                <MenuItem primaryText="分享" />
              </IconMenu>
            </div>
            <div className="col-xs-12 col-sm-12">
              <div style={{borderBottom: "1px solid #E2E2E2", fontSize: 24, paddingBottom: 6, marginBottom: 6}}>活动简介</div>
              <div>{this.props.activity.description}</div>
            </div>
            <ThickDivider />
            <div className="col-xs-12 col-sm-12" style={{display: "flex", alignItems: "center"}}>
              <i className="far fa-calendar-alt"></i>
              <div style={{marginLeft: 16}}>{moment(this.props.activity.start).format("YYYY-MM-DD") + " -- " + moment(this.props.activity.end).format("YYYY-MM-DD")}</div>
            </div>
            <ThinDivider />
            <div className="col-xs-12 col-sm-12" style={{display: "flex", alignItems: "center"}}>
              <i className="fas fa-map-marker-alt"></i>
              <div style={{marginLeft: 16}}>{this.props.activity.location}</div>
            </div>
            <ThinDivider />
            <div className="col-xs-12 col-sm-12" style={{display: "flex", alignItems: "center"}}>
              <i className="fas fa-sort-numeric-down"></i>
              <div style={{marginLeft: 16}}>{'最多' + this.props.activity.memberCapacity + '人报名'}</div>
            </div>
            <ThinDivider />
            <div className="col-xs-12 col-sm-12" style={{display: "flex", alignItems: "center"}}>
              {this.props.activity.attendance ? <i className="far fa-calendar-check"></i> : <i className="far fa-calendar-times"></i>}
              <div style={{marginLeft: 16}}>{this.props.activity.attendance ? "需要签到" : "无需签到"}</div>
            </div>
            <ThickDivider />
            <div className="col-xs-12 col-sm-12">
              <div style={{borderBottom: "1px solid #E2E2E2", fontSize: 24, paddingBottom: 6, marginBottom: 6}}>参与者 ({this.props.activity.participatorCount})</div>
              <AvatarList participators={this.props.activity.participators} count={this.props.activity.participatorCount}/>
            </div>

            <Dialog
              title="确认报名"
              actions={confirmActions}
              modal={true}
              open={this.state.confirmStatus}
            >
              您是否确认参加{this.props.activity.title}?
            </Dialog>
            <Dialog
              title="报名结果"
              actions={resultActions}
              modal={true}
              open={this.state.resultStatus}
            >
              报名成功
            </Dialog>

            <div className="col-xs-12 col-sm-12" style={{position: "fixed", bottom: 0, padding: 4}}>
              <RaisedButton className="col-xs-12 col-sm-12" label="报名" primary={true} style={{padding: 0}} onClick={() => {this.setState({confirmStatus: true})}}/>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default withTracker((props) => {
  Meteor.subscribe('Activity.one', props.match.params.id);
  return {
    activity: Activities.find({}).fetch()[0],
  }
})(ActivityDetail);
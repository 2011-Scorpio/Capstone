import React from 'react'
import {connect} from 'react-redux'
import {fetchAudioFeat} from '../store/charting'
import {RadarChart, PolarAngleAxis, Radar} from 'recharts'
import {me} from '../store'

class RdrChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  processChartData(chartDataArr) {
    let template = [
      {
        attribute: 'Danceable',
        A: 0,
        fullMark: 100
      },
      {
        attribute: 'Loud',
        A: 0,
        fullMark: 100
      },
      {
        attribute: 'Energetic',
        A: 0,
        fullMark: 100
      },
      {
        attribute: 'Acoustic',
        A: 0,
        fullMark: 100
      },
      {
        attribute: 'Tempo',
        A: 0,
        fullMark: 100
      }
    ]

    chartDataArr.map(song => {
      template[0].A += song.danceability * 100
      template[1].A += song.loudness * -1
      template[2].A += song.energy * 100
      template[3].A += song.acousticness * 100
      template[4].A += song.tempo / 2
    })
    template.map(attribute => {
      attribute.A /= chartDataArr.length
    })

    this.setState({
      data: template
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.addedTrackFeatures !== prevProps.addedTrackFeatures) {
      this.processChartData(this.props.addedTrackFeatures)
    }
  }

  componentDidMount() {
    // this.setState({
    //   data:
    // })
    // await this.props.getUser()
    // await this.props.getUserPlaylist(this.props.token)
    // const trackId = this.props.userTopTracks.items.map(track => {
    //   return track.id
    // })
    // await this.props.getAudioFeat(this.props.token, trackId)
    this.processChartData(this.props.addedTrackFeatures)
  }

  render() {
    return (
      <div>
        {this.props.token ? (
          <div>
            <RadarChart
              cx={300}
              cy={300}
              outerRadius={150}
              width={500}
              height={500}
              data={this.state.data}
            >
              <PolarAngleAxis dataKey="attribute" />
              <Radar
                name="Taste"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </div>
        ) : (
          'Loading...'
        )}
      </div>
    )
  }
}

const mapState = state => ({
  addedTrackFeatures: state.charting.featArrPlayer,
  userTopTracks: state.spotify.playlist,
  audioFeat: state.charting.featArr,
  token: state.user.token
})

const mapDispatch = dispatch => ({
  getUser: () => dispatch(me()),
  getUserPlaylist: token => dispatch(fetchUserPlaylist(token)),
  getAudioFeat: (token, tracks) => dispatch(fetchAudioFeat(token, tracks))
})

export default connect(mapState, mapDispatch)(RdrChart)

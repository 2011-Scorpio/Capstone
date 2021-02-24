import React from 'react'
import {RadarChart, PolarAngleAxis, Radar} from 'recharts'
import BackgroundShape from './BackgroundShape'

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
    if (chartDataArr.length) {
      chartDataArr.map(song => {
        if (!song) return
        template[0].A += song.danceability * 100
        template[1].A += song.loudness * -3
        template[2].A += song.energy * 80
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
  }

  componentDidUpdate(prevProps) {
    let playlistIn = this.props.props
    if (playlistIn !== prevProps.props) {
      this.processChartData(playlistIn)
    }
  }

  render() {
    return (
      <>
        {this.state.data.length ? (
          <div className="rdr-chart fadehalf">
            <h3 className="your-taste dashboard-title">{this.props.title}</h3>
            <RadarChart
              cx={160}
              cy={160}
              outerRadius={90}
              width={320}
              height={320}
              data={this.state.data}
              className="chart-style"
            >
              <PolarAngleAxis dataKey="attribute" />
              <Radar
                name="Taste"
                dataKey="A"
                stroke="#fff"
                fill="#fff"
                fillOpacity={0.6}
              />
            </RadarChart>
          </div>
        ) : (
          <div className="rdr-chart">
            <div>
              <BackgroundShape />
            </div>
          </div>
        )}
      </>
    )
  }
}

export default RdrChart

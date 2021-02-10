import React from 'react'
import {RadarChart, PolarAngleAxis, Radar} from 'recharts'

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

  componentDidUpdate(prevProps) {
    let playlistIn = this.props.props
    if (playlistIn !== prevProps.props) {
      this.processChartData(playlistIn)
    }
  }

  render() {
    return (
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
    )
  }
}

export default RdrChart

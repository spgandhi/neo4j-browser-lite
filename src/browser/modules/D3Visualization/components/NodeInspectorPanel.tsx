import React, { Component } from 'react'
import { Icon, SemanticICONS, Popup } from 'semantic-ui-react'

interface NodeInspectorPanelProps {
  results: JSX.Element
  details: JSX.Element
  hoveredItem: any
  selectedItem: any
}

type NodeInspectorPanelState = any

export class NodeInspectorPanel extends Component<
  NodeInspectorPanelProps,
  NodeInspectorPanelState
> {
  constructor(props: NodeInspectorPanelProps) {
    super(props)
    this.state = {
      expanded: true,
      showResults: true
    }
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps.selectedItem === this.props.selectedItem) {
      return
    }
    if (
      this.props.selectedItem.type === 'node' &&
      (this.props.hoveredItem.type === 'node' ||
        this.props.hoveredItem.type === 'relationship' ||
        this.props.hoveredItem.type === 'canvas') &&
      this.state.showResults
    ) {
      this.setState(() => ({
        showResults: false
      }))
    }
  }

  togglePanel = (isOpen: boolean) => {
    this.setState({
      expanded: isOpen,
      showResults: !(
        this.props.selectedItem.type === 'node' &&
        (this.props.hoveredItem.type === 'node' ||
          this.props.hoveredItem.type === 'relationship' ||
          this.props.hoveredItem.type === 'canvas')
      )
    })
  }

  render() {
    if (!this.state.expanded) {
      return (
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            right: 0,
            top: 0,
            zIndex: 1,
            background: '#FFFFFF',
            color: 'black',
            borderRadius: '2px',
            width: '24px',
            height: '24px',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          onClick={e => {
            e.stopPropagation()
            this.togglePanel(true)
          }}
        >
          <Icon
            title="Click to expand the Node Properties display"
            name="chevron left"
          />
        </div>
      )
    }

    return (
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          right: 0,
          height: 'calc(100% - 39px)',
          top: 0,
          zIndex: 1,
          width: '25%',
          background: '#FFFFFF',
          color: 'black',
          overflowY: 'auto',
          padding: '0 10px'
        }}
        onClick={e => {
          e.preventDefault()
          e.stopPropagation()
        }}
      >
        <div
          style={{
            height: '20px',
            margin: '10px 0 10px 0',
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <div
            style={{
              cursor: 'pointer',
              margin: '0 15px 0 5px',
              borderBottom: `${
                this.state.showResults ? '1px solid #018BFF' : 'none'
              }`,
              fontWeight: this.state.showResults ? 'bold' : 'normal'
            }}
            onClick={e => {
              e.stopPropagation()
              this.setState(() => ({ showResults: true }))
            }}
          >
            Results
          </div>
          <div
            style={{
              cursor: 'pointer',
              margin: '0 5px 0 15px',
              borderBottom: `${
                this.state.showResults ? 'none' : '1px solid #018BFF'
              }`,
              fontWeight: this.state.showResults ? 'normal' : 'bold'
            }}
            onClick={e => {
              e.stopPropagation()
              this.setState(() => ({ showResults: false }))
            }}
          >
            Details
          </div>
          <div
            style={{
              cursor: 'pointer',
              position: 'absolute',
              marginRight: '15px',
              right: 0
            }}
            onClick={e => {
              e.stopPropagation()
              this.togglePanel(false)
            }}
          >
            <Icon name="chevron right" />
          </div>
        </div>
        <div style={{ height: 'inherit' }}>
          {this.state.showResults ? this.props.results : this.props.details}
        </div>
      </div>
    )
  }
}
